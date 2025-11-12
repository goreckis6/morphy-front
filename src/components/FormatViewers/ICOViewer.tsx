import React, { useState } from 'react';
import { Image, Upload, Eye, Download, ArrowLeft, CheckCircle, Grid3x3 } from 'lucide-react';
import { FileUpload } from '../FileUpload';
import { FileViewer } from '../FileViewer';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { usePathLanguageSync } from '../../hooks/usePathLanguageSync';

export const ICOViewer: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [viewerFile, setViewerFile] = useState<File | null>(null);
  const { t, i18n } = useTranslation();
  usePathLanguageSync(i18n);

  const specs = t('viewers.ico.specs', { returnObjects: true }) as Array<{ label: string; value: string }>;
  const advantages = t('viewers.ico.advantages', { returnObjects: true }) as string[];
  const useCases = t('viewers.ico.use_cases', { returnObjects: true }) as string[];

  const handleFilesSelected = (files: File[]) => {
    // Filter only ICO files
    const icoFiles = files.filter(file => {
      const extension = file.name.split('.').pop()?.toLowerCase();
      return ['ico', 'cur'].includes(extension || '');
    });
    setSelectedFiles(icoFiles);
  };

  return (
    <>
      <Helmet>
        <title>{t('viewers.ico.meta_title')}</title>
        <meta name="description" content={t('viewers.ico.meta_description')} />
        <meta name="keywords" content={t('viewers.ico.meta_keywords')} />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-red-600 via-orange-500 to-amber-600 text-white overflow-hidden">
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
                  <Grid3x3 className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h1 className="text-5xl font-bold mb-3">
                    {t('viewers.ico.hero_title')}
                  </h1>
                  <p className="text-xl text-orange-100">
                    {t('viewers.ico.hero_subtitle')}
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
              <div className="p-3 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                {t('viewers.ico.upload_title')}
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              {t('viewers.ico.upload_description')}
            </p>
            <FileUpload 
              onFilesSelected={handleFilesSelected}
              acceptedFormats={['ico', 'cur']}
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
                  <div className="p-3 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {t('viewers.ico.files_heading', { count: selectedFiles.length })}
                  </h2>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-xl p-4 hover:shadow-lg transition-all transform hover:scale-105 border border-gray-200">
                    <div className="aspect-square bg-white rounded-xl mb-3 overflow-hidden shadow-md flex items-center justify-center p-4">
                      <img
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                        className="max-w-full max-h-full object-contain hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="text-sm font-semibold text-gray-900 truncate mb-2" title={file.name}>
                      {file.name}
                    </div>
                    <div className="text-xs text-gray-600 mb-3 font-medium">
                      {(file.size / 1024 / 1024).toFixed(2)} MB • ICO
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setViewerFile(file)}
                        className="flex-1 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white text-sm font-semibold py-2.5 px-3 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-1.5"
                      >
                        <Eye className="w-4 h-4" />
                        <span>{t('viewers.ico.buttons.view')}</span>
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
                        className="p-2 text-orange-600 hover:bg-orange-100 rounded-lg transition-colors"
                        title={t('viewers.ico.buttons.download')}
                      >
                        <Download className="w-4 h-4" />
                        <span className="sr-only">{t('viewers.ico.buttons.download')}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        {/* Format Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {t('viewers.ico.about_title')}
          </h2>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              {t('viewers.ico.about_intro')}
            </p>
            
            {/* Technical Specifications */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('viewers.ico.specs_title')}</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('viewers.ico.advantages_title')}</h3>
                <ul className="space-y-2 text-sm">
                  {advantages.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('viewers.ico.use_cases_title')}</h3>
                <ul className="space-y-2 text-sm">
                  {useCases.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* Back to Viewers Button */}
        <div className="text-center mt-8">
          <a
            href="/viewers"
            className="inline-block bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {t('viewers.ico.buttons.back')}
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