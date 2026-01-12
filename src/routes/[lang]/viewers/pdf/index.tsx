import { component$, useSignal, $ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  const selectedFile = useSignal<File | null>(null);
  const fileUrl = useSignal<string | null>(null);

  const handleFileSelect = $((event: Event) => {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file && file.type === 'application/pdf') {
      selectedFile.value = file;
      const url = URL.createObjectURL(file);
      fileUrl.value = url;
    }
  });

  return (
    <div class="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="mb-8">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">PDF Viewer</h1>
          <p class="text-lg text-gray-600">View PDF files directly in your browser. No installation required.</p>
        </div>

        <div class="bg-white rounded-2xl shadow-xl p-8">
          {!selectedFile.value ? (
            <div class="border-3 border-dashed border-gray-300 rounded-xl p-12 text-center">
              <input
                type="file"
                accept=".pdf"
                onChange$={handleFileSelect}
                class="hidden"
                id="pdf-upload"
              />
              <label
                for="pdf-upload"
                class="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 cursor-pointer transition-colors"
              >
                Select PDF File
              </label>
            </div>
          ) : (
            <div class="space-y-4">
              <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p class="font-semibold text-gray-900">{selectedFile.value.name}</p>
                  <p class="text-sm text-gray-500">
                    {(selectedFile.value.size / 1024).toFixed(2)} KB
                  </p>
                </div>
                <button
                  onClick$={() => {
                    selectedFile.value = null;
                    if (fileUrl.value) {
                      URL.revokeObjectURL(fileUrl.value);
                      fileUrl.value = null;
                    }
                  }}
                  class="text-red-600 hover:text-red-700 text-sm font-medium"
                >
                  Remove
                </button>
              </div>
              {fileUrl.value && (
                <iframe
                  src={fileUrl.value}
                  class="w-full h-[600px] border border-gray-200 rounded-lg"
                  title="PDF Viewer"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'PDF Viewer - Free Online Tool | FormiPeek',
  meta: [
    { name: 'description', content: 'View PDF files online for free. No installation required. Fast and secure in-browser PDF viewer.' },
    { property: 'og:title', content: 'PDF Viewer - FormiPeek' },
    { property: 'og:description', content: 'Free online PDF viewer. View PDF files directly in your browser.' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
};
