# Batch 3 Articles: Draft Audit Report

Status: **all six articles are drafts** pending editorial review. They are not linked from any published article, are excluded from the article routes, sitemap, and listings by default, and have not been committed or pushed.

## 1. Articles and status

| # | Title | Slug | Category | Status |
|---|-------|------|----------|--------|
| 1 | How to Build a Personal Risk Management Plan | `personal-risk-management-plan` | Everyday Risk | Draft |
| 2 | Cybersecurity Risk for Students and Small Businesses | `cybersecurity-risk-students-small-business` | Digital Risk | Draft |
| 3 | Business Risk Management for Young Entrepreneurs | `business-risk-management-young-entrepreneurs` | Business Risk | Draft |
| 4 | Climate Risk and Its Impact on Financial Decisions | `climate-risk-financial-decisions` | Global Risk | Draft |
| 5 | Behavioral Biases in Financial Decision-Making | `behavioral-biases-financial-decisions` | Foundations | Draft |
| 6 | How to Stress Test Your Personal Budget | `stress-test-personal-budget` | Everyday Risk | Draft |

Slugs and titles match the batch confirmed earlier. No slugs were changed.

## 2. Draft exposure control

- **Type:** `status?: 'draft' | 'published'` added to `Article` in [hub-articles.ts](/C:/Users/User/Documents/GitHub/altrisk-academy-website-1/lib/hub-articles.ts).
- **Records:** `status: 'draft'` on all six entries in [batch-three-articles.ts](/C:/Users/User/Documents/GitHub/altrisk-academy-website-1/lib/batch-three-articles.ts).
- **Filter:** `hubArticles` drops drafts before `enhanceArticle` unless `ALTRISK_INCLUDE_DRAFT_ARTICLES=true` is set at build time.
- **Why this covers every surface:** the article routes, `generateStaticParams`, [sitemap.ts](/C:/Users/User/Documents/GitHub/altrisk-academy-website-1/app/sitemap.ts), the articles and learn listings, and the homepage all read `lessons`, which is built from `hubArticles`. No other code imports `batchThreeArticles` directly.

Verified on a local production server (`npm.cmd run start`):

| Check | Default build | Flag build (`ALTRISK_INCLUDE_DRAFT_ARTICLES=true`) |
|-------|---------------|-----------------------------------------------------|
| Six draft URLs | 404 for all six | Behavioral article returns 200 with its diagram and the Fed source |
| `/sitemap.xml` contains draft slugs | No | Not checked |
| `/articles` listing contains draft titles | No | Not checked |
| Published sample `/articles/what-is-risk` | 200 | Not checked |
| Diagram SVG `/articles/batch-3/anchoring-pause-steps-diagram.svg` | Not checked | 200 |

The flag build is for internal preview only. Do not set it in production.

## 3. Sources

Each article has 3–5 sources. All URLs listed below were checked with curl or web_fetch. Claims were compared against page text where noted.

