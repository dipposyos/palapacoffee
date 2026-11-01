import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { InnerHeader } from '../inner-header';
import { coffeeProducts } from '../product-data';
import { content } from '../../site.config';

export const metadata: Metadata = {
  title: 'Indonesian Green Coffee Bean Exporter from Java',
  description: 'Source traceable Indonesian Arabica green coffee beans from Bandung, West Java. Natural, washed, and honey lots for importers, roasters, and distributors.',
  alternates: { canonical: '/green-coffee' },
  openGraph: {
    title: 'Indonesian Green Coffee Bean Exporter from Java',
    description: 'Natural, washed, and honey process Arabica from Bandung, West Java, prepared for international coffee buyers.',
    url: '/green-coffee',
    images: ['/images/bandung-green-coffee-beans.jpeg'],
  },
};

const buyerFaq = [
  {
    question: 'Does Palapa Coffee export green coffee beans from Indonesia?',
    answer: 'Yes. Palapa Coffee is based in Bandung, West Java, and works with international importers, roasters, distributors, and coffee businesses seeking Indonesian green coffee. Shipment scope and responsibilities are confirmed for each destination and order.',
  },
  {
    question: 'Which Indonesian green coffee origins do you currently offer?',
    answer: 'Our published range focuses on Arabica from the Bandung Highlands in West Java. Current farm, harvest, variety, process, volume, and lot details are confirmed through the current offer list.',
  },
  {
    question: 'Which coffee processes are available?',
    answer: 'Our published range includes natural, washed, and honey-process Bandung Arabica. Availability changes by harvest and lot, so buyers receive current information rather than permanent specifications.',
  },
  {
    question: 'Can an international buyer request green coffee samples?',
    answer: 'Yes. Tell us your company, destination country, expected volume, preferred process, and cup profile. We will confirm suitable current lots, sample quantity, courier arrangement, and supporting information.',
  },
  {
    question: 'What are the MOQ, price, and available volume?',
    answer: 'MOQ, price, and available volume are quoted against a current lot and shipment plan. This prevents outdated commercial information and lets us respond to the buyer’s destination, volume, packaging, and quality requirements.',
  },
  {
    question: 'Which documents are provided for coffee export from Indonesia?',
    answer: 'The document set depends on the destination, shipment method, buyer requirements, and agreed trade responsibilities. Palapa Coffee confirms the applicable documents before an order is finalized.',
  },
] as const;

export default function GreenCoffeePage() {
  const listingSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': 'https://palapacoffee.com/green-coffee#webpage',
        url: 'https://palapacoffee.com/green-coffee',
        name: 'Indonesian Green Coffee Beans from Bandung',
        description: 'Traceable Indonesian Arabica green coffee beans from Bandung in natural, washed, and honey processes for importers and roasters.',
        isPartOf: { '@id': 'https://palapacoffee.com/#website' },
      },
      {
        '@type': 'ItemList',
        name: 'Bandung Arabica green coffee options',
        itemListElement: coffeeProducts.map((product, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: product.name,
          url: `https://palapacoffee.com/coffee/${product.slug}`,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://palapacoffee.com/' },
          { '@type': 'ListItem', position: 2, name: 'Indonesian Green Coffee', item: 'https://palapacoffee.com/green-coffee' },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: buyerFaq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      },
    ],
  };

  return <main className="inner-page">
    <InnerHeader />
    <section className="inner-hero">
      <div className="eyebrow"><span/> Indonesian green coffee exporter</div>
      <h1>Indonesian green coffee beans,<br/><em>from Java to the world.</em></h1>
      <p>We source and prepare traceable Arabica green coffee from the volcanic highlands of Bandung, West Java. Availability, variety, harvest details, cupping results, physical analysis, and pricing are confirmed for each current lot.</p>
      <a className="text-link" href={content.links.whatsapp} target="_blank" rel="noreferrer">Request the current offer list <ArrowUpRight size={17}/></a>
    </section>

    <section className="exporter-overview" aria-labelledby="exporter-overview-title">
      <div><div className="eyebrow"><span/> Direct from Bandung</div><h2 id="exporter-overview-title">A green coffee export partner for professional buyers.</h2></div>
      <div><p>Palapa Coffee connects the work of West Java growers and processors with coffee importers, independent roasters, distributors, and coffee shops outside Indonesia. Our focus is green coffee from the Bandung Highlands, with clear origin communication and buyer-specific commercial information.</p><p>Instead of publishing specifications that may become outdated, we confirm the current lot, harvest, process, physical analysis, cupping information, available volume, packaging, price, and shipment responsibilities for each inquiry.</p><a className="text-link" href="/export-process">See our coffee export process <ArrowUpRight size={16}/></a></div>
    </section>

    <section className="product-listing" aria-labelledby="coffee-options">
      <div className="inner-section-heading"><div className="eyebrow"><span/> Current coffee options</div><h2 id="coffee-options">Choose a process.<br/>Ask for the lot.</h2></div>
      <div className="product-card-grid">{coffeeProducts.map((product, index) => <article key={product.slug}>
        <a href={`/coffee/${product.slug}`}><img src={product.image} alt={`${product.name} green coffee from West Java`} loading={index ? 'lazy' : 'eager'}/></a>
        <span>0{index + 1} · {product.process} process</span>
        <h3><a href={`/coffee/${product.slug}`}>{product.name}</a></h3>
        <p>{product.description}</p>
        <a className="text-link" href={`/coffee/${product.slug}`}>View coffee details <ArrowUpRight size={16}/></a>
      </article>)}</div>
    </section>

    <section className="buyer-note">
      <div><div className="eyebrow light"><span/> Lot-specific buying</div><h2>No invented specifications.</h2></div>
      <div><p>Coffee changes from harvest to harvest. We provide the exact variety, moisture, density, screen distribution, defect count, cupping notes, available volume, packaging, and commercial terms for the lot you are considering.</p><p>Tell us your destination, target volume, preferred process, and cup profile. We will respond with the most relevant current options.</p></div>
    </section>
    <section className="buyer-faq" aria-labelledby="buyer-faq-title">
      <div className="inner-section-heading"><div className="eyebrow"><span/> Buyer questions</div><h2 id="buyer-faq-title">Importing green coffee from Indonesia.</h2></div>
      <div className="faq-list">{buyerFaq.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div>
    </section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listingSchema) }} />
  </main>;
}

