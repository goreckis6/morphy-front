import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SamplesHub } from '../components/SamplesHub';

export default function Samples() {
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Free Sample Files for Download and Testing",
    "url": "https://morphyhub.com/samples",
    "description": "Download free sample files of various types — images, documents, audio, video, and archives. Use them for testing, demos, or software validation on any platform.",
    "isPartOf": { "@id": "https://morphyhub.com#website" },
    "publisher": { "@id": "https://morphyhub.com#organization" },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://morphyhub.com/samples"
    }
  };

  return (
    <>
      <Helmet>
      <title>Free Sample Files – Download Test Files | MorphyHub</title>
        <meta
          name="description"
          content="Get free sample images, documents, and archives to test MorphyHub converters, compressors, and viewers."
        />
        <meta name="keywords" content="sample files, test files, download samples, free test files, DOCX samples, file samples, test files for conversion" />
        <link rel="canonical" href="https://morphyhub.com/samples" />
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

