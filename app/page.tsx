import Image from 'next/image';
import Link from 'next/link';
import {Icon} from '../components/icon';
import {Cta} from '../components/common';
import {
  EducationalIllustrationCard,
  FeatureCard,
  RiskReturnDiagram,
  VideoPreview,
  VisualSectionHeader,
} from '../components/home-visuals';
import {APP_ACADEMY, APP_CALCULATOR, lessons, paths} from '../lib/data';
import type {Metadata} from 'next';
import {pageMetadata} from '../lib/seo';

export const metadata: Metadata = pageMetadata({
  path: '/',
  title: 'Learn to Think Like a Risk Analyst',
  description:
    'Free interactive risk management education for high school and college students. Learn financial risk, try simulations, and make smarter decisions.',
});

const steps = [
  {name: 'Learn', text: 'Get the concepts.', icon: 'book'},
  {name: 'Analyze', text: 'Understand the risks.', icon: 'search'},
  {name: 'Decide', text: 'Make your choice.', icon: 'brain'},
  {name: 'Experience', text: 'See what happens.', icon: 'activity'},
  {name: 'Improve', text: 'Build better habits.', icon: 'trend'},
];

const featuredSlugs = [
  'python-for-risk-managers-practical-applications',
  'monte-carlo-simulation-financial-risk-management',
  'risk-and-return',
];

