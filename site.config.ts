/**
 * PALAPA COFFEE — EDITABLE SITE SETTINGS
 * Replace any URL or text below. No component editing is required.
 * Images may use a public URL or a local path such as /images/hero.jpg.
 */
export const content = {
  company: 'Palapa Coffee',
  companyProfile: {
    legalName: 'PT Sihombing Berkat Abadi',
    founded: '2024',
    founder: 'Dippos Yosafat',
    founderTitle: 'Founder and CEO',
    office: 'Bekasi, West Java, Indonesia',
    mission: 'To help Indonesian coffee farmers progress and contribute to the growth of Indonesia’s coffee industry by connecting carefully prepared coffee with international buyers.',
  },
  trade: {
    incoterm: 'FOB',
    port: 'Tanjung Priok, Jakarta, Indonesia',
    preparationTime: 'Approximately 1–2 months after lot and commercial confirmation',
    peakCapacity: 'Up to 20 metric tons of green coffee during peak harvest, subject to lot availability',
    paymentMethods: 'Letter of Credit (L/C) and Telegraphic Transfer (T/T), subject to commercial agreement',
    documents: 'Phytosanitary Certificate and Certificate of Origin (COO); other destination-specific documents are reviewed and accommodated where possible',
    labResults: 'Available vendor laboratory results can be shared for the relevant coffee or shipment',
    inspection: 'Third-party inspection is not standard but can be arranged by agreement',
    samples: 'Coffee samples are free; courier and logistics costs are paid by the buyer',
  },
  links: {
    whatsapp: 'https://wa.me/6281212158146?text=Hey%2C%20I%20want%20to%20ask%20about%20Palapa%20Coffee.',
    email: 'palapacoffee46@gmail.com',
    instagram: 'https://instagram.com/palapa.coffee',
  },
  address: 'Bekasi, West Java, Indonesia',
  videos: [
    { id: 'd1StS0x8xr0', url: 'https://youtube.com/shorts/d1StS0x8xr0?feature=share', title: 'Coffee process story 01' },
    { id: 'rapPar2DW4c', url: 'https://youtube.com/shorts/rapPar2DW4c?feature=share', title: 'Coffee process story 02' },
    { id: '8jV57KnB4_Q', url: 'https://youtube.com/shorts/8jV57KnB4_Q?feature=share', title: 'Coffee process story 03' },
    { id: '5vqVJkLrQ8U', url: 'https://youtube.com/shorts/5vqVJkLrQ8U?feature=share', title: 'Coffee process story 04' },
  ],
  originMedia: {
    photos: [
      '/images/origin/green-coffee-cherries-bandung.webp',
      '/images/origin/traditional-coffee-drying.webp',
    ],
    videos: [
      {
        src: '/videos/green-coffee-lot-inspection.mp4',
        poster: '/images/origin/green-coffee-lot-inspection-poster.webp',
        title: 'Green coffee lot inspection',
      },
      {
        src: '/videos/green-coffee-processing-equipment.mp4',
        poster: '/images/origin/processing-equipment-poster.webp',
        title: 'Processing equipment at origin',
      },
    ],
  },
  images: {
    hero: '/images/west-java-coffee-farm.jpeg',
    heroResponsive: {
      desktopAvif: '/images/hero/bandung-coffee-desktop.avif',
      desktopWebp: '/images/hero/bandung-coffee-desktop.webp',
      mobileAvif: '/images/hero/bandung-coffee-mobile.avif',
      mobileWebp: '/images/hero/bandung-coffee-mobile.webp',
    },
    process: [
      '/images/cultivated.jpeg',
      '/images/processed.jpeg',
      '/images/prepared.jpeg',
    ],
    origin: '/images/bandung-coffee-drying-process.jpeg',
    quality: '/images/bandung-green-coffee-sorting.jpeg',
    qualityCards: [
      '/images/bandung-green-coffee-beans.jpeg',
      '/images/west-java-coffee-farm.jpeg',
      '/images/bandung-coffee-drying-process.jpeg',
      '/images/bandung-green-coffee-sorting.jpeg',
    ],
    about: [
      '/images/west-java-coffee-farm.jpeg',
      '/images/palapa-coffee-about-team.jpg',
      '/images/bandung-green-coffee-sorting.jpeg',
      '/images/bandung-green-coffee-beans.jpeg',
    ],
  },
} as const;
