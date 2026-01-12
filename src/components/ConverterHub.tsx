import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  RefreshCw,
  ArrowLeft,
  FileText,
  Image,
  Database,
  Code,
  Search,
  Camera,
  BookOpen
} from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { getLocalizedUrl } from '../i18n';

type IconType = 'image' | 'camera' | 'fileText' | 'code' | 'book';

const ICON_COMPONENTS: Record<IconType, React.ComponentType<{ className?: string }>> = {
  image: Image,
  camera: Camera,
  fileText: FileText,
  code: Code,
  book: BookOpen
};

interface FormatConfig {
  slug: string;
  inputFormat: string;
  outputFormat: string;
  iconType: IconType;
  iconColor: string;
}

interface CategoryConfig {
  titleKey: string;
  iconType: IconType;
  iconColor: string;
  formats: FormatConfig[];
}

const CATEGORY_CONFIG: CategoryConfig[] = [
  {
    titleKey: 'converters_page.categories.image_general',
    iconType: 'image',
    iconColor: 'text-blue-600',
    formats: [
      { slug: 'cr2-to-ico', inputFormat: 'CR2', outputFormat: 'ICO', iconType: 'camera', iconColor: 'text-blue-600' },
      { slug: 'cr2-to-webp', inputFormat: 'CR2', outputFormat: 'WebP', iconType: 'camera', iconColor: 'text-blue-600' },
      { slug: 'heic-to-svg', inputFormat: 'HEIC', outputFormat: 'SVG', iconType: 'image', iconColor: 'text-blue-600' },
      { slug: 'heic-to-pdf', inputFormat: 'HEIC', outputFormat: 'PDF', iconType: 'image', iconColor: 'text-blue-600' },
      { slug: 'heic-to-png', inputFormat: 'HEIC', outputFormat: 'PNG', iconType: 'image', iconColor: 'text-blue-600' },
      { slug: 'heic-to-eps', inputFormat: 'HEIC', outputFormat: 'EPS', iconType: 'image', iconColor: 'text-blue-600' },
      { slug: 'heic-to-webp', inputFormat: 'HEIC', outputFormat: 'WebP', iconType: 'image', iconColor: 'text-blue-600' },
      { slug: 'heif-to-png', inputFormat: 'HEIF', outputFormat: 'PNG', iconType: 'image', iconColor: 'text-blue-600' },
      { slug: 'heif-to-webp', inputFormat: 'HEIF', outputFormat: 'WebP', iconType: 'image', iconColor: 'text-blue-600' },
      { slug: 'heif-to-jpg', inputFormat: 'HEIF', outputFormat: 'JPG', iconType: 'image', iconColor: 'text-blue-600' }
    ]
  },
  {
    titleKey: 'converters_page.categories.document_csv',
    iconType: 'fileText',
    iconColor: 'text-green-600',
    formats: [
      { slug: 'csv-to-docx', inputFormat: 'CSV', outputFormat: 'DOCX', iconType: 'fileText', iconColor: 'text-green-600' },
      { slug: 'csv-to-epub', inputFormat: 'CSV', outputFormat: 'EPUB', iconType: 'fileText', iconColor: 'text-green-600' },
      { slug: 'csv-to-html', inputFormat: 'CSV', outputFormat: 'HTML', iconType: 'fileText', iconColor: 'text-green-600' },
      { slug: 'csv-to-md', inputFormat: 'CSV', outputFormat: 'MD', iconType: 'fileText', iconColor: 'text-green-600' },
      { slug: 'csv-to-mobi', inputFormat: 'CSV', outputFormat: 'MOBI', iconType: 'fileText', iconColor: 'text-green-600' },
      { slug: 'csv-to-odp', inputFormat: 'CSV', outputFormat: 'ODP', iconType: 'fileText', iconColor: 'text-green-600' },
      { slug: 'csv-to-odt', inputFormat: 'CSV', outputFormat: 'ODT', iconType: 'fileText', iconColor: 'text-green-600' },
      { slug: 'csv-to-pdf', inputFormat: 'CSV', outputFormat: 'PDF', iconType: 'fileText', iconColor: 'text-green-600' },
      { slug: 'csv-to-ppt', inputFormat: 'CSV', outputFormat: 'PPT', iconType: 'fileText', iconColor: 'text-green-600' },
      { slug: 'csv-to-pptx', inputFormat: 'CSV', outputFormat: 'PPTX', iconType: 'fileText', iconColor: 'text-green-600' },
      { slug: 'csv-to-rtf', inputFormat: 'CSV', outputFormat: 'RTF', iconType: 'fileText', iconColor: 'text-green-600' },
      { slug: 'csv-to-txt', inputFormat: 'CSV', outputFormat: 'TXT', iconType: 'fileText', iconColor: 'text-green-600' },
      { slug: 'csv-to-xls', inputFormat: 'CSV', outputFormat: 'XLS', iconType: 'fileText', iconColor: 'text-green-600' },
      { slug: 'csv-to-xlsx', inputFormat: 'CSV', outputFormat: 'XLSX', iconType: 'fileText', iconColor: 'text-green-600' }
    ]
  },
  {
    titleKey: 'converters_page.categories.developer_csv',
    iconType: 'code',
    iconColor: 'text-orange-600',
    formats: [
      { slug: 'csv-to-json', inputFormat: 'CSV', outputFormat: 'JSON', iconType: 'code', iconColor: 'text-orange-600' },
      { slug: 'csv-to-ndjson', inputFormat: 'CSV', outputFormat: 'NDJSON', iconType: 'code', iconColor: 'text-orange-600' },
      { slug: 'csv-to-parquet', inputFormat: 'CSV', outputFormat: 'Parquet', iconType: 'code', iconColor: 'text-orange-600' },
      { slug: 'csv-to-sql', inputFormat: 'CSV', outputFormat: 'SQL', iconType: 'code', iconColor: 'text-orange-600' },
      { slug: 'csv-to-toml', inputFormat: 'CSV', outputFormat: 'TOML', iconType: 'code', iconColor: 'text-orange-600' },
      { slug: 'csv-to-xml', inputFormat: 'CSV', outputFormat: 'XML', iconType: 'code', iconColor: 'text-orange-600' },
      { slug: 'csv-to-yaml', inputFormat: 'CSV', outputFormat: 'YAML', iconType: 'code', iconColor: 'text-orange-600' }
    ]
  },
  {
    titleKey: 'converters_page.categories.image_raw',
    iconType: 'camera',
    iconColor: 'text-blue-600',
    formats: [
      { slug: 'dng-to-webp', inputFormat: 'DNG', outputFormat: 'WebP', iconType: 'camera', iconColor: 'text-blue-600' }
    ]
  },
  {
    titleKey: 'converters_page.categories.image_vector',
    iconType: 'image',
    iconColor: 'text-blue-600',
    formats: [
      { slug: 'eps-to-webp', inputFormat: 'EPS', outputFormat: 'WebP', iconType: 'image', iconColor: 'text-blue-600' }
    ]
  },
  {
    titleKey: 'converters_page.categories.ebook_epub',
    iconType: 'book',
    iconColor: 'text-orange-600',
    formats: [
      { slug: 'epub-to-csv', inputFormat: 'EPUB', outputFormat: 'CSV', iconType: 'book', iconColor: 'text-orange-600' },
      { slug: 'epub-to-doc', inputFormat: 'EPUB', outputFormat: 'DOC', iconType: 'book', iconColor: 'text-orange-600' },
      { slug: 'epub-to-docx', inputFormat: 'EPUB', outputFormat: 'DOCX', iconType: 'book', iconColor: 'text-orange-600' },
      { slug: 'epub-to-html', inputFormat: 'EPUB', outputFormat: 'HTML', iconType: 'book', iconColor: 'text-orange-600' },
      { slug: 'epub-to-md', inputFormat: 'EPUB', outputFormat: 'MD', iconType: 'book', iconColor: 'text-orange-600' },
      { slug: 'epub-to-mobi', inputFormat: 'EPUB', outputFormat: 'MOBI', iconType: 'book', iconColor: 'text-orange-600' },
      { slug: 'epub-to-odp', inputFormat: 'EPUB', outputFormat: 'ODP', iconType: 'book', iconColor: 'text-orange-600' },
      { slug: 'epub-to-odt', inputFormat: 'EPUB', outputFormat: 'ODT', iconType: 'book', iconColor: 'text-orange-600' },
      { slug: 'epub-to-pdf', inputFormat: 'EPUB', outputFormat: 'PDF', iconType: 'book', iconColor: 'text-orange-600' },
      { slug: 'epub-to-ppt', inputFormat: 'EPUB', outputFormat: 'PPT', iconType: 'book', iconColor: 'text-orange-600' },
      { slug: 'epub-to-pptx', inputFormat: 'EPUB', outputFormat: 'PPTX', iconType: 'book', iconColor: 'text-orange-600' },
      { slug: 'epub-to-rtf', inputFormat: 'EPUB', outputFormat: 'RTF', iconType: 'book', iconColor: 'text-orange-600' },
      { slug: 'epub-to-txt', inputFormat: 'EPUB', outputFormat: 'TXT', iconType: 'book', iconColor: 'text-orange-600' },
      { slug: 'epub-to-xlsx', inputFormat: 'EPUB', outputFormat: 'XLSX', iconType: 'book', iconColor: 'text-orange-600' }
    ]
  },
  {
    titleKey: 'converters_page.categories.document_doc',
    iconType: 'fileText',
    iconColor: 'text-green-600',
    formats: [
      { slug: 'doc-to-csv', inputFormat: 'DOC', outputFormat: 'CSV', iconType: 'fileText', iconColor: 'text-green-600' },
      { slug: 'doc-to-epub', inputFormat: 'DOC', outputFormat: 'EPUB', iconType: 'fileText', iconColor: 'text-green-600' },
      { slug: 'doc-to-mobi', inputFormat: 'DOC', outputFormat: 'MOBI', iconType: 'fileText', iconColor: 'text-green-600' },
      { slug: 'doc-to-odt', inputFormat: 'DOC', outputFormat: 'ODT', iconType: 'fileText', iconColor: 'text-green-600' },
      { slug: 'doc-to-txt', inputFormat: 'DOC', outputFormat: 'TXT', iconType: 'fileText', iconColor: 'text-green-600' }
    ]
  },
  {
    titleKey: 'converters_page.categories.document_docx',
    iconType: 'fileText',
    iconColor: 'text-green-600',
    formats: [
      { slug: 'docx-to-csv', inputFormat: 'DOCX', outputFormat: 'CSV', iconType: 'fileText', iconColor: 'text-green-600' },
      { slug: 'docx-to-epub', inputFormat: 'DOCX', outputFormat: 'EPUB', iconType: 'fileText', iconColor: 'text-green-600' },
      { slug: 'docx-to-mobi', inputFormat: 'DOCX', outputFormat: 'MOBI', iconType: 'fileText', iconColor: 'text-green-600' },
      { slug: 'docx-to-odt', inputFormat: 'DOCX', outputFormat: 'ODT', iconType: 'fileText', iconColor: 'text-green-600' },
      { slug: 'docx-to-txt', inputFormat: 'DOCX', outputFormat: 'TXT', iconType: 'fileText', iconColor: 'text-green-600' }
    ]
  }
];

