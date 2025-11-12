import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from './Header';
import { Footer } from './Footer';
import {
  Download,
  Youtube,
  Image as ImageIcon,
  Link as LinkIcon,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
  Copy,
  ExternalLink,
  Zap,
  Shield,
  Clock,
  Globe,
  Sparkles,
  Camera,
  Info,
  Star
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

interface ThumbnailQuality {
  name: string;
  resolution: string;
  url: string;
  quality: string;
}

interface VideoMetadata {
  title: string;
  thumbnail: string;
  author: string;
  channelId?: string;
}

export const YTThumbnailDownloader: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [videoId, setVideoId] = useState('');
  const [thumbnails, setThumbnails] = useState<ThumbnailQuality[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const [videoMetadata, setVideoMetadata] = useState<VideoMetadata | null>(null);
  const [isLoadingMetadata, setIsLoadingMetadata] = useState(false);
  const [videoIdCopied, setVideoIdCopied] = useState(false);
  const [channelIdCopied, setChannelIdCopied] = useState(false);

  const { t, i18n } = useTranslation();
  const location = useLocation();

  const resolvedLanguage = useMemo(() => {
    const segments = location.pathname.split('/').filter(Boolean);
    const prefix = segments[0];
    if (prefix === 'pl') return 'pl';
    if (prefix === 'de') return 'de';
    return 'en';
  }, [location.pathname]);

  useEffect(() => {
    if (i18n.language !== resolvedLanguage) {
      i18n.changeLanguage(resolvedLanguage);
    }
  }, [i18n, resolvedLanguage]);

  const heroBadgeLabels = t('pages.yt_thumbnail.hero.badges', { returnObjects: true }) as string[];
  const heroBadgeIcons = [Zap, Shield, Clock, Globe];
  const heroFeatureBadges = heroBadgeIcons.map((Icon, index) => ({
    icon: Icon,
    label: heroBadgeLabels[index] ?? ''
  }));

  const featureTranslations = t('pages.yt_thumbnail.features', { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;
  const featureIcons = [LinkIcon, ImageIcon, Download, Sparkles];
  const featureColors = ['bg-red-100', 'bg-rose-100', 'bg-pink-100', 'bg-red-100'];
  const featureCards = featureIcons.map((Icon, index) => ({
    icon: Icon,
    color: featureColors[index],
    title: featureTranslations[index]?.title ?? '',
    description: featureTranslations[index]?.description ?? ''
  }));

  const perfectFor = t('pages.yt_thumbnail.perfect_for.items', { returnObjects: true }) as string[];
  const qualityDetails = t('pages.yt_thumbnail.video.quality_details', { returnObjects: true }) as Array<{
    label: string;
    resolution: string;
  }>;
  const whyChooseItems = t('pages.yt_thumbnail.video.why_choose_items', { returnObjects: true }) as string[];
  const howToSteps = t('pages.yt_thumbnail.content.how_to.steps', { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;
  const faqItems = t('pages.yt_thumbnail.content.faq.items', { returnObjects: true }) as Array<{
    question: string;
    answer: string;
  }>;
  const jsonLdFeatureList = t('pages.yt_thumbnail.meta.jsonld_feature_list', { returnObjects: true }) as string[];

  const extractVideoId = (url: string): string | null => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/)([^&\n?#]+)/,
      /^([a-zA-Z0-9_-]{11})$/
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }

    return null;
  };

  const generateThumbnailUrls = (id: string): ThumbnailQuality[] => {
    const qualityLabels = qualityDetails.map((item) => item.label);
    return [
      {
        name: qualityLabels[0] ?? 'Default',
        resolution: '120×90',
        url: `https://img.youtube.com/vi/${id}/default.jpg`,
        quality: 'default'
      },
      {
        name: qualityLabels[1] ?? 'Medium',
        resolution: '320×180',
        url: `https://img.youtube.com/vi/${id}/mqdefault.jpg`,
        quality: 'mqdefault'
      },
      {
        name: qualityLabels[2] ?? 'High',
        resolution: '480×360',
        url: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
        quality: 'hqdefault'
      },
      {
        name: qualityLabels[3] ?? 'Standard',
        resolution: '640×480',
        url: `https://img.youtube.com/vi/${id}/sddefault.jpg`,
        quality: 'sddefault'
      },
      {
        name: qualityLabels[4] ?? 'Max Resolution',
        resolution: '1280×720+',
        url: `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
        quality: 'maxresdefault'
      }
    ];
  };

  const fetchVideoMetadata = async (id: string) => {
    setIsLoadingMetadata(true);
    try {
      const response = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`);
      if (response.ok) {
        const data = await response.json();
        setVideoMetadata({
          title: data.title,
          thumbnail: data.thumbnail_url,
          author: data.author_name,
          channelId: data.author_url ? data.author_url.split('/').pop() : undefined
        });
      } else {
        setVideoMetadata({
          title: t('pages.yt_thumbnail.video.default_title', { id }),
          thumbnail: `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
          author: t('pages.yt_thumbnail.video.unknown_author')
        });
      }
    } catch (err) {
      setVideoMetadata({
        title: t('pages.yt_thumbnail.video.default_title', { id }),
        thumbnail: `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
        author: t('pages.yt_thumbnail.video.unknown_author')
      });
    } finally {
      setIsLoadingMetadata(false);
    }
  };

  const handleExtract = () => {
    setError(null);
    setThumbnails([]);
    setCopied(null);

    if (!videoUrl.trim()) {
      setError(t('pages.yt_thumbnail.errors.empty'));
      return;
    }

    const id = extractVideoId(videoUrl.trim());

    if (!id) {
      setError(t('pages.yt_thumbnail.errors.invalid_url'));
      return;
    }

    if (id.length !== 11) {
      setError(t('pages.yt_thumbnail.errors.invalid_id'));
      return;
    }

    setVideoId(id);
    fetchVideoMetadata(id);
    const thumbnailUrls = generateThumbnailUrls(id);
    setThumbnails(thumbnailUrls);
  };

  const handleDownload = (url: string, filename: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopy = (url: string, quality: string) => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(quality);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleExtract();
    }
  };

  const handleReset = () => {
    setVideoUrl('');
    setVideoId('');
    setThumbnails([]);
    setVideoMetadata(null);
    setError(null);
    setCopied(null);
    setVideoIdCopied(false);
    setChannelIdCopied(false);
  };

  const handleCopyVideoId = () => {
    if (!videoId) return;
    navigator.clipboard.writeText(videoId).then(() => {
      setVideoIdCopied(true);
      setTimeout(() => setVideoIdCopied(false), 2000);
    });
  };

  const handleCopyChannelId = () => {
    if (!videoMetadata?.channelId) return;
    navigator.clipboard.writeText(videoMetadata.channelId).then(() => {
      setChannelIdCopied(true);
      setTimeout(() => setChannelIdCopied(false), 2000);
    });
  };

  const pageJsonLd = {
    "@context": 'https://schema.org',
    "@type": 'WebApplication',
    name: t('pages.yt_thumbnail.meta.jsonld_name'),
    description: t('pages.yt_thumbnail.meta.jsonld_description'),
    url: 'https://morphyhub.com/yt-thumbnail-downloader',
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web Browser',
    offers: {
      "@type": 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    featureList: jsonLdFeatureList
  };

  return (
    <>
      <Helmet>
        <title>{t('pages.yt_thumbnail.meta.title')}</title>
        <meta name="description" content={t('pages.yt_thumbnail.meta.description')} />
        <meta name="keywords" content={t('pages.yt_thumbnail.meta.keywords')} />
        <meta property="og:title" content={t('pages.yt_thumbnail.meta.og_title')} />
        <meta property="og:description" content={t('pages.yt_thumbnail.meta.og_description')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://morphyhub.com/yt-thumbnail-downloader" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('pages.yt_thumbnail.meta.twitter_title')} />
        <meta name="twitter:description" content={t('pages.yt_thumbnail.meta.twitter_description')} />
        <link rel="canonical" href="https://morphyhub.com/yt-thumbnail-downloader" />
        <meta name="robots" content={t('pages.yt_thumbnail.meta.robots')} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
        <Header />

        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-red-600 via-rose-600 to-pink-600">
          <div className="absolute inset-0 bg-black/10"></div>
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
            }}
          ></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
                <Youtube className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                {t('pages.yt_thumbnail.hero.title')}
              </h1>
              <p className="text-lg sm:text-xl text-red-100 mb-6 max-w-2xl mx-auto">
                {t('pages.yt_thumbnail.hero.subtitle')}
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-red-200">
                {heroFeatureBadges.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {!thumbnails.length && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {featureCards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <div className={`w-12 h-12 ${card.color} rounded-lg flex items-center justify-center mb-4`}>
                    <card.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
                </div>
              ))}
            </div>
          )}

          <div className="max-w-7xl mx-auto pb-12 space-y-12">
            {!thumbnails.length ? (
              <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 border border-gray-100">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
                    {t('pages.yt_thumbnail.form.heading')}
                  </h2>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      {t('pages.yt_thumbnail.form.label')}
                    </label>
                    <div className="relative">
                      <LinkIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-500" />
                      <input
                        type="text"
                        value={videoUrl}
                        onChange={(e) => setVideoUrl(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder={t('pages.yt_thumbnail.form.placeholder')}
                        className="w-full pl-12 pr-4 py-4 text-base border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                      />
                    </div>
                    <p className="mt-2 text-xs sm:text-sm text-gray-500">
                      {t('pages.yt_thumbnail.form.helper')}
                    </p>
                  </div>

                  {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-red-700">{error}</p>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={handleExtract}
                    className="w-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] flex items-center justify-center space-x-2"
                  >
                    <ImageIcon className="w-5 h-5" />
                    <span>{t('pages.yt_thumbnail.form.button')}</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1 space-y-6">
                  <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 sticky top-4">
                    <div className="flex items-center justify-between mb-4">
                      <button
                        onClick={handleReset}
                        className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2 text-sm font-medium"
                      >
                        <ArrowLeft className="w-5 h-5" />
                        {t('pages.yt_thumbnail.video.back')}
                      </button>
                      {thumbnails.length > 0 && (
                        <span className="px-3 py-1 text-xs font-semibold bg-red-100 text-red-700 rounded-full">
                          {t('pages.yt_thumbnail.video.qualities_badge', { count: thumbnails.length })}
                        </span>
                      )}
                    </div>

                    <h2 className="text-lg font-semibold text-gray-900 mb-4 line-clamp-2">
                      {videoMetadata?.title || t('pages.yt_thumbnail.video.default_title', { id: videoId })}
                    </h2>

                    <div className="relative mb-4 rounded-lg overflow-hidden bg-gray-100">
                      <div
                        className="relative w-full aspect-video bg-black rounded-lg overflow-hidden cursor-pointer group"
                        onClick={() => window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank')}
                      >
                        <img
                          src={videoMetadata?.thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                          alt={videoMetadata?.title || t('pages.yt_thumbnail.results.preview_alt')}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                          }}
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center" />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                        {isLoadingMetadata ? t('pages.yt_thumbnail.video.loading') : videoMetadata?.author || t('pages.yt_thumbnail.video.unknown_channel')}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">{t('pages.yt_thumbnail.video.channel_id_label')}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-gray-800 truncate max-w-[140px]">
                            {videoMetadata?.channelId || t('pages.yt_thumbnail.video.not_available')}
                          </span>
                          <button
                            onClick={handleCopyChannelId}
                            className="text-gray-500 hover:text-gray-700 transition-colors"
                          >
                            {channelIdCopied ? (
                              <CheckCircle className="w-4 h-4 text-green-500" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">{t('pages.yt_thumbnail.video.video_id_label')}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-gray-800">{videoId}</span>
                          <button
                            onClick={handleCopyVideoId}
                            className="text-gray-500 hover:text-gray-700 transition-colors"
                          >
                            {videoIdCopied ? (
                              <CheckCircle className="w-4 h-4 text-green-500" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-500" />
                      {t('pages.yt_thumbnail.video.why_choose_title')}
                    </h3>
                    <div className="space-y-3 text-sm text-gray-700">
                      {whyChooseItems.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                          <p>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Camera className="w-5 h-5 text-red-600" />
                      {t('pages.yt_thumbnail.perfect_for.title')}
                    </h3>
                    <div className="space-y-2 text-sm text-gray-700">
                      {perfectFor.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Info className="w-5 h-5 text-red-600" />
                      {t('pages.yt_thumbnail.video.available_qualities_title')}
                    </h3>
                    <div className="space-y-3 text-sm">
                      {qualityDetails.map((quality) => (
                        <div key={quality.label} className="flex items-center justify-between">
                          <span className="text-gray-700 font-medium">{quality.label}</span>
                          <span className="text-gray-500">{quality.resolution}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-1">{t('pages.yt_thumbnail.results.heading')}</h2>
                        <p className="text-sm text-gray-600">
                          {t('pages.yt_thumbnail.results.video_id_label')}{' '}
                          <span className="font-mono font-semibold text-red-600">{videoId}</span>
                        </p>
                      </div>
                      <button
                        onClick={() => window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank')}
                        className="px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {t('pages.yt_thumbnail.results.open_youtube')}
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      {thumbnails.map((thumbnail) => (
                        <div
                          key={thumbnail.quality}
                          className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl border-2 border-red-100 overflow-hidden hover:shadow-lg transition-all"
                        >
                          <div className="relative bg-gray-100 aspect-video">
                            <img
                              src={thumbnail.url}
                              alt={t('pages.yt_thumbnail.results.thumbnail_alt', {
                                name: thumbnail.name,
                                resolution: thumbnail.resolution
                              })}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                const placeholderText = encodeURIComponent(t('pages.yt_thumbnail.content.image_placeholder'));
                                target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='640' height='360'%3E%3Crect fill='%23f3f4f6' width='640' height='360'/%3E%3Ctext fill='%239ca3af' font-family='sans-serif' font-size='18' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3E${placeholderText}%3C/text%3E%3C/svg%3E`;
                              }}
                            />
                            <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
                              {thumbnail.resolution}
                            </div>
                          </div>

                          <div className="p-4">
                            <h3 className="font-bold text-gray-900 mb-1">{thumbnail.name}</h3>
                            <p className="text-xs text-gray-600 mb-4">{thumbnail.resolution}</p>

                            <div className="space-y-2">
                              <button
                                onClick={() =>
                                  handleDownload(thumbnail.url, `youtube-thumbnail-${videoId}-${thumbnail.quality}.jpg`)
                                }
                                className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                              >
                                <Download className="w-4 h-4" />
                                <span>{t('pages.yt_thumbnail.results.download')}</span>
                              </button>
                              <div className="grid grid-cols-2 gap-2">
                                <button
                                  onClick={() => handleCopy(thumbnail.url, thumbnail.quality)}
                                  className="bg-white hover:bg-red-50 text-red-600 border-2 border-red-200 font-medium py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-1 text-sm"
                                >
                                  {copied === thumbnail.quality ? (
                                    <>
                                      <CheckCircle className="w-4 h-4" />
                                      <span>{t('pages.yt_thumbnail.results.copied')}</span>
                                    </>
                                  ) : (
                                    <>
                                      <Copy className="w-4 h-4" />
                                      <span>{t('pages.yt_thumbnail.results.copy_url')}</span>
                                    </>
                                  )}
                                </button>
                                <a
                                  href={thumbnail.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="bg-white hover:bg-red-50 text-red-600 border-2 border-red-200 font-medium py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-1 text-sm"
                                >
                                  <ExternalLink className="w-4 h-4" />
                                  <span>{t('pages.yt_thumbnail.results.open')}</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 border border-gray-100">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  {t('pages.yt_thumbnail.content.how_to.title')}
                </h2>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed text-center">
                  {t('pages.yt_thumbnail.content.how_to.intro')}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {howToSteps.map((step, index) => (
                    <div
                      key={step.title}
                      className={
                        index === 0
                          ? 'bg-gradient-to-br from-red-50 to-rose-50 p-6 rounded-xl border border-red-100'
                          : index === 1
                          ? 'bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl border border-pink-100'
                          : index === 2
                          ? 'bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-xl border border-rose-100'
                          : 'bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl border border-red-100'
                      }
                    >
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        {index === 0 && <LinkIcon className="w-6 h-6 text-red-600" />}
                        {index === 1 && <ImageIcon className="w-6 h-6 text-pink-600" />}
                        {index === 2 && <Download className="w-6 h-6 text-rose-600" />}
                        {index === 3 && <Sparkles className="w-6 h-6 text-red-600" />}
                        {step.title}
                      </h3>
                      <p className="text-gray-700 text-sm">{step.description}</p>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-4 text-center">
                  {t('pages.yt_thumbnail.content.resolutions.title')}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {t('pages.yt_thumbnail.content.resolutions.description')}
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-4 text-center">
                  {t('pages.yt_thumbnail.content.common_use_cases.title')}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  {perfectFor.map((item) => (
                    <div key={item} className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Camera className="w-5 h-5 text-red-600" />
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-4 text-center">
                  {t('pages.yt_thumbnail.content.faq.title')}
                </h3>
                <div className="space-y-4 text-gray-700">
                  {faqItems.map((item) => (
                    <div key={item.question}>
                      <h4 className="font-semibold text-lg text-gray-900 mb-2">{item.question}</h4>
                      <p>{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};