| Article | Sources | Verification notes |
|---------|---------|--------------------|
| Personal risk plan | Ready.gov Financial Preparedness; FDIC "Saving for the Unexpected"; CFPB Consumer Tools | Ready.gov text confirmed (emergency savings, small bills, insurance review). FDIC text confirmed: "at least six months of living expenses in a federally insured product". **CFPB claim corrected**: the Consumer Tools page does not describe a personal "financial well-being questionnaire". The sentence now says the page lists free resources for reviewing your own finances. |
| Cybersecurity | CISA MFA guidance; CISA phishing guidance; SBA cybersecurity guidance; plus others in the record | CISA MFA: "significantly less likely" wording and the MFA forms confirmed. **Corrected**: "intercepted" removed. CISA phishing page does not mention gift cards or wire transfers, so that claim was removed. The phone-confirmation rule is now labeled as a suggested practice. SBA cybersecurity page confirms regular backups; the claim that files should be checked for recovery is not on that page and was removed. The direct answer was changed from "tested backups" to "regular backups". |
| Business risk | SBA emergency planning; SBA insurance; SBA legal compliance; Ready.gov Business Continuity | SBA emergency planning confirmed: the 25% figure ("25% of businesses won't open again after a disaster") and the step to assess risk. **Corrected**: the unsupported "business insurance begins with assessing your risks" claim was removed. SBA legal compliance covers state filings, federal tax obligations, and licenses or permits; the draft's "employment rules" wording was removed. Ready.gov is described as covering continuity, crisis communications, emergency response, and IT disaster recovery. |
| Climate risk | EPA "Climate Risks and Opportunities Defined"; plus 2 others in the record | EPA page confirmed: physical risks and transition risks are defined as described in the draft. |
| Behavioral biases | Federal Reserve Bank of St. Louis, Page One Economics "The Anchoring Effect"; CFPB "Financial Knowledge and Decision-Making Skills"; **Federal Reserve Board FEDS 2007-048**, "Anchoring Bias in Consensus Forecasts and its Effect on Market Prices" (Campbell and Sharpe, April 2007) | The FEDS paper is research on forecasts, not consumer guidance, and the source description says so. **Corrected**: the CFPB wording is now "help people weigh options and make informed choices". The FEDS paper is described as preliminary, and the draft now notes the consensus-forecast bias finding. The CFPB URL was updated to `educator-tool`. Rejected: investor.gov glossary pages and a FINRA Foundation PDF, because their text could not be read for verification. |
| Stress test | FDIC "Saving for the Unexpected"; CFPB "Your Money, Your Goals Toolkit"; Ready.gov Financial Preparedness | FDIC confirmed: "at least six months … in a federally insured product", with job loss and major home or car repair as purposes. Wording changed to "in a federally insured product". **Corrected**: the Jordan example's broken string concatenation was split into two paragraphs. The CFPB toolkit URL now uses the final address (`educator-tool`, which the old `educator-tools` path redirects to). The toolkit's own content was not separately quoted. |

Sources that returned 403 or transient errors to curl were confirmed with web_fetch instead: NGFS and the St. Louis Fed anchoring page.

## 4. Illustrations

Each article has a cover SVG (1600×900) from the earlier pass and one new in-article SVG (1000×620) in the Batch 2 pattern. The in-article SVGs are attached through `illustrations`, with `afterSection` set to an existing section heading.

| Article | In-article SVG | Placed after section |
|---------|----------------|----------------------|
| Personal risk plan | `personal-risk-matrix-diagram.svg` (3×3 impact and likelihood grid) | 2. Rate each risk by likelihood and impact |
| Cybersecurity | `cyber-mfa-layers-diagram.svg` (password, code or app, access) | 1. Protect accounts with multi-factor authentication |
| Business risk | `business-cash-reserve-diagram.svg` (0, 1, 3, and 6 months of expenses) | 2. Build a cash reserve |
| Climate risk | `climate-three-questions-diagram.svg` (physical, transition, personal check) | 3. Using climate risk in financial decisions |
| Behavioral biases | `anchoring-pause-steps-diagram.svg` (three-step pause) | A simple check to slow down |
| Stress test | `budget-setback-gap-diagram.svg` ($1,800 gap, $1,200 fund, $600 shortfall, hypothetical) | 3. Compare the gap with your emergency fund |

All figures are labeled hypothetical in the captions or in the SVG text. In the final QA pass, the in-article SVG labels were enlarged to 36–52 units in the 1000-unit viewBox. At a 340px display width, the 40-unit labels render at about 13px, and at 288px they render at about 11–12px.

Cover SVGs (1600×900) were also rewritten in the final QA pass. Labels were enlarged, and small decorative text was removed. At 340px, the 1600-unit covers scale to about 0.21, so the body labels are about 12px. The budget stress-test cover previously had a shortfall bar that overflowed its card. It was moved up and re-verified in the browser at 340px. The anchoring cover, which is the behavioral article's cover, was also checked at 340px.

## 5. Structured data

- The article template already emits WebPage, BlogPosting, and BreadcrumbList JSON-LD. This pass changed none of that.
- No `datePublished` or `dateModified` is set, because no editorial dates exist in the repository. Do not add them until real dates are confirmed.
- No author credentials were added. The records carry no author fields.
- No `faqs` field is set on any Batch 3 record, so no FAQPage markup is emitted.
- Schema markup does not guarantee rich results or AI search visibility.

## 6. GA4 and consent

