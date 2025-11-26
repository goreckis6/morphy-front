import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Image, Upload, Eye, Download, ArrowLeft, Camera, Palette, Zap, Info, CheckCircle, Star } from 'lucide-react';
import { FileUpload } from '../FileUpload';
import { FileViewer } from '../FileViewer';
import { JPGEditor } from './JPGEditor';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { useTranslation } from 'react-i18next';
import { usePathLanguageSync } from '../../hooks/usePathLanguageSync';

export const JPEGViewer: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [viewerFile, setViewerFile] = useState<File | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const { t, i18n } = useTranslation();
  usePathLanguageSync(i18n);

  const features = t('viewers.jpeg.features', { returnObjects: true }) as Array<{ title: string; description: string }>;
  const advantages = t('viewers.jpeg.advantages', { returnObjects: true }) as string[];
  const useCases = t('viewers.jpeg.use_cases', { returnObjects: true }) as string[];
  const specs = t('viewers.jpeg.specs', { returnObjects: true }) as Array<{ label: string; value: string }>;

  const handleFilesSelected = (files: File[]) => {
    // Filter only JPEG files
    const jpegFiles = files.filter(file => {
      const extension = file.name.split('.').pop()?.toLowerCase();
      return ['jpg', 'jpeg', 'jpe'].includes(extension || '');
    });
    setSelectedFiles(prev => [...prev, ...jpegFiles]);
  };

  const handleAddFilesToEditor = (newFiles: File[]) => {
    setSelectedFiles(prev => [...prev, ...newFiles]);
  };

  return (
    <>
      <Helmet>
        <title>{t('viewers.jpeg.meta_title')}</title>
        <meta name="description" content={t('viewers.jpeg.meta_description')} />
        <meta name="keywords" content={t('viewers.jpeg.meta_keywords')} />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <Header />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700">
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
                    {t('viewers.jpeg.hero_title')}
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100">
                    {t('viewers.jpeg.hero_subtitle')}
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
            <div className="p-2 sm:p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl">
              <Upload className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
              {t('viewers.jpeg.upload_title')}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
            {t('viewers.jpeg.upload_description')}
          </p>
          <FileUpload 
            onFilesSelected={handleFilesSelected}
            acceptedFormats={['jpg', 'jpeg', 'jpe']}
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
                  {t('viewers.jpeg.files_heading', { count: selectedFiles.length })}
                </h2>
              </div>
            </div>
            
            {/* View Files Button */}
            <div className="flex justify-center mb-6">
              <button
                onClick={() => setIsEditorOpen(true)}
                className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center gap-3 text-lg"
              >
                <Eye className="w-6 h-6" />
                <span>{t('viewers.jpeg.buttons.view_files', 'View Files')}</span>
              </button>
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4">
              {selectedFiles.slice(0, 12).map((file, index) => (
                <div
                  key={index}
                  className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all cursor-pointer group"
                  onClick={() => {
                    setIsEditorOpen(true);
                  }}
                >
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
              ))}
              {selectedFiles.length > 12 && (
                <div className="relative aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg border-2 border-dashed border-blue-300 flex items-center justify-center hover:border-blue-400 transition-colors">
                  <span className="text-sm font-semibold text-blue-700">
                    +{selectedFiles.length - 12} more
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {features.map((feature, index) => {
            const cardStyles = [
              'from-blue-50 to-indigo-50 border border-blue-200',
              'from-indigo-50 to-purple-50 border border-indigo-200',
              'from-purple-50 to-pink-50 border border-purple-200'
            ];
            const iconColors = [
              'text-blue-600',
              'text-indigo-600',
              'text-purple-600'
            ];
            const iconNodes = [
              <Camera className={`w-6 h-6 sm:w-8 sm:h-8 ${iconColors[index]}`} key="camera" />,
              <Zap className={`w-6 h-6 sm:w-8 sm:h-8 ${iconColors[index]}`} key="zap" />,
              <Palette className={`w-6 h-6 sm:w-8 sm:h-8 ${iconColors[index]}`} key="palette" />
            ];
            return (
              <div
                key={feature.title}
                className={`bg-gradient-to-br ${cardStyles[index]} rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 hover:shadow-xl transition-all transform hover:scale-105`}
              >
                <div className="bg-white p-2 sm:p-3 rounded-xl w-fit mb-3 sm:mb-4 shadow-sm">
                  {iconNodes[index]}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* JPEG Information */}
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border border-gray-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 mb-4 sm:mb-6">
            <div className="p-2 sm:p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
              <Info className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
              {t('viewers.jpeg.about_title')}
            </h2>
          </div>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4 text-sm sm:text-base">
              {t('viewers.jpeg.about_intro')}
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-4 sm:mt-6">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">{t('viewers.jpeg.advantages_title')}</h3>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  {advantages.map((item, idx) => (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">{t('viewers.jpeg.use_cases_title')}</h3>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  {useCases.map((item, idx) => (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border border-gray-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 mb-4 sm:mb-6">
            <div className="p-2 sm:p-3 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl">
              <Star className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
              {t('viewers.jpeg.specs_title')}
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-700">{t('viewers.jpeg.specs_header_label')}</th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-700">{t('viewers.jpeg.specs_header_value')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {specs.map((row) => (
                  <tr key={row.label}>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-gray-800">{row.label}</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-600">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* SEO Content */}
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 border border-gray-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 mb-4 sm:mb-6">
            <div className="p-2 sm:p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl">
              <Star className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
              {t('viewers.jpeg.seo_title')}
            </h2>
          </div>
          
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4 text-sm sm:text-base">
              {t('viewers.jpeg.seo_intro')}
            </p>
            
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3 mt-4 sm:mt-6">{t('viewers.jpeg.seo_viewing_title')}</h3>
            <p className="mb-4 text-sm sm:text-base">
              {t('viewers.jpeg.seo_viewing_text')}
            </p>
            
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3 mt-4 sm:mt-6">{t('viewers.jpeg.seo_conversion_title')}</h3>
            <p className="mb-4 text-sm sm:text-base">
              {t('viewers.jpeg.seo_conversion_text')}
            </p>
            
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3 mt-4 sm:mt-6">{t('viewers.jpeg.seo_optimization_title')}</h3>
            <p className="text-sm sm:text-base">
              {t('viewers.jpeg.seo_optimization_text')}
            </p>
          </div>
        </div>

        {/* Back to Viewers Button */}
        <div className="text-center mt-6 sm:mt-8">
          <a
            href="/viewers"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>{t('viewers.jpeg.buttons.back', '← Back to All Viewers')}</span>
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

      {/* JPG Editor */}
      {isEditorOpen && (
        <JPGEditor
          files={selectedFiles}
          onClose={() => setIsEditorOpen(false)}
          onAddFiles={handleAddFilesToEditor}
        />
      )}
      </div>
    </>
  );
};