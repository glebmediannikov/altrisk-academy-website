import type { Metadata } from 'next';
import Link from 'next/link';

const canonical = 'https://altriskacademy.com/responsible-consumption';
const labUrl = 'https://altrisk-academy.streamlit.app/?lab=responsible-consumption';
export const metadata: Metadata = {
  title: 'Solar Panel Savings & Responsible Consumption Lab | AltRisk Academy',
  description: 'Compare a home with and without solar panels, explore energy costs, LED efficiency, transport and sustainable purchases in a free interactive learning lab.',
  alternates: { canonical },
  openGraph: { title: 'Responsible Consumption Lab | AltRisk Academy', description: 'Explore household costs and sustainability in interactive simulations.', url: canonical, type: 'website' },
};
const faq = [
  { q: 'How does the solar panel comparison work?', a: 'The simulator compares illustrative cumulative electricity costs for a home with and without solar. Results depend on assumptions such as system price, household usage, electricity rates, and solar coverage.' },
  { q: 'Will solar panels always save money?', a: 'No. Savings and payback vary with local conditions, incentives, financing, maintenance, system output, and electricity prices. The lab demonstrates trade-offs rather than offering a home-specific quote.' },
  { q: 'What other decisions can students explore?', a: 'Activities may include lighting upgrades, transportation choices, and the cost of repairing or replacing everyday items.' },
  { q: 'Is this a free learning activity?', a: 'Yes. The lab uses simulated inputs and is designed for educational exploration.' },
];
export default function ResponsibleConsumption() {
  const schema = {
    '@context': 'https://schema.org', '@type': 'LearningResource',
    name: 'Responsible Consumption Lab', url: canonical,
    description: 'Free interactive household sustainability and solar panel cost comparison for students.',
    educationalUse: 'simulation', learningResourceType: 'interactive simulation',
    isAccessibleForFree: true, inLanguage: 'en',
    provider: { '@type': 'Organization', name: 'AltRisk Academy', url: 'https://altriskacademy.com' },
  };
  return (
    <main className="container section">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
      <p className="eyebrow">SUSTAINABILITY MEETS FINANCIAL LITERACY</p>
      <h1>Responsible Consumption & Solar Panel Savings Lab</h1>
      <p>Discover how everyday choices affect household spending and the environment. Explore the long-term cost of solar panels, energy-efficient lighting, transportation, and buying decisions through interactive scenarios.</p>
      <h2>Solar panels vs. no solar panels</h2>
      <p>Compare two hypothetical homes with similar electricity needs. Change installation cost, electricity prices, solar coverage, and the time period, then examine cumulative spending and estimated payback. The results illustrate assumptions, not guaranteed savings.</p>
      <h2>Explore everyday trade-offs</h2>
      <ul><li>Solar installation costs versus ongoing utility bills.</li><li>Upfront lighting expenses versus electricity savings.</li><li>Transportation alternatives and long-term operating expenses.</li><li>Buying, repairing, and replacing consumer products.</li></ul>
      <h2>Launch the interactive lab</h2>
      <p><a className="button" href={labUrl} target="_blank" rel="noopener noreferrer">Open Responsible Consumption Lab ↗</a></p>
      <p>Continue with the <Link href="/risk-lab">full Risk Lab</Link> or browse <Link href="/for-educators">classroom resources</Link>.</p>
      <h2>Frequently asked questions</h2>
      {faq.map(item => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}
      <p className="lab-disclaimer">Educational estimates only; not a household quote, engineering assessment, or guarantee of environmental savings.</p>
    </main>
  );
}
