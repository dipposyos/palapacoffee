import type { MetadataRoute } from 'next';
import { languageAlternates, locales } from './locales';
import { coffeeProducts } from './product-data';

const baseUrl = 'https://palapacoffee.com';

const lastModified = new Date('2026-10-18T00:00:00+07:00');

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedHomePages: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${baseUrl}${locale === 'en' ? '' : `/${locale}`}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: locale === 'en' ? 1 : 0.8,
    alternates: {
      languages: Object.fromEntries(
        Object.entries(languageAlternates).map(([language, path]) => [language, `${baseUrl}${path}`]),
      ),
    },
  }));

  const corePages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/green-coffee`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/export-process`, lastModified, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/privacy`, lastModified, changeFrequency: 'yearly', priority: 0.2 },
    ...coffeeProducts.map((product) => ({
      url: `${baseUrl}/coffee/${product.slug}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    })),
  ];

  return [...localizedHomePages, ...corePages];
}

