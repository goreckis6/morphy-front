import React, { useState } from 'react';
import { FileText, Upload, Eye, Download, Share2, ArrowLeft, Code, BookOpen, Edit } from 'lucide-react';
import { FileUpload } from '../FileUpload';
import { FileViewer } from '../FileViewer';
import { Helmet } from 'react-helmet-async';

export const MarkdownViewer: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [viewerFile, setViewerFile] = useState<File | null>(null);

  const handleFilesSelected = (files: File[]) => {
    // Filter only Markdown files
    const markdownFiles = files.filter(file => {
      const extension = file.name.split('.').pop()?.toLowerCase();
      return ['md', 'markdown', 'mdown', 'mkd', 'mdx'].includes(extension || '');
    });
    setSelectedFiles(markdownFiles);
  };

  return (
    <>
      <Helmet>
        <title>Markdown Viewer - View & Preview Markdown Files Online | MorphyIMG</title>
        <meta name="description" content="Professional Markdown viewer for viewing, previewing, and analyzing Markdown (.md) files online. Support for .md, .markdown, .mdown, .mkd, .mdx files with syntax highlighting and live preview." />
        <meta name="keywords" content="markdown viewer, markdown preview, .md viewer, markdown editor, markdown files, documentation viewer, README viewer, markdown syntax highlighting" />
        <meta property="og:title" content="Markdown Viewer - View & Preview Markdown Files Online" />
        <meta property="og:description" content="Professional Markdown viewer for viewing, previewing, and analyzing Markdown files online with syntax highlighting and live preview." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://morphyimg.com/viewers/markdown" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Markdown Viewer - View & Preview Markdown Files Online" />
        <meta name="twitter:description" content="Professional Markdown viewer for viewing, previewing, and analyzing Markdown files online with syntax highlighting and live preview." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Markdown Viewer",
            "description": "Professional Markdown viewer for viewing, previewing, and analyzing Markdown files online",
            "url": "https://morphyimg.com/viewers/markdown",
            "applicationCategory": "DocumentViewer",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "featureList": [
              "Markdown file viewing",
              "Syntax highlighting",
              "Live preview",
              "Multiple format support",
              "File upload and analysis"
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                  <FileText className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Markdown Viewer
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                Professional Markdown viewer for viewing, previewing, and analyzing Markdown files online. 
                Support for .md, .markdown, .mdown, .mkd, .mdx files with syntax highlighting and live preview.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">✓ Syntax Highlighting</span>
                <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">✓ Live Preview</span>
                <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">✓ Multiple Formats</span>
                <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">✓ Fast Processing</span>
              </div>
            </div>
          </div>
        </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Upload Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Upload Markdown Files
          </h2>
          <FileUpload 
            onFilesSelected={handleFilesSelected}
            acceptedFormats={['md', 'markdown', 'mdown', 'mkd', 'mdx']}
            maxFiles={20}
            maxSize={100}
            hideFormatList={true}
            showTotalSize={true}
          />
        </div>

        {/* Preview Section */}
        {selectedFiles.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Preview Markdown Files ({selectedFiles.length})
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {selectedFiles.map((file, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="aspect-square bg-gradient-to-br from-gray-500 to-gray-700 border-2 border-gray-200 rounded-lg mb-3 overflow-hidden flex items-center justify-center">
                    <FileText className="w-16 h-16 text-white" />
                  </div>
                  <div className="text-sm font-medium text-gray-700 truncate mb-2">
                    {file.name}
                  </div>
                  <div className="text-xs text-gray-500 mb-3">
                    {(file.size / 1024 / 1024).toFixed(2)} MB • Markdown
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setViewerFile(file)}
                      className="flex-1 bg-gray-600 hover:bg-gray-700 text-white text-xs font-medium py-2 px-3 rounded-lg transition-colors flex items-center justify-center space-x-1"
                    >
                      <Eye className="w-3 h-3" />
                      <span>View</span>
                    </button>
                    <button className="p-2 text-gray-500 hover:text-gray-500 hover:bg-gray-50 rounded-lg transition-colors">
                      <Download className="w-3 h-3" />
                    </button>
                    <button className="p-2 text-gray-500 hover:text-purple-500 hover:bg-purple-50 rounded-lg transition-colors">
                      <Share2 className="w-3 h-3" />
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
            <BookOpen className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Rich Formatting
            </h3>
            <p className="text-gray-600">
              View Markdown with proper formatting including headers, lists, links, and code blocks
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <Code className="w-8 h-8 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Syntax Highlighting
            </h3>
            <p className="text-gray-600">
              Code blocks within Markdown are highlighted with proper syntax coloring
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <Edit className="w-8 h-8 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Live Preview
            </h3>
            <p className="text-gray-600">
              See how Markdown renders in real-time with our advanced preview engine
            </p>
          </div>
        </div>

        {/* Markdown Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            About Markdown Format
          </h2>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              Markdown is a lightweight markup language with plain text formatting syntax. 
              Its design allows it to be converted to many output formats, but the original 
              tool by the same name only supports HTML. Markdown is often used to format 
              readme files, for writing messages in online discussion forums, and to create 
              rich text using a plain text editor.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Features</h3>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Simple syntax</strong> - Easy to learn and write</li>
                  <li>• <strong>Plain text</strong> - Human-readable in any editor</li>
                  <li>• <strong>Version control friendly</strong> - Works great with Git</li>
                  <li>• <strong>Cross-platform</strong> - Supported everywhere</li>
                  <li>• <strong>Extensible</strong> - Many flavors and extensions available</li>
                  <li>• <strong>Fast rendering</strong> - Quick conversion to HTML</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Best Use Cases</h3>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Documentation</strong> - README files and project docs</li>
                  <li>• <strong>Blog posts</strong> - Content creation and publishing</li>
                  <li>• <strong>Note-taking</strong> - Structured personal notes</li>
                  <li>• <strong>Technical writing</strong> - API documentation and guides</li>
                  <li>• <strong>Static sites</strong> - Content for static site generators</li>
                  <li>• <strong>Forums</strong> - Rich text in discussion platforms</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Markdown Technical Specifications
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
                  <td className="px-6 py-4 text-sm text-gray-600">.md, .markdown, .mdown, .mkd, .mdx</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">MIME Type</td>
                  <td className="px-6 py-4 text-sm text-gray-600">text/markdown, text/x-markdown</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">Format Type</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Lightweight markup language</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">Character Encoding</td>
                  <td className="px-6 py-4 text-sm text-gray-600">UTF-8, ASCII</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">Created By</td>
                  <td className="px-6 py-4 text-sm text-gray-600">John Gruber (2004)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">Flavors</td>
                  <td className="px-6 py-4 text-sm text-gray-600">CommonMark, GitHub Flavored, MultiMarkdown</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">Output Formats</td>
                  <td className="px-6 py-4 text-sm text-gray-600">HTML, PDF, LaTeX, DOCX</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">Syntax Elements</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Headers, Lists, Links, Code, Tables, Images</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Back to Viewers Button */}
        <div className="text-center">
          <a
            href="/viewers"
            className="inline-block bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
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
                <div className="p-2 bg-gradient-to-br from-gray-500 to-gray-700 rounded-xl">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">MorphyIMG</h2>
              </div>
              
              <p className="text-gray-300 mb-6">
                Professional Markdown viewer for all your documentation needs.
              </p>
              
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-300">
                <span>© 2025 MorphyIMG. Built for Markdown professionals.</span>
              </div>
            </div>
          </div>
        </footer>
      </div>

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