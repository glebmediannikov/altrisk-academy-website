import type {Metadata} from 'next';

export const SITE_URL = 'https://altriskacademy.com';
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const FOUNDER_ID = 'https://mariamediannikova.com/#person';
export const FINANCIAL_EDUCATION_DISCLAIMER =
  'AltRisk Academy provides educational information and interactive simulations only. It does not provide personalized financial, investment, tax, or legal advice.';

export function pageMetadata({
  path,
  title,
  description,
  type = 'website',
}: {
  path: string;
  title: string;
  description: string;
  type?: 'website' | 'article';
}): Metadata {
  const canonical = new URL(path, SITE_URL).toString();
  return {
    title,
    description,
    alternates: {canonical},
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'AltRisk Academy',
      type,
      images: [
        {
          url: `${SITE_URL}/branding/altrisk-academy-logo.png`,
          width: 720,
          height: 720,
          alt: 'AltRisk Academy logo',
        },
      ],
    },
  };
}
