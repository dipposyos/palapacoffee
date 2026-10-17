import languageData from './translations.json';

export type Locale = keyof typeof languageData.translations;

export const locales = languageData.languageOptions.map((language) => language.code) as Locale[];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const languageAlternates = Object.fromEntries(
  [
    ...locales.map((locale) => [locale, locale === 'en' ? '/' : `/${locale}`]),
    ['x-default', '/'],
  ],
);

