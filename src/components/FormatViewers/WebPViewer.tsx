import React, { useState } from 'react';
import { Image, Upload, Eye, Download, ArrowLeft, Zap, Globe, Palette, CheckCircle } from 'lucide-react';
import { FileUpload } from '../FileUpload';
import { FileViewer } from '../FileViewer';
import { Header } from '../Header';
import { Helmet } from 'react-helmet-async';

export const WebPViewer: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [viewerFile, setViewerFile] = useState<File | null>(null);

  const handleFilesSelected = (files: File[]) => {
    // Filter only WebP files
    const webpFiles = files.filter(file => {
      const extension = file.name.split('.').pop()?.toLowerCase();
      return extension === 'webp';
    });
    setSelectedFiles(webpFiles);
  };

  return (
    <>
      <Helmet>
        <title>Free WebP Viewer - Online WebP Image Viewer</title>
        <meta name="description" content="Free WebP viewer. View Online and convert WebP images online for free. Modern image format with superior compression, transparency support, and animation. No registration required." />
        <meta name="keywords" content="WebP viewer, WebP to JPG, WebP to PNG, image viewer, web optimization, lossless compression, transparency, batch processing" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-green-600 via-emerald-500 to-teal-600 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <a
                  href="/viewers"
                  className="p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl transition-all border border-white/20"
                >
                  <ArrowLeft className="w-6 h-6 text-white" />
                </a>
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                  <Image className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h1 className="text-5xl font-bold mb-3">
                    WebP Viewer
                  </h1>
                  <p className="text-xl text-green-100">
                    View and convert WebP images with modern compression
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Upload Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Upload WebP Files
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Drag and drop your WebP images or click to browse. Supports modern compression and transparency up to 100MB total.
            </p>
            <FileUpload 
              onFilesSelected={handleFilesSelected}
              acceptedFormats={['webp']}
              maxFiles={20}
              maxSize={100 * 1024 * 1024}
              hideFormatList={true}
              showTotalSize={true}
            />
          </div>

          {/* Preview Section */}
          {selectedFiles.length > 0 && (
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Your WebP Files ({selectedFiles.length})
                  </h2>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-green-50 rounded-xl p-4 hover:shadow-lg transition-all transform hover:scale-105 border border-gray-200">
                    <div className="aspect-square bg-white rounded-xl mb-3 overflow-hidden shadow-md">
                      <img
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="text-sm font-semibold text-gray-900 truncate mb-2" title={file.name}>
                      {file.name}
                    </div>
                    <div className="text-xs text-gray-600 mb-3 font-medium">
                      {(file.size / 1024 / 1024).toFixed(2)} MB • WebP
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setViewerFile(file)}
                        className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white text-sm font-semibold py-2.5 px-3 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-1.5"
                      >
                        <Eye className="w-4 h-4" />
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
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <Zap className="w-8 h-8 text-yellow-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Superior Compression
            </h3>
            <p className="text-gray-600">
              WebP provides 25-35% better compression than JPEG while maintaining quality
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <Globe className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Modern Web Standard
            </h3>
            <p className="text-gray-600">
              Supported by all modern browsers and optimized for web performance
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <Palette className="w-8 h-8 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Advanced Features
            </h3>
            <p className="text-gray-600">
              Supports transparency, animation, and both lossy and lossless compression
            </p>
          </div>
        </div>

        {/* WebP Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            About WebP Format
          </h2>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              WebP is a modern image format developed by Google that provides superior lossless and lossy 
              compression for images on the web. Using WebP, webmasters and web developers can create 
              smaller, richer images that make the web faster. WebP lossless images are 26% smaller in 
              size compared to PNGs, and WebP lossy images are 25-35% smaller than comparable JPEG images.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Advantages</h3>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Superior compression</strong> - 25-35% smaller than JPEG</li>
                  <li>• <strong>Transparency support</strong> - Like PNG with better compression</li>
                  <li>• <strong>Animation support</strong> - Better than GIF with smaller sizes</li>
                  <li>• <strong>Lossless and lossy</strong> - Choose the best compression method</li>
                  <li>• <strong>Modern browser support</strong> - Supported by all major browsers</li>
                  <li>• <strong>Metadata support</strong> - EXIF, XMP, and color profile support</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Best Use Cases</h3>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Web optimization</strong> - Faster loading websites</li>
                  <li>• <strong>Mobile applications</strong> - Reduced bandwidth usage</li>
                  <li>• <strong>E-commerce</strong> - Product images with smaller file sizes</li>
                  <li>• <strong>Progressive web apps</strong> - Optimized image delivery</li>
                  <li>• <strong>Content delivery</strong> - Reduced server costs</li>
                  <li>• <strong>Image galleries</strong> - More images, less storage</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            WebP Technical Specifications
          </h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Specification</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">File Extension</td>
                  <td className="px-6 py-4 text-sm text-gray-600">.webp</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">MIME Type</td>
                  <td className="px-6 py-4 text-sm text-gray-600">image/webp</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">Compression</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Both lossy (VP8) and lossless compression</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">Color Support</td>
                  <td className="px-6 py-4 text-sm text-gray-600">24-bit RGB with 8-bit alpha channel</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">Maximum Resolution</td>
                  <td className="px-6 py-4 text-sm text-gray-600">6,500 × 6,500 pixels</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">Transparency</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Full alpha channel support</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">Animation</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Supported (better than GIF)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">Metadata</td>
                  <td className="px-6 py-4 text-sm text-gray-600">EXIF, XMP, color profiles</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

          {/* Back to Viewers Button */}
          <div className="text-center">
            <a
              href="/viewers"
              className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              ← Back to All Viewers
            </a>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl">
                <Image className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">MorphyIMG</h2>
            </div>
            
            <p className="text-gray-300 mb-6">
              Professional WebP viewer and converter for all your image processing needs.
            </p>
            
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-300">
              <span>© 2025 MorphyIMG. Built for WebP professionals.</span>
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