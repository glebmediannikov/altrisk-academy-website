export const APP_ACADEMY = 'https://altrisk-academy.streamlit.app/';
export const APP_CALCULATOR = 'https://altrisk.streamlit.app/';
export const paths = [
  {slug:'financial-risk',title:'Financial & Investment Risk',category:'Financial Risk',desc:'Build confidence in investing, diversification, credit, and financial decision-making.',icon:'chart',level:'Beginner',lessons:8,soon:false},
  {slug:'business-risk',title:'Entrepreneurship & Business Risk',category:'Business Risk',desc:'Explore startup uncertainty, cash flow, opportunity, and business resilience.',icon:'briefcase',level:'All levels',lessons:6,soon:true},
  {slug:'career-risk',title:'Education & Career Risk',category:'Career Risk',desc:'Learn to evaluate education choices, career trade-offs, and changing job markets.',icon:'graduation',level:'Beginner',lessons:5,soon:true},
  {slug:'cyber-risk',title:'Digital & Cyber Risk',category:'Digital Risk',desc:'Understand online fraud, privacy, cybersecurity, and emerging technology risks.',icon:'shield',level:'Beginner',lessons:6,soon:true},
  {slug:'everyday-risk',title:'Everyday Risk & Decisions',category:'Everyday Risk',desc:'Practice making thoughtful decisions when life does not go according to plan.',icon:'compass',level:'Beginner',lessons:7,soon:true},
  {slug:'global-risk',title:'Global & Emerging Risks',category:'Global Risk',desc:'Explore the impact of economic, climate, and technological uncertainty.',icon:'globe',level:'Intermediate',lessons:5,soon:true}
];
export const lessons = [
 {
  slug:'what-is-risk',title:'What Is Risk?',category:'Foundations',read:'5 min',
  excerpt:'Learn how risk connects uncertain outcomes, possible consequences, and the goals that matter to you.',
  introduction:'Risk is not simply “something bad.” It is a way to think about uncertain outcomes and how much those outcomes could affect a goal. A risk-aware person does not need to predict exactly what will happen; they identify what could happen, what is at stake, and which choices would leave them better prepared.',
  sections:[
   {heading:'A practical way to describe risk',paragraphs:[
    'For a decision, start with three questions: What outcome am I trying to achieve? What could change or go wrong? If it did, how serious would the effect be? This connects uncertainty to consequences. A small chance of a very serious outcome may deserve attention, just as a frequent but minor inconvenience might be worth planning for.',
    'In investing, FINRA describes risk as uncertainty that could negatively affect financial welfare. That is one useful financial definition. In everyday decisions, risk can also include lost time, a missed opportunity, or an outcome that falls short of a goal—not only a cash loss.'
   ]},
   {heading:'Likelihood and impact are different questions',paragraphs:[
    'People often combine likelihood and impact into a single label such as “high risk.” It is more useful to consider them separately. Likelihood asks how plausible an event seems given available information. Impact asks what the event would mean if it happened. Those estimates are not facts about the future: they depend on assumptions, evidence, and the time period being considered.',
    'A simple risk table can help organize a discussion. List an event, describe its possible impact, note what evidence informs your likelihood estimate, and record what you do not know. A table helps compare concerns; it does not calculate an objectively correct probability or remove uncertainty.'
   ]},
   {heading:'Risk can create both downside and opportunity',paragraphs:[
    'Risk discussions naturally focus on avoiding loss, but decisions can also carry opportunity costs. Choosing one option may mean giving up another benefit. For example, keeping money available for a near-term bill can reduce the chance of being short on cash, while placing that money in a less accessible option may involve a different set of trade-offs. Neither description alone determines the right choice; the goal and timing matter.',
    'Risk is also personal to the goal. The same price change may matter little to someone with a distant goal and stable resources, but matter more to someone who expects to use the money soon. FINRA notes that investment time horizon and the ability to tolerate risk are relevant considerations. These are factors to understand, not a formula that selects an investment for an individual.'
   ]}
  ],
  example:{heading:'Hypothetical example: saving for a laptop',paragraphs:[
   'Suppose a student has $500 set aside for a laptop and expects to buy it next month. A car repair could require $180 before then. If the repair happens, the laptop fund would fall to $320, leaving a $180 gap relative to the original target. The calculation is simple: $500 − $180 = $320. The example illustrates impact; it does not estimate the chance that a repair will occur.',
   'The student could consider what flexibility exists: delaying the purchase, saving more if possible, or keeping funds for near-term needs accessible. These are discussion options, not personalized recommendations. The CFPB’s emergency-fund guide explains how unplanned expenses can disrupt other savings goals and why a reserve amount depends on a person’s circumstances.'
  ]},
  keyTakeaways:[
   'Describe the goal and the uncertain event before calling something “high risk.”',
   'Keep likelihood estimates separate from impact, and state what evidence or assumptions they use.',
   'A risk framework supports better questions; it cannot guarantee an outcome or remove uncertainty.'
  ],
  relatedArticles:['risk-vs-uncertainty','what-is-financial-risk','market-volatility'],
  learningPaths:['financial-risk'],
  sources:[
   {title:'Risk — FINRA: Investing Basics',publisher:'FINRA',url:'https://www.finra.org/investors/investing/investing-basics/risk'},
   {title:'An Essential Guide to Building an Emergency Fund',publisher:'Consumer Financial Protection Bureau',url:'https://www.consumerfinance.gov/an-essential-guide-to-building-an-emergency-fund/'}
  ]
 },
 {
  slug:'risk-vs-uncertainty',title:'Risk vs. Uncertainty',category:'Foundations',read:'6 min',
  excerpt:'Compare situations with estimable probabilities to decisions where important unknowns remain.',
  introduction:'Risk and uncertainty are closely related, and people sometimes use the words interchangeably. A helpful economics framework distinguishes situations where probabilities can be estimated from situations where the outcomes or probabilities are not well known. This distinction can help students avoid giving a precise number to a question that the available evidence cannot answer.',
  sections:[
   {heading:'When probabilities can be estimated',paragraphs:[
    'Imagine a fair six-sided die. If each side is equally likely and the die is rolled once, the chance of a six is 1 out of 6, or about 16.7%. The calculation follows from a stated model: one favorable side divided by six possible sides. In real decisions, the model may be less certain than the arithmetic. A die might be biased, the number of trials may be small, or the conditions may change.',
    'In investment analysis, historical records and market data can help describe past outcomes or estimate ranges. They do not reveal a guaranteed future probability. An estimate is only as useful as its assumptions, data quality, and fit to the situation being considered.'
   ]},
   {heading:'When the probabilities are not known',paragraphs:[
    'Consider a student team launching a product that has no close comparison in its school or community. The team may know what it costs to make one unit, but not how many people will want it, whether demand will last, or how another product launch will affect interest. They can identify possible outcomes and gather feedback, but assigning exact probabilities may create false precision.',
    'Economist Frank Knight’s 1921 work, Risk, Uncertainty, and Profit, is a classic source for the distinction between measurable risk and uncertainty that cannot be measured reliably. It is a conceptual framework, not the only vocabulary used today. In practical conversation, “risk” often serves as a broad term for both known and unknown outcomes.'
   ]},
   {heading:'How to reason when the answer is unknown',paragraphs:[
    'When evidence is limited, list several plausible scenarios rather than selecting a single forecast. Ask which assumptions each scenario needs, what early signals could change the view, and what decision would remain manageable across more than one outcome. This approach makes uncertainty visible without pretending it has disappeared.',
    'You can also separate what is known from what is assumed. A known cost may be documented in a quote; an estimate of future customer demand is an assumption. Keeping the two separate makes it easier to update a plan when new information appears.'
   ]}
  ],
  example:{heading:'Hypothetical comparison: a die and a new product',paragraphs:[
   'For the fair-die example, the stated assumptions make a one-in-six probability possible to calculate. If a team sells a new student-made product, it might test interest with a small, voluntary survey. If 12 of 30 respondents say they would consider buying, the observed share is 12 ÷ 30 = 40%. That result describes this small survey, not the probability that 40% of all students will buy. Respondents may not represent the wider group, and stated interest is not the same as a completed purchase.',
   'The comparison is illustrative. It shows why a precise fraction can be justified in one model but misleading in another. Neither example predicts a guaranteed result.'
  ]},
  keyTakeaways:[
   'A probability is meaningful only with a model, assumptions, and relevant evidence.',
   'Historical or small-sample estimates describe data; they do not guarantee future outcomes.',
   'When probabilities are not credible, compare scenarios and identify what information would improve the estimate.'
  ],
  relatedArticles:['what-is-risk','what-is-financial-risk','risk-and-return'],
  learningPaths:['financial-risk'],
  sources:[
   {title:'Risk, Uncertainty, and Profit',publisher:'Frank H. Knight; Library of Economics and Liberty edition',url:'https://www.econlib.org/library/Knight/knRUP.html'},
   {title:'Risk — FINRA: Investing Basics',publisher:'FINRA',url:'https://www.finra.org/investors/investing/investing-basics/risk'}
  ]
 },
 {
  slug:'what-is-financial-risk',title:'What Is Financial Risk?',category:'Financial Risk',read:'6 min',
  excerpt:'Explore how uncertain events can affect money, financial goals, and the ability to meet future costs.',
  introduction:'Financial risk is the possibility that an uncertain event or decision could make it harder to meet a financial goal. It can involve losing money, owing more than expected, not having funds available when needed, or seeing purchasing power change. Thinking in terms of goals and timing makes this broad idea easier to examine.',
  sections:[
   {heading:'Different sources of financial risk',paragraphs:[
    'Investment risk includes the possibility that an asset loses value. FINRA also describes market, business, political, currency, liquidity, and concentration risks. These categories help show that “investment risk” is not one single force: a company-specific event differs from a broad market decline, and both differ from difficulty accessing money when needed.',
    'Financial risks outside investing matter too. A surprise repair, interruption in income, change in borrowing costs, or a bill due before the next paycheck can affect a household plan. The CFPB describes emergency savings as a reserve for unplanned expenses such as car repairs, medical bills, or loss of income. The appropriate amount depends on personal circumstances; there is no one figure that fits everyone.'
   ]},
   {heading:'Exposure depends on the goal and timeline',paragraphs:[
    'A useful review starts by naming the goal, when the money may be needed, and what resources or obligations could affect it. A short-term tuition bill has a different timing requirement from a long-term goal. An asset that can change in value may be difficult to rely on for a fixed expense due next week. This is a general planning consideration, not a recommendation to choose a particular account or investment.',
    'Risk tolerance is often used to describe willingness and ability to withstand changes or losses. These are not identical. Someone may feel comfortable with uncertainty but still need cash for near-term expenses. Someone else may be emotionally uneasy despite having a long horizon. FINRA suggests considering both the horizon and risk tolerance in the context of investing.'
   ]},
   {heading:'Identify, assess, and respond',paragraphs:[
    'A simple process is to identify a possible event, describe its effect, consider how likely it appears based on available evidence, and decide whether any response is practical. Responses can include reducing exposure, preparing a backup, accepting a small cost, or gathering more information. Each response has trade-offs: protection can cost money or time, and doing nothing may leave a vulnerability in place.',
    'For example, avoiding every possible loss is not realistic. Financial decisions involve choices among uncertain outcomes, and one kind of risk may be exchanged for another. Borrowing can help meet a cost today but creates repayment obligations; holding cash can make funds accessible but its buying power may change over time. The goal is to understand trade-offs rather than label one option universally safe.'
   ]}
  ],
  example:{heading:'Hypothetical example: a repair and a savings goal',paragraphs:[
   'Imagine someone has $700 set aside toward a $900 course fee due in two months. A necessary repair costs $240. If the person uses savings for the repair, the course fund becomes $460 ($700 − $240), leaving $440 to find before the deadline. The arithmetic is illustrative and assumes there are no other deposits, fees, or sources of support.',
   'This example identifies a shortfall but does not determine the person’s best choice. They might review the deadline, other available resources, or payment terms, and compare the consequences of each option. The CFPB emergency-savings guide discusses how unexpected expenses can disrupt other goals and emphasizes that saving capacity varies.'
  ]},
  keyTakeaways:[
   'Name the financial goal, timing, possible loss, and access needs before comparing options.',
   'Market, business, liquidity, household, and income risks are different; one action may affect several.',
   'Risk awareness helps frame decisions but cannot guarantee that a financial goal will be met.'
  ],
  relatedArticles:['what-is-risk','portfolio-diversification','risk-and-return'],
  learningPaths:['financial-risk'],
  sources:[
   {title:'Risk — FINRA: Investing Basics',publisher:'FINRA',url:'https://www.finra.org/investors/investing/investing-basics/risk'},
   {title:'An Essential Guide to Building an Emergency Fund',publisher:'Consumer Financial Protection Bureau',url:'https://www.consumerfinance.gov/an-essential-guide-to-building-an-emergency-fund/'}
  ]
 },
 {
  slug:'portfolio-diversification',title:'Portfolio Diversification Explained',category:'Investing',read:'7 min',
  excerpt:'Learn how spreading investments can reduce concentration in one holding while leaving market risk in place.',
  introduction:'Diversification means spreading investments across and within categories instead of relying heavily on one holding or source of return. It is a way to manage concentration risk—not a promise that a portfolio will avoid losses. The central question is whether different holdings truly have different exposures or simply look different on a list.',
  sections:[
   {heading:'What diversification can and cannot do',paragraphs:[
    'FINRA explains that diversification across asset classes and within them can reduce the risk of major losses linked to overemphasizing one security or asset class. It notes that how assets respond to economic events matters: holdings that move independently may provide more diversification than holdings that react similarly.',
    'Diversification can reduce some company-specific or sector-specific exposure. It cannot remove broad market risk, inflation risk, interest-rate risk, or the chance that several assets fall at once. It also cannot ensure a profit or prevent a portfolio from losing value. A diversified set of investments is still exposed to the risks of those investments.'
   ]},
   {heading:'Look through the labels',paragraphs:[
    'Owning many funds or stocks does not automatically mean an investor is diversified. Two funds may hold many of the same large companies, or a portfolio may hold different companies concentrated in one industry. FINRA cautions that pooled investments should still be checked for overlap. What matters is the underlying exposure, not only the number of account line items.',
    'Diversification can be considered across asset classes, industries, company sizes, geographic areas, and issuers. The appropriate mix depends on a person’s goals and time horizon; this article does not prescribe one. Concentration can also occur outside an investment portfolio, such as when a person’s income and investments both depend on one employer or industry.'
   ]},
   {heading:'Rebalancing is a separate decision',paragraphs:[
    'When holdings change in value at different rates, their proportions can drift. Rebalancing means adjusting holdings toward a chosen allocation. FINRA notes that rebalancing can involve fees, taxes, and the possibility of selling assets that have declined. It is not simply “buy what went down”: the original allocation and the reasons for it matter.',
    'A portfolio review can ask whether the current exposures still match the goal, whether several holdings respond to the same factors, and whether trading costs or taxes would affect a change. Those questions support learning and discussion; they do not produce a personalized allocation.'
   ]}
  ],
  example:{heading:'Hypothetical example: concentration in one company',paragraphs:[
   'Suppose a made-up portfolio is worth $1,000 and all of it is invested in one company. If that holding falls 30% and nothing else changes, the portfolio would be worth $700: $1,000 × (1 − 0.30) = $700. This simplified calculation assumes no deposits, withdrawals, fees, taxes, or other holdings.',
   'Now imagine a second hypothetical portfolio has $100 in that company and $900 in other assets that do not change in value during the example. The company portion falls from $100 to $70, so the portfolio totals $970. The $30 loss is smaller relative to the starting total, but the assumption that all other assets stay unchanged is unrealistic in many market events. The example illustrates concentration arithmetic, not expected returns or a recommended allocation.'
  ]},
  keyTakeaways:[
   'Diversification is about underlying exposures and how they may respond to events, not just the count of holdings.',
   'It can reduce some concentration risk but cannot eliminate market-wide losses.',
   'Rebalancing can involve costs, taxes, and trade-offs; it does not guarantee better performance.'
  ],
  relatedArticles:['what-is-financial-risk','market-volatility','risk-and-return'],
  learningPaths:['financial-risk'],
  sources:[
   {title:'Asset Allocation and Diversification',publisher:'FINRA',url:'https://www.finra.org/investors/investing/investing-basics/asset-allocation-diversification'},
   {title:'Risk — FINRA: Investing Basics',publisher:'FINRA',url:'https://www.finra.org/investors/investing/investing-basics/risk'}
  ]
 },
 {
  slug:'market-volatility',title:'What Is Market Volatility?',category:'Investing',read:'6 min',
  excerpt:'Understand how price swings describe one part of investment risk—and what volatility does not tell you.',
  introduction:'Market volatility describes how much prices move up and down over a period. A market or asset with larger swings is generally described as more volatile over that period. Volatility can attract attention, but it is a measure of movement—not a complete description of risk, value, or what will happen next.',
  sections:[
   {heading:'How to read a price movement',paragraphs:[
    'A price change needs a starting point and a time interval. If a hypothetical share price moves from $50 to $55, the change is $5, or 10% of the starting price. If it later moves from $55 back to $50, the percentage decline is about 9.1% of $55. The dollar change is the same, but the percentage differs because the starting values differ.',
    'Volatility can be measured in different ways using historical prices or, for some products, market expectations reflected in option prices. A short period can look very different from a long period. Any comparison should therefore specify the asset or index, measurement method, and time window. A single up-or-down day does not tell the whole story.'
   ]},
   {heading:'Volatility is not the same as loss',paragraphs:[
    'FINRA describes volatility as market indexes and prices moving up and down, with more dramatic swings indicating higher volatility and potential risk. A volatile asset can rise as well as fall. A low-volatility period does not prove that an investment is safe, and a volatile period does not by itself show whether an asset is fairly valued or likely to recover.',
    'Volatility also differs from permanent loss, liquidity risk, and the risk that an investment cannot meet a specific goal. It is one lens among several. A price can fluctuate without a sale, but an investor who needs to sell during a decline may experience an actual loss relative to the purchase price. Fees, taxes, timing, and the size of the position can also matter.'
   ]},
   {heading:'Time horizon changes how swings matter',paragraphs:[
    'The same price movement can have different consequences depending on when the money is needed. Someone planning a near-term purchase may be more affected by a decline than someone studying a long-term hypothetical portfolio with no withdrawals. A longer horizon does not make an investment risk-free; it only changes the period over which the goal and possible outcomes are considered.',
    'FINRA points to goals, diversification, and an emergency fund as parts of an overall financial condition during volatile markets. This is educational context, not a call to buy, sell, or hold a particular investment. Reacting to each price move can also introduce transaction costs or cause a person to act before understanding the consequences.'
   ]}
  ],
  example:{heading:'Hypothetical example: comparing two weeks',paragraphs:[
   'Consider two fictional investments measured over the same five trading days. Investment A closes at $100, $102, $98, $101, and $100. Investment B closes at $100, $105, $95, $103, and $100. Both start and end at $100, so their total start-to-finish change is 0%. But B had larger interim swings in this small example, so describing it as more volatile over these observations is reasonable.',
   'This is not historical market data and five observations are not enough to estimate future volatility. The example also omits distributions, transaction costs, and whether the price path is representative. It shows why the ending return alone does not capture the path taken.'
  ]},
  keyTakeaways:[
   'Always identify the asset, measurement period, and method when comparing volatility.',
   'Volatility measures movement; it is not a forecast, a guarantee of loss, or a complete measure of risk.',
   'Near-term cash needs can make a price decline more consequential, while longer horizons do not remove investment risk.'
  ],
  relatedArticles:['portfolio-diversification','risk-and-return','what-is-financial-risk'],
  learningPaths:['financial-risk'],
  sources:[
   {title:'Volatility — FINRA: Investing Basics',publisher:'FINRA',url:'https://www.finra.org/investors/investing/investing-basics/volatility'},
   {title:'What Is Volatility?',publisher:'Fidelity Learning Center',url:'https://www.fidelity.com/learning-center/smart-money/what-is-volatility'}
  ]
 },
 {
  slug:'risk-and-return',title:'Risk and Return Explained',category:'Investing',read:'6 min',
  excerpt:'Explore why investments with different possible returns also involve different uncertainties and trade-offs.',
  introduction:'Return describes the gain or loss on an investment over a period. Risk describes uncertain outcomes that could affect financial welfare. The two ideas are often discussed together because investors may expect compensation for accepting some risks. That general relationship is not a promise that a riskier investment will produce a higher return.',
  sections:[
   {heading:'Expected return is not guaranteed return',paragraphs:[
    'An expected return is an estimate based on a model, assumptions, or historical data. An actual return is what occurred over a particular period. These can differ, sometimes substantially. Even a well-reasoned estimate cannot remove uncertainty about future prices, interest rates, company results, inflation, or other conditions.',
    'FINRA notes that higher-risk investments may have the potential for higher returns, while emphasizing that performance comparisons are not reliable rules for every asset or period. A risk-return relationship is a way to describe a trade-off, not a promise that taking additional risk will be rewarded. An investor can take more risk and still lose money.'
   ]},
   {heading:'Compare returns on a like-for-like basis',paragraphs:[
    'A percentage return needs a period and a definition. A simple price return can be calculated as (ending price − starting price) ÷ starting price; this excludes distributions such as dividends. Total return accounts for both price changes and distributions, before considering taxes, fees, or the timing of additional cash flows. A 5% gain over one year is not directly comparable to a 5% gain over five years unless the comparison accounts for time. Annualized returns can help normalize periods, but they are summaries and do not show the path or guarantee repetition.',
    'Risk comparisons also need context. Volatility describes price movement, but other risks include concentration, liquidity, inflation, interest rates, and the possibility of permanent loss. Two investments with similar past returns can differ in their possible future outcomes and in how quickly funds can be accessed.'
   ]},
   {heading:'Time, goals, and uncertainty',paragraphs:[
    'An investment’s suitability cannot be determined from a return figure alone. A goal with a known near-term date may be affected by a decline differently from a long-term objective. FINRA’s risk guidance notes that the ability to tolerate market declines and the timing of future needs matter when thinking about investment risk. This educational article does not determine which option is suitable for any reader.',
    'Historical averages can also hide variation. A smooth average does not mean returns arrived smoothly, and an average across many years does not say what happened in each year. Past performance is historical evidence, not a forecast. Before using a number, identify its source, dates, fees, tax treatment, and whether it is nominal or adjusted for inflation.'
   ]}
  ],
  example:{heading:'Hypothetical calculation: a one-period return',paragraphs:[
   'Suppose a fictional investment begins at $200 and ends at $210 after one year, with no deposits, withdrawals, fees, or distributions. The simple holding-period return is ($210 − $200) ÷ $200 = 0.05, or 5%. If it instead ends at $180, the same calculation gives ($180 − $200) ÷ $200 = −0.10, or a 10% loss.',
   'These are hypothetical arithmetic examples, not market history or forecasts. They show how return is calculated under simplified assumptions; they say nothing about the likelihood of either outcome, purchasing power after inflation, or whether the investment fits a goal.'
  ]},
  keyTakeaways:[
   'A possible or expected return is not a guaranteed return; actual outcomes can be lower or negative.',
   'Compare returns over matching periods and disclose fees, taxes, cash flows, and inflation assumptions.',
   'Return alone cannot describe risk or determine whether an investment is appropriate for a goal.'
  ],
  relatedArticles:['market-volatility','portfolio-diversification','what-is-financial-risk'],
  learningPaths:['financial-risk'],
  sources:[
   {title:'Risk — FINRA: Investing Basics',publisher:'FINRA',url:'https://www.finra.org/investors/investing/investing-basics/risk'},
   {title:'Asset Allocation and Diversification',publisher:'FINRA',url:'https://www.finra.org/investors/investing/investing-basics/asset-allocation-diversification'}
  ]
 }
];
export const dictionary = [
 {term:'Asset Allocation',meaning:'How investments are distributed across categories such as stocks, bonds, and cash.'},
 {term:'Credit Risk',meaning:'The risk that a borrower will fail to repay money as agreed.'},
 {term:'Diversification',meaning:'Spreading exposure across different investments or sources of risk.'},
 {term:'Emergency Fund',meaning:'Money set aside to help cover unexpected expenses or income interruptions.'},
 {term:'Financial Risk',meaning:'The possibility of financial loss or an outcome that threatens a financial goal.'},
 {term:'Liquidity Risk',meaning:'The risk of being unable to sell an asset quickly without a significant price concession.'},
 {term:'Market Risk',meaning:'The risk of losses caused by broader changes in financial markets.'},
 {term:'Risk Appetite',meaning:'The amount and type of risk an individual or organization is willing to accept.'},
 {term:'Risk Management',meaning:'The process of identifying, assessing, responding to, and monitoring risks.'},
 {term:'Risk Tolerance',meaning:'How much uncertainty or loss a person can withstand while pursuing a goal.'},
 {term:'Scenario Analysis',meaning:'Exploring how different possible future conditions could affect a decision.'},
 {term:'Volatility',meaning:'The degree to which the price or return of an asset varies over time.'}
];
