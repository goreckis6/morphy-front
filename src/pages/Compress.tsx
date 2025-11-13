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
  const canonicalUrl = `https://morphyhub.com${localizedPath}`;

  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: t('compress_page.schema.name'),
    url: canonicalUrl,
    description: t('compress_page.schema.description'),
    isPartOf: { '@id': 'https://morphyhub.com#website' },
    publisher: { '@id': 'https://morphyhub.com#organization' },
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

