type Illustration = {
  src: string;
  alt: string;
  caption: string;
  afterSection: string;
};

type ArticleEditorial = {
  directAnswer: string;
  coverImage?: {src: string; alt: string; caption: string};
  illustrations?: Illustration[];
  faqs?: {question: string; answer: string}[];
};

const directory = '/articles/batch-1';

export const articleEditorial: Record<string, ArticleEditorial> = {
  'what-is-risk': {
    directAnswer:
      'Risk is the possibility that uncertainty could affect an objective. Its importance depends on the potential consequences, evidence about likelihood, and the time horizon.',
    coverImage: {
      src: `${directory}/what-is-risk-cover.svg`,
      alt: 'A goal connected to an uncertain event and possible consequences, with likelihood and impact shown as separate considerations.',
      caption:
        'A practical risk statement connects an objective to an uncertain event and its possible consequences.',
    },
    illustrations: [
      {
        src: `${directory}/what-is-risk-framework.svg`,
        alt: 'A labeled risk-thinking diagram separating the goal, uncertain event, potential impact, and evidence about likelihood.',
        caption:
          'Likelihood and impact are distinct questions; neither can be read from a risk label alone.',
        afterSection: 'Likelihood and impact are different questions',
      },
    ],
    faqs: [
      {
        question: 'Is risk always negative?',
        answer:
          'Risk analysis often focuses on potential harm, but uncertainty can also affect opportunities and trade-offs. The outcome matters in relation to the goal being considered.',
      },
    ],
  },
  'risk-vs-uncertainty': {
    directAnswer:
      'Risk usually describes uncertain outcomes whose probabilities can be estimated with a stated model and evidence; uncertainty describes cases where probabilities or outcomes cannot be estimated reliably.',
    coverImage: {
      src: `${directory}/risk-vs-uncertainty-cover.svg`,
      alt: 'A fair die with a stated one-in-six chance contrasted with a new product whose demand probabilities are unknown.',
      caption:
        'A known probability model and an unfamiliar decision call for different ways of describing what is unknown.',
    },
    illustrations: [
      {
        src: `${directory}/risk-vs-uncertainty-comparison.svg`,
        alt: 'Two-column comparison: a fair die has six known equally likely outcomes, while demand for a new product has uncertain outcomes and no reliable probability model.',
        caption:
          'The die probability follows from an explicit assumption; a small survey describes respondents, not the whole market.',
        afterSection: 'How to reason when the answer is unknown',
      },
    ],
    faqs: [
      {
        question: 'Can uncertainty be measured?',
        answer:
          'Some uncertainty can be bounded or explored with scenarios and ranges even when a precise probability is not defensible. The method and remaining unknowns should be stated.',
      },
    ],
  },
  'what-is-financial-risk': {
    directAnswer:
      'Financial risk is the possibility that an uncertain event or choice could make it harder to meet a money-related goal, through loss, unexpected obligations, reduced purchasing power, or lack of access to cash.',
    coverImage: {
      src: `${directory}/financial-risk-cover.svg`,
      alt: 'A financial goal surrounded by market, income, liquidity, borrowing-cost, and unexpected-expense risks.',
      caption:
        'Financial risk includes several exposures that can affect the same goal at different times.',
    },
    illustrations: [
      {
        src: `${directory}/financial-risk-map.svg`,
        alt: 'A financial goal timeline showing a near-term bill and possible market, income, liquidity, and expense risks.',
        caption:
          'The same exposure can matter differently depending on when the money is needed.',
        afterSection: 'Exposure depends on the goal and timeline',
      },
    ],
  },
  'portfolio-diversification': {
    directAnswer:
      'Diversification spreads exposure across investments that may respond differently to events. It can reduce some concentration risk, but it cannot eliminate broad market losses or guarantee returns.',
    coverImage: {
      src: `${directory}/diversification-cover.svg`,
      alt: 'A concentrated single holding compared with a hypothetical portfolio spread across different asset categories.',
      caption:
        'Diversification is about underlying exposures, not simply the number of holdings.',
    },
    illustrations: [
      {
        src: `${directory}/diversification-example.svg`,
        alt: 'Hypothetical comparison: a one-thousand-dollar single holding falling 30 percent leaves 700 dollars, while a 100-dollar holding falling 30 percent and 900 dollars unchanged leaves 970 dollars.',
        caption:
          'Hypothetical concentration arithmetic only: the example assumes all other assets remain unchanged and is not a forecast.',
        afterSection: 'What diversification can and cannot do',
      },
    ],
    faqs: [
      {
        question: 'Does owning more funds always mean a diversified portfolio?',
        answer:
          'No. Funds can hold overlapping securities or share exposure to the same industry, issuer, or market factor. Diversification depends on underlying exposures and how they may respond to events.',
      },
    ],
  },
  'market-volatility': {
    directAnswer:
      'Market volatility describes the magnitude of price movements over a specified period. It measures movement, not direction, future returns, or every form of investment risk.',
    coverImage: {
      src: `${directory}/market-volatility-cover.svg`,
      alt: 'Two explicitly hypothetical price paths start and end at the same value but have different interim swings.',
      caption:
        'Two hypothetical paths can have the same start and end value while showing different interim movement.',
    },
    illustrations: [
      {
        src: `${directory}/market-volatility-example.svg`,
        alt: 'Hypothetical five-day closing prices: Investment A at 100, 102, 98, 101, 100 and Investment B at 100, 105, 95, 103, 100.',
        caption:
          'Hypothetical five-observation prices; both end at $100, while Investment B has larger interim swings.',
        afterSection: 'Volatility is not the same as loss',
      },
    ],
    faqs: [
      {
        question: 'Does high volatility mean an investment will lose money?',
        answer:
          'No. Volatility describes the size of price movements in either direction over a period. It does not predict whether the next move will be up or down.',
      },
    ],
  },
  'risk-and-return': {
    directAnswer:
      'Return is the gain or loss over a defined period; risk describes uncertain outcomes. Taking more risk does not guarantee a higher realized return.',
    coverImage: {
      src: `${directory}/risk-return-cover.svg`,
      alt: 'A hypothetical risk-and-return comparison showing a higher assumed return alongside a wider range of possible outcomes.',
      caption:
        'An illustrative risk-return trade-off is not a promise that a higher-risk choice will earn more.',
    },
    illustrations: [
      {
        src: `${directory}/risk-return-example.svg`,
        alt: 'Two hypothetical outcome ranges centered on different assumed returns, with the higher-return illustration showing a wider range and possible negative outcomes.',
        caption:
          'Hypothetical ranges are conceptual, not historical investment performance or forecasts.',
        afterSection: 'Compare returns on a like-for-like basis',
      },
    ],
    faqs: [
      {
        question: 'Does higher risk always produce higher returns?',
        answer:
          'No. Some investors may expect compensation for accepting certain risks, but a riskier investment can underperform or lose money. The relationship is not a guarantee.',
      },
    ],
  },
  'what-does-a-risk-manager-do': {
    directAnswer:
      'A risk manager helps an organization identify uncertainty, understand possible effects on its goals, monitor exposures, and inform decisions. Responsibilities differ by organization and role.',
    coverImage: {
      src: `${directory}/risk-manager-cover.svg`,
      alt: 'A risk-management cycle connecting objectives, identification, assessment, response, monitoring, and decision-making.',
      caption:
        'Risk management is a continuing decision process, not a one-time checklist.',
    },
    illustrations: [
      {
        src: `${directory}/risk-manager-cycle.svg`,
        alt: 'A connected risk-management cycle with objective setting, assessment, response, indicators, and escalation.',
        caption:
          'A useful process links monitoring and escalation back to the organization’s objectives.',
        afterSection: 'Controls, monitoring, and escalation',
      },
    ],
  },
  'how-ai-is-transforming-risk-management': {
    directAnswer:
      'AI can help analyze data and prioritize work, but its outputs remain uncertain and require task-specific testing, human accountability, and ongoing monitoring.',
    coverImage: {
      src: `${directory}/ai-risk-cover.svg`,
      alt: 'A governed AI risk workflow moving from data and model assessment through human review and monitoring.',
      caption:
        'AI may support a risk task; governance and review remain part of the task.',
    },
    illustrations: [
      {
        src: `${directory}/ai-risk-lifecycle.svg`,
        alt: 'An AI lifecycle showing purpose, data checks, testing, approval, human review, and post-deployment monitoring.',
        caption:
          'A hypothetical AI review lifecycle: define the use, test the system, assign oversight, and monitor after deployment.',
        afterSection: 'A controlled lifecycle, not a one-time approval',
      },
    ],
  },
  'stress-testing-explained': {
    directAnswer:
      'Stress testing estimates how a portfolio or organization might respond to specified adverse conditions. It explores a scenario; it does not predict that the scenario will occur.',
    coverImage: {
      src: `${directory}/stress-testing-cover.svg`,
      alt: 'A hypothetical market shock scenario flowing through a portfolio into estimated losses and decision actions.',
      caption:
        'A stress test connects an explicit adverse scenario to modeled effects and possible decisions.',
    },
    illustrations: [
      {
        src: `${directory}/stress-test-rate-example.svg`,
        alt: 'Hypothetical duration calculation: a ten-million-dollar bond portfolio with modified duration four experiences an estimated four percent or 400,000-dollar loss under a one-percentage-point parallel yield rise.',
        caption:
          'First-order hypothetical sensitivity: −4.0 × 0.01 = −4%, or approximately −$400,000 before omitted effects.',
        afterSection: 'Build the analysis and make assumptions visible',
      },
    ],
  },
  'risk-dashboards-real-time-exposure': {
    directAnswer:
      'A risk dashboard presents selected exposures and indicators to support a decision. Its value depends on clear definitions, timely trusted data, appropriate thresholds, and accountable follow-up.',
    coverImage: {
      src: `${directory}/risk-dashboard-cover.svg`,
      alt: 'A conceptual risk dashboard with exposure, utilization, a timestamp, and an alert linked to a decision owner.',
      caption:
        'A useful dashboard shows the measure, its data freshness, and the action or owner connected to an alert.',
    },
    illustrations: [
      {
        src: `${directory}/risk-dashboard-example.svg`,
        alt: 'Hypothetical dashboard showing 75,000 dollars exposure against a 100,000-dollar limit, 75 percent utilization, and an illustrative 80 percent warning level.',
        caption:
          'Hypothetical internal thresholds: $75,000 ÷ $100,000 = 75% utilization; the 80% warning is not a regulatory threshold.',
        afterSection: 'Thresholds, alerts, and escalation',
      },
    ],
  },
  'sec-rule-15c3-5-pre-trade-risk-controls': {
    directAnswer:
      'SEC Rule 15c3-5 requires covered broker-dealers with securities market access to establish documented controls and supervisory procedures reasonably designed to manage specified financial and regulatory risks.',
    coverImage: {
      src: `${directory}/market-access-cover.svg`,
      alt: 'A securities order checked by broker-dealer controls before it is routed to an exchange or alternative trading system.',
      caption:
        'Rule 15c3-5 addresses covered broker-dealer securities market access; it is not a universal futures rule.',
    },
    illustrations: [
      {
        src: `${directory}/market-access-flow.svg`,
        alt: 'A securities order flows through financial and regulatory checks, then is approved or rejected before reaching an exchange or ATS.',
        caption:
          'Illustrative securities market-access flow. Thresholds and implementation are firm-specific; Rule 15c3-5 scope depends on the access arrangement.',
        afterSection: 'What pre-trade controls do',
      },
    ],
  },
  'model-risk-management-2026': {
    directAnswer:
      'On April 17, 2026, the Federal Reserve, OCC, and FDIC issued revised interagency model-risk guidance that supersedes SR 11-7 and emphasizes tailoring practices to risk and organizational complexity.',
    coverImage: {
      src: `${directory}/model-risk-cover.svg`,
      alt: 'A model lifecycle from inventory and validation through approval, monitoring, and a documented governance decision.',
      caption:
        'Model oversight follows a system through its lifecycle and should reflect its use and potential impact.',
    },
    illustrations: [
      {
        src: `${directory}/model-risk-lifecycle.svg`,
        alt: 'Model governance lifecycle with inventory, risk-based review, approval, monitoring, change control, and retirement.',
        caption:
          'Illustrative lifecycle practices; the 2026 interagency guidance describes a risk-based supervisory approach, not a universal statutory checklist.',
        afterSection: 'Model inventory and lifecycle oversight',
      },
    ],
  },
  'python-for-risk-managers-practical-applications': {
    directAnswer:
      'Python can help risk teams validate data, aggregate exposures, run scenarios, automate indicators, and make analysis reproducible; code does not replace judgment or review.',
  },
  'monte-carlo-simulation-financial-risk-management': {
    directAnswer:
      'Monte Carlo simulation repeatedly draws from specified models to estimate a distribution of possible outcomes. It explores assumptions; it does not forecast the future.',
  },
  'algorithmic-trading-risk-controls-explained': {
    directAnswer:
      'Algorithmic trading controls combine pre-trade checks, in-flight monitoring, post-trade reconciliation, and tested stop procedures; obligations depend on the market and firm.',
  },
  'understanding-liquidity-risk': {
    directAnswer:
      'Liquidity risk is the possibility that an asset cannot be sold, or an obligation cannot be funded, when needed without an unacceptable cost or delay.',
  },
  'machine-learning-financial-risk-anomalies': {
    directAnswer:
      'Anomaly detection flags patterns that differ from a baseline for review. An unusual score is not proof of fraud, a calibrated probability, or a decision by itself.',
  },
  'var-vs-expected-shortfall': {
    directAnswer:
      'VaR estimates a loss threshold at a chosen confidence level; expected shortfall estimates average losses in the specified tail. Both depend on models and assumptions.',
  },
};

export function enhanceArticle<T extends {slug: string; title: string; excerpt: string}>(
  article: T,
) {
  const editorial = articleEditorial[article.slug];
  if (!editorial) {
    throw new Error(`Missing editorial metadata for article "${article.slug}".`);
  }

  return {
    ...article,
    ...editorial,
    seoTitle: 'seoTitle' in article && typeof article.seoTitle === 'string'
      ? article.seoTitle
      : article.title,
    seoDescription:
      'seoDescription' in article && typeof article.seoDescription === 'string'
        ? article.seoDescription
        : article.excerpt,
  };
}
