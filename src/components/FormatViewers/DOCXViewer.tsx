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

  const handleViewDOCX = async (file: File) => {
    // Check file size (max 100MB for preview)
    const maxSize = 100 * 1024 * 1024; // 100MB
    if (file.size > maxSize) {
      alert(`File is too large for preview (${(file.size / 1024 / 1024).toFixed(2)} MB). Maximum size is 100 MB. Please download the file instead.`);
      return;
    }
    
    try {
      // Show loading state
      const loadingWindow = window.open('', '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes');
      if (!loadingWindow) {
        alert('Please allow pop-ups to view the document');
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
              background: #f5f5f5;
              margin: 0;
            }
            .loader {
              text-align: center;
            }
            .spinner {
              border: 4px solid #f3f3f3;
              border-top: 4px solid #3498db;
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
          </style>
        </head>
        <body>
          <div class="loader">
            <div class="spinner"></div>
            <h2>Loading ${file.name}...</h2>
            <p>Converting DOCX to HTML preview...</p>
          </div>
        </body>
        </html>
      `);

      // Send file to backend for conversion
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('https://api.morphyimg.com/api/preview/docx', {
        method: 'POST',
        body: formData,
      });

      const contentType = response.headers.get('Content-Type') || '';
      const payload = await response.text();

		// If server returned HTML, render it in a viewer shell with controls
		if (contentType.includes('text/html') && payload.trim().length > 0) {
			loadingWindow.document.open();
			loadingWindow.document.write(`
				<!DOCTYPE html>
				<html>
				<head>
					<meta charset="utf-8" />
					<title>${file.name} - DOCX Preview</title>
					<style>
						* { box-sizing: border-box; }
						html, body { height: 100%; margin: 0; font-family: Arial, sans-serif; background: #0f172a; }
						.toolbar { position: fixed; top: 0; left: 0; right: 0; height: 56px; background: #111827; color: #e5e7eb; display: flex; align-items: center; padding: 0 12px; gap: 8px; border-bottom: 1px solid #1f2937; z-index: 10; }
						.toolbar .title { font-weight: 600; color: #f9fafb; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
						.toolbar .actions { margin-left: auto; display: inline-flex; align-items: center; gap: 8px; }
						.btn { appearance: none; border: 1px solid #374151; background: #1f2937; color: #e5e7eb; padding: 8px 10px; border-radius: 8px; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; font-size: 12px; }
						.btn:hover { background: #111827; }
						.sep { width: 1px; height: 28px; background: #374151; margin: 0 6px; }
						.viewer { position: absolute; top: 56px; bottom: 0; left: 0; right: 0; background: #0b1220; }
						iframe { width: 100%; height: 100%; border: 0; background: white; transform-origin: 0 0; }
					</style>
				</head>
				<body>
					<div class="toolbar">
						<div class="title">${file.name}</div>
						<div class="actions">
							<button class="btn" id="btnPrev" title="Previous viewport">↑ Prev</button>
							<button class="btn" id="btnNext" title="Next viewport">↓ Next</button>
							<div class="sep"></div>
							<button class="btn" id="btnZoomOut" title="Zoom out">−</button>
							<button class="btn" id="btnZoomReset" title="Reset zoom">100%</button>
							<button class="btn" id="btnZoomIn" title="Zoom in">＋</button>
							<div class="sep"></div>
							<button class="btn" id="btnPrint" title="Print">🖨 Print</button>
							<div class="sep"></div>
							<button class="btn" id="btnClose" title="Close">✖ Close</button>
						</div>
					</div>
					<div class="viewer">
						<iframe id="docFrame"></iframe>
					</div>
					<script>
					(function(){
						var frame = document.getElementById('docFrame');
						var scale = 1;
						// Inject HTML into iframe via srcdoc for isolation
						frame.srcdoc = \`${payload.replace(/`/g, '\\`')}\`;
						function setScale(newScale){
							scale = Math.max(0.5, Math.min(3, newScale));
							frame.style.transform = 'scale(' + scale + ')';
							frame.style.width = (100/scale) + '%';
							document.getElementById('btnZoomReset').textContent = Math.round(scale*100) + '%';
						}
						setScale(1);
						document.getElementById('btnClose').addEventListener('click', function(){ window.close(); });
						document.getElementById('btnPrint').addEventListener('click', function(){ try { frame.contentWindow.focus(); frame.contentWindow.print(); } catch(e) { alert('Print not available.'); } });
						document.getElementById('btnZoomIn').addEventListener('click', function(){ setScale(scale + 0.1); });
						document.getElementById('btnZoomOut').addEventListener('click', function(){ setScale(scale - 0.1); });
						document.getElementById('btnZoomReset').addEventListener('click', function(){ setScale(1); });
						document.getElementById('btnNext').addEventListener('click', function(){ var el = frame.contentWindow; el.scrollBy({ top: el.innerHeight * 0.9, behavior: 'smooth' }); });
						document.getElementById('btnPrev').addEventListener('click', function(){ var el = frame.contentWindow; el.scrollBy({ top: -el.innerHeight * 0.9, behavior: 'smooth' }); });
					})();
					</script>
				</body>
				</html>
			`);
			loadingWindow.document.close();
			return;
		}

      if (!response.ok) {
        loadingWindow.document.open();
        loadingWindow.document.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>Error</title>
            <style>
              body { font-family: Arial, sans-serif; padding: 40px; background: #f5f5f5; }
              .error { background: white; padding: 30px; border-radius: 8px; box-shadow: 0 0 20px rgba(0,0,0,0.1); max-width: 700px; margin: 0 auto; }
              h1 { color: #e74c3c; }
              pre { white-space: pre-wrap; word-break: break-word; background: #fafafa; padding: 12px; border-radius: 6px; border: 1px solid #eee; }
              button { background: #3498db; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; margin-top: 20px; }
              button:hover { background: #2980b9; }
            </style>
          </head>
          <body>
            <div class="error">
              <h1>⚠️ Preview Error</h1>
              <p>Failed to generate DOCX preview. Please try downloading the file instead.</p>
              ${payload ? `<h3>Details</h3><pre>${payload.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</pre>` : ''}
              <button onclick="window.close()">Close</button>
            </div>
          </body>
          </html>
        `);
        loadingWindow.document.close();
        return;
      }

      // Fallback: if OK but not HTML, show generic error
      loadingWindow.document.open();
      loadingWindow.document.write(`
        <!DOCTYPE html>
        <html><body style="font-family:Arial;padding:40px;">Preview response was not HTML. Please download the file.</body></html>
      `);
      loadingWindow.document.close();
    } catch (error) {
      console.error('DOCX view error:', error);
      alert('Failed to open DOCX preview. Please try again or download the file.');
    }
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
                        onClick={() => handleViewDOCX(file)}
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

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-8 border border-blue-200 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="bg-white p-3 rounded-xl w-fit mb-4">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Rich Formatting
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced typography, styles, themes, and layout options for professional document creation with full formatting control
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-lg p-8 border border-green-200 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="bg-white p-3 rounded-xl w-fit mb-4">
                <FileText className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Collaboration Tools
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Track changes, comments, and version control support for seamless team collaboration and document review workflows
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg p-8 border border-purple-200 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="bg-white p-3 rounded-xl w-fit mb-4">
                <FileText className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Cross-Platform Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Compatible with Microsoft Word, Google Docs, LibreOffice, and other office suites across all operating systems
              </p>
            </div>
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
