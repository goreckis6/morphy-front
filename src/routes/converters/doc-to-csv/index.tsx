import { component$, $ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { BaseConverter } from '../../../components/BaseConverter.qwik';

export default component$(() => {
  const handleConvert = $(async (file: File): Promise<Blob> => {
    const formData = new FormData();
    formData.append('file', file);

    const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';
    const response = await fetch(apiUrl + '/api/convert/doc/csv', {
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
      title="DOC to CSV Converter"
      description="Convert your DOC files to CSV format quickly and securely. 100% free, no registration required."
      inputFormat="DOC"
      outputFormat="CSV"
      inputExtensions={['.doc']}
      outputExtensions={['.csv']}
      onConvert={handleConvert}
      features={[
        'Fast DOC to CSV conversion',
        'No file size limits',
        'Secure - files deleted after conversion',
        'Works in your browser',
        'No software installation needed',
        'Batch conversion support',
      ]}
      useCases={[
        'Convert DOC documents to CSV',
        'Prepare files for sharing',
        'Archive documents in CSV format',
        'Batch process multiple files',
      ]}
    />
  );
});

export const head: DocumentHead = {
  title: 'DOC to CSV Converter - Free Online Tool | FormiPeek',
  meta: [
    { name: 'description', content: 'Convert DOC to CSV online for free. Fast, secure, and easy DOC to CSV conversion tool. No registration required.' },
    { property: 'og:title', content: 'DOC to CSV Converter - FormiPeek' },
    { property: 'og:description', content: 'Free online DOC to CSV converter. Fast, secure, and easy to use.' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'DOC to CSV Converter - FormiPeek' },
    { name: 'twitter:description', content: 'Convert DOC to CSV online for free.' },
  ],
};
