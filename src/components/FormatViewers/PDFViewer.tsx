import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Upload, Eye, Download, ArrowLeft, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { FileUpload } from '../FileUpload';
import { Header } from '../Header';
import { useFileValidation } from '../../hooks/useFileValidation';

export const PDFViewer: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const { validateBatchFiles, validationError, clearValidationError } = useFileValidation();

  const handleFilesSelected = (files: File[]) => {
    // Clear previous validation errors
    clearValidationError();
    
    // Filter only PDF files
    const pdfFiles = files.filter(file => {
      const extension = file.name.split('.').pop()?.toLowerCase();
      return extension === 'pdf';
    });
    
    // Validate the files
    const validation = validateBatchFiles(pdfFiles);
    
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
    // Check file size (max 100MB for preview)
    const maxSize = 100 * 1024 * 1024; // 100MB
    if (file.size > maxSize) {
      alert(`File is too large for preview (${(file.size / 1024 / 1024).toFixed(2)} MB). Maximum size is 100 MB. Please download the file instead.`);
      return;
    }
    
    const url = URL.createObjectURL(file);
    // Open PDF directly in new tab with browser's native PDF viewer
    const newWindow = window.open(url, '_blank');
    
    // Clean up the URL after a delay to allow the browser to load it
    if (newWindow) {
      setTimeout(() => {
        URL.revokeObjectURL(url);
      }, 1000);
    }
  };

  return (
    <>
      <Helmet>
        <title>Free PDF Viewer - View PDF Documents Online | MorphyIMG</title>
        <meta name="description" content="Free professional PDF viewer for viewing PDF documents online. Upload and preview PDFs with search, zoom, full-screen mode, and navigation tools. Supports batch viewing up to 20 files. 100% free PDF viewer tool." />
        <meta name="keywords" content="PDF viewer, view PDF online, PDF preview, PDF reader, document viewer, PDF viewer tool, online PDF viewer, PDF viewer free, PDF search" />
        <meta property="og:title" content="Free PDF Viewer - View PDF Documents Online | MorphyIMG" />
        <meta property="og:description" content="Free professional PDF viewer for viewing PDF documents online. Upload and preview PDF files with high-quality rendering and document navigation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://morphyimg.com/viewers/pdf" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free PDF Viewer - View PDF Documents Online | MorphyIMG" />
        <meta name="twitter:description" content="Free professional PDF viewer for viewing PDF documents online. Upload and preview PDF files with high-quality rendering and document navigation." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Free PDF Viewer",
            "description": "Free professional PDF viewer for viewing PDF documents online",
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
                    Free PDF Viewer
                  </h1>
                  <p className="text-xl text-red-100">
                    View, analyze, and manage PDF documents with professional tools - 100% free
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
              Drag and drop your PDF documents or click to browse. View PDFs with search, zoom, and navigation tools. 
              Supports .pdf files up to 100MB each, with batch upload support for up to 20 files.
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

              {/* How to View Instructions */}
              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">How to View PDFs</h4>
                    <p className="text-sm text-blue-700">
                      Click the <strong>"View PDF"</strong> button to open the document in a professional viewer with search, 
                      zoom, print, and full-screen capabilities. The viewer opens in a new window for the best experience.
                    </p>
                  </div>
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

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl shadow-lg p-8 border border-red-200 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="bg-white p-3 rounded-xl w-fit mb-4">
                <FileText className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Universal Compatibility
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Works seamlessly on all platforms, devices, and operating systems without requiring special software - true document portability
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-8 border border-blue-200 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="bg-white p-3 rounded-xl w-fit mb-4">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Preserved Formatting
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Maintains exact layout, fonts, images, and formatting across all devices - what you see is what you get everywhere
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-lg p-8 border border-green-200 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="bg-white p-3 rounded-xl w-fit mb-4">
                <FileText className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Advanced Security
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Built-in encryption, password protection, and digital signatures keep your documents secure and tamper-proof
              </p>
            </div>
          </div>

          {/* About PDF Format Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                About PDF Format
              </h2>
            </div>
            
            <div className="prose max-w-none text-gray-600">
              <p className="mb-6">
                PDF (Portable Document Format) is a file format developed by Adobe in 1993 for presenting documents 
                in a manner independent of application software, hardware, and operating systems. Each PDF file 
                encapsulates a complete description of a fixed-layout flat document, including text, fonts, vector 
                graphics, raster images, and other information needed to display it.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Advantages</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Universal compatibility</strong> - Works on all platforms and devices</li>
                    <li>• <strong>Preserved formatting</strong> - Maintains exact layout and fonts</li>
                    <li>• <strong>Security features</strong> - Password protection and encryption</li>
                    <li>• <strong>Compact file size</strong> - Efficient compression algorithms</li>
                    <li>• <strong>Interactive elements</strong> - Forms, hyperlinks, and multimedia</li>
                    <li>• <strong>Professional standard</strong> - Industry-standard for documents</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Best Use Cases</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Business documents</strong> - Contracts, invoices, reports</li>
                    <li>• <strong>Academic papers</strong> - Research papers, theses, publications</li>
                    <li>• <strong>eBooks and manuals</strong> - Technical documentation, guides</li>
                    <li>• <strong>Forms and applications</strong> - Fillable forms, job applications</li>
                    <li>• <strong>Archival storage</strong> - Long-term document preservation</li>
                    <li>• <strong>Print-ready files</strong> - High-quality printing materials</li>
                  </ul>
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Technical Specifications</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">File Extension</td>
                        <td className="py-2 text-sm text-gray-900">.pdf</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">MIME Type</td>
                        <td className="py-2 text-sm text-gray-900">application/pdf</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">Developed By</td>
                        <td className="py-2 text-sm text-gray-900">Adobe Systems (1993)</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">Current Standard</td>
                        <td className="py-2 text-sm text-gray-900">PDF 2.0 (ISO 32000-2:2020)</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">Compression</td>
                        <td className="py-2 text-sm text-gray-900">Multiple algorithms (ZIP, JPEG, JBIG2)</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">Security</td>
                        <td className="py-2 text-sm text-gray-900">Password protection, 256-bit AES encryption</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">Metadata Support</td>
                        <td className="py-2 text-sm text-gray-900">XMP, Dublin Core, custom properties</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
              Free professional PDF viewer for all your document viewing needs.
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