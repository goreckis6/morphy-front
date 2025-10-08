import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Upload, Eye, Download, ArrowLeft, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { FileUpload } from '../FileUpload';
import { Header } from '../Header';
import { useFileValidation } from '../../hooks/useFileValidation';

export const TXTViewer: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const { validateBatchFiles, validationError, clearValidationError } = useFileValidation();

  const handleFilesSelected = (files: File[]) => {
    // Clear previous validation errors
    clearValidationError();
    
    // Filter only TXT and related text files
    const txtFiles = files.filter(file => {
      const extension = file.name.split('.').pop()?.toLowerCase();
      return ['txt', 'log', 'md', 'csv', 'tsv', 'json', 'xml', 'html', 'css', 'js', 'py', 'java', 'c', 'cpp'].includes(extension || '');
    });
    
    // Validate the files
    const validation = validateBatchFiles(txtFiles);
    
    if (validation.isValid) {
      setSelectedFiles(txtFiles);
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

  const handleViewTXT = async (file: File) => {
    try {
      // Read file content
      const content = await file.text();
      
      // Escape HTML to prevent XSS
      const escapeHtml = (text: string) => {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
      };

      // Prepare lines with line numbers
      const lines = content.split('\n');
      const numberedLines = lines.map((line, i) => {
        const lineNum = (i + 1).toString().padStart(4, ' ');
        const escapedLine = escapeHtml(line);
        return `<span class="line-numbers">${lineNum}</span>${escapedLine}`;
      }).join('\n');
      
      // Open in new window with styled viewer
      const viewerWindow = window.open('', '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes');
      if (!viewerWindow) {
        alert('Please allow pop-ups to view the document');
        return;
      }

      viewerWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <title>${escapeHtml(file.name)}</title>
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              background: #1e1e1e;
              color: #d4d4d4;
              line-height: 1.6;
            }
            .toolbar {
              position: sticky;
              top: 0;
              background: #2d2d30;
              color: white;
              padding: 15px 20px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              box-shadow: 0 2px 8px rgba(0,0,0,0.3);
              z-index: 1000;
              border-bottom: 1px solid #3e3e42;
            }
            .toolbar-info {
              display: flex;
              align-items: center;
              gap: 15px;
            }
            .file-info {
              display: flex;
              flex-direction: column;
            }
            .file-name {
              font-weight: bold;
              font-size: 14px;
            }
            .file-meta {
              font-size: 12px;
              color: #858585;
            }
            .toolbar button {
              background: #0e639c;
              color: white;
              border: none;
              padding: 8px 16px;
              border-radius: 4px;
              cursor: pointer;
              margin-left: 10px;
              font-size: 14px;
              transition: background 0.2s;
            }
            .toolbar button:hover {
              background: #1177bb;
            }
            .content-container {
              padding: 20px;
              max-width: 1400px;
              margin: 0 auto;
            }
            .text-container {
              background: #1e1e1e;
              border: 1px solid #3e3e42;
              border-radius: 8px;
              padding: 20px;
              overflow-x: auto;
            }
            pre {
              margin: 0;
              font-family: 'Consolas', 'Courier New', monospace;
              font-size: 14px;
              line-height: 1.6;
              color: #d4d4d4;
              white-space: pre-wrap;
              word-wrap: break-word;
            }
            .line-numbers {
              display: inline-block;
              padding-right: 20px;
              margin-right: 20px;
              border-right: 1px solid #3e3e42;
              color: #858585;
              user-select: none;
              text-align: right;
              min-width: 50px;
            }
            @media print {
              body {
                background: white;
                color: black;
              }
              .toolbar {
                display: none;
              }
              .text-container {
                border: none;
                background: white;
              }
              pre {
                color: black;
              }
            }
          </style>
        </head>
        <body>
          <div class="toolbar">
            <div class="toolbar-info">
              <span>📄</span>
              <div class="file-info">
                <span class="file-name">${escapeHtml(file.name)}</span>
                <span class="file-meta">${(file.size / 1024).toFixed(2)} KB • ${lines.length} lines</span>
              </div>
            </div>
            <div>
              <button onclick="copyContent()">📋 Copy</button>
              <button onclick="window.print()">🖨️ Print</button>
              <button onclick="window.close()">✖️ Close</button>
            </div>
          </div>
          <div class="content-container">
            <div class="text-container">
              <pre id="content">${numberedLines}</pre>
            </div>
          </div>
          <script>
            const rawContent = ${JSON.stringify(content)};
            function copyContent() {
              navigator.clipboard.writeText(rawContent).then(() => {
                alert('Content copied to clipboard!');
              }).catch(() => {
                alert('Failed to copy content');
              });
            }
          </script>
        </body>
        </html>
      `);
      viewerWindow.document.close();
    } catch (error) {
      console.error('TXT view error:', error);
      alert('Failed to open text file preview. Please try again or download the file.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Free TXT Viewer - View Text Files Online | MorphyIMG</title>
        <meta name="description" content="Free professional TXT viewer for viewing text files online. Upload and preview TXT, LOG, MD, and other text-based files with syntax highlighting and line numbers. Supports batch viewing up to 20 files. 100% free text viewer tool." />
        <meta name="keywords" content="TXT viewer, text viewer, view TXT online, text file viewer, log viewer, plain text viewer, TXT viewer free, online text viewer" />
        <meta property="og:title" content="Free TXT Viewer - View Text Files Online | MorphyIMG" />
        <meta property="og:description" content="Free professional TXT viewer for viewing text files online. Upload and preview TXT, LOG, MD, and other text-based files with syntax highlighting and line numbers." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://morphyimg.com/viewers/txt" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free TXT Viewer - View Text Files Online | MorphyIMG" />
        <meta name="twitter:description" content="Free professional TXT viewer for viewing text files online. Upload and preview TXT, LOG, MD, and other text-based files." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Free TXT Viewer",
            "description": "Free professional TXT viewer for viewing text files online",
            "url": "https://morphyimg.com/viewers/txt",
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
        <div className="relative overflow-hidden bg-gradient-to-r from-gray-700 via-slate-700 to-zinc-800">
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
                    Free TXT Viewer
                  </h1>
                  <p className="text-xl text-gray-300">
                    View and analyze text files with professional tools - 100% free
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
              <div className="p-3 bg-gradient-to-br from-gray-600 to-slate-700 rounded-xl">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Upload Text Files
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Drag and drop your text files or click to browse. Supports TXT, LOG, MD, JSON, XML, CSV, and code files up to 100MB each, with batch upload support for up to 20 files.
            </p>
            <FileUpload 
              onFilesSelected={handleFilesSelected}
              acceptedFormats={['txt', 'log', 'md', 'csv', 'tsv', 'json', 'xml', 'html', 'css', 'js', 'py', 'java', 'c', 'cpp']}
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
                    Your Text Files ({selectedFiles.length})
                  </h2>
                </div>
              </div>

              {/* How to View Instructions */}
              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">How to View Text Files</h4>
                    <p className="text-sm text-blue-700">
                      Click the <strong>"View Text"</strong> button to open the file in a code editor-style viewer with line numbers, 
                      copy functionality, and print support. Perfect for viewing logs, code, and configuration files.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl p-4 hover:shadow-lg transition-all transform hover:scale-105 border border-gray-200">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <FileText className="w-6 h-6 text-gray-600" />
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
                        onClick={() => handleViewTXT(file)}
                        className="w-full bg-gradient-to-r from-gray-700 to-slate-800 hover:from-gray-800 hover:to-slate-900 text-white text-sm font-medium py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View Text</span>
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
            <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="bg-white p-3 rounded-xl w-fit mb-4">
                <FileText className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Line Numbers
              </h3>
              <p className="text-gray-600 leading-relaxed">
                View text files with line numbers for easy code review, debugging, and navigation through large files
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-8 border border-blue-200 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="bg-white p-3 rounded-xl w-fit mb-4">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Copy & Print
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Quick copy-to-clipboard functionality and print support for documentation, code sharing, and archival purposes
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-lg p-8 border border-green-200 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="bg-white p-3 rounded-xl w-fit mb-4">
                <FileText className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Multiple Formats
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Supports TXT, LOG, MD, JSON, XML, CSV, and various code files - perfect for developers and system administrators
              </p>
            </div>
          </div>

          {/* About TXT Format Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-gray-600 to-slate-700 rounded-xl">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                About TXT Format
              </h2>
            </div>
            
            <div className="prose max-w-none text-gray-600">
              <p className="mb-6">
                Plain text (TXT) files are the simplest and most universal form of digital documents. They contain only 
                unformatted text without any styling, fonts, or embedded objects. TXT files are universally compatible, 
                human-readable, and can be opened on any computer or device with any text editor or word processor.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Advantages</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Universal compatibility</strong> - Opens on any device or platform</li>
                    <li>• <strong>Smallest file size</strong> - No formatting overhead</li>
                    <li>• <strong>Fast loading</strong> - Instant preview even for large files</li>
                    <li>• <strong>Human-readable</strong> - No special software required</li>
                    <li>• <strong>Version control friendly</strong> - Perfect for Git and code repositories</li>
                    <li>• <strong>No corruption</strong> - Simple structure prevents file damage</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Best Use Cases</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Log files</strong> - System logs, error logs, access logs</li>
                    <li>• <strong>Configuration files</strong> - App configs, environment variables</li>
                    <li>• <strong>Code and scripts</strong> - Source code, shell scripts</li>
                    <li>• <strong>Documentation</strong> - README files, changelogs, notes</li>
                    <li>• <strong>Data files</strong> - CSV, TSV, JSON, XML</li>
                    <li>• <strong>Simple notes</strong> - To-do lists, quick notes, drafts</li>
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
                        <td className="py-2 text-sm text-gray-900">.txt, .log, .md, .csv, .tsv, .json, .xml</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">MIME Type</td>
                        <td className="py-2 text-sm text-gray-900">text/plain</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">Format Type</td>
                        <td className="py-2 text-sm text-gray-900">Plain text (unformatted)</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">Character Encoding</td>
                        <td className="py-2 text-sm text-gray-900">UTF-8, ASCII, Unicode</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">Line Endings</td>
                        <td className="py-2 text-sm text-gray-900">LF (Unix), CRLF (Windows), CR (Mac)</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">Compression</td>
                        <td className="py-2 text-sm text-gray-900">None (raw text)</td>
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
              className="inline-block bg-gradient-to-r from-gray-700 to-slate-800 hover:from-gray-800 hover:to-slate-900 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
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
                <div className="p-2 bg-gradient-to-br from-gray-600 to-slate-700 rounded-xl">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">MorphyIMG</h2>
              </div>
              
              <p className="text-gray-300 mb-6">
                Free professional TXT viewer for all your text file viewing needs.
              </p>
              
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-300">
                <span>© 2025 MorphyIMG. Built for TXT professionals.</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
