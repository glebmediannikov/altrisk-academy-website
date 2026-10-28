# AltRisk Academy Articles SEO, AEO, and Schema Audit

## Scope and outcome

The Articles Knowledge Hub now has topic-specific covers and in-article diagrams for all 18 article routes, shared article metadata and authorship presentation, concise direct answers and key takeaways, and a consistent JSON-LD graph. Existing article slugs and the established directory/category architecture are preserved.

The six newest articles were already present before this audit. Their existing content and Batch 2 SVGs were retained; this pass added their direct-answer blocks and reviewed their rendering alongside the 12 older articles.

## Article and illustration inventory

Every article has an original 16:9 cover and at least one explanatory inline SVG. Illustrations use labeled navy/teal/light-blue diagrams, descriptive alt text, and visible captions. Figures have declared dimensions; inline diagrams remain horizontally scrollable and keyboard-focusable on narrow screens so diagram labels are not forced to unreadably small sizes.

| Article | Route | Cover | Inline illustration(s) |
|---|---|---|---|
| What Is Risk? | `/articles/what-is-risk` | Original | Risk framework |
| Risk vs. Uncertainty | `/articles/risk-vs-uncertainty` | Original | Risk/uncertainty comparison |
| What Is Financial Risk? | `/articles/what-is-financial-risk` | Original | Financial-risk map |
| Portfolio Diversification Explained | `/articles/portfolio-diversification` | Original | Hypothetical concentration comparison |
| What Is Market Volatility? | `/articles/market-volatility` | Original | Hypothetical price-path comparison |
| Risk and Return Explained | `/articles/risk-and-return` | Original | Hypothetical outcome ranges |
| What Does a Risk Manager Actually Do? | `/articles/what-does-a-risk-manager-do` | Original | Risk-management cycle |
| How AI Is Transforming Risk Management | `/articles/how-ai-is-transforming-risk-management` | Original | AI governance lifecycle |
| Stress Testing Explained: How Financial Firms Prepare for Market Shocks | `/articles/stress-testing-explained` | Original | Hypothetical rate-shock calculation |
| Risk Dashboards: How Firms Monitor Exposure in Real Time | `/articles/risk-dashboards-real-time-exposure` | Original | Hypothetical exposure/limit dashboard |
| SEC Rule 15c3-5: Understanding Pre-Trade Risk Controls | `/articles/sec-rule-15c3-5-pre-trade-risk-controls` | Original | Securities market-access control flow |
| Model Risk Management: What Changed in 2026? | `/articles/model-risk-management-2026` | Original | Model governance lifecycle |
| Python for Risk Managers: Five Practical Uses | `/articles/python-for-risk-managers-practical-applications` | Original | Data-to-risk-report workflow |
| Monte Carlo Simulation for Financial Risk Management | `/articles/monte-carlo-simulation-financial-risk-management` | Original | Simulated outcome distribution; scenario fan |
| Algorithmic Trading Risk Controls: A Practical Guide | `/articles/algorithmic-trading-risk-controls-explained` | Original | Pre-trade gate, approval/rejection, and monitoring |
| Liquidity Risk: Why Assets May Not Sell Quickly | `/articles/understanding-liquidity-risk` | Original | Bid-ask spread and hypothetical liquidation impact |
| How Machine Learning Detects Financial Risk Anomalies | `/articles/machine-learning-financial-risk-anomalies` | Original | Detection workflow; hypothetical false-positive example |
| VaR vs. Expected Shortfall: Comparing Tail-Risk Measures | `/articles/var-vs-expected-shortfall` | Original | Loss distribution with VaR and expected shortfall |

The Articles directory also has a dedicated original cover. The repository contains 39 SVG assets in the checked article illustration set: 18 article covers, 20 article diagrams, and one directory cover. SVG parsing and path checks passed.

## SEO changes

