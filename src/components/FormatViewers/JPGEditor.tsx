import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Search, X, Download, Printer, RotateCw, ZoomIn, ZoomOut, Maximize2, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { FileProcessor } from '../../utils/fileProcessing';

interface JPGEditorProps {
  files: File[];
  onClose: () => void;
  onAddFiles?: (files: File[]) => void;
}

export const JPGEditor: React.FC<JPGEditorProps> = ({ files, onClose, onAddFiles }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [zoom, setZoom] = useState(100);
  const [rotation, setRotation] = useState(0);
  const [imageUrls, setImageUrls] = useState<Map<number, string>>(new Map());
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPresentationMode, setIsPresentationMode] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const viewerRef = useRef<HTMLDivElement>(null);

  // Create object URLs for images
  useEffect(() => {
    const urls = new Map<string, string>();
    files.forEach((file, index) => {
      const url = URL.createObjectURL(file);
      urls.set(index.toString(), url);
    });
    setImageUrls(new Map(urls));

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
  const currentImageUrl = imageUrls.get(selectedIndex.toString()) || '';

  const handleNext = useCallback(() => {
    if (selectedIndex < filteredFiles.length - 1) {
      setSelectedIndex(selectedIndex + 1);
      setRotation(0);
    } else if (isPresentationMode) {
      setSelectedIndex(0);
    }
  }, [selectedIndex, filteredFiles.length, isPresentationMode]);

  const handlePrevious = useCallback(() => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
      setRotation(0);
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

  const handleRotate = () => {
    setRotation(prev => (prev + 90) % 360);
  };

  const handleResetZoom = () => {
    setZoom(100);
    setRotation(0);
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
      const url = currentImageUrl;
      const a = document.createElement('a');
      a.href = url;
      a.download = currentFile.name;
      a.click();
    }
  };

  const handlePrint = () => {
    if (currentImageUrl && currentFile) {
      const iframe = document.createElement('iframe');
      iframe.style.position = 'fixed';
      iframe.style.right = '0';
      iframe.style.bottom = '0';
      iframe.style.width = '0';
      iframe.style.height = '0';
      iframe.style.border = '0';
      document.body.appendChild(iframe);

      const printContent = `
        <!DOCTYPE html>
        <html>
          <head>
            <title>${currentFile.name}</title>
            <style>
              @media print {
                * {
                  margin: 0;
                  padding: 0;
                }
                body {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  min-height: 100vh;
                }
                img {
                  max-width: 100%;
                  max-height: 100vh;
                  object-fit: contain;
                }
              }
              @page {
                margin: 0;
              }
            </style>
          </head>
          <body>
            <img src="${currentImageUrl}" alt="${currentFile.name}" />
          </body>
        </html>
      `;

      iframe.contentWindow?.document.open();
      iframe.contentWindow?.document.write(printContent);
      iframe.contentWindow?.document.close();

      iframe.onload = () => {
        setTimeout(() => {
          iframe.contentWindow?.focus();
          iframe.contentWindow?.print();
          setTimeout(() => {
            document.body.removeChild(iframe);
          }, 1000);
        }, 250);
      };
    }
  };

  const handleFileSelect = (index: number) => {
    setSelectedIndex(index);
    setRotation(0);
    setZoom(100);
  };

  const handleAddFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && onAddFiles) {
      const newFiles = Array.from(e.target.files).filter(file => {
        const ext = file.name.split('.').pop()?.toLowerCase();
        return ['jpg', 'jpeg', 'jpe'].includes(ext || '');
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
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrevious();
      } else if (e.key === 'Escape') {
        onClose();
      } else if ((e.key === '+' || e.key === '=') && !e.shiftKey) {
        e.preventDefault();
        handleZoomIn();
      } else if (e.key === '-') {
        e.preventDefault();
        handleZoomOut();
      } else if ((e.key === 'r' || e.key === 'R') && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        handleRotate();
      } else if ((e.key === 'f' || e.key === 'F') && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        toggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedIndex, filteredFiles.length, isPresentationMode, handleNext, handlePrevious, onClose, handleZoomIn, handleZoomOut, handleRotate, toggleFullscreen]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-gray-50" ref={viewerRef}>
      {/* Header */}
      <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shadow-sm z-20">
        <div className="flex items-center gap-3">
          <img 
            src="/logo.jpg" 
            alt="MorphyHub" 
            className="h-10 w-auto object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.src.includes('logo.jpg')) {
                target.src = '/logo.png';
              }
            }}
          />
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600 hover:text-gray-900"
          title="Close (Esc)"
        >
          <X className="w-5 h-5" />
        </button>
      </header>

      <main className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <aside className="w-72 bg-white border-r border-gray-200 flex flex-col z-10">
          {/* Search */}
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search files..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>
          </div>

          {/* Files Header */}
          <div className="px-4 py-3 flex justify-between items-center bg-gray-50 border-b border-gray-200">
            <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Files ({filteredFiles.length})
            </span>
            {onAddFiles && (
              <button
                onClick={() => fileInputRef.current?.click()}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                + Add
              </button>
            )}
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept=".jpg,.jpeg,.jpe"
              onChange={handleAddFiles}
              className="hidden"
            />
          </div>

          {/* File List */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {filteredFiles.map((file, index) => {
              const fileIndex = files.indexOf(file);
              const isSelected = fileIndex === selectedIndex;
              const imageUrl = imageUrls.get(fileIndex.toString()) || '';

              return (
                <div
                  key={fileIndex}
                  onClick={() => handleFileSelect(fileIndex)}
                  className={`group flex items-start gap-3 p-2.5 rounded-lg cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-blue-50 border border-blue-200 shadow-sm'
                      : 'border border-transparent hover:bg-gray-50'
                  }`}
                >
                  <div className="w-14 h-14 bg-gray-100 rounded-md overflow-hidden flex-shrink-0 border border-gray-200">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={file.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <p
                      className={`text-sm truncate ${
                        isSelected ? 'font-semibold text-gray-900' : 'font-medium text-gray-700'
                      }`}
                      title={file.name}
                    >
                      {file.name}
                    </p>
                    <p className={`text-xs mt-0.5 ${isSelected ? 'text-blue-600' : 'text-gray-500'}`}>
                      {formatFileSize(file.size)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </aside>

        {/* Main Viewer */}
        <section className="flex-1 flex flex-col min-w-0 bg-white relative">
          {/* Toolbar */}
          <div className="h-14 border-b border-gray-200 bg-white flex justify-between items-center px-6 z-10">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-gray-900 text-sm">{currentFile?.name}</span>
              <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md font-medium">
                JPG
              </span>
              {currentFile && (
                <span className="text-xs text-gray-500">
                  {formatFileSize(currentFile.size)}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
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
                className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                title="Start Presentation (Space/Arrows to navigate)"
              >
                <Play className="w-4 h-4" />
                <span>{isPresentationMode ? 'Exit' : 'Present'}</span>
              </button>

              <div className="w-px h-6 bg-gray-300 mx-1" />

              <button
                onClick={handlePrint}
                className="p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-colors"
                title="Print Image"
              >
                <Printer className="w-4 h-4" />
              </button>

              <button
                onClick={handleDownload}
                className="p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-colors"
                title="Download Image"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Image Viewer */}
          <div className="flex-1 overflow-auto p-8 bg-gray-100 flex justify-center items-center relative">
            {/* Navigation Arrows */}
            {filteredFiles.length > 1 && (
              <>
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white border border-gray-300 shadow-md rounded-full hover:bg-gray-50 hover:border-gray-400 transition-all z-20"
                  title="Previous (←)"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white border border-gray-300 shadow-md rounded-full hover:bg-gray-50 hover:border-gray-400 transition-all z-20"
                  title="Next (→)"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
              </>
            )}

            {/* Image */}
            {currentImageUrl && (
              <img
                src={currentImageUrl}
                alt={currentFile?.name}
                className="max-w-full max-h-full shadow-lg border border-gray-300 rounded-sm transition-transform duration-200"
                style={{
                  transform: `scale(${zoom / 100}) rotate(${rotation}deg)`,
                  transformOrigin: 'center center',
                }}
                draggable={false}
              />
            )}

            {/* Zoom Controls */}
            <div className="absolute bottom-6 bg-white border border-gray-300 shadow-lg rounded-lg px-3 py-2 flex items-center gap-3 z-20">
              <button
                onClick={handleZoomOut}
                className="p-1.5 hover:bg-gray-100 rounded transition-colors text-gray-600 hover:text-gray-900"
                title="Zoom Out (-)"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={handleResetZoom}
                className="text-xs font-mono font-medium w-14 text-center hover:text-gray-900 transition-colors text-gray-600"
                title="Click to reset zoom"
              >
                {zoom}%
              </button>
              <button
                onClick={handleZoomIn}
                className="p-1.5 hover:bg-gray-100 rounded transition-colors text-gray-600 hover:text-gray-900"
                title="Zoom In (+)"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <div className="w-px h-5 bg-gray-300" />
              <button
                onClick={handleRotate}
                className="p-1.5 hover:bg-gray-100 rounded transition-colors text-gray-600 hover:text-gray-900"
                title="Rotate (R)"
              >
                <RotateCw className="w-4 h-4" />
              </button>
              <div className="w-px h-5 bg-gray-300" />
              <button
                onClick={toggleFullscreen}
                className="p-1.5 hover:bg-gray-100 rounded transition-colors text-gray-600 hover:text-gray-900"
                title="Fullscreen (F)"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Image Counter */}
            {filteredFiles.length > 1 && (
              <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white border border-gray-300 shadow-lg rounded-lg px-4 py-2 text-xs font-medium text-gray-700 z-20">
                {selectedIndex + 1} / {filteredFiles.length}
              </div>
            )}
          </div>
        </section>
      </main>

      <style>{`
        .scroller::-webkit-scrollbar {
          width: 8px;
        }
        .scroller::-webkit-scrollbar-track {
          background: #f9fafb;
        }
        .scroller::-webkit-scrollbar-thumb {
          background-color: #d1d5db;
          border-radius: 4px;
        }
        .scroller::-webkit-scrollbar-thumb:hover {
          background-color: #9ca3af;
        }
      `}</style>
    </div>
  );
};
