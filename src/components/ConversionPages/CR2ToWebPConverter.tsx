import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
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

export const CR2ToWebPConverter: React.FC = () => {
  const { t } = useTranslation();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [convertedFile, setConvertedFile] = useState<Blob | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [quality, setQuality] = useState<'high' | 'medium' | 'low'>('high');
  const [lossless, setLossless] = useState(false);
  const [preserveMetadata, setPreserveMetadata] = useState(true);
  const [batchMode, setBatchMode] = useState(false);
  const [batchFiles, setBatchFiles] = useState<File[]>([]);
  const [batchConverted, setBatchConverted] = useState(false);
  const [batchResults, setBatchResults] = useState<Array<{ file: File; blob: Blob }>>([]);
  const [imagePreview, setImagePreview] = useState<{url: string, width: number, height: number} | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Language detection from URL
  useEffect(() => {
    const path = window.location.pathname;
    if (path.startsWith('/pl/')) {
      i18n.changeLanguage('pl');
    } else if (path.startsWith('/de/')) {
      i18n.changeLanguage('de');
    } else {
      i18n.changeLanguage('en');
    }
  }, []);

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

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.name.toLowerCase().endsWith('.cr2')) {
        setSelectedFile(file);
        setError(null);
        setPreviewUrl(URL.createObjectURL(file));
        
        // Try to extract JPEG preview for actual preview
        try {
          const reader = new FileReader();
          reader.onload = async (e) => {
            try {
              const arrayBuffer = e.target?.result as ArrayBuffer;
              const uint8Array = new Uint8Array(arrayBuffer);
              
              // Look for embedded JPEG thumbnail
              const jpegStart = findJPEGStart(uint8Array);
              const jpegEnd = findJPEGEnd(uint8Array, jpegStart);
              
              if (jpegStart !== -1 && jpegEnd !== -1) {
                // Extract the JPEG preview
                const jpegData = uint8Array.slice(jpegStart, jpegEnd + 2);
                const jpegBlob = new Blob([jpegData], { type: 'image/jpeg' });
                const jpegUrl = URL.createObjectURL(jpegBlob);
                
                // Create image to get dimensions
                const img = new Image();
                img.onload = () => {
                  setImagePreview({
                    url: jpegUrl,
                    width: img.width,
                    height: img.height
                  });
                  // Update preview URL to show actual extracted image
                  setPreviewUrl(jpegUrl);
                };
                img.onerror = () => {
                  // Fallback to file info only
                  setImagePreview({
                    url: URL.createObjectURL(file),
                    width: 0,
                    height: 0
                  });
                  URL.revokeObjectURL(jpegUrl);
                };
                img.src = jpegUrl;
              } else {
                // No JPEG preview found, show file info only
                setImagePreview({
                  url: URL.createObjectURL(file),
                  width: 0,
                  height: 0
                });
              }
            } catch (error) {
              // Error reading file, show basic info
              setImagePreview({
                url: URL.createObjectURL(file),
                width: 0,
                height: 0
              });
            }
          };
          reader.readAsArrayBuffer(file);
        } catch (error) {
          // Error processing file, show basic info
          setImagePreview({
            url: URL.createObjectURL(file),
            width: 0,
            height: 0
          });
        }
      } else {
        setError('Please select a valid CR2 file');
      }
    }
  };

  const handleBatchFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const cr2Files = files.filter(file => 
      file.name.toLowerCase().endsWith('.cr2')
    );
    
    // Check for files larger than 1000MB
    const MAX_FILE_SIZE = 1000 * 1024 * 1024; // 1000MB
    const oversizedFile = cr2Files.find(file => file.size > MAX_FILE_SIZE);
    
    if (oversizedFile) {
      setError(`File "${oversizedFile.name}" is too large (${formatFileSize(oversizedFile.size)}). Maximum allowed size is 1000MB.`);
      setBatchFiles([]);
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }
    
    // Use existing validation
    const validation = validateBatchFiles(cr2Files);
    if (!validation.isValid) {
      setError(validation.error?.message || 'Batch validation failed');
      setBatchFiles([]);
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }
    
    setBatchFiles(cr2Files);
    setError(null);
    clearValidationError();
  };

  const findJPEGStart = (data: Uint8Array): number => {
    // Look for JPEG SOI marker (0xFF 0xD8)
    for (let i = 0; i < data.length - 1; i++) {
      if (data[i] === 0xFF && data[i + 1] === 0xD8) {
        return i;
      }
    }
    return -1;
  };

  const findJPEGEnd = (data: Uint8Array, start: number): number => {
    // Look for JPEG EOI marker (0xFF 0xD9) after the start position
    for (let i = start + 2; i < data.length - 1; i++) {
      if (data[i] === 0xFF && data[i + 1] === 0xD9) {
        return i + 1;
      }
    }
    return -1;
  };

  const generateSampleWebP = (file: File, resolve: (blob: Blob) => void) => {
    // Create a simple colored canvas as fallback
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      const fallbackContent = `SAMPLE_WEBP_FILE_START
ORIGINAL_FILE: ${file.name}
CR2_TO_WEBP_CONVERSION: Sample conversion
QUALITY: ${quality}
LOSSLESS: ${lossless}
METADATA_PRESERVED: ${preserveMetadata}
NOTE: This is a sample WebP file generated because the CR2 could not be processed in browser
WEBP_FILE_END`;
      resolve(new Blob([fallbackContent], { type: 'image/webp' }));
      return;
    }

    canvas.width = 200;
    canvas.height = 200;
    
    // Create a gradient background
    const gradient = ctx.createLinearGradient(0, 0, 200, 200);
    gradient.addColorStop(0, '#4f46e5');
    gradient.addColorStop(1, '#7c3aed');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 200, 200);
    
    // Add camera icon effect
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.fillRect(70, 80, 60, 40);
    ctx.fillRect(85, 70, 30, 20);
    
    // Add text
    ctx.fillStyle = 'white';
    ctx.font = '14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('CR2', 100, 150);
    ctx.fillText('SAMPLE', 100, 170);

    canvas.toBlob((blob) => {
      if (blob) {
        resolve(blob);
      } else {
        const fallbackContent = `SAMPLE_WEBP_FILE_START
ORIGINAL_FILE: ${file.name}
CR2_TO_WEBP_CONVERSION: Sample conversion
QUALITY: ${quality}
LOSSLESS: ${lossless}
METADATA_PRESERVED: ${preserveMetadata}
WEBP_FILE_END`;
        resolve(new Blob([fallbackContent], { type: 'image/webp' }));
      }
    }, 'image/webp', lossless ? 1.0 : (quality === 'high' ? 0.9 : quality === 'medium' ? 0.7 : 0.5));
  };

  const handleConvert = async (file: File): Promise<Blob> => {
    try {
      console.log('CR2 to WebP: Converting file:', file.name, 'size:', file.size, 'bytes');
      console.log('CR2 to WebP: Quality:', quality, 'Lossless:', lossless);

      const result = await apiService.convertFile(file, {
        format: 'webp',
        quality: lossless ? 1.0 : (quality === 'high' ? 0.9 : quality === 'medium' ? 0.7 : 0.5),
        lossless: lossless
      });

      console.log('CR2 to WebP: Conversion successful, blob size:', result.blob.size, 'bytes');
      return result.blob;
    } catch (error) {
      console.error('CR2 to WebP conversion error:', error);
      throw new Error(error instanceof Error ? error.message : 'Failed to convert CR2 to WebP. Please try again.');
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
      setError('Conversion failed. Please try again.');
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
      console.log('CR2 to WebP Batch: Converting', batchFiles.length, 'files');
      console.log('CR2 to WebP Batch: Quality:', quality, 'Lossless:', lossless);

      const result = await apiService.convertBatch(batchFiles, {
        format: 'webp',
        quality: lossless ? 1.0 : (quality === 'high' ? 0.9 : quality === 'medium' ? 0.7 : 0.5),
        lossless: lossless
      });

      console.log('CR2 to WebP Batch: Conversion result:', result);
      
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
      console.error('CR2 to WebP batch conversion error:', err);
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
      a.download = selectedFile ? selectedFile.name.replace('.cr2', '.webp') : 'converted.webp';
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
    // Clean up any blob URLs to prevent memory leaks
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    if (imagePreview?.url && imagePreview.url !== previewUrl) {
      URL.revokeObjectURL(imagePreview.url);
    }
    
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

  const handleBatchFileDownload = (file: File, blob: Blob) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name.replace('.cr2', '.webp');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <Helmet>
        <title>{t('cr2_to_webp.meta_title')}</title>
        <meta name="description" content={t('cr2_to_webp.meta_description')} />
        <meta name="keywords" content="CR2 to WebP, Canon RAW, WebP converter, image optimization, photography, batch processing" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50">
      <Header />
      
      {/* Hero Section - Narrowed */}
      <div className="relative overflow-hidden bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t('cr2_to_webp.title')}
            </h1>
            <p className="text-lg sm:text-xl text-cyan-100 mb-6 max-w-2xl mx-auto">
              {t('cr2_to_webp.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-cyan-200">
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
                      ? 'bg-cyan-600 text-white shadow-lg' 
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
                      ? 'bg-cyan-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <FileImage className="w-5 h-5 inline mr-2" />
                  {t('common.batch_convert')}
                </button>
              </div>

              {/* File Upload Area */}
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-cyan-400 transition-colors">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {batchMode ? t('cr2_to_webp.upload_batch') : t('cr2_to_webp.upload_single')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {batchMode 
                    ? t('cr2_to_webp.upload_text_batch')
                    : t('cr2_to_webp.upload_text_single')
                  }
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  {batchMode 
                    ? t('cr2_to_webp.file_limits_batch')
                    : t('cr2_to_webp.file_limits_single')
                  }
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".cr2"
                  multiple={batchMode}
                  onChange={batchMode ? handleBatchFileSelect : handleFileSelect}
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-cyan-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-cyan-700 transition-colors"
                >
                  {t('common.choose_files')}
                </button>
              </div>

              {/* File Preview */}
              {previewUrl && !batchMode && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-4">
                    {imagePreview && imagePreview.width > 0 ? t('cr2_to_webp.image_preview') : t('cr2_to_webp.file_info')}
                  </h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    {imagePreview && imagePreview.width > 0 ? (
                      // Show actual extracted JPEG preview
                      <div>
                        <img 
                          src={previewUrl} 
                          alt="CR2 Preview" 
                          className="max-w-full h-32 object-contain mx-auto rounded"
                        />
                        <div className="mt-3 text-center">
                          <p className="text-sm text-gray-600">
                            <strong>{selectedFile?.name}</strong> ({Math.round((selectedFile?.size || 0) / 1024)} KB)
                          </p>
                          <div className="mt-2 text-sm text-gray-500">
                            <p>{t('cr2_to_webp.extracted_preview')}: {imagePreview.width} × {imagePreview.height} pixels</p>
                            <p className="text-cyan-600 font-medium">
                              {t('cr2_to_webp.will_convert_to')}: {t('cr2_to_webp.webp_format')} ({t(`cr2_to_webp.quality_${quality}`)}, {lossless ? t('cr2_to_webp.lossless') : t('cr2_to_webp.lossy')})
                            </p>
                            {preserveMetadata && (
                              <p className="text-green-600 text-xs">✓ {t('cr2_to_webp.metadata_preserved')}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    ) : (
                      // Show camera icon when no preview available
                      <div>
                        <div className="flex items-center justify-center h-32 bg-gray-100 rounded">
                          <Camera className="w-12 h-12 text-gray-400" />
                        </div>
                        <div className="mt-3 text-center">
                          <p className="text-sm text-gray-600">
                            <strong>{selectedFile?.name}</strong> ({Math.round((selectedFile?.size || 0) / 1024)} KB)
                          </p>
                          <div className="mt-2 text-sm text-gray-500">
                            <p>{t('cr2_to_webp.canon_raw_file')}</p>
                            <p className="text-cyan-600 font-medium">
                              {t('cr2_to_webp.will_convert_to')}: {t('cr2_to_webp.webp_format')} ({t(`cr2_to_webp.quality_${quality}`)}, {lossless ? t('cr2_to_webp.lossless') : t('cr2_to_webp.lossy')})
                            </p>
                            {preserveMetadata && (
                              <p className="text-green-600 text-xs">✓ {t('cr2_to_webp.metadata_preserved')}</p>
                            )}
                            <p className="text-gray-400 text-xs mt-1">
                              {t('cr2_to_webp.no_preview_found')}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
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
                          <h4 className="text-lg font-semibold">{t('cr2_to_webp.selected_files')} ({batchFiles.length})</h4>
                          <div className={`text-sm font-medium ${sizeDisplay.isWarning ? 'text-orange-600' : 'text-gray-600'}`}>
                            {sizeDisplay.text}
                          </div>
                        </div>
                        {sizeDisplay.isWarning && (
                          <div className="mb-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                            <div className="flex items-center">
                              <AlertCircle className="w-4 h-4 text-orange-500 mr-2" />
                              <span className="text-sm text-orange-700">
                                {t('cr2_to_webp.batch_size_warning')}
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
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
                >
                  {isConverting ? (
                    <div className="flex items-center justify-center">
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                      {t('common.converting')}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Zap className="w-5 h-5 mr-2" />
                      {batchMode ? t('cr2_to_webp.convert_files', { count: batchFiles.length }) : t('cr2_to_webp.convert_to_webp')}
                    </div>
                  )}
                </button>
              </div>

              {/* Success Message & Download */}
              {convertedFile && !batchMode && (
                <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <h4 className="text-lg font-semibold text-green-800">{t('cr2_to_webp.conversion_complete')}</h4>
                  </div>
                  <p className="text-green-700 mb-4">
                    {t('cr2_to_webp.success_message')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleDownload}
                      className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      {t('cr2_to_webp.download_webp')}
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

              {/* Batch Conversion Success */}
              {batchConverted && batchMode && batchResults.length > 0 && (
                <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <h4 className="text-lg font-semibold text-green-800">{t('cr2_to_webp.batch_conversion_complete')}</h4>
                  </div>
                  <p className="text-green-700 mb-4">
                    {t('cr2_to_webp.batch_success_message', { count: batchResults.length })}
                  </p>
                  <div className="space-y-2 mb-4 max-h-60 overflow-y-auto">
                    {batchResults.map((result, index) => (
                      <div key={index} className="flex items-center justify-between bg-white rounded-lg p-3 border border-green-200">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">
                            {result.file.name.replace('.cr2', '.webp')} • {(result.blob.size / 1024).toFixed(1)} KB
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
                <Settings className="w-5 h-5 mr-2 text-cyan-600" />
                {t('cr2_to_webp.webp_settings')}
              </h3>
              
              {/* Quality */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {t('cr2_to_webp.quality')}
                </label>
                <select
                  value={quality}
                  onChange={(e) => setQuality(e.target.value as 'high' | 'medium' | 'low')}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                >
                  <option value="high">{t('cr2_to_webp.quality_high_option')}</option>
                  <option value="medium">{t('cr2_to_webp.quality_medium_option')}</option>
                  <option value="low">{t('cr2_to_webp.quality_low_option')}</option>
                </select>
              </div>

              {/* Lossless */}
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={lossless}
                    onChange={(e) => setLossless(e.target.checked)}
                    className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{t('cr2_to_webp.lossless_compression')}</span>
                </label>
              </div>

              {/* Preserve Metadata */}
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preserveMetadata}
                    onChange={(e) => setPreserveMetadata(e.target.checked)}
                    className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{t('cr2_to_webp.preserve_metadata')}</span>
                </label>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-500" />
                {t('cr2_to_webp.sidebar_title')}
              </h3>
              <div className="space-y-4">
                {[
                  t('cr2_to_webp.feature_1'),
                  t('cr2_to_webp.feature_2'),
                  t('cr2_to_webp.feature_3'),
                  t('cr2_to_webp.feature_4'),
                  t('cr2_to_webp.feature_5'),
                  t('cr2_to_webp.feature_6')
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
                <BarChart3 className="w-5 h-5 mr-2 text-cyan-600" />
                {t('cr2_to_webp.perfect_for_title')}
              </h3>
              <div className="space-y-3">
                {[
                  t('cr2_to_webp.use_case_1'),
                  t('cr2_to_webp.use_case_2'),
                  t('cr2_to_webp.use_case_3'),
                  t('cr2_to_webp.use_case_4'),
                  t('cr2_to_webp.use_case_5'),
                  t('cr2_to_webp.use_case_6')
                ].map((useCase, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3 flex-shrink-0"></div>
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
            {t('cr2_to_webp.why_convert_title')}
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t('cr2_to_webp.seo_intro')}
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{t('cr2_to_webp.benefits_title')}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-cyan-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-cyan-900 mb-3">{t('cr2_to_webp.benefit_compression_title')}</h4>
                <p className="text-gray-700">
                  {t('cr2_to_webp.benefit_compression_text')}
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-blue-900 mb-3">{t('cr2_to_webp.benefit_loading_title')}</h4>
                <p className="text-gray-700">
                  {t('cr2_to_webp.benefit_loading_text')}
                </p>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-indigo-900 mb-3">{t('cr2_to_webp.benefit_quality_title')}</h4>
                <p className="text-gray-700">
                  {t('cr2_to_webp.benefit_quality_text')}
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-purple-900 mb-3">{t('cr2_to_webp.benefit_standard_title')}</h4>
                <p className="text-gray-700">
                  {t('cr2_to_webp.benefit_standard_text')}
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{t('cr2_to_webp.use_cases_title')}</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('cr2_to_webp.use_case_photography_title')}</h4>
                  <p className="text-gray-700">{t('cr2_to_webp.use_case_photography_text')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('cr2_to_webp.use_case_portfolio_title')}</h4>
                  <p className="text-gray-700">{t('cr2_to_webp.use_case_portfolio_text')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('cr2_to_webp.use_case_ecommerce_title')}</h4>
                  <p className="text-gray-700">{t('cr2_to_webp.use_case_ecommerce_text')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('cr2_to_webp.use_case_marketing_title')}</h4>
                  <p className="text-gray-700">{t('cr2_to_webp.use_case_marketing_text')}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">{t('cr2_to_webp.ready_title')}</h3>
              <p className="text-lg mb-6 opacity-90">
                {t('cr2_to_webp.ready_text')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  {t('common.start_converting_now')}
                </button>
                <button
                  onClick={handleBack}
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
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
