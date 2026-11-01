import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { InnerHeader } from '../inner-header';
import { insightPosts } from '../insights/blog-data';

export const metadata: Metadata = {
  title: 'Palapa Coffee Blog | Indonesian Green Coffee & Export Guides',
  description:
    'Stories and practical guides about Indonesian green coffee, Bandung origins, processing, quality, and coffee export preparation for international buyers.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Palapa Coffee Blog',
    description: 'Coffee origin stories and practical sourcing guidance from West Java, Indonesia.',
    url: '/blog',
    images: ['/images/west-java-coffee-farm.jpeg'],
  },
};

export default function BlogPage() {
  const [featuredPost, ...otherPosts] = insightPosts;

  return (
    <main className="inner-page blog-page">
      <InnerHeader />

      <section className="blog-hero">
        <div className="eyebrow"><span /> Palapa Coffee journal</div>
        <h1>Stories from origin.<br /><em>Knowledge for buyers.</em></h1>
        <p>
          Explore Indonesian green coffee through field stories, origin notes, processing knowledge,
          and practical export guidance from Bandung, West Java.
        </p>
      </section>

      <section className="blog-featured" aria-labelledby="featured-story">
        <a className="blog-featured-image" href={`/insights/${featuredPost.slug}`}>
          <img
            src={featuredPost.image}
            width={750}
            height={1000}
            alt={featuredPost.imageAlt}
            decoding="async"
          />
        </a>
        <div className="blog-featured-copy">
          <div className="eyebrow"><span /> Featured article</div>
          <div className="insight-meta">
            <span>{featuredPost.category}</span>
            <time dateTime={featuredPost.published}>{featuredPost.published}</time>
            <span>{featuredPost.readTime}</span>
          </div>
          <h2 id="featured-story"><a href={`/insights/${featuredPost.slug}`}>{featuredPost.title}</a></h2>
          <p>{featuredPost.description}</p>
          <a className="text-link" href={`/insights/${featuredPost.slug}`}>
            Read the article <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      <section className="insights-list blog-archive" aria-labelledby="all-articles">
        <div className="inner-section-heading">
          <div className="eyebrow"><span /> Latest from Palapa</div>
          <h2 id="all-articles">More coffee<br />knowledge.</h2>
          <p>New field stories, harvest notes, and buyer guides can be added here as Palapa Coffee grows.</p>
        </div>
        <div className="insight-grid">
          {otherPosts.map((post) => (
            <article key={post.slug}>
              <a href={`/insights/${post.slug}`}>
                <img
                  src={post.image}
                  width={post.image.includes('drying') ? 1078 : 750}
                  height={post.image.includes('drying') ? 1200 : 1000}
                  alt={post.imageAlt}
                  loading="lazy"
                  decoding="async"
                />
              </a>
              <div className="insight-meta">
                <span>{post.category}</span>
                <time dateTime={post.published}>{post.published}</time>
                <span>{post.readTime}</span>
              </div>
              <h2><a href={`/insights/${post.slug}`}>{post.title}</a></h2>
              <p>{post.description}</p>
              <a className="text-link" href={`/insights/${post.slug}`}>
                Read the article <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="blog-cta">
        <div>
          <div className="eyebrow"><span /> Looking for a current lot?</div>
          <h2>Turn your research into a buying conversation.</h2>
        </div>
        <a className="contact-button" href="/request-quote">
          Request coffee information <ArrowUpRight size={18} />
        </a>
      </section>
    </main>
  );
}
