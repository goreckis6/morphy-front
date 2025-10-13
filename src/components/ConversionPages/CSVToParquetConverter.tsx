import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../Header';
import { 
  Upload, 
  Download, 
  Settings, 
  FileText,
  RefreshCw,
  CheckCircle,
  AlertCircle,
  Zap,
  Shield,
  Database,
  BarChart3
} from 'lucide-react';
import { useFileValidation } from '../../hooks/useFileValidation';
import { apiService } from '../../services/api';

export const CSVToParquetConverter: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [convertedFile, setConvertedFile] = useState<Blob | null>(null);
  const [convertedFilename, setConvertedFilename] = useState<string>('');
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [compression, setCompression] = useState<'snappy' | 'gzip' | 'brotli' | 'none'>('snappy');
  const [batchMode, setBatchMode] = useState(false);
  const [batchFiles, setBatchFiles] = useState<File[]>([]);
  const [batchConverted, setBatchConverted] = useState(false);
  const [batchResults, setBatchResults] = useState<any[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { validationError, validateSingleFile, validateBatchFiles, getBatchSizeDisplay, formatFileSize, clearValidationError } = useFileValidation();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.name.toLowerCase().endsWith('.csv')) {
      const validation = validateSingleFile(file);
      if (!validation.isValid) {
        setError(validation.error?.message || 'File validation failed');
        setSelectedFile(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
        return;
      }
      setSelectedFile(file);
      setError(null);
      clearValidationError();
    } else {
      setError('Please select a valid CSV file');
    }
  };

  const handleBatchFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const csvFiles = files.filter(file => 
      file.name.toLowerCase().endsWith('.csv')
    );
    
    const validation = validateBatchFiles(csvFiles);
    if (!validation.isValid) {
      setError(validation.error?.message || 'Batch validation failed');
      setBatchFiles([]);
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }
    
    setBatchFiles(csvFiles);
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
      formData.append('compression', compression);

      const API_BASE_URL = import.meta.env.PROD 
        ? 'https://morphy-2-n2tb.onrender.com' 
        : 'http://localhost:3000';

      const response = await fetch(`${API_BASE_URL}/convert/csv-to-parquet/single`, {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Conversion failed' }));
        throw new Error(errorData.error || 'Conversion failed');
      }

      const blob = await response.blob();
      const filename = selectedFile.name.replace(/\.csv$/i, '.parquet');
      
      setConvertedFile(blob);
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
      formData.append('compression', compression);

      const API_BASE_URL = import.meta.env.PROD 
        ? 'https://morphy-2-n2tb.onrender.com' 
        : 'http://localhost:3000';

      const response = await fetch(`${API_BASE_URL}/convert/csv-to-parquet/batch`, {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Batch conversion failed');
      }

      const data = await response.json();
      setBatchResults(data.results || []);
      setBatchConverted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Batch conversion failed');
    } finally {
      setIsConverting(false);
    }
  };

  const handleDownload = () => {
    if (!convertedFile || !convertedFilename) return;
    
    const url = URL.createObjectURL(convertedFile);
    const a = document.createElement('a');
    a.href = url;
    a.download = convertedFilename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleBatchDownload = async (result: any) => {
    try {
      const API_BASE_URL = import.meta.env.PROD 
        ? 'https://morphy-2-n2tb.onrender.com' 
        : 'http://localhost:3000';
      
      const response = await fetch(`${API_BASE_URL}${result.downloadUrl}`);
      if (!response.ok) throw new Error('Download failed');
      
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = result.filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      setError('Download failed. Please try again.');
    }
  };

  const totalBatchSize = batchFiles.reduce((sum, file) => sum + file.size, 0);
  const sizeDisplay = getBatchSizeDisplay(totalBatchSize);

  return (
    <>
      <Helmet>
        <title>Free CSV to Parquet Converter Online - Convert CSV to Apache Parquet | MorphyIMG</title>
        <meta name="description" content="Free online CSV to Parquet converter. Convert CSV files to Apache Parquet columnar format with compression options (Snappy, GZIP, Brotli). Fast, secure, and easy. Batch convert up to 20 files, 100MB total. No registration required." />
        <meta name="keywords" content="CSV to Parquet, free CSV to Parquet converter, online Parquet converter, CSV Parquet conversion, Apache Parquet converter, columnar storage converter, Snappy compression, data format converter, batch CSV to Parquet" />
        <link rel="canonical" href="https://morphyimg.com/convert/csv-to-parquet" />
        
        <meta property="og:title" content="Free CSV to Parquet Converter Online | MorphyIMG" />
        <meta property="og:description" content="Convert CSV to Apache Parquet format online for free. Fast columnar storage conversion with compression options." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://morphyimg.com/convert/csv-to-parquet" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free CSV to Parquet Converter Online" />
        <meta name="twitter:description" content="Convert CSV to Apache Parquet format with compression options. Fast and free." />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "CSV to Parquet Converter",
            "description": "Free online CSV to Apache Parquet converter",
            "url": "https://morphyimg.com/convert/csv-to-parquet",
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

      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-block p-4 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
                <Database className="w-16 h-16 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                CSV to Parquet Converter
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
                Convert CSV files to Apache Parquet columnar format with advanced compression
              </p>
              
              {/* Mode Toggle */}
              <div className="flex justify-center gap-4 mb-8">
                <button
                  onClick={() => { setBatchMode(false); setBatchFiles([]); setBatchConverted(false); }}
                  className={`px-8 py-3 rounded-full font-semibold transition-all ${
                    !batchMode 
                      ? 'bg-white text-purple-600 shadow-lg' 
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Single File
                </button>
                <button
                  onClick={() => { setBatchMode(true); setSelectedFile(null); setConvertedFile(null); }}
                  className={`px-8 py-3 rounded-full font-semibold transition-all ${
                    batchMode 
                      ? 'bg-white text-purple-600 shadow-lg' 
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Batch Convert
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Single File Mode */}
          {!batchMode && (
            <>
              {/* File Upload Section */}
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Upload className="w-6 h-6 text-purple-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Upload CSV File</h2>
                </div>
                
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-purple-500 transition-colors">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".csv"
                    onChange={handleFileSelect}
                    className="hidden"
                    id="csv-upload"
                  />
                  <label htmlFor="csv-upload" className="cursor-pointer">
                    <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-lg font-semibold text-gray-700 mb-2">
                      Choose CSV file or drag and drop
                    </p>
                    <p className="text-sm text-gray-500">
                      CSV files up to 100 MB
                    </p>
                  </label>
                </div>

                {selectedFile && (
                  <div className="mt-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-purple-600" />
                        <div>
                          <p className="font-medium text-gray-900">{selectedFile.name}</p>
                          <p className="text-sm text-gray-600">{formatFileSize(selectedFile.size)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {(error || validationError) && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-red-800 text-sm">{error || validationError?.message}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Conversion Options */}
              {selectedFile && (
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Settings className="w-6 h-6 text-purple-600" />
                    <h2 className="text-2xl font-bold text-gray-900">Parquet Options</h2>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Compression */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Compression Codec
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {(['snappy', 'gzip', 'brotli', 'none'] as const).map((comp) => (
                          <button
                            key={comp}
                            onClick={() => setCompression(comp)}
                            className={`px-4 py-3 rounded-lg font-medium transition-all ${
                              compression === comp
                                ? 'bg-purple-600 text-white shadow-lg'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {comp.charAt(0).toUpperCase() + comp.slice(1)}
                          </button>
                        ))}
                      </div>
                      <p className="mt-2 text-xs text-gray-600">
                        Snappy: Fast compression (recommended) • GZIP: Higher compression • Brotli: Best compression • None: No compression
                      </p>
                    </div>
                  </div>

                  {/* Convert Button */}
                  <button
                    onClick={handleSingleConvert}
                    disabled={isConverting || !selectedFile}
                    className="w-full mt-8 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 disabled:hover:scale-100 shadow-lg flex items-center justify-center space-x-2"
                  >
                    {isConverting ? (
                      <>
                        <RefreshCw className="w-5 h-5 animate-spin" />
                        <span>Converting...</span>
                      </>
                    ) : (
                      <>
                        <Zap className="w-5 h-5" />
                        <span>Convert to Parquet</span>
                      </>
                    )}
                  </button>
                </div>
              )}

              {/* Download Section */}
              {convertedFile && (
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-xl p-8 border-2 border-green-200">
                  <div className="flex items-center space-x-3 mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                    <h2 className="text-2xl font-bold text-gray-900">Conversion Complete!</h2>
                  </div>
                  
                  <p className="text-gray-700 mb-6">
                    Your Parquet file is ready for download.
                  </p>
                  
                  <button
                    onClick={handleDownload}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download {convertedFilename}</span>
                  </button>
                </div>
              )}
            </>
          )}

          {/* Batch Mode */}
          {batchMode && (
            <>
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Upload className="w-6 h-6 text-purple-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Upload Multiple CSV Files</h2>
                </div>
                
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-purple-500 transition-colors">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".csv"
                    multiple
                    onChange={handleBatchFileSelect}
                    className="hidden"
                    id="batch-csv-upload"
                  />
                  <label htmlFor="batch-csv-upload" className="cursor-pointer">
                    <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-lg font-semibold text-gray-700 mb-2">
                      Choose CSV files or drag and drop
                    </p>
                    <p className="text-sm text-gray-500">
                      ✓ Max 20 files • Up to 100 MB Total
                    </p>
                  </label>
                </div>

                {(error || validationError) && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-red-800 text-sm">{error || validationError?.message}</p>
                    </div>
                  </div>
                )}
              </div>

              {batchFiles.length > 0 && !batchConverted && (
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold">Selected Files ({batchFiles.length})</h4>
                    <div className={`text-sm font-medium ${sizeDisplay.isWarning ? 'text-orange-600' : 'text-gray-600'}`}>
                      {sizeDisplay.text}
                    </div>
                  </div>

                  {sizeDisplay.isWarning && (
                    <div className="mb-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                      <p className="text-sm text-orange-800">
                        ⚠️ Warning: Approaching size limit
                      </p>
                    </div>
                  )}

                  <div className="space-y-2 mb-6">
                    {batchFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <FileText className="w-5 h-5 text-purple-600" />
                          <span className="text-sm font-medium text-gray-900">{file.name}</span>
                        </div>
                        <span className="text-sm text-gray-600">{formatFileSize(file.size)}</span>
                      </div>
                    ))}
                  </div>

                  {/* Compression Option for Batch */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Compression Codec
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {(['snappy', 'gzip', 'brotli', 'none'] as const).map((comp) => (
                        <button
                          key={comp}
                          onClick={() => setCompression(comp)}
                          className={`px-4 py-3 rounded-lg font-medium transition-all ${
                            compression === comp
                              ? 'bg-purple-600 text-white shadow-lg'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {comp.charAt(0).toUpperCase() + comp.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleBatchConvert}
                    disabled={isConverting}
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 disabled:hover:scale-100 shadow-lg flex items-center justify-center space-x-2"
                  >
                    {isConverting ? (
                      <>
                        <RefreshCw className="w-5 h-5 animate-spin" />
                        <span>Converting {batchFiles.length} files...</span>
                      </>
                    ) : (
                      <>
                        <Zap className="w-5 h-5" />
                        <span>Convert All to Parquet</span>
                      </>
                    )}
                  </button>
                </div>
              )}

              {/* Batch Results */}
              {batchConverted && batchResults.length > 0 && (
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                    <h2 className="text-2xl font-bold text-gray-900">Batch Conversion Complete!</h2>
                  </div>
                  
                  <div className="space-y-3">
                    {batchResults.map((result, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <div>
                            <span className="text-sm font-medium text-gray-900">{result.filename}</span>
                            <p className="text-xs text-gray-600">{formatFileSize(result.size)}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => handleBatchDownload(result)}
                          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2"
                        >
                          <Download className="w-4 h-4" />
                          <span>Download</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lightning Fast</h3>
              <p className="text-gray-600">
                Optimized columnar storage with compression for efficient data processing
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Columnar Format</h3>
              <p className="text-gray-600">
                Apache Parquet format for efficient analytics and big data processing
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Secure & Private</h3>
              <p className="text-gray-600">
                Files are processed securely and deleted immediately after conversion
              </p>
            </div>
          </div>

          {/* About Parquet Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">About Apache Parquet Format</h2>
            <div className="prose max-w-none text-gray-600">
              <p className="mb-4">
                Apache Parquet is a columnar storage file format designed for efficient data storage and retrieval. 
                It provides efficient data compression and encoding schemes with enhanced performance for handling complex data in bulk.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Benefits</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Columnar storage</strong> - Optimized for analytics queries</li>
                    <li>• <strong>Compression</strong> - Snappy, GZIP, Brotli support</li>
                    <li>• <strong>Schema evolution</strong> - Add/remove columns easily</li>
                    <li>• <strong>Type safety</strong> - Preserves data types</li>
                    <li>• <strong>Big data ready</strong> - Works with Spark, Hadoop, Hive</li>
                    <li>• <strong>Cross-platform</strong> - Language-agnostic format</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Common Use Cases</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Data analytics</strong> - Faster query performance</li>
                    <li>• <strong>Data warehousing</strong> - Efficient storage</li>
                    <li>• <strong>Machine learning</strong> - Training data storage</li>
                    <li>• <strong>Big data pipelines</strong> - ETL processes</li>
                    <li>• <strong>Cloud storage</strong> - S3, GCS, Azure compatibility</li>
                    <li>• <strong>Data archival</strong> - Long-term efficient storage</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Upload CSV</h3>
                <p className="text-gray-600 text-sm">Select your CSV file from your computer</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Choose Compression</h3>
                <p className="text-gray-600 text-sm">Select Snappy, GZIP, Brotli, or no compression</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Download Parquet</h3>
                <p className="text-gray-600 text-sm">Get your optimized Parquet file instantly</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-300">
              © 2025 MorphyIMG. Free CSV to Parquet converter for data professionals.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};
