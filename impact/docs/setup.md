# Setup and daily use (no coding needed)

## One-time setup

1. Install **Node.js** (version 22.13 or later) from nodejs.org, and **Git** (git-scm.com). Both are already on this computer.
2. Open a terminal in this folder and run:

   ```bash
   npm install
   ```

   ```bash
   npx playwright install chromium
   ```

   The first installs career-ops' tools; the second downloads the browser it uses for CV PDFs. If that download stalls, skip it: each client folder has a `.env` with `CAREER_OPS_BROWSER_AUTODETECT=true`, so career-ops uses Edge or Chrome instead (tested on this computer, 17 Nov 2026).
3. Open the folder in **Claude Code** (desktop app, Code tab). Claude reads `CLAUDE.md`, career-ops' `AGENTS.md`, then `impact/RULES.md`.
4. Optional: `npm run doctor` checks the setup.

## Daily use

| You want to | Say to Claude, or run |
|---|---|
| Start a new client | "New client K-07" (runs `node impact/scripts/client.mjs new K-07`, then the intake) |
| Work on a client | "Client K-03" (switches with `node impact/scripts/client.mjs use K-03`) |
| See who is active | `node impact/scripts/client.mjs current` |
| Evaluate a job | Paste the ad or link |
| Find jobs | "Find jobs for K-03" (runs `node scan.mjs` with the client's sources, then the pipeline) |
| CV or letter | "CV for report 012", "cover letter for 012", "Inspira text for 012" |
| Interview or test prep | "Interview prep for 012", "test prep for 012" |
| Gap analysis | "Gap analysis for K-03" |
| Tracker | "Tracker", or `npm run tracker` |
| Weekly roundup | `node impact/scripts/client.mjs none`, then "this week's roundup" |
| See everything in a browser | `npm run ui` (career-ops web UI, works on the active client) |

Nothing is ever sent or submitted. You and the client press Submit.

## Keeping client data safe

- Client folders stay on this computer; GitHub only gets the template and the fictional example.
- Back up client folders to a private place: `node backup.mjs --dest <folder>` (career-ops; see `docs/BACKUP_STRATEGIES.md`). Do not use a shared or public folder.

## Saving changes to GitHub

The repo is private on GitHub (AzarPascale/careeropsway2impact). After changing rules or files, ask Claude: "commit and push". Client folders are never included.

## Updating career-ops

`npm run update:check` shows if career-ops has a new release; `npm run update` installs it. It replaces only career-ops files. The Way2Impact layer (`impact/`, `clients/`, `modes/_custom.md`, `NOTICE.md`) is protected by `config/local-paths.txt`. After an update, ask Claude to check that `README.md` and `CLAUDE.md` still have the Way2Impact versions.
