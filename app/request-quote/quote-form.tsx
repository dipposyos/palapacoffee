'use client';

import { FormEvent, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export function QuoteForm() {
  const [status, setStatus] = useState('');
  const hasTrackedStart = useRef(false);

  function trackStart() {
    if (hasTrackedStart.current) return;
    hasTrackedStart.current = true;
    const analyticsWindow = window as typeof window & { gtag?: (...args: unknown[]) => void };
    analyticsWindow.gtag?.('event', 'quote_form_start', { form_name: 'green_coffee_quote' });
  }

  function sendInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const value = (name: string) => String(form.get(name) || '').trim();
    const required = ['name', 'company', 'email', 'country', 'volume'];
    if (required.some((name) => !value(name))) {
      setStatus('Please complete every required field.');
      const analyticsWindow = window as typeof window & { gtag?: (...args: unknown[]) => void };
      analyticsWindow.gtag?.('event', 'quote_form_validation_error', { form_name: 'green_coffee_quote', error_type: 'missing_required_field' });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value('email'))) {
      setStatus('Please enter a valid business email address.');
      const analyticsWindow = window as typeof window & { gtag?: (...args: unknown[]) => void };
      analyticsWindow.gtag?.('event', 'quote_form_validation_error', { form_name: 'green_coffee_quote', error_type: 'invalid_email' });
      return;
    }
    const message = [
      'Hello Palapa Coffee, I would like to request a green coffee quotation.',
      '',
      `Name: ${value('name')}`,
      `Company: ${value('company')}`,
      `Business email: ${value('email')}`,
      `Destination country: ${value('country')}`,
      `Expected volume: ${value('volume')}`,
      `Preferred process: ${value('process') || 'Open to recommendation'}`,
      `Quality / cup target: ${value('quality') || 'To be discussed'}`,
      `Packaging: ${value('packaging') || 'To be discussed'}`,
      `Required timeline: ${value('timeline') || 'To be discussed'}`,
      `Additional notes: ${value('notes') || 'None'}`,
    ].join('\n');
    const analyticsWindow = window as typeof window & { gtag?: (...args: unknown[]) => void };
    const leadData = { form_name: 'green_coffee_quote', method: 'quote_form', destination_country: value('country'), expected_volume: value('volume'), preferred_process: value('process') || 'unspecified' };
    analyticsWindow.gtag?.('event', 'quote_form_complete', leadData);
    analyticsWindow.gtag?.('event', 'generate_lead', leadData);
    setStatus('Opening WhatsApp with your buying brief…');
    window.open(`https://wa.me/6281212158146?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  }

  return <form className="quote-form" onSubmit={sendInquiry} onFocus={trackStart} noValidate>
    <div className="field"><label htmlFor="name">Your name *</label><input id="name" name="name" autoComplete="name" required /></div>
    <div className="field"><label htmlFor="company">Company *</label><input id="company" name="company" autoComplete="organization" required /></div>
    <div className="field"><label htmlFor="email">Business email *</label><input id="email" name="email" type="email" autoComplete="email" required /></div>
    <div className="field"><label htmlFor="country">Destination country *</label><input id="country" name="country" autoComplete="country-name" required /></div>
    <div className="field"><label htmlFor="volume">Expected volume *</label><input id="volume" name="volume" placeholder="Example: sample, 1 pallet, or 19.2 MT" required /></div>
    <div className="field"><label htmlFor="process">Preferred process</label><select id="process" name="process" defaultValue=""><option value="">Open to recommendation</option><option>Natural</option><option>Washed</option><option>Honey</option><option>Multiple processes</option></select></div>
    <div className="field field-wide"><label htmlFor="quality">Quality or cup-profile target</label><input id="quality" name="quality" placeholder="Describe the market, score target, or flavor direction" /></div>
    <div className="field"><label htmlFor="packaging">Preferred packaging</label><input id="packaging" name="packaging" placeholder="If already specified" /></div>
    <div className="field"><label htmlFor="timeline">Required timeline</label><input id="timeline" name="timeline" placeholder="Example: Q1 2027" /></div>
    <div className="field field-wide"><label htmlFor="notes">Additional requirements</label><textarea id="notes" name="notes" rows={5} placeholder="Port, Incoterm preference, sample request, documentation, or other requirements" /></div>
    <div className="form-submit field-wide"><button type="submit">Continue on WhatsApp <ArrowUpRight size={17}/></button><p aria-live="polite">{status}</p></div>
  </form>;
}
