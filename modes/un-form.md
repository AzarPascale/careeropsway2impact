# Mode: un-form (Inspira PHP, P11, agency portals)

In the UN system the online form is the application. An attached CV may not be read at screening. Uses `library/cv-formats/un-inspira-and-p11.md`, `library/interview-and-tests/un-competency-based-interviews.md`, `sector/research/05` §1.2 and §2.

## 1. Before drafting

- Confirm the gates passed (evaluation Step 1). No form text for posts where minimums are not met.
- Check the grade against the client's years (`config/scoring.yml` → minimum years).
- Note the competencies and values named in the job opening. Every text field should map to them.

## 2. The master profile (once per client)

Keep one master profile in `clients/<code>/output/un-master-profile.md`, then tailor a copy per post. Fields to prepare:

- Legal name and **every nationality** exactly as on the passport.
- **Every month accounted for**, including gaps (one line each).
- For each job: title, employer, dates, part-time percentage, **supervisor name and contact** (ask the coach; never invent), **reason for leaving**, last salary where asked, number and type of staff supervised, duties and achievements.
- Education: unfinished degrees shown as **ongoing**, never completed.
- Languages rated separately for reading, writing, speaking, understanding. Honest levels; languages are tested.
- References (often 3) ready with consent.

## 3. Per-post tailoring

For each relevant job entry, rewrite the duties and achievements field:
- Lead with the work that matches the job opening's responsibilities, in its exact words where true.
- Each entry shows scale, donors, partners, results.
- Keep dates, titles and employers identical to the CV and LinkedIn.

## 4. Motivation statement

- Respect the field limit (reported 2,000 characters on Inspira: **verify on the live form**). Count characters and report the count.
- 3 to 4 short paragraphs: (1) why this post and this agency's mandate, in one specific line; (2) and (3) two or three requirements or competencies, each with one concrete example and result; (4) what the client offers the team now.
- What the client offers, not their dream of working for the UN.
- No saviour framing; no clichés.

## 5. Screening questions

- Answer yes/no questions truthfully; they are usually eliminatory.
- Text answers: one point, one example, consistent with the form.

## 6. Output

Save `clients/<code>/output/NNN-un-form.md` with each field labelled as on the portal, ready to paste, plus character counts and the [CONFIRM] list. Remind the coach: the client pastes and submits; the agent never logs in to Inspira.
