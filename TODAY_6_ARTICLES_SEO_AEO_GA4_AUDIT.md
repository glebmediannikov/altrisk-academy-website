# Today's 6 Articles: SEO, AEO, Structured Data, and GA4 Audit

> **Superseded for publication status.** This report was written when the Batch 3 articles were treated as live. They are now **draft** (`status: 'draft'` in `lib/batch-three-articles.ts`) and are excluded from the article routes, sitemap, and listings unless `ALTRISK_INCLUDE_DRAFT_ARTICLES=true` is set. See [BATCH_3_ARTICLES_AUDIT.md](./BATCH_3_ARTICLES_AUDIT.md) for current status.

## 1. Exact six articles and URLs

| # | Title | Slug | URL | Category |
|---|-------|------|-----|----------|
| 1 | How to Build a Personal Risk Management Plan | `personal-risk-management-plan` | https://altriskacademy.com/articles/personal-risk-management-plan | Everyday Risk |
| 2 | Cybersecurity Risk for Students and Small Businesses | `cybersecurity-risk-students-small-business` | https://altriskacademy.com/articles/cybersecurity-risk-students-small-business | Digital Risk |
| 3 | Business Risk Management for Young Entrepreneurs | `business-risk-management-young-entrepreneurs` | https://altriskacademy.com/articles/business-risk-management-young-entrepreneurs | Business Risk |
| 4 | Climate Risk and Its Impact on Financial Decisions | `climate-risk-financial-decisions` | https://altriskacademy.com/articles/climate-risk-financial-decisions | Global Risk |
| 5 | Behavioral Biases in Financial Decision-Making | `behavioral-biases-financial-decisions` | https://altriskacademy.com/articles/behavioral-biases-financial-decisions | Foundations |
| 6 | How to Stress Test Your Personal Budget | `stress-test-personal-budget` | https://altriskacademy.com/articles/stress-test-personal-budget | Everyday Risk |

## 2. Selection evidence

- The audit documents in the repository cover two completed batches. `RISK_ARTICLES_REVIEW.md` covers Batch 1, and `RISK_ARTICLES_BATCH_2_REVIEW.md` covers Batch 2. Both are already implemented.
- No document in the repository lists a "next batch" or "Batch 3". The planned six could not be identified from the repository alone.
- The six titles and slugs were supplied by the site owner in conversation and confirmed before any content was written. The slugs follow the existing naming style, and no existing URL was changed.

## 3. SEO changes per article

These are new articles, so every item below is new content:

- Each article has a unique `seoTitle` and `seoDescription` in `lib/batch-three-articles.ts`.
- Each article has a `directAnswer` in `lib/article-editorial.ts`.
- Each article has 3–4 sections, one hypothetical worked example labelled as such, key takeaways, related-article links, and learning-path links.
- Sources are limited to pages that were opened and checked during research. Each article cites 2–4 of them. Behavioral Biases has only two.
- Author, publisher, and site metadata come from the existing `pageMetadata` and article template. No credentials, dates, or citations were invented.

## 4. AEO improvements per article

- Each article opens with a self-contained `directAnswer` paragraph, which the template shows near the top.
- Each article has a clear definition of its core term in the introduction or first section.
- Hypothetical figures are labelled as illustrative in the text and in the cover captions.
- No article makes claims that schema or AI search will produce rich results or citations.

## 5. Structured data validation

Verified on the local production build (`next start`) for all six URLs:

- One `BlogPosting` and one `BreadcrumbList` per article.
- No `FAQPage` markup. No FAQ content is visible on these pages, so none was added.
- No `datePublished` or `dateModified`. The repository has no editorial publication-date records, so none were invented.
- The site-wide `Organization`, `WebSite`, and `WebPage` blocks come from the existing layout. Two `WebPage` objects appear on each article page. This predates this work and was not changed.
- Canonical URLs match each route (checked for all six). Open Graph (3 tags) and Twitter card tags are present on all six.

## 6. Illustrations reused or created

Six new original SVG covers were created in `public/articles/batch-3/`, each 1600×900 with a descriptive `<title>`, `<desc>`, and alt text:

- `personal-risk-plan-cover.svg`
- `cyber-basics-cover.svg`
- `business-risk-cover.svg`
- `climate-risk-cover.svg`
- `anchoring-cover.svg`
- `budget-stress-test-cover.svg`

No existing illustrations were reused. All six return HTTP 200.

## 7. GA4 events and triggers

No analytics code was changed. Existing behavior, as read from the code:

