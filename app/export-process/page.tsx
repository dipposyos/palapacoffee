import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { InnerHeader } from '../inner-header';
import { content } from '../../site.config';

export const metadata: Metadata = {
  title: 'Green Coffee Export Process from Indonesia',
  description: 'Understand how Palapa Coffee handles buyer requirements, samples, lot confirmation, preparation, documentation, and shipment coordination from Bandung.',
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
  return <main className="inner-page">
    <InnerHeader />
    <section className="inner-hero compact">
      <div className="eyebrow"><span/> Indonesia coffee export support</div>
      <h1>From sample<br/><em>to shipment.</em></h1>
      <p>A clear, buyer-led process for sourcing green coffee from Bandung. Exact documents, costs, timing, and responsibilities are confirmed for each destination and shipment.</p>
      <a className="text-link" href={content.links.whatsapp} target="_blank" rel="noreferrer">Discuss your requirements <ArrowUpRight size={17}/></a>
    </section>
    <section className="process-steps" aria-label="Export process steps">{steps.map(([title, description], index) => <article key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{description}</p></article>)}</section>
    <section className="buyer-note"><div><div className="eyebrow light"><span/> Documentation</div><h2>Confirmed per shipment.</h2></div><div><p>Documentation varies by buyer, destination, product, and trade terms. We do not publish a fixed document promise without reviewing the shipment requirements.</p><p>Ask us to confirm the document set for your destination before placing an order.</p></div></section>
  </main>;
}

