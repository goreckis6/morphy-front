import { component$, $ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { BaseConverter } from '~/components/BaseConverter.qwik';

export default component$(() => {
  const handleConvert = $(async (file: File): Promise<Blob> => {
    // This would call the actual API
    // For now, just return the file as-is (placeholder)
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL || 'https://api.formipeek.com'}/api/convert/csv/docx`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Conversion failed');
    }

    return await response.blob();
  });

  return (
    <BaseConverter
      title="CSV to DOCX Converter"
      description="Convert CSV spreadsheet files to Microsoft Word DOCX documents instantly. Free, fast, and secure."
      inputFormat="CSV"
      outputFormat="DOCX"
      inputExtensions={['csv']}
      outputExtensions={['docx']}
      onConvert={handleConvert}
      features={[
        'Instant conversion from CSV to DOCX',
        'Preserve data structure and formatting',
        'No file size limits',
        '100% secure - files deleted after conversion',
        'No registration required',
      ]}
      useCases={[
        'Convert spreadsheet data for Word documents',
        'Create formatted reports from CSV data',
        'Share data in document format',
        'Archive data in DOCX format',
      ]}
    />
  );
});

export const head: DocumentHead = {
  title: 'CSV to DOCX Converter - Free Online | FormiPeek',
  meta: [
    {
      name: 'description',
      content: 'Convert CSV files to DOCX format online for free. Fast, secure, and easy to use. No registration required.',
    },
    {
      property: 'og:title',
      content: 'CSV to DOCX Converter - FormiPeek',
    },
    {
      property: 'og:description',
      content: 'Convert CSV spreadsheet files to Microsoft Word DOCX documents instantly.',
    },
    {
      name: 'twitter:card',
      content: 'summary',
    },
  ],
};
