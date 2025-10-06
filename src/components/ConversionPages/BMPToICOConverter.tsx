import React, { useState, useRef } from 'react';
import { apiService } from '../../services/api';
import { useFileValidation } from '../../hooks/useFileValidation';
import { Header } from '../Header';
import { 
  Upload, 
  Download, 
  Settings, 
  FileImage,
  RefreshCw,
  CheckCircle,
  AlertCircle,
  Zap,
  Shield,
  Clock,
  Star,
  BarChart3
} from 'lucide-react';

export const BMPToICOConverter: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [convertedFile, setConvertedFile] = useState<File | null>(null);
  const [convertedFilename, setConvertedFilename] = useState<string>('');
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [batchMode, setBatchMode] = useState(false);
  const [batchFiles, setBatchFiles] = useState<File[]>([]);
  const [batchResults, setBatchResults] = useState<any[]>([]);
  const [batchConverted, setBatchConverted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { validationError, validateSingleFile, validateBatchFiles, getSingleInfoMessage, getBatchInfoMessage, getBatchSizeDisplay, formatFileSize, clearValidationError } = useFileValidation();
  
  const [iconSizes, setIconSizes] = useState<number[]>([]);
  const [includeAlpha, setIncludeAlpha] = useState(true);
  const [originalSize, setOriginalSize] = useState<number | null>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    clearValidationError();
    setError(null);
    setConvertedFile(null);
    setConvertedFilename('');

    // Check if file is a valid BMP
    if (!file.name.toLowerCase().endsWith('.bmp') && !file.type.includes('bmp')) {
      setError('Please select a valid BMP file.');
      return;
    }

    // Additional validation for BMP files
    if (file.size < 1000) {
      setError('BMP file appears to be too small or corrupted.');
      return;
    }

    // Check file header for BMP signature
    const reader = new FileReader();
    reader.onload = (e) => {
      const arrayBuffer = e.target?.result as ArrayBuffer;
      const uint8Array = new Uint8Array(arrayBuffer);
      
      // Check for BMP signature (BM)
      if (uint8Array[0] !== 0x42 || uint8Array[1] !== 0x4D) {
        setError('File does not appear to be a valid BMP file.');
        return;
      }
      
      // If validation passes, proceed with file selection
      setSelectedFile(file);
      
      // Create preview URL and detect image size
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      
      // Detect original image size
      const img = new Image();
      img.onload = () => {
        const size = Math.min(img.width, img.height);
        setOriginalSize(size);
        
        // Set only the original size as selected by default
        setIconSizes([size]);
      };
      img.src = url;
    };
    reader.readAsArrayBuffer(file.slice(0, 10)); // Read only first 10 bytes

    const validation = validateSingleFile(file);
    if (!validation.isValid) {
      return;
    }
  };

  const handleBatchFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (files.length === 0) return;

    clearValidationError();
    setError(null);
    setBatchResults([]);
    setBatchConverted(false);

    // Check if all files are valid BMP files
    const invalidFiles = files.filter(file => 
      !file.name.toLowerCase().endsWith('.bmp') && !file.type.includes('bmp')
    );
    
    if (invalidFiles.length > 0) {
      setError(`Please select only BMP files. Found ${invalidFiles.length} invalid file(s).`);
      return;
    }

    // Additional validation for BMP files
    const corruptedFiles = files.filter(file => file.size < 1000);
    if (corruptedFiles.length > 0) {
      setError(`Some BMP files appear to be too small or corrupted. Found ${corruptedFiles.length} file(s).`);
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

    // Check if at least one icon size is selected
    if (iconSizes.length === 0) {
      setError('Please select at least one icon size.');
      return;
    }
    
    setIsConverting(true);
    setError(null);
    
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('format', 'ico');
      formData.append('sizes', iconSizes.join(','));
      formData.append('includeAlpha', includeAlpha.toString());

      const response = await apiService.convertFile(formData);
      
      if (response.success) {
        // Create a blob from the response
        const blob = new Blob([response.data], { type: 'image/x-icon' });
        const file = new File([blob], response.filename, { type: 'image/x-icon' });
        
        setConvertedFile(file);
        setConvertedFilename(response.filename);
      } else {
        setError(response.error || 'Conversion failed');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Conversion failed');
    } finally {
      setIsConverting(false);
    }
  };

  const handleBatchConvert = async () => {
    if (batchFiles.length === 0) return;

    // Check if at least one icon size is selected
    if (iconSizes.length === 0) {
      setError('Please select at least one icon size.');
      return;
    }
    
    setIsConverting(true);
    setError(null);
    
    try {
      const formData = new FormData();
      batchFiles.forEach(file => {
        formData.append('files', file);
      });
      formData.append('format', 'ico');
      formData.append('sizes', iconSizes.join(','));
      formData.append('includeAlpha', includeAlpha.toString());

      const response = await apiService.convertBatch(formData);
      
      if (response.success) {
        setBatchResults(response.results);
        setBatchConverted(true);
      } else {
        setError(response.error || 'Batch conversion failed');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Batch conversion failed');
    } finally {
      setIsConverting(false);
    }
  };

  const handleDownload = () => {
    if (!convertedFile) return;

      const url = URL.createObjectURL(convertedFile);
      const a = document.createElement('a');
      a.href = url;
    a.download = convertedFilename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
  };

  const handleBatchDownload = (result: any) => {
    if (!result.downloadPath) return;

    const a = document.createElement('a');
    a.href = result.downloadPath;
    a.download = result.outputFilename || result.originalName.replace(/\.[^.]+$/, '.ico');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const resetForm = () => {
    setSelectedFile(null);
    setConvertedFile(null);
    setConvertedFilename('');
    setError(null);
    setPreviewUrl(null);
    setBatchFiles([]);
    setBatchResults([]);
    setBatchConverted(false);
    setOriginalSize(null);
    setIconSizes([]);
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
              BMP to ICO Converter
            </h1>
            <p className="text-lg sm:text-xl text-purple-100 mb-6 max-w-2xl mx-auto">
              Convert BMP files to ICO format with multi-size icons. Create professional icons with alpha transparency support.
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
                  <FileImage className="w-5 h-5 inline mr-2" />
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
                  {batchMode ? 'Upload Multiple BMP Files' : 'Upload BMP File'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {batchMode 
                    ? 'Select multiple BMP files to convert them all at once' 
                    : 'Drag and drop your BMP file here or click to browse'
                  }
                </p>
                {!batchMode && (
                  <p className="text-xs text-purple-600 mb-2">{getSingleInfoMessage()}</p>
                )}
                {batchMode && (
                  <p className="text-sm text-purple-600 mb-4">{getBatchInfoMessage()}</p>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".bmp"
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
                    <img 
                      src={previewUrl} 
                      alt="Preview" 
                      className="max-w-full h-32 object-contain mx-auto rounded"
                    />
                    <p className="text-sm text-gray-600 mt-2 text-center">
                      {selectedFile?.name} ({formatFileSize(selectedFile?.size || 0)})
                    </p>
                  </div>
                </div>
              )}

              {batchMode && batchFiles.length > 0 && (
                <div className="mt-6">
                  {(() => {
                    const totalSize = batchFiles.reduce((s, f) => s + f.size, 0);
                    const sizeDisplay = getBatchSizeDisplay(totalSize);
                    return (
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-semibold">Selected Files ({batchFiles.length})</h4>
                        <div className={`text-sm font-medium ${sizeDisplay.isWarning ? 'text-purple-700' : 'text-gray-600'}`}>{sizeDisplay.text}</div>
                      </div>
                    );
                  })()}
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

              {error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
                  <span className="text-red-700">{error}</span>
                </div>
              )}

              {validationError && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
                  <span className="text-red-700">{validationError}</span>
                </div>
              )}

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
                      {batchMode ? `Convert ${batchFiles.length} Files` : 'Convert to ICO'}
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
                    Your BMP file has been successfully converted to ICO format with multiple sizes.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleDownload}
                      className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download ICO File
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

              {batchMode && batchConverted && batchResults.length > 0 && (
                <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <h4 className="text-lg font-semibold text-green-800">Batch Conversion Complete</h4>
                  </div>
                  <div className="space-y-2 max-h-60 overflow-y-auto">
                    {batchResults.map((r, idx) => (
                      <div key={idx} className="flex items-center justify-between bg-white rounded-lg p-3 border border-green-100">
                        <div className="text-sm">
                          <div className="font-medium text-gray-900">{r.outputFilename || r.originalName.replace(/\.[^.]+$/, '.ico')}</div>
                          {r.success && r.size && (
                            <div className="text-xs text-gray-500">{formatFileSize(r.size)}</div>
                          )}
                          {!r.success && <div className="text-xs text-red-600">{r.error}</div>}
                        </div>
                        {r.success && (
                          <button
                            onClick={() => handleBatchDownload(r)}
                            className="bg-green-600 text-white px-3 py-2 rounded-md text-sm hover:bg-green-700"
                          >
                            Download
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                    <button
                      onClick={resetForm}
                    className="w-full mt-4 bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors flex items-center justify-center"
                    >
                      <RefreshCw className="w-5 h-5 mr-2" />
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
                ICO Settings
              </h3>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Icon Sizes
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[16, 24, 32, 48, 64, 128, 256].map(size => (
                    <label key={size} className={`flex items-center p-2 rounded ${originalSize === size ? 'bg-purple-50 border border-purple-200' : ''}`}>
                      <input
                        type="checkbox"
                        checked={iconSizes.includes(size)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setIconSizes([...iconSizes, size].sort((a, b) => a - b));
                          } else {
                            setIconSizes(iconSizes.filter(s => s !== size));
                          }
                        }}
                        className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span className={`ml-2 text-sm ${originalSize === size ? 'text-purple-700 font-medium' : 'text-gray-700'}`}>
                        {size}px {originalSize === size ? '(Original)' : ''}
                      </span>
                    </label>
                  ))}
                  {originalSize && !iconSizes.includes(originalSize) && (
                    <label className="flex items-center p-2 rounded bg-purple-50 border border-purple-200">
                      <input
                        type="checkbox"
                        checked={iconSizes.includes(originalSize)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setIconSizes([...iconSizes, originalSize].sort((a, b) => a - b));
                          } else {
                            setIconSizes(iconSizes.filter(s => s !== originalSize));
                          }
                        }}
                        className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="ml-2 text-sm text-purple-700 font-medium">
                        {originalSize}px (Original)
                      </span>
                    </label>
                  )}
                </div>
                {originalSize && (
                  <p className="text-xs text-gray-500 mt-2">
                    Original image size: {originalSize}px (automatically selected by default)
                  </p>
                )}
              </div>

              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={includeAlpha}
                    onChange={(e) => setIncludeAlpha(e.target.checked)}
                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Include alpha transparency</span>
                </label>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-500" />
                Why Choose Our Converter?
              </h3>
              <div className="space-y-4">
                {[
                  "Multi-size ICO support",
                  "Alpha transparency",
                  "High quality conversion",
                  "Professional formatting",
                  "Batch processing",
                  "No quality loss"
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
                  "Website favicons",
                  "Application icons",
                  "Desktop shortcuts",
                  "Windows applications",
                  "Web applications",
                  "Software development"
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
        {/* SEO Content Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            Why Convert BMP to ICO?
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Converting BMP files to ICO format is essential for creating professional icons and favicons for websites and applications.
              ICO files support multiple sizes in a single file, making them perfect for various display contexts and screen resolutions.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Key Benefits of ICO Format</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-purple-900 mb-3">Multi-Size Support</h4>
                <p className="text-gray-700">Single ICO file contains multiple icon sizes (16px to 256px) for different display contexts.</p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-indigo-900 mb-3">Alpha Transparency</h4>
                <p className="text-gray-700">Supports alpha channel for transparent backgrounds and smooth edges.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-blue-900 mb-3">Universal Compatibility</h4>
                <p className="text-gray-700">Works across all Windows versions and web browsers for maximum compatibility.</p>
              </div>
              <div className="bg-sky-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-sky-900 mb-3">Professional Quality</h4>
                <p className="text-gray-700">High-quality conversion with proper scaling and anti-aliasing for crisp icons.</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Common Use Cases</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Website Favicons</h4>
                  <p className="text-gray-700">Create favicons that display correctly across all browsers and devices.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Application Icons</h4>
                  <p className="text-gray-700">Develop professional application icons for Windows desktop and taskbar.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Software Development</h4>
                  <p className="text-gray-700">Generate icons for software projects, installers, and development tools.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Convert Your BMP Files?</h3>
              <p className="text-lg mb-6 opacity-90">Use our free BMP to ICO converter to create professional multi-size icons.</p>
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