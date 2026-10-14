# AltRisk Academy Website — MVP Prototype

A responsive English-language educational website built with **Next.js 15 + TypeScript + plain CSS + Lucide icons**. Includes seven main navigation sections, six learning paths, six working sample article pages, search-enabled glossary, and links to the existing Streamlit apps.

## Local start

Requirements: Node.js 20 or later.

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Publishing on Vercel

1. Create a new GitHub repository and upload this project's files (not the outer ZIP or `node_modules`).
2. Go to https://vercel.com/new and import the repository.
3. The Next.js framework should be detected automatically. Deploy.
4. In Vercel > Project > Settings > Environment Variables, set `NEXT_PUBLIC_SITE_URL` to the published canonical website URL, such as `https://academy.example.com` (no trailing slash), and redeploy.
5. Verify homepage, article links, `/sitemap.xml`, and `/robots.txt` after publication.

## What works

- Responsive menu and navigation
- Home, Learn, Risk Lab, Challenges, Dictionary, For Educators, About, Articles
- Static learning path routes
- Six real example article routes with original introductory text
- Searchable dictionary with 12 starter terms
- External launches to Streamlit tools
- Metadata, Open Graph, XML sitemap, robots.txt

## Important: prototype scope

- No user accounts, results saving, certificates, grades, database, or analytics yet.
- Some learning tracks are marked as expanding soon.
- The simulated chart on the home page is **illustrative**, not actual investment results.
- Text is educational demonstration content and should receive subject-matter / editorial review before being described as a completed curriculum.
- Never publicly imply contest awards, partnerships, endorsements, or certifications without documentation.
- The existing Streamlit apps launch in a new browser tab. This avoids iframe issues and preserves existing functionality.

## Extend content

Edit `lib/data.ts` for sample lessons, dictionary entries, and learning tracks. Add full article text under `app/articles/[slug]/page.tsx` or migrate to an MDX content workflow as the library grows. Replace `https://example.com` by setting `NEXT_PUBLIC_SITE_URL`.

## Design

Navy #10233F; teal #147D92; clean white/light backgrounds; responsive layout. Main styles are in `app/globals.css`.

Website deployed with Vercel
