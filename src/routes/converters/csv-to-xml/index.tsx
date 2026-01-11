import { component$, $ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { BaseConverter } from '../../../components/BaseConverter.qwik';

export default component$(() => {
  const handleConvert = $(async (file: File): Promise<Blob> => {
    const formData = new FormData();
    formData.append('file', file);

    const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';
    const response = await fetch(apiUrl + '/api/convert/csv/xml', {
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
      title="CSV to XML Converter"
      description="Convert your CSV files to XML format quickly and securely. 100% free, no registration required."
      inputFormat="CSV"
      outputFormat="XML"
      inputExtensions={['.csv']}
      outputExtensions={['.xml']}
      onConvert={handleConvert}
      features={[
        'Fast CSV to XML conversion',
        'No file size limits',
        'Secure - files deleted after conversion',
        'Works in your browser',
        'No software installation needed',
        'Batch conversion support',
      ]}
      useCases={[
        'Convert CSV documents to XML',
        'Prepare files for sharing',
        'Archive documents in XML format',
        'Batch process multiple files',
      ]}
    />
  );
});

export const head: DocumentHead = {
  title: 'CSV to XML Converter - Free Online Tool | FormiPeek',
  meta: [
    { name: 'description', content: 'Convert CSV to XML online for free. Fast, secure, and easy CSV to XML conversion tool. No registration required.' },
    { property: 'og:title', content: 'CSV to XML Converter - FormiPeek' },
    { property: 'og:description', content: 'Free online CSV to XML converter. Fast, secure, and easy to use.' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'CSV to XML Converter - FormiPeek' },
    { name: 'twitter:description', content: 'Convert CSV to XML online for free.' },
  ],
};
