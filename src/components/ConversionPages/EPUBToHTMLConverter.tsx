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

export const EPUBToHTMLConverter: React.FC = () => {
  const { t } = useTranslation();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [convertedFile, setConvertedFile] = useState<Blob | null>(null);
  const [convertedFilename, setConvertedFilename] = useState<string | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [includeCSS, setIncludeCSS] = useState(true);
  const [includeImages, setIncludeImages] = useState(true);
  const [extractMetadata, setExtractMetadata] = useState(true);
  const [responsiveDesign, setResponsiveDesign] = useState(true);
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
        // Validate single file size using shared validation
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
    
    // Filter to only EPUB files
    const epubFiles = files.filter(file => 
      file.name.toLowerCase().endsWith('.epub')
    );
    
    if (epubFiles.length === 0) {
      setError('No valid EPUB files selected.');
      return;
    }

    // Validate batch files using shared validation
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
      format: 'html',
      includeCss: includeCSS ? 'true' : 'false',
      includeImages: includeImages ? 'true' : 'false',
      extractMetadata: extractMetadata ? 'true' : 'false',
      responsiveDesign: responsiveDesign ? 'true' : 'false'
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
    
    try {
      const result = await apiService.convertBatch(batchFiles, {
        format: 'html',
        includeCss: includeCSS ? 'true' : 'false',
        includeImages: includeImages ? 'true' : 'false',
        extractMetadata: extractMetadata ? 'true' : 'false',
        responsiveDesign: responsiveDesign ? 'true' : 'false'
      } as any);

      setBatchResults(result.results ?? []);
      setBatchConverted(true);
      const successes = (result.results ?? []).filter(r => r.success);
      if (successes.length > 0) {
        const failures = (result.results ?? []).filter(r => !r.success);
        setError(failures.length ? `${failures.length} file${failures.length > 1 ? 's' : ''} failed.` : null);
      } else {
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
    a.download = convertedFilename || (selectedFile ? selectedFile.name.replace(/\.epub$/i, '.html') : 'converted.html');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleBatchDownload = async (result: any) => {
    // Use downloadPath if available, otherwise fall back to storedFilename
    const downloadPath = result.downloadPath || (result.storedFilename ? `/download/${encodeURIComponent(result.storedFilename)}` : null);
    if (!downloadPath) {
      setError('Download link is missing. Please reconvert.');
      return;
    }
    try {
      await apiService.downloadAndSaveFile(downloadPath, result.outputFilename);
    } catch (e) {
      setError('Failed to download file. Please try again.');
    }
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

  const handleBack = () => {
    window.location.href = '/';
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
        <title>{t('epub_to_html.meta_title')}</title>
        <meta name="description" content={t('epub_to_html.meta_description')} />
        <meta name="keywords" content="EPUB to HTML, ebook to web, ebook converter, HTML format, web publishing" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <Header />
      
      {/* Hero Section - Narrowed */}
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-red-600 to-pink-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t('epub_to_html.title')}
            </h1>
            <p className="text-lg sm:text-xl text-orange-100 mb-6 max-w-2xl mx-auto">
              {t('epub_to_html.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-orange-200">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>{t('epub_to_html.secure')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{t('epub_to_html.no_registration')}</span>
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
                      ? 'bg-orange-600 text-white shadow-lg' 
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
                      ? 'bg-orange-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <FileImage className="w-5 h-5 inline mr-2" />
                  Batch Convert
                </button>
              </div>

              {/* File Upload Area */}
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-orange-400 transition-colors">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {batchMode ? t('epub_to_html.upload_multiple') : t('epub_to_html.upload_single')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {batchMode 
                    ? t('epub_to_html.select_multiple_desc') 
                    : t('epub_to_html.drag_drop_desc')
                  }
                </p>
                {!batchMode && (
                  <p className="text-sm text-orange-600 mb-4">
                    {t('epub_to_html.single_limit_message')}
                  </p>
                )}
                {batchMode && (
                  <p className="text-sm text-orange-600 mb-4">
                    {getBatchInfoMessage()}
                  </p>
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
                  className="bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors"
                >
                  Choose Files
                </button>
              </div>

              {/* File Preview */}
              {previewUrl && !batchMode && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-4">{t('epub_to_html.preview')}</h4>
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
                          <h4 className="text-lg font-semibold">{t('epub_to_html.selected_files')} ({batchFiles.length})</h4>
                          <div className={`text-sm font-medium ${sizeDisplay.isWarning ? 'text-orange-700' : 'text-gray-600'}`}>
                            {sizeDisplay.text}
                          </div>
                        </div>
                        {sizeDisplay.isWarning && (
                          <div className="mb-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                            <div className="flex items-center">
                              <AlertCircle className="w-4 h-4 text-orange-600 mr-2" />
                              <span className="text-sm text-orange-800">{t('epub_to_html.size_warning')} Consider 5–10 files for best performance.</span>
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
                  })()
                  }
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
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-orange-700 hover:to-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
                >
                  {isConverting ? (
                    <div className="flex items-center justify-center">
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                      {t('epub_to_html.converting')}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Zap className="w-5 h-5 mr-2" />
                      {batchMode ? t('epub_to_html.convert_batch', { count: batchFiles.length }) : t('epub_to_html.convert_button')}
                    </div>
                  )}
                </button>
              </div>

              {/* Success Message & Download */}
              {convertedFile && !batchMode && (
                <div className="mt-6 p-6 rounded-xl border bg-green-50 border-green-200">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <h4 className="text-lg font-semibold text-green-800">{t('epub_to_html.conversion_success')}</h4>
                  </div>
                  <p className="text-green-700 mb-4">
                    {t('epub_to_html.conversion_success_desc')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleDownload}
                      className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      {t('epub_to_html.download_file')}
                    </button>
                    <button
                      onClick={resetForm}
                      className="flex-1 bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors flex items-center justify-center"
                    >
                      <RefreshCw className="w-5 h-5 mr-2" />
                      {t('epub_to_html.convert_another')}
                    </button>
                  </div>
                </div>
              )}

              {/* Batch Conversion Results */}
              {batchMode && batchConverted && batchResults.length > 0 && (
                <div className={`mt-6 p-6 rounded-xl border ${
                  batchResults.filter(r => r.success).length > 0 
                    ? 'bg-green-50 border-green-200' 
                    : 'bg-red-50 border-red-200'
                }`}>
                  <div className="flex items-center mb-4">
                    {batchResults.filter(r => r.success).length > 0 ? (
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    ) : (
                      <AlertCircle className="w-6 h-6 text-red-500 mr-3" />
                    )}
                    <h4 className={`text-lg font-semibold ${
                      batchResults.filter(r => r.success).length > 0 ? 'text-green-800' : 'text-red-800'
                    }`}>
                      {batchResults.filter(r => r.success).length > 0 ? t('epub_to_html.batch_success') : t('epub_to_html.batch_failed')}
                    </h4>
                  </div>
                  <p className={`mb-4 ${
                    batchResults.filter(r => r.success).length > 0 ? 'text-green-700' : 'text-red-700'
                  }`}>
                    {batchResults.filter(r => r.success).length} of {batchResults.length} files converted successfully.
                  </p>
                  <div className="space-y-2 max-h-60 overflow-y-auto">
                    {batchResults.map((result, index) => (
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
                              <span className="font-medium text-gray-900 truncate">{result.originalName}</span>
                            </div>
                            {result.success && result.size && (
                              <div className="text-xs text-gray-500 mt-1 ml-6">{formatFileSize(result.size)}</div>
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
                    ))}
                  </div>
                  <button
                    onClick={resetForm}
                    className="w-full mt-4 bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors flex items-center justify-center"
                  >
                    <RefreshCw className="w-5 h-5 mr-2" />
                    {t('epub_to_html.convert_more')}
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
                <Settings className="w-5 h-5 mr-2 text-orange-600" />
                HTML Settings
              </h3>
              
              {/* Include CSS */}
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={includeCSS}
                    onChange={(e) => setIncludeCSS(e.target.checked)}
                    className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Include CSS styling</span>
                </label>
              </div>

              {/* Include Images */}
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={includeImages}
                    onChange={(e) => setIncludeImages(e.target.checked)}
                    className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
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
                    className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Extract book metadata</span>
                </label>
              </div>

              {/* Responsive Design */}
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={responsiveDesign}
                    onChange={(e) => setResponsiveDesign(e.target.checked)}
                    className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Responsive design</span>
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
                  "E-book to web conversion",
                  "Web-compatible output",
                  "Proper HTML structure",
                  "CSS styling support",
                  "Browser compatibility",
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
                <BarChart3 className="w-5 h-5 mr-2 text-orange-600" />
                Perfect For
              </h3>
              <div className="space-y-3">
                {[
                  "Web publishing",
                  "Online reading platforms",
                  "Content management systems",
                  "Website integration",
                  "Digital content distribution",
                  "Web-based e-book readers"
                ].map((useCase, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
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
            ← {t('epub_to_html.back_home')}
          </button>
        </div>

        {/* SEO Content Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            Why Convert EPUB to HTML?
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Converting EPUB e-book files to HTML format is essential for web publishing, online reading platforms, and digital content distribution. While EPUB files are excellent for e-readers and mobile devices, HTML format provides universal web compatibility, enabling seamless integration with websites, content management systems, and online reading platforms.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{t('epub_to_html.benefits_title')}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-orange-900 mb-3">Universal Web Compatibility</h4>
                <p className="text-gray-700">
                  HTML files can be displayed in any web browser, making them perfect for web publishing and online content distribution across all platforms.
                </p>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-red-900 mb-3">Proper HTML Structure</h4>
                <p className="text-gray-700">
                  HTML format provides proper semantic structure with headings, paragraphs, lists, and other elements for better accessibility and SEO.
                </p>
              </div>
              
              <div className="bg-pink-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-pink-900 mb-3">CSS Styling Support</h4>
                <p className="text-gray-700">
                  HTML files support CSS styling, allowing for custom design, responsive layouts, and professional presentation of e-book content.
                </p>
              </div>
              
              <div className="bg-rose-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-rose-900 mb-3">Browser Compatibility</h4>
                <p className="text-gray-700">
                  HTML format ensures compatibility with all modern web browsers, providing consistent display across different devices and platforms.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{t('epub_to_html.use_cases_title')}</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Web Publishing</h4>
                  <p className="text-gray-700">Convert e-books to HTML format for web publishing, enabling easy integration with websites and content management systems.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Online Reading Platforms</h4>
                  <p className="text-gray-700">Create web-compatible content for online reading platforms by converting e-books to HTML format with proper structure and styling.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Content Management Systems</h4>
                  <p className="text-gray-700">Integrate e-book content into content management systems by converting it to HTML format for easy editing and publishing.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-rose-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Digital Content Distribution</h4>
                  <p className="text-gray-700">Distribute e-book content online by converting it to HTML format, ensuring compatibility with all web browsers and devices.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">{t('epub_to_html.ready_title')}</h3>
              <p className="text-lg mb-6 opacity-90">
                Use our free online {t('epub_to_html.title')} to transform your e-books into web-compatible HTML documents.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Converting Now
                </button>
                <button
                  onClick={handleBack}
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
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
