import React, { useState, useMemo } from 'react';
import { RefreshCw, ArrowLeft, FileText, Image, Database, Code, Download, Search } from 'lucide-react';
import { Header } from './Header';

interface ConversionFormat {
  name: string;
  description: string;
  path: string;
  inputFormat: string;
  outputFormat: string;
}

export const ConverterHub: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const conversionCategories = [
    {
      title: "IMAGE CONVERTERS",
      formats: [
        { 
          name: "CR2 to ICO Converter", 
          description: "Convert Canon CR2 raw images to ICO format for high-quality Windows icons",
          path: "/convert/cr2-to-ico",
          inputFormat: "CR2",
          outputFormat: "ICO"
        },
        { 
          name: "CR2 to WebP Converter", 
          description: "Convert Canon CR2 raw images to WebP format for web optimization",
          path: "/convert/cr2-to-webp",
          inputFormat: "CR2",
          outputFormat: "WebP"
        },
        { 
          name: "HEIC to SVG Converter", 
          description: "Convert Apple HEIC images to SVG format for scalable vector graphics",
          path: "/convert/heic-to-svg",
          inputFormat: "HEIC",
          outputFormat: "SVG"
        }
      ]
    },
    {
      title: "DOCUMENT CONVERTERS",
      formats: [
        { 
          name: "CSV to DOCX Converter", 
          description: "Convert CSV files to Microsoft Word DOCX format with modern formatting",
          path: "/convert/csv-to-docx",
          inputFormat: "CSV",
          outputFormat: "DOCX"
        },
        { 
          name: "CSV to EPUB Converter", 
          description: "Convert CSV files to EPUB format for e-books and digital publishing",
          path: "/convert/csv-to-epub",
          inputFormat: "CSV",
          outputFormat: "EPUB"
        },
        { 
          name: "CSV to HTML Converter", 
          description: "Convert CSV files to HTML format with styled tables for web display",
          path: "/convert/csv-to-html",
          inputFormat: "CSV",
          outputFormat: "HTML"
        },
        { 
          name: "CSV to MD Converter", 
          description: "Convert CSV files to Markdown format for documentation and GitHub",
          path: "/convert/csv-to-md",
          inputFormat: "CSV",
          outputFormat: "MD"
        },
        { 
          name: "CSV to MOBI Converter", 
          description: "Convert CSV files to MOBI format for Kindle e-readers",
          path: "/convert/csv-to-mobi",
          inputFormat: "CSV",
          outputFormat: "MOBI"
        },
        { 
          name: "CSV to ODP Converter", 
          description: "Convert CSV files to OpenDocument Presentation format for slides",
          path: "/convert/csv-to-odp",
          inputFormat: "CSV",
          outputFormat: "ODP"
        },
        { 
          name: "CSV to ODT Converter", 
          description: "Convert CSV files to OpenDocument Text format for documents",
          path: "/convert/csv-to-odt",
          inputFormat: "CSV",
          outputFormat: "ODT"
        },
        { 
          name: "CSV to PDF Converter", 
          description: "Convert CSV files to PDF format for reports and sharing",
          path: "/convert/csv-to-pdf",
          inputFormat: "CSV",
          outputFormat: "PDF"
        },
        { 
          name: "CSV to PPT Converter", 
          description: "Convert CSV files to PowerPoint PPT format for presentations",
          path: "/convert/csv-to-ppt",
          inputFormat: "CSV",
          outputFormat: "PPT"
        },
        { 
          name: "CSV to PPTX Converter", 
          description: "Convert CSV files to PowerPoint PPTX format for modern presentations",
          path: "/convert/csv-to-pptx",
          inputFormat: "CSV",
          outputFormat: "PPTX"
        },
        { 
          name: "CSV to RTF Converter", 
          description: "Convert CSV files to Rich Text Format for cross-platform documents",
          path: "/convert/csv-to-rtf",
          inputFormat: "CSV",
          outputFormat: "RTF"
        },
        { 
          name: "CSV to TXT Converter", 
          description: "Convert CSV files to plain text format for universal compatibility",
          path: "/convert/csv-to-txt",
          inputFormat: "CSV",
          outputFormat: "TXT"
        },
        { 
          name: "CSV to XLS Converter", 
          description: "Convert CSV files to Excel XLS format for spreadsheet applications",
          path: "/convert/csv-to-xls",
          inputFormat: "CSV",
          outputFormat: "XLS"
        },
        { 
          name: "CSV to XLSX Converter", 
          description: "Convert CSV files to Excel XLSX format for modern spreadsheets",
          path: "/convert/csv-to-xlsx",
          inputFormat: "CSV",
          outputFormat: "XLSX"
        }
      ]
    },
    {
      title: "DEVELOPER TOOLS (CSV)",
      formats: [
        { 
          name: "CSV to JSON Converter", 
          description: "Convert CSV files to JSON format for web applications and APIs",
          path: "/convert/csv-to-json",
          inputFormat: "CSV",
          outputFormat: "JSON"
        },
        { 
          name: "CSV to NDJSON Converter", 
          description: "Convert CSV files to Newline Delimited JSON for streaming data",
          path: "/convert/csv-to-ndjson",
          inputFormat: "CSV",
          outputFormat: "NDJSON"
        },
        { 
          name: "CSV to Parquet Converter", 
          description: "Convert CSV files to Apache Parquet format for big data analytics",
          path: "/convert/csv-to-parquet",
          inputFormat: "CSV",
          outputFormat: "Parquet"
        },
        { 
          name: "CSV to SQL Converter", 
          description: "Convert CSV files to SQL format for database operations",
          path: "/convert/csv-to-sql",
          inputFormat: "CSV",
          outputFormat: "SQL"
        },
        { 
          name: "CSV to TOML Converter", 
          description: "Convert CSV files to TOML format for configuration files",
          path: "/convert/csv-to-toml",
          inputFormat: "CSV",
          outputFormat: "TOML"
        },
        { 
          name: "CSV to XML Converter", 
          description: "Convert CSV files to XML format for data exchange",
          path: "/convert/csv-to-xml",
          inputFormat: "CSV",
          outputFormat: "XML"
        },
        { 
          name: "CSV to YAML Converter", 
          description: "Convert CSV files to YAML format for configuration and data serialization",
          path: "/convert/csv-to-yaml",
          inputFormat: "CSV",
          outputFormat: "YAML"
        }
      ]
    },
    {
      title: "IMAGE CONVERTERS (RAW)",
      formats: [
        { 
          name: "DNG to WebP Converter", 
          description: "Convert Adobe DNG raw images to WebP format for web optimization",
          path: "/convert/dng-to-webp",
          inputFormat: "DNG",
          outputFormat: "WebP"
        }
      ]
    },
    {
      title: "IMAGE CONVERTERS (VECTOR)",
      formats: [
        { 
          name: "EPS to WebP Converter", 
          description: "Convert EPS files to WebP format for web optimization",
          path: "/convert/eps-to-webp",
          inputFormat: "EPS",
          outputFormat: "WebP"
        }
      ]
    },
    {
      title: "E-BOOK CONVERTERS (EPUB)",
      formats: [
        { 
          name: "EPUB to CSV Converter", 
          description: "Convert EPUB e-book files to CSV format for data analysis",
          path: "/convert/epub-to-csv",
          inputFormat: "EPUB",
          outputFormat: "CSV"
        },
        { 
          name: "EPUB to DOC Converter", 
          description: "Convert EPUB e-books to Microsoft Word DOC format for editing",
          path: "/convert/epub-to-doc",
          inputFormat: "EPUB",
          outputFormat: "DOC"
        },
        { 
          name: "EPUB to DOCX Converter", 
          description: "Convert EPUB e-books to Microsoft Word DOCX format for modern editing",
          path: "/convert/epub-to-docx",
          inputFormat: "EPUB",
          outputFormat: "DOCX"
        },
        { 
          name: "EPUB to HTML Converter", 
          description: "Convert EPUB e-books to HTML format for web display",
          path: "/convert/epub-to-html",
          inputFormat: "EPUB",
          outputFormat: "HTML"
        },
        { 
          name: "EPUB to MD Converter", 
          description: "Convert EPUB e-books to Markdown format for documentation",
          path: "/convert/epub-to-md",
          inputFormat: "EPUB",
          outputFormat: "MD"
        },
        { 
          name: "EPUB to MOBI Converter", 
          description: "Convert EPUB e-books to MOBI format for Kindle e-readers",
          path: "/convert/epub-to-mobi",
          inputFormat: "EPUB",
          outputFormat: "MOBI"
        },
        { 
          name: "EPUB to ODP Converter", 
          description: "Convert EPUB e-books to OpenDocument Presentation format",
          path: "/convert/epub-to-odp",
          inputFormat: "EPUB",
          outputFormat: "ODP"
        },
        { 
          name: "EPUB to ODT Converter", 
          description: "Convert EPUB e-books to OpenDocument Text format",
          path: "/convert/epub-to-odt",
          inputFormat: "EPUB",
          outputFormat: "ODT"
        },
        { 
          name: "EPUB to PDF Converter", 
          description: "Convert EPUB e-books to PDF format for universal sharing",
          path: "/convert/epub-to-pdf",
          inputFormat: "EPUB",
          outputFormat: "PDF"
        },
        { 
          name: "EPUB to PPT Converter", 
          description: "Convert EPUB e-books to PowerPoint PPT format for presentations",
          path: "/convert/epub-to-ppt",
          inputFormat: "EPUB",
          outputFormat: "PPT"
        },
        { 
          name: "EPUB to PPTX Converter", 
          description: "Convert EPUB e-books to PowerPoint PPTX format for modern presentations",
          path: "/convert/epub-to-pptx",
          inputFormat: "EPUB",
          outputFormat: "PPTX"
        },
        { 
          name: "EPUB to RTF Converter", 
          description: "Convert EPUB e-books to Rich Text Format for cross-platform compatibility",
          path: "/convert/epub-to-rtf",
          inputFormat: "EPUB",
          outputFormat: "RTF"
        },
        { 
          name: "EPUB to TXT Converter", 
          description: "Convert EPUB e-books to plain text format for universal compatibility",
          path: "/convert/epub-to-txt",
          inputFormat: "EPUB",
          outputFormat: "TXT"
        },
        { 
          name: "EPUB to XLSX Converter", 
          description: "Convert EPUB e-books to Excel XLSX format for data analysis",
          path: "/convert/epub-to-xlsx",
          inputFormat: "EPUB",
          outputFormat: "XLSX"
        }
      ]
    },
    {
      title: "DOCUMENT CONVERTERS (DOC)",
      formats: [
        { 
          name: "DOC to CSV Converter", 
          description: "Convert Microsoft Word DOC files to CSV format for data analysis",
          path: "/convert/doc-to-csv",
          inputFormat: "DOC",
          outputFormat: "CSV"
        },
        { 
          name: "DOC to EPUB Converter", 
          description: "Convert DOC files to EPUB format for e-books and digital publishing",
          path: "/convert/doc-to-epub",
          inputFormat: "DOC",
          outputFormat: "EPUB"
        },
        { 
          name: "DOC to MOBI Converter", 
          description: "Convert DOC files to MOBI format for Kindle e-readers",
          path: "/convert/doc-to-mobi",
          inputFormat: "DOC",
          outputFormat: "MOBI"
        },
        { 
          name: "DOC to ODT Converter", 
          description: "Convert DOC files to OpenDocument Text format for cross-platform compatibility",
          path: "/convert/doc-to-odt",
          inputFormat: "DOC",
          outputFormat: "ODT"
        },
        { 
          name: "DOC to TXT Converter", 
          description: "Convert DOC files to plain text format for universal compatibility",
          path: "/convert/doc-to-txt",
          inputFormat: "DOC",
          outputFormat: "TXT"
        }
      ]
    },
    {
      title: "DOCUMENT CONVERTERS (DOCX)",
      formats: [
        { 
          name: "DOCX to CSV Converter", 
          description: "Convert Microsoft Word DOCX files to CSV format for data analysis",
          path: "/convert/docx-to-csv",
          inputFormat: "DOCX",
          outputFormat: "CSV"
        },
        { 
          name: "DOCX to EPUB Converter", 
          description: "Convert DOCX files to EPUB format for e-books and digital publishing",
          path: "/convert/docx-to-epub",
          inputFormat: "DOCX",
          outputFormat: "EPUB"
        },
        { 
          name: "DOCX to MOBI Converter", 
          description: "Convert DOCX files to MOBI format for Kindle e-readers",
          path: "/convert/docx-to-mobi",
          inputFormat: "DOCX",
          outputFormat: "MOBI"
        },
        { 
          name: "DOCX to ODT Converter", 
          description: "Convert DOCX files to OpenDocument Text format for cross-platform compatibility",
          path: "/convert/docx-to-odt",
          inputFormat: "DOCX",
          outputFormat: "ODT"
        },
        { 
          name: "DOCX to TXT Converter", 
          description: "Convert DOCX files to plain text format for universal compatibility",
          path: "/convert/docx-to-txt",
          inputFormat: "DOCX",
          outputFormat: "TXT"
        }
      ]
    }
  ];

  // Filter categories based on search query
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) {
      return conversionCategories;
    }

    const query = searchQuery.toLowerCase();
    
    return conversionCategories
      .map(category => ({
        ...category,
        formats: category.formats.filter(format => {
          const searchableText = `${format.name} ${format.description} ${format.inputFormat} ${format.outputFormat}`.toLowerCase();
          return searchableText.includes(query);
        })
      }))
      .filter(category => category.formats.length > 0);
  }, [searchQuery, conversionCategories]);

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
            <div className="p-2 sm:p-3 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl">
              <RefreshCw className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">File Converters</h1>
          </div>
          <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Convert files between different formats with our specialized converters. 
            Each converter is optimized for specific use cases and file types.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 sm:mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search converters... (e.g., CSV to MOBI, CR2 to ICO)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 text-sm sm:text-base lg:text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
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
                Found {filteredCategories.reduce((sum, cat) => sum + cat.formats.length, 0)} converter(s)
              </p>
            )}
          </div>
        </div>

        {/* Conversion Categories */}
        <div className="space-y-8 sm:space-y-12">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">{category.title}</h2>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                {category.formats.map((format, formatIndex) => (
                  <div
                    key={formatIndex}
                    className={`px-3 sm:px-6 py-3 sm:py-4 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors ${
                      formatIndex === 0 ? 'rounded-t-lg' : ''
                    } ${formatIndex === category.formats.length - 1 ? 'rounded-b-lg' : ''}`}
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
                      <div className="flex-1 w-full sm:w-auto">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-2">
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900">{format.name}</h3>
                          <div className="flex items-center space-x-1 text-xs sm:text-sm text-gray-500">
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                              {format.inputFormat}
                            </span>
                            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 rotate-180 text-gray-400" />
                            <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                              {format.outputFormat}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-600 text-xs sm:text-sm">{format.description}</p>
                      </div>
                      <div className="w-full sm:w-auto sm:ml-4">
                        <a
                          href={format.path}
                          className="inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-700 transition-colors w-full sm:w-auto"
                        >
                          <RefreshCw className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>Convert</span>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No converters found</h3>
              <p className="text-gray-600 mb-4">
                Try searching for something like "CSV to MOBI" or "CR2 to ICO"
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
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Why Choose Our Converters?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fast & Reliable</h3>
              <p className="text-gray-600">Convert files quickly with our optimized conversion engines</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Secure & Private</h3>
              <p className="text-gray-600">Your files are processed locally and never stored on our servers</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">High Quality</h3>
              <p className="text-gray-600">Maintain file quality and integrity during conversion</p>
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
