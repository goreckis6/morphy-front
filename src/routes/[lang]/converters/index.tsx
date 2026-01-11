import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 class="text-4xl font-bold text-gray-900 mb-8">File Converters</h1>
        <p class="text-lg text-gray-700">
          Browse our collection of 300+ file converters. Convert between any format instantly.
        </p>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'File Converters - FormiPeek | Convert 300+ Formats',
  meta: [
    {
      name: 'description',
      content: 'Convert files between 300+ formats instantly. Support for PDF, DOCX, images, videos, and more.',
    },
    {
      property: 'og:title',
      content: 'File Converters - FormiPeek',
    },
    {
      property: 'og:description',
      content: 'Convert files between 300+ formats instantly.',
    },
  ],
};
