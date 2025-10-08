import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Upload, Eye, Download, ArrowLeft, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { FileUpload } from '../FileUpload';
import { Header } from '../Header';
import { useFileValidation } from '../../hooks/useFileValidation';

export const PDFViewer: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
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

  const handleViewPDF = (file: File) => {
    const url = URL.createObjectURL(file);
    // Open PDF in a new window with proper PDF viewer
    const newWindow = window.open('', '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes');
    if (newWindow) {
      newWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>${file.name}</title>
          <style>
            body { margin: 0; padding: 0; background: #f0f0f0; }
            .pdf-container { 
              width: 100vw; 
              height: 100vh; 
              display: flex; 
              flex-direction: column; 
            }
            .pdf-toolbar {
              background: #2c3e50;
              color: white;
              padding: 10px;
              display: flex;
              align-items: center;
              gap: 10px;
              box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            .pdf-toolbar button {
              background: #3498db;
              color: white;
              border: none;
              padding: 8px 16px;
              border-radius: 4px;
              cursor: pointer;
              font-size: 14px;
            }
            .pdf-toolbar button:hover {
              background: #2980b9;
            }
            .pdf-toolbar input {
              padding: 6px 12px;
              border: 1px solid #ddd;
              border-radius: 4px;
              font-size: 14px;
            }
            .pdf-viewer {
              flex: 1;
              background: white;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .pdf-embed {
              width: 100%;
              height: 100%;
              border: none;
            }
            .pdf-fallback {
              text-align: center;
              padding: 20px;
            }
            .pdf-fallback a {
              color: #3498db;
              text-decoration: none;
              font-weight: bold;
            }
            .pdf-fallback a:hover {
              text-decoration: underline;
            }
          </style>
        </head>
        <body>
          <div class="pdf-container">
            <div class="pdf-toolbar">
              <button onclick="window.print()">🖨️ Print</button>
              <button onclick="downloadPDF()">⬇️ Download</button>
              <button onclick="toggleFullscreen()">⛶ Fullscreen</button>
              <input type="text" id="searchInput" placeholder="Search in PDF..." onkeypress="handleSearch(event)">
              <button onclick="searchPDF()">🔍 Search</button>
              <span style="margin-left: auto; font-size: 14px;">${file.name}</span>
            </div>
            <div class="pdf-viewer">
              <embed src="${url}#toolbar=1&navpanes=1&scrollbar=1&page=1&view=FitH" 
                     type="application/pdf" 
                     class="pdf-embed"
                     onerror="showFallback()">
              <div class="pdf-fallback" id="fallback" style="display: none;">
                <h3>PDF Viewer Not Supported</h3>
                <p>Your browser doesn't support embedded PDF viewing.</p>
                <a href="${url}" target="_blank">Open PDF in new tab</a>
              </div>
            </div>
          </div>
          <script>
            function downloadPDF() {
              const a = document.createElement('a');
              a.href = '${url}';
              a.download = '${file.name}';
              a.click();
            }
            function toggleFullscreen() {
              if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
              } else {
                document.exitFullscreen();
              }
            }
            function handleSearch(event) {
              if (event.key === 'Enter') {
                searchPDF();
              }
            }
            function searchPDF() {
              const searchTerm = document.getElementById('searchInput').value;
              if (searchTerm) {
                // PDF search functionality
                const embed = document.querySelector('.pdf-embed');
                embed.src = embed.src.split('#')[0] + '#search=' + encodeURIComponent(searchTerm);
              }
            }
            function showFallback() {
              document.getElementById('fallback').style.display = 'block';
            }
            // Clean up URL when window closes
            window.addEventListener('beforeunload', function() {
              URL.revokeObjectURL('${url}');
            });
          </script>
        </body>
        </html>
      `);
      newWindow.document.close();
    }
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
        <div className="relative overflow-hidden bg-gradient-to-r from-red-600 via-pink-600 to-rose-700">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => window.location.href = '/viewers'}
                  className="p-2 text-white/80 hover:text-white hover:bg-white/20 rounded-lg transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                  <FileText className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    PDF Viewer
                  </h1>
                  <p className="text-xl text-red-100">
                    View and analyze PDF documents with professional tools
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Upload Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Upload PDF Files
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Drag and drop your PDF documents or click to browse. Supports .pdf files up to 100MB each.
            </p>
            <FileUpload 
              onFilesSelected={handleFilesSelected}
              acceptedFormats={['pdf']}
              maxFiles={20}
              maxSize={100 * 1024 * 1024}
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
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Your PDF Files ({selectedFiles.length})
                  </h2>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-red-50 rounded-xl p-4 hover:shadow-lg transition-all transform hover:scale-105 border border-gray-200">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-red-100 rounded-lg">
                        <FileText className="w-6 h-6 text-red-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-gray-800 truncate">
                          {file.name}
                        </h3>
                        <p className="text-xs text-gray-500">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <button
                        onClick={() => handleViewPDF(file)}
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
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl">
                <Info className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                About PDF Viewer
              </h2>
            </div>
            
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

      </div>
    </>
  );
};