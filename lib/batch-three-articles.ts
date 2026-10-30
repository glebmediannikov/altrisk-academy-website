import type {Article} from './hub-articles';

const imageDirectory = '/articles/batch-3';

export const batchThreeArticles: Article[] = [
  {
    status: 'published',
    slug: 'personal-risk-management-plan',
    title: 'How to Build a Personal Risk Management Plan',
    seoTitle: 'How to Build a Personal Risk Management Plan',
    seoDescription:
      'Learn a four-step personal risk plan: list risks, rate them, protect with savings and insurance, and review the plan each year.',
    category: 'Everyday Risk',
    read: '8 min',
    excerpt:
      'A personal risk management plan lists the events that could disrupt your finances, rates them, and sets out how savings and insurance respond.',
    introduction:
      'A personal risk management plan is a written list of the events that could strain your finances, with a note on how you would respond to each one. It does not predict what will happen. It helps you see where a job loss, illness, home problem, or vehicle repair would hurt most, and what protection is already in place. This guide walks through four steps you can complete with a notebook or spreadsheet.',
    coverImage: {
      src: `${imageDirectory}/personal-risk-plan-cover.svg`,
      alt: 'Four-step personal risk plan: list risks, rate them, protect with savings and insurance, and review once a year.',
      caption:
        'A personal risk plan moves from identifying risks to protecting against them and reviewing the plan regularly.',
    },
    illustrations: [
      {
        src: `${imageDirectory}/personal-risk-matrix-diagram.svg`,
        alt: 'A three by three grid for rating personal risks by impact and likelihood, with hypothetical examples of job loss, a car repair, and a lost phone.',
        caption: 'A hypothetical rating grid: place each risk where its impact and likelihood fit, then decide what to do about the high-impact ones.',
        afterSection: '2. Rate each risk by likelihood and impact',
      },
    ],
    sections: [
      {
        heading: '1. List the risks that could affect your money',
        paragraphs: [
          'Start with a plain list of events that could reduce your income or increase your expenses. Common examples include losing a job, an illness that keeps you from working, damage to a home or rental, a car breakdown, a family emergency, or a change in a fixed cost such as rent. Keep the list short enough to review and specific enough to act on. “Car repair” is more useful than “bad luck.”',
          'Write down what each event would cost in the first month and how long it might last. A repair might be a one-time bill, while a job loss can continue for months. These two numbers guide the rest of the plan.',
        ],
      },
      {
        heading: '2. Rate each risk by likelihood and impact',
        paragraphs: [
          'Next, rate each item as low, medium, or high for both how likely it is and how much it would hurt. Your own history matters here. If your car is 12 years old, a repair may be more likely than it is for a new car. If you have dependants, the impact of an income interruption may be larger. These ratings are judgments, not measurements, so revisit them when your situation changes.',
          'Items rated high on impact deserve attention even if they seem unlikely. Those are the events that can force a loan or missed payment if nothing is in place.',
        ],
      },
      {
        heading: '3. Protect with savings and insurance',
        paragraphs: [
          'Ready.gov’s financial preparedness guidance points to two basic layers: an emergency savings fund and appropriate insurance for property, health, and life. The FDIC’s consumer guidance notes that financial experts generally recommend keeping at least six months of living expenses in savings for unexpected events and future needs. That is a general rule of thumb. The right amount depends on your income stability, dependants, and other resources.',
          'Insurance transfers some risks to an insurer under the terms of a policy. Check deductibles, exclusions, and coverage limits rather than assuming a policy covers a specific event. Where a risk is small and you can afford the cost, you may choose to accept it and keep a note of that decision.',
        ],
      },
      {
        heading: '4. Review the plan once a year',
        paragraphs: [
          'A plan goes stale as jobs, homes, families, and costs change. Set a yearly date to update the list, check your savings balance against your target, confirm your insurance still fits, and note any new risks. The CFPB’s consumer tools page lists free resources for reviewing your own finances.',
        ],
      },
      {
        heading: 'Common mistakes',
        paragraphs: [
          'Common mistakes include relying on a single income source, counting on a credit card as an emergency fund, assuming insurance covers everything, and never revisiting the plan after a major life change. A plan is useful only if it is kept current and the numbers are realistic.',
        ],
      },
    ],
    example: {
      heading: 'Hypothetical example: Maya’s first plan',
      paragraphs: [
        'Assume Maya, a fictional example, spends $2,100 a month on essentials. Using a six-month rule of thumb, her savings target would be $12,600. She has $3,600 saved. If she adds $300 a month, the gap of $9,000 would take 30 months to close, not counting interest or changes in spending.',
        'Maya rates job loss as high impact and medium likelihood, and a vehicle repair as medium impact and high likelihood. Her plan puts the first $1,000 of savings toward car repairs and sets the larger target for income interruption. She reviews the numbers each January. This example is illustrative only and is not a recommendation about any specific amount.',
      ],
    },
    keyTakeaways: [
      'A personal risk plan lists risks, rates them, and records how savings and insurance respond.',
      'Savings targets are rules of thumb; adjust them to your income stability and dependants.',
      'Check insurance terms, deductibles, and exclusions instead of assuming coverage.',
      'Review the plan at least once a year and after major life changes.',
    ],
    relatedArticles: [
      'stress-test-personal-budget',
      'stress-testing-explained',
      'understanding-liquidity-risk',
    ],
    learningPaths: ['everyday-risk'],
    sources: [
      {
        title: 'Financial Preparedness',
        publisher: 'Ready.gov',
        url: 'https://www.ready.gov/financial-preparedness',
      },
      {
        title: 'Saving for the Unexpected and Your Future',
        publisher: 'Federal Deposit Insurance Corporation (FDIC)',
        url: 'https://www.fdic.gov/consumer-resource-center/2025-01/saving-unexpected-and-your-future',
      },
      {
        title: 'Consumer Tools',
        publisher: 'Consumer Financial Protection Bureau (CFPB)',
        url: 'https://www.consumerfinance.gov/consumer-tools/',
      },
    ],
  },
  {
    status: 'published',
    slug: 'cybersecurity-risk-students-small-business',
    title: 'Cybersecurity Risk for Students and Small Businesses',
    seoTitle: 'Cybersecurity Risk for Students and Small Businesses',
    seoDescription:
      'Understand everyday cybersecurity risk for students and small businesses, with practical steps for strong logins, phishing, and backups.',
    category: 'Digital Risk',
    read: '8 min',
    excerpt:
      'Students and small businesses face common digital risks. Multi-factor authentication, phishing awareness, and tested backups reduce many of them.',
    introduction:
      'Cybersecurity risk is the chance that a digital attack, mistake, or system failure damages accounts, data, or money. Students face it through personal accounts, school portals, and online payments. Small businesses face it through shared inboxes, payment tools, and customer records. This article explains the most common risks and the basic habits that address them. It is educational and is not a replacement for professional IT or security advice.',
    coverImage: {
      src: `${imageDirectory}/cyber-basics-cover.svg`,
      alt: 'Three cybersecurity habits: a strong login with two-step verification, spotting phishing, and keeping a backup copy of data.',
      caption:
        'Three everyday habits—strong logins, phishing awareness, and backups—address many common digital risks.',
    },
    illustrations: [
      {
        src: `${imageDirectory}/cyber-mfa-layers-diagram.svg`,
        alt: 'Three boxes in a row showing a password, then a code or app approval, then access to the account, with arrows between them.',
        caption: 'A hypothetical login: a second check means a stolen password alone does not open the account.',
        afterSection: '1. Protect accounts with multi-factor authentication',
      },
    ],
    sections: [
      {
        heading: '1. Protect accounts with multi-factor authentication',
        paragraphs: [
          'Passwords alone are a weak point. Passwords can be reused, cracked more easily when they are weak, or stolen. CISA, the U.S. Cybersecurity and Infrastructure Security Agency, states that users who enable multi-factor authentication (MFA) are significantly less likely to get hacked. For students, that means turning it on for email, school portals, and banking. For a small business, it means enabling it for every shared admin account and payment tool.',
          'Use a unique password for each important account, ideally generated and stored with a password manager. CISA lists popular forms of MFA, including text-message (SMS) codes, application-based codes, and phishing-resistant MFA. Where a phishing-resistant option is available, it is a sensible choice for the accounts that matter most; this is practical guidance rather than a CISA ranking.',
        ],
      },
      {
        heading: '2. Recognize phishing before clicking',
        paragraphs: [
          'Phishing is a message designed to trick someone into revealing a password, approving a payment, or opening a malicious file. CISA’s phishing guidance warns about messages that demand an immediate response, sender addresses that do not match the vendor’s domain, and sign-in links that lead to a fake site. Its example advises typing the site’s address directly rather than clicking a link in the message.',
                    'As a suggested practice, small businesses can require that payment or banking changes are confirmed by phone using a number already on file, not one supplied in the message. Students can apply the same habit to messages about financial aid, scholarships, or bills.',
        ],
      },
      {
        heading: '3. Keep backups you can actually restore',
        paragraphs: [
          'A backup is useful only if it can be restored. The SBA’s cybersecurity guidance says to back up data regularly and, where possible, to back up to cloud storage on a weekly basis. A student might keep a copy of thesis files and course records in a second location. A small business might back up accounting files, customer lists, and system settings, then test a restore periodically, which is a practical habit rather than a requirement in the cited guidance.',
          'Store at least one backup separately from the device or account it protects, so a single incident does not delete both copies.',
        ],
      },
      {
        heading: 'Why this matters financially',
        paragraphs: [
          'Cyber incidents can create direct costs such as stolen funds, fees, and time spent recovering accounts. They can also create indirect costs, such as missed orders, lost customer trust, or disrupted coursework. Treating cybersecurity as a basic part of financial risk management helps reduce the chance that a single mistake becomes a larger loss.',
        ],
      },
    ],
    example: {
      heading: 'Hypothetical example: a coffee cart’s payment account',
      paragraphs: [
        'Assume a fictional coffee cart uses one shared login for its payment dashboard. A phishing email asks the owner to “verify” the account. Without MFA, a single password entry could allow a stranger to change payout details. With MFA and a rule that payout changes are confirmed by phone, the attempt is more likely to be stopped.',
        'The same business keeps weekly cloud backups of its sales records. If a laptop is lost, the owner can restore the records rather than rebuilding them from receipts. This example is illustrative and does not describe any real business.',
      ],
    },
    keyTakeaways: [
      'Turn on multi-factor authentication for email, banking, school portals, and business admin accounts.',
      'Verify unexpected payment or account requests through a known, separate channel.',
      'Back up important data and test restores; keep one copy separate from the source device.',
    ],
    relatedArticles: [
      'machine-learning-financial-risk-anomalies',
      'business-risk-management-young-entrepreneurs',
      'risk-dashboards-real-time-exposure',
    ],
    learningPaths: ['cyber-risk'],
    sources: [
      {
        title: 'Multi-Factor Authentication',
        publisher: 'Cybersecurity and Infrastructure Security Agency (CISA)',
        url: 'https://www.cisa.gov/MFA',
      },
      {
        title: 'Recognize and Report Phishing',
        publisher: 'Cybersecurity and Infrastructure Security Agency (CISA)',
        url: 'https://www.cisa.gov/secure-our-world/recognize-and-report-phishing',
      },
      {
        title: 'Strengthen Your Cybersecurity',
        publisher: 'U.S. Small Business Administration (SBA)',
        url: 'https://legacy.sba.gov/business-guide/manage-your-business/strengthen-your-cybersecurity',
      },
      {
        title: 'Cybersecurity Best Practices',
        publisher: 'Cybersecurity and Infrastructure Security Agency (CISA)',
        url: 'https://www.cisa.gov/topics/cybersecurity-best-practices',
      },
    ],
  },
  {
    status: 'published',
    slug: 'business-risk-management-young-entrepreneurs',
    title: 'Business Risk Management for Young Entrepreneurs',
    seoTitle: 'Business Risk Management for Young Entrepreneurs',
    seoDescription:
      'A beginner’s guide to business risk management: identify risks, plan cash reserves, consider insurance, and stay compliant.',
    category: 'Business Risk',
    read: '8 min',
    excerpt:
      'Young entrepreneurs can manage business risk by identifying exposures, keeping a cash reserve, reviewing insurance, and tracking legal obligations.',
    introduction:
      'Business risk is the possibility that events inside or outside a company reduce its ability to earn, pay its bills, or meet its obligations. For a young entrepreneur, the risks are often concentrated: one main customer, one supplier, one bank account, or one piece of equipment. This article outlines a simple approach that starts with identifying risks and ends with reviewing them regularly.',
    coverImage: {
      src: `${imageDirectory}/business-risk-cover.svg`,
      alt: 'Small shop illustrated with an insurance shield, a risk checklist, and a cash reserve bar covering one month of fixed costs.',
      caption:
        'A basic business risk approach combines a checklist, a cash reserve, insurance review, and compliance tracking.',
    },
    illustrations: [
      {
        src: `${imageDirectory}/business-cash-reserve-diagram.svg`,
        alt: 'Four bars showing a hypothetical cash reserve of zero, one, three, and six months of expenses, with the zero-month bar marked as no reserve.',
        caption: 'A hypothetical reserve comparison: the right number depends on the business, its fixed costs, and its obligations.',
        afterSection: '2. Build a cash reserve',
      },
    ],
    sections: [
      {
        heading: '1. Assess your risks before you launch',
        paragraphs: [
          'The SBA’s emergency planning guidance begins with a step to assess your risk. Ask what could interrupt operations, damage property, create legal claims, or affect payments. Common risks include customer concentration, supplier delays, equipment failure, data loss, employee injury, and changes in demand. Write them down and identify which would be most damaging if they happened.',
          'The same SBA guidance states that 25% of businesses won’t open again after a disaster, which is a reason to plan before a problem occurs.',
        ],
      },
      {
        heading: '2. Build a cash reserve',
        paragraphs: [
          'A cash reserve gives a business time to respond to a slow month, a delayed payment, or an unexpected repair. Many small businesses set a target based on fixed costs such as rent, software, insurance, and loan payments. The right target depends on how predictable income is. A business with uneven sales may need a larger reserve than one with recurring contracts.',
          'Keep business and personal finances separate where possible. Mixing them makes it harder to see whether the business can cover its own costs.',
        ],
      },
      {
        heading: '3. Review insurance and legal obligations',
        paragraphs: [
          'Insurance can transfer some risks, such as property damage or certain liability claims, but coverage varies. Review policies with a qualified insurance professional, and check exclusions, limits, and deductibles. The SBA’s guidance on staying legally compliant is a useful starting point for identifying state filings, federal tax obligations, and the licenses or permits that apply to your business and location.',
                    'Ready.gov’s business continuity guidance covers planning for continuity, crisis communications, emergency response, and IT disaster recovery. It is a useful reference for writing down how operations would continue if a site or system became unavailable.',
        ],
      },
      {
        heading: 'Review the plan regularly',
        paragraphs: [
          'A business changes as it grows. Revisit the risk list when you add a product, hire staff, sign a large contract, or change suppliers. A short quarterly review can keep the plan connected to real operations.',
        ],
      },
    ],
    example: {
      heading: 'Hypothetical example: a coffee cart’s reserve',
      paragraphs: [
        'Assume a fictional coffee cart has monthly fixed costs of $4,000, including rent for its pitch, software, and insurance. The owner sets a target of one month of fixed costs, or $4,000. The cart currently holds $1,600 in reserve. Adding $400 a month would take six months to reach the target, before considering growth in costs or interest earned.',
        'If a generator fails and costs $900 to repair, the cart can pay from reserve without missing rent. This example is hypothetical and is not a recommendation about the amount of reserve any business should hold.',
      ],
    },
    keyTakeaways: [
      'Start with a written list of business risks and identify the most damaging ones.',
      'Build a cash reserve based on fixed costs and the predictability of income.',
      'Review insurance terms and track legal and tax obligations with professional help as needed.',
    ],
    relatedArticles: [
      'risk-dashboards-real-time-exposure',
      'stress-testing-explained',
      'personal-risk-management-plan',
    ],
    learningPaths: ['business-risk'],
    sources: [
      {
        title: 'Get Business Insurance',
        publisher: 'U.S. Small Business Administration (SBA)',
        url: 'https://legacy.sba.gov/business-guide/launch-your-business/get-business-insurance',
      },
      {
        title: 'Prepare for Emergencies',
        publisher: 'U.S. Small Business Administration (SBA)',
        url: 'https://legacy.sba.gov/business-guide/manage-your-business/prepare-emergencies',
      },
      {
        title: 'Stay Legally Compliant',
        publisher: 'U.S. Small Business Administration (SBA)',
        url: 'https://legacy.sba.gov/business-guide/manage-your-business/stay-legally-compliant',
      },
      {
        title: 'Business Emergency Plans',
        publisher: 'Ready.gov',
        url: 'https://www.ready.gov/business/emergency-plans',
      },
    ],
  },
  {
    status: 'published',
    slug: 'climate-risk-financial-decisions',
    title: 'Climate Risk and Its Impact on Financial Decisions',
    seoTitle: 'Climate Risk and Financial Decisions: A Plain-Language Guide',
    seoDescription:
      'Learn the difference between physical and transition climate risk and how each can affect financial decisions, with educational examples.',
    category: 'Global Risk',
    read: '9 min',
    excerpt:
      'Climate risk can affect money through physical damage from extreme weather and transition risk from policy and technology change.',
    introduction:
      'Climate risk refers to the financial effects of climate change and of the response to it. These effects reach households, businesses, lenders, and investors. This article uses two categories that regulators and researchers often use: physical risk and transition risk. It explains each category in plain language and shows how they might inform, but not determine, a financial decision.',
    coverImage: {
      src: `${imageDirectory}/climate-risk-cover.svg`,
      alt: 'Two climate risk channels: physical risk from floods, heat, and storms, and transition risk from policy and technology change.',
      caption:
        'Physical risk comes from the climate itself; transition risk comes from the shift to a lower-carbon economy.',
    },
    illustrations: [
      {
        src: `${imageDirectory}/climate-three-questions-diagram.svg`,
        alt: 'Three cards: physical risk such as floods and heat, transition risk such as policy and technology change, and a personal check on exposure and time frame.',
        caption: 'A hypothetical framework for asking climate questions. It is not a forecast of any investment.',
        afterSection: '3. Using climate risk in financial decisions',
      },
    ],
    sections: [
      {
        heading: '1. Physical risk: damage from the climate itself',
        paragraphs: [
          'The U.S. Environmental Protection Agency describes physical climate risks as risks related to the physical impacts of climate change. The examples below are illustrative. For a household, this could mean property damage, higher insurance costs, or a home that is harder to sell. For a business, it could mean disrupted supply chains or damaged facilities.',
          'Physical risk is often local. Two properties in different places can face very different exposures, so a general statement about climate does not reveal much about one asset.',
        ],
      },
      {
        heading: '2. Transition risk: change from policy and technology',
        paragraphs: [
          'Transition risk arises from the adjustment to a lower-carbon economy. Changes in regulation, carbon pricing, technology, consumer preferences, or market sentiment can affect the value of assets and the cost of activities. The EPA’s framework lists transition risks alongside physical risks when describing climate risks and opportunities.',
          'Scenario analysis is one tool for exploring these questions. The Network for Greening the Financial System (NGFS) publishes climate scenarios that describe different policy and technology paths. The Federal Reserve’s 2024 pilot climate scenario analysis also explored transition risk using scenarios such as Current Policies and Net Zero 2050. Scenarios are structured “what if” stories, not predictions.',
        ],
      },
      {
        heading: '3. Using climate risk in financial decisions',
        paragraphs: [
          'Climate risk can be one factor among many in a decision. A household might consider flood or heat exposure when choosing where to buy a home or what insurance to carry. An investor might ask how sensitive a holding is to carbon-intensive operations, regulation, or changing demand. The key question is whether the risk is relevant to the decision, how large it could be, and what evidence supports that view.',
          'Avoid treating climate risk as automatically “good” or “bad” for every asset. A company may face transition risk and also benefit from new demand. Clear definitions and documented assumptions help keep the analysis balanced.',
        ],
      },
    ],
    example: {
      heading: 'Hypothetical example: a coastal home and a sector fund',
      paragraphs: [
        'Assume a fictional household owns a coastal home worth $300,000 and has a $50,000 investment portfolio. The home carries physical risk from flooding and storms, which the owner addresses by reviewing flood insurance terms and elevation details. The portfolio holds 40% in one energy sector. If a hypothetical policy change lowered that sector’s value by 25%, the holding would fall by $5,000, or 10% of the portfolio.',
        'This is an illustrative calculation. Real outcomes depend on many factors, and the example is not a forecast for any sector or asset.',
      ],
    },
    keyTakeaways: [
      'Physical climate risk comes from weather and changing conditions; transition risk comes from policy, technology, and market change.',
      'Scenario analysis explores “what if” paths and is not a forecast.',
      'Assess climate exposures for each asset or decision rather than applying one blanket view.',
    ],
    relatedArticles: [
      'stress-testing-explained',
      'understanding-liquidity-risk',
      'how-ai-is-transforming-risk-management',
    ],
    learningPaths: ['global-risk'],
    sources: [
      {
        title: 'Climate Risks and Opportunities, Defined',
        publisher: 'U.S. Environmental Protection Agency (EPA)',
        url: 'https://www.epa.gov/climateleadership/climate-risks-and-opportunities-defined',
      },
      {
        title: 'NGFS Scenarios Portal',
        publisher: 'Network for Greening the Financial System (NGFS)',
        url: 'https://www.ngfs.net/ngfs-scenarios-portal/',
      },
      {
        title: 'Pilot Climate Scenario Analysis: Transition Risk Module',
        publisher: 'Board of Governors of the Federal Reserve System',
        url: 'https://www.federalreserve.gov/publications/2024-may-pilot-climate-scenario-analysis-transition-risk-module.htm',
      },
    ],
  },
  {
    status: 'published',
    slug: 'behavioral-biases-financial-decisions',
    title: 'Behavioral Biases in Financial Decision-Making',
    seoTitle: 'Behavioral Biases in Money Decisions: Anchoring Explained',
    seoDescription:
      'Learn how behavioral biases such as anchoring can shape money decisions, with a simple example and steps to slow down and compare.',
    category: 'Foundations',
    read: '7 min',
    excerpt:
      'Behavioral biases are predictable shortcuts in judgment. Anchoring, where an early number shapes later judgments, is a useful place to start.',
    introduction:
      'Behavioral biases are systematic patterns in how people judge and decide. They are not character flaws; they are shortcuts that help with everyday choices but can distort financial decisions when information is complex or emotional. This article introduces one well-documented bias, anchoring, and suggests a simple check you can apply to purchases and investment decisions.',
    coverImage: {
      src: `${imageDirectory}/anchoring-cover.svg`,
      alt: 'Two price tags comparing a high first price seen with a later comparison price, illustrating anchoring.',
      caption:
        'Anchoring: the first number seen can pull later judgments toward it, even when it is not the most useful comparison.',
    },
    illustrations: [
      {
        src: `${imageDirectory}/anchoring-pause-steps-diagram.svg`,
        alt: 'A three-step checklist: notice the first number you saw, name a second reference point, and write your decision in plain terms.',
        caption: 'A simple pause before deciding. It does not remove bias, but it gives a second reference point.',
        afterSection: 'A simple check to slow down',
      },
    ],
    sections: [
      {
        heading: 'What is anchoring?',
        paragraphs: [
          'The St. Louis Fed’s Page One Economics explains that anchoring is a tendency to rely too heavily on an initial piece of information when making judgments. The first number seen, whether a list price, a previous value, or a suggested amount, can serve as a reference point that shapes later judgments.',
          'Anchoring matters in finance because many decisions involve estimates and comparisons. A high “regular price” can make a discount look more attractive than it is, and a first estimate for a project can shape later budgets.',
        ],
      },
      {
        heading: 'Why it matters in everyday money decisions',
        paragraphs: [
          'Imagine a store shows a device at $1,199 and then at $899. The lower price may feel like a bargain because the first number is the anchor. A useful next step is to ask what the device costs elsewhere, whether you need it, and how the purchase fits your budget. The original price tells you little about the value of the item to you.',
          'The CFPB’s financial knowledge and decision-making skills page says these skills help people weigh options and make informed choices. Applying that habit to anchors means gathering comparison information before deciding.',
          'A 2007 Federal Reserve Board paper (FEDS 2007-048) reports that consensus forecasts of economic data tend to be biased toward the previous months’ data releases, an example of earlier figures shaping later estimates. The Board describes its economic research as often preliminary, so treat this finding as one illustration rather than settled evidence.',
        ],
      },
      {
        heading: 'A simple check to slow down',
        paragraphs: [
          'When a number seems to matter, try three questions: Where did this number come from? What is a second, independent comparison? What would I decide if I had not seen this figure first? Writing down the answers can make the anchor more visible.',
          'The same approach applies to investment decisions. If a recent price is the only reference, consider whether it reflects the asset’s value or only the last trade. Keep the decision linked to your goals, time horizon, and budget.',
        ],
      },
    ],
    example: {
      heading: 'Hypothetical example: a phone upgrade',
      paragraphs: [
        'Assume a fictional shopper sees a phone listed at $1,199 and a “sale” price of $899. The shopper decides the phone is a bargain. A slower review finds that the same model is available from another seller at $949, and the shopper already has a working phone. Comparing the options with the shopper’s budget, the upgrade is not necessary this year.',
        'This example is hypothetical. It illustrates a decision check, not a recommendation about any product or seller.',
      ],
    },
    keyTakeaways: [
      'Anchoring is the tendency to rely too heavily on the first number seen.',
      'Gather an independent comparison before deciding, especially when a “regular price” is shown.',
      'Check decisions against your budget and goals rather than against a single reference point.',
    ],
    relatedArticles: [
      'understanding-liquidity-risk',
      'personal-risk-management-plan',
      'stress-test-personal-budget',
    ],
    learningPaths: ['financial-risk'],
    sources: [
      {
        title: 'The Anchoring Effect',
        publisher: 'Federal Reserve Bank of St. Louis, Page One Economics',
        url: 'https://www.stlouisfed.org/publications/page-one-economics/2021/04/01/the-anchoring-effect',
      },
      {
        title: 'Financial Knowledge and Decision-Making Skills',
        publisher: 'Consumer Financial Protection Bureau (CFPB)',
        url: 'https://www.consumerfinance.gov/consumer-tools/educator-tool/youth-financial-education/learn/financial-knowledge-decision-making-skills/',
      },
      {
        title: 'Anchoring Bias in Consensus Forecasts and its Effect on Market Prices (FEDS 2007-048)',
        publisher: 'Federal Reserve Board',
        url: 'https://www.federalreserve.gov/econres/feds/anchoring-bias-in-consensus-forecasts-and-its-effect-on-market-prices.htm',
      },
    ],
  },
  {
    status: 'published',
    slug: 'stress-test-personal-budget',
    title: 'How to Stress Test Your Personal Budget',
    seoTitle: 'How to Stress Test Your Personal Budget',
    seoDescription:
      'Learn how to stress test a personal budget against a car repair and an income drop, then compare the gap with your emergency fund.',
    category: 'Everyday Risk',
    read: '8 min',
    excerpt:
      'A budget stress test checks whether your savings can cover a plausible setback, such as a car repair or a temporary drop in income.',
    introduction:
      'A budget that works in a normal month may not work after a setback. A stress test asks a simple question: if one or two things went wrong, would my savings cover the gap? It does not predict which event will happen. It helps you identify how large a buffer you would need and whether your current fund is enough for the scenarios you care about.',
    coverImage: {
      src: `${imageDirectory}/budget-stress-test-cover.svg`,
      alt: 'Hypothetical budget stress test with monthly take-home pay, a car repair scenario, a two-month income drop, and an emergency fund shortfall.',
      caption:
        'A hypothetical stress test compares combined setback costs with the emergency fund; all figures are illustrative.',
    },
    illustrations: [
      {
        src: `${imageDirectory}/budget-setback-gap-diagram.svg`,
        alt: 'Two bars: hypothetical setback costs of $2,600 and a hypothetical emergency fund of $2,400, with a $200 shortfall marked.',
        caption: 'A hypothetical budget gap: the numbers are illustrative, not a recommendation of any amount.',
        afterSection: '3. Compare the gap with your emergency fund',
      },
    ],
    sections: [
      {
        heading: '1. Start with your normal monthly budget',
        paragraphs: [
          'List your take-home pay and essential costs first: housing, food, utilities, transport, insurance, and minimum debt payments. Then list the discretionary spending and savings you normally carry. Essentials are the costs you must cover to stay safe and keep working; they are the foundation of any stress test.',
          'The FDIC’s consumer guidance notes that financial experts generally recommend keeping at least six months of living expenses in a federally insured product for unexpected events and future needs. That is a general guideline. Your own target may be higher or lower depending on how stable your income is.',
        ],
      },
      {
        heading: '2. Choose realistic setbacks',
        paragraphs: [
          'Pick scenarios that are plausible for your situation. The FDIC’s guidance describes an emergency fund as a way to cover unexpected events such as job loss or a major home or car repair. Keep the scenarios specific: a repair estimate, a number of months of reduced income, or an unexpected bill with a known amount.',
          'You can run more than one scenario, but start with one or two. Too many variables can make the result hard to interpret.',
        ],
      },
      {
        heading: '3. Compare the gap with your emergency fund',
        paragraphs: [
          'Add up the costs of the scenarios, then subtract the cash you could use from savings. If the result is positive, your fund covers the gap. If it is negative, that shortfall is the amount you would need to borrow, cut spending by, or find from another source. The useful output is the gap, not a single pass-or-fail label.',
          'Ready.gov’s financial preparedness guidance is a useful reference for thinking about savings and insurance together. Insurance may cover some scenarios, but deductibles, limits, and exclusions still matter.',
        ],
      },
      {
        heading: '4. Adjust and repeat',
        paragraphs: [
          'After the test, decide which lever to adjust: reduce a discretionary cost, increase monthly savings, change an insurance deductible, or set a timeline for building the fund. Repeat the test when your income, housing, or family situation changes. The CFPB’s money-goal toolkit can help you connect the test to specific goals.',
        ],
      },
    ],
    example: {
      heading: 'Hypothetical example: Jordan’s budget',
      paragraphs: [
        'Assume a fictional person, Jordan, has $2,300 of monthly take-home pay, $2,000 of essential costs, and $300 of savings and fund contributions. The emergency fund holds $2,400. Jordan tests two hypothetical setbacks: a $1,200 car repair and a two-month income drop to $1,300 a month. During the income drop, essential costs of $2,000 exceed the $1,300 income by $700 a month, a $1,400 gap over two months.',
        'Combined with the repair, the setbacks create a $2,600 gap. The $2,400 fund covers most of it, leaving a $200 shortfall. Jordan decides to shift $100 of discretionary spending into the fund for six months. The figures are illustrative only and do not describe any real person or a recommended budget.',
      ],
    },
    keyTakeaways: [
      'A stress test measures the gap between plausible setbacks and your available savings.',
      'Use realistic scenarios with specific amounts and keep the list short.',
      'Treat the output as a planning tool and repeat the test when your situation changes.',
    ],
    relatedArticles: [
      'personal-risk-management-plan',
      'stress-testing-explained',
      'understanding-liquidity-risk',
    ],
    learningPaths: ['everyday-risk'],
    sources: [
      {
        title: 'Saving for the Unexpected and Your Future',
        publisher: 'Federal Deposit Insurance Corporation (FDIC)',
        url: 'https://www.fdic.gov/consumer-resource-center/2025-01/saving-unexpected-and-your-future',
      },
      {
        title: 'Your Money, Your Goals Toolkit',
        publisher: 'Consumer Financial Protection Bureau (CFPB)',
        url: 'https://www.consumerfinance.gov/consumer-tools/educator-tool/your-money-your-goals/toolkit/',
      },
      {
        title: 'Financial Preparedness',
        publisher: 'Ready.gov',
        url: 'https://www.ready.gov/financial-preparedness',
      },
    ],
  },
];
