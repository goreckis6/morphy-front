import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Header } from '../Header';
import { 
  Upload, 
  Download, 
  Settings, 
  FileText,
  BookOpen,
  RefreshCw,
  CheckCircle,
  AlertCircle,
  Zap,
  Shield,
  Clock,
  Star,
  Table,
  BarChart3
} from 'lucide-react';
import { useFileValidation } from '../../hooks/useFileValidation';
import { apiService } from '../../services/api';

export const EPUBToCSVConverter: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [convertedFile, setConvertedFile] = useState<Blob | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [includeMetadata, setIncludeMetadata] = useState<boolean>(true);
  const [delimiter, setDelimiter] = useState<string>(',');
  const [batchMode, setBatchMode] = useState(false);
  const [batchFiles, setBatchFiles] = useState<File[]>([]);
  const [batchConverted, setBatchConverted] = useState(false);
  const [batchResults, setBatchResults] = useState<Array<{ file: File; blob: Blob }>>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Language synchronization
  useEffect(() => {
    const path = window.location.pathname;
    if (path.startsWith('/pl/')) {
      i18n.changeLanguage('pl');
    } else if (path.startsWith('/de/')) {
      i18n.changeLanguage('de');
    } else {
      i18n.changeLanguage('en');
    }
  }, [i18n]);

  // Use shared validation hook
  const {
    validateBatchFiles,
    getBatchSizeDisplay,
    formatFileSize,
    clearValidationError
  } = useFileValidation();

  // Reset files when switching modes
  useEffect(() => {
    resetForm();
  }, [batchMode]);

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.name.toLowerCase().endsWith('.epub')) {
        setSelectedFile(file);
        setError(null);
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
    
    // Check for files larger than 100MB
    const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100MB
    const oversizedFile = epubFiles.find(file => file.size > MAX_FILE_SIZE);
    
    if (oversizedFile) {
      setError(`File "${oversizedFile.name}" is too large (${formatFileSize(oversizedFile.size)}). Maximum allowed size is 100MB.`);
      setBatchFiles([]);
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }
    
    // Basic validation for EPUB files
    if (epubFiles.length === 0) {
      setError('Please select at least one EPUB file');
      setBatchFiles([]);
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }
    
    setBatchFiles(epubFiles);
    setError(null);
    clearValidationError();
  };

  const handleConvert = async (file: File): Promise<Blob> => {
    try {
      console.log('EPUB to CSV: Converting file:', file.name, 'size:', file.size, 'bytes');
      console.log('EPUB to CSV: Include Metadata:', includeMetadata, 'Delimiter:', delimiter);

      const formData = new FormData();
      formData.append('file', file);
      formData.append('includeMetadata', includeMetadata.toString());
      formData.append('delimiter', delimiter);

      const response = await fetch(`${apiService.API_URL}/convert/epub-to-csv/single`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Conversion failed: ${response.statusText}`);
      }

      const blob = await response.blob();
      console.log('EPUB to CSV: Conversion successful, blob size:', blob.size, 'bytes');
      return blob;
    } catch (error) {
      console.error('EPUB to CSV conversion error:', error);
      throw new Error(error instanceof Error ? error.message : 'Failed to convert EPUB to CSV. Please try again.');
    }
  };

  const handleSingleConvert = async () => {
    if (!selectedFile) return;
    
    setIsConverting(true);
    setError(null);
    
    try {
      const converted = await handleConvert(selectedFile);
      setConvertedFile(converted);
    } catch (err) {
      console.error('EPUB to CSV conversion error:', err);
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
      console.log('EPUB to CSV Batch: Converting', batchFiles.length, 'files');
      console.log('EPUB to CSV Batch: Include Metadata:', includeMetadata, 'Delimiter:', delimiter);

      const formData = new FormData();
      batchFiles.forEach(file => {
        formData.append('files', file);
      });
      formData.append('includeMetadata', includeMetadata.toString());
      formData.append('delimiter', delimiter);

      const response = await fetch(`${apiService.API_URL}/convert/epub-to-csv/batch`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Batch conversion failed');
      }

      const result = await response.json();
      console.log('EPUB to CSV Batch: Conversion result:', result);
      
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
      console.error('EPUB to CSV batch conversion error:', err);
      setError(err instanceof Error ? err.message : 'Batch conversion failed. Please try again.');
    } finally {
      setIsConverting(false);
    }
  };

  const handleDownload = () => {
    if (convertedFile) {
      const url = URL.createObjectURL(convertedFile);
      const a = document.createElement('a');
      a.href = url;
      a.download = selectedFile ? selectedFile.name.replace('.epub', '.csv') : 'converted.csv';
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
    setSelectedFile(null);
    setConvertedFile(null);
    setError(null);
    setBatchFiles([]);
    setBatchConverted(false);
    setBatchResults([]);
    setIncludeMetadata(true);
    setDelimiter(',');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleBatchFileDownload = (file: File, blob: Blob) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name.replace('.epub', '.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <Helmet>
        <title>{t('epub_to_csv.meta_title')}</title>
        <meta name="description" content={t('epub_to_csv.meta_description')} />
        <meta name="keywords" content="EPUB to CSV, ebook converter, EPUB extractor, CSV converter, batch conversion" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />
      
      {/* Hero Section - Narrowed */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t('epub_to_csv.title')}
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
              {t('epub_to_csv.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-200">
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

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 pb-16">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-blue-200">
          
          {/* Mode Toggle */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-4 sm:px-6 py-4 border-b border-blue-200">
            <div className="flex justify-center">
              <div className="inline-flex rounded-lg bg-white p-1 shadow-md">
                <button
                  onClick={() => setBatchMode(false)}
                  className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                    !batchMode
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <FileText className="w-5 h-5 inline mr-2" />
                  {t('single_mode')}
                </button>
                <button
                  onClick={() => setBatchMode(true)}
                  className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                    batchMode
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <BarChart3 className="w-5 h-5 inline mr-2" />
                  {t('batch_mode')}
                </button>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            {/* Single File Mode */}
            {!batchMode && (
              <>
                {/* Upload Section */}
                {!convertedFile && (
                  <div className="space-y-6">
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      className="border-3 border-dashed border-blue-300 rounded-xl p-8 sm:p-12 text-center hover:border-blue-500 hover:bg-blue-50/50 transition-all cursor-pointer group"
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".epub"
                        onChange={handleFileSelect}
                        className="hidden"
                      />
                      <div className="flex flex-col items-center space-y-4">
                        <div className="p-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full group-hover:scale-110 transition-transform">
                          <Upload className="w-12 h-12 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-lg font-semibold text-gray-700 mb-2">
                            {t('upload_epub_file')}
                          </p>
                          <p className="text-sm text-gray-500">
                            {t('single_file_limit')}
                          </p>
                        </div>
                        {selectedFile && (
                          <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200 w-full max-w-md">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3 flex-1 min-w-0">
                                <BookOpen className="w-8 h-8 text-blue-600 flex-shrink-0" />
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-gray-900 truncate">
                                    {selectedFile.name}
                                  </p>
                                  <p className="text-xs text-gray-500">
                                    {formatFileSize(selectedFile.size)}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Settings Section */}
                    {selectedFile && (
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                        <div className="flex items-center gap-2 mb-4">
                          <Settings className="w-5 h-5 text-blue-600" />
                          <h3 className="text-lg font-semibold text-gray-800">
                            {t('conversion_settings')}
                          </h3>
                        </div>
                        
                        <div className="space-y-4">
                          {/* Include Metadata Toggle */}
                          <div>
                            <label className="flex items-center space-x-3 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={includeMetadata}
                                onChange={(e) => setIncludeMetadata(e.target.checked)}
                                className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                              />
                              <span className="text-sm font-medium text-gray-700">
                                {t('epub_to_csv.include_metadata')}
                              </span>
                            </label>
                            <p className="text-xs text-gray-500 mt-1 ml-8">
                              {t('epub_to_csv.include_metadata_desc')}
                            </p>
                          </div>

                          {/* CSV Delimiter */}
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              {t('epub_to_csv.delimiter')}
                            </label>
                            <select
                              value={delimiter}
                              onChange={(e) => setDelimiter(e.target.value)}
                              className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                              <option value=",">{t('epub_to_csv.delimiter_comma')}</option>
                              <option value=";">{t('epub_to_csv.delimiter_semicolon')}</option>
                              <option value="\t">{t('epub_to_csv.delimiter_tab')}</option>
                              <option value="|">{t('epub_to_csv.delimiter_pipe')}</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Error Message */}
                    {error && (
                      <div className="flex items-center gap-3 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
                        <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                        <p className="text-sm text-red-700">{error}</p>
                      </div>
                    )}

                    {/* Convert Button */}
                    {selectedFile && (
                      <button
                        onClick={handleSingleConvert}
                        disabled={isConverting}
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                      >
                        {isConverting ? (
                          <>
                            <RefreshCw className="w-5 h-5 animate-spin" />
                            <span>{t('converting')}</span>
                          </>
                        ) : (
                          <>
                            <Table className="w-5 h-5" />
                            <span>{t('convert_to_csv')}</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                )}

                {/* Success State */}
                {convertedFile && (
                  <div className="text-center space-y-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                      <CheckCircle className="w-12 h-12 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {t('conversion_complete')}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {t('epub_to_csv.success_message')}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button
                        onClick={handleDownload}
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                      >
                        <Download className="w-5 h-5" />
                        <span>{t('download_csv')}</span>
                      </button>
                      <button
                        onClick={resetForm}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <RefreshCw className="w-5 h-5" />
                        <span>{t('convert_another')}</span>
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}

            {/* Batch Mode */}
            {batchMode && (
              <>
                {!batchConverted && (
                  <div className="space-y-6">
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      className="border-3 border-dashed border-blue-300 rounded-xl p-8 sm:p-12 text-center hover:border-blue-500 hover:bg-blue-50/50 transition-all cursor-pointer group"
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".epub"
                        multiple
                        onChange={handleBatchFileSelect}
                        className="hidden"
                      />
                      <div className="flex flex-col items-center space-y-4">
                        <div className="p-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full group-hover:scale-110 transition-transform">
                          <Upload className="w-12 h-12 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-lg font-semibold text-gray-700 mb-2">
                            {t('upload_epub_files')}
                          </p>
                          <p className="text-sm text-gray-500">
                            {t('batch_file_limit')}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Batch File List */}
                    {batchFiles.length > 0 && (
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <h3 className="text-lg font-semibold text-gray-800">
                            {t('selected_files')} ({batchFiles.length})
                          </h3>
                          <span className="text-sm text-gray-600">
                            {getBatchSizeDisplay(batchFiles)}
                          </span>
                        </div>
                        <div className="max-h-64 overflow-y-auto space-y-2 bg-gray-50 rounded-lg p-4">
                          {batchFiles.map((file, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                              <div className="flex items-center space-x-3 flex-1 min-w-0">
                                <BookOpen className="w-6 h-6 text-blue-600 flex-shrink-0" />
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-gray-900 truncate">
                                    {file.name}
                                  </p>
                                  <p className="text-xs text-gray-500">
                                    {formatFileSize(file.size)}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Settings Section */}
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                          <div className="flex items-center gap-2 mb-4">
                            <Settings className="w-5 h-5 text-blue-600" />
                            <h3 className="text-lg font-semibold text-gray-800">
                              {t('conversion_settings')}
                            </h3>
                          </div>
                          
                          <div className="space-y-4">
                            {/* Include Metadata Toggle */}
                            <div>
                              <label className="flex items-center space-x-3 cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={includeMetadata}
                                  onChange={(e) => setIncludeMetadata(e.target.checked)}
                                  className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                                />
                                <span className="text-sm font-medium text-gray-700">
                                  {t('epub_to_csv.include_metadata')}
                                </span>
                              </label>
                              <p className="text-xs text-gray-500 mt-1 ml-8">
                                {t('epub_to_csv.include_metadata_desc')}
                              </p>
                            </div>

                            {/* CSV Delimiter */}
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                {t('epub_to_csv.delimiter')}
                              </label>
                              <select
                                value={delimiter}
                                onChange={(e) => setDelimiter(e.target.value)}
                                className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              >
                                <option value=",">{t('epub_to_csv.delimiter_comma')}</option>
                                <option value=";">{t('epub_to_csv.delimiter_semicolon')}</option>
                                <option value="\t">{t('epub_to_csv.delimiter_tab')}</option>
                                <option value="|">{t('epub_to_csv.delimiter_pipe')}</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        {/* Error Message */}
                        {error && (
                          <div className="flex items-center gap-3 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
                            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                            <p className="text-sm text-red-700">{error}</p>
                          </div>
                        )}

                        {/* Convert Button */}
                        <button
                          onClick={handleBatchConvert}
                          disabled={isConverting}
                          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                          {isConverting ? (
                            <>
                              <RefreshCw className="w-5 h-5 animate-spin" />
                              <span>{t('converting')}</span>
                            </>
                          ) : (
                            <>
                              <Table className="w-5 h-5" />
                              <span>{t('convert_all_to_csv')}</span>
                            </>
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Batch Conversion Results */}
                {batchConverted && batchResults.length > 0 && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                        <CheckCircle className="w-12 h-12 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        {t('batch_conversion_complete')}
                      </h3>
                      <p className="text-gray-600">
                        {t('successfully_converted')} {batchResults.length} {t('files')}
                      </p>
                    </div>

                    {/* Results Grid - Mobile Optimized */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {batchResults.map((result, index) => (
                        <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200 hover:shadow-lg transition-shadow">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-start space-x-3 flex-1 min-w-0">
                              <Table className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                  {result.file.name.replace('.epub', '.csv')}
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                  {formatFileSize(result.blob.size)}
                                </p>
                              </div>
                            </div>
                          </div>
                          <button
                            onClick={() => handleBatchFileDownload(result.file, result.blob)}
                            className="w-full bg-white hover:bg-blue-50 text-blue-600 font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 border border-blue-200"
                          >
                            <Download className="w-4 h-4" />
                            <span className="text-sm">{t('download')}</span>
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Reset Button */}
                    <div className="text-center pt-4">
                      <button
                        onClick={resetForm}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-8 rounded-xl transition-all duration-300 inline-flex items-center gap-2"
                      >
                        <RefreshCw className="w-5 h-5" />
                        <span>{t('convert_more_files')}</span>
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {/* SEO Content Section */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8 border border-blue-100">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Star className="w-6 h-6 text-blue-600" />
              {t('epub_to_csv.seo.title')}
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>{t('epub_to_csv.seo.description')}</p>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                {t('epub_to_csv.seo.features_title')}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>{t('epub_to_csv.seo.feature_1')}</li>
                <li>{t('epub_to_csv.seo.feature_2')}</li>
                <li>{t('epub_to_csv.seo.feature_3')}</li>
                <li>{t('epub_to_csv.seo.feature_4')}</li>
                <li>{t('epub_to_csv.seo.feature_5')}</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                {t('epub_to_csv.seo.use_cases_title')}
              </h3>
              <p>{t('epub_to_csv.seo.use_cases')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
