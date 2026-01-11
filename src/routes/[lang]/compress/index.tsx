import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 class="text-4xl font-bold text-gray-900 mb-8">File Compression</h1>
        <p class="text-lg text-gray-700">
          Compress your files to reduce size while maintaining quality.
        </p>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'File Compression - FormiPeek | Compress JPG, PNG, PDF',
  meta: [
    {
      name: 'description',
      content: 'Compress JPG, PNG, PDF files to reduce size while maintaining quality. Fast and secure compression.',
    },
    {
      property: 'og:title',
      content: 'File Compression - FormiPeek',
    },
    {
      property: 'og:description',
      content: 'Compress JPG, PNG, PDF files to reduce size while maintaining quality.',
    },
  ],
};
