import { ArrowDownToLine, ArrowUpRight } from 'lucide-react';

export function ConversionCtas() {
  return (
    <section className="conversion-ctas" aria-labelledby="buyer-actions-title">
      <div>
        <div className="eyebrow light"><span/> Buyer actions</div>
        <h2 id="buyer-actions-title">Ready to evaluate<br/>a current lot?</h2>
        <p>Choose the next step that fits your sourcing process. Availability, specifications, and commercial terms are always confirmed against the current lot.</p>
      </div>
      <nav aria-label="Green coffee buyer actions">
        <a href="/request-quote?intent=lot-list"><span>Request Current Lot List</span><ArrowUpRight size={18}/></a>
        <a href="/request-quote?intent=sample"><span>Request Free Coffee Sample</span><ArrowUpRight size={18}/></a>
        <a href="/request-quote?intent=fob-quote"><span>Ask for FOB Quote</span><ArrowUpRight size={18}/></a>
        <a href="/downloads/palapa-coffee-green-coffee-specification.pdf" download><span>Download Coffee Specification</span><ArrowDownToLine size={18}/></a>
      </nav>
    </section>
  );
}
