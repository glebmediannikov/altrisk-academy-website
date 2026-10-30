import Link from 'next/link';
import Image from 'next/image';
import {notFound} from 'next/navigation';
import type {Metadata} from 'next';
import {lessons, paths} from '../../../lib/data';
import {Icon} from '../../../components/icon';
import {AnalyticsLink} from '../../../components/analytics-link';
import {ArticleEngagementTracker} from '../../../components/article-engagement-tracker';
import {HeadingText} from '../../../components/heading-text';
import {StructuredData} from '../../../components/structured-data';
import {getAnalyticsTopic} from '../../../lib/analytics';
import {
  FINANCIAL_EDUCATION_DISCLAIMER,
  FOUNDER_ID,
  FOUNDER_URL,
  ORGANIZATION_ID,
  pageMetadata,
  SITE_URL,
  WEBSITE_ID,
} from '../../../lib/seo';

export function generateStaticParams() {
  return lessons.map(({slug}) => ({slug}));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{slug: string}>;
}): Promise<Metadata> {
  const {slug} = await params;
  const article = lessons.find((lesson) => lesson.slug === slug);

  return pageMetadata({
    path: `/articles/${slug}`,
    title: article?.seoTitle || article?.title || 'Article',
    description:
      article?.seoDescription ||
      article?.excerpt ||
      'Educational articles about financial risk and decision-making.',
    type: 'article',
    image: article?.coverImage
      ? {
          url: article.coverImage.src,
          width: 1600,
          height: 900,
          alt: article.coverImage.alt,
        }
      : undefined,
    article: article
      ? {
          authors: [FOUNDER_URL],
          section: article.category,
        }
      : undefined,
  });
}

