import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { apiService } from '../../services/api';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { useFileValidation } from '../../hooks/useFileValidation';
import {
  Upload,
  Download,
  Settings,
  FileText,
  FileImage,
  RefreshCw,
  CheckCircle,
  AlertCircle,
  Zap,
  Shield,
  Clock,
  Star,
  BookOpen,
  BarChart3
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export const EPUBToODTConverter: React.FC = () => {
  const { t } = useTranslation();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [convertedFile, setConvertedFile] = useState<Blob | null>(null);
  const [convertedFilename, setConvertedFilename] = useState<string | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [preserveFormatting, setPreserveFormatting] = useState(true);
  const [includeImages, setIncludeImages] = useState(true);
  const [extractMetadata, setExtractMetadata] = useState(true);
  const [openSourceCompatible, setOpenSourceCompatible] = useState(true);
  const [batchMode, setBatchMode] = useState(false);
  const [batchFiles, setBatchFiles] = useState<File[]>([]);
  const [batchResults, setBatchResults] = useState<any[]>([]);
  const [batchConverted, setBatchConverted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Use shared validation hook
  const {
    validationError,
    validateSingleFile,
    validateBatchFiles,
    getBatchInfoMessage,
    getBatchSizeDisplay,
    formatFileSize,
    clearValidationError
  } = useFileValidation();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.name.toLowerCase().endsWith('.epub')) {
        const validation = validateSingleFile(file);
        if (!validation.isValid) {
          setError(validation.error?.message || 'File validation failed');
          setSelectedFile(null);
          setPreviewUrl(null);
          if (fileInputRef.current) fileInputRef.current.value = '';
          return;
        }
        setSelectedFile(file);
        setError(null);
        clearValidationError();
        setPreviewUrl(URL.createObjectURL(file));
      } else {
        setError('Please select a valid EPUB file');
      }
    }
  };

  const handleBatchFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const epubFiles = files.filter(file =>
      file.name.toLowerCase().endsWith('.epub')
    );

    if (epubFiles.length === 0) {
      setError('No valid EPUB files selected.');
      return;
    }

    const validation = validateBatchFiles(epubFiles);
    if (!validation.isValid) {
      setError(validation.error?.message || 'Batch validation failed');
      setBatchFiles([]);
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    setBatchFiles(epubFiles);
    setError(null);
    clearValidationError();
  };

  const handleConvert = async (file: File) => {
    return await apiService.convertFile(file, {
      format: 'odt',
      preserveFormatting: preserveFormatting ? 'true' : 'false',
      includeImages: includeImages ? 'true' : 'false',
      extractMetadata: extractMetadata ? 'true' : 'false',
      openSourceCompatible: openSourceCompatible ? 'true' : 'false'
    } as any);
  };

  const handleSingleConvert = async () => {
    if (!selectedFile) return;

    setIsConverting(true);
    setError(null);

    try {
      const result = await handleConvert(selectedFile);
      setConvertedFile(result.blob);
      setConvertedFilename(result.filename);
      setBatchResults([]);
      setBatchConverted(false);
    } catch (err) {
      setError('Conversion failed. Please try again.');
    } finally {
      setIsConverting(false);
    }
  };

  const handleBatchConvert = async () => {
    if (batchFiles.length === 0) return;

    setIsConverting(true);
    setError(null);
    setBatchConverted(false);

    try {
      const result = await apiService.convertBatch(batchFiles, {
        format: 'odt',
        preserveFormatting: preserveFormatting ? 'true' : 'false',
        includeImages: includeImages ? 'true' : 'false',
        extractMetadata: extractMetadata ? 'true' : 'false',
        openSourceCompatible: openSourceCompatible ? 'true' : 'false'
      } as any);
      setBatchResults(result.results ?? []);
      const successes = (result.results ?? []).filter(r => r.success);
      if (successes.length > 0) {
        setBatchConverted(true);
        const failures = (result.results ?? []).filter(r => !r.success);
        setError(failures.length ? `${failures.length} file${failures.length > 1 ? 's' : ''} failed.` : null);
      } else {
        setBatchConverted(false);
        setError('Batch conversion failed. Please try again.');
      }
      setConvertedFile(null);
      setConvertedFilename(null);
    } catch (err) {
      setError('Batch conversion failed. Please try again.');
      setBatchResults([]);
      setBatchConverted(false);
    } finally {
      setIsConverting(false);
    }
  };

  const handleDownload = () => {
    if (!convertedFile) return;
    const url = URL.createObjectURL(convertedFile);
    const a = document.createElement('a');
    a.href = url;
    a.download = convertedFilename || (selectedFile ? selectedFile.name.replace(/\.epub$/i, '.odt') : 'converted.odt');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleBatchDownload = async (result: any) => {
    const filename = result.storedFilename || result.downloadPath?.split('/').pop();
    if (!filename) {
      setError('Download link is missing. Please reconvert.');
      return;
    }
    try {
      await apiService.downloadFile(filename, result.outputFilename);
    } catch (e) {
      setError('Failed to download file. Please try again.');
    }
  };

  const handleBack = () => {
    window.location.href = '/';
  };

  const resetForm = () => {
    setSelectedFile(null);
    setConvertedFile(null);
    setConvertedFilename(null);
    setError(null);
    setPreviewUrl(null);
    setBatchFiles([]);
    setBatchResults([]);
    setBatchConverted(false);
    clearValidationError();
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSwitchToSingle = () => {
    resetForm();
    setBatchMode(false);
  };

  const handleSwitchToBatch = () => {
    resetForm();
    setBatchMode(true);
  };

  return (
    <>
      <Helmet>
        <title>{t('epub_to_odt.meta_title')}</title>
        <meta name="description" content={t('epub_to_odt.meta_description')} />
        <meta name="keywords" content="EPUB to ODT, ebook converter, OpenDocument, LibreOffice, text format" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-lime-50">
      <Header />

      {/* Hero Section - Narrowed */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-lime-600 to-emerald-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t('epub_to_odt.title')}
            </h1>
            <p className="text-lg sm:text-xl text-green-100 mb-6 max-w-2xl mx-auto">
              {t('epub_to_odt.subtitle')} Transform e-books into editable documents with cross-platform compatibility.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-green-200">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>{t('epub_to_odt.lightning_fast')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>{t('epub_to_odt.secure')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{t('epub_to_odt.no_registration')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Main Conversion Panel */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">

              {/* Mode Toggle */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={handleSwitchToSingle}
                  className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all ${
                    !batchMode
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <FileText className="w-5 h-5 inline mr-2" />
                  Single File
                </button>
                <button
                  onClick={handleSwitchToBatch}
                  className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all ${
                    batchMode
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <FileImage className="w-5 h-5 inline mr-2" />
                  Batch Convert
                </button>
              </div>

              {/* File Upload Area */}
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-green-400 transition-colors">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {batchMode ? t('epub_to_odt.upload_multiple') : t('epub_to_odt.upload_single')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {batchMode
                    ? t('epub_to_odt.select_multiple_desc')
                    : t('epub_to_odt.drag_drop_desc')
                  }
                </p>
                {!batchMode && (
                  <p className="text-sm text-green-600 mb-4">
                    {t('epub_to_odt.single_limit_message')}
                  </p>
                )}
                {batchMode && (
                  <p className="text-sm text-green-600 mb-4">
                    {t('epub_to_odt.batch_limit_message')}</p>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".epub"
                  multiple={batchMode}
                  onChange={batchMode ? handleBatchFileSelect : handleFileSelect}
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                >
                  Choose Files
                </button>
              </div>

              {/* File Preview */}
              {previewUrl && !batchMode && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-4">{t('epub_to_odt.preview')}</h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-center h-32 bg-gray-100 rounded">
                      <BookOpen className="w-12 h-12 text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-600 mt-2 text-center">
                      {selectedFile?.name} ({formatFileSize(selectedFile?.size || 0)})
                    </p>
                  </div>
                </div>
              )}

              {/* Batch Files List */}
              {batchMode && batchFiles.length > 0 && (
                <div className="mt-6">
                  {(() => {
                    const totalSize = batchFiles.reduce((sum, f) => sum + f.size, 0);
                    const sizeDisplay = getBatchSizeDisplay(totalSize);
                    return (
                      <>
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-lg font-semibold">{t('epub_to_odt.selected_files')} ({batchFiles.length})</h4>
                          <div className={`text-sm font-medium ${sizeDisplay.isWarning ? 'text-orange-600' : 'text-gray-600'}`}>
                            {sizeDisplay.text}
                          </div>
                        </div>
                        {sizeDisplay.isWarning && (
                          <div className="mb-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                            <div className="flex items-center">
                              <AlertCircle className="w-4 h-4 text-orange-500 mr-2" />
                              <span className="text-sm text-orange-700">
                                {t('epub_to_odt.size_warning')} Consider processing fewer files for better performance.
                              </span>
                            </div>
                          </div>
                        )}
                        <div className="space-y-2 max-h-40 overflow-y-auto">
                          {batchFiles.map((file, index) => (
                            <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                              <span className="text-sm font-medium">{file.name}</span>
                              <span className="text-xs text-gray-500">{formatFileSize(file.size)}</span>
                            </div>
                          ))}
                        </div>
                      </>
                    );
                  })()}
                </div>
              )}

              {/* Error Message */}
              {(error || validationError) && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
                  <span className="text-red-700">{error || validationError}</span>
                </div>
              )}

              {/* Convert Button */}
              <div className="mt-8">
                <button
                  onClick={batchMode ? handleBatchConvert : handleSingleConvert}
                  disabled={isConverting || (batchMode ? batchFiles.length === 0 : !selectedFile)}
                  className="w-full bg-gradient-to-r from-green-600 to-lime-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-700 hover:to-lime-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
                >
                  {isConverting ? (
                    <div className="flex items-center justify-center">
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                      {t('epub_to_odt.converting')}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Zap className="w-5 h-5 mr-2" />
                      {batchMode ? t('epub_to_odt.convert_batch', { count: batchFiles.length }) : t('epub_to_odt.convert_button')}
                    </div>
                  )}
                </button>
              </div>

              {/* Success Message & Download */}
              {convertedFile && !batchMode && (
                <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <h4 className="text-lg font-semibold text-green-800">{t('epub_to_odt.conversion_success')}</h4>
                  </div>
                  <p className="text-green-700 mb-4">
                    {t('epub_to_odt.conversion_success_desc')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleDownload}
                      className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      {t('epub_to_odt.download_file')}
                    </button>
                    <button
                      onClick={resetForm}
                      className="flex-1 bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors flex items-center justify-center"
                    >
                      <RefreshCw className="w-5 h-5 mr-2" />
                      {t('epub_to_odt.convert_another')}
                    </button>
                  </div>
                </div>
              )}

              {/* Batch Conversion Success */}
              {batchMode && batchConverted && batchResults.length > 0 && (
                <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <h4 className="text-lg font-semibold text-green-800">Batch Conversion Complete!</h4>
                  </div>
                  <p className="text-green-700 mb-4">
                    {batchResults.filter(r => r.success).length} of {batchResults.length} files converted successfully.
                  </p>
                  <div className="space-y-2 max-h-60 overflow-y-auto">
                    {batchResults.map((result, index) => {
                      const displayName = result.outputFilename || `${result.originalName.replace(/\.epub$/i, '.odt')}`;
                      const displaySize = result.size !== undefined ? formatFileSize(result.size) : undefined;
                      return (
                        <div key={index} className={`border rounded-lg p-3 ${
                          result.success ? 'bg-white border-green-200' : 'bg-red-50 border-red-200'
                        }`}>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <div className="text-sm flex-1 min-w-0">
                              <div className="flex items-center">
                                {result.success ? (
                                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                ) : (
                                  <AlertCircle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                                )}
                                <span className="font-medium text-gray-900 truncate">{displayName}</span>
                              </div>
                              {displaySize && (
                                <div className="text-xs text-gray-500 mt-1 ml-6">{displaySize}</div>
                              )}
                              {!result.success && result.error && (
                                <div className="text-xs text-red-600 mt-1 ml-6 break-words">
                                  Failed to convert {result.originalName}
                                </div>
                              )}
                            </div>
                            {result.success && result.downloadPath && (
                              <button
                                onClick={() => handleBatchDownload(result)}
                                className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors flex-shrink-0 w-full sm:w-auto"
                              >
                                Download
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <button
                    onClick={resetForm}
                    className="w-full mt-4 bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors flex items-center justify-center"
                  >
                    <RefreshCw className="w-5 h-5 mr-2" />
                    {t('epub_to_odt.convert_more')}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Settings & Info Panel */}
          <div className="space-y-6">

            {/* Conversion Settings */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Settings className="w-5 h-5 mr-2 text-green-600" />
                ODT Settings
              </h3>

              {/* Preserve Formatting */}
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preserveFormatting}
                    onChange={(e) => setPreserveFormatting(e.target.checked)}
                    className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Preserve formatting</span>
                </label>
              </div>

              {/* Include Images */}
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={includeImages}
                    onChange={(e) => setIncludeImages(e.target.checked)}
                    className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Include images and graphics</span>
                </label>
              </div>

              {/* Extract Metadata */}
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={extractMetadata}
                    onChange={(e) => setExtractMetadata(e.target.checked)}
                    className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Extract book metadata</span>
                </label>
              </div>

              {/* Open Source Compatible */}
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={openSourceCompatible}
                    onChange={(e) => setOpenSourceCompatible(e.target.checked)}
                    className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Open-source office compatible</span>
                </label>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-500" />
                Why Choose Our Converter?
              </h3>
              <div className="space-y-4">
                {[
                  "E-book to document conversion",
                  "OpenDocument compatibility",
                  "Cross-platform editing",
                  "Formatting preservation",
                  "Open-source office support",
                  "Batch processing support"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-green-600" />
                Perfect For
              </h3>
              <div className="space-y-3">
                {[
                  "Cross-platform document editing",
                  "Open-source office workflows",
                  "Content repurposing",
                  "Universal document compatibility",
                  "Collaborative editing",
                  "Free office software integration"
                ].map((useCase, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <button
            onClick={handleBack}
            className="bg-gray-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
          >
            ← {t('epub_to_odt.back_home')}
          </button>
        </div>

        {/* SEO Content Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            Why Convert EPUB to ODT?
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Converting EPUB e-book files to OpenDocument Text (ODT) format is essential for cross-platform document editing, open-source office workflows, and universal document compatibility. While EPUB files are excellent for reading, ODT format provides full document editing capabilities with seamless integration across different operating systems and office suites.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{t('epub_to_odt.benefits_title')}</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-green-900 mb-3">OpenDocument Compatibility</h4>
                <p className="text-gray-700">
                  ODT files are fully compatible with LibreOffice, OpenOffice, and other open-source office suites, ensuring universal accessibility and editing capabilities.
                </p>
              </div>

              <div className="bg-lime-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-lime-900 mb-3">Cross-platform Editing</h4>
                <p className="text-gray-700">
                  ODT format works seamlessly across Windows, macOS, and Linux, providing consistent editing experience regardless of the operating system.
                </p>
              </div>

              <div className="bg-emerald-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-emerald-900 mb-3">Formatting Preservation</h4>
                <p className="text-gray-700">
                  ODT format preserves the original formatting of e-book content while allowing for full editing and customization capabilities.
                </p>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-teal-900 mb-3">Open-source Office Support</h4>
                <p className="text-gray-700">
                  ODT format is the native format for open-source office suites, providing full feature support and seamless integration with free office software.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{t('epub_to_odt.use_cases_title')}</h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Cross-platform Document Editing</h4>
                  <p className="text-gray-700">Convert e-books to ODT format for editing across different operating systems and office suites with full compatibility.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-2 h-2 bg-lime-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Open-source Office Workflows</h4>
                  <p className="text-gray-700">Integrate e-book content into open-source office workflows by converting it to ODT format for LibreOffice compatibility.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Content Repurposing</h4>
                  <p className="text-gray-700">Repurpose e-book content for different purposes by converting it to ODT format for easy editing and adaptation.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Universal Document Compatibility</h4>
                  <p className="text-gray-700">Ensure universal document compatibility by converting e-books to ODT format for use across different platforms and software.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-lime-600 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">{t('epub_to_odt.ready_title')}</h3>
              <p className="text-lg mb-6 opacity-90">
                {t('epub_to_odt.ready_text')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Converting Now
                </button>
                <button
                  onClick={handleBack}
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                >
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      </div>

      </>

      );
};
