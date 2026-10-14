# AltRisk Academy 2.0 — Design & Branding Update

Production website: https://altriskacademy.com  
Repository: https://github.com/glebmediannikov/altrisk-academy-website

This release is based on the **previous FIXED MVP**, not the broken original ZIP. Existing routes and Streamlit integrations are preserved.

## Version 2.0 improvements

- Updated navy / teal brand styling and responsive finishing touches
- New AltRisk shield/A favicon (`app/icon.svg`)
- Enhanced homepage with featured dictionary term and educator section
- More useful Risk Lab cards: steps, skills, learner level, launch links
- Keyboard skip link and reduced-motion preference support
- Canonical metadata base defaults to `https://altriskacademy.com`
- Transparent planned-vs-available language for learning paths

## Safe deployment to existing GitHub + Vercel site

1. Back up your current `main` branch; preferably create a `redesign-v2` branch.
2. Upload **the contents** of this archive preserving all subdirectories. The files must sit in the repository root alongside `package.json`.
3. Use a Vercel Preview deployment to review changes **before merging** to `main`.
4. Verify the homepage, Learn, Risk Lab, Articles, Dictionary, mobile navigation, and all Streamlit launch links.
5. Merge to `main` only after a successful build and review. Existing Vercel Git integration handles publication.

## Run locally

Requires Node.js 20 or later:

```bash
npm install
npm run lint
npm run build
npm run dev
```

No secrets should be committed. `.env.example` is a template.

**Scope note:** This is a design and presentation release. It does not implement accounts, credentials, scoring, certificates, or new simulator logic.