- Added unique article title and description metadata, canonical URLs without trailing slashes, `index, follow`, Open Graph article metadata, and large-image Twitter cards.
- Article social images use each article's own cover; the directory has a separate cover. Image URLs are absolute in metadata and structured data.
- Aligned each article's JSON-LD description with its rendered meta description; the schema headline remains the visible article title.
- The directory has a descriptive title and summary. The sitemap contains 18 article URLs, and `robots.txt` allows crawling and points to the sitemap.
- Added a hidden directory section heading so article card headings have a logical heading level without changing the visible design.
- No slug changes, redirects, unsupported publication dates, or automatically changing modification dates were introduced.

## AEO and editorial improvements

- Added an “In brief” direct answer near the start of every article, followed by its existing introduction and substantive sections.
- Added visible “Key takeaways” to every article and selected concise FAQs where reader questions were useful. No `FAQPage` markup was added.
- Preserved the articles' worked examples, source lists, existing contextual links, and category-filter behavior. Numerical illustrations are explicitly hypothetical where applicable.
- Added a consistent visible breadcrumb, “By Maria Mediannikova” byline, founder role, student/founder bio, personal-site link, sources/further-reading section, and educational disclaimer.
- Author attribution does not claim professional risk-management employment, regulatory authority, or undocumented qualifications.
- Algorithmic-trading content distinguishes covered securities broker-dealer access under SEC Rule 15c3-5 from the separate CFTC, NFA, and exchange frameworks for futures; it does not describe the SEC rule as a universal futures rule.
- The articles directory and article pages retain internal links to relevant articles, learning paths, and the Risk Lab.

## Structured data

Stable entity IDs are defined in `lib/seo.ts`. The site-wide graph declares one `Organization` (AltRisk Academy), one `WebSite`, and one `Person` (Maria Mediannikova), with the Person linked to `https://mariamediannikova.com/#person` and the Organization.

The Articles directory graph contains:

- `CollectionPage`, with canonical URL, description, language, publisher/site references, and a main-entity link.
- `ItemList`, with 18 canonical article URLs, names, and ordered positions.

Each article graph contains:

- `WebPage`, including its canonical URL, page description, language, site reference, breadcrumb reference, and main-entity reference.
- `BlogPosting`, including headline, description, canonical URL, `mainEntityOfPage`, article section, absolute `ImageObject` URL/dimensions/caption, author reference, and publisher reference.
- `BreadcrumbList`, matching the visible Home → Articles → Article breadcrumb.

No `datePublished` or `dateModified` is emitted because verified dates were unavailable. There are no duplicate Organization, Person, WebSite, BlogPosting, or BreadcrumbList nodes per rendered page, and no FAQPage, rating, review, or unsupported credential data.

## Sources and link checks

All article pages render their source/further-reading links. A check of the 28 distinct external source URLs found valid, relevant page content for 27. The CME Group citation now points directly to `https://www.cmegroup.com/rulebook/CME/`; the page was browser-verified as “CME Rulebook,” although automated retrieval timed out. Author website `https://mariamediannikova.com/` was reachable and identifies Maria as a student and founder.

The reviewed source set includes primary/regulatory and recognized institutional material from FINRA, CFPB, SEC/CFR (Cornell and GovInfo), NFA, the Federal Reserve, OCC, the Basel Committee/BIS, NIST, FSB, Python, NumPy, pandas, and other cited organizations. Link availability does not itself confirm every interpretation or guarantee that a dynamic rule page has not changed; editors should recheck source scope and claims at approval.

Internal link checks covered 24 unique local destinations linked from article pages; all resolved. The 18 article paths were also confirmed in the generated sitemap and returned successful responses.

## Validation results

