import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Upload, Eye, Download, Share2, ArrowLeft, File, CheckCircle, AlertCircle } from 'lucide-react';
import { FileUpload } from '../FileUpload';
import { FileViewer } from '../FileViewer';
import { Header } from '../Header';
import { useFileValidation } from '../../hooks/useFileValidation';

export const PDFViewer: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [viewerFile, setViewerFile] = useState<File | null>(null);
  const { validateFiles, validationError } = useFileValidation();

  const handleFilesSelected = (files: File[]) => {
    // Filter only PDF files
    const pdfFiles = files.filter(file => {
      const extension = file.name.split('.').pop()?.toLowerCase();
      return extension === 'pdf';
    });
    
    const validation = validateFiles(pdfFiles);
    if (validation.isValid) {
      setSelectedFiles(pdfFiles);
    }
  };

  const handleDownload = (file: File) => {
    const url = URL.createObjectURL(file);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <Helmet>
        <title>PDF Viewer - View PDF Documents Online | MorphyIMG</title>
        <meta name="description" content="Professional PDF viewer for viewing PDF documents online. Upload and preview PDF files with high-quality rendering, zoom controls, and document navigation. Free PDF viewer tool." />
        <meta name="keywords" content="PDF viewer, view PDF online, PDF preview, PDF reader, document viewer, PDF viewer tool, online PDF viewer, PDF viewer free" />
        <meta property="og:title" content="PDF Viewer - View PDF Documents Online | MorphyIMG" />
        <meta property="og:description" content="Professional PDF viewer for viewing PDF documents online. Upload and preview PDF files with high-quality rendering and document navigation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://morphyimg.com/viewers/pdf" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PDF Viewer - View PDF Documents Online | MorphyIMG" />
        <meta name="twitter:description" content="Professional PDF viewer for viewing PDF documents online. Upload and preview PDF files with high-quality rendering and document navigation." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "PDF Viewer",
            "description": "Professional PDF viewer for viewing PDF documents online",
            "url": "https://morphyimg.com/viewers/pdf",
            "applicationCategory": "DocumentViewer",
            "operatingSystem": "Web Browser",
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
        <div className="bg-gradient-to-br from-red-50 via-white to-pink-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl shadow-lg">
                  <FileText className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                PDF Viewer
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Professional PDF viewer for viewing PDF documents online. Upload and preview PDF files 
                with high-quality rendering, zoom controls, and document navigation.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Upload Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Upload PDF Files
            </h2>
            <FileUpload 
              onFilesSelected={handleFilesSelected}
              acceptedFormats={['pdf']}
              maxFiles={20}
              maxSize={100}
              hideFormatList={true}
              showTotalSize={true}
            />
            
            {validationError && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                  <span className="text-red-700 text-sm">{validationError.message}</span>
                </div>
              </div>
            )}
          </div>

          {/* Preview Section */}
          {selectedFiles.length > 0 && (
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                PDF Files ({selectedFiles.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-red-100 rounded-lg">
                          <FileText className="w-6 h-6 text-red-600" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-800 truncate max-w-32">
                            {file.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </div>
                        </div>
                      </div>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                    
                    <div className="space-y-2">
                      <button
                        onClick={() => setViewerFile(file)}
                        className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white text-sm font-medium py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View PDF</span>
                      </button>
                      <button
                        onClick={() => handleDownload(file)}
                        className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Information Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              About PDF Viewer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">PDF Viewing Features</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• High-quality PDF rendering</li>
                  <li>• Zoom in/out controls</li>
                  <li>• Page navigation</li>
                  <li>• Full-screen viewing mode</li>
                  <li>• Document search functionality</li>
                  <li>• Print and download options</li>
                  <li>• Text selection and copying</li>
                  <li>• Bookmark navigation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Supported PDF Types</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Standard PDF documents</li>
                  <li>• PDF/A (archival format)</li>
                  <li>• PDF/X (print-ready format)</li>
                  <li>• Password-protected PDFs</li>
                  <li>• PDF forms and annotations</li>
                  <li>• Multi-page documents</li>
                  <li>• High-resolution PDFs</li>
                  <li>• Vector and raster content</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Back to Viewers Button */}
          <div className="text-center">
            <a
              href="/viewers"
              className="inline-block bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              ← Back to All Viewers
            </a>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">MorphyIMG</h2>
              </div>
              
              <p className="text-gray-300 mb-6">
                Professional PDF viewer for all your document viewing needs.
              </p>
              
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-300">
                <span>© 2025 MorphyIMG. Built for PDF professionals.</span>
              </div>
            </div>
          </div>
        </footer>

        {/* File Viewer Modal */}
        {viewerFile && (
          <FileViewer
            file={viewerFile}
            onClose={() => setViewerFile(null)}
          />
        )}
      </div>
    </>
  );
};