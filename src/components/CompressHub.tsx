import React, { useState, useMemo } from 'react';
import { Minimize2, ArrowLeft, FileImage, Search } from 'lucide-react';
import { Header } from './Header';

interface CompressionFormat {
  name: string;
  description: string;
  path: string;
  format: string;
}

export const CompressHub: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const compressionCategories = [
    {
      title: "IMAGE COMPRESSION",
      formats: [
        { 
          name: "JPG/JPEG Compressor", 
          description: "Compress JPEG images to reduce file size while maintaining quality. Perfect for web optimization and faster uploads.",
          path: "/compress/jpg",
          format: "JPG/JPEG"
        }
      ]
    }
  ];

  // Filter categories based on search query
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) {
      return compressionCategories;
    }

    const query = searchQuery.toLowerCase();
    return compressionCategories.map(category => ({
      ...category,
      formats: category.formats.filter(format => 
        format.name.toLowerCase().includes(query) ||
        format.description.toLowerCase().includes(query) ||
        format.format.toLowerCase().includes(query)
      )
    })).filter(category => category.formats.length > 0);
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => window.location.href = '/'}
              className="p-2 text-gray-500 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
              <Minimize2 className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                File Compression Tools
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                Reduce file sizes while maintaining quality. Compress images, documents, and more for faster uploads and storage optimization.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search compression tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>
        </div>

        {/* Compression Categories */}
        <div className="space-y-8">
          {filteredCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
                <h2 className="text-xl font-bold text-white">{category.title}</h2>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.formats.map((format, formatIndex) => (
                    <a
                      key={formatIndex}
                      href={format.path}
                      className="block p-6 bg-gray-50 hover:bg-blue-50 rounded-lg border-2 border-transparent hover:border-blue-300 transition-all duration-200 group cursor-pointer"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                          <FileImage className="w-6 h-6 text-blue-600" />
                        </div>
                        <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs font-semibold rounded group-hover:bg-blue-200 transition-colors">
                          {format.format}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {format.name}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {format.description}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No compression tools found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

