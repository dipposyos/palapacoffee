import type { Metadata } from 'next';
import SiteHome from './site-home';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return <SiteHome initialLocale="en" />;
}
