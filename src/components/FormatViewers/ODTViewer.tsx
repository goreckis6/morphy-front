import React, { useState } from 'react';
import { FileText, Upload, Eye, Download, Share2, ArrowLeft } from 'lucide-react';
import { FileUpload } from '../FileUpload';
import { FileViewer } from '../FileViewer';
import { Header } from '../Header';
import { Helmet } from 'react-helmet-async';

export const ODTViewer: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [viewerFile, setViewerFile] = useState<File | null>(null);

  const handleFilesSelected = (files: File[]) => {
    // Filter only ODT files
    const odtFiles = files.filter(file => {
      const extension = file.name.split('.').pop()?.toLowerCase();
      return extension === 'odt';
    });
    setSelectedFiles(odtFiles);
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

  const handleShare = async (file: File) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: file.name,
          text: `Check out this ODT document: ${file.name}`,
          files: [file]
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy filename to clipboard
      navigator.clipboard.writeText(file.name);
      alert('Filename copied to clipboard!');
    }
  };

  return (
    <>
      <Helmet>
        <title>ODT Viewer - View OpenDocument Text Files Online | MorphyIMG</title>
        <meta name="description" content="Professional ODT viewer for viewing OpenDocument Text files online. Upload and preview ODT documents with our free, secure viewer tool." />
        <meta name="keywords" content="ODT viewer, OpenDocument Text, document viewer, ODT preview, online ODT viewer, document processing" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="ODT Viewer - View OpenDocument Text Files Online" />
        <meta property="og:description" content="Professional ODT viewer for viewing OpenDocument Text files online. Upload and preview ODT documents with our free, secure viewer tool." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://morphyimg.com/viewers/odt" />
        <meta property="og:image" content="https://morphyimg.com/og-odt-viewer.jpg" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ODT Viewer - View OpenDocument Text Files Online" />
        <meta name="twitter:description" content="Professional ODT viewer for viewing OpenDocument Text files online. Upload and preview ODT documents with our free, secure viewer tool." />
        <meta name="twitter:image" content="https://morphyimg.com/og-odt-viewer.jpg" />
        
        {/* JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "ODT Viewer",
            "description": "Professional ODT viewer for viewing OpenDocument Text files online",
            "url": "https://morphyimg.com/viewers/odt",
            "applicationCategory": "DocumentViewer",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "creator": {
              "@type": "Organization",
              "name": "MorphyIMG"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                  <FileText className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                ODT Viewer
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Professional OpenDocument Text viewer for viewing ODT files online. 
                Upload and preview your documents with our secure, free viewer tool.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-white/80">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-white/60 rounded-full mr-2"></span>
                  Free to use
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-white/60 rounded-full mr-2"></span>
                  Secure processing
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-white/60 rounded-full mr-2"></span>
                  No registration required
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Upload Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Upload ODT Files
            </h2>
            <FileUpload 
              onFilesSelected={handleFilesSelected}
              acceptedFormats={['odt']}
              maxFiles={20}
              maxSize={100 * 1024 * 1024} // 100MB
              hideFormatList={true}
              showTotalSize={true}
            />
          </div>

          {/* Preview Section */}
          {selectedFiles.length > 0 && (
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Preview ODT Files ({selectedFiles.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-orange-50 to-amber-50">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-orange-100 rounded-xl">
                        <FileText className="w-8 h-8 text-orange-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-800 truncate mb-2">
                          {file.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                          {(file.size / 1024 / 1024).toFixed(2)} MB • ODT Document
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <button
                            onClick={() => setViewerFile(file)}
                            className="bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors flex items-center space-x-2"
                          >
                            <Eye className="w-4 h-4" />
                            <span>View</span>
                          </button>
                          <button
                            onClick={() => handleDownload(file)}
                            className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors flex items-center space-x-2"
                          >
                            <Download className="w-4 h-4" />
                            <span>Download</span>
                          </button>
                          <button
                            onClick={() => handleShare(file)}
                            className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors flex items-center space-x-2"
                          >
                            <Share2 className="w-4 h-4" />
                            <span>Share</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Information Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">About ODT Format</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">What is ODT?</h3>
                <p className="text-gray-600 mb-4">
                  OpenDocument Text (ODT) is an open standard document format used by LibreOffice Writer, 
                  OpenOffice Writer, and other word processors. It's part of the OpenDocument family of 
                  standards and provides a free alternative to proprietary document formats.
                </p>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Features:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Open standard format</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Rich text formatting support</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Cross-platform compatibility</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>XML-based structure</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Details</h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <table className="w-full">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">File Extension</td>
                        <td className="py-2 text-sm text-gray-900">.odt</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">MIME Type</td>
                        <td className="py-2 text-sm text-gray-900">application/vnd.oasis.opendocument.text</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">Standard</td>
                        <td className="py-2 text-sm text-gray-900">ISO/IEC 26300</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">Format Type</td>
                        <td className="py-2 text-sm text-gray-900">Document format</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">Structure</td>
                        <td className="py-2 text-sm text-gray-900">ZIP archive with XML files</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Best Use Cases</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-600">
                  <li>• Academic documents and reports</li>
                  <li>• Business correspondence</li>
                  <li>• Technical documentation</li>
                  <li>• Cross-platform document sharing</li>
                </ul>
                <ul className="space-y-2 text-gray-600">
                  <li>• Open source projects</li>
                  <li>• Government documents</li>
                  <li>• Educational materials</li>
                  <li>• Collaborative writing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Back to Viewers Button */}
          <div className="text-center">
            <a
              href="/viewers"
              className="inline-block bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
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
                <div className="p-2 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">MorphyIMG</h2>
              </div>
              
              <p className="text-gray-300 mb-6">
                Professional ODT viewer for all your document processing needs.
              </p>
              
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-300">
                <span>© 2025 MorphyIMG. Built for ODT professionals.</span>
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