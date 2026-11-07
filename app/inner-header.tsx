import { ArrowUpRight } from 'lucide-react';
import { content } from '../site.config';

export function InnerHeader() {
  return <header className="inner-header">
    <a className="brand" href="/"><span>Palapa</span> Coffee</a>
    <nav aria-label="Secondary navigation">
      <a href="/green-coffee">Green Coffee</a>
      <a href="/origins/bandung-highlands">Origin</a>
      <a href="/export-process">Export Process</a>
      <a href="/blog">Blog</a>
      <a href="/about/dippos-yosafat">Founder</a>
      <a className="contact-button" href="/request-quote">Request a Quote <ArrowUpRight size={16}/></a>
    </nav>
  </header>;
}

