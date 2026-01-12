import { component$, $ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { BaseConverter } from '../../../components/BaseConverter.qwik';

export default component$(() => {
  const handleConvert = $(async (file: File): Promise<Blob> => {
    const formData = new FormData();
    formData.append('file', file);

    const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';
    const response = await fetch(apiUrl + '/api/convert/heic/png', {
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
      title="HEIC to PNG Converter"
      description="Convert your HEIC files to PNG format quickly and securely. 100% free, no registration required."
      inputFormat="HEIC"
      outputFormat="PNG"
      inputExtensions={['.heic']}
      outputExtensions={['.png']}
      onConvert={handleConvert}
      features={[
        'Fast HEIC to PNG conversion',
        'No file size limits',
        'Secure - files deleted after conversion',
        'Works in your browser',
        'No software installation needed',
        'Batch conversion support',
      ]}
      useCases={[
        'Convert HEIC documents to PNG',
        'Prepare files for sharing',
        'Archive documents in PNG format',
        'Batch process multiple files',
      ]}
    />
  );
});

export const head: DocumentHead = {
  title: 'HEIC to PNG Converter - Free Online Tool | FormiPeek',
  meta: [
    { name: 'description', content: 'Convert HEIC to PNG online for free. Fast, secure, and easy HEIC to PNG conversion tool. No registration required.' },
    { property: 'og:title', content: 'HEIC to PNG Converter - FormiPeek' },
    { property: 'og:description', content: 'Free online HEIC to PNG converter. Fast, secure, and easy to use.' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'HEIC to PNG Converter - FormiPeek' },
    { name: 'twitter:description', content: 'Convert HEIC to PNG online for free.' },
  ],
};
