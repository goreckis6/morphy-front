import React, { useState, useRef } from 'react';
import { useFileValidation } from '../../hooks/useFileValidation';
import { convertFile, convertBatch } from '../../services/api';
import { handleBatchDownload } from '../../utils/downloadUtils';
import { formatFileSize, getBatchSizeDisplay } from '../../utils/fileUtils';

const CSVToTXTConverter: React.FC = () => {
  const [isConverting, setIsConverting] = useState(false);
  const [isBatchConverting, setIsBatchConverting] = useState(false);
  const [convertedFile, setConvertedFile] = useState<{ url: string; filename: string; size: number } | null>(null);
  const [batchConverted, setBatchConverted] = useState<Array<{ url: string; filename: string; size: number }>>([]);
  const [error, setError] = useState<string | null>(null);
  const [batchError, setBatchError] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [batchDragActive, setBatchDragActive] = useState(false);
  const [batchFiles, setBatchFiles] = useState<File[]>([]);
  const [batchTotalSize, setBatchTotalSize] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const batchFileInputRef = useRef<HTMLInputElement>(null);

  const {
    validateFile,
    validateBatchFiles,
    fileError,
    batchError: batchValidationError,
    clearErrors
  } = useFileValidation();

  const handleFileSelect = (file: File) => {
    clearErrors();
    const validation = validateFile(file);
    if (!validation.isValid) {
      setError(validation.error || 'Invalid file');
      return;
    }
    setError(null);
    setConvertedFile(null);
  };

  const handleBatchFileSelect = (files: File[]) => {
    clearErrors();
    const validation = validateBatchFiles(files);
    if (!validation.isValid) {
      setBatchError(validation.error || 'Invalid files');
      return;
    }
    setBatchError(null);
    setBatchConverted([]);
    setBatchFiles(files);
    const totalSize = files.reduce((sum, file) => sum + file.size, 0);
    setBatchTotalSize(totalSize);
  };

  const handleConvert = async (file: File) => {
    setIsConverting(true);
    setError(null);
    setConvertedFile(null);

    try {
      const result = await convertFile(file, 'txt');
      setConvertedFile({
        url: result.downloadPath,
        filename: result.filename,
        size: result.size
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Conversion failed');
    } finally {
      setIsConverting(false);
    }
  };

  const handleBatchConvert = async () => {
    if (batchFiles.length === 0) return;

    setIsBatchConverting(true);
    setBatchError(null);
    setBatchConverted([]);

    try {
      const results = await convertBatch(batchFiles, 'txt');
      const convertedFiles = results.map((result, index) => ({
        url: result.downloadPath,
        filename: result.filename,
        size: result.size
      }));
      setBatchConverted(convertedFiles);
    } catch (err) {
      setBatchError(err instanceof Error ? err.message : 'Batch conversion failed');
    } finally {
      setIsBatchConverting(false);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleBatchDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setBatchDragActive(true);
    } else if (e.type === "dragleave") {
      setBatchDragActive(false);
    }
  };

  const handleBatchDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setBatchDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const files = Array.from(e.dataTransfer.files);
      handleBatchFileSelect(files);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelect(e.target.files[0]);
    }
  };

  const handleBatchFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const files = Array.from(e.target.files);
      handleBatchFileSelect(files);
    }
  };

  const resetForm = () => {
    setConvertedFile(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const resetBatchForm = () => {
    setBatchConverted([]);
    setBatchError(null);
    setBatchFiles([]);
    setBatchTotalSize(0);
    if (batchFileInputRef.current) {
      batchFileInputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Single File Conversion */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Single File Conversion</h2>
          
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              dragActive
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-300 hover:border-gray-400'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".csv"
              onChange={handleFileInputChange}
              className="hidden"
            />
            <div className="space-y-4">
              <div className="mx-auto w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <div>
                <p className="text-lg font-medium text-gray-900">
                  Drop your CSV file here, or click to browse
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Single file limit: 100.00 MB per file.
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

          {fileError && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-sm text-red-600">{fileError}</p>
            </div>
          )}

          {error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          {fileInputRef.current?.files && fileInputRef.current.files[0] && (
            <div className="mt-4 p-4 bg-gray-50 rounded-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {fileInputRef.current.files[0].name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {formatFileSize(fileInputRef.current.files[0].size)}
                  </p>
                </div>
                <button
                  onClick={() => handleConvert(fileInputRef.current!.files![0])}
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
                    {convertedFile.filename} ({formatFileSize(convertedFile.size)})
                  </p>
                </div>
                <div className="space-x-2">
                  <a
                    href={convertedFile.url}
                    download={convertedFile.filename}
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    Download
                  </a>
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

        {/* Batch File Conversion */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Batch File Conversion</h2>
          
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              batchDragActive
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-300 hover:border-gray-400'
            }`}
            onDragEnter={handleBatchDrag}
            onDragLeave={handleBatchDrag}
            onDragOver={handleBatchDrag}
            onDrop={handleBatchDrop}
          >
            <input
              ref={batchFileInputRef}
              type="file"
              accept=".csv"
              multiple
              onChange={handleBatchFileInputChange}
              className="hidden"
            />
            <div className="space-y-4">
              <div className="mx-auto w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <div>
                <p className="text-lg font-medium text-gray-900">
                  Drop your CSV files here, or click to browse
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Batch conversion supports up to 20 files, 100.00 MB per file, 100.00 MB total.
                </p>
              </div>
              <button
                onClick={() => batchFileInputRef.current?.click()}
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
                  {getBatchSizeDisplay(batchTotalSize, 100 * 1024 * 1024)}
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
                disabled={isBatchConverting}
                className="mt-4 w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                {isBatchConverting ? 'Converting...' : 'Convert All to TXT'}
              </button>
            </div>
          )}

          {batchValidationError && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-sm text-red-600">{batchValidationError}</p>
            </div>
          )}

          {batchError && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-sm text-red-600">{batchError}</p>
            </div>
          )}

          {batchConverted.length > 0 && (
            <div className="mt-4 space-y-3">
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium text-green-900">
                  Batch conversion successful! ({batchConverted.length} files)
                </p>
                <button
                  onClick={resetBatchForm}
                  className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Convert More Files
                </button>
              </div>
              <div className="space-y-2">
                {batchConverted.map((file, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-green-50 border border-green-200 rounded-md">
                    <div>
                      <p className="text-sm font-medium text-green-900">{file.filename}</p>
                      <p className="text-sm text-green-700">{formatFileSize(file.size)}</p>
                    </div>
                    <a
                      href={file.url}
                      download={file.filename}
                      className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                      Download
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

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
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900">Data Analysis</h3>
              <p className="text-sm text-gray-600 mt-1">Import into analysis tools and databases</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900">Data Sharing</h3>
              <p className="text-sm text-gray-600 mt-1">Share data in universal text format</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m-4 16a2 2 0 01-2-2V6a2 2 0 012-2h4a2 2 0 012 2v12a2 2 0 01-2 2h-4a2 2 0 01-2-2z" />
                </svg>
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
                <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Preserves all data with proper formatting</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Supports large files up to 100MB</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Batch conversion for multiple files</span>
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Clean, readable text format</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Fast and secure conversion</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
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