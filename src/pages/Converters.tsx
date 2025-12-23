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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
        />
      </Helmet>

      <ConverterHub />
    </>
  );
}

