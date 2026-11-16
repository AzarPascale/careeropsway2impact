#!/usr/bin/env node
// Way2Impact client switcher for career-ops.
//
// Each client is a career-ops data root under clients/<code>/. This script
// writes or removes the `.career-ops-data` marker that career-ops'
// path-resolver.mjs reads, so every script and mode works on one client.
//
//   node impact/scripts/client.mjs current      which client is active
//   node impact/scripts/client.mjs list         client folders
//   node impact/scripts/client.mjs use K-03     switch to clients/K-03
//   node impact/scripts/client.mjs new K-07     create clients/K-07 from clients/_template and switch
//   node impact/scripts/client.mjs none         coach mode (no client; data root = repo root)
//
// An exported CAREER_OPS_ROOT or CAREER_OPS_DATA_DIR overrides the marker;
// `current` warns when one is set.

import { cpSync, existsSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');
const CLIENTS = join(ROOT, 'clients');
const MARKER = join(ROOT, '.career-ops-data');
const TEMPLATE = join(CLIENTS, '_template');
const CODE = /^K-\d{2,3}(-[a-z0-9]+)?$/;

const [cmd, code] = process.argv.slice(2);

function active() {
  if (!existsSync(MARKER)) return null;
  const v = readFileSync(MARKER, 'utf8').trim();
  return v || null;
}

function clientDirs() {
  if (!existsSync(CLIENTS)) return [];
  return readdirSync(CLIENTS)
    .filter((n) => !n.startsWith('_') && !n.startsWith('.'))
    .filter((n) => statSync(join(CLIENTS, n)).isDirectory())
    .sort();
}

function requireCode() {
  if (!code || !CODE.test(code)) {
    console.error('Give a client code like K-03 (never a name).');
    process.exit(2);
  }
}

function consentLine(dir) {
  const f = join(dir, 'config', 'impact.yml');
  if (!existsSync(f)) return 'consent: config/impact.yml missing';
  const m = readFileSync(f, 'utf8').match(/^\s*ai_use:\s*([^\s#]+)/m);
  const v = m ? m[1].replace(/["']/g, '') : '';
  return v === 'yes' ? 'consent: AI use yes' : `consent: AI use "${v || 'not set'}" (stop until the coach confirms)`;
}

switch (cmd) {
  case 'current': {
    const env = process.env.CAREER_OPS_ROOT || process.env.CAREER_OPS_DATA_DIR;
    if (env) console.log(`Warning: CAREER_OPS_ROOT/CAREER_OPS_DATA_DIR is set (${env}) and overrides the marker.`);
    const a = active();
    if (!a) {
      console.log('No client active (coach mode). Data root = repo root.');
      break;
    }
    const dir = resolve(ROOT, a);
    console.log(`Active client: ${a}`);
    console.log(existsSync(dir) ? consentLine(dir) : 'Warning: that folder does not exist.');
    break;
  }
  case 'list': {
    const a = active();
    const dirs = clientDirs();
    if (!dirs.length) console.log('No client folders yet. Create one with: node impact/scripts/client.mjs new K-01');
    for (const d of dirs) console.log(`${a === `clients/${d}` ? '*' : ' '} ${d}`);
    break;
  }
  case 'use': {
    requireCode();
    const dir = join(CLIENTS, code);
    if (!existsSync(dir)) {
      console.error(`clients/${code} does not exist. Create it with: node impact/scripts/client.mjs new ${code}`);
      process.exit(1);
    }
    writeFileSync(MARKER, `clients/${code}\n`);
    console.log(`Active client: clients/${code}`);
    console.log(consentLine(dir));
    break;
  }
  case 'new': {
    requireCode();
    const dir = join(CLIENTS, code);
    if (existsSync(dir)) {
      console.error(`clients/${code} already exists. Switch with: node impact/scripts/client.mjs use ${code}`);
      process.exit(1);
    }
    cpSync(TEMPLATE, dir, { recursive: true });
    writeFileSync(MARKER, `clients/${code}\n`);
    console.log(`Created clients/${code} from the template and made it active.`);
    console.log('Next: fill config/impact.yml (consent first), then follow impact/modes/intake.md.');
    break;
  }
  case 'none': {
    if (existsSync(MARKER)) rmSync(MARKER);
    console.log('No client active (coach mode).');
    break;
  }
  default:
    console.log('Usage: node impact/scripts/client.mjs current | list | use <code> | new <code> | none');
    process.exit(cmd ? 2 : 0);
}
