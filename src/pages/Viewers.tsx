import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { ViewersHub } from '../components/ViewersHub';
import { usePathLanguageSync } from '../hooks/usePathLanguageSync';
import { getLocalizedUrl } from '../i18n';
import '../locales/viewersPage';

export default function Viewers() {
  const { t, i18n } = useTranslation();
  usePathLanguageSync(i18n);

  const localizedPath = getLocalizedUrl('/viewers', i18n.language);
  const canonicalUrl = `https://formipeek.com${localizedPath}`;

  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: t('viewers_page.schema.name'),
    url: canonicalUrl,
    description: t('viewers_page.schema.description'),
    isPartOf: { '@id': 'https://formipeek.com#website' },
    publisher: { '@id': 'https://formipeek.com#organization' }
  };

  return (
    <>
      <Helmet>
        <title>{t('viewers_page.meta.title')}</title>
        <meta name="description" content={t('viewers_page.meta.description')} />
        <meta name="keywords" content={t('viewers_page.meta.keywords')} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en" href="https://formipeek.com/viewers" />
        <link rel="alternate" hrefLang="pl" href="https://formipeek.com/pl/viewers" />
        <link rel="alternate" hrefLang="de" href="https://formipeek.com/de/viewers" />
        <link rel="alternate" hrefLang="id" href="https://formipeek.com/id/viewers" />
        <link rel="alternate" hrefLang="sv" href="https://formipeek.com/sv/viewers" />
        <link rel="alternate" hrefLang="es" href="https://formipeek.com/es/viewers" />
        <link rel="alternate" hrefLang="fr" href="https://formipeek.com/fr/viewers" />
        <link rel="alternate" hrefLang="it" href="https://formipeek.com/it/viewers" />
        <link rel="alternate" hrefLang="nl" href="https://formipeek.com/nl/viewers" />
        <link rel="alternate" hrefLang="pt" href="https://formipeek.com/pt/viewers" />
        <link rel="alternate" hrefLang="vi" href="https://formipeek.com/vi/viewers" />
        <link rel="alternate" hrefLang="tr" href="https://formipeek.com/tr/viewers" />
        <link rel="alternate" hrefLang="ru" href="https://formipeek.com/ru/viewers" />
        <link rel="alternate" hrefLang="ar" href="https://formipeek.com/ar/viewers" />
        <link rel="alternate" hrefLang="th" href="https://formipeek.com/th/viewers" />
        <link rel="alternate" hrefLang="ja" href="https://formipeek.com/ja/viewers" />
        <link rel="alternate" hrefLang="zh" href="https://formipeek.com/zh/viewers" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      </Helmet>

      <ViewersHub />
    </>
  );
}