export default function Home() {
  const featuredArticles = featuredSlugs
    .map((slug) => lessons.find((article) => article.slug === slug))
    .filter((article): article is (typeof lessons)[number] => Boolean(article));

  return (
    <>
      <section className="home-hero">
        <div className="container home-hero-grid">
          <div className="home-hero-copy">
            <div className="home-hero-kicker">
              <span className="home-kicker-mark"><Icon name="sparkles" size={15}/></span>
              FREE, INTERACTIVE RISK EDUCATION
            </div>
            <h1>Make sense of uncertainty. <span>Make more informed decisions.</span></h1>
            <p className="home-hero-lede">
              Learn how risk shapes money, careers, technology, and everyday choices—then practice
              thinking it through in a safe, educational setting.
            </p>
            <div className="home-hero-actions">
              <Link className="button home-primary-button" href="/learn">
                Start learning <Icon name="arrow" size={18}/>
              </Link>
              <Link className="home-secondary-link" href="/risk-lab">
                Explore the Risk Lab <Icon name="arrow" size={17}/>
              </Link>
            </div>
            <div className="home-hero-trust">
              <span><Icon name="check" size={15}/> Free to explore</span>
              <span><Icon name="check" size={15}/> Learn by doing</span>
              <span><Icon name="check" size={15}/> No real money</span>
            </div>
          </div>
          <div className="home-hero-art">
            <div className="hero-art-orb hero-art-orb-one"/>
            <div className="hero-art-orb hero-art-orb-two"/>
            <div className="hero-art-label"><Icon name="shieldcheck" size={16}/> Think beyond the numbers</div>
            <div className="decision-illustration">
              <div className="decision-illustration-top">
                <div>
                  <span className="illustration-overline">A PRACTICAL WAY TO THINK</span>
                  <h2>Every choice has a context.</h2>
                </div>
                <span className="decision-compass"><Icon name="compass" size={23}/></span>
              </div>
              <svg className="decision-map" viewBox="0 0 560 280" role="img" aria-labelledby="decision-map-title decision-map-desc">
                <title id="decision-map-title">A visual map for thinking through a decision</title>
                <desc id="decision-map-desc">A goal connects to possible outcomes, which lead to an informed next step. The illustration is conceptual, not a financial forecast.</desc>
                <path d="M115 139H225M335 139H445" fill="none" stroke="#bfd3df" strokeWidth="3" strokeDasharray="7 8"/>
                <path d="m215 130 12 9-12 9m110-18 12 9-12 9" fill="none" stroke="#7392a8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="92" cy="139" r="44" fill="#eaf3ff"/>
                <circle cx="280" cy="139" r="54" fill="#e8f8f5"/>
                <circle cx="468" cy="139" r="44" fill="#fff2df"/>
                <circle cx="92" cy="139" r="28" fill="#3676c8"/>
                <path d="M92 124v30m-14-15h28" stroke="#fff" strokeWidth="4" strokeLinecap="round"/>
                <path d="M264 137c0-9 7-16 16-16s16 7 16 16c0 6-3 10-7 13-3 2-4 5-4 8h-10c0-3-1-6-4-8-4-3-7-7-7-13Z" fill="#14877d"/>
                <path d="M272 164h16m-14 7h12" stroke="#14877d" strokeWidth="3" strokeLinecap="round"/>
                <path d="m468 113 25 10v19c0 18-12 28-25 35-13-7-25-17-25-35v-19l25-10Z" fill="#e8a13a"/>
                <path d="m457 140 8 8 15-17" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <text x="92" y="215" textAnchor="middle" fill="#18334b" fontSize="16" fontWeight="700">Your goal</text>
                <text x="280" y="215" textAnchor="middle" fill="#18334b" fontSize="16" fontWeight="700">Possible outcomes</text>
                <text x="468" y="215" textAnchor="middle" fill="#18334b" fontSize="16" fontWeight="700">Your next step</text>
                <text x="92" y="239" textAnchor="middle" fill="#698093" fontSize="12">What matters?</text>
                <text x="280" y="239" textAnchor="middle" fill="#698093" fontSize="12">What could change?</text>
                <text x="468" y="239" textAnchor="middle" fill="#698093" fontSize="12">What can you do?</text>
              </svg>
              <div className="decision-illustration-note">
                <span><i/> Objective</span><span><i/> Uncertainty</span><span><i/> Informed action</span>
              </div>
            </div>
            <p className="hero-art-caption">A learning framework—not a prediction about what will happen.</p>
          </div>
        </div>
      </section>

      <section className="home-principles" aria-label="AltRisk Academy learning principles">
        <div className="container home-principles-grid">
          <span><Icon name="shieldcheck" size={20}/> Risk-first thinking</span>
          <span><Icon name="cursor" size={20}/> Interactive practice</span>
          <span><Icon name="graduation" size={20}/> Student-friendly lessons</span>
          <span><Icon name="globe" size={20}/> Free online access</span>
        </div>
      </section>

      <section className="section home-risk-section">
        <div className="container home-risk-grid">
          <div className="home-risk-copy">
            <VisualSectionHeader
              eyebrow="RISK & RETURN"
              title="Potential reward and uncertainty belong in the same conversation."
              description="A higher potential return can come with greater uncertainty or a wider range of outcomes. That relationship is not a promise: risk does not guarantee reward, and no diagram can tell you which choice is right for you."
            />
            <div className="home-risk-notes">
              <FeatureCard icon="trend" tone="blue" title="Look at the range">
                Consider more than a single expected result. Ask what could happen in less favorable conditions.
              </FeatureCard>
              <FeatureCard icon="target" tone="amber" title="Start with the goal">
                Time horizon, flexibility, and the consequences of loss affect how a decision should be considered.
              </FeatureCard>
            </div>
            <Link className="text-link home-inline-link" href="/articles/risk-and-return">
              Explore risk and return <Icon name="arrow" size={17}/>
            </Link>
          </div>
          <EducationalIllustrationCard
            className="risk-return-card"
            eyebrow="CONCEPTUAL DIAGRAM"
            title="Risk and return are trade-offs to examine"
            caption="Conceptual illustration only. Positions are not measured market data, forecasts, or investment recommendations."
          >
            <RiskReturnDiagram/>
          </EducationalIllustrationCard>
        </div>
      </section>

      <section className="section home-paths-section">
        <div className="container">
          <VisualSectionHeader
            eyebrow="CHOOSE A PLACE TO BEGIN"
            title="Risk shows up in more than one part of life."
            description="Build a foundation with financial risk, then explore how uncertainty affects business, careers, technology, and everyday decisions."
            href="/learn"
            action="See all learning paths"
          />
          <div className="home-path-grid">
            {paths.map((path, index) => (
              <Link className={`home-path-card home-path-card-${index % 6}`} href={`/learn/${path.slug}`} key={path.slug}>
                <span className="home-path-icon"><Icon name={path.icon} size={24}/></span>
                <span className="home-path-level">{path.soon ? 'EXPLORE THE BASICS' : 'START HERE'}</span>
                <h3>{path.title}</h3>
                <p>{path.desc}</p>
                <span className="home-path-action">Explore path <Icon name="arrow" size={16}/></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section home-lab-section">
        <div className="container">
          <VisualSectionHeader
            eyebrow="THE INTERACTIVE RISK LAB"
            title="Try a decision in a safe, simulated setting."
            description="Explore simplified educational tools using virtual money and scenarios. They are designed for learning—not personalized advice or predictions."
            href="/risk-lab"
            action="Visit Risk Lab"
          />
          <div className="home-lab-grid">
            <article className="home-lab-card">
              <div className="home-lab-visual home-lab-visual-teal">
                <div className="allocation-illustration" aria-label="Illustrative allocation of virtual funds">
                  <span className="allocation-label">VIRTUAL STARTING AMOUNT</span>
                  <strong>$1,000</strong>
                  <div className="allocation-bars" aria-hidden="true">
                    <i/><i/><i/><i/><i/>
                  </div>
                  <div className="allocation-legend"><span>Explore choices</span><span>Compare trade-offs</span></div>
                </div>
                <span className="home-lab-number">01</span>
              </div>
              <div className="home-lab-body">
                <span className="home-card-kicker">BEGINNER-FRIENDLY SIMULATION</span>
                <h3>My First $1,000</h3>
                <p>Practice allocation and explore how an unexpected expense might affect a plan.</p>
                <a className="text-link" href={APP_ACADEMY} target="_blank" rel="noopener noreferrer">
                  Launch simulation <Icon name="external" size={16}/>
                </a>
              </div>
            </article>
            <article className="home-lab-card">
              <div className="home-lab-visual home-lab-visual-navy">
                <div className="scenario-illustration">
                  <span className="allocation-label">COMPARE POSSIBLE SCENARIOS</span>
                  <div><span>Scenario A</span><b><i className="scenario-dot scenario-dot-blue"/>Lower exposure</b></div>
                  <div><span>Scenario B</span><b><i className="scenario-dot scenario-dot-amber"/>Higher exposure</b></div>
                  <div className="scenario-range" aria-hidden="true"><i/><i/><i/></div>
                  <small>Hypothetical comparison</small>
                </div>
                <span className="home-lab-number">02</span>
              </div>
              <div className="home-lab-body">
                <span className="home-card-kicker">ANALYZE &amp; COMPARE</span>
                <h3>AltRisk Calculator</h3>
                <p>Use hands-on analytical tools to explore risk concepts and compare assumptions.</p>
                <a className="text-link" href={APP_CALCULATOR} target="_blank" rel="noopener noreferrer">
                  Open calculator <Icon name="external" size={16}/>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section home-articles-section">
        <div className="container">
          <VisualSectionHeader
            eyebrow="THE KNOWLEDGE HUB"
            title="Big concepts, explained with clarity."
            description="Explore practical guides that connect risk concepts to real decisions, with topic-specific illustrations and examples."
            href="/articles"
            action="Browse all articles"
          />
          <div className="home-article-grid">
            {featuredArticles.map((article, index) => (
              <Link className="home-article-card" href={`/articles/${article.slug}`} key={article.slug}>
                {article.coverImage ? (
                  <Image
                    className="home-article-image"
                    src={article.coverImage.src}
                    alt={article.coverImage.alt}
                    width={1600}
                    height={900}
                    sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
                  />
                ) : (
                  <span className={`home-article-placeholder home-article-placeholder-${index}`}>
                    <Icon name="booktext" size={42}/>
                  </span>
                )}
                <span className="home-article-content">
                  <span className="home-card-kicker">{article.category} <i/> {article.read} read</span>
                  <strong>{article.title}</strong>
                  <span className="home-article-excerpt">{article.excerpt}</span>
                  <span className="home-article-link">Read the guide <Icon name="arrow" size={16}/></span>
                </span>
              </Link>
            ))}
            <div className="home-term-card">
              <span className="home-term-icon"><Icon name="book" size={20}/></span>
              <span className="home-card-kicker">A WORD TO KNOW</span>
              <h3>Risk tolerance</h3>
              <p>How much uncertainty or potential loss a person is willing and able to accept while pursuing a goal.</p>
              <Link href="/dictionary">Explore the Risk Dictionary <Icon name="arrow" size={16}/></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section home-video-section">
        <div className="container home-video-grid">
          <div>
            <VisualSectionHeader
              eyebrow="A QUICK INTRODUCTION"
              title="Risk education, made practical."
              description="Start with the core idea: understand what matters, explore what could change, and make room for uncertainty in your decisions."
            />
            <p className="home-video-note">A short introductory video is in development. No third-party video or tracking embed is loaded here.</p>
            <Link className="text-link" href="/about">Learn about AltRisk Academy <Icon name="arrow" size={17}/></Link>
          </div>
          <VideoPreview/>
        </div>
      </section>

      <section className="section home-challenge-section">
        <div className="container home-challenge-grid">
          <div className="home-challenge-copy">
            <span className="eyebrow home-eyebrow-light">THINK BEFORE YOU ACT</span>
            <h2>What would <em>you</em> do?</h2>
            <p>Markets move. Plans change. Unexpected things happen. Consider the questions that matter before choosing your next step.</p>
            <Link className="button button-white" href="/challenges">Explore challenges <Icon name="arrow" size={18}/></Link>
          </div>
          <div className="home-challenge-example">
            <div className="home-challenge-top"><span>DECISION PRACTICE</span><Icon name="activity" size={20}/></div>
            <h3>A portfolio falls in value. What should you consider first?</h3>
            <ul>
              <li><span>A</span> Revisit the goal and time horizon</li>
              <li><span>B</span> Check what changed and what did not</li>
              <li><span>C</span> Compare choices before reacting</li>
            </ul>
            <p>Example prompt—not a recommendation or a live market event.</p>
          </div>
        </div>
      </section>

      <section className="section home-process-section">
        <div className="container">
          <VisualSectionHeader
            eyebrow="HOW LEARNING WORKS"
            title="From curious to risk-aware."
            description="A repeatable process can turn new concepts into more thoughtful questions and choices."
          />
          <div className="home-steps-grid">
            {steps.map((step, index) => (
              <div className="home-step" key={step.name}>
                <span className="home-step-number">0{index + 1}</span>
                <span className={`home-step-icon home-step-icon-${index}`}><Icon name={step.icon} size={23}/></span>
                <h3>{step.name}</h3>
                <p>{step.text}</p>
                {index < steps.length - 1 && <Icon className="home-step-arrow" name="arrow" size={18}/>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section home-educator-section">
        <div className="container home-educator-band">
          <div>
            <span className="eyebrow">FOR SCHOOLS &amp; CLUBS</span>
            <h2>Bring risk-aware thinking into the classroom.</h2>
            <p>Use short explanations and practical simulations to spark discussion about trade-offs, uncertainty, and financial decisions. Free resources for educators and student clubs.</p>
          </div>
          <Link href="/for-educators" className="button">Explore educator resources <Icon name="arrow" size={17}/></Link>
        </div>
      </section>

      <section className="section home-founder-section">
        <div className="container home-founder-grid">
          <div className="home-founder-art" aria-hidden="true">
            <span className="home-founder-orbit home-founder-orbit-one"/>
            <span className="home-founder-orbit home-founder-orbit-two"/>
            <span className="home-founder-mark"><Icon name="sparkles" size={44}/></span>
            <span className="home-founder-art-label">LEARNING FOR A MORE RESILIENT FUTURE</span>
          </div>
          <div>
            <span className="eyebrow"><span className="eyebrow-dot"/> OUR STORY</span>
            <h2>Built by a student. Designed for the next generation.</h2>
            <p>Founded by Maria Mediannikova, AltRisk Academy starts with a simple belief: students deserve the tools to understand and manage risk before life puts their decisions to the test.</p>
            <p>What began with interactive financial tools is growing into a broader learning platform for risk, resilience, and smarter choices.</p>
            <Link className="text-link" href="/about">Meet the founder <Icon name="arrow" size={17}/></Link>
          </div>
        </div>
      </section>

      <Cta
        title="The future is uncertain. Your decisions can be informed."
        description="Start with one concept, try one simulation, and take your first step toward risk-aware thinking."
      />
    </>
  );
}
