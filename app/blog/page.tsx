import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { InnerHeader } from '../inner-header';
import { insightPosts } from '../insights/blog-data';

export const metadata: Metadata = {
  title: 'Indonesian Coffee Blog | Origin & Export Stories',
  description: 'News and practical knowledge about Indonesian coffee origins, farming, processing, quality, and green coffee export preparation.',
  alternates: { canonical: '/blog' },
  openGraph: { title: 'Palapa Coffee Blog', description: 'Coffee stories and buyer knowledge from West Java, Indonesia.', url: '/blog', images: ['/images/west-java-coffee-farm.jpeg'] },
};

export default function BlogPage() {
  return <main className="inner-page blog-page">
    <InnerHeader />
    <section className="blog-index" aria-labelledby="blog-title">
      <header className="blog-index-intro">
        <div className="eyebrow"><span /> Palapa Coffee journal</div>
        <h1 id="blog-title">Coffee Stories</h1>
        <p>News and practical knowledge from Palapa Coffee. This journal will share stories about Indonesian coffee origins, farming, processing, quality, and export preparation.</p>
      </header>
      <div className="blog-card-grid" aria-label="Coffee articles">
        {insightPosts.map((post, index) => <article className="blog-card" key={post.slug}>
          <a className="blog-card-image" href={`/insights/${post.slug}`}>
            <img src={post.image} width={post.image.includes('drying') ? 1078 : 750} height={post.image.includes('drying') ? 1200 : 1000} alt={post.imageAlt} loading={index === 0 ? 'eager' : 'lazy'} decoding="async" />
          </a>
          <div className="blog-card-copy">
            <div className="blog-card-meta"><span>{post.category}</span><time dateTime={post.published}>{post.published}</time></div>
            <h2><a href={`/insights/${post.slug}`}>{post.title}</a></h2>
            <p>{post.description}</p>
            <a className="text-link" href={`/insights/${post.slug}`}>Read article <ArrowUpRight size={15} /></a>
          </div>
        </article>)}
      </div>
      <p className="blog-coming-soon">More articles will be published here soon.</p>
    </section>
  </main>;
}
