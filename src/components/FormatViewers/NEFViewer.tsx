import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Camera, Upload, Eye, Download, ArrowLeft, CheckCircle, AlertCircle, Info, Image as ImageIcon, Maximize2, Zap } from 'lucide-react';
import { FileUpload } from '../FileUpload';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { useFileValidation } from '../../hooks/useFileValidation';
import { useTranslation } from 'react-i18next';
import { usePathLanguageSync } from '../../hooks/usePathLanguageSync';

export const NEFViewer: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const { validateBatchFiles, validationError, clearValidationError } = useFileValidation();
  const { t, i18n } = useTranslation();
  usePathLanguageSync(i18n);

  const features = t('viewers.nef.features', { returnObjects: true }) as Array<{ title: string; description: string }>;
  const advantages = t('viewers.nef.advantages', { returnObjects: true }) as string[];
  const useCases = t('viewers.nef.use_cases', { returnObjects: true }) as string[];
  const specs = t('viewers.nef.specs', { returnObjects: true }) as Array<{ label: string; value: string }>;

  const handleFilesSelected = (files: File[]) => {
    clearValidationError();
    
    // Filter only NEF files
    const nefFiles = files.filter(file => {
      const extension = file.name.split('.').pop()?.toLowerCase();
      return extension === 'nef';
    });
    
    const validation = validateBatchFiles(nefFiles);
    
    if (validation.isValid) {
      setSelectedFiles(nefFiles);
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
      alert(t('viewers.nef.alerts.file_too_large', {
        size: (file.size / 1024 / 1024).toFixed(2),
        max: 100
      }));
      return;
    }
    
    try {
      const loadingWindow = window.open('', '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes');
      if (!loadingWindow) {
        alert(t('viewers.nef.alerts.popup_blocked'));
        return;
      }

      const loadingTitle = t('viewers.nef.loading_window.title');
      const loadingMessage = t('viewers.nef.loading_window.message', { filename: file.name });

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
            <h2>${loadingTitle}</h2>
            <p>${loadingMessage}</p>
          </div>
        </body>
        </html>
      `);

      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('https://api.morphyhub.com/api/preview/nef', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const html = await response.text();
        
        loadingWindow.document.open();
        loadingWindow.document.write(html);
        loadingWindow.document.close();
      } else {
        const errorTitle = t('viewers.nef.error_window.title');
        const errorMessage = t('viewers.nef.error_window.message');
        const closeText = t('viewers.nef.error_window.close');
        loadingWindow.document.open();
        loadingWindow.document.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>${errorTitle}</title>
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
              <h1>⚠️ ${errorTitle}</h1>
              <p>${errorMessage}</p>
              <button onclick="window.close()">${closeText}</button>
            </div>
          </body>
          </html>
        `);
        loadingWindow.document.close();
      }
    } catch (error) {
      console.error('NEF view error:', error);
      alert(t('viewers.nef.alerts.preview_failed'));
    }
  };

  return (
    <>
      <Helmet>
        <title>{t('viewers.nef.meta_title')}</title>
        <meta name="description" content={t('viewers.nef.meta_description')} />
        <meta name="keywords" content={t('viewers.nef.meta_keywords')} />
        <meta property="og:title" content={t('viewers.nef.meta_title')} />
        <meta property="og:description" content={t('viewers.nef.meta_description')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://morphyhub.com/viewers/nef" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('viewers.nef.meta_title')} />
        <meta name="twitter:description" content={t('viewers.nef.meta_description')} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": t('viewers.nef.hero_title'),
            "description": t('viewers.nef.meta_description'),
            "url": "https://morphyhub.com/viewers/nef",
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
                    {t('viewers.nef.hero_title')}
                  </h1>
                  <p className="text-xl text-amber-100">
                    {t('viewers.nef.hero_subtitle')}
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
                {t('viewers.nef.upload_title')}
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              {t('viewers.nef.upload_description')}
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
                    {t('viewers.nef.files_heading', { count: selectedFiles.length })}
                  </h2>
                </div>
              </div>

              <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-amber-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-1">{t('viewers.nef.how_to_title')}</h4>
                    <p className="text-sm text-amber-800" dangerouslySetInnerHTML={{ __html: t('viewers.nef.how_to_description') }} />
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
                        className="w-full bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white text-sm font-medium py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <Eye className="w-4 h-4" />
                        <span>{t('viewers.nef.buttons.view')}</span>
                      </button>
                      <button
                        onClick={() => handleDownload(file)}
                        className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                      >
                        <Download className="w-4 h-4" />
                        <span>{t('viewers.nef.buttons.download')}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => {
              const backgrounds = [
                'from-amber-50 to-yellow-50 border border-amber-200',
                'from-blue-50 to-cyan-50 border border-blue-200',
                'from-green-50 to-emerald-50 border border-green-200'
              ];
              const icons = [
                <Maximize2 className="w-8 h-8 text-amber-500" key="maximize" />,
                <Info className="w-8 h-8 text-blue-500" key="info" />,
                <Zap className="w-8 h-8 text-green-500" key="zap" />
              ];

              return (
                <div
                  key={feature.title}
                  className={`bg-gradient-to-br ${backgrounds[index]} rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all transform hover:scale-105`}
                >
                  <div className="bg-white p-3 rounded-xl w-fit mb-4">
                    {icons[index]}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* About NEF Section */}
           <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-200">
             <div className="flex items-center space-x-3 mb-6">
               <div className="p-3 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl">
                 <Camera className="w-6 h-6 text-white" />
               </div>
               <h2 className="text-3xl font-bold text-gray-900">
                {t('viewers.nef.about_title')}
               </h2>
             </div>
             
             <div className="prose max-w-none text-gray-600">
              <p className="mb-6" dangerouslySetInnerHTML={{ __html: t('viewers.nef.about_intro') }} />
 
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                 <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('viewers.nef.advantages_title')}</h3>
                  <ul className="space-y-2 text-sm">
                    {advantages.map((item, idx) => (
                      <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </ul>
                </div>
 
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('viewers.nef.use_cases_title')}</h3>
                  <ul className="space-y-2 text-sm">
                    {useCases.map((item, idx) => (
                      <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </ul>
                </div>
              </div>
 
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('viewers.nef.specs_title')}</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">{t('viewers.nef.specs_header_label')}</th>
                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">{t('viewers.nef.specs_header_value')}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {specs.map((row) => (
                        <tr key={row.label}>
                          <td className="py-2 text-sm font-medium text-gray-500">{row.label}</td>
                          <td className="py-2 text-sm text-gray-900">{row.value}</td>
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
              className="inline-block bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {t('viewers.nef.buttons.back')}
            </a>
          </div>
        </div>
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};
