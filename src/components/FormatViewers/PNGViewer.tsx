import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Image, Upload, Eye, Download, ArrowLeft, Camera, Palette, Zap, Info, CheckCircle, Star, Layers } from 'lucide-react';
import { FileUpload } from '../FileUpload';
import { FileViewer } from '../FileViewer';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { getLanguageFromUrl } from '../../i18n';

export const PNGViewer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [viewerFile, setViewerFile] = useState<File | null>(null);

  useEffect(() => {
    const lang = getLanguageFromUrl();
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [i18n]);

  const handleFilesSelected = (files: File[]) => {
    // Filter only PNG files
    const pngFiles = files.filter(file => {
      const extension = file.name.split('.').pop()?.toLowerCase();
      return extension === 'png';
    });
    setSelectedFiles(pngFiles);
  };

  return (
    <>
      <Helmet>
        <title>{t('viewers.png.meta_title')}</title>
        <meta name="description" content={t('viewers.png.meta_description')} />
        <meta name="keywords" content={t('viewers.png.meta_keywords')} />
      </Helmet>
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-teal-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => window.location.href = '/viewers'}
                className="p-2 text-white/80 hover:text-white hover:bg-white/20 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                  <Image className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">
                    {t('viewers.png.hero_title')}
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-green-100">
                    {t('viewers.png.hero_subtitle')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Upload Section */}
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border border-gray-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 mb-4 sm:mb-6">
            <div className="p-2 sm:p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl">
              <Upload className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
              {t('viewers.png.upload_title')}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
            {t('viewers.png.upload_description')}
          </p>
          <FileUpload 
            onFilesSelected={handleFilesSelected}
            acceptedFormats={['png']}
            maxFiles={20}
            maxSize={100 * 1024 * 1024}
            hideFormatList={true}
            showTotalSize={true}
          />
        </div>

        {/* Preview Section */}
        {selectedFiles.length > 0 && (
          <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border border-gray-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 sm:p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  {t('viewers.png.files_heading', { count: selectedFiles.length })}
                </h2>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {selectedFiles.map((file, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-green-50 rounded-xl p-3 sm:p-4 hover:shadow-lg transition-all transform hover:scale-105 border border-gray-200">
                  <div className="aspect-square bg-white rounded-xl mb-2 sm:mb-3 overflow-hidden shadow-md relative">
                    {/* Checkered background to show transparency */}
                    <div className="absolute inset-0 bg-[repeating-conic-gradient(#e5e7eb_0%_25%,white_0%_50%)] bg-[length:20px_20px]"></div>
                    <img
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      className="relative w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-900 truncate mb-1 sm:mb-2" title={file.name}>
                    {file.name}
                  </div>
                  <div className="text-xs text-gray-600 mb-2 sm:mb-3 font-medium">
                    {(file.size / 1024 / 1024).toFixed(2)} MB • PNG
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <button
                      onClick={() => setViewerFile(file)}
                      className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white text-xs sm:text-sm font-semibold py-2 sm:py-2.5 px-3 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-1.5"
                    >
                      <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{t('viewers.png.buttons.view')}</span>
                    </button>
                    <button 
                      onClick={() => {
                        const url = URL.createObjectURL(file);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = file.name;
                        a.click();
                        URL.revokeObjectURL(url);
                      }}
                      className="p-2 text-green-600 hover:bg-green-100 rounded-lg transition-colors"
                      title="Download"
                    >
                      <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {t('viewers.png.features', { returnObjects: true }).map((feature: any, index: number) => (
            <div key={index} className={`bg-gradient-to-br ${index === 0 ? 'from-green-50 to-emerald-50 border-green-200' : index === 1 ? 'from-blue-50 to-indigo-50 border-blue-200' : 'from-purple-50 to-pink-50 border-purple-200'} rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border hover:shadow-xl transition-all transform hover:scale-105 ${index === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
              <div className={`bg-white p-2 sm:p-3 rounded-xl w-fit mb-3 sm:mb-4`}>
                {index === 0 && <Layers className={`w-6 h-6 sm:w-8 sm:h-8 text-green-600`} />}
                {index === 1 && <Zap className={`w-6 h-6 sm:w-8 sm:h-8 text-blue-600`} />}
                {index === 2 && <Palette className={`w-6 h-6 sm:w-8 sm:h-8 text-purple-600`} />}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* PNG Information */}
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border border-gray-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 mb-4 sm:mb-6">
            <div className="p-2 sm:p-3 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl">
              <Info className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
              {t('viewers.png.about_title')}
            </h2>
          </div>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4 text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: t('viewers.png.about_intro') }} />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-4 sm:mt-6">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">{t('viewers.png.advantages_title')}</h3>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  {t('viewers.png.advantages', { returnObjects: true }).map((item: string, index: number) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">{t('viewers.png.use_cases_title')}</h3>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  {t('viewers.png.use_cases', { returnObjects: true }).map((item: string, index: number) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border border-gray-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 mb-4 sm:mb-6">
            <div className="p-2 sm:p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl">
              <Star className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
              {t('viewers.png.specs_title')}
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-700">{t('viewers.png.specs_header_label')}</th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-700">{t('viewers.png.specs_header_value')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {t('viewers.png.specs', { returnObjects: true }).map((spec: any, index: number) => (
                  <tr key={index}>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-gray-800">{spec.label}</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-600">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* SEO Content */}
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border border-gray-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 mb-4 sm:mb-6">
            <div className="p-2 sm:p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl">
              <Star className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
              {t('viewers.png.seo_title')}
            </h2>
          </div>
          
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4 text-sm sm:text-base">
              {t('viewers.png.seo_intro')}
            </p>
            
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3 mt-4 sm:mt-6">{t('viewers.png.seo_advanced_title')}</h3>
            <p className="mb-4 text-sm sm:text-base">
              {t('viewers.png.seo_advanced_text')}
            </p>
            
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3 mt-4 sm:mt-6">{t('viewers.png.seo_professional_title')}</h3>
            <p className="mb-4 text-sm sm:text-base">
              {t('viewers.png.seo_professional_text')}
            </p>
            
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3 mt-4 sm:mt-6">{t('viewers.png.seo_optimization_title')}</h3>
            <p className="text-sm sm:text-base">
              {t('viewers.png.seo_optimization_text')}
            </p>
          </div>
        </div>

        {/* Back to Viewers Button */}
        <div className="text-center mt-6 sm:mt-8">
          <a
            href="/viewers"
            className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
          >
            {t('viewers.png.buttons.back')}
          </a>
        </div>
      </div>
      
      <Footer />

      {/* File Viewer Modal */}
      {viewerFile && (
        <FileViewer
          file={viewerFile}
          onClose={() => setViewerFile(null)}
        />
      )}
      </div>
    </>
  );
};