import React, { useState, useMemo } from 'react';
import { Eye, ArrowLeft, FileText, Image, BarChart3, Code, RefreshCw, Search, Box } from 'lucide-react';
import { Header } from './Header';

interface ViewerFormat {
  name: string;
  description: string;
  path: string;
  category: string;
  icon: React.ReactNode;
}

export const ViewersHub: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const viewerCategories = [
    {
      title: "STANDARD IMAGE FORMATS",
      icon: <Image className="w-6 h-6 text-blue-600" />,
      formats: [
        { name: "JPEG Viewer", description: "View JPEG images with zoom and pan controls", path: "/viewers/jpg", category: "Image", icon: <Image className="w-5 h-5" /> },
        { name: "PNG Viewer", description: "View PNG images with transparency support", path: "/viewers/png", category: "Image", icon: <Image className="w-5 h-5" /> },
        { name: "WebP Viewer", description: "View WebP images with modern compression", path: "/viewers/webp", category: "Image", icon: <Image className="w-5 h-5" /> },
        { name: "GIF Viewer", description: "View animated GIF images with playback controls", path: "/viewers/gif", category: "Image", icon: <Image className="w-5 h-5" /> },
        { name: "SVG Viewer", description: "View scalable vector graphics with zoom", path: "/viewers/svg", category: "Image", icon: <Image className="w-5 h-5" /> },
        { name: "TIFF Viewer", description: "View TIFF images with multi-page support", path: "/viewers/tiff", category: "Image", icon: <Image className="w-5 h-5" /> },
        { name: "BMP Viewer", description: "View bitmap images with color depth support", path: "/viewers/bmp", category: "Image", icon: <Image className="w-5 h-5" /> },
        { name: "ICO Viewer", description: "View Windows icon files with multiple sizes", path: "/viewers/ico", category: "Image", icon: <Image className="w-5 h-5" /> },
        { name: "HEIC Viewer", description: "View HEIC images from modern cameras", path: "/viewers/heic", category: "Image", icon: <Image className="w-5 h-5" /> },
        { name: "AVIF Viewer", description: "View AVIF images with next-gen compression", path: "/viewers/avif", category: "Image", icon: <Image className="w-5 h-5" /> }
      ]
    },
    {
      title: "DOCUMENT FORMATS",
      icon: <FileText className="w-6 h-6 text-green-600" />,
      formats: [
        { name: "PDF Viewer", description: "View PDF documents with page navigation", path: "/viewers/pdf", category: "Document", icon: <FileText className="w-5 h-5" /> },
        { name: "DOCX Viewer", description: "View Microsoft Word documents", path: "/viewers/docx", category: "Document", icon: <FileText className="w-5 h-5" /> },
        { name: "RTF Viewer", description: "View Rich Text Format documents", path: "/viewers/rtf", category: "Document", icon: <FileText className="w-5 h-5" /> },
        { name: "ODT Viewer", description: "View OpenDocument Text files", path: "/viewers/odt", category: "Document", icon: <FileText className="w-5 h-5" /> },
        { name: "TXT Viewer", description: "View plain text files with syntax highlighting", path: "/viewers/txt", category: "Document", icon: <FileText className="w-5 h-5" /> },
        { name: "Markdown Viewer", description: "View Markdown files with rendered formatting", path: "/viewers/md", category: "Document", icon: <FileText className="w-5 h-5" /> }
      ]
    },
    {
      title: "PRESENTATION FORMATS",
      icon: <FileText className="w-6 h-6 text-orange-600" />,
      formats: [
        { name: "PPT/PPTX Viewer", description: "View PowerPoint presentations (PPT & PPTX)", path: "/viewers/ppt", category: "Presentation", icon: <FileText className="w-5 h-5" /> },
        { name: "PPS/PPSX Viewer", description: "View PowerPoint Slide Show files (PPS & PPSX)", path: "/viewers/pps", category: "Presentation", icon: <FileText className="w-5 h-5" /> },
        { name: "POT Viewer", description: "View PowerPoint Template files", path: "/viewers/pot", category: "Presentation", icon: <FileText className="w-5 h-5" /> },
        { name: "ODP Viewer", description: "View OpenDocument Presentation files", path: "/viewers/odp", category: "Presentation", icon: <FileText className="w-5 h-5" /> },
        { name: "OTP Viewer", description: "View OpenDocument Presentation Template files", path: "/viewers/otp", category: "Presentation", icon: <FileText className="w-5 h-5" /> },
        { name: "SDD Viewer", description: "View StarOffice Presentation files (legacy)", path: "/viewers/sdd", category: "Presentation", icon: <FileText className="w-5 h-5" /> }
      ]
    },
    {
      title: "SPREADSHEET FORMATS",
      icon: <BarChart3 className="w-6 h-6 text-purple-600" />,
      formats: [
        { name: "Excel Viewer", description: "View Excel spreadsheets with formula support", path: "/viewers/xlsx", category: "Spreadsheet", icon: <BarChart3 className="w-5 h-5" /> },
        { name: "CSV Viewer", description: "View CSV files with table formatting", path: "/viewers/csv", category: "Spreadsheet", icon: <BarChart3 className="w-5 h-5" /> },
        { name: "ODS Viewer", description: "View OpenDocument Spreadsheet files", path: "/viewers/ods", category: "Spreadsheet", icon: <BarChart3 className="w-5 h-5" /> }
      ]
    },
    {
      title: "CODE & DATA FORMATS",
      icon: <Code className="w-6 h-6 text-orange-600" />,
      formats: [
        { name: "JSON Viewer", description: "View JSON files with syntax highlighting and validation", path: "/viewers/json", category: "Code", icon: <Code className="w-5 h-5" /> },
        { name: "XML Viewer", description: "View XML files with syntax highlighting and validation", path: "/viewers/xml", category: "Code", icon: <Code className="w-5 h-5" /> },
        { name: "HTML Viewer", description: "View HTML files with syntax highlighting and validation", path: "/viewers/html", category: "Code", icon: <Code className="w-5 h-5" /> },
        { name: "CSS Viewer", description: "View CSS files with syntax highlighting and rule analysis", path: "/viewers/css", category: "Code", icon: <Code className="w-5 h-5" /> },
        { name: "JavaScript Viewer", description: "View JS files with syntax highlighting and code analysis", path: "/viewers/js", category: "Code", icon: <Code className="w-5 h-5" /> },
        { name: "Python Viewer", description: "View Python files with syntax highlighting and code analysis", path: "/viewers/py", category: "Code", icon: <Code className="w-5 h-5" /> },
        { name: "SX Viewer", description: "View Stat Studio Program files with syntax highlighting", path: "/viewers/sx", category: "Code", icon: <Code className="w-5 h-5" /> }
      ]
    },
    {
      title: "3D MODEL FORMATS",
      icon: <Box className="w-6 h-6 text-indigo-600" />,
      formats: [
        { name: "STL Viewer", description: "View 3D models with interactive rotation and zoom", path: "/viewers/stl", category: "3D Model", icon: <Box className="w-5 h-5" /> }
      ]
    },
    {
      title: "RAW CAMERA FORMATS",
      icon: <Image className="w-6 h-6 text-red-600" />,
      formats: [
        { name: "NEF Viewer", description: "View Nikon raw camera files with RAW processing", path: "/viewers/nef", category: "Raw", icon: <Image className="w-5 h-5" /> },
        { name: "CR2 Viewer", description: "View Canon raw camera files with RAW processing", path: "/viewers/cr2", category: "Raw", icon: <Image className="w-5 h-5" /> },
        { name: "DCR Viewer", description: "View Kodak raw camera files with RAW processing", path: "/viewers/dcr", category: "Raw", icon: <Image className="w-5 h-5" /> },
        { name: "X3F Viewer", description: "View Sigma Foveon raw camera files with RAW processing", path: "/viewers/x3f", category: "Raw", icon: <Image className="w-5 h-5" /> },
        { name: "ARW Viewer", description: "View Sony Alpha raw camera files with RAW processing", path: "/viewers/arw", category: "Raw", icon: <Image className="w-5 h-5" /> },
        { name: "RAF Viewer", description: "View Fujifilm X-Trans raw camera files with RAW processing", path: "/viewers/raf", category: "Raw", icon: <Image className="w-5 h-5" /> },
        { name: "ORF Viewer", description: "View Olympus & OM System raw camera files with RAW processing", path: "/viewers/orf", category: "Raw", icon: <Image className="w-5 h-5" /> },
        { name: "DNG Viewer", description: "View Adobe Digital Negative universal RAW files with RAW processing", path: "/viewers/dng", category: "Raw", icon: <Image className="w-5 h-5" /> },
        { name: "PEF Viewer", description: "View Pentax raw camera files with RAW processing", path: "/viewers/pef", category: "Raw", icon: <Image className="w-5 h-5" /> }
      ]
    }
  ];

  // Filter categories based on search query
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) {
      return viewerCategories;
    }

    const query = searchQuery.toLowerCase();
    return viewerCategories.map(category => ({
      ...category,
      formats: category.formats.filter(format => 
        format.name.toLowerCase().includes(query) ||
        format.description.toLowerCase().includes(query) ||
        format.category.toLowerCase().includes(query)
      )
    })).filter(category => category.formats.length > 0);
  }, [searchQuery, viewerCategories]);

  // Count total viewers
  const totalViewers = useMemo(() => {
    return viewerCategories.reduce((sum, cat) => sum + cat.formats.length, 0);
  }, [viewerCategories]);

  const filteredCount = useMemo(() => {
    return filteredCategories.reduce((sum, cat) => sum + cat.formats.length, 0);
  }, [filteredCategories]);

  const handleBack = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4">
            <button
              onClick={handleBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">File Viewers</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            View and preview files in your browser without downloading. 
            Support for images, documents, spreadsheets, and more.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search viewers... (e.g., PDF, JPEG, NEF)"
                className="block w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                >
                  <span className="text-sm font-medium">Clear</span>
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="mt-2 text-sm text-gray-600">
                Showing results for "{searchQuery}"
              </p>
            )}
          </div>
        </div>

        {/* Results Count */}
        {searchQuery && (
          <div className="mb-8 text-center">
            <p className="text-lg text-gray-700">
              Found <span className="font-bold text-blue-600">{filteredCount}</span> viewer{filteredCount !== 1 ? 's' : ''} 
              {filteredCount < totalViewers && <span className="text-gray-500"> out of {totalViewers}</span>}
            </p>
          </div>
        )}

        {/* No Results */}
        {searchQuery && filteredCategories.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border-2 border-dashed border-gray-300">
            <Search className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">No viewers found</h3>
            <p className="text-gray-600 mb-4">Try searching with different keywords like "PDF", "Image", or "RAW"</p>
            <button
              onClick={() => setSearchQuery('')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Viewer Categories */}
        <div className="space-y-12">
          {filteredCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center space-x-3 mb-6">
                {category.icon}
                <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                {category.formats.map((viewer, formatIndex) => (
                  <div
                    key={formatIndex}
                    className={`px-6 py-4 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors ${
                      formatIndex === 0 ? 'rounded-t-lg' : ''
                    } ${formatIndex === category.formats.length - 1 ? 'rounded-b-lg' : ''}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          {viewer.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-1">
                            <h3 className="text-lg font-semibold text-gray-900">{viewer.name}</h3>
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                              {viewer.category}
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm">{viewer.description}</p>
                        </div>
                      </div>
                      <div className="ml-4">
                        {(viewer.path === '/viewers/jpg' || viewer.path === '/viewers/png' || viewer.path === '/viewers/webp' || viewer.path === '/viewers/gif' || viewer.path === '/viewers/svg' || viewer.path === '/viewers/tiff' || viewer.path === '/viewers/bmp' || viewer.path === '/viewers/ico' || viewer.path === '/viewers/heic' || viewer.path === '/viewers/avif' || viewer.path === '/viewers/pdf' || viewer.path === '/viewers/rtf' || viewer.path === '/viewers/txt' || viewer.path === '/viewers/md' || viewer.path === '/viewers/docx' || viewer.path === '/viewers/odt' || viewer.path === '/viewers/odp' || viewer.path === '/viewers/otp' || viewer.path === '/viewers/pot' || viewer.path === '/viewers/pps' || viewer.path === '/viewers/ppt' || viewer.path === '/viewers/sdd' || viewer.path === '/viewers/sx' || viewer.path === '/viewers/stl' || viewer.path === '/viewers/xlsx' || viewer.path === '/viewers/csv' || viewer.path === '/viewers/ods' || viewer.path === '/viewers/json' || viewer.path === '/viewers/xml' || viewer.path === '/viewers/html' || viewer.path === '/viewers/css' || viewer.path === '/viewers/js' || viewer.path === '/viewers/py' || viewer.path === '/viewers/nef' || viewer.path === '/viewers/cr2' || viewer.path === '/viewers/dcr' || viewer.path === '/viewers/x3f' || viewer.path === '/viewers/arw' || viewer.path === '/viewers/raf' || viewer.path === '/viewers/orf' || viewer.path === '/viewers/dng' || viewer.path === '/viewers/pef') ? (
                          <a
                            href={viewer.path}
                            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                          >
                            <Eye className="w-4 h-4" />
                            <span>Open Viewer</span>
                          </a>
                        ) : (
                          <div className="inline-flex items-center space-x-2 bg-gray-400 text-white px-4 py-2 rounded-lg text-sm font-medium cursor-not-allowed">
                            <Eye className="w-4 h-4" />
                            <span>Coming Soon</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
