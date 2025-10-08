import React, { useState } from 'react';
import { Image, Upload, Eye, Download, Share2, ArrowLeft, Code, Palette, Zap, CheckCircle } from 'lucide-react';
import { FileUpload } from '../FileUpload';
import { FileViewer } from '../FileViewer';
import { Header } from '../Header';
import { Helmet } from 'react-helmet-async';

export const SVGViewer: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [viewerFile, setViewerFile] = useState<File | null>(null);

  const handleFilesSelected = (files: File[]) => {
    // Filter only SVG files
    const svgFiles = files.filter(file => {
      const extension = file.name.split('.').pop()?.toLowerCase();
      return ['svg', 'svgz'].includes(extension || '');
    });
    setSelectedFiles(svgFiles);
  };

  return (
    <>
      <Helmet>
        <title>SVG Viewer - Free Online Scalable Vector Graphics Viewer</title>
        <meta name="description" content="View and convert SVG (Scalable Vector Graphics) files online for free. Infinite scalability, code-based editing, and interactive elements. Up to 20 files, 100MB total. No registration required." />
        <meta name="keywords" content="SVG viewer, vector graphics, SVG to PNG, SVG to JPEG, scalable graphics, XML graphics, logo viewer, icon viewer, batch processing" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-indigo-600 via-purple-500 to-violet-600 text-white overflow-hidden">
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
                  <Code className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h1 className="text-5xl font-bold mb-3">
                    SVG Viewer
                  </h1>
                  <p className="text-xl text-indigo-100">
                    View and convert scalable vector graphics with infinite quality
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
              <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Upload SVG Files
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Drag and drop your scalable vector graphics (SVG/SVGZ) or click to browse. Supports infinite scalability and code-based editing up to 100MB total.
            </p>
            <FileUpload 
              onFilesSelected={handleFilesSelected}
              acceptedFormats={['svg', 'svgz']}
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
                  <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Your SVG Files ({selectedFiles.length})
                  </h2>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-indigo-50 rounded-xl p-4 hover:shadow-lg transition-all transform hover:scale-105 border border-gray-200">
                    <div className="aspect-square bg-white border-2 border-indigo-100 rounded-xl mb-3 overflow-hidden shadow-md flex items-center justify-center p-4">
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
                      {(file.size / 1024 / 1024).toFixed(2)} MB • Vector SVG
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setViewerFile(file)}
                        className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-sm font-semibold py-2.5 px-3 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-1.5"
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
                        className="p-2 text-indigo-600 hover:bg-indigo-100 rounded-lg transition-colors"
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
              Infinite Scalability
            </h3>
            <p className="text-gray-600">
              Vector graphics that scale to any size without quality loss - perfect for all devices
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <Code className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Code-Based Graphics
            </h3>
            <p className="text-gray-600">
              XML-based format that's editable with code and supports interactive elements
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <Palette className="w-8 h-8 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Advanced Styling
            </h3>
            <p className="text-gray-600">
              CSS styling, gradients, filters, and animations built right into the format
            </p>
          </div>
        </div>

        {/* SVG Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            About SVG Format
          </h2>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              SVG (Scalable Vector Graphics) is an XML-based vector image format for two-dimensional graphics 
              with support for interactivity and animation. SVG images are defined in XML text files, which 
              means they can be created and edited with any text editor, as well as with drawing software. 
              All major modern web browsers support SVG rendering, making it an ideal format for web graphics, 
              icons, and illustrations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Advantages</h3>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Infinite scalability</strong> - No quality loss at any size</li>
                  <li>• <strong>Small file sizes</strong> - Efficient for simple graphics</li>
                  <li>• <strong>Editable with code</strong> - XML-based and human-readable</li>
                  <li>• <strong>CSS styling</strong> - Style with external stylesheets</li>
                  <li>• <strong>Interactive elements</strong> - JavaScript and CSS animations</li>
                  <li>• <strong>SEO friendly</strong> - Text content is searchable</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Best Use Cases</h3>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Web icons</strong> - Crisp icons at any resolution</li>
                  <li>• <strong>Logos and branding</strong> - Perfect for responsive design</li>
                  <li>• <strong>Illustrations</strong> - Simple graphics and diagrams</li>
                  <li>• <strong>Data visualizations</strong> - Charts and interactive graphics</li>
                  <li>• <strong>Print graphics</strong> - High-quality printing at any size</li>
                  <li>• <strong>Mobile apps</strong> - Retina-ready graphics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            SVG Technical Specifications
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
                  <td className="px-6 py-4 text-sm text-gray-600">.svg, .svgz (compressed)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">MIME Type</td>
                  <td className="px-6 py-4 text-sm text-gray-600">image/svg+xml</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">Format Type</td>
                  <td className="px-6 py-4 text-sm text-gray-600">XML-based vector graphics</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">Color Support</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Full RGB, gradients, patterns</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">Resolution</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Resolution independent (vector)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">Transparency</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Full alpha channel support</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">Animation</td>
                  <td className="px-6 py-4 text-sm text-gray-600">SMIL animations and CSS transitions</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">Interactivity</td>
                  <td className="px-6 py-4 text-sm text-gray-600">JavaScript events and DOM manipulation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

          {/* Back to Viewers Button */}
          <div className="text-center">
            <a
              href="/viewers"
              className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
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
                <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">MorphyIMG</h2>
              </div>
              
              <p className="text-gray-300 mb-6">
                Professional SVG viewer and converter for all your image processing needs.
              </p>
              
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-300">
                <span>© 2025 MorphyIMG. Built for SVG professionals.</span>
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