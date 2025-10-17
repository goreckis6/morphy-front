import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
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
  Code,
  BarChart3
} from 'lucide-react';
import { useFileValidation } from '../../hooks/useFileValidation';
import { apiService } from '../../services/api';
import { useAuth } from '../../contexts/AuthContext';
import { ConversionLimits } from '../../utils/conversionLimits';
import { ConversionLimitBanner } from '../ConversionLimitBanner';

export const CSVToJSONConverter: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { user } = useAuth();
  
  useEffect(() => {
    // Sync language with localStorage if needed
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [convertedFile, setConvertedFile] = useState<Blob | null>(null);
  const [convertedFilename, setConvertedFilename] = useState<string>('');
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [orient, setOrient] = useState<'records' | 'split' | 'index' | 'columns' | 'values'>('records');
  const [prettyPrint, setPrettyPrint] = useState(true);
  const [dateFormat, setDateFormat] = useState<'iso' | 'epoch'>('iso');
  const [batchMode, setBatchMode] = useState(false);
  const [batchFiles, setBatchFiles] = useState<File[]>([]);
  const [batchConverted, setBatchConverted] = useState(false);
  const [batchResults, setBatchResults] = useState<any[]>([]);
  const [conversionLimitReached, setConversionLimitReached] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { validationError, validateSingleFile, validateBatchFiles, getBatchSizeDisplay, formatFileSize, clearValidationError } = useFileValidation();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.name.toLowerCase().endsWith('.csv')) {
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
      setError(t('common.invalid_csv_file'));
    }
  };

  const handleBatchFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const csvFiles = files.filter(file => 
      file.name.toLowerCase().endsWith('.csv')
    );
    
    // Validate batch files
    const validation = validateBatchFiles(csvFiles);
    if (!validation.isValid) {
      setError(validation.error?.message || 'Batch validation failed');
      setBatchFiles([]);
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }
    
    setBatchFiles(csvFiles);
    setError(null);
    clearValidationError();
  };

  const handleSingleConvert = async () => {
    if (!selectedFile) return;
    
    // Check conversion limits for anonymous users
    if (!user) {
      const limitCheck = await ConversionLimits.checkServerLimits();
      if (limitCheck.reached) {
        setConversionLimitReached(true);
        setError(limitCheck.message);
        return;
      }
    }
    
    setIsConverting(true);
    setError(null);
    setConversionLimitReached(false);
    
    try {
      const options: any = {
        format: 'json',
        orient: orient,
        indent: prettyPrint ? '2' : '0',
        dateFormat: dateFormat
      };

      const result = await apiService.convertFile(selectedFile, options);
      setConvertedFile(result.blob);
      setConvertedFilename(result.filename);
    } catch (err) {
      console.error('Conversion error:', err);
      setError(err instanceof Error ? err.message : t('common.conversion_failed'));
    } finally {
      setIsConverting(false);
    }
  };

  const handleBatchConvert = async () => {
    if (batchFiles.length === 0) return;
    
    // Check conversion limits for anonymous users
    if (!user) {
      const limitCheck = await ConversionLimits.checkServerLimits();
      if (limitCheck.reached) {
        setConversionLimitReached(true);
        setError(limitCheck.message);
        return;
      }
    }
    
    setIsConverting(true);
    setError(null);
    setConversionLimitReached(false);
    
    try {
      const options: any = {
        format: 'json',
        orient: orient,
        indent: prettyPrint ? '2' : '0',
        dateFormat: dateFormat
      };

      const response = await apiService.convertBatch(batchFiles, options);
      
      if (response.success) {
        setBatchResults(response.results);
        setBatchConverted(true);
      } else {
        setError(t('common.batch_conversion_failed'));
      }
    } catch (err) {
      console.error('Batch conversion error:', err);
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
      a.download = convertedFilename || (selectedFile ? selectedFile.name.replace(/\.csv$/i, '.json') : 'converted.json');
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

  const handleBatchDownload = async (result: any) => {
    try {
      console.log('Downloading batch result:', result);
      
      if (result.storedFilename) {
        // Use backend API to fetch the file from the correct origin
        console.log('Using storedFilename for download:', result.storedFilename);
        const getSafeFilename = (result: any) => {
          try {
            if (result?.outputFilename) return result.outputFilename;
            if (result?.filename) return result.filename;
            if (result?.originalName && typeof result.originalName === 'string') {
              return result.originalName.replace(/\.[^.]+$/, '.json');
            }
            return 'converted.json';
          } catch (error) {
            console.warn('Error processing filename:', error);
            return 'converted.json';
          }
        };
        const filename = getSafeFilename(result);
        await apiService.downloadAndSaveFile(result.storedFilename, filename);
        
        // Refresh the conversion limit banner for anonymous users after first batch download
        if (!user && (window as any).refreshConversionLimitBanner) {
          (window as any).refreshConversionLimitBanner();
        }
        return;
      }
      if (result.downloadPath) {
        // Handle direct download path
        const link = document.createElement('a');
        link.href = result.downloadPath;
        link.download = result.outputFilename || 'converted.json';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Refresh the conversion limit banner for anonymous users after first batch download
        if (!user && (window as any).refreshConversionLimitBanner) {
          (window as any).refreshConversionLimitBanner();
        }
        return;
      }
      if (result.blob) {
        // Handle blob download
        const url = URL.createObjectURL(result.blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = result.outputFilename || 'converted.json';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        
        // Refresh the conversion limit banner for anonymous users after first batch download
        if (!user && (window as any).refreshConversionLimitBanner) {
          (window as any).refreshConversionLimitBanner();
        }
        return;
      }
      
      setError(t('common.download_link_missing'));
    } catch (error) {
      console.error('Batch download error:', error);
      setError(t('common.download_failed'));
    }
  };

  const handleBack = () => {
    window.location.href = '/';
  };

  const resetForm = () => {
    setSelectedFile(null);
    setConvertedFile(null);
    setConvertedFilename('');
    setError(null);
    setPreviewUrl(null);
    setBatchFiles([]);
    setBatchConverted(false);
    setBatchResults([]);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <>
      <Helmet>
        <title>{t('csv_to_json.meta_title')}</title>
        <meta name="description" content={t('csv_to_json.meta_description')} />
        <meta name="keywords" content="CSV to JSON, data converter, JSON format, REST API, web development, batch conversion, array of objects, data processing" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
        <Header />
      
      {/* Hero Section - Narrowed */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t('csv_to_json.title')}
            </h1>
            <p className="text-lg sm:text-xl text-purple-100 mb-6 max-w-2xl mx-auto">
              {t('csv_to_json.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-purple-200">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Conversion Panel */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              
              {/* Conversion Limit Banner */}
              <ConversionLimitBanner />
              
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

              {/* File Upload Area */}
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-purple-400 transition-colors">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {batchMode ? t('csv_to_json.upload_multiple') : t('csv_to_json.upload_single')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {batchMode 
                    ? t('csv_to_json.upload_multiple_desc') 
                    : t('csv_to_json.upload_single_desc')
                  }
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  {batchMode 
                    ? t('csv_to_json.batch_info') 
                    : t('csv_to_json.single_info')
                  }
                </p>
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
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                >
                  {t('common.choose_files')}
                </button>
              </div>

              {/* File Preview */}
              {previewUrl && !batchMode && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-4">{t('common.preview')}</h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-center h-32 bg-gray-100 rounded">
                      <Code className="w-12 h-12 text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-600 mt-2 text-center">
                      {selectedFile?.name} ({((selectedFile?.size || 0) / (1024 * 1024)).toFixed(2)} MB)
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
                          <h4 className="text-lg font-semibold">{t('common.selected_files', { count: batchFiles.length })}</h4>
                          <div className={`text-sm font-medium ${sizeDisplay.isWarning ? 'text-orange-600' : 'text-gray-600'}`}>
                            {sizeDisplay.text}
                          </div>
                        </div>
                        {sizeDisplay.isWarning && (
                          <div className="mb-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                            <div className="flex items-center">
                              <AlertCircle className="w-4 h-4 text-orange-500 mr-2" />
                              <span className="text-sm text-orange-700">
                                {t('common.batch_size_warning')}
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

              {/* Conversion Time Info */}
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-blue-500 mr-2" />
                  <span className="text-sm text-blue-700 font-medium">
                    {t('csv_to_json.conversion_time_info')}
                  </span>
                </div>
              </div>

              {/* Convert Button */}
              <div className="mt-8">
                <button
                  onClick={batchMode ? handleBatchConvert : handleSingleConvert}
                  disabled={isConverting || conversionLimitReached || (batchMode ? batchFiles.length === 0 : !selectedFile)}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
                >
                  {isConverting ? (
                    <div className="flex items-center justify-center">
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                      {t('common.converting')}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Zap className="w-5 h-5 mr-2" />
                      {batchMode ? t('common.convert_files', { count: batchFiles.length }) : t('csv_to_json.convert_to_json')}
                    </div>
                  )}
                </button>
              </div>

              {/* Success Message & Download */}
              {convertedFile && !batchMode && (
                <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <h4 className="text-lg font-semibold text-green-800">{t('common.conversion_complete')}</h4>
                  </div>
                  <p className="text-green-700 mb-4">
                    {t('csv_to_json.conversion_success')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleDownload}
                      className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      {t('csv_to_json.download_json')}
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

              {/* Batch Conversion Results */}
              {batchConverted && batchMode && batchResults.length > 0 && (
                <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <h4 className="text-lg font-semibold text-green-800">{t('common.batch_conversion_complete')}</h4>
                  </div>
                  <p className="text-green-700 mb-4">
                    {t('csv_to_json.batch_success', { count: batchResults.length })}
                  </p>
                  <div className="space-y-2 mb-4 max-h-60 overflow-y-auto">
                    {batchResults.map((result, index) => (
                      <div key={index} className="flex items-center justify-between bg-white rounded-lg p-3 border border-green-200">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">
                            {result.outputFilename} {result.size ? `• ${formatFileSize(result.size)}` : ''}
                          </p>
                        </div>
                        {result.success && (
                          <button
                            onClick={() => handleBatchDownload(result)}
                            className="ml-4 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors flex items-center"
                          >
                            <Download className="w-4 h-4 mr-1" />
                            {t('common.download')}
                          </button>
                        )}
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
                {t('csv_to_json.settings_title')}
              </h3>
              
              {/* JSON Orientation */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {t('csv_to_json.json_structure')}
                </label>
                <select
                  value={orient}
                  onChange={(e) => setOrient(e.target.value as any)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                >
                  <option value="records">{t('csv_to_json.array_objects')}</option>
                  <option value="split">{t('csv_to_json.split_format')}</option>
                  <option value="index">{t('csv_to_json.index_based')}</option>
                  <option value="columns">{t('csv_to_json.column_based')}</option>
                  <option value="values">{t('csv_to_json.values_only')}</option>
                </select>
                <div className="mt-2 text-sm text-gray-600">
                  {orient === 'records' && (
                    <span className="text-purple-600">✓ {t('csv_to_json.records_desc')}</span>
                  )}
                  {orient === 'split' && (
                    <span className="text-blue-600">✓ {t('csv_to_json.split_desc')}</span>
                  )}
                  {orient === 'index' && (
                    <span className="text-green-600">✓ {t('csv_to_json.index_desc')}</span>
                  )}
                  {orient === 'columns' && (
                    <span className="text-orange-600">✓ {t('csv_to_json.columns_desc')}</span>
                  )}
                  {orient === 'values' && (
                    <span className="text-red-600">✓ {t('csv_to_json.values_desc')}</span>
                  )}
                </div>
              </div>

              {/* Pretty Print */}
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={prettyPrint}
                    onChange={(e) => setPrettyPrint(e.target.checked)}
                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{t('csv_to_json.pretty_print')}</span>
                </label>
              </div>

              {/* Date Format */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {t('csv_to_json.date_format')}
                </label>
                <select
                  value={dateFormat}
                  onChange={(e) => setDateFormat(e.target.value as 'iso' | 'epoch')}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                >
                  <option value="iso">{t('csv_to_json.iso_format')}</option>
                  <option value="epoch">{t('csv_to_json.epoch_format')}</option>
                </select>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-500" />
                {t('csv_to_json.why_choose')}
              </h3>
              <div className="space-y-4">
                {[
                  t('csv_to_json.feature_structures'),
                  t('csv_to_json.feature_modes'),
                  t('csv_to_json.feature_formats'),
                  t('csv_to_json.feature_types'),
                  t('csv_to_json.feature_api'),
                  t('csv_to_json.feature_batch')
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
                {t('csv_to_json.perfect_for')}
              </h3>
              <div className="space-y-3">
                {[
                  t('csv_to_json.use_case_api'),
                  t('csv_to_json.use_case_js'),
                  t('csv_to_json.use_case_mobile'),
                  t('csv_to_json.use_case_nosql'),
                  t('csv_to_json.use_case_config'),
                  t('csv_to_json.use_case_analytics')
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
            {t('csv_to_json.seo_title')}
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t('csv_to_json.seo_description')}
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{t('csv_to_json.benefits_title')}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-purple-900 mb-3">{t('csv_to_json.benefit_web_native')}</h4>
                <p className="text-gray-700">
                  {t('csv_to_json.benefit_web_native_desc')}
                </p>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-indigo-900 mb-3">{t('csv_to_json.benefit_api')}</h4>
                <p className="text-gray-700">
                  {t('csv_to_json.benefit_api_desc')}
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-blue-900 mb-3">{t('csv_to_json.benefit_mobile')}</h4>
                <p className="text-gray-700">
                  {t('csv_to_json.benefit_mobile_desc')}
                </p>
              </div>
              
              <div className="bg-cyan-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-cyan-900 mb-3">{t('csv_to_json.benefit_structured')}</h4>
                <p className="text-gray-700">
                  {t('csv_to_json.benefit_structured_desc')}
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{t('csv_to_json.use_cases_title')}</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('csv_to_json.use_case_web_title')}</h4>
                  <p className="text-gray-700">{t('csv_to_json.use_case_web_desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('csv_to_json.use_case_api_title')}</h4>
                  <p className="text-gray-700">{t('csv_to_json.use_case_api_desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('csv_to_json.use_case_mobile_title')}</h4>
                  <p className="text-gray-700">{t('csv_to_json.use_case_mobile_desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('csv_to_json.use_case_processing_title')}</h4>
                  <p className="text-gray-700">{t('csv_to_json.use_case_processing_desc')}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">{t('csv_to_json.cta_title')}</h3>
              <p className="text-lg mb-6 opacity-90">
                {t('csv_to_json.cta_description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  {t('csv_to_json.start_converting')}
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