- `page_view`: sent from `components/google-analytics.tsx`, which covers every route, including the six new articles.
- `article_engaged`: fired once per content ID at 50% scroll by `components/article-engagement-tracker.tsx`, with a ref guard against repeats.
- `article_related_click`: fired from the related-article links in `app/articles/[slug]/page.tsx`.
- `article_lab_click`: **not implemented**. The article template has only a generic "Explore the interactive Risk Lab" link and no article-specific Risk Lab destination. The brief allows this event only for a genuine per-article Risk Lab link, so it was skipped.

## 8. Consent and duplicate-event checks

Checked by code reading, not in a browser:

- `trackAnalyticsEvent` in `lib/analytics.ts` sends an event only when consent is `granted` in localStorage, the `ga-disable` flag is unset, and `gtag` is present.
- Only one GA4 tag is initialized, in `components/google-analytics.tsx`. No article adds a second one.
- Events send only content IDs, categories, and topics. No free-text or personal input is sent.

**Not tested:** live consent behavior, duplicate counts in a browser, and real GA4 collection. Those require a browser session with consent set and GA4 DebugView access.

## 9. Sitemap and indexing-readiness checks

- All six URLs appear in the sitemap response from the local production server (`/sitemap.xml`). The sitemap is built from the `lessons` list, so it picks them up automatically.
- Robots directives were not separately audited beyond confirming the sitemap is served.
- Internal related links resolve: `/articles/personal-risk-management-plan`, `/articles/stress-testing-explained`, and `/articles/understanding-liquidity-risk` all return 200. Every related slug used in the new records exists in the build.
- Sitemap presence does **not** mean Google has indexed these pages. Indexing status must be checked in Google Search Console after deployment.

## 10. Test results

| Check | Result |
|-------|--------|
| `npm.cmd run build` | Passed. All six article routes generated. |
| `npm.cmd run lint` (`tsc --noEmit`) | Passed. |
| `git diff --check` | Passed (tracked files). |
| Trailing whitespace in new files | None. |
| Six article URLs | HTTP 200 each. |
| Canonical, OG, Twitter tags | Present and correct for all six. |
| Sitemap entries | All six present. |
| Six cover SVGs | HTTP 200 each. |
| Horizontal overflow, 1440 / 390 / 320px | 0px on all six articles at all three widths. |
| Cover image loads, same widths | Loaded on all six; rendered 814px, 324px, and 253px wide. |
| Visual check, 390px | Layout clean and nothing cropped (one screenshot). |

Lint is a `tsc --noEmit` script, not a separate linter. The GA4 checks above were code-level only.

## 11. Files modified

Created:
- `lib/batch-three-articles.ts`
- `public/articles/batch-3/personal-risk-plan-cover.svg`
- `public/articles/batch-3/cyber-basics-cover.svg`
- `public/articles/batch-3/business-risk-cover.svg`
- `public/articles/batch-3/climate-risk-cover.svg`
- `public/articles/batch-3/anchoring-cover.svg`
- `public/articles/batch-3/budget-stress-test-cover.svg`
- `TODAY_6_ARTICLES_SEO_AEO_GA4_AUDIT.md`

Modified:
- `lib/article-editorial.ts`: six `directAnswer` entries added.
- `lib/hub-articles.ts`: imports `batchThreeArticles` and includes it in `hubArticles`.

Not modified: analytics, consent, sitemap, metadata, and article template code. The existing uncommitted changes in `README.md` and `app/articles/page.tsx` were left as they were. Nothing was committed or pushed.

## 12. Remaining issues and recommendations

1. **Behavioral Biases has only two sources.** Only the St. Louis Fed anchoring explainer and a CFPB page were verified. Editorial review is needed before any further claims about other biases are added.
2. **Mobile label size on the covers.** The covers are 1600px wide. At a 390px viewport they render about 324px wide, so the smallest labels are around 6px. The captions and alt text carry the same information, but the labels themselves are not fully legible on mobile. Enlarging the labels or simplifying the covers would fix this and is a reasonable next task.
3. **No publication dates.** `datePublished` and `dateModified` are absent. Add them only when real editorial dates exist.
4. **Two `WebPage` JSON-LD objects per article.** This comes from the existing layout and was left unchanged. It should be reviewed in a separate change.
5. **`article_lab_click` not implemented.** Add it only if a specific article gains a genuine link to a Risk Lab activity.
6. **GA4 production verification not performed.** Consent, duplicate, and event behavior should be confirmed with GA4 DebugView on the live site.
7. **Indexing not confirmed.** Submit the sitemap in Google Search Console and monitor indexing. Sitemap presence alone does not mean Google has indexed these pages.