const slugToKey = (slug: string) => slug.replace(/-/g, '_');

const createIcon = (type: IconType, sizeClass: string, colorClass: string) => {
  const IconComponent = ICON_COMPONENTS[type];
  return IconComponent ? <IconComponent className={`${sizeClass} ${colorClass}`} /> : null;
};

const getIconBackground = (colorClass: string) => {
  switch (colorClass) {
    case 'text-blue-600':
      return 'bg-blue-100';
    case 'text-green-600':
      return 'bg-green-100';
    case 'text-purple-600':
      return 'bg-purple-100';
    case 'text-orange-600':
      return 'bg-orange-100';
    case 'text-red-600':
      return 'bg-red-100';
    case 'text-teal-600':
      return 'bg-teal-100';
    default:
      return 'bg-gray-100';
  }
};

export const ConverterHub: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const localizedCategories = useMemo(() => {
    return CATEGORY_CONFIG.map((category) => {
      const formats = category.formats.map((format) => {
        const keyBase = slugToKey(format.slug);
        return {
          ...format,
          icon: createIcon(format.iconType, 'w-5 h-5', format.iconColor),
          name: t(`${keyBase}.title`),
          description: t(`${keyBase}.subtitle`),
          href: getLocalizedUrl(`/convert/${format.slug}`, i18n.language)
        };
      });

      return {
        title: t(category.titleKey),
        icon: createIcon(category.iconType, 'w-6 h-6', category.iconColor),
        formats
      };
    });
  }, [i18n.language, t]);

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) {
      return localizedCategories;
    }

    const query = searchQuery.toLowerCase();

    return localizedCategories
      .map((category) => {
        const formats = category.formats.filter((format) => {
          const searchableText = `${format.name} ${format.description} ${format.inputFormat} ${format.outputFormat}`.toLowerCase();
          return searchableText.includes(query);
        });

        return { ...category, formats };
      })
      .filter((category) => category.formats.length > 0);
  }, [localizedCategories, searchQuery]);

  const heroTitle = t('converters_page.hero.title');
  const heroDescription = t('converters_page.hero.description');
  const backLabel = t('common.back_to_home');
  const searchPlaceholder = t('converters_page.search.placeholder');
  const exampleOne = t('converters_page.search.example_one');
  const exampleTwo = t('converters_page.search.example_two');
  const searchClearLabel = t('converters_page.search.clear');
  const noResultsTitle = t('converters_page.no_results.title');
  const noResultsDescription = t('converters_page.no_results.description', { exampleOne, exampleTwo });
  const noResultsClear = t('converters_page.no_results.clear');
  const convertLabel = t('common.convert');
  const featureTitle = t('converters_page.features.title');
  const featureItems = t('converters_page.features.items', { returnObjects: true }) as Array<{ title: string; description: string }>;

  const featureIconConfig = [
    { bg: 'bg-blue-100', icon: <RefreshCw className="w-6 h-6 text-blue-600" /> },
    { bg: 'bg-green-100', icon: <Database className="w-6 h-6 text-green-600" /> },
    { bg: 'bg-purple-100', icon: <FileText className="w-6 h-6 text-purple-600" /> }
  ];

  const resultsCount = filteredCategories.reduce((sum, category) => sum + category.formats.length, 0);
  const searchResultsLabel = t('converters_page.search.results', { count: resultsCount });

  const handleBack = () => {
    navigate(getLocalizedUrl('/', i18n.language));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-3 sm:py-4">
            <button
              onClick={handleBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>{backLabel}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3 mb-4 sm:mb-6">
            <div className="p-2 sm:p-3 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl">
              <RefreshCw className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">{heroTitle}</h1>
          </div>
          <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-3xl mx-auto">
            {heroDescription}
          </p>
        </div>

        <div className="mb-8 sm:mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <input
                type="text"
                placeholder={searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 text-sm sm:text-base lg:text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label={searchClearLabel}
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="mt-2 text-xs sm:text-sm text-gray-600 text-center">
                {searchResultsLabel}
              </p>
            )}
          </div>
        </div>

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
                      key={format.slug}
                      className={`px-3 sm:px-6 py-3 sm:py-4 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors ${
                        formatIndex === 0 ? 'rounded-t-lg' : ''
                      } ${formatIndex === category.formats.length - 1 ? 'rounded-b-lg' : ''}`}
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
                        <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 w-full sm:w-auto flex-1">
                          {format.icon && (
                            <div className={`flex-shrink-0 p-2 rounded-lg ${getIconBackground(format.iconColor)}`}>
                              {format.icon}
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-2">
                              <h3 className="text-base sm:text-lg font-semibold text-gray-900">{format.name}</h3>
                              <div className="flex items-center space-x-1 text-xs sm:text-sm text-gray-500">
                                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                                  {format.inputFormat}
                                </span>
                                <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 rotate-180 text-gray-400" />
                                <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                                  {format.outputFormat}
                                </span>
                              </div>
                            </div>
                            <p className="text-gray-600 text-xs sm:text-sm">{format.description}</p>
                          </div>
                        </div>
                        <div className="w-full sm:w-auto sm:ml-4">
                          <a
                            href={format.href}
                            className="inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-700 transition-colors w-full sm:w-auto"
                          >
                            <RefreshCw className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>{convertLabel}</span>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{noResultsTitle}</h3>
              <p className="text-gray-600 mb-4">{noResultsDescription}</p>
              <button
                onClick={() => setSearchQuery('')}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                {noResultsClear}
              </button>
            </div>
          )}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">{featureTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featureItems.slice(0, featureIconConfig.length).map((item, index) => {
              const iconConfig = featureIconConfig[index];
              return (
                <div className="text-center" key={index}>
                  <div className={`w-12 h-12 ${iconConfig.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    {iconConfig.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
