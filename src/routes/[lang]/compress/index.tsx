import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { useLocation } from '@builder.io/qwik-city';

export default component$(() => {
  const loc = useLocation();
  const segs = loc.url.pathname.split('/').filter(Boolean);
  const langPrefix = segs[0] || '';

  return (
    <div class="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">File Compression</h1>
        <p class="text-gray-600 mb-8">Compress files to reduce size while preserving quality.</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <a
            href={`/${langPrefix}/compress/jpg`}
            class="block rounded-lg border border-gray-200 bg-white p-4 hover:shadow-md transition-shadow group"
          >
            <div class="text-base font-semibold text-gray-800 group-hover:text-orange-600">JPG</div>
            <div class="text-sm text-gray-500">Online compression</div>
          </a>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'File Compression - FormiPeek | Compress Files Online',
  meta: [
    { name: 'description', content: 'Compress images, PDFs, and more online. Fast and secure.' },
    { property: 'og:title', content: 'File Compression - FormiPeek' },
    { property: 'og:description', content: 'Reduce file size while keeping quality.' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
};
