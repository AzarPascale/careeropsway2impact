# Clients

One folder per client, named by code only (K-01, K-02...). Each folder is a career-ops **data root**: it holds that client's CV, profile, tracker, reports and PDFs.

- Create: `node impact/scripts/client.mjs new K-07` (copies `_template/`)
- Switch: `node impact/scripts/client.mjs use K-07`
- Check: `node impact/scripts/client.mjs current`

Everything here except `_template/`, `K-00-example/` (fictional) and this README is excluded from GitHub by `.gitignore`. Client data stays on this computer; back it up with `node backup.mjs` (career-ops) to a private location.
