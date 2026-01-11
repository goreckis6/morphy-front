import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { useLocation } from '@builder.io/qwik-city';

export default component$(() => {
  const loc = useLocation();
  const segs = loc.url.pathname.split('/').filter(Boolean);
  const lang = segs[0] || '';
  const prefix = lang ? `/${lang}` : '';

  return (
    <div class="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">FormiPeek</h1>
        <p class="text-gray-600 mb-8">Convert, view, and compress files online. Fast, secure, and free.</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <a href={`${prefix}/converters`} class="block rounded-lg border border-gray-200 bg-white p-4 hover:shadow-md transition-shadow">
            <div class="text-base font-semibold text-gray-800">Converters</div>
            <div class="text-sm text-gray-500">Convert between popular file formats</div>
          </a>
          <a href={`${prefix}/viewers`} class="block rounded-lg border border-gray-200 bg-white p-4 hover:shadow-md transition-shadow">
            <div class="text-base font-semibold text-gray-800">Viewers</div>
            <div class="text-sm text-gray-500">Preview files right in your browser</div>
          </a>
          <a href={`${prefix}/compress`} class="block rounded-lg border border-gray-200 bg-white p-4 hover:shadow-md transition-shadow">
            <div class="text-base font-semibold text-gray-800">Compress</div>
            <div class="text-sm text-gray-500">Reduce file size while preserving quality</div>
          </a>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'FormiPeek — Convert, View, Compress Files Online',
  meta: [
    { name: 'description', content: 'Convert, view, and compress files online with FormiPeek. Fast, secure, and free tools for images, documents, and more.' },
    { property: 'og:title', content: 'FormiPeek — Convert, View, Compress' },
    { property: 'og:description', content: 'Fast, secure, and free online tools.' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
};
