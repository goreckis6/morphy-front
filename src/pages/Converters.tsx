import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ConverterHub } from '../components/ConverterHub';

export default function Converters() {
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Online File Converters",
    "url": "https://morphyimg.com/converters",
    "description": "Convert files between 300+ formats instantly. Free online file converters for images, documents, ebooks, and data files.",
    "isPartOf": { "@id": "https://morphyimg.com#website" },
    "publisher": { "@id": "https://morphyimg.com#organization" }
  };

  return (
    <>
      <Helmet>
        <title>Free Online File Converters - MorphyIMG | 300+ Format Support</title>
        <meta name="description" content="Convert files between 300+ formats instantly. Free online file converters for images, documents, ebooks, and data files. Batch processing supported." />
        <meta name="keywords" content="file converter, online converter, image converter, document converter, ebook converter, batch conversion, free converter" />
        <link rel="canonical" href="https://morphyimg.com/converters" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
        />
      </Helmet>

      <ConverterHub />
    </>
  );
}

