import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Upload, Download, CheckCircle, AlertCircle, BookOpen, ArrowLeft } from 'lucide-react';
import { FileUpload } from '../FileUpload';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

export const DOCToEPUBConverter: React.FC = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);
  const [batchFiles, setBatchFiles] = useState<File[]>([]);
  const [batchMode, setBatchMode] = useState(false);
  const [converting, setConverting] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [batchResults, setBatchResults] = useState<Array<{
    name: string;
    downloadUrl: string;
    size: number;
  }>>([]);
  const [error, setError] = useState<string | null>(null);
  const [conversionTime, setConversionTime] = useState<number | null>(null);

  // File size constants
  const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100MB per file
  const MAX_BATCH_SIZE = 100 * 1024 * 1024; // 100MB total
  const MAX_BATCH_FILES = 20;

  const handleFileSelect = (selectedFiles: File[]) => {
    setError(null);
    setDownloadUrl(null);
    setBatchResults([]);
    setConversionTime(null);

    if (batchMode) {
      // Validate batch constraints
      if (selectedFiles.length > MAX_BATCH_FILES) {
        setError(`Maximum ${MAX_BATCH_FILES} files allowed in batch mode`);
        return;
      }

      // Check individual file sizes
      const oversizedFiles = selectedFiles.filter(f => f.size > MAX_FILE_SIZE);
      if (oversizedFiles.length > 0) {
        setError(`Files exceed 100MB limit: ${oversizedFiles.map(f => f.name).join(', ')}`);
        return;
      }

      // Check total batch size
      const totalSize = selectedFiles.reduce((sum, f) => sum + f.size, 0);
      if (totalSize > MAX_BATCH_SIZE) {
        setError(`Total batch size (${(totalSize / 1024 / 1024).toFixed(2)} MB) exceeds 100MB limit`);
        return;
      }

      setBatchFiles(selectedFiles);
    } else {
      if (selectedFiles[0].size > MAX_FILE_SIZE) {
        setError(`File size exceeds 100MB limit`);
        return;
      }
      setFile(selectedFiles[0]);
    }
  };

  const handleSingleConvert = async () => {
    if (!file) return;

    setConverting(true);
    setError(null);
    setDownloadUrl(null);
    const startTime = Date.now();

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch(`${API_BASE_URL}/convert/doc-to-epub/single`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Conversion failed');
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
      setConversionTime(Date.now() - startTime);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Conversion failed');
    } finally {
      setConverting(false);
    }
  };

  const handleBatchConvert = async () => {
    if (batchFiles.length === 0) return;

    setConverting(true);
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
      setBatchResults(results.map((result: any) => ({
        name: result.filename,
        downloadUrl: `${API_BASE_URL}${result.downloadUrl}`,
        size: result.size
      })));
      setConversionTime(Date.now() - startTime);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Batch conversion failed');
    } finally {
      setConverting(false);
    }
  };

  const getBatchSizeDisplay = () => {
    const totalSize = batchFiles.reduce((sum, f) => sum + f.size, 0);
    const totalMB = totalSize / 1024 / 1024;
    const isWarning = totalSize > MAX_BATCH_SIZE * 0.8;
    return {
      text: `Total size: ${totalMB.toFixed(2)} MB of 100.00 MB allowed`,
      isWarning
    };
  };

  const sizeDisplay = getBatchSizeDisplay();

  return (
    <>
      <Helmet>
        <title>Free DOC to EPUB Converter Online - Convert Word to eBook | MorphyIMG</title>
        <meta name="description" content="Convert DOC files to EPUB eBook format online for free. Fast, secure DOC to EPUB converter with batch processing. No registration required." />
        <meta name="keywords" content="DOC to EPUB, Word to eBook, DOC converter, EPUB converter, convert DOC to EPUB online, free DOC to EPUB" />
        <link rel="canonical" href="https://morphyimg.com/convert/doc-to-epub" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Free DOC to EPUB Converter Online - Convert Word to eBook" />
        <meta property="og:description" content="Convert DOC files to EPUB eBook format online for free. Fast, secure DOC to EPUB converter with batch processing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://morphyimg.com/convert/doc-to-epub" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free DOC to EPUB Converter Online - Convert Word to eBook" />
        <meta name="twitter:description" content="Convert DOC files to EPUB eBook format online for free. Fast, secure DOC to EPUB converter with batch processing." />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "DOC to EPUB Converter",
            "description": "Convert DOC files to EPUB eBook format online for free",
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

      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 flex flex-col">
        <Header />
        
        <main className="flex-grow container mx-auto px-4 py-8 mt-16">
          {/* Back Button */}
          <button
            onClick={() => navigate('/converters')}
            className="mb-6 flex items-center text-amber-600 hover:text-amber-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Converters
          </button>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl shadow-lg">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              DOC to EPUB Converter
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Convert Microsoft Word DOC files to EPUB eBook format. Perfect for reading on e-readers and mobile devices.
            </p>
          </div>

          {/* Mode Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-xl shadow-md p-1 inline-flex">
              <button
                onClick={() => {
                  setBatchMode(false);
                  setBatchFiles([]);
                  setBatchResults([]);
                  setError(null);
                }}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  !batchMode
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Single File
              </button>
              <button
                onClick={() => {
                  setBatchMode(true);
                  setFile(null);
                  setDownloadUrl(null);
                  setError(null);
                }}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  batchMode
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Batch Convert
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {/* Upload Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="mb-6">
                <FileUpload
                  accept=".doc"
                  onFilesSelected={handleFileSelect}
                  maxFiles={batchMode ? MAX_BATCH_FILES : 1}
                  icon={Upload}
                  label={batchMode ? "Drop DOC files here or click to upload" : "Drop DOC file here or click to upload"}
                />
                {!batchMode && (
                  <p className="text-sm text-amber-600 mt-4">
                    ✓ Up to 100 MB per file
                  </p>
                )}
                {batchMode && (
                  <p className="text-sm text-amber-600 mt-4">
                    ✓ Max 20 files • Up to 100 MB per file • 100 MB total batch size
                  </p>
                )}
              </div>

              {/* File Info */}
              {!batchMode && file && (
                <div className="mb-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FileText className="w-5 h-5 text-amber-600 mr-3" />
                      <div>
                        <p className="font-medium text-gray-900">{file.name}</p>
                        <p className="text-sm text-gray-600">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Batch Files List */}
              {batchMode && batchFiles.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      Selected Files ({batchFiles.length})
                    </h4>
                    <div className={`text-sm font-medium ${sizeDisplay.isWarning ? 'text-orange-600' : 'text-gray-600'}`}>
                      {sizeDisplay.text}
                    </div>
                  </div>
                  {sizeDisplay.isWarning && (
                    <div className="mb-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                      <p className="text-sm text-orange-800">
                        ⚠️ Approaching batch size limit. Consider removing some files.
                      </p>
                    </div>
                  )}
                  <div className="max-h-64 overflow-y-auto space-y-2">
                    {batchFiles.map((f, idx) => (
                      <div key={idx} className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center min-w-0 flex-1">
                            <FileText className="w-4 h-4 text-amber-600 mr-2 flex-shrink-0" />
                            <span className="text-sm text-gray-900 truncate">{f.name}</span>
                          </div>
                          <span className="text-sm text-gray-600 ml-2">
                            {(f.size / 1024 / 1024).toFixed(2)} MB
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Convert Button */}
              {((file && !batchMode) || (batchFiles.length > 0 && batchMode)) && (
                <button
                  onClick={batchMode ? handleBatchConvert : handleSingleConvert}
                  disabled={converting}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-4 rounded-xl font-semibold hover:from-amber-600 hover:to-orange-700 transform hover:scale-[1.02] transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {converting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Converting...
                    </span>
                  ) : (
                    `Convert to EPUB`
                  )}
                </button>
              )}

              {/* Error Message */}
              {error && (
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-red-800">{error}</p>
                </div>
              )}

              {/* Success Message - Single */}
              {downloadUrl && !batchMode && (
                <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <div>
                      <p className="font-semibold text-green-900">Conversion Successful!</p>
                      {conversionTime && (
                        <p className="text-sm text-green-700">
                          Completed in {(conversionTime / 1000).toFixed(2)}s
                        </p>
                      )}
                    </div>
                  </div>
                  <a
                    href={downloadUrl}
                    download={file?.name.replace(/\.doc$/i, '.epub')}
                    className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download EPUB
                  </a>
                </div>
              )}

              {/* Success Message - Batch */}
              {batchResults.length > 0 && batchMode && (
                <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <div>
                      <p className="font-semibold text-green-900">
                        Batch Conversion Successful!
                      </p>
                      {conversionTime && (
                        <p className="text-sm text-green-700">
                          Completed in {(conversionTime / 1000).toFixed(2)}s
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2 max-h-96 overflow-y-auto">
                    {batchResults.map((result, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-white rounded-lg">
                        <div className="flex items-center min-w-0 flex-1">
                          <FileText className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-900 truncate">{result.name}</span>
                          <span className="text-sm text-gray-600 ml-2">
                            ({(result.size / 1024 / 1024).toFixed(2)} MB)
                          </span>
                        </div>
                        <a
                          href={result.downloadUrl}
                          className="ml-4 inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors flex-shrink-0"
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

          {/* Info Section */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About DOC to EPUB Conversion</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">What is DOC?</h3>
                  <p className="text-gray-600 text-sm">
                    DOC is the legacy Microsoft Word document format used before Office 2007. It's a binary format that stores text, formatting, images, and other document elements.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">What is EPUB?</h3>
                  <p className="text-gray-600 text-sm">
                    EPUB (Electronic Publication) is an open eBook standard format. It's reflowable, meaning text adapts to different screen sizes, making it perfect for e-readers and mobile devices.
                  </p>
                </div>
              </div>

              <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Preserves text formatting and structure</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Maintains document hierarchy and metadata</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Compatible with all major e-readers (Kindle, Kobo, etc.)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Fast batch processing for multiple files</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Secure conversion with automatic file cleanup</span>
                </li>
              </ul>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};
