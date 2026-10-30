import type { Metadata } from 'next';
import Link from 'next/link';
import {ORGANIZATION_ID, pageMetadata} from '../../lib/seo';
import {HeadingText} from '../../components/heading-text';

const canonical = 'https://altriskacademy.com/green-investing';
const labUrl = 'https://altrisk-academy.streamlit.app/?lab=green-investing';
export const metadata: Metadata = pageMetadata({
  path: '/green-investing',
  title: 'Green Investing Simulator for Students',
  description:
    'Explore ESG investing, clean energy stocks, green ETFs, diversification, and investment risk with a free educational portfolio simulator for students.',
});

const faq = [
  { q: 'What is green investing?', a: 'Green investing is an approach that considers environmental activities or goals alongside financial characteristics. Environmental labels do not guarantee lower risk or higher returns.' },
  { q: 'Do students invest real money?', a: 'No. The Green Investing Lab uses virtual allocations and simplified educational scenarios. It does not execute trades or offer individualized advice.' },
  { q: 'What can I learn from the simulation?', a: 'You can explore portfolio concentration, volatility, diversification, and how assumptions about economic or climate-related events may change outcomes.' },
  { q: 'Is the simulator suitable for classrooms?', a: 'Yes. Educators can use it for facilitated discussion and reflection. It is not a substitute for curriculum review or investment advice.' },
];
export default function GreenInvesting() {
  const schema = {
    '@context': 'https://schema.org', '@type': 'LearningResource',
    name: 'Green Investing Lab', url: canonical,
    description: 'Free educational green-investing simulation for students.',
    educationalUse: 'simulation', learningResourceType: 'interactive simulation',
    isAccessibleForFree: true, inLanguage: 'en',
    provider: {'@id': ORGANIZATION_ID},
  };
  return (
    <main className="container section">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
      <p className="eyebrow">FREE INTERACTIVE RISK EDUCATION</p>
      <h1><HeadingText text="Green Investing Simulator for Students"/></h1>
      <p>Learn how sustainable investing connects environmental goals with financial uncertainty. Create a virtual portfolio, explore hypothetical market scenarios, and reflect on risks without investing real money.</p>
      <h2><HeadingText text="What is green investing?"/></h2>
      <p>Green investing focuses on investments associated with environmental activities or outcomes, such as renewable energy or efficiency. A green label is not proof of environmental impact, and clean-energy stocks can be volatile. Always examine the specific fund or company and its disclosures.</p>
      <h2><HeadingText text="What will you practice?"/></h2>
      <ul><li>Allocate a hypothetical $10,000 portfolio across a limited set of green-themed securities.</li><li>Explore the difference between individual stocks, ETFs, and green bonds.</li><li>Compare potential return, volatility, diversification, and drawdown under simplified scenarios.</li><li>Recognize greenwashing and avoid treating sustainability as a guarantee of financial performance.</li></ul>
      <h2><HeadingText text="Start the free simulation"/></h2>
      <p><a className="button" href={labUrl} target="_blank" rel="noopener noreferrer">Open Green Investing Lab ↗</a></p>
      <p>For more activities, visit the <Link href="/risk-lab">Risk Lab</Link>. Teachers can explore <Link href="/for-educators">educator resources</Link>.</p>
      <h2><HeadingText text="Frequently asked questions"/></h2>
      {faq.map(item => <section key={item.q}><h3><HeadingText text={item.q}/></h3><p>{item.a}</p></section>)}
      <p className="lab-disclaimer">Educational simulations only. Figures and market scenarios may be simplified or hypothetical; not investment advice.</p>
    </main>
  );
}
