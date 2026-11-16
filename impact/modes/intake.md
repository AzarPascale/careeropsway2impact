# Sector overlay: intake (new client)

Creates a client folder, then uses career-ops' own intake to fill it. The full questionnaire the coach uses is `impact/library/gap-analysis/intake-questionnaire.md`.

## Steps

1. Ask the coach for the **client code** (K-01, K-02...). Never use the client's name as the folder name.
2. Run `node impact/scripts/client.mjs new <code>`. This copies `clients/_template/` to `clients/<code>/` and makes it the active data root.
3. **Consent first:** ask whether the client agreed to AI use. Write `consent.ai_use: yes` or `no` and the date in `config/impact.yml`. If no, stop and switch back with `node impact/scripts/client.mjs none`.
4. Fill `config/impact.yml` from the coach's notes or the questionnaire. Ask only for what is missing, in this order:
   - segment (A, B, C, D) and why,
   - target roles (2 to 3), sub-sectors, employer types,
   - **eligibility:** nationalities, countries with right to work, languages and levels, highest degree, years of relevant experience, age if YPP is in play,
   - mobility: duty stations OK, family constraints, non-family or high-risk posts OK?,
   - pay floor and urgency,
   - contract preferences (staff only, consultancy OK),
   - dealbreakers,
   - learning budget (for course tiers).
5. Fill the career-ops files:
   - `config/profile.yml`: name, location, LinkedIn, target roles, `compensation.minimum` (pay floor), `location.authorized_in` (right to work, same as `config/impact.yml`).
   - `modes/_profile.md`: one archetype per target role, in sector words.
   - `portals.yml`: keep the sector sources from the template; set `title_filter.positive` to the client's target roles and keywords.
6. Put the client's CV into `documents/` and run career-ops `modes/intake.md` (`node intake.mjs`) to propose `cv.md` and `article-digest.md`. Or paste the CV text into `cv.md`. Do not improve it yet; it is the source of truth.
7. Propose proof points into `article-digest.md` with "source: CV" and ask the coach to confirm the numbers.
8. Run `node doctor.mjs` and fix anything it reports as missing.
9. Summarise in 5 lines and suggest the next step: "Run the gap analysis?"
