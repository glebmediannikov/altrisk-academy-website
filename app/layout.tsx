import type {Metadata} from 'next';
import './globals.css';
import {Footer} from '../components/footer';
import {PrivacyConsentBanner} from '../components/privacy-consent';
import {ConsentAwareGoogleAnalytics} from '../components/google-analytics';
import {SiteHeader} from '../components/site-header';
import {StructuredData} from '../components/structured-data';
import {FOUNDER_ID, FOUNDER_URL, ORGANIZATION_ID, SITE_URL, WEBSITE_ID} from '../lib/seo';

const logoUrl = `${SITE_URL}/branding/altrisk-academy-logo.png`;

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || SITE_URL),
  title: {
    default: 'AltRisk Academy | Learn to Think Like a Risk Analyst',
    template: '%s | AltRisk Academy',
  },
  description:
    'Free interactive risk management education for high school and college students. Learn financial risk, try simulations, and make smarter decisions.',
  openGraph: {
    title: 'AltRisk Academy',
    description: 'Understand risk. Make smarter decisions. Build a resilient future.',
    type: 'website',
    siteName: 'AltRisk Academy',
    url: SITE_URL,
    images: [
      {
        url: logoUrl,
        width: 720,
        height: 720,
        alt: 'AltRisk Academy logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AltRisk Academy',
    description: 'Understand risk. Make smarter decisions. Build a resilient future.',
    images: [{url: logoUrl, alt: 'AltRisk Academy logo'}],
  },
  robots: {index: true, follow: true},
};

const siteStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': ORGANIZATION_ID,
      name: 'AltRisk Academy',
      url: `${SITE_URL}/`,
      description:
        'An educational platform helping students understand financial risk through interactive simulations, practical learning, and decision-making exercises.',
      founder: {'@id': FOUNDER_ID},
      logo: {
        '@type': 'ImageObject',
        url: logoUrl,
      },
      sameAs: ['https://www.linkedin.com/company/altriskacademy/'],
    },
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      name: 'AltRisk Academy',
      url: `${SITE_URL}/`,
      publisher: {'@id': ORGANIZATION_ID},
    },
    {
      '@type': 'Person',
      '@id': FOUNDER_ID,
      name: 'Maria Mediannikova',
      url: FOUNDER_URL,
      jobTitle: 'Founder, AltRisk Academy',
      description:
        'A student and founder of AltRisk Academy whose educational work focuses on financial literacy, risk awareness, and practical decision-making.',
      worksFor: {'@id': ORGANIZATION_ID},
    },
  ],
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <StructuredData data={siteStructuredData} />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <Footer />
        <PrivacyConsentBanner />
        <ConsentAwareGoogleAnalytics />
      </body>
    </html>
  );
}
