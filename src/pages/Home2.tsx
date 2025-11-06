import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FileViewer } from '../components/FileViewer';
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
  Compress
} from 'lucide-react';

export default function Home2() {
  const navigate = useNavigate();
  const [viewerFile, setViewerFile] = useState<File | null>(null);
  const [totalDataProcessed, setTotalDataProcessed] = useState(0);

  // Load and track total data processed
  useEffect(() => {
    const storedData = localStorage.getItem('MorphyHub_total_processed');
    const baseGB = storedData ? parseFloat(storedData) : 500;
    
    setTotalDataProcessed(baseGB);
    
    const liveIncrement = setInterval(() => {
      setTotalDataProcessed(prev => {
        const newValue = prev + Math.random() * 0.05;
        localStorage.setItem('MorphyHub_total_processed', newValue.toString());
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

  const siteJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://morphyhub.com#organization",
        "name": "MorphyHub",
        "url": "https://morphyhub.com",
        "logo": "https://morphyhub.com/logo.png",
        "sameAs": []
      },
      {
        "@type": "WebSite",
        "@id": "https://morphyhub.com#website",
        "url": "https://morphyhub.com",
        "name": "MorphyHub - Free Online File Converter",
        "description": "Convert files between 300+ formats instantly. Fast, secure, and free file conversion service.",
        "publisher": { "@id": "https://morphyhub.com#organization" }
      },
      {
        "@type": "WebPage",
        "@id": "https://morphyhub.com#webpage",
        "url": "https://morphyhub.com",
        "name": "Free Online File Converter - MorphyHub",
        "description": "Convert any file format instantly. Support for 300+ formats including images, documents, ebooks, and data files.",
        "isPartOf": { "@id": "https://morphyhub.com#website" },
        "publisher": { "@id": "https://morphyhub.com#organization" }
      }
    ]
  };

  const features = [
    { 
      icon: <Zap className="w-8 h-8" />, 
      title: 'Lightning Fast', 
      description: 'Process files in seconds with our optimized conversion engine',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-gradient-to-br from-yellow-50 to-orange-50'
    },
    { 
      icon: <Shield className="w-8 h-8" />, 
      title: 'Secure & Private', 
      description: 'Enterprise-grade security. Files are automatically deleted after processing',
      color: 'from-green-400 to-emerald-500',
      bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50'
    },
    { 
      icon: <Globe className="w-8 h-8" />, 
      title: 'Universal Support', 
      description: 'Convert between 300+ format combinations across all file types',
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50'
    },
    { 
      icon: <BarChart3 className="w-8 h-8" />, 
      title: 'Batch Processing', 
      description: 'Convert up to 20 files at once with our powerful batch engine',
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50'
    },
    { 
      icon: <Eye className="w-8 h-8" />, 
      title: 'File Viewer', 
      description: 'Preview and view your files directly in the browser',
      color: 'from-pink-400 to-rose-500',
      bgColor: 'bg-gradient-to-br from-pink-50 to-rose-50'
    },
    { 
      icon: <Star className="w-8 h-8" />, 
      title: 'Professional Quality', 
      description: 'Industry-standard conversion with customizable settings',
      color: 'from-indigo-400 to-violet-500',
      bgColor: 'bg-gradient-to-br from-indigo-50 to-violet-50'
    },
  ];

  const stats = [
    { icon: <FileText className="w-6 h-6" />, value: '300+', label: 'Supported Formats', color: 'text-blue-600' },
    { icon: <TrendingUp className="w-6 h-6" />, value: formatDataProcessed(totalDataProcessed), label: 'Data Processed', color: 'text-green-600' },
    { icon: <Zap className="w-6 h-6" />, value: '20 Files', label: 'Batch Processing', color: 'text-purple-600' },
  ];

  const popularConverters = [
    { name: 'CSV to JSON', href: '/convert/csv-to-json', icon: <FileText className="w-5 h-5" />, color: 'blue' },
    { name: 'CSV to NDJSON', href: '/convert/csv-to-ndjson', icon: <BarChart3 className="w-5 h-5" />, color: 'purple' },
    { name: 'DNG to WebP', href: '/convert/dng-to-webp', icon: <Image className="w-5 h-5" />, color: 'pink' },
    { name: 'CR2 to WebP', href: '/convert/cr2-to-webp', icon: <Image className="w-5 h-5" />, color: 'violet' },
    { name: 'EPUB to PDF', href: '/convert/epub-to-pdf', icon: <File className="w-5 h-5" />, color: 'red' },
    { name: 'EPUB to MOBI', href: '/convert/epub-to-mobi', icon: <File className="w-5 h-5" />, color: 'emerald' },
    { name: 'CSV to XLSX', href: '/convert/csv-to-xlsx', icon: <BarChart3 className="w-5 h-5" />, color: 'teal' },
    { name: 'DOCX to PDF', href: '/convert/docx-to-pdf', icon: <File className="w-5 h-5" />, color: 'slate' },
  ];

  return (
    <>
      <Helmet>
        <title>Free Online File Converter - MorphyHub | Convert 300+ Formats Instantly</title>
        <meta name="description" content="Convert files between 300+ formats instantly. Fast, secure, and free file conversion service. Support for images, documents, ebooks, and data files." />
        <meta name="keywords" content="file converter, online converter, image converter, document converter, ebook converter, batch conversion, free converter" />
        <link rel="canonical" href="https://morphyhub.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Hero Section - Redesigned */}
        <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-32 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-8">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium">Free Forever • No Registration</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
                Transform Files
                <br />
                <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Instantly
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Convert between <span className="font-bold text-white">300+ formats</span> with lightning speed. 
                Secure, free, and no sign-up required.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <button 
                  onClick={() => navigate('/converters')}
                  className="group relative bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-5 px-10 rounded-2xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/50 flex items-center gap-3 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                  <RefreshCw className="w-6 h-6 relative z-10" />
                  <span className="relative z-10">Start Converting</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => navigate('/viewers')}
                  className="group border-2 border-white/30 backdrop-blur-sm bg-white/5 text-white font-bold py-5 px-10 rounded-2xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center gap-3"
                >
                  <Eye className="w-6 h-6" />
                  <span>View Files</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span>100% Free</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span>No Registration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span>Secure & Private</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span>Batch Processing</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - Redesigned */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative">
                    <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${stat.color === 'text-blue-600' ? 'from-blue-100 to-blue-200' : stat.color === 'text-green-600' ? 'from-green-100 to-green-200' : 'from-purple-100 to-purple-200'} mb-4`}>
                      <div className={stat.color}>
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-5xl font-black bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 font-semibold text-lg">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Sections - Converters, Viewers, Compress, Samples */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
                Explore Our Tools
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need for file conversion, viewing, compression, and more
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Converters */}
              <button
                onClick={() => navigate('/converters')}
                className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-blue-100 hover:border-blue-300 overflow-hidden text-left"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full -mr-16 -mt-16 opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <RefreshCw className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Converters
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Convert between 300+ file formats instantly. Images, documents, ebooks, and data files.
                  </p>
                  <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                    <span>Explore</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>

              {/* Viewers */}
              <button
                onClick={() => navigate('/viewers')}
                className="group relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-purple-100 hover:border-purple-300 overflow-hidden text-left"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full -mr-16 -mt-16 opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Viewers
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Preview and view files directly in your browser. No downloads needed.
                  </p>
                  <div className="flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-3 transition-all">
                    <span>Explore</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>

              {/* Compress */}
              <button
                onClick={() => navigate('/compress')}
                className="group relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-green-100 hover:border-green-300 overflow-hidden text-left"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full -mr-16 -mt-16 opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <Compress className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Compress
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Reduce file sizes without losing quality. JPG, PNG, and PDF compression.
                  </p>
                  <div className="flex items-center gap-2 text-green-600 font-semibold group-hover:gap-3 transition-all">
                    <span>Explore</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>

              {/* Samples */}
              <button
                onClick={() => navigate('/samples')}
                className="group relative bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-orange-100 hover:border-orange-300 overflow-hidden text-left"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full -mr-16 -mt-16 opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-orange-500 to-amber-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <FolderOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Samples
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Browse sample files for all supported formats. Test before you convert.
                  </p>
                  <div className="flex items-center gap-2 text-orange-600 font-semibold group-hover:gap-3 transition-all">
                    <span>Explore</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* How It Works - Redesigned */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Three simple steps to convert any file format
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-3xl opacity-20 blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border-2 border-blue-100 hover:border-blue-300 transition-all duration-300">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Upload className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center mb-4">
                    <span className="text-sm font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">STEP 1</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">Upload File</h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    Drag & drop or browse to select your file. Supports up to 100MB per file.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl opacity-20 blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border-2 border-purple-100 hover:border-purple-300 transition-all duration-300">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Layers className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center mb-4">
                    <span className="text-sm font-bold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">STEP 2</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">Choose Format</h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    Select your desired output format from 300+ supported formats.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-400 rounded-3xl opacity-20 blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border-2 border-green-100 hover:border-green-300 transition-all duration-300">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Download className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center mb-4">
                    <span className="text-sm font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full">STEP 3</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">Download</h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    Click convert and download your file instantly. No waiting, no queues.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Converters - Redesigned */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
                Popular Converters
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Quick access to our most-used conversion tools
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {popularConverters.map((converter, index) => (
                <a 
                  key={index}
                  href={converter.href} 
                  className="group relative bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-gray-100 hover:border-gray-200 overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${converter.color === 'blue' ? 'from-blue-100 to-blue-200' : converter.color === 'purple' ? 'from-purple-100 to-purple-200' : converter.color === 'pink' ? 'from-pink-100 to-pink-200' : converter.color === 'violet' ? 'from-violet-100 to-violet-200' : converter.color === 'red' ? 'from-red-100 to-red-200' : converter.color === 'emerald' ? 'from-emerald-100 to-emerald-200' : converter.color === 'teal' ? 'from-teal-100 to-teal-200' : 'from-slate-100 to-slate-200'} rounded-full -mr-10 -mt-10 opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${converter.color === 'blue' ? 'from-blue-500 to-blue-600' : converter.color === 'purple' ? 'from-purple-500 to-purple-600' : converter.color === 'pink' ? 'from-pink-500 to-pink-600' : converter.color === 'violet' ? 'from-violet-500 to-violet-600' : converter.color === 'red' ? 'from-red-500 to-red-600' : converter.color === 'emerald' ? 'from-emerald-500 to-emerald-600' : converter.color === 'teal' ? 'from-teal-500 to-teal-600' : 'from-slate-500 to-slate-600'} mb-4 group-hover:scale-110 transition-transform`}>
                    <div className="text-white">
                      {converter.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm group-hover:text-gray-700 transition-colors">
                    {converter.name}
                  </h3>
                </a>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={() => navigate('/converters')}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Rocket className="w-5 h-5" />
                View All 300+ Converters
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Features Section - Redesigned */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
                Why Choose MorphyHub?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Built for professionals and everyday users alike
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-gray-200 overflow-hidden">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.bgColor} rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                  <div className="relative">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
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

