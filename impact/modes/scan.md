# Sector overlay: scan (find jobs and consultancy calls)

Uses career-ops `modes/scan.md` and `scan.mjs` with the client's `portals.yml`, then career-ops `modes/pipeline.md` to evaluate. This file adds the sector sources and rules.

## What scans automatically (no tokens)

The client template's `portals.yml` already has:
- **ReliefWeb**, through `impact/parsers/reliefweb.mjs` (a career-ops local parser reading ReliefWeb's public RSS feed). One entry per search: edit the `--search` words to the client's target roles. Add `--country "Jordan"` or `--type consultancy` where useful.
- **Employers on ATS platforms career-ops already reads** (Workday, SuccessFactors, Oracle, Taleo, Greenhouse, Lever, SmartRecruiters...). Add the client's target employers under `tracked_companies` with their careers URL; run `node discover-ats.mjs` or `node validate-portals.mjs` to check them.

Run: `node scan.mjs` (active client). New results go to `data/pipeline.md`.

## What needs browsing or the coach

The boards in `impact/config/portals.yml` without an automatic route (UN Careers, UNjobs, Impactpool, Devex, regional boards) are searched in agent scan mode (`/career-ops scan`, browsing) or by the coach. If a board blocks automated reading, say so and give the coach the search link.

## Rules

1. Read `config/impact.yml` → targets and eligibility before scanning.
2. Order: global boards, then regions the client can work in, then consultancy sources if consultancies are OK.
3. Triage each result with `impact/modes/evaluate.md` §1 (official link, deadline, gates). Drop anything that fails a gate or has passed the real cut-off.
4. Survivors stay in `data/pipeline.md` with the deadline; never add tracker rows by hand.
5. Report a short ranked list (best 5 to 10), each with why it fits and the deadline. Ask which to evaluate in full (career-ops `pipeline` mode).
6. Respect each site's terms: read pages, never log in for the client, never apply.
7. Search with generic terms (role, sector, country), never client names or details.
8. Exclude grants. Include consultancy calls.
9. Watch for scams (fees, personal emails for UN agencies).

## For the weekly roundup

Coach mode (no client active): `impact/modes/content/roundup.md` uses the same sources across all levels, with no client filter.
