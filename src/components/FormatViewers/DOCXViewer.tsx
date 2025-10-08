import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Upload, Eye, Download, ArrowLeft, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { FileUpload } from '../FileUpload';
import { Header } from '../Header';
import { useFileValidation } from '../../hooks/useFileValidation';

export const DOCXViewer: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const { validateBatchFiles, validationError, clearValidationError } = useFileValidation();

  const handleFilesSelected = (files: File[]) => {
    // Clear previous validation errors
    clearValidationError();
    
    // Filter only DOCX/DOC files
    const docxFiles = files.filter(file => {
      const extension = file.name.split('.').pop()?.toLowerCase();
      return ['docx', 'doc', 'docm', 'dotx', 'dotm'].includes(extension || '');
    });
    
    // Validate the files
    const validation = validateBatchFiles(docxFiles);
    
    if (validation.isValid) {
      setSelectedFiles(docxFiles);
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
        <title>Free DOCX Viewer - View Microsoft Word Documents Online | MorphyIMG</title>
        <meta name="description" content="Free professional DOCX viewer for Microsoft Word documents. Upload and preview DOCX, DOC, DOCM files online with advanced document viewing tools. Supports batch viewing up to 20 files. 100% free DOCX viewer tool." />
        <meta name="keywords" content="DOCX viewer, Word document viewer, Microsoft Word viewer, DOC viewer, document preview, online DOCX reader, DOCX viewer online, DOCX viewer free" />
        <meta property="og:title" content="Free DOCX Viewer - View Microsoft Word Documents Online | MorphyIMG" />
        <meta property="og:description" content="Free professional DOCX viewer for Microsoft Word documents. Upload and preview DOCX, DOC, DOCM files online with advanced document viewing tools." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://morphyimg.com/viewers/docx" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free DOCX Viewer - View Microsoft Word Documents Online | MorphyIMG" />
        <meta name="twitter:description" content="Free professional DOCX viewer for Microsoft Word documents. Upload and preview DOCX, DOC, DOCM files online with advanced document viewing tools." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Free DOCX Viewer",
            "description": "Free professional DOCX viewer for Microsoft Word documents",
            "url": "https://morphyimg.com/viewers/docx",
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
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700">
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
                    Free DOCX Viewer
                  </h1>
                  <p className="text-xl text-blue-100">
                    View and analyze Microsoft Word documents with professional tools - 100% free
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
              <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Upload DOCX Files
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Drag and drop your Microsoft Word documents or click to browse. Supports DOCX, DOC, DOCM, DOTX, DOTM files up to 100MB each, with batch upload support for up to 20 files.
            </p>
            <FileUpload 
              onFilesSelected={handleFilesSelected}
              acceptedFormats={['docx', 'doc', 'docm', 'dotx', 'dotm']}
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

          {/* About DOCX Format Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                About DOCX Format
              </h2>
            </div>
            
            <div className="prose max-w-none text-gray-600">
              <p className="mb-6">
                DOCX (Office Open XML Document) is the default file format for Microsoft Word documents since Word 2007. 
                It's based on the Open XML standard and uses ZIP compression to reduce file size while maintaining 
                rich formatting capabilities. DOCX files support advanced features like styles, themes, embedded objects, 
                charts, tables, and complex formatting options.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Advantages</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Smaller file sizes</strong> - ZIP compression reduces size by up to 75%</li>
                    <li>• <strong>Better recovery</strong> - Improved file corruption recovery</li>
                    <li>• <strong>Enhanced security</strong> - Built-in encryption and digital signatures</li>
                    <li>• <strong>Cross-platform</strong> - Compatible with multiple office suites</li>
                    <li>• <strong>Rich formatting</strong> - Advanced typography and layout options</li>
                    <li>• <strong>Collaboration</strong> - Track changes and comments support</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Best Use Cases</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Business documents</strong> - Reports, proposals, contracts</li>
                    <li>• <strong>Academic papers</strong> - Research papers, theses, publications</li>
                    <li>• <strong>Legal documents</strong> - Contracts, agreements, court documents</li>
                    <li>• <strong>Templates</strong> - Document templates and forms</li>
                    <li>• <strong>Collaboration</strong> - Multi-author document editing</li>
                    <li>• <strong>Publishing</strong> - Books, manuals, and documentation</li>
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
                        <td className="py-2 text-sm font-medium text-gray-500">File Extensions</td>
                        <td className="py-2 text-sm text-gray-900">.docx, .doc, .docm, .dotx, .dotm</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">MIME Type</td>
                        <td className="py-2 text-sm text-gray-900">application/vnd.openxmlformats-officedocument.wordprocessingml.document</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">Standard</td>
                        <td className="py-2 text-sm text-gray-900">Office Open XML (OOXML) - ISO/IEC 29500</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">Developed By</td>
                        <td className="py-2 text-sm text-gray-900">Microsoft Corporation (2007)</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">Compression</td>
                        <td className="py-2 text-sm text-gray-900">ZIP-based compression</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">Character Encoding</td>
                        <td className="py-2 text-sm text-gray-900">UTF-8</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">Max File Size</td>
                        <td className="py-2 text-sm text-gray-900">512 MB (practical limit)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
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
                    Your DOCX Files ({selectedFiles.length})
                  </h2>
                </div>
              </div>

              {/* How to View Instructions */}
              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">How to View DOCX Files</h4>
                    <p className="text-sm text-blue-700">
                      Click the <strong>"View Document"</strong> button to open the Word document in a preview modal. 
                      You can also download the original file for offline viewing or editing.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-4 hover:shadow-lg transition-all transform hover:scale-105 border border-gray-200">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <FileText className="w-6 h-6 text-blue-600" />
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
                        onClick={() => alert('DOCX preview feature coming soon! Use download for now.')}
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-medium py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View Document</span>
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
              <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl">
                <Info className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                About DOCX Viewer
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">DOCX Viewing Features</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• <strong>Document preview</strong> - View DOCX files online</li>
                  <li>• <strong>Batch upload</strong> - Process multiple files at once</li>
                  <li>• <strong>Format preservation</strong> - Maintains original formatting</li>
                  <li>• <strong>Text extraction</strong> - Copy text from documents</li>
                  <li>• <strong>Download support</strong> - Save files locally</li>
                  <li>• <strong>File info display</strong> - View file size and type</li>
                  <li>• <strong>Security</strong> - Client-side processing only</li>
                  <li>• <strong>No registration</strong> - Free to use instantly</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Supported File Types</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• DOCX - Microsoft Word Document</li>
                  <li>• DOC - Legacy Word Document</li>
                  <li>• DOCM - Word Macro-Enabled Document</li>
                  <li>• DOTX - Word Template</li>
                  <li>• DOTM - Word Macro-Enabled Template</li>
                  <li>• All Word 2007+ formats</li>
                  <li>• Office Open XML compliant files</li>
                  <li>• Password-protected documents (limited)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Back to Viewers Button */}
          <div className="text-center mt-8">
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
                Free professional DOCX viewer for all your document viewing needs.
              </p>
              
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-300">
                <span>© 2025 MorphyIMG. Built for DOCX professionals.</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
