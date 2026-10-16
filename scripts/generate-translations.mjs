import { mkdir, writeFile } from 'node:fs/promises';

const english = {
  skip: 'Skip to main content',
  home: 'Palapa Coffee home',
  openMenu: 'Open navigation menu',
  navOrigin: 'Coffee Origin', navQuality: 'Coffee Quality', navAbout: 'About Us', navContact: 'Contact Us',
  heroEyebrow: 'From Java · To the world', heroTitle: 'Bandung coffee, beautifully expressed.',
  heroDescription: 'Green coffee rooted in the Sunda highlands, selected with care and prepared for roasters around the world.',
  discover: 'Discover our origin', coordinates: 'West Java, Indonesia · 6.9° S · 107.6° E',
  originEyebrow: 'Coffee origin', originTitle: 'Originated from the Land of Sunda.',
  originDescription: 'Our coffee begins in the green folds of Bandung’s volcanic highlands. Cool air, generous rainfall, and mineral-rich soils let cherries mature slowly, building the sweetness and lively character that distinguish West Java in every cup.',
  altitude: '1,200–1,700 MASL', bandungHighlands: 'Bandung Highlands',
  processes: [
    ['Cultivated', 'Grown by trusted smallholder partners across the cool, volcanic highlands surrounding Bandung.'],
    ['Processed', 'Careful cherry selection and considered natural, washed, and honey processes reveal each lot’s character.'],
    ['Prepared', 'Graded, cupped, and prepared for export with dependable documentation and lot traceability.'],
  ],
  processEyebrow: 'From the process', processTitle: 'Watch the work at origin.', videoStory: 'Coffee process story', watchVideo: 'Watch on YouTube',
  qualityEyebrow: 'Coffee quality', qualityTitle: 'Our oath is to give sustainable and natural coffee to the world.',
  qualityDescription1: 'Quality starts long before a sample reaches the cupping table. We work close to origin, following every lot from cherry selection through processing and final preparation. That care creates green coffee with dependable physical quality, clear flavor, and a story buyers can stand behind.',
  qualityDescription2: 'Our approach is practical and personal: listen to growers, protect the character of each harvest, and give importers and roasters the information they need to buy with confidence.',
  offerList: 'Request our current offer list',
  qualities: [
    ['Specialty grade', 'Selected lots scoring 80+ with clear provenance and a clean, expressive cup.'],
    ['Natural character', 'Sweet, fruit-led profiles shaped by the soil, elevation, and patient processing.'],
    ['Responsible supply', 'Long-term farmer relationships support fairer value and resilient harvests.'],
    ['Export ready', 'Consistent preparation, secure packaging, and practical support from sample to shipment.'],
  ],
  aboutEyebrow: 'About Palapa', aboutTitle: 'Who we are?',
  aboutDescription1: 'Palapa Coffee was founded from a simple conviction: remarkable Java coffee deserves a clear path to the world. Based in Bandung, we connect the work of West Java’s growers and processors with importers, independent roasters, and coffee shops who care about origin.',
  aboutDescription2: 'We are an export partner with our feet at origin. That means fewer layers, honest communication, and attention to the details that matter, from samples and specifications to preparation and shipment.',
  quote: 'We want every relationship to feel as considered as the coffee itself.', founder: 'Founder, Palapa Coffee', bandungIndonesia: 'Bandung · Indonesia',
  contactEyebrow: 'Let’s talk coffee', contactTitle: 'Bring the taste of Java to your market.',
  contactDescription: 'Tell us what you are looking for. We welcome sample requests, sourcing conversations, and long-term partnerships.',
  whatsapp: 'WhatsApp', startConversation: 'Start a conversation', email: 'Email', ourBase: 'Our base',
  footerTagline: 'Green coffee from Bandung, Indonesia.', chatWhatsapp: 'Chat with Palapa Coffee on WhatsApp', chatLabel: 'Chat on WhatsApp',
};

const locales = [
  ['ru', 'Русский'], ['zh-CN', '简体中文'], ['hi', 'हिन्दी'], ['ja', '日本語'], ['ko', '한국어'],
  ['th', 'ไทย'], ['vi', 'Tiếng Việt'], ['ms', 'Bahasa Melayu'], ['id', 'Bahasa Indonesia'],
  ['hy', 'Հայերեն'], ['cs', 'Čeština'], ['ar', 'العربية الجزائرية'], ['ha', 'Hausa'],
];

async function translateText(text, target) {
  if (text === english.coordinates || text === english.altitude) return text;
  const url = new URL('https://translate.googleapis.com/translate_a/single');
  url.search = new URLSearchParams({ client: 'gtx', sl: 'en', tl: target, dt: 't', q: text });
  for (let attempt = 0; attempt < 8; attempt++) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        return data[0].map((item) => item[0]).join('');
      }
    } catch (error) {
      if (attempt === 7) throw error;
    }
    await new Promise((resolve) => setTimeout(resolve, 500 * (attempt + 1)));
  }
  throw new Error(`Could not translate ${target}: ${text}`);
}

async function translateValue(value, target) {
  if (typeof value === 'string') return translateText(value, target);
  if (Array.isArray(value)) return Promise.all(value.map((item) => translateValue(item, target)));
  return Object.fromEntries(await Promise.all(Object.entries(value).map(async ([key, item]) => [key, await translateValue(item, target)])));
}

const translations = { en: english };
for (const [code] of locales) {
  console.log(`Translating ${code}...`);
  translations[code] = await translateValue(english, code);
}
translations['ms-BN'] = structuredClone(translations.ms);

const languageOptions = [
  ['en', 'English'], ...locales.slice(0, 9), ['ms-BN', 'Bahasa Melayu (Brunei)'], ...locales.slice(9),
].map(([code, label]) => ({ code, label }));

await mkdir('app', { recursive: true });
await writeFile('app/translations.json', `${JSON.stringify({ languageOptions, translations }, null, 2)}\n`);
