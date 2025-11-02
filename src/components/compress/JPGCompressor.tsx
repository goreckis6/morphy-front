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
  Compress
} from 'lucide-react';
import { useFileValidation } from '../../hooks/useFileValidation';
import { API_BASE_URL } from '../../services/api';

export const JPGCompressor: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [compressedFile, setCompressedFile] = useState<Blob | null>(null);
  const [isCompressing, setIsCompressing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [quality, setQuality] = useState<number>(85);
  const [optimize, setOptimize] = useState(true);
  const [batchMode, setBatchMode] = useState(false);
  const [batchFiles, setBatchFiles] = useState<File[]>([]);
  const [batchCompressed, setBatchCompressed] = useState(false);
  const [batchResults, setBatchResults] = useState<Array<{ file: File; blob: Blob; originalSize: number; newSize: number }>>([]);
  const [imagePreview, setImagePreview] = useState<{url: string, width: number, height: number} | null>(null);
  const [compressionStats, setCompressionStats] = useState<{originalSize: number; newSize: number; savings: number} | null>(null);
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
      if (file.type === 'image/jpeg' || file.name.toLowerCase().match(/\.(jpg|jpeg)$/)) {
        setSelectedFile(file);
        setError(null);
        setPreviewUrl(URL.createObjectURL(file));
        setCompressionStats(null);
        
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
        setError('Please select a valid JPG/JPEG file');
      }
    }
  };

  const handleBatchFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const jpgFiles = files.filter(file => 
      file.type === 'image/jpeg' || file.name.toLowerCase().match(/\.(jpg|jpeg)$/)
    );
    setBatchFiles(jpgFiles);
    setError(null);
  };

  const handleCompress = async (file: File): Promise<Blob> => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('quality', quality.toString());
    formData.append('optimize', optimize.toString());

    try {
      const response = await fetch(`${API_BASE_URL}/api/compress/jpg`, {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Compression failed' }));
        throw new Error(errorData.error || `Server error: ${response.status}`);
      }

      // Get compression stats from headers
      const originalSize = parseInt(response.headers.get('X-Original-Size') || '0', 10);
      const compressedSize = parseInt(response.headers.get('X-Compressed-Size') || '0', 10);
      const savingsPercent = parseFloat(response.headers.get('X-Savings-Percent') || '0');

      // Update compression stats
      if (originalSize > 0 && compressedSize > 0) {
        setCompressionStats({
          originalSize,
          newSize: compressedSize,
          savings: savingsPercent
        });
      }

      const blob = await response.blob();
      return blob;
    } catch (error) {
      console.error('Compression error:', error);
      throw error;
    }
  };

  const handleSingleCompress = async () => {
    if (!selectedFile) return;
    
    setIsCompressing(true);
    setError(null);
    setCompressionStats(null);
    
    try {
      const compressed = await handleCompress(selectedFile);
      setCompressedFile(compressed);
      
      // Compression stats are already set in handleCompress from backend headers
      // If stats weren't set by backend (fallback), calculate from blob sizes
      if (selectedFile && compressed) {
        // Give a small delay to allow state to update if set by handleCompress
        setTimeout(() => {
          setCompressionStats(prev => {
            if (prev) return prev; // Already set by handleCompress
            
            // Calculate fallback stats
            const originalSize = selectedFile.size;
            const newSize = compressed.size;
            const savingsPercent = ((originalSize - newSize) / originalSize * 100).toFixed(1);
            
            return {
              originalSize,
              newSize,
              savings: parseFloat(savingsPercent)
            };
          });
        }, 0);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Compression failed. Please try again.';
      setError(errorMessage);
      setCompressionStats(null);
    } finally {
      setIsCompressing(false);
    }
  };

  const handleBatchCompress = async () => {
    if (batchFiles.length === 0) return;
    
    setIsCompressing(true);
    setError(null);
    setBatchResults([]);
    
    try {
      const results: Array<{ file: File; blob: Blob; originalSize: number; newSize: number }> = [];
      
      for (let i = 0; i < batchFiles.length; i++) {
        const file = batchFiles[i];
        const compressed = await handleCompress(file);
        results.push({ 
          file, 
          blob: compressed,
          originalSize: file.size,
          newSize: compressed.size
        });
      }
      
      setBatchResults(results);
      setBatchCompressed(true);
      setError(null);
    } catch (err) {
      setError('Batch compression failed. Please try again.');
    } finally {
      setIsCompressing(false);
    }
  };

  const handleDownload = () => {
    if (compressedFile) {
      const url = URL.createObjectURL(compressedFile);
      const a = document.createElement('a');
      a.href = url;
      const originalName = selectedFile?.name || 'image.jpg';
      const nameWithoutExt = originalName.replace(/\.(jpg|jpeg)$/i, '');
      a.download = `${nameWithoutExt}_compressed.jpg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const handleBatchFileDownload = (file: File, blob: Blob) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const nameWithoutExt = file.name.replace(/\.(jpg|jpeg)$/i, '');
    a.download = `${nameWithoutExt}_compressed.jpg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleBack = () => {
    window.location.href = '/';
  };

  const resetForm = () => {
    setSelectedFile(null);
    setCompressedFile(null);
    setError(null);
    setPreviewUrl(null);
    setBatchFiles([]);
    setBatchCompressed(false);
    setBatchResults([]);
    setImagePreview(null);
    setCompressionStats(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <>
      <Helmet>
        <title>{t('compress_jpg.meta_title')}</title>
        <meta name="description" content={t('compress_jpg.meta_description')} />
        <meta name="keywords" content={t('compress_jpg.meta_keywords')} />
        <link rel="canonical" href="https://morphyimg.com/compress/jpg" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <Header />
        
        {/* Hero Section - Narrowed */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                {t('compress_jpg.title')}
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
                {t('compress_jpg.subtitle')}
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
          
          {/* Main Compression Panel */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              
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
                <Compress className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {batchMode ? t('compress_jpg.upload_batch') : t('compress_jpg.upload_single')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {batchMode 
                    ? t('compress_jpg.upload_text_batch')
                    : t('compress_jpg.upload_text_single')
                  }
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  {batchMode 
                    ? t('compress_jpg.file_limits_batch')
                    : t('compress_jpg.file_limits_single')
                  }
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".jpg,.jpeg,image/jpeg"
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
                  <h4 className="text-lg font-semibold mb-4">{t('compress_jpg.image_preview')}</h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <img 
                      src={previewUrl} 
                      alt="Preview" 
                      className="max-w-full h-32 object-contain mx-auto rounded"
                    />
                    <div className="mt-3 text-center">
                      <p className="text-sm text-gray-600">
                        <strong>{selectedFile?.name}</strong> ({formatFileSize(selectedFile?.size || 0)})
                      </p>
                      {imagePreview && (
                        <div className="mt-2 text-sm text-gray-500">
                          <p>{t('compress_jpg.original_dimensions')}: {imagePreview.width} × {imagePreview.height} pixels</p>
                          <p className="text-blue-600 font-medium">
                            {t('compress_jpg.will_compress_with')}: {quality}% {t('compress_jpg.quality')}
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
                          <h4 className="text-lg font-semibold">{t('compress_jpg.selected_files')} ({batchFiles.length})</h4>
                          <div className={`text-sm font-medium ${sizeDisplay.isWarning ? 'text-orange-600' : 'text-gray-600'}`}>
                            {sizeDisplay.text}
                          </div>
                        </div>
                        {sizeDisplay.isWarning && (
                          <div className="mb-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                            <div className="flex items-center">
                              <AlertCircle className="w-4 h-4 text-orange-500 mr-2" />
                              <span className="text-sm text-orange-700">
                                {t('compress_jpg.batch_size_warning')}
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

              {/* Compression Stats */}
              {compressionStats && !batchMode && (
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">{t('compress_jpg.original_size')}: <strong className="text-gray-900">{formatFileSize(compressionStats.originalSize)}</strong></p>
                      <p className="text-sm text-gray-600">{t('compress_jpg.compressed_size')}: <strong className="text-green-600">{formatFileSize(compressionStats.newSize)}</strong></p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-green-600">{compressionStats.savings.toFixed(1)}%</p>
                      <p className="text-xs text-gray-500">{t('compress_jpg.savings')}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
                  <span className="text-red-700">{error}</span>
                </div>
              )}

              {/* Compress Button */}
              <div className="mt-8">
                <button
                  onClick={batchMode ? handleBatchCompress : handleSingleCompress}
                  disabled={isCompressing || (batchMode ? batchFiles.length === 0 : !selectedFile)}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
                >
                  {isCompressing ? (
                    <div className="flex items-center justify-center">
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                      {t('compress_jpg.compressing')}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Compress className="w-5 h-5 mr-2" />
                      {batchMode ? t('compress_jpg.compress_files', { count: batchFiles.length }) : t('compress_jpg.compress_image')}
                    </div>
                  )}
                </button>
              </div>

              {/* Success Message & Download */}
              {compressedFile && !batchMode && (
                <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <h4 className="text-lg font-semibold text-green-800">{t('compress_jpg.compression_complete')}</h4>
                  </div>
                  <p className="text-green-700 mb-4">
                    {t('compress_jpg.success_message')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleDownload}
                      className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      {t('compress_jpg.download_compressed')}
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

              {/* Batch Compression Success Message */}
              {batchCompressed && batchMode && batchResults.length > 0 && (
                <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <h4 className="text-lg font-semibold text-green-800">{t('compress_jpg.batch_compression_complete')}</h4>
                  </div>
                  <p className="text-green-700 mb-4">
                    {t('compress_jpg.batch_success_message', { count: batchResults.length })}
                  </p>
                  <div className="space-y-2 mb-4 max-h-60 overflow-y-auto">
                    {batchResults.map((result, index) => {
                      const savingsPercent = ((result.originalSize - result.newSize) / result.originalSize * 100).toFixed(1);
                      return (
                        <div key={index} className="flex items-center justify-between bg-white rounded-lg p-3 border border-green-200">
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">
                              {result.file.name.replace(/\.(jpg|jpeg)$/i, '')}_compressed.jpg
                            </p>
                            <p className="text-xs text-gray-500">
                              {formatFileSize(result.originalSize)} → {formatFileSize(result.newSize)} ({savingsPercent}% {t('compress_jpg.savings')})
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
                      );
                    })}
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
            
            {/* Compression Settings */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Settings className="w-5 h-5 mr-2 text-blue-600" />
                {t('compress_jpg.compression_settings')}
              </h3>
              
              {/* Quality Slider */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {t('compress_jpg.quality')}: {quality}%
                </label>
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="5"
                  value={quality}
                  onChange={(e) => setQuality(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${quality}%, #e5e7eb ${quality}%, #e5e7eb 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>{t('compress_jpg.quality_low')}</span>
                  <span>{t('compress_jpg.quality_high')}</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  {t('compress_jpg.quality_desc')}
                </p>
              </div>

              {/* Optimize checkbox */}
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={optimize}
                    onChange={(e) => setOptimize(e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{t('compress_jpg.optimize_jpeg')}</span>
                </label>
                <p className="text-xs text-gray-500 mt-1 ml-6">
                  {t('compress_jpg.optimize_desc')}
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-500" />
                {t('compress_jpg.sidebar_title')}
              </h3>
              <div className="space-y-4">
                {[
                  t('compress_jpg.feature_1'),
                  t('compress_jpg.feature_2'),
                  t('compress_jpg.feature_3'),
                  t('compress_jpg.feature_4'),
                  t('compress_jpg.feature_5'),
                  t('compress_jpg.feature_6')
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
                {t('compress_jpg.perfect_for_title')}
              </h3>
              <div className="space-y-3">
                {[
                  t('compress_jpg.use_case_1'),
                  t('compress_jpg.use_case_2'),
                  t('compress_jpg.use_case_3'),
                  t('compress_jpg.use_case_4'),
                  t('compress_jpg.use_case_5'),
                  t('compress_jpg.use_case_6')
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
            {t('compress_jpg.why_compress_title')}
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t('compress_jpg.seo_intro')}
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{t('compress_jpg.benefits_title')}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-blue-900 mb-3">{t('compress_jpg.benefit_size_title')}</h4>
                <p className="text-gray-700">
                  {t('compress_jpg.benefit_size_text')}
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-purple-900 mb-3">{t('compress_jpg.benefit_speed_title')}</h4>
                <p className="text-gray-700">
                  {t('compress_jpg.benefit_speed_text')}
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-green-900 mb-3">{t('compress_jpg.benefit_bandwidth_title')}</h4>
                <p className="text-gray-700">
                  {t('compress_jpg.benefit_bandwidth_text')}
                </p>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-orange-900 mb-3">{t('compress_jpg.benefit_seo_title')}</h4>
                <p className="text-gray-700">
                  {t('compress_jpg.benefit_seo_text')}
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{t('compress_jpg.use_cases_title')}</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('compress_jpg.use_case_website_title')}</h4>
                  <p className="text-gray-700">{t('compress_jpg.use_case_website_text')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('compress_jpg.use_case_email_title')}</h4>
                  <p className="text-gray-700">{t('compress_jpg.use_case_email_text')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('compress_jpg.use_case_mobile_title')}</h4>
                  <p className="text-gray-700">{t('compress_jpg.use_case_mobile_text')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('compress_jpg.use_case_storage_title')}</h4>
                  <p className="text-gray-700">{t('compress_jpg.use_case_storage_text')}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">{t('compress_jpg.ready_title')}</h3>
              <p className="text-lg mb-6 opacity-90">
                {t('compress_jpg.ready_text')}
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

