import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { usePathLanguageSync } from '../../hooks/usePathLanguageSync';
import { Header } from '../Header';
import { Footer } from '../Footer';
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
  File,
  BarChart3,
  BookOpen
} from 'lucide-react';
import { useFileValidation } from '../../hooks/useFileValidation';
import { apiService, API_BASE_URL } from '../../services/api';

export const DOCXToEPUBConverter: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [convertedFile, setConvertedFile] = useState<Blob | null>(null);
  const [convertedFilename, setConvertedFilename] = useState<string | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [includeImages, setIncludeImages] = useState(true);
  const [preserveFormatting, setPreserveFormatting] = useState(true);
  const [generateTOC, setGenerateTOC] = useState(true);
  const [batchMode, setBatchMode] = useState(false);
  const [batchFiles, setBatchFiles] = useState<File[]>([]);
  const [batchConverted, setBatchConverted] = useState(false);
  const [batchResults, setBatchResults] = useState<Array<{ file: File; blob: Blob }>>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Language synchronization
    usePathLanguageSync(i18n);
// Use shared validation hook
  const {
    validateBatchFiles,
    getBatchSizeDisplay,
    formatFileSize,
    clearValidationError
  } = useFileValidation();

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.name.toLowerCase().endsWith('.docx')) {
        setSelectedFile(file);
        setError(null);
        setPreviewUrl(URL.createObjectURL(file));
        setConvertedFile(null);
        setBatchResults([]);
        setBatchConverted(false);
        clearValidationError();
      } else {
        setError('Please select a valid DOCX file');
      }
    }
  };

  const handleBatchFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const docxFiles = files.filter(file => 
      file.name.toLowerCase().endsWith('.docx')
    );
    
    const validation = validateBatchFiles(docxFiles);
    if (!validation.isValid) {
      setError(validation.error?.message || 'Batch validation failed.');
      setBatchFiles([]);
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }
    
    setBatchFiles(docxFiles);
    setError(null);
    setBatchResults([]);
    setBatchConverted(false);
    setConvertedFile(null);
    clearValidationError();
  };

  const handleConvert = async (file: File): Promise<Blob> => {
    try {
      console.log('DOCX to EPUB: Converting file:', file.name, 'size:', file.size, 'bytes');

      // Use direct fetch since we need to pass custom FormData fields
      const formData = new FormData();
      formData.append('file', file);
      formData.append('includeImages', includeImages.toString());
      formData.append('preserveFormatting', preserveFormatting.toString());
      formData.append('generateTOC', generateTOC.toString());

      const response = await fetch(`${API_BASE_URL}/convert/docx-to-epub/single`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Conversion failed' }));
        throw new Error(errorData.error || 'Conversion failed');
      }

      const blob = await response.blob();
      console.log('DOCX to EPUB: Conversion successful, blob size:', blob.size, 'bytes');
      return blob;
    } catch (error) {
      console.error('DOCX to EPUB conversion error:', error);
      throw new Error(error instanceof Error ? error.message : 'Failed to convert DOCX to EPUB. Please try again.');
    }
  };

  const handleSingleConvert = async () => {
    if (!selectedFile) return;
    
    setIsConverting(true);
    setError(null);
    
    try {
      const converted = await handleConvert(selectedFile);
      setConvertedFile(converted);
      setConvertedFilename(selectedFile.name.replace('.docx', '.epub'));
    } catch (err) {
      console.error('DOCX to EPUB conversion error:', err);
      setError(err instanceof Error ? err.message : 'Conversion failed. Please try again.');
    } finally {
      setIsConverting(false);
    }
  };

  const handleBatchConvert = async () => {
    if (batchFiles.length === 0) return;
    
    setIsConverting(true);
    setError(null);
    setBatchResults([]);
    
    try {
      console.log('DOCX to EPUB Batch: Converting', batchFiles.length, 'files');

      // Use direct fetch for batch conversion with custom options
      const formData = new FormData();
      batchFiles.forEach(file => formData.append('files', file));
      formData.append('includeImages', includeImages.toString());
      formData.append('preserveFormatting', preserveFormatting.toString());
      formData.append('generateTOC', generateTOC.toString());

      const response = await fetch(`${API_BASE_URL}/convert/docx-to-epub/batch`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Batch conversion failed' }));
        throw new Error(errorData.error || 'Batch conversion failed');
      }

      const result = await response.json();

      console.log('DOCX to EPUB Batch: Conversion result:', result);
      
      if (!result.success) {
        throw new Error('Batch conversion failed');
      }
      
      // Process batch results
      const results: Array<{ file: File; blob: Blob }> = [];
      
      for (let i = 0; i < result.results.length; i++) {
        const fileResult = result.results[i];
        const originalFile = batchFiles[i];
        
        if (fileResult.success && fileResult.downloadPath) {
          try {
            let blob: Blob;
            
            // Check if downloadPath is a base64 data URL
            if (fileResult.downloadPath.startsWith('data:')) {
              // Convert base64 data URL to blob
              const response = await fetch(fileResult.downloadPath);
              blob = await response.blob();
            } else {
              // Download the converted file using API service
              blob = await apiService.downloadFile(fileResult.downloadPath);
            }
            
            results.push({ file: originalFile, blob });
          } catch (downloadError) {
            console.error(`Error processing file ${i}:`, downloadError);
          }
        }
      }
      
      if (results.length === 0) {
        throw new Error('No files were successfully converted.');
      }
      
      setBatchResults(results);
      setBatchConverted(true);
      setError(null);
    } catch (err) {
      console.error('DOCX to EPUB batch conversion error:', err);
      setError(err instanceof Error ? err.message : 'Batch conversion failed. Please try again.');
    } finally {
      setIsConverting(false);
    }
  };

  const handleDownload = () => {
    if (convertedFile && convertedFilename) {
      const url = URL.createObjectURL(convertedFile);
      const a = document.createElement('a');
      a.href = url;
      a.download = convertedFilename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const handleBack = () => {
    window.location.href = '/';
  };

  const resetForm = () => {
    // Clean up any blob URLs to prevent memory leaks
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    
    setSelectedFile(null);
    setConvertedFile(null);
    setConvertedFilename(null);
    setError(null);
    setPreviewUrl(null);
    setBatchFiles([]);
    setBatchConverted(false);
    setBatchResults([]);
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

  const handleBatchFileDownload = (file: File, blob: Blob) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name.replace('.docx', '.epub');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <Helmet>
        <title>{t('docx_to_epub.meta_title')}</title>
        <meta name="description" content={t('docx_to_epub.meta_description')} />
        <meta name="keywords" content="DOCX to EPUB, Word to ebook, document converter, EPUB format, e-reader, batch conversion" />
        <link rel="canonical" href={`${window.location.origin}/convert/docx-to-epub`} />
        <link rel="alternate" hrefLang="en" href={`${window.location.origin}/convert/docx-to-epub`} />
        <link rel="alternate" hrefLang="pl" href={`${window.location.origin}/pl/convert/docx-to-epub`} />
        <link rel="alternate" hrefLang="de" href={`${window.location.origin}/de/convert/docx-to-epub`} />
        <link rel="alternate" hrefLang="id" href={`${window.location.origin}/id/convert/docx-to-epub`} />
        <link rel="alternate" hrefLang="sv" href={`${window.location.origin}/sv/convert/docx-to-epub`} />
        <link rel="alternate" hrefLang="es" href={`${window.location.origin}/es/convert/docx-to-epub`} />
        <link rel="alternate" hrefLang="fr" href={`${window.location.origin}/fr/convert/docx-to-epub`} />
        <link rel="alternate" hrefLang="it" href={`${window.location.origin}/it/convert/docx-to-epub`} />
        <link rel="alternate" hrefLang="nl" href={`${window.location.origin}/nl/convert/docx-to-epub`} />
        <link rel="alternate" hrefLang="pt" href={`${window.location.origin}/pt/convert/docx-to-epub`} />
        <link rel="alternate" hrefLang="vi" href={`${window.location.origin}/vi/convert/docx-to-epub`} />
        <link rel="alternate" hrefLang="tr" href={`${window.location.origin}/tr/convert/docx-to-epub`} />
        <link rel="alternate" hrefLang="ru" href={`${window.location.origin}/ru/convert/docx-to-epub`} />
        <link rel="alternate" hrefLang="ar" href={`${window.location.origin}/ar/convert/docx-to-epub`} />
        <link rel="alternate" hrefLang="th" href={`${window.location.origin}/th/convert/docx-to-epub`} />
        <link rel="alternate" hrefLang="ja" href={`${window.location.origin}/ja/convert/docx-to-epub`} />
        <link rel="alternate" hrefLang="zh" href={`${window.location.origin}/zh/convert/docx-to-epub`} />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <Header />
      
      {/* Hero Section - Narrowed */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-rose-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t('docx_to_epub.title')}
            </h1>
            <p className="text-lg sm:text-xl text-purple-100 mb-6 max-w-2xl mx-auto">
              {t('docx_to_epub.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-purple-200">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>{t('features.lightning_fast')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>{t('features.secure')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{t('features.no_registration')}</span>
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
                      ? 'bg-purple-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <FileText className="w-5 h-5 inline mr-2" />
                  {t('common.single_file')}
                </button>
                <button
                  onClick={handleSwitchToBatch}
                  className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all ${
                    batchMode 
                      ? 'bg-purple-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Zap className="w-5 h-5 inline mr-2" />
                  {t('common.batch_convert')}
                </button>
              </div>

              {/* File Upload Area */}
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-purple-400 transition-colors">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {batchMode ? t('docx_to_epub.upload_batch') : t('docx_to_epub.upload_single')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {batchMode 
                    ? t('docx_to_epub.upload_text_batch')
                    : t('docx_to_epub.upload_text_single')
                  }
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  {batchMode 
                    ? t('docx_to_epub.file_limits_batch')
                    : t('docx_to_epub.file_limits_single')
                  }
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".docx"
                  multiple={batchMode}
                  onChange={batchMode ? handleBatchFileSelect : handleFileSelect}
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                >
                  {t('common.choose_files')}
                </button>
              </div>

              {/* File Preview */}
              {previewUrl && !batchMode && selectedFile && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-4">{t('docx_to_epub.file_info')}</h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-center h-32 bg-gray-100 rounded">
                      <File className="w-12 h-12 text-gray-400" />
                    </div>
                    <div className="mt-3 text-center">
                      <p className="text-sm text-gray-600">
                        <strong>{selectedFile.name}</strong> ({formatFileSize(selectedFile.size)})
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Batch Files List */}
              {batchMode && batchFiles.length > 0 && (
                <div className="mt-6">
                  {(() => {
                    const totalSize = batchFiles.reduce((sum: number, f: File) => sum + f.size, 0);
                    const sizeDisplay = getBatchSizeDisplay(totalSize);
                    return (
                      <>
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-lg font-semibold">{t('docx_to_epub.selected_files')} ({batchFiles.length})</h4>
                          <div className={`text-sm font-medium ${sizeDisplay.isWarning ? 'text-orange-600' : 'text-gray-600'}`}>
                            {sizeDisplay.text}
                          </div>
                        </div>
                        {sizeDisplay.isWarning && (
                          <div className="mb-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                            <div className="flex items-center">
                              <AlertCircle className="w-4 h-4 text-orange-500 mr-2" />
                              <span className="text-sm text-orange-700">
                                {t('docx_to_epub.batch_size_warning')}
                              </span>
                            </div>
                          </div>
                        )}
                        <div className="space-y-2 max-h-40 overflow-y-auto">
                          {batchFiles.map((file: File, index: number) => (
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
              {error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
                  <span className="text-red-700">{error}</span>
                </div>
              )}

              {/* Convert Button */}
              <div className="mt-8">
                <button
                  onClick={batchMode ? handleBatchConvert : handleSingleConvert}
                  disabled={isConverting || (batchMode ? batchFiles.length === 0 : !selectedFile)}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
                >
                  {isConverting ? (
                    <div className="flex items-center justify-center">
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                      {t('common.converting')}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Zap className="w-5 h-5 mr-2" />
                      {batchMode ? t('docx_to_epub.convert_files', { count: batchFiles.length }) : t('docx_to_epub.convert_to_epub')}
                    </div>
                  )}
                </button>
              </div>

              {/* Success Message & Download */}
              {convertedFile && !batchMode && (
                <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <h4 className="text-lg font-semibold text-green-800">{t('docx_to_epub.conversion_complete')}</h4>
                  </div>
                  <p className="text-green-700 mb-4">
                    {t('docx_to_epub.success_message')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleDownload}
                      className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      {t('docx_to_epub.download_epub')}
                    </button>
                    <button
                      onClick={resetForm}
                      className="flex-1 bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors flex items-center justify-center"
                    >
                      <RefreshCw className="w-5 h-5 mr-2" />
                      {t('common.convert_another')}
                    </button>
                  </div>
                </div>
              )}

              {/* Batch Conversion Success Message */}
              {batchConverted && batchMode && batchResults.length > 0 && (
                <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <h4 className="text-lg font-semibold text-green-800">{t('docx_to_epub.batch_conversion_complete')}</h4>
                  </div>
                  <p className="text-green-700 mb-4">
                    {t('docx_to_epub.batch_success_message', { count: batchResults.length })}
                  </p>
                  <div className="space-y-2 mb-4 max-h-60 overflow-y-auto">
                    {batchResults.map((result: { file: File; blob: Blob }, index: number) => (
                      <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white rounded-lg p-3 border border-green-200 gap-2">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-medium text-gray-900 break-words">
                              {result.file.name.replace('.docx', '.epub')}
                            </p>
                            <p className="text-xs text-gray-500">
                              {formatFileSize(result.blob.size)}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => handleBatchFileDownload(result.file, result.blob)}
                          className="w-full sm:w-auto bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
                        >
                          <Download className="w-4 h-4 mr-1" />
                          {t('common.download')}
                        </button>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={resetForm}
                    className="w-full bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors flex items-center justify-center"
                  >
                    <RefreshCw className="w-5 h-5 mr-2" />
                    {t('common.convert_more_files')}
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
                <Settings className="w-5 h-5 mr-2 text-purple-600" />
                {t('docx_to_epub.epub_settings')}
              </h3>
              
              {/* Include Images */}
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={includeImages}
                    onChange={(e) => setIncludeImages(e.target.checked)}
                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{t('docx_to_epub.include_images')}</span>
                </label>
                <p className="text-xs text-gray-500 mt-1 ml-6">{t('docx_to_epub.include_images_desc')}</p>
              </div>

              {/* Preserve Formatting */}
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preserveFormatting}
                    onChange={(e) => setPreserveFormatting(e.target.checked)}
                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{t('docx_to_epub.preserve_formatting')}</span>
                </label>
                <p className="text-xs text-gray-500 mt-1 ml-6">{t('docx_to_epub.preserve_formatting_desc')}</p>
              </div>

              {/* Generate TOC */}
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={generateTOC}
                    onChange={(e) => setGenerateTOC(e.target.checked)}
                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{t('docx_to_epub.generate_toc')}</span>
                </label>
                <p className="text-xs text-gray-500 mt-1 ml-6">{t('docx_to_epub.generate_toc_desc')}</p>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-500" />
                {t('docx_to_epub.sidebar_title')}
              </h3>
              <div className="space-y-4">
                {[
                  t('docx_to_epub.feature_1'),
                  t('docx_to_epub.feature_2'),
                  t('docx_to_epub.feature_3'),
                  t('docx_to_epub.feature_4'),
                  t('docx_to_epub.feature_5'),
                  t('docx_to_epub.feature_6')
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
                <BarChart3 className="w-5 h-5 mr-2 text-purple-600" />
                {t('docx_to_epub.perfect_for_title')}
              </h3>
              <div className="space-y-3">
                {[
                  t('docx_to_epub.use_case_1'),
                  t('docx_to_epub.use_case_2'),
                  t('docx_to_epub.use_case_3'),
                  t('docx_to_epub.use_case_4'),
                  t('docx_to_epub.use_case_5'),
                  t('docx_to_epub.use_case_6')
                ].map((useCase, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></div>
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
            ← {t('common.back_to_home')}
          </button>
        </div>

        {/* SEO Content Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            {t('docx_to_epub.seo.title')}
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t('docx_to_epub.seo.description')}
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{t('docx_to_epub.seo.features_title')}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-purple-900 mb-3">{t('docx_to_epub.seo.feature_1_title')}</h4>
                <p className="text-gray-700">
                  {t('docx_to_epub.seo.feature_1_text')}
                </p>
              </div>
              
              <div className="bg-pink-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-pink-900 mb-3">{t('docx_to_epub.seo.feature_2_title')}</h4>
                <p className="text-gray-700">
                  {t('docx_to_epub.seo.feature_2_text')}
                </p>
              </div>
              
              <div className="bg-rose-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-rose-900 mb-3">{t('docx_to_epub.seo.feature_3_title')}</h4>
                <p className="text-gray-700">
                  {t('docx_to_epub.seo.feature_3_text')}
                </p>
              </div>
              
              <div className="bg-fuchsia-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-fuchsia-900 mb-3">{t('docx_to_epub.seo.feature_4_title')}</h4>
                <p className="text-gray-700">
                  {t('docx_to_epub.seo.feature_4_text')}
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{t('docx_to_epub.seo.use_cases_title')}</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('docx_to_epub.seo.use_case_1_title')}</h4>
                  <p className="text-gray-700">{t('docx_to_epub.seo.use_case_1_text')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('docx_to_epub.seo.use_case_2_title')}</h4>
                  <p className="text-gray-700">{t('docx_to_epub.seo.use_case_2_text')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-rose-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('docx_to_epub.seo.use_case_3_title')}</h4>
                  <p className="text-gray-700">{t('docx_to_epub.seo.use_case_3_text')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-fuchsia-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('docx_to_epub.seo.use_case_4_title')}</h4>
                  <p className="text-gray-700">{t('docx_to_epub.seo.use_case_4_text')}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-xl text-center mt-8">
              <h3 className="text-2xl font-bold mb-4">{t('docx_to_epub.ready_title')}</h3>
              <p className="text-lg mb-6 opacity-90">
                {t('docx_to_epub.ready_text')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' as ScrollBehavior })}
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  {t('common.start_converting_now')}
                </button>
                <button
                  onClick={handleBack}
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                >
                  {t('common.back_to_home')}
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
