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
  const canonicalUrl = `https://morphyhub.com${localizedPath}`;

  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: t('viewers_page.schema.name'),
    url: canonicalUrl,
    description: t('viewers_page.schema.description'),
    isPartOf: { '@id': 'https://morphyhub.com#website' },
    publisher: { '@id': 'https://morphyhub.com#organization' }
  };

  return (
    <>
      <Helmet>
        <title>{t('viewers_page.meta.title')}</title>
        <meta name="description" content={t('viewers_page.meta.description')} />
        <meta name="keywords" content={t('viewers_page.meta.keywords')} />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      </Helmet>

      <ViewersHub />
    </>
  );
}

