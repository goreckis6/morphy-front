import { component$, $ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { BaseConverter } from '../../../components/BaseConverter.qwik';

export default component$(() => {
  const handleConvert = $(async (file: File): Promise<Blob> => {
    const formData = new FormData();
    formData.append('file', file);

    const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';
    const response = await fetch(apiUrl + '/api/convert/csv/odt', {
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
      title="CSV to ODT Converter"
      description="Convert your CSV files to ODT format quickly and securely. 100% free, no registration required."
      inputFormat="CSV"
      outputFormat="ODT"
      inputExtensions={['.csv']}
      outputExtensions={['.odt']}
      onConvert={handleConvert}
      features={[
        'Fast CSV to ODT conversion',
        'No file size limits',
        'Secure - files deleted after conversion',
        'Works in your browser',
        'No software installation needed',
        'Batch conversion support',
      ]}
      useCases={[
        'Convert CSV documents to ODT',
        'Prepare files for sharing',
        'Archive documents in ODT format',
        'Batch process multiple files',
      ]}
    />
  );
});

export const head: DocumentHead = {
  title: 'CSV to ODT Converter - Free Online Tool | FormiPeek',
  meta: [
    { name: 'description', content: 'Convert CSV to ODT online for free. Fast, secure, and easy CSV to ODT conversion tool. No registration required.' },
    { property: 'og:title', content: 'CSV to ODT Converter - FormiPeek' },
    { property: 'og:description', content: 'Free online CSV to ODT converter. Fast, secure, and easy to use.' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'CSV to ODT Converter - FormiPeek' },
    { name: 'twitter:description', content: 'Convert CSV to ODT online for free.' },
  ],
};
