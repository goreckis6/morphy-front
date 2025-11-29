import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Search, X, Download, Printer, ZoomIn, ZoomOut, Maximize2, Play, ChevronLeft, ChevronRight, Menu, ChevronUp, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { FileProcessor } from '../../utils/fileProcessing';

interface PDFEditorProps {
  files: File[];
  onClose: () => void;
  onAddFiles?: (files: File[]) => void;
}

export const PDFEditor: React.FC<PDFEditorProps> = ({ files, onClose, onAddFiles }) => {
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [zoom, setZoom] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pdfUrls, setPdfUrls] = useState<Map<number, string>>(new Map());
  const [pdfHtml, setPdfHtml] = useState<Map<number, string>>(new Map());
  const [isLoading, setIsLoading] = useState<Map<number, boolean>>(new Map());
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPresentationMode, setIsPresentationMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const viewerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Prevent body scroll when editor is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Create object URLs for PDFs and fetch preview HTML
  useEffect(() => {
    const urls = new Map<number, string>();
    const htmls = new Map<number, string>();
    const loading = new Map<number, boolean>();

    files.forEach(async (file, index) => {
      const url = URL.createObjectURL(file);
      urls.set(index, url);
      loading.set(index, true);
      setIsLoading(new Map(loading));

      try {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('https://api.morphyhub.com/api/preview/pdf', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          let html = await response.text();
          // Hide the red bar controls in the PDF HTML
          html = html.replace(/<style>([\s\S]*?)<\/style>/i, (match, styles) => {
            return `<style>${styles}
              .toolbar, .header-bar, [class*="toolbar"], [class*="header"] {
                display: none !important;
              }
            </style>`;
          });
          // Also try to hide by adding style tag if no existing style tag
          if (!html.includes('<style>')) {
            html = html.replace('<head>', `<head><style>
              .toolbar, .header-bar, [class*="toolbar"], [class*="header"] {
                display: none !important;
              }
            </style>`);
          }
          htmls.set(index, html);
          setPdfHtml(new Map(htmls));
          
          // Try to extract total pages from HTML
          const pageMatch = html.match(/total[_-]?pages?[:\s]*(\d+)/i) || html.match(/(\d+)\s*\/\s*\d+/);
          if (pageMatch) {
            const pages = parseInt(pageMatch[1]);
            if (pages > 0) {
              setTotalPages(pages);
            }
          }
        }
      } catch (error) {
        console.error('Error loading PDF preview:', error);
      } finally {
        loading.set(index, false);
        setIsLoading(new Map(loading));
      }
    });

    setPdfUrls(new Map(urls));

    return () => {
      // Cleanup object URLs
      urls.forEach(url => URL.revokeObjectURL(url));
    };
  }, [files]);

  // Filter files based on search
  const filteredFiles = files.filter(file =>
    file.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentFile = filteredFiles[selectedIndex] || files[0];
  const currentPdfUrl = pdfUrls.get(selectedIndex) || '';
  const currentPdfHtml = pdfHtml.get(selectedIndex) || '';
  const currentIsLoading = isLoading.get(selectedIndex) || false;

  const handleNext = useCallback(() => {
    if (selectedIndex < filteredFiles.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    } else if (isPresentationMode) {
      setSelectedIndex(0); // Loop back to start
    }
  }, [selectedIndex, filteredFiles.length, isPresentationMode]);

  const handlePrevious = useCallback(() => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    } else if (isPresentationMode) {
      setSelectedIndex(filteredFiles.length - 1); // Loop to end
    }
  }, [selectedIndex, filteredFiles.length, isPresentationMode]);

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 25, 500));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 25, 25));
  };

  const handleResetZoom = () => {
    setZoom(100);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      scrollToPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      scrollToPage(currentPage + 1);
    }
  };

  const scrollToPage = (page: number) => {
    if (iframeRef.current?.contentWindow) {
      const iframe = iframeRef.current.contentWindow;
      // Try to find page element and scroll to it
      const pageHeight = iframe.innerHeight || 800;
      const scrollPosition = (page - 1) * pageHeight;
      iframe.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    }
  };

  const handleFitWidth = () => {
    // Reset zoom to fit width - this is a placeholder, actual implementation depends on PDF viewer
    setZoom(100);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      viewerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleDownload = () => {
    if (currentFile) {
      const url = currentPdfUrl;
      const a = document.createElement('a');
      a.href = url;
      a.download = currentFile.name;
      a.click();
    }
  };

  const handlePrint = () => {
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.focus();
      iframeRef.current.contentWindow.print();
    }
  };

  const handleFileSelect = (index: number) => {
    setSelectedIndex(index);
    setZoom(100);
  };

  const handleAddFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && onAddFiles) {
      const newFiles = Array.from(e.target.files).filter(file => {
        const ext = file.name.split('.').pop()?.toLowerCase();
        return ext === 'pdf';
      });
      onAddFiles(newFiles);
    }
  };

  const formatFileSize = (bytes: number) => {
    return FileProcessor.formatFileSize(bytes);
  };

  // Update selected index when filtered files change
  useEffect(() => {
    if (selectedIndex >= filteredFiles.length && filteredFiles.length > 0) {
      setSelectedIndex(0);
    }
  }, [filteredFiles.length, selectedIndex]);

  // Handle fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && isPresentationMode) {
        setIsPresentationMode(false);
        setIsFullscreen(false);
      } else if (document.fullscreenElement) {
        setIsFullscreen(true);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [isPresentationMode]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement) {
        return;
      }

      if (isPresentationMode) {
        if (e.key === 'ArrowRight' || e.key === ' ') {
          e.preventDefault();
          handleNext();
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          handlePrevious();
        } else if (e.key === 'Escape') {
          setIsPresentationMode(false);
        }
        return;
      }

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (totalPages > 1) {
          handleNextPage();
        } else {
          handleNext();
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (totalPages > 1) {
          handlePreviousPage();
        } else {
          handlePrevious();
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (totalPages > 1) {
          handlePreviousPage();
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (totalPages > 1) {
          handleNextPage();
        }
      } else if (e.key === 'Escape') {
        onClose();
      } else if ((e.key === '+' || e.key === '=') && !e.shiftKey) {
        e.preventDefault();
        handleZoomIn();
      } else if (e.key === '-') {
        e.preventDefault();
        handleZoomOut();
      } else if ((e.key === 'f' || e.key === 'F') && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        toggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedIndex, filteredFiles.length, isPresentationMode, handleNext, handlePrevious, onClose, handleZoomIn, handleZoomOut, toggleFullscreen]);

  // Update iframe content when PDF HTML changes
  useEffect(() => {
    if (iframeRef.current && currentPdfHtml) {
      iframeRef.current.contentWindow?.document.open();
      iframeRef.current.contentWindow?.document.write(currentPdfHtml);
      iframeRef.current.contentWindow?.document.close();
      setCurrentPage(1); // Reset to first page when switching files
    }
  }, [currentPdfHtml, selectedIndex]);

  // Handle scroll-based page navigation
  useEffect(() => {
    const iframe = iframeRef.current?.contentWindow;
    if (!iframe) return;

    const handleScroll = () => {
      const scrollTop = iframe.scrollY || iframe.pageYOffset || 0;
      const pageHeight = iframe.innerHeight || 800;
      const newPage = Math.floor(scrollTop / pageHeight) + 1;
      if (newPage !== currentPage && newPage >= 1 && newPage <= totalPages) {
        setCurrentPage(newPage);
      }
    };

    iframe.addEventListener('scroll', handleScroll);
    return () => {
      iframe.removeEventListener('scroll', handleScroll);
    };
  }, [currentPage, totalPages]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white overflow-hidden" ref={viewerRef}>
      {/* Header */}
      <header className="h-12 sm:h-14 bg-gradient-to-r from-red-600 to-pink-600 text-white flex items-center justify-between px-3 sm:px-6 shadow-md z-20">
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden p-2 hover:bg-white/20 rounded transition-colors"
            title={t('viewers.pdf.editor.toggle_sidebar', 'Toggle Sidebar')}
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-1 sm:p-1.5 border border-white/20">
            <img 
              src="/logo.png" 
              alt="MorphyHub" 
              className="h-6 sm:h-8 w-auto object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.src.includes('logo.png')) {
                  target.src = '/logo.jpg';
                }
              }}
            />
          </div>
          <span className="font-bold text-sm sm:text-lg tracking-tight hidden sm:inline">MorphyHub</span>
        </div>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded transition-colors"
            title={t('viewers.pdf.editor.close', 'Close (Esc)')}
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </header>

      <main className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <aside className={`absolute lg:relative inset-y-0 left-0 w-72 sm:w-80 bg-white border-r border-gray-200 flex flex-col z-30 lg:z-10 shadow-[4px_0_24px_rgba(0,0,0,0.02)] transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}>
          {/* Mobile Close Button */}
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors z-40"
            title={t('viewers.pdf.editor.close_sidebar', 'Close Sidebar')}
          >
            <X className="w-5 h-5" />
          </button>
          {/* Search */}
          <div className="p-2 sm:p-3 border-b border-gray-100 pt-12 lg:pt-2">
            <div className="relative">
              <Search className="absolute left-2 sm:left-3 top-2.5 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder={t('viewers.pdf.editor.search_placeholder', 'Search files...')}
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                className="w-full pl-8 sm:pl-9 pr-2 sm:pr-3 py-1.5 sm:py-2 bg-gray-50 border border-gray-200 rounded-md text-xs sm:text-sm focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
              />
            </div>
          </div>

          {/* Files Header */}
          <div className="px-3 sm:px-4 py-1.5 sm:py-2 flex justify-between items-center bg-gray-50/50">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              {t('viewers.pdf.editor.files_header', 'Files')} ({filteredFiles.length})
            </span>
            {onAddFiles && (
              <button
                onClick={() => fileInputRef.current?.click()}
                className="text-pink-600 hover:text-pink-700 text-xs font-bold uppercase tracking-wide transition-colors"
              >
                {t('viewers.pdf.editor.add_files', '+ Add')}
              </button>
            )}
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept=".pdf"
              onChange={handleAddFiles}
              className="hidden"
            />
          </div>

          {/* File List */}
          <div className="flex-1 overflow-y-auto scroller p-2 sm:p-3 space-y-1.5 sm:space-y-2">
            {filteredFiles.map((file, index) => {
              const fileIndex = files.indexOf(file);
              const isSelected = fileIndex === selectedIndex;
              const pdfUrl = pdfUrls.get(fileIndex) || '';

              return (
                <div
                  key={fileIndex}
                  onClick={() => {
                    handleFileSelect(fileIndex);
                    setIsSidebarOpen(false);
                  }}
                  className={`group flex items-start gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-lg cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-pink-50 border border-pink-200 shadow-sm'
                      : 'border border-transparent hover:bg-gray-100'
                  }`}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded overflow-hidden flex-shrink-0 flex items-center justify-center">
                    <div className="text-gray-400 text-xs font-bold">PDF</div>
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col justify-center h-10 sm:h-12">
                    <p
                      className={`text-xs sm:text-sm truncate ${
                        isSelected ? 'font-semibold text-pink-900' : 'font-medium text-gray-700'
                      }`}
                      title={file.name}
                    >
                      {file.name}
                    </p>
                    <p className={`text-xs ${isSelected ? 'text-pink-600' : 'text-gray-400'}`}>
                      {formatFileSize(file.size)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </aside>

        {/* Main Viewer */}
        <section className="flex-1 flex flex-col min-w-0 bg-gray-50 relative">
          {/* Toolbar */}
          <div className="h-12 sm:h-14 border-b border-gray-200 bg-white flex flex-col sm:flex-row justify-between items-start sm:items-center px-2 sm:px-4 py-1.5 sm:py-0 shadow-sm z-10 gap-2 sm:gap-0">
            <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 flex-1">
              <span className="font-semibold text-gray-700 text-xs sm:text-sm truncate">{currentFile?.name}</span>
              <span className="text-xs px-1.5 sm:px-2 py-0.5 bg-gray-100 text-gray-500 rounded border border-gray-200 flex-shrink-0">
                {t('viewers.pdf.editor.format_badge', 'PDF')}
              </span>
              {currentFile && (
                <span className="text-xs text-gray-400 hidden sm:inline flex-shrink-0">
                  {formatFileSize(currentFile.size)}
                </span>
              )}
            </div>

            <div className="flex items-center gap-1 sm:gap-2 w-full sm:w-auto justify-end flex-wrap">
              {/* Page Navigation */}
              {totalPages > 1 && (
                <>
                  <div className="flex items-center gap-1 px-2 py-1 bg-gray-50 rounded border border-gray-200">
                    <span className="text-xs text-gray-600 hidden sm:inline">Page</span>
                    <span className="text-xs font-medium text-gray-700">{currentPage}</span>
                    <span className="text-xs text-gray-400">/</span>
                    <span className="text-xs text-gray-600">{totalPages}</span>
                  </div>
                  <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className="btn-icon w-8 h-8 text-gray-600 hover:bg-gray-100 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    title={t('viewers.pdf.editor.previous_page', 'Previous Page')}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="btn-icon w-8 h-8 text-gray-600 hover:bg-gray-100 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    title={t('viewers.pdf.editor.next_page', 'Next Page')}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <div className="w-px h-4 sm:h-6 bg-gray-200 mx-0.5 sm:mx-1" />
                </>
              )}

              {/* Zoom Controls */}
              <button
                onClick={handleZoomOut}
                className="btn-icon w-8 h-8 text-gray-600 hover:bg-gray-100 rounded transition-colors"
                title={t('viewers.pdf.editor.zoom_out', 'Zoom Out (-)')}
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={handleResetZoom}
                className="text-xs font-mono font-medium px-2 py-1 text-center hover:text-pink-600 transition-colors min-w-[3rem]"
                title={t('viewers.pdf.editor.reset_zoom', 'Click to reset zoom')}
              >
                {zoom}%
              </button>
              <button
                onClick={handleZoomIn}
                className="btn-icon w-8 h-8 text-gray-600 hover:bg-gray-100 rounded transition-colors"
                title={t('viewers.pdf.editor.zoom_in', 'Zoom In (+)')}
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={handleFitWidth}
                className="text-xs px-2 py-1 text-gray-600 hover:bg-gray-100 rounded transition-colors hidden sm:inline"
                title={t('viewers.pdf.editor.fit_width', 'Fit Width')}
              >
                Fit Width
              </button>
              <div className="w-px h-4 sm:h-6 bg-gray-200 mx-0.5 sm:mx-1" />
              <button
                onClick={() => {
                  setIsPresentationMode(!isPresentationMode);
                  if (!isPresentationMode) {
                    viewerRef.current?.requestFullscreen().catch(err => {
                      console.error('Error entering fullscreen:', err);
                    });
                  } else {
                    if (document.fullscreenElement) {
                      document.exitFullscreen();
                    }
                  }
                }}
                className="btn-icon flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 text-gray-600 hover:bg-pink-50 hover:text-pink-700 rounded transition-colors text-xs sm:text-sm"
                title={t('viewers.pdf.editor.start_presentation', 'Start Presentation (Space/Arrows to navigate)')}
              >
                <Play className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="font-medium hidden sm:inline">
                  {isPresentationMode ? t('viewers.pdf.editor.exit_presentation', 'Exit') : t('viewers.pdf.editor.present', 'Present')}
                </span>
              </button>

              <button
                onClick={handlePrint}
                className="btn-icon w-8 h-8 sm:w-9 sm:h-9 text-gray-600 hover:bg-gray-100 rounded transition-colors"
                title={t('viewers.pdf.editor.print_pdf', 'Print PDF')}
              >
                <Printer className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>

              <button
                onClick={handleDownload}
                className="btn-icon w-8 h-8 sm:w-9 sm:h-9 text-gray-600 hover:bg-gray-100 rounded transition-colors"
                title={t('viewers.pdf.editor.download_pdf', 'Download PDF')}
              >
                <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>

          {/* PDF Viewer */}
          <div ref={containerRef} className="flex-1 overflow-auto p-2 sm:p-4 md:p-8 bg-gray-100 flex justify-center items-center relative">
            {/* Navigation Arrows */}
            {filteredFiles.length > 1 && (
              <>
                <button
                  onClick={handlePrevious}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-white/90 backdrop-blur border border-gray-200 shadow-lg rounded-full hover:bg-white hover:text-pink-600 transition-all z-20"
                  title={t('viewers.pdf.editor.previous', 'Previous (←)')}
                >
                  <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-white/90 backdrop-blur border border-gray-200 shadow-lg rounded-full hover:bg-white hover:text-pink-600 transition-all z-20"
                  title={t('viewers.pdf.editor.next', 'Next (→)')}
                >
                  <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
                </button>
              </>
            )}

            {/* PDF iframe */}
            {currentIsLoading ? (
              <div className="flex flex-col items-center justify-center text-gray-500">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600 mb-4"></div>
                <p className="text-sm">{t('viewers.pdf.loading_window.title', 'Loading PDF...')}</p>
              </div>
            ) : currentPdfHtml ? (
              <div 
                className="bg-white shadow-xl sm:shadow-2xl border border-gray-200 transition-transform duration-200"
                style={{
                  transform: `scale(${zoom / 100})`,
                  transformOrigin: 'center center',
                  width: '100%',
                  height: '100%',
                  maxWidth: '100%',
                  maxHeight: '100%',
                }}
              >
                <iframe
                  ref={iframeRef}
                  srcDoc={currentPdfHtml}
                  className="w-full h-full border-0"
                  title={currentFile?.name}
                  style={{ minHeight: '600px' }}
                />
              </div>
            ) : currentPdfUrl ? (
              <iframe
                src={currentPdfUrl}
                className="w-full h-full border-0 bg-white shadow-xl sm:shadow-2xl border border-gray-200"
                title={currentFile?.name}
                style={{ 
                  transform: `scale(${zoom / 100})`,
                  transformOrigin: 'center center',
                  minHeight: '600px'
                }}
              />
            ) : null}

            {/* Fullscreen button only (zoom controls moved to toolbar) */}
            <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 right-2 sm:right-4 bg-white/90 backdrop-blur border border-gray-200 shadow-lg rounded-full p-2 z-20">
              <button
                onClick={toggleFullscreen}
                className="hover:text-pink-600 transition-colors"
                title={t('viewers.pdf.editor.fullscreen', 'Fullscreen (F)')}
              >
                <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* File Counter */}
            {filteredFiles.length > 1 && (
              <div className="absolute top-2 sm:top-4 md:top-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur border border-gray-200 shadow-lg rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-medium text-gray-700 z-20">
                {selectedIndex + 1} / {filteredFiles.length}
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Mobile Overlay when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-20"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <style>{`
        body {
          overflow: hidden !important;
        }
        .scroller::-webkit-scrollbar {
          width: 4px;
        }
        @media (min-width: 640px) {
          .scroller::-webkit-scrollbar {
            width: 6px;
          }
        }
        .scroller::-webkit-scrollbar-thumb {
          background-color: #cbd5e1;
          border-radius: 4px;
        }
        .scroller::-webkit-scrollbar-thumb:hover {
          background-color: #94a3b8;
        }
        .btn-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

