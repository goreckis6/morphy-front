import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { useLocation } from '@builder.io/qwik-city';

export default component$(() => {
  const loc = useLocation();
  const segs = loc.url.pathname.split('/').filter(Boolean);
  const langPrefix = segs[0] || '';

  const converters = [
    {
      slug: 'csv-to-docx',
      name: 'CSV to DOCX',
      description: 'Convert CSV files to DOCX format',
    },
  ];

  function humanize(slug: string) {
    return slug.split('-').map((p) => p.toUpperCase()).join(' ');
  }

  return (
    <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">File Converters</h1>
        <p class="text-gray-600 mb-8">Convert between popular file formats quickly and securely.</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {converters.map((converter) => (
            <a
              key={converter.slug}
              href={`/${langPrefix}/converters/${converter.slug}`}
              class="block rounded-lg border border-gray-200 bg-white p-4 hover:shadow-md transition-shadow group"
            >
              <div class="text-base font-semibold text-gray-800 group-hover:text-blue-600">
                {humanize(converter.slug)}
              </div>
              <div class="text-sm text-gray-500">{converter.description}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'File Converters - FormiPeek | Convert Files Online',
  meta: [
    { name: 'description', content: 'Convert between popular file formats online. Fast, secure, and free conversion tools.' },
    { property: 'og:title', content: 'File Converters - FormiPeek' },
    { property: 'og:description', content: 'Convert files between popular formats quickly and securely.' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
};
