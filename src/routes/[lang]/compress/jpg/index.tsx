import { component$, $ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { BaseConverter } from '../../../../components/BaseConverter.qwik';

export default component$(() => {
  const handleCompress = $(async (file: File): Promise<Blob> => {
    const formData = new FormData();
    formData.append('file', file);

    const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';
    const response = await fetch(apiUrl + '/api/compress/jpg', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      let message = 'Compression failed';
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
      title="JPG Image Compressor"
      description="Compress your JPG images to reduce file size while maintaining quality. 100% free, no registration required."
      inputFormat="JPG"
      outputFormat="JPG"
      inputExtensions={['.jpg', '.jpeg']}
      outputExtensions={['.jpg']}
      onConvert={handleCompress}
      features={[
        'Reduce JPG file size',
        'Maintain image quality',
        'Secure - files deleted after compression',
        'Works in your browser',
        'No software installation needed',
        'Batch compression support',
      ]}
      useCases={[
        'Optimize images for web',
        'Reduce storage space',
        'Speed up website loading',
        'Prepare images for email',
      ]}
    />
  );
});

export const head: DocumentHead = {
  title: 'JPG Compressor - Free Online Tool | FormiPeek',
  meta: [
    { name: 'description', content: 'Compress JPG images online for free. Reduce file size while maintaining quality. Fast, secure, and easy to use.' },
    { property: 'og:title', content: 'JPG Compressor - FormiPeek' },
    { property: 'og:description', content: 'Free online JPG image compressor. Reduce file size while maintaining quality.' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'JPG Compressor - FormiPeek' },
    { name: 'twitter:description', content: 'Compress JPG images online for free.' },
  ],
};
