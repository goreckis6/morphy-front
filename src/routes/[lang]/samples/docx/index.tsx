import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  const sampleFiles = [
    {
      name: 'Sample Document.docx',
      size: '45 KB',
      description: 'A simple sample DOCX document for testing',
      downloadUrl: '/samples/docx/sample-document.docx',
    },
  ];

  return (
    <div class="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="mb-8">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">DOCX Sample Files</h1>
          <p class="text-lg text-gray-600">Download sample DOCX files for testing purposes.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleFiles.map((file) => (
            <div key={file.name} class="bg-white rounded-xl shadow-lg p-6">
              <div class="mb-4">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">{file.name}</h3>
                <p class="text-sm text-gray-600 mb-2">{file.description}</p>
                <p class="text-xs text-gray-500">Size: {file.size}</p>
              </div>
              <a
                href={file.downloadUrl}
                download
                class="inline-block w-full text-center px-4 py-2 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors"
              >
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'DOCX Sample Files - Download Test Files | FormiPeek',
  meta: [
    { name: 'description', content: 'Download sample DOCX files for testing. Free test files in DOCX format.' },
    { property: 'og:title', content: 'DOCX Sample Files - FormiPeek' },
    { property: 'og:description', content: 'Download sample DOCX files for testing purposes.' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
};
