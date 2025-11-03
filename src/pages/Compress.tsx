import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CompressHub } from '../components/CompressHub';

export default function Compress() {
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Online File Compression Tools",
    "url": "https://morphyimg.com/compress",
    "description": "Compress files to reduce size while maintaining quality. Free online compression tools for images, documents, and more. Batch processing supported.",
    "isPartOf": { "@id": "https://morphyimg.com#website" },
    "publisher": { "@id": "https://morphyimg.com#organization" }
  };

  return (
    <>
      <Helmet>
        <title>Free Online File Compression Tools - MorphyIMG | Reduce File Sizes</title>
        <meta name="description" content="Compress files to reduce size while maintaining quality. Free online compression tools for images, documents, and more. Batch processing supported." />
        <meta name="keywords" content="file compressor, online compressor, image compression, compress jpg, compress images, reduce file size, batch compression, free compressor" />
        <link rel="canonical" href="https://morphyimg.com/compress" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
        />
      </Helmet>

      <CompressHub />
    </>
  );
}

