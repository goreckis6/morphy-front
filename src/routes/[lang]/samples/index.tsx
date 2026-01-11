import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 class="text-4xl font-bold text-gray-900 mb-8">Sample Files</h1>
        <p class="text-lg text-gray-700">
          Download sample files in various formats for testing purposes.
        </p>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Sample Files - FormiPeek | Download Test Files',
  meta: [
    {
      name: 'description',
      content: 'Download sample files in various formats for testing. Free test files for PDF, DOCX, images, and more.',
    },
    {
      property: 'og:title',
      content: 'Sample Files - FormiPeek',
    },
    {
      property: 'og:description',
      content: 'Download sample files in various formats for testing purposes.',
    },
  ],
};
