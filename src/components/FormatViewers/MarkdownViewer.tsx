import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Upload, Eye, Download, ArrowLeft, CheckCircle, AlertCircle, Info, Code, BookOpen, Edit } from 'lucide-react';
import { FileUpload } from '../FileUpload';
import { Header } from '../Header';
import { useFileValidation } from '../../hooks/useFileValidation';

export const MarkdownViewer: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const { validateBatchFiles, validationError, clearValidationError } = useFileValidation();

  const handleFilesSelected = (files: File[]) => {
    // Clear previous validation errors
    clearValidationError();
    
    // Filter only Markdown files
    const markdownFiles = files.filter(file => {
      const extension = file.name.split('.').pop()?.toLowerCase();
      return ['md', 'markdown', 'mdown', 'mkd', 'mdx'].includes(extension || '');
    });
    
    // Validate the files
    const validation = validateBatchFiles(markdownFiles);
    
    if (validation.isValid) {
      setSelectedFiles(markdownFiles);
    }
  };

  const handleDownload = (file: File) => {
    const url = URL.createObjectURL(file);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleViewMarkdown = async (file: File) => {
    try {
      // Read file content
      const content = await file.text();
      
      // Open in new window with Markdown viewer
      const viewerWindow = window.open('', '_blank', 'width=1400,height=900,scrollbars=yes,resizable=yes');
      if (!viewerWindow) {
        alert('Please allow pop-ups to view the document');
        return;
      }

      viewerWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <title>${file.name}</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.2.0/github-markdown.min.css">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.min.css">
          <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
              background: #f6f8fa;
              color: #24292f;
              line-height: 1.6;
            }
            .toolbar {
              position: sticky;
              top: 0;
              background: #24292f;
              color: white;
              padding: 15px 20px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              box-shadow: 0 2px 8px rgba(0,0,0,0.2);
              z-index: 1000;
            }
            .toolbar-info {
              display: flex;
              align-items: center;
              gap: 15px;
            }
            .file-info {
              display: flex;
              flex-direction: column;
            }
            .file-name {
              font-weight: bold;
              font-size: 14px;
            }
            .file-meta {
              font-size: 12px;
              color: #8b949e;
            }
            .toolbar button {
              background: #238636;
              color: white;
              border: none;
              padding: 8px 16px;
              border-radius: 6px;
              cursor: pointer;
              margin-left: 10px;
              font-size: 14px;
              transition: background 0.2s;
            }
            .toolbar button:hover {
              background: #2ea043;
            }
            .content-container {
              max-width: 980px;
              margin: 40px auto;
              padding: 0 20px;
            }
            .markdown-body {
              background: white;
              border: 1px solid #d0d7de;
              border-radius: 8px;
              padding: 48px;
              box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            }
            .tab-bar {
              background: white;
              border: 1px solid #d0d7de;
              border-bottom: none;
              border-radius: 8px 8px 0 0;
              padding: 10px 20px;
              display: flex;
              gap: 10px;
              margin-bottom: -1px;
            }
            .tab {
              padding: 8px 16px;
              border-radius: 6px;
              cursor: pointer;
              background: transparent;
              border: none;
              font-size: 14px;
              font-weight: 500;
              color: #57606a;
              transition: background 0.2s;
            }
            .tab.active {
              background: #f6f8fa;
            }
            .tab:hover {
              background: #f6f8fa;
            }
            .raw-content {
              background: #f6f8fa;
              border: 1px solid #d0d7de;
              border-radius: 8px;
              padding: 16px;
              font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
              font-size: 12px;
              line-height: 1.6;
              white-space: pre-wrap;
              word-wrap: break-word;
              display: none;
            }
            .raw-content.active {
              display: block;
            }
            @media print {
              .toolbar, .tab-bar {
                display: none;
              }
              body {
                background: white;
              }
              .content-container {
                max-width: 100%;
                margin: 0;
                padding: 0;
              }
              .markdown-body {
                border: none;
                box-shadow: none;
              }
            }
          </style>
        </head>
        <body>
          <div class="toolbar">
            <div class="toolbar-info">
              <span>📝</span>
              <div class="file-info">
                <span class="file-name">${file.name}</span>
                <span class="file-meta">${(file.size / 1024).toFixed(2)} KB • Markdown</span>
              </div>
            </div>
            <div>
              <button onclick="copyContent()">📋 Copy</button>
              <button onclick="window.print()">🖨️ Print</button>
              <button onclick="window.close()">✖️ Close</button>
            </div>
          </div>
          <div class="content-container">
            <div class="tab-bar">
              <button class="tab active" onclick="showPreview()">📖 Preview</button>
              <button class="tab" onclick="showRaw()">📄 Raw</button>
            </div>
            <div class="markdown-body" id="preview"></div>
            <div class="raw-content" id="raw"></div>
          </div>
          <script>
            const markdownContent = ${JSON.stringify(content)};
            
            // Configure marked
            marked.setOptions({
              breaks: true,
              gfm: true,
              highlight: function(code, lang) {
                if (lang && hljs.getLanguage(lang)) {
                  return hljs.highlight(code, { language: lang }).value;
                }
                return hljs.highlightAuto(code).value;
              }
            });
            
            // Render markdown
            document.getElementById('preview').innerHTML = marked.parse(markdownContent);
            document.getElementById('raw').textContent = markdownContent;
            
            function showPreview() {
              document.getElementById('preview').style.display = 'block';
              document.getElementById('raw').classList.remove('active');
              document.querySelectorAll('.tab')[0].classList.add('active');
              document.querySelectorAll('.tab')[1].classList.remove('active');
            }
            
            function showRaw() {
              document.getElementById('preview').style.display = 'none';
              document.getElementById('raw').classList.add('active');
              document.querySelectorAll('.tab')[0].classList.remove('active');
              document.querySelectorAll('.tab')[1].classList.add('active');
            }
            
            function copyContent() {
              navigator.clipboard.writeText(markdownContent).then(() => {
                alert('Markdown content copied to clipboard!');
              }).catch(() => {
                alert('Failed to copy content');
              });
            }
          </script>
        </body>
        </html>
      `);
      viewerWindow.document.close();
    } catch (error) {
      console.error('Markdown view error:', error);
      alert('Failed to open Markdown file preview. Please try again or download the file.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Free Markdown Viewer - View MD Files Online | MorphyIMG</title>
        <meta name="description" content="Free professional Markdown viewer for viewing MD files online. Upload and preview Markdown documents with live rendering, syntax highlighting, and GitHub-style formatting. Supports batch viewing up to 20 files. 100% free Markdown viewer tool." />
        <meta name="keywords" content="Markdown viewer, MD viewer, view Markdown online, Markdown preview, README viewer, documentation viewer, Markdown viewer free" />
        <meta property="og:title" content="Free Markdown Viewer - View MD Files Online | MorphyIMG" />
        <meta property="og:description" content="Free professional Markdown viewer for viewing MD files online. Upload and preview Markdown documents with live rendering and syntax highlighting." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://morphyimg.com/viewers/md" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Markdown Viewer - View MD Files Online | MorphyIMG" />
        <meta name="twitter:description" content="Free professional Markdown viewer for viewing MD files online. Upload and preview Markdown documents with live rendering." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Free Markdown Viewer",
            "description": "Free professional Markdown viewer for viewing MD files online",
            "url": "https://morphyimg.com/viewers/md",
            "applicationCategory": "DocumentViewer",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-700">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => window.location.href = '/viewers'}
                  className="p-2 text-white/80 hover:text-white hover:bg-white/20 rounded-lg transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                  <FileText className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    Free Markdown Viewer
                  </h1>
                  <p className="text-xl text-indigo-100">
                    View and preview Markdown files with live rendering - 100% free
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
                Upload Markdown Files
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Drag and drop your Markdown files or click to browse. Supports .md, .markdown, .mdown, .mkd, .mdx files up to 100MB each, with batch upload support for up to 20 files.
            </p>
            <FileUpload 
              onFilesSelected={handleFilesSelected}
              acceptedFormats={['md', 'markdown', 'mdown', 'mkd', 'mdx']}
              maxFiles={20}
              maxSize={100 * 1024 * 1024}
              hideFormatList={true}
              showTotalSize={true}
            />
            
            {validationError && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                  <span className="text-red-700 text-sm">{validationError.message}</span>
                </div>
              </div>
            )}
          </div>

          {/* Preview Section */}
          {selectedFiles.length > 0 && (
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Your Markdown Files ({selectedFiles.length})
                  </h2>
                </div>
              </div>

              {/* How to View Instructions */}
              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">How to View Markdown Files</h4>
                    <p className="text-sm text-blue-700">
                      Click the <strong>"View Markdown"</strong> button to see the rendered Markdown with GitHub-style formatting. 
                      You can switch between Preview and Raw modes, copy content, and print the document.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-indigo-50 rounded-xl p-4 hover:shadow-lg transition-all transform hover:scale-105 border border-gray-200">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-indigo-100 rounded-lg">
                        <FileText className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-gray-800 truncate">
                          {file.name}
                        </h3>
                        <p className="text-xs text-gray-500">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <button
                        onClick={() => handleViewMarkdown(file)}
                        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-sm font-medium py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View Markdown</span>
                      </button>
                      <button
                        onClick={() => handleDownload(file)}
                        className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-lg p-8 border border-indigo-200 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="bg-white p-3 rounded-xl w-fit mb-4">
                <BookOpen className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Live Preview
              </h3>
              <p className="text-gray-600 leading-relaxed">
                See your Markdown rendered in real-time with GitHub-style formatting, tables, and code blocks beautifully displayed
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-lg p-8 border border-green-200 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="bg-white p-3 rounded-xl w-fit mb-4">
                <Code className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Syntax Highlighting
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Code blocks with automatic syntax highlighting for 180+ programming languages - perfect for technical documentation
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl shadow-lg p-8 border border-pink-200 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="bg-white p-3 rounded-xl w-fit mb-4">
                <Edit className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Dual View Mode
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Switch between rendered preview and raw Markdown source - ideal for learning Markdown syntax and debugging
              </p>
            </div>
          </div>

          {/* About Markdown Format Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                About Markdown Format
              </h2>
            </div>
            
            <div className="prose max-w-none text-gray-600">
              <p className="mb-6">
                Markdown is a lightweight markup language created by John Gruber in 2004 for creating formatted text using a plain text editor. 
                It's designed to be easy to read and write, with syntax that converts to HTML. Markdown is widely used for documentation, 
                README files, forum posts, and static site generation. GitHub, Reddit, Stack Overflow, and many other platforms support Markdown.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Advantages</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Simple syntax</strong> - Easy to learn and write</li>
                    <li>• <strong>Plain text</strong> - Human-readable without rendering</li>
                    <li>• <strong>Version control friendly</strong> - Perfect for Git repositories</li>
                    <li>• <strong>Cross-platform</strong> - Works everywhere, no special software</li>
                    <li>• <strong>Converts to HTML</strong> - Easy web publishing</li>
                    <li>• <strong>GitHub support</strong> - Native support in GitHub and GitLab</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Best Use Cases</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Documentation</strong> - README files, wikis, technical docs</li>
                    <li>• <strong>Blog posts</strong> - Static site generators (Jekyll, Hugo)</li>
                    <li>• <strong>Note-taking</strong> - Obsidian, Notion, Roam Research</li>
                    <li>• <strong>GitHub repos</strong> - Project documentation and guides</li>
                    <li>• <strong>Forum posts</strong> - Reddit, Stack Overflow comments</li>
                    <li>• <strong>Books and ebooks</strong> - Lightweight book authoring</li>
                  </ul>
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Technical Specifications</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">File Extensions</td>
                        <td className="py-2 text-sm text-gray-900">.md, .markdown, .mdown, .mkd, .mdx</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">MIME Type</td>
                        <td className="py-2 text-sm text-gray-900">text/markdown, text/x-markdown</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">Created By</td>
                        <td className="py-2 text-sm text-gray-900">John Gruber (2004)</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">Format Type</td>
                        <td className="py-2 text-sm text-gray-900">Lightweight markup language</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">Character Encoding</td>
                        <td className="py-2 text-sm text-gray-900">UTF-8, ASCII</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm font-medium text-gray-500">Popular Flavors</td>
                        <td className="py-2 text-sm text-gray-900">CommonMark, GitHub Flavored, MultiMarkdown</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Viewers Button */}
          <div className="text-center mt-8">
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
                <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">MorphyIMG</h2>
              </div>
              
              <p className="text-gray-300 mb-6">
                Free professional Markdown viewer for all your documentation viewing needs.
              </p>
              
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-300">
                <span>© 2025 MorphyIMG. Built for Markdown professionals.</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
