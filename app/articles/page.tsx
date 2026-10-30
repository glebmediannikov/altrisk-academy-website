import {PageIntro} from '../../components/common';
import {ArticleDirectory} from '../../components/article-directory';
import {lessons} from '../../lib/data';
import type {Metadata} from 'next';
import {StructuredData} from '../../components/structured-data';
import {
  ORGANIZATION_ID,
  pageMetadata as createPageMetadata,
  SITE_URL,
  WEBSITE_ID,
} from '../../lib/seo';

const directoryDescription =
  'Explore practical risk management guides on Python analytics, Monte Carlo simulation, algorithmic trading, liquidity, machine learning, VaR, stress testing, and financial decisions.';
const directoryImage = {
  url: '/articles/articles-directory-cover.svg',
  width: 1600,
  height: 900,
  alt: 'AltRisk Academy articles about financial literacy, risk analysis, and decision-making.',
};

export const metadata: Metadata = createPageMetadata({
  path: '/articles',
  title: 'Articles & Risk Education Guides',
  description: directoryDescription,
  image: directoryImage,
});

export default function Articles() {
  const canonical = `${SITE_URL}/articles`;
  const directoryStructuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${canonical}#webpage`,
        url: canonical,
        name: 'Articles & Risk Education Guides',
        description: directoryDescription,
        inLanguage: 'en-US',
        isPartOf: {'@id': WEBSITE_ID},
        publisher: {'@id': ORGANIZATION_ID},
        image: `${SITE_URL}${directoryImage.url}`,
        mainEntity: {'@id': `${canonical}#article-list`},
      },
      {
        '@type': 'ItemList',
        '@id': `${canonical}#article-list`,
        name: 'AltRisk Academy articles',
        numberOfItems: lessons.length,
        itemListOrder: 'https://schema.org/ItemListOrderAscending',
        itemListElement: lessons.map((article, index) => {
          const url = `${SITE_URL}/articles/${article.slug}`;
          return {
            '@type': 'ListItem',
            position: index + 1,
            name: article.title,
            item: url,
          };
        }),
      },
    ],
  };

  return (
    <>
      <StructuredData data={directoryStructuredData} />
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
