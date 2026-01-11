import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class="min-h-screen bg-gradient-to-br from-orange-50 via-white to-purple-50">
      <header class="bg-white shadow-lg sticky top-0 z-40">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">
            <a href="/" class="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity">
              <span class="text-xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                FormiPeek
              </span>
            </a>
            <nav class="flex items-center space-x-6">
              <a href="/converters" class="text-gray-700 hover:text-blue-600 transition-colors">
                Converters
              </a>
              <a href="/viewers" class="text-gray-700 hover:text-purple-600 transition-colors">
                Viewers
              </a>
              <a href="/compress" class="text-gray-700 hover:text-orange-600 transition-colors">
                Compress
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="text-center">
          <h1 class="text-5xl font-bold text-gray-900 mb-6">
            Free Online File Converter
          </h1>
          <p class="text-xl text-gray-600 mb-8">
            Convert files between 300+ formats instantly. Fast, secure, and free.
          </p>
          <div class="flex justify-center gap-4">
            <a
              href="/converters"
              class="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all"
            >
              Start Converting
            </a>
            <a
              href="/viewers"
              class="bg-white text-gray-700 px-8 py-4 rounded-lg font-semibold border-2 border-gray-300 hover:border-purple-600 transition-all"
            >
              View Files
            </a>
          </div>
        </div>

        <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-xl shadow-lg">
            <h3 class="text-xl font-semibold mb-3">⚡ Lightning Fast</h3>
            <p class="text-gray-600">
              Convert files instantly with optimized conversion engines
            </p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-lg">
            <h3 class="text-xl font-semibold mb-3">🔒 100% Secure</h3>
            <p class="text-gray-600">
              Your files are processed securely and never stored
            </p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-lg">
            <h3 class="text-xl font-semibold mb-3">🎯 High Quality</h3>
            <p class="text-gray-600">
              Maintain image quality and document structure
            </p>
          </div>
        </div>
      </main>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'FormiPeek - Free Online File Converter | Convert 300+ Formats Instantly',
  meta: [
    {
      name: 'description',
      content: 'Convert files between 300+ formats instantly with FormiPeek. Fast, secure, and free file conversion service for images, documents, ebooks, and data files.',
    },
    {
      property: 'og:title',
      content: 'FormiPeek - Free Online File Converter',
    },
    {
      property: 'og:description',
      content: 'Convert files between 300+ formats instantly. Fast, secure, and free file conversion service.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: 'FormiPeek - Free Online File Converter',
    },
  ],
};
