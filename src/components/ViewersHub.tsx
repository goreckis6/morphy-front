import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Eye,
  ArrowLeft,
  FileText,
  Image,
  BarChart3,
  Code,
  RefreshCw,
  Search,
  Camera
} from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { getLocalizedUrl } from '../i18n';
import '../locales/viewersPage';

type IconType = 'image' | 'fileText' | 'barChart' | 'code' | 'camera';

type FormatConfig = {
  slug: string;
  translationKey: string;
  iconType: IconType;
  iconColor: string;
  fallbackTitle: string;
  fallbackDescription: string;
};

type CategoryConfig = {
  titleKey: string;
  iconType: IconType;
  iconColor: string;
  formats: FormatConfig[];
};

const ICON_COMPONENTS: Record<IconType, React.ComponentType<{ className?: string }>> = {
  image: Image,
  fileText: FileText,
  barChart: BarChart3,
  code: Code,
  camera: Camera
};

const CATEGORY_CONFIG: CategoryConfig[] = [
  {
    titleKey: 'viewers_page.categories.image_standard',
    iconType: 'image',
    iconColor: 'text-blue-600',
    formats: [
      {
        slug: 'jpg',
        translationKey: 'jpeg',
        iconType: 'image',
        iconColor: 'text-blue-600',
        fallbackTitle: 'JPEG Viewer',
        fallbackDescription: 'View JPEG images with zoom and pan controls.'
      },
      {
        slug: 'png',
        translationKey: 'png',
        iconType: 'image',
        iconColor: 'text-blue-600',
        fallbackTitle: 'PNG Viewer',
        fallbackDescription: 'View PNG images with transparency support.'
      },
      {
        slug: 'webp',
        translationKey: 'webp',
        iconType: 'image',
        iconColor: 'text-blue-600',
        fallbackTitle: 'WebP Viewer',
        fallbackDescription: 'View WebP images with modern compression.'
      },
      {
        slug: 'gif',
        translationKey: 'gif',
        iconType: 'image',
        iconColor: 'text-blue-600',
        fallbackTitle: 'GIF Viewer',
        fallbackDescription: 'View animated GIF images with playback controls.'
      },
      {
        slug: 'svg',
        translationKey: 'svg',
        iconType: 'image',
        iconColor: 'text-blue-600',
        fallbackTitle: 'SVG Viewer',
        fallbackDescription: 'View scalable vector graphics with zoom.'
      },
      {
        slug: 'bmp',
        translationKey: 'bmp',
        iconType: 'image',
        iconColor: 'text-blue-600',
        fallbackTitle: 'BMP Viewer',
        fallbackDescription: 'View bitmap images with color depth support.'
      },
      {
        slug: 'ico',
        translationKey: 'ico',
        iconType: 'image',
        iconColor: 'text-blue-600',
        fallbackTitle: 'ICO Viewer',
        fallbackDescription: 'View Windows icon files with multiple sizes.'
      },
      {
        slug: 'heic',
        translationKey: 'heic',
        iconType: 'image',
        iconColor: 'text-blue-600',
        fallbackTitle: 'HEIC Viewer',
        fallbackDescription: 'View HEIC images from modern cameras.'
      },
      {
        slug: 'avif',
        translationKey: 'avif',
        iconType: 'image',
        iconColor: 'text-blue-600',
        fallbackTitle: 'AVIF Viewer',
        fallbackDescription: 'View AVIF images with next-gen compression.'
      }
    ]
  },
  {
    titleKey: 'viewers_page.categories.document',
    iconType: 'fileText',
    iconColor: 'text-green-600',
    formats: [
      {
        slug: 'pdf',
        translationKey: 'pdf',
        iconType: 'fileText',
        iconColor: 'text-green-600',
        fallbackTitle: 'PDF Viewer',
        fallbackDescription: 'View PDF documents with page navigation.'
      },
      {
        slug: 'docx',
        translationKey: 'docx',
        iconType: 'fileText',
        iconColor: 'text-green-600',
        fallbackTitle: 'DOCX Viewer',
        fallbackDescription: 'View Microsoft Word documents.'
      },
      {
        slug: 'rtf',
        translationKey: 'rtf',
        iconType: 'fileText',
        iconColor: 'text-green-600',
        fallbackTitle: 'RTF Viewer',
        fallbackDescription: 'View Rich Text Format documents.'
      },
      {
        slug: 'odt',
        translationKey: 'odt',
        iconType: 'fileText',
        iconColor: 'text-green-600',
        fallbackTitle: 'ODT Viewer',
        fallbackDescription: 'View OpenDocument Text files.'
      },
      {
        slug: 'txt',
        translationKey: 'txt',
        iconType: 'fileText',
        iconColor: 'text-green-600',
        fallbackTitle: 'TXT Viewer',
        fallbackDescription: 'View plain text files with syntax highlighting.'
      },
      {
        slug: 'md',
        translationKey: 'md',
        iconType: 'fileText',
        iconColor: 'text-green-600',
        fallbackTitle: 'Markdown Viewer',
        fallbackDescription: 'View Markdown files with rendered formatting.'
      }
    ]
  },
  {
    titleKey: 'viewers_page.categories.spreadsheet',
    iconType: 'barChart',
    iconColor: 'text-purple-600',
    formats: [
      {
        slug: 'xlsx',
        translationKey: 'xlsx',
        iconType: 'barChart',
        iconColor: 'text-purple-600',
        fallbackTitle: 'Excel Viewer',
        fallbackDescription: 'View Excel spreadsheets with formula support.'
      },
      {
        slug: 'csv',
        translationKey: 'csv',
        iconType: 'barChart',
        iconColor: 'text-purple-600',
        fallbackTitle: 'CSV Viewer',
        fallbackDescription: 'View CSV files with table formatting.'
      },
      {
        slug: 'ods',
        translationKey: 'ods',
        iconType: 'barChart',
        iconColor: 'text-purple-600',
        fallbackTitle: 'ODS Viewer',
        fallbackDescription: 'View OpenDocument Spreadsheet files.'
      }
    ]
  },
  {
    titleKey: 'viewers_page.categories.code_data',
    iconType: 'code',
    iconColor: 'text-orange-600',
    formats: [
      {
        slug: 'json',
        translationKey: 'json',
        iconType: 'code',
        iconColor: 'text-orange-600',
        fallbackTitle: 'JSON Viewer',
        fallbackDescription: 'View JSON files with syntax highlighting and formatting.'
      },
      {
        slug: 'xml',
        translationKey: 'xml',
        iconType: 'code',
        iconColor: 'text-orange-600',
        fallbackTitle: 'XML Viewer',
        fallbackDescription: 'View XML files with tree structure.'
      },
      {
        slug: 'html',
        translationKey: 'html',
        iconType: 'code',
        iconColor: 'text-orange-600',
        fallbackTitle: 'HTML Viewer',
        fallbackDescription: 'View HTML files with rendered content.'
      },
      {
        slug: 'css',
        translationKey: 'css',
        iconType: 'code',
        iconColor: 'text-orange-600',
        fallbackTitle: 'CSS Viewer',
        fallbackDescription: 'View CSS files with syntax highlighting.'
      },
      {
        slug: 'js',
        translationKey: 'js',
        iconType: 'code',
        iconColor: 'text-orange-600',
        fallbackTitle: 'JavaScript Viewer',
        fallbackDescription: 'View JS files with syntax highlighting.'
      },
      {
        slug: 'py',
        translationKey: 'py',
        iconType: 'code',
        iconColor: 'text-orange-600',
        fallbackTitle: 'Python Viewer',
        fallbackDescription: 'View Python files with syntax highlighting.'
      }
    ]
  },
  {
    titleKey: 'viewers_page.categories.image_raw',
    iconType: 'camera',
    iconColor: 'text-red-600',
    formats: [
      {
        slug: 'nef',
        translationKey: 'nef',
        iconType: 'camera',
        iconColor: 'text-red-600',
        fallbackTitle: 'NEF Viewer',
        fallbackDescription: 'View Nikon raw camera files.'
      },
      {
        slug: 'cr2',
        translationKey: 'cr2',
        iconType: 'camera',
        iconColor: 'text-red-600',
        fallbackTitle: 'CR2 Viewer',
        fallbackDescription: 'View Canon raw camera files.'
      },
      {
        slug: 'dcr',
        translationKey: 'dcr',
        iconType: 'camera',
        iconColor: 'text-red-600',
        fallbackTitle: 'DCR Viewer',
        fallbackDescription: 'View Kodak raw camera files.'
      },
      {
        slug: 'x3f',
        translationKey: 'x3f',
        iconType: 'camera',
        iconColor: 'text-red-600',
        fallbackTitle: 'X3F Viewer',
        fallbackDescription: 'View Sigma raw camera files.'
      },
      {
        slug: 'arw',
        translationKey: 'arw',
        iconType: 'camera',
        iconColor: 'text-red-600',
        fallbackTitle: 'ARW Viewer',
        fallbackDescription: 'View Sony raw camera files.'
      },
      {
        slug: 'raf',
        translationKey: 'raf',
        iconType: 'camera',
        iconColor: 'text-red-600',
        fallbackTitle: 'RAF Viewer',
        fallbackDescription: 'View Fuji raw camera files.'
      },
      {
        slug: 'orf',
        translationKey: 'orf',
        iconType: 'camera',
        iconColor: 'text-red-600',
        fallbackTitle: 'ORF Viewer',
        fallbackDescription: 'View Olympus raw camera files.'
      },
      {
        slug: 'dng',
        translationKey: 'dng',
        iconType: 'camera',
        iconColor: 'text-red-600',
        fallbackTitle: 'DNG Viewer',
        fallbackDescription: 'View Adobe Digital Negative files.'
      },
      {
        slug: 'pef',
        translationKey: 'pef',
        iconType: 'camera',
        iconColor: 'text-red-600',
        fallbackTitle: 'PEF Viewer',
        fallbackDescription: 'View Pentax raw camera files.'
      }
    ]
  }
];

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
    default:
      return 'bg-gray-100';
  }
};