- No analytics code was changed. `page_view`, `article_engaged`, and `article_related_click` keep their existing behavior.
- Source audit (no runtime test): `trackAnalyticsEvent` in [lib/analytics.ts](/C:/Users/User/Documents/GitHub/altrisk-academy-website-1/lib/analytics.ts) returns early unless localStorage `altrisk-analytics-consent` is `granted`. `page_view` is sent from [components/google-analytics.tsx](/C:/Users/User/Documents/GitHub/altrisk-academy-website-1/components/google-analytics.tsx), which renders only in production with consent and dedupes by path. `article_engaged` is sent once per article from [components/article-engagement-tracker.tsx](/C:/Users/User/Documents/GitHub/altrisk-academy-website-1/components/article-engagement-tracker.tsx), guarded by a ref.
- All five Batch 3 categories (Everyday Risk, Digital Risk, Business Risk, Global Risk, Foundations) map to analytics topics in `getAnalyticsTopic`, so `article_engaged` will not throw for these articles.
- No Batch 3 article links to a Risk Lab activity, so `article_lab_click` is not implemented. This is correct under the "real links only" rule.
- Draft articles are excluded from the default build, so they cannot fire events in production.
- **Not done:** a browser test of consent gating and event counts on the draft routes. The GA4 init component renders only in production builds, so this needs a production server, a consent value in localStorage, and a network or `dataLayer` check. These results would be local tests only, not GA4 production verification. This is still open.
- No second GA4 tag was introduced.

## 7. Checks run

- `npm.cmd run lint` (`tsc --noEmit`): passes after the final edits.
- `npm.cmd run build` (default): passes with 40 static pages. Batch 3 routes are not generated.
- Sitemap check on the default build output: none of the six draft slugs appear in `sitemap.xml`. A broad grep matched only `stress-testing-explained`, an existing published article.
- Draft slug grep across `.next/server/app`: no matches, so no draft routes or listings were generated.
- `npm.cmd run build` with `ALTRISK_INCLUDE_DRAFT_ARTICLES=true`: passed in an earlier pass. Not repeated in the final QA pass.
- `git diff --check`: passes.
- Trailing-whitespace scan on the Batch 3 cover and diagram folder and `batch-three-articles.ts`: clean.
- Browser checks at 340px: all six diagrams and the budget and cyber diagrams at 288px, plus the budget and anchoring covers. These were run through HTML wrappers, not on the real article pages.

Not run: a browser-based check of the real Batch 3 article pages at 1440, 768, 390, and 320px. Also not run: a runtime GA4 consent and duplicate-event test.

## 8. Files changed in this pass

- [lib/batch-three-articles.ts](/C:/Users/User/Documents/GitHub/altrisk-academy-website-1/lib/batch-three-articles.ts): `status: 'draft'` on six records. Source-accuracy corrections (section 3). Broken string split in the stress-test example. CFPB toolkit URL updated.
- [lib/article-editorial.ts](/C:/Users/User/Documents/GitHub/altrisk-academy-website-1/lib/article-editorial.ts): cybersecurity direct answer changed from "tested backups" to "regular backups".
- [lib/hub-articles.ts](/C:/Users/User/Documents/GitHub/altrisk-academy-website-1/lib/hub-articles.ts): `status` field and draft filter.
- `public/articles/batch-3/`: six cover SVGs (1600×900) and six in-article SVGs (1000×620), rewritten with larger labels and less text (section 4).
- [TODAY_6_ARTICLES_SEO_AEO_GA4_AUDIT.md](/C:/Users/User/Documents/GitHub/altrisk-academy-website-1/TODAY_6_ARTICLES_SEO_AEO_GA4_AUDIT.md): superseded note added at the top.
- This file: `BATCH_3_ARTICLES_AUDIT.md`.

Not changed: other pages, homepage, cookie consent, GA4 configuration, and the pre-existing modified files (`README.md`, `app/articles/page.tsx`).

Generated, untracked, and not part of the deliverable: `tsconfig.tsbuildinfo`, created by the TypeScript check. Delete it before committing.

## 8a. SEO and AEO audit

| Article | Title (chars) | Description (chars) | H1 | Direct answer | Canonical and OG | Notes |
|---------|---------------|---------------------|----|---------------|------------------|-------|
| Personal risk plan | How to Build a Personal Risk Management Plan (44) | 127 | Article title | Yes, in `article-editorial.ts` | Set by the shared `generateMetadata` and `pageMetadata` | Unique description |
| Cybersecurity | Cybersecurity Risk for Students and Small Businesses (52) | 136 | Article title | Yes; revised in this pass | Shared | Unique description |
| Business risk | Business Risk Management for Young Entrepreneurs (48) | 125 | Article title | Yes | Shared | Unique description |
| Climate risk | Climate Risk and Financial Decisions: A Plain-Language Guide (60) | 137 | Article title | Yes | Shared | Unique description |
| Behavioral biases | Behavioral Biases in Financial Decisions: Anchoring Explained (61) | 130 | Article title | Yes | Shared | Title is one character over 60; consider shortening |
| Stress test | How to Stress Test Your Personal Budget (39) | 130 | Article title | Yes | Shared | Unique description |

