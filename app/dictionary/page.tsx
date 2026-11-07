import type {Metadata} from 'next';
import {PageIntro, Cta} from '../../components/common';
import {DictionaryExplorer} from '../../components/dictionary-explorer';
import {StructuredData} from '../../components/structured-data';
import {dictionary} from '../../lib/data';
import {pageMetadata, SITE_URL} from '../../lib/seo';

export const metadata: Metadata = pageMetadata({
  path: '/dictionary',
  title: 'Financial Risk Dictionary: Key Terms Explained',
  description:
    'Learn essential financial risk and risk management terms with clear definitions, practical examples, and free educational resources from AltRisk Academy.',
});

const dictionaryUrl = `${SITE_URL}/dictionary`;
const dictionaryId = `${dictionaryUrl}#dictionary`;
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': dictionaryId,
  name: 'Risk Dictionary',
  url: dictionaryUrl,
  hasDefinedTerm: dictionary.map((entry) => ({
    '@type': 'DefinedTerm',
    '@id': `${dictionaryUrl}#${entry.id}`,
    name: entry.term,
    description: entry.meaning,
    inDefinedTermSet: {'@id': dictionaryId},
  })),
};

export default function Dictionary() {
  return (
    <>
      <StructuredData data={structuredData}/>
      <PageIntro
        eyebrow="RISK DICTIONARY"
        title="The language of risk, made simple."
        description="Explore clear definitions and practical examples of financial risk and risk management terms. This free dictionary helps students, educators, and beginners connect concepts to everyday decisions."
      />
      <section className="container section section-tight">
        <DictionaryExplorer entries={dictionary}/>
      </section>
      <Cta/>
    </>
  );
}
