'use client';

import languageData from './translations.json';

type Locale = keyof typeof languageData.translations;

export function LanguagePicker({ locale }: { locale: Locale }) {
  return (
    <label className="language-picker">
      <span className="sr-only">Select language</span>
      <select
        value={locale}
        onChange={(event) => {
          const nextLocale = event.target.value as Locale;
          window.location.href = nextLocale === 'en' ? '/' : `/${nextLocale}`;
        }}
        aria-label="Select language"
      >
        {languageData.languageOptions.map((language) => (
          <option key={language.code} value={language.code}>{language.label}</option>
        ))}
      </select>
    </label>
  );
}
