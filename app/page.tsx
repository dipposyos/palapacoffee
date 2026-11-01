import type { Metadata } from 'next';
import SiteHome from './site-home';

export const metadata: Metadata = {
  title: 'Indonesian Coffee Exporter from West Java',
  description: 'Palapa Coffee is an Indonesian coffee exporter connecting Bandung and West Java Arabica green coffee with international importers, roasters, and distributors.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Indonesian Coffee Exporter from West Java | Palapa Coffee',
    description: 'Export-ready Arabica green coffee from Bandung, Indonesia for international coffee buyers.',
    url: '/',
    images: ['/images/bandung-highlands-drying.jpeg'],
  },
};

export default function Home() {
  return <SiteHome initialLocale="en" />;
}
