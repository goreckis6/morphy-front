import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from './Header';
import { Footer } from './Footer';
import { Download, Youtube, FileText, Link as LinkIcon, CheckCircle, AlertCircle, ArrowLeft, Copy, Zap, Shield, Clock, Star, Camera, Info, Loader2 } from 'lucide-react';
import { API_BASE_URL } from '../services/api';

type TranscriptFormat = 'txt' | 'txt-timestamps' | 'json' | 'srt' | 'vtt';

interface TranscriptResult {
  success: boolean;
  format: string;
  content: string;
  content_type: string;
  video_id: string;
  entries_count?: number;
  error?: string;
}

export const YTTranscriptExtractor: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [videoId, setVideoId] = useState('');
  const [format, setFormat] = useState<TranscriptFormat>('txt');
  const [transcript, setTranscript] = useState<string | null>(null);
  const [isExtracting, setIsExtracting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [entriesCount, setEntriesCount] = useState<number | null>(null);

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

  const handleExtract = async () => {
    setError(null);
    setTranscript(null);
    setCopied(false);
    setEntriesCount(null);

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
    setIsExtracting(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/youtube/transcript`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          videoId: id,
          format: format
        })
      });

      const data: TranscriptResult = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to extract transcript');
      }

      setTranscript(data.content);
      setEntriesCount(data.entries_count || null);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to extract transcript. The video may not have transcripts available.';
      setError(errorMessage);
    } finally {
      setIsExtracting(false);
    }
  };

  const handleDownload = () => {
    if (!transcript) return;

    const extensions: Record<TranscriptFormat, string> = {
      'txt': 'txt',
      'txt-timestamps': 'txt',
      'json': 'json',
      'srt': 'srt',
      'vtt': 'vtt'
    };

    const mimeTypes: Record<TranscriptFormat, string> = {
      'txt': 'text/plain',
      'txt-timestamps': 'text/plain',
      'json': 'application/json',
      'srt': 'text/srt',
      'vtt': 'text/vtt'
    };

    const filename = `youtube-transcript-${videoId}.${extensions[format]}`;
    const blob = new Blob([transcript], { type: mimeTypes[format] });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopy = () => {
    if (!transcript) return;
    navigator.clipboard.writeText(transcript).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
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

  const formatLabels: Record<TranscriptFormat, string> = {
    'txt': 'Plain Text',
    'txt-timestamps': 'Plain Text (with Timestamps)',
    'json': 'JSON',
    'srt': 'SRT',
    'vtt': 'VTT'
  };

  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "YouTube Transcript Extractor",
    "description": "Free online tool to extract and download YouTube video transcripts in multiple formats. Get transcripts as plain text, JSON, SRT, or VTT. No registration required.",
    "url": "https://morphyhub.com/youtube-transcript",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Extract transcripts from YouTube videos",
      "Download in 5 different formats",
      "Support for multiple languages",
      "Copy transcripts to clipboard",
      "No registration required"
    ]
  };

  return (
    <>
      <Helmet>
        <title>YouTube Transcript Extractor - Free Online Tool | MorphyHub</title>
        <meta name="description" content="Extract and download YouTube video transcripts in 5 formats: Plain Text, JSON, SRT, VTT. Get transcripts with or without timestamps. Free, fast, and easy to use." />
        <meta name="keywords" content="youtube transcript extractor, download youtube transcript, youtube transcript downloader, extract youtube subtitles, youtube transcript json, youtube transcript srt, youtube transcript vtt, free youtube transcript" />
        <meta property="og:title" content="YouTube Transcript Extractor - Free Online Tool | MorphyHub" />
        <meta property="og:description" content="Extract and download YouTube video transcripts in multiple formats. Get transcripts as plain text, JSON, SRT, or VTT." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://morphyhub.com/youtube-transcript" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="YouTube Transcript Extractor - Free Online Tool" />
        <meta name="twitter:description" content="Extract and download YouTube video transcripts in multiple formats." />
        <link rel="canonical" href="https://morphyhub.com/youtube-transcript" />
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
                YouTube Transcript Extractor
              </h1>
              <p className="text-lg sm:text-xl text-red-100 mb-6 max-w-2xl mx-auto">
                Extract and download transcripts from any YouTube video in multiple formats
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

                {/* Format Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Output Format
                  </label>
                  <select
                    value={format}
                    onChange={(e) => setFormat(e.target.value as TranscriptFormat)}
                    className="w-full px-4 py-3 text-base border-2 border-red-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all bg-white"
                  >
                    <option value="txt">Plain Text</option>
                    <option value="txt-timestamps">Plain Text (with Timestamps)</option>
                    <option value="json">JSON</option>
                    <option value="srt">SRT</option>
                    <option value="vtt">VTT</option>
                  </select>
                  <p className="mt-2 text-xs sm:text-sm text-gray-500">
                    Choose your preferred transcript format. SRT and VTT include timestamps automatically.
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
                  disabled={isExtracting}
                  className="w-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] disabled:transform-none flex items-center justify-center space-x-2 mb-8"
                >
                  {isExtracting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Extracting Transcript...</span>
                    </>
                  ) : (
                    <>
                      <FileText className="w-5 h-5" />
                      <span>Extract Transcript</span>
                    </>
                  )}
                </button>

                {/* Transcript Display */}
                {transcript && (
                  <div className="mt-8">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-1">Transcript</h2>
                        <p className="text-sm text-gray-600">
                          Video ID: <span className="font-mono font-semibold text-red-600">{videoId}</span>
                          {entriesCount && (
                            <> • <span>{entriesCount} entries</span></>
                          )}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={handleCopy}
                          className="px-4 py-2 bg-white border-2 border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition-colors flex items-center space-x-2 text-sm font-medium"
                        >
                          {copied ? (
                            <>
                              <CheckCircle className="w-4 h-4" />
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                        <button
                          onClick={handleDownload}
                          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2 text-sm font-medium"
                        >
                          <Download className="w-4 h-4" />
                          <span>Download</span>
                        </button>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl border-2 border-red-100 p-4 max-h-96 overflow-y-auto">
                      <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono">
                        {transcript}
                      </pre>
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
                    'Extract transcripts from any YouTube video',
                    '5 different output formats available',
                    'Support for multiple languages',
                    'Instant extraction - no waiting time',
                    'Copy or download transcripts',
                    '100% free - no registration required'
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
                    'Researchers and students',
                    'Video editors and translators',
                    'Accessibility professionals',
                    'Language learners',
                    'Content analysts'
                  ].map((useCase, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Format Info */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <Info className="w-5 h-5 mr-2 text-red-600" />
                  Available Formats
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-gray-900">Plain Text</span>
                    <p className="text-gray-600 text-xs mt-1">Simple text format, perfect for reading</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Plain Text (Timestamps)</span>
                    <p className="text-gray-600 text-xs mt-1">Text with timestamps for each line</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">JSON</span>
                    <p className="text-gray-600 text-xs mt-1">Structured data with text and timing</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">SRT</span>
                    <p className="text-gray-600 text-xs mt-1">SubRip subtitle format</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">VTT</span>
                    <p className="text-gray-600 text-xs mt-1">WebVTT subtitle format</p>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Extract YouTube Transcripts</h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6">
                  Our YouTube transcript extractor is a free online tool that allows you to extract and download transcripts from any YouTube video. Whether you need transcripts for research, translation, accessibility, or content creation, our tool makes it easy to get the text content from any video.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Step-by-Step Guide</h3>
                <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
                  <li><strong>Copy the YouTube Video URL:</strong> Find the YouTube video you want to extract the transcript from and copy its URL from the address bar. You can also use the video ID directly.</li>
                  <li><strong>Paste the URL:</strong> Paste the YouTube URL or video ID into the input field on our tool.</li>
                  <li><strong>Choose Format:</strong> Select your preferred output format from the dropdown menu (Plain Text, JSON, SRT, or VTT).</li>
                  <li><strong>Extract Transcript:</strong> Click the "Extract Transcript" button to get the transcript in your chosen format.</li>
                  <li><strong>Download or Copy:</strong> Use the download button to save the transcript, or copy it to your clipboard for immediate use.</li>
                </ol>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Understanding Transcript Formats</h3>
                <p className="text-gray-700 mb-4">
                  Our tool supports multiple output formats to suit different needs:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li><strong>Plain Text:</strong> Simple text format without timestamps, perfect for reading or copying into documents.</li>
                  <li><strong>Plain Text (with Timestamps):</strong> Text format with timestamps for each line, useful for reference.</li>
                  <li><strong>JSON:</strong> Structured data format with text, start time, and duration for each segment. Perfect for developers and data processing.</li>
                  <li><strong>SRT:</strong> SubRip subtitle format commonly used in video editing software. Includes timestamps and is compatible with most video players.</li>
                  <li><strong>VTT:</strong> WebVTT (Web Video Text Tracks) format used for web-based video players. Similar to SRT but with web-specific features.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Why Use Our YouTube Transcript Extractor?</h3>
                <p className="text-gray-700 mb-4">
                  Our tool offers several advantages:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li><strong>Multiple Formats:</strong> Choose from 5 different output formats to suit your needs.</li>
                  <li><strong>Easy to Use:</strong> No technical knowledge required. Simply paste the URL and click extract.</li>
                  <li><strong>Fast and Free:</strong> Get transcripts instantly without any cost or registration.</li>
                  <li><strong>Language Support:</strong> Works with videos in multiple languages, automatically detecting the available transcript language.</li>
                  <li><strong>Direct Download:</strong> Download transcripts directly to your device or copy them for immediate use.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Common Use Cases</h3>
                <p className="text-gray-700 mb-4">
                  Our YouTube transcript extractor is useful for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li><strong>Content Creation:</strong> Bloggers and content creators can use transcripts for articles, blog posts, and social media content.</li>
                  <li><strong>Research:</strong> Researchers and students can extract transcripts for analysis, note-taking, and citation.</li>
                  <li><strong>Translation:</strong> Translators can use transcripts as a base for creating subtitles in other languages.</li>
                  <li><strong>Accessibility:</strong> Create accessible content by providing text versions of video content.</li>
                  <li><strong>Language Learning:</strong> Language learners can use transcripts to follow along with videos and improve comprehension.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Is this tool free to use?</h4>
                    <p className="text-gray-700">Yes, our YouTube transcript extractor is completely free to use. No registration or payment is required.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Do all YouTube videos have transcripts?</h4>
                    <p className="text-gray-700">Not all videos have transcripts available. Videos with transcripts enabled by the creator or auto-generated transcripts will work with our tool.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">What languages are supported?</h4>
                    <p className="text-gray-700">Our tool works with transcripts in any language that YouTube supports. It will automatically use the available transcript language for the video.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Can I extract transcripts from private videos?</h4>
                    <p className="text-gray-700">No, transcripts can only be extracted from publicly available videos that have transcripts enabled.</p>
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

