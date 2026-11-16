# Mode: intake (new client)

Sets up a client folder. The full questionnaire the coach uses is `library/gap-analysis/intake-questionnaire.md`; this mode turns the answers into the files the agent needs.

## Steps

1. Ask the coach for the **client code** (K-01, K-02...). Never use the client's name as the folder name.
2. Create `clients/<code>/` by copying `clients/_example/` (profile.yml, cv.md, proof-points.md, story-bank.md, tracker.md, reports/, output/, documents/).
3. **Consent first:** ask whether the client agreed to AI use (intake questionnaire). Write `consent.ai_use: yes/no` and the date. If no, stop.
4. Fill `profile.yml` from the coach's notes or the questionnaire. Ask only for what is missing, in this order:
   - segment (A, B, C, D) and why,
   - target roles (2 to 3), sub-sectors, employer types,
   - **eligibility:** nationalities, countries with right to work, languages and levels, highest degree, years of relevant experience, age if YPP is in play,
   - mobility: duty stations OK, family situation constraints, non-family or high-risk posts OK?,
   - pay floor and urgency (how soon they need income),
   - contract preferences (staff only, consultancy OK),
   - dealbreakers,
   - learning budget (for course tiers),
   - CV and LinkedIn received?
5. Put the client's CV text into `cv.md` (the coach pastes it, or you read a file in `clients/<code>/documents/`). Do not improve it yet; it is the source of truth.
6. Propose proof points from the CV into `proof-points.md` with "source: CV" and ask the coach to confirm numbers.
7. Summarise in 5 lines and suggest the next step: "Run the gap analysis?"
