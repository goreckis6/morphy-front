import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from './Header';
import { Footer } from './Footer';
import { Download, Youtube, FileText, Link as LinkIcon, CheckCircle, AlertCircle, ArrowLeft, Copy, Zap, Shield, Clock, Star, Camera, Info, Loader2, Search, Play, ChevronDown, MoreVertical, Globe, Users, BookOpen, Code, FileCode, Sparkles, Pin, X, Lightbulb } from 'lucide-react';
import { API_BASE_URL } from '../services/api';

type TranscriptFormat = 'txt' | 'txt-timestamps' | 'json' | 'srt' | 'vtt';

interface AvailableLanguage {
  code: string;
  name: string;
  is_generated: boolean;
}

interface TranscriptResult {
  success: boolean;
  format?: string;
  content?: string;
  content_type?: string;
  video_id?: string;
  entries_count?: number;
  error?: string;
  available_languages?: AvailableLanguage[];
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
  const [format, setFormat] = useState<TranscriptFormat>('txt-timestamps'); // Always use txt-timestamps as default
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
  const [notes, setNotes] = useState<{ [key: number]: string }>({});
  const [noteDialog, setNoteDialog] = useState<{ open: boolean; timestamp: number; text: string }>({ open: false, timestamp: 0, text: '' });
  const [copiedTimestamp, setCopiedTimestamp] = useState<number | null>(null);
  const [copiedFragment, setCopiedFragment] = useState<number | null>(null);
  const [downloadDialog, setDownloadDialog] = useState(false);
  const [downloadFormat, setDownloadFormat] = useState<TranscriptFormat>('txt-timestamps');
  const [availableLanguages, setAvailableLanguages] = useState<AvailableLanguage[]>([]);

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
    // Only clear error and transcript if this is a new video, not just a language/format change
    if (id !== videoId) {
      setError(null);
      setTranscript(null);
      setTranscriptData([]);
      setCopied(false);
      setEntriesCount(null);
      setWordCount(0);
      setCharCount(0);
    } else {
      // For language/format changes, just clear the error
      setError(null);
    }

    if (!id || id.length !== 11) {
      setError('Invalid Video ID. YouTube Video IDs must be 11 characters long.');
      return;
    }

    setVideoId(id);
    setIsExtracting(true);

    // Fetch metadata if not already loaded
    if (!videoMetadata || videoMetadata.title === `Video ${id}`) {
      await fetchVideoMetadata(id);
    }

