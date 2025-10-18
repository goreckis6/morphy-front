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
  File,
  BarChart3
} from 'lucide-react';
import { apiService } from '../../services/api';
import { useFileValidation } from '../../hooks/useFileValidation';
import { useAuth } from '../../contexts/AuthContext';
import { ConversionLimits } from '../../utils/conversionLimits';
import { ConversionLimitBanner } from '../ConversionLimitBanner';

export const EPSToICOConverter: React.FC = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [convertedFile, setConvertedFile] = useState<Blob | null>(null);
  const [convertedFilename, setConvertedFilename] = useState<string | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [iconSizes, setIconSizes] = useState<number[]>([16]);
  const [quality, setQuality] = useState<'high' | 'medium' | 'low'>('high');
  const [batchMode, setBatchMode] = useState(false);
  const [batchFiles, setBatchFiles] = useState<File[]>([]);
  const [batchConverted, setBatchConverted] = useState(false);
  const [batchResults, setBatchResults] = useState<Array<{
    originalName: string;
    outputFilename?: string;
    success: boolean;
    downloadPath?: string;
    storedFilename?: string;
  }>>([]);
  const [usedIconSize, setUsedIconSize] = useState<number>(16);
  const [conversionLimitReached, setConversionLimitReached] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  useEffect(() => {
    setIconSizes(prev => (prev.length ? prev : [16]));
  }, []);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.name.toLowerCase().endsWith('.eps')) {
        // Validate single file size using shared validation
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
        setError('Please select a valid EPS file');
      }
    }
  };

  const handleBatchFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    
    // Filter to only EPS files
    const epsFiles = files.filter(file => file.name.toLowerCase().endsWith('.eps'));
    
    if (epsFiles.length === 0) {
      setError('No valid EPS files selected.');
      return;
    }

    // Validate batch files using shared validation
    const validation = validateBatchFiles(epsFiles);
    if (!validation.isValid) {
      setError(validation.error?.message || 'Batch validation failed');
      setBatchFiles([]);
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    setBatchFiles(epsFiles);
    setError(null);
    clearValidationError();
  };

  const getPrimaryIconSize = () => {
    if (!iconSizes.length) return 16;
    return Math.min(...iconSizes);
  };

  const handleConvert = async (file: File) => {
    try {
      const iconSizeValue = getPrimaryIconSize();
      return await apiService.convertFile(file, {
        format: 'ico',
        iconSize: iconSizeValue,
        quality
      });
    } catch (error) {
      console.error('Conversion failed:', error);
      throw error;
    }
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
      const result = await handleConvert(selectedFile);
      setConvertedFile(result.blob);
      setConvertedFilename(result.filename);
      setUsedIconSize(getPrimaryIconSize());
      setBatchConverted(false);
      setBatchResults([]);
    } catch (err: any) {
      const message = err instanceof Error ? err.message : 'Conversion failed. Please try again.';
      setError(message);
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
      const iconSizeValue = getPrimaryIconSize();
      const result = await apiService.convertBatch(batchFiles, {
        format: 'ico',
        iconSize: iconSizeValue,
        quality
      });

      setBatchResults(result.results ?? []);
      const successes = (result.results ?? []).filter((item: any) => item.success);
      if (successes.length > 0) {
        setBatchConverted(true);
        const failures = (result.results ?? []).filter((item: any) => !item.success);
        setError(failures.length > 0
          ? `${failures.length} file${failures.length > 1 ? 's' : ''} failed to convert.`
          : null
        );
      } else {
        setBatchConverted(false);
        setError('Batch conversion failed. Please try again.');
      }
      setConvertedFile(null);
      setConvertedFilename(null);
    } catch (err) {
      setBatchConverted(false);
      setBatchResults([]);
      setError(err instanceof Error ? err.message : 'Batch conversion failed. Please try again.');
    } finally {
      setIsConverting(false);
    }
  };

  const handleDownload = () => {
    if (convertedFile) {
      const filename = convertedFilename || (selectedFile ? selectedFile.name.replace(/\.[^.]+$/, '.ico') : 'converted.ico');
      apiService.downloadBlob(convertedFile, filename);
      // Refresh conversion limit banner after download
      if ((window as any).refreshConversionLimitBanner) {
        (window as any).refreshConversionLimitBanner();
      }
    }
  };

  const handleBatchDownload = async (result: any) => {
    const filename = result.storedFilename || result.downloadPath?.split('/').pop();
    if (!filename) {
      setError('Download link is missing. Please reconvert the file.');
      return;
    }

    try {
      await apiService.downloadFile(filename, result.outputFilename);
      // Refresh conversion limit banner after download
      if ((window as any).refreshConversionLimitBanner) {
        (window as any).refreshConversionLimitBanner();
      }
    } catch (downloadError) {
      console.error('Download failed:', downloadError);
      setError('Failed to download file. Please try again.');
    }
  };

  const handleBack = () => {
    window.location.href = '/';
  };

  const resetForm = () => {
    setSelectedFile(null);
    setConvertedFile(null);
    setConvertedFilename(null);
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
        <title>EPS to ICO Converter - Convert Vector Graphics to Icons</title>
        <meta name="description" content="Convert EPS (Encapsulated PostScript) files to ICO format for Windows icons. Professional vector to icon conversion. Free online converter." />
        <meta name="keywords" content="EPS to ICO, vector to icon, PostScript converter, Windows icons, graphic design" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-cyan-50">
      <Header />
      
      {/* Hero Section - Narrowed */}
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              EPS to ICO Converter
            </h1>
            <p className="text-lg sm:text-xl text-emerald-100 mb-6 max-w-2xl mx-auto">
              Convert Encapsulated PostScript EPS files to ICO format for Windows icons. Transform vector graphics into high-quality Windows icon files with multiple sizes.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-emerald-200">
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
                      ? 'bg-emerald-600 text-white shadow-lg' 
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
                      ? 'bg-emerald-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <FileImage className="w-5 h-5 inline mr-2" />
                  Batch Convert
                </button>
              </div>

              {/* File Upload Area */}
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-emerald-400 transition-colors">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {batchMode ? 'Upload Multiple EPS Files' : 'Upload EPS File'}
                </h3>
                <p className="text-gray-600 mb-2">
                  {batchMode 
                    ? 'Select multiple EPS files to convert them all at once' 
                    : 'Drag and drop your EPS file here or click to browse'
                  }
                </p>
                {!batchMode && (
                  <p className="text-xs text-emerald-600 mb-2">{getSingleInfoMessage()}</p>
                )}
                {batchMode && (
                  <p className="text-sm text-emerald-600 mb-4">
                    {getBatchInfoMessage()}
                  </p>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".eps"
                  multiple={batchMode}
                  onChange={batchMode ? handleBatchFileSelect : handleFileSelect}
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
                >
                  {t('eps_to_ico.choose_files')}
                </button>
              </div>

              {/* File Preview */}
              {previewUrl && !batchMode && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-4">Preview</h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-center h-32 bg-gray-100 rounded">
                      <File className="w-12 h-12 text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-600 mt-2 text-center">
                      {selectedFile?.name} ({(selectedFile?.size || 0) / 1024} KB)
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
                          <div className={`text-sm font-medium ${sizeDisplay.isWarning ? 'text-emerald-700' : 'text-gray-600'}`}>
                            {sizeDisplay.text}
                          </div>
                        </div>
                        {sizeDisplay.isWarning && (
                          <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
                            <div className="flex items-center">
                              <AlertCircle className="w-4 h-4 text-emerald-600 mr-2" />
                              <span className="text-sm text-emerald-800">Batch size is getting close to the 100MB limit. Consider 5–10 files for best performance.</span>
                            </div>
                          </div>
                        )}
                        <div className="space-y-2 max-h-40 overflow-y-auto">
                          {batchFiles.map((file, index) => (
                            <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                              <span className="text-sm font-medium">{file.name}</span>
                              <span className="text-xs text-gray-500">{(file.size / 1024).toFixed(1)} KB</span>
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
                  disabled={isConverting || conversionLimitReached || (batchMode ? batchFiles.length === 0 : !selectedFile)}
                  className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-emerald-700 hover:to-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
                >
                  {isConverting ? (
                    <div className="flex items-center justify-center">
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                      Converting...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Zap className="w-5 h-5 mr-2" />
                      {batchMode ? t('eps_to_ico.convert_files', { count: batchFiles.length }) : t('eps_to_ico.convert_to_ico')}
                    </div>
                  )}
                </button>
              </div>

              {/* Single conversion success */}
              {convertedFile && !batchMode && (
                <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <h4 className="text-lg font-semibold text-green-800">{t('common.batch_conversion_complete')}</h4>
                  </div>
                  <p className="text-green-700 mb-4">Your EPS file has been successfully converted to ICO format (size {usedIconSize}×{usedIconSize}).</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleDownload}
                      className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      {t('eps_to_ico.download_ico')}
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

              {/* Batch conversion success */}
              {batchMode && batchConverted && batchResults.length > 0 && (
                <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <h4 className="text-lg font-semibold text-green-800">{t('eps_to_ico.batch_conversion_complete')}</h4>
                  </div>
                  <p className="text-green-700 mb-4">{batchResults.filter(item => item.success).length} file(s) converted successfully at {getPrimaryIconSize()}×{getPrimaryIconSize()}.</p>
                  <div className="space-y-2 max-h-60 overflow-y-auto">
                    {batchResults.map((result, index) => (
                      <div key={index} className="flex items-center justify-between bg-white border border-green-100 rounded-lg p-3">
                        <div className="flex items-center gap-3">
                          {result.success ? (
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          ) : (
                            <AlertCircle className="w-4 h-4 text-red-500" />
                          )}
                          <span className="text-sm font-medium text-gray-900">
                            {result.outputFilename || result.originalName}
                          </span>
                        </div>
                        {result.success && result.downloadPath ? (
                          <button
                            onClick={() => handleBatchDownload(result)}
                            className="bg-green-600 text-white px-3 py-1 rounded text-xs font-medium hover:bg-green-700 transition-colors flex items-center"
                          >
                            <Download className="w-3 h-3 mr-1" />
                            {t('eps_to_ico.download')}
                          </button>
                        ) : result.error ? (
                          <span className="text-xs text-red-600">{result.error}</span>
                        ) : null}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <button
                      onClick={resetForm}
                      className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
                    >
                      <RefreshCw className="w-5 h-5 mr-2" />
                      {t('eps_to_ico.convert_more_files')}
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
                <Settings className="w-5 h-5 mr-2 text-emerald-600" />
                ICO Settings
              </h3>
              
              {/* Icon Size Selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Icon Size
                </label>
                <select
                  value={iconSizes[0]}
                  onChange={(e) => {
                    const size = parseInt(e.target.value);
                    setIconSizes([size]);
                  }}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  {[16, 32, 48, 64, 128, 256].map(size => (
                    <option key={size} value={size}>
                      {size}px{size === 16 ? ' (default)' : ''}
                    </option>
                  ))}
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
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="high">High Quality</option>
                  <option value="medium">Medium Quality</option>
                  <option value="low">Low Quality</option>
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
                  "Vector graphics support",
                  "Multiple icon size generation",
                  "Windows icon compatibility",
                  "High-quality output",
                  "Professional icon creation",
                  "Batch processing support"
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
                <BarChart3 className="w-5 h-5 mr-2 text-emerald-600" />
                {t('eps_to_ico.perfect_for')}
              </h3>
              <div className="space-y-3">
                {[
                  "Application icon creation",
                  "Website favicon generation",
                  "Windows desktop icons",
                  "Software development",
                  "Brand identity design",
                  "Professional iconography"
                ].map((useCase, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0"></div>
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
            ← {t('eps_to_ico.back_to_home')}
          </button>
        </div>

        {/* SEO Content Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            Why Convert EPS to ICO?
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Converting Encapsulated PostScript EPS files to ICO format is essential for professional icon design, software development, and brand identity creation. While EPS files contain high-quality vector graphics, ICO format provides the perfect solution for creating Windows icons with multiple resolutions and professional quality.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{t('eps_to_ico.key_benefits')}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-emerald-900 mb-3">Vector Graphics Support</h4>
                <p className="text-gray-700">
                  ICO format can contain vector-based graphics from EPS files, ensuring crisp and scalable icons that look perfect at any size.
                </p>
              </div>
              
              <div className="bg-cyan-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-cyan-900 mb-3">Multiple Icon Sizes</h4>
                <p className="text-gray-700">
                  ICO files can contain multiple icon sizes (16x16, 32x32, 48x48, 64x64, 128x128, 256x256 pixels) in a single file, ensuring perfect display across all contexts.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-blue-900 mb-3">Windows Native Support</h4>
                <p className="text-gray-700">
                  ICO is the native icon format for Windows operating systems, ensuring perfect compatibility with file explorers, taskbars, and application windows.
                </p>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-indigo-900 mb-3">Professional Quality</h4>
                <p className="text-gray-700">
                  ICO format preserves the high quality of EPS vector graphics while providing efficient compression, making it ideal for professional applications.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{t('eps_to_ico.common_use_cases')}</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Application Icon Creation</h4>
                  <p className="text-gray-700">Create professional application icons for Windows software using high-quality EPS vector graphics, ensuring your app looks polished and native.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Website Favicon Generation</h4>
                  <p className="text-gray-700">Generate high-quality favicons for websites using EPS vector graphics, ensuring crisp display across all devices and browsers.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Windows Desktop Icons</h4>
                  <p className="text-gray-700">Create custom desktop icons for Windows using EPS vector graphics, adding personality and visual interest to your desktop.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Brand Identity Design</h4>
                  <p className="text-gray-700">Develop consistent brand assets by converting EPS vector graphics to ICO format for use across digital platforms and applications.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">{t('eps_to_ico.ready_to_convert')}</h3>
              <p className="text-lg mb-6 opacity-90">
                {t('eps_to_ico.ready_description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  {t('eps_to_ico.start_converting')}
                </button>
                <button
                  onClick={handleBack}
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
                >
                  {t('eps_to_ico.back_to_home')}
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
