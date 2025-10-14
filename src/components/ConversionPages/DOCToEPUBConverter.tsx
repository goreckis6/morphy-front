import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
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
  BookOpen,
  Smartphone
} from 'lucide-react';
import { useFileValidation } from '../../hooks/useFileValidation';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://morphy-2-n2tb.onrender.com';

export const DOCToEPUBConverter: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [convertedFile, setConvertedFile] = useState<Blob | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [batchMode, setBatchMode] = useState(false);
  const [batchFiles, setBatchFiles] = useState<File[]>([]);
  const [batchConverted, setBatchConverted] = useState(false);
  const [batchResults, setBatchResults] = useState<any[]>([]);
  const [convertedFilename, setConvertedFilename] = useState<string | null>(null);
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

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.name.toLowerCase().endsWith('.doc')) {
        const validation = validateSingleFile(file);
        if (!validation.isValid) {
          setError(validation.error?.message || 'File validation failed');
          setSelectedFile(null);
          setPreviewUrl(null);
          if (event.target) {
            event.target.value = '';
          }
          return;
        }
        setSelectedFile(file);
        setError(null);
        clearValidationError();
        setConvertedFile(null);
        setConvertedFilename(null);
        setPreviewUrl(URL.createObjectURL(file));
      } else {
        setError('Please select a valid DOC file');
      }
    }
  };

  const handleBatchFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    
    const docFiles = files.filter(file => file.name.toLowerCase().endsWith('.doc'));
    
    if (docFiles.length === 0) {
      setError('No valid DOC files selected.');
      return;
    }

    const validation = validateBatchFiles(docFiles);
    if (!validation.isValid) {
      setError(validation.error?.message || 'Batch validation failed');
      setBatchFiles([]);
      if (event.target) {
        event.target.value = '';
      }
      return;
    }

    setBatchFiles(docFiles);
    setError(null);
    clearValidationError();
    setBatchConverted(false);
    setBatchResults([]);
  };

  const handleSingleConvert = async () => {
    if (!selectedFile) return;
    
    setIsConverting(true);
    setError(null);
    setConvertedFile(null);
    
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await fetch(`${API_BASE_URL}/convert/doc-to-epub/single`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Conversion failed');
      }

      const blob = await response.blob();
      setConvertedFile(blob);
      const filename = selectedFile.name.replace(/\.doc$/i, '.epub');
      setConvertedFilename(filename);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Conversion failed');
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
      const formData = new FormData();
      batchFiles.forEach(file => {
        formData.append('files', file);
      });

      const response = await fetch(`${API_BASE_URL}/convert/doc-to-epub/batch`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Batch conversion failed');
      }

      const results = await response.json();
      
      const processedResults = results.map((result: any) => ({
        originalName: result.filename,
        outputFilename: result.filename,
        size: result.size,
        success: true,
        downloadPath: `${API_BASE_URL}${result.downloadUrl}`
      }));
      
      setBatchResults(processedResults);
      setBatchConverted(true);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Batch conversion failed');
    } finally {
      setIsConverting(false);
    }
  };

  const handleBatchDownload = (downloadPath: string, filename: string) => {
    const link = document.createElement('a');
    link.href = downloadPath;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownload = () => {
    if (convertedFile && convertedFilename) {
      const url = URL.createObjectURL(convertedFile);
      const a = document.createElement('a');
      a.href = url;
      a.download = convertedFilename;
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
    setSelectedFile(null);
    setConvertedFile(null);
    setError(null);
    setPreviewUrl(null);
    setBatchFiles([]);
    setBatchConverted(false);
    setBatchResults([]);
    setConvertedFilename(null);
    clearValidationError();
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <>
      <Helmet>
        <title>Free DOC to EPUB Converter Online - Convert Word Documents to eBook Format | MorphyIMG</title>
        <meta name="description" content="Convert Microsoft Word DOC files to EPUB eBook format online for free. Fast, secure DOC to EPUB converter with batch processing. Perfect for Kindle, Kobo, and all e-readers." />
        <meta name="keywords" content="free DOC to EPUB converter, DOC to EPUB online free, convert Word to EPUB, Word document to eBook, DOC to EPUB batch converter, Microsoft Word to EPUB, free eBook converter" />
        <link rel="canonical" content="https://morphyimg.com/convert/doc-to-epub" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Free DOC to EPUB Converter Online - Convert Word Documents to eBook" />
        <meta property="og:description" content="Convert Microsoft Word DOC files to EPUB eBook format online for free. Batch processing, no registration required. Compatible with all e-readers." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://morphyimg.com/convert/doc-to-epub" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Free DOC to EPUB Converter",
            "description": "Free online tool to convert Microsoft Word DOC files to EPUB eBook format. Fast, secure, and easy to use with batch processing support.",
            "url": "https://morphyimg.com/convert/doc-to-epub",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "All",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <Header />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-amber-600 via-orange-600 to-rose-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Free DOC to EPUB Converter
            </h1>
            <p className="text-lg sm:text-xl text-amber-100 mb-6 max-w-2xl mx-auto">
              Convert Microsoft Word DOC files to EPUB eBook format online for free. Perfect for Kindle, Kobo, and all e-readers with no registration required.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-amber-200">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>Lightning Fast</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>100% Free</span>
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
                      ? 'bg-amber-600 text-white shadow-lg' 
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
                      ? 'bg-amber-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <FileImage className="w-5 h-5 inline mr-2" />
                  Batch Convert
                </button>
              </div>

              {/* File Upload Area */}
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-amber-400 transition-colors">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {batchMode ? 'Upload Multiple DOC Files' : 'Upload DOC File'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {batchMode 
                    ? 'Select multiple DOC files to convert them all at once' 
                    : 'Drag and drop your DOC file here or click to browse'
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
                  accept=".doc"
                  multiple={batchMode}
                  onChange={batchMode ? handleBatchFileSelect : handleFileSelect}
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors"
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
                      <FileText className="w-12 h-12 text-gray-400" />
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
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-amber-700 hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
                >
                  {isConverting ? (
                    <div className="flex items-center justify-center">
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                      Converting...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Zap className="w-5 h-5 mr-2" />
                      {batchMode ? `Convert ${batchFiles.length} Files to EPUB` : 'Convert to EPUB'}
                    </div>
                  )}
                </button>
              </div>

              {/* Success Message & Download */}
              {convertedFile && !batchMode && (
                <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <h4 className="text-lg font-semibold text-green-800">Conversion Complete!</h4>
                  </div>
                  <p className="text-green-700 mb-4">
                    Your DOC file has been successfully converted to EPUB format.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleDownload}
                      className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download EPUB File
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

              {/* Batch Conversion Success Message */}
              {batchMode && batchConverted && batchResults.length > 0 && (
                <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <h4 className="text-lg font-semibold text-green-800">Batch Conversion Complete!</h4>
                  </div>
                  <p className="text-green-700 mb-4">
                    {batchResults.filter(r => r.success).length} of {batchResults.length} files converted successfully.
                  </p>
                  <div className="space-y-2 max-h-40 overflow-y-auto mb-4">
                    {batchResults.map((result, index) => {
                      const displayName = result.outputFilename || `${result.originalName.replace(/\.[^.]+$/, '')}.epub`;
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
                          {result.success && result.downloadPath && (
                            <button
                              onClick={() => handleBatchDownload(result.downloadPath!, displayName)}
                              className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                            >
                              Download
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
                      Convert More Files
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Settings & Info Panel */}
          <div className="space-y-6">

            {/* Features */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-500" />
                Why Choose Our Converter?
              </h3>
              <div className="space-y-4">
                {[
                  "100% Free - No hidden costs",
                  "Batch conversion support",
                  "Universal e-reader compatibility",
                  "Preserves formatting & structure",
                  "Fast, secure processing",
                  "No registration required"
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
                <Smartphone className="w-5 h-5 mr-2 text-amber-600" />
                Perfect For
              </h3>
              <div className="space-y-3">
                {[
                  "Reading on Kindle devices",
                  "Kobo and Nook e-readers",
                  "Apple Books on iPhone/iPad",
                  "Google Play Books",
                  "Mobile reading apps",
                  "Publishing eBooks online"
                ].map((useCase, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 flex-shrink-0"></div>
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
            Why Convert DOC to EPUB Online Free?
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Converting Microsoft Word DOC files to EPUB eBook format is essential for modern reading experiences. While DOC files are excellent for document editing and collaboration, EPUB format provides the perfect reading experience across all devices - from smartphones to dedicated e-readers. Our free online converter makes it easy to transform your Word documents into professional eBooks that work seamlessly with Kindle, Kobo, Nook, and all other popular e-reading platforms.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Key Benefits of EPUB Format</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-amber-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-amber-900 mb-3">Universal E-reader Support</h4>
                <p className="text-gray-700">
                  EPUB is the industry standard for eBooks, supported by all major e-reading devices and apps including Kindle, Kobo, Nook, Apple Books, and Google Play Books.
                </p>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-orange-900 mb-3">Reflowable Text</h4>
                <p className="text-gray-700">
                  EPUB text automatically adapts to any screen size, allowing readers to adjust font size, style, and margins for optimal reading comfort on any device.
                </p>
              </div>
              
              <div className="bg-rose-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-rose-900 mb-3">Professional Publishing</h4>
                <p className="text-gray-700">
                  EPUB is the preferred format for self-publishing and digital book distribution, accepted by all major eBook retailers and libraries worldwide.
                </p>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-red-900 mb-3">Rich Media Support</h4>
                <p className="text-gray-700">
                  EPUB format supports embedded images, fonts, styles, and even multimedia content while maintaining small file sizes for easy sharing and storage.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Common Use Cases</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Self-Publishing Authors</h4>
                  <p className="text-gray-700">Convert your Word manuscript to EPUB format for publishing on Amazon Kindle Direct Publishing, Apple Books, Kobo Writing Life, and other self-publishing platforms.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Educational Materials</h4>
                  <p className="text-gray-700">Transform educational documents, course materials, and study guides into student-friendly eBooks that can be read on any device, anywhere.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-rose-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Business Documentation</h4>
                  <p className="text-gray-700">Convert reports, manuals, and business documents to EPUB format for easy distribution to employees and clients who prefer reading on mobile devices.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Personal Library Digitization</h4>
                  <p className="text-gray-700">Convert your personal writings, journals, and documents to EPUB format to create a portable digital library accessible across all your devices.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Convert Your DOC Files?</h3>
              <p className="text-lg mb-6 opacity-90">
                Use our free online DOC to EPUB converter to transform your Word documents into professional eBooks for any e-reader.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Converting Now
                </button>
                <button
                  onClick={handleBack}
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors"
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

