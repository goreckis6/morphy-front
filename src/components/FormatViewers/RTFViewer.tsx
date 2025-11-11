import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { FileText, Upload, Eye, Download, ArrowLeft, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { FileUpload } from '../FileUpload';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { useFileValidation } from '../../hooks/useFileValidation';
import { getLanguageFromUrl } from '../../i18n';

export const RTFViewer: React.FC = () => {
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
    // Clear previous validation errors
    clearValidationError();
    
    // Filter only RTF files
    const rtfFiles = files.filter(file => {
      const extension = file.name.split('.').pop()?.toLowerCase();
      return extension === 'rtf';
    });
    
    // Validate the files
    const validation = validateBatchFiles(rtfFiles);
    
    if (validation.isValid) {
      setSelectedFiles(rtfFiles);
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

  const handleViewRTF = async (file: File) => {
    // Check file size (max 100MB for preview)
    const maxSize = 100 * 1024 * 1024; // 100MB
    if (file.size > maxSize) {
      alert(t('viewers.rtf.alerts.file_too_large', { size: (file.size / 1024 / 1024).toFixed(2), max: 100 }));
      return;
    }
    
    try {
      // Show loading state
      const loadingWindow = window.open('', '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes');
      if (!loadingWindow) {
        alert(t('viewers.rtf.alerts.popup_blocked'));
        return;
      }

      const loadingTitle = t('viewers.rtf.loading_window.title', { filename: file.name });
      const loadingMessage = t('viewers.rtf.loading_window.message');

      loadingWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>${loadingTitle}</title>
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
              border-top: 4px solid #e67e22;
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
            <h2>${loadingTitle}</h2>
            <p>${loadingMessage}</p>
          </div>
        </body>
        </html>
      `);

      // Send file to backend for conversion
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('https://api.morphyhub.com/api/preview/rtf', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const html = await response.text();
        loadingWindow.document.open();
        loadingWindow.document.write(html);
        loadingWindow.document.close();
      } else {
        const errorTitle = t('viewers.rtf.error_window.title');
        const errorMessage = t('viewers.rtf.error_window.message');
        const errorClose = t('viewers.rtf.error_window.close');
        
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
                background: #f5f5f5;
              }
              .error {
                background: white;
                padding: 30px;
                border-radius: 8px;
                box-shadow: 0 0 20px rgba(0,0,0,0.1);
                max-width: 600px;
                margin: 0 auto;
              }
              h1 { color: #e74c3c; }
              button {
                background: #e67e22;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 4px;
                cursor: pointer;
                margin-top: 20px;
              }
              button:hover { background: #f39c12; }
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
      console.error('RTF view error:', error);
      alert(t('viewers.rtf.alerts.preview_failed'));
    }
  };

  return (
    <>
      <Helmet>
        <title>{t('viewers.rtf.meta_title')}</title>
        <meta name="description" content={t('viewers.rtf.meta_description')} />
        <meta name="keywords" content={t('viewers.rtf.meta_keywords')} />
        <meta property="og:title" content="Free RTF Viewer - View Rich Text Format Documents Online | MorphyHub" />
        <meta property="og:description" content="Free professional RTF viewer for viewing Rich Text Format documents online. Upload and preview RTF files with formatting preservation and cross-platform compatibility." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://morphyhub.com/viewers/rtf" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free RTF Viewer - View Rich Text Format Documents Online | MorphyHub" />
        <meta name="twitter:description" content="Free professional RTF viewer for viewing Rich Text Format documents online. Upload and preview RTF files with formatting preservation and cross-platform compatibility." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Free RTF Viewer",
            "description": "Free professional RTF viewer for viewing Rich Text Format documents online",
            "url": "https://morphyhub.com/viewers/rtf",
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
        <div className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-red-600 to-pink-700">
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
                    {t('viewers.rtf.hero_title')}
                  </h1>
                  <p className="text-xl text-orange-100">
                    {t('viewers.rtf.hero_subtitle')}
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
              <div className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                {t('viewers.rtf.upload_title')}
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              {t('viewers.rtf.upload_description')}
            </p>
            <FileUpload 
              onFilesSelected={handleFilesSelected}
              acceptedFormats={['rtf']}
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
                    {t('viewers.rtf.files_heading', { count: selectedFiles.length })}
                  </h2>
          </div>
        </div>

              {/* How to View Instructions */}
              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">{t('viewers.rtf.how_to_title')}</h4>
                    <p className="text-sm text-blue-700" dangerouslySetInnerHTML={{ __html: t('viewers.rtf.how_to_description') }} />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-xl p-4 hover:shadow-lg transition-all transform hover:scale-105 border border-gray-200">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-orange-100 rounded-lg">
                        <FileText className="w-6 h-6 text-orange-600" />
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
                        onClick={() => handleViewRTF(file)}
                        className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white text-sm font-medium py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                        >
                        <Eye className="w-4 h-4" />
                        <span>{t('viewers.rtf.buttons.view')}</span>
                        </button>
                        <button
                        onClick={() => handleDownload(file)}
                        className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                        >
                        <Download className="w-4 h-4" />
                          <span>{t('viewers.rtf.buttons.download')}</span>
                        </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {t('viewers.rtf.features', { returnObjects: true }).map((feature: any, index: number) => (
              <div key={index} className={`bg-gradient-to-br ${index === 0 ? 'from-orange-50 to-red-50 border-orange-200' : index === 1 ? 'from-blue-50 to-indigo-50 border-blue-200' : 'from-green-50 to-emerald-50 border-green-200'} rounded-2xl shadow-lg p-8 border hover:shadow-xl transition-all transform hover:scale-105`}>
                <div className="bg-white p-3 rounded-xl w-fit mb-4">
                  <FileText className={`w-8 h-8 ${index === 0 ? 'text-orange-600' : index === 1 ? 'text-blue-600' : 'text-green-600'}`} />
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

          {/* About RTF Format Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                {t('viewers.rtf.about_title')}
              </h2>
            </div>
            
            <div className="prose max-w-none text-gray-600">
              <p className="mb-6">
                {t('viewers.rtf.about_intro')}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('viewers.rtf.advantages_title')}</h3>
                  <ul className="space-y-2 text-sm">
                    {t('viewers.rtf.advantages', { returnObjects: true }).map((item: string, index: number) => (
                      <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('viewers.rtf.use_cases_title')}</h3>
                  <ul className="space-y-2 text-sm">
                    {t('viewers.rtf.use_cases', { returnObjects: true }).map((item: string, index: number) => (
                      <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                </ul>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('viewers.rtf.specs_title')}</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">{t('viewers.rtf.specs_header_label')}</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">{t('viewers.rtf.specs_header_value')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {t('viewers.rtf.specs', { returnObjects: true }).map((spec: any, index: number) => (
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
              className="inline-block bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {t('viewers.rtf.buttons.back')}
            </a>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
            </div>
    </>
  );
};
