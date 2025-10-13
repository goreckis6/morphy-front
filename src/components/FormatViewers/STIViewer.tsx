import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Upload, Eye, Download, ArrowLeft, CheckCircle, AlertCircle, Info, Zap, Presentation, FileSlides } from 'lucide-react';
import { FileUpload } from '../FileUpload';
import { Header } from '../Header';
import { useFileValidation } from '../../hooks/useFileValidation';

export const STIViewer: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const { validateBatchFiles, validationError, clearValidationError } = useFileValidation();

  const handleFilesSelected = (files: File[]) => {
    clearValidationError();
    
    // Filter only STI files
    const stiFiles = files.filter(file => {
      const extension = file.name.split('.').pop()?.toLowerCase();
      return extension === 'sti';
    });
    
    const validation = validateBatchFiles(stiFiles);
    
    if (validation.isValid) {
      setSelectedFiles(stiFiles);
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

  const handleViewSTI = async (file: File) => {
    // Check file size (max 100MB for preview)
    const maxSize = 100 * 1024 * 1024; // 100MB
    if (file.size > maxSize) {
      alert(`File is too large for preview (${(file.size / 1024 / 1024).toFixed(2)} MB). Maximum size is 100 MB. Please download the file instead.`);
      return;
    }
    
    try {
      const loadingWindow = window.open('', '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes');
      if (!loadingWindow) {
        alert('Please allow pop-ups to view the STI file');
        return;
      }

      loadingWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Loading ${file.name}...</title>
          <style>
            body {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              font-family: Arial, sans-serif;
              background: #1e293b;
              margin: 0;
            }
            .loader {
              text-align: center;
            }
            .spinner {
              border: 4px solid #475569;
              border-top: 4px solid #14b8a6;
              border-radius: 50%;
              width: 50px;
              height: 50px;
              animation: spin 1s linear infinite;
              margin: 0 auto 20px;
            }
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            h2, p { color: white; }
          </style>
        </head>
        <body>
          <div class="loader">
            <div class="spinner"></div>
            <h2>Loading ${file.name}...</h2>
            <p>Converting StarOffice template for preview...</p>
          </div>
        </body>
        </html>
      `);

      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('https://morphy-2-n2tb.onrender.com/api/preview/sti', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        const htmlContent = data.htmlContent;
        
        loadingWindow.document.open();
        loadingWindow.document.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>${file.name} - StarOffice Template Preview</title>
            <style>
              body {
                margin: 0;
                padding: 0;
                background: #f5f5f5;
                font-family: Arial, sans-serif;
              }
              .header-bar {
                background: linear-gradient(to right, #14b8a6, #0d9488);
                color: white;
                padding: 15px 30px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                position: sticky;
                top: 0;
                z-index: 1000;
              }
              .header-title {
                font-size: 18px;
                font-weight: 600;
              }
              .header-actions {
                display: flex;
                gap: 10px;
              }
              .btn {
                padding: 8px 20px;
                border: none;
                border-radius: 6px;
                font-size: 14px;
                font-weight: 500;
                cursor: pointer;
                display: inline-flex;
                align-items: center;
                gap: 8px;
                transition: all 0.2s;
              }
              .btn-print {
                background: white;
                color: #14b8a6;
              }
              .btn-print:hover {
                background: #ccfbf1;
              }
              .btn-close {
                background: rgba(255,255,255,0.2);
                color: white;
              }
              .btn-close:hover {
                background: rgba(255,255,255,0.3);
              }
              .content-container {
                padding: 40px;
                max-width: 1200px;
                margin: 0 auto;
                background: white;
                min-height: calc(100vh - 70px);
              }
              @media print {
                .header-bar { display: none; }
                .content-container { padding: 20px; }
              }
            </style>
          </head>
          <body>
            <div class="header-bar">
              <div class="header-title">📊 ${file.name}</div>
              <div class="header-actions">
                <button onclick="window.print()" class="btn btn-print">
                  🖨️ Print
                </button>
                <button onclick="window.close()" class="btn btn-close">
                  ✖️ Close
                </button>
              </div>
            </div>
            <div class="content-container">
              ${htmlContent}
            </div>
          </body>
          </html>
        `);
        loadingWindow.document.close();
      } else {
        loadingWindow.document.open();
        loadingWindow.document.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>Error</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                padding: 40px;
                background: #1e293b;
              }
              .error {
                background: white;
                padding: 30px;
                border-radius: 8px;
                box-shadow: 0 0 20px rgba(0,0,0,0.3);
                max-width: 600px;
                margin: 0 auto;
              }
              h1 { color: #14b8a6; }
              button {
                background: #14b8a6;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 4px;
                cursor: pointer;
                margin-top: 20px;
              }
              button:hover { background: #0d9488; }
            </style>
          </head>
          <body>
            <div class="error">
              <h1>⚠️ Preview Error</h1>
              <p>Failed to generate StarOffice template preview. Please try downloading the file instead.</p>
              <button onclick="window.close()">Close</button>
            </div>
          </body>
          </html>
        `);
        loadingWindow.document.close();
      }
    } catch (error) {
      console.error('STI view error:', error);
      alert('Failed to open StarOffice template preview. Please try again or download the file.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Free STI Viewer - View StarOffice Presentation Template Files Online | MorphyIMG</title>
        <meta name="description" content="Free professional STI (StarOffice Presentation Template) viewer. Upload and preview legacy StarOffice Impress template files online with slide rendering. Supports batch viewing up to 20 files. 100% free STI viewer tool." />
        <meta name="keywords" content="STI viewer, StarOffice template viewer, StarImpress template viewer, STI file viewer online, legacy template viewer, StarOffice viewer, free STI viewer, STI preview" />
        <meta property="og:title" content="Free STI Viewer - View StarOffice Presentation Template Files Online | MorphyIMG" />
        <meta property="og:description" content="Free professional STI (StarOffice Presentation Template) viewer. Upload and preview legacy StarOffice template files online." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://morphyimg.com/viewers/sti" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free STI Viewer - View StarOffice Presentation Template Files Online | MorphyIMG" />
        <meta name="twitter:description" content="Free professional STI viewer. Upload and preview StarOffice Presentation Template files online." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Free STI Viewer",
            "description": "Free professional STI (StarOffice Presentation Template) viewer",
            "url": "https://morphyimg.com/viewers/sti",
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
        <div className="relative overflow-hidden bg-gradient-to-r from-teal-600 via-emerald-600 to-green-600">
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
                  <Presentation className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    Free STI Viewer
                  </h1>
                  <p className="text-xl text-teal-100">
                    View StarOffice Presentation Template files online - 100% free
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
              <div className="p-3 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Upload STI Files
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Drag and drop your StarOffice Presentation Template (STI) files or click to browse. Supports legacy STI template files up to 100MB each, with batch upload support for up to 20 files.
            </p>
            <FileUpload 
              onFilesSelected={handleFilesSelected}
              acceptedFormats={['sti']}
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
                  <div className="p-3 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Your STI Files ({selectedFiles.length})
                  </h2>
                </div>
              </div>

              <div className="mb-6 p-4 bg-teal-50 border border-teal-200 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-teal-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-teal-900 mb-1">How to View STI Files</h4>
                    <p className="text-sm text-teal-700">
                      Click the <strong>"View Template"</strong> button to render and preview the STI file. 
                      The viewer will convert the StarOffice presentation template to HTML format for web viewing. Files under 100 MB can be previewed.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-teal-50 rounded-xl p-4 hover:shadow-lg transition-all transform hover:scale-105 border border-gray-200">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-teal-100 rounded-lg">
                        <Presentation className="w-6 h-6 text-teal-600" />
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
                        onClick={() => handleViewSTI(file)}
                        className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white text-sm font-medium py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View Template</span>
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
            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl shadow-lg p-8 border border-teal-200 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="bg-white p-3 rounded-xl w-fit mb-4">
                <Presentation className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Legacy Template Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                View StarOffice presentation templates from the 1990s-2000s with full conversion to modern HTML
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl shadow-lg p-8 border border-emerald-200 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="bg-white p-3 rounded-xl w-fit mb-4">
                <FileSlides className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Full Rendering
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Preview legacy templates with full rendering including master slides, layouts, and placeholders
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl shadow-lg p-8 border border-green-200 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="bg-white p-3 rounded-xl w-fit mb-4">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Archive Access
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Access old template archives from StarOffice era with LibreOffice compatibility
              </p>
            </div>
          </div>

          {/* About STI Format Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                About STI Format
              </h2>
            </div>
            
            <div className="prose max-w-none text-gray-600">
              <p className="mb-6">
                STI (StarOffice Impress Template) is a legacy presentation template file format from the StarOffice suite, developed 
                by Sun Microsystems in the 1990s and early 2000s. STI files were created by StarImpress (StarOffice's presentation module) 
                to serve as reusable templates for creating presentations with consistent branding, layouts, and styling. These template files 
                contain master slides, color schemes, fonts, and default formatting but no actual presentation content. While the format is 
                now obsolete and replaced by OTP (OpenDocument Presentation Template), many organizations still have archived STI template 
                files from the StarOffice era. LibreOffice Impress can open and convert STI files for modern use.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Characteristics</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Legacy template</strong> - From StarOffice era (1990s-2005)</li>
                    <li>• <strong>Master slides</strong> - Define layouts and formatting</li>
                    <li>• <strong>Historical significance</strong> - Predecessor to OTP</li>
                    <li>• <strong>Archive access</strong> - Open old template files</li>
                    <li>• <strong>LibreOffice compatible</strong> - Can still be opened today</li>
                    <li>• <strong>Convertible</strong> - Can convert to OTP, POTX</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Compatible Applications</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>LibreOffice Impress</strong> - Full STI support</li>
                    <li>• <strong>Apache OpenOffice Impress</strong> - Can open STI</li>
                    <li>• <strong>StarOffice</strong> - Original application (discontinued)</li>
                    <li>• <strong>OpenOffice.org</strong> - StarOffice successor</li>
                    <li>• <strong>Conversion tools</strong> - Convert to modern templates</li>
                    <li>• <strong>Archive viewers</strong> - Legacy document access</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Technical Specifications</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">File Extension</td>
                        <td className="py-2 text-sm text-gray-900">.sti</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">MIME Type</td>
                        <td className="py-2 text-sm text-gray-900">application/vnd.sun.xml.impress.template</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">Format Type</td>
                        <td className="py-2 text-sm text-gray-900">Binary (StarOffice proprietary)</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">Application</td>
                        <td className="py-2 text-sm text-gray-900">StarImpress / StarOffice (1990s-2005)</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">Modern Equivalent</td>
                        <td className="py-2 text-sm text-gray-900">OTP (OpenDocument Presentation Template)</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">Developed By</td>
                        <td className="py-2 text-sm text-gray-900">Sun Microsystems (StarDivision)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Viewers Button */}
          <div className="text-center mt-8">
            <a
              href="/viewers"
              className="inline-block bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
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
                <div className="p-2 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-xl">
                  <Presentation className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">MorphyIMG</h2>
              </div>
              
              <p className="text-gray-300 mb-6">
                Free professional STI viewer for all your legacy StarOffice Presentation Template files.
              </p>
              
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-300">
                <span>© 2025 MorphyIMG. Preserving legacy templates.</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

