import Link from 'next/link';
import {PageIntro, Cta} from '../../components/common';
import {Icon} from '../../components/icon';
import type {Metadata} from 'next';
import {pageMetadata} from '../../lib/seo';

const inlineLinkStyle = {color: 'var(--teal)', textDecoration: 'underline', textUnderlineOffset: '3px'};

export const metadata: Metadata = pageMetadata({
  path: '/for-educators',
  title: 'Free Financial Literacy Resources for Teachers',
  description:
    'Discover free financial literacy resources, interactive risk simulations, and educational activities for teachers and high school students at AltRisk Academy.',
});

export default function Educators() {
  return (
    <>
      <PageIntro
        eyebrow="FOR EDUCATORS"
        title="Financial literacy and risk resources for educators."
        description="Use free introductory lessons and interactive simulations to discuss financial decisions, uncertainty, and trade-offs with students."
      />
      <section className="container section section-tight">
        <div className="value-grid">
          <div className="value-card">
            <span className="value-icon"><Icon name="book"/></span>
            <h2>Classroom-ready topics</h2>
            <p>Use accessible lessons to introduce concepts like financial risk, diversification, and uncertainty.</p>
          </div>
          <div className="value-card">
            <span className="value-icon"><Icon name="cursor"/></span>
            <h2>Hands-on exploration</h2>
            <p>Give students an opportunity to experiment with simulated financial choices in the Risk Lab.</p>
          </div>
          <div className="value-card">
            <span className="value-icon"><Icon name="brain"/></span>
            <h2>Better discussion</h2>
            <p>Ask students to explain what might go wrong, compare alternatives, and defend their reasoning.</p>
          </div>
        </div>
        <div className="info-banner">
          <Icon name="help" size={24}/>
          <div>
            <strong>Educator resources are expanding.</strong>
            <p>Downloadable lesson plans, teacher dashboards, and group challenges are planned, not yet available in this prototype.</p>
          </div>
          <Link href="/risk-lab" className="text-link">Explore the Risk Lab <Icon name="arrow" size={17}/></Link>
        </div>
        <section className="article-prose article-content-section" aria-labelledby="classroom-start">
          <h2 id="classroom-start">A starting point for classroom discussion</h2>
          <p>
            Teachers can use these free resources with high school or college students to introduce
            financial literacy and risk awareness. Start with <Link href="/articles/what-is-risk" style={inlineLinkStyle}>What Is Risk?</Link>{' '}
            and ask students to identify a goal, an uncertain event, and its possible impact.
            The <Link href="/learn/financial-risk" style={inlineLinkStyle}>financial and investment risk learning path</Link>{' '}
            offers further introductory reading on financial decisions and investing.
          </p>
          <p>
            For a hands-on discussion, invite students to compare choices in a Risk Lab simulation.
            My First $1,000 explores a virtual allocation; the Investment Risk Lab explores
            portfolios under simulated market conditions. Ask students what assumptions they made,
            what changed between scenarios, and what the exercise leaves out. Simulations are
            simplified educational illustrations, not forecasts or personal investment advice.
          </p>
        </section>
      </section>
      <Cta/>
    </>
  );
}
