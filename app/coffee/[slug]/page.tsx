import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import { InnerHeader } from '../../inner-header';
import { coffeeProducts, getCoffeeProduct } from '../../product-data';
import { content } from '../../../site.config';
import { ConversionCtas } from '../../conversion-ctas';

type ProductPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return coffeeProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getCoffeeProduct((await params).slug);
  if (!product) return {};
  return {
    title: `${product.name} Green Coffee`,
    description: `${product.description} Request current lot specifications, samples, availability, packaging, and export terms from Palapa Coffee.`,
    alternates: { canonical: `/coffee/${product.slug}` },
    openGraph: {
      title: `${product.name} | Palapa Coffee`,
      description: product.description,
      url: `/coffee/${product.slug}`,
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = getCoffeeProduct((await params).slug);
  if (!product) notFound();

  const productUrl = `https://palapacoffee.com/coffee/${product.slug}`;
  const pageSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${productUrl}#webpage`,
        url: productUrl,
        name: `${product.name} Green Coffee`,
        description: product.description,
        image: `https://palapacoffee.com${product.image}`,
        isPartOf: { '@id': 'https://palapacoffee.com/#website' },
        about: {
          '@type': 'Thing',
          name: `${product.name} green coffee beans`,
          description: `${product.process}-process Arabica green coffee from ${product.origin} at ${product.altitude}.`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://palapacoffee.com/' },
          { '@type': 'ListItem', position: 2, name: 'Indonesian Green Coffee', item: 'https://palapacoffee.com/green-coffee' },
          { '@type': 'ListItem', position: 3, name: product.name, item: productUrl },
        ],
      },
    ],
  };

  return <main className="inner-page product-detail">
    <InnerHeader />
    <section className="product-hero">
      <div className="product-hero-copy"><div className="eyebrow"><span/> West Java · {product.process} process</div><h1>{product.name}</h1><p>{product.description}</p><a className="text-link" href={content.links.whatsapp} target="_blank" rel="noreferrer">Request this coffee <ArrowUpRight size={17}/></a></div>
      <img src={product.image} alt={`${product.name} production and preparation in Bandung`} />
    </section>
    <section className="specification-section">
      <div><div className="eyebrow"><span/> Published origin data</div><h2>What we can state today.</h2><p>Commercial and quality data are issued against a current lot rather than presented as permanent claims.</p></div>
      <dl>
        <div><dt>Origin</dt><dd>{product.origin}</dd></div>
        <div><dt>Altitude</dt><dd>{product.altitude}</dd></div>
        <div><dt>Process</dt><dd>{product.process}</dd></div>
        <div><dt>Expected character</dt><dd>{product.profile}</dd></div>
        <div><dt>Variety & harvest</dt><dd>Confirmed with the current lot sheet</dd></div>
        <div><dt>MOQ & available volume</dt><dd>Confirmed on inquiry</dd></div>
        <div><dt>Physical analysis</dt><dd>Available with the current lot sheet</dd></div>
        <div><dt>Packaging & terms</dt><dd>Agreed for destination and shipment size</dd></div>
      </dl>
    </section>
    <section className="sample-cta"><div><div className="eyebrow light"><span/> Sample first</div><h2>Evaluate the coffee before you commit.</h2></div><div><p>Share your company, country, expected volume, roast market, and preferred profile. We will confirm suitable lots and the sampling process.</p><a className="text-link light" href={content.links.whatsapp} target="_blank" rel="noreferrer">Ask for current samples <ArrowUpRight size={17}/></a></div></section>
    <ConversionCtas />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
  </main>;
}

