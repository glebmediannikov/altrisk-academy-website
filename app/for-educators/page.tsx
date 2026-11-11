import Link from 'next/link';
import Image from 'next/image';
import {PageIntro} from '../../components/common';
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

const MASIC_LOGO_SRC = '/partners/masic-logo.png';
const MASIC_URL = 'https://www.masicinfo.org/';
// Existing public contact channel (see organization schema in app/layout.tsx).
const CONTACT_URL = 'https://www.linkedin.com/company/altriskacademy/';

const useCases = [
  {icon: 'book', title: 'For Teachers', text: 'Bring risk concepts into classroom discussions through accessible, interactive activities.'},
  {icon: 'graduation', title: 'For Student Clubs', text: 'Use financial simulations, group discussions, and practical exercises during financial literacy or investment club meetings.'},
  {icon: 'cursor', title: 'Interactive Learning', text: 'Explore investment risk, financial choices, and real-world decision-making through AltRisk Academy\u2019s existing learning labs.'},
  {icon: 'heart', title: 'Community Connections', text: 'Connect with student-led initiatives and educational organizations that share an interest in financial literacy and risk education.'},
];

export default function Educators() {
  return (
    <>
      <PageIntro
        eyebrow="FOR EDUCATORS"
        title="Bring Risk Education to Your Classroom or Club"
        description="Free interactive learning tools for teachers, student investment clubs, and educational organizations."
      />
      <section className="container section section-tight">
        <p className="educator-lede">
          AltRisk Academy is a free educational platform that helps students explore financial literacy,
          risk management, and responsible decision-making through practical simulations and interactive activities.
        </p>
        <div className="value-grid use-case-grid">
          {useCases.map((item) => (
            <div className="value-card" key={item.title}>
              <span className="value-icon"><Icon name={item.icon}/></span>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <div className="value-grid" style={{marginTop: 20}}>
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
            The <Link href="/dictionary" style={inlineLinkStyle}>financial risk dictionary</Link>{' '}
            provides concise definitions and examples for discussion.
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
        <section className="community-section" aria-labelledby="community-heading">
          <h2 id="community-heading">Educational Community &amp; Collaborations</h2>
          <p className="community-intro">
            We believe financial education becomes more impactful when students, educators, and organizations share ideas, resources, and opportunities to learn.
          </p>
          <article className="community-card">
            <a className="community-logo-link" href={MASIC_URL} target="_blank" rel="noopener noreferrer" aria-label="Visit the MASIC website (opens in a new tab)">
              <Image
                className="community-logo"
                src={MASIC_LOGO_SRC}
                alt="Massachusetts Association of Student Investment Clubs (MASIC) logo"
                width={150}
                height={113}
              />
            </a>
            <div className="community-info">
              <h3>Massachusetts Association of Student Investment Clubs (MASIC)</h3>
              <p>
                MASIC connects student investment clubs and encourages collaboration, financial education, and shared learning opportunities among students interested in investing.
              </p>
              <a className="text-link community-link" href={MASIC_URL} target="_blank" rel="noopener noreferrer">
                Visit MASIC Website <Icon name="external" size={17}/>
              </a>
            </div>
          </article>
        </section>
      </section>
      <section className="container cta-container">
        <div className="cta-panel">
          <div>
            <span className="eyebrow light-eyebrow">YOUR NEXT STEP</span>
            <h2>Interested in Bringing AltRisk Academy to Your Classroom or Club?</h2>
            <p>Explore our free interactive learning tools or get in touch to discuss educational collaboration.</p>
          </div>
          <div className="cta-actions">
            <Link className="button button-white" href="/risk-lab">Explore Risk Labs <Icon name="arrow" size={18}/></Link>
            <a className="button cta-secondary" href={CONTACT_URL} target="_blank" rel="noopener noreferrer">Get in Touch <Icon name="external" size={18}/></a>
          </div>
        </div>
      </section>
    </>
  );
}
