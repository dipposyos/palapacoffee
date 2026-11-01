import type { Metadata } from 'next';
import { InnerHeader } from '../inner-header';
import { QuoteForm } from './quote-form';

export const metadata: Metadata = {
  title: 'Request Indonesian Green Coffee Samples & Quote',
  description: 'Send your green coffee buying requirements to Palapa Coffee. Request current Bandung Arabica lots, samples, availability, packaging, and export terms.',
  alternates: { canonical: '/request-quote' },
  openGraph: {
    title: 'Request Indonesian Green Coffee Samples & Quote | Palapa Coffee',
    description: 'Share your destination, expected volume, process, quality target, packaging, and timeline for a current green coffee offer.',
    url: '/request-quote',
    images: ['/images/bandung-green-coffee-beans.jpeg'],
  },
};

export default function RequestQuotePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': 'https://palapacoffee.com/request-quote#webpage',
    url: 'https://palapacoffee.com/request-quote',
    name: 'Request Indonesian Green Coffee Samples and Quote',
    isPartOf: { '@id': 'https://palapacoffee.com/#website' },
  };

  return <main className="inner-page quote-page">
    <InnerHeader />
    <section className="quote-intro"><div className="eyebrow"><span/> Green coffee buying inquiry</div><h1>Tell us what<br/><em>you need.</em></h1><p>Share a clear buying brief so we can match your requirements with current Bandung Arabica lots. We will confirm availability and commercial details rather than send outdated generic specifications.</p></section>
    <section className="quote-layout">
      <div className="quote-guidance"><div className="eyebrow"><span/> Before you inquire</div><h2>A useful brief gets a useful answer.</h2><p>Please provide the details you already know. If you are still exploring, leave the optional fields open and tell us about your business and destination market.</p><ul><li>Current lots, samples, and prices are confirmed after review.</li><li>MOQ and shipment terms depend on the selected lot and destination.</li><li>Submitting this form prepares a WhatsApp message; you choose whether to send it.</li></ul></div>
      <QuoteForm />
    </section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </main>;
}
