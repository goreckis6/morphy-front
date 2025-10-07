import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Image, Upload, Eye, Download, Share2, ArrowLeft, Camera, Palette, Zap, Info, CheckCircle, Star } from 'lucide-react';
import { FileUpload } from '../FileUpload';
import { FileViewer } from '../FileViewer';
import { Header } from '../Header';

export const JPEGViewer: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [viewerFile, setViewerFile] = useState<File | null>(null);

  const handleFilesSelected = (files: File[]) => {
    // Filter only JPEG files
    const jpegFiles = files.filter(file => {
      const extension = file.name.split('.').pop()?.toLowerCase();
      return ['jpg', 'jpeg', 'jpe'].includes(extension || '');
    });
    setSelectedFiles(jpegFiles);
  };

  return (
    <>
      <Helmet>
        <title>JPEG Viewer & Converter - View and Convert JPG Images Online</title>
        <meta name="description" content="Professional JPEG viewer and converter. View JPG images online, extract EXIF metadata, convert to PNG, WebP, PDF and more. Free online tool with batch processing support." />
        <meta name="keywords" content="JPEG viewer, JPG viewer, image viewer, JPEG converter, JPG to PNG, view JPEG online, EXIF viewer, photo viewer" />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <Header />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => window.location.href = '/viewers'}
                className="p-2 text-white/80 hover:text-white hover:bg-white/20 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <Image className="w-12 h-12 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  JPEG Viewer & Converter
                </h1>
                <p className="text-xl text-blue-100">
                  View, analyze, and convert JPEG images with professional tools
                </p>
              </div>
            </div>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-3 mt-8">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <span className="text-sm font-medium text-white">📸 EXIF Metadata</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <span className="text-sm font-medium text-white">🔍 High-Quality Preview</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <span className="text-sm font-medium text-white">⚡ Batch Processing</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <span className="text-sm font-medium text-white">🎨 Format Conversion</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Upload Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-200">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl">
              <Upload className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Upload JPEG Files
            </h2>
          </div>
          <p className="text-gray-600 mb-6">
            Drag and drop your JPEG images or click to browse. Supports .jpg, .jpeg, and .jpe files up to 100MB each.
          </p>
          <FileUpload 
            onFilesSelected={handleFilesSelected}
            acceptedFormats={['jpg', 'jpeg', 'jpe']}
            maxFiles={20}
            maxSize={100 * 1024 * 1024}
            hideFormatList={true}
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
                  Your JPEG Files ({selectedFiles.length})
                </h2>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {selectedFiles.map((file, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-4 hover:shadow-lg transition-all transform hover:scale-105 border border-gray-200">
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
                    {(file.size / 1024 / 1024).toFixed(2)} MB • JPEG
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setViewerFile(file)}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-semibold py-2.5 px-3 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-1.5"
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-8 border border-blue-200 hover:shadow-xl transition-all transform hover:scale-105">
            <div className="bg-white p-3 rounded-xl w-fit mb-4">
              <Camera className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Professional Quality
            </h3>
            <p className="text-gray-600 leading-relaxed">
              View JPEG images with full quality preservation, zoom capabilities, and detailed EXIF metadata inspection
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl shadow-lg p-8 border border-yellow-200 hover:shadow-xl transition-all transform hover:scale-105">
            <div className="bg-white p-3 rounded-xl w-fit mb-4">
              <Zap className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Fast Processing
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Lightning-fast JPEG processing with instant previews and optimized rendering for large batches
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg p-8 border border-purple-200 hover:shadow-xl transition-all transform hover:scale-105">
            <div className="bg-white p-3 rounded-xl w-fit mb-4">
              <Palette className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Format Conversion
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Convert JPEG to PNG, WebP, PDF and other formats with advanced quality control settings
            </p>
          </div>
        </div>

        {/* JPEG Information */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-200">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
              <Info className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              About JPEG Format
            </h2>
          </div>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              JPEG (Joint Photographic Experts Group) is one of the most widely used image compression formats 
              in the world. Developed in 1992, JPEG uses lossy compression to significantly reduce file sizes 
              while maintaining acceptable image quality, making it perfect for digital photography, web images, 
              and storage-conscious applications.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Advantages</h3>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Small file sizes</strong> - Excellent compression ratios</li>
                  <li>• <strong>Universal support</strong> - Works on all devices and browsers</li>
                  <li>• <strong>Adjustable quality</strong> - Balance between size and quality</li>
                  <li>• <strong>Fast processing</strong> - Quick to encode and decode</li>
                  <li>• <strong>Wide compatibility</strong> - Supported by all image software</li>
                  <li>• <strong>EXIF metadata</strong> - Stores camera settings and information</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Best Use Cases</h3>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Digital photography</strong> - Perfect for photos with many colors</li>
                  <li>• <strong>Web images</strong> - Ideal for website backgrounds and photos</li>
                  <li>• <strong>Social media</strong> - Standard format for sharing images</li>
                  <li>• <strong>Email attachments</strong> - Small sizes for easy sharing</li>
                  <li>• <strong>Print media</strong> - High-quality printing when needed</li>
                  <li>• <strong>Mobile photography</strong> - Default format for most cameras</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-200">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              JPEG Technical Specifications
            </h2>
          </div>
          
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
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">File Extensions</td>
                  <td className="px-6 py-4 text-sm text-gray-600">.jpg, .jpeg, .jpe</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">MIME Type</td>
                  <td className="px-6 py-4 text-sm text-gray-600">image/jpeg</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">Compression</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Lossy compression using DCT (Discrete Cosine Transform)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">Color Support</td>
                  <td className="px-6 py-4 text-sm text-gray-600">24-bit RGB, 8-bit Grayscale, CMYK</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">Maximum Resolution</td>
                  <td className="px-6 py-4 text-sm text-gray-600">6,500 × 6,500 pixels</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">Transparency</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Not supported</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">Animation</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Not supported</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">Metadata</td>
                  <td className="px-6 py-4 text-sm text-gray-600">EXIF, IPTC, XMP supported</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SEO Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              JPEG Viewer and Converter Features
            </h2>
          </div>
          
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              Our professional JPEG viewer and converter provides comprehensive support for all JPEG variants 
              including standard JPEG (.jpg), JPEG 2000 (.jp2), and progressive JPEG files. Whether you're 
              a photographer, web developer, or graphic designer, our platform offers the tools you need for 
              professional JPEG processing.
            </p>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-3 mt-6">Advanced Viewing Features</h3>
            <p className="mb-4">
              View JPEG images with pixel-perfect accuracy, zoom capabilities up to 500%, and detailed metadata 
              display including EXIF data from digital cameras. Our viewer supports all JPEG color spaces 
              including RGB, CMYK, and grayscale, ensuring accurate color representation across different devices.
            </p>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-3 mt-6">Professional Conversion Tools</h3>
            <p className="mb-4">
              Convert JPEG files to PNG, WebP, AVIF, TIFF, and other formats while maintaining optimal quality. 
              Our conversion engine offers adjustable quality settings, resize options, and batch processing 
              capabilities for handling multiple files simultaneously.
            </p>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-3 mt-6">Quality Optimization</h3>
            <p>
              Optimize JPEG files for web use with our smart compression algorithms that reduce file sizes 
              by up to 80% while preserving visual quality. Perfect for website optimization, email attachments, 
              and social media sharing where file size matters.
            </p>
          </div>
        </div>

        {/* Back to Viewers Button */}
        <div className="text-center">
          <a
            href="/viewers"
            className="inline-block bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
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
              <div className="p-2 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl">
                <Image className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">MorphyIMG</h2>
            </div>
            
            <p className="text-gray-300 mb-6">
              Professional JPEG viewer and converter for all your image processing needs.
            </p>
            
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-300">
              <span>© 2025 MorphyIMG. Built for JPEG professionals.</span>
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