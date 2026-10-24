import Image from 'next/image';
import {PageIntro, Cta} from '../../components/common';
import {Icon} from '../../components/icon';
import type {Metadata} from 'next';
import Link from 'next/link';
import {pageMetadata} from '../../lib/seo';

export const metadata: Metadata = pageMetadata({
  path: '/about',
  title: 'Our Mission & Founder',
  description:
    'Meet AltRisk Academy and its founder, Maria Mediannikova, a student and financial literacy advocate.',
});

const competitions = [
  {
    name: 'Congressional App Challenge',
    year: '2026',
    status: 'Submitted',
    description: 'A civic-minded app development competition for student-created technology projects.',
    image: '/competitions/congressional-app-challenge.webp',
  },
  {
    name: 'NFTE World Series of Innovation, EverBank Smart Hustle Challenge',
    year: '2026',
    status: 'Submitted',
    description: 'An innovation challenge focused on student entrepreneurship and practical business ideas.',
    image: '/competitions/nfte-wsi.png',
  },
  {
    name: 'Diamond Challenge',
    year: '2027',
    status: 'Application in Progress',
    description: 'A student entrepreneurship competition centered on developing innovative venture ideas.',
  },
  {
    name: 'Blue Ocean Student Entrepreneur Competition',
    year: '2027',
    status: 'Preparing',
    description: 'A student competition encouraging entrepreneurial ideas that address real-world needs.',
    image: '/competitions/blue-ocean.webp',
  },
  {
    name: 'SCI Youth Grant Pitch Contest',
    year: '',
    status: 'Exploring',
    description: 'A youth-focused grant pitch opportunity for science and innovation projects.',
    image: '/competitions/sci-youth-grant.jpg',
  },
];

export default function About() {
  return (
    <>
      <PageIntro
        eyebrow="OUR MISSION"
        title="Risk education for the next generation."
        description="We believe students should learn how to understand risk before making decisions that shape their financial futures — and beyond."
      />
      <section className="container section section-tight">
        <div className="about-grid">
          <div className="content-card">
            <span className="tiny-label">WHAT WE BELIEVE</span>
            <h2>Real learning starts with better questions.</h2>
            <p>
              Traditional financial education often focuses on saving, budgeting, and investing.
              AltRisk Academy goes further — inviting students to consider uncertainty, potential
              losses, and consequences before they act.
            </p>
            <p>
              Through short lessons, risk calculators, interactive simulations, and real-world
              scenarios, we aim to make risk management engaging, accessible, and practical.
            </p>
            <div className="about-quote">
              “Our goal is not to teach students how to predict the future, but how to prepare for
              uncertainty.”
            </div>
          </div>
          <div className="about-values">
            <div>
              <Icon name="heart" size={26}/>
              <h3>Accessible</h3>
              <p>Foundational learning should be open to every curious student.</p>
            </div>
            <div>
              <Icon name="target" size={26}/>
              <h3>Practical</h3>
              <p>Students learn by applying ideas in simulated real-world settings.</p>
            </div>
            <div>
              <Icon name="shieldcheck" size={26}/>
              <h3>Risk-aware</h3>
              <p>We teach thoughtful trade-offs — not promises of easy profits.</p>
            </div>
          </div>
        </div>
        <div id="founder" className="founder-detail">
          <div className="founder-avatar"><Icon name="sparkles" size={65}/></div>
          <div>
            <span className="eyebrow"><span className="eyebrow-dot"/> MEET THE FOUNDER</span>
            <h2>Maria Mediannikova</h2>
            <p>
              AltRisk Academy was founded by{' '}
              <Link href="https://mariamediannikova.com/" target="_blank" rel="noopener noreferrer">Maria Mediannikova</Link>
              {', a student and financial literacy advocate passionate about making financial risk education more accessible through interactive learning.'}
            </p>
            <p>
              The project began with interactive financial tools and is evolving into a broader
              educational platform spanning financial decisions, entrepreneurship, technology,
              careers, and everyday life.
            </p>
          </div>
        </div>
      </section>
      <section className="section section-tinted">
        <div className="container competition-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow"><span className="eyebrow-dot"/> STUDENT INNOVATION</span>
              <h2>Competitions &amp; Innovation Journey</h2>
              <p>
                A look at the competitions AltRisk Academy is pursuing and exploring as the project
                develops.
              </p>
            </div>
          </div>
          <div className="competition-list">
            {competitions.map((competition) => (
              <article className="competition-card" key={competition.name}>
                <div className={`competition-logo${competition.image ? '' : ' competition-logo-placeholder'}`}>
                  {competition.image ? (
                    <Image
                      src={competition.image}
                      alt={`${competition.name} logo`}
                      width={360}
                      height={180}
                      sizes="(max-width: 760px) 100vw, 240px"
                    />
                  ) : (
                    <span>{competition.name}</span>
                  )}
                </div>
                <div className="competition-info">
                  <div className="competition-title-row">
                    <h3>{competition.name}</h3>
                    {competition.year && <span className="competition-year">{competition.year}</span>}
                  </div>
                  <span className={`competition-status competition-status-${competition.status.toLowerCase().replaceAll(' ', '-')}`}>
                    {competition.status}
                  </span>
                  <p>{competition.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Cta/>
    </>
  );
}
