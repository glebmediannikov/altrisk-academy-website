import {PageIntro} from '../../components/common';
import {ArticleDirectory} from '../../components/article-directory';
import {lessons} from '../../lib/data';
import type {Metadata} from 'next';
import {pageMetadata} from '../../lib/seo';

export const metadata: Metadata = pageMetadata({
  path: '/articles',
  title: 'Articles & Risk Education Guides',
  description:
    'Explore practical risk management guides on careers, AI, stress testing, dashboards, market access, and financial decisions.',
});

export default function Articles() {
  return (
    <>
      <PageIntro
        eyebrow="RISK KNOWLEDGE HUB"
        title="Articles that make risk make sense."
        description="Straightforward explanations, examples, and practical ideas for curious minds."
      />
      <section className="container section section-tight">
        <ArticleDirectory articles={lessons} />
      </section>
    </>
  );
}
