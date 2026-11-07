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
  {
    slug: 'indonesian-coffee-export-documents',
    title: 'Indonesian Coffee Export Documents: A Buyer Overview',
    description: 'A practical overview of documents international buyers should discuss when sourcing and shipping green coffee from Indonesia.',
    category: 'Export guide', published: '2026-11-07', updated: '2026-11-07', readTime: '6 min read',
    image: '/images/bandung-green-coffee-sorting.jpeg',
    imageAlt: 'Green coffee sorting and preparation in West Java, Indonesia',
    intro: 'Coffee export documents depend on the destination, shipment, trade agreement, and buyer requirements. This overview helps buyers ask the right questions without treating a generic checklist as legal advice or a final document commitment.',
    sections: [
      { heading: 'Start with the destination requirements', paragraphs: ['The importer should confirm current customs, food-safety, plant-health, labelling, and documentary requirements with its broker or competent authority. The exporter can then review what is applicable to the selected lot and shipment.'] },
      { heading: 'Palapa Coffee’s starting document set', paragraphs: ['For a planned FOB shipment, Palapa Coffee starts discussions with the Phytosanitary Certificate and Certificate of Origin. The final invoice, packing list, transport documents, and any destination-specific supporting documents are confirmed in the shipment file.'], bullets: ['Phytosanitary Certificate', 'Certificate of Origin (COO)', 'Commercial invoice and packing list', 'Transport and shipment documents as applicable'] },
      { heading: 'Match every document to the commercial agreement', paragraphs: ['Company names, product description, quantity, weights, packaging, lot references, port, Incoterm, and dates should remain consistent across the quotation, sales agreement, invoice, packing list, and shipment documents.'] },
      { heading: 'Confirm before the coffee is prepared', paragraphs: ['Document requirements can affect cost and timing. Buyers should share their complete requirements before order confirmation, especially when third-party inspection, laboratory testing, legalization, or special destination forms are needed.'] },
    ],
  },
  {
    slug: 'bandung-arabica-harvest-calendar',
    title: 'Bandung Arabica Harvest Calendar for Green Coffee Buyers',
    description: 'How buyers can plan samples, lot selection, preparation, and FOB shipment around the Bandung Arabica harvest in West Java.',
    category: 'Coffee origin', published: '2026-11-07', updated: '2026-11-07', readTime: '5 min read',
    image: '/images/cultivated.jpeg',
    imageAlt: 'Arabica coffee plants in the highlands of Bandung, West Java',
    intro: 'A harvest calendar is a planning tool, not a guarantee of availability. Weather, elevation, farm conditions, processing, and existing commitments can shift both timing and volume, so buyers should confirm each current lot.',
    sections: [
      { heading: 'Published harvest reference', paragraphs: ['Palapa Coffee currently uses April as the main harvest reference for its Bandung-area sourcing. Exact picking, processing, resting, grading, and readiness dates are confirmed with the relevant producer or processing partner.'] },
      { heading: 'Plan backward from the target shipment', paragraphs: ['Buyers should allow time for a clear buying brief, current-lot matching, sample dispatch and evaluation, commercial confirmation, preparation, document review, and vessel coordination. Palapa Coffee’s current preparation estimate is approximately one to two months after lot and commercial confirmation.'] },
      { heading: 'Ask for current-lot evidence', paragraphs: ['Before buying, request the harvest reference, producer or processing partner, process, physical analysis, cupping result, sample code, available volume, and anticipated readiness.'], bullets: ['Harvest and processing dates', 'Representative sample reference', 'Physical and sensory results', 'Available and committed volume', 'Estimated preparation date'] },
    ],
  },
  {
    slug: 'natural-vs-washed-indonesian-coffee',
    title: 'Natural vs Washed Indonesian Green Coffee',
    description: 'A buyer-focused comparison of natural and washed Indonesian Arabica, including evaluation questions for samples and current lots.',
    category: 'Coffee quality', published: '2026-11-07', updated: '2026-11-07', readTime: '6 min read',
    image: '/images/processed.jpeg',
    imageAlt: 'Coffee processing and green bean sorting in Indonesia',
    intro: 'Process names help buyers navigate an offer, but they do not predict quality by themselves. Producer practice, cherry selection, drying, storage, preparation, and the individual lot all influence the final cup.',
    sections: [
      { heading: 'Natural process', paragraphs: ['In natural processing, coffee is dried with the fruit around the seed before the dried cherry is removed. Buyers may encounter fruit-led sweetness and fuller texture, but should evaluate cleanliness, uniformity, moisture, water activity where available, and sample stability.'] },
      { heading: 'Washed process', paragraphs: ['Washed coffees have the fruit removed before or during fermentation and washing, followed by drying. Buyers often look for clarity and structure, while still checking fermentation control, drying consistency, physical preparation, and cup quality.'] },
      { heading: 'Compare representative samples', paragraphs: ['Use the same roast approach, rest period, water, grind, and cupping protocol when comparing lots. Record fragrance, aroma, flavor, aftertaste, acidity, body, balance, sweetness, uniformity, clean cup, and defects.'] },
      { heading: 'Buy the lot, not the label', paragraphs: ['Palapa Coffee publishes natural, washed, and honey-process Bandung Arabica according to availability. The buyer receives lot-specific origin, harvest, physical, sensory, volume, packaging, and commercial information before confirmation.'] },
    ],
  },
  {
    slug: 'evaluate-indonesian-green-coffee-sample',
    title: 'How to Evaluate an Indonesian Green Coffee Sample',
    description: 'A repeatable checklist for importers and roasters assessing physical quality, roasting behavior, cup profile, and commercial fit.',
    category: 'Buyer guide', published: '2026-11-07', updated: '2026-11-07', readTime: '7 min read',
    image: '/images/prepared.jpeg',
    imageAlt: 'Indonesian green coffee beans prepared for buyer sample evaluation',
    intro: 'A sample should answer two questions: what is the quality of this coffee, and is it representative of the commercial lot being offered? A consistent evaluation process makes the buying decision easier to explain and repeat.',
    sections: [
      { heading: 'Verify sample identity', paragraphs: ['Record the exporter, sample code, origin, producer or processing partner, harvest, process, variety when known, lot size, available volume, and date received. Ask whether the sample is drawn from the prepared lot or is a type sample.'] },
      { heading: 'Inspect the green coffee', paragraphs: ['Review odor, color, moisture, density, screen distribution, defects, and visible consistency using the method relevant to your market and contract. Do not compare figures produced with different methods as though they were identical.'] },
      { heading: 'Use a controlled roast and cup protocol', paragraphs: ['Keep sample weight, roast approach, rest, grind, water, temperature, and cupping timing consistent. Cup more than one bowl and note both positive attributes and any inconsistency or defect.'] },
      { heading: 'Connect quality to the commercial decision', paragraphs: ['Confirm that the offered quantity, preparation, packaging, price basis, shipment timing, and sample reference match the coffee evaluated. Retain a reference sample when possible and put acceptance criteria in writing.'], bullets: ['Sample and lot reference match', 'Quality and preparation agreed', 'Volume and packaging confirmed', 'FOB price and payment agreed', 'Shipment and document plan recorded'] },
    ],
  },
];

export function getInsightPost(slug: string) { return insightPosts.find((post) => post.slug === slug); }
