import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useLocation } from 'react-router-dom';
import { Image, Upload, Eye, ArrowLeft, Smartphone, Palette, Zap, Info, Star, Sparkles, Layers, FileImage } from 'lucide-react';
import { FileUpload } from '../FileUpload';
import { FileViewer } from '../FileViewer';
import { JPGEditor } from './JPGEditor';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { useTranslation } from 'react-i18next';
import { usePathLanguageSync } from '../../hooks/usePathLanguageSync';
import './translations/heicViewerTranslations'; // Register translations

export const HEICViewer: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [viewerFile, setViewerFile] = useState<File | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [previewUrls, setPreviewUrls] = useState<Map<string, string>>(new Map());
  const [loadingPreviews, setLoadingPreviews] = useState<Set<string>>(new Set());
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();
  usePathLanguageSync(i18n);

  // Check if URL ends with /editor and open editor if files exist
  useEffect(() => {
    if (location.pathname.endsWith('/editor') && selectedFiles.length > 0 && !isEditorOpen) {
      setIsEditorOpen(true);
    } else if (!location.pathname.endsWith('/editor') && isEditorOpen) {
      // If URL doesn't have /editor but editor is open, close it
      setIsEditorOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, selectedFiles.length]);

  // Get the base path
  const getBasePath = () => {
    const path = location.pathname;
    if (path.includes('/viewers/heic') || path.includes('/viewers/heif')) {
      return path.replace('/editor', '').replace(/\/viewers\/(heic|heif).*/, '/viewers/heic');
    }
    // Handle language prefixes
    const langMatch = path.match(/\/([a-z]{2})\/viewers\/(heic|heif)/);
    if (langMatch) {
      const [, lang] = langMatch;
      return `/${lang}/viewers/heic`;
    }
    return '/viewers/heic'; // fallback
  };

  const features = t('viewers.heic.features', { returnObjects: true }) as Array<{ title: string; description: string }>;
  const advantages = t('viewers.heic.advantages', { returnObjects: true }) as string[];
  const useCases = t('viewers.heic.use_cases', { returnObjects: true }) as string[];
  const specs = t('viewers.heic.specs', { returnObjects: true }) as Array<{ label: string; value: string }>;

  const handleFilesSelected = async (files: File[]) => {
    // Filter only HEIC files
    const heicFiles = files.filter(file => {
      const extension = file.name.split('.').pop()?.toLowerCase();
      return ['heic', 'heif'].includes(extension || '');
    });
    setSelectedFiles((prev: File[]) => [...prev, ...heicFiles]);

    // Generate previews for each HEIC file
    for (const file of heicFiles) {
      generatePreview(file);
    }
  };

  const generatePreview = async (file: File) => {
    const fileKey = `${file.name}-${file.size}`;
    setLoadingPreviews(prev => new Set(prev).add(fileKey));

    try {
      console.log('Generating HEIC preview for:', file.name);
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('https://api.morphyhub.com/api/preview/heic', {
        method: 'POST',
        body: formData,
      });

      console.log('HEIC preview response status:', response.status);

      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        console.log('HEIC preview generated successfully:', url);
        setPreviewUrls(prev => new Map(prev).set(fileKey, url));
      } else {
        const errorText = await response.text();
        console.error('Preview generation failed:', response.status, errorText);
        
        // Fallback: try to display HEIC directly (may work in Safari)
        try {
          const directUrl = URL.createObjectURL(file);
          setPreviewUrls(prev => new Map(prev).set(fileKey, directUrl));
          console.log('Using direct HEIC URL as fallback');
        } catch (fallbackError) {
          console.error('Direct HEIC display also failed:', fallbackError);
        }
      }
    } catch (error) {
      console.error('Error generating preview:', error);
      
      // Fallback: try to display HEIC directly
      try {
        const directUrl = URL.createObjectURL(file);
        setPreviewUrls(prev => new Map(prev).set(fileKey, directUrl));
        console.log('Using direct HEIC URL as fallback after error');
      } catch (fallbackError) {
        console.error('Direct HEIC display also failed:', fallbackError);
      }
    } finally {
      setLoadingPreviews(prev => {
        const newSet = new Set(prev);
        newSet.delete(fileKey);
        return newSet;
      });
    }
  };

  const handleAddFilesToEditor = (newFiles: File[]) => {
    setSelectedFiles((prev: File[]) => [...prev, ...newFiles]);
    // Generate previews for new files
    for (const file of newFiles) {
      generatePreview(file);
    }
  };

  const handleOpenEditor = () => {
    setIsEditorOpen(true);
    const basePath = getBasePath();
    navigate(`${basePath}/editor`);
  };

  const handleCloseEditor = () => {
    setIsEditorOpen(false);
    const basePath = getBasePath();
    navigate(basePath);
  };

  const gradients = [
    'from-violet-500 to-purple-600',
    'from-purple-500 to-fuchsia-600',
    'from-fuchsia-500 to-violet-600',
    'from-violet-500 to-indigo-600',
    'from-purple-500 to-pink-600',
    'from-fuchsia-500 to-purple-600'
  ];

  const iconNodes = [
    <Smartphone className="w-8 h-8 text-white" />,
    <Palette className="w-8 h-8 text-white" />,
    <Zap className="w-8 h-8 text-white" />,
    <Layers className="w-8 h-8 text-white" />,
    <Sparkles className="w-8 h-8 text-white" />,
    <FileImage className="w-8 h-8 text-white" />
  ];

  return (
    <>
      <Helmet>
        <title>{t('viewers.heic.meta_title')}</title>
        <meta name="description" content={t('viewers.heic.meta_description')} />
        <meta name="keywords" content={t('viewers.heic.meta_keywords')} />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50 to-purple-50">
        <Header />
      
        {/* Hero Section - Redesigned */}
        <div className="relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-700">
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat'
              }}
            ></div>
          </div>
          
          {/* Floating Orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-violet-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-fuchsia-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
            <div className="flex flex-col items-center text-center">
              {/* Back Button - Floating */}
              <button
                onClick={() => window.location.href = '/viewers'}
                className="absolute top-4 left-4 sm:left-6 p-2 sm:p-3 bg-white/10 backdrop-blur-md text-white/90 hover:text-white hover:bg-white/20 rounded-xl transition-all duration-300 transform hover:scale-110 shadow-lg border border-white/20"
              >
                <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Logo */}
              <div className="mb-4 sm:mb-6">
                <div className="p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 inline-block">
                  <Smartphone className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </div>
              </div>

              {/* Title and Subtitle */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 px-4">
                {t('viewers.heic.hero_title')}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-violet-100 mb-4 sm:mb-5 px-4 max-w-2xl">
                {t('viewers.heic.hero_subtitle')}
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border border-white/20">
                  <span className="text-sm sm:text-base text-white font-medium">
                    {t('viewers.heic.quick_stats.high_quality')}
                  </span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border border-white/20">
                  <span className="text-sm sm:text-base text-white font-medium">
                    {t('viewers.heic.quick_stats.smaller_size')}
                  </span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border border-white/20">
                  <span className="text-sm sm:text-base text-white font-medium">
                    {t('viewers.heic.quick_stats.fast_processing')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Upload Section */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 mb-8 border border-white/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl shadow-lg">
                <Upload className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {t('viewers.heic.upload_title')}
                </h2>
                <p className="text-gray-600 mt-1 text-sm sm:text-base">
                  {t('viewers.heic.upload_description')}
                </p>
              </div>
            </div>
            <FileUpload 
              onFilesSelected={handleFilesSelected}
              acceptedFormats={['heic', 'heif']}
              maxFiles={20}
              maxSize={100 * 1024 * 1024}
              hideFormatList={true}
              showTotalSize={true}
              translationKeys={{
                dragDropText: t('viewers.heic.upload.drag_drop_text'),
                clickBrowseText: t('viewers.heic.upload.click_browse_text'),
                chooseFilesButton: t('viewers.heic.upload.choose_files_button'),
                maxFilesInfo: t('viewers.heic.upload.max_files_info')
              }}
            />
          </div>

          {/* View Files Button - Prominent */}
          {selectedFiles.length > 0 && (
            <div className="mb-8 text-center">
              <button
                onClick={handleOpenEditor}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-bold py-4 px-8 sm:px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl text-lg sm:text-xl"
              >
                <Eye className="w-6 h-6" />
                <span>{t('viewers.heic.buttons.view_files')}</span>
              </button>
            </div>
          )}

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
            {features.map((feature, index) => {
              return (
                <div
                  key={feature.title}
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
              <div className="p-4 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl shadow-lg">
                <Info className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                {t('viewers.heic.about_title')}
              </h2>
            </div>
            
            <div className="prose max-w-none">
              <p className="text-gray-700 text-base sm:text-lg mb-8 leading-relaxed">
                {t('viewers.heic.about_intro')}
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Advantages */}
                <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-6 border border-violet-100">
                  <div className="flex items-center gap-3 mb-4">
                    <Star className="w-6 h-6 text-violet-600" />
                    <h3 className="text-xl font-bold text-gray-900">{t('viewers.heic.advantages_title')}</h3>
                  </div>
                  <ul className="space-y-3">
                    {advantages.map((advantage, idx) => (
                      <li key={idx} className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: `<span class="text-violet-600 font-bold mr-2">•</span>${advantage}` }} />
                    ))}
                  </ul>
                </div>
                
                {/* Use Cases */}
                <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-2xl p-6 border border-purple-100">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="w-6 h-6 text-purple-600" />
                    <h3 className="text-xl font-bold text-gray-900">{t('viewers.heic.use_cases_title')}</h3>
                  </div>
                  <ul className="space-y-3">
                    {useCases.map((useCase, idx) => (
                      <li key={idx} className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: `<span class="text-purple-600 font-bold mr-2">•</span>${useCase}` }} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 mb-8 border border-white/50">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl shadow-lg">
                <Layers className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                {t('viewers.heic.specs_title')}
              </h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200">
                <thead>
                  <tr className="bg-gradient-to-r from-violet-500 to-purple-600">
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">{t('viewers.heic.specs_header_label')}</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">{t('viewers.heic.specs_header_value')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {specs.map((spec, idx) => (
                    <tr key={idx} className="hover:bg-violet-50/50 transition-colors">
                      <td className="px-6 py-4 text-sm font-semibold text-gray-800">{spec.label}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SEO Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('viewers.heic.seo_viewing_title')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('viewers.heic.seo_viewing_text')}</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('viewers.heic.seo_conversion_title')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('viewers.heic.seo_conversion_text')}</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-500 to-violet-600 rounded-xl flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('viewers.heic.seo_optimization_title')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('viewers.heic.seo_optimization_text')}</p>
            </div>
          </div>

          {/* Back to Viewers Button */}
          <div className="text-center mb-8">
            <button
              onClick={() => window.location.href = '/viewers'}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-bold py-4 px-8 sm:px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>{t('viewers.heic.buttons.back', 'Back to All Viewers').replace(/^←\s*/, '')}</span>
            </button>
          </div>
        </div>
        
        <Footer />

        {/* Editor */}
        {isEditorOpen && (
          <JPGEditor
            files={selectedFiles}
            onClose={handleCloseEditor}
            onAddFiles={handleAddFilesToEditor}
            supportedFormats={['heic', 'heif']}
            formatBadge="HEIC"
          />
        )}

        {/* File Viewer Modal */}
        {viewerFile && (
          <FileViewer
            file={viewerFile}
            onClose={() => setViewerFile(null)}
          />
        )}

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
