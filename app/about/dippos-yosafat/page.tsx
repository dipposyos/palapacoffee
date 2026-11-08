import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { InnerHeader } from '../../inner-header';
import { ConversionCtas } from '../../conversion-ctas';
import { content } from '../../../site.config';

export const metadata: Metadata = {
  title: 'Dippos Yosafat | Founder and CEO of Palapa Coffee',
  description: 'Meet Dippos Yosafat, Founder and CEO of Palapa Coffee and PT Sihombing Berkat Abadi, connecting West Java coffee with international buyers.',
  alternates: { canonical: '/about/dippos-yosafat' },
  openGraph: {
    title: 'Dippos Yosafat | Founder of Palapa Coffee',
    description: 'The purpose and people behind Palapa Coffee, an Indonesian green coffee exporter from West Java.',
    url: '/about/dippos-yosafat',
    images: ['/images/dippos-yosafat-founder.webp'],
  },
};

export default function FounderPage() {
  const url = 'https://palapacoffee.com/about/dippos-yosafat';
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person', '@id': `${url}#person`, name: content.companyProfile.founder,
        jobTitle: content.companyProfile.founderTitle, url,
        image: 'https://palapacoffee.com/images/dippos-yosafat-founder.webp',
        sameAs: [content.links.linkedinFounder],
        worksFor: { '@id': 'https://palapacoffee.com/#organization' },
        knowsAbout: ['Indonesian green coffee', 'Bandung Arabica', 'green coffee export'],
      },
      {
        '@type': 'ProfilePage', '@id': `${url}#webpage`, url,
        name: `${content.companyProfile.founder} - ${content.companyProfile.founderTitle}`,
        mainEntity: { '@id': `${url}#person` }, isPartOf: { '@id': 'https://palapacoffee.com/#website' },
      },
      {
        '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://palapacoffee.com/' },
          { '@type': 'ListItem', position: 2, name: 'Founder', item: url },
        ],
      },
    ],
  };

  return <main className="inner-page founder-page">
    <InnerHeader />
    <section className="founder-hero">
      <div className="founder-portrait"><img src="/images/dippos-yosafat-founder.webp" width="800" height="1000" alt="Dippos Yosafat, Founder and CEO of Palapa Coffee"/></div>
      <div className="founder-intro"><div className="eyebrow"><span/> Founder profile</div><h1>Dippos<br/><em>Yosafat.</em></h1><p className="founder-role">Founder and CEO · Palapa Coffee</p><p>Dippos founded Palapa Coffee under PT Sihombing Berkat Abadi in 2024. He chose coffee because Indonesia is one of the world’s leading producing countries—and because exporting coffee from West Java can create better, more dependable opportunities for the people who grow and process it.</p><div className="founder-actions"><a className="text-link" href="/request-quote">Start a sourcing conversation <ArrowUpRight size={17}/></a><a className="text-link" href={content.links.linkedinFounder} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={17}/></a></div></div>
    </section>
    <section className="founder-story">
      <div><div className="eyebrow"><span/> Why Palapa</div><h2>It started with visits and conversations.</h2></div>
      <div><p>Before building an export offer, Dippos went directly to coffee farms and processing sites. He spent time talking with farmers and processors about how they grow coffee, how they handle each harvest, and the problems they face. Those conversations gave him practical knowledge that could never have come from a product catalogue alone.</p><p>One visit stayed with him. Looking at coffee drying in the sun, he saw how much work—and how many local livelihoods—sit behind a green coffee shipment. It shaped Palapa Coffee’s purpose: improve processing standards, help maintain dependable supply, and make the value of coffee trade reach the communities at origin.</p><p>His long-term vision is a direct relationship between buyers and supported villages. A buyer could develop a dependable, exclusive source of coffee from one community, while farmers and processors gain a committed market across future harvests.</p><blockquote>“I want to build relationships where buyers have a stable supply, and farming communities have buyers they can count on.”</blockquote></div>
    </section>
    <section className="founder-principles" aria-label="Founder principles"><article><span>01</span><h2>Go to origin</h2><p>Listen to the people growing and processing the coffee before deciding how to present it to buyers.</p></article><article><span>02</span><h2>Be open</h2><p>Share what is known about each lot, say what still needs confirmation, and keep commercial communication clear.</p></article><article><span>03</span><h2>Think beyond one order</h2><p>Work toward repeat harvests, stable supply, and relationships that benefit both buyers and producing communities.</p></article></section>
    <nav className="resource-links" aria-label="Related founder and company resources"><strong>Learn more</strong><a href="/origins/bandung-highlands">Bandung Highlands origin</a><a href="/green-coffee">Current coffee range</a><a href="/export-process">Export process</a><a href="/blog">Buyer journal</a></nav>
    <ConversionCtas />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>
  </main>;
}
