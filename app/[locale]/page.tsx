import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import languageData from '../translations.json';
import { isLocale, locales } from '../locales';
import SiteHome from '../site-home';

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.filter((locale) => locale !== 'en').map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale) || locale === 'en') return {};
  const translation = languageData.translations[locale];

  return {
    title: translation.heroTitle,
    description: translation.heroDescription,
    alternates: {
      canonical: `/${locale}`,
    },
    openGraph: {
      locale,
      title: `Palapa Coffee | ${translation.heroTitle}`,
      description: translation.heroDescription,
      url: `/${locale}`,
      images: [{
        url: '/images/bandung-coffee-drying-process.jpeg',
        width: 1078,
        height: 1200,
        alt: translation.bandungHighlands,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Palapa Coffee | ${translation.heroTitle}`,
      description: translation.heroDescription,
      images: ['/images/bandung-coffee-drying-process.jpeg'],
    },
  };
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === 'en') notFound();
  return <SiteHome initialLocale={locale} />;
}

