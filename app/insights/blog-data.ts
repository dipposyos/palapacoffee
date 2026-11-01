export type InsightSection = { heading: string; paragraphs: string[]; bullets?: string[] };

export type InsightPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  published: string;
  updated: string;
  readTime: string;
  image: string;
  imageAlt: string;
  intro: string;
  sections: InsightSection[];
};

export const insightPosts: InsightPost[] = [
  {
    slug: 'import-green-coffee-from-indonesia',
    title: 'How to Import Green Coffee Beans from Indonesia',
    description: 'A practical buyer checklist for sourcing lots, evaluating samples, confirming specifications, and planning an Indonesian green coffee shipment.',
    category: 'Buyer guide', published: '2026-11-01', updated: '2026-11-01', readTime: '6 min read',
    image: '/images/bandung-green-coffee-beans.jpeg',
    imageAlt: 'Indonesian Arabica green coffee beans prepared for buyer evaluation',
    intro: 'Importing green coffee works best when the buyer and exporter define the coffee, commercial requirements, and shipment responsibilities before an order is confirmed. This guide outlines the questions a professional buyer should resolve.',
    sections: [
      { heading: 'Start with a precise buying brief', paragraphs: ['A useful inquiry identifies the destination country, expected volume, target quality, preferred process, packaging, and required timeline. These details help an exporter match current lots instead of responding with a generic product list.'], bullets: ['Destination country and port', 'Expected volume', 'Arabica or Robusta requirement', 'Process and cup-profile target', 'Packaging and shipment timing'] },
      { heading: 'Evaluate a current lot, not a permanent promise', paragraphs: ['Coffee changes by producer, harvest, and preparation. Ask for the current crop year, variety, moisture, density, screen distribution, defect count, cupping information, available volume, and sample reference. The commercial offer should identify the same lot evaluated by the buyer.'] },
      { heading: 'Confirm samples and logistics', paragraphs: ['Palapa Coffee offers coffee samples without charging for the coffee itself; courier and logistics costs are paid by the buyer. Sample quantity, supporting information, destination, and courier arrangements are confirmed before dispatch.'] },
      { heading: 'Agree the shipment framework', paragraphs: ['Palapa Coffee currently works from an FOB Tanjung Priok starting point. Final preparation time, payment conditions, document set, inspection requirements, and shipment responsibilities are confirmed in writing for the selected lot and destination.'], bullets: ['FOB Tanjung Priok, Jakarta', 'L/C or T/T by commercial agreement', 'Phytosanitary Certificate and Certificate of Origin as starting documents', 'Other destination-specific documents reviewed where possible'] },
    ],
  },
  {
    slug: 'bandung-highlands-coffee-buyer-guide',
    title: 'Bandung Highlands Coffee: A Buyer’s Origin Guide',
    description: 'An introduction to Arabica green coffee from Pangalengan and Ciwidey in West Java, including altitude, processing, and lot-specific buying information.',
    category: 'Coffee origin', published: '2026-11-01', updated: '2026-11-01', readTime: '5 min read',
    image: '/images/west-java-coffee-farm.jpeg',
    imageAlt: 'Arabica coffee farm in the Bandung highlands of West Java',
    intro: 'The Bandung area is one of West Java’s established highland coffee regions. For buyers, the value of an origin name depends on the specific producer, elevation, process, harvest, preparation, and cup result attached to a current lot.',
    sections: [
      { heading: 'Published origin scope', paragraphs: ['Palapa Coffee’s current published range focuses on Arabica from Pangalengan and Ciwidey in the Bandung area of West Java. The stated elevation range is 1,200–1,700 metres above sea level, with exact farm and lot information confirmed when available.'] },
      { heading: 'Processing and partners', paragraphs: ['The published range includes natural, washed, and honey processes according to availability. Palapa Coffee works with Koma Coffee and Panga Tilu as processing partners. Process details should still be checked against the lot sheet because preparation can vary between harvests.'] },
      { heading: 'What to request before buying', paragraphs: ['An origin story is not a substitute for quality data. Professional buyers should review the current lot specification and evaluate a representative sample before confirming a commercial order.'], bullets: ['Producer or processing partner', 'Harvest and variety', 'Physical analysis', 'Cupping result', 'Available volume and packaging', 'Sample and shipment reference'] },
    ],
  },
  {
    slug: 'fob-green-coffee-tanjung-priok',
    title: 'FOB Green Coffee from Tanjung Priok: Buyer Checklist',
    description: 'What importers should confirm when discussing an FOB Indonesian green coffee shipment from Tanjung Priok, Jakarta.',
    category: 'Export guide', published: '2026-11-01', updated: '2026-11-01', readTime: '5 min read',
    image: '/images/bandung-coffee-drying-process.jpeg',
    imageAlt: 'Coffee drying and preparation in Bandung, West Java',
    intro: 'FOB is a commercial framework, not a complete shipment specification. Buyers and sellers still need to agree the coffee, price, preparation, packaging, timing, documents, vessel coordination, and transfer of responsibility in writing.',
    sections: [
      { heading: 'Define the commercial offer', paragraphs: ['The quotation should identify the selected coffee, quantity, price basis, packaging, preparation, payment conditions, validity period, and expected readiness. Palapa Coffee’s current working term is FOB Tanjung Priok, subject to the final written agreement.'] },
      { heading: 'Plan preparation and capacity', paragraphs: ['The current preparation estimate is approximately one to two months after the lot and commercial terms are confirmed. Peak-harvest capacity can reach 20 metric tons of green coffee, subject to actual lot availability and existing commitments.'] },
      { heading: 'Confirm documents by destination', paragraphs: ['The starting document set includes a Phytosanitary Certificate and Certificate of Origin. Requirements vary by importing country, buyer, product, and shipment, so additional documents must be reviewed before the order is finalized.'] },
      { heading: 'Record responsibilities', paragraphs: ['The sales contract or proforma invoice should identify who arranges inspection, inland handling, export clearance, ocean freight, insurance, destination clearance, duties, and other charges. Third-party inspection is not currently standard for Palapa Coffee but can be arranged by agreement.'] },
    ],
  },
];

export function getInsightPost(slug: string) { return insightPosts.find((post) => post.slug === slug); }
