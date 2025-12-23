import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { FileText, Upload, Eye, Download, ArrowLeft, CheckCircle, AlertCircle, Info, Star, Sparkles, Layers, Zap, Palette, FileImage } from 'lucide-react';
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

      const response = await fetch('https://api.formipeek.com/api/preview/rtf', {
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
        <meta property="og:url" content="https://formipeek.com/viewers/rtf" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free RTF Viewer - View Rich Text Format Documents Online | MorphyHub" />
        <meta name="twitter:description" content="Free professional RTF viewer for viewing Rich Text Format documents online. Upload and preview RTF files with formatting preservation and cross-platform compatibility." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Free RTF Viewer",
            "description": "Free professional RTF viewer for viewing Rich Text Format documents online",
            "url": "https://formipeek.com/viewers/rtf",
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

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-red-50">
        <Header />
      
        {/* Hero Section - Redesigned */}
        <div className="relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-red-600 to-pink-700">
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat'
              }}
            ></div>
          </div>
          
          {/* Floating Orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
            <div className="flex flex-col items-center text-center">
              {/* Back Button - Floating */}
              <button
                onClick={() => window.location.href = '/viewers'}
                className="absolute top-4 left-4 sm:left-6 p-2 sm:p-3 bg-white/10 backdrop-blur-md text-white/90 hover:text-white hover:bg-white/20 rounded-xl transition-all duration-300 transform hover:scale-110 shadow-lg border border-white/20"
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Icon with Glow Effect - Smaller */}
              <div className="relative mb-2 sm:mb-3">
                <div className="absolute inset-0 bg-white/30 rounded-2xl blur-xl transform scale-125"></div>
                <div className="relative p-2 sm:p-3 bg-white/20 backdrop-blur-xl rounded-2xl border border-white/30 shadow-xl">
                  <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
              </div>

              {/* Title - Smaller and moved up */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                {t('viewers.rtf.hero_title')}
              </h1>
              
              {/* Subtitle - More visible */}
              <p className="text-sm sm:text-base md:text-lg text-white/95 max-w-2xl mx-auto mb-3 sm:mb-4 leading-relaxed font-medium">
                {t('viewers.rtf.hero_subtitle')}
              </p>

              {/* Quick Stats - More visible */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                <div className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-md">
                  <span className="text-white text-xs sm:text-sm font-semibold">{t('viewers.rtf.quick_stats.rich_formatting', '✓ Rich Formatting')}</span>
                </div>
                <div className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-md">
                  <span className="text-white text-xs sm:text-sm font-semibold">{t('viewers.rtf.quick_stats.cross_platform', '🌐 Cross-Platform')}</span>
                </div>
                <div className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-md">
                  <span className="text-white text-xs sm:text-sm font-semibold">{t('viewers.rtf.quick_stats.fast_processing', '⚡ Fast Processing')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 relative z-10">
          {/* Upload Section - Glassmorphism Card */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 mb-8 border border-white/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <Upload className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  {t('viewers.rtf.upload_title')}
                </h2>
                <p className="text-gray-600 mt-1 text-sm sm:text-base">
                  {t('viewers.rtf.upload_description')}
                </p>
              </div>
            </div>
            <FileUpload 
              onFilesSelected={handleFilesSelected}
              acceptedFormats={['rtf']}
              maxFiles={20}
              maxSize={100 * 1024 * 1024}
              hideFormatList={true}
              showTotalSize={true}
              translationKeys={{
                dragDropText: t('viewers.rtf.upload.drag_drop_text', 'Drag & Drop Your Files Here'),
                clickBrowseText: t('viewers.rtf.upload.click_browse_text', 'or click the button below to browse'),
                chooseFilesButton: t('viewers.rtf.upload.choose_files_button', 'Choose Files'),
                maxFilesInfo: t('viewers.rtf.upload.max_files_info', 'Max {maxFiles} files • Up to {maxSize} Total')
              }}
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


          {/* Features Section - Redesigned Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {(Array.isArray(t('viewers.rtf.features', { returnObjects: true })) ? t('viewers.rtf.features', { returnObjects: true }) : []).map((feature: any, index: number) => {
              const gradients = [
                'from-orange-500 to-red-500',
                'from-red-500 to-pink-500',
                'from-pink-500 to-orange-500'
              ];
              const iconNodes = [
                <FileText className="w-8 h-8 text-white" key="filetext" />,
                <Zap className="w-8 h-8 text-white" key="zap" />,
                <Palette className="w-8 h-8 text-white" key="palette" />
              ];
              return (
                <div
                  key={feature.title || index}
                  className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 hover:border-transparent shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  {/* Icon */}
                  <div className={`relative mb-6 w-16 h-16 bg-gradient-to-br ${gradients[index]} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    {iconNodes[index]}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed relative z-10">
                    {feature.description}
                  </p>
                  
                  {/* Decorative Element */}
                  <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${gradients[index]} opacity-5 rounded-full -mr-16 -mb-16 group-hover:opacity-10 transition-opacity`}></div>
                </div>
              );
            })}
          </div>

          {/* About Section - Split Layout */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 mb-8 border border-white/50">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl shadow-lg">
                <Info className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                {t('viewers.rtf.about_title')}
              </h2>
            </div>
            
            <div className="prose max-w-none">
              <p className="text-gray-700 text-base sm:text-lg mb-8 leading-relaxed">
                {t('viewers.rtf.about_intro')}
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Advantages */}
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-100">
                  <div className="flex items-center gap-3 mb-4">
                    <Star className="w-6 h-6 text-orange-600" />
                    <h3 className="text-xl font-bold text-gray-900">{t('viewers.rtf.advantages_title')}</h3>
                  </div>
                  <ul className="space-y-3">
                    {(Array.isArray(t('viewers.rtf.advantages', { returnObjects: true })) ? t('viewers.rtf.advantages', { returnObjects: true }) : []).map((item: string, idx: number) => {
                      const cleanItem = item.replace(/^•\s*/, '').trim();
                      return (
                        <li key={idx} className="flex items-start gap-3 text-gray-700">
                          <span className="text-orange-600 font-bold mt-0.5">•</span>
                          <span dangerouslySetInnerHTML={{ __html: cleanItem }} />
                        </li>
                      );
                    })}
                  </ul>
                </div>
                
                {/* Use Cases */}
                <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 border border-red-100">
                  <div className="flex items-center gap-3 mb-4">
                    <Layers className="w-6 h-6 text-red-600" />
                    <h3 className="text-xl font-bold text-gray-900">{t('viewers.rtf.use_cases_title')}</h3>
                  </div>
                  <ul className="space-y-3">
                    {(Array.isArray(t('viewers.rtf.use_cases', { returnObjects: true })) ? t('viewers.rtf.use_cases', { returnObjects: true }) : []).map((item: string, idx: number) => {
                      const cleanItem = item.replace(/^•\s*/, '').trim();
                      return (
                        <li key={idx} className="flex items-start gap-3 text-gray-700">
                          <span className="text-red-600 font-bold mt-0.5">•</span>
                          <span dangerouslySetInnerHTML={{ __html: cleanItem }} />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications - Modern Table */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 mb-8 border border-white/50 overflow-hidden">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl shadow-lg">
                <FileImage className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                {t('viewers.rtf.specs_title')}
              </h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">{t('viewers.rtf.specs_header_label')}</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">{t('viewers.rtf.specs_header_value')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {(Array.isArray(t('viewers.rtf.specs', { returnObjects: true })) ? t('viewers.rtf.specs', { returnObjects: true }) : []).map((row: any, idx: number) => (
                    <tr key={row.label || idx} className={`hover:bg-orange-50/50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">{row.label}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SEO Content - Enhanced */}
          <div className="bg-gradient-to-br from-white via-orange-50/50 to-red-50/50 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 mb-8 border border-orange-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                {t('viewers.rtf.seo_title', 'Why Choose Our RTF Viewer?')}
              </h2>
            </div>
            
            <div className="prose max-w-none text-gray-700">
              <p className="text-base sm:text-lg mb-6 leading-relaxed">
                {t('viewers.rtf.seo_intro', 'Our RTF viewer provides a seamless experience for viewing and managing Rich Text Format documents directly in your browser.')}
              </p>
              
              <div className="space-y-6">
                <div className="bg-white/60 rounded-xl p-6 border border-orange-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-orange-600" />
                    {t('viewers.rtf.seo_viewing_title', 'Professional Document Viewing')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('viewers.rtf.seo_viewing_text', 'View RTF documents with high-quality rendering, formatting preservation, and cross-platform compatibility.')}
                  </p>
                </div>
                
                <div className="bg-white/60 rounded-xl p-6 border border-orange-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-orange-600" />
                    {t('viewers.rtf.seo_features_title', 'Advanced Features')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('viewers.rtf.seo_features_text', 'Access powerful RTF viewing features including formatting preservation, text styling, and document structure.')}
                  </p>
                </div>
                
                <div className="bg-white/60 rounded-xl p-6 border border-orange-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600" />
                    {t('viewers.rtf.seo_security_title', 'Secure & Private')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('viewers.rtf.seo_security_text', 'Your RTF files are processed securely and never stored on our servers.')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Back Button - Enhanced */}
          <div className="text-center mb-12">
            <a
              href="/viewers"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 hover:from-orange-700 hover:via-red-700 hover:to-pink-700 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-base sm:text-lg group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>{t('viewers.rtf.buttons.back', 'Back to All Viewers').replace(/^←\s*/, '')}</span>
            </a>
          </div>
        </div>
      
        <Footer />

        {/* Custom Animations */}
        <style>{`
          @keyframes blob {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}</style>
      </div>
    </>
  );
};
