import type { Metadata } from 'next';
import Script from 'next/script';
import { ArrowUpRight } from 'lucide-react';
import { InnerHeader } from './inner-header';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The requested Palapa Coffee page could not be found.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="inner-page not-found-page">
      <InnerHeader />
      <section className="not-found-content">
        <div className="eyebrow"><span /> Error 404</div>
        <h1>This page has moved<br />or does not exist.</h1>
        <p>Continue exploring our Indonesian green coffee, Bandung Highlands origin, export process, and buyer resources.</p>
        <div className="not-found-actions">
          <a className="text-link" href="/">Return home <ArrowUpRight size={17} /></a>
          <a className="text-link" href="/green-coffee">View green coffee <ArrowUpRight size={17} /></a>
          <a className="text-link" href="/request-quote">Request a quote <ArrowUpRight size={17} /></a>
        </div>
      </section>
      <Script id="track-page-not-found" strategy="afterInteractive">
        {`if (typeof window.gtag === 'function' && window.palapaAnalyticsEnabled !== false) {
  window.gtag('event', 'page_not_found', { page_location: window.location.href, page_path: window.location.pathname });
}`}
      </Script>
    </main>
  );
}
