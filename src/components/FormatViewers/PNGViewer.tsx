import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Image, Upload, Eye, ArrowLeft, Camera, Palette, Zap, Info, Star, Sparkles, Layers, FileImage } from 'lucide-react';
import { FileUpload } from '../FileUpload';
import { FileViewer } from '../FileViewer';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { usePathLanguageSync } from '../../hooks/usePathLanguageSync';

export const PNGViewer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [viewerFile, setViewerFile] = useState<File | null>(null);
  usePathLanguageSync(i18n);

  const features = t('viewers.png.features', { returnObjects: true }) as Array<{ title: string; description: string }>;
  const advantages = t('viewers.png.advantages', { returnObjects: true }) as string[];
  const useCases = t('viewers.png.use_cases', { returnObjects: true }) as string[];
  const specs = t('viewers.png.specs', { returnObjects: true }) as Array<{ label: string; value: string }>;

  const handleFilesSelected = (files: File[]) => {
    // Filter only PNG files
    const pngFiles = files.filter(file => {
      const extension = file.name.split('.').pop()?.toLowerCase();
      return extension === 'png';
    });
    setSelectedFiles((prev: File[]) => [...prev, ...pngFiles]);
  };

  return (
    <>
      <Helmet>
        <title>{t('viewers.png.meta_title')}</title>
        <meta name="description" content={t('viewers.png.meta_description')} />
        <meta name="keywords" content={t('viewers.png.meta_keywords')} />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50">
        <Header />
      
        {/* Hero Section - Redesigned */}
        <div className="relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700">
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat'
              }}
            ></div>
          </div>
          
          {/* Floating Orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
            <div className="flex flex-col items-center text-center">
              {/* Back Button - Floating */}
              <button
                onClick={() => window.location.href = '/viewers'}
                className="absolute top-4 left-4 sm:left-6 p-2 sm:p-3 bg-white/10 backdrop-blur-md text-white/90 hover:text-white hover:bg-white/20 rounded-xl transition-all duration-300 transform hover:scale-110 shadow-lg border border-white/20"
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Icon with Glow Effect - Smaller */}
              <div className="relative mb-2 sm:mb-3">
                <div className="absolute inset-0 bg-white/30 rounded-2xl blur-xl transform scale-125"></div>
                <div className="relative p-2 sm:p-3 bg-white/20 backdrop-blur-xl rounded-2xl border border-white/30 shadow-xl">
                  <Image className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
              </div>

              {/* Title - Smaller and moved up */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                {t('viewers.png.hero_title')}
              </h1>
              
              {/* Subtitle - More visible */}
              <p className="text-sm sm:text-base md:text-lg text-white/95 max-w-2xl mx-auto mb-3 sm:mb-4 leading-relaxed font-medium">
                {t('viewers.png.hero_subtitle')}
              </p>

              {/* Quick Stats - More visible */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                <div className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-md">
                  <span className="text-white text-xs sm:text-sm font-semibold">✓ Lossless Quality</span>
                </div>
                <div className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-md">
                  <span className="text-white text-xs sm:text-sm font-semibold">🎨 Transparency Support</span>
                </div>
                <div className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-md">
                  <span className="text-white text-xs sm:text-sm font-semibold">⚡ Fast Processing</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 relative z-10">
          {/* Upload Section - Glassmorphism Card */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 mb-8 border border-white/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <Upload className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  {t('viewers.png.upload_title')}
                </h2>
                <p className="text-gray-600 mt-1 text-sm sm:text-base">
                  {t('viewers.png.upload_description')}
                </p>
              </div>
            </div>
            <FileUpload 
              onFilesSelected={handleFilesSelected}
              acceptedFormats={['png']}
              maxFiles={20}
              maxSize={100 * 1024 * 1024}
              hideFormatList={true}
              showTotalSize={true}
            />
          </div>

          {/* View Files Button - Prominent */}
          {selectedFiles.length > 0 && (
            <div className="flex justify-center mb-8">
              <button
                onClick={() => setViewerFile(selectedFiles[0])}
                className="group relative px-8 py-4 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-3 text-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <Eye className="w-6 h-6 relative z-10" />
                <span className="relative z-10">{t('viewers.png.buttons.view_files', 'View Files')}</span>
                <Sparkles className="w-5 h-5 relative z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          )}

          {/* Features Section - Redesigned Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => {
              const gradients = [
                'from-green-500 to-emerald-500',
                'from-emerald-500 to-teal-500',
                'from-teal-500 to-cyan-500'
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
              <div className="p-4 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl shadow-lg">
                <Info className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                {t('viewers.png.about_title')}
              </h2>
            </div>
            
            <div className="prose max-w-none">
              <p className="text-gray-700 text-base sm:text-lg mb-8 leading-relaxed">
                {t('viewers.png.about_intro')}
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Advantages */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                  <div className="flex items-center gap-3 mb-4">
                    <Star className="w-6 h-6 text-green-600" />
                    <h3 className="text-xl font-bold text-gray-900">{t('viewers.png.advantages_title')}</h3>
                  </div>
                  <ul className="space-y-3">
                    {advantages.map((item, idx) => {
                      // Remove existing bullet points from the item if present
                      const cleanItem = item.replace(/^•\s*/, '').trim();
                      return (
                        <li key={idx} className="flex items-start gap-3 text-gray-700">
                          <span className="text-green-600 font-bold mt-0.5">•</span>
                          <span dangerouslySetInnerHTML={{ __html: cleanItem }} />
                        </li>
                      );
                    })}
                  </ul>
                </div>
                
                {/* Use Cases */}
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 border border-teal-100">
                  <div className="flex items-center gap-3 mb-4">
                    <Layers className="w-6 h-6 text-teal-600" />
                    <h3 className="text-xl font-bold text-gray-900">{t('viewers.png.use_cases_title')}</h3>
                  </div>
                  <ul className="space-y-3">
                    {useCases.map((item, idx) => {
                      // Remove existing bullet points from the item if present
                      const cleanItem = item.replace(/^•\s*/, '').trim();
                      return (
                        <li key={idx} className="flex items-start gap-3 text-gray-700">
                          <span className="text-teal-600 font-bold mt-0.5">•</span>
                          <span dangerouslySetInnerHTML={{ __html: cleanItem }} />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications - Modern Table */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 mb-8 border border-white/50 overflow-hidden">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg">
                <FileImage className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                {t('viewers.png.specs_title')}
              </h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">{t('viewers.png.specs_header_label')}</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">{t('viewers.png.specs_header_value')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {specs.map((row, idx) => (
                    <tr key={row.label} className={`hover:bg-green-50/50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">{row.label}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SEO Content - Enhanced */}
          <div className="bg-gradient-to-br from-white via-green-50/50 to-emerald-50/50 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 mb-8 border border-green-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                {t('viewers.png.seo_title')}
              </h2>
            </div>
            
            <div className="prose max-w-none text-gray-700">
              <p className="text-base sm:text-lg mb-6 leading-relaxed">
                {t('viewers.png.seo_intro')}
              </p>
              
              <div className="space-y-6">
                <div className="bg-white/60 rounded-xl p-6 border border-green-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Camera className="w-5 h-5 text-green-600" />
                    {t('viewers.png.seo_advanced_title', 'Advanced PNG Viewing')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('viewers.png.seo_advanced_text', 'Our PNG viewer provides professional tools for viewing and analyzing PNG images with transparency support.')}
                  </p>
                </div>
                
                <div className="bg-white/60 rounded-xl p-6 border border-green-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Palette className="w-5 h-5 text-green-600" />
                    {t('viewers.png.seo_professional_title', 'Professional Features')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('viewers.png.seo_professional_text', 'Experience lossless quality viewing with support for transparency, alpha channels, and high-resolution images.')}
                  </p>
                </div>
                
                <div className="bg-white/60 rounded-xl p-6 border border-green-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-green-600" />
                    {t('viewers.png.seo_optimization_title', 'Optimization Tools')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('viewers.png.seo_optimization_text', 'Optimize your PNG files for web and print with our comprehensive viewing and analysis tools.')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Back Button - Enhanced */}
          <div className="text-center mb-12">
            <a
              href="/viewers"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-base sm:text-lg group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>{t('viewers.png.buttons.back', 'Back to All Viewers')}</span>
            </a>
          </div>
        </div>
      </div>
      
      <Footer />

        <Footer />

        {/* File Viewer Modal */}
        {viewerFile && (
          <FileViewer
            file={viewerFile}
            onClose={() => setViewerFile(null)}
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