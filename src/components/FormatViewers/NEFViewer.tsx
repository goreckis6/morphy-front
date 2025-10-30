import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Camera, Upload, Eye, Download, ArrowLeft, CheckCircle, AlertCircle, Info, Image as ImageIcon, Maximize2, Zap } from 'lucide-react';
import { FileUpload } from '../FileUpload';
import { Header } from '../Header';
import { useFileValidation } from '../../hooks/useFileValidation';

export const NEFViewer: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const { validateBatchFiles, validationError, clearValidationError } = useFileValidation();

  const handleFilesSelected = (files: File[]) => {
    clearValidationError();
    
    console.log('Files selected:', files.map(f => ({ name: f.name, size: f.size })));
    
    // Filter only NEF files
    const nefFiles = files.filter(file => {
      const extension = file.name.split('.').pop()?.toLowerCase();
      return extension === 'nef';
    });
    
    console.log('NEF files after filter:', nefFiles.map(f => ({ name: f.name, size: f.size })));
    
    if (nefFiles.length === 0) {
      console.warn('No valid NEF files found');
      return;
    }
    
    const validation = validateBatchFiles(nefFiles);
    console.log('Validation result:', validation);
    
    if (validation.isValid) {
      setSelectedFiles(nefFiles);
      console.log('Files set successfully');
    } else {
      console.error('Validation failed:', validation.error);
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

  const handleViewNEF = async (file: File) => {
    // Check file size (max 100MB for preview)
    const maxSize = 100 * 1024 * 1024; // 100MB
    if (file.size > maxSize) {
      alert(`File is too large for preview (${(file.size / 1024 / 1024).toFixed(2)} MB). Maximum size is 100 MB. Please download the file instead.`);
      return;
    }
    
    try {
      const loadingWindow = window.open('', '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes');
      if (!loadingWindow) {
        alert('Please allow pop-ups to view the NEF file');
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
              background: #1a1a1a;
              margin: 0;
            }
            .loader {
              text-align: center;
            }
            .spinner {
              border: 4px solid #333;
              border-top: 4px solid #f59e0b;
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
            <h2>Processing NEF RAW Image...</h2>
            <p>Rendering ${file.name}...</p>
          </div>
        </body>
        </html>
      `);

      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('https://api.morphyimg.com/api/preview/nef', {
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
                background: #1a1a1a;
              }
              .error {
                background: white;
                padding: 30px;
                border-radius: 8px;
                box-shadow: 0 0 20px rgba(0,0,0,0.3);
                max-width: 600px;
                margin: 0 auto;
              }
              h1 { color: #dc2626; }
              button {
                background: #f59e0b;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 4px;
                cursor: pointer;
                margin-top: 20px;
              }
              button:hover { background: #d97706; }
            </style>
          </head>
          <body>
            <div class="error">
              <h1>⚠️ Preview Error</h1>
              <p>Failed to generate NEF preview. Please try downloading the file instead.</p>
              <button onclick="window.close()">Close</button>
            </div>
          </body>
          </html>
        `);
        loadingWindow.document.close();
      }
    } catch (error) {
      console.error('NEF view error:', error);
      alert('Failed to open NEF preview. Please try again or download the file.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Free NEF Viewer - View Nikon RAW Files Online | MorphyIMG</title>
        <meta name="description" content="Free professional NEF (Nikon RAW) viewer with high-quality rendering. Upload and preview NEF files online with EXIF metadata and full resolution. Supports batch viewing up to 20 files. 100% free NEF viewer tool." />
        <meta name="keywords" content="NEF viewer, Nikon RAW viewer, NEF file viewer online, RAW viewer, Nikon D850 viewer, camera RAW viewer, free NEF viewer, NEF preview" />
        <meta property="og:title" content="Free NEF Viewer - View Nikon RAW Files Online | MorphyIMG" />
        <meta property="og:description" content="Free professional NEF (Nikon RAW) viewer with high-quality rendering. Upload and preview Nikon RAW files online with EXIF metadata." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://morphyimg.com/viewers/nef" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free NEF Viewer - View Nikon RAW Files Online | MorphyIMG" />
        <meta name="twitter:description" content="Free professional NEF (Nikon RAW) viewer with high-quality rendering. Upload and preview Nikon RAW files online." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Free NEF Viewer",
            "description": "Free professional NEF (Nikon RAW) viewer with high-quality rendering",
            "url": "https://morphyimg.com/viewers/nef",
            "applicationCategory": "ImageViewer",
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
        <div className="relative overflow-hidden bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-700">
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
                  <Camera className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    Free NEF Viewer
                  </h1>
                  <p className="text-xl text-amber-100">
                    View Nikon RAW files with professional rendering - 100% free
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
              <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Upload NEF Files
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Drag and drop your Nikon NEF (RAW) files or click to browse. Supports NEF files up to 100MB each, with batch upload support for up to 20 files.
            </p>
            <FileUpload 
              onFilesSelected={handleFilesSelected}
              acceptedFormats={['nef']}
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
                  <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Your NEF Files ({selectedFiles.length})
                  </h2>
                </div>
              </div>

              <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-amber-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-1">How to View NEF Files</h4>
                    <p className="text-sm text-amber-700">
                      Click the <strong>"View RAW"</strong> button to render and preview the NEF file with professional quality. 
                      The viewer will process the RAW data and display it as a high-quality image. Files under 100 MB can be previewed.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-amber-50 rounded-xl p-4 hover:shadow-lg transition-all transform hover:scale-105 border border-gray-200">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-amber-100 rounded-lg">
                        <Camera className="w-6 h-6 text-amber-600" />
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
                        onClick={() => handleViewNEF(file)}
                        className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white text-sm font-medium py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View RAW</span>
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
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-lg p-8 border border-amber-200 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="bg-white p-3 rounded-xl w-fit mb-4">
                <ImageIcon className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                RAW Processing
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Professional RAW processing with rawpy (LibRaw) for accurate color and detail rendering
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl shadow-lg p-8 border border-orange-200 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="bg-white p-3 rounded-xl w-fit mb-4">
                <Maximize2 className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Full Resolution
              </h3>
              <p className="text-gray-600 leading-relaxed">
                View NEF files at full resolution with proper demosaicing and color correction
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl shadow-lg p-8 border border-yellow-200 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="bg-white p-3 rounded-xl w-fit mb-4">
                <Zap className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Fast Preview
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Quick preview generation with embedded JPEG extraction for instant viewing
              </p>
            </div>
          </div>

          {/* About NEF Format Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                About NEF Format
              </h2>
            </div>
            
            <div className="prose max-w-none text-gray-600">
              <p className="mb-6">
                NEF (Nikon Electronic Format) is Nikon's proprietary RAW image format used by Nikon digital cameras. 
                Unlike JPEG files, NEF files contain unprocessed sensor data, providing maximum flexibility for post-processing 
                and the highest image quality. NEF files preserve all the information captured by the camera's sensor, 
                including extended dynamic range and color depth.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Advantages</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Maximum quality</strong> - Uncompressed sensor data</li>
                    <li>• <strong>12/14/16-bit depth</strong> - Greater color and tonal range</li>
                    <li>• <strong>Non-destructive</strong> - Original data always preserved</li>
                    <li>• <strong>White balance</strong> - Adjust after capture</li>
                    <li>• <strong>Extended dynamic range</strong> - More detail in highlights/shadows</li>
                    <li>• <strong>Professional workflow</strong> - Industry-standard RAW format</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Compatible Cameras</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Nikon Z Series</strong> - Z9, Z8, Z7 II, Z6 II, Z5, Z fc</li>
                    <li>• <strong>Nikon D Series</strong> - D850, D780, D500, D7500</li>
                    <li>• <strong>Professional</strong> - D6, D5, D4S, Df</li>
                    <li>• <strong>Entry-level</strong> - D3500, D5600, D7200</li>
                    <li>• <strong>All Nikon DSLRs</strong> - Full NEF support</li>
                    <li>• <strong>Mirrorless</strong> - Complete Z-mount lineup</li>
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
                        <td className="py-2 text-sm text-gray-900">.nef</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">MIME Type</td>
                        <td className="py-2 text-sm text-gray-900">image/x-nikon-nef</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">Bit Depth</td>
                        <td className="py-2 text-sm text-gray-900">12-bit, 14-bit, 16-bit (lossless compressed)</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">Color Space</td>
                        <td className="py-2 text-sm text-gray-900">Linear RGB (sensor native)</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">Compression</td>
                        <td className="py-2 text-sm text-gray-900">Lossless, Lossy, Uncompressed</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">Developed By</td>
                        <td className="py-2 text-sm text-gray-900">Nikon Corporation</td>
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
              className="inline-block bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
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
                <div className="p-2 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl">
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">MorphyIMG</h2>
              </div>
              
              <p className="text-gray-300 mb-6">
                Free professional NEF viewer for all your Nikon RAW files.
              </p>
              
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-300">
                <span>© 2025 MorphyIMG. Built for Nikon photographers.</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
