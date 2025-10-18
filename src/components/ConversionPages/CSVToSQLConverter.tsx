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
  Database,
  BarChart3
} from 'lucide-react';
import { useFileValidation } from '../../hooks/useFileValidation';

export const CSVToSQLConverter: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [convertedFile, setConvertedFile] = useState<Blob | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [tableName, setTableName] = useState('data_table');
  const [dialect, setDialect] = useState<'mysql' | 'postgresql' | 'sqlite'>('mysql');
  const [includeCreateTable, setIncludeCreateTable] = useState(true);
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
      if (file.name.toLowerCase().endsWith('.csv')) {
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
        setPreviewUrl(URL.createObjectURL(file));
      } else {
        setError('Please select a valid CSV file');
      }
    }
  };

  const handleBatchFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const csvFiles = files.filter(file => file.name.toLowerCase().endsWith('.csv'));
    
    if (csvFiles.length === 0) {
      setError('No valid CSV files selected.');
      return;
    }

    const validation = validateBatchFiles(csvFiles);
    if (!validation.isValid) {
      setError(validation.error?.message || 'Batch validation failed');
      setBatchFiles([]);
      if (event.target) {
        event.target.value = '';
      }
      return;
    }

    setBatchFiles(csvFiles);
    setError(null);
    clearValidationError();
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
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('tableName', tableName);
      formData.append('dialect', dialect);
      formData.append('includeCreateTable', includeCreateTable.toString());

      const API_BASE_URL = import.meta.env.PROD 
        ? 'https://morphy-2-n2tb.onrender.com' 
        : 'http://localhost:3000';

      const response = await fetch(`${API_BASE_URL}/convert/csv-to-sql/single`, {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Conversion failed' }));
        throw new Error(errorData.error || 'Conversion failed');
      }

      const blob = await response.blob();
      const filename = selectedFile.name.replace(/\.csv$/i, '.sql');
      
      setConvertedFile(blob);
      setConvertedFilename(filename);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Conversion failed. Please try again.');
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
      const formData = new FormData();
      batchFiles.forEach(file => {
        formData.append('files', file);
      });
      formData.append('tableName', tableName);
      formData.append('dialect', dialect);
      formData.append('includeCreateTable', includeCreateTable.toString());

      const API_BASE_URL = import.meta.env.PROD 
        ? 'https://morphy-2-n2tb.onrender.com' 
        : 'http://localhost:3000';

      const response = await fetch(`${API_BASE_URL}/convert/csv-to-sql/batch`, {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Batch conversion failed');
      }

      const data = await response.json();
      setBatchResults(data.results || []);
      setBatchConverted(true);
      setError(null);
    } catch (err) {
      setError('Batch conversion failed. Please try again.');
    } finally {
      setIsConverting(false);
    }
  };

  const handleBatchDownload = async (downloadUrl: string, filename: string) => {
    try {
      const API_BASE_URL = import.meta.env.PROD 
        ? 'https://morphy-2-n2tb.onrender.com' 
        : 'http://localhost:3000';
      
      const response = await fetch(`${API_BASE_URL}${downloadUrl}`);
      if (!response.ok) throw new Error('Download failed');
      
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      // Refresh the conversion limit banner for anonymous users after download
    } catch (err) {
      setError('Download failed. Please try again.');
    }
  };

  const handleDownload = () => {
    if (convertedFile) {
      const url = URL.createObjectURL(convertedFile);
      const a = document.createElement('a');
      a.href = url;
      a.download = convertedFilename || (selectedFile ? selectedFile.name.replace('.csv', '.sql') : 'converted.sql');
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      // Refresh the conversion limit banner for anonymous users after download
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
        <title>Free CSV to SQL Converter - Convert CSV to SQL INSERT Statements</title>
        <meta name="description" content="Convert CSV files to SQL INSERT statements for database import. Support for MySQL, PostgreSQL, and SQLite dialects. Free online converter with batch processing and CREATE TABLE generation." />
        <meta name="keywords" content="CSV to SQL, SQL converter, database import, SQL INSERT, MySQL converter, PostgreSQL converter, SQLite converter, batch conversion, CREATE TABLE" />
        <link rel="canonical" href="https://morphyimg.com/convert/csv-to-sql" />
        
        <meta property="og:title" content="Free CSV to SQL Converter Online | MorphyIMG" />
        <meta property="og:description" content="Convert CSV to SQL INSERT statements for MySQL, PostgreSQL, and SQLite. Fast and free." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://morphyimg.com/convert/csv-to-sql" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free CSV to SQL Converter Online" />
        <meta name="twitter:description" content="Convert CSV to SQL INSERT statements. Support for multiple SQL dialects." />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "CSV to SQL Converter",
            "description": "Free online CSV to SQL converter with support for MySQL, PostgreSQL, and SQLite",
            "url": "https://morphyimg.com/convert/csv-to-sql",
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
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <Header />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-teal-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              CSV to SQL Converter
            </h1>
            <p className="text-lg sm:text-xl text-green-100 mb-6 max-w-2xl mx-auto">
              Convert CSV files to SQL INSERT statements quickly and easily. Perfect for database imports with support for MySQL, PostgreSQL, and SQLite dialects.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-green-200">
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
                      ? 'bg-green-600 text-white shadow-lg' 
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
                      ? 'bg-green-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <FileImage className="w-5 h-5 inline mr-2" />
                  Batch Convert
                </button>
              </div>

              {/* File Upload Area */}
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-green-400 transition-colors">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {batchMode ? 'Upload Multiple CSV Files' : 'Upload CSV File'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {batchMode 
                    ? 'Select multiple CSV files to convert them all at once' 
                    : 'Drag and drop your CSV file here or click to browse'
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
                  accept=".csv"
                  multiple={batchMode}
                  onChange={batchMode ? handleBatchFileSelect : handleFileSelect}
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
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
                      <Database className="w-12 h-12 text-gray-400" />
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
                  <span className="text-red-700">{error || validationError?.message}</span>
                </div>
              )}

              {/* Convert Button */}
              <div className="mt-8">
                <button
                  onClick={batchMode ? handleBatchConvert : handleSingleConvert}
                  disabled={isConverting || (batchMode ? batchFiles.length === 0 : !selectedFile)}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-700 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
                >
                  {isConverting ? (
                    <div className="flex items-center justify-center">
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                      Converting...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Zap className="w-5 h-5 mr-2" />
                      {batchMode ? `Convert ${batchFiles.length} Files` : 'Convert to SQL'}
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
                    Your CSV file has been successfully converted to SQL format.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleDownload}
                      className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download SQL File
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

              {/* Batch Conversion Success */}
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
                      const displayName = result.filename || `${result.originalName || batchFiles[index].name.replace(/\.[^.]+$/, '')}.sql`;
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
                          {result.success && result.downloadUrl && (
                            <button
                              onClick={() => handleBatchDownload(result.downloadUrl!, displayName)}
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
            
            {/* Conversion Settings */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Settings className="w-5 h-5 mr-2 text-green-600" />
                SQL Settings
              </h3>
              
              {/* Table Name */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Table Name
                </label>
                <input
                  type="text"
                  value={tableName}
                  onChange={(e) => setTableName(e.target.value)}
                  placeholder="data_table"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>

              {/* SQL Dialect */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  SQL Dialect
                </label>
                <select
                  value={dialect}
                  onChange={(e) => setDialect(e.target.value as 'mysql' | 'postgresql' | 'sqlite')}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="mysql">MySQL</option>
                  <option value="postgresql">PostgreSQL</option>
                  <option value="sqlite">SQLite</option>
                </select>
              </div>

              {/* Include CREATE TABLE */}
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={includeCreateTable}
                    onChange={(e) => setIncludeCreateTable(e.target.checked)}
                    className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Include CREATE TABLE statement</span>
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
                  "Support for multiple SQL dialects",
                  "Auto-generate CREATE TABLE",
                  "Batch conversion support",
                  "Column name sanitization",
                  "100% free to use",
                  "Fast SQL generation"
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
                <BarChart3 className="w-5 h-5 mr-2 text-green-600" />
                Perfect For
              </h3>
              <div className="space-y-3">
                {[
                  "Database migration projects",
                  "Bulk data import operations",
                  "Testing and development",
                  "Data seeding scripts",
                  "Backup and restore",
                  "ETL pipeline development"
                ].map((useCase, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
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
            Why Convert CSV to SQL?
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Converting CSV files to SQL INSERT statements is essential for database migration, bulk data import, and application testing. While CSV is excellent for data exchange, SQL format provides direct database compatibility with MySQL, PostgreSQL, SQLite, and other relational databases, making it the standard format for database operations and data seeding workflows.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Key Benefits of SQL Format</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-green-900 mb-3">Direct Database Import</h4>
                <p className="text-gray-700">
                  SQL INSERT statements can be executed directly in any SQL database without additional tools or conversion steps.
                </p>
              </div>
              
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-emerald-900 mb-3">Multi-Dialect Support</h4>
                <p className="text-gray-700">
                  Generate SQL compatible with MySQL, PostgreSQL, or SQLite, ensuring compatibility with your specific database system.
                </p>
              </div>
              
              <div className="bg-teal-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-teal-900 mb-3">Auto-Generate Schema</h4>
                <p className="text-gray-700">
                  Automatically creates CREATE TABLE statements with inferred column types, saving manual schema definition time.
                </p>
              </div>
              
              <div className="bg-cyan-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-cyan-900 mb-3">Version Control Ready</h4>
                <p className="text-gray-700">
                  SQL files can be tracked in Git for database schema versioning and collaborative development workflows.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Common Use Cases</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Database Migration Projects</h4>
                  <p className="text-gray-700">Migrate data between different database systems by converting CSV exports to SQL INSERT statements compatible with your target database.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Application Testing and Development</h4>
                  <p className="text-gray-700">Generate SQL seed data for testing environments, allowing developers to quickly populate databases with realistic test data.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Bulk Data Import Operations</h4>
                  <p className="text-gray-700">Import large datasets into SQL databases by converting CSV exports to efficient SQL INSERT statements for batch execution.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Database Backup and Restore</h4>
                  <p className="text-gray-700">Create portable SQL backup files from CSV data that can be easily restored across different database platforms.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Convert Your CSV Files?</h3>
              <p className="text-lg mb-6 opacity-90">
                Use our free online CSV to SQL converter to transform your data into database-ready SQL statements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Converting Now
                </button>
                <button
                  onClick={handleBack}
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
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
