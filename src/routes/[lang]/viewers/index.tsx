import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 class="text-4xl font-bold text-gray-900 mb-8">File Viewers</h1>
        <p class="text-lg text-gray-700">
          View any file format directly in your browser without downloading software.
        </p>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'File Viewers - FormiPeek | View Any Format Online',
  meta: [
    {
      name: 'description',
      content: 'View any file format online without downloading software. Support for RAW, PDF, Office documents, and more.',
    },
    {
      property: 'og:title',
      content: 'File Viewers - FormiPeek',
    },
    {
      property: 'og:description',
      content: 'View any file format online without downloading software.',
    },
  ],
};
