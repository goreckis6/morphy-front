import React, { useState, useCallback } from 'react';
import { ArrowLeft, Upload, Download, Share2, Eye, X, ZoomIn, ZoomOut, CheckCircle, Smartphone, Info, Image, Zap } from 'lucide-react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Helmet } from 'react-helmet-async';
import { FileUpload } from '../FileUpload';
import { useTranslation } from 'react-i18next';
import { usePathLanguageSync } from '../../hooks/usePathLanguageSync';
import { getLocalizedUrl } from '../../i18n';
import '../../locales/viewersAvif';

export const AVIFViewer: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [viewerFile, setViewerFile] = useState<File | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { t, i18n } = useTranslation();
  usePathLanguageSync(i18n);

  const localizedPath = getLocalizedUrl('/viewers/avif', i18n.language);
  const canonicalUrl = `https://morphyhub.com${localizedPath}`;

  const getFallbackArray = <T,>(key: string) => {
    const value = t(key, { returnObjects: true });
    if (Array.isArray(value)) {
      return value as T[];
    }
    const fallback = i18n.getFixedT('en')(key, { returnObjects: true });
    return Array.isArray(fallback) ? (fallback as T[]) : [];
  };

  const handleFilesSelected = (files: File[]) => {
    // Filter only AVIF files
    const avifFiles = files.filter(file => {
      const extension = file.name.split('.').pop()?.toLowerCase();
      return extension === 'avif';
    });
    setSelectedFiles(avifFiles);
  };

  const getImageUrl = (file: File) => {
    return URL.createObjectURL(file);
  };

  const handleImageClick = (file: File) => {
    const url = getImageUrl(file);
    setSelectedImage(url);
  };

  const handleDownload = (file: File) => {
    const url = getImageUrl(file);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name;
    a.click();
  };

  const handleShare = async (file: File) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `AVIF Image: ${file.name}`,
          text: 'Check out this AVIF image',
          files: [file]
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>{t('viewers.avif.meta_title')}</title>
        <meta name="description" content={t('viewers.avif.meta_description')} />
        <meta name="keywords" content={t('viewers.avif.meta_keywords')} />
        <meta property="og:title" content={t('viewers.avif.meta_title')} />
        <meta property="og:description" content={t('viewers.avif.meta_description')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('viewers.avif.meta_title')} />
        <meta name="twitter:description" content={t('viewers.avif.meta_description')} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": t('viewers.avif.hero_title'),
            "description": t('viewers.avif.meta_description'),
            "url": canonicalUrl,
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
        <div className="relative bg-gradient-to-br from-rose-600 via-pink-500 to-fuchsia-600 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <a
                  href={getLocalizedUrl('/viewers', i18n.language)}
                  className="p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl transition-all border border-white/20"
                >
                  <ArrowLeft className="w-6 h-6 text-white" />
                </a>
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                  <Smartphone className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h1 className="text-5xl font-bold mb-3">
                    {t('viewers.avif.hero_title')}
                  </h1>
                  <p className="text-xl text-rose-100">
                    {t('viewers.avif.hero_subtitle')}
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
              <div className="p-3 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                {t('viewers.avif.upload_title')}
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              {t('viewers.avif.upload_description')}
            </p>
            <FileUpload 
              onFilesSelected={handleFilesSelected}
              acceptedFormats={['avif']}
              maxFiles={20}
              maxSize={100 * 1024 * 1024}
              hideFormatList={true}
              showTotalSize={true}
            />
          </div>

          {/* Preview Section */}
          {selectedFiles.length > 0 && (
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {t('viewers.avif.files_heading', { count: selectedFiles.length })}
                  </h2>
                </div>
              </div>

              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">{t('viewers.avif.how_to_title')}</h4>
                    <p className="text-sm text-blue-700" dangerouslySetInnerHTML={{ __html: t('viewers.avif.how_to_description') }} />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-rose-50 rounded-xl p-4 hover:shadow-lg transition-all transform hover:scale-105 border border-gray-200">
                    <div className="aspect-square bg-white rounded-xl mb-3 overflow-hidden shadow-md">
                      <img
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                        onClick={() => handleImageClick(file)}
                      />
                    </div>
                    <div className="text-sm font-semibold text-gray-900 truncate mb-2" title={file.name}>
                      {file.name}
                    </div>
                    <div className="text-xs text-gray-600 mb-3 font-medium">
                      {(file.size / 1024 / 1024).toFixed(2)} MB • AVIF
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleImageClick(file)}
                        className="flex-1 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white text-sm font-semibold py-2.5 px-3 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-1.5"
                      >
                        <Eye className="w-4 h-4" />
                        <span>{t('viewers.avif.buttons.view')}</span>
                      </button>
                      <button 
                        onClick={() => handleDownload(file)}
                        className="p-2 text-rose-600 hover:bg-rose-100 rounded-lg transition-colors"
                        title={t('viewers.avif.buttons.download')}
                      >
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {getFallbackArray<{ title: string; description: string }>('viewers.avif.features').map((feature, index) => (
              <div key={index} className={`bg-gradient-to-br ${index === 0 ? 'from-rose-50 to-pink-50 border-rose-200' : index === 1 ? 'from-pink-50 to-fuchsia-50 border-pink-200' : 'from-fuchsia-50 to-purple-50 border-fuchsia-200'} rounded-2xl shadow-lg p-8 border hover:shadow-xl transition-all transform hover:scale-105`}>
                <div className="bg-white p-3 rounded-xl w-fit mb-4">
                  {index === 0 && <Image className="w-8 h-8 text-rose-600" />}
                  {index === 1 && <Smartphone className="w-8 h-8 text-pink-600" />}
                  {index === 2 && <Zap className="w-8 h-8 text-fuchsia-600" />}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3" dangerouslySetInnerHTML={{ __html: feature.title }} />
                <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: feature.description }} />
              </div>
            ))}
          </div>

          {/* About AVIF Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">{t('viewers.avif.about_title')}</h2>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-6" dangerouslySetInnerHTML={{ __html: t('viewers.avif.about_intro') }} />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{t('viewers.avif.advantages_title')}</h3>
                <ul className="space-y-2 text-gray-600">
                  {getFallbackArray<string>('viewers.avif.advantages').map((advantage, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span dangerouslySetInnerHTML={{ __html: advantage }} />
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{t('viewers.avif.use_cases_title')}</h3>
                <ul className="space-y-2 text-gray-600">
                  {getFallbackArray<string>('viewers.avif.use_cases').map((useCase, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span dangerouslySetInnerHTML={{ __html: useCase }} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{t('viewers.avif.specs_title')}</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">{t('viewers.avif.specs_header_label')}</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">{t('viewers.avif.specs_header_value')}</th>
                    </tr>
                  </thead>
                <tbody className="divide-y divide-gray-200">
                  {getFallbackArray<{ label: string; value: string }>('viewers.avif.specs').map((spec, index) => (
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
        <div className="text-center">
          <a
            href={getLocalizedUrl('/viewers', i18n.language)}
            className="inline-block bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {t('viewers.avif.buttons.back')}
          </a>
        </div>
      </div>
      
      <Footer />

      {/* Full Image Viewer Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-full max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>
            
            <img
              src={selectedImage}
              alt="Full size AVIF"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
      </div>
    </>
  );
};