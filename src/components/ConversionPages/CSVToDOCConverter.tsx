import React from 'react';
import { apiService } from '../../services/api';
import { useCsvConversion } from '../../hooks/useCsvConversion';
import { Header } from '../Header';
import {
  Upload,
  Download,
  FileText,
  RefreshCw,
  CheckCircle,
  AlertCircle,
  Zap,
  Shield,
  Clock,
  Star,
  Table,
  BarChart3
} from 'lucide-react';

export const CSVToDOCConverter: React.FC = () => {
  const {
    selectedFile,
    convertedFile,
    convertedFilename,
    isConverting,
    error,
    setError,
    validationError,
    previewUrl,
    batchMode,
    setBatchMode,
    batchFiles,
    batchResults,
    fileInputRef,
    getSingleInfoMessage,
    getBatchInfoMessage,
    getBatchSizeDisplay,
    handleFileSelect,
    handleBatchFileSelect,
    handleSingleConvert,
    handleBatchConvert,
    handleDownload,
    resetForm
  } = useCsvConversion({ targetFormat: 'doc' });
  const handleBack = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />
      
      {/* Hero Section - Narrowed */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              CSV to DOC Converter
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
              Convert CSV files to Microsoft Word DOC format. Transform tabular data into formatted documents for reports and presentations with professional styling.
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
                  <p className="text-sm text-blue-600 mb-4">{getBatchInfoMessage()}</p>
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
                      <Table className="w-12 h-12 text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-600 mt-2 text-center">
                      {selectedFile?.name} ({(selectedFile?.size || 0) / 1024} KB)
                    </p>
                  </div>
                </div>
              )}

              {/* Batch Files List */}
              {batchMode && batchFiles.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-4">Selected Files ({batchFiles.length})</h4>
                  {(() => {
                    const totalSize = batchFiles.reduce((s, f) => s + f.size, 0);
                    const sizeDisplay = getBatchSizeDisplay(totalSize);
                    return (
                      <div className="flex items-center justify-between text-sm font-medium mb-2">
                        <span className="text-gray-600">Total size</span>
                        <span className={`ml-3 ${sizeDisplay.isWarning ? 'text-blue-700' : 'text-gray-600'}`}>{sizeDisplay.text}</span>
                      </div>
                    );
                  })()}
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {batchFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                        <span className="text-sm font-medium">{file.name}</span>
                        <span className="text-xs text-gray-500">{(file.size / 1024).toFixed(1)} KB</span>
                      </div>
                    ))}
                  </div>
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
                      <Zap className="w-5 h-5 mr-2" />
                      {batchMode ? `Convert ${batchFiles.length} Files` : 'Convert to DOC'}
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
                    Your CSV file has been successfully converted to DOC format.
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

              {/* Batch Results */}
              {batchMode && batchResults.length > 0 && (
                <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <h4 className="text-lg font-semibold text-green-800">Batch Conversion Complete</h4>
                  </div>
                  <div className="space-y-2 max-h-60 overflow-y-auto">
                    {batchResults.map((r, idx) => (
                      <div key={idx} className="flex items-center justify-between bg-white rounded-lg p-3 border border-green-100">
                        <div className="text-sm">
                          <div className="font-medium text-gray-900">{r.outputFilename || r.originalName.replace(/\.[^.]+$/, '.doc')}</div>
                          {!r.success && <div className="text-xs text-red-600">{r.error}</div>}
                        </div>
                        {r.success && r.downloadPath && (
                          <button
                            onClick={() => apiService.downloadFile((r as any).storedFilename || decodeURIComponent(r.downloadPath!.replace('/download/', '')), r.outputFilename)}
                            className="bg-green-600 text-white px-3 py-2 rounded-md text-sm hover:bg-green-700"
                          >
                            Download
                          </button>
                        )}
                      </div>
                    ))}
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
                  "Table formatting and styling",
                  "Professional document layout",
                  "Microsoft Word compatibility",
                  "Customizable formatting options",
                  "Batch conversion support",
                  "High-quality output"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
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
            Why Convert CSV to DOC?
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Converting CSV files to Microsoft Word DOC format is essential for report generation, data presentation, and professional documentation. While CSV files are excellent for data storage and analysis, DOC format provides professional formatting, table styling, and document layout capabilities that are essential for business reports, academic papers, and client deliverables.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Key Benefits of DOC Format</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-blue-900 mb-3">Professional Formatting</h4>
                <p className="text-gray-700">
                  DOC format provides professional table formatting, styling options, and document layout capabilities that make your data presentation look polished and professional.
                </p>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-indigo-900 mb-3">Microsoft Word Compatibility</h4>
                <p className="text-gray-700">
                  DOC files are fully compatible with Microsoft Word and other word processors, ensuring your documents can be opened, edited, and shared across different platforms.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-purple-900 mb-3">Table Styling Options</h4>
                <p className="text-gray-700">
                  DOC format offers various table styling options including borders, colors, fonts, and layouts that enhance the visual presentation of your tabular data.
                </p>
              </div>
              
              <div className="bg-violet-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-violet-900 mb-3">Document Management</h4>
                <p className="text-gray-700">
                  DOC format integrates seamlessly with document management systems, making it easy to organize, archive, and retrieve your converted documents.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Common Use Cases</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Report Generation</h4>
                  <p className="text-gray-700">Convert CSV data to DOC format for comprehensive business reports, financial summaries, and analytical documents with professional formatting.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Data Presentation</h4>
                  <p className="text-gray-700">Transform raw CSV data into well-formatted DOC documents for presentations, meetings, and stakeholder communications.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Business Documentation</h4>
                  <p className="text-gray-700">Create professional business documents by converting CSV data to DOC format for contracts, proposals, and official communications.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-violet-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Academic Papers</h4>
                  <p className="text-gray-700">Convert research data from CSV to DOC format for academic papers, theses, and research reports with proper formatting and citations.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Convert Your CSV Files?</h3>
              <p className="text-lg mb-6 opacity-90">
                Use our free online CSV to DOC converter to transform your tabular data into professional Word documents.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Converting Now
                </button>
                <button
                  onClick={handleBack}
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
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
  );
};
