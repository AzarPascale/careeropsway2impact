# Mode: evaluate (a job ad or link)

The core of the system. Run when the coach pastes a job ad, a link, or says "evaluate". Uses `config/scoring.yml`, `modes/_shared.md`, `sector/employer-types.md`, `sector/segments.md`, `sector/primer.md`.

**Triage mode:** if the coach says "quick check" or "triage", run Steps 0 to 2 and the Verdict only, in chat, with no files.

---

## Step 0. Get the ad

- If a link: open the official page. If you cannot read it, say "not confirmed open" and ask for the text. Never mark a job closed because a page failed to load.
- If the ad came from an aggregator or LinkedIn, find the employer's own page and use that link.
- Check for scam signs: any fee, bank details, a personal email for a UN agency, "processing" or "visa" payments. If found, stop and report.
- Save the full ad text at the bottom of the report (Archive section).
- Look for an **AI rule** in the ad or on the employer's site (some employers, for example CIVICUS, ban AI-written CVs or letters). Record it in Block A. If AI writing is banned, later drafting modes switch to coaching: structure and feedback only.
- Note how many days are left. Shortlists often start before the deadline, so aim to apply within about 72 hours of spotting a strong match.

## Step 1. Hard gates (before any scoring)

Check every gate in `config/scoring.yml` → `hard_gates` against the client's `profile.yml` → `eligibility`.

For each gate write: **Pass / Fail / Unclear**, the **exact sentence from the ad** that sets the rule, and the client fact you compared it to.

- Any **Fail** → verdict **Not eligible**. Write a short report (Blocks A and G only), add a tracker row with status `Not eligible`, and suggest what kind of post would fit instead.
- **Unclear** on nationality or right to work → ask the coach before going on.
- Required language the client has at a lower level → Fail. "Desirable" language → goes to scoring.

## Step 2. Block A: what this job really is

A table:

| Field | Content |
|---|---|
| Organisation and type | Name + one of the 7 employer types |
| Application system | Inspira, Workday, email... and the output it needs |
| Title, grade, contract | For example P-3, FTA 1 year renewable; NO-B; consultancy 60 days |
| Duty station | City, country, family or non-family, hardship if stated |
| Funding signal | Donor or grant named? "Subject to funding"? Project end date? |
| Deadline | Local time at duty station; real cut-off = the day before |
| Sub-sector and themes | For example WASH, protection, MEAL, cash, climate |
| Who the role works with | Ministries, donors, clusters, partners, communities, private sector |
| **The hiring problem** | One sentence: what problem is this post meant to solve? ("The job title is not the job.") |
| What mandate and donors imply | The profile they probably want, beyond the bullet list |
| TL;DR | One sentence |

## Step 3. Block B: match with the client's CV

Two passes. **First** read only the ad and set the importance of each requirement. **Then** read the client's files and set the match. Never change importance after reading the CV.

| Requirement (ad wording) | Importance | Ad signal | Match | Evidence from client files, or the gap |
|---|---|---|---|---|

- Importance: **essential / important / desirable / low signal.** Use the ad's own split ("required" vs "desirable", "minimum" vs "asset") where it exists.
- Ad signal: **stated** (quote), **structural** (position in the ad, repeated), or **inferred**. An inferred requirement can never be essential.
- Match: **strong / partial / missing.** Evidence must come from `cv.md` or `proof-points.md`, never from memory or story-bank numbers the coach has not confirmed.
- Keep every essential and important row. Cap desirables at 12 rows total.
- Include the organisation's competencies (UN values and behaviours, INGO frameworks) as rows.

## Step 4. Block C: level and strategy

- Ad level vs client's natural level (grade table in `config/scoring.yml`).
- Segment angle (`sector/segments.md`): for B, is this one grade up? For C, does the translation work? For D, is this a bridge or a destination?
- If the client is above the level ("overqualified"): do not shrink the CV; frame the move.

## Step 5. Block D: pay and security

- Salary only from the ad or official scales. Never invent. UN: grade + "post adjustment varies by duty station". INGO: band if stated, national vs international scale.
- Contract length and renewal language.
- Funding security: list each signal from `config/scoring.yml` → `funding_signals` that applies, with the evidence.

## Step 6. Block E: tailoring plan

| Section | Now | Change | Why |
|---|---|---|---|

Then: top 5 CV changes, top 3 LinkedIn changes, which CV format from `library/cv-formats/`, and what the letter must cover. Name any [ADD METRIC] the client should find before drafting.

## Step 7. Block F: interview and test plan

- Likely process for this employer type (test? CBI? language check?).
- 6 to 8 competency stories mapped to the requirements, from `story-bank.md` where possible. Mark new stories needed.
- 3 context questions the client must be ready for (country, programme, funding situation).
- 3 smart questions to ask the panel (for example funding horizon of the post, how the team works with local partners).
- Add any new stories to `story-bank.md` only after the coach confirms the facts.

## Step 8. Block G: is the posting solid?

Observations, not accusations:
- Official page found? Deadline in the future? Reposted (common at the UN, not a red flag)?
- Proposal recruitment ("contingent on award", "key personnel")?
- Organisation recently hit by cuts, freezes or mergers (search once)?
- Description quality: clear duties and reporting line?
- Tier: **Solid / Proceed with caution / Suspicious.**

## Step 9. Score

Score each dimension in `config/scoring.yml` → `weights` from 1 to 5, apply any segment overrides set there, and compute the weighted total (one decimal).

| Dimension | Weight | Score | Evidence | Status (supported / partial / unknown) |
|---|---|---|---|---|

Then: **overall evidence confidence** (high / medium / low) and up to 3 facts that would most change the score if confirmed.

## Step 10. Verdict and risk summary (put this at the top of the report)

- **Verdict:** Apply (priority) / Apply / Consider / Research first / Skip / Not eligible, with one sentence why. Use the segment's threshold.
- **Risk summary:** one row each for eligibility, funding, legitimacy, competition, process cost. Mark "not evaluated" where you did not check.
- If the verdict is below the threshold, still say what would make jobs like this reachable (often a gap-analysis item).

## Step 11. Save

1. Report: `clients/<code>/reports/NNN-<org>-<role-slug>-<YYYY-MM-DD>.md` using `templates/evaluation-report.md`.
2. Tracker row in `clients/<code>/tracker.md` (status `Evaluated` or `Not eligible`), with report link and deadline.
3. Tell the coach in 3 lines: verdict and score, the biggest strength, the biggest gap. Offer next step: "Draft the CV and letter?"
