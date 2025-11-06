import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Upload, Eye, Download, ArrowLeft, CheckCircle, AlertCircle, Info, Zap, Presentation, Layout } from 'lucide-react';
import { FileUpload } from '../FileUpload';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { useFileValidation } from '../../hooks/useFileValidation';

export const OTPViewer: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const { validateBatchFiles, validationError, clearValidationError } = useFileValidation();

  const handleFilesSelected = (files: File[]) => {
    clearValidationError();
    
    // Filter only OTP files
    const otpFiles = files.filter(file => {
      const extension = file.name.split('.').pop()?.toLowerCase();
      return extension === 'otp';
    });
    
    const validation = validateBatchFiles(otpFiles);
    
    if (validation.isValid) {
      setSelectedFiles(otpFiles);
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

  const handleViewOTP = async (file: File) => {
    // Check file size (max 100MB for preview)
    const maxSize = 100 * 1024 * 1024; // 100MB
    if (file.size > maxSize) {
      alert(`File is too large for preview (${(file.size / 1024 / 1024).toFixed(2)} MB). Maximum size is 100 MB. Please download the file instead.`);
      return;
    }
    
    try {
      const loadingWindow = window.open('', '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes');
      if (!loadingWindow) {
        alert('Please allow pop-ups to view the OTP file');
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
              border-top: 4px solid #fb923c;
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
            <p>Converting template for preview...</p>
          </div>
        </body>
        </html>
      `);

      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('https://api.morphyhub.com/api/preview/otp', {
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
            <title>${file.name} - OTP Preview</title>
            <style>
              body {
                margin: 0;
                padding: 0;
                background: #f5f5f5;
                font-family: Arial, sans-serif;
              }
              .header-bar {
                background: linear-gradient(to right, #fb923c, #f97316);
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
                color: #f97316;
              }
              .btn-print:hover {
                background: #ffedd5;
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
              h1 { color: #f97316; }
              button {
                background: #f97316;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 4px;
                cursor: pointer;
                margin-top: 20px;
              }
              button:hover { background: #ea580c; }
            </style>
          </head>
          <body>
            <div class="error">
              <h1>⚠️ Preview Error</h1>
              <p>Failed to generate OTP preview. Please try downloading the file instead.</p>
              <button onclick="window.close()">Close</button>
            </div>
          </body>
          </html>
        `);
        loadingWindow.document.close();
      }
    } catch (error) {
      console.error('OTP view error:', error);
      alert('Failed to open OTP preview. Please try again or download the file.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Free OTP Viewer - View OpenDocument Presentation Template Files Online | MorphyIMG</title>
        <meta name="description" content="Free professional OTP (OpenDocument Presentation Template) viewer. Upload and preview OTP template files online with slide rendering. Supports batch viewing up to 20 files. 100% free OTP viewer tool." />
        <meta name="keywords" content="OTP viewer, OpenDocument Presentation Template viewer, OTP file viewer online, presentation template viewer, LibreOffice Impress template viewer, free OTP viewer, OTP preview" />
        <meta property="og:title" content="Free OTP Viewer - View OpenDocument Presentation Template Files Online | MorphyIMG" />
        <meta property="og:description" content="Free professional OTP (OpenDocument Presentation Template) viewer. Upload and preview LibreOffice Impress template files online." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://morphyhub.com/viewers/otp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free OTP Viewer - View OpenDocument Presentation Template Files Online | MorphyIMG" />
        <meta name="twitter:description" content="Free professional OTP viewer. Upload and preview OpenDocument Presentation Template files online." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Free OTP Viewer",
            "description": "Free professional OTP (OpenDocument Presentation Template) viewer",
            "url": "https://morphyhub.com/viewers/otp",
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
        <div className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500">
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
                    Free OTP Viewer
                  </h1>
                  <p className="text-xl text-orange-100">
                    View OpenDocument Presentation Template files online - 100% free
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
              <div className="p-3 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Upload OTP Files
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Drag and drop your OpenDocument Presentation Template (OTP) files or click to browse. Supports OTP files up to 100MB each, with batch upload support for up to 20 files.
            </p>
            <FileUpload 
              onFilesSelected={handleFilesSelected}
              acceptedFormats={['otp']}
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
                  <div className="p-3 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Your OTP Files ({selectedFiles.length})
                  </h2>
                </div>
              </div>

              <div className="mb-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-orange-900 mb-1">How to View OTP Files</h4>
                    <p className="text-sm text-orange-700">
                      Click the <strong>"View Template"</strong> button to render and preview the OTP file. 
                      The viewer will convert the presentation template to HTML format for web viewing. Files under 100 MB can be previewed.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-xl p-4 hover:shadow-lg transition-all transform hover:scale-105 border border-gray-200">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-orange-100 rounded-lg">
                        <Presentation className="w-6 h-6 text-orange-600" />
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
                        onClick={() => handleViewOTP(file)}
                        className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-sm font-medium py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
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
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl shadow-lg p-8 border border-orange-200 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="bg-white p-3 rounded-xl w-fit mb-4">
                <Presentation className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Template Preview
              </h3>
              <p className="text-gray-600 leading-relaxed">
                View OTP presentation templates converted to HTML format with preserved layout and styling
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl shadow-lg p-8 border border-amber-200 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="bg-white p-3 rounded-xl w-fit mb-4">
                <Layout className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Full Rendering
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Preview template files with full rendering including master slides, layouts, and placeholders
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl shadow-lg p-8 border border-yellow-200 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="bg-white p-3 rounded-xl w-fit mb-4">
                <Zap className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Fast Preview
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Quick preview generation with LibreOffice for instant viewing in your browser
              </p>
            </div>
          </div>

          {/* About OTP Format Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                About OTP Format
              </h2>
            </div>
            
            <div className="prose max-w-none text-gray-600">
              <p className="mb-6">
                OTP (OpenDocument Presentation Template) is the template format for OpenDocument presentations, primarily used by 
                LibreOffice Impress and Apache OpenOffice Impress. OTP files serve as reusable templates that define the master slides, 
                layouts, color schemes, fonts, and default formatting for presentations. Unlike ODP files which contain actual presentation 
                content, OTP files are designed to be starting points for creating new presentations with consistent branding and styling. 
                OTP is part of the ISO/IEC 26300 OpenDocument Format standard.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Advantages</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Reusable templates</strong> - Create consistent presentations</li>
                    <li>• <strong>Master slides</strong> - Define layouts and formatting</li>
                    <li>• <strong>Brand consistency</strong> - Maintain corporate identity</li>
                    <li>• <strong>Open standard</strong> - ISO/IEC 26300 format</li>
                    <li>• <strong>Cross-platform</strong> - Works on all operating systems</li>
                    <li>• <strong>XML-based</strong> - Human-readable structure</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Compatible Applications</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>LibreOffice Impress</strong> - Native OTP support</li>
                    <li>• <strong>Apache OpenOffice Impress</strong> - Full compatibility</li>
                    <li>• <strong>Microsoft PowerPoint</strong> - Can open OTP templates</li>
                    <li>• <strong>Google Slides</strong> - Import OTP templates</li>
                    <li>• <strong>OnlyOffice</strong> - Complete template editing</li>
                    <li>• <strong>WPS Office</strong> - Cross-platform support</li>
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
                        <td className="py-2 text-sm text-gray-900">.otp</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">MIME Type</td>
                        <td className="py-2 text-sm text-gray-900">application/vnd.oasis.opendocument.presentation-template</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">Based On</td>
                        <td className="py-2 text-sm text-gray-900">XML (OASIS OpenDocument Format)</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">Standard</td>
                        <td className="py-2 text-sm text-gray-900">ISO/IEC 26300</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">Compression</td>
                        <td className="py-2 text-sm text-gray-900">ZIP compression (default)</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">Developed By</td>
                        <td className="py-2 text-sm text-gray-900">OASIS Consortium</td>
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
              className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              ← Back to All Viewers
            </a>
          </div>
        </div>
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

