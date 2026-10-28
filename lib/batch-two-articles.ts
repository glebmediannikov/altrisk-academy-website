import type {Article} from './hub-articles';

const imageDirectory = '/articles/batch-2';

export const batchTwoArticles: Article[] = [
  {
    slug: 'python-for-risk-managers-practical-applications',
    title: 'Python for Risk Managers: 5 Practical Applications',
    seoTitle: 'Python for Risk Managers: Five Practical Uses',
    seoDescription:
      'See five practical ways Python can support risk data checks, exposure analysis, scenarios, monitoring, and repeatable reporting.',
    category: 'Risk Analytics',
    read: '8 min',
    excerpt:
      'Explore five realistic ways Python can help organize risk data, test scenarios, monitor exposures, and produce reproducible analysis.',
    introduction:
      'Python is useful in risk work not because a programming language can predict the future, but because it can make repetitive analysis easier to inspect and reproduce. A short script can check a file, combine exposures, apply a scenario, or prepare a report. The quality of the result still depends on the source data, the assumptions, and the review around the code. The examples below are educational workflows, not professional or investment advice.',
    coverImage: {
      src: `${imageDirectory}/python-risk-cover.svg`,
      alt: 'Illustrated pipeline connecting source data, Python risk analysis, validation checks, and a concise risk report.',
      caption:
        'A practical workflow keeps source data, analysis, checks, and the resulting report connected.',
    },
    sections: [
      {
        heading: '1. Check and prepare data before analysis',
        paragraphs: [
          'A risk calculation is only as dependable as the records behind it. Python can read a CSV file, check whether required columns are present, flag missing identifiers, compare dates with an expected range, and identify duplicate rows. Libraries such as pandas make it convenient to work with labeled tables, while Python’s built-in CSV module can handle simpler files. These checks do not prove that the source system is correct; they make visible some common problems before an analyst relies on the numbers.',
          'A useful check produces a reviewable exception list, not just a green “passed” message. For example, a position file might contain a negative quantity, an unknown currency, or a stale price. The analyst can preserve the original input, record the run time and source, and route exceptions to their owner. Input validation is an analytical control: it reduces avoidable mistakes, but it does not replace reconciliation to authoritative records or approval of data corrections.',
        ],
      },
      {
        heading: '2. Aggregate exposure across portfolios',
        paragraphs: [
          'A second practical use is combining records into a consistent view. A script can group positions by asset, issuer, industry, currency, counterparty, or another relevant dimension, then compare totals with limits or prior reports. It can also convert values to a common unit using a stated exchange-rate source and date. The result helps a reader see concentrations that are hard to notice in separate spreadsheets, provided the grouping rules and source coverage are clear.',
          'Aggregation choices matter. A subsidiary may appear under several legal names; a derivative may have notional value very different from its market value; a fund holding can create look-through exposure; and a net figure can conceal offsetting gross positions. A reproducible calculation should state what is included, how identifiers are mapped, whether exposures are netted, and which records were unavailable. Reusing the same code improves consistency, but a flawed mapping can repeat the same error at scale.',
        ],
      },
      {
        heading: '3. Revalue a portfolio under historical or hypothetical scenarios',
        paragraphs: [
          'Python can apply selected market moves to positions to estimate a simplified scenario impact. For a bond portfolio, an analyst might apply a yield shock and an explicitly stated duration approximation. For a currency exposure, the calculation might translate a hypothetical exchange-rate move into a change in reporting-currency value. A historical scenario replays observed changes; a hypothetical scenario describes a chosen shock. Neither is a forecast, and neither automatically captures every interaction or nonlinear payoff.',
          'The useful questions are often about sensitivity and coverage: Which positions drive the result? What happens if a shock is larger, reversed, or combined with another? Are options repriced with a suitable method, or treated as if they were linear? A script can run many consistent variations quickly, but the analyst must explain which market data, pricing conventions, and assumptions apply. Scenario results should be compared with actual experience and other risk views where appropriate.',
        ],
      },
      {
        heading: '4. Automate recurring indicators and exception reports',
        paragraphs: [
          'A scheduled program can calculate the same indicator each day, such as a concentration ratio, overdue balance, limit utilization, or change in exposure. It can compare results with approved internal thresholds and produce an exception report for review. A good report identifies the calculation date, data timestamp, measure definition, threshold owner, and unresolved exceptions. It should distinguish a confirmed breach from a missing data point or a calculation that could not be completed.',
          'Automation can reduce manual copying and make a recurring process more consistent, but it can also make a failure repeat unnoticed. Monitoring should include the job itself: Did it run? Did the input arrive? Did record counts change sharply? Did the output reconcile with a control total? A human owner still needs a defined escalation route and a way to pause or correct a process when its results are questionable.',
        ],
      },
      {
        heading: '5. Make the analysis reproducible and reviewable',
        paragraphs: [
          'A practical analysis records code versions, input identifiers, run parameters, and outputs so a reviewer can understand how a result was produced. A fixed random seed can make a Monte Carlo exercise reproducible for testing, while production analysis should also record the random-number generator and configuration. Version control, small functions, tests for known calculations, peer review, and separation of development from approved production use are recommended engineering practices—not universal regulatory requirements for every Python script.',
          'A notebook can be helpful for exploration because it combines narrative and calculations, but it can hide execution-order problems or depend on an analyst’s local environment. For recurring or consequential use, move stable logic into reviewed code, pin dependencies, control access, and retain a reproducible run record. Supervisory and model-governance obligations depend on the organization, the use of the tool, and applicable rules; using Python alone does not determine whether a program is a regulated model.',
        ],
      },
      {
        heading: 'Why This Matters for Risk Managers',
        paragraphs: [
          'Python can help a risk team spend less time repeating manual steps and more time investigating concentrations, challenging assumptions, and explaining uncertainty. Its value comes from traceability: a reviewer should be able to follow a result back to its inputs and logic. Risk managers should treat scripts as part of a controlled analytical process, with owners, checks, documentation, and escalation—not as an independent source of truth.',
        ],
      },
      {
        heading: 'Common mistakes and practical limits',
        paragraphs: [
          'Typical mistakes include mixing units or time zones, silently dropping missing rows, joining on non-unique identifiers, confusing notional with exposure, and interpreting a historical backtest as a promise about the future. A technically correct program can still answer the wrong question. Test edge cases, reconcile totals, review changes to source schemas, and present material assumptions and limitations next to the result rather than hiding them in code.',
          'Start with one low-risk, well-defined task. Write down the decision it supports, the source of each input, the expected output, and a simple independent check. Keep a manual fallback for a failed run, and ask a qualified reviewer to examine consequential analysis. These habits are more valuable than adding complexity or adopting a new library for its own sake.',
        ],
      },
    ],
    illustrations: [
      {
        src: `${imageDirectory}/python-risk-workflow.svg`,
        alt: 'Five-step workflow: source data, validation, risk calculations, independent review, and a decision-ready report.',
        caption:
          'A hypothetical analytics workflow: validation and review are part of the process, not optional decorations.',
        afterSection: '5. Make the analysis reproducible and reviewable',
      },
    ],
    example: {
      heading: 'Hypothetical example: a two-asset daily exposure check',
      paragraphs: [
        'Assume a fictional portfolio holds $60,000 of Asset A and $40,000 of Asset B. For an educational one-day scenario, Asset A falls 2% and Asset B falls 0.5%. The estimated changes are $60,000 × −2% = −$1,200 and $40,000 × −0.5% = −$200. The combined scenario loss is $1,400, or 1.4% of the $100,000 starting value. This is a simple linear calculation, not a forecast or a complete portfolio valuation.',
        'A Python workflow could load the two positions, check that values and returns use consistent units, calculate each contribution, and reconcile the total to $100,000 before producing a report. A reviewer should confirm the scenario inputs, inspect the arithmetic, and ask what the example omits: fees, taxes, nonlinear instruments, changing correlations, liquidity, and any positions missing from the file.',
      ],
    },
    keyTakeaways: [
      'Use Python to make repeatable checks and calculations easier to inspect, not to replace judgment.',
      'Record data lineage, assumptions, code versions, and exceptions alongside material results.',
      'Validate outputs independently and state the boundaries of each scenario or indicator.',
    ],
    relatedArticles: [
      'risk-dashboards-real-time-exposure',
      'stress-testing-explained',
      'how-ai-is-transforming-risk-management',
    ],
    learningPaths: ['financial-risk'],
    sources: [
      {
        title: 'The Python Standard Library: csv — CSV File Reading and Writing',
        publisher: 'Python Software Foundation',
        url: 'https://docs.python.org/3/library/csv.html',
      },
      {
        title: '10 Minutes to pandas',
        publisher: 'pandas documentation',
        url: 'https://pandas.pydata.org/docs/user_guide/10min.html',
      },
      {
        title: 'Random Generator',
        publisher: 'NumPy documentation',
        url: 'https://numpy.org/doc/stable/reference/random/generator.html',
      },
      {
        title: 'Principles for effective risk data aggregation and risk reporting (BCBS 239)',
        publisher: 'Basel Committee on Banking Supervision',
        url: 'https://www.bis.org/publ/bcbs239.htm',
      },
    ],
  },
  {
    slug: 'monte-carlo-simulation-financial-risk-management',
    title: 'Monte Carlo Simulation in Financial Risk Management',
    seoTitle: 'Monte Carlo Simulation for Financial Risk Management',
    seoDescription:
      'Learn how Monte Carlo risk simulation works, follow a hypothetical portfolio calculation, and understand its assumptions and limits.',
    category: 'Risk Analytics',
    read: '8 min',
    excerpt:
      'Learn how simulated scenarios can estimate a range of possible portfolio outcomes—and why the model is only as useful as its assumptions.',
    introduction:
      'Monte Carlo simulation estimates a range of possible outcomes by repeatedly generating values from specified probability models and recalculating the result. In financial risk work, those recalculations can represent portfolio values, losses, cash needs, or capital under uncertainty. Simulation does not reveal what will happen; it shows what follows if the modeled distributions, relationships, and portfolio representation are reasonable enough for the question being asked.',
    coverImage: {
      src: `${imageDirectory}/monte-carlo-cover.svg`,
      alt: 'A portfolio path branching into many possible outcomes, with a distribution curve and a highlighted hypothetical tail.',
      caption:
        'A Monte Carlo model explores many possible paths under stated assumptions; the resulting range is not a forecast.',
    },
    sections: [
      {
        heading: 'How the simulation works',
        paragraphs: [
          'First define the quantity to estimate, such as one-day portfolio loss at a stated confidence level. Next specify distributions for uncertain inputs and how those inputs relate to one another. A computer draws a set of values, applies them to the portfolio, and records the result. Repeating the process many times produces an empirical distribution of modeled outcomes. A percentile of that distribution can summarize a tail threshold; the scenarios themselves can help reveal which assumptions or positions drive the result.',
          'The random draws are not observations from the future. They are generated from a model selected by the analyst. A familiar example assumes returns are normally distributed, but real returns can have skew, fat tails, volatility clustering, jumps, and changing correlations. Other distributions or historical resampling methods bring different assumptions. A larger run may reduce sampling noise around the chosen model’s output, but it cannot correct an unrealistic model or incomplete portfolio.',
        ],
      },
      {
        heading: 'What risk teams use it to explore',
        paragraphs: [
          'Simulation is useful when a question involves several uncertain inputs or nonlinear payoffs. A team might estimate the distribution of a portfolio’s value, explore how market variables affect a structured product, or test whether funding resources remain adequate across combinations of cash flows and market moves. It can support sensitivity analysis by changing one modeling choice at a time, and scenario analysis by deliberately imposing a specified shock rather than relying only on random draws.',
          'The choice of horizon and output matters. A one-day loss distribution does not automatically describe a ten-day liquidation, an annual investment outcome, or a firm’s peak cash need. Some models simulate only market risk and omit counterparty default, transaction costs, liquidity effects, or management actions. The model owner should define the question and explain what the outputs include before comparing a result with an internal limit or a regulatory measure.',
        ],
      },
      {
        heading: 'Read the distribution and the scenario range',
        paragraphs: [
          'A histogram shows how often simulated values fell into different ranges; a tail percentile marks a point in that modeled distribution. The number of trials affects the stability of an estimated tail: very rare outcomes may be represented by only a small fraction of the generated paths. Reporting a precise-looking dollar result without uncertainty, run settings, and model limitations can overstate what simulation has established.',
          'A fan chart answers a different question by showing how a range of simulated values may widen across time. Its center and outer bands depend on the assumptions about drift, volatility, and dependence. A narrow band does not mean the real world is low-risk if important events or regimes were excluded. Compare bands with historical periods and stress scenarios, and label whether each boundary is a percentile, confidence interval, or a manually chosen stress level.',
        ],
      },
      {
        heading: 'Validation, reproducibility, and limits',
        paragraphs: [
          'Good practice includes documenting distributions, parameter estimates, correlations, calibration windows, random-number generator, seed where relevant, and software version. Test the implementation against a simple case with a known answer, check convergence across run sizes, and compare simulated results with alternative methods. Backtesting asks whether outcomes over an appropriate historical sample are consistent with model expectations; stress testing asks how the model behaves in deliberately adverse conditions. They are complementary, not interchangeable.',
          'A simulation is vulnerable to model risk, data errors, unstable parameters, and omitted dependencies. Correlations often change during stress, while historical data may not contain the event a decision-maker cares about. Monte Carlo can give a false sense of completeness because it generates many rows, even though every row is constrained by the model. An independent review should challenge the conceptual design and outputs, not only check that the code runs.',
        ],
      },
      {
        heading: 'Why This Matters for Risk Managers',
        paragraphs: [
          'Simulation can make uncertainty visible when a single point estimate would hide a range of possible outcomes. Risk managers can use it to ask how much of a result comes from portfolio exposures, distribution choices, correlations, or model boundaries. Communicating the assumptions and tail behavior is as important as producing the simulation, particularly when leaders may treat a percentile as a hard maximum loss.',
        ],
      },
      {
        heading: 'Common mistakes and practical takeaways',
        paragraphs: [
          'Common errors include treating simulated paths as independent when the process has time dependence, using a convenient distribution without testing alternatives, assuming correlations remain fixed, interpreting a percentile as a worst case, and reporting excess decimal precision. A simulation may also understate risk if it models liquid prices but ignores the cost or time required to close positions. Explain the horizon, confidence level, valuation method, and excluded risks in plain language.',
          'Use simulation alongside—not instead of—historical analysis, stress scenarios, sensitivity checks, and expert review. Make the output reproducible, show whether estimates move materially when assumptions change, and define an escalation process for unexpected results. Regulatory expectations depend on the institution, model, and applicable framework; the methods described here are analytical practices, not a universal rule that every organization must use Monte Carlo.',
        ],
      },
    ],
    illustrations: [
      {
        src: `${imageDirectory}/monte-carlo-distribution.svg`,
        alt: 'Hypothetical normal-loss distribution for a one-million-dollar portfolio with a 1 percent daily standard deviation, a 95 percent VaR estimate of 16,450 dollars, and expected shortfall of about 20,630 dollars.',
        caption:
          'Hypothetical one-day illustration: under a zero-mean normal-loss assumption with 1% standard deviation, the 95% VaR benchmark is about $16,450 and expected shortfall is about $20,630.',
        afterSection: 'Read the distribution and the scenario range',
      },
      {
        src: `${imageDirectory}/monte-carlo-fan.svg`,
        alt: 'Hypothetical one-year range from a 100,000-dollar starting value to an approximate 90 percent interval of 80,325 to 129,675 dollars under a 5 percent mean and 15 percent volatility assumption.',
        caption:
          'Hypothetical one-period fan-chart example using arithmetic returns: $100,000 × [1 + (5% ± 1.645 × 15%)] gives an approximate 90% range of $80,325–$129,675.',
        afterSection: 'Validation, reproducibility, and limits',
      },
    ],
    example: {
      heading: 'Worked hypothetical example: one-day portfolio loss',
      paragraphs: [
        'Assume a fictional $1,000,000 portfolio has a one-day loss modeled as a normal distribution with mean $0 and standard deviation 1% of portfolio value, or $10,000. At the 95th percentile, the standard-normal quantile is approximately 1.645. The modeled 95% VaR is therefore 1.645 × $10,000 = $16,450. Under this assumption, the loss exceeds $16,450 in about 5% of modeled outcomes; it is not the largest possible loss.',
        'For a normal distribution, the mean loss in the worst 5% is approximately $10,000 × φ(1.645) ÷ 0.05 ≈ $20,630, where φ is the standard normal density. This is the expected shortfall benchmark shown in the illustration. The two values are analytical checks for a simple distribution, not observed Monte Carlo results or a validated model for a real portfolio. Fat tails, changing volatility, and liquidity could materially change the estimates.',
      ],
    },
    keyTakeaways: [
      'Simulation maps assumptions into a distribution of possible outcomes; it does not predict the future.',
      'Define horizon, distributions, dependence, valuation method, and omitted risks before interpreting results.',
      'Test convergence and sensitivity, then compare Monte Carlo with historical and stressed scenarios.',
    ],
    relatedArticles: [
      'stress-testing-explained',
      'model-risk-management-2026',
      'risk-dashboards-real-time-exposure',
    ],
    learningPaths: ['financial-risk'],
    sources: [
      {
        title: 'Random Generator',
        publisher: 'NumPy documentation',
        url: 'https://numpy.org/doc/stable/reference/random/generator.html',
      },
      {
        title: 'Revised Guidance on Model Risk Management (SR 26-2)',
        publisher: 'Board of Governors of the Federal Reserve System',
        url: 'https://www.federalreserve.gov/supervisionreg/srletters/SR2602.htm',
      },
      {
        title: 'Minimum capital requirements for market risk',
        publisher: 'Basel Committee on Banking Supervision',
        url: 'https://www.bis.org/bcbs/publ/d457.htm',
      },
      {
        title: 'Stress Tests and Capital Planning',
        publisher: 'Board of Governors of the Federal Reserve System',
        url: 'https://www.federalreserve.gov/supervisionreg/stress-tests-capital-planning.htm',
      },
    ],
  },
  {
    slug: 'algorithmic-trading-risk-controls-explained',
    title: 'Algorithmic Trading Risk Controls Explained',
    seoTitle: 'Algorithmic Trading Risk Controls: A Practical Guide',
    seoDescription:
      'Understand pre-trade checks, approvals, monitoring, and the distinct U.S. securities, futures, NFA, and exchange rule frameworks.',
    category: 'Market Access',
    read: '9 min',
    excerpt:
      'Follow an electronic order through pre-trade checks and monitoring, with clear distinctions between securities and futures frameworks.',
    introduction:
      'An algorithm can submit, amend, and cancel orders faster than a person can review each action. Effective controls therefore combine limits before an order is released, monitoring while it is active, and a tested way to stop or contain abnormal activity. The right design depends on the product, firm, access arrangement, and venue. This overview is educational, not legal advice; securities market-access rules must not be confused with futures, NFA, or exchange requirements.',
    coverImage: {
      src: `${imageDirectory}/algorithmic-controls-cover.svg`,
      alt: 'A hypothetical trading order moving through a risk gate, approve or reject outcomes, and ongoing monitoring.',
      caption:
        'A risk-control design checks orders before release and monitors system behavior after approval.',
    },
    sections: [
      {
        heading: 'Start with the order lifecycle',
        paragraphs: [
          'Map how an instruction moves from strategy code to an execution venue: who creates it, which system validates it, where it is routed, how fills and cancels return, and which positions and limits are updated. Identify every path, including manual entry, alternate routes, and recovery procedures. A control that covers one interface but not another can leave a blind spot. The map should name system owners, data dependencies, and the person authorized to change or disable a control.',
          'Common pre-trade checks include authorized account and instrument, order size, notional value, price bands, position or credit limits, duplicate-order detection, and market-state checks. A check should specify what data it uses, how current that data must be, and what happens if the data or control service is unavailable. The thresholds are firm-specific examples of sound design; they are not universal regulatory limits. Controls should be proportionate to the strategy and the potential impact of a failure.',
        ],
      },
      {
        heading: 'Use layers: pre-trade, in-flight, and post-trade',
        paragraphs: [
          'Before release, deterministic checks can reject an order that exceeds an approved quantity or price boundary, lacks a valid account, or would breach a defined exposure limit. During trading, monitoring can look for unusual order rates, repeated rejects, message bursts, unexpected position changes, or a strategy that keeps submitting after its intended stop condition. After execution, reconciliation and surveillance can reveal gaps between the order system, execution reports, positions, and risk records.',
          'A kill switch or cancel-on-disconnect feature can help contain an incident, but it is not a substitute for sound pre-trade limits and recovery planning. Test what it actually stops: new orders, working orders, a specific strategy, an account, or all access. Establish who can activate it, how the action is recorded, and how trading can resume safely. A fail-closed choice can interrupt legitimate activity; a fail-open choice can permit unintended orders. The trade-off requires documented, firm-specific analysis.',
        ],
      },
      {
        heading: 'Keep securities and futures obligations distinct',
        paragraphs: [
          'For U.S. securities market access, SEC Rule 15c3-5 applies to covered broker-dealers with market access. It calls for documented risk-management controls and supervisory procedures reasonably designed to address specified financial and regulatory risks. FINRA’s market-access guidance explains the broker-dealer context. The rule is not a general statute for every trading algorithm, customer, venue, or futures account; applicability turns on the legal entity and the particular access arrangement.',
          'Futures have a separate CFTC framework. For example, 17 CFR 1.73 addresses risk-management programs of futures commission merchants that are clearing members of derivatives clearing organizations; it is not simply the futures equivalent of Rule 15c3-5 for every participant. Other CFTC requirements may apply depending on the firm and activity. NFA members also have supervisory obligations under NFA rules, and NFA guidance describes members’ responsibilities when certain services are outsourced. Exchanges such as CME Group maintain their own rulebooks and venue controls. Participants must check the current rule set for their registration, clearing relationship, product, and venue.',
        ],
      },
      {
        heading: 'Govern configuration, testing, and incidents',
        paragraphs: [
          'A control can be weakened by a parameter change, stale reference data, an unreviewed deployment, or a bypass introduced for convenience. Maintain an approved limit inventory with owner, rationale, effective date, and change history. Use separation of duties for material changes, test both expected and adversarial boundary cases, and ensure the test environment reflects routing and market-data behavior closely enough to be informative. Keep evidence of results and unresolved deficiencies.',
          'An incident plan should cover missed or duplicate orders, stale positions, lost connectivity, abnormal message rates, vendor outages, and incorrect market data. Assign decision authority and contact routes in advance. After an event, preserve logs, reconstruct the order timeline, reconcile positions, assess customer or market impact, and remediate the cause. Regulatory notification or reporting duties are fact-specific and should be assessed with compliance and counsel rather than assumed from a generic checklist.',
        ],
      },
      {
        heading: 'Why This Matters for Risk Managers',
        paragraphs: [
          'Automated order flow can amplify a small coding, data, or configuration defect into a large exposure before a manual review is possible. Risk managers help connect strategy logic, limits, surveillance, technology resilience, and accountable approval. They should ask whether controls cover the entire order lifecycle, whether thresholds reflect actual exposure, whether exceptions can be explained, and whether the applicable securities or futures rule framework has been correctly identified.',
        ],
      },
      {
        heading: 'Common mistakes and practical takeaways',
        paragraphs: [
          'Common mistakes include relying only on end-of-day limits, assuming a customer’s control replaces a broker-dealer obligation, applying securities rules to futures without checking scope, treating a kill switch as proof of compliance, and testing only normal market conditions. Also avoid interpreting a rejected order as a failed trade if the system has already routed another copy. Unique order identifiers, timestamps, and end-to-end reconciliation matter.',
          'Begin with a control map and a few measurable failure scenarios. Set thresholds through documented governance, alert on failed checks as well as approved orders, and test the actual stop and recovery paths. Ask compliance or counsel to verify the current requirements for each entity and venue. Practices such as independent change approval, layered monitoring, and simulation testing are sensible risk controls, but do not describe them as statutory requirements unless a specific applicable rule says so.',
        ],
      },
    ],
    illustrations: [
      {
        src: `${imageDirectory}/algorithmic-controls-flow.svg`,
        alt: 'Flowchart from algorithmic order submission through identity, size, price, and exposure checks to approve or reject, followed by monitoring and stop controls.',
        caption:
          'Illustrative order workflow. Control thresholds and the legal requirements that apply depend on the firm, product, access path, and venue.',
        afterSection: 'Use layers: pre-trade, in-flight, and post-trade',
      },
    ],
    example: {
      heading: 'Hypothetical example: a notional limit rejects an order',
      paragraphs: [
        'A fictional strategy submits an order to buy 300 shares at a limit price of $50. The order’s maximum notional value is 300 × $50 = $15,000. Suppose the firm’s approved illustrative per-order threshold for this strategy is $10,000. A pre-trade control rejects the order and records the account, strategy, limit, requested value, and reason. The $10,000 value is invented for teaching; it is not a regulatory threshold.',
        'The operator investigates whether the quantity was entered incorrectly, the strategy sizing changed, or the threshold is out of date. Increasing the limit to permit the trade would require the firm’s established approval process, not an informal override. The incident record should also confirm that the order was not routed through another path and that the account’s working and executed exposure remains accurate.',
      ],
    },
    keyTakeaways: [
      'Map the full order lifecycle and use layered controls before, during, and after execution.',
      'SEC Rule 15c3-5 is a securities broker-dealer market-access rule; futures have separate CFTC, NFA, and exchange frameworks.',
      'Treat thresholds, exceptions, kill switches, and recovery as governed controls that require testing and evidence.',
    ],
    relatedArticles: [
      'sec-rule-15c3-5-pre-trade-risk-controls',
      'risk-dashboards-real-time-exposure',
      'model-risk-management-2026',
    ],
    learningPaths: ['financial-risk'],
    sources: [
      {
        title: '17 CFR § 240.15c3-5: Risk Management Controls for Brokers or Dealers with Market Access',
        publisher: 'Cornell Legal Information Institute, U.S. Code of Federal Regulations',
        url: 'https://www.law.cornell.edu/cfr/text/17/240.15c3-5',
      },
      {
        title: 'Market Access',
        publisher: 'Financial Industry Regulatory Authority',
        url: 'https://www.finra.org/rules-guidance/key-topics/market-access',
      },
      {
        title: '17 CFR § 1.73: Clearing Futures Commission Merchant Risk Management',
        publisher: 'U.S. Government Publishing Office, 2025 Code of Federal Regulations',
        url: 'https://www.govinfo.gov/content/pkg/CFR-2025-title17-vol1/xml/CFR-2025-title17-vol1-sec1-73.xml',
      },
      {
        title: 'NFA Compliance Rules 2-9 and 2-36: Members’ Use of Third-Party Service Providers',
        publisher: 'National Futures Association, Interpretive Notice 9079',
        url: 'https://www.nfa.futures.org/rulebooksql/rules.aspx?RuleID=9079&Section=9',
      },
      {
        title: 'CME Group Rulebooks',
        publisher: 'CME Group',
        url: 'https://www.cmegroup.com/rulebook/CME/',
      },
    ],
  },
  {
    slug: 'understanding-liquidity-risk',
    title: 'Understanding Liquidity Risk: When Assets Cannot Be Sold Quickly',
    seoTitle: 'Liquidity Risk: Why Assets May Not Sell Quickly',
    seoDescription:
      'Understand market and funding liquidity risk, bid-ask spreads, liquidation costs, and practical ways to examine hypothetical exit capacity.',
    category: 'Financial Risk',
    read: '8 min',
    excerpt:
      'Understand why a quoted price may not be the price available for a large sale, and how liquidity affects portfolios and cash planning.',
    introduction:
      'Liquidity risk is the possibility that an asset cannot be sold, or a cash obligation cannot be met, when needed without an unacceptable cost. A security may have a visible market price but limited depth at that price. A firm may own valuable assets and still lack cash on the date a payment is due. These related but different problems are easier to manage when the time horizon, market conditions, and cash flows are explicit.',
    coverImage: {
      src: `${imageDirectory}/liquidity-risk-cover.svg`,
      alt: 'A portfolio asset moving from a visible midpoint quote through a widening bid-ask spread toward cash available after a sale.',
      caption:
        'The price shown on a screen and the cash realized from selling a large position can differ.',
    },
    sections: [
      {
        heading: 'Market liquidity and funding liquidity',
        paragraphs: [
          'Market liquidity describes how readily an asset can be traded without a large price concession. Measures include the bid-ask spread, available depth, turnover, and the time and market impact associated with a sale. Funding liquidity describes whether an organization can obtain cash or meet obligations when due. Funding pressure can force asset sales; heavy selling can reduce market liquidity and further increase funding pressure.',
          'Liquidity is not a permanent label attached to an asset. It can change with market conditions, trade size, dealer capacity, concentration, settlement conventions, and the urgency of the seller. An asset that is usually easy to trade may become costly during stress. A recent transaction or quoted midpoint does not establish that a large position can be sold promptly at that value.',
        ],
      },
      {
        heading: 'Why a quote is not the same as an exit price',
        paragraphs: [
          'A bid-ask spread is the difference between the price a buyer is willing to pay and the price a seller is asking. A small trade may execute near the best displayed bid, while a larger sale may consume several layers of buyers and push the average execution price lower. Market impact can also arise because other participants react to the order or because the seller must trade quickly. Transaction costs and settlement timing affect the cash ultimately available.',
          'A liquidity assessment should specify the position size, assumed liquidation period, market conditions, and whether the price represents a midpoint, executable bid, or modeled estimate. It should consider concentration and trading volume without assuming historical volume will remain available in stress. For less frequently traded or bespoke assets, independent valuation, dealer indications, and observable market activity may differ; the uncertainty itself should be reported.',
        ],
      },
      {
        heading: 'Assess liquidity across assets and obligations',
        paragraphs: [
          'For a portfolio, consider the amount that might need to be sold, the likely cash flows, settlement delays, collateral calls, and potential withdrawals. A position-level view can estimate how long a sale might take under stated assumptions, but aggregation matters: many positions may rely on the same dealers, market, or funding source. A firm should also examine concentration, encumbrance, currency, and whether asset proceeds are available in the account where an obligation falls due.',
          'Stress scenarios can ask what happens if trading volume falls, spreads widen, haircuts rise, counterparties withdraw financing, or several obligations occur together. These are scenario assumptions, not predictions. A cash-flow ladder or contingency plan can identify timing mismatches, while stress testing can show the size of a potential shortfall. No single ratio captures every source of liquidity risk; the measure should fit the business and the decision.',
          'A useful monitoring view can pair estimated days to sell with expected settlement dates and cash obligations. It should show the assumed sale size and market conditions, identify assets that are pledged or concentrated, and flag when the data are stale. A dashboard cannot guarantee future trading capacity, but it can make the assumptions behind a liquidity estimate visible to the people responsible for action.',
        ],
      },
      {
        heading: 'Regulatory scope and industry practice',
        paragraphs: [
          'Regulatory requirements vary by institution and product. For example, SEC Rule 22e-4 establishes liquidity-risk-management program requirements for registered open-end investment companies, including specified classification, review, and reporting elements, subject to the rule’s scope and exclusions. It is not a universal liquidity rule for every investor or company. Banking organizations face separate supervisory and prudential frameworks, including Basel Committee guidance; the Basel principles are not automatically binding domestic law for every firm.',
          'Recommended practices include documented liquidity assumptions, regular stress scenarios, clear ownership, escalation triggers, contingency funding options, and independent review. Those practices can be useful outside regulated sectors, but should not be presented as a legal mandate unless the specific rule applies. A fund, bank, broker-dealer, insurer, and nonfinancial business can face different obligations and different liquidity exposures; compliance staff should confirm scope and current rules.',
        ],
      },
      {
        heading: 'Why This Matters for Risk Managers',
        paragraphs: [
          'Liquidity risk connects valuation to timing. A portfolio report can show a positive market value while the organization still lacks cash to meet a near-term obligation. Risk managers help compare likely sale proceeds and settlement timing with cash needs, challenge assumptions about market depth, and identify dependencies that could fail together. This perspective can prevent the false comfort of a single “liquid” label or a recent midpoint price.',
        ],
      },
      {
        heading: 'Common mistakes and practical takeaways',
        paragraphs: [
          'Common mistakes include treating volume as guaranteed capacity, assuming a bid-ask spread stays constant in stress, ignoring settlement time, applying the same liquidation horizon to every asset, and counting assets that are pledged or otherwise unavailable. Another error is to conflate market liquidity with solvency: a price concession may create a loss, while a cash timing gap can exist even when total assets exceed liabilities.',
          'For each material exposure, document how much could be sold, over what period, at what assumed cost, and with what evidence. Run at least one scenario that challenges normal trading conditions; compare expected cash outflows with accessible funding; and define who escalates a shortfall. Treat the results as estimates with uncertainty and update them when market structure, holdings, counterparties, or rules change.',
        ],
      },
    ],
    illustrations: [
      {
        src: `${imageDirectory}/liquidity-spread-impact.svg`,
        alt: 'Hypothetical bid levels for a 10,000-share sale: an initial 2,000 shares at 99 dollars 90 cents, followed by lower bid levels, with total proceeds of 994,800 dollars versus a one-million-dollar midpoint value.',
        caption:
          'Hypothetical depth ladder: selling 10,000 shares against the displayed bids yields $994,800, or $5,200 below the $1,000,000 midpoint value. Prices and depth are illustrative.',
        afterSection: 'Why a quote is not the same as an exit price',
      },
    ],
    example: {
      heading: 'Worked hypothetical example: sale through limited market depth',
      paragraphs: [
        'Suppose an investor holds 10,000 shares with a displayed midpoint of $100, so the position’s midpoint value is $1,000,000. For this purely hypothetical illustration, the available bids are 2,000 shares at $99.90, another 2,000 at $99.80, 2,000 at $99.60, 2,000 at $99.30, and 2,000 at $98.80. Selling across those five levels produces $199,800 + $199,600 + $199,200 + $198,600 + $197,600 = $994,800.',
        'The $5,200 difference from midpoint is 0.52% of $1,000,000. This arithmetic does not predict an actual execution: real orders can change available depth, prices can move, fees and settlement matter, and bids may disappear. The example shows why position value alone does not describe the cash or time available from a sale.',
      ],
    },
    keyTakeaways: [
      'Separate the ability to trade an asset from the ability to meet cash obligations on time.',
      'Estimate liquidation cost and timing for a stated position size and market scenario, not from a label alone.',
      'Check the regulatory scope of the particular fund, bank, firm, asset, and jurisdiction.',
    ],
    relatedArticles: [
      'what-is-financial-risk',
      'portfolio-diversification',
      'stress-testing-explained',
    ],
    learningPaths: ['financial-risk'],
    sources: [
      {
        title: '17 CFR § 270.22e-4: Liquidity Risk Management Programs',
        publisher: 'Cornell Legal Information Institute, U.S. Code of Federal Regulations',
        url: 'https://www.law.cornell.edu/cfr/text/17/270.22e-4',
      },
      {
        title: 'Principles for Sound Liquidity Risk Management and Supervision',
        publisher: 'Basel Committee on Banking Supervision',
        url: 'https://www.bis.org/publ/bcbs144.htm',
      },
      {
        title: 'Principles for effective risk data aggregation and risk reporting (BCBS 239)',
        publisher: 'Basel Committee on Banking Supervision',
        url: 'https://www.bis.org/publ/bcbs239.htm',
      },
    ],
  },
  {
    slug: 'machine-learning-financial-risk-anomalies',
    title: 'How Machine Learning Detects Financial Risk Anomalies',
    seoTitle: 'How Machine Learning Detects Financial Risk Anomalies',
    seoDescription:
      'Learn how anomaly detection can flag unusual financial activity, why alerts are not proof, and how to manage false positives and model risk.',
    category: 'AI & Technology',
    read: '8 min',
    excerpt:
      'Explore how anomaly detection surfaces unusual patterns in financial data—and why human review, context, and model governance still matter.',
    introduction:
      'An anomaly-detection model looks for observations that differ from a learned pattern or a defined baseline. In financial risk, unusual payments, trading activity, account behavior, or operational events can merit investigation. “Unusual” does not mean fraudulent, unsafe, or incorrect: it means a pattern deserves context. The method is a signal for triage, not a verdict, and its usefulness depends on data quality, review capacity, and how the organization responds.',
    coverImage: {
      src: `${imageDirectory}/ml-anomaly-cover.svg`,
      alt: 'A hypothetical stream of financial transactions passing through a model that highlights an unusual point for human review.',
      caption:
        'An anomaly score can prioritize review, but a person or separate process must establish what the alert means.',
    },
    sections: [
      {
        heading: 'What an anomaly detector can flag',
        paragraphs: [
          'A detector may compare an event with a customer’s history, a peer group, a time-of-day pattern, or a multivariable profile. Examples include a payment amount far above a customer’s usual range, an unusual sequence of transfers, a trading order inconsistent with normal activity, or a sudden change in a system’s error rate. A simple rule can detect a value above a fixed threshold; statistical and machine-learning methods can model combinations of features or recurring patterns.',
          'Methods include clustering, density estimation, isolation-based approaches, autoencoders, and supervised classifiers when labeled examples exist. An unsupervised method can identify deviations without a complete catalogue of past incidents, but its output may be hard to interpret and can flag rare but legitimate behavior. The selection should follow the operational question, the available evidence, and the cost of missed events versus unnecessary review.',
        ],
      },
      {
        heading: 'From raw data to a reviewed alert',
        paragraphs: [
          'A reliable workflow begins by defining the event unit and assembling data that are permitted, relevant, and sufficiently accurate. Features may describe amounts, timing, counterparty relationships, frequency, location, or changes from a baseline. The model produces a score or category; a threshold converts that output into an alert. Reviewers then use policies, source records, and contextual information to classify the alert and decide what action, if any, is warranted.',
          'Threshold choice is a resource and risk decision. A lower threshold may catch more unusual cases but generate more alerts; a higher threshold may reduce workload while missing events. The organization should monitor alert volume, confirmed outcomes, unresolved cases, review time, and changes in the underlying data. A score should not be presented as a probability of fraud unless the model has been calibrated for that interpretation and the evidence supports it.',
        ],
      },
      {
        heading: 'False positives, false negatives, and changing patterns',
        paragraphs: [
          'A false positive is an alert that review does not substantiate as the target event; a false negative is a relevant event the detector did not flag. Both matter. Too many false positives can overwhelm investigators, delay genuine cases, and unfairly burden customers. False negatives can leave emerging risks unseen. Accuracy alone can be misleading when true events are uncommon; precision, recall, alert volume, and consequences should be examined together and interpreted in the context of how labels were created.',
          'Patterns also change. New products, seasonality, shifts in customer behavior, economic conditions, or a change in data collection can make a previously useful baseline stale. Monitor for input drift and changing outcome rates, and define when recalibration, retraining, or a pause is warranted. A model that continues to score records is not necessarily still fit for purpose. Preserve an alternative review path when the data pipeline or model is unavailable.',
        ],
      },
      {
        heading: 'Governance and responsible use',
        paragraphs: [
          'Document the intended use, affected decisions, data sources, limitations, threshold rationale, testing, and accountable owner. Test representative cases and edge conditions, evaluate performance across relevant segments where lawful and appropriate, and examine whether proxy variables or data gaps create avoidable disparities. Restrict access to sensitive information, retain records needed for review, and make sure investigators can understand enough of the reason for an alert to assess it consistently.',
          'NIST’s AI Risk Management Framework is a voluntary resource for managing AI risks; it is not itself a binding financial regulation. The Financial Stability Board has described both potential benefits and vulnerabilities from AI and machine learning in finance. Supervisory model-risk guidance, such as the Federal Reserve’s 2026 interagency guidance, has a defined banking scope and should not be generalized to every company. Applicable duties depend on the institution, use case, product, and jurisdiction.',
        ],
      },
      {
        heading: 'Why This Matters for Risk Managers',
        paragraphs: [
          'An anomaly system changes where attention goes: it can surface patterns a team might not see in a large dataset, but it can also redirect scarce review resources toward noise. Risk managers help make the model’s purpose, thresholds, failure modes, and escalation path explicit. They should ask what counts as a confirmed event, who resolves an alert, how missed cases are learned from, and whether people can challenge or override a score with a documented reason.',
        ],
      },
      {
        heading: 'Common mistakes and practical takeaways',
        paragraphs: [
          'Common mistakes include equating an anomaly score with wrongdoing, optimizing only for historical accuracy, ignoring the cost of investigation, training on labels that reflect past review bias, and deploying a model without monitoring drift. Leaking future information into training data can make a retrospective test look better than real-time performance. So can evaluating on records that are not independent of the training set.',
          'Begin with a narrow use case and a clear human decision. Compare the model with a simple baseline, test on data separated by time where appropriate, and report alert burden alongside detection measures. Review false positives and misses, update thresholds through governance, and preserve a route for urgent concerns when automation fails. Do not automate high-impact actions solely from an anomaly score without appropriate legal, policy, and human review.',
        ],
      },
    ],
    illustrations: [
      {
        src: `${imageDirectory}/ml-anomaly-workflow.svg`,
        alt: 'Workflow showing financial records being checked and transformed into features, scored by a model, reviewed by a person, and monitored for drift.',
        caption:
          'Anomaly detection is a governed review loop: data quality, human interpretation, and monitoring are part of the system.',
        afterSection: 'From raw data to a reviewed alert',
      },
      {
        src: `${imageDirectory}/ml-false-positive.svg`,
        alt: 'Hypothetical review of 1,000 transactions: 20 alerts, eight confirmed unusual cases, and 12 benign alerts, giving 40 percent precision among flagged cases.',
        caption:
          'Hypothetical example: 8 confirmed cases among 20 alerts means precision of 8 ÷ 20 = 40%; the other 12 alerts are false positives in this review.',
        afterSection: 'False positives, false negatives, and changing patterns',
      },
    ],
    example: {
      heading: 'Hypothetical example: why a flagged payment needs context',
      paragraphs: [
        'Suppose a fictional monitoring system reviews 1,000 payments and flags 20 for investigation. Reviewers confirm that eight are genuinely unusual under the organization’s stated policy; 12 are legitimate payments that differed from a baseline for benign reasons. In this example, alert precision is 8 ÷ 20 = 40%. The 12 false positives are not evidence that the model is useless, but they represent review work and possible customer friction that the team should measure.',
        'The example does not tell us how many relevant events the model missed, because we do not know how many confirmed events existed among the other 980 payments. It therefore cannot establish recall or overall detection performance. Reviewers should record outcomes consistently, monitor workload, and check whether alerts are concentrated in a particular customer group or data source before deciding to change the threshold.',
      ],
    },
    keyTakeaways: [
      'An anomaly score is a prompt for investigation, not proof of fraud or a calibrated probability by default.',
      'Measure false positives, missed events, review capacity, and changes in data—not accuracy alone.',
      'Define human oversight, escalation, privacy, validation, and ongoing monitoring before deployment.',
    ],
    relatedArticles: [
      'how-ai-is-transforming-risk-management',
      'model-risk-management-2026',
      'risk-dashboards-real-time-exposure',
    ],
    learningPaths: ['financial-risk', 'cyber-risk'],
    sources: [
      {
        title: 'Artificial Intelligence Risk Management Framework (AI RMF 1.0)',
        publisher: 'National Institute of Standards and Technology',
        url: 'https://www.nist.gov/itl/ai-risk-management-framework',
      },
      {
        title: 'Artificial Intelligence and Machine Learning in Financial Services',
        publisher: 'Financial Stability Board',
        url: 'https://www.fsb.org/2017/11/artificial-intelligence-and-machine-learning-in-financial-service/',
      },
      {
        title: 'Revised Guidance on Model Risk Management (SR 26-2)',
        publisher: 'Board of Governors of the Federal Reserve System',
        url: 'https://www.federalreserve.gov/supervisionreg/srletters/SR2602.htm',
      },
      {
        title: 'Principles for effective risk data aggregation and risk reporting (BCBS 239)',
        publisher: 'Basel Committee on Banking Supervision',
        url: 'https://www.bis.org/publ/bcbs239.htm',
      },
    ],
  },
  {
    slug: 'var-vs-expected-shortfall',
    title: 'VaR vs. Expected Shortfall: Which Risk Measure Tells You More?',
    seoTitle: 'VaR vs. Expected Shortfall: Comparing Tail-Risk Measures',
    seoDescription:
      'Compare value at risk with expected shortfall, work through a hypothetical loss distribution, and see how assumptions shape both measures.',
    category: 'Risk Analytics',
    read: '8 min',
    excerpt:
      'Compare what value at risk and expected shortfall reveal about losses beyond a percentile—and what neither measure can tell you alone.',
    introduction:
      'Value at risk (VaR) and expected shortfall (ES) summarize different aspects of a loss distribution. VaR identifies a loss threshold at a chosen confidence level and horizon. ES estimates the average loss in the tail beyond that threshold under a specified convention. ES can convey more about tail severity, but it is not automatically more accurate or sufficient; both measures depend on data, model choices, and clear definitions.',
    coverImage: {
      src: `${imageDirectory}/var-es-cover.svg`,
      alt: 'A hypothetical loss distribution with a vertical VaR threshold and a shaded tail whose average loss is marked as expected shortfall.',
      caption:
        'VaR marks a percentile threshold; expected shortfall summarizes losses in the selected tail.',
    },
    sections: [
      {
        heading: 'What VaR says—and what it leaves out',
        paragraphs: [
          'A VaR statement needs a confidence level, time horizon, portfolio definition, and method. A one-day 95% VaR of $100,000 means that, under the model and assumptions used, the estimated loss threshold is $100,000 at the 95th percentile. In the model, losses exceed that threshold in roughly 5% of outcomes. It does not mean the maximum loss is $100,000, that a loss will occur only once in every 20 days, or that the estimate is reliable without validation.',
          'VaR is intuitive as a threshold, but it says little about how large losses may be after the threshold is crossed. Two portfolios can have the same VaR and very different tails. The result can also be sensitive to the confidence level, the sample, and the estimation method. Historical simulation, parametric assumptions, and Monte Carlo models can produce different answers because they represent uncertainty differently.',
        ],
      },
      {
        heading: 'What expected shortfall adds',
        paragraphs: [
          'Expected shortfall at a confidence level is commonly described as the mean loss in the worst tail beyond the corresponding VaR threshold. It therefore incorporates information about the severity of losses in that tail, rather than reporting only its boundary. In continuous distributions, this description is straightforward; in discrete data, ties at the threshold and the exact averaging convention matter. State the convention, especially when comparing results across systems.',
          'ES is not a worst-case loss, a forecast of the next crisis, or a solution to model uncertainty. Rare losses are difficult to estimate from short samples, and the observed tail may be unstable. A parametric ES can inherit distributional errors; a historical estimate can miss unprecedented events; a simulation can reproduce only the assumptions encoded in it. Supplement it with scenarios, sensitivity analysis, and discussion of liquidity and concentration.',
          'A tail average can also respond strongly to one or two extreme observations, especially when the sample is short. That makes transparent data selection and sensitivity testing important: show how the estimate changes when the observation window, distribution, or stress assumptions change. More tail detail is useful only when decision-makers can see how uncertain that detail remains.',
        ],
      },
      {
        heading: 'A small loss sample makes the distinction visible',
        paragraphs: [
          'A toy sample can illustrate the concepts, but its small size makes it unsuitable for estimating real risk. Sort losses from smallest to largest, choose a confidence percentile, and locate the corresponding threshold using a stated quantile convention. Then identify the worst tail observations and average them for the illustrative ES. Rounding, sample size, and a different convention can change the result, so the method belongs alongside the number.',
          'The comparison also depends on what “loss” means. It may be a change in portfolio value, a loss relative to a benchmark, or another defined measure. Ensure gains and losses use a consistent sign convention, and do not compare one-day VaR with a monthly ES as if they were directly interchangeable. Portfolio composition, valuation, netting, and horizon should be aligned before interpreting the difference.',
        ],
      },
      {
        heading: 'How firms use these measures',
        paragraphs: [
          'Risk teams may use VaR or ES to monitor market exposure, compare positions, or inform limits, subject to internal governance and the organization’s risk framework. Neither number should be treated as a complete picture. Historical backtesting can compare a VaR model with realized outcomes; stress tests can explore conditions beyond the calibration sample; and liquidity analysis can ask whether a modeled loss could be exited at the assumed price. A breach should trigger investigation, not automatic reassurance from another metric.',
          'Regulatory use is specific. The Basel Committee’s market-risk framework uses expected-shortfall-based measures in its internal-models approach for banks within the framework’s scope, alongside prescribed conditions and other requirements. That does not make ES a universal regulatory requirement for every investor, company, broker-dealer, or model. Domestic implementation and applicability should be checked with the relevant regulator and counsel.',
        ],
      },
      {
        heading: 'Why This Matters for Risk Managers',
        paragraphs: [
          'Choosing a risk measure affects what leaders see and what may remain hidden. VaR can provide a clear threshold for routine monitoring; ES can add information about the modeled severity of tail losses. Risk managers should make the level, horizon, methodology, data window, and limitations visible, and explain how the measure complements stress scenarios and liquidity analysis. A metric is useful only when decision-makers understand what it does not say.',
        ],
      },
      {
        heading: 'Common mistakes and practical takeaways',
        paragraphs: [
          'Common mistakes include calling VaR a maximum loss, treating ES as a worst-case scenario, comparing numbers with different horizons or confidence levels, ignoring threshold conventions, and assuming a regulatory framework applies to every firm. Another trap is reporting a precise estimate from a tiny tail sample without showing how much it changes under alternative windows or assumptions.',
          'Report VaR and ES with the same portfolio, horizon, confidence level, valuation, and loss sign convention. Explain the tail definition, identify the data and model, and show meaningful sensitivity or stress results. Validate VaR exceptions, investigate unexpected outcomes, and avoid using either metric as the sole limit or risk decision. The most informative choice depends on the decision and the quality of the model, not on the name of the measure.',
        ],
      },
    ],
    illustrations: [
      {
        src: `${imageDirectory}/var-es-distribution.svg`,
        alt: 'Hypothetical 20-observation loss distribution: sixteen zero-percent losses and one each at 1, 2, 3, and 5 percent. Nearest-rank VaR at 80 percent is zero and the worst-four average is 2.75 percent.',
        caption:
          'Hypothetical 20-observation sample: nearest-rank VaR at 80% is 0%; the four positive losses average (1% + 2% + 3% + 5%) ÷ 4 = 2.75% ES.',
        afterSection: 'A small loss sample makes the distinction visible',
      },
    ],
    example: {
      heading: 'Worked hypothetical example: the threshold and the tail average',
      paragraphs: [
        'Consider 20 equally weighted hypothetical daily losses: 0% on 16 days, then 1%, 2%, 3%, and 5% once each. Using the nearest-rank convention, the 80th-percentile rank is ceil(0.80 × 20) = 16. The 16th observation is a 0% loss, so the sample VaR at 80% is 0%.',
        'The worst 20% of observations are the four positive losses: 1%, 2%, 3%, and 5%. Their average is (1 + 2 + 3 + 5) ÷ 4 = 2.75%, the illustrative ES under this convention. This small sample is deliberately simple, not a recommended confidence level or stable estimate. It demonstrates that a tail average can be much larger than the threshold and that discrete-sample conventions should be disclosed.',
      ],
    },
    keyTakeaways: [
      'VaR is a modeled percentile threshold, not a maximum loss or a guarantee.',
      'Expected shortfall summarizes the average severity of a defined tail, but is still model-dependent.',
      'Align confidence, horizon, portfolio, data, and conventions; pair tail metrics with stress and liquidity analysis.',
    ],
    relatedArticles: [
      'monte-carlo-simulation-financial-risk-management',
      'stress-testing-explained',
      'model-risk-management-2026',
    ],
    learningPaths: ['financial-risk'],
    sources: [
      {
        title: 'Minimum capital requirements for market risk',
        publisher: 'Basel Committee on Banking Supervision',
        url: 'https://www.bis.org/bcbs/publ/d457.htm',
      },
      {
        title: 'Basel Framework: MAR — Calculation of RWA for Market Risk',
        publisher: 'Basel Committee on Banking Supervision',
        url: 'https://www.bis.org/basel_framework/chapter/MAR/33.htm',
      },
      {
        title: 'Revised Guidance on Model Risk Management (SR 26-2)',
        publisher: 'Board of Governors of the Federal Reserve System',
        url: 'https://www.federalreserve.gov/supervisionreg/srletters/SR2602.htm',
      },
      {
        title: 'Principles for effective risk data aggregation and risk reporting (BCBS 239)',
        publisher: 'Basel Committee on Banking Supervision',
        url: 'https://www.bis.org/publ/bcbs239.htm',
      },
    ],
  },
];
