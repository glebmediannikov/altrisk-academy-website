import Link from 'next/link';
import { PageIntro, Cta } from '../../components/common';
import { Icon } from '../../components/icon';
import {AnalyticsLink} from '../../components/analytics-link';
import type {AnalyticsDifficulty, AnalyticsTopic} from '../../lib/analytics';
import { APP_ACADEMY, APP_CALCULATOR } from '../../lib/data';
import type { Metadata } from 'next';
import {pageMetadata} from '../../lib/seo';

export const metadata: Metadata = pageMetadata({
  path: '/risk-lab',
  title: 'Interactive Risk Lab & Financial Simulators',
  description:
    'Practice risk management through free interactive financial, green investing, and sustainable living simulations.',
});

const modules = [
  {
    name: 'My First $1,000',
    cat: 'VIRTUAL MONEY · BEGINNER',
    desc: 'Practice allocating a virtual starting amount, exploring trade-offs, and evaluating how decisions affect your plan.',
    image: '/illustrations/risk-lab/my-first-1000.svg',
    imageAlt: 'Virtual $1,000 split into savings, spending, and investing on a donut chart and allocation cards',
    href: APP_ACADEMY,
    action: 'Open My First $1,000',
    analyticsId: 'my-first-1000',
    analyticsTopic: 'financial_risk',
    analyticsDifficulty: 'beginner',
    level: 'Beginner',
    steps: [
      'Start with a virtual amount and choose an allocation.',
      'Review how that allocation affects financial flexibility.',
      'Try a different strategy and compare trade-offs.',
    ],
    skills: ['Asset allocation', 'Risk versus reward'],
  },
  {
    name: 'Investment Risk Lab',
    cat: 'PORTFOLIO EXPERIMENTS',
    desc: 'Explore asset allocation, portfolio exposure, and simulated market conditions in an interactive environment.',
    image: '/illustrations/risk-lab/investment-risk-lab.svg',
    imageAlt: 'Portfolio sandbox dashboard with an allocation donut, hypothetical growth paths, a risk gauge, and risk indicators',
    href: APP_ACADEMY,
    action: 'Open Investment Risk Lab',
    analyticsId: 'investment-risk-lab',
    analyticsTopic: 'investing',
    analyticsDifficulty: 'beginner_intermediate',
    level: 'Beginner / Intermediate',
    steps: [
      'Choose a portfolio allocation.',
      'Explore simulated market conditions.',
      'Compare how different choices affect potential outcomes.',
    ],
    skills: ['Diversification', 'Portfolio risk'],
  },
  {
    name: 'Unexpected Events',
    cat: 'REAL-LIFE SCENARIOS',
    desc: 'See how unexpected expenses and changing circumstances can affect your financial choices.',
    image: '/illustrations/risk-lab/unexpected-events.svg',
    imageAlt: 'Car repair estimate beside an emergency fund and savings jar covering an unplanned expense',
    href: APP_ACADEMY,
    action: 'Open Unexpected Events',
    analyticsId: 'unexpected-events',
    analyticsTopic: 'everyday_risk',
    analyticsDifficulty: 'beginner',
    level: 'Beginner',
    steps: [
      'Review an unexpected financial event.',
      'Choose how to respond using available resources.',
      'Consider the consequences and reflect on alternatives.',
    ],
    skills: ['Emergency planning', 'Financial resilience'],
  },
  {
    name: 'AltRisk Calculator',
    cat: 'RISK ANALYSIS TOOLS',
    desc: 'Experiment with financial risk calculations and compare possible outcomes using dedicated analytical tools.',
    image: '/illustrations/risk-lab/altrisk-calculator.svg',
    imageAlt: 'Risk matrix of likelihood and impact with numbered scenarios, beside a scenario comparison bar chart',
    href: APP_CALCULATOR,
    action: 'Open Risk Calculator',
    analyticsId: 'risk-calculator',
    analyticsTopic: 'risk_analytics',
    analyticsDifficulty: 'intermediate',
    level: 'Intermediate',
    steps: [
      'Select an available risk analysis tool.',
      'Enter illustrative assumptions and inputs.',
      'Interpret the output and compare scenarios.',
    ],
    skills: ['Scenario analysis', 'Risk interpretation'],
  },
  {
    name: 'Green Investing Lab',
    cat: 'SUSTAINABLE FINANCE · VIRTUAL PORTFOLIO',
    desc: 'Build a virtual green investment portfolio using a selected universe of clean-energy stocks and funds. Explore how market and climate-related scenarios affect risk and returns.',
    image: '/illustrations/risk-lab/green-investing.svg',
    imageAlt: 'Solar panels and wind turbines on green hills beside a diversified green basket card',
    href: 'https://altrisk-academy.streamlit.app/?lab=green-investing',
    learnHref: '/green-investing',
    action: 'Launch Simulator',
    analyticsId: 'green-investing-lab',
    analyticsTopic: 'sustainable_finance',
    analyticsDifficulty: 'beginner_intermediate',
    level: 'Beginner / Intermediate',
    steps: [
      'Learn the basics of sustainable investing on the dedicated learning page.',
      'Allocate virtual money among the available green investment securities.',
      'Test market scenarios and compare potential gains, losses, and concentration risk.',
    ],
    skills: ['Sustainable investing', 'Diversification', 'Scenario analysis'],
  },
  {
    name: 'Responsible Consumption Lab',
    cat: 'SUSTAINABLE LIVING · EVERYDAY DECISIONS',
    desc: 'Compare everyday choices through practical simulations: rooftop solar versus grid electricity, school lighting upgrades, transportation, and buying or repairing products.',
    image: '/illustrations/risk-lab/responsible-consumption.svg',
    imageAlt: 'House with rooftop solar, an electric car, a bicycle, and a checklist of sustainable choices',
    href: 'https://altrisk-academy.streamlit.app/?lab=responsible-consumption',
    learnHref: '/responsible-consumption',
    action: 'Launch Simulator',
    analyticsId: 'responsible-consumption-lab',
    analyticsTopic: 'sustainable_living',
    analyticsDifficulty: 'beginner',
    level: 'Beginner',
    steps: [
      'Learn how sustainable everyday decisions affect costs and resources.',
      'Adjust costs and assumptions to compare a house with and without solar panels.',
      'Explore how alternative energy, transport, and shopping choices change long-term outcomes.',
    ],
    skills: ['Lifecycle cost', 'Energy decisions', 'Sustainability trade-offs'],
  },
] satisfies Array<
  Record<string, unknown> & {
    analyticsTopic: AnalyticsTopic;
    analyticsDifficulty: AnalyticsDifficulty;
  }
