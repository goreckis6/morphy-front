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
  BookOpen,
  Info
} from 'lucide-react';
import { useFileValidation } from '../../hooks/useFileValidation';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

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
  const [conversionTime, setConversionTime] = useState<number | null>(null);

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
  const fileInputRef = useRef<HTMLInputElement>(null);

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
    const startTime = Date.now();

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
      setConversionTime(Date.now() - startTime);
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
    const startTime = Date.now();

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
      setBatchResults(results);
      setBatchConverted(true);
      setConversionTime(Date.now() - startTime);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Batch conversion failed');
    } finally {
      setIsConverting(false);
    }
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

  return (
    <>
      <Helmet>
        <title>Free DOC to EPUB Converter Online - Convert Word Documents to eBook Format | MorphyIMG</title>
        <meta name="description" content="Free online DOC to EPUB converter. Transform Microsoft Word DOC files to EPUB eBook format instantly. Batch conversion, no registration, 100% secure. Perfect for Kindle, Kobo, and all e-readers." />
        <meta name="keywords" content="free DOC to EPUB converter, DOC to EPUB online free, convert Word to EPUB, Word document to eBook, DOC to EPUB batch converter, Microsoft Word to EPUB, free eBook converter, DOC to digital book, online EPUB converter, convert DOC to ebook free, Word to Kindle format, DOC to e-reader format" />
        <link rel="canonical" href="https://morphyimg.com/convert/doc-to-epub" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Free DOC to EPUB Converter Online - Convert Word Documents to eBook" />
        <meta property="og:description" content="Convert Microsoft Word DOC files to EPUB eBook format online for free. Batch processing, no registration required. Compatible with all e-readers." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://morphyimg.com/convert/doc-to-epub" />
        <meta property="og:image" content="https://morphyimg.com/og-doc-to-epub.png" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free DOC to EPUB Converter Online - Convert Word to eBook" />
        <meta name="twitter:description" content="Convert Microsoft Word DOC files to EPUB eBook format online for free. Batch processing, no registration required." />
        <meta name="twitter:image" content="https://morphyimg.com/twitter-doc-to-epub.png" />
        
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
            },
            "featureList": [
              "Free DOC to EPUB conversion",
              "Batch processing up to 20 files",
              "No registration required",
              "Secure and private",
              "Compatible with all e-readers"
            ],
            "browserRequirements": "Requires JavaScript. Works with all modern browsers."
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
        <Header />
        
        <div className="container mx-auto px-4 py-8 max-w-7xl mt-20">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="w-12 h-12 text-amber-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Free DOC to EPUB Converter
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Convert Microsoft Word DOC files to EPUB eBook format online for free. Perfect for Kindle, Kobo, and all e-readers. No registration required.
            </p>
          </div>

          {/* Main Content - 2 Column Layout */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Converter */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Convert DOC to EPUB</h2>
                
                {/* Mode Toggle */}
                <div className="flex gap-4 mb-6">
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
                    <p className="text-sm text-blue-600 mb-4">{getBatchInfoMessage()}</p>
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
                    <h4 className="text-lg font-semibold mb-4">Selected File</h4>
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

                {/* Success Message & Download - Single */}
                {convertedFile && !batchMode && (
                  <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-xl">
                    <div className="flex items-center mb-4">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                      <div>
                        <h4 className="text-lg font-semibold text-green-800">Conversion Complete!</h4>
                        {conversionTime && (
                          <p className="text-sm text-green-700">Completed in {(conversionTime / 1000).toFixed(2)}s</p>
                        )}
                      </div>
                    </div>
                    <p className="text-green-700 mb-4">
                      Your DOC file has been successfully converted to EPUB format.
                    </p>
                    <button
                      onClick={handleDownload}
                      className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors inline-flex items-center"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download EPUB
                    </button>
                  </div>
                )}

                {/* Success Message & Download - Batch */}
                {batchConverted && batchMode && batchResults.length > 0 && (
                  <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-xl">
                    <div className="flex items-center mb-4">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                      <div>
                        <h4 className="text-lg font-semibold text-green-800">Batch Conversion Complete!</h4>
                        {conversionTime && (
                          <p className="text-sm text-green-700">Completed in {(conversionTime / 1000).toFixed(2)}s</p>
                        )}
                      </div>
                    </div>
                    <p className="text-green-700 mb-4">
                      All {batchResults.length} files have been successfully converted to EPUB format.
                    </p>
                    <div className="space-y-2">
                      {batchResults.map((result, index) => (
                        <div key={index} className="flex items-center justify-between bg-white rounded-lg p-3">
                          <div className="flex items-center flex-1 min-w-0 mr-4">
                            <BookOpen className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                            <span className="text-sm font-medium truncate">{result.filename}</span>
                            <span className="text-xs text-gray-500 ml-2">
                              ({formatFileSize(result.size)})
                            </span>
                          </div>
                          <a
                            href={`${API_BASE_URL}${result.downloadUrl}`}
                            download={result.filename}
                            className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors inline-flex items-center flex-shrink-0"
                          >
                            <Download className="w-4 h-4 mr-1" />
                            Download
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Info */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Info className="w-5 h-5 mr-2 text-amber-600" />
                  About EPUB Format
                </h3>
                <div className="space-y-4 text-sm text-gray-600">
                  <p>
                    <strong className="text-gray-900">EPUB (Electronic Publication)</strong> is the universal eBook standard format that works with all major e-readers and reading apps.
                  </p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>100% Free conversion</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Reflowable text adapts to screen size</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Compatible with Kindle, Kobo, Nook</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Preserves formatting & structure</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Batch process up to 20 files</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Secure & private processing</span>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-4 border-t">
                    <h4 className="font-semibold text-gray-900 mb-2">How to Use:</h4>
                    <ol className="space-y-1 list-decimal list-inside">
                      <li>Upload your DOC file(s)</li>
                      <li>Click "Convert to EPUB"</li>
                      <li>Download your eBook file</li>
                      <li>Open in your e-reader app</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="mt-12 bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Use Our Free DOC to EPUB Converter?</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">What is DOC Format?</h3>
                <p className="text-gray-600 text-sm">
                  DOC is the legacy Microsoft Word document format used before Office 2007. It's a binary format that stores text, formatting, images, tables, and other document elements. Our free converter supports all DOC files.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">What is EPUB Format?</h3>
                <p className="text-gray-600 text-sm">
                  EPUB (Electronic Publication) is the universal eBook standard format. It's reflowable, meaning text automatically adapts to different screen sizes, making it perfect for e-readers like Kindle, Kobo, Nook, and mobile devices.
                </p>
              </div>
            </div>

            <h3 className="font-semibold text-gray-900 mb-3">Features:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <strong>100% Free:</strong>
                  <span className="text-gray-600"> No hidden fees, no subscriptions, unlimited conversions</span>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <strong>No Registration:</strong>
                  <span className="text-gray-600"> Start converting immediately without creating an account</span>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Batch Processing:</strong>
                  <span className="text-gray-600"> Convert up to 20 DOC files to EPUB simultaneously</span>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Universal Compatibility:</strong>
                  <span className="text-gray-600"> Works with all e-readers and reading apps</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
