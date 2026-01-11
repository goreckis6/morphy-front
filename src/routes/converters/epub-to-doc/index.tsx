import { component$, $ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { BaseConverter } from '../../../components/BaseConverter.qwik';

export default component$(() => {
  const handleConvert = $(async (file: File): Promise<Blob> => {
    const formData = new FormData();
    formData.append('file', file);

    const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';
    const response = await fetch(apiUrl + '/api/convert/epub/doc', {
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
      title="EPUB to DOC Converter"
      description="Convert your EPUB files to DOC format quickly and securely. 100% free, no registration required."
      inputFormat="EPUB"
      outputFormat="DOC"
      inputExtensions={['.epub']}
      outputExtensions={['.doc']}
      onConvert={handleConvert}
      features={[
        'Fast EPUB to DOC conversion',
        'No file size limits',
        'Secure - files deleted after conversion',
        'Works in your browser',
        'No software installation needed',
        'Batch conversion support',
      ]}
      useCases={[
        'Convert EPUB documents to DOC',
        'Prepare files for sharing',
        'Archive documents in DOC format',
        'Batch process multiple files',
      ]}
    />
  );
});

export const head: DocumentHead = {
  title: 'EPUB to DOC Converter - Free Online Tool | FormiPeek',
  meta: [
    { name: 'description', content: 'Convert EPUB to DOC online for free. Fast, secure, and easy EPUB to DOC conversion tool. No registration required.' },
    { property: 'og:title', content: 'EPUB to DOC Converter - FormiPeek' },
    { property: 'og:description', content: 'Free online EPUB to DOC converter. Fast, secure, and easy to use.' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'EPUB to DOC Converter - FormiPeek' },
    { name: 'twitter:description', content: 'Convert EPUB to DOC online for free.' },
  ],
};
