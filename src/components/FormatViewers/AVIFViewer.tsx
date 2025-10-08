import React, { useState, useCallback } from 'react';
import { ArrowLeft, Upload, Download, Share2, Eye, X, ZoomIn, ZoomOut, CheckCircle, Smartphone } from 'lucide-react';
import { Header } from '../Header';
import { Helmet } from 'react-helmet-async';
import { FileUpload } from '../FileUpload';

export const AVIFViewer: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [viewerFile, setViewerFile] = useState<File | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleFilesSelected = (files: File[]) => {
    // Filter only AVIF files
    const avifFiles = files.filter(file => {
      const extension = file.name.split('.').pop()?.toLowerCase();
      return extension === 'avif';
    });
    setSelectedFiles(avifFiles);
  };

  const getImageUrl = (file: File) => {
    return URL.createObjectURL(file);
  };

  const handleImageClick = (file: File) => {
    const url = getImageUrl(file);
    setSelectedImage(url);
  };

  const handleDownload = (file: File) => {
    const url = getImageUrl(file);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name;
    a.click();
  };

  const handleShare = async (file: File) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `AVIF Image: ${file.name}`,
          text: 'Check out this AVIF image',
          files: [file]
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>AVIF Viewer - Free Online AV1 Image File Viewer</title>
        <meta name="description" content="View AVIF (AV1 Image File Format) images online for free. Next-generation image viewer with superior compression, HDR support, and wide color gamut. Up to 20 files, 100MB total. No registration required." />
        <meta name="keywords" content="AVIF viewer, AV1 image viewer, next-gen image viewer, HDR image viewer, AVIF image viewer, modern image format, batch viewing" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-rose-600 via-pink-500 to-fuchsia-600 text-white overflow-hidden">
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
                  <Smartphone className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h1 className="text-5xl font-bold mb-3">
                    AVIF Viewer
                  </h1>
                  <p className="text-xl text-rose-100">
                    View next-generation AVIF images with superior compression
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
              <div className="p-3 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Upload AVIF Files
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Drag and drop your AVIF images or click to browse. Supports HDR, wide color gamut, and transparency up to 100MB total.
            </p>
            <FileUpload 
              onFilesSelected={handleFilesSelected}
              acceptedFormats={['avif']}
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
                  <div className="p-3 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Your AVIF Files ({selectedFiles.length})
                  </h2>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-rose-50 rounded-xl p-4 hover:shadow-lg transition-all transform hover:scale-105 border border-gray-200">
                    <div className="aspect-square bg-white rounded-xl mb-3 overflow-hidden shadow-md">
                      <img
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                        onClick={() => handleImageClick(file)}
                      />
                    </div>
                    <div className="text-sm font-semibold text-gray-900 truncate mb-2" title={file.name}>
                      {file.name}
                    </div>
                    <div className="text-xs text-gray-600 mb-3 font-medium">
                      {(file.size / 1024 / 1024).toFixed(2)} MB • AVIF
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleImageClick(file)}
                        className="flex-1 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white text-sm font-semibold py-2.5 px-3 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-1.5"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View</span>
                      </button>
                      <button 
                        onClick={() => handleDownload(file)}
                        className="p-2 text-rose-600 hover:bg-rose-100 rounded-lg transition-colors"
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

          {/* About AVIF Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About AVIF Format</h2>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              AVIF (AV1 Image File Format) is a modern image format based on the AV1 video codec. 
              It offers superior compression efficiency compared to JPEG, PNG, and WebP, delivering 
              smaller file sizes while maintaining excellent image quality.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Advantages</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Up to 50% smaller file sizes than JPEG</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Superior image quality at low bitrates</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Support for HDR and wide color gamut</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Alpha channel transparency support</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Animation support (similar to GIF)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Best Use Cases</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Modern web applications</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>High-quality image storage</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Bandwidth-sensitive applications</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>HDR and wide color gamut images</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Next-generation image workflows</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Specifications</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody className="space-y-2">
                    <tr className="border-b border-gray-200">
                      <td className="font-medium text-gray-700 py-2">File Extension</td>
                      <td className="text-gray-600 py-2">.avif</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="font-medium text-gray-700 py-2">MIME Type</td>
                      <td className="text-gray-600 py-2">image/avif</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="font-medium text-gray-700 py-2">Compression</td>
                      <td className="text-gray-600 py-2">AV1 codec-based, lossy and lossless</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="font-medium text-gray-700 py-2">Color Depth</td>
                      <td className="text-gray-600 py-2">8, 10, 12 bits per channel</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="font-medium text-gray-700 py-2">Color Space</td>
                      <td className="text-gray-600 py-2">sRGB, Rec. 2020, P3</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="font-medium text-gray-700 py-2">Transparency</td>
                      <td className="text-gray-600 py-2">Yes (alpha channel)</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="font-medium text-gray-700 py-2">Animation</td>
                      <td className="text-gray-600 py-2">Yes</td>
                    </tr>
                    <tr>
                      <td className="font-medium text-gray-700 py-2">Browser Support</td>
                      <td className="text-gray-600 py-2">Chrome 85+, Firefox 93+, Safari 16+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

          {/* Back to Viewers Button */}
          <div className="text-center mb-4">
            <a
              href="/viewers"
              className="inline-block bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              ← Back to All Viewers
            </a>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">MorphyIMG</h2>
            </div>
            
            <p className="text-gray-300 mb-6">
              Professional AVIF viewer for all your image processing needs.
            </p>
            
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-300">
              <span>© 2025 MorphyIMG. Built for AVIF professionals.</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Full Image Viewer Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-full max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>
            
            <img
              src={selectedImage}
              alt="Full size AVIF"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};