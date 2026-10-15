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

## Google Analytics

Google Analytics 4 uses the official `@next/third-parties/google` integration and is restricted to production builds. A first-party consent banner offers equally accessible Decline and Accept Analytics actions; analytics stays disabled unless the visitor explicitly opts in. The Footer's Privacy Settings control reopens the choice. Google Signals and advertising personalization are disabled, and no user ID is configured.

The preference is stored in `localStorage` under `altrisk-analytics-consent`. Declining or revoking consent disables future GA collection and attempts to remove accessible first-party Google Analytics cookies for the current host and the site's `altriskacademy.com` domain. Browser restrictions can prevent deletion of cookies outside the current path/domain or otherwise inaccessible to JavaScript. Revocation does not erase data Google has already received. These settings apply only to this Next.js website; no analytics has been added to Streamlit applications.

**Scope note:** This is a design and presentation release. It does not implement accounts, credentials, scoring, certificates, or new simulator logic.
