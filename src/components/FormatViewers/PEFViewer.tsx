import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Camera, Upload, Eye, Download, ArrowLeft, CheckCircle, AlertCircle, Info, Image as ImageIcon, Maximize2, Zap } from 'lucide-react';
import { FileUpload } from '../FileUpload';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { useFileValidation } from '../../hooks/useFileValidation';

export const PEFViewer: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const { validateBatchFiles, validationError, clearValidationError } = useFileValidation();

  const handleFilesSelected = (files: File[]) => {
    clearValidationError();
    
    console.log('Files selected:', files.map(f => ({ name: f.name, size: f.size })));
    
    // Filter only PEF files
    const pefFiles = files.filter(file => {
      const extension = file.name.split('.').pop()?.toLowerCase();
      return extension === 'pef';
    });
    
    console.log('PEF files after filter:', pefFiles.map(f => ({ name: f.name, size: f.size })));
    
    if (pefFiles.length === 0) {
      console.warn('No valid PEF files found');
      return;
    }
    
    const validation = validateBatchFiles(pefFiles);
    console.log('Validation result:', validation);
    
    if (validation.isValid) {
      setSelectedFiles(pefFiles);
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

  const handleViewPEF = async (file: File) => {
    // Check file size (max 100MB for preview)
    const maxSize = 100 * 1024 * 1024; // 100MB
    if (file.size > maxSize) {
      alert(`File is too large for preview (${(file.size / 1024 / 1024).toFixed(2)} MB). Maximum size is 100 MB. Please download the file instead.`);
      return;
    }
    
    try {
      const loadingWindow = window.open('', '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes');
      if (!loadingWindow) {
        alert('Please allow pop-ups to view the PEF file');
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
            <h2>Processing PEF RAW Image...</h2>
            <p>Rendering ${file.name}...</p>
          </div>
        </body>
        </html>
      `);

      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('https://api.morphyimg.com/api/preview/pef', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        const imageUrl = data.imageUrl;
        const metadata = data.metadata || {};
        
        loadingWindow.document.open();
        loadingWindow.document.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>${file.name} - PEF Preview</title>
            <style>
              body {
                margin: 0;
                padding: 0;
                background: #1a1a1a;
                font-family: Arial, sans-serif;
                overflow: hidden;
              }
              .header-bar {
                background: linear-gradient(to right, #14b8a6, #0d9488);
                color: white;
                padding: 15px 30px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                box-shadow: 0 2px 10px rgba(0,0,0,0.3);
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                z-index: 1000;
              }
              .header-title {
                font-size: 18px;
                font-weight: 600;
                display: flex;
                align-items: center;
                gap: 10px;
              }
              .header-controls {
                display: flex;
                gap: 10px;
                align-items: center;
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
              .btn-zoom {
                background: rgba(255,255,255,0.2);
                color: white;
                border: 1px solid rgba(255,255,255,0.3);
                padding: 8px 12px;
                min-width: 40px;
                font-size: 16px;
              }
              .btn-zoom:hover {
                background: rgba(255,255,255,0.3);
                transform: scale(1.05);
              }
              .zoom-level {
                color: white;
                font-size: 14px;
                font-weight: 600;
                min-width: 50px;
                text-align: center;
              }
              .btn-rotate {
                background: rgba(255,255,255,0.2);
                color: white;
                border: 1px solid rgba(255,255,255,0.3);
                padding: 8px 16px;
              }
              .btn-rotate:hover {
                background: rgba(255,255,255,0.3);
                transform: scale(1.05);
              }
              .btn-print {
                background: white;
                color: #14b8a6;
              }
              .btn-print:hover {
                background: #ccfbf1;
                transform: scale(1.05);
              }
              .btn-close {
                background: rgba(255,255,255,0.2);
                color: white;
                border: 1px solid rgba(255,255,255,0.3);
              }
              .btn-close:hover {
                background: rgba(255,255,255,0.3);
                transform: scale(1.05);
              }
              .metadata-bar {
                background: rgba(0,0,0,0.7);
                color: white;
                padding: 15px 30px;
                position: fixed;
                top: 70px;
                left: 0;
                right: 0;
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                gap: 15px;
                font-size: 13px;
                border-bottom: 1px solid rgba(255,255,255,0.1);
                backdrop-filter: blur(10px);
              }
              .metadata-item {
                display: flex;
                flex-direction: column;
              }
              .metadata-label {
                color: #14b8a6;
                font-size: 11px;
                font-weight: 600;
                margin-bottom: 3px;
                text-transform: uppercase;
              }
              .metadata-value {
                color: white;
                font-size: 13px;
              }
              .image-container {
                position: fixed;
                top: 145px;
                left: 0;
                right: 0;
                bottom: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                overflow: auto;
                padding: 20px;
              }
              img {
                box-shadow: 0 4px 20px rgba(0,0,0,0.5);
                transition: transform 0.3s ease;
                cursor: move;
              }
              @media print {
                .header-bar { display: none; }
                .metadata-bar { display: none; }
                .image-container { top: 0; }
              }
            </style>
          </head>
          <body>
            <div class="header-bar">
              <div class="header-title">
                <span>📷</span>
                <span>${file.name}</span>
              </div>
              <div class="header-controls">
                <button onclick="zoomOut()" class="btn btn-zoom">−</button>
                <span class="zoom-level" id="zoom-level">100%</span>
                <button onclick="zoomIn()" class="btn btn-zoom">+</button>
                <button onclick="rotateLeft()" class="btn btn-rotate">
                  ↶ Rotate Left
                </button>
                <button onclick="rotateRight()" class="btn btn-rotate">
                  Rotate Right ↷
                </button>
                <button onclick="window.print()" class="btn btn-print">
                  🖨️ Print
                </button>
                <button onclick="window.close()" class="btn btn-close">
                  ✖️ Close
                </button>
              </div>
            </div>
            <div class="metadata-bar">
              <div class="metadata-item">
                <span class="metadata-label">Date Taken</span>
                <span class="metadata-value">${metadata.dateTaken || 'N/A'}</span>
              </div>
              <div class="metadata-item">
                <span class="metadata-label">Dimensions</span>
                <span class="metadata-value">${metadata.dimensions || 'N/A'}</span>
              </div>
              <div class="metadata-item">
                <span class="metadata-label">File Size</span>
                <span class="metadata-value">${metadata.fileSize || 'N/A'}</span>
              </div>
              <div class="metadata-item">
                <span class="metadata-label">ISO</span>
                <span class="metadata-value">${metadata.iso || 'N/A'}</span>
              </div>
              <div class="metadata-item">
                <span class="metadata-label">Camera Model</span>
                <span class="metadata-value">${metadata.camera || 'N/A'}</span>
              </div>
              <div class="metadata-item">
                <span class="metadata-label">Exposure</span>
                <span class="metadata-value">${metadata.exposure || 'N/A'}</span>
              </div>
            </div>
            <div class="image-container">
              <img id="preview-image" src="${imageUrl}" alt="${file.name}">
            </div>
            <script>
              let rotation = 0;
              let scale = 1.0;
              const img = document.getElementById('preview-image');
              
              function updateTransform() {
                img.style.transform = 'rotate(' + rotation + 'deg) scale(' + scale + ')';
              }
              
              function rotateLeft() {
                rotation -= 90;
                updateTransform();
              }
              
              function rotateRight() {
                rotation += 90;
                updateTransform();
              }
              
              function zoomIn() {
                if (scale < 3.0) {
                  scale += 0.25;
                  document.getElementById('zoom-level').textContent = Math.round(scale * 100) + '%';
                  updateTransform();
                }
              }
              
              function zoomOut() {
                if (scale > 0.25) {
                  scale -= 0.25;
                  document.getElementById('zoom-level').textContent = Math.round(scale * 100) + '%';
                  updateTransform();
                }
              }
            </script>
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
              <p>Failed to generate PEF preview. Please try downloading the file instead.</p>
              <button onclick="window.close()">Close</button>
            </div>
          </body>
          </html>
        `);
        loadingWindow.document.close();
      }
    } catch (error) {
      console.error('PEF view error:', error);
      alert('Failed to open PEF preview. Please try again or download the file.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Free PEF Viewer - View Pentax RAW Files Online | MorphyIMG</title>
        <meta name="description" content="Free professional PEF (Pentax Electronic File) viewer with high-quality rendering. Upload and preview Pentax RAW files online with EXIF metadata and full resolution. Supports batch viewing up to 20 files. 100% free PEF viewer tool." />
        <meta name="keywords" content="PEF viewer, Pentax RAW viewer, PEF file viewer online, RAW viewer, Pentax K viewer, camera RAW viewer, free PEF viewer, PEF preview" />
        <meta property="og:title" content="Free PEF Viewer - View Pentax RAW Files Online | MorphyIMG" />
        <meta property="og:description" content="Free professional PEF (Pentax Electronic File) viewer with high-quality rendering. Upload and preview Pentax RAW files online with EXIF metadata." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://morphyimg.com/viewers/pef" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free PEF Viewer - View Pentax RAW Files Online | MorphyIMG" />
        <meta name="twitter:description" content="Free professional PEF (Pentax Electronic File) viewer with high-quality rendering. Upload and preview Pentax RAW files online." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Free PEF Viewer",
            "description": "Free professional PEF (Pentax Electronic File) viewer with high-quality rendering",
            "url": "https://morphyimg.com/viewers/pef",
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
        <div className="relative overflow-hidden bg-gradient-to-r from-teal-600 via-emerald-600 to-green-700">
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
                    Free PEF Viewer
                  </h1>
                  <p className="text-xl text-teal-100">
                    View Pentax RAW files with professional rendering - 100% free
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
                Upload PEF Files
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Drag and drop your Pentax PEF (RAW) files or click to browse. Supports PEF files up to 100MB each, with batch upload support for up to 20 files.
            </p>
            <FileUpload 
              onFilesSelected={handleFilesSelected}
              acceptedFormats={['pef']}
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
                    Your PEF Files ({selectedFiles.length})
                  </h2>
                </div>
              </div>

              <div className="mb-6 p-4 bg-teal-50 border border-teal-200 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-teal-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-teal-900 mb-1">How to View PEF Files</h4>
                    <p className="text-sm text-teal-700">
                      Click the <strong>"View RAW"</strong> button to render and preview the PEF file with professional quality. 
                      The viewer will process the RAW data with zoom, rotation, and EXIF metadata display. Files under 100 MB can be previewed.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-teal-50 rounded-xl p-4 hover:shadow-lg transition-all transform hover:scale-105 border border-gray-200">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-teal-100 rounded-lg">
                        <Camera className="w-6 h-6 text-teal-600" />
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
                        onClick={() => handleViewPEF(file)}
                        className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white text-sm font-medium py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
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
            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl shadow-lg p-8 border border-teal-200 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="bg-white p-3 rounded-xl w-fit mb-4">
                <ImageIcon className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                RAW Processing
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Professional RAW processing with rawpy (LibRaw) for accurate Pentax color rendering
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl shadow-lg p-8 border border-emerald-200 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="bg-white p-3 rounded-xl w-fit mb-4">
                <Maximize2 className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Full Resolution
              </h3>
              <p className="text-gray-600 leading-relaxed">
                View PEF files at full resolution with proper demosaicing and color correction
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl shadow-lg p-8 border border-green-200 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="bg-white p-3 rounded-xl w-fit mb-4">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Fast Preview
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Quick preview generation with embedded JPEG extraction for instant viewing
              </p>
            </div>
          </div>

          {/* About PEF Format Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                About PEF Format
              </h2>
            </div>
            
            <div className="prose max-w-none text-gray-600">
              <p className="mb-6">
                PEF (Pentax Electronic File) is Pentax's proprietary RAW image format used by Pentax and Ricoh digital cameras. 
                PEF files contain unprocessed sensor data from Pentax cameras, preserving maximum image quality and providing 
                complete flexibility for post-processing. The format supports 12-bit or 14-bit color depth and includes 
                comprehensive EXIF metadata. Pentax cameras are known for their excellent in-body image stabilization (Shake Reduction), 
                weather sealing, and unique features like Pixel Shift Resolution for ultra-high detail capture.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Advantages</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Maximum quality</strong> - Uncompressed sensor data</li>
                    <li>• <strong>12/14-bit depth</strong> - Greater color and tonal range</li>
                    <li>• <strong>Non-destructive</strong> - Original data always preserved</li>
                    <li>• <strong>Shake Reduction</strong> - In-body stabilization data</li>
                    <li>• <strong>Pixel Shift info</strong> - High-res composite metadata</li>
                    <li>• <strong>DNG conversion</strong> - Can convert to Adobe DNG</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Compatible Cameras</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Pentax K-1 Series</strong> - K-1 Mark II (36.4 MP FF)</li>
                    <li>• <strong>Pentax K-3 Series</strong> - K-3 III (25.7 MP APS-C)</li>
                    <li>• <strong>Pentax KP</strong> - 24.3 MP compact flagship</li>
                    <li>• <strong>Pentax K-70</strong> - 24.2 MP weather-sealed</li>
                    <li>• <strong>Ricoh GR Series</strong> - GR III, GR IIIx (compact)</li>
                    <li>• <strong>All Pentax DSLRs</strong> - Full PEF support</li>
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
                        <td className="py-2 text-sm text-gray-900">.pef</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">MIME Type</td>
                        <td className="py-2 text-sm text-gray-900">image/x-pentax-pef</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">Bit Depth</td>
                        <td className="py-2 text-sm text-gray-900">12-bit or 14-bit (compressed or uncompressed)</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">Color Space</td>
                        <td className="py-2 text-sm text-gray-900">Linear RGB (sensor native)</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">Compression</td>
                        <td className="py-2 text-sm text-gray-900">Lossless or uncompressed</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">Developed By</td>
                        <td className="py-2 text-sm text-gray-900">Pentax / Ricoh Imaging</td>
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
        <Footer />
      </div>
    </>
  );
};
