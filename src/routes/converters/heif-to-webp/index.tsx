import { component$, $ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { BaseConverter } from '../../../components/BaseConverter.qwik';

export default component$(() => {
  const handleConvert = $(async (file: File): Promise<Blob> => {
    const formData = new FormData();
    formData.append('file', file);

    const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';
    const response = await fetch(apiUrl + '/api/convert/heif/webp', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      let message = 'Conversion failed';
      try { const err = await response.json(); message = err.detail || message; } catch {}
      throw new Error(message);
    }

    return await response.blob();
  });

  return (
    <BaseConverter
      title="HEIF to WEBP Converter"
      description="Convert your HEIF files to WEBP format quickly and securely. 100% free, no registration required."
      inputFormat="HEIF"
      outputFormat="WEBP"
      inputExtensions={['.heif']}
      outputExtensions={['.webp']}
      onConvert={handleConvert}
      features={[
        'Fast HEIF to WEBP conversion',
        'No file size limits',
        'Secure - files deleted after conversion',
        'Works in your browser',
        'No software installation needed',
        'Batch conversion support',
      ]}
      useCases={[
        'Convert HEIF documents to WEBP',
        'Prepare files for sharing',
        'Archive documents in WEBP format',
        'Batch process multiple files',
      ]}
    />
  );
});

export const head: DocumentHead = {
  title: 'HEIF to WEBP Converter - Free Online Tool | FormiPeek',
  meta: [
    { name: 'description', content: 'Convert HEIF to WEBP online for free. Fast, secure, and easy HEIF to WEBP conversion tool. No registration required.' },
    { property: 'og:title', content: 'HEIF to WEBP Converter - FormiPeek' },
    { property: 'og:description', content: 'Free online HEIF to WEBP converter. Fast, secure, and easy to use.' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'HEIF to WEBP Converter - FormiPeek' },
    { name: 'twitter:description', content: 'Convert HEIF to WEBP online for free.' },
  ],
};
