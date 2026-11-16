# Setup guide (no coding needed)

## What you need

1. **Claude Code**: the Code tab in the Claude desktop app (what you are using now) or the terminal version. A paid Claude plan covers it.
2. **This folder** on your computer.
3. Optional, to keep it on GitHub: **GitHub Desktop** (free, point-and-click): https://desktop.github.com

## Daily use

1. Open the Claude desktop app → Code tab → choose this folder (`impact-career-ops`).
2. Type what you want in plain words, for example:
   - "New client K-04"
   - "K-04: evaluate this job" + paste the ad
   - "K-04: write the CV and letter for report 003"
   - "K-04: interview prep for report 003"
   - "This week's roundup"
3. Read the drafts in `clients/K-04/output/`, correct anything, then the client applies.

## Putting it on GitHub (private)

The repo is ready to upload, but git is not installed on this computer yet. The easiest way:

1. Install **GitHub Desktop** and sign in with your GitHub account.
2. File → **Add local repository** → choose this folder. If it says it is not a repository, click **create a repository** here.
3. Click **Publish repository**. Keep **"Keep this code private"** ticked.
4. After any change, open GitHub Desktop, write a short summary, click **Commit**, then **Push**.

`clients/` is excluded automatically (see `.gitignore`), so client files stay on your computer only. Check the list of files GitHub Desktop shows before the first publish: you should see no client folders except `clients/_example`.

## Backups of client files

Client folders are not on GitHub. Back them up the way you back up other client files (your private Drive), in line with the storage you promise in your intake consent.

## Changing the rules

- Scoring weights and thresholds: `config/scoring.yml`
- Your settings and custom rules: `config/coach.yml`
- Job sources: `config/portals.yml`
- How a task works: the file in `modes/`
- Or just tell Claude: "From now on, never use 'beneficiaries' in letters." It will offer to save the rule.
