import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { useLocation } from '@builder.io/qwik-city';

const SUPPORTED_NON_EN_LANGS = ['pl','de','es','fr','it','pt','ru','ja','zh','ko','ar','hi','id','tr','nl','sv'];

const modules = import.meta.glob('./*/index.tsx', { eager: true });
const SLUGS = Object.keys(modules)
  .map((p) => p.split('/')[1])
  .sort();

function humanize(slug: string) {
  return slug.split('-').map((p) => p.toUpperCase()).join(' ');
}

export default component$(() => {
  const loc = useLocation();
  const segs = loc.url.pathname.split('/').filter(Boolean);
  const langPrefix = SUPPORTED_NON_EN_LANGS.includes(segs[0]) ? `/${segs[0]}` : '';

  return (
    <div class="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Format Viewers</h1>
        <p class="text-gray-600 mb-8">View various file formats directly in your browser.</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {SLUGS.length === 0 && (
            <div class="col-span-full text-gray-500">Viewer pages are coming soon.</div>
          )}
          {SLUGS.map((slug) => (
            <a key={slug} href={`${langPrefix}/viewers/${slug}`} class="block rounded-lg border border-gray-200 bg-white p-4 hover:shadow-md transition-shadow group">
              <div class="text-base font-semibold text-gray-800 group-hover:text-purple-600">{humanize(slug)}</div>
              <div class="text-sm text-gray-500">In-browser viewing</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'File Viewers - FormiPeek | View Many Formats',
  meta: [
    { name: 'description', content: 'View documents and images online. Fast and secure in-browser viewers.' },
    { property: 'og:title', content: 'File Viewers - FormiPeek' },
    { property: 'og:description', content: 'Open many file formats directly in your browser.' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
};
