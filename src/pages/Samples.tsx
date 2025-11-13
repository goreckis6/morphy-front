import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SamplesHub } from '../components/SamplesHub';
import { useTranslation } from 'react-i18next';
import { getLocalizedUrl, usePathLanguageSync } from '../i18n';
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
    "isPartOf": { "@id": "https://morphyhub.com#website" },
    "publisher": { "@id": "https://morphyhub.com#organization" },
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
