# Risk Articles â€” Editorial Batch 2

**Status:** Drafts for human editorial review. Not approved for publication.
**Publication dates:** None assigned; article records and Article JSON-LD include no publication dates.
**Author:** Maria Mediannikova, using the site's existing student/founder attribution. No professional risk-management employment or regulatory credentials are implied.

The six articles use the existing article directory, category filters, canonical metadata, and BlogPosting structured-data flow. They add six distinct slugs without replacing the existing 12 articles. Each draft includes a â€œWhy This Matters for Risk Managersâ€ section, practical limitations and common mistakes, takeaways, internal learning links, and 3â€“5 cited sources.

## Articles and illustrations

| Article | Route | Approx. prose words | Original illustrations |
|---|---|---:|---|
| Python for Risk Managers: 5 Practical Applications | `/articles/python-for-risk-managers-practical-applications` | 1,209 | `python-risk-cover.svg`; `python-risk-workflow.svg` |
| Monte Carlo Simulation in Financial Risk Management | `/articles/monte-carlo-simulation-financial-risk-management` | 1,031 | `monte-carlo-cover.svg`; `monte-carlo-distribution.svg`; `monte-carlo-fan.svg` |
| Algorithmic Trading Risk Controls Explained | `/articles/algorithmic-trading-risk-controls-explained` | 1,072 | `algorithmic-controls-cover.svg`; `algorithmic-controls-flow.svg` |
| Understanding Liquidity Risk: When Assets Cannot Be Sold Quickly | `/articles/understanding-liquidity-risk` | 1,061 | `liquidity-risk-cover.svg`; `liquidity-spread-impact.svg` |
| How Machine Learning Detects Financial Risk Anomalies | `/articles/machine-learning-financial-risk-anomalies` | 1,034 | `ml-anomaly-cover.svg`; `ml-anomaly-workflow.svg`; `ml-false-positive.svg` |
| VaR vs. Expected Shortfall: Which Risk Measure Tells You More? | `/articles/var-vs-expected-shortfall` | 1,037 | `var-es-cover.svg`; `var-es-distribution.svg` |

All 14 SVGs are original vector illustrations with a shared navy, teal, and light-background style. Cover images use a 16:9 aspect ratio. Inline visuals have descriptive alt text and captions. On narrow screens, diagrams remain legible in a keyboard-focusable horizontal scrolling frame; the page itself does not overflow horizontally.

## Sources

### Python for Risk Managers