    try {
      // Always use txt-timestamps for extraction/display
      const validFormat = 'txt-timestamps';
      const validLanguage = transcriptLanguage || 'en';
      
      const response = await fetch(`${API_BASE_URL}/api/youtube/transcript`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          videoId: id,
          format: validFormat,
          language: validLanguage
        })
      });

      const data: TranscriptResult = await response.json();

      if (!response.ok || !data.success) {
        const errorMsg = data.error || 'Failed to extract transcript';
        
        // Store available languages if provided
        if (data.available_languages && data.available_languages.length > 0) {
          setAvailableLanguages(data.available_languages);
          // Create error message with available languages
          const langList = data.available_languages.map(lang => `${lang.name} (${lang.code})`).join(', ');
          throw new Error(`${errorMsg}\n\nAvailable languages: ${langList}`);
        } else {
          setAvailableLanguages([]);
        }
        
        // Check if it's a "no transcript available" error
        if (errorMsg.includes('No transcript available') || errorMsg.includes('No transcript found')) {
          throw new Error('No transcript available for this video. The video may not have captions enabled.');
        }
        throw new Error(errorMsg);
      }

      // Store available languages from successful response
      if (data.available_languages && data.available_languages.length > 0) {
        setAvailableLanguages(data.available_languages);
      }

      setTranscript(data.content);
      setEntriesCount(data.entries_count || null);
      // Always keep display format as txt-timestamps
      setFormat('txt-timestamps');
      setDownloadFormat('txt-timestamps'); // Default download format matches display
      
      // Always parse as txt-timestamps since that's what we extract
      const parsed = parseTranscript(data.content, 'txt-timestamps');
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
    // Always use txt-timestamps for extraction
    await handleExtractWithId(id, 'txt-timestamps', language);
  };

  const handleFormatChange = async (newFormat: TranscriptFormat) => {
    // Format change should only affect download, not display
    // Display always uses txt-timestamps, format changes only affect download dialog
    if (videoId && !isExtracting) {
      setDownloadFormat(newFormat);
      // Don't re-extract, just update download format
    }
  };

  const handleLanguageChange = async (newLanguage: string) => {
    if (videoId && !isExtracting) {
      setLanguage(newLanguage);
      setError(null); // Clear previous errors
      // Always use txt-timestamps for extraction
      await handleExtractWithId(videoId, 'txt-timestamps', newLanguage);
    }
  };



  const convertToFormat = (targetFormat: TranscriptFormat): string => {
    // If target format matches current format, return transcript as-is
    if (targetFormat === format && transcript) {
      return transcript;
    }

    // If we have transcriptData, use it to convert
    if (transcriptData.length > 0) {
      if (targetFormat === 'txt') {
        return transcriptData.map(e => e.text).join(' ');
      } else if (targetFormat === 'txt-timestamps') {
        return transcriptData.map(e => `[${formatTime(e.start)}] ${e.text}`).join('\n');
      } else if (targetFormat === 'json') {
        return JSON.stringify(transcriptData, null, 2);
      } else if (targetFormat === 'srt') {
        const formatSRTTime = (seconds: number): string => {
          const hours = Math.floor(seconds / 3600);
          const minutes = Math.floor((seconds % 3600) / 60);
          const secs = Math.floor(seconds % 60);
          const millis = Math.floor((seconds % 1) * 1000);
          return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')},${millis.toString().padStart(3, '0')}`;
        };
        return transcriptData.map((e, i) => {
          const start = formatSRTTime(e.start);
          const end = formatSRTTime(e.start + e.duration);
          return `${i + 1}\n${start} --> ${end}\n${e.text}\n`;
        }).join('\n');
      } else if (targetFormat === 'vtt') {
        const formatVTTTime = (seconds: number): string => {
          const hours = Math.floor(seconds / 3600);
          const minutes = Math.floor((seconds % 3600) / 60);
          const secs = Math.floor(seconds % 60);
          const millis = Math.floor((seconds % 1) * 1000);
          return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}.${millis.toString().padStart(3, '0')}`;
        };
        return `WEBVTT\n\n${transcriptData.map(e => {
          const start = formatVTTTime(e.start);
          const end = formatVTTTime(e.start + e.duration);
          return `${start} --> ${end}\n${e.text}`;
        }).join('\n\n')}`;
      }
    }

    // If we don't have transcriptData but have transcript, handle plain text formats
    if (transcript) {
      if (targetFormat === 'txt') {
        // Remove timestamps if present
        return transcript.replace(/\[\d{2}:\d{2}:\d{2}\]\s*/g, '').trim();
      }
      // For other formats, we need transcriptData, so return current transcript
      return transcript;
    }

    return '';
  };

  const handleDownloadClick = () => {
    setDownloadFormat(format);
    setDownloadDialog(true);
  };

  const handleDownload = () => {
    if (!transcript) return;

    const content = convertToFormat(downloadFormat);

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

    const filename = `youtube-transcript-${videoId}.${extensions[downloadFormat]}`;
    const blob = new Blob([content], { type: mimeTypes[downloadFormat] });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setDownloadDialog(false);
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

  const handleCopyTimestampLink = (timestamp: number) => {
    const url = `https://www.youtube.com/watch?v=${videoId}&t=${Math.floor(timestamp)}s`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedTimestamp(timestamp);
      setTimeout(() => setCopiedTimestamp(null), 2000);
    });
  };

  const handleCopyFragment = (text: string, index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedFragment(index);
      setTimeout(() => setCopiedFragment(null), 2000);
    });
  };

  const handleAddNote = (timestamp: number) => {
    setNoteDialog({
      open: true,
      timestamp: timestamp,
      text: notes[timestamp] || ''
    });
  };

  const handleSaveNote = () => {
    if (noteDialog.text.trim()) {
      setNotes({ ...notes, [noteDialog.timestamp]: noteDialog.text });
    } else {
      const newNotes = { ...notes };
      delete newNotes[noteDialog.timestamp];
      setNotes(newNotes);
    }
    setNoteDialog({ open: false, timestamp: 0, text: '' });
  };

  const handleDeleteNote = (timestamp: number) => {
    const newNotes = { ...notes };
    delete newNotes[timestamp];
    setNotes(newNotes);
  };

  const handleJumpTo = (timestamp: number) => {
    if (!videoId) return;
    
    const timestampSeconds = Math.floor(timestamp);
    // Open YouTube with timestamp in new tab since iframe is blocked
    window.open(`https://www.youtube.com/watch?v=${videoId}&t=${timestampSeconds}s`, '_blank');
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
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
                <Youtube className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                YouTube Transcript Extractor
              </h1>
              <p className="text-lg sm:text-xl text-red-100 mb-6 max-w-2xl mx-auto">
                Extract and download transcripts from any YouTube video in multiple formats. Free, fast, and easy to use.
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
                  <Globe className="w-4 h-4" />
                  <span>Multiple Languages</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
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


                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm text-red-700 whitespace-pre-line">{error}</p>
                        {availableLanguages.length > 0 && (
                          <div className="mt-3">
                            <p className="text-red-700 text-xs font-semibold mb-2">Available languages for this video:</p>
                            <div className="flex flex-wrap gap-2">
                              {availableLanguages.map(lang => (
                                <button
                                  key={lang.code}
                                  onClick={() => {
                                    if (lang.code !== language && videoId) {
                                      handleLanguageChange(lang.code);
                                    }
                                  }}
                                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                                    lang.code === language
                                      ? 'bg-red-600 text-white'
                                      : 'bg-red-100 text-red-800 hover:bg-red-200'
                                  }`}
                                >
                                  {lang.name} ({lang.code})
                                  {lang.is_generated && ' [Auto]'}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
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
                         setNotes({});
                         setError(null);
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
                     {videoId ? (
                       <div 
                         className="relative w-full aspect-video bg-black rounded-lg overflow-hidden cursor-pointer group"
                         onClick={() => window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank')}
                       >
                         <img
                           src={videoMetadata.thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                           alt={videoMetadata.title}
                           className="w-full h-full object-cover"
                           onError={(e) => {
                             (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
                           }}
                         />
                         <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                           <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                             <Play className="w-10 h-10 text-white ml-1" fill="white" />
                           </div>
                         </div>
                         <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                           <Youtube className="w-3 h-3" />
                           <span>Click to watch on YouTube</span>
                         </div>
                       </div>
                     ) : (
                       <div className="w-full aspect-video bg-gray-200 flex items-center justify-center">
                         <p className="text-gray-500">Video player will appear here</p>
                       </div>
                     )}
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
                      onClick={handleDownloadClick}
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
                       onChange={(e) => {
                         e.preventDefault();
                         handleLanguageChange(e.target.value);
                       }}
                       disabled={isExtracting || !videoId}
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
                      <option value="ar">Arabic (ar)</option>
                      <option value="nl">Dutch (nl)</option>
                      <option value="sv">Swedish (sv)</option>
                      <option value="no">Norwegian (no)</option>
                      <option value="da">Danish (da)</option>
                      <option value="fi">Finnish (fi)</option>
                      <option value="tr">Turkish (tr)</option>
                      <option value="cs">Czech (cs)</option>
                      <option value="hu">Hungarian (hu)</option>
                      <option value="ro">Romanian (ro)</option>
                      <option value="bg">Bulgarian (bg)</option>
                      <option value="hr">Croatian (hr)</option>
                      <option value="sr">Serbian (sr)</option>
                      <option value="sk">Slovak (sk)</option>
                      <option value="sl">Slovenian (sl)</option>
                      <option value="uk">Ukrainian (uk)</option>
                      <option value="vi">Vietnamese (vi)</option>
                      <option value="th">Thai (th)</option>
                      <option value="id">Indonesian (id)</option>
                      <option value="ms">Malay (ms)</option>
                      <option value="hi">Hindi (hi)</option>
                      <option value="he">Hebrew (he)</option>
                      <option value="el">Greek (el)</option>
                      <option value="ca">Catalan (ca)</option>
                      <option value="eu">Basque (eu)</option>
                      <option value="gl">Galician (gl)</option>
                      <option value="ga">Irish (ga)</option>
                      <option value="mt">Maltese (mt)</option>
                      {availableLanguages.length > 0 && (
                        <>
                          <option disabled>--- Available for this video ---</option>
                          {availableLanguages
                            .filter(lang => !['en', 'es', 'fr', 'de', 'pl', 'it', 'pt', 'ru', 'ja', 'ko', 'zh', 'ar', 'nl', 'sv', 'no', 'da', 'fi', 'tr', 'cs', 'hu', 'ro', 'bg', 'hr', 'sr', 'sk', 'sl', 'uk', 'vi', 'th', 'id', 'ms', 'hi', 'he', 'el', 'ca', 'eu', 'gl', 'ga', 'mt'].includes(lang.code))
                            .map(lang => (
                              <option key={lang.code} value={lang.code}>
                                {lang.name} ({lang.code}){lang.is_generated ? ' [Auto]' : ''}
                              </option>
                            ))
                          }
                        </>
                      )}
                    </select>
                  </div>

                  {isExtracting && (
                    <div className="mb-4">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-pink-600 h-2 rounded-full animate-pulse" style={{ width: '100%' }}></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1 text-center">Extracting transcript...</p>
                    </div>
                  )}

                  {error && transcript === null && (
                    <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="text-sm text-red-700 whitespace-pre-line">{error}</p>
                          {availableLanguages.length > 0 && (
                            <div className="mt-3">
                              <p className="text-red-700 text-xs font-semibold mb-2">Available languages for this video:</p>
                              <div className="flex flex-wrap gap-2">
                                {availableLanguages.map(lang => (
                                  <button
                                    key={lang.code}
                                    onClick={() => {
                                      if (lang.code !== language && videoId) {
                                        handleLanguageChange(lang.code);
                                      }
                                    }}
                                    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                                      lang.code === language
                                        ? 'bg-red-600 text-white'
                                        : 'bg-red-100 text-red-800 hover:bg-red-200'
                                    }`}
                                  >
                                    {lang.name} ({lang.code})
                                    {lang.is_generated && ' [Auto]'}
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  <div
                    ref={transcriptRef}
                    className="bg-gray-50 rounded-lg p-4 max-h-[600px] overflow-y-auto mb-4 border border-gray-200"
                  >
                    {format === 'txt' ? (
                      <div className="text-sm text-gray-800 whitespace-pre-wrap leading-relaxed">
                        {transcript}
                      </div>
                     ) : transcriptData.length > 0 ? (
                       <div className="space-y-4">
                         {(searchQuery ? filteredTranscript : transcriptData).map((entry, index) => {
                           const entryIndex = searchQuery 
                             ? transcriptData.findIndex(e => e.start === entry.start && e.text === entry.text)
                             : index;
                           const hasNote = notes[entry.start];
                           return (
                             <div key={index} className="group relative">
                               <div className="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-pink-400 hover:shadow-lg transition-all duration-200 cursor-pointer">
                                 <div className="flex gap-4 items-start">
                                   <span className="text-pink-600 font-mono text-sm flex-shrink-0 font-bold bg-pink-50 px-2 py-1 rounded">
                                     {formatTime(entry.start)}
                                   </span>
                                   <div className="flex-1 min-w-0">
                                     <p className="text-gray-900 text-base leading-relaxed mb-3 group-hover:text-gray-700 transition-colors">
                                       {entry.text}
                                     </p>
                                     
                                     {/* Interactive buttons - show on hover */}
                                     <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-y-0 translate-y-1">
                                       <button
                                         onClick={(e) => {
                                           e.stopPropagation();
                                           handleCopyTimestampLink(entry.start);
                                         }}
                                         className="flex items-center gap-2 px-3 py-2 text-sm bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition-all duration-150 border border-blue-200 hover:border-blue-300 hover:shadow-sm font-medium"
                                         title="Copy YouTube link with timestamp"
                                       >
                                         <LinkIcon className="w-4 h-4" />
                                         <span>Copy link</span>
                                         {copiedTimestamp === entry.start && (
                                           <CheckCircle className="w-4 h-4 text-green-600" />
                                         )}
                                       </button>
                                       
                                       <button
                                         onClick={(e) => {
                                           e.stopPropagation();
                                           handleCopyFragment(entry.text, entryIndex);
                                         }}
                                         className="flex items-center gap-2 px-3 py-2 text-sm bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg transition-all duration-150 border border-gray-200 hover:border-gray-300 hover:shadow-sm font-medium"
                                         title="Copy transcript text"
                                       >
                                         <Copy className="w-4 h-4" />
                                         <span>Copy text</span>
                                         {copiedFragment === entryIndex && (
                                           <CheckCircle className="w-4 h-4 text-green-600" />
                                         )}
                                       </button>
                                       
                                       <button
                                         onClick={(e) => {
                                           e.stopPropagation();
                                           handleAddNote(entry.start);
                                         }}
                                         className="flex items-center gap-2 px-3 py-2 text-sm bg-amber-50 hover:bg-amber-100 text-amber-700 rounded-lg transition-all duration-150 border border-amber-200 hover:border-amber-300 hover:shadow-sm font-medium"
                                         title="Add a note to this segment"
                                       >
                                         <Pin className="w-4 h-4" />
                                         <span>Add note</span>
                                       </button>
                                       
                                       <button
                                         onClick={(e) => {
                                           e.stopPropagation();
                                           handleJumpTo(entry.start);
                                         }}
                                         className="flex items-center gap-2 px-4 py-2 text-sm bg-pink-600 hover:bg-pink-700 text-white rounded-lg transition-all duration-150 shadow-md hover:shadow-lg font-medium"
                                         title="Jump to this timestamp in YouTube video"
                                       >
                                         <Play className="w-4 h-4 fill-white" />
                                         <span>Jump To</span>
                                       </button>
                                     </div>
                                   </div>
                                 </div>
                               </div>
                               
                               {/* Note display - yellow bar */}
                               {hasNote && (
                                 <div className="mt-3 ml-20 bg-yellow-400 rounded-lg p-4 flex items-start gap-3 border-2 border-yellow-500 shadow-md">
                                   <Lightbulb className="w-5 h-5 text-gray-800 flex-shrink-0 mt-0.5" />
                                   <p className="text-sm text-gray-900 flex-1 font-medium">{hasNote}</p>
                                   <button
                                     onClick={(e) => {
                                       e.stopPropagation();
                                       handleDeleteNote(entry.start);
                                     }}
                                     className="text-gray-700 hover:text-gray-900 transition-colors p-1 hover:bg-yellow-500 rounded"
                                     title="Delete note"
                                   >
                                     <X className="w-4 h-4" />
                                   </button>
                                 </div>
                               )}
                             </div>
                           );
                         })}
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

           {/* Note Dialog Modal */}
           {noteDialog.open && (
             <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
               <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
                 <div className="flex items-center justify-between mb-4">
                   <h3 className="text-lg font-semibold text-gray-900">Add Note</h3>
                   <button
                     onClick={() => setNoteDialog({ open: false, timestamp: 0, text: '' })}
                     className="text-gray-400 hover:text-gray-600 transition-colors"
                   >
                     <X className="w-5 h-5" />
                   </button>
                 </div>
                 <p className="text-sm text-gray-600 mb-4">
                   Timestamp: {formatTime(noteDialog.timestamp)}
                 </p>
                 <textarea
                   value={noteDialog.text}
                   onChange={(e) => setNoteDialog({ ...noteDialog, text: e.target.value })}
                   placeholder="Enter your note here..."
                   className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none resize-none text-sm"
                   autoFocus
                 />
                 <div className="flex items-center justify-end gap-3 mt-4">
                   <button
                     onClick={() => setNoteDialog({ open: false, timestamp: 0, text: '' })}
                     className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors text-sm font-medium"
                   >
                     Cancel
                   </button>
                   <button
                     onClick={handleSaveNote}
                     className="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-lg transition-colors text-sm font-medium"
                   >
                     Save Note
                   </button>
                 </div>
               </div>
             </div>
           )}

           {/* Download Dialog Modal */}
           {downloadDialog && (
             <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
               <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
                 <div className="flex items-center justify-between mb-4">
                   <h3 className="text-lg font-semibold text-gray-900">Download Transcript</h3>
                   <button
                     onClick={() => setDownloadDialog(false)}
                     className="text-gray-400 hover:text-gray-600 transition-colors"
                   >
                     <X className="w-5 h-5" />
                   </button>
                 </div>
                 <p className="text-sm text-gray-600 mb-6">
                   Choose how you want to download the transcript.
                 </p>
                 
                 <div className="mb-6">
                   <label className="block text-sm font-medium text-gray-700 mb-3">
                     Download as
                   </label>
                   <select
                     value={downloadFormat}
                     onChange={(e) => setDownloadFormat(e.target.value as TranscriptFormat)}
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none text-sm bg-white"
                   >
                     <option value="txt">.txt</option>
                     <option value="txt-timestamps">.txt (with timestamps)</option>
                     <option value="json">.json</option>
                     <option value="srt">.srt</option>
                     <option value="vtt">.vtt</option>
                   </select>
                 </div>

                 <div className="flex items-center justify-end gap-3">
                   <button
                     onClick={() => setDownloadDialog(false)}
                     className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors text-sm font-medium"
                   >
                     Cancel
                   </button>
                   <button
                     onClick={handleDownload}
                     className="px-6 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-lg transition-colors text-sm font-medium flex items-center gap-2"
                   >
                     <Download className="w-4 h-4" />
                     Download Transcript
                   </button>
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
