import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { isLocale, languageAlternates } from './locales';
import { content } from '../site.config';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://palapacoffee.com'),
  title: {
    default: 'Indonesian Green Coffee Exporter | Palapa Coffee',
    template: '%s | Palapa Coffee',
  },
  description: 'Traceable, export-ready green coffee from Bandung, West Java, prepared for importers and roasters worldwide.',
  applicationName: 'Palapa Coffee',
  authors: [{ name: 'Palapa Coffee', url: 'https://palapacoffee.com' }],
  creator: 'Palapa Coffee',
  publisher: 'Palapa Coffee',
  category: 'Green coffee exporter',
  openGraph: {
    type: 'website',
    siteName: 'Palapa Coffee',
    title: 'Indonesian Green Coffee Exporter | Palapa Coffee',
    description: 'Traceable, export-ready green coffee from Bandung, West Java, prepared for importers and roasters worldwide.',
    url: '/',
    images: [{
      url: '/images/bandung-coffee-drying-process.jpeg',
      width: 1078,
      height: 1200,
      alt: 'Coffee drying at origin in Bandung, West Java',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Indonesian Green Coffee Exporter | Palapa Coffee',
    description: 'Traceable, export-ready green coffee from Bandung, West Java, prepared for importers and roasters worldwide.',
    images: ['/images/bandung-coffee-drying-process.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon-32.png',
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://palapacoffee.com/#organization',
      name: 'Palapa Coffee',
      legalName: content.companyProfile.legalName,
      url: 'https://palapacoffee.com',
      logo: 'https://palapacoffee.com/icon-512.png',
      email: 'palapacoffee46@gmail.com',
      sameAs: [content.links.instagram, content.links.linkedinCompany, 'https://github.com/dipposyos/palapacoffee'],
      telephone: '+6281212158146',
      foundingDate: content.companyProfile.founded,
      founder: {
        '@type': 'Person',
        name: content.companyProfile.founder,
        jobTitle: content.companyProfile.founderTitle,
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        telephone: '+6281212158146',
        email: 'palapacoffee46@gmail.com',
        availableLanguage: ['English', 'Indonesian', 'Russian'],
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bekasi',
        addressRegion: 'West Java',
        addressCountry: 'ID',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://palapacoffee.com/#website',
      url: 'https://palapacoffee.com',
      name: 'Palapa Coffee',
      publisher: { '@id': 'https://palapacoffee.com/#organization' },
      inLanguage: 'en',
    },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const requestHeaders = await headers();
  const requestedLocale = requestHeaders.get('x-site-locale') ?? 'en';
  const locale = isLocale(requestedLocale) ? requestedLocale : 'en';
  const pathname = requestHeaders.get('x-site-path') ?? '/';
  const isLocalizedHome = pathname === '/' || pathname === `/${locale}`;

  return (
    <html lang={locale} dir={locale.startsWith('ar') ? 'rtl' : 'ltr'}>
      <head>
        {isLocalizedHome && (
          <>
            <link rel="preload" as="image" href={content.images.heroResponsive.mobileAvif} type="image/avif" media="(max-width: 600px)" fetchPriority="high" />
            <link rel="preload" as="image" href={content.images.heroResponsive.desktopAvif} type="image/avif" media="(min-width: 601px)" fetchPriority="high" />
            {Object.entries(languageAlternates).map(([language, path]) => (
              <link key={language} rel="alternate" hrefLang={language} href={`https://palapacoffee.com${String(path)}`} />
            ))}
          </>
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-8K6ZER5RXB" strategy="lazyOnload" />
        <Script id="google-analytics" strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
var analyticsUrl = new URL(window.location.href);
var internalFlag = analyticsUrl.searchParams.get('internal');
if (internalFlag === '1') localStorage.setItem('palapa_internal_traffic', 'true');
if (internalFlag === '0') localStorage.removeItem('palapa_internal_traffic');
if (internalFlag !== null) {
  analyticsUrl.searchParams.delete('internal');
  history.replaceState({}, '', analyticsUrl.pathname + analyticsUrl.search + analyticsUrl.hash);
}
window.palapaAnalyticsEnabled = localStorage.getItem('palapa_internal_traffic') !== 'true';
if (window.palapaAnalyticsEnabled) {
  gtag('config', 'G-8K6ZER5RXB', { send_page_view: true });
}`}
        </Script>
        <Script id="conversion-tracking" strategy="lazyOnload">
          {`document.addEventListener('click', function(event) {
  var link = event.target.closest('a');
  if (!link || typeof window.gtag !== 'function' || window.palapaAnalyticsEnabled === false) return;
  var href = link.getAttribute('href') || '';
  var eventName = '';
  if (href.indexOf('wa.me/') !== -1) eventName = 'click_whatsapp';
  else if (href.indexOf('mailto:') === 0) eventName = 'click_email';
  else if (href.indexOf('instagram.com/') !== -1) eventName = 'click_instagram';
  else if (href.indexOf('linkedin.com/') !== -1) eventName = 'click_linkedin';
  else if (href.indexOf('youtube.com/') !== -1 || href.indexOf('youtu.be/') !== -1) eventName = 'video_outbound';
  else if (href.indexOf('/images/legalitas/') === 0) eventName = 'view_legal_document';
  else if (href.indexOf('/request-quote') === 0) eventName = 'click_request_quote';
  else if (href.indexOf('/coffee/') === 0) eventName = 'view_product_link';
  else if (href.indexOf('/insights/') === 0) eventName = 'view_insight_link';
  if (!eventName) return;
  var section = link.closest('section, header, footer');
  var eventData = {
    link_url: link.href,
    link_text: (link.textContent || '').trim().slice(0, 100),
    link_location: section ? (section.id || section.tagName.toLowerCase()) : 'page'
  };
  window.gtag('event', eventName, eventData);
  if (eventName === 'click_whatsapp' || eventName === 'click_email') {
    window.gtag('event', 'generate_lead', Object.assign({ method: eventName === 'click_whatsapp' ? 'whatsapp' : 'email' }, eventData));
  }
});`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
