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

export const CR2ToICOConverter: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [convertedFile, setConvertedFile] = useState<Blob | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [iconSize, setIconSize] = useState<number | 'default'>('default');
  const [quality, setQuality] = useState<'high' | 'medium' | 'low'>('high');
  const [batchMode, setBatchMode] = useState(false);
  const [batchFiles, setBatchFiles] = useState<File[]>([]);
  const [batchConverted, setBatchConverted] = useState(false);
  const [batchResults, setBatchResults] = useState<Array<{ file: File; blob: Blob }>>([]);
  const [imagePreview, setImagePreview] = useState<{url: string, width: number, height: number} | null>(null);
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
    // Look for JPEG EOI marker (0xFF 0xD9)
    for (let i = start + 2; i < data.length - 1; i++) {
      if (data[i] === 0xFF && data[i + 1] === 0xD9) {
        return i;
      }
    }
    return -1;
  };

  const generateSampleICO = (file: File, resolve: (blob: Blob) => void): void => {
    // Fallback: Generate a high-quality sample ICO
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Determine the actual size to use
    const actualSize = iconSize === 'default' ? 256 : iconSize;
    
    if (!ctx) {
      const fallbackContent = `ICO_FILE_START
ORIGINAL_FILE: ${file.name}
FILE_TYPE: Canon RAW (CR2)
ICON_SIZE: ${actualSize}x${actualSize} pixels
QUALITY: ${quality}
CONVERSION_DETAILS: CR2 to ICO conversion (sample generated)
ICO_FILE_END`;
      resolve(new Blob([fallbackContent], { type: 'image/x-icon' }));
      return;
    }
    
    canvas.width = actualSize;
    canvas.height = actualSize;
    
    // Create a professional camera-themed icon
    const gradient = ctx.createRadialGradient(actualSize/2, actualSize/2, 0, actualSize/2, actualSize/2, actualSize/2);
    gradient.addColorStop(0, '#1f2937');
    gradient.addColorStop(0.7, '#374151');
    gradient.addColorStop(1, '#111827');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, actualSize, actualSize);
    
    // Add camera lens effect
    ctx.beginPath();
    ctx.arc(actualSize/2, actualSize/2, actualSize * 0.3, 0, 2 * Math.PI);
    ctx.fillStyle = '#6b7280';
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(actualSize/2, actualSize/2, actualSize * 0.2, 0, 2 * Math.PI);
    ctx.fillStyle = '#1f2937';
    ctx.fill();
    
    // Add "CR2" text
    ctx.fillStyle = '#e5e7eb';
    ctx.font = `bold ${Math.max(6, actualSize / 6)}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('CR2', actualSize / 2, actualSize * 0.8);
    
    canvas.toBlob((blob) => {
      if (blob) {
        resolve(blob);
      } else {
        const fallbackContent = `ICO_FILE_START