>;

export default function RiskLab() {
  return (
    <>
      <PageIntro
        eyebrow="INTERACTIVE RISK LAB"
        title="Practice decisions. Learn from outcomes."
        description="The best way to understand risk is to experiment with it. Try hands-on learning tools with simulated money and situations."
      />
      <section className="container section section-tight">
        <div className="module-grid">
          {modules.map((m, i) => (
            <div className="module-card" key={m.name}>
              <div className="module-visual">
                <img
                  className="module-visual-image"
                  src={m.image}
                  alt={m.imageAlt}
                  width={960}
                  height={600}
                  loading="lazy"
                  decoding="async"
                />
                <span className="module-number">0{i + 1}</span>
              </div>
              <div className="module-body">
                <span className="tiny-label">{m.cat}</span>
                <h2>{m.name}</h2>
                <p>{m.desc}</p>
                <span className="ara-learning-status">
                  <Icon name="check" size={14} /> {m.level} · Free simulation
                </span>
                <div className="module-details">
                  <span><Icon name="check" size={16} /> Educational scenarios</span>
                  <span><Icon name="check" size={16} /> No real money</span>
                </div>
                <div className="ara-sim-extra">
                  <h3>What you’ll do</h3>
                  <ul>
                    {m.steps.map((step) => <li key={step}>{step}</li>)}
                  </ul>
                  <h3 style={{ marginTop: 16 }}>Skills you’ll practice</h3>
                  <p>{m.skills.join(' · ')}</p>
                  <p className="ara-method">
                    Tip: These tools use simplified learning scenarios, not personal investment recommendations.
                  </p>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 14 }}>
                  {'learnHref' in m && m.learnHref && (
                    <Link className="button" href={m.learnHref}>
                      Learn &amp; Explore <Icon name="arrow" size={17} />
                    </Link>
                  )}
                  <AnalyticsLink
                    className={'learnHref' in m ? 'text-link' : 'button'}
                    href={m.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    eventName="risk_simulation_start"
                    eventParameters={{
                      content_id: m.analyticsId,
                      content_type: 'simulation',
                      topic: m.analyticsTopic,
                      difficulty: m.analyticsDifficulty,
                    }}
                  >
                    {m.action} <Icon name="external" size={17} />
                  </AnalyticsLink>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="lab-disclaimer">
          <Icon name="help" size={17} /> Interactive tools open in a separate Streamlit app.
          For the two climate labs, you can read the lesson first or launch the simulator directly.
          Other Academy labs can be selected in the app sidebar. All investments and savings
          estimates are educational illustrations; app availability and details depend on the current deployment.
        </p>
        <p className="lab-disclaimer">
          Climate education topics are informed in part by the Massachusetts Youth Climate
          Council’s 2025–2026 Climate Recommendations. AltRisk Academy is an independent
          educational project and is not an official Council or state platform.
        </p>
      </section>
      <Cta
        title="Learn the concept. Then test your thinking."
        description="Pair each interactive tool with a short lesson to understand the reasoning behind your decisions."
      />
    </>
  );
}