- Canonical URLs are built from `SITE_URL` and the article slug in [app/articles/[slug]/page.tsx](/C:/Users/User/Documents/GitHub/altrisk-academy-website-1/app/articles/[slug]/page.tsx). Open Graph and Twitter metadata come from the shared `pageMetadata` helper. Batch 3 has no per-article override.
- JSON-LD on each article: WebPage, BlogPosting, and BreadcrumbList, from the shared template. No dates, author credentials, or FAQ markup are added. This is consistent with the sources and editorial records.
- Internal links: a script check confirmed that every slug referenced by `relatedArticles` and `learningPaths` in `lib/` resolves to an existing record.
- Titles are 39–61 characters and descriptions are 125–137 characters. Schema markup does not guarantee rich results or AI search visibility.


## 9. Open issues and recommendations

1. **Editorial review is required** before any article is published. Claims were checked against source pages only where noted in section 3.
2. **Cover and diagram labels:** resolved for the SVGs at 340px and 288px in the HTML wrapper tests (section 4). Real article-page layout at 390px and 320px is still to be checked.
3. **Browser testing on real pages:** still open. Check the six article pages at 1440, 768, 390, and 320px for cropping, overflow, and overlap before approval.
4. **GA4 runtime test:** still open. Run a production build with consent set, then confirm `page_view` fires once per route, `article_engaged` fires once after the halfway point, nothing fires before consent, and `article_related_click` fires on related links. Label it as a local test, not GA4 production verification.
5. **Claims still needing an editor's sign-off:** the business and stress-test direct answers and some general practice advice, such as the 6-month reserve guidance in the business article, are editorial guidance rather than quotes from the sources. Mark them as guidance in review.
6. **Title length:** the behavioral title is 61 characters. Shorten it if the editor prefers titles under 60.
7. **Publication steps when approved:** set `status: 'published'` (or remove the field), confirm dates and author information, then re-run the sitemap and listing checks. Only then should links to these articles be added from published articles.
8. **Flag exposure:** `ALTRISK_INCLUDE_DRAFT_ARTICLES` should be unset in production and in any deploy environment.
9. **Idle research agent:** a research agent (`588394cb-d8eb-474e-b6c5-c7f9adf9b7e1`) is still idle. It has no effect on the repository.
10. **Changes are uncommitted.** Nothing was committed or pushed.

## 10. Publication-readiness assessment

**Status: not ready to publish.** All six articles remain in `draft` status.

- Ready: draft gating works. The six drafts are absent from the default build, the sitemap, and the listings. Lint, build, and `git diff --check` pass. The source-accuracy corrections are applied. All in-article SVGs and covers were checked at 340px, and the budget and cyber diagrams at 288px.
- Blocking before publication: editorial review and sign-off on the claims in section 3, real-page layout tests at four widths, and a runtime GA4 consent and duplicate-event test.
- Not claimed: no Google indexing, rich results, or AI search visibility is claimed or implied. No GA4 production results are reported.

## 11. Final pre-publication validation

Status remains **draft** for all six articles. Nothing was committed, pushed, or published.

### 11.1 What was run

