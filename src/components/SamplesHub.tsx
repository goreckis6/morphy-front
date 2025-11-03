import React, { useState, useMemo } from 'react';
import { FileText, Archive, FileSpreadsheet, ArrowLeft, Search, Download } from 'lucide-react';
import { Header } from './Header';

export const SamplesHub: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const sampleCategories = [
    {
      title: "DOCUMENT SAMPLES",
      icon: <FileText className="w-6 h-6 text-green-600" />,
      formats: [
        { 
          name: "DOCX Sample Files", 
          description: "Download free DOCX sample files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing document conversion tools.",
          path: "/samples/sample-docx",
          format: "DOCX",
          icon: <FileText className="w-5 h-5 text-green-600" />,
          iconColor: "text-green-600"
        },
        { 
          name: "DOC Sample Files", 
          description: "Download free DOC sample files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing document conversion tools.",
          path: "/samples/sample-doc",
          format: "DOC",
          icon: <FileText className="w-5 h-5 text-green-600" />,
          iconColor: "text-green-600"
        },
        { 
          name: "PDF Sample Files", 
          description: "Download free PDF sample files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing document conversion tools.",
          path: "/samples/sample-pdf",
          format: "PDF",
          icon: <FileText className="w-5 h-5 text-blue-600" />,
          iconColor: "text-blue-600"
        }
      ]
    },
    {
      title: "DATA SAMPLES",
      icon: <FileSpreadsheet className="w-6 h-6 text-purple-600" />,
      formats: [
        { 
          name: "CSV Sample Files", 
          description: "Download free CSV sample data files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing CSV conversion and data processing tools.",
          path: "/samples/sample-csv",
          format: "CSV",
          icon: <FileSpreadsheet className="w-5 h-5 text-purple-600" />,
          iconColor: "text-purple-600"
        },
        { 
          name: "XLS Sample Files", 
          description: "Download free XLS sample Excel spreadsheet files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Excel conversion and data processing tools.",
          path: "/samples/sample-xls",
          format: "XLS",
          icon: <FileSpreadsheet className="w-5 h-5 text-green-600" />,
          iconColor: "text-green-600"
        },
        { 
          name: "XLSX Sample Files", 
          description: "Download free XLSX sample Excel spreadsheet files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing Excel conversion and data processing tools.",
          path: "/samples/sample-xlsx",
          format: "XLSX",
          icon: <FileSpreadsheet className="w-5 h-5 text-blue-600" />,
          iconColor: "text-blue-600"
        }
      ]
    },
    {
      title: "ARCHIVE SAMPLES",
      icon: <Archive className="w-6 h-6 text-orange-600" />,
      formats: [
        { 
          name: "7Z Sample Files", 
          description: "Download free 7Z sample archive files for testing. Multiple file sizes available: 100 KB, 1 MB, 5 MB, 50 MB, and 100 MB. Perfect for testing archive conversion and extraction tools.",
          path: "/samples/sample-7z",
          format: "7Z",
          icon: <Archive className="w-5 h-5 text-orange-600" />,
          iconColor: "text-orange-600"
        }
      ]
    }
  ];

  // Filter categories based on search query
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) {
      return sampleCategories;
    }

    const query = searchQuery.toLowerCase();
    return sampleCategories.map(category => ({
      ...category,
      formats: category.formats.filter(format => {
        const searchableText = `${format.name} ${format.description} ${format.format}`.toLowerCase();
        return searchableText.includes(query);
      })
    })).filter(category => category.formats.length > 0);
  }, [searchQuery]);

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
            <div className="p-2 sm:p-3 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl">
              <Download className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Sample Files</h1>
          </div>
          <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Download free sample files for testing. Multiple file sizes available for various formats to test your conversion and processing tools.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 sm:mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search sample files... (e.g., DOCX, JPG, PDF)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 text-sm sm:text-base lg:text-lg border-2 border-gray-300 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
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
                Found {filteredCategories.reduce((sum, cat) => sum + cat.formats.length, 0)} sample file(s)
              </p>
            )}
          </div>
        </div>

        {/* Sample Categories */}
        <div className="space-y-8 sm:space-y-12">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 mb-4 sm:mb-6">
                {category.icon}
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{category.title}</h2>
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                {category.formats.map((format, formatIndex) => (
                  <div
                    key={formatIndex}
                    className={`px-3 sm:px-6 py-3 sm:py-4 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors ${
                      formatIndex === 0 ? 'rounded-t-lg' : ''
                    } ${formatIndex === category.formats.length - 1 ? 'rounded-b-lg' : ''}`}
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
                      <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 w-full sm:w-auto flex-1">
                        <div className={`flex-shrink-0 p-2 rounded-lg ${
                          format.iconColor === 'text-green-600' ? 'bg-green-100' :
                          format.iconColor === 'text-blue-600' ? 'bg-blue-100' :
                          format.iconColor === 'text-purple-600' ? 'bg-purple-100' :
                          format.iconColor === 'text-orange-600' ? 'bg-orange-100' :
                          format.iconColor === 'text-red-600' ? 'bg-red-100' :
                          format.iconColor === 'text-teal-600' ? 'bg-teal-100' : 'bg-gray-100'
                        }`}>
                          {format.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-3 mb-1">
                            <h3 className="text-base sm:text-lg font-semibold text-gray-900">{format.name}</h3>
                            <div className="flex items-center space-x-1 text-xs sm:text-sm text-gray-500">
                              <span className={`px-2 py-1 rounded text-xs font-medium ${
                                format.iconColor === 'text-green-600' ? 'bg-green-100 text-green-800' :
                                format.iconColor === 'text-blue-600' ? 'bg-blue-100 text-blue-800' :
                                format.iconColor === 'text-purple-600' ? 'bg-purple-100 text-purple-800' :
                                format.iconColor === 'text-orange-600' ? 'bg-orange-100 text-orange-800' :
                                format.iconColor === 'text-red-600' ? 'bg-red-100 text-red-800' :
                                format.iconColor === 'text-teal-600' ? 'bg-teal-100 text-teal-800' : 'bg-gray-100 text-gray-800'
                              }`}>
                                {format.format}
                              </span>
                            </div>
                          </div>
                          <p className="text-gray-600 text-xs sm:text-sm">{format.description}</p>
                        </div>
                      </div>
                      <div className="w-full sm:w-auto sm:ml-4">
                        <a
                          href={format.path}
                          className="inline-flex items-center justify-center space-x-2 bg-teal-600 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-teal-700 transition-colors w-full sm:w-auto"
                        >
                          <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>Download</span>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No sample files found</h3>
              <p className="text-gray-600 mb-4">
                Try searching for something like "DOCX" or "JPG"
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="text-teal-600 hover:text-teal-700 font-medium"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl">
                <Download className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">MorphyIMG</h2>
            </div>
            
            <p className="text-gray-300 mb-6">
              Download free sample files for testing conversions, compression, and viewing tools.
            </p>
            
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-300">
              <span>© 2025 MorphyIMG. Built for file format professionals.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

