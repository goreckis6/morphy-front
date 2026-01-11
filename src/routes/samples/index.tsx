import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { useLocation } from '@builder.io/qwik-city';

const SUPPORTED_NON_EN_LANGS = ['pl','de','es','fr','it','pt','ru','ja','zh','ko','ar','hi','id','tr','nl','sv'];

export default component$(() => {
  const loc = useLocation();
  const segs = loc.url.pathname.split('/').filter(Boolean);
  const langPrefix = SUPPORTED_NON_EN_LANGS.includes(segs[0]) ? `/${segs[0]}` : '';

  return (
    <div class="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 class="text-4xl font-bold text-gray-900 mb-6">Sample Files</h1>
        <p class="text-lg text-gray-700 mb-8">
          Download sample files in various formats for testing purposes.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <a href={`${langPrefix}/samples/images`} class="block rounded-lg border border-gray-200 bg-white p-4 hover:shadow-md transition-shadow">
            <div class="text-base font-semibold text-gray-800">Images</div>
            <div class="text-sm text-gray-500">PNG, JPG, WebP samples</div>
          </a>
          <a href={`${langPrefix}/samples/documents`} class="block rounded-lg border border-gray-200 bg-white p-4 hover:shadow-md transition-shadow">
            <div class="text-base font-semibold text-gray-800">Documents</div>
            <div class="text-sm text-gray-500">PDF, DOCX, XLSX samples</div>
          </a>
          <a href={`${langPrefix}/samples/data`} class="block rounded-lg border border-gray-200 bg-white p-4 hover:shadow-md transition-shadow">
            <div class="text-base font-semibold text-gray-800">Data Files</div>
            <div class="text-sm text-gray-500">CSV, JSON, XML samples</div>
          </a>
        </div>
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
    { property: 'og:title', content: 'Sample Files - FormiPeek' },
    { property: 'og:description', content: 'Download sample files in various formats for testing purposes.' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
};