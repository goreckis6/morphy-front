import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Header } from '../Header';
import { 
  Upload, 
  Download, 
  Settings, 
  FileText,
  RefreshCw,
  CheckCircle,
  AlertCircle,
  Zap
} from 'lucide-react';
import { useFileValidation } from '../../hooks/useFileValidation';

export const DOCToCSVConverter: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [convertedFile, setConvertedFile] = useState<Blob | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [batchMode, setBatchMode] = useState(false);
  const [batchFiles, setBatchFiles] = useState<File[]>([]);
  const [batchConverted, setBatchConverted] = useState(false);
  const [batchResults, setBatchResults] = useState<Array<{file: File, success: boolean, downloadPath?: string, error?: string}>>([]);
  const [includeMetadata, setIncludeMetadata] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const batchFileInputRef = useRef<HTMLInputElement>(null);

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

  const resetForm = () => {
    setSelectedFile(null);
    setConvertedFile(null);
    setError(null);
    setBatchFiles([]);
    setBatchResults([]);
    setBatchConverted(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
    if (batchFileInputRef.current) batchFileInputRef.current.value = '';
    clearValidationError();
  };

  const handleSwitchToSingle = () => {
    resetForm();
    setBatchMode(false);
  };

  const handleSwitchToBatch = () => {
    resetForm();
    setBatchMode(true);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.name.toLowerCase().endsWith('.doc') || file.name.toLowerCase().endsWith('.docx')) {
        setSelectedFile(file);
        setError(null);
        setConvertedFile(null); // Reset previous conversion
      } else {
        setError('Please select a valid DOC or DOCX file');
      }
    }
  };

  const handleBatchFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const docFiles = files.filter(file => 
      file.name.toLowerCase().endsWith('.doc') || file.name.toLowerCase().endsWith('.docx')
    );
    
    // Validate files using the shared hook
    const validation = validateBatchFiles(docFiles);
    
    if (validation.error) {
      setError(validation.error);
      setBatchFiles([]);
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    // Basic validation for DOC files
    if (docFiles.length === 0) {
      setError('Please select at least one DOC file');
      setBatchFiles([]);
      if (batchFileInputRef.current) batchFileInputRef.current.value = '';
      return;
    }

    setBatchFiles(docFiles);
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
      
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/convert/doc-to-csv/single`, {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Conversion failed');
      }

      const blob = await response.blob();
      setConvertedFile(blob);
    } catch (err) {
      console.error('DOC to CSV conversion error:', err);
      setError(err instanceof Error ? err.message : 'Conversion failed. Please try again.');
    } finally {
      setIsConverting(false);
    }
  };

  const handleBatchConvert = async () => {
    if (batchFiles.length === 0) return;
    
    setIsConverting(true);
    setError(null);
    
    try {
      const formData = new FormData();
      batchFiles.forEach(file => {
        formData.append('files', file);
      });
      formData.append('includeMetadata', includeMetadata.toString());
      
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/convert/doc-to-csv/batch`, {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Batch conversion failed');
      }

      const data = await response.json();
      setBatchResults(data.results);
      setBatchConverted(true);
    } catch (err) {
      console.error('DOC to CSV batch conversion error:', err);
      setError(err instanceof Error ? err.message : 'Batch conversion failed. Please try again.');
    } finally {
      setIsConverting(false);
    }
  };

  const downloadFile = (blob: Blob, filename: string) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
    a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
  };

  const downloadBatchFile = (downloadPath: string, filename: string) => {
    const a = document.createElement('a');
    a.href = downloadPath;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{t('doc_to_csv.meta_title')}</title>
        <meta name="description" content={t('doc_to_csv.meta_description')} />
        <meta name="keywords" content="DOC to CSV, convert DOC to CSV, Word to CSV converter, document to spreadsheet" />
      </Helmet>
      
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('doc_to_csv.title')}
            </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('doc_to_csv.subtitle')}
            </p>
              </div>

        {/* Mode Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg bg-white p-1 shadow-lg">
            <button
              onClick={handleSwitchToSingle}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                !batchMode
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                {t('common.single_file')}
              </div>
            </button>
            <button
              onClick={handleSwitchToBatch}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                batchMode
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                {t('common.batch_convert')}
              </div>
            </button>
        </div>
      </div>

        {/* Single Mode */}
        {!batchMode && (
          <div className="max-w-4xl mx-auto">
            {/* Upload Area */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
              <label className="block mb-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer">
                  <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                  <p className="text-lg font-medium text-gray-700 mb-2">
                    {t('doc_to_csv.upload_single')}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    Drag and drop your DOC file here or click to browse
                  </p>
                  <p className="text-sm text-gray-400">
                    {t('doc_to_csv.file_limits_single')}
                  </p>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".doc,.docx"
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </label>
              </div>

            {/* File Info */}
            {selectedFile && (
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="w-8 h-8 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">{selectedFile.name}</p>
                      <p className="text-sm text-gray-500">{formatFileSize(selectedFile.size)}</p>
                    </div>
                  </div>
                  </div>
                </div>
              )}

            {/* Settings */}
            {selectedFile && (
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <Settings className="w-5 h-5 text-gray-600" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {t('doc_to_csv.settings')}
                  </h3>
                </div>
                <div className="space-y-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeMetadata}
                      onChange={(e) => setIncludeMetadata(e.target.checked)}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <div>
                      <p className="font-medium text-gray-900">{t('doc_to_csv.include_metadata')}</p>
                      <p className="text-sm text-gray-500">{t('doc_to_csv.include_metadata_desc')}</p>
                    </div>
                  </label>
                </div>
                </div>
              )}

              {/* Convert Button */}
            {selectedFile && (
              <div className="mb-6">
                <button
                  onClick={handleSingleConvert}
                  disabled={isConverting}
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-3"
                >
                  {isConverting ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      {t('doc_to_csv.converting')}
                    </>
                  ) : (
                    <>
                      <Upload className="w-5 h-5" />
                      {t('doc_to_csv.convert_to_csv')}
                    </>
                  )}
                </button>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-red-700">{error}</p>
                </div>
              )}

            {/* Success Result */}
            {convertedFile && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <h4 className="text-lg font-semibold text-green-800">
                    {t('doc_to_csv.conversion_complete')}
                  </h4>
                  </div>
                <p className="text-green-700 mb-4">{t('doc_to_csv.success_message')}</p>
                <div className="flex gap-3">
                            <button
                    onClick={() => downloadFile(convertedFile, selectedFile?.name.replace(/\.docx?$/i, '.csv') || 'converted.csv')}
                    className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center gap-2"
                            >
                    <Download className="w-5 h-5" />
                    {t('doc_to_csv.download_csv')}
                            </button>
                    <button
                      onClick={resetForm}
                    className="bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors flex items-center gap-2"
                    >
                    <RefreshCw className="w-5 h-5" />
                    {t('doc_to_csv.convert_another')}
                    </button>
                  </div>
                </div>
              )}
            </div>
        )}

        {/* Batch Mode */}
        {batchMode && (
          <div className="max-w-6xl mx-auto">
            {/* Upload Area */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
              <label className="block mb-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer">
                  <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                  <p className="text-lg font-medium text-gray-700 mb-2">
                    {t('doc_to_csv.upload_batch')}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    Select multiple DOC files to convert them all at once
                  </p>
                  <p className="text-sm text-gray-400">
                    {t('doc_to_csv.file_limits_batch')}
                  </p>
              </div>
                  <input
                  ref={batchFileInputRef}
                  type="file"
                  accept=".doc,.docx"
                  multiple
                  onChange={handleBatchFileSelect}
                  className="hidden"
                />
                </label>
            </div>

            {/* File List */}
            {batchFiles.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {t('common.selected_files')} ({batchFiles.length})
              </h3>
                <div className="space-y-2">
                  {batchFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-900">{file.name}</span>
                  </div>
                      <span className="text-sm text-gray-500">{formatFileSize(file.size)}</span>
                  </div>
                ))}
              </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    {getBatchSizeDisplay(batchFiles)}
                  </p>
                </div>
              </div>
            )}

            {/* Settings */}
            {batchFiles.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <Settings className="w-5 h-5 text-gray-600" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {t('doc_to_csv.settings')}
                  </h3>
                </div>
                <div className="space-y-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeMetadata}
                      onChange={(e) => setIncludeMetadata(e.target.checked)}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                    />
                <div>
                      <p className="font-medium text-gray-900">{t('doc_to_csv.include_metadata')}</p>
                      <p className="text-sm text-gray-500">{t('doc_to_csv.include_metadata_desc')}</p>
                </div>
                  </label>
                </div>
              </div>
            )}

            {/* Convert Button */}
            {batchFiles.length > 0 && (
              <div className="mb-6">
                <button
                  onClick={handleBatchConvert}
                  disabled={isConverting}
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-3"
                >
                  {isConverting ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      {t('doc_to_csv.converting')}
                    </>
                  ) : (
                    <>
                      <Upload className="w-5 h-5" />
                      {t('doc_to_csv.convert_all_to_csv')}
                    </>
                  )}
                </button>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-red-700">{error}</p>
              </div>
            )}

            {/* Batch Results */}
            {batchConverted && batchResults.length > 0 && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <h4 className="text-lg font-semibold text-green-800">
                    {t('doc_to_csv.batch_conversion_complete')}
                  </h4>
                </div>
                <p className="text-green-700 mb-6">
                  {t('doc_to_csv.batch_success_message', { 
                    count: batchResults.filter(r => r.success).length,
                    total: batchFiles.length 
                  })}
                </p>
                <div className="space-y-3">
                  {batchResults.map((result, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {result.success ? (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-red-600" />
                        )}
                        <span className="text-gray-900">{result.file.name}</span>
                      </div>
                      {result.success && result.downloadPath ? (
                        <button
                          onClick={() => downloadBatchFile(result.downloadPath!, result.file.name.replace(/\.docx?$/i, '.csv'))}
                          className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center gap-2"
                        >
                          <Download className="w-4 h-4" />
                          {t('common.download')}
                        </button>
                      ) : (
                        <span className="text-red-600 text-sm">{result.error}</span>
                      )}
            </div>
                  ))}
          </div>
                <div className="mt-6">
                  <button
                    onClick={resetForm}
                    className="bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors flex items-center gap-2"
                  >
                    <RefreshCw className="w-5 h-5" />
                    {t('doc_to_csv.convert_more_files')}
                  </button>
        </div>
      </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
