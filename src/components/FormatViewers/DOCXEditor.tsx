import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, X, Download, Printer, ZoomIn, ZoomOut, Maximize2, Play, ChevronLeft, ChevronRight, Menu, ChevronUp, ChevronDown, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { FileProcessor } from '../../utils/fileProcessing';

interface DOCXEditorProps {
  files: File[];
  onClose: () => void;
  onAddFiles?: (files: File[]) => void;
}

export const DOCXEditor: React.FC<DOCXEditorProps> = ({ files, onClose, onAddFiles }) => {
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [zoom, setZoom] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState<Map<number, number>>(new Map());
  const [docxHtml, setDocxHtml] = useState<Map<number, string>>(new Map());
  const [isLoading, setIsLoading] = useState<Map<number, boolean>>(new Map());
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPresentationMode, setIsPresentationMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isPagesSidebarOpen, setIsPagesSidebarOpen] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const viewerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pagesContainerRef = useRef<HTMLDivElement>(null);
  const lastPageRef = useRef<number>(1);

  const location = useLocation();
  
  // Prevent body scroll when editor is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Ensure overflow is restored when route changes
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, [location.pathname]);

  // Safety net: restore overflow on page unload
  useEffect(() => {
    const handleBeforeUnload = () => {
      document.body.style.overflow = '';
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.body.style.overflow = '';
    };
  }, []);

  // Load DOCX files and fetch HTML previews
  useEffect(() => {
    const htmls = new Map<number, string>();
    const loading = new Map<number, boolean>();

    files.forEach(async (file, index) => {
      loading.set(index, true);
      setIsLoading(new Map(loading));

      try {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('https://api.morphyhub.com/api/preview/docx', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const contentType = response.headers.get('Content-Type') || '';
          const html = await response.text();

          if (contentType.includes('text/html') && html.trim().length > 0) {
            // Process HTML to display in A4 page format like Microsoft Word
            let processedHtml = html;
            
            // Extract body content
            let bodyContent = '';
            const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
            if (bodyMatch) {
              bodyContent = bodyMatch[1];
            } else {
              // If no body tag, use entire HTML
              bodyContent = html.replace(/<head[^>]*>[\s\S]*<\/head>/i, '').replace(/<html[^>]*>|<\/html>/gi, '');
            }
            
            // Wrap body content in A4 page container with proper structure
            const wrappedContent = `<div class="docx-a4-container"><div class="docx-a4-page">${bodyContent}</div></div>`;
            
            // Replace body content
            if (bodyMatch) {
              processedHtml = processedHtml.replace(/<body[^>]*>[\s\S]*<\/body>/i, `<body>${wrappedContent}</body>`);
            } else {
              // If no body tag, create one
              processedHtml = processedHtml.replace(/<\/head>/i, `</head><body>${wrappedContent}</body>`);
            }

            // Add A4 page styling (like Microsoft Word)
            processedHtml = processedHtml.replace(
              /<\/head>/i,
              `<style>
                * {
                  box-sizing: border-box;
                }
                html, body {
                  margin: 0;
                  padding: 0;
                  background: #e5e5e5;
                  font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
                  overflow-x: hidden;
                }
                .docx-a4-container {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  padding: 20px;
                  gap: 20px;
                  min-height: 100vh;
                  background: #e5e5e5;
                }
                /* A4 Page Format - 210mm x 297mm */
                .docx-a4-page {
                  width: 210mm;
                  min-height: 297mm;
                  background: white;
                  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
                  margin: 0 auto 20px;
                  padding: 25.4mm 31.7mm;
                  position: relative;
                  page-break-after: always;
                  break-after: page;
                  display: block;
                  overflow: visible;
                }
                /* Ensure content inside pages is properly formatted */
                .docx-a4-page > * {
                  margin: 0 0 1em 0;
                }
                .docx-a4-page > *:last-child {
                  margin-bottom: 0;
                }
                /* Hide any existing toolbars or controls */
                .toolbar, .header-bar, [class*="toolbar"], [class*="header"], 
                [class*="control"], [class*="menu"] {
                  display: none !important;
                }
                /* Ensure text is readable */
                p, div, span, h1, h2, h3, h4, h5, h6, li, td, th {
                  color: #000 !important;
                }
                /* Table styling */
                table {
                  border-collapse: collapse;
                  width: 100%;
                  margin: 10px 0;
                }
                table td, table th {
                  border: 1px solid #ddd;
                  padding: 8px;
                }
              </style></head>`
            );
            
            // Add JavaScript to split content into A4 pages after load
            processedHtml = processedHtml.replace(
              /<\/body>/i,
              `<script>
                (function() {
                  function splitIntoA4Pages() {
                    try {
                      const container = document.querySelector('.docx-a4-container');
                      if (!container) return;
                      
                      const firstPage = container.querySelector('.docx-a4-page');
                      if (!firstPage) return;
                      
                      // A4 content area height: 297mm - (25.4mm * 2) = 246.2mm ≈ 931px at 96 DPI
                      const maxContentHeight = 931;
                      
                      // Get direct children only (top-level elements)
                      const children = Array.from(firstPage.children);
                      if (children.length === 0) return;
                      
                      // Store original content
                      const originalHTML = firstPage.innerHTML;
                      firstPage.innerHTML = '';
                      firstPage.setAttribute('data-page', '1');
                      
                      let currentPage = firstPage;
                      let currentPageHeight = 0;
                      let pageNum = 1;
                      
                      // Process each element
                      children.forEach((element) => {
                        // Measure element height by temporarily adding it
                        const testDiv = document.createElement('div');
                        testDiv.style.position = 'absolute';
                        testDiv.style.visibility = 'hidden';
                        testDiv.style.width = '146.6mm';
                        testDiv.appendChild(element.cloneNode(true));
                        document.body.appendChild(testDiv);
                        const elementHeight = testDiv.offsetHeight || 50;
                        document.body.removeChild(testDiv);
                        
                        // Check if we need a new page
                        if (currentPageHeight + elementHeight > maxContentHeight && currentPageHeight > 0) {
                          // Create new page
                          pageNum++;
                          currentPage = document.createElement('div');
                          currentPage.className = 'docx-a4-page';
                          currentPage.setAttribute('data-page', pageNum.toString());
                          container.appendChild(currentPage);
                          currentPageHeight = 0;
                        }
                        
                        // Add element to current page
                        currentPage.appendChild(element);
                        currentPageHeight += elementHeight;
                      });
                      
                      console.log('Split into', pageNum, 'A4 pages');
                    } catch (e) {
                      console.warn('Error splitting into A4 pages:', e);
                    }
                  }
                  
                  // Run multiple times to ensure content is loaded
                  setTimeout(splitIntoA4Pages, 100);
                  setTimeout(splitIntoA4Pages, 500);
                  setTimeout(splitIntoA4Pages, 1000);
                  if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', splitIntoA4Pages);
                  }
                  window.addEventListener('load', splitIntoA4Pages);
                })();
              </script></body>`
            );

            htmls.set(index, processedHtml);
            setDocxHtml(new Map(htmls));

            // Estimate page count based on A4 pages
            setTimeout(() => {
              const iframe = document.createElement('iframe');
              iframe.style.display = 'none';
              iframe.srcdoc = processedHtml;
              document.body.appendChild(iframe);
              iframe.onload = () => {
                try {
                  const doc = iframe.contentDocument || iframe.contentWindow?.document;
                  if (doc) {
                    const body = doc.body;
                    // Count A4 pages (210mm x 297mm = A4)
                    const a4Pages = doc.querySelectorAll('.docx-a4-page, .docx-a4-container > *').length;
                    if (a4Pages > 0) {
                      setTotalPages(prev => {
                        const newMap = new Map(prev);
                        newMap.set(index, a4Pages);
                        return newMap;
                      });
                    } else {
                      // Estimate based on content height divided by A4 page height
                      const estimatedHeight = body.scrollHeight;
                      const a4PageHeight = 1123; // 297mm in pixels at 96 DPI
                      const estimatedPages = Math.max(1, Math.ceil(estimatedHeight / a4PageHeight));
                      
                      setTotalPages(prev => {
                        const newMap = new Map(prev);
                        newMap.set(index, estimatedPages);
                        return newMap;
                      });
                    }
                  }
                } catch (e) {
                  // Cross-origin or other error
                  setTotalPages(prev => {
                    const newMap = new Map(prev);
                    newMap.set(index, 1);
                    return newMap;
                  });
                }
                document.body.removeChild(iframe);
              };
            }, 100);
          }
        }
      } catch (error) {
        console.error('Error loading DOCX preview:', error);
      } finally {
        loading.set(index, false);
        setIsLoading(new Map(loading));
      }
    });
  }, [files]);

  // Filter files based on search
  const filteredFiles = files.filter(file =>
    file.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentFile = filteredFiles[selectedIndex] || files[0];
  const currentFileIndex = currentFile ? files.indexOf(currentFile) : -1;
  const currentDocxHtml = currentFileIndex >= 0 ? docxHtml.get(currentFileIndex) || '' : '';
  const currentIsLoading = currentFileIndex >= 0 ? isLoading.get(currentFileIndex) || false : false;
  const currentTotalPages = currentFileIndex >= 0 ? totalPages.get(currentFileIndex) || 1 : 1;

  const handleNext = useCallback(() => {
    if (selectedIndex < filteredFiles.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    } else if (isPresentationMode) {
      setSelectedIndex(0);
    }
  }, [selectedIndex, filteredFiles.length, isPresentationMode]);

  const handlePrevious = useCallback(() => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    } else if (isPresentationMode) {
      setSelectedIndex(filteredFiles.length - 1);
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
    if (currentPage < currentTotalPages) {
      setCurrentPage(currentPage + 1);
      scrollToPage(currentPage + 1);
    }
  };

  const scrollToPage = (page: number) => {
    setCurrentPage(page);
    lastPageRef.current = page;

    const container = containerRef.current;
    if (!container) return;

    const iframe = iframeRef.current;
    if (iframe?.contentWindow) {
      try {
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        if (doc) {
          // Look for A4 page elements first
          const a4PageElements = doc.querySelectorAll('.docx-a4-page, .docx-a4-container > *, [class*="a4"]');
          if (a4PageElements.length > 0) {
            const targetElement = a4PageElements[Math.min(page - 1, a4PageElements.length - 1)] as HTMLElement;
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
              return;
            }
          }
          // Fallback to other page elements
          const pageElements = doc.querySelectorAll('.docx-page, .docx-page-break, [class*="page"]');
          if (pageElements.length > 0) {
            const targetElement = pageElements[Math.min(page - 1, pageElements.length - 1)] as HTMLElement;
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
              return;
            }
          }
        }
      } catch (e) {
        // Cross-origin error
      }
    }

    // Fallback: scroll by A4 page height (297mm + 20px gap = 1143px)
    const a4PageHeight = 1143; // 297mm + 20px gap
    const targetScroll = (page - 1) * a4PageHeight;
    container.scrollTo({
      top: targetScroll,
      behavior: 'smooth',
    });
  };

  const handlePageClick = (page: number) => {
    scrollToPage(page);
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

  const handlePrint = () => {
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.focus();
      iframeRef.current.contentWindow.print();
    }
  };

  const handleDownload = () => {
    if (currentFile) {
      const url = URL.createObjectURL(currentFile);
      const a = document.createElement('a');
      a.href = url;
      a.download = currentFile.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const handleFileSelect = (index: number) => {
    setSelectedIndex(index);
    setCurrentPage(1);
    lastPageRef.current = 1;
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (currentTotalPages > 1) {
          handleNextPage();
        } else {
          handleNext();
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (currentTotalPages > 1) {
          handlePreviousPage();
        } else {
          handlePrevious();
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (currentTotalPages > 1) {
          handlePreviousPage();
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (currentTotalPages > 1) {
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
  }, [selectedIndex, filteredFiles.length, isPresentationMode, handleNext, handlePrevious, onClose, handleZoomIn, handleZoomOut, toggleFullscreen, currentTotalPages]);

  // Update iframe content when DOCX HTML changes
  useEffect(() => {
    if (iframeRef.current && currentDocxHtml) {
      iframeRef.current.contentWindow?.document.open();
      iframeRef.current.contentWindow?.document.write(currentDocxHtml);
      iframeRef.current.contentWindow?.document.close();
      setCurrentPage(1);
      lastPageRef.current = 1;
    }
  }, [currentDocxHtml, selectedIndex]);

  // Handle scroll-based page navigation using Intersection Observer
  useEffect(() => {
    if (!iframeRef.current || currentTotalPages <= 1) return;

    const iframe = iframeRef.current;
    let observer: IntersectionObserver | null = null;

    const setupObserver = () => {
      try {
        const iframeWindow = iframe.contentWindow;
        const iframeDoc = iframe.contentDocument || iframeWindow?.document;
        if (!iframeDoc || !containerRef.current) return;

        // Find all potential page elements
        const pageSelectors = [
          '.docx-page',
          '.docx-page-break',
          '[class*="page"]',
          'h1, h2, h3',
          'div[style*="page-break"]'
        ];

        const pageElements: Element[] = [];
        pageSelectors.forEach(selector => {
          const elements = iframeDoc.querySelectorAll(selector);
          pageElements.push(...Array.from(elements));
        });

        // If no specific page elements found, create virtual pages based on content
        if (pageElements.length === 0) {
          const body = iframeDoc.body;
          if (body) {
            const children = Array.from(body.children);
            const viewportHeight = 800;
            const totalHeight = body.scrollHeight;
            const estimatedPages = Math.ceil(totalHeight / viewportHeight);
            
            // Create markers for virtual pages
            for (let i = 0; i < estimatedPages; i++) {
              const marker = iframeDoc.createElement('div');
              marker.className = 'docx-virtual-page';
              marker.style.position = 'absolute';
              marker.style.top = `${i * viewportHeight}px`;
              marker.style.height = '1px';
              marker.style.width = '1px';
              marker.setAttribute('data-page', String(i + 1));
              body.appendChild(marker);
              pageElements.push(marker);
            }
          }
        }

        // Set up Intersection Observer
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const element = entry.target;
                const pageNum = parseInt(
                  element.getAttribute('data-page') || 
                  element.className.match(/page-(\d+)/)?.[1] || 
                  '1',
                  10
                );
                
                if (pageNum && pageNum !== lastPageRef.current) {
                  lastPageRef.current = pageNum;
                  setCurrentPage(pageNum);
                }
              }
            });
          },
          {
            root: containerRef.current,
            rootMargin: '-20% 0px -20% 0px',
            threshold: 0.5
          }
        );

        // Observe all page elements
        pageElements.forEach((el, index) => {
          if (!el.getAttribute('data-page')) {
            el.setAttribute('data-page', String(index + 1));
          }
          observer?.observe(el);
        });
      } catch (error) {
        // Cross-origin or access error
        console.warn('Cannot set up scroll observer:', error);
      }
    };

    const loadHandler = () => {
      setTimeout(() => {
        setupObserver();
      }, 500);
    };

    if (iframe.contentDocument?.readyState === 'complete') {
      setupObserver();
    } else {
      iframe.addEventListener('load', loadHandler);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
      iframe.removeEventListener('load', loadHandler);
    };
  }, [currentDocxHtml, currentTotalPages, currentFileIndex]);

  // Fallback scroll detection using scroll position
  useEffect(() => {
    if (!iframeRef.current || currentTotalPages <= 1) return;

    const iframe = iframeRef.current;
    let checkInterval: NodeJS.Timeout;

    const updateCurrentPage = () => {
      try {
        const iframeWindow = iframe.contentWindow;
        if (!iframeWindow) return;

        const scrollTop = iframeWindow.scrollY || iframeWindow.pageYOffset || 0;
        const viewportHeight = iframeWindow.innerHeight || 800;
        const scrollHeight = iframeWindow.document.documentElement.scrollHeight || 800;

        // A4 page height in pixels (297mm at 96 DPI = ~1123px, plus 20px gap)
        const a4PageHeight = 1143; // 297mm + 20px gap
        const newPage = Math.min(
          Math.max(Math.floor(scrollTop / a4PageHeight) + 1, 1),
          currentTotalPages
        );

        if (newPage !== lastPageRef.current) {
          lastPageRef.current = newPage;
          setCurrentPage(newPage);
        }
      } catch (error) {
        // Cross-origin error
      }
    };

    const attachScrollListener = () => {
      try {
        const iframeWindow = iframe.contentWindow;
        if (iframeWindow) {
          iframeWindow.addEventListener('scroll', updateCurrentPage, { passive: true });
          iframeWindow.addEventListener('wheel', updateCurrentPage, { passive: true });
        }
      } catch (error) {
        // Cross-origin
      }
    };

    attachScrollListener();
    const loadHandler = () => {
      setTimeout(() => {
        attachScrollListener();
        updateCurrentPage();
      }, 500);
    };
    iframe.addEventListener('load', loadHandler);

    checkInterval = setInterval(updateCurrentPage, 200);

    return () => {
      clearInterval(checkInterval);
      iframe.removeEventListener('load', loadHandler);
      try {
        const iframeWindow = iframe.contentWindow;
        if (iframeWindow) {
          iframeWindow.removeEventListener('scroll', updateCurrentPage);
          iframeWindow.removeEventListener('wheel', updateCurrentPage);
        }
      } catch (error) {
        // Ignore cleanup errors
      }
    };
  }, [currentDocxHtml, currentTotalPages]);

  // Auto-scroll sidebar to show active page
  useEffect(() => {
    if (currentPage > 0 && isPagesSidebarOpen) {
      const thumbElement = document.getElementById(`page-thumb-${currentPage}`);
      const sidebar = document.getElementById('pages-sidebar');
      
      if (thumbElement && sidebar) {
        const thumbRect = thumbElement.getBoundingClientRect();
        const sidebarRect = sidebar.getBoundingClientRect();
        
        if (thumbRect.top < sidebarRect.top || thumbRect.bottom > sidebarRect.bottom) {
          thumbElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }
  }, [currentPage, isPagesSidebarOpen]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white overflow-hidden" ref={viewerRef}>
      {/* Header */}
      <header className="h-12 sm:h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-between px-3 sm:px-6 shadow-md z-20">
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden p-2 hover:bg-white/20 rounded transition-colors"
            title={t('viewers.docx.editor.toggle_sidebar', 'Toggle Sidebar')}
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
            title={t('viewers.docx.editor.close', 'Close (Esc)')}
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
            title={t('viewers.docx.editor.close_sidebar', 'Close Sidebar')}
          >
            <X className="w-5 h-5" />
          </button>
          {/* Search */}
          <div className="p-2 sm:p-3 border-b border-gray-100 pt-12 lg:pt-2">
            <div className="relative">
              <Search className="absolute left-2 sm:left-3 top-2.5 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder={t('viewers.docx.editor.search_placeholder', 'Search files...')}
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                className="w-full pl-8 sm:pl-9 pr-2 sm:pr-3 py-1.5 sm:py-2 bg-gray-50 border border-gray-200 rounded-md text-xs sm:text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
              />
            </div>
          </div>
          
          {/* Add Files Button */}
          {onAddFiles && (
            <div className="px-2 sm:px-3 pb-2 border-b border-gray-100">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white text-xs sm:text-sm font-semibold rounded-lg transition-all shadow-sm hover:shadow-md"
              >
                {t('viewers.docx.editor.add_files', '+ Add Files')}
              </button>
            </div>
          )}
            
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept=".docx,.doc,.docm,.dotx,.dotm"
            onChange={(e) => {
              if (e.target.files && onAddFiles) {
                const newFiles = Array.from(e.target.files).filter(file => {
                  const ext = file.name.split('.').pop()?.toLowerCase();
                  return ['docx', 'doc', 'docm', 'dotx', 'dotm'].includes(ext || '');
                });
                onAddFiles(newFiles);
              }
              if (e.target) {
                e.target.value = '';
              }
            }}
            className="hidden"
          />

          {/* File List */}
          <div className="flex-1 overflow-y-auto p-2 sm:p-3 space-y-1.5 sm:space-y-2">
            {filteredFiles.map((file, fileIndex) => {
              const actualIndex = files.indexOf(file);
              const isSelected = actualIndex === selectedIndex;
              return (
                <div
                  key={actualIndex}
                  onClick={() => {
                    handleFileSelect(actualIndex);
                    setIsSidebarOpen(false);
                  }}
                  className={`group flex items-start gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-lg cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-purple-50 border border-purple-200 shadow-sm'
                      : 'border border-transparent hover:bg-gray-100'
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <p className={`text-xs sm:text-sm font-medium truncate ${
                      isSelected ? 'font-semibold text-purple-900' : 'font-medium text-gray-700'
                    }`}
                    title={file.name}>
                      {file.name}
                    </p>
                    <p className={`text-xs ${isSelected ? 'text-purple-600' : 'text-gray-400'}`}>
                      {formatFileSize(file.size)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </aside>

        {/* Pages Sidebar */}
        {currentTotalPages > 1 && isPagesSidebarOpen && (
          <aside 
            id="pages-sidebar"
            className="w-24 sm:w-32 bg-white border-r border-gray-200 flex flex-col z-20 shadow-[4px_0_24px_rgba(0,0,0,0.02)]"
          >
            <div className="px-3 py-2 border-b border-gray-200 flex items-center justify-between bg-gray-50">
              <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                {t('viewers.docx.editor.pages', 'Pages')}
              </span>
              <button
                onClick={() => setIsPagesSidebarOpen(false)}
                className="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded transition-colors"
                title={t('viewers.docx.editor.close_pages_sidebar', 'Close Pages')}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto scroller p-2 space-y-2" id="pages-sidebar">
              {Array.from({ length: currentTotalPages }, (_, i) => i + 1).map((pageNum) => {
                const isActive = currentPage === pageNum;
                return (
                  <button
                    key={pageNum}
                    onClick={() => {
                      handlePageClick(pageNum);
                      setIsPagesSidebarOpen(true);
                    }}
                    className={`w-full p-2 rounded-lg border-2 transition-all text-left group ${
                      isActive
                        ? 'border-purple-500 bg-purple-50 shadow-md ring-2 ring-purple-200 scale-105'
                        : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50/50 hover:shadow-sm'
                    }`}
                    id={`page-thumb-${pageNum}`}
                  >
                    <div className="flex items-center justify-center w-full h-24 sm:h-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded mb-2 overflow-hidden relative border border-gray-200">
                      <span className={`absolute top-1 left-1 text-xs px-2 py-1 rounded font-bold z-10 ${
                        isActive 
                          ? 'bg-purple-600 text-white shadow-lg' 
                          : 'bg-gray-700/80 text-white group-hover:bg-purple-600'
                      }`}>
                        {pageNum}
                      </span>
                      <div className="text-center">
                        <div className={`text-2xl font-bold mb-1 ${
                          isActive ? 'text-purple-600' : 'text-gray-400'
                        }`}>
                          {pageNum}
                        </div>
                        <div className="text-xs text-gray-500">
                          {t('viewers.docx.editor.page', 'Page')}
                        </div>
                      </div>
                    </div>
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-purple-500"></div>
                    )}
                    <p className={`text-xs text-center font-medium mt-1 ${
                      isActive ? 'text-purple-700 font-bold' : 'text-gray-600'
                    }`}>
                      {t('viewers.docx.editor.page', 'Page')} {pageNum}
                    </p>
                  </button>
                );
              })}
            </div>
          </aside>
        )}

        {/* Toggle Pages Sidebar Button (when closed) */}
        {currentTotalPages > 1 && !isPagesSidebarOpen && (
          <button
            onClick={() => setIsPagesSidebarOpen(true)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white border border-gray-200 rounded-r-lg px-2 py-4 shadow-lg hover:bg-gray-50 transition-colors"
            title={t('viewers.docx.editor.show_pages', 'Show Pages')}
          >
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>
        )}

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Toolbar */}
          <div className="h-12 sm:h-14 border-b border-gray-200 bg-white flex flex-col sm:flex-row justify-between items-start sm:items-center px-2 sm:px-4 py-1.5 sm:py-0 shadow-sm z-10 gap-2 sm:gap-0">
            <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 flex-1">
              <span className="font-semibold text-gray-700 text-xs sm:text-sm truncate">{currentFile?.name}</span>
              <span className="text-xs px-1.5 sm:px-2 py-0.5 bg-gray-100 text-gray-500 rounded border border-gray-200 flex-shrink-0">
                {t('viewers.docx.editor.format_badge', 'DOCX')}
              </span>
              {currentFile && (
                <span className="text-xs text-gray-400 hidden sm:inline flex-shrink-0">
                  {formatFileSize(currentFile.size)}
                </span>
              )}
            </div>

            <div className="flex items-center gap-1 sm:gap-2 w-full sm:w-auto justify-end flex-wrap">
              {/* Page Navigation */}
              {currentTotalPages > 1 && (
                <>
                  <div className="flex items-center gap-1 px-2 py-1 bg-gray-50 rounded border border-gray-200">
                    <span className="text-xs text-gray-600 hidden sm:inline">Page</span>
                    <span className="text-xs font-medium text-gray-700">{currentPage}</span>
                    <span className="text-xs text-gray-400">/</span>
                    <span className="text-xs text-gray-600">{currentTotalPages}</span>
                  </div>
                  <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className="btn-icon w-8 h-8 sm:w-9 sm:h-9 text-gray-600 hover:bg-gray-100 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    title={t('viewers.docx.editor.previous_page', 'Previous Page (←)')}
                  >
                    <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                  <button
                    onClick={handleNextPage}
                    disabled={currentPage === currentTotalPages}
                    className="btn-icon w-8 h-8 sm:w-9 sm:h-9 text-gray-600 hover:bg-gray-100 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    title={t('viewers.docx.editor.next_page', 'Next Page (→)')}
                  >
                    <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                </>
              )}

              {/* Zoom Controls */}
              <div className="flex items-center gap-1 border-l border-gray-200 pl-2">
                <button
                  onClick={handleZoomOut}
                  className="btn-icon w-8 h-8 sm:w-9 sm:h-9 text-gray-600 hover:bg-gray-100 rounded transition-colors"
                  title={t('viewers.docx.editor.zoom_out', 'Zoom Out (-)')}
                >
                  <ZoomOut className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
                <button
                  onClick={handleResetZoom}
                  className="text-xs font-mono font-medium px-2 py-1 text-center hover:text-pink-600 transition-colors min-w-[3rem]"
                  title={t('viewers.docx.editor.reset_zoom', 'Click to reset zoom')}
                >
                  {zoom}%
                </button>
                <button
                  onClick={handleZoomIn}
                  className="btn-icon w-8 h-8 sm:w-9 sm:h-9 text-gray-600 hover:bg-gray-100 rounded transition-colors"
                  title={t('viewers.docx.editor.zoom_in', 'Zoom In (+)')}
                >
                  <ZoomIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              </div>

              {/* Presentation Mode */}
              <button
                onClick={() => setIsPresentationMode(!isPresentationMode)}
                className="btn-icon flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 text-gray-600 hover:bg-purple-50 hover:text-purple-700 rounded transition-colors text-xs sm:text-sm"
                title={t('viewers.docx.editor.start_presentation', 'Start Presentation (Space/Arrows to navigate)')}
              >
                <Play className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="font-medium hidden sm:inline">
                  {isPresentationMode ? t('viewers.docx.editor.exit_presentation', 'Exit') : t('viewers.docx.editor.present', 'Present')}
                </span>
              </button>

              <button
                onClick={handlePrint}
                className="btn-icon w-8 h-8 sm:w-9 sm:h-9 text-gray-600 hover:bg-gray-100 rounded transition-colors"
                title={t('viewers.docx.editor.print_docx', 'Print DOCX')}
              >
                <Printer className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>

              <button
                onClick={handleDownload}
                className="btn-icon w-8 h-8 sm:w-9 sm:h-9 text-gray-600 hover:bg-gray-100 rounded transition-colors"
                title={t('viewers.docx.editor.download_docx', 'Download DOCX')}
              >
                <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>

          {/* DOCX Viewer */}
          <div ref={containerRef} className="flex-1 overflow-auto p-0 bg-gray-100 flex justify-center items-start relative">
            {/* Navigation Arrows */}
            {filteredFiles.length > 1 && (
              <>
                <button
                  onClick={handlePrevious}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-white/90 backdrop-blur border border-gray-200 shadow-lg rounded-full hover:bg-white hover:text-purple-600 transition-all z-20"
                  title={t('viewers.docx.editor.previous', 'Previous (←)')}
                >
                  <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-white/90 backdrop-blur border border-gray-200 shadow-lg rounded-full hover:bg-white hover:text-purple-600 transition-all z-20"
                  title={t('viewers.docx.editor.next', 'Next (→)')}
                >
                  <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
                </button>
              </>
            )}

            {/* DOCX iframe */}
            {files.length === 0 ? (
              <div className="flex flex-col items-center justify-center text-gray-500 h-full">
                <FileText className="w-16 h-16 text-gray-400 mb-4" />
                <p className="text-lg font-medium text-gray-600 mb-2">{t('viewers.docx.editor.no_files', 'No files loaded')}</p>
                <p className="text-sm text-gray-500">{t('viewers.docx.editor.add_files_prompt', 'Use the sidebar to add DOCX files')}</p>
              </div>
            ) : currentIsLoading ? (
              <div className="flex flex-col items-center justify-center text-gray-500 h-full">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mb-4"></div>
                <p className="text-sm">{t('viewers.docx.loading_window.title', 'Loading DOCX...')}</p>
              </div>
            ) : currentDocxHtml ? (
              <div 
                className="w-full h-full overflow-auto"
                style={{
                  transform: `scale(${zoom / 100})`,
                  transformOrigin: 'top center',
                  background: '#e5e5e5'
                }}
              >
                <iframe
                  ref={iframeRef}
                  srcDoc={currentDocxHtml}
                  className="w-full h-full border-0"
                  title={currentFile?.name}
                  style={{ 
                    display: 'block',
                    margin: '0 auto',
                    background: '#e5e5e5',
                    overflow: 'auto',
                    minHeight: '100%',
                    width: '100%'
                  }}
                  scrolling="yes"
                />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-gray-500 h-full">
                <FileText className="w-16 h-16 text-gray-400 mb-4" />
                <p className="text-sm">{t('viewers.docx.editor.no_preview', 'No preview available')}</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

