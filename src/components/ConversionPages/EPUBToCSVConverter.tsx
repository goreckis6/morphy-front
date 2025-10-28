import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { API_BASE_URL } from '../../services/api';
import { Header } from '../Header';
import { useFileValidation } from '../../hooks/useFileValidation';
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
  BookOpen,
  Table
} from 'lucide-react';

export const EPUBToCSVConverter: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [convertedFile, setConvertedFile] = useState<Blob | null>(null);
  const [convertedFilename, setConvertedFilename] = useState<string | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [includeMetadata, setIncludeMetadata] = useState(true);
  const [delimiter, setDelimiter] = useState(',');
  const [batchMode, setBatchMode] = useState(false);
  const [batchFiles, setBatchFiles] = useState<File[]>([]);
  const [batchResults, setBatchResults] = useState<any[]>([]);
  const [batchConverted, setBatchConverted] = useState(false);
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

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.name.toLowerCase().endsWith('.epub')) {
        // Validate single file size using shared validation
        const validation = validateSingleFile(file);
        if (!validation.isValid) {
          setError(validation.error || 'File validation failed');
          return;
        }
        setSelectedFile(file);
        setError(null);
        setPreviewUrl(URL.createObjectURL(file));
        clearValidationError();
      } else {
        setError('Please select a valid EPUB file');
      }
    }
  };

  const handleBatchFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const epubFiles = files.filter(file => 
      file.name.toLowerCase().endsWith('.epub')
    );
    
    // Validate batch files using shared validation
    const validation = validateBatchFiles(epubFiles);
    if (!validation.isValid) {
      setError(validation.error || 'Batch validation failed');
      return;
    }
    
    setBatchFiles(epubFiles);
    setError(null);
    clearValidationError();
  };

  const handleSingleConvert = async () => {
    if (!selectedFile) return;
    
    setIsConverting(true);
    setError(null);
    
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('includeMetadata', includeMetadata.toString());
      formData.append('delimiter', delimiter);

      const response = await fetch(`${API_BASE_URL}/convert/epub-to-csv/single`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Conversion failed');
      }

      const blob = await response.blob();
      setConvertedFile(blob);
      setConvertedFilename(selectedFile.name.replace('.epub', '.csv'));
    } catch (err) {
      console.error('EPUB to CSV conversion error:', err);
      let errorMessage = 'Conversion failed. Please try again.';
      
      if (err instanceof Error) {
        if (err.message.includes('Bad Zip file') || err.message.includes('not a valid ZIP archive')) {
          errorMessage = 'Invalid EPUB file: The file is corrupted or not a valid EPUB format. Please check your file and try again.';
        } else if (err.message.includes('No content extracted')) {
          errorMessage = 'No content found: The EPUB file appears to be empty or contains no readable text content.';
        } else {
          errorMessage = err.message;
        }
      }
      
      setError(errorMessage);
    } finally {
      setIsConverting(false);
    }
  };

  const handleBatchConvert = async () => {
    if (batchFiles.length === 0) return;
    
    setIsConverting(true);
    setError(null);
    setBatchConverted(false);
    
    try {
      const formData = new FormData();
      batchFiles.forEach(file => {
        formData.append('files', file);
      });
      formData.append('includeMetadata', includeMetadata.toString());
      formData.append('delimiter', delimiter);

      const response = await fetch(`${API_BASE_URL}/convert/epub-to-csv/batch`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Batch conversion failed');
      }

      const result = await response.json();
      setBatchResults(result.results ?? []);
      const successes = (result.results ?? []).filter((r: any) => r.success);
      if (successes.length > 0) {
        setBatchConverted(true);
        const failures = (result.results ?? []).filter((r: any) => !r.success);
        setError(failures.length ? `${failures.length} file${failures.length > 1 ? 's' : ''} failed.` : null);
      } else {
        setBatchConverted(false);
        setError('Batch conversion failed. Please try again.');
      }
    } catch (err) {
      console.error('EPUB to CSV batch conversion error:', err);
      setBatchConverted(false);
      
      let errorMessage = 'Batch conversion failed. Please try again.';
      
      if (err instanceof Error) {
        if (err.message.includes('Bad Zip file') || err.message.includes('not a valid ZIP archive')) {
          errorMessage = 'Invalid EPUB files: One or more files are corrupted or not valid EPUB format. Please check your files and try again.';
        } else if (err.message.includes('No content extracted')) {
          errorMessage = 'No content found: One or more EPUB files appear to be empty or contain no readable text content.';
        } else {
          errorMessage = err.message;
        }
      }
      
      setError(errorMessage);
    } finally {
      setIsConverting(false);
    }
  };

  const handleDownload = () => {
    if (!convertedFile) return;
    const url = URL.createObjectURL(convertedFile);
    const a = document.createElement('a');
    a.href = url;
    a.download = convertedFilename || (selectedFile ? selectedFile.name.replace(/\.epub$/i, '.csv') : 'converted.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleBatchDownload = async (result: any) => {
    try {
      if (result.downloadPath && result.downloadPath.startsWith('data:')) {
        const response = await fetch(result.downloadPath);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = result.outputFilename || 'converted.csv';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    } catch (e) {
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
    setBatchResults([]);
    setBatchConverted(false);
    clearValidationError();
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <>
      <Helmet>
        <title>Free EPUB to CSV Converter Online - Extract eBook Content to CSV Format | MorphyIMG</title>
        <meta name="description" content="Convert EPUB ebook files to CSV format online for free. Extract text content, chapters, and metadata from EPUB files for data analysis, content management, and text processing." />
        <meta name="keywords" content="EPUB to CSV, ebook converter, EPUB extractor, CSV converter, batch conversion" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Free EPUB to CSV Converter
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
              Convert EPUB ebook files to CSV format for easy data analysis and content extraction. Extract chapters, paragraphs, and metadata from your ebooks.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-200">
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
                  Single File
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
                  Batch Convert
                </button>
              </div>

              {/* File Upload Area */}
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {batchMode ? 'Upload Multiple EPUB Files' : 'Upload EPUB File'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {batchMode 
                    ? 'Select multiple EPUB files to convert them all at once' 
                    : 'Drag and drop your EPUB file here or click to browse'
                  }
                </p>
                {!batchMode && (
                  <p className="text-sm text-blue-600 mb-4">
                    Single file limit: 100.00 MB per file.
                  </p>
                )}
                {batchMode && (
                  <p className="text-sm text-blue-600 mb-4">
                    Batch conversion supports up to 20 files, 100.00 MB per file, 100.00 MB total.
                  </p>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".epub"
                  multiple={batchMode}
                  onChange={batchMode ? handleBatchFileSelect : handleFileSelect}
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Choose Files
                </button>
              </div>

              {/* File Preview */}
              {previewUrl && !batchMode && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-4">Preview</h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-center h-32 bg-gray-100 rounded">
                      <BookOpen className="w-12 h-12 text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-600 mt-2 text-center">
                      {selectedFile?.name} ({formatFileSize(selectedFile?.size || 0)})
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
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
                >
                  {isConverting ? (
                    <div className="flex items-center justify-center">
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                      Converting...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Table className="w-5 h-5 mr-2" />
                      {batchMode ? `Convert ${batchFiles.length} Files` : 'Convert to CSV'}
                    </div>
                  )}
                </button>
              </div>

              {/* Success Message & Download */}
              {convertedFile && !batchMode && (
                <div className={`mt-6 p-6 rounded-xl border ${
                  batchResults.filter(r => r.success).length > 0 
                    ? 'bg-green-50 border-green-200' 
                    : 'bg-red-50 border-red-200'
                }`}>
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <h4 className="text-lg font-semibold text-green-800">Conversion Complete!</h4>
                  </div>
                  <p className="text-green-700 mb-4">
                    Your EPUB file has been successfully converted to CSV format.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleDownload}
                      className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download CSV File
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

              {/* Batch Conversion Results */}
              {batchMode && batchConverted && batchResults.length > 0 && (
                <div className={`mt-6 p-6 rounded-xl border ${
                  batchResults.filter(r => r.success).length > 0 
                    ? 'bg-green-50 border-green-200' 
                    : 'bg-red-50 border-red-200'
                }`}>
                  <div className="flex items-center mb-4">
                    {batchResults.filter(r => r.success).length > 0 ? (
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    ) : (
                      <AlertCircle className="w-6 h-6 text-red-500 mr-3" />
                    )}
                    <h4 className={`text-lg font-semibold ${
                      batchResults.filter(r => r.success).length > 0 ? 'text-green-800' : 'text-red-800'
                    }`}>
                      {batchResults.filter(r => r.success).length > 0 ? 'Batch Conversion Complete!' : 'Batch Conversion Failed'}
                    </h4>
                  </div>
                  <div className="space-y-2 max-h-60 overflow-y-auto">
                    {batchResults.map((r, i) => (
                      <div key={i} className="flex items-center justify-between bg-white border rounded-lg p-3">
                        <div className="text-sm">
                          <div className="font-medium text-gray-900">{r.outputFilename || r.originalName}</div>
                          {r.success && r.size && (
                            <div className="text-xs text-gray-500">{formatFileSize(r.size)}</div>
                          )}
                          {r.error && <div className="text-xs text-red-600">{r.error}</div>}
                        </div>
                        {r.success && r.downloadPath && (
                          <button onClick={() => handleBatchDownload(r)} className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">Download</button>
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

          {/* Settings & Info Panel */}
          <div className="space-y-6">
            
            {/* Conversion Settings */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Settings className="w-5 h-5 mr-2 text-blue-600" />
                CSV Settings
              </h3>
              
              {/* Include Metadata */}
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={includeMetadata}
                    onChange={(e) => setIncludeMetadata(e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Include book metadata</span>
                </label>
                <p className="text-xs text-gray-500 mt-1 ml-6">Add book title, author, and chapter info</p>
              </div>

              {/* CSV Delimiter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  CSV Delimiter
                </label>
                <select
                  value={delimiter}
                  onChange={(e) => setDelimiter(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value=",">Comma (,)</option>
                  <option value=";">Semicolon (;)</option>
                  <option value="\t">Tab (\t)</option>
                  <option value="|">Pipe (|)</option>
                </select>
              </div>
            </div>

            {/* Features List */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Star className="w-5 h-5 mr-2 text-blue-600" />
                Why Choose Our Converter?
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Extract all chapters and paragraphs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Preserve book metadata</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Batch conversion support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Custom CSV delimiters</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>100% free and secure</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>No registration required</span>
                </li>
              </ul>
            </div>

            {/* Use Cases */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Perfect For</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Content analysis</li>
                <li>• Text mining</li>
                <li>• Data science projects</li>
                <li>• Research analysis</li>
                <li>• Content management</li>
                <li>• Database imports</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
