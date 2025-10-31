import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ViewersHub } from '../components/ViewersHub';

export default function Viewers() {
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "File Viewers",
    "url": "https://morphyimg.com/viewers",
    "description": "View and preview files directly in your browser. Support for images, documents, spreadsheets, and more. No download required.",
    "isPartOf": { "@id": "https://morphyimg.com#website" },
    "publisher": { "@id": "https://morphyimg.com#organization" }
  };

  return (
    <>
      <Helmet>
        <title>Free Online File Viewers - MorphyIMG | View Files in Browser</title>
        <meta name="description" content="View and preview files directly in your browser. Support for images, documents, spreadsheets, and more. No download required." />
        <meta name="keywords" content="file viewer, online viewer, image viewer, document viewer, pdf viewer, excel viewer, free viewer" />
        <link rel="canonical" href="https://morphyimg.com/viewers" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
        />
      </Helmet>

      <ViewersHub />
    </>
  );
}

