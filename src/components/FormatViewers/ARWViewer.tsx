import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Camera, Upload, Eye, Download, ArrowLeft, CheckCircle, AlertCircle, Info, Image as ImageIcon, Maximize2, Zap } from 'lucide-react';
import { FileUpload } from '../FileUpload';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { useFileValidation } from '../../hooks/useFileValidation';
import { useTranslation } from 'react-i18next';

export const ARWViewer: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const { validateBatchFiles, validationError, clearValidationError } = useFileValidation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const path = window.location.pathname;
    if (path.startsWith('/pl/')) {
      i18n.changeLanguage('pl');
    } else if (path.startsWith('/de/')) {
      i18n.changeLanguage('de');
    } else {
      i18n.changeLanguage('en');
    }
  }, [i18n]);

  const handleFilesSelected = (files: File[]) => {
    clearValidationError();
    
    console.log('Files selected:', files.map(f => ({ name: f.name, size: f.size })));
    
    // Filter only ARW files
    const arwFiles = files.filter(file => {
      const extension = file.name.split('.').pop()?.toLowerCase();
      return ['arw', 'sr2', 'srf'].includes(extension || '');
    });
    
    console.log('ARW files after filter:', arwFiles.map(f => ({ name: f.name, size: f.size })));
    
    if (arwFiles.length === 0) {
      console.warn('No valid ARW files found');
      return;
    }
    
    const validation = validateBatchFiles(arwFiles);
    console.log('Validation result:', validation);
    
    if (validation.isValid) {
      setSelectedFiles(arwFiles);
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

  const handleViewARW = async (file: File) => {
    // Check file size (max 100MB for preview)
    const maxSize = 100 * 1024 * 1024; // 100MB
    if (file.size > maxSize) {
      alert(t('viewers.arw.alerts.file_too_large', { size: (file.size / 1024 / 1024).toFixed(2), max: '100' }));
      return;
    }
    
    try {
      const loadingWindow = window.open('', '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes');
      if (!loadingWindow) {
        alert(t('viewers.arw.alerts.popup_blocked'));
        return;
      }

      loadingWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>${t('viewers.arw.loading_window.title', { filename: file.name })}</title>
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
              border-top: 4px solid #10b981;
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
            <h2>${t('viewers.arw.loading_window.message')}</h2>
            <p>${t('viewers.arw.loading_window.title', { filename: file.name })}</p>
          </div>
        </body>
        </html>
      `);

      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('https://api.morphyhub.com/api/preview/arw', {
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
            <title>${file.name} - ARW Preview</title>
            <style>
              body {
                margin: 0;
                padding: 0;
                background: #1a1a1a;
                font-family: Arial, sans-serif;
                overflow: hidden;
              }
              .header-bar {
                background: linear-gradient(to right, #10b981, #059669);
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
                color: #10b981;
              }
              .btn-print:hover {
                background: #d1fae5;
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
                color: #10b981;
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
              h1 { color: #10b981; }
              button {
                background: #10b981;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 4px;
                cursor: pointer;
                margin-top: 20px;
              }
              button:hover { background: #059669; }
            </style>
          </head>
          <body>
            <div class="error">
              <h1>⚠️ ${t('viewers.arw.error_window.title')}</h1>
              <p>${t('viewers.arw.error_window.message')}</p>
              <button onclick="window.close()">${t('viewers.arw.error_window.close')}</button>
            </div>
          </body>
          </html>
        `);
        loadingWindow.document.close();
      }
    } catch (error) {
      console.error('ARW view error:', error);
      alert(t('viewers.arw.alerts.preview_failed'));
    }
  };

  return (
    <>
      <Helmet>
        <title>{t('viewers.arw.meta_title')}</title>
        <meta name="description" content={t('viewers.arw.meta_description')} />
        <meta name="keywords" content={t('viewers.arw.meta_keywords')} />
        <meta property="og:title" content={t('viewers.arw.meta_title')} />
        <meta property="og:description" content={t('viewers.arw.meta_description')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://morphyhub.com/viewers/arw" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('viewers.arw.meta_title')} />
        <meta name="twitter:description" content={t('viewers.arw.meta_description')} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Free ARW Viewer",
            "description": "Free professional ARW (Sony RAW) viewer with high-quality rendering",
            "url": "https://morphyhub.com/viewers/arw",
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
        <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-green-600 to-teal-700">
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
                    {t('viewers.arw.hero_title')}
                  </h1>
                  <p className="text-xl text-emerald-100">
                    {t('viewers.arw.hero_subtitle')}
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
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                {t('viewers.arw.upload_title')}
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              {t('viewers.arw.upload_description')}
            </p>
            <FileUpload 
              onFilesSelected={handleFilesSelected}
              acceptedFormats={['arw', 'sr2', 'srf']}
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
                  <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {t('viewers.arw.files_heading', { count: selectedFiles.length })}
                  </h2>
                </div>
              </div>

              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-emerald-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-emerald-900 mb-1">{t('viewers.arw.how_to_title')}</h4>
                    <p className="text-sm text-emerald-700" dangerouslySetInnerHTML={{ __html: t('viewers.arw.how_to_description') }} />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-emerald-50 rounded-xl p-4 hover:shadow-lg transition-all transform hover:scale-105 border border-gray-200">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-emerald-100 rounded-lg">
                        <Camera className="w-6 h-6 text-emerald-600" />
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
                        onClick={() => handleViewARW(file)}
                        className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white text-sm font-medium py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <Eye className="w-4 h-4" />
                        <span>{t('viewers.arw.buttons.view')}</span>
                      </button>
                      <button
                        onClick={() => handleDownload(file)}
                        className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                      >
                        <Download className="w-4 h-4" />
                        <span>{t('viewers.arw.buttons.download')}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {(() => {
              const features = t('viewers.arw.features', { returnObjects: true }) as Array<{ title: string; description: string }>;
              return features.map((feature, index) => (
                <div key={index} className={`bg-gradient-to-br ${index === 0 ? 'from-emerald-50 to-green-50 border-emerald-200' : index === 1 ? 'from-green-50 to-teal-50 border-green-200' : 'from-teal-50 to-emerald-50 border-teal-200'} rounded-2xl shadow-lg p-8 border hover:shadow-xl transition-all transform hover:scale-105`}>
                  <div className="bg-white p-3 rounded-xl w-fit mb-4">
                    {index === 0 && <ImageIcon className="w-8 h-8 text-emerald-600" />}
                    {index === 1 && <Maximize2 className="w-8 h-8 text-green-600" />}
                    {index === 2 && <Zap className="w-8 h-8 text-teal-600" />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3" dangerouslySetInnerHTML={{ __html: feature.title }} />
                  <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: feature.description }} />
                </div>
              ));
            })()}
          </div>

          {/* About ARW Format Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                {t('viewers.arw.about_title')}
              </h2>
            </div>
            
            <div className="prose max-w-none text-gray-600">
              <p className="mb-6" dangerouslySetInnerHTML={{ __html: t('viewers.arw.about_intro') }} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('viewers.arw.advantages_title')}</h3>
                  <ul className="space-y-2 text-sm">
                    {(() => {
                      const advantages = t('viewers.arw.advantages', { returnObjects: true }) as string[];
                      return advantages.map((advantage, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: advantage }} />
                      ));
                    })()}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('viewers.arw.compatible_cameras_title')}</h3>
                  <ul className="space-y-2 text-sm">
                    {(() => {
                      const compatibleCameras = t('viewers.arw.compatible_cameras', { returnObjects: true }) as string[];
                      return compatibleCameras.map((camera, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: camera }} />
                      ));
                    })()}
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('viewers.arw.specs_title')}</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">{t('viewers.arw.specs_header_label')}</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">{t('viewers.arw.specs_header_value')}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {(() => {
                        const specs = t('viewers.arw.specs', { returnObjects: true }) as Array<{ label: string; value: string }>;
                        return specs.map((spec, index) => (
                          <tr key={index}>
                            <td className="py-2 text-sm font-medium text-gray-500">{spec.label}</td>
                            <td className="py-2 text-sm text-gray-900">{spec.value}</td>
                          </tr>
                        ));
                      })()}
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
              className="inline-block bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {t('viewers.arw.buttons.back')}
            </a>
          </div>
        </div>
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};