export const ViewersHub: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const localizedCategories = useMemo(() => {
    return CATEGORY_CONFIG.map((category) => {
      const formats = category.formats.map((format) => {
        const keyBase = `viewers_page.formats.${format.translationKey}`;

        return {
          ...format,
          icon: createIcon(format.iconType, 'w-5 h-5', format.iconColor),
          name: t(`${keyBase}.title`, { defaultValue: format.fallbackTitle }),
          description: t(`${keyBase}.description`, { defaultValue: format.fallbackDescription }),
          href: getLocalizedUrl(`/viewers/${format.slug}`, i18n.language)
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
      .map((category) => ({
        ...category,
        formats: category.formats.filter((format) => {
          const searchableText = `${format.name} ${format.description}`.toLowerCase();
          return searchableText.includes(query);
        })
      }))
      .filter((category) => category.formats.length > 0);
  }, [localizedCategories, searchQuery]);

  const backLabel = t('common.back_to_home');
  const heroTitle = t('viewers_page.hero.title');
  const heroDescription = t('viewers_page.hero.description');
  const searchPlaceholder = t('viewers_page.search.placeholder');
  const exampleOne = t('viewers_page.search.example_one');
  const exampleTwo = t('viewers_page.search.example_two');
  const searchClearLabel = t('viewers_page.search.clear');
  const noResultsTitle = t('viewers_page.no_results.title');
  const noResultsDescription = t('viewers_page.no_results.description', { exampleOne, exampleTwo });
  const noResultsClear = t('viewers_page.no_results.clear');
  const viewLabel = t('viewers_page.actions.view');
  const featureTitle = t('viewers_page.features.title');
  const featureItems = t('viewers_page.features.items', {
    returnObjects: true
  }) as Array<{ title: string; description: string }>;

  const featureIconConfig = [
    { bg: 'bg-blue-100', icon: <Eye className="w-6 h-6 text-blue-600" /> },
    { bg: 'bg-green-100', icon: <RefreshCw className="w-6 h-6 text-green-600" /> },
    { bg: 'bg-purple-100', icon: <FileText className="w-6 h-6 text-purple-600" /> }
  ];

  const resultsCount = filteredCategories.reduce((sum, category) => sum + category.formats.length, 0);
  const searchResultsLabel = t('viewers_page.search.results', { count: resultsCount });

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
            <div className="p-2 sm:p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
              <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
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
                className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 text-sm sm:text-base lg:text-lg border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
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
              <p className="mt-2 text-xs sm:text-sm text-gray-600 text-center">{searchResultsLabel}</p>
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
                      key={`${category.title}-${format.slug}`}
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
                            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-3 mb-1">
                              <h3 className="text-base sm:text-lg font-semibold text-gray-900">{format.name}</h3>
                            </div>
                            <p className="text-gray-600 text-xs sm:text-sm">{format.description}</p>
                          </div>
                        </div>
                        <div className="w-full sm:w-auto sm:ml-4">
                          <a
                            href={format.href}
                            className="inline-flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors w-full sm:w-auto"
                          >
                            <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>{viewLabel}</span>
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
              <button onClick={() => setSearchQuery('')} className="text-blue-600 hover:text-blue-700 font-medium">
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
