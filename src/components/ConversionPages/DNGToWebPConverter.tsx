import React, { useState, useRef } from 'react';
import { Header } from '../Header';
import { useImageConversion } from '../../hooks/useImageConversion';
import { useFileValidation } from '../../hooks/useFileValidation';
import { apiService } from '../../services/api';
import { 
  Download, 
  Upload, 
  Settings, 
  Image as ImageIcon, 
  Zap, 
  Shield, 
  Clock, 
  CheckCircle,
  FileText,
  FileImage,
  RefreshCw,
  AlertCircle,
  Star,
  File,
  BarChart3
} from 'lucide-react';

export const DNGToWebPConverter: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [convertedFile, setConvertedFile] = useState<Blob | null>(null);
  const [convertedFilename, setConvertedFilename] = useState('');
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [batchMode, setBatchMode] = useState(false);
  const [batchFiles, setBatchFiles] = useState<File[]>([]);
  const [batchResults, setBatchResults] = useState<any[]>([]);
  const [batchConverted, setBatchConverted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const { validationError, validateSingleFile, validateBatchFiles, getSingleInfoMessage, getBatchInfoMessage, getBatchSizeDisplay, formatFileSize, clearValidationError } = useFileValidation();
  
  const [quality, setQuality] = useState(95);
  const [lossless, setLossless] = useState(false);
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    clearValidationError();
    setError(null);
    setConvertedFile(null);
    setConvertedFilename('');

    // Check if file is a valid DNG
    if (!file.name.toLowerCase().endsWith('.dng') && !file.type.includes('dng')) {
      setError('Please select a valid DNG file.');
      return;
    }

    const validation = validateSingleFile(file);
    if (!validation.isValid) {
      return;
    }

    setSelectedFile(file);
    
    // Create preview URL
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  };

  const handleBatchFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (files.length === 0) return;

    clearValidationError();
    setError(null);
    setBatchResults([]);
    setBatchConverted(false);

    // Check if all files are valid DNG files
    const invalidFiles = files.filter(file => 
      !file.name.toLowerCase().endsWith('.dng') && !file.type.includes('dng')
    );
    
    if (invalidFiles.length > 0) {
      setError(`Please select only DNG files. Found ${invalidFiles.length} invalid file(s).`);
      return;
    }

    const validation = validateBatchFiles(files);
    if (!validation.isValid) {
      return;
    }

    setBatchFiles(files);
  };

  const handleSingleConvert = async () => {
    if (!selectedFile) return;

    setIsConverting(true);
    setError(null);

    try {
      const options: any = {
        format: 'webp',
        quality: quality,
        lossless: lossless
      };
      
      if (width) options.width = parseInt(width);
      if (height) options.height = parseInt(height);

      const result = await apiService.convertFile(selectedFile, options);
      
      setConvertedFile(result.blob);
      setConvertedFilename(result.filename);
    } catch (err) {
      console.error('Conversion error:', err);
      setError(err instanceof Error ? err.message : 'Conversion failed. Please try again.');
    } finally {
      setIsConverting(false);
    }
  };

  const handleBatchConvert = async () => {
    if (batchFiles.length === 0) return;

    setIsConverting(true);
    setError(null);

    try {
      const options: any = {
        format: 'webp',
        quality: quality,
        lossless: lossless
      };
      
      if (width) options.width = parseInt(width);
      if (height) options.height = parseInt(height);

      const response = await apiService.convertBatch(batchFiles, options);
      
      if (response.success) {
        setBatchResults(response.results);
        setBatchConverted(true);
      } else {
        setError('Batch conversion failed. Please try again.');
      }
    } catch (err) {
      console.error('Batch conversion error:', err);
      setError(err instanceof Error ? err.message : 'Batch conversion failed. Please try again.');
    } finally {
      setIsConverting(false);
    }
  };

  const handleDownload = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleBatchDownload = async (downloadPath: string, filename: string) => {
    try {
      const response = await fetch(downloadPath);
      const blob = await response.blob();
      handleDownload(blob, filename);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  const resetForm = () => {
    setSelectedFile(null);
    setConvertedFile(null);
    setConvertedFilename('');
    setError(null);
    setPreviewUrl(null);
    setBatchMode(false);
    setBatchFiles([]);
    setBatchResults([]);
    setBatchConverted(false);
    setQuality(95);
    setLossless(false);
    setWidth('');
    setHeight('');
    clearValidationError();
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleBack = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <Header />
      
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              DNG to WebP Converter
            </h1>
            <p className="text-lg sm:text-xl text-purple-100 mb-6 max-w-2xl mx-auto">
              Convert DNG RAW files to high-quality WebP images. Transform your professional photography into web-optimized format with superior compression and quality.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-purple-200">
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
          
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              
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
                  Single File
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
                  Batch Convert
                </button>
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-purple-400 transition-colors">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {batchMode ? 'Upload Multiple DNG Files' : 'Upload DNG File'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {batchMode 
                    ? 'Select multiple DNG files to convert them all at once' 
                    : 'Drag and drop your DNG file here or click to browse'
                  }
                </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".dng"
                  multiple={batchMode}
                  onChange={batchMode ? handleBatchFileSelect : handleFileSelect}
                    className="hidden"
                  />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                >
                  Choose Files
                </button>
                </div>

              {previewUrl && !batchMode && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-4">Preview</h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-center h-32 bg-gray-100 rounded">
                      <File className="w-12 h-12 text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-600 mt-2 text-center">
                      {selectedFile?.name} ({formatFileSize(selectedFile?.size || 0)})
                    </p>
                    </div>
                  </div>
                )}

              {batchMode && batchFiles.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-4">Selected Files ({batchFiles.length})</h4>
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

                {/* Conversion Time Info */}
              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-blue-600 mr-2" />
                    <p className="text-blue-800 text-sm">
                      Conversion may take 2-5 minutes for large DNG files
                    </p>
                  </div>
                </div>

              <div className="mt-8">
                <button
                  onClick={batchMode ? handleBatchConvert : handleSingleConvert}
                  disabled={isConverting || (batchMode ? batchFiles.length === 0 : !selectedFile)}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
                >
                  {isConverting ? (
                    <div className="flex items-center justify-center">
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                      Converting...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Zap className="w-5 h-5 mr-2" />
                      {batchMode ? `Convert ${batchFiles.length} Files` : 'Convert to WebP'}
                  </div>
                )}
                </button>
              </div>

              {convertedFile && !batchMode && (
                <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <h4 className="text-lg font-semibold text-green-800">Conversion Complete!</h4>
            </div>
                  <p className="text-green-700 mb-4">
                    Your DNG file has been successfully converted to WebP format.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => handleDownload(convertedFile, convertedFilename)}
                      className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download WebP File
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

                {/* Batch Results */}
                {batchConverted && batchResults.length > 0 && (
                <div className="mt-6 space-y-3">
                    <h3 className="font-medium text-gray-900">Conversion Results:</h3>
                    {batchResults.map((result, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 rounded p-3">
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-sm text-gray-700">{result.outputFilename}</span>
                        </div>
                        <button
                          onClick={() => handleBatchDownload(result.downloadPath!, result.outputFilename)}
                          className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition-colors"
                        >
                          Download
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={resetForm}
                      className="w-full bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      Convert More Files
                    </button>
                  </div>
                )}
              </div>
            </div>

          <div className="space-y-6">

            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Settings className="w-5 h-5 mr-2 text-purple-600" />
                WebP Settings
              </h3>
              
              <div className="space-y-6">
                {/* Quality Setting */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Quality: {quality}%
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={quality}
                    onChange={(e) => setQuality(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    disabled={lossless}
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Low</span>
                    <span>High</span>
                  </div>
                </div>

                {/* Lossless Setting */}
                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={lossless}
                      onChange={(e) => setLossless(e.target.checked)}
                      className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">Lossless compression</span>
                  </label>
                  <p className="text-xs text-gray-500 mt-1">
                    When enabled, quality setting is ignored
                  </p>
                </div>

                {/* Size Settings */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Width (px)
                    </label>
                    <input
                      type="number"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                      placeholder="Auto"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Height (px)
                    </label>
                    <input
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      placeholder="Auto"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="text-xs text-gray-500">
                  <p>• Leave width/height empty to maintain original aspect ratio</p>
                  <p>• Specify only one dimension to scale proportionally</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-500" />
                Why Choose Our Converter?
              </h3>
              <div className="space-y-4">
                {[
                  "Superior compression efficiency",
                  "Professional RAW processing",
                  "Lossless and lossy options",
                  "Web-optimized output",
                  "Batch processing support",
                  "High-quality results"
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
                <BarChart3 className="w-5 h-5 mr-2 text-purple-600" />
                Perfect For
              </h3>
              <div className="space-y-3">
                {[
                  "Web development",
                  "Mobile applications",
                  "Social media sharing",
                  "Email attachments",
                  "Digital portfolios",
                  "E-commerce images"
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

        <div className="mt-12 text-center">
          <button
            onClick={handleBack}
            className="bg-gray-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
          >
            ← Back to Home
          </button>
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            Why Convert DNG to WebP?
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Converting DNG RAW files to WebP format is essential for modern web development, mobile applications, and digital content creation. While DNG files preserve the highest quality from your camera's sensor, WebP format provides the perfect balance of quality and file size for web use.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Key Benefits of WebP Format</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-purple-900 mb-3">Superior Performance</h4>
                <p className="text-gray-700">
                  WebP images are 25-35% smaller than JPEG files while maintaining the same visual quality, resulting in faster loading times and better user experience.
                </p>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-indigo-900 mb-3">Professional Quality</h4>
                <p className="text-gray-700">
                  WebP supports both lossy and lossless compression, advanced color spaces, and transparency, making it perfect for professional photography and design work.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-blue-900 mb-3">Future-Proof Format</h4>
                <p className="text-gray-700">
                  WebP is supported by all modern browsers and is becoming the standard for web images, ensuring your content remains compatible and optimized.
                </p>
          </div>

              <div className="bg-cyan-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-cyan-900 mb-3">RAW Processing</h4>
                <p className="text-gray-700">
                  Our converter processes DNG RAW files directly, preserving the full dynamic range and color information from your camera's sensor.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Convert Your DNG Files?</h3>
              <p className="text-lg mb-6 opacity-90">
                Use our free online DNG to WebP converter to transform your RAW photography into web-optimized images.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Converting Now
                </button>
                <button
                  onClick={handleBack}
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

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
  );
};