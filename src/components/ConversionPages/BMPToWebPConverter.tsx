import React, { useState, useRef, useEffect } from 'react';
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
  Camera,
  BarChart3
} from 'lucide-react';
import { useFileValidation } from '../../hooks/useFileValidation';
import { apiService } from '../../services/api';
import { ConversionLimitBanner } from '../ConversionLimitBanner';
import { useAuth } from '../../contexts/AuthContext';
import { ConversionLimits } from '../../utils/conversionLimits';

export const BMPToWebPConverter: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { user } = useAuth();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [convertedFile, setConvertedFile] = useState<Blob | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [quality, setQuality] = useState<'high' | 'medium' | 'low'>('high');
  const [lossless, setLossless] = useState(false);
  const [batchMode, setBatchMode] = useState(false);
  const [batchFiles, setBatchFiles] = useState<File[]>([]);
  const [batchConverted, setBatchConverted] = useState(false);
  const [batchResults, setBatchResults] = useState<Array<{ file: File; blob: Blob }>>([]);
  const [imagePreview, setImagePreview] = useState<{url: string, width: number, height: number} | null>(null);
  const [conversionLimitReached, setConversionLimitReached] = useState(false);
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

  // Ensure language is synced with URL on mount
  useEffect(() => {
    const path = window.location.pathname;
    const urlLang = path.startsWith('/pl/') || path === '/pl' ? 'pl' :
                    path.startsWith('/de/') || path === '/de' ? 'de' : 'en';

    if (i18n.language !== urlLang) {
      i18n.changeLanguage(urlLang);
    }
  }, [i18n]);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type === 'image/bmp' || file.name.toLowerCase().endsWith('.bmp')) {
        setSelectedFile(file);
        setError(null);
        setPreviewUrl(URL.createObjectURL(file));
        
        // Create image preview to get dimensions
        const img = new Image();
        img.onload = () => {
          setImagePreview({
            url: URL.createObjectURL(file),
            width: img.width,
            height: img.height
          });
        };
        img.src = URL.createObjectURL(file);
      } else {
        setError('Please select a valid BMP file');
      }
    }
  };

  const handleBatchFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const bmpFiles = files.filter(file => 
      file.type === 'image/bmp' || file.name.toLowerCase().endsWith('.bmp')
    );
    setBatchFiles(bmpFiles);
    setError(null);
  };

  const handleConvert = async (file: File): Promise<Blob> => {
    // Check conversion limits for anonymous users
    if (!user) {
      const canConvert = await ConversionLimits.checkServerLimits();
      if (!canConvert) {
        setConversionLimitReached(true);
        throw new Error('Conversion limit reached');
      }
    }

    try {
      const result = await apiService.convertFile(file, { format: 'webp' });
      return result;
    } catch (error) {
      console.error('Conversion error:', error);
      throw error;
    }
  };

  const handleSingleConvert = async () => {
    if (!selectedFile) return;
    
    setIsConverting(true);
    setError(null);
    setConversionLimitReached(false);
    
    try {
      const converted = await handleConvert(selectedFile);
      setConvertedFile(converted);
    } catch (err) {
      if (err instanceof Error && err.message === 'Conversion limit reached') {
        setError('Free conversion limit reached. You\'ve used all 5 free conversions. Register for unlimited access!');
      } else {
        setError('Conversion failed. Please try again.');
      }
    } finally {
      setIsConverting(false);
    }
  };

  const handleBatchConvert = async () => {
    if (batchFiles.length === 0) return;
    
    setIsConverting(true);
    setError(null);
    setBatchResults([]);
    setConversionLimitReached(false);
    
    try {
      // Check conversion limits for anonymous users
      if (!user) {
        const canConvert = await ConversionLimits.checkServerLimits();
        if (!canConvert) {
          setConversionLimitReached(true);
          setError('Free conversion limit reached. You\'ve used all 5 free conversions. Register for unlimited access!');
          return;
        }
      }

      const result = await apiService.convertBatch(batchFiles, { format: 'webp' });
      
      if (result.success && result.results) {
        const results: Array<{ file: File; blob: Blob }> = [];
        
        for (let i = 0; i < result.results.length; i++) {
          const conversionResult = result.results[i];
          const file = batchFiles[i];
          
          if (conversionResult.success && conversionResult.downloadPath) {
            // Convert base64 to blob
            const response = await fetch(conversionResult.downloadPath);
            const blob = await response.blob();
            results.push({ file, blob });
          }
        }
        
        setBatchResults(results);
        setBatchConverted(true);
        setError(null);
      } else {
        setError('Batch conversion failed. Please try again.');
      }
    } catch (err) {
      if (err instanceof Error && err.message === 'Conversion limit reached') {
        setError('Free conversion limit reached. You\'ve used all 5 free conversions. Register for unlimited access!');
      } else {
        setError('Batch conversion failed. Please try again.');
      }
    } finally {
      setIsConverting(false);
    }
  };

  
  const handleBatchDownload = async (result: any) => {
    const filename = result.storedFilename || result.downloadPath?.split('/').pop();
    if (!filename) {
      setError('Download link is missing. Please reconvert.');
      return;
    }
    try {
      await apiService.downloadFile(filename, result.outputFilename);
    } catch (error) {
      setError('Download failed. Please try again.');
    }
  };

  const handleDownload = () => {
    if (convertedFile) {
      const url = URL.createObjectURL(convertedFile);
      const a = document.createElement('a');
      a.href = url;
      a.download = selectedFile ? selectedFile.name.replace('.bmp', '.webp') : 'converted.webp';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      // Refresh conversion limit banner for anonymous users
      if (!user && (window as any).refreshConversionLimitBanner) {
        (window as any).refreshConversionLimitBanner();
      }
    }
  };

  const handleBatchFileDownload = (file: File, blob: Blob) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name.replace('.bmp', '.webp');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    // Refresh conversion limit banner for anonymous users
    if (!user && (window as any).refreshConversionLimitBanner) {
      (window as any).refreshConversionLimitBanner();
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
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <>
      <Helmet>
        <title>{t('bmp_to_webp.meta_title')}</title>
        <meta name="description" content={t('bmp_to_webp.meta_description')} />
        <meta name="keywords" content="BMP to WebP, image converter, web optimization, file compression" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <Header />
        
        {/* Hero Section - Narrowed */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                {t('bmp_to_webp.title')}
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
                {t('bmp_to_webp.subtitle')}
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
                      ? 'bg-blue-600 text-white shadow-lg' 
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
                      ? 'bg-blue-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <FileImage className="w-5 h-5 inline mr-2" />
                  {t('common.batch_convert')}
                </button>
              </div>

              {/* File Upload Area */}
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {batchMode ? t('bmp_to_webp.upload_batch') : t('bmp_to_webp.upload_single')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {batchMode 
                    ? t('bmp_to_webp.upload_text_batch')
                    : t('bmp_to_webp.upload_text_single')
                  }
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  {batchMode 
                    ? t('bmp_to_webp.file_limits_batch')
                    : t('bmp_to_webp.file_limits_single')
                  }
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".bmp,image/bmp"
                  multiple={batchMode}
                  onChange={batchMode ? handleBatchFileSelect : handleFileSelect}
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  {t('common.choose_files')}
                </button>
              </div>

              {/* File Preview */}
              {previewUrl && !batchMode && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-4">{t('bmp_to_webp.image_preview')}</h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <img 
                      src={previewUrl} 
                      alt="Preview" 
                      className="max-w-full h-32 object-contain mx-auto rounded"
                    />
                    <div className="mt-3 text-center">
                      <p className="text-sm text-gray-600">
                        <strong>{selectedFile?.name}</strong> ({(selectedFile?.size || 0) / 1024} KB)
                      </p>
                      {imagePreview && (
                        <div className="mt-2 text-sm text-gray-500">
                          <p>{t('bmp_to_webp.original_dimensions')}: {imagePreview.width} × {imagePreview.height} pixels</p>
                          <p className="text-blue-600 font-medium">
                            {t('bmp_to_webp.will_convert_to')}: {t('bmp_to_webp.webp_format')} ({t(`bmp_to_webp.quality_${quality}`)}, {lossless ? t('bmp_to_webp.lossless') : t('bmp_to_webp.lossy')})
                          </p>
                        </div>
                      )}
                    </div>
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
                          <h4 className="text-lg font-semibold">{t('bmp_to_webp.selected_files')} ({batchFiles.length})</h4>
                          <div className={`text-sm font-medium ${sizeDisplay.isWarning ? 'text-orange-600' : 'text-gray-600'}`}>
                            {sizeDisplay.text}
                          </div>
                        </div>
                        {sizeDisplay.isWarning && (
                          <div className="mb-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                            <div className="flex items-center">
                              <AlertCircle className="w-4 h-4 text-orange-500 mr-2" />
                              <span className="text-sm text-orange-700">
                                {t('bmp_to_webp.batch_size_warning')}
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
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
                >
                  {isConverting ? (
                    <div className="flex items-center justify-center">
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                      {t('common.converting')}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Zap className="w-5 h-5 mr-2" />
                      {batchMode ? t('bmp_to_webp.convert_files', { count: batchFiles.length }) : t('bmp_to_webp.convert_to_webp')}
                    </div>
                  )}
                </button>
              </div>

              {/* Success Message & Download */}
              {convertedFile && !batchMode && (
                <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <h4 className="text-lg font-semibold text-green-800">{t('bmp_to_webp.conversion_complete')}</h4>
                  </div>
                  <p className="text-green-700 mb-4">
                    {t('bmp_to_webp.success_message')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleDownload}
                      className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      {t('bmp_to_webp.download_webp')}
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
                    <h4 className="text-lg font-semibold text-green-800">{t('bmp_to_webp.batch_conversion_complete')}</h4>
                  </div>
                  <p className="text-green-700 mb-4">
                    {t('bmp_to_webp.batch_success_message', { count: batchResults.length })}
                  </p>
                  <div className="space-y-2 mb-4 max-h-60 overflow-y-auto">
                    {batchResults.map((result, index) => (
                      <div key={index} className="flex items-center justify-between bg-white rounded-lg p-3 border border-green-200">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">
                            {result.file.name.replace('.bmp', '.webp')} • {(result.blob.size / 1024).toFixed(1)} KB
                          </p>
                        </div>
                        <button
                          onClick={() => handleBatchFileDownload(result.file, result.blob)}
                          className="ml-4 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors flex items-center"
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
                <Settings className="w-5 h-5 mr-2 text-blue-600" />
                {t('bmp_to_webp.webp_settings')}
              </h3>
              
              {/* Quality */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {t('bmp_to_webp.quality')}
                </label>
                <select
                  value={quality}
                  onChange={(e) => setQuality(e.target.value as 'high' | 'medium' | 'low')}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="high">{t('bmp_to_webp.quality_high_option')}</option>
                  <option value="medium">{t('bmp_to_webp.quality_medium_option')}</option>
                  <option value="low">{t('bmp_to_webp.quality_low_option')}</option>
                </select>
              </div>

              {/* Lossless */}
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={lossless}
                    onChange={(e) => setLossless(e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{t('bmp_to_webp.lossless_compression')}</span>
                </label>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-500" />
                {t('bmp_to_webp.sidebar_title')}
              </h3>
              <div className="space-y-4">
                {[
                  t('bmp_to_webp.feature_1'),
                  t('bmp_to_webp.feature_2'),
                  t('bmp_to_webp.feature_3'),
                  t('bmp_to_webp.feature_4'),
                  t('bmp_to_webp.feature_5'),
                  t('bmp_to_webp.feature_6')
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
                <Camera className="w-5 h-5 mr-2 text-blue-600" />
                {t('bmp_to_webp.perfect_for_title')}
              </h3>
              <div className="space-y-3">
                {[
                  t('bmp_to_webp.use_case_1'),
                  t('bmp_to_webp.use_case_2'),
                  t('bmp_to_webp.use_case_3'),
                  t('bmp_to_webp.use_case_4'),
                  t('bmp_to_webp.use_case_5'),
                  t('bmp_to_webp.use_case_6')
                ].map((useCase, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
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
            {t('bmp_to_webp.why_convert_title')}
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t('bmp_to_webp.seo_intro')}
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{t('bmp_to_webp.benefits_title')}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-blue-900 mb-3">{t('bmp_to_webp.benefit_compression_title')}</h4>
                <p className="text-gray-700">
                  {t('bmp_to_webp.benefit_compression_text')}
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-purple-900 mb-3">{t('bmp_to_webp.benefit_loading_title')}</h4>
                <p className="text-gray-700">
                  {t('bmp_to_webp.benefit_loading_text')}
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-green-900 mb-3">{t('bmp_to_webp.benefit_standard_title')}</h4>
                <p className="text-gray-700">
                  {t('bmp_to_webp.benefit_standard_text')}
                </p>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-orange-900 mb-3">{t('bmp_to_webp.benefit_options_title')}</h4>
                <p className="text-gray-700">
                  {t('bmp_to_webp.benefit_options_text')}
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{t('bmp_to_webp.use_cases_title')}</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('bmp_to_webp.use_case_website_title')}</h4>
                  <p className="text-gray-700">{t('bmp_to_webp.use_case_website_text')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('bmp_to_webp.use_case_mobile_title')}</h4>
                  <p className="text-gray-700">{t('bmp_to_webp.use_case_mobile_text')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('bmp_to_webp.use_case_ecommerce_title')}</h4>
                  <p className="text-gray-700">{t('bmp_to_webp.use_case_ecommerce_text')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('bmp_to_webp.use_case_marketing_title')}</h4>
                  <p className="text-gray-700">{t('bmp_to_webp.use_case_marketing_text')}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">{t('bmp_to_webp.ready_title')}</h3>
              <p className="text-lg mb-6 opacity-90">
                {t('bmp_to_webp.ready_text')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  {t('common.start_converting_now')}
                </button>
                <button
                  onClick={handleBack}
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
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
