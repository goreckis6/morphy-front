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

export const EPUBToTXTConverter: React.FC = () => {
  const { t } = useTranslation();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [convertedFile, setConvertedFile] = useState<Blob | null>(null);
  const [convertedFilename, setConvertedFilename] = useState<string | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [preserveStructure, setPreserveStructure] = useState(true);
  const [includeMetadata, setIncludeMetadata] = useState(true);
  const [encoding, setEncoding] = useState<'utf-8' | 'ascii' | 'utf-16'>('utf-8');
  const [lineEndings, setLineEndings] = useState<'unix' | 'windows' | 'mac'>('unix');
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
      format: 'txt',
      preserveStructure: preserveStructure ? 'true' : 'false',
      includeMetadata: includeMetadata ? 'true' : 'false',
      encoding,
      lineEndings
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
        format: 'txt',
        preserveStructure: preserveStructure ? 'true' : 'false',
        includeMetadata: includeMetadata ? 'true' : 'false',
        encoding,
        lineEndings
      } as any);
      setBatchResults(result.results ?? []);
      setBatchConverted(true);
      const successes = (result.results ?? []).filter(r => r.success);
      if (successes.length > 0) {
        const failures = (result.results ?? []).filter(r => !r.success);
        setError(failures.length ? `${failures.length} file${failures.length > 1 ? 's' : ''} failed.` : null);
      } else {
        setError('Batch conversion failed. Please try again.');
        setBatchConverted(false);
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
    a.download = convertedFilename || (selectedFile ? selectedFile.name.replace(/\.epub$/i, '.txt') : 'converted.txt');
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
        <title>{t('epub_to_txt.meta_title')}</title>
        <meta name="description" content={t('epub_to_txt.meta_description')} />
        <meta name="keywords" content={t('epub_to_txt.meta_keywords')} />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-slate-50">
      <Header />
      
      {/* Hero Section - Narrowed */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t('epub_to_txt.heading')}
            </h1>
            <p className="text-lg sm:text-xl text-gray-100 mb-6 max-w-2xl mx-auto">
              {t('epub_to_txt.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-200">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>{t('epub_to_txt.badge_fast')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>{t('epub_to_txt.badge_secure')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{t('epub_to_txt.badge_no_registration')}</span>
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
                      ? 'bg-sky-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <FileText className="w-5 h-5 inline mr-2" />
                  {t('epub_to_txt.mode_single')}
                </button>
                <button
                  onClick={handleSwitchToBatch}
                  className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all ${
                    batchMode 
                      ? 'bg-sky-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <FileImage className="w-5 h-5 inline mr-2" />
                  {t('epub_to_txt.mode_batch')}
                </button>
              </div>

              {/* File Upload Area */}
              <div className="border-2 border-dashed border-blue-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors">
                <Upload className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {batchMode ? t('epub_to_txt.upload_multiple') : t('epub_to_txt.upload_single')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {batchMode 
                    ? t('epub_to_txt.upload_multiple_desc')
                    : t('epub_to_txt.upload_single_desc')
                  }
                </p>
                {!batchMode && (
                  <p className="text-sm text-gray-600 mb-4">
                    {t('epub_to_txt.file_limit_single')}
                  </p>
                )}
                {batchMode && (
                  <p className="text-sm text-gray-600 mb-4">
                    {t('epub_to_txt.file_limit_batch')}
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
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-colors"
                >
                  {t('epub_to_txt.choose_files')}
                </button>
              </div>

              {/* File Preview */}
              {previewUrl && !batchMode && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-4">{t('epub_to_txt.preview')}</h4>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center justify-center h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded">
                      <BookOpen className="w-12 h-12 text-blue-500" />
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
                          <h4 className="text-lg font-semibold">{t('epub_to_txt.selected_files', { count: batchFiles.length })}</h4>
                          <div className={`text-sm font-medium ${sizeDisplay.isWarning ? 'text-orange-600' : 'text-gray-600'}`}>
                            {sizeDisplay.text}
                          </div>
                        </div>
                        {sizeDisplay.isWarning && (
                          <div className="mb-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                            <div className="flex items-center">
                              <AlertCircle className="w-4 h-4 text-orange-500 mr-2" />
                              <span className="text-sm text-orange-700">
                                {t('epub_to_txt.batch_size_warning')}
                              </span>
                            </div>
                          </div>
                        )}
                        <div className="space-y-2 max-h-40 overflow-y-auto">
                          {batchFiles.map((file, index) => (
                            <div key={index} className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3">
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
                  className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
                >
                  {isConverting ? (
                    <div className="flex items-center justify-center">
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                      {t('epub_to_txt.converting')}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Zap className="w-5 h-5 mr-2" />
                      {batchMode ? t('epub_to_txt.convert_files', { count: batchFiles.length }) : t('epub_to_txt.convert_button')}
                    </div>
                  )}
                </button>
              </div>

              {/* Success Message & Download */}
              {convertedFile && !batchMode && (
                <div className="mt-6 p-6 rounded-xl border bg-green-50 border-green-200">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <h4 className="text-lg font-semibold text-green-800">{t('epub_to_txt.conversion_complete')}</h4>
                  </div>
                  <p className="text-green-700 mb-4">
                    {t('epub_to_txt.conversion_success')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleDownload}
                      className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      {t('epub_to_txt.download_txt')}
                    </button>
                    <button
                      onClick={resetForm}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-colors flex items-center justify-center"
                    >
                      <RefreshCw className="w-5 h-5 mr-2" />
                      {t('epub_to_txt.convert_another')}
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
                      {batchResults.filter(r => r.success).length > 0 ? t('epub_to_txt.batch_complete') : t('epub_to_txt.batch_failed')}
                    </h4>
                  </div>
                  <p className={`mb-4 ${
                    batchResults.filter(r => r.success).length > 0 ? 'text-green-700' : 'text-red-700'
                  }`}>
                    {t('epub_to_txt.batch_summary', { 
                      success: batchResults.filter(r => r.success).length, 
                      total: batchResults.length 
                    })}
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
                    className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-colors flex items-center justify-center"
                  >
                    <RefreshCw className="w-5 h-5 mr-2" />
                    {t('epub_to_txt.convert_more')}
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
                <Settings className="w-5 h-5 mr-2 text-blue-600" />
                {t('epub_to_txt.settings_title')}
              </h3>
              
              {/* Encoding */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {t('epub_to_txt.settings_encoding_label')}
                </label>
                <select
                  value={encoding}
                  onChange={(e) => setEncoding(e.target.value as 'utf-8' | 'ascii' | 'utf-16')}
                  className="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="utf-8">{t('epub_to_txt.settings_encoding_utf8')}</option>
                  <option value="ascii">{t('epub_to_txt.settings_encoding_ascii')}</option>
                  <option value="utf-16">{t('epub_to_txt.settings_encoding_utf16')}</option>
                </select>
              </div>

              {/* Line Endings */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {t('epub_to_txt.settings_line_endings_label')}
                </label>
                <select
                  value={lineEndings}
                  onChange={(e) => setLineEndings(e.target.value as 'unix' | 'windows' | 'mac')}
                  className="w-full p-3 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                >
                  <option value="unix">{t('epub_to_txt.settings_line_endings_unix')}</option>
                  <option value="windows">{t('epub_to_txt.settings_line_endings_windows')}</option>
                  <option value="mac">{t('epub_to_txt.settings_line_endings_mac')}</option>
                </select>
              </div>

              {/* Preserve Structure */}
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preserveStructure}
                    onChange={(e) => setPreserveStructure(e.target.checked)}
                    className="rounded border-blue-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{t('epub_to_txt.settings_preserve_structure')}</span>
                </label>
              </div>

              {/* Include Metadata */}
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={includeMetadata}
                    onChange={(e) => setIncludeMetadata(e.target.checked)}
                    className="rounded border-purple-300 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{t('epub_to_txt.settings_include_metadata')}</span>
                </label>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-500" />
                {t('epub_to_txt.features_title')}
              </h3>
              <div className="space-y-4">
                {[
                  t('epub_to_txt.feature_1'),
                  t('epub_to_txt.feature_2'),
                  t('epub_to_txt.feature_3'),
                  t('epub_to_txt.feature_4'),
                  t('epub_to_txt.feature_5'),
                  t('epub_to_txt.feature_6')
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
                <BarChart3 className="w-5 h-5 mr-2 text-indigo-600" />
                {t('epub_to_txt.use_cases_title')}
              </h3>
              <div className="space-y-3">
                {[
                  t('epub_to_txt.use_case_1'),
                  t('epub_to_txt.use_case_2'),
                  t('epub_to_txt.use_case_3'),
                  t('epub_to_txt.use_case_4'),
                  t('epub_to_txt.use_case_5'),
                  t('epub_to_txt.use_case_6')
                ].map((useCase, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3 flex-shrink-0"></div>
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
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-colors"
          >
            {t('epub_to_txt.back_button')}
          </button>
        </div>

        {/* SEO Content Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            {t('epub_to_txt.seo_heading')}
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t('epub_to_txt.seo_intro')}
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{t('epub_to_txt.seo_benefits_heading')}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{t('epub_to_txt.seo_benefit_1_title')}</h4>
                <p className="text-gray-700">
                  {t('epub_to_txt.seo_benefit_1_desc')}
                </p>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-slate-900 mb-3">{t('epub_to_txt.seo_benefit_2_title')}</h4>
                <p className="text-gray-700">
                  {t('epub_to_txt.seo_benefit_2_desc')}
                </p>
              </div>
              
              <div className="bg-zinc-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-zinc-900 mb-3">{t('epub_to_txt.seo_benefit_3_title')}</h4>
                <p className="text-gray-700">
                  {t('epub_to_txt.seo_benefit_3_desc')}
                </p>
              </div>
              
              <div className="bg-neutral-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-neutral-900 mb-3">{t('epub_to_txt.seo_benefit_4_title')}</h4>
                <p className="text-gray-700">
                  {t('epub_to_txt.seo_benefit_4_desc')}
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{t('epub_to_txt.seo_use_cases_heading')}</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-gray-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('epub_to_txt.seo_use_case_1_title')}</h4>
                  <p className="text-gray-700">{t('epub_to_txt.seo_use_case_1_desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-slate-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('epub_to_txt.seo_use_case_2_title')}</h4>
                  <p className="text-gray-700">{t('epub_to_txt.seo_use_case_2_desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-zinc-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('epub_to_txt.seo_use_case_3_title')}</h4>
                  <p className="text-gray-700">{t('epub_to_txt.seo_use_case_3_desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-neutral-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('epub_to_txt.seo_use_case_4_title')}</h4>
                  <p className="text-gray-700">{t('epub_to_txt.seo_use_case_4_desc')}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">{t('epub_to_txt.seo_cta_heading')}</h3>
              <p className="text-lg mb-6 opacity-90">
                {t('epub_to_txt.seo_cta_description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  {t('epub_to_txt.seo_cta_start')}
                </button>
                <button
                  onClick={handleBack}
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  {t('epub_to_txt.seo_cta_back')}
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
