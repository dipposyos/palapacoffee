import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import { InnerHeader } from '../../inner-header';
import { getInsightPost, insightPosts } from '../blog-data';

type InsightPageProps = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return insightPosts.map((post) => ({ slug: post.slug })); }

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const post = getInsightPost((await params).slug); if (!post) return {};
  return { title: post.title, description: post.description, alternates: { canonical: `/insights/${post.slug}` }, openGraph: { type: 'article', title: post.title, description: post.description, url: `/insights/${post.slug}`, publishedTime: post.published, modifiedTime: post.updated, authors: ['Dippos Yosafat'], images: [post.image] } };
}

export default async function InsightPage({ params }: InsightPageProps) {
  const post = getInsightPost((await params).slug); if (!post) notFound();
  const url = `https://palapacoffee.com/insights/${post.slug}`;
  const schema = { '@context': 'https://schema.org', '@graph': [{ '@type': 'Article', '@id': `${url}#article`, headline: post.title, description: post.description, image: `https://palapacoffee.com${post.image}`, datePublished: post.published, dateModified: post.updated, author: { '@type': 'Person', name: 'Dippos Yosafat', jobTitle: 'Founder and CEO' }, publisher: { '@id': 'https://palapacoffee.com/#organization' }, mainEntityOfPage: url }, { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://palapacoffee.com/' }, { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://palapacoffee.com/insights' }, { '@type': 'ListItem', position: 3, name: post.title, item: url }] }] };
  return <main className="inner-page insight-article"><InnerHeader /><article><header><div className="eyebrow"><span/> {post.category}</div><h1>{post.title}</h1><div className="article-byline"><span>By Dippos Yosafat · Founder and CEO</span><time dateTime={post.updated}>Updated {post.updated}</time><span>{post.readTime}</span></div><p className="article-intro">{post.intro}</p></header><img className="article-hero-image" src={post.image} width={post.image.includes('drying') ? 1078 : 750} height={post.image.includes('drying') ? 1200 : 1000} alt={post.imageAlt} decoding="async" />{post.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}</section>)}<aside className="article-cta"><h2>Discuss your green coffee requirements.</h2><p>Share your destination, expected volume, preferred process, quality target, and timeline.</p><a className="text-link light" href="/request-quote">Request current options <ArrowUpRight size={16}/></a></aside></article><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></main>;
}