- **Preview build** with `ALTRISK_INCLUDE_DRAFT_ARTICLES=true`: passed, 46 static pages. Served locally on `localhost:3000`. All six draft routes returned HTTP 200.
- **Layout fix:** on phones, in-article diagrams were forced to `width: 960px` inside a horizontal scroll box (`app/globals.css`, the 650px media query). At 390px the diagram was 340px wide, so the user saw only fragments. The rule was removed, so diagrams now fit the figure width like the covers. Labels are 36–52 units on a 1000-unit viewBox, which is about 12–18px at 340px, so text stays readable. The preview was rebuilt after this change.
- **Automated layout check (Playwright, real pages, all six articles, 1440/768/390/320px):** no document horizontal overflow at any width (`scrollWidth` is at or below `innerWidth` at every width measured). No image extends past the viewport, and no image is wider than its figure. Every cover and diagram loads with `naturalWidth > 0` and has alt text (12 images in total at 390px). Each article has one H1.
- **Visual check (screenshots):** only the personal-risk diagram at 390px and 320px was checked by screenshot. The other five were checked with the automated check above, not by eye.
- **GA4 mocked browser test (not GA4 production verification):** `gtag` was stubbed with `addInitScript`. Requests to `googletagmanager.com` and `google-analytics.com` were aborted, except `gtag/js`, which was answered locally with an empty script so `Script.onReady` fires. No event reached the live property. Results on `personal-risk-management-plan`:
  - Before consent: 0 events.
  - After consent on load: `page_view` ×1 (`page_path=/articles/personal-risk-management-plan`).
  - Scrolling to the midpoint and back: `article_engaged` ×1 with `content_id=personal-risk-management-plan`, `content_type=article`, `topic=everyday_risk`, `engagement_threshold=50_percent`.
  - Related-article click: `article_related_click` ×1 with `content_id=stress-test-personal-budget`, `content_type=article`, `topic=everyday_risk`, then `page_view` ×1 for the new route.
  - After consent set to `denied`: 0 events.
  - `article_lab_click` was not tested because it is not implemented (no Batch 3 link goes to a Risk Lab activity).
  - Not tested: the other five routes at runtime. They use the same components, but this is not verified for them.
- **Production build** (no flag): passed, 40 pages. The compiled server output and `sitemap.xml.body` contain no draft slugs (grep returned no matches for any of the six).
- **Checks:** `npm.cmd run lint` (`tsc --noEmit`) passed. `git diff --check` passed. `tsconfig.tsbuildinfo` was removed (untracked).

### 11.2 Per-article result

Technical result covers layout, images, and headings. Publication result is the editorial gate.

| # | Article (draft slug) | Layout 1440/768/390/320 | Images and alt | GA4 (mocked) | Publication |
|---|---|---|---|---|---|
| 1 | personal-risk-management-plan | PASS (automated and screenshot) | PASS | PASS (mocked) | FAIL: editorial sign-off outstanding |
| 2 | cybersecurity-risk-students-small-business | PASS (automated) | PASS | Not run | FAIL: editorial sign-off outstanding; GA4 runtime not run |
| 3 | business-risk-management-young-entrepreneurs | PASS (automated) | PASS | Not run | FAIL: editorial sign-off outstanding (6-month reserve guidance, direct answer); GA4 runtime not run |
| 4 | climate-risk-financial-decisions | PASS (automated) | PASS | Not run | FAIL: editorial sign-off outstanding; GA4 runtime not run |
| 5 | behavioral-biases-financial-decisions | PASS (automated) | PASS | Not run | FAIL: editorial sign-off outstanding; title is 61 characters; GA4 runtime not run |
| 6 | stress-test-personal-budget | PASS (automated) | PASS | Not run | FAIL: editorial sign-off outstanding; GA4 runtime not run |

### 11.3 Remaining blockers

1. **Editorial sign-off** on the claims in section 3, including the business and stress-test direct answers and general guidance (for example the 6-month reserve).
2. **Visual review** of the five articles not inspected by screenshot (covers and diagrams at 390px and 320px).
3. **GA4 runtime test** for the other five routes. The mocked test covered only one article pair.
4. **Behavioral title** is 61 characters. Shorten it if the editor requires under 60.
5. **Minor:** the diagram subtitle at 320px is about 9px. It is legible but small. Review if the editor wants larger type.

### 11.4 Readiness

**Not ready to publish.** Layout, image loading, draft exclusion, and mocked analytics behavior pass. Publication is blocked by editorial sign-off and the blockers above. No GA4 production verification was performed, and no test events were sent to the live property.

## 12. Publication blocker pass

All six articles remain **draft**. Nothing was committed, pushed, or published. Blocker 4 in section 11.3 is resolved: the behavioral SEO title is now 57 characters ("Behavioral Biases in Money Decisions: Anchoring Explained").

### 12.1 Changes in this pass

- **Factual corrections** (`lib/batch-three-articles.ts`):
  - Anchoring: the claim that an initial number can anchor "even when it is not relevant" is not in the St. Louis Fed source. It was changed to "a reference point that shapes later judgments."
  - Stress test: the diagram now matches the text ($2,600 gap, $2,400 fund, $200 shortfall). It previously showed $1,800 / $1,200 / $600, which contradicted Jordan's example.
  - Earlier in this pass: CISA MFA, CISA phishing, SBA backup, EPA physical-risk, NGFS, and FEDS wording were corrected to match the sources.
