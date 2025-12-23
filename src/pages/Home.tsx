import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FileViewer } from '../components/FileViewer';
import { useTranslation, Trans } from 'react-i18next';
import { usePathLanguageSync } from '../hooks/usePathLanguageSync';

type HomeStep = {
  badge: string;
  title: string;
  description: string;
};
import { 
  RefreshCw, 
  Eye, 
  FileText, 
  Image, 
  BarChart3, 
  Zap, 
  Shield, 
  Globe,
  Star,
  TrendingUp,
  ArrowRight,
  File,
  Upload,
  Download,
  CheckCircle2,
  Sparkles,
  Layers,
  Rocket,
  FolderOpen,
  Minimize2
} from 'lucide-react';

export default function Home() {
  const { t, i18n } = useTranslation();
  usePathLanguageSync(i18n);

  const navigate = useNavigate();
  const [viewerFile, setViewerFile] = useState<File | null>(null);
  const [totalDataProcessed, setTotalDataProcessed] = useState(0);


  // Load and track total data processed
  useEffect(() => {
    const storedData = localStorage.getItem('FomiPeek_total_processed');
    const baseGB = storedData ? parseFloat(storedData) : 500;
    
    setTotalDataProcessed(baseGB);
    
    const liveIncrement = setInterval(() => {
      setTotalDataProcessed(prev => {
        const newValue = prev + Math.random() * 0.05;
        localStorage.setItem('FomiPeek_total_processed', newValue.toString());
        return newValue;
      });
    }, 10000);
    
    return () => {
      clearInterval(liveIncrement);
    };
  }, []);

  const formatDataProcessed = (gb: number) => {
    if (gb >= 1000) {
      return `${(gb / 1000).toFixed(1)} TB`;
    }
    return `${gb.toFixed(1)} GB`;
  };

  const locale = i18n.language;
  const isEnglish = locale === 'en';
  const getLocalizedPath = (path: string) => (isEnglish ? path : `/${locale}${path}`);
  const localizedBasePath = getLocalizedPath('');
  const canonicalUrl = `https://formipeek.com${localizedBasePath}`;

  const metaTitle = t('home.meta.title');
  const metaDescription = t('home.meta.description');
  const metaKeywords = t('home.meta.keywords');
  const schemaWebsiteName = t('home.schema.website_name');
  const schemaWebsiteDescription = t('home.schema.website_description');
  const schemaWebpageName = t('home.schema.webpage_name');
  const schemaWebpageDescription = t('home.schema.webpage_description');

  const siteJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://formipeek.com#organization",
        "name": "FomiPeek",
        "url": "https://formipeek.com",
        "logo": "https://formipeek.com/logo.png",
        "sameAs": []
      },
      {
        "@type": "WebSite",
        "@id": `${canonicalUrl}#website`,
        "url": canonicalUrl,
        "name": schemaWebsiteName,
        "description": schemaWebsiteDescription,
        "publisher": { "@id": "https://formipeek.com#organization" }
      },
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": schemaWebpageName,
        "description": schemaWebpageDescription,
        "isPartOf": { "@id": `${canonicalUrl}#website` },
        "publisher": { "@id": "https://formipeek.com#organization" }
      }
    ]
  };

  const featureItems = t('home.features.items', { returnObjects: true }) as Array<{ title: string; description: string }>;
  const features = [
    { 
      icon: <Zap className="w-8 h-8" />, 
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-gradient-to-br from-yellow-50 to-orange-50'
    },
    { 
      icon: <Shield className="w-8 h-8" />, 
      color: 'from-green-400 to-emerald-500',
      bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50'
    },
    { 
      icon: <Globe className="w-8 h-8" />, 
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50'
    },
    { 
      icon: <BarChart3 className="w-8 h-8" />, 
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50'
    },
    { 
      icon: <Eye className="w-8 h-8" />, 
      color: 'from-pink-400 to-rose-500',
      bgColor: 'bg-gradient-to-br from-pink-50 to-rose-50'
    },
    { 
      icon: <Star className="w-8 h-8" />, 
      color: 'from-indigo-400 to-violet-500',
      bgColor: 'bg-gradient-to-br from-indigo-50 to-violet-50'
    },
  ];

  const statsContent = t('home.stats', { returnObjects: true }) as {
    supported_formats?: { value: string; label: string };
    data_processed?: { label: string };
    batch_processing?: { value: string; label: string };
  };

  const stats = [
    { icon: <FileText className="w-6 h-6" />, value: statsContent?.supported_formats?.value ?? '300+', label: statsContent?.supported_formats?.label ?? '', color: 'text-blue-600' },
    { icon: <TrendingUp className="w-6 h-6" />, value: formatDataProcessed(totalDataProcessed), label: statsContent?.data_processed?.label ?? '', color: 'text-green-600' },
    { icon: <Zap className="w-6 h-6" />, value: statsContent?.batch_processing?.value ?? '20 Files', label: statsContent?.batch_processing?.label ?? '', color: 'text-purple-600' },
  ];

  const popularConvertersConfig = [
    { key: 'csv_to_json', href: '/convert/csv-to-json', icon: <FileText className="w-5 h-5" />, color: 'blue' },
    { key: 'csv_to_ndjson', href: '/convert/csv-to-ndjson', icon: <BarChart3 className="w-5 h-5" />, color: 'purple' },
    { key: 'dng_to_webp', href: '/convert/dng-to-webp', icon: <Image className="w-5 h-5" />, color: 'pink' },
    { key: 'cr2_to_webp', href: '/convert/cr2-to-webp', icon: <Image className="w-5 h-5" />, color: 'violet' },
    { key: 'epub_to_pdf', href: '/convert/epub-to-pdf', icon: <File className="w-5 h-5" />, color: 'red' },
    { key: 'epub_to_mobi', href: '/convert/epub-to-mobi', icon: <File className="w-5 h-5" />, color: 'emerald' },
    { key: 'csv_to_xlsx', href: '/convert/csv-to-xlsx', icon: <BarChart3 className="w-5 h-5" />, color: 'teal' },
    { key: 'docx_to_pdf', href: '/convert/docx-to-pdf', icon: <File className="w-5 h-5" />, color: 'slate' },
  ];

  const popularConverters = popularConvertersConfig.map((converter) => ({
    ...converter,
    name: t(`home.popular.converters.${converter.key}`),
    href: getLocalizedPath(converter.href),
  }));

  const heroBadge = t('home.hero.badge');
  const heroTitle = t('home.hero.title');
  const heroHighlight = t('home.hero.highlight');
  const heroPrimaryCta = t('home.hero.cta_primary');
  const heroSecondaryCta = t('home.hero.cta_secondary');
  const heroTrustItems = t('home.hero.trust', { returnObjects: true }) as string[];

  const exploreCardsContent = {
    converters: {
      title: t('home.explore.cards.converters.title'),
      description: t('home.explore.cards.converters.description'),
      cta: t('home.explore.cards.converters.cta'),
    },
    viewers: {
      title: t('home.explore.cards.viewers.title'),
      description: t('home.explore.cards.viewers.description'),
      cta: t('home.explore.cards.viewers.cta'),
    },
    compress: {
      title: t('home.explore.cards.compress.title'),
      description: t('home.explore.cards.compress.description'),
      cta: t('home.explore.cards.compress.cta'),
    },
    samples: {
      title: t('home.explore.cards.samples.title'),
      description: t('home.explore.cards.samples.description'),
      cta: t('home.explore.cards.samples.cta'),
    },
  };

  const howSteps = t('home.how.steps', { returnObjects: true }) as HomeStep[];
  const howStepConfigs = [
    {
      icon: <Upload className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />,
      glow: 'from-blue-400 to-cyan-400',
      cardBg: 'from-blue-50 to-cyan-50',
      border: 'border-blue-100',
      hoverBorder: 'hover:border-blue-300',
      badgeText: 'text-blue-600',
      badgeBg: 'bg-blue-100',
      iconBg: 'from-blue-500 to-cyan-600',
      step: howSteps[0] ?? { badge: '', title: '', description: '' },
    },
    {
      icon: <Layers className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />,
      glow: 'from-purple-400 to-pink-400',
      cardBg: 'from-purple-50 to-pink-50',
      border: 'border-purple-100',
      hoverBorder: 'hover:border-purple-300',
      badgeText: 'text-purple-600',
      badgeBg: 'bg-purple-100',
      iconBg: 'from-purple-500 to-pink-600',
      step: howSteps[1] ?? { badge: '', title: '', description: '' },
    },
    {
      icon: <Download className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />,
      glow: 'from-green-400 to-emerald-400',
      cardBg: 'from-green-50 to-emerald-50',
      border: 'border-green-100',
      hoverBorder: 'hover:border-green-300',
      badgeText: 'text-green-600',
      badgeBg: 'bg-green-100',
      iconBg: 'from-green-500 to-emerald-600',
      step: howSteps[2] ?? { badge: '', title: '', description: '' },
    },
  ];

  const popularButtonFull = t('home.popular.button_full');
  const popularButtonMobile = t('home.popular.button_mobile');
  const featureSectionTitle = t('home.features.title');
  const featureSectionSubtitle = t('home.features.subtitle');
  const exploreTitle = t('home.explore.title');
  const exploreSubtitle = t('home.explore.subtitle');
  const howTitle = t('home.how.title');
  const howSubtitle = t('home.how.subtitle');
  const popularTitle = t('home.popular.title');
  const popularSubtitle = t('home.popular.subtitle');

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <link rel="canonical" href={canonicalUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Hero Section - Redesigned */}
        <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-16 sm:py-24 md:py-32 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/20 mb-6 sm:mb-8">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                <span className="text-xs sm:text-sm font-medium">{heroBadge}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-4 sm:mb-6 leading-tight px-2">
                {heroTitle}
                <br />
                <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  {heroHighlight}
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
                <Trans
                  i18nKey="home.hero.subtitle"
                  components={{ bold: <span className="font-bold text-white" /> }}
                  values={{ count: '300+' }}
                />
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-4">
                <button 
                  onClick={() => navigate(getLocalizedPath('/converters'))}
                  className="group relative bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3.5 px-6 sm:py-4 sm:px-8 md:py-5 md:px-10 rounded-xl sm:rounded-2xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/50 flex items-center gap-2 sm:gap-3 overflow-hidden w-full sm:w-auto text-sm sm:text-base"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                  <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
                  <span className="relative z-10">{heroPrimaryCta}</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => navigate(getLocalizedPath('/viewers'))}
                  className="group border-2 border-white/30 backdrop-blur-sm bg-white/5 text-white font-bold py-3.5 px-6 sm:py-4 sm:px-8 md:py-5 md:px-10 rounded-xl sm:rounded-2xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center gap-2 sm:gap-3 w-full sm:w-auto text-sm sm:text-base"
                >
                  <Eye className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span>{heroSecondaryCta}</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-gray-400 px-4">
                {heroTrustItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-1.5 sm:gap-2">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - Redesigned */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -mr-12 -mt-12 sm:-mr-16 sm:-mt-16 opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative">
                    <div className={`inline-flex p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-gradient-to-br ${stat.color === 'text-blue-600' ? 'from-blue-100 to-blue-200' : stat.color === 'text-green-600' ? 'from-green-100 to-green-200' : 'from-purple-100 to-purple-200'} mb-3 sm:mb-4`}>
                      <div className={stat.color}>
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 font-semibold text-base sm:text-lg">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Sections - Converters, Viewers, Compress, Samples */}
        <section className="py-12 sm:py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-3 sm:mb-4 md:mb-6">
                {exploreTitle}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                {exploreSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              {/* Converters */}
              <button
                onClick={() => navigate(getLocalizedPath('/converters'))}
                className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-blue-100 hover:border-blue-300 overflow-hidden text-left"
              >
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full -mr-12 -mt-12 sm:-mr-16 sm:-mt-16 opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <RefreshCw className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {exploreCardsContent.converters.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                    {exploreCardsContent.converters.description}
                  </p>
                  <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm sm:text-base group-hover:gap-3 transition-all">
                    <span>{exploreCardsContent.converters.cta}</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>

              {/* Viewers */}
              <button
                onClick={() => navigate(getLocalizedPath('/viewers'))}
                className="group relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-purple-100 hover:border-purple-300 overflow-hidden text-left"
              >
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full -mr-12 -mt-12 sm:-mr-16 sm:-mt-16 opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <Eye className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {exploreCardsContent.viewers.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                    {exploreCardsContent.viewers.description}
                  </p>
                  <div className="flex items-center gap-2 text-purple-600 font-semibold text-sm sm:text-base group-hover:gap-3 transition-all">
                    <span>{exploreCardsContent.viewers.cta}</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>

              {/* Compress */}
              <button
                onClick={() => navigate(getLocalizedPath('/compress'))}
                className="group relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-green-100 hover:border-green-300 overflow-hidden text-left"
              >
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full -mr-12 -mt-12 sm:-mr-16 sm:-mt-16 opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <Minimize2 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {exploreCardsContent.compress.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                    {exploreCardsContent.compress.description}
                  </p>
                  <div className="flex items-center gap-2 text-green-600 font-semibold text-sm sm:text-base group-hover:gap-3 transition-all">
                    <span>{exploreCardsContent.compress.cta}</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>

              {/* Samples */}
              <button
                onClick={() => navigate(getLocalizedPath('/samples'))}
                className="group relative bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-orange-100 hover:border-orange-300 overflow-hidden text-left"
              >
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full -mr-12 -mt-12 sm:-mr-16 sm:-mt-16 opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-orange-500 to-amber-600 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <FolderOpen className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {exploreCardsContent.samples.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                    {exploreCardsContent.samples.description}
                  </p>
                  <div className="flex items-center gap-2 text-orange-600 font-semibold text-sm sm:text-base group-hover:gap-3 transition-all">
                    <span>{exploreCardsContent.samples.cta}</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* How It Works - Redesigned */}
        <section className="py-12 sm:py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-3 sm:mb-4 md:mb-6">
                {howTitle}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                {howSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
              {howStepConfigs.map((config, index) => (
                <div key={index} className="relative">
                  <div className={`absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br ${config.glow} rounded-2xl sm:rounded-3xl opacity-20 blur-2xl`}></div>
                  <div className={`relative bg-gradient-to-br ${config.cardBg} rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 ${config.border} ${config.hoverBorder} transition-all duration-300`}>
                    <div className={`bg-gradient-to-br ${config.iconBg} w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg`}>
                      {config.icon}
                    </div>
                    <div className="text-center mb-3 sm:mb-4">
                      <span className={`text-xs sm:text-sm font-bold ${config.badgeText} ${config.badgeBg} px-2.5 py-1 sm:px-3 sm:py-1 rounded-full`}>{config.step.badge}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 text-center">{config.step.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                      {config.step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Converters - Redesigned */}
        <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-3 sm:mb-4 md:mb-6">
                {popularTitle}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                {popularSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
              {popularConverters.map((converter, index) => (
                <a 
                  key={index}
                  href={converter.href} 
                  className="group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-gray-100 hover:border-gray-200 overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${converter.color === 'blue' ? 'from-blue-100 to-blue-200' : converter.color === 'purple' ? 'from-purple-100 to-purple-200' : converter.color === 'pink' ? 'from-pink-100 to-pink-200' : converter.color === 'violet' ? 'from-violet-100 to-violet-200' : converter.color === 'red' ? 'from-red-100 to-red-200' : converter.color === 'emerald' ? 'from-emerald-100 to-emerald-200' : converter.color === 'teal' ? 'from-teal-100 to-teal-200' : 'from-slate-100 to-slate-200'} rounded-full -mr-8 -mt-8 sm:-mr-10 sm:-mt-10 opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                  <div className={`inline-flex p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br ${converter.color === 'blue' ? 'from-blue-500 to-blue-600' : converter.color === 'purple' ? 'from-purple-500 to-purple-600' : converter.color === 'pink' ? 'from-pink-500 to-pink-600' : converter.color === 'violet' ? 'from-violet-500 to-violet-600' : converter.color === 'red' ? 'from-red-500 to-red-600' : converter.color === 'emerald' ? 'from-emerald-500 to-emerald-600' : converter.color === 'teal' ? 'from-teal-500 to-teal-600' : 'from-slate-500 to-slate-600'} mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}>
                    <div className="text-white">
                      {converter.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 text-xs sm:text-sm group-hover:text-gray-700 transition-colors">
                    {converter.name}
                  </h3>
                </a>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={() => navigate(getLocalizedPath('/converters'))}
                className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">{popularButtonFull}</span>
                <span className="sm:hidden">{popularButtonMobile}</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Features Section - Redesigned */}
        <section className="py-12 sm:py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-3 sm:mb-4 md:mb-6">
                {featureSectionTitle}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                {featureSectionSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {features.map((feature, index) => {
                const item = featureItems[index] ?? { title: '', description: '' };
                return (
                  <div key={index} className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-gray-200 overflow-hidden">
                    <div className={`absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br ${feature.bgColor} rounded-full -mr-12 -mt-12 sm:-mr-16 sm:-mt-16 opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                    <div className="relative">
                      <div className={`inline-flex p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.color} mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                        <div className="text-white">
                          {feature.icon}
                        </div>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

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
}
