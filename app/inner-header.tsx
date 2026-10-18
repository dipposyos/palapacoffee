import { ArrowUpRight } from 'lucide-react';
import { content } from '../site.config';

export function InnerHeader() {
  return <header className="inner-header">
    <a className="brand" href="/"><span>Palapa</span> Coffee</a>
    <nav aria-label="Secondary navigation">
      <a href="/green-coffee">Green Coffee</a>
      <a href="/export-process">Export Process</a>
      <a href="/#about">About</a>
      <a className="contact-button" href={content.links.whatsapp} target="_blank" rel="noreferrer">Request Samples <ArrowUpRight size={16}/></a>
    </nav>
  </header>;
}