- **Diagram text:** cyber MFA footer 36→44 units; personal-risk matrix subtitle 36→40 units; stress-test setback diagram subtitle 44 units.
- **Title:** behavioral SEO title shortened to 57 characters.

### 12.2 Source checks

| Claim | Source checked | Result |
|---|---|---|
| Anchoring is the tendency to rely heavily on the first information received | [St. Louis Fed Page One](https://www.stlouisfed.org/publications/page-one-economics/2021/04/01/the-anchoring-effect) | Supported |
| CFPB skills "help people weigh options and make informed choices" | [CFPB financial knowledge page](https://www.consumerfinance.gov/consumer-tools/educator-tool/youth-financial-education/learn/financial-knowledge-decision-making-skills/) | Supported. The "applying that habit" sentence is our editorial application, not the CFPB's. |
| Ready.gov: emergency savings plus property, health, and life insurance | [Ready.gov financial preparedness](https://www.ready.gov/financial-preparedness) | Supported |
| Ready.gov business continuity, crisis communications, emergency response, IT recovery | [Ready.gov business emergency plans](https://www.ready.gov/business/emergency-plans) | Supported |
| FDIC: experts generally recommend about six months of living expenses in savings | FDIC consumer guidance (checked earlier in this pass) | Supported as a general rule of thumb |

### 12.3 Mocked GA4 results for the other five routes

Method: the same mocked approach as section 11.1. Test events were captured in the browser; none were sent to the live property. Each route was tested in a single browser session.

| Article | Before consent | After consent | Midpoint | Related click | After revoke |
|---|---|---|---|---|---|
| cybersecurity-risk-students-small-business | 0 | `page_view` ×1 | `article_engaged` ×1 (`topic=digital_risk`) | `article_related_click` ×1 (`content_id=machine-learning-financial-risk-anomalies`), `page_view` ×1 | 0 |
| business-risk-management-young-entrepreneurs | 0 | `page_view` ×1 | `article_engaged` ×1 (`topic=business_risk`) | `article_related_click` ×1 (`content_id=risk-dashboards-real-time-exposure`), `page_view` ×1 | 0 |
| climate-risk-financial-decisions | 0 | `page_view` ×1 | `article_engaged` ×1 (`topic=global_risk`) | `article_related_click` ×1 (`content_id=stress-testing-explained`), `page_view` ×1 | 0 |
| behavioral-biases-financial-decisions | 0 | `page_view` ×1 | `article_engaged` ×1 (`topic=foundations`) | `article_related_click` ×1 (`content_id=understanding-liquidity-risk`), `page_view` ×1 | 0 |
| stress-test-personal-budget | 0 | `page_view` ×1 | `article_engaged` ×1 (`topic=everyday_risk`) | `article_related_click` ×1 (`content_id=personal-risk-management-plan`), `page_view` ×1 | 0 |

Limitations: the midpoint check scrolled past the midpoint and did not confirm that the event stays silent before it. That was tested on `personal-risk-management-plan` in section 11.1. The related-link click used the first link. Clicks on the second link after revoke confirmed no events.

### 12.4 Mobile layout (390px and 320px)

- No horizontal document overflow at 390px or 320px for any of the six articles.
- Every cover and in-article diagram loaded (`naturalWidth` > 0) at both widths. Each image is inside its figure (for example 253px in a 271px figure at 320px).
- Behavioral article: checked at both widths, no overflow.
- One screenshot at 320px, of the stress-test setback diagram. The text was too small in the captured image to read every digit at that scale. The SVG source is correct. A closer visual review remains on the editorial checklist.
- Diagram subtitles at 320px are about 9–10px. They are small but legible; further enlargement would crowd the diagrams.

### 12.5 Items requiring human editorial approval

1. General guidance, not sourced: the 6-month reserve recommendation for individuals and the business one-month fixed-cost reserve target. Both are labeled as general rules of thumb in the text and need editor approval.
2. Business article's "separate personal and business finances" and quarterly review steps: editorial guidance, not from a cited source.
3. Stress-test steps (reduce a discretionary cost, increase savings, change deductibles): editorial guidance.
4. Climate scenario assumptions: the article uses scenario framing from the Fed and EPA. The editor should confirm the scenario wording and the physical-risk examples are acceptable.
5. Cybersecurity recommendations (MFA, phishing, weekly backups "if possible"): wording follows CISA and SBA; the editor should confirm the emphasis.
6. Visual sign-off on the covers and diagrams at 320px, including the 9–10px subtitles.
7. Still not performed: GA4 production verification on the live property. Mocked tests only.

### 12.6 Checks

- `npm.cmd run lint` (`tsc --noEmit`): passed.
- `npm.cmd run build` without the draft flag: passed, 40 pages. No draft slugs in the sitemap or HTML output.
- `git diff --check`: passed.
- Preview server stopped. No temporary test files created in the repo.

**Status (pre-publication):** all six were drafts. Not ready to publish until items 12.5.1–12.5.7 are approved.

## 13. Publication Release

Editorial approval was confirmed by the user. The six articles were changed from `status: 'draft'` to `status: 'published'` in [lib/batch-three-articles.ts](lib/batch-three-articles.ts). The `ALTRISK_INCLUDE_DRAFT_ARTICLES` flag remains available for future drafts.

### 13.1 Published articles

| Slug | Route |
|---|---|
| personal-risk-management-plan | /articles/personal-risk-management-plan |
| cybersecurity-risk-students-small-business | /articles/cybersecurity-risk-students-small-business |
| business-risk-management-young-entrepreneurs | /articles/business-risk-management-young-entrepreneurs |
| climate-risk-financial-decisions | /articles/climate-risk-financial-decisions |
| behavioral-biases-financial-decisions | /articles/behavioral-biases-financial-decisions |
| stress-test-personal-budget | /articles/stress-test-personal-budget |

### 13.2 Verification (normal production build, no draft flag)

- `npm.cmd run build`: passed. The `/articles/[slug]` route lists 24 paths.
- `npm.cmd run start`: all six routes return HTTP 200. The control route `/articles/what-is-risk` also returns HTTP 200.
- `/articles` directory: `numberOfItems` is 24.
- `/sitemap.xml`: 24 article URLs, including all six.
- Each route has one `<h1>`, a canonical URL that matches its slug (`https://altriskacademy.com/articles/<slug>`), `og:title`, `BlogPosting` JSON-LD, and `BreadcrumbList` JSON-LD.
- Related-article and learning-path targets resolve to existing non-draft articles. The external targets are `stress-testing-explained`, `understanding-liquidity-risk`, `machine-learning-financial-risk-anomalies`, `risk-dashboards-real-time-exposure`, and `how-ai-is-transforming-risk-management`.
- `npm.cmd run lint` (`tsc --noEmit`): passed.
- `git diff --check`: passed.
- A first `next start` returned HTTP 500 for every article route because `.next` was stale (`Cannot find module './vendor-chunks/lucide-react.js'`). Clearing `.next` and rebuilding fixed it. This was a local build-artifact issue, not a content issue.

### 13.3 Missing dates (needs confirmation)

No `datePublished` or `dateModified` is present in the Batch 3 records or the JSON-LD. The existing articles do not emit them either, and no approved source for these dates was found in the repository. These dates were not invented. Google's Article guidance recommends `datePublished` and `dateModified`. Please confirm the publication date and the source for `dateModified` before adding them.

### 13.4 Remaining items

- GA4 production verification on the live property is still not performed. The GA4 code paths for these routes were not changed in this step. Mocked tests from section 12 remain the only browser-level evidence.
- Editorial items in 12.5 (reserve guidance, business separation steps, stress-test steps, climate scenario wording, cybersecurity emphasis) still need human sign-off as recorded.
- Earlier uncommitted changes not part of this release step and needing review before commit: `README.md`, `app/articles/page.tsx`, `app/globals.css`.

### 13.5 Files for the release

Modified: `lib/batch-three-articles.ts` (status), `lib/hub-articles.ts` (Batch 3 integration and draft gate), `lib/article-editorial.ts` (Batch 3 direct answers), `app/globals.css` (diagram mobile fix), `app/articles/page.tsx`, `README.md`, `BATCH_3_ARTICLES_AUDIT.md`.

Untracked: `lib/batch-three-articles.ts`, `public/articles/batch-3/` (SVG covers and diagrams), `BATCH_3_ARTICLES_AUDIT.md`, `ARTICLE_SEO_AUDIT.md`, `TODAY_6_ARTICLES_SEO_AEO_GA4_AUDIT.md`, `.env.example`.

Not committed or pushed.
