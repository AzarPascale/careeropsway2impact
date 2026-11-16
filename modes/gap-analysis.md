# Mode: gap-analysis (with tiered course suggestions)

The first deliverable of the Way2Impact programme (Session 1: gap analysis and positioning). Uses `library/gap-analysis/gap-analysis-framework.md` (the coach's method), `library/gap-analysis/gap-report-template.md`, `sector/courses.md`, `sector/segments.md`.

## 1. Inputs

- Client `profile.yml` (segment, targets, eligibility, constraints, budget for learning), `cv.md`, LinkedIn text if given.
- 3 to 5 **real job ads** for the target roles (the coach pastes them, or run `modes/scan.md` first). The gap analysis is against real ads, not a generic idea of the role.

## 2. Method

1. For each target role, extract requirements from the ads and count how often each appears ("asked in 4 of 5 ads").
2. Compare with the client's evidence: **strong / partial / missing.**
3. Classify each gap:
   - **Eligibility gap** (nationality, right to work, degree, years): cannot be fixed by a course. Redirect to roles or routes that fit.
   - **Evidence gap** (the client has done it but the CV does not show it): fix in the CV, no course needed.
   - **Skill or credential gap**: course, practice project, volunteering or a stretch task at work.
   - **Language gap**: language plan.
   - **Network gap**: outreach plan (`modes/outreach.md`).
4. Prioritise: gaps that appear in most ads and block shortlisting come first. Maximum 5 priority gaps.
5. Positioning statement: one sentence on who the client is for the target employers (the Way2Impact core idea: positioning gets you hired).

## 3. Course suggestions (always three tiers)

For each skill or credential gap, give **one option per tier** from `sector/courses.md`:

| Tier | Meaning |
|---|---|
| **Free** | No cost (a free certificate counts) |
| **Affordable** | Roughly under USD 300 |
| **Premium** | Recognised credential at higher cost |

Rules:
- **Certificate first:** prefer courses that give a certificate, especially credentials named in sector job ads (for example PMD Pro, HEAT, UNDSS BSAFE, CALP, PSEA, MEAL certificates). Not exclusively: a free course without a certificate can be the right first step.
- Match the course to the exact gap and target role, not the general area.
- State time needed, language, and how it will show on the CV ("Certifications" line).
- Respect the client's learning budget in `profile.yml`; still show all three tiers so they can choose.
- Only suggest courses listed in `sector/courses.md` or verified online in this session. Many prices in the catalogue are marked **Partial**: re-check the official page before quoting a price to a client, and never present an unverified price as fact. Mention hidden certificate fees (UN CC:Learn and UNITAR now charge for some certificates).
- If a tier has no verified option for a gap, say so; do not invent a course.
- Do not recommend courses the catalogue marks as unclear or discontinued (for example Philanthropy University, MEASURE Evaluation).
- For newcomers (segment A and C), start from the catalogue's **free starter pack** (BSAFE, PSEA, Sphere and CHS, DisasterReady core humanitarian certification, I Know Gender, one free certificate for the target role, then a PM4NGOs DPro exam).
- Add a practice route where a course alone will not convince (for example "build a sample MEAL plan for a real project and add it to your portfolio").

## 4. Output

Fill `library/gap-analysis/gap-report-template.md` and save to `clients/<code>/output/gap-report-<YYYY-MM-DD>.md`. Then update `profile.yml` → `targets` if the analysis changed them (ask first).
