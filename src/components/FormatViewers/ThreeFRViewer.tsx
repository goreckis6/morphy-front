import React, { useState } from 'react';
import { Camera, Upload, Eye, Download, Share2, ArrowLeft, Image, Zap, Palette } from 'lucide-react';
import { FileUpload } from '../FileUpload';
import { FileViewer } from '../FileViewer';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { RAWProcessor } from '../../utils/rawProcessor';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { getLocalizedUrl } from '../../i18n';
import { usePathLanguageSync } from '../../hooks/usePathLanguageSync';

export const ThreeFRViewer: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [viewerFile, setViewerFile] = useState<File | null>(null);
  const [previewUrls, setPreviewUrls] = useState<Map<string, string>>(new Map());
  const [loadingPreviews, setLoadingPreviews] = useState<Set<string>>(new Set());
  const { t, i18n } = useTranslation();
  usePathLanguageSync(i18n);

  const features = t('viewers.threefr.features', { returnObjects: true }) as Array<{ title: string; description: string }>;

  const handleFilesSelected = (files: File[]) => {
    // Filter only 3FR files
    const threeFrFiles = files.filter(file => {
      const extension = file.name.split('.').pop()?.toLowerCase();
      return extension === '3fr';
    });
    setSelectedFiles(threeFrFiles);
    
    // Initialize RAW processor and process files
    RAWProcessor.initializeProcessor();
    
    threeFrFiles.forEach(async (file) => {
      setLoadingPreviews(prev => new Set(prev.add(file.name)));
      try {
        const previewUrl = await RAWProcessor.createRAWPreview(file);
        if (previewUrl) {
          setPreviewUrls(prev => new Map(prev.set(file.name, previewUrl)));
        }
      } catch (error) {
        console.warn('Failed to create RAW preview for', file.name);
      } finally {
        setLoadingPreviews(prev => {
          const newSet = new Set(prev);
          newSet.delete(file.name);
          return newSet;
        });
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>{t('viewers.threefr.meta_title')}</title>
        <meta name="description" content={t('viewers.threefr.meta_description')} />
        <meta name="keywords" content={t('viewers.threefr.meta_keywords')} />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => window.location.href = getLocalizedUrl('/viewers', i18n.language)}
                className="p-2 text-gray-500 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="p-3 bg-indigo-100 rounded-xl">
                <Camera className="w-8 h-8 text-indigo-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {t('viewers.threefr.hero_title')}
                </h1>
                <p className="text-lg text-gray-600 mt-2">
                  {t('viewers.threefr.hero_subtitle')}
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
            {t('viewers.threefr.upload_title')}
          </h2>
          <FileUpload 
            onFilesSelected={handleFilesSelected}
            acceptedFormats={['3fr']}
            maxFiles={20}
          />
        </div>

        {/* Preview Section */}
        {selectedFiles.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {t('viewers.threefr.files_heading', { count: selectedFiles.length })}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {selectedFiles.map((file, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="aspect-square bg-gray-200 rounded-lg mb-4 overflow-hidden">
                    {loadingPreviews.has(file.name) ? (
                      <div className="w-full h-full flex items-center justify-center bg-gray-100">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
                      </div>
                    ) : previewUrls.has(file.name) ? (
                      <img
                        src={previewUrls.get(file.name)}
                        alt={file.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100"><svg class="w-16 h-16 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></div>';
                          }
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100">
                        <Camera className="w-16 h-16 text-indigo-600" />
                      </div>
                    )}
                  </div>
                  <div className="text-base font-medium text-gray-700 truncate mb-3">
                    {file.name}
                  </div>
                  <div className="text-sm text-gray-500 mb-4">
                    {(file.size / 1024 / 1024).toFixed(2)} MB • Hasselblad RAW
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setViewerFile(file)}
                      className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                    >
                      <Eye className="w-4 h-4" />
                      <span>{t('viewers.threefr.buttons.view')}</span>
                    </button>
                    <button className="p-3 text-gray-500 hover:text-green-500 hover:bg-green-50 rounded-lg transition-colors" title={t('viewers.threefr.buttons.download')}>
                      <Download className="w-4 h-4" />
                    </button>
                    <button className="p-3 text-gray-500 hover:text-purple-500 hover:bg-purple-50 rounded-lg transition-colors" title={t('viewers.threefr.buttons.share')}>
                      <Share2 className="w-4 h-4" />
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
              {index === 0 && <Camera className="w-8 h-8 text-indigo-600 mb-4" />}
              {index === 1 && <Zap className="w-8 h-8 text-blue-600 mb-4" />}
              {index === 2 && <Palette className="w-8 h-8 text-purple-600 mb-4" />}
              <h3 className="text-xl font-semibold text-gray-800 mb-2" dangerouslySetInnerHTML={{ __html: feature.title }} />
              <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: feature.description }} />
            </div>
          ))}
        </div>

        {/* Back to Home Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {t('viewers.threefr.back_to_home_title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Standard Image Formats</h3>
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
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Professional & Specialized</h3>
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
              href={getLocalizedUrl('/viewers', i18n.language)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {t('viewers.threefr.buttons.back')}
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