- [The Python Standard Library: csv](https://docs.python.org/3/library/csv.html) â€” Python Software Foundation
- [10 Minutes to pandas](https://pandas.pydata.org/docs/user_guide/10min.html) â€” pandas documentation
- [Random Generator](https://numpy.org/doc/stable/reference/random/generator.html) â€” NumPy documentation
- [Principles for effective risk data aggregation and risk reporting (BCBS 239)](https://www.bis.org/publ/bcbs239.htm) â€” Basel Committee on Banking Supervision

### Monte Carlo Simulation

- [Random Generator](https://numpy.org/doc/stable/reference/random/generator.html) â€” NumPy documentation
- [Revised Guidance on Model Risk Management (SR 26-2)](https://www.federalreserve.gov/supervisionreg/srletters/SR2602.htm) â€” Board of Governors of the Federal Reserve System
- [Minimum capital requirements for market risk](https://www.bis.org/bcbs/publ/d457.htm) â€” Basel Committee on Banking Supervision
- [Stress Tests and Capital Planning](https://www.federalreserve.gov/supervisionreg/stress-tests-capital-planning.htm) â€” Board of Governors of the Federal Reserve System

### Algorithmic Trading Risk Controls

- [17 CFR Â§ 240.15c3-5](https://www.law.cornell.edu/cfr/text/17/240.15c3-5) â€” Cornell Legal Information Institute
- [Market Access](https://www.finra.org/rules-guidance/key-topics/market-access) â€” Financial Industry Regulatory Authority
- [17 CFR Â§ 1.73](https://www.govinfo.gov/content/pkg/CFR-2025-title17-vol1/xml/CFR-2025-title17-vol1-sec1-73.xml) â€” U.S. Government Publishing Office, 2025 Code of Federal Regulations
- [NFA Compliance Rules 2-9 and 2-36: Membersâ€™ Use of Third-Party Service Providers](https://www.nfa.futures.org/rulebooksql/rules.aspx?RuleID=9079&Section=9) â€” National Futures Association, Interpretive Notice 9079
- [CME Group Rulebooks](https://www.cmegroup.com/market-regulation/rulebook.html) â€” CME Group

### Liquidity Risk

- [17 CFR Â§ 270.22e-4](https://www.law.cornell.edu/cfr/text/17/270.22e-4) â€” Cornell Legal Information Institute
- [Principles for Sound Liquidity Risk Management and Supervision](https://www.bis.org/publ/bcbs144.htm) â€” Basel Committee on Banking Supervision
- [Principles for effective risk data aggregation and risk reporting (BCBS 239)](https://www.bis.org/publ/bcbs239.htm) â€” Basel Committee on Banking Supervision

### Machine Learning and Anomaly Detection

- [Artificial Intelligence Risk Management Framework (AI RMF 1.0)](https://www.nist.gov/itl/ai-risk-management-framework) â€” National Institute of Standards and Technology
- [Artificial Intelligence and Machine Learning in Financial Services](https://www.fsb.org/2017/11/artificial-intelligence-and-machine-learning-in-financial-service/) â€” Financial Stability Board
- [Revised Guidance on Model Risk Management (SR 26-2)](https://www.federalreserve.gov/supervisionreg/srletters/SR2602.htm) â€” Board of Governors of the Federal Reserve System
- [Principles for effective risk data aggregation and risk reporting (BCBS 239)](https://www.bis.org/publ/bcbs239.htm) â€” Basel Committee on Banking Supervision

### VaR and Expected Shortfall

- [Minimum capital requirements for market risk](https://www.bis.org/bcbs/publ/d457.htm) â€” Basel Committee on Banking Supervision
- [Basel Framework: MAR â€” Calculation of RWA for Market Risk](https://www.bis.org/basel_framework/chapter/MAR/33.htm) â€” Basel Committee on Banking Supervision
- [Revised Guidance on Model Risk Management (SR 26-2)](https://www.federalreserve.gov/supervisionreg/srletters/SR2602.htm) â€” Board of Governors of the Federal Reserve System
- [Principles for effective risk data aggregation and risk reporting (BCBS 239)](https://www.bis.org/publ/bcbs239.htm) â€” Basel Committee on Banking Supervision

The referenced Python, pandas, NumPy, FINRA, Cornell CFR, NFA, GovInfo, NIST, Federal Reserve, Basel Committee, and CME Group rulebook-index pages were checked for relevant content. No inaccessible SEC compliance-guide page is cited.

## Numerical and scope checks

- **Python:** `$60,000 Ã— âˆ’2% + $40,000 Ã— âˆ’0.5% = âˆ’$1,400`, or a 1.4% loss on the hypothetical $100,000 portfolio.
- **Monte Carlo:** With zero mean loss and $10,000 standard deviation, `VaR95 = 1.645 Ã— $10,000 = $16,450`. For a normal loss distribution, `ES95 â‰ˆ $10,000 Ã— Ï†(1.645) Ã· 0.05 â‰ˆ $20,630`. The fan-chart interval uses `$100,000 Ã— [1 + (5% Â± 1.645 Ã— 15%)] = $80,325â€“$129,675`.
- **Algorithmic controls:** `300 shares Ã— $50 = $15,000`, above the explicitly hypothetical $10,000 per-order limit.
- **Liquidity:** Proceeds across the five illustrated bid levels total `$994,800`; the `$5,200` difference from the `$1,000,000` midpoint is `0.52%`.
- **Anomaly detection:** `8 confirmed Ã· 20 alerts = 40% precision`; recall is intentionally not claimed because the number of missed events is unknown.
- **VaR/ES:** In the stated 20-observation sample, the 16th ordered observation is `VaR80 = 0%`; the four worst losses average `(1% + 2% + 3% + 5%) Ã· 4 = 2.75%`. The small sample and nearest-rank convention are disclosed.

All figures are labeled hypothetical. The illustrations and captions use the same assumptions and arithmetic as the corresponding examples.

## Human review required before publication

1. **Algorithmic trading regulations:** Confirm the current text and applicability of SEC Rule 15c3-5, CFTC Regulation 1.73, NFA requirements, and venue rules for the articleâ€™s intended audience. The GovInfo CFTC reference is the 2025 CFR edition; verify any later amendments and the exact firm/product/clearing scope. The draft correctly limits Â§ 1.73 to clearing FCMs that are clearing members of a derivatives clearing organization and distinguishes securities market access from futures.
2. **Exchange rules:** CME Groupâ€™s rulebook index is verified, but a separate pre-execution-control page returned 404 during checking and is not cited. Review the current rules for the specific intended exchange and product before publication; the draft does not state a CME-specific control threshold or universal exchange requirement.
3. **Fund liquidity:** Review the scope and exclusions of SEC Rule 22e-4 against current official text and confirm the distinction from Basel Committee guidance. The article does not characterize either framework as universal.
4. **AI guidance:** NIST reports that AI RMF 1.0 is being revised. Recheck the frameworkâ€™s status before publication; the draft describes it as voluntary. Confirm that Federal Reserve SR 26-2 is presented only within its banking supervisory scope.
5. **Current source availability:** Recheck source links and applicable rule text at editorial approval, particularly where a source is a dated CFR edition or a framework that may be revised.
6. **Editorial approval:** Review tone, examples, diagrams, citations, and author attribution. Assign publication dates only after approval.

## Implementation and validation

- New articles are included in the existing `lessons` collection through `lib/hub-articles.ts`; existing articles and their routes are preserved.
- Unique titles/descriptions, canonical URLs, cover-image Open Graph metadata, and date-free BlogPosting JSON-LD are generated through the existing article route.
- Category filters derive from the complete article list. All six article routes, internal links, and illustration references were checked.
- Browser checks confirmed all six cover illustrations and eight diagrams load, article titles/canonicals/descriptions and source lists render, author links are present, structured data has the cover image and no publication date, and the Risk Analytics filter returns three articles. At a 390px viewport, the page has no horizontal overflow; diagrams are keyboard-focusable and horizontally scrollable.
- `npm.cmd run lint` passed.
- `npm.cmd run build` passed and generated all article routes. Next.js emitted existing Autoprefixer warnings for `start`/`end` alignment values elsewhere in the stylesheet; the new illustration styles did not introduce those warnings.
- `git diff --check` passed.
