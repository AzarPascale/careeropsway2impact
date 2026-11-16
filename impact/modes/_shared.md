# Shared context for every mode

Read this before any mode. It holds the sector logic every task depends on.

## 1. The four client segments

Every client has one main segment in `config/impact.yml`. It changes scoring, tone and strategy. Full detail: `impact/sector/segments.md`.

| Code | Segment | Core problem | What the agent leans on |
|---|---|---|---|
| A | **New grads** (breaking in) | No paid sector experience, entry posts scarce | Volunteering, internships, studies, field exposure, languages; entry routes (UNV, NO-A, paid internships, YPP, JPO, local NGOs, fellowships) |
| B | **Moving up** | Stuck at one level, or INGO to UN | Scope and complexity, donors, teams, budgets; one grade up, not two |
| C | **Shifters** (corporate to impact) | Speaks corporate, not sector | Translation of results into sector terms; CSR, foundations, banks, fundraising, partnerships, ICT, finance, compliance roles |
| D | **Repositioning** (cut in the funding crisis) | Role gone, market shrunk, morale low | Adjacent sub-sectors, growing funders and functions, consultancies as bridges, redundancy explained plainly |

## 2. The seven employer types

Each needs a different format, tone and process. Full detail: `impact/sector/employer-types.md`.

1. **UN system** (Secretariat, funds, programmes, agencies): online form (Inspira PHP, P11), competency framework, written test, CBI panel, grades.
2. **INGOs and federations** (IRC, NRC, Save the Children, Oxfam, MSF, Red Cross/Crescent): 2-page CV, tailored letter, technical test, panel, safeguarding checks.
3. **Local and national NGOs, CBOs**: shorter process, local language often required, context knowledge, often direct email.
4. **Donors, embassies, development agencies** (FCDO, EU, GIZ, USAID legacy, embassies): anonymised or form-based, local right-to-work rules, security vetting.
5. **Foundations and philanthropy**: mission fit, writing quality, smaller teams, network matters.
6. **CSR, ESG and corporate foundations**: corporate ATS CV, business language plus impact, photo permitted for Gulf and Middle East roles (`impact/modes/cv.md` §2).
7. **Consultancies, contractors and social enterprises** (DAI, Chemonics, Palladium, research firms, B Corps): proposal-driven, CVs as bid annexes, daily rates, speed.

## 3. Sector logic you always apply

- **Eligibility before fit.** Nationality, right to work, required languages, minimum degree and years, age limits, contract category. A failed gate is "not eligible", not a low score.
- **The job title is not the job.** Read the ad for the real mix of work and the problem the post exists to solve: who the role works with (ministries, donors, partners, communities), which donor funds it, what changed recently.
- **Evidence beats passion.** Every claim of fit needs a result with scale: budget, donor, partners, people reached, geography, languages, cost or time saved.
- **Mandate and donor tell you the profile.** Ask what the organisation's mandate, current strategy and main donors imply about the candidate they want.
- **Register depends on the reader.** Donor and UN forms use technical terms (logframe, outputs, beneficiaries). Values and motivation text avoids charity framing. Rights-based organisations prefer "rights-holders".
- **Humility plus ownership.** Credit the team, then state the client's own role clearly ("I" not "we" for their part).
- **Funding security matters.** Look for the donor, grant end date, "subject to funding", single-donor dependency.
- **Timelines are long.** UN 3 to 9 months. Plan parallel applications; silence is normal.

## 4. Quality checks before you hand over any draft

1. Every fact traces to the client's files or the coach's confirmation. List [CONFIRM] and [ADD METRIC] items at the end.
2. The advert's exact terms and named competencies appear where true.
3. Format matches the employer type and the advert's instructions (form, page limit, character limit, language).
4. No hype words, no saviour framing, no em-dashes or en-dashes (`impact/sector/language-guide.md`).
5. Dates, titles and employers are identical across CV, form, letter and LinkedIn.
6. **Stress test:** read it as a hiring manager shortlisting 200 applications. What would make you reject it? Fix that, then say what you fixed.

## 5. Score bands and verdicts

| Score | Verdict | Meaning |
|---|---|---|
| 4.5 to 5.0 | **Apply** (priority) | Strong fit; draft everything |
| 4.0 to 4.4 | **Apply** | Good fit; tailor carefully |
| 3.5 to 3.9 | **Consider** | Apply only if the segment threshold allows (A) or the job is strategic |
| 3.0 to 3.4 | **Research first** | Find the missing facts before investing time |
| below 3.0 | **Skip** | Explain why, and suggest what would make this kind of job reachable |
| Gate failed | **Not eligible** | Name the gate and the sentence in the ad that sets it |

Weights and thresholds live in `impact/config/scoring.yml`.
