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
  File
} from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();
  const [viewerFile, setViewerFile] = useState<File | null>(null);
  const [totalDataProcessed, setTotalDataProcessed] = useState(0);

  // Load and track total data processed
  useEffect(() => {
    // Get stored value from localStorage
    const storedData = localStorage.getItem('MorphyHub_total_processed');
    const baseGB = storedData ? parseFloat(storedData) : 500; // Start from 500 GB if no stored value
    
    setTotalDataProcessed(baseGB);
    
    // Continue incrementing slowly to simulate live conversions from other users
    const liveIncrement = setInterval(() => {
      setTotalDataProcessed(prev => {
        const newValue = prev + Math.random() * 0.05; // Smaller increments
        localStorage.setItem('MorphyHub_total_processed', newValue.toString());
        return newValue;
      });
    }, 10000); // Add small amounts every 10 seconds
    
    return () => {
      clearInterval(liveIncrement);
    };
  }, []);

  // Format the data processed counter
  const formatDataProcessed = (gb: number) => {
    if (gb >= 1000) {
      return `${(gb / 1000).toFixed(1)} TB`;
    }
    return `${gb.toFixed(1)} GB`;
  };

  // Site-wide JSON-LD schema
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
    { icon: <Zap className="w-12 h-12 text-yellow-500" />, title: 'Lightning Fast', description: 'Process files in seconds with our optimized conversion engine powered by Python and Sharp' },
    { icon: <Shield className="w-12 h-12 text-green-500" />, title: 'Secure & Private', description: 'All conversions happen server-side with enterprise-grade security. Files are automatically deleted after processing' },
    { icon: <Globe className="w-12 h-12 text-blue-500" />, title: 'Universal Support', description: 'Convert between 300+ format combinations including images, documents, ebooks, and data formats' },
    { icon: <BarChart3 className="w-12 h-12 text-purple-500" />, title: 'Batch Processing', description: 'Convert up to 20 files at once with our powerful batch processing engine' },
    { icon: <Eye className="w-12 h-12 text-pink-500" />, title: 'File Viewer', description: 'Preview and view your files directly in the browser before or after conversion' },
    { icon: <Star className="w-12 h-12 text-orange-500" />, title: 'Professional Quality', description: 'Industry-standard conversion with quality controls and customizable settings for every format' },
  ];

  const stats = [
    { icon: <FileText className="w-8 h-8 text-blue-600" />, value: '300+', label: 'Supported Formats' },
    { icon: <TrendingUp className="w-8 h-8 text-green-600" />, value: formatDataProcessed(totalDataProcessed), label: 'Data Processed' },
    { icon: <Zap className="w-8 h-8 text-purple-600" />, value: '20 Files', label: 'Batch Processing' },
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

      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white py-24 overflow-hidden">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-0 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                Convert Any File.
                <span className="block bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                  Instantly.
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-50 max-w-4xl mx-auto leading-relaxed">
                Fast, secure, and easy file conversions between <span className="font-bold text-yellow-300">300+ formats</span> — directly in your browser. 
                No registration required.
              </p>
              
              {/* Feature Pills */}
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <span className="text-sm font-medium">🚀 Lightning Fast</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <span className="text-sm font-medium">🔒 100% Secure</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <span className="text-sm font-medium">⚡ No Registration</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <span className="text-sm font-medium">📦 Batch Processing</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  onClick={() => navigate('/converters')}
                  className="bg-white text-blue-600 font-bold py-4 px-10 rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center gap-2"
                >
                  <RefreshCw className="w-5 h-5" />
                  Converters
                </button>
                <button 
                  onClick={() => navigate('/viewers')}
                  className="border-2 border-white/50 backdrop-blur-sm bg-white/10 text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center gap-2"
                >
                  <FileText className="w-5 h-5" />
                  File Viewers
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200">
                  <div className="flex justify-center mb-4 bg-gradient-to-br from-blue-100 to-purple-100 w-16 h-16 rounded-full items-center mx-auto">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Simple, fast, and secure file conversion in just 3 steps
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Upload File</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Drag & drop your file or click to browse. Supports up to 100MB per file.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Select Format</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Choose your desired output format from 300+ supported formats.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-green-500 to-teal-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Download</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Click convert and download your converted file instantly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Converters Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Popular File Converters
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our most popular conversion tools. All converters support batch processing and quality controls.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Data Format Converters */}
              <a href="/convert/csv-to-json" className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-blue-300">
                <div className="text-center">
                  <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">CSV to JSON</h3>
                  <p className="text-sm text-gray-600">Convert spreadsheet data to JSON</p>
                </div>
              </a>

              <a href="/convert/csv-to-ndjson" className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-purple-300">
                <div className="text-center">
                  <div className="bg-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">CSV to NDJSON</h3>
                  <p className="text-sm text-gray-600">Streaming data format</p>
                </div>
              </a>

              {/* Image Converters */}
              <a href="/convert/dng-to-webp" className="group bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-pink-300">
                <div className="text-center">
                  <div className="bg-pink-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Image className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">DNG to WebP</h3>
                  <p className="text-sm text-gray-600">RAW to modern web format</p>
                </div>
              </a>

              <a href="/convert/cr2-to-webp" className="group bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-violet-300">
                <div className="text-center">
                  <div className="bg-violet-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Image className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">CR2 to WebP</h3>
                  <p className="text-sm text-gray-600">Canon RAW to web</p>
                </div>
              </a>

              <a href="/convert/cr2-to-ico" className="group bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-amber-300">
                <div className="text-center">
                  <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Image className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">CR2 to ICO</h3>
                  <p className="text-sm text-gray-600">Canon RAW to icons</p>
                </div>
              </a>

              {/* Document/eBook Converters */}
              <a href="/convert/epub-to-pdf" className="group bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-red-300">
                <div className="text-center">
                  <div className="bg-red-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <File className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">EPUB to PDF</h3>
                  <p className="text-sm text-gray-600">eBook to document</p>
                </div>
              </a>

              <a href="/convert/epub-to-mobi" className="group bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-emerald-300">
                <div className="text-center">
                  <div className="bg-emerald-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <File className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">EPUB to MOBI</h3>
                  <p className="text-sm text-gray-600">eBook for Kindle</p>
                </div>
              </a>

              <a href="/convert/csv-to-xlsx" className="group bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-teal-300">
                <div className="text-center">
                  <div className="bg-teal-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">CSV to XLSX</h3>
                  <p className="text-sm text-gray-600">Spreadsheet to Excel</p>
                </div>
              </a>

              <a href="/convert/docx-to-pdf" className="group bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-slate-300">
                <div className="text-center">
                  <div className="bg-slate-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <File className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">DOCX to PDF</h3>
                  <p className="text-sm text-gray-600">Word to document</p>
                </div>
              </a>
            </div>

            <div className="text-center mt-12">
              <button
                onClick={() => navigate('/converters')}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <RefreshCw className="w-5 h-5" />
                View All 300+ Converters
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Choose MorphyHub?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built for professionals and everyday users alike. Experience the difference with our cutting-edge technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-md">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {feature.description}
                  </p>
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

