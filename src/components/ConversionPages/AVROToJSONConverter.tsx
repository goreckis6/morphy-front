import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Header } from '../Header';
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
  Database,
  BarChart3
} from 'lucide-react';
import { useFileValidation } from '../../hooks/useFileValidation';
import { ConversionLimitBanner } from '../ConversionLimitBanner';
import { useAuth } from '../../contexts/AuthContext';
import { ConversionLimits } from '../../utils/conversionLimits';

export const AVROToJSONConverter: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { user } = useAuth();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [convertedFile, setConvertedFile] = useState<Blob | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [conversionLimitReached, setConversionLimitReached] = useState(false);
  const [prettyPrint, setPrettyPrint] = useState(true);
  const [includeSchema, setIncludeSchema] = useState(false);
  const [batchMode, setBatchMode] = useState(false);
  const [batchFiles, setBatchFiles] = useState<File[]>([]);
  const [batchConverted, setBatchConverted] = useState(false);
  const [batchResults, setBatchResults] = useState<any[]>([]);
  const [convertedFilename, setConvertedFilename] = useState<string | null>(null);

  // Ensure language is synced with URL on mount
  React.useEffect(() => {
    const path = window.location.pathname;
    const urlLang = path.startsWith('/pl/') || path === '/pl' ? 'pl' : 
                    path.startsWith('/de/') || path === '/de' ? 'de' : 'en';
    
    if (i18n.language !== urlLang) {
      i18n.changeLanguage(urlLang);
    }
  }, [i18n]);

  // Use shared validation hook
  const {
    validationError,
    validateSingleFile,
    validateBatchFiles,
    getSingleInfoMessage,
    getBatchInfoMessage,
    getBatchSizeDisplay,
    formatFileSize,
    clearValidationError
  } = useFileValidation();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.name.toLowerCase().endsWith('.avro')) {
        // Validate single file size using shared validation
        const validation = validateSingleFile(file);
        if (!validation.isValid) {
          setError(validation.error?.message || 'File validation failed');
          setSelectedFile(null);
          setPreviewUrl(null);
          if (event.target) {
            event.target.value = '';
          }
          return;
        }
        setSelectedFile(file);
        setError(null);
        clearValidationError();
        setPreviewUrl(URL.createObjectURL(file));
      } else {
        setError('Please select a valid AVRO file');
      }
    }
  };

  const handleBatchFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    
    // Filter to only AVRO files
    const avroFiles = files.filter(file => file.name.toLowerCase().endsWith('.avro'));
    
    if (avroFiles.length === 0) {
      setError('No valid AVRO files selected.');
      return;
    }

    // Validate batch files using shared validation
    const validation = validateBatchFiles(avroFiles);
    if (!validation.isValid) {
      setError(validation.error?.message || 'Batch validation failed');
      setBatchFiles([]);
      if (event.target) {
        event.target.value = '';
      }
      return;
    }

    setBatchFiles(avroFiles);
    setError(null);
    clearValidationError();
  };

  const handleConvert = async (file: File): Promise<Blob> => {
    // Mock conversion - in a real implementation, you would use a library like avro-js
    const jsonContent = JSON.stringify({
      "users": [
        { "name": "John Doe", "age": 30, "city": "New York" },
        { "name": "Jane Smith", "age": 25, "city": "Los Angeles" },
        { "name": "Bob Johnson", "age": 35, "city": "Chicago" }
      ]
    }, null, prettyPrint ? 2 : 0);
    return new Blob([jsonContent], { type: 'application/json' });
  };

  const handleSingleConvert = async () => {
    if (!selectedFile) return;

    // Check conversion limits for anonymous users (server-side IP-based)
    if (!user) {
      const canConvert = await ConversionLimits.checkServerLimits();
      if (!canConvert) {
        setConversionLimitReached(true);
        // Don't set error message here - let ConversionLimitBanner handle it
        return;
      }
    }
    
    setIsConverting(true);
    setError(null);
    setConversionLimitReached(false);
    
    try {
      // Use real API conversion
      const result = await apiService.convertFile(selectedFile, { format: 'json' });
      setConvertedFile(result.blob);
      setConvertedFilename(result.filename);
      
      // Conversion is now recorded on the backend via IP-based tracking
      // Banner will refresh when user clicks download
    } catch (err) {
      setError('Conversion failed. Please try again.');
    } finally {
      setIsConverting(false);
    }
  };

  const handleBatchConvert = async () => {
    if (batchFiles.length === 0) return;

    // Check conversion limits for anonymous users (server-side IP-based)
    if (!user) {
      const canConvert = await ConversionLimits.checkServerLimits();
      if (!canConvert) {
        setConversionLimitReached(true);
        // Don't set error message here - let ConversionLimitBanner handle it
        return;
      }
    }
    
    setIsConverting(true);
    setError(null);
    setConversionLimitReached(false);
    
    try {
      // Use real API batch conversion
      const result = await apiService.convertBatch(batchFiles, { format: 'json' });
      
      if (result.success) {
        const processedResults = result.results.map((item, index) => ({
          originalName: item.originalName,
          outputFilename: item.outputFilename || batchFiles[index].name.replace('.avro', '.json'),
          size: item.size || 0,
          success: item.success,
          downloadPath: item.downloadPath,
          error: item.error
        }));
        
        setBatchResults(processedResults);
        setBatchConverted(true);
        setError(null);
      } else {
        setError('Batch conversion failed. Please try again.');
      }
    } catch (err) {
      setError('Batch conversion failed. Please try again.');
    } finally {
      setIsConverting(false);
    }
  };

  const handleBatchDownload = (downloadPath: string, filename: string) => {
    const link = document.createElement('a');
    link.href = downloadPath;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Refresh the conversion limit banner for anonymous users after first batch download
    if (!user && (window as any).refreshConversionLimitBanner) {
      (window as any).refreshConversionLimitBanner();
    }
  };

  const handleDownload = () => {
    if (convertedFile) {
      const url = URL.createObjectURL(convertedFile);
      const a = document.createElement('a');
      a.href = url;
      a.download = selectedFile ? selectedFile.name.replace('.avro', '.json') : 'converted.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      // Refresh the conversion limit banner for anonymous users after download
      if (!user && (window as any).refreshConversionLimitBanner) {
        (window as any).refreshConversionLimitBanner();
      }
    }
  };

  const handleBack = () => {
    window.location.href = '/';
  };

  const resetForm = () => {
    setSelectedFile(null);
    setConvertedFile(null);
    setError(null);
    setPreviewUrl(null);
    setBatchFiles([]);
    setBatchConverted(false);
    setBatchResults([]);
    setConvertedFilename(null);
    clearValidationError();
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <>
      <Helmet>
        <title>{t('avro_to_json.meta_title')}</title>
        <meta name="description" content={t('avro_to_json.meta_description')} />
        <meta name="keywords" content="AVRO to JSON, Apache AVRO, JSON converter, data transformation, web development" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Header />
      
      {/* Hero Section - Narrowed */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t('avro_to_json.title')}
            </h1>
            <p className="text-lg sm:text-xl text-purple-100 mb-6 max-w-2xl mx-auto">
              {t('avro_to_json.subtitle')}
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
                  onClick={() => setBatchMode(false)}
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
                  onClick={() => setBatchMode(true)}
                  className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all ${
                    batchMode 
                      ? 'bg-purple-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <FileImage className="w-5 h-5 inline mr-2" />
                  {t('common.batch_convert')}
                </button>
              </div>

              {/* Conversion Limit Banner */}
              <ConversionLimitBanner className="mb-6" />

              {/* File Upload Area */}
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-purple-400 transition-colors">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {batchMode ? t('avro_to_json.upload_batch') : t('avro_to_json.upload_single')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {batchMode 
                    ? t('avro_to_json.upload_text_batch')
                    : t('avro_to_json.upload_text_single')
                  }
                </p>
                {!batchMode && (
                  <p className="text-xs text-blue-600 mb-2">{getSingleInfoMessage()}</p>
                )}
                {batchMode && (
                  <p className="text-sm text-blue-600 mb-4">{getBatchInfoMessage()}</p>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".avro"
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
              {previewUrl && !batchMode && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-4">{t('avro_to_json.preview')}</h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-center h-32 bg-gray-100 rounded">
                      <Database className="w-12 h-12 text-gray-400" />
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
                          <h4 className="text-lg font-semibold">{t('avro_to_json.selected_files')} ({batchFiles.length})</h4>
                          <div className={`text-sm font-medium ${sizeDisplay.isWarning ? 'text-orange-600' : 'text-gray-600'}`}>
                            {sizeDisplay.text}
                          </div>
                        </div>
                        {sizeDisplay.isWarning && (
                          <div className="mb-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                            <div className="flex items-center">
                              <AlertCircle className="w-4 h-4 text-orange-500 mr-2" />
                              <span className="text-sm text-orange-700">
                                {t('avro_to_json.batch_size_warning')}
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
              {(error || validationError) && !conversionLimitReached && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
                  <span className="text-red-700">{error || validationError}</span>
                </div>
              )}

              {/* Convert Button */}
              <div className="mt-8">
                <button
                  onClick={batchMode ? handleBatchConvert : handleSingleConvert}
                  disabled={isConverting || conversionLimitReached || (batchMode ? batchFiles.length === 0 : !selectedFile)}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
                >
                  {isConverting ? (
                    <div className="flex items-center justify-center">
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                      {t('common.converting')}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Zap className="w-5 h-5 mr-2" />
                      {batchMode ? t('avro_to_json.convert_files', { count: batchFiles.length }) : t('avro_to_json.convert_to_json')}
                    </div>
                  )}
                </button>
              </div>

              {/* Success Message & Download */}
              {convertedFile && !batchMode && (
                <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <h4 className="text-lg font-semibold text-green-800">{t('avro_to_json.conversion_complete')}</h4>
                  </div>
                  <p className="text-green-700 mb-4">
                    {t('avro_to_json.success_message')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleDownload}
                      className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      {t('avro_to_json.download_json')}
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
              {batchMode && batchConverted && batchResults.length > 0 && (
                <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <h4 className="text-lg font-semibold text-green-800">{t('avro_to_json.batch_conversion_complete')}</h4>
                  </div>
                  <p className="text-green-700 mb-4">
                    {t('avro_to_json.batch_success_message', { count: batchResults.filter(r => r.success).length, total: batchResults.length })}
                  </p>
                  <div className="space-y-2 max-h-40 overflow-y-auto mb-4">
                    {batchResults.map((result, index) => {
                      const displayName = result.outputFilename || `${result.originalName.replace(/\.[^.]+$/, '')}.json`;
                      const displaySize = result.size !== undefined ? formatFileSize(result.size) : undefined;
                      return (
                        <div key={index} className="flex items-center justify-between bg-white rounded-lg p-3">
                          <div className="flex flex-col">
                            <div className="flex items-center">
                              {result.success ? (
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                              ) : (
                                <AlertCircle className="w-4 h-4 text-red-500 mr-2" />
                              )}
                              <span className="text-sm font-medium">{displayName}</span>
                            </div>
                            {displaySize && (
                              <span className="text-xs text-gray-500 ml-6 mt-1">({displaySize})</span>
                            )}
                            {!result.success && result.error && (
                              <span className="text-xs text-red-600 ml-6 mt-1">{result.error}</span>
                            )}
                          </div>
                          {result.success && result.downloadPath && (
                            <button
                              onClick={() => handleBatchDownload(result.downloadPath!, displayName)}
                              className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                            >
                              {t('common.download')}
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={resetForm}
                      className="flex-1 bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors flex items-center justify-center"
                    >
                      <RefreshCw className="w-5 h-5 mr-2" />
                      {t('common.convert_more_files')}
                    </button>
                  </div>
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
                {t('avro_to_json.json_settings')}
              </h3>
              
              {/* Pretty Print */}
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={prettyPrint}
                    onChange={(e) => setPrettyPrint(e.target.checked)}
                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{t('avro_to_json.pretty_print')}</span>
                </label>
              </div>

              {/* Include Schema */}
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={includeSchema}
                    onChange={(e) => setIncludeSchema(e.target.checked)}
                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{t('avro_to_json.include_schema')}</span>
                </label>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-500" />
                {t('avro_to_json.sidebar_title')}
              </h3>
              <div className="space-y-4">
                {[
                  t('avro_to_json.feature_1'),
                  t('avro_to_json.feature_2'),
                  t('avro_to_json.feature_3'),
                  t('avro_to_json.feature_4'),
                  t('avro_to_json.feature_5'),
                  t('avro_to_json.feature_6')
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
                {t('avro_to_json.perfect_for_title')}
              </h3>
              <div className="space-y-3">
                {[
                  t('avro_to_json.use_case_1'),
                  t('avro_to_json.use_case_2'),
                  t('avro_to_json.use_case_3'),
                  t('avro_to_json.use_case_4'),
                  t('avro_to_json.use_case_5'),
                  t('avro_to_json.use_case_6')
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
{t('common.back_to_home')}
          </button>
        </div>

        {/* SEO Content Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            {t('avro_to_json.why_convert_title')}
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t('avro_to_json.seo_intro')}
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{t('avro_to_json.benefits_title')}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-purple-900 mb-3">{t('avro_to_json.benefit_universal_title')}</h4>
                <p className="text-gray-700">
                  {t('avro_to_json.benefit_universal_text')}
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-blue-900 mb-3">{t('avro_to_json.benefit_web_title')}</h4>
                <p className="text-gray-700">
                  {t('avro_to_json.benefit_web_text')}
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-green-900 mb-3">{t('avro_to_json.benefit_readable_title')}</h4>
                <p className="text-gray-700">
                  {t('avro_to_json.benefit_readable_text')}
                </p>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-orange-900 mb-3">{t('avro_to_json.benefit_lightweight_title')}</h4>
                <p className="text-gray-700">
                  {t('avro_to_json.benefit_lightweight_text')}
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{t('avro_to_json.use_cases_title')}</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('avro_to_json.use_case_web_title')}</h4>
                  <p className="text-gray-700">{t('avro_to_json.use_case_web_text')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('avro_to_json.use_case_api_title')}</h4>
                  <p className="text-gray-700">{t('avro_to_json.use_case_api_text')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('avro_to_json.use_case_microservices_title')}</h4>
                  <p className="text-gray-700">{t('avro_to_json.use_case_microservices_text')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('avro_to_json.use_case_visualization_title')}</h4>
                  <p className="text-gray-700">{t('avro_to_json.use_case_visualization_text')}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">{t('avro_to_json.ready_title')}</h3>
              <p className="text-lg mb-6 opacity-90">
                {t('avro_to_json.ready_text')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">MorphyIMG</h3>
            <p className="text-gray-400 mb-6">
              Convert and view files online for free. Support for 50+ formats.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <span>© 2024 MorphyIMG</span>
              <span>•</span>
              <span>Privacy Policy</span>
              <span>•</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>

      </div>

      </>

      );
};
