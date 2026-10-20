'use client';

import { useEffect } from 'react';
import { ArrowDownRight, ArrowUpRight, Mail, MapPin, Menu, MessageCircle, Play } from 'lucide-react';
import { content } from '../site.config';
import languageData from './translations.json';

type Locale = keyof typeof languageData.translations;

function WhatsAppIcon() { return <svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16.04 3A12.9 12.9 0 0 0 5.13 22.77L3.4 29l6.38-1.67A12.96 12.96 0 1 0 16.04 3Zm0 23.72c-1.9 0-3.77-.5-5.4-1.45l-.39-.23-3.78.99 1.01-3.68-.25-.38a10.7 10.7 0 1 1 8.81 4.75Zm5.87-8.02c-.32-.16-1.9-.94-2.2-1.05-.29-.11-.5-.16-.72.16-.21.32-.82 1.05-1 1.27-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.6a9.7 9.7 0 0 1-1.79-2.23c-.19-.32-.02-.5.14-.66.15-.14.32-.37.48-.56.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.3.32-1.12 1.1-1.12 2.67s1.15 3.1 1.3 3.31c.17.22 2.26 3.45 5.48 4.84.76.33 1.36.53 1.83.68.77.25 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.14-.3-.22-.62-.38Z"/></svg> }

export default function SiteHome({ initialLocale = 'en' }: { initialLocale?: Locale }) {
  const locale = initialLocale;
  const t = languageData.translations[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale.startsWith('ar') ? 'rtl' : 'ltr';
  }, [locale]);

  return <main>
    <a className="skip-link" href="#origin">{t.skip}</a>
    <header className="site-header">
      <a className="brand" href="#top" aria-label={t.home}><span>Palapa</span> Coffee</a>
      <div className="header-actions">
        <label className="language-picker"><span className="sr-only">Select language</span><select value={locale} onChange={(event) => { const nextLocale = event.target.value as Locale; window.location.href = nextLocale === 'en' ? '/' : `/${nextLocale}`; }} aria-label="Select language">{languageData.languageOptions.map((language) => <option key={language.code} value={language.code}>{language.label}</option>)}</select></label>
        <nav className="desktop-nav" aria-label="Primary navigation"><a href="#origin">{t.navOrigin}</a><a href="#quality">{t.navQuality}</a><a href="#about">{t.navAbout}</a><a href="#legalitas">Legalitas</a><a className="contact-button" href="#contact">{t.navContact} <ArrowUpRight size={16} aria-hidden="true"/></a></nav>
        <details className="mobile-nav"><summary aria-label={t.openMenu}><Menu aria-hidden="true"/></summary><nav aria-label="Mobile navigation"><a href="#origin">{t.navOrigin}</a><a href="#quality">{t.navQuality}</a><a href="#about">{t.navAbout}</a><a href="#legalitas">Legalitas</a><a href="#contact">{t.navContact}</a></nav></details>
      </div>
    </header>
    <a className="floating-whatsapp" href={content.links.whatsapp} target="_blank" rel="noreferrer" aria-label={t.chatWhatsapp}><WhatsAppIcon/><span>{t.chatLabel}</span></a>

    <section id="top" className="hero" style={{backgroundImage:`linear-gradient(90deg,rgba(26,20,13,.82),rgba(26,20,13,.18)),url(${content.images.hero})`}}>
      <div className="eyebrow light"><span/> {t.heroEyebrow}</div><h1>{t.heroTitle}</h1><p>{t.heroDescription}</p>
      <div className="hero-actions"><a href="#origin">{t.discover} <ArrowDownRight size={17}/></a><span>{t.coordinates}</span></div>
    </section>

    <section id="origin" className="section origin">
      <div className="section-heading"><div><div className="eyebrow"><span/> {t.originEyebrow}</div><h2>{t.originTitle}</h2></div><p>{t.originDescription}</p></div>
      <div className="origin-image" style={{backgroundImage:`linear-gradient(rgba(24,38,25,.46),rgba(24,38,25,.46)),url(${content.images.origin})`}}><span>{t.altitude}</span><strong>{t.bandungHighlands}</strong></div>
      <div className="process-grid">{t.processes.map((process,i)=><article key={i}><img src={content.images.process[i]} alt={`${process[0]} coffee production in West Java`} loading="lazy" decoding="async"/><div className="card-number">0{i+1}</div><h3>{process[0]}</h3><p>{process[1]}</p></article>)}</div>
      <div className="video-heading"><div className="eyebrow"><span/> {t.processEyebrow}</div><h3>{t.processTitle}</h3></div>
      <div className="video-grid">{content.videos.map((video,i)=><a key={video.id} href={video.url} target="_blank" rel="noreferrer" aria-label={`${t.watchVideo}: ${t.videoStory} 0${i+1}`}><img src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`} alt="" aria-hidden="true" loading="lazy" decoding="async"/><span className="video-number">0{i+1}</span><span className="play-button"><Play size={20} fill="currentColor" aria-hidden="true"/></span><strong>{t.videoStory} 0{i+1}</strong></a>)}</div>
    </section>

    <section id="quality" className="section quality">
      <div className="quality-intro"><img src={content.images.quality} alt="Ripe coffee cherries being carefully selected" loading="lazy" decoding="async"/><div><div className="eyebrow light"><span/> {t.qualityEyebrow}</div><h2>{t.qualityTitle}</h2><p>{t.qualityDescription1}</p><p>{t.qualityDescription2}</p><a href="/green-coffee">{t.offerList} <ArrowUpRight size={17} aria-hidden="true"/></a></div></div>
      <div className="quality-grid">{t.qualities.map((quality,i)=><article key={i}><img src={content.images.qualityCards[i]} alt={`${quality[0]} coffee quality`} loading="lazy" decoding="async"/><span>0{i+1}</span><h3>{quality[0]}</h3><p>{quality[1]}</p></article>)}</div>
    </section>

    <section id="about" className="section about">
      <div className="about-pictures left"><img src={content.images.about[0]} alt="Coffee farmer in Bandung" loading="lazy" decoding="async"/><img src={content.images.about[1]} alt="Coffee cherries ripening on a tree" loading="lazy" decoding="async"/></div>
      <div className="about-copy"><div className="eyebrow"><span/> {t.aboutEyebrow}</div><h2>{t.aboutTitle}</h2><p>{t.aboutDescription1}</p><p>{t.aboutDescription2}</p><blockquote>“{t.quote}”</blockquote><div className="signature">{t.founder}<br/><span>{t.bandungIndonesia}</span></div></div>
      <div className="about-pictures right"><img src={content.images.about[2]} alt="West Java coffee-growing landscape" loading="lazy" decoding="async"/><img src={content.images.about[3]} alt="Coffee cupping and quality evaluation" loading="lazy" decoding="async"/></div>
    </section>

    <section id="legalitas" className="section legalitas">
      <div className="section-heading legalitas-heading"><div><div className="eyebrow"><span/> Registered in Indonesia</div><h2>Legalitas</h2></div><p>Palapa Coffee operates under PT Sihombing Berkat Abadi, a company registered with the Government of the Republic of Indonesia. Select either document to inspect it at full size.</p></div>
      <div className="legalitas-grid">
        <a className="legalitas-card" href="/images/legalitas/nib-first-page.png" target="_blank" rel="noreferrer" aria-label="Open the first page of the Business Identification Number document at full size">
          <div className="legalitas-caption"><div><span>Government registration</span><h3>Business Identification Number (NIB)</h3></div><ArrowUpRight size={20} aria-hidden="true"/></div>
          <div className="legalitas-document"><img src="/images/legalitas/nib-first-page.png" alt="First page of the Indonesian Business Identification Number document for PT Sihombing Berkat Abadi" loading="lazy" decoding="async"/></div>
        </a>
        <a className="legalitas-card" href="/images/legalitas/company-certificate-first-page.png" target="_blank" rel="noreferrer" aria-label="Open the first page of the company registration certificate at full size">
          <div className="legalitas-caption"><div><span>Legal entity registration</span><h3>Company Registration Certificate</h3></div><ArrowUpRight size={20} aria-hidden="true"/></div>
          <div className="legalitas-document"><img src="/images/legalitas/company-certificate-first-page.png" alt="First page of the Indonesian company registration certificate for PT Sihombing Berkat Abadi" loading="lazy" decoding="async"/></div>
        </a>
      </div>
    </section>

    <section id="contact" className="contact">
      <div className="contact-title"><div><div className="eyebrow light"><span/> {t.contactEyebrow}</div><h2>{t.contactTitle}</h2></div><p>{t.contactDescription}</p></div>
      <div className="contact-grid"><a href={content.links.whatsapp} target="_blank" rel="noreferrer"><MessageCircle/><span>{t.whatsapp}</span><strong>{t.startConversation}</strong><ArrowUpRight className="corner"/></a><a href={`mailto:${content.links.email}`}><Mail/><span>{t.email}</span><strong>{content.links.email}</strong><ArrowUpRight className="corner"/></a><div><MapPin/><span>{t.ourBase}</span><strong>{content.address}</strong></div></div>
    </section>
    <footer><a className="brand" href="#top"><span>Palapa</span> Coffee</a><p>{t.footerTagline}</p><div><a href={content.links.whatsapp}>{t.whatsapp}</a><a href={`mailto:${content.links.email}`}>{t.email}</a><a href={content.links.instagram} target="_blank" rel="noreferrer">Instagram</a></div><small>© 2026 Palapa Coffee</small><nav className="footer-seo-links" aria-label="Site links"><a href="/green-coffee">{t.navQuality}</a><a href="/export-process">Export Process</a><a href="/privacy">Privacy</a></nav><nav className="footer-language-links" aria-label="Language versions">{languageData.languageOptions.map((language)=><a key={language.code} href={language.code === 'en' ? '/' : `/${language.code}`} hrefLang={language.code}>{language.label}</a>)}</nav></footer>
  </main>
}
