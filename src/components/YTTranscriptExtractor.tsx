import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from './Header';
import { Footer } from './Footer';
import { Download, Youtube, FileText, Link as LinkIcon, CheckCircle, AlertCircle, ArrowLeft, Copy, Zap, Shield, Clock, Star, Camera, Info, Loader2, Search, Play, ChevronDown, MoreVertical } from 'lucide-react';
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
      // Use YouTube oEmbed API (no API key required)
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
        // Fallback: use thumbnail URL directly
        setVideoMetadata({
          title: `Video ${id}`,
          thumbnail: `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
          author: 'Unknown'
        });
      }
    } catch (err) {
      // Fallback: use thumbnail URL directly
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
        // Match [HH:MM:SS] format
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
      
      // Skip WEBVTT header
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

  const handleExtract = async () => {
    setError(null);
    setTranscript(null);
    setTranscriptData([]);
    setCopied(false);
    setEntriesCount(null);
    setVideoMetadata(null);
    setWordCount(0);
    setCharCount(0);

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

    // Fetch video metadata
    await fetchVideoMetadata(id);

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
      
      // Parse transcript for display
      if (format === 'json' || format === 'txt-timestamps' || format === 'srt' || format === 'vtt') {
        const parsed = parseTranscript(data.content, format);
        setTranscriptData(parsed);
        
        // Calculate word and character count from parsed entries
        if (parsed.length > 0) {
          const fullText = parsed.map(e => e.text).join(' ');
          setWordCount(fullText.split(/\s+/).filter(w => w.length > 0).length);
          setCharCount(fullText.length);
        } else {
          // Fallback: use raw content
          const words = data.content.split(/\s+/).filter(w => w.length > 0);
          setWordCount(words.length);
          setCharCount(data.content.length);
        }
      } else {
        // For plain text
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

      <div className="min-h-screen bg-white">
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
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Input Section - Only show when no transcript */}
          {!transcript && (
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8">
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
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Output Format
                </label>
                <select
                  value={format}
                  onChange={(e) => setFormat(e.target.value as TranscriptFormat)}
                  className="w-full px-4 py-3 text-base border-2 border-red-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all bg-white"
                >
                  <option value="txt-timestamps">Plain Text (with Timestamps)</option>
                  <option value="txt">Plain Text</option>
                  <option value="json">JSON</option>
                  <option value="srt">SRT</option>
                  <option value="vtt">VTT</option>
                </select>
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
                className="w-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] disabled:transform-none flex items-center justify-center space-x-2"
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
          )}

          {/* Two Panel Layout - Show when transcript is loaded */}
          {transcript && videoMetadata && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Panel - Video Info */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
                  {/* Video Header */}
                  <div className="flex items-center justify-between mb-4">
                    <button
                      onClick={() => {
                        setTranscript(null);
                        setVideoMetadata(null);
                        setVideoUrl('');
                        setVideoId('');
                      }}
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Video Title */}
                  <h2 className="text-lg font-semibold text-gray-900 mb-4 line-clamp-2">
                    {videoMetadata.title}
                  </h2>

                  {/* Video Thumbnail */}
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

                  {/* Video Metadata */}
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

                  {/* IDs */}
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

                  {/* Free Credits Section */}
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Free Credits</span>
                      <a href="#" className="text-sm text-pink-600 hover:text-pink-700 font-medium">
                        Upgrade →
                      </a>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div className="bg-pink-500 h-2 rounded-full" style={{ width: '4%' }}></div>
                    </div>
                    <p className="text-xs text-gray-500">1 of 25 used</p>
                    <p className="text-xs text-gray-500 mt-1">Resets in 25 days</p>
                  </div>
                </div>
              </div>

              {/* Right Panel - Transcript Viewer */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  {/* Transcript Header */}
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
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none text-sm bg-white"
                    >
                      <option value="en">en</option>
                      <option value="es">es</option>
                      <option value="fr">fr</option>
                      <option value="de">de</option>
                      <option value="pl">pl</option>
                    </select>

                    <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Transcript Content */}
                  <div
                    ref={transcriptRef}
                    className="bg-gray-50 rounded-lg p-4 max-h-[600px] overflow-y-auto mb-4"
                  >
                    {format === 'txt' ? (
                      <div className="text-sm text-gray-800 whitespace-pre-wrap">
                        {transcript}
                      </div>
                    ) : transcriptData.length > 0 ? (
                      <div className="space-y-3">
                        {(searchQuery ? filteredTranscript : transcriptData).map((entry, index) => (
                          <div key={index} className="flex gap-3">
                            <span className="text-pink-600 font-mono text-xs flex-shrink-0 pt-1">
                              {formatTime(entry.start)}
                            </span>
                            <span className="text-gray-800 text-sm flex-1">
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
                      <div className="text-sm text-gray-800 whitespace-pre-wrap">
                        {transcript}
                      </div>
                    )}
                  </div>

                  {/* Transcript Footer */}
                  <div className="flex items-center justify-between border-t pt-4">
                    <div className="flex items-center gap-6 text-sm text-gray-600">
                      <span>Word Count: {wordCount.toLocaleString()}</span>
                      <span>Character count: {charCount.toLocaleString()}</span>
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

          {/* Back Button */}
          {!transcript && (
            <div className="mt-8 text-center">
              <button
                onClick={handleBack}
                className="bg-gray-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
              >
                ← Back to Home
              </button>
            </div>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
};
