import Link from 'next/link';
import Image from 'next/image';
import {notFound} from 'next/navigation';
import type {Metadata} from 'next';
import {lessons, paths} from '../../../lib/data';
import {Icon} from '../../../components/icon';
import {StructuredData} from '../../../components/structured-data';
import {
  FINANCIAL_EDUCATION_DISCLAIMER,
  FOUNDER_ID,
  ORGANIZATION_ID,
  pageMetadata,
  SITE_URL,
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
    '@type': 'BlogPosting',
    '@id': `${canonical}#article`,
    url: canonical,
    mainEntityOfPage: {'@type': 'WebPage', '@id': canonical},
    headline: article.title,
    description: article.excerpt,
    articleSection: article.category,
    image: article.coverImage ? [`${SITE_URL}${article.coverImage.src}`] : undefined,
    inLanguage: 'en',
    author: {'@id': FOUNDER_ID},
    publisher: {'@id': ORGANIZATION_ID},
  };

  return (
    <>
      <StructuredData data={articleStructuredData} />
      <article className="container article-page">
        <Link href="/articles" className="back-link">
          <Icon name="arrow" size={15} /> Back to articles
        </Link>
        <div className="eyebrow">
          <span className="eyebrow-dot" />
          {article.category.toUpperCase()} · {article.read.toUpperCase()} READ
        </div>
        <h1>{article.title}</h1>
        <p className="article-lede">{article.excerpt}</p>
        <div className="article-byline">
          <span className="author-avatar">M</span>
          <div>
            <strong>
              By{' '}
              <a
                href="https://mariamediannikova.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Maria Mediannikova
              </a>
            </strong>
            <p className="article-author-bio">
              Maria Mediannikova is a student and the founder of AltRisk Academy. Her educational
              work focuses on financial literacy, risk awareness, and practical decision-making.
            </p>
          </div>
        </div>

        <div className="article-prose">
          <p>{article.introduction}</p>
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
                <h2>{section.heading}</h2>
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
            <h2>{article.example.heading}</h2>
            {article.example.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          <section className="article-callout article-takeaways" aria-labelledby="key-takeaways">
            <Icon name="sparkles" size={23} />
            <div>
              <h2 id="key-takeaways">Key takeaways</h2>
              <ul>
                {article.keyTakeaways.map((takeaway) => (
                  <li key={takeaway}>{takeaway}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="article-content-section article-resources">
            <h2>Related learning resources</h2>
            <ul className="article-resource-list">
              {relatedArticles.map((related) => (
                <li key={related.slug}>
                  <Link href={`/articles/${related.slug}`}>{related.title}</Link>
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
            <h2>Sources &amp; Further Reading</h2>
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
