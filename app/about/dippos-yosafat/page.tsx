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
      <div className="founder-intro"><div className="eyebrow"><span/> Founder profile</div><h1>Dippos<br/><em>Yosafat.</em></h1><p className="founder-role">Founder and CEO · Palapa Coffee</p><p>Dippos founded Palapa Coffee under PT Sihombing Berkat Abadi in 2024 with a clear ambition: help Indonesian coffee farmers progress and contribute to the growth of Indonesia’s coffee industry through responsible international trade.</p><div className="founder-actions"><a className="text-link" href="/request-quote">Start a sourcing conversation <ArrowUpRight size={17}/></a><a className="text-link" href={content.links.linkedinFounder} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={17}/></a></div></div>
    </section>
    <section className="founder-story">
      <div><div className="eyebrow"><span/> Why Palapa</div><h2>Building a bridge from origin to buyer.</h2></div>
      <div><p>Palapa Coffee connects Arabica from Pangalengan and Ciwidey in the Bandung area of West Java with importers, roasters, distributors, and coffee businesses abroad. The company works from a simple principle: trust is earned through specific origin information, honest lot data, representative samples, and clear commercial communication.</p><p>Dippos leads buyer relationships and the company’s export development from Bekasi, West Java. Palapa Coffee works with processing partners Koma Coffee and Panga Tilu, while farm, harvest, physical analysis, cupping results, available volume, and price are confirmed for each current lot.</p><blockquote>“We want international growth to create meaningful progress for Indonesian farmers and the wider coffee industry.”</blockquote></div>
    </section>
    <section className="founder-principles" aria-label="Founder principles"><article><span>01</span><h2>Origin before claims</h2><p>State what can be verified and identify information that still depends on the current lot.</p></article><article><span>02</span><h2>Buyer clarity</h2><p>Align quality, samples, volume, documents, timing, and responsibilities before shipment.</p></article><article><span>03</span><h2>Long-term progress</h2><p>Build relationships that can support growers, processors, and buyers beyond one transaction.</p></article></section>
    <nav className="resource-links" aria-label="Related founder and company resources"><strong>Learn more</strong><a href="/origins/bandung-highlands">Bandung Highlands origin</a><a href="/green-coffee">Current coffee range</a><a href="/export-process">Export process</a><a href="/blog">Buyer journal</a></nav>
    <ConversionCtas />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>
  </main>;
}
