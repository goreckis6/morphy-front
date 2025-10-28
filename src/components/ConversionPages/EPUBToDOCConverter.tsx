import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { apiService } from '../../services/api';
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
  BarChart3
} from 'lucide-react';

export const EPUBToDOCConverter: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [convertedFile, setConvertedFile] = useState<Blob | null>(null);
  const [convertedFilename, setConvertedFilename] = useState<string | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [preserveFormatting, setPreserveFormatting] = useState(true);
  const [includeImages, setIncludeImages] = useState(true);
  const [extractMetadata, setExtractMetadata] = useState(true);
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
      // Reset previous conversion results and errors
      setConvertedFile(null);
      setConvertedFilename(null);
      setBatchResults([]);
      setBatchConverted(false);
      setError(null);
      
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
    
    // Reset previous conversion results and errors
    setConvertedFile(null);
    setConvertedFilename(null);
    setSelectedFile(null);
    setPreviewUrl(null);
    setBatchResults([]);
    setBatchConverted(false);
    setError(null);
    
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

  const handleConvert = async (file: File) => {
    return await apiService.convertFile(file, {
      format: 'doc',
      preserveFormatting: preserveFormatting ? 'true' : 'false',
      includeImages: includeImages ? 'true' : 'false',
      extractMetadata: extractMetadata ? 'true' : 'false'
    });
  };

  const handleSingleConvert = async () => {
    if (!selectedFile) return;
    
    setIsConverting(true);
    setError(null);
    
    try {
      const result = await handleConvert(selectedFile);
      setConvertedFile(result.blob);
      setConvertedFilename(result.filename);
    } catch (err) {
      console.error('EPUB to DOC conversion error:', err);
      
      // Check for specific error types
      if (err instanceof Error) {
        if (err.message.includes('File is not a zip file') || 
            err.message.includes('Not a ZIP file') || 
            err.message.includes('BadZipfile') ||
            err.message.includes('invalid ZIP file')) {
          setError('Invalid EPUB file: The file is corrupted or not a valid EPUB format. Please try a different EPUB file.');
        } else if (err.message.includes('No content extracted') || 
                   err.message.includes('empty')) {
          setError('No content found: The EPUB file appears to be empty or contains no readable text content.');
        } else if (err.message.includes('LibreOffice')) {
          setError('Conversion failed: Unable to process the document. Please try a different EPUB file.');
        } else {
          setError(`Conversion failed: ${err.message}`);
        }
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
    setBatchConverted(false);
    
    try {
      const result = await apiService.convertBatch(batchFiles, {
        format: 'doc',
        preserveFormatting: preserveFormatting ? 'true' : 'false',
        includeImages: includeImages ? 'true' : 'false',
        extractMetadata: extractMetadata ? 'true' : 'false'
      });
      setBatchResults(result.results ?? []);
      const successes = (result.results ?? []).filter(r => r.success);
      if (successes.length > 0) {
        setBatchConverted(true);
        const failures = (result.results ?? []).filter(r => !r.success);
        setError(failures.length ? `${failures.length} file${failures.length > 1 ? 's' : ''} failed.` : null);
      } else {
        setBatchConverted(false);
        setError('Batch conversion failed. Please try again.');
      }
    } catch (err) {
      console.error('EPUB to DOC batch conversion error:', err);
      setBatchConverted(false);
      
      // Check for specific error types
      if (err instanceof Error) {
        if (err.message.includes('File is not a zip file') || 
            err.message.includes('Not a ZIP file') || 
            err.message.includes('BadZipfile') ||
            err.message.includes('invalid ZIP file')) {
          setError('Invalid EPUB file: One or more files are corrupted or not valid EPUB format. Please try different EPUB files.');
        } else if (err.message.includes('No content extracted') || 
                   err.message.includes('empty')) {
          setError('No content found: One or more EPUB files appear to be empty or contain no readable text content.');
        } else if (err.message.includes('LibreOffice')) {
          setError('Batch conversion failed: Unable to process some documents. Please try different EPUB files.');
        } else {
          setError(`Batch conversion failed: ${err.message}`);
        }
      } else {
        setError('Batch conversion failed. Please try again.');
      }
    } finally {
      setIsConverting(false);
    }
  };

  const handleDownload = () => {
    if (!convertedFile) return;
    const url = URL.createObjectURL(convertedFile);
    const a = document.createElement('a');
    a.href = url;
    a.download = convertedFilename || (selectedFile ? selectedFile.name.replace(/\.epub$/i, '.doc') : 'converted.doc');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
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

  const handleSwitchToSingle = () => {
    resetForm();
    setBatchMode(false);
  };

  const handleSwitchToBatch = () => {
    resetForm();
    setBatchMode(true);
  };

  return (
    <>
      <Helmet>
        <title>Free EPUB to DOC Converter - Convert eBooks to Word Documents</title>
        <meta name="description" content="Free EPUB to DOC converter. Convert EPUB ebook files to DOC format for Microsoft Word. Transform digital books into editable Word documents. Free online converter with batch support." />
        <meta name="keywords" content="EPUB to DOC, ebook to Word, ebook converter, Word document, batch conversion" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
      <Header />
      
      {/* Hero Section - Narrowed */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-600 via-gray-600 to-blue-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              EPUB to DOC Converter
            </h1>
            <p className="text-lg sm:text-xl text-slate-100 mb-6 max-w-2xl mx-auto">
              Convert EPUB e-book files to Microsoft Word DOC format for document editing. Transform e-books into editable Word documents with preserved formatting.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-200">
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
                  onClick={handleSwitchToSingle}
                  className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all ${
                    !batchMode 
                      ? 'bg-slate-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <FileText className="w-5 h-5 inline mr-2" />
                  Single File
                </button>
                <button
                  onClick={handleSwitchToBatch}
                  className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all ${
                    batchMode 
                      ? 'bg-slate-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <FileImage className="w-5 h-5 inline mr-2" />
                  Batch Convert
                </button>
              </div>

              {/* File Upload Area */}
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-slate-400 transition-colors">
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
                  <p className="text-sm text-slate-600 mb-4">
                    Single file limit: 100.00 MB per file.
                  </p>
                )}
                {batchMode && (
                  <p className="text-sm text-slate-600 mb-4">
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
                  className="bg-slate-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-700 transition-colors"
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
                  className="w-full bg-gradient-to-r from-slate-600 to-gray-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-slate-700 hover:to-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
                >
                  {isConverting ? (
                    <div className="flex items-center justify-center">
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                      Converting...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Zap className="w-5 h-5 mr-2" />
                      {batchMode ? `Convert ${batchFiles.length} Files` : 'Convert to DOC'}
                    </div>
                  )}
                </button>
              </div>

              {/* Success Message & Download */}
              {convertedFile && !batchMode && (
                <div className={`mt-6 p-6 rounded-xl border bg-green-50 border-green-200`}>
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <h4 className="text-lg font-semibold text-green-800">Conversion Complete!</h4>
                  </div>
                  <p className="text-green-700 mb-4">
                    Your EPUB file has been successfully converted to DOC format.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleDownload}
                      className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download DOC File
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
                      <div key={i} className="bg-white border rounded-lg p-3">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <div className="text-sm flex-1 min-w-0">
                            <div className="font-medium text-gray-900 truncate">{r.outputFilename || r.originalName}</div>
                            {r.success && r.size && (
                              <div className="text-xs text-gray-500 mt-1">{formatFileSize(r.size)}</div>
                            )}
                            {r.error && <div className="text-xs text-red-600 mt-1 break-words">{r.error}</div>}
                          </div>
                          {r.success && r.downloadPath && (
                            <button 
                              onClick={() => handleBatchDownload(r)} 
                              className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors flex-shrink-0 w-full sm:w-auto"
                            >
                              Download
                            </button>
                          )}
                        </div>
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
                <Settings className="w-5 h-5 mr-2 text-slate-600" />
                DOC Settings
              </h3>
              
              {/* Preserve Formatting */}
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preserveFormatting}
                    onChange={(e) => setPreserveFormatting(e.target.checked)}
                    className="rounded border-gray-300 text-slate-600 focus:ring-slate-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Preserve formatting</span>
                </label>
              </div>

              {/* Include Images */}
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={includeImages}
                    onChange={(e) => setIncludeImages(e.target.checked)}
                    className="rounded border-gray-300 text-slate-600 focus:ring-slate-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Include images and graphics</span>
                </label>
              </div>

              {/* Extract Metadata */}
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={extractMetadata}
                    onChange={(e) => setExtractMetadata(e.target.checked)}
                    className="rounded border-gray-300 text-slate-600 focus:ring-slate-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Extract book metadata</span>
                </label>
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
                  "E-book to document conversion",
                  "Microsoft Word compatibility",
                  "Formatting preservation",
                  "Editable document output",
                  "Legacy document support",
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
                <BarChart3 className="w-5 h-5 mr-2 text-slate-600" />
                Perfect For
              </h3>
              <div className="space-y-3">
                {[
                  "E-book editing and modification",
                  "Document collaboration",
                  "Content repurposing",
                  "Legacy system integration",
                  "Document archiving",
                  "Content management workflows"
                ].map((useCase, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-slate-500 rounded-full mr-3 flex-shrink-0"></div>
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
            ← Back to Home
          </button>
        </div>

        {/* SEO Content Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            Why Convert EPUB to DOC?
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Converting EPUB e-book files to Microsoft Word DOC format is essential for document editing, collaboration, and content repurposing. While EPUB files are excellent for reading and digital publishing, DOC format provides universal compatibility with Microsoft Word and enables easy editing, formatting, and collaboration on e-book content.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Key Benefits of DOC Format</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-slate-900 mb-3">Microsoft Word Compatibility</h4>
                <p className="text-gray-700">
                  DOC files are fully compatible with Microsoft Word, providing access to all editing features, formatting options, and collaboration tools.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Editable Document Output</h4>
                <p className="text-gray-700">
                  DOC format allows for easy editing and modification of e-book content, making it perfect for content repurposing and customization.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-blue-900 mb-3">Formatting Preservation</h4>
                <p className="text-gray-700">
                  DOC format preserves the original formatting of e-book content while allowing for further customization and editing.
                </p>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-indigo-900 mb-3">Legacy System Integration</h4>
                <p className="text-gray-700">
                  DOC format integrates seamlessly with legacy document management systems and older versions of Microsoft Office.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Common Use Cases</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-slate-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">E-book Editing and Modification</h4>
                  <p className="text-gray-700">Convert e-books to DOC format for easy editing, updating, and customizing content for different audiences or purposes.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-gray-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Document Collaboration</h4>
                  <p className="text-gray-700">Enable collaborative editing of e-book content by converting it to DOC format for use with Microsoft Word's collaboration features.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Content Repurposing</h4>
                  <p className="text-gray-700">Repurpose e-book content for different formats by converting it to DOC format for further editing and adaptation.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Legacy System Integration</h4>
                  <p className="text-gray-700">Integrate e-book content into legacy document management systems that require DOC format for processing and storage.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-slate-600 to-gray-600 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Convert Your EPUB Files?</h3>
              <p className="text-lg mb-6 opacity-90">
                Use our free online EPUB to DOC converter to transform your e-books into editable Word documents.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="bg-white text-slate-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Converting Now
                </button>
                <button
                  onClick={handleBack}
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-600 transition-colors"
                >
                  Back to Home
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
