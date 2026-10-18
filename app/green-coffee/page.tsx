import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { InnerHeader } from '../inner-header';
import { coffeeProducts } from '../product-data';
import { content } from '../../site.config';

export const metadata: Metadata = {
  title: 'Indonesian Green Coffee from Bandung',
  description: 'Explore traceable Bandung Arabica green coffee in natural, washed, and honey processes, prepared for importers and roasters worldwide.',
  alternates: { canonical: '/green-coffee' },
  openGraph: {
    title: 'Bandung Green Coffee for Importers and Roasters',
    description: 'Natural, washed, and honey process Arabica from the Bandung Highlands, West Java.',
    url: '/green-coffee',
    images: ['/images/bandung-green-coffee-beans.jpeg'],
  },
};

export default function GreenCoffeePage() {
  return <main className="inner-page">
    <InnerHeader />
    <section className="inner-hero">
      <div className="eyebrow"><span/> Indonesian green coffee</div>
      <h1>Bandung Arabica,<br/><em>prepared for export.</em></h1>
      <p>We source and prepare traceable green coffee from the volcanic highlands of Bandung. Availability, variety, harvest details, cupping results, physical analysis, and pricing are confirmed for each current lot.</p>
      <a className="text-link" href={content.links.whatsapp} target="_blank" rel="noreferrer">Request the current offer list <ArrowUpRight size={17}/></a>
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
  </main>;
}

