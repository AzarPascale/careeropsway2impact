#!/usr/bin/env node
// ReliefWeb jobs parser for career-ops scan.mjs (local_parser, jobs-json-v1).
//
// Reads ReliefWeb's public jobs RSS feed (no API key needed; the JSON API now
// requires a pre-approved appname). Prints {"jobs":[...]} to stdout.
//
// Usage (from portals.yml, see clients/_template/portals.yml):
//   node impact/parsers/reliefweb.mjs --search "MEAL officer" [--country Jordan] [--type consultancy] [--limit 40]
//
// --search   words as typed in the ReliefWeb search box (required)
// --country  keep only jobs whose country contains this text (repeatable)
// --type     "consultancy" keeps only titles or text mentioning consultant/consultancy;
//            "job" drops them
// --limit    max jobs to print (default 40)
//
// ReliefWeb is a discovery source: reports and roundups must link the
// employer's official apply page (impact/RULES.md section 10).

import https from "node:https";

const args = process.argv.slice(2);
function opt(name, multi = false) {
  const out = [];
  for (let i = 0; i < args.length; i++) {
    if (args[i] === `--${name}` && i + 1 < args.length) out.push(args[i + 1]);
  }
  return multi ? out : out[0];
}

const search = opt('search');
const countries = opt('country', true).map((c) => c.toLowerCase());
const type = (opt('type') || '').toLowerCase();
const limit = Number(opt('limit') || 40);

if (!search) {
  console.error('reliefweb: --search is required');
  process.exit(2);
}

const decode = (s) =>
  s
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&amp;/g, '&');
const strip = (s) => decode(s).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
const field = (desc, label) => {
  const m = desc.match(new RegExp(`${label}:\\s*([^<]+)<`));
  return m ? decode(m[1]).trim() : '';
};

const url = `https://reliefweb.int/jobs/rss.xml?search=${encodeURIComponent(search)}`;
// ReliefWeb's firewall answers 406 to Node's fetch() (it sends browser-style
// sec-fetch headers) and to user agents containing spaces or parentheses.
// Plain node:https with these two headers is accepted; keep it that way.
const headers = {
  'User-Agent': 'impact-career-ops/0.2',
  Accept: 'application/rss+xml, application/xml;q=0.9, */*;q=0.8',
};
function download() {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers, timeout: 30000 }, (res) => {
      if (res.statusCode !== 200) {
        res.resume();
        reject(new Error(`HTTP ${res.statusCode}`));
        return;
      }
      res.setEncoding('utf8');
      let body = '';
      res.on('data', (chunk) => (body += chunk));
      res.on('end', () => resolve(body));
    });
    req.on('timeout', () => req.destroy(new Error('timeout')));
    req.on('error', reject);
  });
}
let xml;
let lastError = '';
for (const wait of [0, 3000, 8000]) {
  if (wait) await new Promise((r) => setTimeout(r, wait));
  try {
    xml = await download();
    break;
  } catch (err) {
    lastError = err.message;
  }
}
if (xml === undefined) {
  console.error(`reliefweb: ${lastError} after 3 tries`);
  process.exit(1);
}

const jobs = [];
for (const item of xml.split('<item>').slice(1)) {
  const get = (tag) => {
    const m = item.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`));
    return m ? m[1] : '';
  };
  const rawTitle = decode(get('title')).trim();
  const link = get('link').trim();
  if (!rawTitle || !link) continue;
  const desc = decode(get('description'));
  const country = field(desc, 'Country');
  const org = field(desc, 'Organization');
  const closing = field(desc, 'Closing date');

  // Feed titles read "Role - City - Organisation"; keep the role part.
  let title = rawTitle;
  if (org && title.endsWith(` - ${org}`)) title = title.slice(0, -(` - ${org}`).length);

  if (countries.length && !countries.some((c) => country.toLowerCase().includes(c))) continue;
  const consult = /consultan/i.test(rawTitle) || /consultan/i.test(strip(desc).slice(0, 400));
  if (type === 'consultancy' && !consult) continue;
  if (type === 'job' && consult) continue;

  jobs.push({
    title: closing ? `${title} [closes ${closing}]` : title,
    url: link,
    company: org || undefined,
    location: country || undefined,
    postedAt: get('pubDate').trim() || undefined,
  });
  if (jobs.length >= limit) break;
}

process.stdout.write(JSON.stringify({ jobs }, null, 2) + '\n');
