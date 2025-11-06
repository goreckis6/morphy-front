import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from './Header';
import { Footer } from './Footer';
import { Download, Youtube, Image as ImageIcon, Link as LinkIcon, CheckCircle, AlertCircle, ArrowLeft, Copy, ExternalLink, Zap, Shield, Clock, Star, Camera, Info } from 'lucide-react';

interface ThumbnailQuality {
  name: string;
  resolution: string;
  url: string;
  quality: string;
}

export const YTThumbnailDownloader: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [videoId, setVideoId] = useState('');
  const [thumbnails, setThumbnails] = useState<ThumbnailQuality[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  const extractVideoId = (url: string): string | null => {
    // Handle various YouTube URL formats
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/)([^&\n?#]+)/,
      /^([a-zA-Z0-9_-]{11})$/ // Direct video ID
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
    return [
      {
        name: 'Default',
        resolution: '120×90',
        url: `https://img.youtube.com/vi/${id}/default.jpg`,
        quality: 'default'
      },
      {
        name: 'Medium',
        resolution: '320×180',
        url: `https://img.youtube.com/vi/${id}/mqdefault.jpg`,
        quality: 'mqdefault'
      },
      {
        name: 'High',
        resolution: '480×360',
        url: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
        quality: 'hqdefault'
      },
      {
        name: 'Standard',
        resolution: '640×480',
        url: `https://img.youtube.com/vi/${id}/sddefault.jpg`,
        quality: 'sddefault'
      },
      {
        name: 'Max Resolution',
        resolution: '1280×720+',
        url: `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
        quality: 'maxresdefault'
      }
    ];
  };

  const handleExtract = () => {
    setError(null);
    setThumbnails([]);
    setCopied(null);

    if (!videoUrl.trim()) {
      setError('Please enter a YouTube URL or Video ID');
      return;
    }

    const id = extractVideoId(videoUrl.trim());
    
    if (!id) {
      setError('Invalid YouTube URL or Video ID. Please check and try again.');
      return;
    }

    if (id.length !== 11) {
      setError('Invalid Video ID. YouTube Video IDs must be 11 characters long.');
      return;
    }

    setVideoId(id);
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

  const handleBack = () => {
    window.location.href = '/';
  };

  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "YouTube Thumbnail Downloader",
    "description": "Free online tool to extract and download YouTube video thumbnails in multiple resolutions. Get high-quality thumbnails from any YouTube video instantly.",
    "url": "https://morphyhub.com/yt-thumbnail-downloader",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Extract thumbnails from YouTube videos",
      "Download in 5 different resolutions",
      "Copy thumbnail URLs",
      "Support for multiple YouTube URL formats",
      "No registration required"
    ]
  };

  return (
    <>
      <Helmet>
        <title>YouTube Thumbnail Downloader - Free Online Tool | MorphyHub</title>
        <meta name="description" content="Download YouTube video thumbnails in multiple resolutions. Extract high-quality thumbnails (120×90 to 1280×720+) from any YouTube video instantly. Free, fast, and easy to use. No registration required." />
        <meta name="keywords" content="youtube thumbnail downloader, download youtube thumbnail, youtube thumbnail extractor, youtube thumbnail grabber, free youtube thumbnail, youtube thumbnail download, extract youtube thumbnail, youtube thumbnail url, youtube video thumbnail" />
        <meta property="og:title" content="YouTube Thumbnail Downloader - Free Online Tool | MorphyHub" />
        <meta property="og:description" content="Download YouTube video thumbnails in multiple resolutions. Extract high-quality thumbnails from any YouTube video instantly." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://morphyhub.com/yt-thumbnail-downloader" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="YouTube Thumbnail Downloader - Free Online Tool" />
        <meta name="twitter:description" content="Download YouTube video thumbnails in multiple resolutions. Extract high-quality thumbnails from any YouTube video instantly." />
        <link rel="canonical" href="https://morphyhub.com/yt-thumbnail-downloader" />
        <meta name="robots" content="noindex, nofollow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-rose-50">
        <Header />
        
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-red-600 via-rose-600 to-pink-600">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                YouTube Thumbnail Downloader
              </h1>
              <p className="text-lg sm:text-xl text-red-100 mb-6 max-w-2xl mx-auto">
                Extract and download high-quality thumbnails from any YouTube video in multiple resolutions
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-red-200">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  <span>Instant Extraction</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>100% Free</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>No Registration</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Panel */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
                
                {/* Input Section */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    YouTube Video URL or Video ID
                  </label>
                  <div className="relative">
                    <LinkIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-500" />
                    <input
                      type="text"
                      value={videoUrl}
                      onChange={(e) => setVideoUrl(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ or dQw4w9WgXcQ"
                      className="w-full pl-12 pr-4 py-4 text-base border-2 border-red-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                    />
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-gray-500">
                    Supports: youtube.com/watch?v=, youtu.be/, youtube.com/embed/, or direct Video ID
                  </p>
                </div>

                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                )}

                <button
                  onClick={handleExtract}
                  className="w-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] flex items-center justify-center space-x-2 mb-8"
                >
                  <ImageIcon className="w-5 h-5" />
                  <span>Extract Thumbnails</span>
                </button>

                {/* Thumbnails Grid */}
                {thumbnails.length > 0 && (
                  <div className="mt-8">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-1">Available Thumbnails</h2>
                        <p className="text-sm text-gray-600">Video ID: <span className="font-mono font-semibold text-red-600">{videoId}</span></p>
                      </div>
                      <div className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-red-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-red-600" />
                        <span className="text-sm font-semibold text-red-700">{thumbnails.length} Qualities</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      {thumbnails.map((thumbnail, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl border-2 border-red-100 overflow-hidden hover:shadow-lg transition-all"
                        >
                          {/* Thumbnail Preview */}
                          <div className="relative bg-gray-100 aspect-video">
                            <img
                              src={thumbnail.url}
                              alt={`${thumbnail.name} quality thumbnail - ${thumbnail.resolution}`}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="640" height="360"%3E%3Crect fill="%23f3f4f6" width="640" height="360"/%3E%3Ctext fill="%239ca3af" font-family="sans-serif" font-size="18" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImage not available%3C/text%3E%3C/svg%3E';
                              }}
                            />
                            <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
                              {thumbnail.resolution}
                            </div>
                          </div>

                          {/* Thumbnail Info */}
                          <div className="p-4">
                            <h3 className="font-bold text-gray-900 mb-1">{thumbnail.name}</h3>
                            <p className="text-xs text-gray-600 mb-4">{thumbnail.resolution}</p>

                            {/* Action Buttons */}
                            <div className="space-y-2">
                              <button
                                onClick={() => handleDownload(thumbnail.url, `youtube-thumbnail-${videoId}-${thumbnail.quality}.jpg`)}
                                className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                              >
                                <Download className="w-4 h-4" />
                                <span>Download</span>
                              </button>
                              <div className="grid grid-cols-2 gap-2">
                                <button
                                  onClick={() => handleCopy(thumbnail.url, thumbnail.quality)}
                                  className="bg-white hover:bg-red-50 text-red-600 border-2 border-red-200 font-medium py-2 px-3 rounded-lg transition-colors flex items-center justify-center space-x-1 text-sm"
                                >
                                  {copied === thumbnail.quality ? (
                                    <>
                                      <CheckCircle className="w-4 h-4" />
                                      <span>Copied!</span>
                                    </>
                                  ) : (
                                    <>
                                      <Copy className="w-4 h-4" />
                                      <span>Copy URL</span>
                                    </>
                                  )}
                                </button>
                                <a
                                  href={thumbnail.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="bg-white hover:bg-red-50 text-red-600 border-2 border-red-200 font-medium py-2 px-3 rounded-lg transition-colors flex items-center justify-center space-x-1 text-sm"
                                >
                                  <ExternalLink className="w-4 h-4" />
                                  <span>Open</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Features */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <Star className="w-5 h-5 mr-2 text-yellow-500" />
                  Why Choose Our Tool?
                </h3>
                <div className="space-y-4">
                  {[
                    'Extract thumbnails from any YouTube video',
                    '5 different resolution options available',
                    'Instant extraction - no waiting time',
                    'Copy URLs or download directly',
                    '100% free - no registration required',
                    'Works with all YouTube URL formats'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <Camera className="w-5 h-5 mr-2 text-red-600" />
                  Perfect For
                </h3>
                <div className="space-y-3">
                  {[
                    'Content creators and bloggers',
                    'Social media managers',
                    'Video editors and designers',
                    'Website developers',
                    'Marketing professionals',
                    'YouTube channel owners'
                  ].map((useCase, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Thumbnail Qualities Info */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <Info className="w-5 h-5 mr-2 text-red-600" />
                  Available Qualities
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">Default</span>
                    <span className="text-gray-500">120×90</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">Medium</span>
                    <span className="text-gray-500">320×180</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">High</span>
                    <span className="text-gray-500">480×360</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">Standard</span>
                    <span className="text-gray-500">640×480</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">Max Resolution</span>
                    <span className="text-gray-500">1280×720+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-12 text-center">
            <button
              onClick={handleBack}
              className="bg-gray-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
            >
              ← Back to Home
            </button>
          </div>

          {/* SEO Content Section */}
          <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 sm:p-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Download YouTube Thumbnails</h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6">
                  Our YouTube thumbnail downloader is a free online tool that allows you to extract and download high-quality thumbnails from any YouTube video. Whether you're a content creator, social media manager, or just need a thumbnail for your project, our tool makes it easy to get the perfect image.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Step-by-Step Guide</h3>
                <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
                  <li><strong>Copy the YouTube Video URL:</strong> Find the YouTube video you want to extract the thumbnail from and copy its URL from the address bar. You can also use the video ID directly.</li>
                  <li><strong>Paste the URL:</strong> Paste the YouTube URL or video ID into the input field on our tool. We support multiple formats including youtube.com/watch?v=, youtu.be/, and embed URLs.</li>
                  <li><strong>Extract Thumbnails:</strong> Click the "Extract Thumbnails" button to generate all available thumbnail resolutions for the video.</li>
                  <li><strong>Choose Your Quality:</strong> Browse through the available thumbnail qualities (Default, Medium, High, Standard, and Max Resolution) and select the one that best fits your needs.</li>
                  <li><strong>Download or Copy:</strong> Click the "Download" button to save the thumbnail to your device, or use "Copy URL" to get the direct link to the image.</li>
                </ol>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Understanding YouTube Thumbnail Resolutions</h3>
                <p className="text-gray-700 mb-4">
                  YouTube provides thumbnails in several resolutions. Here's what each quality offers:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li><strong>Default (120×90):</strong> The smallest thumbnail size, perfect for previews and small displays.</li>
                  <li><strong>Medium (320×180):</strong> A good balance between file size and quality, ideal for web use.</li>
                  <li><strong>High (480×360):</strong> Higher quality thumbnail suitable for larger displays and presentations.</li>
                  <li><strong>Standard (640×480):</strong> High-quality thumbnail perfect for most professional uses.</li>
                  <li><strong>Max Resolution (1280×720+):</strong> The highest quality available, perfect for print or high-resolution displays. Note that not all videos have max resolution thumbnails available.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Why Use Our YouTube Thumbnail Downloader?</h3>
                <p className="text-gray-700 mb-4">
                  Our tool offers several advantages over other methods:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li><strong>Multiple Resolutions:</strong> Access all available thumbnail sizes in one place, from the smallest default to the maximum resolution.</li>
                  <li><strong>Easy to Use:</strong> No technical knowledge required. Simply paste the URL and click extract.</li>
                  <li><strong>Fast and Free:</strong> Get thumbnails instantly without any cost or registration.</li>
                  <li><strong>Multiple Formats Supported:</strong> Works with various YouTube URL formats, making it compatible with any video link.</li>
                  <li><strong>Direct Download:</strong> Download thumbnails directly to your device or copy the URL for use in your projects.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Common Use Cases</h3>
                <p className="text-gray-700 mb-4">
                  Our YouTube thumbnail downloader is useful for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li><strong>Content Creation:</strong> Bloggers and content creators can use thumbnails in their articles and social media posts.</li>
                  <li><strong>Social Media:</strong> Social media managers can extract thumbnails for sharing on various platforms.</li>
                  <li><strong>Web Development:</strong> Developers can use thumbnails in their websites and applications.</li>
                  <li><strong>Marketing:</strong> Marketing professionals can use thumbnails in their campaigns and presentations.</li>
                  <li><strong>Video Editing:</strong> Video editors can use thumbnails as reference or in their projects.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Is this tool free to use?</h4>
                    <p className="text-gray-700">Yes, our YouTube thumbnail downloader is completely free to use. No registration or payment is required.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Do I need to download any software?</h4>
                    <p className="text-gray-700">No, our tool works entirely in your web browser. No downloads or installations are needed.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">What YouTube URL formats are supported?</h4>
                    <p className="text-gray-700">We support all common YouTube URL formats including youtube.com/watch?v=, youtu.be/, youtube.com/embed/, and direct video IDs.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Are all thumbnail resolutions available for every video?</h4>
                    <p className="text-gray-700">Most videos have all resolutions available, but some older videos may not have max resolution thumbnails. Our tool will show all available options.</p>
                  </div>
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
