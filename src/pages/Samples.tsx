import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SamplesHub } from '../components/SamplesHub';
import { useTranslation } from 'react-i18next';
import { getLocalizedUrl } from '../i18n';
import { usePathLanguageSync } from '../hooks/usePathLanguageSync';
import '../locales/samplesPage';

export default function Samples() {
  const { t, i18n } = useTranslation();
  usePathLanguageSync(i18n);

  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": t('samples_page.schema.name'),
    "url": getLocalizedUrl('/samples', i18n.language, true),
    "description": t('samples_page.schema.description'),
    "isPartOf": { "@id": "https://formipeek.com#website" },
    "publisher": { "@id": "https://formipeek.com#organization" },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": getLocalizedUrl('/samples', i18n.language, true)
    }
  };

  const canonicalUrl = getLocalizedUrl('/samples', i18n.language, true);

  return (
    <>
      <Helmet>
        <title>{t('samples_page.meta.title')}</title>
        <meta
          name="description"
          content={t('samples_page.meta.description')}
        />
        <meta name="keywords" content={t('samples_page.meta.keywords')} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en" href="https://formipeek.com/samples" />
        <link rel="alternate" hrefLang="pl" href="https://formipeek.com/pl/samples" />
        <link rel="alternate" hrefLang="de" href="https://formipeek.com/de/samples" />
        <link rel="alternate" hrefLang="id" href="https://formipeek.com/id/samples" />
        <link rel="alternate" hrefLang="sv" href="https://formipeek.com/sv/samples" />
        <link rel="alternate" hrefLang="es" href="https://formipeek.com/es/samples" />
        <link rel="alternate" hrefLang="fr" href="https://formipeek.com/fr/samples" />
        <link rel="alternate" hrefLang="it" href="https://formipeek.com/it/samples" />
        <link rel="alternate" hrefLang="nl" href="https://formipeek.com/nl/samples" />
        <link rel="alternate" hrefLang="pt" href="https://formipeek.com/pt/samples" />
        <link rel="alternate" hrefLang="vi" href="https://formipeek.com/vi/samples" />
        <link rel="alternate" hrefLang="tr" href="https://formipeek.com/tr/samples" />
        <link rel="alternate" hrefLang="ru" href="https://formipeek.com/ru/samples" />
        <link rel="alternate" hrefLang="ar" href="https://formipeek.com/ar/samples" />
        <link rel="alternate" hrefLang="th" href="https://formipeek.com/th/samples" />
        <link rel="alternate" hrefLang="ja" href="https://formipeek.com/ja/samples" />
        <link rel="alternate" hrefLang="zh" href="https://formipeek.com/zh/samples" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(pageJsonLd)
          }}
        />
      </Helmet>

      <SamplesHub />
    </>
  );
}
