import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Image, Upload, Eye, Download, ArrowLeft, Camera, Palette, Zap, Info, CheckCircle, Star, Sparkles, Layers, FileImage } from 'lucide-react';
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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <Header />
      
        {/* Hero Section - Redesigned */}
        <div className="relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat'
              }}
            ></div>
          </div>
          
          {/* Floating Orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
            <div className="flex flex-col items-center text-center">
              {/* Back Button - Floating */}
              <button
                onClick={() => window.location.href = '/viewers'}
                className="absolute top-6 left-4 sm:left-6 p-3 bg-white/10 backdrop-blur-md text-white/90 hover:text-white hover:bg-white/20 rounded-xl transition-all duration-300 transform hover:scale-110 shadow-lg border border-white/20"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              {/* Icon with Glow Effect */}
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-white/30 rounded-3xl blur-2xl transform scale-150"></div>
                <div className="relative p-6 bg-white/20 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl">
                  <Image className="w-16 h-16 sm:w-20 sm:h-20 text-white" />
                </div>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-100">
                  {t('viewers.jpeg.hero_title')}
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
                {t('viewers.jpeg.hero_subtitle')}
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8">
                <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                  <span className="text-white text-sm font-semibold">✓ Universal Format</span>
                </div>
                <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                  <span className="text-white text-sm font-semibold">⚡ Fast Processing</span>
                </div>
                <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                  <span className="text-white text-sm font-semibold">🎨 High Quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-16 lg:-mt-20 relative z-10">
          {/* Upload Section - Glassmorphism Card */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 mb-8 border border-white/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <Upload className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                  {t('viewers.jpeg.upload_title')}
                </h2>
                <p className="text-gray-600 mt-1 text-sm sm:text-base">
                  {t('viewers.jpeg.upload_description')}
                </p>
              </div>
            </div>
            <FileUpload 
              onFilesSelected={handleFilesSelected}
              acceptedFormats={['jpg', 'jpeg', 'jpe']}
              maxFiles={20}
              maxSize={100 * 1024 * 1024}
              hideFormatList={true}
              showTotalSize={true}
            />
          </div>

          {/* Preview Section - Modern Card Design */}
          {selectedFiles.length > 0 && (
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 mb-8 border border-white/50 overflow-hidden">
              {/* Header with Gradient */}
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-2xl"></div>
                <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                        {t('viewers.jpeg.files_heading', { count: selectedFiles.length })}
                      </h2>
                      <p className="text-gray-600 text-sm mt-1">Ready to view and edit</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* View Files Button - Prominent */}
              <div className="flex justify-center mb-8">
                <button
                  onClick={() => setIsEditorOpen(true)}
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-3 text-lg overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <Eye className="w-6 h-6 relative z-10" />
                  <span className="relative z-10">{t('viewers.jpeg.buttons.view_files', 'View Files')}</span>
                  <Sparkles className="w-5 h-5 relative z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>

              {/* Thumbnail Grid - Enhanced */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {selectedFiles.slice(0, 12).map((file, index) => (
                  <div
                    key={index}
                    className="group relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
                    onClick={() => setIsEditorOpen(true)}
                  >
                    <img
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-2 left-2 right-2">
                        <p className="text-white text-xs font-semibold truncate drop-shadow-lg">
                          {file.name}
                        </p>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-0 group-hover:scale-100">
                      <Eye className="w-3 h-3 text-white" />
                    </div>
                  </div>
                ))}
                {selectedFiles.length > 12 && (
                  <div className="relative aspect-square bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 rounded-2xl border-2 border-dashed border-blue-300 hover:border-blue-400 transition-all flex items-center justify-center group cursor-pointer">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-1">+{selectedFiles.length - 12}</div>
                      <div className="text-xs font-semibold text-blue-700">more files</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Features Section - Redesigned Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => {
              const gradients = [
                'from-blue-500 to-cyan-500',
                'from-indigo-500 to-purple-500',
                'from-purple-500 to-pink-500'
              ];
              const iconNodes = [
                <Camera className="w-8 h-8 text-white" key="camera" />,
                <Zap className="w-8 h-8 text-white" key="zap" />,
                <Palette className="w-8 h-8 text-white" key="palette" />
              ];
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
              <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg">
                <Info className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                {t('viewers.jpeg.about_title')}
              </h2>
            </div>
            
            <div className="prose max-w-none">
              <p className="text-gray-700 text-base sm:text-lg mb-8 leading-relaxed">
                {t('viewers.jpeg.about_intro')}
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Advantages */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                  <div className="flex items-center gap-3 mb-4">
                    <Star className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-900">{t('viewers.jpeg.advantages_title')}</h3>
                  </div>
                  <ul className="space-y-3">
                    {advantages.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700" dangerouslySetInnerHTML={{ __html: `<span class="text-blue-600 font-bold mr-2">•</span>${item}` }} />
                    ))}
                  </ul>
                </div>
                
                {/* Use Cases */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                  <div className="flex items-center gap-3 mb-4">
                    <Layers className="w-6 h-6 text-purple-600" />
                    <h3 className="text-xl font-bold text-gray-900">{t('viewers.jpeg.use_cases_title')}</h3>
                  </div>
                  <ul className="space-y-3">
                    {useCases.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700" dangerouslySetInnerHTML={{ __html: `<span class="text-purple-600 font-bold mr-2">•</span>${item}` }} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications - Modern Table */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 mb-8 border border-white/50 overflow-hidden">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl shadow-lg">
                <FileImage className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                {t('viewers.jpeg.specs_title')}
              </h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">{t('viewers.jpeg.specs_header_label')}</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">{t('viewers.jpeg.specs_header_value')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {specs.map((row, idx) => (
                    <tr key={row.label} className={`hover:bg-blue-50/50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">{row.label}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SEO Content - Enhanced */}
          <div className="bg-gradient-to-br from-white via-purple-50/50 to-pink-50/50 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 mb-8 border border-purple-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                {t('viewers.jpeg.seo_title')}
              </h2>
            </div>
            
            <div className="prose max-w-none text-gray-700">
              <p className="text-base sm:text-lg mb-6 leading-relaxed">
                {t('viewers.jpeg.seo_intro')}
              </p>
              
              <div className="space-y-6">
                <div className="bg-white/60 rounded-xl p-6 border border-purple-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Camera className="w-5 h-5 text-purple-600" />
                    {t('viewers.jpeg.seo_viewing_title')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('viewers.jpeg.seo_viewing_text')}
                  </p>
                </div>
                
                <div className="bg-white/60 rounded-xl p-6 border border-purple-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Palette className="w-5 h-5 text-purple-600" />
                    {t('viewers.jpeg.seo_conversion_title')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('viewers.jpeg.seo_conversion_text')}
                  </p>
                </div>
                
                <div className="bg-white/60 rounded-xl p-6 border border-purple-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-purple-600" />
                    {t('viewers.jpeg.seo_optimization_title')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('viewers.jpeg.seo_optimization_text')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Back Button - Enhanced */}
          <div className="text-center mb-12">
            <a
              href="/viewers"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-base sm:text-lg group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
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

      {/* Custom Animations */}
      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
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
    </>
  );
};
