import Link from 'next/link';
import type {Metadata} from 'next';
import {PageIntro, Cta} from '../../components/common';
import {Icon} from '../../components/icon';
import {AnalyticsLink} from '../../components/analytics-link';
import {getAnalyticsTopic} from '../../lib/analytics';
import {paths, lessons} from '../../lib/data';
import {pageMetadata} from '../../lib/seo';

const inlineLinkStyle = {color: 'var(--teal)', textDecoration: 'underline', textUnderlineOffset: '3px'};

export const metadata: Metadata = pageMetadata({
  path: '/learn',
  title: 'Financial Risk Lessons for Students',
  description:
    'Explore free, beginner-friendly lessons about financial risk, investment decisions, uncertainty, and risk management through AltRisk Academy.',
});

export default function Learn() {
  return (
    <>
      <PageIntro
        eyebrow="LEARNING PATHS"
        title="Explore financial risk and build your skills."
        description="Start with free, beginner-friendly lessons, practical examples, and interactive tools for thinking through financial decisions."
      />
      <section className="container section section-tight">
        <div className="path-grid">
          {paths.map((p, i) => (
            <Link href={'/learn/' + p.slug} className="path-card" key={p.slug}>
              <div className={'path-icon path-icon-' + i}><Icon name={p.icon} size={26}/></div>
              <div className="path-meta"><span>{p.level.toUpperCase()}</span>{p.soon && <span className="soon">EXPANDING SOON</span>}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <span className="path-arrow"><Icon name="arrow" size={18}/></span>
            </Link>
          ))}
        </div>
        <section className="article-prose article-content-section" aria-labelledby="learning-guide">
          <h2 id="learning-guide">How to use the learning resources</h2>
          <p>
            Financial risk education starts with a question: what could affect a goal, and what
            choices are available if the outcome is different from what you expect? The lessons
            below introduce risk and uncertainty before moving into topics such as investment
            risk, diversification, and market volatility. You can read them in order or choose
            the topic that fits your interests.
          </p>
          <p>
            Begin with the Financial &amp; Investment Risk path or a foundational article. As you
            read, identify the goal in each example, the possible consequences, and any assumptions
            behind the numbers. For investment decisions, consider how the time when money is
            needed can matter alongside possible gains and losses. Diversification can reduce
            some risks, but it does not guarantee a positive result.
          </p>
          <p>
            Then try a scenario in the <Link href="/risk-lab" style={inlineLinkStyle}>interactive Risk Lab</Link> and
            compare how different choices affect the simulated outcome. These simplified
            exercises use illustrative situations, not predictions or personal financial advice.
            Some learning paths are marked as expanding soon; their full lesson sequences are
            not yet available. Teachers can find classroom starting points in the{' '}
            <Link href="/for-educators" style={inlineLinkStyle}>educator resources</Link>.
          </p>
        </section>
      </section>
      <section className="section section-tinted">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-dot"/>START WITH THE BASICS</div>
              <h2>Your first lessons</h2>
              <p>Short, approachable lessons help you build a foundation for better decisions.</p>
            </div>
          </div>
          <div className="lesson-list">
            {lessons.map((l, i) => (
              <AnalyticsLink href={'/articles/' + l.slug} eventName="lesson_start" eventParameters={{content_id: l.slug, content_type: 'lesson', topic: getAnalyticsTopic(l.category)}} className="lesson-row" key={l.slug}>
                <span className="lesson-index">{String(i + 1).padStart(2, '0')}</span>
                <div><h3>{l.title}</h3><p>{l.excerpt}</p></div>
                <span className="lesson-time">{l.read}</span>
                <Icon name="arrow" size={19}/>
              </AnalyticsLink>
            ))}
          </div>
        </div>
      </section>
      <Cta/>
    </>
  );
}
