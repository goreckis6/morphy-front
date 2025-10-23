import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Image, Upload, Eye, Download, Share2, ArrowLeft, Camera, Palette, Zap, Info, CheckCircle, Star, Layers } from 'lucide-react';
import { FileUpload } from '../FileUpload';
import { FileViewer } from '../FileViewer';
import { Header } from '../Header';

export const PNGViewer: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [viewerFile, setViewerFile] = useState<File | null>(null);

  const handleFilesSelected = (files: File[]) => {
    // Filter only PNG files
    const pngFiles = files.filter(file => {
      const extension = file.name.split('.').pop()?.toLowerCase();
      return extension === 'png';
    });
    setSelectedFiles(pngFiles);
  };

  return (
    <>
      <Helmet>
        <title>Free PNG Viewer - View PNG Images with Transparency Online</title>
        <meta name="description" content="Free PNG viewer. View PNG images online with alpha transparency support. Free online tool with batch processing." />
        <meta name="keywords" content="PNG viewer, PNG converter, view PNG online, PNG transparency, PNG to JPG, image viewer, alpha channel viewer" />
      </Helmet>
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-teal-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => window.location.href = '/viewers'}
                className="p-2 text-white/80 hover:text-white hover:bg-white/20 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                  <Image className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">
                    Free PNG Viewer
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-green-100">
                    View PNG images with transparency support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Upload Section */}
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border border-gray-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 mb-4 sm:mb-6">
            <div className="p-2 sm:p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl">
              <Upload className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
              Upload PNG Files
            </h2>
          </div>
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
            Drag and drop your PNG images or click to browse. Supports transparency and alpha channels up to 100MB each.
          </p>
          <FileUpload 
            onFilesSelected={handleFilesSelected}
            acceptedFormats={['png']}
            maxFiles={20}
            maxSize={100 * 1024 * 1024}
            hideFormatList={true}
            showTotalSize={true}
          />
        </div>

        {/* Preview Section */}
        {selectedFiles.length > 0 && (
          <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border border-gray-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 sm:p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  Your PNG Files ({selectedFiles.length})
                </h2>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {selectedFiles.map((file, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-green-50 rounded-xl p-3 sm:p-4 hover:shadow-lg transition-all transform hover:scale-105 border border-gray-200">
                  <div className="aspect-square bg-white rounded-xl mb-2 sm:mb-3 overflow-hidden shadow-md relative">
                    {/* Checkered background to show transparency */}
                    <div className="absolute inset-0 bg-[repeating-conic-gradient(#e5e7eb_0%_25%,white_0%_50%)] bg-[length:20px_20px]"></div>
                    <img
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      className="relative w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-900 truncate mb-1 sm:mb-2" title={file.name}>
                    {file.name}
                  </div>
                  <div className="text-xs text-gray-600 mb-2 sm:mb-3 font-medium">
                    {(file.size / 1024 / 1024).toFixed(2)} MB • PNG
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <button
                      onClick={() => setViewerFile(file)}
                      className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white text-xs sm:text-sm font-semibold py-2 sm:py-2.5 px-3 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-1.5"
                    >
                      <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>View</span>
                    </button>
                    <button 
                      onClick={() => {
                        const url = URL.createObjectURL(file);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = file.name;
                        a.click();
                        URL.revokeObjectURL(url);
                      }}
                      className="p-2 text-green-600 hover:bg-green-100 rounded-lg transition-colors"
                      title="Download"
                    >
                      <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-green-200 hover:shadow-xl transition-all transform hover:scale-105">
            <div className="bg-white p-2 sm:p-3 rounded-xl w-fit mb-3 sm:mb-4">
              <Layers className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
              Transparency Support
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Full alpha channel support with checkered background preview for transparent regions
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-blue-200 hover:shadow-xl transition-all transform hover:scale-105">
            <div className="bg-white p-2 sm:p-3 rounded-xl w-fit mb-3 sm:mb-4">
              <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
              Lossless Quality
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              PNG uses lossless compression, preserving every pixel with perfect quality
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-purple-200 hover:shadow-xl transition-all transform hover:scale-105 sm:col-span-2 lg:col-span-1">
            <div className="bg-white p-2 sm:p-3 rounded-xl w-fit mb-3 sm:mb-4">
              <Palette className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
              Format Conversion
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Convert PNG to JPG, WebP, PDF and other formats with advanced settings
            </p>
          </div>
        </div>

        {/* PNG Information */}
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border border-gray-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 mb-4 sm:mb-6">
            <div className="p-2 sm:p-3 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl">
              <Info className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
              About PNG Format
            </h2>
          </div>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4 text-sm sm:text-base">
              PNG (Portable Network Graphics) is a raster-graphics file format that supports lossless data compression. 
              Created as an improved, non-patented replacement for GIF, PNG is widely used for web graphics, digital art, 
              and images requiring transparency. Unlike JPEG, PNG preserves image quality without any loss during compression.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-4 sm:mt-6">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">Key Advantages</h3>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  <li>• <strong>Transparency support</strong> - Full alpha channel (0-255)</li>
                  <li>• <strong>Lossless compression</strong> - No quality degradation</li>
                  <li>• <strong>True color</strong> - 16.7 million colors (24-bit RGB)</li>
                  <li>• <strong>Web optimized</strong> - Perfect for web graphics and logos</li>
                  <li>• <strong>Universal support</strong> - All browsers and applications</li>
                  <li>• <strong>Metadata support</strong> - Text chunks for image information</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">Best Use Cases</h3>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  <li>• <strong>Web graphics</strong> - Logos, icons, and UI elements</li>
                  <li>• <strong>Screenshots</strong> - Perfect for captures with text</li>
                  <li>• <strong>Digital art</strong> - Illustrations with transparency</li>
                  <li>• <strong>Infographics</strong> - Charts and diagrams</li>
                  <li>• <strong>Game assets</strong> - Sprites with alpha channels</li>
                  <li>• <strong>Print graphics</strong> - High-quality printing needs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border border-gray-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 mb-4 sm:mb-6">
            <div className="p-2 sm:p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl">
              <Star className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
              PNG Technical Specifications
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-700">Specification</th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-700">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-gray-800">File Extension</td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-600">.png</td>
                </tr>
                <tr>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-gray-800">MIME Type</td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-600">image/png</td>
                </tr>
                <tr>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-gray-800">Compression</td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-600">Lossless using DEFLATE algorithm</td>
                </tr>
                <tr>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-gray-800">Color Support</td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-600">RGB, RGBA, Grayscale, Indexed (up to 48-bit color)</td>
                </tr>
                <tr>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-gray-800">Maximum Resolution</td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-600">6,500 × 6,500 pixels</td>
                </tr>
                <tr>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-gray-800">Transparency</td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-600">Full alpha channel support (256 levels)</td>
                </tr>
                <tr>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-gray-800">Animation</td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-600">Supported via APNG extension</td>
                </tr>
                <tr>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-gray-800">Interlacing</td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-600">Adam7 interlacing supported</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SEO Content */}
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border border-gray-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 mb-4 sm:mb-6">
            <div className="p-2 sm:p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl">
              <Star className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
              PNG Viewer Features
            </h2>
          </div>
          
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4 text-sm sm:text-base">
              Our professional PNG viewer provides comprehensive support for all PNG variants including 
              PNG-8, PNG-24, PNG-32, and APNG (Animated PNG). Whether you're a web designer, graphic artist, or developer, 
              our platform offers the tools you need for professional PNG processing with full transparency support.
            </p>
            
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3 mt-4 sm:mt-6">Advanced Viewing Features</h3>
            <p className="mb-4 text-sm sm:text-base">
              View PNG images with pixel-perfect accuracy, checkered background for transparency visualization, zoom 
              capabilities up to 500%, and detailed metadata display. Our viewer automatically detects and displays 
              alpha channel information, color depth, and embedded text chunks.
            </p>
            
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3 mt-4 sm:mt-6">Professional Viewing Tools</h3>
            <p className="mb-4 text-sm sm:text-base">
              View PNG files with transparency handling options, background color selection for formats that don't support alpha channels, and batch processing 
              for viewing multiple PNG files simultaneously while preserving quality.
            </p>
            
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3 mt-4 sm:mt-6">Transparency Optimization</h3>
            <p className="text-sm sm:text-base">
              Optimize PNG files for web use with smart compression that reduces file sizes by up to 70% without 
              quality loss. Perfect for website optimization, app assets, and digital publishing where transparency 
              and quality are both essential.
            </p>
          </div>
        </div>

        {/* Back to Viewers Button */}
        <div className="text-center mt-6 sm:mt-8">
          <a
            href="/viewers"
            className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
          >
            ← Back to All Viewers
          </a>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 sm:py-12 mt-12 sm:mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4 sm:mb-6">
              <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl">
                <Image className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold">MorphyIMG</h2>
            </div>
            
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              Professional PNG viewer for all your image processing needs.
            </p>
            
            <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-gray-300">
              <span>© 2025 MorphyIMG. Built for PNG professionals.</span>
            </div>
          </div>
        </div>
      </footer>

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
};