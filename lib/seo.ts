import type {Metadata} from 'next';

export const SITE_URL = 'https://altriskacademy.com';
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const FOUNDER_ID = 'https://mariamediannikova.com/#person';
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const FOUNDER_URL = 'https://mariamediannikova.com/';
export const FINANCIAL_EDUCATION_DISCLAIMER =
  'AltRisk Academy provides educational information and interactive simulations only. It does not provide personalized financial, investment, tax, or legal advice.';

export function pageMetadata({
  path,
  title,
  description,
  type = 'website',
  image,
  article,
}: {
  path: string;
  title: string;
  description: string;
  type?: 'website' | 'article';
  image?: {url: string; width: number; height: number; alt: string};
  article?: {authors: string[]; section: string};
}): Metadata {
  const normalizedPath = path === '/' ? '/' : path.replace(/\/+$/, '');
  const canonical = new URL(normalizedPath, SITE_URL).toString();
  const socialImage = image
    ? {...image, url: new URL(image.url, SITE_URL).toString()}
    : {
        url: `${SITE_URL}/branding/altrisk-academy-logo.png`,
        width: 720,
        height: 720,
        alt: 'AltRisk Academy logo',
      };
  return {
    title,
    description,
    alternates: {canonical},
    robots: {index: true, follow: true},
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'AltRisk Academy',
      type,
      images: [socialImage],
      ...(article
        ? {
            authors: article.authors,
            section: article.section,
          }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [{url: socialImage.url, alt: socialImage.alt}],
    },
  };
}
