import React, { useState, useMemo } from 'react';
import { Minimize2, ArrowLeft, FileImage, Search, RefreshCw, FileText } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { useTranslation } from 'react-i18next';
import { getLocalizedUrl } from '../i18n';
import '../locales/compressPage';

type CompressionFormat = {
  name: string;
  description: string;
  path: string;
  format: string;
  icon: React.ReactNode;
  iconColor: string;
  translationKey: string;
};

type CompressionCategory = {
  titleKey: string;
  icon: React.ReactNode;
  formats: CompressionFormat[];
};

const COMPRESSION_CATEGORY_CONFIG: CompressionCategory[] = [
  {
    titleKey: 'compress_page.categories.image_compression',
    icon: <FileImage className="w-6 h-6 text-orange-600" />,
    formats: [
      {
        name: '',
        description: '',
        path: '/compress/jpg',
        format: 'JPG/JPEG',
        icon: <FileImage className="w-6 h-6" />,
        iconColor: 'text-orange-600',
        translationKey: 'jpg'
      },
      {
        name: '',
        description: '',
        path: '/compress/png',
        format: 'PNG',
        icon: <FileImage className="w-6 h-6" />,
        iconColor: 'text-orange-600',
        translationKey: 'png'
      }
    ]
  },
  {
    titleKey: 'compress_page.categories.document_compression',
    icon: <FileText className="w-6 h-6 text-red-600" />,
    formats: [
      {
        name: '',
        description: '',
        path: '/compress/pdf',
        format: 'PDF',
        icon: <FileText className="w-6 h-6" />,
        iconColor: 'text-red-600',
        translationKey: 'pdf'
      }
    ]
  }
];

export const CompressHub: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { t, i18n } = useTranslation();

  const localizedCategories = useMemo(() => {
    return COMPRESSION_CATEGORY_CONFIG.map((category) => ({
      ...category,
      title: t(category.titleKey),
      icon: category.icon,
      formats: category.formats.map((format) => ({
        ...format,
        name: t(`compress_page.formats.${format.translationKey}.name`),
        description: t(`compress_page.formats.${format.translationKey}.description`),
        path: getLocalizedUrl(format.path, i18n.language),
        format: format.format,
        icon: format.icon,
        iconColor: format.iconColor
      }))
    }));
  }, [t, i18n.language]);

  // Filter categories based on search query
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) {
      return localizedCategories;
    }

    const query = searchQuery.toLowerCase();
    return localizedCategories.map(category => ({
      ...category,
      formats: category.formats.filter(format => {
        const searchableText = `${format.name} ${format.description} ${format.format}`.toLowerCase();
        return searchableText.includes(query);
      })
    })).filter(category => category.formats.length > 0);
  }, [searchQuery, localizedCategories]);

  const handleBack = () => {
    window.location.href = getLocalizedUrl('/', i18n.language);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-3 sm:py-4">
            <button
              onClick={handleBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>{t('compress_page.back_button')}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3 mb-4 sm:mb-6">
            <div className="p-2 sm:p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl">
              <Minimize2 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">{t('compress_page.hero.title')}</h1>
          </div>
          <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('compress_page.hero.description')}
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 sm:mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <input
                type="text"
                placeholder={t('compress_page.search.placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 text-sm sm:text-base lg:text-lg border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="mt-2 text-xs sm:text-sm text-gray-600 text-center">
                {t('compress_page.search.results', {
                  count: filteredCategories.reduce((sum, cat) => sum + cat.formats.length, 0)
                })}
              </p>
            )}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
            {t('compress_page.features.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t('compress_page.features.items', { returnObjects: true }).map((feature: { title: string; description: string }, index: number) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all transform hover:scale-105">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Compression Categories */}
        <div className="space-y-8 sm:space-y-12">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 mb-4 sm:mb-6">
                {category.icon}
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{category.title}</h2>
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                {category.formats.map((format, formatIndex) => (
                  <div
                    key={formatIndex}
                    className={`px-3 sm:px-6 py-3 sm:py-4 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors ${
                      formatIndex === 0 ? 'rounded-t-lg' : ''
                    } ${formatIndex === category.formats.length - 1 ? 'rounded-b-lg' : ''}`}
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
                      <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 w-full sm:w-auto flex-1">
                        <div className={`flex-shrink-0 p-2 rounded-lg ${
                          format.iconColor === 'text-blue-600' ? 'bg-blue-100' :
                          format.iconColor === 'text-green-600' ? 'bg-green-100' :
                          format.iconColor === 'text-purple-600' ? 'bg-purple-100' :
                          format.iconColor === 'text-orange-600' ? 'bg-orange-100' :
                          format.iconColor === 'text-red-600' ? 'bg-red-100' :
                          format.iconColor === 'text-teal-600' ? 'bg-teal-100' : 'bg-gray-100'
                        }`}>
                          {format.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-3 mb-1">
                            <h3 className="text-base sm:text-lg font-semibold text-gray-900">{format.name}</h3>
                            <div className="flex items-center space-x-1 text-xs sm:text-sm text-gray-500">
                              <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs font-medium">
                                {format.format}
                              </span>
                            </div>
                          </div>
                          <p className="text-gray-600 text-xs sm:text-sm">{format.description}</p>
                        </div>
                      </div>
                      <div className="w-full sm:w-auto sm:ml-4">
                        <a
                          href={format.path}
                          className="inline-flex items-center justify-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors w-full sm:w-auto"
                        >
                          <RefreshCw className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>{t('compress_page.actions.compress')}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
          ) : (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('compress_page.no_results.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('compress_page.no_results.description')}
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                {t('compress_page.no_results.clear')}
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

