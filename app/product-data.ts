export const coffeeProducts = [
  {
    slug: 'bandung-arabica-natural',
    name: 'Bandung Arabica Natural',
    shortName: 'Natural',
    image: '/images/west-java-coffee-farm.jpeg',
    description: 'A fruit-forward expression of the Bandung Highlands, dried with the coffee fruit intact and prepared lot by lot for export.',
    process: 'Natural',
    origin: 'Bandung Highlands, West Java, Indonesia',
    altitude: '1,200–1,700 MASL',
    profile: 'Fruit-led sweetness and a rounded cup; final notes vary by lot.',
  },
  {
    slug: 'bandung-arabica-washed',
    name: 'Bandung Arabica Washed',
    shortName: 'Washed',
    image: '/images/bandung-green-coffee-sorting.jpeg',
    description: 'A clean Bandung Arabica profile produced with careful cherry selection, washing, drying, grading, and lot separation.',
    process: 'Washed',
    origin: 'Bandung Highlands, West Java, Indonesia',
    altitude: '1,200–1,700 MASL',
    profile: 'Clean structure and clear acidity; final notes vary by lot.',
  },
  {
    slug: 'bandung-arabica-honey',
    name: 'Bandung Arabica Honey',
    shortName: 'Honey',
    image: '/images/bandung-green-coffee-beans.jpeg',
    description: 'A carefully dried honey-process coffee balancing the clarity of washed preparation with additional sweetness and texture.',
    process: 'Honey',
    origin: 'Bandung Highlands, West Java, Indonesia',
    altitude: '1,200–1,700 MASL',
    profile: 'Sweet, structured, and balanced; final notes vary by lot.',
  },
] as const;

export type CoffeeProduct = (typeof coffeeProducts)[number];

export function getCoffeeProduct(slug: string) {
  return coffeeProducts.find((product) => product.slug === slug);
}

