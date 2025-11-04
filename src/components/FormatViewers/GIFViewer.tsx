import React, { useState } from 'react';
import { Image, Upload, Eye, Download, ArrowLeft, Play, Palette, Zap, CheckCircle } from 'lucide-react';
import { FileUpload } from '../FileUpload';
import { FileViewer } from '../FileViewer';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Helmet } from 'react-helmet-async';

export const GIFViewer: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [viewerFile, setViewerFile] = useState<File | null>(null);

  const handleFilesSelected = (files: File[]) => {
    // Filter only GIF files
    const gifFiles = files.filter(file => {
      const extension = file.name.split('.').pop()?.toLowerCase();
      return extension === 'gif';
    });
    setSelectedFiles(gifFiles);
  };

  return (
    <>
      <Helmet>
        <title>GIF Viewer - Free Online Animated GIF Viewer and Converter</title>
        <meta name="description" content="View and convert animated GIF images online for free. Support for animations, transparency, and frame extraction. Up to 20 files, 100MB total. No registration required." />
        <meta name="keywords" content="GIF viewer, animated GIF, GIF to MP4, GIF to WebP, animation viewer, frame extraction, meme viewer, batch processing" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-fuchsia-600 text-white overflow-hidden">
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
                    GIF Viewer
                  </h1>
                  <p className="text-xl text-purple-100">
                    View and convert animated GIF images with playback controls
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
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Upload GIF Files
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Drag and drop your animated GIF images or click to browse. Supports animations, transparency, and frame extraction up to 100MB total.
            </p>
            <FileUpload 
              onFilesSelected={handleFilesSelected}
              acceptedFormats={['gif']}
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
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Your GIF Files ({selectedFiles.length})
                  </h2>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-xl p-4 hover:shadow-lg transition-all transform hover:scale-105 border border-gray-200">
                    <div className="aspect-square bg-white rounded-xl mb-3 overflow-hidden shadow-md relative">
                      <img
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1">
                        <Play className="w-3 h-3" />
                        <span>GIF</span>
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-gray-900 truncate mb-2" title={file.name}>
                      {file.name}
                    </div>
                    <div className="text-xs text-gray-600 mb-3 font-medium">
                      {(file.size / 1024 / 1024).toFixed(2)} MB • Animated GIF
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setViewerFile(file)}
                        className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-sm font-semibold py-2.5 px-3 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-1.5"
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
                        className="p-2 text-purple-600 hover:bg-purple-100 rounded-lg transition-colors"
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
            <Play className="w-8 h-8 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Animation Support
            </h3>
            <p className="text-gray-600">
              Full support for animated GIFs with frame-by-frame viewing and playback controls
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <Palette className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Color Optimization
            </h3>
            <p className="text-gray-600">
              Advanced palette optimization for better quality and smaller file sizes
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <Zap className="w-8 h-8 text-yellow-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Format Conversion
            </h3>
            <p className="text-gray-600">
              Convert GIF to WebP, MP4, or extract individual frames as PNG/JPEG
            </p>
          </div>
        </div>

        {/* GIF Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            About GIF Format
          </h2>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              GIF (Graphics Interchange Format) is a bitmap image format developed by CompuServe in 1987. 
              GIF images are compressed using the Lempel-Ziv-Welch (LZW) lossless data compression technique 
              to reduce the file size without degrading the visual quality. The format supports up to 8 bits 
              per pixel for each image, allowing a single image to reference its own palette of up to 256 
              different colors chosen from the 24-bit RGB color space.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Advantages</h3>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Animation support</strong> - Multiple frames in one file</li>
                  <li>• <strong>Transparency</strong> - Single color transparency</li>
                  <li>• <strong>Universal support</strong> - Works everywhere</li>
                  <li>• <strong>Lossless compression</strong> - No quality degradation</li>
                  <li>• <strong>Small file sizes</strong> - Efficient for simple graphics</li>
                  <li>• <strong>Loop control</strong> - Infinite or finite animation loops</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Best Use Cases</h3>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Animated graphics</strong> - Simple animations and effects</li>
                  <li>• <strong>Social media</strong> - Memes and reaction images</li>
                  <li>• <strong>Web graphics</strong> - Icons and simple illustrations</li>
                  <li>• <strong>Email signatures</strong> - Animated logos and banners</li>
                  <li>• <strong>Presentations</strong> - Animated diagrams and charts</li>
                  <li>• <strong>User interfaces</strong> - Loading animations and indicators</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            GIF Technical Specifications
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
                  <td className="px-6 py-4 text-sm text-gray-600">.gif</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">MIME Type</td>
                  <td className="px-6 py-4 text-sm text-gray-600">image/gif</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">Compression</td>
                  <td className="px-6 py-4 text-sm text-gray-600">LZW lossless compression</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">Color Support</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Up to 256 colors (8-bit palette)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">Maximum Resolution</td>
                  <td className="px-6 py-4 text-sm text-gray-600">6,500 × 6,500 pixels</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">Transparency</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Single color transparency</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">Animation</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Multiple frames with timing control</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">Interlacing</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Progressive loading support</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

          {/* Back to Viewers Button */}
          <div className="text-center">
            <a
              href="/viewers"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              ← Back to All Viewers
            </a>
          </div>
        </div>
        
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
};