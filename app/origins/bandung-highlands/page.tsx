import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { InnerHeader } from '../../inner-header';
import { content } from '../../../site.config';

export const metadata: Metadata = {
  title: 'Bandung Highlands Green Coffee Origin, West Java',
  description: 'Discover Arabica green coffee from the Bandung Highlands of West Java, Indonesia: volcanic highland origin, 1,200–1,700 MASL, and natural, washed, and honey processing.',
  alternates: { canonical: '/origins/bandung-highlands' },
  openGraph: {
    title: 'Bandung Highlands Green Coffee Origin | Palapa Coffee',
    description: 'West Java Arabica green coffee for international importers and roasters, sourced from the Bandung Highlands.',
    url: '/origins/bandung-highlands',
    images: ['/images/west-java-coffee-farm.jpeg'],
  },
};

const originFacts = [
  ['Country', 'Indonesia'],
  ['Production areas', 'Pangalengan and Ciwidey, Bandung area, West Java'],
  ['Published altitude', '1,200–1,700 MASL'],
  ['Species', 'Arabica'],
  ['Processing partners', 'Koma Coffee and Panga Tilu'],
  ['Harvest information', 'April; exact harvest timing is confirmed for each current lot'],
  ['Available processes', 'Natural, washed, and honey — subject to current lot availability'],
  ['Variety, harvest & farm', 'Confirmed on the current lot sheet'],
];

export default function BandungHighlandsPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://palapacoffee.com/origins/bandung-highlands#webpage',
        url: 'https://palapacoffee.com/origins/bandung-highlands',
        name: 'Bandung Highlands Green Coffee Origin, West Java',
        description: 'Arabica green coffee origin information for the Bandung Highlands of West Java, Indonesia.',
        isPartOf: { '@id': 'https://palapacoffee.com/#website' },
        about: { '@type': 'Place', name: 'Bandung Highlands, West Java, Indonesia' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://palapacoffee.com/' },
          { '@type': 'ListItem', position: 2, name: 'Green Coffee', item: 'https://palapacoffee.com/green-coffee' },
          { '@type': 'ListItem', position: 3, name: 'Bandung Highlands', item: 'https://palapacoffee.com/origins/bandung-highlands' },
        ],
      },
    ],
  };

  return <main className="inner-page origin-detail">
    <InnerHeader />
    <section className="origin-detail-hero">
      <div className="origin-detail-image"><img src="/images/west-java-coffee-farm.jpeg" alt="Coffee farm in the Bandung Highlands of West Java, Indonesia" /></div>
      <div className="origin-detail-copy"><div className="eyebrow"><span/> Indonesian coffee origin</div><h1>Bandung Highlands,<br/><em>West Java.</em></h1><p>Our published green coffee range begins in the highlands surrounding Bandung. This West Java origin connects volcanic landscapes, high-elevation Arabica cultivation, careful processing, and lot-specific preparation for professional coffee buyers.</p><a className="text-link" href="/request-quote">Request current origin lots <ArrowUpRight size={17}/></a></div>
    </section>
    <section className="origin-story">
      <div><div className="eyebrow"><span/> Origin first</div><h2>A specific place,<br/>not a generic label.</h2></div>
      <div><p>“Indonesian coffee” covers many islands, climates, cultivars, and processing traditions. Palapa Coffee currently focuses its published offer on Arabica from Pangalengan and Ciwidey in the Bandung area of West Java, so buyers can discuss a defined origin rather than an unspecific national blend.</p><p>We work with processing partners Koma Coffee and Panga Tilu. Coffee is agricultural and changes between farms, harvests, and lots, so producer, variety, harvest date, physical analysis, cupping results, volume, and commercial terms are supplied with the current lot.</p></div>
    </section>
    <section className="origin-facts">
      <div className="inner-section-heading"><div className="eyebrow"><span/> Published origin facts</div><h2>What buyers can verify.</h2></div>
      <dl>{originFacts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
    </section>
    <section className="origin-path">
      <article><span>01</span><h2>Cultivated</h2><p>Arabica grows at high elevation in the Bandung Highlands. Farm, producer, variety, and harvest details are confirmed for each offered lot.</p></article>
      <article><span>02</span><h2>Processed</h2><p>Natural, washed, and honey coffees are offered according to current availability, with process and preparation stated on the lot sheet.</p></article>
      <article><span>03</span><h2>Prepared</h2><p>Physical, sensory, packaging, volume, and shipment requirements are aligned with the buyer before a commercial offer is finalized. Peak-harvest capacity can reach 20 metric tons, subject to current lot availability.</p></article>
    </section>
    <section className="sample-cta"><div><div className="eyebrow light"><span/> For importers and roasters</div><h2>Ask for the current Bandung offer.</h2></div><div><p>Tell us your destination, expected volume, preferred process, quality target, and timeline. {content.trade.samples}. We will confirm which origin lots are currently relevant.</p><a className="text-link light" href="/request-quote">Send your buying brief <ArrowUpRight size={17}/></a></div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </main>;
}
