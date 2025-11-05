import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { 
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
  Minimize2
} from 'lucide-react';
import { useFileValidation } from '../../hooks/useFileValidation';
import { API_BASE_URL } from '../../services/api';
import JSZip from 'jszip';

export const PNGCompressor: React.FC = () => {
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
    getBatchSizeDisplay,
    formatFileSize
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
      if (file.type === 'image/png' || file.name.toLowerCase().match(/\.(png)$/)) {
        setError(null);
        setCompressionStats(null);
        
        // Validate that the file is a valid image by trying to load it
        const img = new Image();
        const previewUrl = URL.createObjectURL(file);
        
        img.onload = () => {
          // File is valid, set it
          setSelectedFile(file);
          setPreviewUrl(previewUrl);
          setImagePreview({
            url: previewUrl,
            width: img.width,
            height: img.height
          });
        };
        
        img.onerror = () => {
          // File is corrupted or invalid
          URL.revokeObjectURL(previewUrl);
          setError('This file appears to be corrupted or is not a valid image. Please select a different file.');
          setSelectedFile(null);
          setPreviewUrl(null);
          setImagePreview(null);
        };
        
        img.src = previewUrl;
      } else {
        setError('Please select a valid PNG file');
      }
    }
  };

  const handleBatchFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []) as File[];
    const pngFiles = files.filter((file: File) => 
      file.type === 'image/png' || file.name.toLowerCase().match(/\.(png)$/)
    );
    
    setError(null);
    
    // Validate each file to ensure it's not corrupted
    const validFiles: File[] = [];
    const corruptedFiles: string[] = [];
    
    const validatePromises = pngFiles.map((file: File) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        const previewUrl = URL.createObjectURL(file);
        
        img.onload = () => {
          URL.revokeObjectURL(previewUrl);
          validFiles.push(file);
          resolve();
        };
        
        img.onerror = () => {
          URL.revokeObjectURL(previewUrl);
          corruptedFiles.push(file.name);
          resolve();
        };
        
        img.src = previewUrl;
      });
    });
    
    await Promise.all(validatePromises);
    
    setBatchFiles(validFiles);
    
    if (corruptedFiles.length > 0) {
      const fileList = corruptedFiles.join(', ');
      setError(`The following file(s) appear to be corrupted or invalid: ${fileList}. Only valid files will be processed.`);
    }
  };

  const handleCompress = async (file: File): Promise<Blob> => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('quality', quality.toString());
    formData.append('optimize', optimize.toString());

    try {
      const response = await fetch(`${API_BASE_URL}/api/compress/png`, {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Compression failed' }));
        const errorMessage = errorData.error || `Server error: ${response.status}`;
        
        // Check for specific error messages about file corruption
        if (errorMessage.toLowerCase().includes('cannot identify') || 
            errorMessage.toLowerCase().includes('corrupted') ||
            errorMessage.toLowerCase().includes('not a valid') ||
            errorMessage.toLowerCase().includes('unidentifiedimageerror')) {
          throw new Error('The file appears to be corrupted or is not a valid PNG image. Please select a different file.');
        }
        
        throw new Error(errorMessage);
      }

      // Get compression stats from headers
      const originalSize = parseInt(response.headers.get('X-Original-Size') || '0', 10);
      const compressedSize = parseInt(response.headers.get('X-Compressed-Size') || '0', 10);
      const savingsPercent = parseFloat(response.headers.get('X-Savings-Percent') || '0');

      const blob = await response.blob();
      
      // Update compression stats if headers provided valid data, otherwise calculate from blob
      if (originalSize > 0 && compressedSize > 0) {
        setCompressionStats({
          originalSize,
          newSize: compressedSize,
          savings: savingsPercent
        });
      } else if (file && blob) {
        // Fallback: calculate from file and blob sizes
        const originalSizeFallback = file.size;
        const compressedSizeFallback = blob.size;
        const savingsPercentFallback = ((originalSizeFallback - compressedSizeFallback) / originalSizeFallback * 100);
        
        setCompressionStats({
          originalSize: originalSizeFallback,
          newSize: compressedSizeFallback,
          savings: parseFloat(savingsPercentFallback.toFixed(1))
        });
      }
      
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
      // Compression stats are already set in handleCompress from backend headers or calculated as fallback
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
      const originalName = selectedFile?.name || 'image.png';
      const nameWithoutExt = originalName.replace(/\.(png)$/i, '');
      a.download = `${nameWithoutExt}_compressed.png`;
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
      const nameWithoutExt = file.name.replace(/\.(png)$/i, '');
      a.download = `${nameWithoutExt}_compressed.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleBatchDownloadZip = async () => {
    if (batchResults.length === 0) return;
    
    try {
      const zip = new JSZip();
      
      // Add each compressed file to the ZIP
      for (const result of batchResults) {
        const nameWithoutExt = result.file.name.replace(/\.(png)$/i, '');
        const filename = `${nameWithoutExt}_compressed.png`;
        zip.file(filename, result.blob);
      }
      
      // Generate ZIP file
      const zipBlob = await zip.generateAsync({ type: 'blob' });
      
      // Download the ZIP
      const url = URL.createObjectURL(zipBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `compressed_images_${new Date().getTime()}.zip`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error creating ZIP file:', error);
      setError('Failed to create ZIP file. Please try downloading files individually.');
    }
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
        <title>{t('compress_png.meta_title')}</title>
        <meta name="description" content={t('compress_png.meta_description')} />
        <meta name="keywords" content={t('compress_png.meta_keywords')} />
        <link rel="canonical" href="https://morphyimg.com/compress/png" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <Header />
        
        {/* Hero Section - Narrowed */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                {t('compress_png.title')}
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
                {t('compress_png.subtitle')}
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
                  onClick={() => {
                    resetForm();
                    setBatchMode(false);
                  }}
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
                  onClick={() => {
                    resetForm();
                    setBatchMode(true);
                  }}
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
                <Minimize2 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {batchMode ? t('compress_png.upload_batch') : t('compress_png.upload_single')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {batchMode 
                    ? t('compress_png.upload_text_batch')
                    : t('compress_png.upload_text_single')
                  }
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  {batchMode 
                    ? t('compress_png.file_limits_batch')
                    : t('compress_png.file_limits_single')
                  }
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".png,image/png"
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
                  <h4 className="text-lg font-semibold mb-4">{t('compress_png.image_preview')}</h4>
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
                          <p>{t('compress_png.original_dimensions')}: {imagePreview.width} × {imagePreview.height} pixels</p>
                          <p className="text-blue-600 font-medium">
                            {t('compress_png.will_compress_with')}: {quality}% {t('compress_png.quality')}
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
                    const totalSize = batchFiles.reduce((sum: number, f: File) => sum + f.size, 0);
                    const sizeDisplay = getBatchSizeDisplay(totalSize);
                    return (
                      <>
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-lg font-semibold">{t('compress_png.selected_files')} ({batchFiles.length})</h4>
                          <div className={`text-sm font-medium ${sizeDisplay.isWarning ? 'text-orange-600' : 'text-gray-600'}`}>
                            {sizeDisplay.text}
                          </div>
                        </div>
                        {sizeDisplay.isWarning && (
                          <div className="mb-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                            <div className="flex items-center">
                              <AlertCircle className="w-4 h-4 text-orange-500 mr-2" />
                              <span className="text-sm text-orange-700">
                                {t('compress_png.batch_size_warning')}
                              </span>
                            </div>
                          </div>
                        )}
                        <div className="space-y-2 max-h-40 overflow-y-auto">
                          {batchFiles.map((file: File, index: number) => (
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
                      <p className="text-sm text-gray-600">{t('compress_png.original_size')}: <strong className="text-gray-900">{formatFileSize(compressionStats.originalSize)}</strong></p>
                      <p className="text-sm text-gray-600">{t('compress_png.compressed_size')}: <strong className="text-green-600">{formatFileSize(compressionStats.newSize)}</strong></p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-green-600">{compressionStats.savings.toFixed(1)}%</p>
                      <p className="text-xs text-gray-500">{t('compress_png.savings')}</p>
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
                      {t('compress_png.compressing')}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Minimize2 className="w-5 h-5 mr-2" />
                      {batchMode ? t('compress_png.compress_files', { count: batchFiles.length }) : t('compress_png.compress_image')}
                    </div>
                  )}
                </button>
              </div>

              {/* Success Message & Download */}
              {compressedFile && !batchMode && (
                <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <h4 className="text-lg font-semibold text-green-800">{t('compress_png.compression_complete')}</h4>
                  </div>
                  <p className="text-green-700 mb-4">
                    {t('compress_png.success_message')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleDownload}
                      className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      {t('compress_png.download_compressed')}
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
                    <h4 className="text-lg font-semibold text-green-800">{t('compress_png.batch_compression_complete')}</h4>
                  </div>
                  <p className="text-green-700 mb-4">
                    {t('compress_png.batch_success_message', { count: batchResults.length })}
                  </p>
                  
                  {/* Download All as ZIP Button */}
                  <div className="mb-4">
                    <button
                      onClick={handleBatchDownloadZip}
                      className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center mb-2"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      {t('compress_png.download_all_zip')}
                    </button>
                  </div>
                  
                  <div className="space-y-2 mb-4 max-h-60 overflow-y-auto">
                    {batchResults.map((result: { file: File; blob: Blob; originalSize: number; newSize: number }, index: number) => {
                      const savingsPercent = ((result.originalSize - result.newSize) / result.originalSize * 100).toFixed(1);
                      return (
                        <div key={index} className="flex items-center justify-between bg-white rounded-lg p-3 border border-green-200">
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">
                              {result.file.name.replace(/\.(png)$/i, '')}_compressed.png
                            </p>
                            <p className="text-xs text-gray-500">
                              {formatFileSize(result.originalSize)} → {formatFileSize(result.newSize)} ({savingsPercent}% {t('compress_png.savings')})
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
                {t('compress_png.compression_settings')}
              </h3>
              
              {/* Quality Slider */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {t('compress_png.quality')}: {quality}%
                </label>
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="5"
                  value={quality}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuality(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${quality}%, #e5e7eb ${quality}%, #e5e7eb 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>{t('compress_png.quality_low')}</span>
                  <span>{t('compress_png.quality_high')}</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  {t('compress_png.quality_desc')}
                </p>
              </div>

              {/* Optimize checkbox */}
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={optimize}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOptimize(e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{t('compress_png.optimize_png')}</span>
                </label>
                <p className="text-xs text-gray-500 mt-1 ml-6">
                  {t('compress_png.optimize_desc')}
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-500" />
                {t('compress_png.sidebar_title')}
              </h3>
              <div className="space-y-4">
                {[
                  t('compress_png.feature_1'),
                  t('compress_png.feature_2'),
                  t('compress_png.feature_3'),
                  t('compress_png.feature_4'),
                  t('compress_png.feature_5'),
                  t('compress_png.feature_6')
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
                {t('compress_png.perfect_for_title')}
              </h3>
              <div className="space-y-3">
                {[
                  t('compress_png.use_case_1'),
                  t('compress_png.use_case_2'),
                  t('compress_png.use_case_3'),
                  t('compress_png.use_case_4'),
                  t('compress_png.use_case_5'),
                  t('compress_png.use_case_6')
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
            {t('compress_png.why_compress_title')}
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t('compress_png.seo_intro')}
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{t('compress_png.benefits_title')}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-blue-900 mb-3">{t('compress_png.benefit_size_title')}</h4>
                <p className="text-gray-700">
                  {t('compress_png.benefit_size_text')}
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-purple-900 mb-3">{t('compress_png.benefit_speed_title')}</h4>
                <p className="text-gray-700">
                  {t('compress_png.benefit_speed_text')}
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-green-900 mb-3">{t('compress_png.benefit_bandwidth_title')}</h4>
                <p className="text-gray-700">
                  {t('compress_png.benefit_bandwidth_text')}
                </p>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-orange-900 mb-3">{t('compress_png.benefit_seo_title')}</h4>
                <p className="text-gray-700">
                  {t('compress_png.benefit_seo_text')}
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{t('compress_png.use_cases_title')}</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('compress_png.use_case_website_title')}</h4>
                  <p className="text-gray-700">{t('compress_png.use_case_website_text')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('compress_png.use_case_email_title')}</h4>
                  <p className="text-gray-700">{t('compress_png.use_case_email_text')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('compress_png.use_case_mobile_title')}</h4>
                  <p className="text-gray-700">{t('compress_png.use_case_mobile_text')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('compress_png.use_case_storage_title')}</h4>
                  <p className="text-gray-700">{t('compress_png.use_case_storage_text')}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">{t('compress_png.ready_title')}</h3>
              <p className="text-lg mb-6 opacity-90">
                {t('compress_png.ready_text')}
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

      <Footer />
      </div>
    </>
  );
};

