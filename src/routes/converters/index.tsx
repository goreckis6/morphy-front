import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { useLocation } from '@builder.io/qwik-city';

const SUPPORTED_NON_EN_LANGS = ['pl','de','es','fr','it','pt','ru','ja','zh','ko','ar','hi','id','tr','nl','sv'];

const modules = import.meta.glob('./*/index.tsx', { eager: true });
const SLUGS = Object.keys(modules)
  .map((p) => p.split('/')[1])
  .sort();

function humanize(slug: string) {
  const parts = slug.split('-');
  return parts
    .map((p) => (p === 'to' ? 'to' : p.toUpperCase()))
    .join(' ');
}

export default component$(() => {
  const loc = useLocation();
  const segs = loc.url.pathname.split('/').filter(Boolean);
  const langPrefix = SUPPORTED_NON_EN_LANGS.includes(segs[0]) ? `/${segs[0]}` : '';

  return (
    <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">File Converters</h1>
        <p class="text-gray-600 mb-8">Browse available format converters. English content is shown for now; language UI will follow.</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {SLUGS.map((slug) => (
            <a
              key={slug}
              href={`${langPrefix}/converters/${slug}`}
              class="block rounded-lg border border-gray-200 bg-white p-4 hover:shadow-md transition-shadow group"
            >
              <div class="text-base font-semibold text-gray-800 group-hover:text-blue-600">
                {humanize(slug)}
              </div>
              <div class="text-sm text-gray-500">Fast, secure, and free</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'File Converters - FormiPeek | Convert 50+ Formats',
  meta: [
    { name: 'description', content: 'Browse and use 50+ free online file converters. Fast, secure, and easy. No registration required.' },
    { property: 'og:title', content: 'File Converters - FormiPeek' },
    { property: 'og:description', content: 'Convert files between formats online for free.' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
};
