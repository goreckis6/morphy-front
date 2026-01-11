import { component$, useSignal, $, type QRL } from '@builder.io/qwik';
import { Upload, Download, RefreshCw, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';

interface BaseConverterProps {
  title: string;
  description: string;
  inputFormat: string;
  outputFormat: string;
  inputExtensions: string[];
  outputExtensions: string[];
  onConvert: QRL<(file: File) => Promise<Blob>>;
  features: string[];
  useCases: string[];
}

export const BaseConverter = component$<BaseConverterProps>(({
  title,
  description,
  inputFormat,
  outputFormat,
  inputExtensions,
  outputExtensions,
  onConvert,
  features,
  useCases
}) => {
  const selectedFile = useSignal<File | null>(null);
  const convertedFile = useSignal<Blob | null>(null);
  const isConverting = useSignal(false);
  const error = useSignal<string | null>(null);

  const handleFileSelect = $((event: Event) => {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      selectedFile.value = file;
      error.value = null;
      convertedFile.value = null;
    }
  });

  const handleConvert = $(async () => {
    if (!selectedFile.value) return;

    isConverting.value = true;
    error.value = null;

    try {
      const result = await onConvert(selectedFile.value);
      convertedFile.value = result;
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Conversion failed';
    } finally {
      isConverting.value = false;
    }
  });

  const handleDownload = $(() => {
    if (!convertedFile.value) return;

    const url = URL.createObjectURL(convertedFile.value);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${selectedFile.value?.name.split('.')[0] || 'converted'}.${outputFormat.toLowerCase()}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });

  return (
    <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div class="mb-8">
          <a href="/" class="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft class="w-5 h-5 mr-2" />
            Back to Home
          </a>
          <h1 class="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
          <p class="text-lg text-gray-600">{description}</p>
        </div>

        {/* Converter Card */}
        <div class="bg-white rounded-2xl shadow-xl p-8 mb-8">
          {/* File Upload */}
          {!selectedFile.value && (
            <div class="border-3 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-blue-400 transition-colors">
              <Upload class="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <p class="text-lg font-semibold text-gray-700 mb-2">
                Drop your {inputFormat} file here
              </p>
              <p class="text-sm text-gray-500 mb-4">
                or click to browse
              </p>
              <input
                type="file"
                accept={inputExtensions.map(ext => `.${ext}`).join(',')}
                onChange$={handleFileSelect}
                class="hidden"
                id="file-upload"
              />
              <label
                for="file-upload"
                class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 cursor-pointer transition-colors"
              >
                Select File
              </label>
            </div>
          )}

          {/* Selected File */}
          {selectedFile.value && !convertedFile.value && (
            <div class="space-y-6">
              <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div class="flex items-center space-x-3">
                  <CheckCircle class="w-6 h-6 text-green-500" />
                  <div>
                    <p class="font-semibold text-gray-900">{selectedFile.value.name}</p>
                    <p class="text-sm text-gray-500">
                      {(selectedFile.value.size / 1024).toFixed(2)} KB
                    </p>
                  </div>
                </div>
                <button
                  onClick$={() => selectedFile.value = null}
                  class="text-red-600 hover:text-red-700 text-sm font-medium"
                >
                  Remove
                </button>
              </div>

              <button
                onClick$={handleConvert}
                disabled={isConverting.value}
                class="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isConverting.value ? (
                  <>
                    <RefreshCw class="w-5 h-5 animate-spin" />
                    <span>Converting...</span>
                  </>
                ) : (
                  <>
                    <RefreshCw class="w-5 h-5" />
                    <span>Convert to {outputFormat}</span>
                  </>
                )}
              </button>
            </div>
          )}

          {/* Error */}
          {error.value && (
            <div class="flex items-center space-x-3 p-4 bg-red-50 rounded-lg border border-red-200">
              <AlertCircle class="w-6 h-6 text-red-500 flex-shrink-0" />
              <p class="text-red-700">{error.value}</p>
            </div>
          )}

          {/* Success */}
          {convertedFile.value && (
            <div class="space-y-6">
              <div class="flex items-center justify-center p-8 bg-green-50 rounded-lg border border-green-200">
                <CheckCircle class="w-12 h-12 text-green-500 mr-4" />
                <div>
                  <p class="text-lg font-semibold text-gray-900">Conversion Complete!</p>
                  <p class="text-sm text-gray-600">Your file is ready to download</p>
                </div>
              </div>

              <button
                onClick$={handleDownload}
                class="w-full py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <Download class="w-5 h-5" />
                <span>Download {outputFormat}</span>
              </button>

              <button
                onClick$={() => {
                  selectedFile.value = null;
                  convertedFile.value = null;
                }}
                class="w-full py-3 text-gray-600 hover:text-gray-900 font-medium"
              >
                Convert Another File
              </button>
            </div>
          )}
        </div>

        {/* Features */}
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white rounded-xl shadow-lg p-6">
            <h2 class="text-xl font-bold text-gray-900 mb-4">Features</h2>
            <ul class="space-y-3">
              {features.map((feature, idx) => (
                <li key={idx} class="flex items-start space-x-2">
                  <CheckCircle class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-6">
            <h2 class="text-xl font-bold text-gray-900 mb-4">Use Cases</h2>
            <ul class="space-y-3">
              {useCases.map((useCase, idx) => (
                <li key={idx} class="flex items-start space-x-2">
                  <CheckCircle class="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-700">{useCase}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
});
