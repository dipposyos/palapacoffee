import type { MetadataRoute } from 'next';
import { languageAlternates, locales } from './locales';

const baseUrl = 'https://palapacoffee.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${baseUrl}${locale === 'en' ? '' : `/${locale}`}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: locale === 'en' ? 1 : 0.8,
    alternates: {
      languages: Object.fromEntries(
        Object.entries(languageAlternates).map(([language, path]) => [language, `${baseUrl}${path}`]),
      ),
    },
  }));
}

