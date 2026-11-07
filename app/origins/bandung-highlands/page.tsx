import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { InnerHeader } from '../../inner-header';
import { content } from '../../../site.config';
import { ConversionCtas } from '../../conversion-ctas';

export const metadata: Metadata = {
  title: 'Bandung Arabica Green Coffee | West Java Origin',
  description: 'Discover Bandung Arabica green coffee from Pangalengan and Ciwidey, West Java: 1,200–1,700 MASL with natural, washed, and honey processing.',
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
      {
        '@type': 'VideoObject',
        name: 'Green coffee lot inspection in West Java',
        description: 'A short documentary clip showing a physical inspection of green coffee during an origin and processing-partner visit.',
        thumbnailUrl: 'https://palapacoffee.com/images/origin/green-coffee-lot-inspection-poster.webp',
        uploadDate: '2026-10-25',
        duration: 'PT7S',
        contentUrl: 'https://palapacoffee.com/videos/green-coffee-lot-inspection.mp4',
      },
      {
        '@type': 'VideoObject',
        name: 'Green coffee processing equipment in West Java',
        description: 'A short documentary clip showing processing equipment at a Palapa Coffee processing-partner facility.',
        thumbnailUrl: 'https://palapacoffee.com/images/origin/processing-equipment-poster.webp',
        uploadDate: '2026-10-25',
        duration: 'PT6S',
        contentUrl: 'https://palapacoffee.com/videos/green-coffee-processing-equipment.mp4',
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
    <section className="origin-field-notes">
      <div className="inner-section-heading"><div className="eyebrow"><span/> Field documentation</div><h2>Observed at origin.</h2><p>Original photographs and short clips recorded during a Palapa Coffee visit in the Bandung area on 25 October 2026. They document coffee plants, drying practice, green-bean inspection, and processing equipment without presenting them as specifications for every lot.</p></div>
      <div className="origin-media-grid">
        <figure className="origin-media-item origin-media-photo"><img src={content.originMedia.photos[0]} width="1200" height="1600" loading="lazy" decoding="async" alt="Coffee plant with clusters of green cherries documented during a Bandung-area origin visit"/><figcaption><span>01 · Cultivation</span><strong>Green coffee cherries</strong><p>Fruit development observed during the origin visit.</p></figcaption></figure>
        <figure className="origin-media-item origin-media-photo"><img src={content.originMedia.photos[1]} width="1200" height="1600" loading="lazy" decoding="async" alt="Coffee cherries drying in woven bamboo trays at origin in West Java"/><figcaption><span>02 · Drying</span><strong>Traditional drying reference</strong><p>Coffee cherries arranged in woven trays during processing.</p></figcaption></figure>
        {content.originMedia.videos.map((video, index) => <figure className="origin-media-item origin-media-video" key={video.src}><video controls playsInline preload="metadata" poster={video.poster} aria-label={video.title}><source src={video.src} type="video/mp4"/>Your browser does not support embedded video.</video><figcaption><span>0{index + 3} · Documentation</span><strong>{video.title}</strong><p>{index === 0 ? 'A close view of green coffee during a physical lot inspection.' : 'Equipment documented at a processing-partner facility.'}</p></figcaption></figure>)}
      </div>
    </section>
    <section className="origin-path">
      <article><span>01</span><h2>Cultivated</h2><p>Arabica grows at high elevation in the Bandung Highlands. Farm, producer, variety, and harvest details are confirmed for each offered lot.</p></article>
      <article><span>02</span><h2>Processed</h2><p>Natural, washed, and honey coffees are offered according to current availability, with process and preparation stated on the lot sheet.</p></article>
      <article><span>03</span><h2>Prepared</h2><p>Physical, sensory, packaging, volume, and shipment requirements are aligned with the buyer before a commercial offer is finalized. Peak-harvest capacity can reach 20 metric tons, subject to current lot availability.</p></article>
    </section>
    <section className="sample-cta"><div><div className="eyebrow light"><span/> For importers and roasters</div><h2>Ask for the current Bandung offer.</h2></div><div><p>Tell us your destination, expected volume, preferred process, quality target, and timeline. {content.trade.samples}. We will confirm which origin lots are currently relevant.</p><a className="text-link light" href="/request-quote">Send your buying brief <ArrowUpRight size={17}/></a></div></section>
    <ConversionCtas />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </main>;
}
