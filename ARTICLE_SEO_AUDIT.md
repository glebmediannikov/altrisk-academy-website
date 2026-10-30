# AltRisk Academy Article SEO, E-E-A-T, and Editorial Credibility Audit

**Audit date:** 2026-10-26  
**Scope:** The six published articles linked from `/articles`, their shared App Router template, metadata and structured-data helpers, sitewide author and organization entities, and article-related internal links. This is an audit only; no application code or article content was changed.

> **Implementation follow-up (2026-10-27):** The editorial recommendations below were subsequently implemented in the six article records and shared article template. The original article-by-article observations describe the pre-implementation baseline. Verified sources, touched files, and remaining limitations are recorded in [Implementation follow-up](#implementation-follow-up).

## Summary

- The articles index contains six articles. Each has a distinct title and excerpt, and each article route generates a route-specific canonical URL, Open Graph URL, and `BlogPosting` JSON-LD.
- All six pages visibly identify Maria Mediannikova as author and link to `https://mariamediannikova.com/`. The JSON-LD author reference uses `https://mariamediannikova.com/#person`; the portfolio currently publishes a `Person` entity with that exact ID. The site's `Organization` publisher and founder references are connected to the shared entities.
- No publication or modification dates were found in the article data or template. The article pages do not display dates and their JSON-LD does not assert `datePublished` or `dateModified`. Do not add dates unless an authoritative editorial record is located.
- No external references or citations appear in the six articles. The article-specific prose (definition, example, and takeaway) is brief: approximately 46–68 words per article, excluding the shared questions, callout headings, and CTA. This limits the reader's ability to assess evidence, scope, and reasoning.
- The articles contain no claims of Maria's professional credentials or licenses. The current byline is transparent but gives little article-page context about the author's student and financial-literacy-advocacy background.
- Each article links back to the index, to Risk Lab, and to three “Keep exploring” articles. Those three related links are selected by array order rather than topic, so later investing articles receive foundational links instead of the most relevant investing articles. There is no direct article-body link to a learning path.
- Article layout uses a constrained reading width, responsive heading and body sizes, semantic article/headings, and a single-column related-links layout at smaller breakpoints. This is a positive source-level review; no separate device/browser usability test was performed.
- No Critical or High-severity factual safety issue was identified in this first-pass review. The main concerns are **Medium**: absent authoritative sourcing and limited depth across a financial-education article set. Per-article clarifications are noted below.

## Severity definitions

- **Critical:** Materially dangerous or demonstrably false financial information.
- **High:** Significant misleading claim, fabricated authority/date/source, or important schema/identity failure.
- **Medium:** A meaningful shortcoming in evidence, clarity, context, or discoverability that should be addressed editorially.
- **Low:** Optional enhancement or minor optimization; no material reader harm identified.

## Article-by-article findings

| Article | Author, metadata, canonical, and schema | Editorial accuracy, evidence, and internal links | Severity |
|---|---|---|---|
| [What Is Risk?](https://altriskacademy.com/articles/what-is-risk) — source: [lib/data.ts](./lib/data.ts) | Visible “By Maria Mediannikova” byline links to the correct portfolio. Unique title and excerpt generate page metadata; canonical resolves to `/articles/what-is-risk`. `BlogPosting` has `headline`, `description`, page identity, author Person reference, and Organization publisher. No date is documented or emitted. | Everyday savings/car-repair example is understandable and reads as illustrative, but is not explicitly labeled hypothetical. The “what might happen, how likely, and what next” takeaway is a useful introduction, though it could distinguish estimable likelihood from outcomes that cannot be meaningfully quantified. No citations. Related links are risk/financial-risk/diversification articles; they are relevant at a broad level. | **Medium:** Add a verifiable source and clarify that the example is illustrative. |
| [Risk vs. Uncertainty](https://altriskacademy.com/articles/risk-vs-uncertainty) — source: [lib/data.ts](./lib/data.ts) | Same complete visible attribution and route-specific SEO/schema pattern. Unique title and excerpt; canonical is `/articles/risk-vs-uncertainty`. No documented or emitted publication/modification date. | The distinction between estimable risk and unknown probabilities is a useful introductory convention, not a universal taxonomy. The dice/product examples communicate the contrast. Qualify the definition as one common framework and cite a credible risk-management or academic source; otherwise readers cannot assess the framing. No citations. Related links are foundational/financial-risk/diversification articles. | **Medium:** Source and qualify the conceptual distinction. |
| [What Is Financial Risk?](https://altriskacademy.com/articles/what-is-financial-risk) — source: [lib/data.ts](./lib/data.ts) | Correct linked author and Person reference; unique title/excerpt and canonical `/articles/what-is-financial-risk`. `BlogPosting` fields are present as described above; no dates documented or emitted. | Definition and single-stock concentration example are directionally clear and do not promise returns or recommend a product. The example is very brief and would benefit from distinguishing investment risk from other household/credit/liquidity risks. No citations. Related articles are risk foundations and diversification; the article has no direct link to the Financial & Investment Risk learning path. | **Medium:** Expand scope/context and add verifiable source material. |
| [Portfolio Diversification Explained](https://altriskacademy.com/articles/portfolio-diversification) — source: [lib/data.ts](./lib/data.ts) | Correct linked author and Person reference; unique title/excerpt and canonical `/articles/portfolio-diversification`. No publication/modification dates documented or emitted. | The definition and company-failure example are broadly sound; importantly, the takeaway says diversification cannot eliminate all market risk. Add context that exposure overlap/correlation and concentration matter, so simply holding more securities does not ensure meaningful diversification. No citations. Current dynamic related links are What Is Risk?, Risk vs. Uncertainty, and What Is Financial Risk?; market-volatility and risk/return articles would be closer companions. | **Medium:** Support and deepen the explanation; curate related links. |
| [What Is Market Volatility?](https://altriskacademy.com/articles/market-volatility) — source: [lib/data.ts](./lib/data.ts) | Correct linked author and Person reference; unique title/excerpt and canonical `/articles/market-volatility`. No publication/modification dates documented or emitted. | The definition is appropriately introductory and the takeaway distinguishes volatility from permanent loss. The “5% in a week” versus “0.2%” comparison is not explicitly labeled illustrative and does not specify a matching measurement interval or whether these are price changes or returns. No historical data is claimed, but the example should be made unambiguously hypothetical. No citations. Current related links are the first three foundational articles rather than diversification or risk/return. | **Medium:** Clarify the illustrative comparison and add a relevant source. |
| [Risk and Return Explained](https://altriskacademy.com/articles/risk-and-return) — source: [lib/data.ts](./lib/data.ts) | Correct linked author and Person reference; unique title/excerpt and canonical `/articles/risk-and-return`. No publication/modification dates documented or emitted. | The savings-account/startup comparison is illustrative and the takeaway expressly says higher possible returns do not guarantee success. Add context that the relationship is a general trade-off, not a promise that accepting more risk will produce higher realized returns. No citations. Current related links are the first three foundational articles; diversification and volatility are closer connections. | **Medium:** Add authoritative context and topic-specific internal links. |

## Cross-cutting SEO and structured-data review

### Author transparency and E-E-A-T

- **Present:** Each article displays the author's name with a clickable link to the correct portfolio. The portfolio was reachable during this audit and publishes a `Person` JSON-LD entity at `https://mariamediannikova.com/#person`, including the name, URL, a self-described student/founder/financial-literacy profile, and relevant interests.
- **Present:** The AltRisk Academy `Organization` references the same Person ID as founder. Each article references that Person ID as author and the site Organization ID as publisher.
- **Not present on article pages:** A short author bio or explanation of the author's relevant experience. No credentials or licenses are stated; this is preferable to inventing authority. If added later, use only verifiable, accurately qualified facts from the portfolio and link to it.
- **Assessment:** Identity linkage is coherent, but an author link alone does not demonstrate the editorial method, sources consulted, or review process for financial claims.

### Metadata and canonical URLs

- Article titles come from the six distinct `lessons[].title` values and are combined with the site title template.
- Descriptions come from distinct `lessons[].excerpt` values. They are concise; “Risk and Return Explained” has a particularly short six-word excerpt. Consider improving snippets only if the replacement remains accurate and useful, rather than targeting a rigid character count.
- The shared metadata helper creates canonical and Open Graph URLs from the article slug on `https://altriskacademy.com`. No duplicate article route or conflicting canonical was found in the source reviewed.
- Open Graph type is `article`; the same shared logo image is used for every page. A dedicated, accurate article image is an optional enhancement, not a blocker.

### Schema.org

- Each article emits one `BlogPosting` node with a unique article `@id`, `url`, `mainEntityOfPage`, headline, description, author `@id`, and publisher `@id`.
- The root layout separately emits one connected Organization/WebSite graph; the `BlogPosting` publisher references that Organization. The author reference resolves to the Person entity published on Maria's portfolio. No conflicting article-specific duplicate Organization or Person definition was found.
- `datePublished` and `dateModified` are absent. This matches the source data: no actual dates are documented. Keep dates absent until verified from an editorial record; do not infer them from file timestamps or deployment history.
- Potential enhancements after editorial/source review: add visible and schema dates only if verified; consider `articleSection`, `inLanguage`, a relevant image, and `author.name` alongside the stable Person reference if needed for consumer compatibility. These are recommendations, not findings that the existing graph is malformed.

## Content, references, and internal linking

### Reference coverage

None of the six article entries contains an external source, inline citation, footnote, or references section. This is the most consistent credibility gap for financial-education material. No source has been added by this audit.

When preparing a later editorial revision, identify the exact claim first and then verify the matching primary source. Potential institutions to consult include SEC Investor.gov and FINRA for investing/diversification/volatility concepts; Federal Reserve or CFPB material where claims concern household financial conditions or consumer finance; and an appropriate academic or specialist source for the risk/uncertainty distinction. Cite only sources that directly support the stated wording. This audit did not validate the article claims against those external sources; direct retrieval attempts for Investor.gov/FINRA/CFPB pages were blocked or failed.

### Internal links

- All article pages include a back link to `/articles`, a CTA to `/risk-lab`, and three links under “Keep exploring.”
- The related links are generated by taking the first three other lessons in data order, rather than selecting by subject. This leaves both investing articles at the end of the list with three foundational related links.
- No article body directly links to `/learn/financial-risk` or another learning path. The learning pages link out to lessons, but adding contextual links from article to learning path would improve progression between reading and structured study.
- No broken or misleading article-specific internal link was identified in the source review.

### Clarity, originality, and mobile/accessibility

- Article-specific prose is approximately 46–68 words per article (definition + example + takeaway; excludes the identical template content). All pages share the same explanatory sequence, questions, and CTA. This is easy to scan but provides limited nuance, source discussion, counterexamples, or original analysis.
- Examples use hypothetical scenarios and do not promise returns. The volatility comparison should explicitly state it is hypothetical and compare equivalent periods. The risk/return article already includes a useful no-guarantee caveat.
- The repeated template is not evidence of copied text or plagiarism. However, the absence of references makes source provenance difficult for readers to evaluate.
- Source CSS uses a constrained article width, readable paragraph line-height, responsive title/body sizing, and collapses the related-links grid to one column at smaller widths. Semantic article and heading structure and visible text links are present. No live assistive-technology or device test was performed.
- The shared financial education disclaimer is visible at the bottom of every article and clearly says the site does not provide personalized financial, investment, tax, or legal advice.

## Prioritized recommendations

1. **Medium — Add evidence for financial claims.** For each article, map factual statements to authoritative sources and add only verified, directly relevant citations. Start with diversification, volatility, risk/return, and the risk/uncertainty definition.
2. **Medium — Expand article-specific value.** Review each short definition/example/takeaway for useful context, limitations, and a clear distinction between hypothetical illustration and historical evidence. Avoid adding unsupported numerical claims.
3. **Medium — Curate contextual internal links.** Replace array-order related links with topic-relevant articles and add learning-path links where they genuinely help. In particular, connect volatility and risk/return to diversification and link financial-risk content to the Financial & Investment Risk path.
4. **Low — Add an accurate author context.** Consider a concise byline bio based on verifiable portfolio information; do not imply licensing, professional credentials, or review authority that is not documented.
5. **Low — Improve optional schema completeness.** Preserve the current linked entities. Add article image/section/language and publication or modification fields only where accurate, available, and editorially maintained.
6. **Low — Review snippets and visual assets.** Consider a more descriptive risk/return meta description and accurate article-specific social images; keep title/description unique and factual.

## Exact files likely to require changes in a future implementation

| File | Likely future purpose |
|---|---|
| [lib/data.ts](./lib/data.ts) | Expand the six article definitions; store verified source references and any verified publication/modification dates; refine excerpts only if editorially warranted. |
| [app/articles/[slug]/page.tsx](./app/articles/%5Bslug%5D/page.tsx) | Render citations, verified dates, author context, and contextual learning/article links; reflect only verified fields in `BlogPosting` JSON-LD and article Open Graph metadata. |
| [app/articles/page.tsx](./app/articles/page.tsx) | Update article-card excerpts or optional date/author summaries if the editorial model changes. |
| [app/learn/[slug]/page.tsx](./app/learn/%5Bslug%5D/page.tsx) | Only if later cross-linking work changes the learning-path/lesson relationship; existing pages already link to articles. |
| [public/](./public) | Only if a future pass creates or selects accurate article-specific social images. No image change is required by this audit. |

## Audit limitations

This review covered all six article source records, the shared article page and metadata/schema implementation, the live rendered article text, the live author portfolio and Person entity, and source-level responsive styling. Because the external authority pages could not be retrieved during this audit, the conceptual review is a first-pass editorial assessment, not a complete claim-by-claim fact-check. No code or article content was modified.

## Implementation follow-up

The six articles have since been expanded and their shared rendering template updated. This follow-up supersedes the earlier "no citations" and short-body findings for the current source state.

### Completed

- Each article now has an introduction, explanatory sections, a clearly labeled hypothetical example with assumptions and calculations where useful, key takeaways, topic-selected internal links, and a **Sources & Further Reading** list.
- Each article's unique source content is approximately 561–606 words, excluding navigation, source-list labels, and shared layout chrome. The six article URLs and their unique SEO titles/descriptions are preserved.
- The byline retains Maria Mediannikova's correct portfolio link and now displays the requested student/founder bio without claiming professional investment-advisory credentials or licenses.
- Article JSON-LD retains the unique `BlogPosting` ID, canonical page identity, existing Person author ID, and Organization publisher reference. It adds `articleSection` and `inLanguage`. No publication or modification date is asserted because no verified editorial dates are available.
- The shared educational disclaimer remains visible. External source links open in a new tab with `rel="noopener noreferrer"`.
- Related articles are selected by each article's subject rather than lesson-array order. Relevant articles link to the Financial & Investment Risk learning path and Risk Lab.

### Sources directly checked during implementation

| Source | Used for | Verification status |
|---|---|---|
| [Risk — FINRA: Investing Basics](https://www.finra.org/investors/investing/investing-basics/risk) | Risk types, investment risk, general risk-return relationship, and limitations | Page fetched; relevant sections inspected. No historical return figures were copied into the articles. |
| [Asset Allocation and Diversification — FINRA](https://www.finra.org/investors/investing/investing-basics/asset-allocation-diversification) | Diversification, concentration, underlying holdings, correlation, and rebalancing caveats | Page fetched; relevant sections inspected. |
| [Volatility — FINRA: Investing Basics](https://www.finra.org/investors/investing/investing-basics/volatility) | Price swings, context of time horizon, beta limitations, and general volatility discussion | Page fetched; relevant sections inspected. |
| [An Essential Guide to Building an Emergency Fund — CFPB](https://www.consumerfinance.gov/an-essential-guide-to-building-an-emergency-fund/) | Unplanned expenses, emergency savings, and individual circumstances | Page fetched; relevant sections inspected. |
| [Risk, Uncertainty, and Profit — Frank H. Knight (Library of Economics and Liberty edition)](https://www.econlib.org/library/Knight/knRUP.html) | Historical economics framework distinguishing measurable risk from uncertainty | The page and original work metadata were reachable and checked. It is presented as a classic framework, not as the only current definition. |
| [What Is Volatility? — Fidelity Learning Center](https://www.fidelity.com/learning-center/smart-money/what-is-volatility) | Historical versus implied volatility and the limits of volatility as a complete risk measure | Page fetched; relevant definitions inspected. |

### Remaining limitations

- The examples are explicitly hypothetical, but their numbers are teaching illustrations, not sourced empirical observations or forecasts.
- The Knight source is a historical conceptual work. Current terminology varies across fields; the article explicitly notes that risk and uncertainty are sometimes used interchangeably.
- No publication or modification dates were located. They remain intentionally absent from article content and JSON-LD.
- No calculator/simulator logic was changed. The Risk Lab links are navigational only.

### Files changed for the implementation

- [lib/data.ts](./lib/data.ts) — six expanded article records, topic-specific links, and verified source metadata.
- [app/articles/[slug]/page.tsx](./app/articles/%5Bslug%5D/page.tsx) — structured article sections, author bio, resource and source lists, and unchanged date-free `BlogPosting` relationships.
- [app/globals.css](./app/globals.css) — article spacing, source-list, bio, and responsive readability rules.
- [ARTICLE_SEO_AUDIT.md](./ARTICLE_SEO_AUDIT.md) — this implementation follow-up and source verification record.