- `npm.cmd run lint` — passed (`tsc --noEmit`).
- `npm.cmd run build` — passed after the final citation update; all 18 article pages were statically generated without build warnings.
- `git diff --check` — passed.
- All 18 generated production HTML pages and live production HTTP routes — passed: exactly one H1 and canonical per page, unique title and description, valid canonical URL, cover plus inline diagram, descriptive image alt text, and aligned BlogPosting/meta descriptions.
- Actual rendered JSON-LD was parsed from the generated production HTML and live pages, not inferred from source. Every article has exactly one each of Organization, WebSite, Person, BlogPosting, and BreadcrumbList; entity IDs are unique, the BlogPosting author references Maria’s Person entity, and no fabricated dates or FAQPage are present.
- The rendered Articles directory has one CollectionPage and one ItemList with 18 correctly positioned canonical article URLs.
- All 18 unique topic-specific covers and 20 in-article diagrams are referenced in rendered HTML. All 38 referenced SVG URLs returned successful HTTP responses from the production server; the SVG assets parse and have viewBoxes.
- All internal links rendered on article pages resolved to sitemap routes; all 18 existing article slugs match the baseline slug set in `HEAD`.
- All 39 SVGs parsed; referenced illustration paths and case-sensitive asset filenames were checked.
- Responsive spot check at 390px — no page-level horizontal overflow; diagrams use an intentional horizontal scroll region with keyboard focus for readable labels.
- `robots.txt` and `sitemap.xml` — returned successfully; sitemap contains all 18 article routes.

Schema.org graph structure was validated against the implemented requirements locally; the private preview was not submitted to the external Schema.org Validator or Google Rich Results Test.

## Manual editorial review before publication

1. Reconfirm current scope and applicability of the 2026 interagency model-risk guidance and any other changing regulatory references immediately before publication. The article describes supervisory guidance, not a universal statute.
2. Confirm approved publication/update dates with the editor before adding visible dates or date properties to schema.
3. The six foundational articles currently list two sources each; later articles list three to five. The second editorial batch satisfies the original three-to-six source requirement. Decide whether to extend that count consistently across the foundational articles.
4. Complete human editorial and assistive-technology review of factual wording, diagram legibility/contrast, and keyboard/screen-reader experience before approval.

## Final publication-readiness decision

The requested technical publication-readiness checks all pass, including the production build and inspection of actual generated/rendered JSON-LD. No broken article image paths or internal article links were found, and all 18 article slugs are preserved. No technical blocker to publication remains. Editorial approval is still required for the manual review items above; publication dates should only be added once approved.

## Modified and newly created files

Modified:

- `app/articles/[slug]/page.tsx`
- `app/articles/page.tsx`
- `app/globals.css`
- `app/layout.tsx`
- `app/sitemap.ts`
- `components/article-directory.tsx`
- `lib/batch-two-articles.ts` (CME Group citation now targets the specific CME Rulebook)
- `lib/data.ts`
- `lib/hub-articles.ts`
- `lib/seo.ts`

New:

- `ARTICLES_SEO_AEO_SCHEMA_AUDIT.md`
- `lib/article-editorial.ts`
- `public/articles/articles-directory-cover.svg`
- `public/articles/batch-1/ai-risk-cover.svg`
- `public/articles/batch-1/ai-risk-lifecycle.svg`
- `public/articles/batch-1/diversification-cover.svg`
- `public/articles/batch-1/diversification-example.svg`
- `public/articles/batch-1/financial-risk-cover.svg`
- `public/articles/batch-1/financial-risk-map.svg`
- `public/articles/batch-1/market-access-cover.svg`
- `public/articles/batch-1/market-access-flow.svg`
- `public/articles/batch-1/market-volatility-cover.svg`
- `public/articles/batch-1/market-volatility-example.svg`
- `public/articles/batch-1/model-risk-cover.svg`
- `public/articles/batch-1/model-risk-lifecycle.svg`
- `public/articles/batch-1/risk-dashboard-cover.svg`
- `public/articles/batch-1/risk-dashboard-example.svg`
- `public/articles/batch-1/risk-manager-cover.svg`
- `public/articles/batch-1/risk-manager-cycle.svg`
- `public/articles/batch-1/risk-return-cover.svg`
- `public/articles/batch-1/risk-return-example.svg`
- `public/articles/batch-1/risk-vs-uncertainty-comparison.svg`
- `public/articles/batch-1/risk-vs-uncertainty-cover.svg`
- `public/articles/batch-1/stress-test-rate-example.svg`
- `public/articles/batch-1/stress-testing-cover.svg`
- `public/articles/batch-1/what-is-risk-cover.svg`
- `public/articles/batch-1/what-is-risk-framework.svg`

`ARTICLE_SEO_AUDIT.md` was pre-existing and left untouched. No commit or push was made.
