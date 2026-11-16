# Mode: scan (find jobs and consultancy calls)

Searches the sources in `config/portals.yml` for one client's targets, or for the weekly roundup.

## For a client

1. Read `profile.yml` → targets (roles, keywords, sub-sectors, employer types, locations, remote OK, contract preferences) and eligibility.
2. Search the relevant sources: global boards first, then the regions the client can work in, then consultancy sources if consultancies are OK.
3. For each result, run **triage** (`modes/evaluate.md` Steps 0 to 2): official link, deadline, gates. Drop anything that fails a gate or has passed the real cut-off (the day before the deadline).
4. Add survivors to `clients/<code>/tracker.md` with status `Spotted`, link, deadline, one-line fit note. Never duplicate an org + role pair.
5. Report: a short ranked list (best 5 to 10), each with why it fits and the deadline. Ask which to evaluate in full.

## Rules

- Respect each site's terms: read pages, never log in for the client, never apply.
- Use generic searches (role, sector, country), never client names or details.
- If a board blocks automated reading, say so and give the coach the search link to open herself.
- Exclude grants (coach decision). Include consultancy calls.
- Watch for scams (fees, personal emails for UN agencies).
