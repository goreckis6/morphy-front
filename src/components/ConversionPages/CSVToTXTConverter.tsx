import React from 'react';
import { useCsvConversion } from '../../hooks/useCsvConversion';
import { Header } from '../Header';
import { 
  Upload, 
  FileText,
  CheckCircle,
  Zap,
  BarChart3
} from 'lucide-react';

export const CSVToTXTConverter: React.FC = () => {
  const {
    selectedFile,
    convertedFile,
    convertedFilename,
    isConverting,
    error,
    validationError,
    previewUrl,
    batchMode,
    setBatchMode,
    batchFiles,
    batchResults,
    batchConverted,
    fileInputRef,
    handleFileSelect,
    handleBatchFileSelect,
    handleSingleConvert,
    handleBatchConvert,
    handleDownload,
    handleBatchDownload,
    resetForm,
    formatFileSize,
    getBatchSizeDisplay,
    getSingleInfoMessage,
    getBatchInfoMessage
  } = useCsvConversion({ targetFormat: 'txt' });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Convert CSV to TXT
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your CSV files into clean, readable text format. Perfect for data analysis, 
            reporting, and sharing structured data in a simple text format.
          </p>
        </div>

        {/* Back to Home Button */}
        <div className="mb-8">
          <a
            href="/"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            ← Back to Home
          </a>
        </div>

        {/* Conversion Time Info */}
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Note:</strong> Conversion may take 2-5 minutes for large files.
          </p>
        </div>

        {/* Mode Toggle */}
        <div className="mb-6">
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
            <button
              onClick={() => setBatchMode(false)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                !batchMode
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Single File
            </button>
            <button
              onClick={() => setBatchMode(true)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                batchMode
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Batch Convert
            </button>
          </div>
        </div>

        {/* Single File Conversion */}
        {!batchMode && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Single File Conversion</h2>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
              <input
                ref={fileInputRef}
                type="file"
                accept=".csv"
                onChange={handleFileSelect}
                className="hidden"
              />
              <div className="space-y-4">
                <div className="mx-auto w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <Upload className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-900">
                    Drop your CSV file here, or click to browse
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {getSingleInfoMessage()}
                  </p>
                </div>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Choose File
                </button>
              </div>
            </div>

            {validationError && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
                <p className="text-sm text-red-600">{validationError}</p>
              </div>
            )}

            {error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            {selectedFile && (
              <div className="mt-4 p-4 bg-gray-50 rounded-md">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {selectedFile.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {formatFileSize(selectedFile.size)}
                    </p>
                  </div>
                  <button
                    onClick={handleSingleConvert}
                    disabled={isConverting}
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    {isConverting ? 'Converting...' : 'Convert to TXT'}
                  </button>
                </div>
              </div>
            )}

            {convertedFile && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-md">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-green-900">
                      Conversion successful!
                    </p>
                    <p className="text-sm text-green-700">
                      {convertedFilename} ({formatFileSize(convertedFile.size)})
                    </p>
                  </div>
                  <div className="space-x-2">
                    <button
                      onClick={handleDownload}
                      className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                      Download
                    </button>
                    <button
                      onClick={resetForm}
                      className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    >
                      Convert Another
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Batch File Conversion */}
        {batchMode && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Batch File Conversion</h2>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
              <input
                ref={fileInputRef}
                type="file"
                accept=".csv"
                multiple
                onChange={handleBatchFileSelect}
                className="hidden"
              />
              <div className="space-y-4">
                <div className="mx-auto w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <Upload className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-900">
                    Drop your CSV files here, or click to browse
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {getBatchInfoMessage()}
                  </p>
                </div>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Choose Files
                </button>
              </div>
            </div>

            {batchFiles.length > 0 && (
              <div className="mt-4 p-4 bg-gray-50 rounded-md">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium text-gray-900">
                    {batchFiles.length} file(s) selected
                  </p>
                  <p className="text-sm text-gray-500">
                    {getBatchSizeDisplay(batchFiles.reduce((sum, file) => sum + file.size, 0)).text}
                  </p>
                </div>
                <div className="space-y-2">
                  {batchFiles.map((file, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                      <span className="text-gray-700">{file.name}</span>
                      <span className="text-gray-500">{formatFileSize(file.size)}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={handleBatchConvert}
                  disabled={isConverting}
                  className="mt-4 w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  {isConverting ? 'Converting...' : 'Convert All to TXT'}
                </button>
              </div>
            )}

            {validationError && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
                <p className="text-sm text-red-600">{validationError}</p>
              </div>
            )}

            {error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            {batchConverted && batchResults.length > 0 && (
              <div className="mt-4 space-y-3">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-medium text-green-900">
                    Batch conversion successful! ({batchResults.length} files)
                  </p>
                <button
                  onClick={resetForm}
                  className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Convert More Files
                </button>
                </div>
                <div className="space-y-2">
                  {batchResults.map((result, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-green-50 border border-green-200 rounded-md">
                      <div>
                        <p className="text-sm font-medium text-green-900">{result.outputFilename}</p>
                        <p className="text-sm text-green-700">{result.originalName}</p>
                      </div>
                      <button
                        onClick={() => handleBatchDownload(result)}
                        className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                      >
                        Download
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Why Convert CSV to TXT Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Convert CSV to TXT?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Universal Compatibility</h3>
              <p className="text-gray-600">
                TXT files can be opened by any text editor, making your data accessible across all platforms and devices.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Easy Data Sharing</h3>
              <p className="text-gray-600">
                Share structured data in a simple, readable format that anyone can understand and process.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Data Analysis</h3>
              <p className="text-gray-600">
                Perfect for importing into analysis tools, databases, and programming environments that work with text data.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Lightweight Format</h3>
              <p className="text-gray-600">
                TXT files are compact and fast to process, making them ideal for large datasets and quick data transfers.
              </p>
            </div>
          </div>
        </div>

        {/* Perfect For Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Perfect For</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-medium text-gray-900">Data Analysis</h3>
              <p className="text-sm text-gray-600 mt-1">Import into analysis tools and databases</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-medium text-gray-900">Data Sharing</h3>
              <p className="text-sm text-gray-600 mt-1">Share data in universal text format</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-medium text-gray-900">Programming</h3>
              <p className="text-sm text-gray-600 mt-1">Use in scripts and applications</p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Preserves all data with proper formatting</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Supports large files up to 100MB</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Batch conversion for multiple files</span>
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Clean, readable text format</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Fast and secure conversion</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">No software installation required</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSVToTXTConverter;