import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Upload, Eye, Download, ArrowLeft, File } from 'lucide-react';
import { FileUpload } from '../FileUpload';
import { FileViewer } from '../FileViewer';

export const DOCXViewer: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [viewerFile, setViewerFile] = useState<File | null>(null);

  const handleFilesSelected = (files: File[]) => {
    // Filter only DOCX files
    const docxFiles = files.filter(file => {
      const extension = file.name.split('.').pop()?.toLowerCase();
      return ['docx', 'doc', 'docm', 'dotx', 'dotm'].includes(extension || '');
    });
    setSelectedFiles(docxFiles);
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
        <title>DOCX Viewer - View Microsoft Word Documents Online | MorphyIMG</title>
        <meta name="description" content="Professional DOCX viewer for Microsoft Word documents. Upload and preview DOCX, DOC, DOCM, DOTX, and DOTM files online with our advanced document viewer." />
        <meta name="keywords" content="DOCX viewer, Word document viewer, Microsoft Word, DOC viewer, document preview, online DOCX reader, DOCX viewer online" />
        <meta property="og:title" content="DOCX Viewer - View Microsoft Word Documents Online" />
        <meta property="og:description" content="Professional DOCX viewer for Microsoft Word documents. Upload and preview DOCX, DOC, DOCM, DOTX, and DOTM files online." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://morphyimg.com/viewers/docx" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DOCX Viewer - View Microsoft Word Documents Online" />
        <meta name="twitter:description" content="Professional DOCX viewer for Microsoft Word documents. Upload and preview DOCX, DOC, DOCM, DOTX, and DOTM files online." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "DOCX Viewer",
            "description": "Professional DOCX viewer for Microsoft Word documents. Upload and preview DOCX, DOC, DOCM, DOTX, and DOTM files online.",
            "url": "https://morphyimg.com/viewers/docx",
            "applicationCategory": "Document Viewer",
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
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                  <FileText className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                DOCX Viewer
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Professional Microsoft Word document viewer. Upload and preview DOCX, DOC, DOCM, DOTX, and DOTM files online.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-white/20 px-3 py-1 rounded-full">✓ DOCX Support</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">✓ DOC Support</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">✓ DOCM Support</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">✓ DOTX Support</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">✓ DOTM Support</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Upload Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Upload DOCX Documents
              </h2>
              <p className="text-lg text-gray-600">
                Drag and drop your Microsoft Word documents or click to browse
              </p>
            </div>
            
            <FileUpload 
              onFilesSelected={handleFilesSelected}
              acceptedFormats={['docx', 'doc', 'docm', 'dotx', 'dotm']}
              maxFiles={20}
              maxSize={100 * 1024 * 1024} // 100MB
              hideFormatList={true}
              showTotalSize={true}
            />
          </div>

          {/* Preview Section */}
          {selectedFiles.length > 0 && (
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Selected Documents ({selectedFiles.length})
                </h2>
              </div>
              
              <div className="grid gap-4">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-blue-100 rounded-xl">
                          <FileText className="w-8 h-8 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">
                            {file.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {(file.size / 1024 / 1024).toFixed(2)} MB • {file.name.split('.').pop()?.toUpperCase()} Document
                          </p>
                        </div>
                      </div>
                      <div className="flex space-x-3">
                        <button
                          onClick={() => setViewerFile(file)}
                          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
                        >
                          <Eye className="w-5 h-5" />
                          <span>View Document</span>
                        </button>
                        <button
                          onClick={() => handleDownload(file)}
                          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
                        >
                          <Download className="w-5 h-5" />
                          <span>Download</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Information Sections */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* About DOCX */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FileText className="w-6 h-6 text-blue-600 mr-3" />
                About DOCX Format
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  DOCX (Office Open XML Document) is the default file format for Microsoft Word documents since Word 2007. 
                  It's based on the Open XML standard and uses ZIP compression to reduce file size while maintaining 
                  rich formatting capabilities.
                </p>
                <p>
                  DOCX files support advanced features like styles, themes, embedded objects, charts, tables, 
                  and complex formatting options, making them ideal for professional document creation and collaboration.
                </p>
              </div>
            </div>

            {/* Technical Specs */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <File className="w-6 h-6 text-blue-600 mr-3" />
                Technical Specifications
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-semibold text-gray-700">File Extensions</span>
                  <span className="text-gray-600 font-mono text-sm">.docx, .doc, .docm, .dotx, .dotm</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-semibold text-gray-700">MIME Type</span>
                  <span className="text-gray-600 font-mono text-sm">application/vnd.openxmlformats-officedocument.wordprocessingml.document</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-semibold text-gray-700">Standard</span>
                  <span className="text-gray-600">Office Open XML (OOXML)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-semibold text-gray-700">Compression</span>
                  <span className="text-gray-600">ZIP-based compression</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-semibold text-gray-700">Max File Size</span>
                  <span className="text-gray-600">512 MB (practical limit)</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-semibold text-gray-700">Character Encoding</span>
                  <span className="text-gray-600">UTF-8</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Key Features of DOCX
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Smaller File Sizes</h4>
                <p className="text-sm text-gray-600">ZIP compression reduces file size by up to 75% compared to legacy DOC format</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Better Recovery</h4>
                <p className="text-sm text-gray-600">Improved file corruption recovery capabilities with modular structure</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Enhanced Security</h4>
                <p className="text-sm text-gray-600">Built-in encryption and digital signature support for document protection</p>
              </div>
              <div className="text-center p-6 bg-orange-50 rounded-xl">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Cross-Platform</h4>
                <p className="text-sm text-gray-600">Compatible with multiple office suites and operating systems</p>
              </div>
              <div className="text-center p-6 bg-red-50 rounded-xl">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Rich Formatting</h4>
                <p className="text-sm text-gray-600">Advanced typography and layout options for professional documents</p>
              </div>
              <div className="text-center p-6 bg-indigo-50 rounded-xl">
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Collaboration</h4>
                <p className="text-sm text-gray-600">Track changes and comments support for team collaboration</p>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Best Use Cases for DOCX
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Business Documents</h4>
                <p className="text-gray-600">Reports, proposals, contracts, and official correspondence</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Academic Papers</h4>
                <p className="text-gray-600">Research papers, theses, dissertations, and academic publications</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Legal Documents</h4>
                <p className="text-gray-600">Contracts, agreements, legal briefs, and court documents</p>
              </div>
            </div>
          </div>

          {/* Back to Viewers Button */}
          <div className="text-center">
            <a
              href="/viewers"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
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
                <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">MorphyIMG</h2>
              </div>
              
              <p className="text-gray-300 mb-6">
                Professional DOCX viewer for all your document processing needs.
              </p>
              
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-300">
                <span>© 2025 MorphyIMG. Built for DOCX professionals.</span>
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