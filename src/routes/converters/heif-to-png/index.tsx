import { component$, $ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { BaseConverter } from '../../../components/BaseConverter.qwik';

export default component$(() => {
  const handleConvert = $(async (file: File): Promise<Blob> => {
    const formData = new FormData();
    formData.append('file', file);

    const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';
    const response = await fetch(apiUrl + '/api/convert/heif/png', {
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
      title="HEIF to PNG Converter"
      description="Convert your HEIF files to PNG format quickly and securely. 100% free, no registration required."
      inputFormat="HEIF"
      outputFormat="PNG"
      inputExtensions={['.heif']}
      outputExtensions={['.png']}
      onConvert={handleConvert}
      features={[
        'Fast HEIF to PNG conversion',
        'No file size limits',
        'Secure - files deleted after conversion',
        'Works in your browser',
        'No software installation needed',
        'Batch conversion support',
      ]}
      useCases={[
        'Convert HEIF documents to PNG',
        'Prepare files for sharing',
        'Archive documents in PNG format',
        'Batch process multiple files',
      ]}
    />
  );
});

export const head: DocumentHead = {
  title: 'HEIF to PNG Converter - Free Online Tool | FormiPeek',
  meta: [
    { name: 'description', content: 'Convert HEIF to PNG online for free. Fast, secure, and easy HEIF to PNG conversion tool. No registration required.' },
    { property: 'og:title', content: 'HEIF to PNG Converter - FormiPeek' },
    { property: 'og:description', content: 'Free online HEIF to PNG converter. Fast, secure, and easy to use.' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'HEIF to PNG Converter - FormiPeek' },
    { name: 'twitter:description', content: 'Convert HEIF to PNG online for free.' },
  ],
};
