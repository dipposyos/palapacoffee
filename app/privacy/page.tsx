import type { Metadata } from 'next';
import { InnerHeader } from '../inner-header';
import { content } from '../../site.config';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Palapa Coffee handles contact information and website analytics data.',
  alternates: { canonical: '/privacy' },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return <main className="inner-page legal-page">
    <InnerHeader />
    <article>
      <div className="eyebrow"><span/> Last updated · 18 October 2026</div>
      <h1>Privacy Policy</h1>
      <p>Palapa Coffee uses this website to present its coffee sourcing and export services and to receive business inquiries.</p>
      <h2>Information you choose to provide</h2>
      <p>If you contact us by email, WhatsApp, or Instagram, we receive the information you include in your message. We use it to respond to your inquiry, discuss products or services, arrange samples, and maintain relevant business correspondence.</p>
      <h2>Website analytics</h2>
      <p>We use Cloudflare Web Analytics to understand aggregate website activity such as page views, approximate country, browser, operating system, and device type. We use this information to improve the website and do not use it to sell personal data.</p>
      <h2>Third-party services</h2>
      <p>Links to WhatsApp, Instagram, YouTube, and email services are governed by the privacy practices of those providers. Embedded or externally hosted images and video thumbnails may also cause your browser to connect to their providers.</p>
      <h2>Data retention</h2>
      <p>Business correspondence is kept only as long as reasonably necessary for the inquiry, transaction, recordkeeping, or legal obligations that apply.</p>
      <h2>Your choices</h2>
      <p>You may ask us to correct or delete contact information held in ordinary business correspondence, subject to any records we must retain for legal or transactional reasons.</p>
      <h2>Contact</h2>
      <p>Questions about this policy may be sent to <a href={`mailto:${content.links.email}`}>{content.links.email}</a>.</p>
    </article>
  </main>;
}

