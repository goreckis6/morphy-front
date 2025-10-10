import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, Upload, Eye, Download, ArrowLeft, CheckCircle, AlertCircle, Info, Zap, Terminal, FileCode } from 'lucide-react';
import { FileUpload } from '../FileUpload';
import { Header } from '../Header';
import { useFileValidation } from '../../hooks/useFileValidation';

export const JSViewer: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const { validateBatchFiles, validationError, clearValidationError } = useFileValidation();

  const handleFilesSelected = (files: File[]) => {
    clearValidationError();
    
    // Filter only JavaScript files
    const jsFiles = files.filter(file => {
      const extension = file.name.split('.').pop()?.toLowerCase();
      return ['js', 'mjs', 'cjs', 'jsx'].includes(extension || '');
    });
    
    const validation = validateBatchFiles(jsFiles);
    
    if (validation.isValid) {
      setSelectedFiles(jsFiles);
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

  const handleViewJS = async (file: File) => {
    // Check file size (max 100MB for preview)
    const maxSize = 100 * 1024 * 1024; // 100MB
    if (file.size > maxSize) {
      alert(`File is too large for preview (${(file.size / 1024 / 1024).toFixed(2)} MB). Maximum size is 100 MB. Please download the file instead.`);
      return;
    }
    
    try {
      const loadingWindow = window.open('', '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes');
      if (!loadingWindow) {
        alert('Please allow pop-ups to view the JavaScript file');
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
              border-top: 4px solid #eab308;
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
            <p>Formatting JavaScript for preview...</p>
          </div>
        </body>
        </html>
      `);

      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('https://morphy-2-n2tb.onrender.com/api/preview/js', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const html = await response.text();
        loadingWindow.document.open();
        loadingWindow.document.write(html);
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
              h1 { color: #e74c3c; }
              button {
                background: #eab308;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 4px;
                cursor: pointer;
                margin-top: 20px;
              }
              button:hover { background: #ca8a04; }
            </style>
          </head>
          <body>
            <div class="error">
              <h1>⚠️ Preview Error</h1>
              <p>Failed to generate JavaScript preview. Please try downloading the file instead.</p>
              <button onclick="window.close()">Close</button>
            </div>
          </body>
          </html>
        `);
        loadingWindow.document.close();
      }
    } catch (error) {
      console.error('JavaScript view error:', error);
      alert('Failed to open JavaScript preview. Please try again or download the file.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Free JavaScript Viewer - View JS Files Online | MorphyIMG</title>
        <meta name="description" content="Free professional JavaScript viewer with syntax highlighting. Upload and preview JS, JSX files online with formatted display and code analysis. Supports batch viewing up to 20 files. 100% free JavaScript viewer tool." />
        <meta name="keywords" content="JavaScript viewer, JS viewer, JavaScript file viewer online, JS formatter, JSX viewer, JavaScript preview, code viewer, JS online, free JavaScript viewer" />
        <meta property="og:title" content="Free JavaScript Viewer - View JS Files Online | MorphyIMG" />
        <meta property="og:description" content="Free professional JavaScript viewer with syntax highlighting. Upload and preview JS files online with formatted display and code analysis." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://morphyimg.com/viewers/js" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free JavaScript Viewer - View JS Files Online | MorphyIMG" />
        <meta name="twitter:description" content="Free professional JavaScript viewer with syntax highlighting. Upload and preview JS files online with formatted display." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Free JavaScript Viewer",
            "description": "Free professional JavaScript viewer with syntax highlighting",
            "url": "https://morphyimg.com/viewers/js",
            "applicationCategory": "DeveloperTool",
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
        <div className="relative overflow-hidden bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-700">
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
                  <Code className="w-12 h-12 text-white" />
            </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    Free JavaScript Viewer
            </h1>
                  <p className="text-xl text-yellow-100">
                    View and analyze JavaScript code with syntax highlighting - 100% free
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
              <div className="p-3 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Upload JavaScript Files
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Drag and drop your JavaScript files or click to browse. Supports JS, JSX, MJS, CJS files up to 100MB each, with batch upload support for up to 20 files.
            </p>
            <FileUpload 
              onFilesSelected={handleFilesSelected}
              acceptedFormats={['js', 'mjs', 'cjs', 'jsx']}
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
                  <div className="p-3 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Your JavaScript Files ({selectedFiles.length})
                  </h2>
                </div>
              </div>

              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div>
                    <h4 className="font-semibold text-blue-900 mb-1">How to View JavaScript Files</h4>
                    <p className="text-sm text-blue-700">
                      Click the <strong>"View Code"</strong> button to open the JavaScript file in a preview window with syntax highlighting. 
                      Files under 100 MB can be previewed. You can also download the original file.
                          </p>
                        </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-yellow-50 rounded-xl p-4 hover:shadow-lg transition-all transform hover:scale-105 border border-gray-200">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-yellow-100 rounded-lg">
                        <FileCode className="w-6 h-6 text-yellow-600" />
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
                        onClick={() => handleViewJS(file)}
                        className="w-full bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-white text-sm font-medium py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View Code</span>
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
            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl shadow-lg p-8 border border-yellow-200 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="bg-white p-3 rounded-xl w-fit mb-4">
                <Code className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Syntax Highlighting
              </h3>
              <p className="text-gray-600 leading-relaxed">
                View JavaScript with beautiful syntax highlighting for keywords, functions, strings, and operators
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-lg p-8 border border-green-200 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="bg-white p-3 rounded-xl w-fit mb-4">
                <Terminal className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Code Analysis
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Analyze JavaScript code with function counts, line numbers, and detailed statistics
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-8 border border-blue-200 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="bg-white p-3 rounded-xl w-fit mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Modern Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Support for ES6+, JSX, modules, and modern JavaScript features with proper formatting
              </p>
            </div>
          </div>

          {/* About JavaScript Format Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                About JavaScript Format
              </h2>
            </div>
            
            <div className="prose max-w-none text-gray-600">
              <p className="mb-6">
                JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. 
                It's one of the core technologies of the World Wide Web, alongside HTML and CSS. JavaScript enables interactive 
                web pages and is an essential part of web applications, with the vast majority of websites using it.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Advantages</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Universal runtime</strong> - Runs in all modern browsers</li>
                    <li>• <strong>Full-stack development</strong> - Frontend and backend (Node.js)</li>
                    <li>• <strong>Event-driven</strong> - Asynchronous programming support</li>
                    <li>• <strong>Rich ecosystem</strong> - Millions of npm packages</li>
                    <li>• <strong>Modern features</strong> - ES6+, async/await, modules</li>
                    <li>• <strong>Dynamic typing</strong> - Flexible and fast development</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Best Use Cases</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Web applications</strong> - Interactive frontend interfaces</li>
                    <li>• <strong>Backend services</strong> - Node.js server applications</li>
                    <li>• <strong>Mobile apps</strong> - React Native, Ionic development</li>
                    <li>• <strong>Desktop apps</strong> - Electron applications</li>
                    <li>• <strong>APIs</strong> - RESTful and GraphQL services</li>
                    <li>• <strong>Automation</strong> - Scripts and build tools</li>
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
                        <td className="py-2 text-sm text-gray-900">.js, .mjs, .cjs, .jsx</td>
                </tr>
                <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">MIME Type</td>
                        <td className="py-2 text-sm text-gray-900">application/javascript, text/javascript</td>
                </tr>
                <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">Standard</td>
                        <td className="py-2 text-sm text-gray-900">ECMAScript (ES5, ES6, ES2015-2024)</td>
                </tr>
                <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">Character Encoding</td>
                        <td className="py-2 text-sm text-gray-900">UTF-8 (recommended), UTF-16, ASCII</td>
                </tr>
                <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">Runtime</td>
                        <td className="py-2 text-sm text-gray-900">Browser, Node.js, Deno, Bun</td>
                </tr>
                <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">Developed By</td>
                        <td className="py-2 text-sm text-gray-900">Brendan Eich (1995), ECMA TC39</td>
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
              className="inline-block bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
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
                <div className="p-2 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-xl">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">MorphyIMG</h2>
            </div>
            
            <p className="text-gray-300 mb-6">
                Free professional JavaScript viewer for all your development needs.
            </p>
            
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-300">
                <span>© 2025 MorphyIMG. Built for JavaScript developers.</span>
              </div>
            </div>
          </div>
        </footer>
        </div>
    </>
  );
};
