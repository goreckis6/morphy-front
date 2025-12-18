import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Image, Upload, Eye, Download, Share2, ArrowLeft, Palette, Code, Zap } from 'lucide-react';
import { FileUpload } from '../FileUpload';
import { FileViewer } from '../FileViewer';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { getLanguageFromUrl, getLocalizedUrl } from '../../i18n';

export const PSViewer: React.FC = () => {
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
    // Filter only PS files
    const psFiles = files.filter(file => {
      const extension = file.name.split('.').pop()?.toLowerCase();
      return ['ps', 'ps2', 'ps3'].includes(extension || '');
    });
    setSelectedFiles(psFiles);
  };

  return (
    <>
      <Helmet>
        <title>{t('viewers.ps.meta_title')}</title>
        <meta name="description" content={t('viewers.ps.meta_description')} />
        <meta name="keywords" content={t('viewers.ps.meta_keywords')} />
      </Helmet>
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => window.location.href = '/viewer'}
              className="p-2 text-gray-500 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="p-3 bg-purple-100 rounded-xl">
              <Image className="w-8 h-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {t('viewers.ps.hero_title')}
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                {t('viewers.ps.hero_subtitle')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Upload Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {t('viewers.ps.upload_title')}
          </h2>
          <FileUpload 
            onFilesSelected={handleFilesSelected}
            acceptedFormats={['ps', 'ps2', 'ps3']}
            maxFiles={20}
          />
        </div>

        {/* Preview Section */}
        {selectedFiles.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {t('viewers.ps.files_heading', { count: selectedFiles.length })}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {selectedFiles.map((file, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="aspect-square bg-white border-2 border-gray-200 rounded-lg mb-3 overflow-hidden flex items-center justify-center">
                    <img
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="text-sm font-medium text-gray-700 truncate mb-2">
                    {file.name}
                  </div>
                  <div className="text-xs text-gray-500 mb-3">
                    {(file.size / 1024 / 1024).toFixed(2)} MB • PostScript
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setViewerFile(file)}
                      className="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium py-2 px-3 rounded-lg transition-colors flex items-center justify-center space-x-1"
                    >
                      <Eye className="w-3 h-3" />
                      <span>{t('viewers.ps.buttons.view')}</span>
                    </button>
                    <button className="p-2 text-gray-500 hover:text-green-500 hover:bg-green-50 rounded-lg transition-colors">
                      <Download className="w-3 h-3" />
                    </button>
                    <button className="p-2 text-gray-500 hover:text-purple-500 hover:bg-purple-50 rounded-lg transition-colors">
                      <Share2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {t('viewers.ps.features', { returnObjects: true }).map((feature: any, index: number) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              {index === 0 && <Code className="w-8 h-8 text-purple-600 mb-4" />}
              {index === 1 && <Palette className="w-8 h-8 text-blue-600 mb-4" />}
              {index === 2 && <Zap className="w-8 h-8 text-yellow-600 mb-4" />}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Back to Home Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {t('viewers.ps.back_title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('viewers.ps.back_standard_title')}</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• JPEG (Joint Photographic Experts Group)</li>
                <li>• JPEG 2000 Core Image File</li>
                <li>• JPEG 2000 Image</li>
                <li>• PNG (Portable Network Graphics)</li>
                <li>• Web Picture Format</li>
                <li>• AV1 Image File Format</li>
                <li>• GIF (Graphics Interchange Format)</li>
                <li>• TIFF (Tagged Image File Format)</li>
                <li>• Pyramid encoded TIFF</li>
                <li>• Bitmap Image</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('viewers.ps.back_professional_title')}</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• High Efficiency Image Container</li>
                <li>• Scalable Vector Graphics</li>
                <li>• Icon formats (ICO, CUR)</li>
                <li>• RAW Camera formats</li>
                <li>• Professional editing formats</li>
                <li>• Document formats (PDF, DOCX, ODT)</li>
                <li>• Spreadsheet formats (XLSX, CSV, ODS)</li>
                <li>• Code formats (JS, Python, CSS, HTML)</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-6">
            <a
              href={getLocalizedUrl('/', i18n.language)}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {t('viewers.ps.back_button')}
            </a>
          </div>
        </div>
      </div>
      
      {/* Footer */}
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