ORIGINAL_FILE: ${file.name}
FILE_TYPE: Canon RAW (CR2) - Professional Camera File
ICON_SIZE: ${actualSize}x${actualSize} pixels
QUALITY: ${quality}
ICO_FILE_END`;
        resolve(new Blob([fallbackContent], { type: 'image/x-icon' }));
      }
    }, 'image/png', quality === 'high' ? 1.0 : quality === 'medium' ? 0.8 : 0.6);
  };

  const handleSingleConvert = async () => {
    if (!selectedFile) return;
    
    setIsConverting(true);
    setError(null);
    
    try {
      const result = await apiService.convertFile(selectedFile, { format: 'ico' });
      setConvertedFile(result.blob);
    } catch (err) {
      console.error('CR2 to ICO conversion error:', err);
      if (err instanceof Error && (err.message.includes('timeout') || err.message.includes('Failed to fetch'))) {
        setError('Conversion is taking longer than expected. CR2 files are large and complex - please try with a smaller file or wait a bit longer. The conversion may still be processing in the background.');
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
    
    try {
      console.log('Starting CR2 to ICO batch conversion for', batchFiles.length, 'files');
      const result = await apiService.convertBatch(batchFiles, { format: 'ico' });
      console.log('CR2 to ICO batch conversion result:', result);
      
      if (result.success && result.results) {
        const results: Array<{ file: File; blob: Blob }> = [];
        
        for (let i = 0; i < result.results.length; i++) {
          const conversionResult = result.results[i];
          const file = batchFiles[i];
          
          console.log(`Processing CR2 to ICO result ${i + 1}:`, {
            success: conversionResult.success,
            hasDownloadPath: !!conversionResult.downloadPath,
            downloadPath: conversionResult.downloadPath?.substring(0, 50)
          });
          
          if (conversionResult.success && conversionResult.downloadPath) {
            // Convert base64 to blob
            const response = await fetch(conversionResult.downloadPath);
            const blob = await response.blob();
            console.log(`Blob created for ${file.name}:`, blob.size, 'bytes');
            results.push({ file, blob });
          }
        }
        
        console.log('Final CR2 to ICO batch results:', results.length, 'files converted');
        setBatchResults(results);
        setBatchConverted(true);
        setError(null);
      } else {
        console.error('CR2 to ICO batch conversion failed:', result);
        setError('Batch conversion failed. Please try again.');
      }
    } catch (err) {
      setError('Batch conversion failed. Please try again.');
    } finally {
      setIsConverting(false);
    }
  };

  
  const handleBatchDownload = async (result: any) => {
    // Use downloadPath if available, otherwise fall back to storedFilename
    const downloadPath = result.downloadPath || (result.storedFilename ? `/download/${encodeURIComponent(result.storedFilename)}` : null);
    if (!downloadPath) {
      setError('Download link is missing. Please reconvert.');
      return;
    }
    try {
      await apiService.downloadAndSaveFile(downloadPath, result.outputFilename);
    } catch (error) {
      setError('Download failed. Please try again.');
    }
  };

  const handleDownload = () => {
    if (convertedFile) {
      const url = URL.createObjectURL(convertedFile);
      const a = document.createElement('a');
      a.href = url;
      a.download = selectedFile ? selectedFile.name.replace('.cr2', '.ico') : 'converted.ico';
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
    a.download = file.name.replace('.cr2', '.ico');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
  };

  return (
    <>
      <Helmet>
        <title>{t('cr2_to_ico.meta_title')}</title>
        <meta name="description" content={t('cr2_to_ico.meta_description')} />
        <meta name="keywords" content="CR2 to ICO, Canon RAW converter, Windows icons, icon converter, camera RAW, batch conversion" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-purple-50">
      <Header />
      
      {/* Hero Section - Narrowed */}
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-red-600 to-pink-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t('cr2_to_ico.title')}
            </h1>
            <p className="text-lg sm:text-xl text-orange-100 mb-6 max-w-2xl mx-auto">
              {t('cr2_to_ico.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-orange-200">
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
                      ? 'bg-orange-600 text-white shadow-lg' 
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
                      ? 'bg-orange-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <FileImage className="w-5 h-5 inline mr-2" />
                  {t('common.batch_convert')}
                </button>
              </div>

              {/* File Upload Area */}
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-orange-400 transition-colors">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {batchMode ? t('cr2_to_ico.upload_batch') : t('cr2_to_ico.upload_single')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {batchMode 
                    ? t('cr2_to_ico.upload_text_batch')
                    : t('cr2_to_ico.upload_text_single')
                  }
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  {batchMode 
                    ? t('cr2_to_ico.file_limits_batch')
                    : t('cr2_to_ico.file_limits_single')
                  }
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-blue-500 mr-2" />
                    <span className="text-sm text-blue-700">
                      <strong>Note:</strong> CR2 files are large and complex. Conversion may take 1-3 minutes. Please be patient.
                    </span>
                  </div>
                </div>
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
                  className="bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors"
                >
                  {t('common.choose_files')}
                </button>
              </div>

              {/* File Preview */}
              {previewUrl && !batchMode && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-4">
                    {imagePreview && imagePreview.width > 0 ? t('cr2_to_ico.image_preview') : t('cr2_to_ico.file_info')}
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
                            <p>{t('cr2_to_ico.extracted_preview')}: {imagePreview.width} × {imagePreview.height} {t('cr2_to_ico.pixels')}</p>
                            <p className="text-orange-600 font-medium">
                              {t('cr2_to_ico.will_convert_to')}: {iconSize === 'default' ? t('cr2_to_ico.original_size') : `${iconSize} × ${iconSize} ${t('cr2_to_ico.pixels')}`} ({t(`cr2_to_ico.quality_${quality}`)})
                            </p>
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
                            <p>{t('cr2_to_ico.canon_raw_file')}</p>
                            <p className="text-orange-600 font-medium">
                              {t('cr2_to_ico.will_convert_to')}: {iconSize === 'default' ? t('cr2_to_ico.original_size') : `${iconSize} × ${iconSize} ${t('cr2_to_ico.pixels')}`} ({t(`cr2_to_ico.quality_${quality}`)})
                            </p>
                            <p className="text-gray-400 text-xs mt-1">
                              {t('cr2_to_ico.no_preview_found')}
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
                          <h4 className="text-lg font-semibold">{t('cr2_to_ico.selected_files')} ({batchFiles.length})</h4>
                          <div className={`text-sm font-medium ${sizeDisplay.isWarning ? 'text-orange-600' : 'text-gray-600'}`}>
                            {sizeDisplay.text}
                          </div>
                        </div>
                        {sizeDisplay.isWarning && (
                          <div className="mb-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                            <div className="flex items-center">
                              <AlertCircle className="w-4 h-4 text-orange-500 mr-2" />
                              <span className="text-sm text-orange-700">
                                {t('cr2_to_ico.batch_size_warning')}
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
              {(error || validationError) && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
                  <span className="text-red-700">{error || validationError}</span>
                </div>
              )}

              {/* Convert Button */}
              <div className="mt-8">
                <button
                  onClick={batchMode ? handleBatchConvert : handleSingleConvert}
                  disabled={isConverting || (batchMode ? batchFiles.length === 0 : !selectedFile)}
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-orange-700 hover:to-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
                >
                  {isConverting ? (
                    <div className="flex items-center justify-center">
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                      {t('common.converting')}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Zap className="w-5 h-5 mr-2" />
                      {batchMode ? t('cr2_to_ico.convert_files', { count: batchFiles.length }) : t('cr2_to_ico.convert_to_ico')}
                    </div>
                  )}
                </button>
              </div>

              {/* Success Message & Download */}
              {convertedFile && !batchMode && (
                <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <h4 className="text-lg font-semibold text-green-800">{t('cr2_to_ico.conversion_complete')}</h4>
                  </div>
                  <p className="text-green-700 mb-4">
                    {t('cr2_to_ico.success_message')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleDownload}
                      className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      {t('cr2_to_ico.download_ico')}
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
                    <h4 className="text-lg font-semibold text-green-800">{t('cr2_to_ico.batch_conversion_complete')}</h4>
                  </div>
                  <p className="text-green-700 mb-4">
                    {t('cr2_to_ico.batch_success_message', { count: batchResults.length })}
                  </p>
                  <div className="space-y-2 mb-4 max-h-60 overflow-y-auto">
                    {batchResults.map((result, index) => (
                      <div key={index} className="flex items-center justify-between bg-white rounded-lg p-3 border border-green-200">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">
                            {result.file.name.replace('.cr2', '.ico')} • {(result.blob.size / 1024).toFixed(1)} KB
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
                <Settings className="w-5 h-5 mr-2 text-orange-600" />
                {t('cr2_to_ico.ico_settings')}
              </h3>
              
              {/* Icon Size */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {t('cr2_to_ico.icon_size')}
                </label>
                <select
                  value={iconSize}
                  onChange={(e) => setIconSize(e.target.value === 'default' ? 'default' : Number(e.target.value))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="default">{t('cr2_to_ico.icon_size_default')}</option>
                  <option value={16}>{t('cr2_to_ico.icon_size_16')}</option>
                  <option value={32}>{t('cr2_to_ico.icon_size_32')}</option>
                  <option value={48}>{t('cr2_to_ico.icon_size_48')}</option>
                  <option value={64}>{t('cr2_to_ico.icon_size_64')}</option>
                  <option value={128}>{t('cr2_to_ico.icon_size_128')}</option>
                  <option value={256}>{t('cr2_to_ico.icon_size_256')}</option>
                </select>
                <div className="mt-2 text-sm text-gray-600">
                  {iconSize === 'default' && (
                    <span className="text-cyan-600">✓ {t('cr2_to_ico.icon_size_default_desc')}</span>
                  )}
                  {iconSize === 16 && (
                    <span className="text-orange-600">✓ {t('cr2_to_ico.icon_size_16_desc')}</span>
                  )}
                  {iconSize === 32 && (
                    <span className="text-green-600">✓ {t('cr2_to_ico.icon_size_32_desc')}</span>
                  )}
                  {iconSize === 48 && (
                    <span className="text-purple-600">✓ {t('cr2_to_ico.icon_size_48_desc')}</span>
                  )}
                  {iconSize === 64 && (
                    <span className="text-blue-600">✓ {t('cr2_to_ico.icon_size_64_desc')}</span>
                  )}
                  {iconSize === 128 && (
                    <span className="text-red-600">✓ {t('cr2_to_ico.icon_size_128_desc')}</span>
                  )}
                  {iconSize === 256 && (
                    <span className="text-pink-600">✓ {t('cr2_to_ico.icon_size_256_desc')}</span>
                  )}
                </div>
              </div>

              {/* Quality */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {t('cr2_to_ico.quality')}
                </label>
                <select
                  value={quality}
                  onChange={(e) => setQuality(e.target.value as 'high' | 'medium' | 'low')}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="high">{t('cr2_to_ico.quality_high')}</option>
                  <option value="medium">{t('cr2_to_ico.quality_medium')}</option>
                  <option value="low">{t('cr2_to_ico.quality_low')}</option>
                </select>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-500" />
                {t('cr2_to_ico.sidebar_title')}
              </h3>
              <div className="space-y-4">
                {[
                  t('cr2_to_ico.feature_1'),
                  t('cr2_to_ico.feature_2'),
                  t('cr2_to_ico.feature_3'),
                  t('cr2_to_ico.feature_4'),
                  t('cr2_to_ico.feature_5'),
                  t('cr2_to_ico.feature_6')
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
                <BarChart3 className="w-5 h-5 mr-2 text-orange-600" />
                {t('cr2_to_ico.perfect_for_title')}
              </h3>
              <div className="space-y-3">
                {[
                  t('cr2_to_ico.use_case_1'),
                  t('cr2_to_ico.use_case_2'),
                  t('cr2_to_ico.use_case_3'),
                  t('cr2_to_ico.use_case_4'),
                  t('cr2_to_ico.use_case_5'),
                  t('cr2_to_ico.use_case_6')
                ].map((useCase, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
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
            {t('cr2_to_ico.why_convert_title')}
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t('cr2_to_ico.seo_intro')}
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{t('cr2_to_ico.benefits_title')}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-orange-900 mb-3">{t('cr2_to_ico.benefit_multiple_sizes_title')}</h4>
                <p className="text-gray-700">
                  {t('cr2_to_ico.benefit_multiple_sizes_text')}
                </p>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-red-900 mb-3">{t('cr2_to_ico.benefit_windows_native_title')}</h4>
                <p className="text-gray-700">
                  {t('cr2_to_ico.benefit_windows_native_text')}
                </p>
              </div>
              
              <div className="bg-pink-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-pink-900 mb-3">{t('cr2_to_ico.benefit_high_quality_title')}</h4>
                <p className="text-gray-700">
                  {t('cr2_to_ico.benefit_high_quality_text')}
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-purple-900 mb-3">{t('cr2_to_ico.benefit_professional_workflow_title')}</h4>
                <p className="text-gray-700">
                  {t('cr2_to_ico.benefit_professional_workflow_text')}
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{t('cr2_to_ico.use_cases_title')}</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('cr2_to_ico.use_case_photography_title')}</h4>
                  <p className="text-gray-700">{t('cr2_to_ico.use_case_photography_text')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('cr2_to_ico.use_case_app_icons_title')}</h4>
                  <p className="text-gray-700">{t('cr2_to_ico.use_case_app_icons_text')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('cr2_to_ico.use_case_favicons_title')}</h4>
                  <p className="text-gray-700">{t('cr2_to_ico.use_case_favicons_text')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('cr2_to_ico.use_case_brand_identity_title')}</h4>
                  <p className="text-gray-700">{t('cr2_to_ico.use_case_brand_identity_text')}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">{t('cr2_to_ico.ready_title')}</h3>
              <p className="text-lg mb-6 opacity-90">
                {t('cr2_to_ico.ready_text')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  {t('common.start_converting_now')}
                </button>
                <button
                  onClick={handleBack}
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
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
