import { component$, $ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { BaseConverter } from '../../../components/BaseConverter.qwik';

export default component$(() => {
  const handleConvert = $(async (file: File): Promise<Blob> => {
    const formData = new FormData();
    formData.append('file', file);

    const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';
    const response = await fetch(apiUrl + '/api/convert/cr2/ico', {
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
      title="CR2 to ICO Converter"
      description="Convert your CR2 files to ICO format quickly and securely. 100% free, no registration required."
      inputFormat="CR2"
      outputFormat="ICO"
      inputExtensions={['.cr2']}
      outputExtensions={['.ico']}
      onConvert={handleConvert}
      features={[
        'Fast CR2 to ICO conversion',
        'No file size limits',
        'Secure - files deleted after conversion',
        'Works in your browser',
        'No software installation needed',
        'Batch conversion support',
      ]}
      useCases={[
        'Convert CR2 documents to ICO',
        'Prepare files for sharing',
        'Archive documents in ICO format',
        'Batch process multiple files',
      ]}
    />
  );
});

export const head: DocumentHead = {
  title: 'CR2 to ICO Converter - Free Online Tool | FormiPeek',
  meta: [
    { name: 'description', content: 'Convert CR2 to ICO online for free. Fast, secure, and easy CR2 to ICO conversion tool. No registration required.' },
    { property: 'og:title', content: 'CR2 to ICO Converter - FormiPeek' },
    { property: 'og:description', content: 'Free online CR2 to ICO converter. Fast, secure, and easy to use.' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'CR2 to ICO Converter - FormiPeek' },
    { name: 'twitter:description', content: 'Convert CR2 to ICO online for free.' },
  ],
};
