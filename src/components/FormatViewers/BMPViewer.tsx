import React, { useState } from 'react';
import { Image, Upload, Eye, Download, Share2, ArrowLeft, Palette, Monitor, Archive, CheckCircle } from 'lucide-react';
import { FileUpload } from '../FileUpload';
import { FileViewer } from '../FileViewer';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { usePathLanguageSync } from '../../hooks/usePathLanguageSync';
import '../../locales/viewersBmp';

export const BMPViewer: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [viewerFile, setViewerFile] = useState<File | null>(null);
  const { t, i18n } = useTranslation();
  usePathLanguageSync(i18n);

  const features = t('viewers.bmp.features', { returnObjects: true }) as Array<{ title: string; description: string }>;
  const advantages = t('viewers.bmp.advantages', { returnObjects: true }) as string[];
  const useCases = t('viewers.bmp.use_cases', { returnObjects: true }) as string[];
  const specs = t('viewers.bmp.specs', { returnObjects: true }) as Array<{ label: string; value: string }>;

  const handleFilesSelected = (files: File[]) => {
    // Filter only BMP files
    const bmpFiles = files.filter(file => {
      const extension = file.name.split('.').pop()?.toLowerCase();
      return extension === 'bmp';
    });
    setSelectedFiles(bmpFiles);
  };

  return (
    <>
      <Helmet>
        <title>{t('viewers.bmp.meta_title')}</title>
        <meta name="description" content={t('viewers.bmp.meta_description')} />
        <meta name="keywords" content={t('viewers.bmp.meta_keywords')} />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-blue-600 via-cyan-500 to-sky-600 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <a
                  href="/viewers"
                  className="p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl transition-all border border-white/20"
                >
                  <ArrowLeft className="w-6 h-6 text-white" />
                </a>
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                  <Monitor className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h1 className="text-5xl font-bold mb-3">
                    {t('viewers.bmp.hero_title')}
                  </h1>
                  <p className="text-xl text-blue-100">
                    {t('viewers.bmp.hero_subtitle')}
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
              <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                {t('viewers.bmp.upload_title')}
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              {t('viewers.bmp.upload_description')}
            </p>
            <FileUpload 
              onFilesSelected={handleFilesSelected}
              acceptedFormats={['bmp']}
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
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {t('viewers.bmp.files_heading', { count: selectedFiles.length })}
                  </h2>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-4 hover:shadow-lg transition-all transform hover:scale-105 border border-gray-200">
                    <div className="aspect-square bg-white rounded-xl mb-3 overflow-hidden shadow-md">
                      <img
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="text-sm font-semibold text-gray-900 truncate mb-2" title={file.name}>
                      {file.name}
                    </div>
                    <div className="text-xs text-gray-600 mb-3 font-medium">
                      {(file.size / 1024 / 1024).toFixed(2)} MB • BMP
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setViewerFile(file)}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-sm font-semibold py-2.5 px-3 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-1.5"
                      >
                        <Eye className="w-4 h-4" />
                        <span>{t('viewers.bmp.buttons.view')}</span>
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
                        className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                        title={t('viewers.bmp.buttons.download')}
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              {index === 0 && <Palette className="w-8 h-8 text-purple-600 mb-4" />}
              {index === 1 && <Monitor className="w-8 h-8 text-blue-600 mb-4" />}
              {index === 2 && <Archive className="w-8 h-8 text-green-600 mb-4" />}
              <h3 className="text-xl font-semibold text-gray-800 mb-2" dangerouslySetInnerHTML={{ __html: feature.title }} />
              <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: feature.description }} />
            </div>
          ))}
        </div>

        {/* BMP Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {t('viewers.bmp.about_title')}
          </h2>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('viewers.bmp.about_intro') }} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('viewers.bmp.advantages_title')}</h3>
                <ul className="space-y-2 text-sm">
                  {advantages.map((advantage, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: advantage }} />
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('viewers.bmp.use_cases_title')}</h3>
                <ul className="space-y-2 text-sm">
                  {useCases.map((useCase, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: useCase }} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {t('viewers.bmp.specs_title')}
          </h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">{t('viewers.bmp.specs_header_label')}</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">{t('viewers.bmp.specs_header_value')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {specs.map((spec, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800">{spec.label}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

          {/* Back to Viewers Button */}
          <div className="text-center">
            <a
              href="/viewers"
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {t('viewers.bmp.buttons.back')}
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