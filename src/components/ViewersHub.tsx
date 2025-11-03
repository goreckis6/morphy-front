import React, { useState, useMemo } from 'react';
import { Eye, ArrowLeft, FileText, Image, BarChart3, Code, RefreshCw, Search, Camera, FileImage } from 'lucide-react';
import { Header } from './Header';

interface ViewerFormat {
  name: string;
  description: string;
  path: string;
  icon: React.ReactNode;
  iconColor: string;
}

export const ViewersHub: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const viewerCategories = [
    {
      title: "STANDARD IMAGE FORMATS",
      icon: <Image className="w-6 h-6 text-blue-600" />,
      formats: [
        { name: "JPEG Viewer", description: "View JPEG images with zoom and pan controls", path: "/viewers/jpg", icon: <Image className="w-5 h-5 text-blue-600" />, iconColor: "text-blue-600" },
        { name: "PNG Viewer", description: "View PNG images with transparency support", path: "/viewers/png", icon: <Image className="w-5 h-5 text-blue-600" />, iconColor: "text-blue-600" },
        { name: "WebP Viewer", description: "View WebP images with modern compression", path: "/viewers/webp", icon: <Image className="w-5 h-5 text-blue-600" />, iconColor: "text-blue-600" },
        { name: "GIF Viewer", description: "View animated GIF images with playback controls", path: "/viewers/gif", icon: <Image className="w-5 h-5 text-blue-600" />, iconColor: "text-blue-600" },
        { name: "SVG Viewer", description: "View scalable vector graphics with zoom", path: "/viewers/svg", icon: <Image className="w-5 h-5 text-blue-600" />, iconColor: "text-blue-600" },
        { name: "BMP Viewer", description: "View bitmap images with color depth support", path: "/viewers/bmp", icon: <Image className="w-5 h-5 text-blue-600" />, iconColor: "text-blue-600" },
        { name: "ICO Viewer", description: "View Windows icon files with multiple sizes", path: "/viewers/ico", icon: <Image className="w-5 h-5 text-blue-600" />, iconColor: "text-blue-600" },
        { name: "HEIC Viewer", description: "View HEIC images from modern cameras", path: "/viewers/heic", icon: <Image className="w-5 h-5 text-blue-600" />, iconColor: "text-blue-600" },
        { name: "AVIF Viewer", description: "View AVIF images with next-gen compression", path: "/viewers/avif", icon: <Image className="w-5 h-5 text-blue-600" />, iconColor: "text-blue-600" }
      ]
    },
    {
      title: "DOCUMENT FORMATS",
      icon: <FileText className="w-6 h-6 text-green-600" />,
      formats: [
        { name: "PDF Viewer", description: "View PDF documents with page navigation", path: "/viewers/pdf", icon: <FileText className="w-5 h-5 text-green-600" />, iconColor: "text-green-600" },
        { name: "DOCX Viewer", description: "View Microsoft Word documents", path: "/viewers/docx", icon: <FileText className="w-5 h-5 text-green-600" />, iconColor: "text-green-600" },
        { name: "RTF Viewer", description: "View Rich Text Format documents", path: "/viewers/rtf", icon: <FileText className="w-5 h-5 text-green-600" />, iconColor: "text-green-600" },
        { name: "ODT Viewer", description: "View OpenDocument Text files", path: "/viewers/odt", icon: <FileText className="w-5 h-5 text-green-600" />, iconColor: "text-green-600" },
        { name: "TXT Viewer", description: "View plain text files with syntax highlighting", path: "/viewers/txt", icon: <FileText className="w-5 h-5 text-green-600" />, iconColor: "text-green-600" },
        { name: "Markdown Viewer", description: "View Markdown files with rendered formatting", path: "/viewers/md", icon: <FileText className="w-5 h-5 text-green-600" />, iconColor: "text-green-600" }
      ]
    },
    {
      title: "SPREADSHEET FORMATS",
      icon: <BarChart3 className="w-6 h-6 text-purple-600" />,
      formats: [
        { name: "Excel Viewer", description: "View Excel spreadsheets with formula support", path: "/viewers/xlsx", icon: <BarChart3 className="w-5 h-5 text-purple-600" />, iconColor: "text-purple-600" },
        { name: "CSV Viewer", description: "View CSV files with table formatting", path: "/viewers/csv", icon: <BarChart3 className="w-5 h-5 text-purple-600" />, iconColor: "text-purple-600" },
        { name: "ODS Viewer", description: "View OpenDocument Spreadsheet files", path: "/viewers/ods", icon: <BarChart3 className="w-5 h-5 text-purple-600" />, iconColor: "text-purple-600" }
      ]
    },
    {
      title: "CODE & DATA FORMATS",
      icon: <Code className="w-6 h-6 text-orange-600" />,
      formats: [
        { name: "JSON Viewer", description: "View JSON files with syntax highlighting and formatting", path: "/viewers/json", icon: <Code className="w-5 h-5 text-orange-600" />, iconColor: "text-orange-600" },
        { name: "XML Viewer", description: "View XML files with tree structure", path: "/viewers/xml", icon: <Code className="w-5 h-5 text-orange-600" />, iconColor: "text-orange-600" },
        { name: "HTML Viewer", description: "View HTML files with rendered content", path: "/viewers/html", icon: <Code className="w-5 h-5 text-orange-600" />, iconColor: "text-orange-600" },
        { name: "CSS Viewer", description: "View CSS files with syntax highlighting", path: "/viewers/css", icon: <Code className="w-5 h-5 text-orange-600" />, iconColor: "text-orange-600" },
        { name: "JavaScript Viewer", description: "View JS files with syntax highlighting", path: "/viewers/js", icon: <Code className="w-5 h-5 text-orange-600" />, iconColor: "text-orange-600" },
        { name: "Python Viewer", description: "View Python files with syntax highlighting", path: "/viewers/py", icon: <Code className="w-5 h-5 text-orange-600" />, iconColor: "text-orange-600" }
      ]
    },
    {
      title: "RAW CAMERA FORMATS",
      icon: <Image className="w-6 h-6 text-red-600" />,
      formats: [
        { name: "NEF Viewer", description: "View Nikon raw camera files", path: "/viewers/nef", icon: <Camera className="w-5 h-5 text-red-600" />, iconColor: "text-red-600" },
        { name: "CR2 Viewer", description: "View Canon raw camera files", path: "/viewers/cr2", icon: <Camera className="w-5 h-5 text-red-600" />, iconColor: "text-red-600" },
        { name: "DCR Viewer", description: "View Kodak raw camera files", path: "/viewers/dcr", icon: <Camera className="w-5 h-5 text-red-600" />, iconColor: "text-red-600" },
        { name: "X3F Viewer", description: "View Sigma raw camera files", path: "/viewers/x3f", icon: <Camera className="w-5 h-5 text-red-600" />, iconColor: "text-red-600" },
        { name: "ARW Viewer", description: "View Sony raw camera files", path: "/viewers/arw", icon: <Camera className="w-5 h-5 text-red-600" />, iconColor: "text-red-600" },
        { name: "RAF Viewer", description: "View Fuji raw camera files", path: "/viewers/raf", icon: <Camera className="w-5 h-5 text-red-600" />, iconColor: "text-red-600" },
        { name: "ORF Viewer", description: "View Olympus raw camera files", path: "/viewers/orf", icon: <Camera className="w-5 h-5 text-red-600" />, iconColor: "text-red-600" },
        { name: "DNG Viewer", description: "View Adobe Digital Negative files", path: "/viewers/dng", icon: <Camera className="w-5 h-5 text-red-600" />, iconColor: "text-red-600" },
        { name: "PEF Viewer", description: "View Pentax raw camera files", path: "/viewers/pef", icon: <Camera className="w-5 h-5 text-red-600" />, iconColor: "text-red-600" }
      ]
    }
  ];

  // Filter categories based on search query
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) {
      return viewerCategories;
    }

    const query = searchQuery.toLowerCase();
    
    return viewerCategories
      .map(category => ({
        ...category,
        formats: category.formats.filter(viewer => {
          const searchableText = `${viewer.name} ${viewer.description}`.toLowerCase();
          return searchableText.includes(query);
        })
      }))
      .filter(category => category.formats.length > 0);
  }, [searchQuery, viewerCategories]);

  const handleBack = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-3 sm:py-4">
            <button
              onClick={handleBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Back to Home</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3 mb-4 sm:mb-6">
            <div className="p-2 sm:p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
              <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">File Viewers</h1>
          </div>
          <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-3xl mx-auto">
            View and preview files in your browser without downloading. 
            Support for images, documents, spreadsheets, and more.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 sm:mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search viewers... (e.g., PDF, JPEG, Excel, JSON)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 text-sm sm:text-base lg:text-lg border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="mt-2 text-xs sm:text-sm text-gray-600 text-center">
                Found {filteredCategories.reduce((sum, cat) => sum + cat.formats.length, 0)} viewer(s)
              </p>
            )}
          </div>
        </div>

        {/* Viewer Categories */}
        <div className="space-y-8 sm:space-y-12">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 mb-4 sm:mb-6">
                {category.icon}
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{category.title}</h2>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                {category.formats.map((viewer, formatIndex) => (
                  <div
                    key={formatIndex}
                    className={`px-3 sm:px-6 py-3 sm:py-4 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors ${
                      formatIndex === 0 ? 'rounded-t-lg' : ''
                    } ${formatIndex === category.formats.length - 1 ? 'rounded-b-lg' : ''}`}
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
                      <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 w-full sm:w-auto">
                        <div className={`flex-shrink-0 p-2 rounded-lg ${
                          viewer.iconColor === 'text-blue-600' ? 'bg-blue-100' :
                          viewer.iconColor === 'text-green-600' ? 'bg-green-100' :
                          viewer.iconColor === 'text-purple-600' ? 'bg-purple-100' :
                          viewer.iconColor === 'text-orange-600' ? 'bg-orange-100' :
                          viewer.iconColor === 'text-red-600' ? 'bg-red-100' : 'bg-gray-100'
                        }`}>
                          {viewer.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-3 mb-1">
                            <h3 className="text-base sm:text-lg font-semibold text-gray-900">{viewer.name}</h3>
                          </div>
                          <p className="text-gray-600 text-xs sm:text-sm">{viewer.description}</p>
                        </div>
                      </div>
                      <div className="w-full sm:w-auto sm:ml-4">
                        <a
                          href={viewer.path}
                          className="inline-flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors w-full sm:w-auto"
                        >
                          <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>View Now</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
          ) : (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No viewers found</h3>
              <p className="text-gray-600 mb-4">
                Try searching for something like "PDF", "JPEG", "Excel", or "JSON"
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear search
              </button>
            </div>
          )}
        </div>

        {/* Features Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Why Choose Our Viewers?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Instant Preview</h3>
              <p className="text-gray-600">View files instantly without downloading or installing software</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Secure & Private</h3>
              <p className="text-gray-600">Files are processed locally and never stored on our servers</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Universal Support</h3>
              <p className="text-gray-600">Support for 50+ file formats across all categories</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl">
                <RefreshCw className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">MorphyIMG</h2>
            </div>
            
            <p className="text-gray-300 mb-6">
              The ultimate file conversion and viewing platform for professionals and everyday users.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
