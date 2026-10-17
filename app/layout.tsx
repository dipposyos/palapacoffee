import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

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
    default: 'Palapa Coffee | Bandung Green Coffee',
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
    title: 'Palapa Coffee | Bandung Green Coffee',
    description: 'Traceable, export-ready green coffee from Bandung, West Java, prepared for importers and roasters worldwide.',
    url: '/',
    images: [{
      url: '/images/bandung-highlands-drying.jpeg',
      width: 1078,
      height: 1200,
      alt: 'Coffee drying at origin in Bandung, West Java',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Palapa Coffee | Bandung Green Coffee',
    description: 'Traceable, export-ready green coffee from Bandung, West Java, prepared for importers and roasters worldwide.',
    images: ['/images/bandung-highlands-drying.jpeg'],
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
      url: 'https://palapacoffee.com',
      logo: 'https://palapacoffee.com/icon-512.png',
      email: 'palapacoffee46@gmail.com',
      sameAs: ['https://instagram.com/palapa.coffee'],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bandung',
        addressRegion: 'West Java',
        addressCountry: 'ID',
      },
    },
    {
      '@type': 'Product',
      '@id': 'https://palapacoffee.com/#green-coffee',
      name: 'Bandung Green Coffee Beans',
      description: 'Traceable, export-ready green coffee from the Bandung Highlands in West Java, Indonesia.',
      image: 'https://palapacoffee.com/images/prepared.jpeg',
      brand: { '@id': 'https://palapacoffee.com/#organization' },
      countryOfOrigin: { '@type': 'Country', name: 'Indonesia' },
      category: 'Green coffee beans',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
