import React, { useState } from 'react';
import { Image, Upload, Eye, Download, Share2, ArrowLeft, CheckCircle, Grid3x3, Layers } from 'lucide-react';
import { FileUpload } from '../FileUpload';
import { FileViewer } from '../FileViewer';
import { Header } from '../Header';
import { Helmet } from 'react-helmet-async';

export const ICOViewer: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [viewerFile, setViewerFile] = useState<File | null>(null);

  const handleFilesSelected = (files: File[]) => {
    // Filter only ICO files
    const icoFiles = files.filter(file => {
      const extension = file.name.split('.').pop()?.toLowerCase();
      return ['ico', 'cur'].includes(extension || '');
    });
    setSelectedFiles(icoFiles);
  };

  return (
    <>
      <Helmet>
        <title>ICO Viewer - Free Online Windows Icon File Viewer</title>
        <meta name="description" content="View ICO (Windows Icon) files online for free. Multi-size icon viewer with transparency support and multiple resolution display. Up to 20 files, 100MB total. No registration required." />
        <meta name="keywords" content="ICO viewer, icon viewer, Windows icon, favicon viewer, CUR viewer, multi-size icon, ICO file viewer, batch viewing" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-red-600 via-orange-500 to-amber-600 text-white overflow-hidden">
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
                  <Grid3x3 className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h1 className="text-5xl font-bold mb-3">
                    ICO Viewer
                  </h1>
                  <p className="text-xl text-orange-100">
                    View Windows icon files with multiple size support
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
              <div className="p-3 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Upload ICO Files
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Drag and drop your Windows icon files (ICO, CUR) or click to browse. Supports multiple sizes and transparency up to 100MB total.
            </p>
            <FileUpload 
              onFilesSelected={handleFilesSelected}
              acceptedFormats={['ico', 'cur']}
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
                  <div className="p-3 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Your ICO Files ({selectedFiles.length})
                  </h2>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-xl p-4 hover:shadow-lg transition-all transform hover:scale-105 border border-gray-200">
                    <div className="aspect-square bg-white rounded-xl mb-3 overflow-hidden shadow-md flex items-center justify-center p-4">
                      <img
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                        className="max-w-full max-h-full object-contain hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="text-sm font-semibold text-gray-900 truncate mb-2" title={file.name}>
                      {file.name}
                    </div>
                    <div className="text-xs text-gray-600 mb-3 font-medium">
                      {(file.size / 1024 / 1024).toFixed(2)} MB • ICO
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setViewerFile(file)}
                        className="flex-1 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white text-sm font-semibold py-2.5 px-3 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-1.5"
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
                ))}
              </div>
            </div>
          )}

        {/* Format Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            About ICO Format
          </h2>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              ICO is a file format for computer icons in Microsoft Windows. ICO files contain one or more 
              small images at multiple sizes and color depths, such that they may be scaled appropriately. 
              In Windows, all executables that display an icon to the user, on the desktop, in the Start Menu, 
              or in Windows Explorer, must carry the icon in ICO format.
            </p>
            
            {/* Technical Specifications */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Technical Specifications</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-2 text-sm font-medium text-gray-500">File Extensions</td>
                      <td className="py-2 text-sm text-gray-900">.ico, .cur</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-sm font-medium text-gray-500">MIME Type</td>
                      <td className="py-2 text-sm text-gray-900">image/x-icon, image/vnd.microsoft.icon</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-sm font-medium text-gray-500">Developed By</td>
                      <td className="py-2 text-sm text-gray-900">Microsoft</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-sm font-medium text-gray-500">First Released</td>
                      <td className="py-2 text-sm text-gray-900">1985</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-sm font-medium text-gray-500">Color Depth</td>
                      <td className="py-2 text-sm text-gray-900">1, 4, 8, 16, 24, 32 bits</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-sm font-medium text-gray-500">Max Dimensions</td>
                      <td className="py-2 text-sm text-gray-900">256×256 pixels</td>
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
                  <li>• Multiple sizes in one file</li>
                  <li>• Native Windows support</li>
                  <li>• Transparency support</li>
                  <li>• Small file sizes</li>
                  <li>• Wide compatibility</li>
                  <li>• Professional appearance</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Best Use Cases</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Application icons</li>
                  <li>• Website favicons</li>
                  <li>• Desktop shortcuts</li>
                  <li>• System icons</li>
                  <li>• Toolbar buttons</li>
                  <li>• Menu items</li>
                </ul>
              </div>
            </div>

          </div>
        </div>

          {/* Back to Viewers Button */}
          <div className="text-center mb-8">
            <a
              href="/viewers"
              className="inline-block bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              ← Back to All Viewers
            </a>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl">
                  <Grid3x3 className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">MorphyIMG</h2>
              </div>
              
              <p className="text-gray-300 mb-6">
                Professional ICO viewer for all your icon viewing needs.
              </p>
              
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-300">
                <span>© 2025 MorphyIMG. Built for ICO professionals.</span>
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