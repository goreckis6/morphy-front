import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Upload, Eye, Download, ArrowLeft, CheckCircle, AlertCircle, Info, Zap, Presentation, Layout } from 'lucide-react';
import { FileUpload } from '../FileUpload';
import { Header } from '../Header';
import { useFileValidation } from '../../hooks/useFileValidation';

export const PPSViewer: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const { validateBatchFiles, validationError, clearValidationError } = useFileValidation();

  const handleFilesSelected = (files: File[]) => {
    clearValidationError();
    
    // Filter only PPS/PPSX files
    const ppsFiles = files.filter(file => {
      const extension = file.name.split('.').pop()?.toLowerCase();
      return ['pps', 'ppsx'].includes(extension || '');
    });
    
    const validation = validateBatchFiles(ppsFiles);
    
    if (validation.isValid) {
      setSelectedFiles(ppsFiles);
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

  const handleViewPPS = async (file: File) => {
    // Check file size (max 100MB for preview)
    const maxSize = 100 * 1024 * 1024; // 100MB
    if (file.size > maxSize) {
      alert(`File is too large for preview (${(file.size / 1024 / 1024).toFixed(2)} MB). Maximum size is 100 MB. Please download the file instead.`);
      return;
    }
    
    try {
      const loadingWindow = window.open('', '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes');
      if (!loadingWindow) {
        alert('Please allow pop-ups to view the slide show file');
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
              border-top: 4px solid #8b5cf6;
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
            <p>Converting slide show for preview...</p>
          </div>
        </body>
        </html>
      `);

      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('https://api.morphyimg.com/api/preview/pps', {
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
            <title>${file.name} - Slide Show Preview</title>
            <style>
              body {
                margin: 0;
                padding: 0;
                background: #f5f5f5;
                font-family: Arial, sans-serif;
              }
              .header-bar {
                background: linear-gradient(to right, #8b5cf6, #7c3aed);
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
                color: #8b5cf6;
              }
              .btn-print:hover {
                background: #f5f3ff;
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
              h1 { color: #8b5cf6; }
              button {
                background: #8b5cf6;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 4px;
                cursor: pointer;
                margin-top: 20px;
              }
              button:hover { background: #7c3aed; }
            </style>
          </head>
          <body>
            <div class="error">
              <h1>⚠️ Preview Error</h1>
              <p>Failed to generate slide show preview. Please try downloading the file instead.</p>
              <button onclick="window.close()">Close</button>
            </div>
          </body>
          </html>
        `);
        loadingWindow.document.close();
      }
    } catch (error) {
      console.error('PPS view error:', error);
      alert('Failed to open slide show preview. Please try again or download the file.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Free PPS/PPSX Viewer - View PowerPoint Slide Show Files Online | MorphyIMG</title>
        <meta name="description" content="Free professional PPS/PPSX (PowerPoint Slide Show) viewer. Upload and preview PowerPoint slide show files online with full rendering. Supports batch viewing up to 20 files. 100% free PPS/PPSX viewer tool." />
        <meta name="keywords" content="PPS viewer, PPSX viewer, PowerPoint Slide Show viewer, PPS file viewer online, slide show viewer, Microsoft viewer, free PPS viewer, PPSX preview" />
        <meta property="og:title" content="Free PPS/PPSX Viewer - View PowerPoint Slide Show Files Online | MorphyIMG" />
        <meta property="og:description" content="Free professional PPS/PPSX (PowerPoint Slide Show) viewer. Upload and preview Microsoft PowerPoint slide show files online." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://morphyimg.com/viewers/pps" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free PPS/PPSX Viewer - View PowerPoint Slide Show Files Online | MorphyIMG" />
        <meta name="twitter:description" content="Free professional PPS/PPSX viewer. Upload and preview PowerPoint Slide Show files online." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Free PPS/PPSX Viewer",
            "description": "Free professional PPS/PPSX (PowerPoint Slide Show) viewer",
            "url": "https://morphyimg.com/viewers/pps",
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
        <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600">
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
                    Free PPS/PPSX Viewer
                  </h1>
                  <p className="text-xl text-purple-100">
                    View PowerPoint Slide Show files online - 100% free
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
              <div className="p-3 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Upload PPS/PPSX Files
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Drag and drop your PowerPoint Slide Show (PPS/PPSX) files or click to browse. Supports both legacy PPS and modern PPSX formats up to 100MB each, with batch upload support for up to 20 files.
            </p>
            <FileUpload 
              onFilesSelected={handleFilesSelected}
              acceptedFormats={['pps', 'ppsx']}
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
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Your Slide Show Files ({selectedFiles.length})
                  </h2>
                </div>
              </div>

              <div className="mb-6 p-4 bg-purple-50 border border-purple-200 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-purple-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-purple-900 mb-1">How to View Slide Show Files</h4>
                    <p className="text-sm text-purple-700">
                      Click the <strong>"View Slide Show"</strong> button to render and preview the PPS/PPSX file. 
                      The viewer will convert the slide show to HTML format for web viewing. Files under 100 MB can be previewed.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-xl p-4 hover:shadow-lg transition-all transform hover:scale-105 border border-gray-200">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <Presentation className="w-6 h-6 text-purple-600" />
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
                        onClick={() => handleViewPPS(file)}
                        className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white text-sm font-medium py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View Slide Show</span>
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
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl shadow-lg p-8 border border-purple-200 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="bg-white p-3 rounded-xl w-fit mb-4">
                <Presentation className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Slide Show Preview
              </h3>
              <p className="text-gray-600 leading-relaxed">
                View PowerPoint slide shows converted to HTML format with preserved slides and content
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-violet-50 to-indigo-50 rounded-2xl shadow-lg p-8 border border-violet-200 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="bg-white p-3 rounded-xl w-fit mb-4">
                <Layout className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Full Rendering
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Preview slide show files with full rendering including text, images, and animations
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-lg p-8 border border-indigo-200 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="bg-white p-3 rounded-xl w-fit mb-4">
                <Zap className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Dual Format Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Supports both legacy PPS (97-2003) and modern PPSX (2007+) slide show formats
              </p>
            </div>
          </div>

          {/* About PPS/PPSX Format Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                About PPS/PPSX Formats
              </h2>
            </div>
            
            <div className="prose max-w-none text-gray-600">
              <p className="mb-6">
                PPS (PowerPoint Slide Show) and PPSX (PowerPoint Open XML Slide Show) are Microsoft's formats for self-running 
                presentations that automatically open in slide show mode rather than edit mode. PPS is the legacy format (PowerPoint 97-2003), 
                while PPSX is the modern Office Open XML format (PowerPoint 2007+). These formats are ideal for distributing presentations 
                that should be viewed immediately without allowing editing, such as kiosk displays, self-running demos, training materials, 
                and presentations for review. The files open directly in presentation mode with full-screen slides.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Advantages</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Auto-play mode</strong> - Opens directly in slide show view</li>
                    <li>• <strong>Read-only presentation</strong> - Prevents accidental editing</li>
                    <li>• <strong>Full-screen display</strong> - Immersive viewing experience</li>
                    <li>• <strong>Kiosk mode</strong> - Perfect for self-running displays</li>
                    <li>• <strong>Dual format support</strong> - PPS (legacy) and PPSX (modern)</li>
                    <li>• <strong>Animation support</strong> - Transitions and effects preserved</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Compatible Applications</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Microsoft PowerPoint</strong> - Native PPS/PPSX support</li>
                    <li>• <strong>LibreOffice Impress</strong> - Full compatibility</li>
                    <li>• <strong>Apache OpenOffice Impress</strong> - Can open slide shows</li>
                    <li>• <strong>Google Slides</strong> - Import PPS/PPSX files</li>
                    <li>• <strong>OnlyOffice</strong> - Complete support</li>
                    <li>• <strong>WPS Office</strong> - Cross-platform viewing</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Technical Specifications</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">File Extensions</td>
                        <td className="py-2 text-sm text-gray-900">.pps (legacy), .ppsx (modern)</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">MIME Type</td>
                        <td className="py-2 text-sm text-gray-900">application/vnd.ms-powerpoint (PPS), application/vnd.openxmlformats-officedocument.presentationml.slideshow (PPSX)</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">Format Type</td>
                        <td className="py-2 text-sm text-gray-900">Binary (PPS), XML-based (PPSX)</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">PowerPoint Version</td>
                        <td className="py-2 text-sm text-gray-900">PPS: 97-2003, PPSX: 2007+</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">Editable Version</td>
                        <td className="py-2 text-sm text-gray-900">PPT (legacy), PPTX (modern)</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">Developed By</td>
                        <td className="py-2 text-sm text-gray-900">Microsoft Corporation</td>
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
              className="inline-block bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
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
                <div className="p-2 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl">
                  <Presentation className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">MorphyIMG</h2>
              </div>
              
              <p className="text-gray-300 mb-6">
                Free professional PPS/PPSX viewer for all your PowerPoint Slide Show files.
              </p>
              
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-300">
                <span>© 2025 MorphyIMG. Built for presentation viewers.</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

