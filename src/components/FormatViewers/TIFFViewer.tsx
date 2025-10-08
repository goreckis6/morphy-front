import React, { useState } from 'react';
import { Image, Upload, Eye, Download, Share2, ArrowLeft, Camera, Layers, Archive, CheckCircle } from 'lucide-react';
import { FileUpload } from '../FileUpload';
import { FileViewer } from '../FileViewer';
import { Header } from '../Header';
import { Helmet } from 'react-helmet-async';

export const TIFFViewer: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [viewerFile, setViewerFile] = useState<File | null>(null);
  const [previewUrls, setPreviewUrls] = useState<Map<string, string>>(new Map());
  const [loadingPreviews, setLoadingPreviews] = useState<Set<string>>(new Set());

  const handleFilesSelected = async (files: File[]) => {
    // Filter only TIFF files
    const tiffFiles = files.filter(file => {
      const extension = file.name.split('.').pop()?.toLowerCase();
      return ['tif', 'tiff', 'tiff64', 'ptif'].includes(extension || '');
    });
    setSelectedFiles(tiffFiles);

    // Generate previews for each TIFF file
    for (const file of tiffFiles) {
      generatePreview(file);
    }
  };

  const generatePreview = async (file: File) => {
    const fileKey = `${file.name}-${file.size}`;
    setLoadingPreviews(prev => new Set(prev).add(fileKey));

    try {
      console.log('Generating TIFF preview for:', file.name);
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('https://morphy-2-n2tb.onrender.com/api/preview/tiff', {
        method: 'POST',
        body: formData,
      });

      console.log('TIFF preview response status:', response.status);

      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        console.log('TIFF preview generated successfully:', url);
        setPreviewUrls(prev => new Map(prev).set(fileKey, url));
      } else {
        const errorText = await response.text();
        console.error('Preview generation failed:', response.status, errorText);
        
        // Fallback: try to display TIFF directly (may work in some browsers)
        try {
          const directUrl = URL.createObjectURL(file);
          setPreviewUrls(prev => new Map(prev).set(fileKey, directUrl));
          console.log('Using direct TIFF URL as fallback');
        } catch (fallbackError) {
          console.error('Direct TIFF display also failed:', fallbackError);
        }
      }
    } catch (error) {
      console.error('Error generating preview:', error);
      
      // Fallback: try to display TIFF directly
      try {
        const directUrl = URL.createObjectURL(file);
        setPreviewUrls(prev => new Map(prev).set(fileKey, directUrl));
        console.log('Using direct TIFF URL as fallback after error');
      } catch (fallbackError) {
        console.error('Direct TIFF display also failed:', fallbackError);
      }
    } finally {
      setLoadingPreviews(prev => {
        const newSet = new Set(prev);
        newSet.delete(fileKey);
        return newSet;
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>TIFF Viewer - Free Online TIFF Image Viewer</title>
        <meta name="description" content="View TIFF (Tagged Image File Format) images online for free. Professional quality viewer with multi-page support, high bit-depth, and metadata display. Up to 20 files, 100MB total. No registration required." />
        <meta name="keywords" content="TIFF viewer, TIF viewer, multi-page TIFF, professional photography viewer, lossless image viewer, EXIF viewer, batch viewing" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-orange-600 via-amber-500 to-yellow-600 text-white overflow-hidden">
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
                  <Camera className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h1 className="text-5xl font-bold mb-3">
                    TIFF Viewer
                  </h1>
                  <p className="text-xl text-orange-100">
                    View TIFF images with professional quality and multi-page support
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
              <div className="p-3 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Upload TIFF Files
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Drag and drop your TIFF images (TIF, TIFF, TIFF64, PTIF) or click to browse. Supports multi-page documents and high bit-depth images up to 100MB total.
            </p>
            <FileUpload 
              onFilesSelected={handleFilesSelected}
              acceptedFormats={['tif', 'tiff', 'tiff64', 'ptif']}
              maxFiles={20}
              maxSize={100 * 1024 * 1024}
              hideFormatList={true}
              showTotalSize={true}
            />
          </div>

          {/* Browser Compatibility Note */}
          {selectedFiles.length > 0 && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Camera className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-blue-900 mb-1">Generating Previews</h4>
                  <p className="text-sm text-blue-700">
                    TIFF files are being converted to PNG format for web preview. This may take a few moments for large files.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Preview Section */}
          {selectedFiles.length > 0 && (
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Your TIFF Files ({selectedFiles.length})
                  </h2>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {selectedFiles.map((file, index) => {
                  const fileKey = `${file.name}-${file.size}`;
                  const previewUrl = previewUrls.get(fileKey);
                  const isLoading = loadingPreviews.has(fileKey);

                  return (
                    <div key={index} className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-xl p-4 hover:shadow-lg transition-all transform hover:scale-105 border border-gray-200">
                      <div className="aspect-square bg-white rounded-xl mb-3 overflow-hidden shadow-md flex items-center justify-center">
                        {isLoading ? (
                          <div className="text-center p-4">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-2"></div>
                            <p className="text-xs text-gray-500">Generating preview...</p>
                          </div>
                        ) : previewUrl ? (
                          <img
                            src={previewUrl}
                            alt={file.name}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                          />
                        ) : (
                          <div className="text-center p-4">
                            <Camera className="w-16 h-16 text-orange-400 mx-auto mb-2" />
                            <p className="text-xs text-orange-600 font-medium">TIFF Image</p>
                            <p className="text-xs text-gray-500 mt-1">Processing...</p>
                          </div>
                        )}
                      </div>
                      <div className="text-sm font-semibold text-gray-900 truncate mb-2" title={file.name}>
                        {file.name}
                      </div>
                      <div className="text-xs text-gray-600 mb-3 font-medium">
                        {(file.size / 1024 / 1024).toFixed(2)} MB • TIFF
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setViewerFile(file)}
                          className="flex-1 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white text-sm font-semibold py-2.5 px-3 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-1.5"
                          disabled={isLoading}
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
                          className="p-2 text-orange-600 hover:bg-orange-100 rounded-lg transition-colors"
                          title="Download"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <Camera className="w-8 h-8 text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Professional Quality
            </h3>
            <p className="text-gray-600">
              Lossless compression and high bit-depth support for professional photography
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <Layers className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Multi-Page Support
            </h3>
            <p className="text-gray-600">
              View and extract individual pages from multi-page TIFF documents
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <Archive className="w-8 h-8 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Metadata Rich
            </h3>
            <p className="text-gray-600">
              Comprehensive metadata support including EXIF, IPTC, and custom tags
            </p>
          </div>
        </div>

        {/* TIFF Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            About TIFF Format
          </h2>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              TIFF (Tagged Image File Format) is a computer file format for storing raster graphics images, 
              popular among graphic artists, the publishing industry, and photographers. TIFF is widely 
              supported by scanning, faxing, word processing, optical character recognition, image manipulation, 
              desktop publishing, and page-layout applications. The format was created by Aldus Corporation 
              for use in desktop publishing and is now controlled by Adobe Systems.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Advantages</h3>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Lossless compression</strong> - No quality degradation</li>
                  <li>• <strong>High bit-depth</strong> - Support for 16-bit and 32-bit images</li>
                  <li>• <strong>Multi-page support</strong> - Multiple images in one file</li>
                  <li>• <strong>Extensive metadata</strong> - Rich tagging system</li>
                  <li>• <strong>Professional standard</strong> - Industry-wide acceptance</li>
                  <li>• <strong>Flexible compression</strong> - Multiple compression options</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Best Use Cases</h3>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Professional photography</strong> - High-quality image storage</li>
                  <li>• <strong>Print publishing</strong> - CMYK and spot color support</li>
                  <li>• <strong>Medical imaging</strong> - High bit-depth requirements</li>
                  <li>• <strong>Archival storage</strong> - Long-term image preservation</li>
                  <li>• <strong>Scientific imaging</strong> - Precise color and data integrity</li>
                  <li>• <strong>Document scanning</strong> - Multi-page document storage</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            TIFF Technical Specifications
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
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">File Extensions</td>
                  <td className="px-6 py-4 text-sm text-gray-600">.tif, .tiff, .tiff64, .ptif</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">MIME Type</td>
                  <td className="px-6 py-4 text-sm text-gray-600">image/tiff</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">Compression</td>
                  <td className="px-6 py-4 text-sm text-gray-600">None, LZW, ZIP, JPEG, CCITT</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">Color Support</td>
                  <td className="px-6 py-4 text-sm text-gray-600">RGB, CMYK, LAB, Grayscale, Indexed</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">Bit Depth</td>
                  <td className="px-6 py-4 text-sm text-gray-600">1, 8, 16, 32 bits per channel</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">Maximum Size</td>
                  <td className="px-6 py-4 text-sm text-gray-600">4GB file size limit (TIFF64 unlimited)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">Multi-page</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Multiple images per file supported</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">Metadata</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Extensive tag system, EXIF, IPTC</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

          {/* Back to Viewers Button */}
          <div className="text-center">
            <a
              href="/viewers"
              className="inline-block bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
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
                <div className="p-2 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl">
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">MorphyIMG</h2>
              </div>
              
              <p className="text-gray-300 mb-6">
                Professional TIFF viewer for all your image viewing needs.
              </p>
              
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-300">
                <span>© 2025 MorphyIMG. Built for TIFF professionals.</span>
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