import type {MetadataRoute} from 'next';
import {lessons, paths} from '../lib/data';

const siteUrl = 'https://altriskacademy.com';
const staticRoutes = [
  '/',
  '/learn',
  '/risk-lab',
  '/challenges',
  '/green-investing',
  '/responsible-consumption',
  '/dictionary',
  '/for-educators',
  '/about',
  '/articles',
];
const validSlug = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...staticRoutes,
    ...paths
      .filter(({slug}) => validSlug.test(slug))
      .map(({slug}) => `/learn/${slug}`),
    ...lessons
      .filter(({slug}) => validSlug.test(slug))
      .map(({slug}) => `/articles/${slug}`),
  ];
  const uniqueRoutes = [...new Set(routes)];

  return uniqueRoutes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
    changeFrequency: 'monthly',
    priority: route === '/' ? 1 : route === '/learn' || route === '/risk-lab' ? 0.9 : 0.6,
  }));
}
