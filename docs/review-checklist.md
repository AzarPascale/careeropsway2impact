# Review checklist for Kristin

Everything marked **(proposal)** in the repo comes from research, not from you. Go through this list, tick what is right, correct what is not. Tell Claude your answers and it will update the files and `config/coach.yml`.

## A. Basics (decided 17 Nov 2026)
- [x] **Name.** Keep "Impact Career Ops". ("Vital Impact" was a slip.)
- [x] **Who runs it.** Kristin runs it for her clients, one folder per client. No client edition for now.
- [x] **Spelling.** Kristin, with an i. The AIOS repo still says "Kristen" in many files (not changed yet).

## B. Job scoring (`config/scoring.yml`) (decided 17 Nov 2026)
- [x] **Hard gates:** approved as they are.
- [x] **Weights:** approved. CV match 30, funding security 15, contract 10, career trajectory 10, mission fit 10, duty station and security 10, pay 5, process cost 5, competition 5.
- [x] **Segment D:** funding security **not** raised. Stays at 15, same weights as everyone else.
- [x] **Skip threshold:** 4.0, and 3.5 for new grads.

## C. CVs and letters (decided 17 Nov 2026)
- [x] 2 pages for NGO CVs, 3 allowed for senior staff and consultants.
- [x] **Photo:** none for UN, INGO, donor. **Gulf and Middle East corporate and CSR roles: photo permitted and often expected**; include a professional headshot unless the ad says otherwise (`modes/cv.md` §2).
- [x] **"Beneficiaries":** avoid in motivation letters, keep in donor and logframe contexts.
- [x] Avoid list (`sector/language-guide.md` §2): approved as it is. Add words any time.
- [x] **AI rule:** the agent tells you whenever an employer limits AI, and switches to coaching mode.
- [x] **US-funded employers:** mirror how each employer now describes gender and inclusion work, never removing true experience.
- [x] **Sample CV:** a worked UN competency CV built on Orestes Sotta's model is now in `library/cv-formats/un-competency-cv-sample.md` (fictional candidate, none of his text copied).

## D. Process and networking
- [ ] One follow-up only; never contact panel members during a live selection?
- [ ] Apply within about 72 hours of spotting a strong match?
- [ ] To verify if you can: the Inspira 2,000-character limit, and UN roster validity (1 year or 2 to 3 years).

## E. Gap analysis and courses
- [x] Every skill gap gets one free, one affordable (under about USD 300) and one premium option, certificate first. (Your decision, 16 Nov 2026.)
- [ ] Review `sector/courses.md` (about 130 courses in 28 skill areas): anything you would never recommend, or always recommend? Many prices are marked Partial (third-party or unconfirmed); the agent re-checks before quoting. Some tiers have no verified option yet (affordable fundraising, premium GBV, WASH, affordable logistics, anticipatory action, FCDO compliance, an affordable Arabic certificate). Know good ones?

## F. LinkedIn page (`content/strategy.md`, `modes/content/roundup.md`)
- [ ] **Page vs personal profile.** You said you'll post mainly on the Way2Impact page. Your AIOS repo still says the practice launches from your personal profile. Confirm the page is the main channel.
- [ ] **Roundup:** weekly on Tuesday, 8 to 12 roles in 4 groups (early career, mid-career, senior, consultancies), with grade or salary, deadline, official link, and one "Kristin's tip". Jobs and consultancies only, no grants. OK?
- [ ] Do you want a **full list on the website** and a **"submit a role" form** for employers (Raise for Good model)? Both need a page on way2impact.org.
- [ ] **Rhythm:** 3 to 4 posts a week (roundup, vacancy breakdown, before and after, insider explainer or validation) plus monthly data drop, free resource, entry routes. Realistic for your time?
- [ ] **Lead magnets:** sample CV per function, "5 checks before you apply", UN application checklist. Which first?
- [ ] **Credibility line:** the page never claims you sat on panels or worked in HR. It leans on your sector roles, studies, regional coverage and client results. OK?

## G. Things the research could not settle
- Regional job boards marked `check: yes` in `config/portals.yml` were seen only in curated lists.
- thenonprofitcareercoach.org and worktogethertalent.com did not appear in search results; their advice is not included.
- Several Devex and Impactpool claims are search snippets only (marked in the research files).
