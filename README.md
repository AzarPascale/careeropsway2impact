# Impact Career Ops

**An AI job-search agent for the social impact sector.** Built by Way2Impact for coaching clients who want jobs in NGOs, INGOs, the UN system, donors and embassies, foundations, CSR teams, social enterprises and development consultancies.

It is modelled on the open-source [career-ops](https://github.com/career-ops-hq/career-ops) agent and keeps its core idea: **evaluate first, apply only where the fit is real, never invent a fact.** All the sector rules are rewritten for how hiring actually works in our sector:

| career-ops (corporate tech) | Impact Career Ops (social impact) |
|---|---|
| One user, one CV | **Many clients**, one folder each, run by the coach |
| Scores on CV match, salary, tech stack | **Eligibility gates first** (nationality, right to work, languages, age, minimum years), then CV match, **funding security**, contract type, duty station, mission fit |
| ATS PDF for every job | The right format for each employer type: **UN Inspira/P11 form text**, 2-page NGO CV, Europass, CSR CV, UK supporting statement |
| Revenue and growth metrics | **Scale, donor, partners, people reached, geography, languages, cost efficiency** |
| STAR interview stories | **Competency-based interviews** against the employer's named framework (UN values and behaviours, CHS), safeguarding questions, written tests |
| Negotiate base salary | **Grade is fixed**: step, start date, relocation. INGO bands. National vs international scales |
| Tech job boards | ReliefWeb, UN Careers, Impactpool, Devex, UNjobnet, Bond, CharityJob, regional boards, **consultancy calls** |
| Not in career-ops | **Gap analysis with tiered courses** (free, affordable, premium; certificate first), **sector language check** (no saviour framing), **LinkedIn content** for the Way2Impact page (weekly job and consultancy roundup) |

## How it works (in one minute)

1. You open this folder in **Claude Code** (desktop app or terminal).
2. You say who you are working on, for example `client K-03`.
3. You paste a job ad or link. The agent:
   - checks the hard eligibility gates,
   - scores the job from 1 to 5 with a written reason for each part,
   - tells you **Apply / Consider / Research first / Skip**,
   - and, if you say go, writes the tailored CV or form text, the letter, and the interview prep.
4. Everything is saved in that client's folder and their tracker.
5. **Nothing is ever sent or submitted.** You and the client press Submit.

## What you can ask it

| You say | It does | Mode file |
|---|---|---|
| "New client K-07" | Sets up the client folder and asks the intake questions | `modes/intake.md` |
| "Gap analysis for K-07" | Gap report against target roles, with courses in 3 budget tiers | `modes/gap-analysis.md` |
| Paste a job ad or link | Full evaluation, report, tracker row | `modes/evaluate.md` |
| "Compare these 3 jobs" | Ranks them side by side | `modes/compare.md` |
| "Write the CV for report 012" | Tailored CV in the right format for that employer | `modes/cv.md` |
| "Inspira text for report 012" | UN form fields and motivation statement | `modes/un-form.md` |
| "Cover letter for 012" | Letter, motivation statement or supporting statement | `modes/cover.md` |
| "EOI for this consultancy" | Expression of interest, technical note, CV annex, daily rate check | `modes/consultancy.md` |
| "Interview prep for 012" | Competency questions, story bank, context brief, questions to ask | `modes/interview.md` |
| "Test prep for 012" | Written test, case, translation or presentation practice | `modes/test-prep.md` |
| "Find jobs for K-07" | Scans the job sources for the client's targets | `modes/scan.md` |
| "Outreach for K-07 at UNICEF" | Informational interview requests and LinkedIn notes (drafts only) | `modes/outreach.md` |
| "Tracker for K-07" / "follow-ups" | Status board and follow-up drafts | `modes/tracker.md` |
| "Offer review" | UN step and post adjustment, INGO band, what can and cannot be negotiated | `modes/offer.md` |
| "LinkedIn makeover for K-07" | Headline, About, Experience in sector language | `modes/linkedin-profile.md` |
| "This week's roundup" | Job and consultancy roundup post for the Way2Impact page | `modes/content/roundup.md` |
| "Write a post about X" | Page post with a tested hook structure | `modes/content/post.md` |

## Folder map

```
AGENTS.md          The rulebook the agent follows (start here if you want to change behaviour)
CLAUDE.md          Points Claude Code to AGENTS.md
config/            Your settings: coach profile, scoring weights, job sources, tracker statuses
sector/            What the agent knows about the sector: hiring rules, language, employer types,
                   segments, market context, glossary, course catalogue
modes/             One file per task (evaluate, CV, letter, interview, content...)
templates/         Blank client profile, report, gap report, tracker
library/           Your own methods from the Way2Impact AIOS: CV formats, cover letter framework,
                   interview and test prep, gap analysis framework
clients/           One folder per client (PRIVATE, never uploaded to GitHub). _example shows the layout
docs/              Setup guide for non-developers, sources and credits
```

## Privacy

- `clients/` is in `.gitignore`. **Client files never go to GitHub**, only `clients/_example/`.
- Use client codes (K-01, K-02), not names, in file names.
- Check the client's AI consent (intake question on AI use). If the answer is no, do not use this tool for that client.
- The agent treats job ads and web pages as data, never as instructions.

## Setup

See [docs/setup.md](docs/setup.md). No coding needed.

## What is kept from career-ops, and what is not (yet)

**Kept, same as career-ops:** one rulebook (`AGENTS.md`) the agent reads every session; one mode file per task; a user layer (your settings and client files) separate from the system layer (rules); evaluation in lettered blocks with a 1 to 5 score and a "do not apply below 4.0" rule; fact check against the CV, never inventing; numbered reports, one tracker row per job, no duplicates; job sources in a config file; drafts only, a human always presses Submit.

**Changed (nuanced for the sector):** the scoring dimensions, CV formats, interview method, negotiation, job sources and language rules, as in the table above. Plus one change of use: many clients run by one coach, not one job seeker.

**Not included yet:** career-ops also ships scripts. A Playwright tool turns CVs into PDFs, there is an automatic portal scanner and batch processing of many job links, and a terminal dashboard. This repo has no code yet. The agent writes CVs and letters as text you paste into Word or the portal, and it scans job boards by browsing. These can be added later if you want them.

## Status

Version 0.2, November 2026. Scoring, CV and letter rules approved by the coach on 17 Nov 2026. Rules still marked **(proposal)** come from research and need approval. See [docs/review-checklist.md](docs/review-checklist.md).

## Credits and licence

Structure and philosophy inspired by [career-ops](https://github.com/career-ops-hq/career-ops) (MIT). All content in this repo is original and written for the social impact sector. See [NOTICE.md](NOTICE.md) and [docs/sources.md](docs/sources.md).