export default async function Article({
  params,
}: {
  params: Promise<{slug: string}>;
}) {
  const {slug} = await params;
  const article = lessons.find((lesson) => lesson.slug === slug);

  if (!article) notFound();

  const canonical = `${SITE_URL}/articles/${article.slug}`;
  const relatedArticles = article.relatedArticles
    .map((relatedSlug) => lessons.find((lesson) => lesson.slug === relatedSlug))
    .filter((lesson): lesson is (typeof lessons)[number] => Boolean(lesson));
  const learningPaths = article.learningPaths
    .map((pathSlug) => paths.find((path) => path.slug === pathSlug))
    .filter((path): path is (typeof paths)[number] => Boolean(path));
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${canonical}#webpage`,
        url: canonical,
        name: article.title,
        description: article.seoDescription || article.excerpt,
        inLanguage: 'en-US',
        isPartOf: {'@id': WEBSITE_ID},
        breadcrumb: {'@id': `${canonical}#breadcrumb`},
        primaryImageOfPage: article.coverImage
          ? {'@id': `${canonical}#primaryimage`}
          : undefined,
        mainEntity: {'@id': `${canonical}#article`},
      },
      {
        '@type': 'BlogPosting',
        '@id': `${canonical}#article`,
        url: canonical,
        mainEntityOfPage: {'@type': 'WebPage', '@id': `${canonical}#webpage`},
        isPartOf: {'@id': WEBSITE_ID},
        headline: article.title,
        description: article.seoDescription || article.excerpt,
        articleSection: article.category,
        image: article.coverImage
          ? {
              '@type': 'ImageObject',
              '@id': `${canonical}#primaryimage`,
              url: `${SITE_URL}${article.coverImage.src}`,
              contentUrl: `${SITE_URL}${article.coverImage.src}`,
              width: 1600,
              height: 900,
              caption: article.coverImage.caption,
            }
          : undefined,
        inLanguage: 'en-US',
        author: {'@id': FOUNDER_ID},
        publisher: {'@id': ORGANIZATION_ID},
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonical}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${SITE_URL}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Articles',
            item: `${SITE_URL}/articles`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: article.title,
            item: canonical,
          },
        ],
      },
    ],
  };

  return (
    <>
      <StructuredData data={articleStructuredData} />
      <article className="container article-page">
        <nav className="article-breadcrumbs" aria-label="Breadcrumb">
          <ol>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/articles">Articles</Link></li>
            <li aria-current="page">{article.title}</li>
          </ol>
        </nav>
        <div className="eyebrow">
          <span className="eyebrow-dot" />
          {article.category.toUpperCase()} · {article.read.toUpperCase()} READ
        </div>
        <h1><HeadingText text={article.title}/></h1>
        <p className="article-lede">{article.excerpt}</p>
        <div className="article-byline">
          <span className="author-avatar">M</span>
          <div>
            <strong>
              By{' '}
              <a
                href={FOUNDER_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Maria Mediannikova
              </a>
              <span className="article-author-role"> · Founder, AltRisk Academy</span>
            </strong>
            <p className="article-author-bio">
              Maria Mediannikova is a student and the founder of AltRisk Academy. Her educational
              work focuses on financial literacy, risk awareness, and practical decision-making.
            </p>
          </div>
        </div>

        <div className="article-prose">
          <ArticleEngagementTracker contentId={article.slug} category={article.category} />
          <section className="article-answer" aria-labelledby="article-answer-heading">
            <h2 id="article-answer-heading"><HeadingText text="In brief"/></h2>
            <p>{article.directAnswer || article.introduction}</p>
          </section>
          <p className="article-introduction">{article.introduction}</p>
          {article.coverImage && (
            <figure className="article-figure article-cover-figure">
              <Image
                src={article.coverImage.src}
                alt={article.coverImage.alt}
                width={1600}
                height={900}
                sizes="(max-width: 840px) 100vw, 840px"
                unoptimized
              />
              <figcaption>{article.coverImage.caption}</figcaption>
            </figure>
          )}
          {article.sections.map((section) => (
            <div key={section.heading}>
              <section className="article-content-section">
                <h2><HeadingText text={section.heading}/></h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
              {article.illustrations
                ?.filter((illustration) => illustration.afterSection === section.heading)
                .map((illustration) => (
                  <figure
                    className="article-figure article-diagram"
                    key={illustration.src}
                    tabIndex={0}
                  >
                    <Image
                      src={illustration.src}
                      alt={illustration.alt}
                      width={1200}
                      height={675}
                      sizes="(max-width: 960px) 960px, 100vw"
                      unoptimized
                    />
                    <figcaption>{illustration.caption}</figcaption>
                  </figure>
                ))}
            </div>
          ))}
          <section className="article-content-section">
            <h2><HeadingText text={article.example.heading}/></h2>
            {article.example.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          <section className="article-callout article-takeaways" aria-labelledby="key-takeaways">
            <Icon name="sparkles" size={23} />
            <div>
              <h2 id="key-takeaways"><HeadingText text="Key takeaways"/></h2>
              <ul>
                {article.keyTakeaways.map((takeaway) => (
                  <li key={takeaway}>{takeaway}</li>
                ))}
              </ul>
            </div>
          </section>

          {article.faqs && article.faqs.length > 0 && (
            <section className="article-content-section article-faq" aria-labelledby="article-faq">
              <h2 id="article-faq"><HeadingText text="Frequently asked questions"/></h2>
              {article.faqs.map((faq) => (
                <div className="article-faq-item" key={faq.question}>
                  <h3><HeadingText text={faq.question}/></h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </section>
          )}

          <section className="article-content-section article-resources">
            <h2><HeadingText text="Related learning resources"/></h2>
            <ul className="article-resource-list">
              {relatedArticles.map((related) => (
                <li key={related.slug}>
                  <AnalyticsLink
                    href={`/articles/${related.slug}`}
                    eventName="article_related_click"
                    eventParameters={{
                      content_id: related.slug,
                      content_type: 'article',
                      topic: getAnalyticsTopic(related.category),
                    }}
                  >
                    {related.title}
                  </AnalyticsLink>
                </li>
              ))}
              {learningPaths.map((path) => (
                <li key={path.slug}>
                  <Link href={`/learn/${path.slug}`}>{path.title} learning path</Link>
                </li>
              ))}
              <li>
                <Link href="/risk-lab">Explore the interactive Risk Lab</Link>
              </li>
            </ul>
          </section>

          <section className="article-content-section article-sources">
            <h2><HeadingText text="Sources & Further Reading"/></h2>
            <ul className="article-source-list">
              {article.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} target="_blank" rel="noopener noreferrer">
                    {source.title}
                  </a>
                  <span>{source.publisher}</span>
                </li>
              ))}
            </ul>
          </section>

          <p className="article-notice">{FINANCIAL_EDUCATION_DISCLAIMER}</p>
        </div>
      </article>
    </>
  );
}
