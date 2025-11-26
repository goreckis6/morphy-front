import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Search, X, Download, Printer, FileText, RotateCw, ZoomIn, ZoomOut, Maximize2, Play, ChevronLeft, ChevronRight } from 'lucide-react';
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
      setRotation(0); // Reset rotation when switching files
    } else if (isPresentationMode) {
      setSelectedIndex(0); // Loop back to start
    }
  }, [selectedIndex, filteredFiles.length, isPresentationMode]);

  const handlePrevious = useCallback(() => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
      setRotation(0); // Reset rotation when switching files
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
    const printWindow = window.open('', '_blank');
    if (printWindow && currentImageUrl) {
      printWindow.document.write(`
        <html>
          <head><title>${currentFile.name}</title></head>
          <body style="margin:0;display:flex;justify-content:center;align-items:center;min-height:100vh;">
            <img src="${currentImageUrl}" style="max-width:100%;max-height:100vh;object-fit:contain;" />
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();
      setTimeout(() => {
        printWindow.print();
      }, 250);
    }
  };

  const handleDownloadAsPDF = async () => {
    // Simple PDF download using canvas
    try {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = currentImageUrl;
      
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });

      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0);
        canvas.toBlob((blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = currentFile.name.replace(/\.(jpg|jpeg)$/i, '.pdf');
            a.click();
            URL.revokeObjectURL(url);
          }
        }, 'application/pdf');
      }
    } catch (error) {
      console.error('Error creating PDF:', error);
      alert('Failed to create PDF. Please try downloading the image instead.');
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

  // Keyboard navigation (after all handlers are defined)
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Don't handle keyboard shortcuts when typing in input fields
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
    <div className="fixed inset-0 z-50 flex flex-col bg-white" ref={viewerRef}>
      {/* Header */}
      <header className="h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-between px-6 shadow-md z-20">
        <div className="flex items-center gap-3">
          <div className="bg-white text-purple-600 p-1 rounded font-bold text-xs">MH</div>
          <span className="font-bold text-lg tracking-tight">MorphyHub</span>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-white/20 rounded transition-colors"
          title="Close (Esc)"
        >
          <X className="w-5 h-5" />
        </button>
      </header>

      <main className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <aside className="w-80 bg-white border-r border-gray-200 flex flex-col z-10 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
          {/* Search */}
          <div className="p-3 border-b border-gray-100">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search files..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
              />
            </div>
          </div>

          {/* Files Header */}
          <div className="px-4 py-2 flex justify-between items-center bg-gray-50/50">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Files ({filteredFiles.length})
            </span>
            {onAddFiles && (
              <button
                onClick={() => fileInputRef.current?.click()}
                className="text-purple-600 hover:text-purple-700 text-xs font-bold uppercase tracking-wide transition-colors"
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
          <div className="flex-1 overflow-y-auto scroller p-3 space-y-2">
            {filteredFiles.map((file, index) => {
              const fileIndex = files.indexOf(file);
              const isSelected = fileIndex === selectedIndex;
              const imageUrl = imageUrls.get(fileIndex.toString()) || '';

              return (
                <div
                  key={fileIndex}
                  onClick={() => handleFileSelect(fileIndex)}
                  className={`group flex items-start gap-3 p-2 rounded-lg cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-purple-50 border border-purple-200 shadow-sm'
                      : 'border border-transparent hover:bg-gray-100'
                  }`}
                >
                  <div className="w-12 h-12 bg-gray-200 rounded overflow-hidden flex-shrink-0">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={file.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-300" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col justify-center h-12">
                    <p
                      className={`text-sm truncate ${
                        isSelected ? 'font-semibold text-purple-900' : 'font-medium text-gray-700'
                      }`}
                      title={file.name}
                    >
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

        {/* Main Viewer */}
        <section className="flex-1 flex flex-col min-w-0 bg-gray-50 relative">
          {/* Toolbar */}
          <div className="h-14 border-b border-gray-200 bg-white flex justify-between items-center px-4 shadow-sm z-10">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-700">{currentFile?.name}</span>
              <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-500 rounded border border-gray-200">
                JPG
              </span>
              {currentFile && (
                <span className="text-xs text-gray-400">
                  {formatFileSize(currentFile.size)}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPresentationMode(!isPresentationMode)}
                className="btn-icon flex items-center gap-2 px-3 py-1.5 text-gray-600 hover:bg-purple-50 hover:text-purple-700 rounded transition-colors"
                title="Start Presentation (Space/Arrows to navigate)"
              >
                <Play className="w-4 h-4" />
                <span className="text-sm font-medium">
                  {isPresentationMode ? 'Exit' : 'Present'}
                </span>
              </button>

              <div className="w-px h-6 bg-gray-200 mx-1" />

              <button
                onClick={handlePrint}
                className="btn-icon w-9 h-9 text-gray-600 hover:bg-gray-100 rounded transition-colors"
                title="Print Image"
              >
                <Printer className="w-4 h-4" />
              </button>

              <button
                onClick={handleDownloadAsPDF}
                className="btn-icon w-9 h-9 text-gray-600 hover:bg-gray-100 rounded transition-colors"
                title="Download as PDF"
              >
                <FileText className="w-4 h-4" />
              </button>

              <button
                onClick={handleDownload}
                className="btn-icon w-9 h-9 text-gray-600 hover:bg-gray-100 rounded transition-colors"
                title="Download Image"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Image Viewer */}
          <div className="flex-1 overflow-auto p-8 checkerboard flex justify-center items-center relative">
            {/* Navigation Arrows (in presentation mode or always visible) */}
            {filteredFiles.length > 1 && (
              <>
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur border border-gray-200 shadow-lg rounded-full hover:bg-white hover:text-purple-600 transition-all z-20"
                  title="Previous (←)"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur border border-gray-200 shadow-lg rounded-full hover:bg-white hover:text-purple-600 transition-all z-20"
                  title="Next (→)"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Image */}
            {currentImageUrl && (
              <img
                src={currentImageUrl}
                alt={currentFile?.name}
                className="max-w-full max-h-full shadow-2xl border border-gray-200 transition-transform duration-200"
                style={{
                  transform: `scale(${zoom / 100}) rotate(${rotation}deg)`,
                  transformOrigin: 'center center',
                }}
                draggable={false}
              />
            )}

            {/* Zoom Controls */}
            <div className="absolute bottom-6 bg-white/90 backdrop-blur border border-gray-200 shadow-lg rounded-full px-4 py-2 flex items-center gap-4 z-20">
              <button
                onClick={handleZoomOut}
                className="hover:text-purple-600 transition-colors"
                title="Zoom Out (-)"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={handleResetZoom}
                className="text-xs font-mono font-medium w-16 text-center hover:text-purple-600 transition-colors"
                title="Click to reset zoom"
              >
                {zoom}%
              </button>
              <button
                onClick={handleZoomIn}
                className="hover:text-purple-600 transition-colors"
                title="Zoom In (+)"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <div className="w-px h-4 bg-gray-300" />
              <button
                onClick={handleRotate}
                className="hover:text-purple-600 transition-colors"
                title="Rotate (R)"
              >
                <RotateCw className="w-4 h-4" />
              </button>
              <div className="w-px h-4 bg-gray-300" />
              <button
                onClick={toggleFullscreen}
                className="hover:text-purple-600 transition-colors"
                title="Fullscreen (F)"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Image Counter */}
            {filteredFiles.length > 1 && (
              <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur border border-gray-200 shadow-lg rounded-full px-4 py-2 text-xs font-medium text-gray-700 z-20">
                {selectedIndex + 1} / {filteredFiles.length}
              </div>
            )}
          </div>
        </section>
      </main>

      <style>{`
        .scroller::-webkit-scrollbar {
          width: 6px;
        }
        .scroller::-webkit-scrollbar-thumb {
          background-color: #cbd5e1;
          border-radius: 4px;
        }
        .scroller::-webkit-scrollbar-thumb:hover {
          background-color: #94a3b8;
        }
        .checkerboard {
          background-color: #f3f4f6;
          background-image:
            linear-gradient(45deg, #e5e7eb 25%, transparent 25%),
            linear-gradient(-45deg, #e5e7eb 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #e5e7eb 75%),
            linear-gradient(-45deg, transparent 75%, #e5e7eb 75%);
          background-size: 20px 20px;
          background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
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

