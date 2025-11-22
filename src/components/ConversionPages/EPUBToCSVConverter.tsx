import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { API_BASE_URL } from '../../services/api';
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

export const EPUBToCSVConverter: React.FC = () => {
  const { t } = useTranslation();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [convertedFile, setConvertedFile] = useState<Blob | null>(null);
  const [convertedFilename, setConvertedFilename] = useState<string | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [includeMetadata, setIncludeMetadata] = useState(true);
  const [delimiter, setDelimiter] = useState(',');
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
    // Reset previous state
    setError(null);
    setConvertedFile(null);
    setConvertedFilename(null);
    setPreviewUrl(null);
    
    const file = event.target.files?.[0];
    if (file) {
      if (file.name.toLowerCase().endsWith('.epub')) {
        // Validate single file size using shared validation
        const validation = validateSingleFile(file);
        if (!validation.isValid) {
          setError(validation.error || 'File validation failed');
          return;
        }
        setSelectedFile(file);
        setError(null);
        setPreviewUrl(URL.createObjectURL(file));
        clearValidationError();
      } else {
        setError('Please select a valid EPUB file');
      }
    }
  };

  const handleBatchFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Reset previous state
    setError(null);
    setBatchResults([]);
    setBatchConverted(false);
    
    const files = Array.from(event.target.files || []);
    const epubFiles = files.filter(file => 
      file.name.toLowerCase().endsWith('.epub')
    );
    
    // Validate batch files using shared validation
    const validation = validateBatchFiles(epubFiles);
    if (!validation.isValid) {
      setError(validation.error || 'Batch validation failed');
      return;
    }
    
    setBatchFiles(epubFiles);
    setError(null);
    clearValidationError();
  };

  const handleSingleConvert = async () => {
    if (!selectedFile) return;
    
    setIsConverting(true);
    setError(null);
    
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('includeMetadata', includeMetadata.toString());
      formData.append('delimiter', delimiter);

      const response = await fetch(`${API_BASE_URL}/convert/epub-to-csv/single`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Conversion failed');
      }

      const blob = await response.blob();
      setConvertedFile(blob);
      setConvertedFilename(selectedFile.name.replace('.epub', '.csv'));
    } catch (err) {
      console.error('EPUB to CSV conversion error:', err);
      let errorMessage = 'Conversion failed. Please try again.';
      
      if (err instanceof Error) {
        if (err.message.includes('Bad Zip file') || err.message.includes('not a valid ZIP archive')) {
          errorMessage = 'Invalid EPUB file: The file is corrupted or not a valid EPUB format. Please check your file and try again.';
        } else if (err.message.includes('No content extracted')) {
          errorMessage = 'No content found: The EPUB file appears to be empty or contains no readable text content.';
        } else {
          errorMessage = err.message;
        }
      }
      
      setError(errorMessage);
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
      const formData = new FormData();
      batchFiles.forEach(file => {
        formData.append('files', file);
      });
      formData.append('includeMetadata', includeMetadata.toString());
      formData.append('delimiter', delimiter);

      const response = await fetch(`${API_BASE_URL}/convert/epub-to-csv/batch`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Batch conversion failed');
      }

      const result = await response.json();
      setBatchResults(result.results ?? []);
      const successes = (result.results ?? []).filter((r: any) => r.success);
      if (successes.length > 0) {
        setBatchConverted(true);
        const failures = (result.results ?? []).filter((r: any) => !r.success);
        setError(failures.length ? `${failures.length} file${failures.length > 1 ? 's' : ''} failed.` : null);
      } else {
        setBatchConverted(false);
        setError('Batch conversion failed. Please try again.');
      }
    } catch (err) {
      console.error('EPUB to CSV batch conversion error:', err);
      setBatchConverted(false);
      
      let errorMessage = 'Batch conversion failed. Please try again.';
      
      if (err instanceof Error) {
        if (err.message.includes('Bad Zip file') || err.message.includes('not a valid ZIP archive')) {
          errorMessage = 'Invalid EPUB files: One or more files are corrupted or not valid EPUB format. Please check your files and try again.';
        } else if (err.message.includes('No content extracted')) {
          errorMessage = 'No content found: One or more EPUB files appear to be empty or contain no readable text content.';
        } else {
          errorMessage = err.message;
        }
      }
      
      setError(errorMessage);
    } finally {
      setIsConverting(false);
    }
  };

  const handleDownload = () => {
    if (!convertedFile) return;
    const url = URL.createObjectURL(convertedFile);
    const a = document.createElement('a');
    a.href = url;
    a.download = convertedFilename || (selectedFile ? selectedFile.name.replace(/\.epub$/i, '.csv') : 'converted.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleSwitchToSingle = () => {
    resetForm();
    setBatchMode(false);
  };

  const handleSwitchToBatch = () => {
    resetForm();
    setBatchMode(true);
  };

  const handleBatchDownload = async (result: any) => {
    try {
      if (result.downloadPath && result.downloadPath.startsWith('data:')) {
        const response = await fetch(result.downloadPath);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = result.outputFilename || 'converted.csv';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
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

  return (
    <>
      <Helmet>
        <title>{t('epub_to_csv.meta_title')} | MorphyHub</title>
        <meta name="description" content={t('epub_to_csv.meta_description')} />
        <meta name="keywords" content="EPUB to CSV, ebook converter, EPUB extractor, CSV converter, batch conversion" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />
      
      {/* Hero Section */}
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
                <span>{t('epub_to_csv.lightning_fast')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>{t('epub_to_csv.secure')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{t('epub_to_csv.no_registration')}</span>
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
                      ? 'bg-blue-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline mr-2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14,2 14,8 20,8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10,9 9,9 8,9"></polyline>
                  </svg>
                  {t('epub_to_csv.single_file')}
                </button>
                <button
                  onClick={handleSwitchToBatch}
                  className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all ${
                    batchMode 
                      ? 'bg-blue-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline mr-2">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                  {t('epub_to_csv.batch_convert')}
                </button>
              </div>

              {/* File Upload Area */}
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mx-auto mb-4">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7,10 12,15 17,10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {batchMode ? t('epub_to_csv.upload_multiple') : t('epub_to_csv.upload_single')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {batchMode 
                    ? t('epub_to_csv.upload_multiple_desc')
                    : t('epub_to_csv.upload_single_desc')
                  }
                </p>
                {!batchMode && (
                  <p className="text-sm text-blue-600 mb-4">
                    Single file limit: 100.00 MB per file.
                  </p>
                )}
                {batchMode && (
                  <p className="text-sm text-blue-600 mb-4">
                    Batch conversion supports up to 20 files, 100.00 MB per file, 100.00 MB total.
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
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  {t('epub_to_csv.choose_files')}
                </button>
              </div>

              {/* File Preview */}
              {previewUrl && !batchMode && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-4">Preview</h4>
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
                          <h4 className="text-lg font-semibold">Selected Files ({batchFiles.length})</h4>
                          <div className={`text-sm font-medium ${sizeDisplay.isWarning ? 'text-orange-600' : 'text-gray-600'}`}>
                            {sizeDisplay.text}
                          </div>
                        </div>
                        {sizeDisplay.isWarning && (
                          <div className="mb-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                            <div className="flex items-center">
                              <AlertCircle className="w-4 h-4 text-orange-500 mr-2" />
                              <span className="text-sm text-orange-700">
                                Batch size is getting close to the 100MB limit. Consider processing fewer files for better performance.
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
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
                >
                  {isConverting ? (
                    <div className="flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 animate-spin">
                        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                        <path d="M21 3v5h-5"></path>
                        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                        <path d="M3 21v-5h5"></path>
                      </svg>
                      {t('epub_to_csv.converting')}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                        <path d="M12 3v18"></path>
                        <rect x="2" y="3" width="20" height="18" rx="2"></rect>
                        <path d="M2 9h20"></path>
                        <path d="M2 15h20"></path>
                      </svg>
                      {batchMode ? `Convert ${batchFiles.length} Files` : 'Convert to CSV'}
                    </div>
                  )}
                </button>
              </div>

              {/* Success Message & Download */}
              {convertedFile && !batchMode && (
                <div className={`mt-6 p-6 rounded-xl border bg-green-50 border-green-200`}>
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <h4 className="text-lg font-semibold text-green-800">{t('epub_to_csv.conversion_success')}</h4>
                  </div>
                  <p className="text-green-700 mb-4">
                    {t('epub_to_csv.conversion_success')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleDownload}
                      className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7,10 12,15 17,10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                      </svg>
                      {t('epub_to_csv.download_csv')}
                    </button>
                    <button
                      onClick={resetForm}
                      className="flex-1 bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors flex items-center justify-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                        <path d="M21 3v5h-5"></path>
                        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                        <path d="M3 21v-5h5"></path>
                      </svg>
                      {t('epub_to_csv.convert_another')}
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
                      {batchResults.filter(r => r.success).length > 0 ? 'Batch Conversion Complete!' : 'Batch Conversion Failed'}
                    </h4>
                  </div>
                  <div className="space-y-2 max-h-60 overflow-y-auto">
                    {batchResults.map((r, i) => (
                      <div key={i} className={`border rounded-lg p-3 ${
                        r.success ? 'bg-white border-green-200' : 'bg-red-50 border-red-200'
                      }`}>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <div className="text-sm flex-1 min-w-0">
                            <div className="flex items-center">
                              {r.success ? (
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              ) : (
                                <AlertCircle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                              )}
                              <span className="font-medium text-gray-900 truncate">{r.outputFilename || r.originalName}</span>
                            </div>
                            {r.success && r.size && (
                              <div className="text-xs text-gray-500 mt-1 ml-6">{formatFileSize(r.size)}</div>
                            )}
                            {r.error && <div className="text-xs text-red-600 mt-1 ml-6 break-words">{t('epub_to_csv.failed_convert')} {r.originalName}</div>}
                          </div>
                          {r.success && r.downloadPath && (
                            <button 
                              onClick={() => handleBatchDownload(r)} 
                              className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors flex-shrink-0 w-full sm:w-auto"
                            >
                              {t('epub_to_csv.download')}
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
                    {t('epub_to_csv.convert_more')}
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
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-600">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
                {t('epub_to_csv.csv_settings')}
              </h3>
              
              {/* Include Metadata */}
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={includeMetadata}
                    onChange={(e) => setIncludeMetadata(e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{t('epub_to_csv.include_metadata')}</span>
                </label>
                <p className="text-xs text-gray-500 mt-1 ml-6">{t('epub_to_csv.include_metadata_desc')}</p>
              </div>

              {/* CSV Delimiter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('epub_to_csv.delimiter')}
                </label>
                <select
                  value={delimiter}
                  onChange={(e) => setDelimiter(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value=",">{t('epub_to_csv.delimiter_comma')}</option>
                  <option value=";">{t('epub_to_csv.delimiter_semicolon')}</option>
                  <option value="\t">{t('epub_to_csv.delimiter_tab')}</option>
                  <option value="|">{t('epub_to_csv.delimiter_pipe')}</option>
                </select>
              </div>
            </div>

            {/* Features List */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-600">
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
                </svg>
                {t('epub_to_csv.why_choose')}
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2 mt-0.5 flex-shrink-0">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22,4 12,14.01 9,11.01"></polyline>
                  </svg>
                  <span>{t('epub_to_csv.feature_extract')}</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2 mt-0.5 flex-shrink-0">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22,4 12,14.01 9,11.01"></polyline>
                  </svg>
                  <span>{t('epub_to_csv.feature_metadata')}</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2 mt-0.5 flex-shrink-0">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22,4 12,14.01 9,11.01"></polyline>
                  </svg>
                  <span>{t('epub_to_csv.feature_batch')}</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2 mt-0.5 flex-shrink-0">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22,4 12,14.01 9,11.01"></polyline>
                  </svg>
                  <span>{t('epub_to_csv.feature_delimiters')}</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2 mt-0.5 flex-shrink-0">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22,4 12,14.01 9,11.01"></polyline>
                  </svg>
                  <span>{t('epub_to_csv.feature_free')}</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2 mt-0.5 flex-shrink-0">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22,4 12,14.01 9,11.01"></polyline>
                  </svg>
                  <span>{t('epub_to_csv.feature_no_reg')}</span>
                </li>
              </ul>
            </div>

             {/* Use Cases */}
             <div className="bg-white rounded-2xl shadow-xl p-6">
               <h3 className="text-xl font-semibold mb-6 flex items-center">
                 <BarChart3 className="w-5 h-5 mr-2 text-slate-600" />
                 {t('epub_to_csv.use_cases_title')}
               </h3>
               <div className="space-y-3">
                 <div className="flex items-center">
                   <div className="w-2 h-2 bg-slate-500 rounded-full mr-3 flex-shrink-0"></div>
                   <span className="text-sm text-gray-700">{t('epub_to_csv.use_case_content')}</span>
                 </div>
                 <div className="flex items-center">
                   <div className="w-2 h-2 bg-slate-500 rounded-full mr-3 flex-shrink-0"></div>
                   <span className="text-sm text-gray-700">{t('epub_to_csv.use_case_mining')}</span>
                 </div>
                 <div className="flex items-center">
                   <div className="w-2 h-2 bg-slate-500 rounded-full mr-3 flex-shrink-0"></div>
                   <span className="text-sm text-gray-700">{t('epub_to_csv.use_case_science')}</span>
                 </div>
                 <div className="flex items-center">
                   <div className="w-2 h-2 bg-slate-500 rounded-full mr-3 flex-shrink-0"></div>
                   <span className="text-sm text-gray-700">{t('epub_to_csv.use_case_research')}</span>
                 </div>
                 <div className="flex items-center">
                   <div className="w-2 h-2 bg-slate-500 rounded-full mr-3 flex-shrink-0"></div>
                   <span className="text-sm text-gray-700">{t('epub_to_csv.use_case_cms')}</span>
                 </div>
                 <div className="flex items-center">
                   <div className="w-2 h-2 bg-slate-500 rounded-full mr-3 flex-shrink-0"></div>
                   <span className="text-sm text-gray-700">{t('epub_to_csv.use_case_database')}</span>
                 </div>
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
             ← Back to Home
           </button>
         </div>

         {/* SEO Content Section */}
         <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            {t('epub_to_csv.why_convert_title')}
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t('epub_to_csv.seo_intro')}
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{t('epub_to_csv.benefits_title')}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-emerald-900 mb-3">{t('epub_to_csv.benefit_structured_title')}</h4>
                <p className="text-gray-700">
                  {t('epub_to_csv.benefit_structured_text')}
                </p>
              </div>
              
              <div className="bg-teal-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-teal-900 mb-3">{t('epub_to_csv.benefit_analysis_title')}</h4>
                <p className="text-gray-700">
                  {t('epub_to_csv.benefit_analysis_text')}
                </p>
              </div>
              
              <div className="bg-cyan-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-cyan-900 mb-3">{t('epub_to_csv.benefit_compatibility_title')}</h4>
                <p className="text-gray-700">
                  {t('epub_to_csv.benefit_compatibility_text')}
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-green-900 mb-3">{t('epub_to_csv.benefit_metadata_title')}</h4>
                <p className="text-gray-700">
                  {t('epub_to_csv.benefit_metadata_text')}
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{t('epub_to_csv.use_cases_title')}</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('epub_to_csv.use_case_research_title')}</h4>
                  <p className="text-gray-700">{t('epub_to_csv.use_case_research_text')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('epub_to_csv.use_case_mining_title')}</h4>
                  <p className="text-gray-700">{t('epub_to_csv.use_case_mining_text')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('epub_to_csv.use_case_content_title')}</h4>
                  <p className="text-gray-700">{t('epub_to_csv.use_case_content_text')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('epub_to_csv.use_case_catalog_title')}</h4>
                  <p className="text-gray-700">{t('epub_to_csv.use_case_catalog_text')}</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">How It Works</h3>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Upload your EPUB file using our drag-and-drop interface or file browser</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Our converter extracts structured content including chapter titles, paragraph text, and metadata</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">The output CSV file contains columns for chapter number, title, paragraph number, and content</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Download your converted CSV file and analyze the data using your preferred tools</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-slate-600 to-gray-600 text-white p-8 rounded-xl text-center mt-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Convert Your EPUB Files?</h3>
              <p className="text-lg mb-6 opacity-90">
                Use our free online EPUB to CSV converter to transform your e-books into structured data.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="bg-white text-slate-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Converting Now
                </button>
                <button
                  onClick={() => window.location.href = '/'}
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-600 transition-colors"
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
