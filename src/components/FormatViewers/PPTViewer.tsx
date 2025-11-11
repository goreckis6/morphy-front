import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { FileText, Upload, Eye, Download, ArrowLeft, CheckCircle, AlertCircle, Info, Zap, Presentation, Layout } from 'lucide-react';
import { FileUpload } from '../FileUpload';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { useFileValidation } from '../../hooks/useFileValidation';
import { getLanguageFromUrl } from '../../i18n';

export const PPTViewer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const { validateBatchFiles, validationError, clearValidationError } = useFileValidation();

  useEffect(() => {
    const lang = getLanguageFromUrl();
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [i18n]);

  const handleFilesSelected = (files: File[]) => {
    clearValidationError();
    
    // Filter only PPT/PPTX files
    const pptFiles = files.filter(file => {
      const extension = file.name.split('.').pop()?.toLowerCase();
      return ['ppt', 'pptx'].includes(extension || '');
    });
    
    const validation = validateBatchFiles(pptFiles);
    
    if (validation.isValid) {
      setSelectedFiles(pptFiles);
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

  const handleViewPPT = async (file: File) => {
    // Check file size (max 100MB for preview)
    const maxSize = 100 * 1024 * 1024; // 100MB
    if (file.size > maxSize) {
      alert(t('viewers.ppt.alerts.file_too_large', { size: (file.size / 1024 / 1024).toFixed(2), max: 100 }));
      return;
    }
    
    try {
      const loadingWindow = window.open('', '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes');
      if (!loadingWindow) {
        alert(t('viewers.ppt.alerts.popup_blocked'));
        return;
      }

      const loadingTitle = t('viewers.ppt.loading_window.title', { filename: file.name });
      const loadingMessage = t('viewers.ppt.loading_window.message');
      
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
              border-top: 4px solid #0ea5e9;
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
            <h2>${loadingTitle}</h2>
            <p>${loadingMessage}</p>
          </div>
        </body>
        </html>
      `);

      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('https://api.morphyhub.com/api/preview/ppt', {
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
            <title>${file.name} - PowerPoint Preview</title>
            <style>
              body {
                margin: 0;
                padding: 0;
                background: #f5f5f5;
                font-family: Arial, sans-serif;
              }
              .header-bar {
                background: linear-gradient(to right, #0ea5e9, #0284c7);
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
                color: #0ea5e9;
              }
              .btn-print:hover {
                background: #e0f2fe;
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
        const errorTitle = t('viewers.ppt.error_window.title');
        const errorMessage = t('viewers.ppt.error_window.message');
        const errorClose = t('viewers.ppt.error_window.close');
        
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
              h1 { color: #0ea5e9; }
              button {
                background: #0ea5e9;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 4px;
                cursor: pointer;
                margin-top: 20px;
              }
              button:hover { background: #0284c7; }
            </style>
          </head>
          <body>
            <div class="error">
              <h1>⚠️ ${errorTitle}</h1>
              <p>${errorMessage}</p>
              <button onclick="window.close()">${errorClose}</button>
            </div>
          </body>
          </html>
        `);
        loadingWindow.document.close();
      }
    } catch (error) {
      console.error('PPT view error:', error);
      alert(t('viewers.ppt.alerts.preview_failed'));
    }
  };

  return (
    <>
      <Helmet>
        <title>{t('viewers.ppt.meta_title')}</title>
        <meta name="description" content={t('viewers.ppt.meta_description')} />
        <meta name="keywords" content={t('viewers.ppt.meta_keywords')} />
        <meta property="og:title" content="Free PPT/PPTX Viewer - View PowerPoint Files Online | MorphyHub" />
        <meta property="og:description" content="Free professional PPT/PPTX (PowerPoint) viewer. Upload and preview Microsoft PowerPoint presentation files online." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://morphyhub.com/viewers/ppt" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free PPT/PPTX Viewer - View PowerPoint Files Online | MorphyHub" />
        <meta name="twitter:description" content="Free professional PPT/PPTX viewer. Upload and preview PowerPoint presentation files online." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Free PPT/PPTX Viewer",
            "description": "Free professional PPT/PPTX (PowerPoint) viewer",
            "url": "https://morphyhub.com/viewers/ppt",
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
        <div className="relative overflow-hidden bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600">
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
                    {t('viewers.ppt.hero_title')}
                  </h1>
                  <p className="text-xl text-sky-100">
                    {t('viewers.ppt.hero_subtitle')}
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
              <div className="p-3 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                {t('viewers.ppt.upload_title')}
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              {t('viewers.ppt.upload_description')}
            </p>
            <FileUpload 
              onFilesSelected={handleFilesSelected}
              acceptedFormats={['ppt', 'pptx']}
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
                  <div className="p-3 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {t('viewers.ppt.files_heading', { count: selectedFiles.length })}
                  </h2>
                </div>
              </div>

              <div className="mb-6 p-4 bg-sky-50 border border-sky-200 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-sky-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sky-900 mb-1">{t('viewers.ppt.how_to_title')}</h4>
                    <p className="text-sm text-sky-700" dangerouslySetInnerHTML={{ __html: t('viewers.ppt.how_to_description') }} />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-sky-50 rounded-xl p-4 hover:shadow-lg transition-all transform hover:scale-105 border border-gray-200">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-sky-100 rounded-lg">
                        <Presentation className="w-6 h-6 text-sky-600" />
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
                        onClick={() => handleViewPPT(file)}
                        className="w-full bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white text-sm font-medium py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <Eye className="w-4 h-4" />
                        <span>{t('viewers.ppt.buttons.view')}</span>
                      </button>
                      <button
                        onClick={() => handleDownload(file)}
                        className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                      >
                        <Download className="w-4 h-4" />
                        <span>{t('viewers.ppt.buttons.download')}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {t('viewers.ppt.features', { returnObjects: true }).map((feature: any, index: number) => (
              <div key={index} className={`bg-gradient-to-br ${index === 0 ? 'from-sky-50 to-blue-50 border-sky-200' : index === 1 ? 'from-blue-50 to-cyan-50 border-blue-200' : 'from-cyan-50 to-sky-50 border-cyan-200'} rounded-2xl shadow-lg p-8 border hover:shadow-xl transition-all transform hover:scale-105`}>
                <div className="bg-white p-3 rounded-xl w-fit mb-4">
                  {index === 0 && <Presentation className={`w-8 h-8 text-sky-600`} />}
                  {index === 1 && <Layout className={`w-8 h-8 text-blue-600`} />}
                  {index === 2 && <Zap className={`w-8 h-8 text-cyan-600`} />}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* About PPT/PPTX Format Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                {t('viewers.ppt.about_title')}
              </h2>
            </div>
            
            <div className="prose max-w-none text-gray-600">
              <p className="mb-6" dangerouslySetInnerHTML={{ __html: t('viewers.ppt.about_intro') }} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('viewers.ppt.advantages_title')}</h3>
                  <ul className="space-y-2 text-sm">
                    {t('viewers.ppt.advantages', { returnObjects: true }).map((item: string, index: number) => (
                      <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('viewers.ppt.use_cases_title')}</h3>
                  <ul className="space-y-2 text-sm">
                    {t('viewers.ppt.use_cases', { returnObjects: true }).map((item: string, index: number) => (
                      <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('viewers.ppt.specs_title')}</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">{t('viewers.ppt.specs_header_label')}</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">{t('viewers.ppt.specs_header_value')}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {t('viewers.ppt.specs', { returnObjects: true }).map((spec: any, index: number) => (
                        <tr key={index}>
                          <td className="py-2 text-sm font-medium text-gray-500">{spec.label}</td>
                          <td className="py-2 text-sm text-gray-900">{spec.value}</td>
                        </tr>
                      ))}
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
              className="inline-block bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {t('viewers.ppt.buttons.back')}
            </a>
          </div>
        </div>
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

