# Sector overlay: evaluate (on top of career-ops `modes/oferta.md`)

Run career-ops `modes/oferta.md` exactly as written: liveness gate, report blocks A to H, Verdict (lead), Risk Summary, Score Evidence, Keywords, archived job description, Machine Summary, tracker TSV and `merge-tracker.mjs`. This file adds what the social impact sector needs inside those steps. It never changes the report's headings or the Machine Summary fields, because scripts read them.

Uses `impact/config/scoring.yml`, `impact/sector/employer-types.md`, `impact/sector/segments.md`, `impact/sector/primer.md`, and the client's `config/impact.yml`.

**Triage** (career-ops `modes/triage.md`): run §1 below and stop at the verdict.

---

## 1. Before Block A: sector gates

Add these to career-ops' dealbreaker gate.

1. **Scam check:** any fee, bank details, a personal email address for a UN agency, "processing" or "visa" payments. If found, stop and report.
2. **Official page:** if the ad came from an aggregator (ReliefWeb, UNjobs, Impactpool, LinkedIn), find the employer's own page and use that link in the report.
3. **Hard eligibility gates** from `impact/config/scoring.yml` → `hard_gates`, checked against `config/impact.yml` → `eligibility`. For each: **Pass / Fail / Unclear**, the exact sentence from the ad, the client fact compared.
   - Any **Fail** = career-ops hard stop: `final_decision: Skip`. Write Blocks A and G only, start the Verdict with "Not eligible: <gate>", tracker status `SKIP` with the same note, and suggest what kind of post would fit instead.
   - **Unclear** on nationality or right to work: ask the coach before going on.
   - A required language the client has at a lower level is a Fail. A "desirable" language goes to scoring.
4. **AI rule:** look for an employer rule on AI in applications (some ban AI-written CVs or letters). Record it in Block A. If AI writing is banned, later drafting switches to coaching mode.
5. **Timing:** days left to the deadline (duty station local time; real cut-off is the day before). Shortlisting often starts early, so aim to apply within about 72 hours of spotting a strong match.

## 2. Inside the career-ops blocks

**Block A (Role Summary): add these rows**

| Field | Content |
|---|---|
| Employer type | One of the 7 in `impact/sector/employer-types.md` |
| Application system | Inspira, Workday, SuccessFactors, email... and the output it needs (form text, CV format) |
| Grade and contract | For example P-3, FTA 1 year renewable; NO-B; G-6; consultancy 60 days |
| Duty station | City, country, family or non-family, hardship if stated |
| Funding signal | Donor or grant named? "Subject to funding"? Project end date? |
| Sub-sector and themes | WASH, protection, MEAL, cash, climate... |
| Who the role works with | Ministries, donors, clusters, partners, communities, private sector |
| **The hiring problem** | One sentence: what problem is this post meant to solve? ("The job title is not the job.") |
| What mandate and donors imply | The profile they probably want, beyond the bullet list |

Career-ops' geo-mismatch and work-authorization checks still run; the sector gates above are stricter for NO and G posts.

**Block B (Match with CV):** keep career-ops' two-pass rule (importance first, from the ad alone; match second, from the client's files). Add the organisation's named competencies (UN Values and Behaviours, UNICEF, WHO, INGO frameworks, CHS) as rows. Evidence comes only from `cv.md` and `article-digest.md`.

**Block C (Level and Strategy):** compare the ad's grade with the client's natural level (grade guide in `impact/config/scoring.yml` → `hard_gates.minimum_education_and_years`). Apply the segment angle (`impact/sector/segments.md`): B, one grade up?; C, does the translation work?; D, bridge or destination? If the client is above the level, do not shrink the CV; frame the move.

**Block D (Comp and Demand):** salary only from the ad or official scales, never invented.
- UN: grade, plus "post adjustment varies by duty station" (ICSC scales). The grade is fixed; step and some allowances are negotiable later (`impact/modes/offer.md`).
- INGO: band if stated; national vs international scale.
- Consultancy: daily rate against the bands in `impact/sector/research/05` §5.
- Contract length and renewal language.
- **Funding security:** list each signal from `impact/config/scoring.yml` → `funding_signals` that applies, with the evidence.
- Write `advertised_comp` in the Machine Summary verbatim from the ad, or `null`.

**Block E (Customization Plan):** name the CV format from `impact/modes/cv.md` §1 (UN form text, UN competency CV, 2-page NGO CV, Europass, CSR CV, consultancy CV), the top 5 CV changes, the top 3 LinkedIn changes, what the letter must cover, and the [ADD METRIC] items to collect first.

**Block F (Interview Plan):** the likely process for this employer type (written test? CBI? language check? assessment centre?). 6 to 8 competency stories mapped to the requirements, from `interview-prep/story-bank.md` where possible. 3 context questions the client must be ready for (country, programme, funding). 3 questions to ask the panel (for example the funding horizon of the post).

**Block G (Posting Legitimacy):** add: official page found? Reposted (common at the UN, not a red flag)? Proposal recruitment ("contingent on award", "key personnel")? Organisation recently hit by cuts, freezes or mergers (search once)?

## 3. Scoring

Follow `impact/RULES.md` §7. In Score Evidence, show:

| Dimension | Weight | Score 1 to 5 | Evidence | Status (supported / partial / unknown) |
|---|---|---|---|---|

Then the Global Score (one decimal), the career-ops evidence confidence, and up to 3 facts that would most change the score. Segment A: 3.5 to 3.9 = "Consider, segment A threshold met".

## 4. After the report

Tell the coach in 3 lines: verdict and score, the biggest strength, the biggest gap. Offer the next step: "Draft the CV and letter?" If the verdict is below the threshold, say what would make jobs like this reachable (often a gap-analysis item).
