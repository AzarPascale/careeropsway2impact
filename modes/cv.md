# Mode: cv (tailored CV for one job)

Run after an evaluation (needs a report number) or when the coach asks for a master CV. Uses `library/cv-formats/`, `sector/language-guide.md`, `sector/employer-types.md`.

## 1. Pick the format

| Employer type / system | Format file | Length |
|---|---|---|
| UN via Inspira or agency form | Use `modes/un-form.md` instead (form text), plus a CV only if asked | No page limit on the form |
| UN agency asking for a P11 or CV | `library/cv-formats/un-inspira-and-p11.md`; for a CV, follow the worked example in `library/cv-formats/un-competency-cv-sample.md` | As the form requires; CV 2 pages, 2 to 3 for P-4 and P-5 |
| Large INGO with a named competency framework | `library/cv-formats/un-competency-cv-sample.md` | 2 pages; 3 for senior staff |
| INGO, NGO, foundation | `library/cv-formats/ngo-two-page.md` | 2 pages; 3 for senior staff and consultants |
| EU institutions, EU-funded projects | `library/cv-formats/europass.md` | Europass only where asked |
| CSR, ESG, corporate foundation, Workday/Oracle portals | `library/cv-formats/corporate-csr.md` | 1 to 2 pages, one column |
| Consultancy bid | Topical or functional by expertise area; donor CV template if the tender gives one | As required |

Also read `library/cv-formats/cv-variant-strategy.md` for how master CVs and variants relate.

## 2. Photo and personal data

Default: **no photo, no date of birth, no marital status** for UN, INGO, donor, UK, US, Canada. Germany: photo optional.

**Gulf and Middle East corporate and CSR roles: a photo is permitted and often expected** (coach decision, 17 Nov 2026). Include a professional headshot by default unless the ad asks for no photo or an anonymised application. Place it at the top of page 1 in the body, not in a header, table or text box, so portals can still read the text. Ask the client for a recent, neutral-background photo. This applies to corporate, CSR, ESG and corporate-foundation roles in the region, not to UN or INGO posts there.

Forms that ask for personal data collect it themselves.

## 3. Build it

1. **Header:** name, city and country, email, phone, LinkedIn. Nationalities and work rights only if relevant to eligibility (for example NO posts).
2. **Title line** matching the target role in the ad's words, for example "MEAL Officer | Humanitarian Response | ECHO and BHA-funded programmes".
3. **Profile, 3 to 4 lines:** opens with a one-line **scope statement** (years + function + programme types + budget range + number of countries or operations + reach), then sub-sectors, contexts, donors, languages, and the one result that best answers the hiring problem. The top third of page 1 must answer in about 6 seconds: target role, what the client has done, proof, and that they can do it again here.
4. **Core competencies:** 6 to 10, in the ad's exact terms, only where true. For UN and large INGOs, split into **Technical** (keywords from the vacancy) and **Leadership** (phrased in the agency's own competency framework).
5. **Experience,** reverse order. For each relevant role, 3 to 6 bullets: **action + scale + donor/partners + result.** Pattern: "Managed {donor}-funded {sector} project ({budget}, {n} partners, {n} people in {area}); {result}."
   - Name donors and what the client did for them (proposals, reports, compliance, audits).
   - Name partners and the groups reached.
   - Show efficiency where true (cost per person, time saved, funds raised).
   - One task per bullet. No "Responsible for". Present tense for the current role, past for earlier ones.
   - **Three-question test** for every bullet: Did the client do this personally, or the team or agency? What bottleneck broke or improved? What verifiable number is attached?
   - Weave soft skills into technical bullets; no separate list of adjectives.
   - Translate internal jargon (agency-only system names, acronyms) and spell out acronyms once.
   - Flag national-officer titles that hide international-level work, and make the real scope visible.
   - Never inflate reach; the sector is small and people check.
   - Current role 5 to 8 bullets, older roles 3 to 5, oldest 1 to 3.
6. **Education,** then **certifications and training** (PMD Pro, HEAT, PSEA, CALP...), then **languages** with honest levels, then volunteering if relevant (always for segment A).
7. Put field experience, duty stations and languages where the recruiter sees them in the top half of page 1.
8. **ATS-safe layout** for portals: one column, no tables, text boxes, icons or graphics; standard headings; Calibri or Arial 10 to 11 pt; nothing important in headers or footers; Word or text-based PDF. **Plain-text test:** if the CV pasted into a .txt file reads in a logical order, a portal can parse it.
9. Senior and executive (P-5, D-level, Country Director): scope over tasks; condense older history; for board roles offer a one-page executive bio in the third person instead.

**AI-sameness warning:** AI-polished CVs now all sound alike and get ignored. Push for specific field evidence the client alone can show, not prettier phrasing. If the employer bans AI-written applications, switch to coaching mode: give the client the structure and feedback, and let them write.

## 4. Segment angle

- A: education and volunteering higher; count internships and student projects as experience.
- B: scope, complexity, strategy, government and donor engagement; translate INGO work into the target competencies.
- C: translate every result (`sector/language-guide.md` §1); keep the numbers.
- D: one plain line for the role ending; recent learning visible.

## 5. Checks before handing over

Run `modes/_shared.md` §4 (truth, exact terms, format, language, consistency, stress test). Then list:
- [CONFIRM] and [ADD METRIC] items,
- keywords from the ad now covered, and any essential term still missing (and why: the client may not have it),
- anything you changed from the master CV.

Save to `clients/<code>/output/NNN-cv.md`. Update the tracker to `Drafting`.
