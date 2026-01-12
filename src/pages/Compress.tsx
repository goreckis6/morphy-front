import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { CompressHub } from '../components/CompressHub';
import { usePathLanguageSync } from '../hooks/usePathLanguageSync';
import { getLocalizedUrl } from '../i18n';
import '../locales/compressPage';

export default function Compress() {
  const { t, i18n } = useTranslation();
  usePathLanguageSync(i18n);

  const localizedPath = getLocalizedUrl('/compress', i18n.language);
  const canonicalUrl = `https://formipeek.com${localizedPath}`;

  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: t('compress_page.schema.name'),
    url: canonicalUrl,
    description: t('compress_page.schema.description'),
    isPartOf: { '@id': 'https://formipeek.com#website' },
    publisher: { '@id': 'https://formipeek.com#organization' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl
    }
  };

  return (
    <>
      <Helmet>
        <title>{t('compress_page.meta.title')}</title>
        <meta name="description" content={t('compress_page.meta.description')} />
        <meta name="keywords" content={t('compress_page.meta.keywords')} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en" href="https://formipeek.com/compress" />
        <link rel="alternate" hrefLang="pl" href="https://formipeek.com/pl/compress" />
        <link rel="alternate" hrefLang="de" href="https://formipeek.com/de/compress" />
        <link rel="alternate" hrefLang="id" href="https://formipeek.com/id/compress" />
        <link rel="alternate" hrefLang="sv" href="https://formipeek.com/sv/compress" />
        <link rel="alternate" hrefLang="es" href="https://formipeek.com/es/compress" />
        <link rel="alternate" hrefLang="fr" href="https://formipeek.com/fr/compress" />
        <link rel="alternate" hrefLang="it" href="https://formipeek.com/it/compress" />
        <link rel="alternate" hrefLang="nl" href="https://formipeek.com/nl/compress" />
        <link rel="alternate" hrefLang="pt" href="https://formipeek.com/pt/compress" />
        <link rel="alternate" hrefLang="vi" href="https://formipeek.com/vi/compress" />
        <link rel="alternate" hrefLang="tr" href="https://formipeek.com/tr/compress" />
        <link rel="alternate" hrefLang="ru" href="https://formipeek.com/ru/compress" />
        <link rel="alternate" hrefLang="ar" href="https://formipeek.com/ar/compress" />
        <link rel="alternate" hrefLang="th" href="https://formipeek.com/th/compress" />
        <link rel="alternate" hrefLang="ja" href="https://formipeek.com/ja/compress" />
        <link rel="alternate" hrefLang="zh" href="https://formipeek.com/zh/compress" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(pageJsonLd)
          }}
        />
      </Helmet>

      <CompressHub />
    </>
  );
}

