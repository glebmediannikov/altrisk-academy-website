import { PageIntro, Cta } from '../../components/common';
import { Icon } from '../../components/icon';
import { APP_ACADEMY, APP_CALCULATOR } from '../../lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interactive Risk Lab & Financial Simulators',
  description:
    'Practice risk management through free interactive financial, green investing, and sustainable living simulations.',
};

const modules = [
  {
    name: 'My First $1,000',
    cat: 'VIRTUAL MONEY · BEGINNER',
    desc: 'Practice allocating a virtual starting amount, exploring trade-offs, and evaluating how decisions affect your plan.',
    icon: 'wallet',
    href: APP_ACADEMY,
    action: 'Open My First $1,000',
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
    icon: 'chart',
    href: APP_ACADEMY,
    action: 'Open Investment Risk Lab',
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
    icon: 'activity',
    href: APP_ACADEMY,
    action: 'Open Unexpected Events',
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
    icon: 'calculator',
    href: APP_CALCULATOR,
    action: 'Open Risk Calculator',
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
    icon: 'chart',
    href: `${APP_ACADEMY}?lab=green-investing`,
    action: 'Open Green Investing Lab',
    level: 'Beginner / Intermediate',
    steps: [
      'Launch the lab directly from this page.',
      'Allocate virtual money among the available green investment securities.',
      'Test market scenarios and compare potential gains, losses, and concentration risk.',
    ],
    skills: ['Sustainable investing', 'Diversification', 'Scenario analysis'],
  },
  {
    name: 'Responsible Consumption Lab',
    cat: 'SUSTAINABLE LIVING · EVERYDAY DECISIONS',
    desc: 'Compare everyday choices through practical simulations: rooftop solar versus grid electricity, school lighting upgrades, transportation, and buying or repairing products.',
    icon: 'shield',
    href: `${APP_ACADEMY}?lab=responsible-consumption`,
    action: 'Open Responsible Consumption Lab',
    level: 'Beginner',
    steps: [
      'Launch the lab directly from this page.',
      'Adjust costs and assumptions to compare a house with and without solar panels.',
      'Explore how alternative energy, transport, and shopping choices change long-term outcomes.',
    ],
    skills: ['Lifecycle cost', 'Energy decisions', 'Sustainability trade-offs'],
  },
];

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
              <div className={'module-visual module-visual-' + i}>
                <Icon name={m.icon} size={50} />
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
                <a
                  className="button"
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {m.action} <Icon name="external" size={17} />
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="lab-disclaimer">
          <Icon name="help" size={17} /> Interactive tools open in a separate Streamlit app.
          For Academy labs, select the named module in the app sidebar. All investments and
          savings estimates are educational illustrations; app availability and details depend
          on the current deployment.
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
