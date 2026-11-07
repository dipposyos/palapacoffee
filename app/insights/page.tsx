import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { InnerHeader } from '../inner-header';
import { insightPosts } from './blog-data';
import { ConversionCtas } from '../conversion-ctas';

export const metadata: Metadata = {
  title: 'Green Coffee Buyer Guides | Indonesia Coffee Insights',
  description: 'Practical guides for importers and roasters sourcing Indonesian green coffee: Bandung origins, samples, specifications, FOB terms, documents, and shipment planning.',
  alternates: { canonical: '/insights' },
  openGraph: { title: 'Indonesian Green Coffee Buyer Insights | Palapa Coffee', description: 'Origin and export guidance for professional green coffee buyers.', url: '/insights', images: ['/images/bandung-green-coffee-beans.jpeg'] },
};

export default function InsightsPage() {
  return <main className="inner-page"><InnerHeader />
    <section className="insights-hero"><div className="eyebrow"><span/> Knowledge from origin</div><h1>Insights for<br/><em>green coffee buyers.</em></h1><p>Practical, transparent guidance for importers, roasters, distributors, and coffee businesses evaluating Indonesian green coffee.</p></section>
    <section className="insights-list" aria-labelledby="latest-insights"><div className="inner-section-heading"><div className="eyebrow"><span/> Buyer resources</div><h2 id="latest-insights">Understand the coffee.<br/>Plan the shipment.</h2></div><div className="insight-grid">{insightPosts.map((post, index) => <article key={post.slug}><a href={`/insights/${post.slug}`}><img src={post.image} width={post.image.includes('drying') ? 1078 : 750} height={post.image.includes('drying') ? 1200 : 1000} alt={post.imageAlt} loading={index ? 'lazy' : 'eager'} decoding="async" /></a><div className="insight-meta"><span>{post.category}</span><time dateTime={post.published}>{post.published}</time><span>{post.readTime}</span></div><h2><a href={`/insights/${post.slug}`}>{post.title}</a></h2><p>{post.description}</p><a className="text-link" href={`/insights/${post.slug}`}>Read buyer guide <ArrowUpRight size={16}/></a></article>)}</div></section>
    <ConversionCtas />
  </main>;
}
