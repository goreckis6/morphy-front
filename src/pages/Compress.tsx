import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CompressHub } from '../components/CompressHub';

export default function Compress() {
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Online File Compressor",
    "url": "https://morphyimg.com/compress",
    "description": "Compress images, PDFs, videos, and more directly in your browser with MorphyIMG. Reduce file size while keeping great quality — fast and secure.",
    "isPartOf": { "@id": "https://morphyimg.com#website" },
    "publisher": { "@id": "https://morphyimg.com#organization" },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://morphyimg.com/compress"
    }
  };

  return (
    <>
      <Helmet>
        <title>Online File Compressor – Reduce File Size | MorphyIMG</title>
        <meta
          name="description"
          content="Compress images, PDFs, videos, and documents online. MorphyIMG makes your files smaller and faster to share — without losing quality."
        />
        <meta name="keywords" content="file compressor, online compressor, image compression, compress jpg, compress images, reduce file size, batch compression, free compressor, video compression" />
        <link rel="canonical" href="https://morphyimg.com/compress" />
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

