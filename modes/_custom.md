# Custom Instructions: Way2Impact (coach mode)

<!-- Read when no client is active (data root = repo root). Each client folder has its own
     modes/_custom.md with the same first rule. Career-ops updates never touch this file. -->

## House Rules

1. **Sector layer first.** Read `impact/RULES.md` and apply it in every mode, plus the matching overlay in `impact/modes/`.
2. **Which client?** Run `node impact/scripts/client.mjs current`. In coach mode, do only coach-level work (LinkedIn content, weekly roundups, sector research). For client work, switch with `node impact/scripts/client.mjs use <code>` or create one with `new <code>`. Never write client data into the repo root.
3. **Writing.** No em-dashes or en-dashes, no hype words, no saviour framing (`impact/sector/language-guide.md`).
4. **Never submit, send or post.**

## Custom Workflows

- "This week's roundup": `impact/modes/content/roundup.md`.
- "Write a post about X": `impact/modes/content/post.md`.

## Coach-wide rules

Saved in `impact/config/coach.yml` → `custom_rules` (ask the coach first).
