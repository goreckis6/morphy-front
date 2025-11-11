import React, { useEffect, useState } from 'react';
import { Image, Upload, Eye, Download, Share2, ArrowLeft, Camera, Layers, Archive, CheckCircle } from 'lucide-react';
import { FileUpload } from '../FileUpload';
import { FileViewer } from '../FileViewer';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export const TIFFViewer: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [viewerFile, setViewerFile] = useState<File | null>(null);
  const [previewUrls, setPreviewUrls] = useState<Map<string, string>>(new Map());
  const [loadingPreviews, setLoadingPreviews] = useState<Set<string>>(new Set());
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const path = window.location.pathname;
    if (path.startsWith('/pl/')) {
      i18n.changeLanguage('pl');
    } else if (path.startsWith('/de/')) {
      i18n.changeLanguage('de');
    } else {
      i18n.changeLanguage('en');
    }
  }, [i18n]);

  const features = t('viewers.tiff.features', { returnObjects: true }) as Array<{ title: string; description: string }>;
  const advantages = t('viewers.tiff.advantages', { returnObjects: true }) as string[];
  const useCases = t('viewers.tiff.use_cases', { returnObjects: true }) as string[];
  const specs = t('viewers.tiff.specs', { returnObjects: true }) as Array<{ label: string; value: string }>;

  const handleFilesSelected = async (files: File[]) => {
    // Filter only TIFF files
    const tiffFiles = files.filter(file => {
      const extension = file.name.split('.').pop()?.toLowerCase();
      return ['tif', 'tiff', 'tiff64', 'ptif'].includes(extension || '');
    });
    setSelectedFiles(tiffFiles);

    // Generate previews for each TIFF file
    for (const file of tiffFiles) {
      generatePreview(file);
    }
  };

  const generatePreview = async (file: File) => {
    const fileKey = `${file.name}-${file.size}`;
    setLoadingPreviews(prev => new Set(prev).add(fileKey));

    try {
      console.log('Generating TIFF preview for:', file.name);
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('https://api.morphyhub.com/api/preview/tiff', {
        method: 'POST',
        body: formData,
      });

      console.log('TIFF preview response status:', response.status);

      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        console.log('TIFF preview generated successfully:', url);
        setPreviewUrls(prev => new Map(prev).set(fileKey, url));
      } else {
        const errorText = await response.text();
        console.error('Preview generation failed:', response.status, errorText);
        
        // Fallback: try to display TIFF directly (may work in some browsers)
        try {
          const directUrl = URL.createObjectURL(file);
          setPreviewUrls(prev => new Map(prev).set(fileKey, directUrl));
          console.log('Using direct TIFF URL as fallback');
        } catch (fallbackError) {
          console.error('Direct TIFF display also failed:', fallbackError);
        }
      }
    } catch (error) {
      console.error('Error generating preview:', error);
      
      // Fallback: try to display TIFF directly
      try {
        const directUrl = URL.createObjectURL(file);
        setPreviewUrls(prev => new Map(prev).set(fileKey, directUrl));
        console.log('Using direct TIFF URL as fallback after error');
      } catch (fallbackError) {
        console.error('Direct TIFF display also failed:', fallbackError);
      }
    } finally {
      setLoadingPreviews(prev => {
        const newSet = new Set(prev);
        newSet.delete(fileKey);
        return newSet;
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>{t('viewers.tiff.meta_title')}</title>
        <meta name="description" content={t('viewers.tiff.meta_description')} />
        <meta name="keywords" content={t('viewers.tiff.meta_keywords')} />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-orange-600 via-amber-500 to-yellow-600 text-white overflow-hidden">
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
                  <Camera className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h1 className="text-5xl font-bold mb-3">
                    {t('viewers.tiff.hero_title')}
                  </h1>
                  <p className="text-xl text-orange-100">
                    {t('viewers.tiff.hero_subtitle')}
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
              <div className="p-3 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                {t('viewers.tiff.upload_title')}
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              {t('viewers.tiff.upload_description')}
            </p>
            <FileUpload 
              onFilesSelected={handleFilesSelected}
              acceptedFormats={['tif', 'tiff', 'tiff64', 'ptif']}
              maxFiles={20}
              maxSize={100 * 1024 * 1024}
              hideFormatList={true}
              showTotalSize={true}
            />
          </div>

          {/* Browser Compatibility Note */}
          {selectedFiles.length > 0 && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Camera className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-blue-900 mb-1">{t('viewers.tiff.preview_generating_title')}</h4>
                  <p className="text-sm text-blue-700">
                    {t('viewers.tiff.preview_generating_message')}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Preview Section */}
          {selectedFiles.length > 0 && (
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {t('viewers.tiff.files_heading', { count: selectedFiles.length })}
                  </h2>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {selectedFiles.map((file, index) => {
                  const fileKey = `${file.name}-${file.size}`;
                  const previewUrl = previewUrls.get(fileKey);
                  const isLoading = loadingPreviews.has(fileKey);

                  return (
                    <div key={index} className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-xl p-4 hover:shadow-lg transition-all transform hover:scale-105 border border-gray-200">
                      <div className="aspect-square bg-white rounded-xl mb-3 overflow-hidden shadow-md flex items-center justify-center">
                        {isLoading ? (
                          <div className="text-center p-4">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-2"></div>
                            <p className="text-xs text-gray-500">{t('viewers.tiff.generating_preview')}</p>
                          </div>
                        ) : previewUrl ? (
                          <img
                            src={previewUrl}
                            alt={file.name}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                          />
                        ) : (
                          <div className="text-center p-4">
                            <Camera className="w-16 h-16 text-orange-400 mx-auto mb-2" />
                            <p className="text-xs text-orange-600 font-medium">TIFF Image</p>
                            <p className="text-xs text-gray-500 mt-1">Processing...</p>
                          </div>
                        )}
                      </div>
                      <div className="text-sm font-semibold text-gray-900 truncate mb-2" title={file.name}>
                        {file.name}
                      </div>
                      <div className="text-xs text-gray-600 mb-3 font-medium">
                        {(file.size / 1024 / 1024).toFixed(2)} MB • TIFF
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setViewerFile(file)}
                          className="flex-1 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white text-sm font-semibold py-2.5 px-3 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-1.5"
                          disabled={isLoading}
                        >
                          <Eye className="w-4 h-4" />
                          <span>{t('viewers.tiff.buttons.view')}</span>
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
                          title={t('viewers.tiff.buttons.download')}
                        >
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              {index === 0 && <Camera className="w-8 h-8 text-orange-600 mb-4" />}
              {index === 1 && <Layers className="w-8 h-8 text-blue-600 mb-4" />}
              {index === 2 && <Archive className="w-8 h-8 text-purple-600 mb-4" />}
              <h3 className="text-xl font-semibold text-gray-800 mb-2" dangerouslySetInnerHTML={{ __html: feature.title }} />
              <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: feature.description }} />
            </div>
          ))}
        </div>

        {/* TIFF Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {t('viewers.tiff.about_title')}
          </h2>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('viewers.tiff.about_intro') }} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('viewers.tiff.advantages_title')}</h3>
                <ul className="space-y-2 text-sm">
                  {advantages.map((advantage, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: advantage }} />
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('viewers.tiff.use_cases_title')}</h3>
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
            {t('viewers.tiff.specs_title')}
          </h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">{t('viewers.tiff.specs_header_label')}</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">{t('viewers.tiff.specs_header_value')}</th>
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
              className="inline-block bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {t('viewers.tiff.buttons.back')}
            </a>
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