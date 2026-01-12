import { component$, $ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { BaseConverter } from '../../../components/BaseConverter.qwik';

export default component$(() => {
  const handleConvert = $(async (file: File): Promise<Blob> => {
    const formData = new FormData();
    formData.append('file', file);

    const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';
    const response = await fetch(apiUrl + '/api/convert/bmp/webp', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      let message = 'Conversion failed';
      try {
        const err = await response.json();
        message = err.detail || message;
      } catch {
        // Ignore JSON parse errors, use default message
      }
      throw new Error(message);
    }

    return await response.blob();
  });

  return (
    <BaseConverter
      title="BMP to WEBP Converter"
      description="Convert your BMP files to WEBP format quickly and securely. 100% free, no registration required."
      inputFormat="BMP"
      outputFormat="WEBP"
      inputExtensions={['.bmp']}
      outputExtensions={['.webp']}
      onConvert={handleConvert}
      features={[
        'Fast BMP to WEBP conversion',
        'No file size limits',
        'Secure - files deleted after conversion',
        'Works in your browser',
        'No software installation needed',
        'Batch conversion support',
      ]}
      useCases={[
        'Convert BMP documents to WEBP',
        'Prepare files for sharing',
        'Archive documents in WEBP format',
        'Batch process multiple files',
      ]}
    />
  );
});

export const head: DocumentHead = {
  title: 'BMP to WEBP Converter - Free Online Tool | FormiPeek',
  meta: [
    { name: 'description', content: 'Convert BMP to WEBP online for free. Fast, secure, and easy BMP to WEBP conversion tool. No registration required.' },
    { property: 'og:title', content: 'BMP to WEBP Converter - FormiPeek' },
    { property: 'og:description', content: 'Free online BMP to WEBP converter. Fast, secure, and easy to use.' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'BMP to WEBP Converter - FormiPeek' },
    { name: 'twitter:description', content: 'Convert BMP to WEBP online for free.' },
  ],
};
