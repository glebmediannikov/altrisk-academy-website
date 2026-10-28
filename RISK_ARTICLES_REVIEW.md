# Risk Knowledge Hub: Editorial Review

**Status:** Draft content for human review; not approved for publication.  
**Review date:** 2026-10-27  
**Publication dates:** None assigned. No editorial approval or publication dates were supplied, so none are displayed or added to structured data.

The six articles below are original educational drafts. Their hypothetical examples and calculations are illustrative, not forecasts or professional advice. Confirm legal/regulatory interpretations and source availability before publication.

## Articles and sources

### 1. What Does a Risk Manager Actually Do?

- Slug: `/articles/what-does-a-risk-manager-do`
- Sources:
  - [Institute of Risk Management — What is Enterprise Risk Management?](https://www.theirm.org/what-we-do/what-is-enterprise-risk-management/)
  - [Basel Committee — Principles for effective risk data aggregation and risk reporting (BCBS 239)](https://www.bis.org/publ/bcbs239.htm)
  - [OCC — Stress Testing: Interagency Stress Testing Guidance](https://www.occ.gov/news-issuances/bulletins/2012/bulletin-2012-14.html)
- Human review: Confirm that the described division of responsibility among business owners, risk, compliance, and audit remains clearly framed as common practice rather than a universal legal structure. The OCC source is 2012 guidance; verify its current status and applicability before making any more specific claims from it.

### 2. How AI Is Transforming Risk Management

- Slug: `/articles/how-ai-is-transforming-risk-management`
- Sources:
  - [NIST — Artificial Intelligence Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
  - [NIST — Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile](https://doi.org/10.6028/NIST.AI.600-1)
  - [Federal Reserve — Revised Guidance on Model Risk Management (SR 26-2)](https://www.federalreserve.gov/supervisionreg/srletters/SR2602.htm)
- Human review: NIST states that AI RMF 1.0 is being revised. Recheck the NIST status and the scope of any replacement or profile immediately before publication. Review the examples of AI applications and ensure they remain clearly illustrative, not claims about measured industry adoption.

### 3. Stress Testing Explained: How Financial Firms Prepare for Market Shocks

- Slug: `/articles/stress-testing-explained`
- Sources:
  - [Federal Reserve — Stress Tests and Capital Planning](https://www.federalreserve.gov/supervisionreg/stress-tests-capital-planning.htm)
  - [OCC — Stress Testing: Interagency Stress Testing Guidance](https://www.occ.gov/news-issuances/bulletins/2012/bulletin-2012-14.html)
  - [Basel Committee — Principles for effective risk data aggregation and risk reporting (BCBS 239)](https://www.bis.org/publ/bcbs239.htm)
- Human review: Reconfirm the Federal Reserve’s $100 billion supervisory stress-test scope against the current rule and institution-specific applicability. The OCC interagency guidance is from 2012; verify its continuing status and do not reuse the original asset threshold as a current requirement. Review that the duration calculation is explicitly described as a first-order hypothetical approximation.

### 4. Risk Dashboards: How Firms Monitor Exposure in Real Time

- Slug: `/articles/risk-dashboards-real-time-exposure`
- Sources:
  - [Basel Committee — Principles for effective risk data aggregation and risk reporting (BCBS 239)](https://www.bis.org/publ/bcbs239.htm)
  - [Federal Reserve — Revised Guidance on Model Risk Management (SR 26-2)](https://www.federalreserve.gov/supervisionreg/srletters/SR2602.htm)
  - [FINRA — Market Access](https://www.finra.org/rules-guidance/key-topics/market-access)
- Human review: Make clear that BCBS 239 is a Basel Committee standard directed at its stated bank audience and is not automatically a binding requirement for every firm. Confirm that the hypothetical warning and escalation levels are not presented as regulatory thresholds.

### 5. SEC Rule 15c3-5: Understanding Pre-Trade Risk Controls

- Slug: `/articles/sec-rule-15c3-5-pre-trade-risk-controls`
- Sources:
  - [Legal Information Institute, Cornell Law School — 17 CFR § 240.15c3-5](https://www.law.cornell.edu/cfr/text/17/240.15c3-5)
  - [FINRA — Market Access](https://www.finra.org/rules-guidance/key-topics/market-access)
  - [U.S. Government Publishing Office — 2025 CFR, 17 CFR § 240.15c3-5](https://www.govinfo.gov/content/pkg/CFR-2025-title17-vol4/xml/CFR-2025-title17-vol4-sec240-15c3-5.xml)
- Human review: Compare each description of the control objectives, control authority, exceptions, review, and CEO certification with the current official CFR text and applicable SEC/FINRA guidance. The current eCFR page redirects automated requests to an access challenge; the article instead links the accessible Cornell LII text and the official GovInfo 2025 CFR edition. Check for any later amendment in the current eCFR before publication. Confirm the distinction from CFTC rules and FCM obligations with securities/futures counsel. The $2 million example is hypothetical, not a rule threshold.

### 6. Model Risk Management: What Changed in 2026?

- Slug: `/articles/model-risk-management-2026`
- Sources:
  - [Federal Reserve — Revised Guidance on Model Risk Management (SR 26-2)](https://www.federalreserve.gov/supervisionreg/srletters/SR2602.htm)
  - [Federal Reserve — Revised Guidance on Model Risk Management (April 17, 2026 attachment)](https://www.federalreserve.gov/supervisionreg/srletters/sr2602a1.pdf)
  - [NIST — Artificial Intelligence Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
- Human review: The official SR 26-2 letter confirms the April 17, 2026 date, issuing agencies, replacement of SR 11-7 and the 2021 BSA/AML statement, the high-level risk-based emphasis, and the Federal Reserve’s “most relevant” applicability statement. Review the complete attachment before publication; automated retrieval exposed the PDF but did not make its full text available for line-by-line verification here. Confirm precise applicability with counsel or the relevant prudential regulator. Do not imply the guidance automatically applies to broker-dealers or futures commission merchants.

## Editorial and factual checks before publication

- Verify each regulatory characterization against the current official text and any applicable subsequent notices.
- Confirm every linked source still resolves and supports the nearby claims. A page accessible to the drafting tools is not a guarantee of future availability.
- Confirm that hypothetical figures, calculations, and workflows remain labeled as examples and that no real-world statistic or forecast is implied.
- Confirm that Maria Mediannikova is described only as a student and founder of AltRisk Academy; no financial-industry employment, professional license, or regulatory expertise is asserted.
- No publication or modification dates are asserted. Add them only after the actual editorial approval/publication dates are established.
- Review the educational disclaimer and article links to learning modules and Risk Lab in the rendered site.

## Modified files

- `lib/hub-articles.ts` — six new article records, sources, contextual article links, learning paths, and educational examples.
- `lib/data.ts` — includes the new records in the existing article collection while preserving the original six.
- `components/article-directory.tsx` — accessible category filters and article cards.
- `app/articles/page.tsx` — integrates the filtered directory and updates index metadata.
- `app/articles/[slug]/page.tsx` — keeps date-free canonical/BlogPosting output and accurate author attribution.
- `app/globals.css` — responsive category-filter styles and keyboard focus treatment.
- `RISK_ARTICLES_REVIEW.md` — this editorial review file.
