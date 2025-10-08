import React, { useState } from 'react';
import { Image, Upload, Eye, Download, Share2, ArrowLeft, CheckCircle, Smartphone, Zap } from 'lucide-react';
import { FileUpload } from '../FileUpload';
import { FileViewer } from '../FileViewer';
import { Header } from '../Header';
import { Helmet } from 'react-helmet-async';

export const HEICViewer: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [viewerFile, setViewerFile] = useState<File | null>(null);

  const handleFilesSelected = (files: File[]) => {
    // Filter only HEIC files
    const heicFiles = files.filter(file => {
      const extension = file.name.split('.').pop()?.toLowerCase();
      return ['heic', 'heif'].includes(extension || '');
    });
    setSelectedFiles(heicFiles);
  };

  return (
    <>
      <Helmet>
        <title>HEIC Viewer - Free Online Apple HEIC/HEIF Image Viewer</title>
        <meta name="description" content="View HEIC/HEIF (High Efficiency Image Container) images online for free. Apple iOS image viewer with HDR support and superior compression. Up to 20 files, 100MB total. No registration required." />
        <meta name="keywords" content="HEIC viewer, HEIF viewer, Apple image viewer, iOS image viewer, iPhone photo viewer, HDR image viewer, batch viewing" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-violet-600 via-purple-500 to-fuchsia-600 text-white overflow-hidden">
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
                    HEIC Viewer
                  </h1>
                  <p className="text-xl text-violet-100">
                    View Apple HEIC/HEIF images with high efficiency compression
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
              <div className="p-3 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Upload HEIC Files
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Drag and drop your Apple HEIC/HEIF images or click to browse. Supports iOS photos, Live Photos, and HDR images up to 100MB total.
            </p>
            <FileUpload 
              onFilesSelected={handleFilesSelected}
              acceptedFormats={['heic', 'heif']}
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
                  <div className="p-3 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Your HEIC Files ({selectedFiles.length})
                  </h2>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-xl p-4 hover:shadow-lg transition-all transform hover:scale-105 border border-gray-200">
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
                      {(file.size / 1024 / 1024).toFixed(2)} MB • HEIC
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setViewerFile(file)}
                        className="flex-1 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white text-sm font-semibold py-2.5 px-3 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-1.5"
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
                        className="p-2 text-violet-600 hover:bg-violet-100 rounded-lg transition-colors"
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

        {/* Format Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            About HEIC Format
          </h2>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              HEIC (High Efficiency Image Container) is a modern image format developed by Apple, 
              based on the HEIF (High Efficiency Image Format) standard. It provides superior 
              compression compared to JPEG while maintaining higher image quality, making it the 
              default format for photos taken on iOS devices since iOS 11.
            </p>
            
            {/* Technical Specifications */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Technical Specifications</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-2 text-sm font-medium text-gray-500">File Extensions</td>
                      <td className="py-2 text-sm text-gray-900">.heic, .heif</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-sm font-medium text-gray-500">MIME Type</td>
                      <td className="py-2 text-sm text-gray-900">image/heic, image/heif</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-sm font-medium text-gray-500">Developed By</td>
                      <td className="py-2 text-sm text-gray-900">Apple (based on MPEG HEIF)</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-sm font-medium text-gray-500">First Released</td>
                      <td className="py-2 text-sm text-gray-900">2017 (iOS 11)</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-sm font-medium text-gray-500">Compression</td>
                      <td className="py-2 text-sm text-gray-900">HEVC (H.265) based</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-sm font-medium text-gray-500">Color Depth</td>
                      <td className="py-2 text-sm text-gray-900">8, 10, 12, 16 bits per channel</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-sm font-medium text-gray-500">Max Resolution</td>
                      <td className="py-2 text-sm text-gray-900">8192×8192 pixels</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-sm font-medium text-gray-500">Transparency</td>
                      <td className="py-2 text-sm text-gray-900">Yes (Alpha channel)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Advantages</h3>
                <ul className="space-y-2 text-sm">
                  <li>• 50% smaller file sizes than JPEG</li>
                  <li>• Superior image quality</li>
                  <li>• Support for HDR and wide color gamut</li>
                  <li>• Multiple images in one container</li>
                  <li>• Live Photos support</li>
                  <li>• Advanced metadata storage</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Best Use Cases</h3>
                <ul className="space-y-2 text-sm">
                  <li>• iPhone/iPad photography</li>
                  <li>• High-quality image storage</li>
                  <li>• Professional photography</li>
                  <li>• HDR image capture</li>
                  <li>• Live Photos and burst shots</li>
                  <li>• Space-efficient archiving</li>
                </ul>
              </div>
            </div>

          </div>
        </div>

          {/* Back to Viewers Button */}
          <div className="text-center">
            <a
              href="/viewers"
              className="inline-block bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
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
                <div className="p-2 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">MorphyIMG</h2>
              </div>
              
              <p className="text-gray-300 mb-6">
                Professional HEIC viewer for all your image viewing needs.
              </p>
              
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-300">
                <span>© 2025 MorphyIMG. Built for HEIC professionals.</span>
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