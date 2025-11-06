import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from './Header';
import { Footer } from './Footer';
import { Download, Youtube, FileText, Link as LinkIcon, CheckCircle, AlertCircle, ArrowLeft, Copy, Zap, Shield, Clock, Star, Camera, Info, Loader2, Search, Play, ChevronDown, MoreVertical, Globe, Users, BookOpen, Code, FileCode, Sparkles } from 'lucide-react';
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

interface VideoMetadata {
  title: string;
  thumbnail: string;
  author: string;
  duration?: string;
  channelId?: string;
}

interface TranscriptEntry {
  text: string;
  start: number;
  duration: number;
}

export const YTTranscriptExtractor: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [videoId, setVideoId] = useState('');
  const [format, setFormat] = useState<TranscriptFormat>('txt-timestamps');
  const [transcript, setTranscript] = useState<string | null>(null);
  const [transcriptData, setTranscriptData] = useState<TranscriptEntry[]>([]);
  const [isExtracting, setIsExtracting] = useState(false);
  const [isLoadingMetadata, setIsLoadingMetadata] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [videoIdCopied, setVideoIdCopied] = useState(false);
  const [channelIdCopied, setChannelIdCopied] = useState(false);
  const [entriesCount, setEntriesCount] = useState<number | null>(null);
  const [videoMetadata, setVideoMetadata] = useState<VideoMetadata | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [language, setLanguage] = useState('en');
  const [autoscroll, setAutoscroll] = useState(false);
  const transcriptRef = useRef<HTMLDivElement>(null);
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);

  // Update URL when video ID changes
  const updateUrl = (id: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set('video_id', id);
    window.history.pushState({}, '', url.toString());
  };

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
          title: `Video ${id}`,
          thumbnail: `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
          author: 'Unknown'
        });
      }
    } catch (err) {
      setVideoMetadata({
        title: `Video ${id}`,
        thumbnail: `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
        author: 'Unknown'
      });
    } finally {
      setIsLoadingMetadata(false);
    }
  };

  const parseTranscript = (content: string, format: TranscriptFormat): TranscriptEntry[] => {
    if (format === 'json') {
      try {
        const parsed = JSON.parse(content);
        return Array.isArray(parsed) ? parsed : [];
      } catch {
        return [];
      }
    } else if (format === 'txt-timestamps') {
      const entries: TranscriptEntry[] = [];
      const lines = content.split('\n');
      
      lines.forEach(line => {
        const timestampMatch = line.match(/\[(\d{2}):(\d{2}):(\d{2})\]/);
        if (timestampMatch) {
          const hours = parseInt(timestampMatch[1]);
          const minutes = parseInt(timestampMatch[2]);
          const seconds = parseInt(timestampMatch[3]);
          const start = hours * 3600 + minutes * 60 + seconds;
          const text = line.replace(/\[\d{2}:\d{2}:\d{2}\]\s*/, '').trim();
          if (text) {
            entries.push({ text, start, duration: 3 });
          }
        }
      });
      
      return entries;
    } else if (format === 'srt') {
      const entries: TranscriptEntry[] = [];
      const blocks = content.split(/\n\s*\n/).filter(b => b.trim());
      
      blocks.forEach(block => {
        const lines = block.split('\n');
        if (lines.length >= 3) {
          const timeMatch = lines[1].match(/(\d{2}):(\d{2}):(\d{2})[.,](\d{3})\s*-->\s*(\d{2}):(\d{2}):(\d{2})[.,](\d{3})/);
          if (timeMatch) {
            const startHours = parseInt(timeMatch[1]);
            const startMinutes = parseInt(timeMatch[2]);
            const startSeconds = parseInt(timeMatch[3]);
            const startMs = parseInt(timeMatch[4]);
            const start = startHours * 3600 + startMinutes * 60 + startSeconds + startMs / 1000;
            
            const endHours = parseInt(timeMatch[5]);
            const endMinutes = parseInt(timeMatch[6]);
            const endSeconds = parseInt(timeMatch[7]);
            const endMs = parseInt(timeMatch[8]);
            const end = endHours * 3600 + endMinutes * 60 + endSeconds + endMs / 1000;
            
            const text = lines.slice(2).join(' ').trim();
            if (text) {
              entries.push({ text, start, duration: end - start });
            }
          }
        }
      });
      
      return entries;
    } else if (format === 'vtt') {
      const entries: TranscriptEntry[] = [];
      const lines = content.split('\n');
      let i = 0;
      
      while (i < lines.length && !lines[i].includes('-->')) {
        i++;
      }
      
      while (i < lines.length) {
        const timeMatch = lines[i].match(/(\d{2}):(\d{2}):(\d{2})[.,](\d{3})\s*-->\s*(\d{2}):(\d{2}):(\d{2})[.,](\d{3})/);
        if (timeMatch) {
          const startHours = parseInt(timeMatch[1]);
          const startMinutes = parseInt(timeMatch[2]);
          const startSeconds = parseInt(timeMatch[3]);
          const startMs = parseInt(timeMatch[4]);
          const start = startHours * 3600 + startMinutes * 60 + startSeconds + startMs / 1000;
          
          const endHours = parseInt(timeMatch[5]);
          const endMinutes = parseInt(timeMatch[6]);
          const endSeconds = parseInt(timeMatch[7]);
          const endMs = parseInt(timeMatch[8]);
          const end = endHours * 3600 + endMinutes * 60 + endSeconds + endMs / 1000;
          
          i++;
          const textLines: string[] = [];
          while (i < lines.length && lines[i].trim() && !lines[i].includes('-->')) {
            textLines.push(lines[i].trim());
            i++;
          }
          
          const text = textLines.join(' ').trim();
          if (text) {
            entries.push({ text, start, duration: end - start });
          }
        } else {
          i++;
        }
      }
      
      return entries;
    }
    
    return [];
  };

  const handleExtractWithId = async (id: string, transcriptFormat: TranscriptFormat, transcriptLanguage: string) => {
    setError(null);
    setTranscript(null);
    setTranscriptData([]);
    setCopied(false);
    setEntriesCount(null);
    setWordCount(0);
    setCharCount(0);

    if (!id || id.length !== 11) {
      setError('Invalid Video ID. YouTube Video IDs must be 11 characters long.');
      return;
    }

    setVideoId(id);
    setIsExtracting(true);

    // Update URL with video ID
    updateUrl(id);

    // Fetch metadata if not already loaded
    if (!videoMetadata || videoMetadata.title === `Video ${id}`) {
      await fetchVideoMetadata(id);
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/youtube/transcript`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          videoId: id,
          format: transcriptFormat,
          language: transcriptLanguage
        })
      });

      const data: TranscriptResult = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to extract transcript');
      }

      setTranscript(data.content);
      setEntriesCount(data.entries_count || null);
      
      if (transcriptFormat === 'json' || transcriptFormat === 'txt-timestamps' || transcriptFormat === 'srt' || transcriptFormat === 'vtt') {
        const parsed = parseTranscript(data.content, transcriptFormat);
        setTranscriptData(parsed);
        
        if (parsed.length > 0) {
          const fullText = parsed.map(e => e.text).join(' ');
          setWordCount(fullText.split(/\s+/).filter(w => w.length > 0).length);
          setCharCount(fullText.length);
        } else {
          const words = data.content.split(/\s+/).filter(w => w.length > 0);
          setWordCount(words.length);
          setCharCount(data.content.length);
        }
      } else {
        const words = data.content.split(/\s+/).filter(w => w.length > 0);
        setWordCount(words.length);
        setCharCount(data.content.length);
        setTranscriptData([]);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to extract transcript. The video may not have transcripts available.';
      setError(errorMessage);
    } finally {
      setIsExtracting(false);
    }
  };

  const handleExtract = async () => {
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

    setVideoMetadata(null);
    await handleExtractWithId(id, format, language);
  };

  const handleFormatChange = async (newFormat: TranscriptFormat) => {
    if (videoId) {
      setFormat(newFormat);
      await handleExtractWithId(videoId, newFormat, language);
    }
  };

  const handleLanguageChange = async (newLanguage: string) => {
    if (videoId) {
      setLanguage(newLanguage);
      await handleExtractWithId(videoId, format, newLanguage);
    }
  };

  // Read video_id from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlVideoId = params.get('video_id');
    if (urlVideoId && urlVideoId.length === 11 && !videoId) {
      setVideoId(urlVideoId);
      setVideoUrl(`https://www.youtube.com/watch?v=${urlVideoId}`);
      // Auto-extract if video ID is in URL
      handleExtractWithId(urlVideoId, format, language);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const handleCopyVideoId = () => {
    navigator.clipboard.writeText(videoId).then(() => {
      setVideoIdCopied(true);
      setTimeout(() => setVideoIdCopied(false), 2000);
    });
  };

  const handleCopyChannelId = () => {
    if (videoMetadata?.channelId) {
      navigator.clipboard.writeText(videoMetadata.channelId).then(() => {
        setChannelIdCopied(true);
        setTimeout(() => setChannelIdCopied(false), 2000);
      });
    }
  };

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    if (hours > 0) {
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const filteredTranscript = transcriptData.filter(entry => 
    entry.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    if (autoscroll && transcriptRef.current) {
      transcriptRef.current.scrollTop = transcriptRef.current.scrollHeight;
    }
  }, [transcriptData, autoscroll]);

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
    "name": "YouTube Transcript Extractor - Free Online Tool",
    "description": "Extract and download YouTube video transcripts in 5 formats: Plain Text, JSON, SRT, VTT. Get transcripts with or without timestamps. Free, fast, and easy to use.",
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
      "Search within transcripts",
      "No registration required"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250"
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is this YouTube transcript extractor free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our YouTube transcript extractor is completely free to use. No registration or payment is required. You can extract transcripts from any YouTube video that has transcripts available."
        }
      },
      {
        "@type": "Question",
        "name": "What formats can I download transcripts in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can download transcripts in 5 different formats: Plain Text (with or without timestamps), JSON (with timestamps), SRT (SubRip subtitle format), and VTT (WebVTT format)."
        }
      },
      {
        "@type": "Question",
        "name": "Do all YouTube videos have transcripts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not all videos have transcripts available. Videos with transcripts enabled by the creator or auto-generated transcripts will work with our tool. If a video doesn't have transcripts, you'll see an error message."
        }
      },
      {
        "@type": "Question",
        "name": "Can I extract transcripts from private videos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, transcripts can only be extracted from publicly available videos that have transcripts enabled. Private or unlisted videos without public transcripts cannot be accessed."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>YouTube Transcript Extractor - Free Online Tool | Extract & Download Transcripts</title>
        <meta name="description" content="Extract and download YouTube video transcripts in 5 formats: Plain Text, JSON, SRT, VTT. Get transcripts with or without timestamps. Free, fast, and easy to use. No registration required." />
        <meta name="keywords" content="youtube transcript extractor, download youtube transcript, youtube transcript downloader, extract youtube subtitles, youtube transcript json, youtube transcript srt, youtube transcript vtt, free youtube transcript, youtube captions download, youtube subtitles extractor" />
        <meta property="og:title" content="YouTube Transcript Extractor - Free Online Tool | MorphyHub" />
        <meta property="og:description" content="Extract and download YouTube video transcripts in multiple formats. Get transcripts as plain text, JSON, SRT, or VTT. Free and easy to use." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://morphyhub.com/youtube-transcript" />
        <meta property="og:image" content="https://morphyhub.com/og-youtube-transcript.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="YouTube Transcript Extractor - Free Online Tool" />
        <meta name="twitter:description" content="Extract and download YouTube video transcripts in multiple formats." />
        <link rel="canonical" href="https://morphyhub.com/youtube-transcript" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
        <Header />
        
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-red-600 via-rose-600 to-pink-600">
          <div className="absolute inset-0 bg-black/10"></div>
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          ></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
                <Youtube className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                YouTube Transcript Extractor
              </h1>
              <p className="text-xl sm:text-2xl text-red-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Extract and download transcripts from any YouTube video in multiple formats. Free, fast, and easy to use.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base text-red-100">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Zap className="w-5 h-5" />
                  <span>Instant Extraction</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Shield className="w-5 h-5" />
                  <span>100% Free</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Globe className="w-5 h-5" />
                  <span>Multiple Languages</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <FileText className="w-5 h-5" />
                  <span>5 Export Formats</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        {!transcript && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">5 Export Formats</h3>
                <p className="text-gray-600 text-sm">Plain Text, JSON, SRT, VTT with or without timestamps</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-rose-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Search & Filter</h3>
                <p className="text-gray-600 text-sm">Quickly find specific content within transcripts</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-Language</h3>
                <p className="text-gray-600 text-sm">Support for transcripts in multiple languages</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Download className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy Download</h3>
                <p className="text-gray-600 text-sm">Download or copy transcripts with one click</p>
              </div>
            </div>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          {/* Input Section */}
          {!transcript && (
            <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 mb-12 border border-gray-100">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
                  Get Started in Seconds
                </h2>
                
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
                      className="w-full pl-12 pr-4 py-4 text-base border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                    />
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-gray-500">
                    Supports: youtube.com/watch?v=, youtu.be/, youtube.com/embed/, or direct Video ID
                  </p>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Output Format
                  </label>
                  <select
                    value={format}
                    onChange={(e) => setFormat(e.target.value as TranscriptFormat)}
                    className="w-full px-4 py-3 text-base border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all bg-white"
                  >
                    <option value="txt-timestamps">Plain Text (with Timestamps)</option>
                    <option value="txt">Plain Text</option>
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
                  className="w-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] disabled:transform-none flex items-center justify-center space-x-2 text-lg"
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
              </div>
            </div>
          )}

          {/* Two Panel Layout - Show when transcript is loaded */}
          {transcript && videoMetadata && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
              {/* Left Panel - Video Info */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4 border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <button
                      onClick={() => {
                        setTranscript(null);
                        setVideoMetadata(null);
                        setVideoUrl('');
                        setVideoId('');
                        // Clear URL parameter
                        const url = new URL(window.location.href);
                        url.searchParams.delete('video_id');
                        window.history.pushState({}, '', url.toString());
                      }}
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                  </div>

                  <h2 className="text-lg font-semibold text-gray-900 mb-4 line-clamp-2">
                    {videoMetadata.title}
                  </h2>

                  <div className="relative mb-4 rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src={videoMetadata.thumbnail}
                      alt={videoMetadata.title}
                      className="w-full aspect-video object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors cursor-pointer"
                      onClick={() => window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank')}>
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                        <Play className="w-8 h-8 text-white ml-1" fill="white" />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                      {videoMetadata.author}
                    </span>
                    {entriesCount && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {entriesCount} entries
                      </span>
                    )}
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Channel ID:</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-gray-800 truncate max-w-[120px]">
                          {videoMetadata.channelId || 'N/A'}
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
                      <span className="text-sm text-gray-600">Video ID:</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-gray-800">
                          {videoId}
                        </span>
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
              </div>

              {/* Right Panel - Transcript Viewer */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <button
                      onClick={handleCopy}
                      className="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-lg font-medium flex items-center gap-2 transition-colors"
                    >
                      {copied ? (
                        <>
                          <CheckCircle className="w-4 h-4" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copy Transcript</span>
                        </>
                      )}
                    </button>
                    
                    <button
                      onClick={handleDownload}
                      className="px-4 py-2 bg-white border-2 border-pink-600 text-pink-600 hover:bg-pink-50 rounded-lg font-medium flex items-center gap-2 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                    
                    <div className="flex-1 relative min-w-[200px]">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search Transcript"
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none text-sm"
                      />
                    </div>

                    <select
                      value={format}
                      onChange={(e) => handleFormatChange(e.target.value as TranscriptFormat)}
                      disabled={isExtracting}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none text-sm bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <option value="txt-timestamps">Plain Text (with Timestamps)</option>
                      <option value="txt">Plain Text</option>
                      <option value="json">JSON</option>
                      <option value="srt">SRT</option>
                      <option value="vtt">VTT</option>
                    </select>

                    <select
                      value={language}
                      onChange={(e) => handleLanguageChange(e.target.value)}
                      disabled={isExtracting}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none text-sm bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <option value="en">English (en)</option>
                      <option value="es">Spanish (es)</option>
                      <option value="fr">French (fr)</option>
                      <option value="de">German (de)</option>
                      <option value="pl">Polish (pl)</option>
                      <option value="it">Italian (it)</option>
                      <option value="pt">Portuguese (pt)</option>
                      <option value="ru">Russian (ru)</option>
                      <option value="ja">Japanese (ja)</option>
                      <option value="ko">Korean (ko)</option>
                      <option value="zh">Chinese (zh)</option>
                    </select>
                  </div>

                  <div
                    ref={transcriptRef}
                    className="bg-gray-50 rounded-lg p-4 max-h-[600px] overflow-y-auto mb-4 border border-gray-200"
                  >
                    {format === 'txt' ? (
                      <div className="text-sm text-gray-800 whitespace-pre-wrap leading-relaxed">
                        {transcript}
                      </div>
                    ) : transcriptData.length > 0 ? (
                      <div className="space-y-3">
                        {(searchQuery ? filteredTranscript : transcriptData).map((entry, index) => (
                          <div key={index} className="flex gap-3 hover:bg-white/50 p-2 rounded transition-colors">
                            <span className="text-pink-600 font-mono text-xs flex-shrink-0 pt-1 font-semibold">
                              {formatTime(entry.start)}
                            </span>
                            <span className="text-gray-800 text-sm flex-1 leading-relaxed">
                              {entry.text}
                            </span>
                          </div>
                        ))}
                        {searchQuery && filteredTranscript.length === 0 && (
                          <p className="text-gray-500 text-sm text-center py-8">
                            No results found for "{searchQuery}"
                          </p>
                        )}
                      </div>
                    ) : (
                      <div className="text-sm text-gray-800 whitespace-pre-wrap leading-relaxed">
                        {transcript}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between border-t pt-4">
                    <div className="flex items-center gap-6 text-sm text-gray-600">
                      <span className="font-medium">Word Count: <span className="text-gray-900">{wordCount.toLocaleString()}</span></span>
                      <span className="font-medium">Character count: <span className="text-gray-900">{charCount.toLocaleString()}</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">Autoscroll</span>
                      <button
                        onClick={() => setAutoscroll(!autoscroll)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          autoscroll ? 'bg-pink-600' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            autoscroll ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SEO Content Section */}
          {!transcript && (
            <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 mb-12 border border-gray-100">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
                  How to Extract YouTube Transcripts
                </h2>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center">
                    Our YouTube transcript extractor is a free online tool that allows you to extract and download transcripts from any YouTube video. Whether you need transcripts for research, translation, accessibility, or content creation, our tool makes it easy to get the text content from any video.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <div className="bg-gradient-to-br from-red-50 to-rose-50 p-6 rounded-xl border border-red-100">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <FileText className="w-6 h-6 text-red-600" />
                        Step 1: Paste Video URL
                      </h3>
                      <p className="text-gray-700">Copy the YouTube video URL or video ID and paste it into our tool. We support all common YouTube URL formats.</p>
                    </div>
                    <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl border border-pink-100">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Code className="w-6 h-6 text-pink-600" />
                        Step 2: Choose Format
                      </h3>
                      <p className="text-gray-700">Select your preferred output format: Plain Text, JSON, SRT, or VTT. Choose with or without timestamps.</p>
                    </div>
                    <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-xl border border-rose-100">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Zap className="w-6 h-6 text-rose-600" />
                        Step 3: Extract
                      </h3>
                      <p className="text-gray-700">Click the extract button and get your transcript instantly. No waiting, no registration required.</p>
                    </div>
                    <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl border border-red-100">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Download className="w-6 h-6 text-red-600" />
                        Step 4: Download
                      </h3>
                      <p className="text-gray-700">Download your transcript in your chosen format or copy it to your clipboard for immediate use.</p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">Understanding Transcript Formats</h3>
                  <div className="space-y-4 mb-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Plain Text</h4>
                      <p className="text-gray-700">Simple text format without timestamps, perfect for reading or copying into documents. Available with or without timestamps.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">JSON</h4>
                      <p className="text-gray-700">Structured data format with text, start time, and duration for each segment. Perfect for developers and data processing applications.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">SRT (SubRip)</h4>
                      <p className="text-gray-700">Subtitle format commonly used in video editing software. Includes timestamps and is compatible with most video players and editing tools.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">VTT (WebVTT)</h4>
                      <p className="text-gray-700">Web Video Text Tracks format used for web-based video players. Similar to SRT but optimized for web applications and HTML5 video players.</p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">Use Cases</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Content Creators</h4>
                        <p className="text-gray-700 text-sm">Bloggers and content creators can use transcripts for articles, blog posts, and social media content.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-5 h-5 text-rose-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Researchers & Students</h4>
                        <p className="text-gray-700 text-sm">Extract transcripts for analysis, note-taking, citation, and research purposes.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Globe className="w-5 h-5 text-pink-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Translators</h4>
                        <p className="text-gray-700 text-sm">Use transcripts as a base for creating subtitles in other languages.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileCode className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Developers</h4>
                        <p className="text-gray-700 text-sm">Integrate transcript data into applications, analyze content, or build transcript-based features.</p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">Frequently Asked Questions</h3>
                  <div className="space-y-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2 text-lg">Is this tool free to use?</h4>
                      <p className="text-gray-700">Yes, our YouTube transcript extractor is completely free to use. No registration or payment is required. You can extract transcripts from any YouTube video that has transcripts available.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2 text-lg">What formats can I download transcripts in?</h4>
                      <p className="text-gray-700">You can download transcripts in 5 different formats: Plain Text (with or without timestamps), JSON (with timestamps), SRT (SubRip subtitle format), and VTT (WebVTT format).</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2 text-lg">Do all YouTube videos have transcripts?</h4>
                      <p className="text-gray-700">Not all videos have transcripts available. Videos with transcripts enabled by the creator or auto-generated transcripts will work with our tool. If a video doesn't have transcripts, you'll see an error message.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2 text-lg">What languages are supported?</h4>
                      <p className="text-gray-700">Our tool works with transcripts in any language that YouTube supports. It will automatically use the available transcript language for the video. You can also search and filter transcripts in different languages.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2 text-lg">Can I extract transcripts from private videos?</h4>
                      <p className="text-gray-700">No, transcripts can only be extracted from publicly available videos that have transcripts enabled. Private or unlisted videos without public transcripts cannot be accessed.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2 text-lg">Is my data secure?</h4>
                      <p className="text-gray-700">Yes, we take privacy seriously. All transcript extraction happens in real-time and we don't store your video URLs or extracted transcripts on our servers. Your data remains private and secure.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
};
