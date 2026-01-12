import { component$, $ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { BaseConverter } from '../../../components/BaseConverter.qwik';

export default component$(() => {
  const handleConvert = $(async (file: File): Promise<Blob> => {
    const formData = new FormData();
    formData.append('file', file);

    const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';
    const response = await fetch(apiUrl + '/api/convert/epub/docx', {
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
      title="EPUB to DOCX Converter"
      description="Convert your EPUB files to DOCX format quickly and securely. 100% free, no registration required."
      inputFormat="EPUB"
      outputFormat="DOCX"
      inputExtensions={['.epub']}
      outputExtensions={['.docx']}
      onConvert={handleConvert}
      features={[
        'Fast EPUB to DOCX conversion',
        'No file size limits',
        'Secure - files deleted after conversion',
        'Works in your browser',
        'No software installation needed',
        'Batch conversion support',
      ]}
      useCases={[
        'Convert EPUB documents to DOCX',
        'Prepare files for sharing',
        'Archive documents in DOCX format',
        'Batch process multiple files',
      ]}
    />
  );
});

export const head: DocumentHead = {
  title: 'EPUB to DOCX Converter - Free Online Tool | FormiPeek',
  meta: [
    { name: 'description', content: 'Convert EPUB to DOCX online for free. Fast, secure, and easy EPUB to DOCX conversion tool. No registration required.' },
    { property: 'og:title', content: 'EPUB to DOCX Converter - FormiPeek' },
    { property: 'og:description', content: 'Free online EPUB to DOCX converter. Fast, secure, and easy to use.' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'EPUB to DOCX Converter - FormiPeek' },
    { name: 'twitter:description', content: 'Convert EPUB to DOCX online for free.' },
  ],
};
