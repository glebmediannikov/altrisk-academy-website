import {batchTwoArticles} from './batch-two-articles';
import {enhanceArticle} from './article-editorial';

export type Article = {
  slug: string;
  title: string;
  category: string;
  read: string;
  excerpt: string;
  introduction: string;
  sections: {heading: string; paragraphs: string[]}[];
  example: {heading: string; paragraphs: string[]};
  keyTakeaways: string[];
  relatedArticles: string[];
  learningPaths: string[];
  sources: {title: string; publisher: string; url: string}[];
  seoTitle?: string;
  seoDescription?: string;
  directAnswer?: string;
  coverImage?: {src: string; alt: string; caption: string};
  illustrations?: {src: string; alt: string; caption: string; afterSection?: string}[];
  faqs?: {question: string; answer: string}[];
};

const firstEditorialBatch: Article[] = [
  {
    slug: 'what-does-a-risk-manager-do',
    title: 'What Does a Risk Manager Actually Do?',
    category: 'Risk Careers',
    read: '6 min',
    excerpt:
      'Follow how risk managers help organizations identify uncertainty, test assumptions, monitor exposure, and make informed decisions.',
    introduction:
      'A risk manager does not spend every day predicting crises or telling leaders to avoid every uncertain choice. The job is to help an organization understand how uncertainty could affect its objectives, decide which exposures need attention, and keep decision-makers informed as conditions change. The work ranges from structured analysis to conversations with the people who run products, operations, technology, finance, and compliance. Responsibilities vary considerably by industry, employer, and seniority.',
    sections: [
      {
        heading: 'From objectives to a useful risk picture',
        paragraphs: [
          'The work starts with context. A risk manager asks what the organization is trying to accomplish, which assumptions support the plan, and what could prevent it from succeeding. A risk statement is more useful when it connects a cause, an uncertain event, and a consequence: for example, dependence on one data provider could interrupt a critical process if that provider becomes unavailable. This is more actionable than a label such as “vendor risk.”',
          'The manager then works with subject-matter teams to identify exposures, estimate their significance, and record uncertainty in the assessment. Depending on the problem, this may involve loss histories, process maps, interviews, control testing, sensitivity analysis, scenario analysis, or quantitative models. A likelihood score is not an objective fact merely because it appears in a spreadsheet; the evidence, time horizon, and assumptions behind it should be visible.',
          'Organizations often compare an exposure with risk appetite, limits, or other decision criteria. Those terms need careful handling: a risk appetite statement expresses broad boundaries or preferences, while a limit translates some boundaries into a measurable threshold. The risk manager can facilitate that translation, but the appropriate governing body or accountable business leader sets and approves the organization’s tolerance under its own governance arrangements.',
        ],
      },
      {
        heading: 'Controls, monitoring, and escalation',
        paragraphs: [
          'Once an exposure is understood, teams consider responses. They may reduce the likelihood or impact through controls, transfer some financial consequences, avoid an activity, or consciously accept the remaining exposure. Each response has costs and can create new risks. A second supplier may improve resilience but add integration complexity; an approval control may reduce unauthorized actions but slow a business process. Risk work makes these trade-offs explicit rather than assuming a control is free or perfect.',
          'Monitoring checks whether the assessment and response remain relevant. A risk manager might track a key risk indicator such as late payments, system availability, a concentration measure, or exceptions to a trading limit. Indicators should have a defined owner, source, calculation, threshold, and escalation path. A dashboard without dependable definitions and follow-up can create confidence without control.',
          'When a threshold is breached or new evidence changes the assessment, the risk manager helps route the issue to the people able to act. That can mean documenting an incident, updating a risk register, notifying a committee, investigating a control failure, or revisiting a business decision. Clear reporting separates measured facts from estimates, explains material limitations, and identifies decisions needed instead of burying leaders in undifferentiated metrics.',
        ],
      },
      {
        heading: 'A role that depends on the organization',
        paragraphs: [
          'A bank may have specialists in credit, market, liquidity, operational, model, and enterprise risk. An insurer may focus heavily on underwriting, reserving, and catastrophe exposure. A smaller company may ask one person to coordinate vendor reviews, business continuity, insurance, and board reporting. These are examples of common organizational choices, not a universal job description or a legal requirement for every organization.',
          'Risk teams also need to work with, but not simply replace, business owners, internal audit, compliance, legal, and engineering. Business teams generally operate processes and own many day-to-day controls. Risk specialists may challenge assumptions, set or monitor independent limits, aggregate exposures, and advise decision-makers. Internal audit typically provides independent assurance under its mandate. Exact reporting lines and responsibilities depend on the organization’s governance and applicable rules.',
          'The tools follow the problem. A practitioner may use spreadsheets for a transparent calculation, SQL to reconcile records, Python or statistical software for analysis, a governance-risk-compliance platform for issue tracking, and business-intelligence tools for reporting. Tool choice is less important than controlled inputs, documented definitions, appropriate access, reproducible calculations, and a process for correcting errors.',
        ],
      },
      {
        heading: 'Skills and limits of the work',
        paragraphs: [
          'Useful skills include asking clear questions, understanding how an operation works, interpreting data, writing concise explanations, and communicating uncertainty to people with different priorities. Some specialist roles call for deep technical knowledge in areas such as quantitative finance, cybersecurity, insurance, accounting, or data science. There is no single credential or career route that applies to all risk managers, and a title alone does not establish a license or authority to give individualized financial advice.',
          'Risk management cannot eliminate uncertainty, guarantee that a loss will not occur, or replace accountable leadership. Assessments can be wrong because evidence is incomplete, models are misspecified, controls fail, people do not follow procedures, or the environment changes. Good practice includes stating these limitations, monitoring whether assumptions still hold, and learning from near misses as well as losses.',
        ],
      },
      {
        heading: 'Why This Matters for Risk Managers',
        paragraphs: [
          'The value of the role is not the number of risks recorded or the number of controls proposed. It is whether people responsible for decisions can see relevant exposures early enough to respond, understand the trade-offs, and follow through. Clear ownership, usable measures, and honest uncertainty make risk management part of planning and operations rather than a report produced after the decision.',
        ],
      },
    ],
    example: {
      heading: 'Hypothetical workflow: a critical supplier outage',
      paragraphs: [
        'Suppose an online lender relies on one outside service to verify customer identities. A risk manager interviews the operations and technology teams, maps the verification workflow, and learns that the service has no tested backup. The teams estimate that a one-day outage could delay 4,000 applications. If each delayed application represents an average $12 processing cost and the organization assumes all are delayed, the direct processing-cost illustration is 4,000 × $12 = $48,000. That is not an estimate of total loss: it excludes lost revenue, customer effects, recovery costs, and the chance that some applications can be handled another way.',
        'The risk manager records the assumptions, checks the supplier agreement and service data, asks the accountable owner to assess a backup workflow, and proposes a measurable availability indicator with an escalation threshold. Leaders decide whether the cost and benefit of a backup are justified. The scenario is a teaching example, not a forecast or a prescribed control.',
      ],
    },
    keyTakeaways: [
      'Risk managers connect organizational objectives to uncertain events, consequences, and practical decisions.',
      'Business owners, independent risk teams, compliance, and audit have different roles that should be made explicit.',
      'Measures and models are useful only when their assumptions, data, ownership, and escalation paths are clear.',
      'Risk management informs decisions; it cannot promise that losses will never happen.',
    ],
    relatedArticles: ['how-ai-is-transforming-risk-management', 'risk-dashboards-real-time-exposure', 'stress-testing-explained'],
    learningPaths: ['financial-risk'],
    sources: [
      {
        title: 'What is Enterprise Risk Management?',
        publisher: 'Institute of Risk Management',
        url: 'https://www.theirm.org/what-we-do/what-is-enterprise-risk-management/',
      },
      {
        title: 'Principles for effective risk data aggregation and risk reporting (BCBS 239)',
        publisher: 'Basel Committee on Banking Supervision',
        url: 'https://www.bis.org/publ/bcbs239.htm',
      },
      {
        title: 'Stress Testing: Interagency Stress Testing Guidance',
        publisher: 'Office of the Comptroller of the Currency',
        url: 'https://www.occ.gov/news-issuances/bulletins/2012/bulletin-2012-14.html',
      },
    ],
  },
  {
    slug: 'how-ai-is-transforming-risk-management',
    title: 'How AI Is Transforming Risk Management',
    category: 'AI & Technology',
    read: '6 min',
    excerpt:
      'See where machine learning and generative AI can help risk teams—and why data quality, validation, oversight, and limits still matter.',
    introduction:
      'Artificial intelligence is changing how some organizations detect patterns, summarize information, and support decisions. In risk management, AI can help analysts review more data or identify signals that deserve attention. It does not remove the need to define the risk, test the system, verify its outputs, and decide who is accountable. “AI” is also a broad label: a rules engine, a statistical machine-learning model, and a generative language model have different methods and failure modes.',
    sections: [
      {
        heading: 'Where AI can assist a risk process',
        paragraphs: [
          'A supervised model can classify transactions or cases using labeled examples; an anomaly-detection method can flag observations that differ from a learned or specified pattern. Natural-language tools can search documents, extract candidate terms, or summarize lengthy reports for human review. Generative AI can draft a scenario narrative or help an analyst query a controlled knowledge base. These are examples of potential assistance, not proof that any particular system is accurate or suitable.',
          'In financial crime operations, a model might rank activity for investigation. In market or operational risk, analytics could help identify changing relationships, unusual transactions, or emerging incident clusters. A useful deployment starts with a specific decision and a baseline: what work is currently done, what error types matter, how much delay is acceptable, and how performance will be measured. A faster model that misses critical cases may be worse than a slower existing process.',
          'AI can also change the organization’s own risk profile. A system may introduce privacy, cybersecurity, intellectual-property, vendor, conduct, model, or operational risks. Generative systems can produce plausible but unsupported responses, expose sensitive information through inappropriate inputs, or change behavior after an update. Risk teams should assess both the risks AI may help manage and the risks created by its use.',
        ],
      },
      {
        heading: 'A controlled lifecycle, not a one-time approval',
        paragraphs: [
          'A practical lifecycle begins with inventory and purpose. Record the system, business owner, users, data sources, affected decisions, vendor dependencies, and consequences of error. Then assess materiality: an internal summarization aid with human checking is different from an automated decision that can deny access, move funds, or trigger a regulatory report. The higher the impact and less reversible the outcome, the more rigorous the review and controls should be.',
          'Testing should fit the task and population. Teams can evaluate accuracy, false positives and false negatives, robustness to unusual inputs, performance across relevant groups where legally and ethically appropriate, and behavior under stress or missing data. For generative tools, tests can include groundedness, unsafe disclosure, prompt sensitivity, and whether outputs cite usable evidence. A single average score does not describe every error that matters.',
          'Before release, define human review, escalation, fallback, access, logging, change approval, and incident response. After release, monitor data and performance drift, overrides, complaints, exceptions, and upstream vendor changes. Keep versions and evaluation results so that an observed outcome can be traced to the system and data in use at that time. A model should be paused or rolled back when material limits are breached, not left running because it once passed a test.',
        ],
      },
      {
        heading: 'Governance, explainability, and third parties',
        paragraphs: [
          'Governance assigns decision rights. The developer may understand model mechanics, the business owner understands the workflow, information-security staff assess technical threats, compliance specialists assess relevant obligations, and independent validators challenge the design and evidence. A vendor’s assurance document is useful input but does not automatically establish that the product is appropriate for a firm’s intended use, data, or controls.',
          'Explainability should be matched to the decision. A reviewer may need to know which input factors contributed to a risk flag, what evidence supports an AI-generated summary, or how a decision can be challenged. Some complex models are difficult to interpret; post-hoc explanations can also be approximations. If the organization cannot explain or contest a consequential output sufficiently for its purpose, the appropriate response may be to limit the use or choose a simpler method.',
          'Frameworks can structure conversations without becoming law by implication. NIST describes its AI Risk Management Framework as voluntary and organizes it around governing, mapping, measuring, and managing AI risks. Its framework and profiles are resources, not substitutes for applicable statutes, rules, contracts, or a firm’s own risk controls. The NIST AI RMF is being revised, so readers should check the current NIST page before relying on a version as current.',
        ],
      },
      {
        heading: 'Common mistakes and limitations',
        paragraphs: [
          'Common mistakes include treating a model score as a fact, using training data that does not represent the deployment setting, confusing correlation with cause, failing to test rare but severe cases, and assuming a human reviewer will catch every error. Automation bias can cause users to accept machine output without sufficient scrutiny. Conversely, excessive false alarms can lead staff to ignore alerts. Training and workflow design should address both.',
          'AI performance depends on objectives, data, implementation, and operating conditions. Models can be poorly calibrated, biased, brittle, or out of date; generative outputs can be fluent and wrong. No general framework or certification guarantees safe performance. The controls needed depend on the particular use and the consequences of failure.',
        ],
      },
      {
        heading: 'Why This Matters for Risk Managers',
        paragraphs: [
          'AI may increase the speed and scale of analysis, but that can also accelerate errors and obscure responsibility. Risk managers need an inventory, an owner, evidence of testing, limits on use, a way to challenge outputs, and monitoring that continues after launch. The central question is not whether AI is powerful; it is whether a defined use is controlled well enough for the decision it supports.',
        ],
      },
    ],
    example: {
      heading: 'Hypothetical example: prioritizing alerts',
      paragraphs: [
        'Imagine an operations team receives 1,000 daily payment alerts and pilots a model that ranks them for review. In a test set of 200 alerts, 40 are independently labeled as requiring investigation. The model flags 32 of those 40 (80% recall) and also flags 48 of the 160 other alerts. Its precision in this sample is 32 ÷ (32 + 48) = 40%. These measures describe only that labeled test sample and depend on the quality of the labels; they do not prove future performance.',
        'The team should compare the results with its existing process, examine missed cases and subgroup performance, test changed data and traffic, and set a human review process. If the model is only used to prioritize queues, the controls may differ from automatically blocking payments. That distinction should be documented before launch.',
      ],
    },
    keyTakeaways: [
      'Define the exact decision and harm before choosing an AI method.',
      'Validate relevant error types and monitor performance, data, overrides, and vendor changes after deployment.',
      'Human review is a designed control, not a guarantee that machine errors will be caught.',
      'NIST’s AI RMF is voluntary guidance; it does not replace applicable legal obligations.',
    ],
    relatedArticles: ['model-risk-management-2026', 'what-does-a-risk-manager-do', 'risk-dashboards-real-time-exposure'],
    learningPaths: ['cyber-risk', 'financial-risk'],
    sources: [
      {
        title: 'Artificial Intelligence Risk Management Framework (AI RMF 1.0)',
        publisher: 'National Institute of Standards and Technology',
        url: 'https://www.nist.gov/itl/ai-risk-management-framework',
      },
      {
        title: 'Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile',
        publisher: 'National Institute of Standards and Technology',
        url: 'https://doi.org/10.6028/NIST.AI.600-1',
      },
      {
        title: 'Revised Guidance on Model Risk Management (SR 26-2)',
        publisher: 'Board of Governors of the Federal Reserve System',
        url: 'https://www.federalreserve.gov/supervisionreg/srletters/SR2602.htm',
      },
    ],
  },
  {
    slug: 'stress-testing-explained',
    title: 'Stress Testing Explained: How Financial Firms Prepare for Market Shocks',
    category: 'Stress Testing',
    read: '7 min',
    excerpt:
      'Learn how scenario design, sensitivities, balance-sheet assumptions, and governance help firms understand severe but plausible outcomes.',
    introduction:
      'Stress testing asks how a firm, portfolio, or financial system might behave under a specified adverse condition. It is a forward-looking analytical exercise, not a prediction that the scenario will occur. A test can reveal concentrations, funding pressure, capital needs, or operational dependencies that are hard to see in ordinary-period averages. The term covers many methods, from a one-variable sensitivity to a multi-year supervisory scenario.',
    sections: [
      {
        heading: 'Choose a question before choosing a scenario',
        paragraphs: [
          'A useful test begins with a decision question: could a firm meet payments if funding costs jump, how would a portfolio respond to a sharp rate move, or which business lines drive losses in a recession? The question determines the scope, horizon, level of detail, and measures. A sensitivity test changes one factor while holding others fixed. A scenario combines several internally consistent conditions. Reverse stress testing starts with a failure or limit breach and asks what combination of events could produce it.',
          'Scenario design can use historical episodes, hypothetical narratives, or both. Historical events offer observed relationships but may not represent the current portfolio or a future shock. Hypothetical scenarios can explore risks that have not occurred in the same form, but their severity and consistency need explanation. “Severe but plausible” is a judgment about purpose and context, not a universal probability threshold.',
          'A financial scenario may specify unemployment, output, asset prices, interest rates, credit spreads, exchange rates, or funding conditions. Analysts translate those factors into effects on revenue, defaults, valuation, collateral, deposits, cash flows, and capital. For an operational test, the stressed conditions might instead include a cyber outage, vendor disruption, staff unavailability, or recovery delay. Different risks require different assumptions and metrics.',
        ],
      },
      {
        heading: 'Build the analysis and make assumptions visible',
        paragraphs: [
          'The model chain may include balance-sheet projections, credit loss estimates, market valuation, net interest income, liquidity cash flows, and capital ratios. Inputs should be tied to data definitions and a stated date. Analysts record whether the balance sheet is static or changes under the scenario, whether management actions are allowed, and how customer behavior, maturities, hedges, and funding access are treated.',
          'A scenario’s final result depends on both the shock and the translation model. Validation should check whether data are complete, methods are reasonable for the portfolio, calculations work as intended, and limitations are understood. Independent challenge can test alternative assumptions, compare results with historical experience, and identify areas where evidence is weak. Results should not be presented with more precision than the assumptions support.',
          'Useful outputs include losses, liquidity shortfalls, capital ratios, limit usage, business-line contributions, and the timing of pressure. A single end-point number may hide an intraperiod cash shortfall or a concentration in one counterparty. Sensitivity runs can identify which assumptions drive results; reverse stress tests can show the combinations that would breach a defined threshold.',
        ],
      },
      {
        heading: 'Use results to make decisions',
        paragraphs: [
          'The test should lead to an action or a clearer decision. Teams may reconsider concentration limits, funding plans, contingency arrangements, collateral, insurance, capital planning, or recovery procedures. A proposed management action should be feasible under the scenario. It is misleading to assume a firm can sell a large position at a stable price during a market-wide liquidity shock unless that assumption is supported.',
          'Governance matters throughout. A senior owner approves the question and scenario purpose, relevant business teams validate operational assumptions, risk specialists challenge the analysis, and leaders review the findings and actions. Documentation should preserve scenario design, input data, methods, results, approvals, limitations, and follow-up. Repeating the same scenario without learning from changed exposures or conditions can turn a test into a compliance-shaped ritual.',
          'Regulatory exercises are not interchangeable with internal stress tests. The Federal Reserve’s supervisory capital stress test applies under its rules to specified banking organizations; the Board’s current overview states that U.S. bank holding companies, savings and loan holding companies, and intermediate holding companies of foreign banking organizations with $100 billion or more in assets are subject to the cited supervisory stress-test and capital-planning requirements. Applicability depends on current rules and the institution. A firm’s internal stress program may have a different scope and basis.',
        ],
      },
      {
        heading: 'Limitations and common mistakes',
        paragraphs: [
          'Stress tests do not provide a complete map of future loss. Scenarios cannot include every interaction, models may fail outside their calibration range, and management actions can be unavailable or slower than assumed. A clean result under one scenario does not establish that the firm is safe under another. Scenario comparison should not be mistaken for a probability ranking unless the method supports one.',
          'Common mistakes include choosing a mild shock, testing only average exposures, omitting correlations that can change under stress, ignoring second-round effects, assuming funding remains available, and failing to assign owners to weaknesses found. Another is changing many assumptions at once without understanding which ones drive the outcome. A documented sensitivity analysis helps reveal that uncertainty.',
        ],
      },
      {
        heading: 'Why This Matters for Risk Managers',
        paragraphs: [
          'A stress test converts a risk narrative into a disciplined “what if?” analysis. It helps decision-makers examine whether resources, controls, and contingency plans would remain adequate when normal assumptions break. The value comes from credible scenarios, transparent limitations, and actions that are tracked—not from treating a model output as a precise forecast.',
        ],
      },
    ],
    example: {
      heading: 'Hypothetical calculation: a simplified rate shock',
      paragraphs: [
        'Consider a fictional bond portfolio with a market value of $10 million and an assumed modified duration of 4.0. Under a small parallel yield increase of 1 percentage point, a first-order approximation is percentage price change ≈ −duration × yield change = −4.0 × 0.01 = −4%. The corresponding estimated market-value change is about −$400,000, before convexity, coupon cash flows, credit-spread changes, hedges, taxes, and other effects.',
        'This is a simplified sensitivity, not a forecast or a complete stress test. The duration approximation is less reliable for larger moves and non-parallel curve changes. A real analysis would confirm instrument characteristics, model assumptions, and whether the portfolio and funding exposures change under the scenario.',
      ],
    },
    keyTakeaways: [
      'Stress testing explores specified adverse conditions; it does not predict that they will happen.',
      'Scenario narratives, data, balance-sheet assumptions, and management actions should be documented and challenged.',
      'Sensitivity, scenario, and reverse stress tests answer different questions.',
      'Supervisory stress-test rules apply only to covered entities; internal practice and regulation are distinct.',
    ],
    relatedArticles: ['risk-dashboards-real-time-exposure', 'what-does-a-risk-manager-do', 'model-risk-management-2026'],
    learningPaths: ['financial-risk', 'global-risk'],
    sources: [
      {
        title: 'Stress Tests and Capital Planning',
        publisher: 'Board of Governors of the Federal Reserve System',
        url: 'https://www.federalreserve.gov/supervisionreg/stress-tests-capital-planning.htm',
      },
      {
        title: 'Stress Testing: Interagency Stress Testing Guidance',
        publisher: 'Office of the Comptroller of the Currency',
        url: 'https://www.occ.gov/news-issuances/bulletins/2012/bulletin-2012-14.html',
      },
      {
        title: 'Principles for effective risk data aggregation and risk reporting (BCBS 239)',
        publisher: 'Basel Committee on Banking Supervision',
        url: 'https://www.bis.org/publ/bcbs239.htm',
      },
    ],
  },
  {
    slug: 'risk-dashboards-real-time-exposure',
    title: 'Risk Dashboards: How Firms Monitor Exposure in Real Time',
    category: 'Risk Reporting',
    read: '6 min',
    excerpt:
      'Design a risk dashboard around decisions, trusted data, meaningful thresholds, and clear escalation—not visual volume.',
    introduction:
      'A risk dashboard is a reporting interface that helps people monitor selected exposures, indicators, limits, and control status. “Real time” is often used loosely: a dashboard may update every few seconds, hourly, overnight, or only when a source system publishes a new batch. The update interval must match the risk and the decisions users need to make. A visually polished display is not a control if its data are late, its measures ambiguous, or no one responds to an alert.',
    sections: [
      {
        heading: 'Start with the user’s decision',
        paragraphs: [
          'Before selecting charts, identify the decision-maker and the action the dashboard should support. A trader monitoring a pre-trade limit needs a different view from a board reviewing quarterly concentration trends. Ask what could change, how quickly an action is required, which level of detail is useful, and what evidence would trigger escalation.',
          'Select a small set of measures tied to that decision. Depending on the setting, these might include gross or net exposure, limit utilization, liquidity coverage, loss estimates, concentration by counterparty or sector, model exceptions, operational incidents, or service availability. Every metric needs a definition, unit, scope, timestamp, owner, and source. If “exposure” means different things to different teams, placing it on a dashboard does not resolve the disagreement.',
          'Use indicators with different roles. A lagging indicator describes an outcome that has already occurred, such as a realized loss. A leading or early-warning indicator may signal a change in conditions, such as increasing margin calls or a rising share of stale data. Leading indicators are not guaranteed predictors; they are prompts for investigation. Pairing measures can make a dashboard more informative than relying on one score.',
        ],
      },
      {
        heading: 'Build a trustworthy data path',
        paragraphs: [
          'A dashboard usually combines source systems, transformation logic, a data store, and a visualization layer. Data owners should define identifiers and units, manage time zones and cutoffs, reconcile totals to source records, and flag missing or stale inputs. A lineage record should let users trace a displayed number back to its source and transformation. If a number cannot be reproduced, teams may be unable to investigate an alert or explain a report.',
          'Latency should be shown rather than hidden. Label the “as of” time, expected refresh frequency, and known delay. A feed that is ten minutes old may be adequate for a weekly operational review but inappropriate for a time-sensitive control. Users need to understand whether an empty chart means zero exposure, a missing feed, or a failed calculation.',
          'Access should follow role and purpose. Sensitive customer or trading information should not be exposed to people who do not need it. Preserve relevant change and access logs, establish review of dashboard definitions, and test that authorized alerts reach the right recipients. Business continuity should cover failure of the reporting layer itself, including how staff can act if the dashboard is unavailable.',
        ],
      },
      {
        heading: 'Thresholds, alerts, and escalation',
        paragraphs: [
          'A threshold should reflect the underlying decision rule, not just a convenient color band. Document how it was selected, who approved it, what population it covers, and what action is expected when it is crossed. A warning level can provide time to investigate before a hard limit is reached, but too many alerts can create fatigue. Track alert volume, false alarms, missed events, response time, and unresolved items.',
          'A useful alert contains enough context to act: the measure and threshold, affected entity or portfolio, change from the previous observation, data timestamp, owner, and next step. Escalation should distinguish a confirmed breach from a suspected data issue. The process should define who can acknowledge an alert, who can approve an exception, how long an exception lasts, and when leadership is notified.',
          'For genuinely fast-moving risks, dashboards may be paired with automated controls that prevent an action rather than merely report it. Those controls have different operational and legal implications from a read-only analytics view. Testing, access management, change control, fail-safe behavior, and independent review should reflect the risk and the relevant requirements.',
        ],
      },
      {
        heading: 'Common dashboard failures',
        paragraphs: [
          'Too many indicators can bury material movement. A single composite score can hide offsetting components or depend on arbitrary weights. Historical trends may be misleading when definitions, coverage, or the business mix have changed. A dashboard can also overstate precision: estimated loss, model outputs, and forecast values should be labeled differently from observed facts.',
          'Dashboard governance must survive organizational change. Review metrics when products, systems, limits, or users change; retire measures that no longer inform a decision. Test calculations and alerts after data-pipeline changes. Users should be trained in the meaning and limits of the display, with a way to report data errors and request clarification.',
        ],
      },
      {
        heading: 'Why This Matters for Risk Managers',
        paragraphs: [
          'Risk teams need to spot changing exposure and help accountable owners respond in time. A reliable dashboard can make concentrations and exceptions visible across teams, but it does not replace analysis, governance, or judgment. The essential design test is whether users receive accurate, timely, understandable information and know what to do when it changes.',
        ],
      },
    ],
    example: {
      heading: 'Hypothetical workflow: a limit-utilization alert',
      paragraphs: [
        'Suppose a fictional firm sets an internal counterparty exposure limit of $20 million. Its dashboard shows $17.6 million at 9:00 a.m., or 88% utilization ($17.6 million ÷ $20 million). The policy sets an investigation warning at 85% and an escalation threshold at 95%. An 88% reading should therefore prompt the specified review, not be described as a breach of the 100% limit.',
        'An analyst checks the source timestamp, confirms the relevant trades and collateral are included under the documented calculation, and contacts the limit owner. If a feed is missing, the system should mark the value as incomplete rather than quietly display a lower total. These are hypothetical thresholds and workflow details, not a regulatory standard.',
      ],
    },
    keyTakeaways: [
      'Design dashboard measures around a named user, decision, and response time.',
      'Show source, definition, timestamp, latency, owner, and escalation path for every key indicator.',
      'Distinguish estimated, modeled, and observed data; a missing feed is not zero exposure.',
      'Dashboards support oversight but cannot substitute for controls, analysis, or accountable decisions.',
    ],
    relatedArticles: ['stress-testing-explained', 'what-does-a-risk-manager-do', 'how-ai-is-transforming-risk-management'],
    learningPaths: ['financial-risk', 'cyber-risk'],
    sources: [
      {
        title: 'Principles for effective risk data aggregation and risk reporting (BCBS 239)',
        publisher: 'Basel Committee on Banking Supervision',
        url: 'https://www.bis.org/publ/bcbs239.htm',
      },
      {
        title: 'Revised Guidance on Model Risk Management (SR 26-2)',
        publisher: 'Board of Governors of the Federal Reserve System',
        url: 'https://www.federalreserve.gov/supervisionreg/srletters/SR2602.htm',
      },
      {
        title: 'Market Access',
        publisher: 'Financial Industry Regulatory Authority',
        url: 'https://www.finra.org/rules-guidance/key-topics/market-access',
      },
    ],
  },
  {
    slug: 'sec-rule-15c3-5-pre-trade-risk-controls',
    title: 'SEC Rule 15c3-5: Understanding Pre-Trade Risk Controls',
    category: 'Market Access',
    read: '6 min',
    excerpt:
      'Understand the market-access rule’s broker-dealer control framework, key pre-trade checks, and important limits on its scope.',
    introduction:
      'SEC Rule 15c3-5, commonly called the Market Access Rule, addresses financial and regulatory risks created when broker-dealers access U.S. securities markets, including access provided to customers through a broker-dealer’s market participant identifier. It requires covered broker-dealers to establish, document, and maintain risk-management controls and supervisory procedures reasonably designed to manage specified risks. This article is an educational overview, not legal advice; firms should consult the current rule, applicable guidance, and their counsel.',
    sections: [
      {
        heading: 'Who and what the rule covers',
        paragraphs: [
          'The rule’s definition of “market access” covers access to trading securities on an exchange or alternative trading system (ATS) through membership or subscription, and certain access to an ATS provided by its broker-dealer operator to a non-broker-dealer. A broker-dealer can be covered whether it trades for itself, handles customer orders through traditional brokerage, or provides direct or sponsored access. The firm whose access arrangement and identifier are used has central responsibility under the rule; it cannot treat the customer’s own controls as a substitute for its required controls.',
          'The SEC rule concerns securities market access. Do not assume it applies to futures commission merchants or futures trading merely because the systems are electronic or similar controls are useful. Futures and other markets have separate statutory and regulatory frameworks. Applicability depends on the legal entity, instrument, venue, and access arrangement.',
          'The rule calls for controls reasonably designed to prevent orders that exceed preset credit or capital thresholds, or that appear erroneous, from being entered. It also includes controls designed to ensure compliance with applicable regulatory requirements, such as restrictions on trading in securities, and controls to restrict access to persons authorized and appropriately identified. A firm’s controls should reflect its business and risks; the exact implementation is not one universal software configuration.',
        ],
      },
      {
        heading: 'What pre-trade controls do',
        paragraphs: [
          'A pre-trade control evaluates an order before it reaches a trading center. A credit or capital control can compare the proposed order and current exposure with an approved threshold. An erroneous-order control can apply price, size, or other logic to flag a potentially mistaken order. Regulatory controls can restrict orders that would violate applicable securities requirements, subject to the rule’s terms and permitted arrangements. The objective is prevention at the point where an order could create market, firm, or customer harm.',
          'Controls need accurate, timely inputs. A size check can fail if it sees only one trading venue while the same exposure is routed elsewhere. A price collar may not account for a fast-moving market if reference data are delayed. A credit limit may become unreliable if executions, cancels, or positions are not reconciled. Testing should cover normal and unusual orders, rejected orders, system latency, outages, configuration changes, and interactions between controls.',
          'The rule generally requires the controls and procedures to be under the direct and exclusive control of the broker-dealer with market access, subject to specified exceptions. That allocation is why a customer or vendor cannot simply operate the broker-dealer’s required controls without attention to the rule’s requirements. The firm should be able to evidence who can set parameters, approve changes, disable a control, review overrides, and investigate an exception.',
        ],
      },
      {
        heading: 'Governance and ongoing review',
        paragraphs: [
          'Compliance is not established by installation alone. The rule includes written supervisory procedures, annual review, and CEO certification obligations for covered broker-dealers. The firm should maintain records and evidence that support its reviews and certifications, and should make sure the statements accurately reflect the program. Legal and compliance teams should verify the current text and any applicable SEC or FINRA interpretations because requirements can depend on facts and subsequent regulatory developments.',
          'A practical control inventory links each risk to the control, owner, order flow, relevant data, threshold, test evidence, exception process, and escalation path. Monitoring can include rejected-order patterns, limit overrides, parameter changes, inactive controls, latency, and incidents. Independent review can challenge whether controls cover the full order flow and whether the procedure matches how the system actually operates.',
          'Controls can create operational risks of their own. An overly tight threshold may block legitimate orders; an overly loose one may not contain the exposure. A fail-open design may permit orders during an outage, while a fail-closed design may prevent trading. Decisions about availability and safe behavior require firm-specific analysis, documented approval, testing, and appropriate contingency processes.',
        ],
      },
      {
        heading: 'Common misunderstandings and limitations',
        paragraphs: [
          'A pre-trade check is not a guarantee that every erroneous or noncompliant order will be prevented. It can miss events because of incomplete information, faulty configuration, latency, a new product, or an unexpected market condition. Post-trade surveillance, supervision, incident management, and reconciliation remain important; they do not replace required pre-trade controls.',
          'It is also inaccurate to describe the rule as a general “kill switch” mandate with one prescribed threshold for every firm. The rule sets obligations and control objectives, while firms must design reasonably tailored systems and procedures consistent with its text. A control that works for one firm’s products, routing, and order volume may not work for another.',
        ],
      },
      {
        heading: 'Why This Matters for Risk Managers',
        paragraphs: [
          'Market access can turn a software or configuration error into rapid financial and market exposure. Risk managers need to understand where orders originate, how controls operate before routing, who governs thresholds, how exceptions are handled, and whether the evidence matches the written procedure. The rule’s broker-dealer scope is essential: useful industry practice should not be misstated as a universal legal obligation.',
        ],
      },
    ],
    example: {
      heading: 'Hypothetical control workflow: an oversized order',
      paragraphs: [
        'A broker-dealer has an internal maximum notional order threshold of $2 million for a defined product and account group. A user submits an order with a calculated notional value of $2.4 million. Before routing, the system compares the order with the applicable threshold and rejects or holds it according to the firm’s approved control design. The alert records the account, order, calculation inputs, rule version, timestamp, and disposition.',
        'A supervisor checks whether the order was a legitimate exception, a data-mapping problem, or a potential input error. Any permitted override follows documented authorization and is reviewed. The $2 million threshold is fictional, not a figure set by Rule 15c3-5; the example illustrates a control workflow only.',
      ],
    },
    keyTakeaways: [
      'Rule 15c3-5 applies to covered broker-dealers with securities market access; it is not a general futures or FCM rule.',
      'The rule requires reasonably designed controls for specified financial, regulatory, and other market-access risks, including pre-trade controls.',
      'Broker-dealer governance, control authority, written procedures, review, and certification are important parts of the program.',
      'Hypothetical limits and configurations in examples are not SEC-prescribed thresholds.',
    ],
    relatedArticles: ['risk-dashboards-real-time-exposure', 'what-does-a-risk-manager-do', 'stress-testing-explained'],
    learningPaths: ['financial-risk'],
    sources: [
      {
        title: '17 CFR § 240.15c3-5 — Risk management controls for brokers or dealers with market access',
        publisher: 'Legal Information Institute, Cornell Law School',
        url: 'https://www.law.cornell.edu/cfr/text/17/240.15c3-5',
      },
      {
        title: 'Market Access',
        publisher: 'Financial Industry Regulatory Authority',
        url: 'https://www.finra.org/rules-guidance/key-topics/market-access',
      },
      {
        title: '2025 Code of Federal Regulations, 17 CFR § 240.15c3-5',
        publisher: 'U.S. Government Publishing Office',
        url: 'https://www.govinfo.gov/content/pkg/CFR-2025-title17-vol4/xml/CFR-2025-title17-vol4-sec240-15c3-5.xml',
      },
    ],
  },
  {
    slug: 'model-risk-management-2026',
    title: 'Model Risk Management: What Changed in 2026?',
    category: 'Model Risk',
    read: '7 min',
    excerpt:
      'A practical guide to the April 17, 2026 revised interagency model risk guidance, how it differs from SR 11-7, and who it concerns.',
    introduction:
      'On April 17, 2026, the Federal Reserve, Office of the Comptroller of the Currency (OCC), and Federal Deposit Insurance Corporation (FDIC) issued revised interagency Guidance on Model Risk Management. The Federal Reserve’s SR 26-2 letter says the revised guidance supersedes and replaces SR 11-7 from 2011 and the 2021 interagency statement for bank systems supporting Bank Secrecy Act/anti-money-laundering compliance. The agencies describe the revision as reflecting supervisory experience, industry feedback, and advances in modeling. This is guidance, not a new statute or regulation.',
    sections: [
      {
        heading: 'The confirmed change: a risk-based approach',
        paragraphs: [
          'The Federal Reserve’s letter says the revised guidance clarifies model risk management principles and emphasizes a risk-based approach tailored to an organization’s model-risk profile, size, and operational complexity. It highlights sound principles while recognizing that practices may appropriately vary according to an organization’s specific risks and model use. This means the prior document should not be quoted as though it remains the current interagency guidance after April 17, 2026.',
          'The letter states that the guidance is expected to be most relevant to banking organizations with more than $30 billion in total assets regulated by the Federal Reserve. That is the Federal Reserve letter’s applicability statement, not a blanket claim that every smaller institution is exempt from all model risk management expectations. The guidance is jointly issued by the Federal Reserve, OCC, and FDIC; the applicable supervisory relationship and the guidance itself should be reviewed before drawing conclusions for a particular institution.',
          '“Risk-based” does not mean “no governance.” A firm still needs to understand where models are used, what decisions depend on them, what could happen if they fail, and what level of oversight is proportionate. A simple model used for a low-impact internal estimate may warrant a different level of review from a complex system driving material credit, capital, pricing, liquidity, or compliance decisions. Proportionality should be supported by a documented rationale rather than used as a reason to ignore material risk.',
        ],
      },
      {
        heading: 'How to think about the transition from SR 11-7',
        paragraphs: [
          'SR 11-7 was the familiar 2011 Federal Reserve guidance on model risk management. SR 26-2 expressly says the revised interagency guidance supersedes and replaces it, as well as the separate 2021 interagency BSA/AML model-risk statement. Organizations should therefore update policy references, training, inventories, review plans, and supervisory materials to cite the current guidance where relevant. Archived SR 11-7 may still help explain historical practices, but it should not be described as the current guidance.',
          'A transition review should map existing practices to the revised guidance rather than assume that every past process must be discarded or that all prior controls remain sufficient. Examine model definitions and inventory boundaries, risk tiers, validation coverage, use of third-party models, change controls, performance monitoring, issue remediation, governance forums, and documentation. Identify gaps and confirm them with the relevant supervisory team or counsel when interpretation is uncertain.',
          'Avoid claiming specific detailed provisions unless the current revised guidance text supports them. SR 26-2’s cover letter establishes the issuance date, agencies, superseded material, stated applicability, and high-level risk-based emphasis. This educational article does not reproduce every principle or supervisory interpretation in the guidance. Readers responsible for a regulated program should consult the complete attachment and current agency communications.',
        ],
      },
      {
        heading: 'Model inventory and lifecycle oversight',
        paragraphs: [
          'A useful model inventory records the system’s purpose, owner, inputs, outputs, materiality, users, dependencies, current status, and approval date. It should include models used in production and consider tools that influence decisions even when a vendor or business team calls them “analytics” or “automation.” Whether a particular tool meets a formal model definition can depend on the relevant guidance and use; the inventory process should be transparent about scope decisions.',
          'Lifecycle oversight ordinarily connects development or selection, conceptual review, implementation testing, independent challenge where warranted, approval, use restrictions, ongoing monitoring, changes, and retirement. The intensity of each activity should reflect the possible impact and uncertainty. A model can be mathematically sound but poorly implemented; a technically correct implementation can be unsuitable for a changed population or market. Third-party status does not remove the user organization’s need to understand the role and limitations of a model in its own decisions.',
          'Monitoring should look beyond one annual validation report. Depending on the model, useful evidence may include outcome comparison, stability, missing data, overrides, exceptions, changes in the population, and whether documented use restrictions are followed. Findings need owners, severity, due dates, escalation, and closure evidence. If limitations are accepted temporarily, the decision and compensating controls should be explicit.',
          'For models that use artificial intelligence, an organization may also consult NIST’s AI Risk Management Framework as a voluntary, cross-sector resource. It supplements rather than replaces the bank supervisory model-risk guidance or applicable law, and NIST says the framework is being revised.',
        ],
      },
      {
        heading: 'Do not overstate the regulatory scope',
        paragraphs: [
          'The April 2026 guidance is interagency bank supervisory guidance. It does not, simply by being interagency guidance, become a universal model-risk rule for every financial company. Broker-dealers, futures commission merchants, asset managers, insurers, and technology providers may have other applicable obligations, supervisory expectations, contracts, or sound-practice reasons to manage model risk. Their requirements must be assessed under their own governing frameworks rather than assumed to be identical to bank guidance.',
          'Guidance also differs from binding law. Applicable statutes and regulations remain binding according to their terms; supervisory guidance communicates principles and expectations but should not be casually described as a new regulation. The SR 26-2 letter itself says the agencies issued revised guidance and superseded previous guidance, not that they adopted a new model-risk regulation. Obtain legal and supervisory advice for institution-specific interpretations.',
        ],
      },
      {
        heading: 'Why This Matters for Risk Managers',
        paragraphs: [
          'Models influence decisions across credit, market, operations, capital, and compliance. The 2026 change is important because governance should reflect current interagency guidance and the actual risk profile, not rely on an outdated citation or a one-size-fits-all checklist. Clear inventories, proportionate review, accountable owners, and honest reporting of limitations help an organization see where model outputs deserve trust, challenge, or restricted use.',
        ],
      },
    ],
    example: {
      heading: 'Hypothetical transition workflow: a model inventory review',
      paragraphs: [
        'A fictional bank lists 120 quantitative tools in its inventory. A transition team confirms that 15 are no longer used, identifies 10 vendor scores embedded in decisions that were missing from the list, and records each tool’s owner, use, affected decisions, and estimated impact. The numbers are illustrative. The team then groups the active tools by model-risk profile and complexity, prioritizes reviews of the most consequential uses, and documents why lower-impact tools receive lighter monitoring.',
        'The team checks its policy references against the April 17, 2026 guidance, identifies open questions for its regulator and counsel, and tracks remediation owners and dates. This process does not assert that the agencies require this exact inventory format or these thresholds; it illustrates a cautious way to assess the transition.',
      ],
    },
    keyTakeaways: [
      'The April 17, 2026 interagency guidance explicitly supersedes and replaces SR 11-7 and the 2021 BSA/AML model-risk statement.',
      'The agencies emphasize clarifying principles and tailoring model risk management to model risk, size, and operational complexity.',
      'SR 26-2 says the guidance is expected to be most relevant to Federal Reserve-regulated banking organizations above $30 billion in assets.',
      'Bank supervisory guidance should not be represented as automatically governing broker-dealers or futures commission merchants.',
    ],
    relatedArticles: ['how-ai-is-transforming-risk-management', 'stress-testing-explained', 'what-does-a-risk-manager-do'],
    learningPaths: ['financial-risk'],
    sources: [
      {
        title: 'Revised Guidance on Model Risk Management (SR 26-2)',
        publisher: 'Board of Governors of the Federal Reserve System',
        url: 'https://www.federalreserve.gov/supervisionreg/srletters/SR2602.htm',
      },
      {
        title: 'Revised Guidance on Model Risk Management',
        publisher: 'Interagency guidance attachment, Federal Reserve',
        url: 'https://www.federalreserve.gov/supervisionreg/srletters/sr2602a1.pdf',
      },
      {
        title: 'Artificial Intelligence Risk Management Framework (AI RMF 1.0)',
        publisher: 'National Institute of Standards and Technology',
        url: 'https://www.nist.gov/itl/ai-risk-management-framework',
      },
    ],
  },
];

export const hubArticles: Article[] = [...firstEditorialBatch, ...batchTwoArticles].map(
  enhanceArticle,
);
