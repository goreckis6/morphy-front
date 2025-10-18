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
  Image as ImageIcon,
  BarChart3
} from 'lucide-react';
import { apiService } from '../../services/api';
import { useFileValidation } from '../../hooks/useFileValidation';
import { useAuth } from '../../contexts/AuthContext';
import { ConversionLimits } from '../../utils/conversionLimits';
import { ConversionLimitBanner } from '../ConversionLimitBanner';

export const GIFToICOConverter: React.FC = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
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
  const [batchResults, setBatchResults] = useState<any[]>([]);
  const [convertedFilename, setConvertedFilename] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<{url: string, width: number, height: number} | null>(null);
  const [conversionLimitReached, setConversionLimitReached] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
      if (file.name.toLowerCase().endsWith('.gif')) {
        const validation = validateSingleFile(file);
        if (!validation.isValid) {
          setError(validation.error?.message || 'File validation failed');
          setSelectedFile(null);
          setPreviewUrl(null);
          setImagePreview(null);
          if (event.target) {
            event.target.value = '';
          }
          return;
        }
        
        setSelectedFile(file);
        setError(null);
        clearValidationError();
        
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
        
        const img = new Image();
        img.onload = () => {
          setImagePreview({
            url,
            width: img.width,
            height: img.height
          });
        };
        img.src = url;
      } else {
        setError('Please select a valid GIF file');
      }
    }
  };

  const handleBatchFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const gifFiles = files.filter(file => file.name.toLowerCase().endsWith('.gif'));
    
    if (gifFiles.length === 0) {
      setError('No valid GIF files selected.');
      return;
    }

    const validation = validateBatchFiles(gifFiles);
    if (!validation.isValid) {
      setError(validation.error?.message || 'Batch validation failed');
      setBatchFiles([]);
      if (event.target) {
        event.target.value = '';
      }
      return;
    }

    setBatchFiles(gifFiles);
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
      const result = await apiService.convertFile(selectedFile, {
        format: 'ico',
        quality,
        iconSize: iconSize !== 'default' ? parseInt(iconSize) : undefined
      });
      
      if (result.blob) {
        const filename = selectedFile.name.replace(/\.gif$/i, '.ico');
        setConvertedFile(result.blob);
        setConvertedFilename(filename);
      } else {
        throw new Error('No conversion result received');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Conversion failed. Please try again.');
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
      const result = await apiService.convertBatch(batchFiles, {
        format: 'ico',
        quality,
        iconSize: iconSize !== 'default' ? parseInt(iconSize) : undefined
      });
      
      if (result && result.results) {
        setBatchResults(result.results);
        setBatchConverted(true);
        setError(null);
      } else {
        throw new Error('No batch results received');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Batch conversion failed. Please try again.');
    } finally {
      setIsConverting(false);
    }
  };

  const handleBatchDownload = async (result: any) => {
    try {
      let blob: Blob;
      let filename: string;

      if (result.storedFilename) {
        // File is stored on server, download it
        const downloadedBlob = await apiService.downloadAndSaveFile(result.storedFilename, result.originalName || result.storedFilename);
        if (!downloadedBlob) {
          throw new Error('Failed to download file');
        }
        blob = downloadedBlob;
        filename = result.originalName ? result.originalName.replace(/\.gif$/i, '.ico') : result.storedFilename;
      } else if (result.downloadPath) {
        // Legacy: download from path
        const downloadedBlob = await apiService.downloadAndSaveFile(result.downloadPath, result.originalName || 'converted.ico');
        if (!downloadedBlob) {
          throw new Error('Failed to download file');
        }
        blob = downloadedBlob;
        filename = result.originalName ? result.originalName.replace(/\.gif$/i, '.ico') : 'converted.ico';
      } else if (result.blob) {
        // Already have blob
        blob = result.blob;
        filename = result.originalName ? result.originalName.replace(/\.gif$/i, '.ico') : 'converted.ico';
      } else {
        throw new Error('No download information available');
      }

      // Create download link
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      // Refresh conversion limit banner after download
      if ((window as any).refreshConversionLimitBanner) {
        (window as any).refreshConversionLimitBanner();
      }
    } catch (err) {
      console.error('Download error:', err);
      setError(err instanceof Error ? err.message : 'Download failed. Please try again.');
    }
  };

  const handleDownload = () => {
    if (convertedFile) {
      const url = URL.createObjectURL(convertedFile);
      const a = document.createElement('a');
      a.href = url;
      a.download = convertedFilename || (selectedFile ? selectedFile.name.replace('.gif', '.ico') : 'converted.ico');
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      // Refresh conversion limit banner after download
      if ((window as any).refreshConversionLimitBanner) {
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
    setImagePreview(null);
    setBatchFiles([]);
    setBatchConverted(false);
    setBatchResults([]);
    setConvertedFilename(null);
    clearValidationError();
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const getSingleInfoMessage = () => {
    return '✓ Up to 100 MB per file';
  };

  return (
    <>
      <Helmet>
        <title>Free GIF to ICO Converter - Convert GIF to Windows Icon Format</title>
        <meta name="description" content="Convert GIF animated images to ICO icon format. Support for custom icon sizes (16x16, 32x32, 48x48, 256x256). Free online converter with batch processing for Windows icons." />
        <meta name="keywords" content="GIF to ICO, icon converter, Windows icon, favicon generator, GIF icon converter, batch conversion, animated GIF to icon" />
        <link rel="canonical" href="https://morphyimg.com/convert/gif-to-ico" />
        
        <meta property="og:title" content="Free GIF to ICO Converter Online | MorphyIMG" />
        <meta property="og:description" content="Convert GIF to ICO icon format online for free. Fast and easy." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://morphyimg.com/convert/gif-to-ico" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free GIF to ICO Converter Online" />
        <meta name="twitter:description" content="Convert GIF to ICO format with custom icon sizes." />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "GIF to ICO Converter",
            "description": "Free online GIF to ICO converter with custom icon sizes",
            "url": "https://morphyimg.com/convert/gif-to-ico",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Any",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-50">
      <Header />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-teal-600 to-emerald-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              GIF to ICO Converter
            </h1>
            <p className="text-lg sm:text-xl text-green-100 mb-6 max-w-2xl mx-auto">
              Convert GIF animated images to ICO icon format quickly and easily. Perfect for Windows icons, favicons, and application icons with custom sizes.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-green-200">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>Lightning Fast</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>100% Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>No Registration</span>
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
                      ? 'bg-green-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <FileText className="w-5 h-5 inline mr-2" />
                  Single File
                </button>
                <button
                  onClick={() => setBatchMode(true)}
                  className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all ${
                    batchMode 
                      ? 'bg-green-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <FileImage className="w-5 h-5 inline mr-2" />
                  Batch Convert
                </button>
              </div>

              {/* File Upload Area */}
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-green-400 transition-colors">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {batchMode ? 'Upload Multiple GIF Files' : 'Upload GIF File'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {batchMode 
                    ? 'Select multiple GIF files to convert them all at once' 
                    : 'Drag and drop your GIF file here or click to browse'
                  }
                </p>
                {!batchMode && (
                  <p className="text-xs text-blue-600 mb-2">{getSingleInfoMessage()}</p>
                )}
                {batchMode && (
                  <p className="text-sm text-blue-600 mb-4">
                    {getBatchInfoMessage()}
                  </p>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".gif"
                  multiple={batchMode}
                  onChange={batchMode ? handleBatchFileSelect : handleFileSelect}
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                >
                  {t('gif_to_ico.choose_files')}
                </button>
              </div>

              {/* Image Preview */}
              {imagePreview && !batchMode && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-4">Preview</h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-center bg-gray-100 rounded" style={{minHeight: '200px'}}>
                      <img src={imagePreview.url} alt="Preview" className="max-h-64 max-w-full rounded" />
                    </div>
                    <p className="text-sm text-gray-600 mt-2 text-center">
                      {selectedFile?.name} ({formatFileSize(selectedFile?.size || 0)}) - {imagePreview.width}×{imagePreview.height}px
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
              {(error || validationError) && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
                  <span className="text-red-700">{error || validationError?.message}</span>
                </div>
              )}

              {/* Convert Button */}
              <div className="mt-8">
                <button
                  onClick={batchMode ? handleBatchConvert : handleSingleConvert}
                  disabled={isConverting || conversionLimitReached || (batchMode ? batchFiles.length === 0 : !selectedFile)}
                  className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-700 hover:to-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
                >
                  {isConverting ? (
                    <div className="flex items-center justify-center">
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                      Converting...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Zap className="w-5 h-5 mr-2" />
                      {batchMode ? t('gif_to_ico.convert_files', { count: batchFiles.length }) : t('gif_to_ico.convert_to_ico')}
                    </div>
                  )}
                </button>
              </div>

              {/* Success Message & Download */}
              {convertedFile && !batchMode && (
                <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <h4 className="text-lg font-semibold text-green-800">{t('common.batch_conversion_complete')}</h4>
                  </div>
                  <p className="text-green-700 mb-4">
                    Your GIF file has been successfully converted to ICO format.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleDownload}
                      className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      {t('gif_to_ico.download_ico')}
                    </button>
                    <button
                      onClick={resetForm}
                      className="flex-1 bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors flex items-center justify-center"
                    >
                      <RefreshCw className="w-5 h-5 mr-2" />
                      Convert Another
                    </button>
                  </div>
                </div>
              )}

              {/* Batch Conversion Success */}
              {batchMode && batchConverted && batchResults.length > 0 && (
                <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <h4 className="text-lg font-semibold text-green-800">{t('gif_to_ico.batch_conversion_complete')}</h4>
                  </div>
                  <p className="text-green-700 mb-4">
                    {batchResults.filter(r => r.success).length} of {batchResults.length} files converted successfully.
                  </p>
                  <div className="space-y-2 max-h-40 overflow-y-auto mb-4">
                    {batchResults.map((result, index) => {
                      const displayName = result.filename || `${batchFiles[index].name.replace(/\.[^.]+$/, '')}.ico`;
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
                          {result.success && (
                            <button
                              onClick={() => handleBatchDownload(result)}
                              className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                            >
                              {t('gif_to_ico.download')}
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
                      {t('gif_to_ico.convert_more_files')}
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
                <Settings className="w-5 h-5 mr-2 text-green-600" />
                ICO Settings
              </h3>
              
              {/* Icon Size */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Icon Size
                </label>
                <select
                  value={iconSize}
                  onChange={(e) => setIconSize(e.target.value === 'default' ? 'default' : parseInt(e.target.value))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="default">Default (Original Size)</option>
                  <option value="16">16×16 (Small Icon)</option>
                  <option value="32">32×32 (Standard Icon)</option>
                  <option value="48">48×48 (Large Icon)</option>
                  <option value="64">64×64 (Extra Large)</option>
                  <option value="128">128×128 (macOS)</option>
                  <option value="256">256×256 (High-Res)</option>
                </select>
              </div>

              {/* Quality */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Quality
                </label>
                <select
                  value={quality}
                  onChange={(e) => setQuality(e.target.value as 'high' | 'medium' | 'low')}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="high">High (Best Quality)</option>
                  <option value="medium">Medium (Balanced)</option>
                  <option value="low">Low (Smaller Size)</option>
                </select>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-500" />
                Why Choose Our Converter?
              </h3>
              <div className="space-y-4">
                {[
                  "Custom icon sizes",
                  "High-quality conversion",
                  "Batch processing",
                  "Multiple formats",
                  "100% free to use",
                  "No registration needed"
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
                <BarChart3 className="w-5 h-5 mr-2 text-green-600" />
                {t('gif_to_ico.perfect_for')}
              </h3>
              <div className="space-y-3">
                {[
                  "Windows application icons",
                  "Favicon generation",
                  "Desktop shortcuts",
                  "Folder customization",
                  "System tray icons",
                  "Web development"
                ].map((useCase, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
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
            ← {t('gif_to_ico.back_to_home')}
          </button>
        </div>

        {/* SEO Content Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            Why Convert GIF to ICO?
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Converting GIF images to ICO (Icon) format is essential for creating Windows application icons, favicons, and system tray icons. While GIF is great for animated web graphics, ICO provides the multi-resolution support and transparency needed for professional Windows icons, making it the standard format for application development and web development.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{t('gif_to_ico.key_benefits')}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-green-900 mb-3">Multi-Resolution Support</h4>
                <p className="text-gray-700">
                  ICO files can contain multiple icon sizes in one file, ensuring perfect display at any resolution from 16×16 to 256×256.
                </p>
              </div>
              
              <div className="bg-teal-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-teal-900 mb-3">Windows Standard</h4>
                <p className="text-gray-700">
                  ICO is the native icon format for Windows applications, desktop shortcuts, folder icons, and system tray icons.
                </p>
              </div>
              
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-emerald-900 mb-3">Favicon Support</h4>
                <p className="text-gray-700">
                  ICO format is universally supported by web browsers as favicons, providing better compatibility than other formats.
                </p>
              </div>
              
              <div className="bg-lime-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-lime-900 mb-3">Transparency</h4>
                <p className="text-gray-700">
                  ICO supports alpha channel transparency, allowing icons to blend seamlessly with any background color.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{t('gif_to_ico.common_use_cases')}</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Windows Application Icons</h4>
                  <p className="text-gray-700">Convert GIF graphics to ICO format for desktop applications, executable files, and software installers.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Favicon Generation</h4>
                  <p className="text-gray-700">Create website favicons from GIF logos for browser tabs and bookmarks with universal compatibility.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">System Tray Icons</h4>
                  <p className="text-gray-700">Generate ICO icons from GIF images for Windows system tray applications and notification area icons.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-lime-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Folder and Shortcut Customization</h4>
                  <p className="text-gray-700">Create custom folder icons and desktop shortcut icons from GIF graphics for personalized Windows experience.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">{t('gif_to_ico.ready_to_convert')}</h3>
              <p className="text-lg mb-6 opacity-90">
                {t('gif_to_ico.ready_description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  {t('gif_to_ico.start_converting')}
                </button>
                <button
                  onClick={handleBack}
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                >
                  {t('gif_to_ico.back_to_home')}
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
