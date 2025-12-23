import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { apiService } from '../../services/api';
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
  Code,
  BarChart3
} from 'lucide-react';
import { useFileValidation } from '../../hooks/useFileValidation';

export const CSVToXMLConverter: React.FC = () => {
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    // Sync language with localStorage if needed
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  // File management state
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [convertedFile, setConvertedFile] = useState<Blob | null>(null);
  const [convertedFilename, setConvertedFilename] = useState<string | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [batchMode, setBatchMode] = useState(false);
  const [batchFiles, setBatchFiles] = useState<File[]>([]);
  const [batchResults, setBatchResults] = useState<Array<{
    originalName: string;
    outputFilename?: string;
    success: boolean;
    downloadPath?: string;
    size?: number;
    storedFilename?: string;
  }>>([]);
  const [batchConverted, setBatchConverted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Validation hook
  const {
    validationError,
    clearValidationError,
    validateSingleFile,
    validateBatchFiles,
    getSingleInfoMessage,
    getBatchInfoMessage,
    getBatchSizeDisplay,
    formatFileSize
  } = useFileValidation();

  // XML settings
  const [rootElement, setRootElement] = useState('data');
  const [rowElement, setRowElement] = useState('row');
  const [prettyPrint, setPrettyPrint] = useState(true);

  const handleBack = () => {
    window.location.href = '/';
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      clearValidationError();
      const validation = validateSingleFile(file);
      if (validation.isValid) {
        setSelectedFile(file);
        setError(null);
        setConvertedFile(null);
      }
    }
  };

  const handleBatchFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    clearValidationError();
    const validation = validateBatchFiles(files);
    if (validation.isValid) {
      setBatchFiles(files);
      setError(null);
    } else {
      setBatchFiles([]);
    }
  };

  const handleSingleConvert = async () => {
    if (!selectedFile) return;
    
    setIsConverting(true);
    setError(null);
    
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('rootElement', rootElement);
      formData.append('rowElement', rowElement);
      formData.append('prettyPrint', prettyPrint.toString());

      const API_BASE_URL = import.meta.env.PROD 
        ? 'https://api.formipeek.com' 
        : 'http://localhost:3000';

      const response = await fetch(`${API_BASE_URL}/convert/csv-to-xml/single`, {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Conversion failed' }));
        throw new Error(errorData.error || 'Conversion failed');
      }

      const blob = await response.blob();
      const filename = selectedFile.name.replace(/\.csv$/i, '.xml');
      
      setConvertedFile(blob);
      setConvertedFilename(filename);
    } catch (err) {
      console.error('CSV to XML conversion error:', err);
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
      const formData = new FormData();
      batchFiles.forEach(file => {
        formData.append('files', file);
      });
      formData.append('rootElement', rootElement);
      formData.append('rowElement', rowElement);
      formData.append('prettyPrint', prettyPrint.toString());

      const API_BASE_URL = import.meta.env.PROD 
        ? 'https://api.formipeek.com' 
        : 'http://localhost:3000';

      const response = await fetch(`${API_BASE_URL}/convert/csv-to-xml/batch`, {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Batch conversion failed' }));
        throw new Error(errorData.error || 'Batch conversion failed');
      }

      const result = await response.json();
      
      // Map backend response to expected structure
      const mappedResults = (result.results || []).map((r: any, idx: number) => ({
        originalName: r.originalName || batchFiles[idx]?.name || 'unknown.csv',
        outputFilename: r.outputFilename || r.filename || 'converted.xml',
        success: r.success !== undefined ? r.success : true,
        downloadPath: r.downloadPath || r.downloadUrl,
        size: r.size
      }));
      
      setBatchResults(mappedResults);
      setBatchConverted(true);
    } catch (err) {
      console.error('CSV to XML batch conversion error:', err);
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

  const handleBatchDownload = async (result: typeof batchResults[0]) => {
    if (!result.success) return;
    
    try {
      if (result.downloadPath) {
        const blob = await apiService.downloadFile(result.downloadPath);
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = result.outputFilename || 'converted.xml';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      } else {
        console.warn('No download path available for file:', result.outputFilename);
        setError('Download path not available. Please try converting again.');
      }
    } catch (err) {
      console.error('Download error:', err);
      setError('Failed to download file. Please try again.');
    }
  };

  const resetForm = () => {
    setSelectedFile(null);
    setConvertedFile(null);
    setConvertedFilename(null);
    setError(null);
    setBatchFiles([]);
    setBatchConverted(false);
    setBatchResults([]);
    clearValidationError();
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <>
      <Helmet>
        <title>{t('csv_to_xml.meta_title')}</title>
        <meta name="description" content={t('csv_to_xml.meta_description')} />
        <meta name="keywords" content="CSV to XML, XML converter, data exchange format, structured data" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <Header />
        
        <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-700">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                {t('csv_to_xml.title')}
              </h1>
              <p className="text-lg sm:text-xl text-indigo-100 mb-6 max-w-2xl mx-auto">
                {t('csv_to_xml.subtitle')}
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-indigo-200">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  <span>{t('common.lightning_fast')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>{t('common.secure')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{t('common.no_registration')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button
                    onClick={() => { setBatchMode(false); resetForm(); }}
                    className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all ${
                      !batchMode 
                        ? 'bg-indigo-600 text-white shadow-lg' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <FileText className="w-5 h-5 inline mr-2" />
                    {t('common.single_file')}
                  </button>
                  <button
                    onClick={() => { setBatchMode(true); resetForm(); }}
                    className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all ${
                      batchMode 
                        ? 'bg-indigo-600 text-white shadow-lg' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <FileImage className="w-5 h-5 inline mr-2" />
                    {t('common.batch_convert')}
                  </button>
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-indigo-400 transition-colors">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {batchMode ? t('csv_to_xml.upload_multiple') : t('csv_to_xml.upload_single')}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {batchMode 
                      ? t('csv_to_xml.upload_multiple_desc') 
                      : t('csv_to_xml.upload_single_desc')
                    }
                  </p>
                  {!batchMode && (
                    <p className="text-xs text-indigo-600 mb-2">{getSingleInfoMessage()}</p>
                  )}
                  {batchMode && (
                    <p className="text-sm text-indigo-600 mb-4">{getBatchInfoMessage()}</p>
                  )}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".csv"
                    multiple={batchMode}
                    onChange={batchMode ? handleBatchFileSelect : handleFileSelect}
                    className="hidden"
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                  >
                    {t('common.choose_files')}
                  </button>
                </div>

                {selectedFile && !batchMode && (
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold mb-4">{t('common.preview')}</h4>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-center h-32 bg-gray-100 rounded">
                        <Code className="w-12 h-12 text-gray-400" />
                      </div>
                      <div className="mt-4 text-center">
                        <p className="text-sm font-medium text-gray-900">{selectedFile.name}</p>
                        <p className="text-xs text-gray-500">{formatFileSize(selectedFile.size)}</p>
                      </div>
                    </div>
                  </div>
                )}

                {batchMode && batchFiles.length > 0 && (
                  <div className="mt-6">
                    {(() => {
                      const totalSize = batchFiles.reduce((s, f) => s + f.size, 0);
                      const sizeDisplay = getBatchSizeDisplay(totalSize);
                      return (
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-lg font-semibold">{t('common.selected_files', { count: batchFiles.length })}</h4>
                          <div className={`text-sm font-medium ${sizeDisplay.isWarning ? 'text-indigo-700' : 'text-gray-600'}`}>{sizeDisplay.text}</div>
                        </div>
                      );
                    })()}
                    <div className="space-y-2 max-h-40 overflow-y-auto">
                      {batchFiles.map((file, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                          <span className="text-sm font-medium">{file.name}</span>
                          <span className="text-xs text-gray-500">{formatFileSize(file.size)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {(error || validationError) && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
                    <span className="text-red-700">{error || validationError}</span>
                  </div>
                )}

                <div className="mt-8">
                  <button
                    onClick={batchMode ? handleBatchConvert : handleSingleConvert}
                    disabled={isConverting || (batchMode ? batchFiles.length === 0 : !selectedFile)}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
                  >
                    {isConverting ? (
                      <div className="flex items-center justify-center">
                        <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                        {t('common.converting')}
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Zap className="w-5 h-5 mr-2" />
                        {batchMode ? t('csv_to_xml.convert_files', { count: batchFiles.length }) : t('csv_to_xml.convert_to_xml')}
                      </div>
                    )}
                  </button>
                </div>

                {convertedFile && !batchMode && (
                  <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-xl">
                    <div className="flex items-center mb-4">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                      <h4 className="text-lg font-semibold text-green-800">{t('common.conversion_complete')}</h4>
                    </div>
                    <p className="text-green-700 mb-4">
                      {t('csv_to_xml.conversion_success')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={handleDownload}
                        className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        {t('csv_to_xml.download_xml')}
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

                {batchMode && batchConverted && batchResults.length > 0 && (
                  <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-xl">
                    <div className="flex items-center mb-4">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                      <h4 className="text-lg font-semibold text-green-800">{t('common.batch_conversion_complete')}</h4>
                    </div>
                    <div className="space-y-3 max-h-60 overflow-y-auto">
                      {batchResults.map((r, idx) => (
                        <div key={idx} className="bg-white rounded-lg p-4 border border-green-200">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start">
                                {r.success ? (
                                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                ) : (
                                  <AlertCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                                )}
                                <div className="min-w-0 flex-1">
                                  <p className="text-sm font-medium text-gray-900 truncate">
                                    {r.outputFilename || r.originalName.replace(/\.[^.]+$/, '.xml')}
                                  </p>
                                  {r.success && r.size && (
                                    <p className="text-xs text-gray-500 mt-1">{formatFileSize(r.size)}</p>
                                  )}
                                  {!r.success && r.error && (
                                    <p className="text-xs text-red-600 mt-1 break-words">{r.error}</p>
                                  )}
                                </div>
                              </div>
                            </div>
                            {r.success && (
                              <button
                                onClick={() => handleBatchDownload(r)}
                                className="w-full sm:w-auto bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors flex items-center justify-center sm:justify-start"
                              >
                                <Download className="w-4 h-4 mr-2" />
                                {t('common.download')}
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
                      {t('common.convert_more_files')}
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-6">
              
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <Settings className="w-5 h-5 mr-2 text-indigo-600" />
                  {t('csv_to_xml.settings_title')}
                </h3>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    {t('csv_to_xml.root_element')}
                  </label>
                  <input
                    type="text"
                    value={rootElement}
                    onChange={(e) => setRootElement(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="data"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    {t('csv_to_xml.row_element')}
                  </label>
                  <input
                    type="text"
                    value={rowElement}
                    onChange={(e) => setRowElement(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="row"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    {t('csv_to_xml.pretty_print')}
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={prettyPrint}
                      onChange={(e) => setPrettyPrint(e.target.checked)}
                      className="w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500"
                    />
                    <span className="ml-3 text-sm text-gray-700">{t('csv_to_xml.pretty_print_label')}</span>
                  </label>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <Star className="w-5 h-5 mr-2 text-yellow-500" />
                  {t('csv_to_xml.why_choose')}
                </h3>
                <div className="space-y-4">
                  {[
                    t('csv_to_xml.feature_structured'),
                    t('csv_to_xml.feature_readable'),
                    t('csv_to_xml.feature_batch'),
                    t('csv_to_xml.feature_valid'),
                    t('csv_to_xml.feature_secure')
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-indigo-600" />
                  {t('csv_to_xml.perfect_for')}
                </h3>
                <div className="space-y-3">
                  {[
                    t('csv_to_xml.use_case_api'),
                    t('csv_to_xml.use_case_data'),
                    t('csv_to_xml.use_case_web'),
                    t('csv_to_xml.use_case_config'),
                    t('csv_to_xml.use_case_exchange'),
                    t('csv_to_xml.use_case_xml')
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

          <div className="mt-12 text-center">
            <button
              onClick={handleBack}
              className="bg-gray-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
            >
              ← {t('common.back_to_home')}
            </button>
          </div>

          <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
              {t('csv_to_xml.seo_title')}
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t('csv_to_xml.seo_description')}
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{t('csv_to_xml.benefits_title')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-indigo-900 mb-3">{t('csv_to_xml.benefit_standard')}</h4>
                  <p className="text-gray-700">{t('csv_to_xml.benefit_standard_desc')}</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-purple-900 mb-3">{t('csv_to_xml.benefit_structured')}</h4>
                  <p className="text-gray-700">{t('csv_to_xml.benefit_structured_desc')}</p>
                </div>
                <div className="bg-pink-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-pink-900 mb-3">{t('csv_to_xml.benefit_valid')}</h4>
                  <p className="text-gray-700">{t('csv_to_xml.benefit_valid_desc')}</p>
                </div>
                <div className="bg-cyan-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-cyan-900 mb-3">{t('csv_to_xml.benefit_human')}</h4>
                  <p className="text-gray-700">{t('csv_to_xml.benefit_human_desc')}</p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{t('csv_to_xml.use_cases_title')}</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('csv_to_xml.use_case_api_title')}</h4>
                    <p className="text-gray-700">{t('csv_to_xml.use_case_api_desc')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('csv_to_xml.use_case_data_title')}</h4>
                    <p className="text-gray-700">{t('csv_to_xml.use_case_data_desc')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('csv_to_xml.use_case_exchange_title')}</h4>
                    <p className="text-gray-700">{t('csv_to_xml.use_case_exchange_desc')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-xl text-center">
                <h3 className="text-2xl font-bold mb-4">{t('csv_to_xml.cta_title')}</h3>
                <p className="text-lg mb-6 opacity-90">{t('csv_to_xml.cta_description')}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    {t('csv_to_xml.start_converting')}
                  </button>
                  <button
                    onClick={handleBack}
                    className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
                  >
                    {t('common.back_to_home')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />

      </div>
    </>
  );
};
