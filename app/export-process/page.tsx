import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { InnerHeader } from '../inner-header';
import { content } from '../../site.config';

export const metadata: Metadata = {
  title: 'Coffee Export from Indonesia | Process & FOB Documents',
  description: 'How Palapa Coffee coordinates green coffee export from Indonesia: samples, lot confirmation, FOB Tanjung Priok, preparation, documents, and shipment planning.',
  alternates: { canonical: '/export-process' },
  openGraph: { title: 'Green Coffee Export Process | Palapa Coffee', description: 'From buyer brief and samples to lot preparation and shipment coordination.', url: '/export-process', images: ['/images/bandung-coffee-drying-process.jpeg'] },
};

const steps = [
  ['Buyer brief', 'Tell us your destination, expected volume, preferred process, quality target, timeline, and packaging requirements.'],
  ['Current lot match', 'We identify relevant current lots and share the available origin, harvest, physical, cupping, volume, and commercial information.'],
  ['Sample evaluation', 'The sampling route, sample quantity, courier arrangement, and supporting lot information are confirmed before dispatch.'],
  ['Lot confirmation', 'After approval, both sides confirm the selected lot, quantity, preparation, packaging, commercial terms, and shipment plan in writing.'],
  ['Preparation & checks', 'The confirmed coffee is graded and prepared against the agreed lot specification. Any required third-party inspection is arranged by agreement.'],
  ['Documentation & shipment', 'Final documents depend on destination, buyer requirements, shipment method, and the parties responsible under the agreed trade terms.'],
] as const;

export default function ExportProcessPage() {
  const tradeFacts = [
    ['Trade term', content.trade.incoterm],
    ['Port of departure', content.trade.port],
    ['Preparation estimate', content.trade.preparationTime],
    ['Peak-harvest capacity', content.trade.peakCapacity],
    ['Payment methods', content.trade.paymentMethods],
    ['Sample policy', content.trade.samples],
    ['Export documents', content.trade.documents],
    ['Laboratory information', content.trade.labResults],
    ['Inspection', content.trade.inspection],
  ];
  return <main className="inner-page">
    <InnerHeader />
    <section className="inner-hero compact">
      <div className="eyebrow"><span/> Coffee export from Indonesia</div>
      <h1>Exporting green coffee<br/><em>from Indonesia.</em></h1>
      <p>A clear, buyer-led process for sourcing and exporting green coffee beans from Bandung, West Java. Exact documents, costs, timing, and responsibilities are confirmed for each destination and shipment.</p>
      <a className="text-link" href={content.links.whatsapp} target="_blank" rel="noreferrer">Discuss your requirements <ArrowUpRight size={17}/></a>
    </section>
    <section className="exporter-overview" aria-labelledby="export-guide-title"><div><div className="eyebrow"><span/> For international buyers</div><h2 id="export-guide-title">What buyers should confirm before shipment.</h2></div><div><p>A workable coffee export plan starts with the buyer’s destination, expected volume, quality target, timeline, packaging, and preferred trade terms. These details affect the lot match, sampling route, preparation, documents, logistics, and final commercial offer.</p><p>Palapa Coffee confirms the current coffee and shipment requirements in writing before preparation begins. Buyers can review our <a href="/green-coffee">Indonesian green coffee range</a> and request current lot information before discussing shipment.</p></div></section>
    <section className="process-steps" aria-label="Export process steps">{steps.map(([title, description], index) => <article key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{description}</p></article>)}</section>
    <section className="origin-facts trade-facts"><div className="inner-section-heading"><div><div className="eyebrow"><span/> Current trade framework</div><h2>Commercial starting points.</h2></div><p>These are working parameters, not a binding offer. Final availability, timing, documents, payment conditions, and responsibilities are confirmed in writing for each lot and destination.</p></div><dl>{tradeFacts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></section>
    <section className="buyer-note"><div><div className="eyebrow light"><span/> Documentation</div><h2>Confirmed per shipment.</h2></div><div><p>Our starting document set includes a Phytosanitary Certificate and Certificate of Origin. Other destination-specific documents are reviewed and accommodated where possible.</p><p>Palapa Coffee operates under {content.companyProfile.legalName}, established in {content.companyProfile.founded}. Ask us to confirm the final document set before placing an order.</p><a className="text-link light" href="/request-quote">Request a shipment review <ArrowUpRight size={17}/></a></div></section>
    <nav className="resource-links" aria-label="Related export buyer resources"><strong>Export buyer resources</strong><a href="/insights/fob-green-coffee-tanjung-priok">FOB Tanjung Priok checklist</a><a href="/insights/import-green-coffee-from-indonesia">Importing green coffee from Indonesia</a><a href="/green-coffee">Current coffee options</a><a href="/request-quote">Prepare a buying inquiry</a></nav>
  </main>;
}

