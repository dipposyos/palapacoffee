import type { Metadata } from 'next';
import { languageAlternates } from './locales';
import SiteHome from './site-home';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
    languages: languageAlternates,
  },
};

export default function Home() {
  return <SiteHome initialLocale="en" />;
}
