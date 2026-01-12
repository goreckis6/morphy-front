import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { ConverterHub } from '../components/ConverterHub';
import { usePathLanguageSync } from '../hooks/usePathLanguageSync';
import { getLocalizedUrl } from '../i18n';

export default function Converters() {
  const { t, i18n } = useTranslation();
  usePathLanguageSync(i18n);

  const localizedPath = getLocalizedUrl('/converters', i18n.language);
  const canonicalUrl = `https://formipeek.com${localizedPath}`;

  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: t('converters_page.schema.name'),
    url: canonicalUrl,
    description: t('converters_page.schema.description'),
    isPartOf: { '@id': 'https://formipeek.com#website' },
    publisher: { '@id': 'https://formipeek.com#organization' }
  };

  return (
    <>
      <Helmet>
        <title>{t('converters_page.meta.title')}</title>
        <meta name="description" content={t('converters_page.meta.description')} />
        <meta name="keywords" content={t('converters_page.meta.keywords')} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en" href="https://formipeek.com/converters" />
        <link rel="alternate" hrefLang="pl" href="https://formipeek.com/pl/converters" />
        <link rel="alternate" hrefLang="de" href="https://formipeek.com/de/converters" />
        <link rel="alternate" hrefLang="id" href="https://formipeek.com/id/converters" />
        <link rel="alternate" hrefLang="sv" href="https://formipeek.com/sv/converters" />
        <link rel="alternate" hrefLang="es" href="https://formipeek.com/es/converters" />
        <link rel="alternate" hrefLang="fr" href="https://formipeek.com/fr/converters" />
        <link rel="alternate" hrefLang="it" href="https://formipeek.com/it/converters" />
        <link rel="alternate" hrefLang="nl" href="https://formipeek.com/nl/converters" />
        <link rel="alternate" hrefLang="pt" href="https://formipeek.com/pt/converters" />
        <link rel="alternate" hrefLang="vi" href="https://formipeek.com/vi/converters" />
        <link rel="alternate" hrefLang="tr" href="https://formipeek.com/tr/converters" />
        <link rel="alternate" hrefLang="ru" href="https://formipeek.com/ru/converters" />
        <link rel="alternate" hrefLang="ar" href="https://formipeek.com/ar/converters" />
        <link rel="alternate" hrefLang="th" href="https://formipeek.com/th/converters" />
        <link rel="alternate" hrefLang="ja" href="https://formipeek.com/ja/converters" />
        <link rel="alternate" hrefLang="zh" href="https://formipeek.com/zh/converters" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
        />
      </Helmet>

      <ConverterHub />
    </>
  );
}

