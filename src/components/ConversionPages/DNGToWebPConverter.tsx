import React, { useState, useRef } from 'react';
import { useImageConversion } from '../../hooks/useImageConversion';
import { useFileValidation } from '../../hooks/useFileValidation';
import { apiService } from '../../services/api';
import { Download, Upload, Settings, Image as ImageIcon, Zap, Shield, Clock, CheckCircle } from 'lucide-react';

const DNGToWebPConverter: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [convertedFile, setConvertedFile] = useState<Blob | null>(null);
  const [convertedFilename, setConvertedFilename] = useState('');
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
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
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('format', 'webp');
      formData.append('quality', quality.toString());
      formData.append('lossless', lossless.toString());
      
      if (width) formData.append('width', width);
      if (height) formData.append('height', height);

      const response = await apiService.convertFile(formData);
      
      if (response.success) {
        const blob = await fetch(response.downloadPath).then(res => res.blob());
        setConvertedFile(blob);
        setConvertedFilename(response.filename);
      } else {
        setError('Conversion failed. Please try again.');
      }
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

    try {
      const formData = new FormData();
      batchFiles.forEach(file => {
        formData.append('files', file);
      });
      formData.append('format', 'webp');
      formData.append('quality', quality.toString());
      formData.append('lossless', lossless.toString());
      
      if (width) formData.append('width', width);
      if (height) formData.append('height', height);

      const response = await apiService.convertBatch(formData);
      
      if (response.success) {
        setBatchResults(response.results);
        setBatchConverted(true);
      } else {
        setError('Batch conversion failed. Please try again.');
      }
    } catch (err) {
      setError('Batch conversion failed. Please try again.');
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <button
                onClick={handleBack}
                className="mr-4 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">DNG to WebP Converter</h1>
                <p className="text-gray-600 mt-1">Convert DNG RAW files to high-quality WebP images</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Conversion Area */}
          <div className="lg:col-span-2">
            {/* Single File Conversion */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
              <h2 className="text-xl font-semibold mb-6 flex items-center">
                <ImageIcon className="w-5 h-5 mr-2 text-purple-600" />
                Convert DNG to WebP
              </h2>
              
              <div className="space-y-6">
                {/* File Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select DNG File
                  </label>
                  <div
                    className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-400 transition-colors cursor-pointer"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">
                      Click to upload or drag and drop your DNG file
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Single file limit: 100.00 MB per file.
                    </p>
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".dng"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                </div>

                {/* File Info */}
                {selectedFile && (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <ImageIcon className="w-5 h-5 text-purple-600 mr-2" />
                        <span className="font-medium text-gray-900">{selectedFile.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{formatFileSize(selectedFile.size)}</span>
                    </div>
                  </div>
                )}

                {/* Error Messages */}
                {(error || validationError) && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-800 text-sm">{error || validationError}</p>
                  </div>
                )}

                {/* Conversion Time Info */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-blue-600 mr-2" />
                    <p className="text-blue-800 text-sm">
                      Conversion may take 2-5 minutes for large DNG files
                    </p>
                  </div>
                </div>

                {/* Convert Button */}
                <button
                  onClick={handleSingleConvert}
                  disabled={!selectedFile || isConverting}
                  className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isConverting ? 'Converting...' : 'Convert to WebP'}
                </button>

                {/* Download Button */}
                {convertedFile && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        <span className="font-medium text-green-800">Conversion Complete!</span>
                      </div>
                      <button
                        onClick={() => handleDownload(convertedFile, convertedFilename)}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Batch Conversion */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold mb-6 flex items-center">
                <ImageIcon className="w-5 h-5 mr-2 text-purple-600" />
                Batch Convert DNG to WebP
              </h2>
              
              <div className="space-y-6">
                {/* Batch File Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Multiple DNG Files
                  </label>
                  <div
                    className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-400 transition-colors cursor-pointer"
                    onClick={() => document.getElementById('batch-file-input')?.click()}
                  >
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">
                      Click to upload or drag and drop multiple DNG files
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Batch conversion supports up to 20 files, 100.00 MB per file, 100.00 MB total.
                    </p>
                  </div>
                  <input
                    id="batch-file-input"
                    type="file"
                    accept=".dng"
                    multiple
                    onChange={handleBatchFileSelect}
                    className="hidden"
                  />
                </div>

                {/* Batch File List */}
                {batchFiles.length > 0 && (
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">Selected Files:</span>
                      <span className="text-sm text-gray-500">{getBatchSizeDisplay(batchFiles)}</span>
                    </div>
                    <div className="max-h-32 overflow-y-auto space-y-1">
                      {batchFiles.map((file, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-50 rounded p-2">
                          <span className="text-sm text-gray-700 truncate">{file.name}</span>
                          <span className="text-xs text-gray-500">{formatFileSize(file.size)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Batch Convert Button */}
                <button
                  onClick={handleBatchConvert}
                  disabled={batchFiles.length === 0 || isConverting}
                  className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isConverting ? 'Converting...' : `Convert ${batchFiles.length} Files to WebP`}
                </button>

                {/* Batch Results */}
                {batchConverted && batchResults.length > 0 && (
                  <div className="space-y-3">
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
          </div>

          {/* Settings Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-8">
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
          </div>
        </div>

        {/* SEO Content */}
        <div className="mt-12 bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Convert DNG to WebP?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-purple-600" />
                Superior Performance
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 25-35% smaller file sizes compared to JPEG</li>
                <li>• Better compression efficiency for web use</li>
                <li>• Faster loading times for websites and apps</li>
                <li>• Support for both lossy and lossless compression</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-purple-600" />
                Professional Quality
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Preserves RAW image quality and detail</li>
                <li>• Advanced color space support</li>
                <li>• Transparency support for overlays</li>
                <li>• Future-proof format with wide browser support</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-purple-50 rounded-lg">
            <h3 className="text-lg font-semibold text-purple-900 mb-3">Perfect For:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-purple-800">
              <div>• Web development</div>
              <div>• Mobile applications</div>
              <div>• Social media sharing</div>
              <div>• Email attachments</div>
              <div>• Digital portfolios</div>
              <div>• E-commerce images</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DNGToWebPConverter;