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
  onRemoveFile?: (index: number) => void;
}

export const DOCXEditor: React.FC<DOCXEditorProps> = ({ files, onClose, onAddFiles, onRemoveFile }) => {
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
  const [pageThumbnails, setPageThumbnails] = useState<Map<string, string>>(new Map()); // key: "fileIndex-pageNum"
  const fileInputRef = useRef<HTMLInputElement>(null);
  const viewerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pagesContainerRef = useRef<HTMLDivElement>(null);
  const lastPageRef = useRef<number>(1);
  const loadingRef = useRef<Set<number>>(new Set()); // Track which files are being loaded

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

  // Helper function to create error HTML
  const createErrorHtml = (errorMessage: string) => {
    const errorContent = `<div class="docx-a4-container"><div class="docx-a4-page"><p style="color: red; padding: 20px; font-size: 14px;">${errorMessage}</p></div></div>`;
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DOCX Preview Error</title>
  <style>
    * { box-sizing: border-box; }
    html, body {
      margin: 0;
      padding: 0;
      background: #e5e5e5;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
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
    .docx-a4-page {
      width: 210mm;
      min-height: 297mm;
      background: white;
      box-shadow: 0 2px 8px rgba(0,0,0,0.15);
      margin: 0 auto 20px;
      padding: 25.4mm 31.7mm;
    }
  </style>
</head>
<body>
  ${errorContent}
</body>
</html>`;
  };

  // Load DOCX files and fetch HTML previews
  useEffect(() => {
    // Prevent duplicate loading
    if (files.length === 0) return;
    
    console.log('Files changed, checking which need loading. Total files:', files.length);
    console.log('Already loaded files:', Array.from(docxHtml.keys()));
    
    const htmls = new Map(docxHtml); // Start with existing HTMLs
    const loading = new Map<number, boolean>();
    
    // Find files that need loading
    const filesToLoad: number[] = [];
    files.forEach((file, index) => {
      if (!docxHtml.has(index) && !loadingRef.current.has(index)) {
        filesToLoad.push(index);
      }
    });
    
    console.log('Files to load:', filesToLoad);
    
    if (filesToLoad.length === 0) {
      console.log('No new files to load');
      return;
    }
    
    // Use Promise.all to handle async operations properly
    const loadPromises = filesToLoad.map(async (index) => {
      const file = files[index];
      
      // Mark as loading
      loadingRef.current.add(index);
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
          
          console.log('Backend response status:', response.status);
          console.log('Backend response content-type:', contentType);
          console.log('Backend response length:', html.length);
          console.log('Backend response preview:', html.substring(0, 500));

          if (contentType.includes('text/html') && html.trim().length > 0) {
            // Process HTML to display in A4 page format like Microsoft Word
            // Extract body content from backend HTML
            let bodyContent = '';
            
            // First, try to extract from body tags
            const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
            if (bodyMatch && bodyMatch[1]) {
              bodyContent = bodyMatch[1];
            } else {
              // If no body tag, check for html tag
              const htmlMatch = html.match(/<html[^>]*>([\s\S]*)<\/html>/i);
              if (htmlMatch && htmlMatch[1]) {
                // Remove head tag if present
                bodyContent = htmlMatch[1].replace(/<head[^>]*>[\s\S]*?<\/head>/i, '');
              } else {
                // Backend returns just content (no wrapper tags) - use it directly
                bodyContent = html;
              }
            }
            
            // Clean up body content - remove scripts and styles that might interfere
            bodyContent = bodyContent.replace(/<script[\s\S]*?<\/script>/gi, '');
            bodyContent = bodyContent.replace(/<style[\s\S]*?<\/style>/gi, '');
            
            // Trim whitespace
            bodyContent = bodyContent.trim();
            
            // If bodyContent is empty or just whitespace, show error
            if (!bodyContent || bodyContent.length === 0) {
              console.error('Empty content from backend');
              bodyContent = '<p style="color: red; padding: 20px;">No content received from backend. Please check the file format.</p>';
            }
            
            console.log('Extracted body content length:', bodyContent.length);
            console.log('Body content preview:', bodyContent.substring(0, 200));
            
            // Create clean HTML structure with A4 pages
            const wrappedContent = `<div class="docx-a4-container"><div class="docx-a4-page">${bodyContent}</div></div>`;
            
            // Build complete HTML document
            let processedHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DOCX Preview</title>`;

            // Add A4 page styling (like Microsoft Word)
            processedHtml += `
  <style>
    * {
      box-sizing: border-box;
    }
    html, body {
      margin: 0;
      padding: 0;
      background: #e5e5e5;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
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
      width: 100%;
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
      box-sizing: border-box;
    }
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
  </style>
</head>
<body>
  ${wrappedContent}
`;
            
            // Add JavaScript to split content into multiple A4 pages
            processedHtml += `
  <script>
    (function() {
      let hasSplit = false; // Flag to prevent multiple splits
      let originalContent = null; // Store original content
      
      function splitIntoA4Pages() {
        try {
          const container = document.querySelector('.docx-a4-container');
          if (!container) {
            if (!hasSplit) {
              setTimeout(splitIntoA4Pages, 200);
            }
            return;
          }
          
          // Check if already split (using both flag and data attribute)
          const isAlreadySplit = container.getAttribute('data-split-complete') === 'true';
          const existingPages = container.querySelectorAll('.docx-a4-page');
          if ((hasSplit || isAlreadySplit) && existingPages.length > 1) {
            console.log('Pages already split, skipping');
            return;
          }
          
          const firstPage = container.querySelector('.docx-a4-page');
          if (!firstPage) {
            if (!hasSplit) {
              setTimeout(splitIntoA4Pages, 200);
            }
            return;
          }
          
          // A4 content area: 297mm - (25.4mm * 2) = 246.2mm ≈ 931px at 96 DPI
          const maxContentHeight = 931; // pixels (246.2mm)
          const pageWidth = 210; // mm
          const contentWidth = 146.6; // mm (210mm - 31.7mm * 2)
          
          // Get original content (only on first run)
          if (!originalContent) {
            originalContent = firstPage.innerHTML;
            console.log('Original content length:', originalContent.length);
            console.log('Original content preview:', originalContent.substring(0, 300));
            
            // Check actual rendered height immediately
            void firstPage.offsetHeight;
            const renderedHeight = firstPage.scrollHeight;
            const paddingPxCheck = 25.4 * 2 * 3.779527559;
            const contentHeight = renderedHeight - paddingPxCheck;
            const estimatedPagesFromHeight = Math.max(1, Math.ceil(contentHeight / maxContentHeight));
            console.log('Rendered content height:', contentHeight, 'px, estimated pages:', estimatedPagesFromHeight);
            
            // If content is clearly taller than one page, we know we need to split
            if (estimatedPagesFromHeight > 1) {
              console.log('Content is', estimatedPagesFromHeight, 'pages tall - will force split');
            }
          }
          
          if (!originalContent || !originalContent.trim()) {
            console.warn('No content to split');
            container.setAttribute('data-total-pages', '1');
            hasSplit = true;
            return;
          }
          
          // Check if content looks like it has structure
          const hasBlockElements = /<(p|div|h[1-6]|table|ul|ol|li|tr|td|th)[\s>]/i.test(originalContent);
          console.log('Content has block elements:', hasBlockElements);
          
          // Count how many top-level block elements we have
          const tempCheckDiv = document.createElement('div');
          tempCheckDiv.innerHTML = originalContent;
          const topLevelElements = Array.from(tempCheckDiv.children).filter(el => {
            const tag = el.tagName.toLowerCase();
            return ['p', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'table', 'ul', 'ol', 'li', 'blockquote', 'pre', 'hr'].includes(tag);
          });
          console.log('Top-level block elements found:', topLevelElements.length);
          
          if (!hasBlockElements && originalContent.length > 500) {
            console.warn('Content is long but has no block elements - will use text-based splitting');
          }
          
          if (topLevelElements.length === 0 && originalContent.length > 1000) {
            console.warn('No top-level block elements found - content might be in one big element');
          }
          
          // If already split, don't split again
          if (hasSplit) {
            return;
          }
          
          // Create temporary container to measure content
          const tempDiv = document.createElement('div');
          tempDiv.style.cssText = 'position: absolute; visibility: hidden; width: ' + contentWidth + 'mm; top: -9999px; left: -9999px; padding: 0; font-size: 12pt; line-height: 1.5;';
          tempDiv.innerHTML = originalContent;
          document.body.appendChild(tempDiv);
          
          // Force layout and wait a bit for rendering
          void tempDiv.offsetHeight;
          setTimeout(() => {
            void tempDiv.offsetHeight;
          }, 100);
          
          // Get all elements - try multiple strategies
          const allElements = [];
          
          // Strategy 1: Get all block-level elements using TreeWalker
          // First, try to get direct children (top-level elements)
          const directBlockChildren = Array.from(tempDiv.children).filter(el => {
            const tag = el.tagName.toLowerCase();
            const blockTags = ['p', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'table', 'ul', 'ol', 'li', 'blockquote', 'pre', 'hr', 'tr', 'td', 'th', 'span', 'strong', 'em', 'b', 'i'];
            return blockTags.includes(tag) || el.children.length > 0;
          });
          
          if (directBlockChildren.length > 0) {
            console.log('Found', directBlockChildren.length, 'direct block children');
            directBlockChildren.forEach(el => allElements.push(el));
          } else {
            // Use TreeWalker to find nested elements
            const walker = document.createTreeWalker(
              tempDiv,
              NodeFilter.SHOW_ELEMENT,
              {
                acceptNode: function(node) {
                  const tagName = node.tagName ? node.tagName.toLowerCase() : '';
                  const blockTags = ['p', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'table', 'ul', 'ol', 'li', 'blockquote', 'pre', 'hr', 'tr', 'td', 'th'];
                  if (blockTags.includes(tagName)) {
                    // Only accept if it's a direct child or if parent is not a block element
                    const parent = node.parentElement;
                    if (!parent || parent === tempDiv || !blockTags.includes(parent.tagName.toLowerCase())) {
                      return NodeFilter.FILTER_ACCEPT;
                    }
                  }
                  return NodeFilter.FILTER_SKIP;
                }
              }
            );
            
            let node;
            while (node = walker.nextNode()) {
              allElements.push(node);
            }
            
            console.log('Found', allElements.length, 'block elements via TreeWalker');
          }
          
          // Strategy 2: If no elements, get direct children
          if (allElements.length === 0) {
            const directChildren = Array.from(tempDiv.children);
            if (directChildren.length > 0) {
              allElements.push(...directChildren);
              console.log('Using direct children:', directChildren.length);
            }
          }
          
          // Strategy 3: If still empty, parse HTML and get all top-level elements
          if (allElements.length === 0) {
            const parser = new DOMParser();
            const parsed = parser.parseFromString('<div>' + originalContent + '</div>', 'text/html');
            const topLevelElements = Array.from(parsed.body.firstElementChild?.children || []);
            if (topLevelElements.length > 0) {
              topLevelElements.forEach(el => {
                const cloned = el.cloneNode(true);
                allElements.push(cloned);
              });
              console.log('Using parsed top-level elements:', topLevelElements.length);
            }
          }
          
          // Strategy 4: Last resort - try to find any elements in the content
          if (allElements.length === 0) {
            console.warn('No block elements found, trying alternative methods');
            
            // Try to find any elements at all
            const anyElements = tempDiv.querySelectorAll('*');
            if (anyElements.length > 0) {
              // Get top-level elements only
              Array.from(tempDiv.children).forEach(child => {
                allElements.push(child);
              });
              console.log('Found', allElements.length, 'top-level children');
            } else {
              // Last resort: create wrapper with all content
              const wrapper = document.createElement('div');
              wrapper.innerHTML = originalContent;
              allElements.push(wrapper);
              console.log('Created wrapper with all content');
            }
          }
          
          console.log('Total elements to distribute:', allElements.length);
          
          // If still no elements, try splitting by content height directly
          if (allElements.length === 0 || (allElements.length === 1 && allElements[0].textContent && allElements[0].textContent.length > 1000)) {
            console.log('Trying direct content height splitting');
            const contentDiv = document.createElement('div');
            contentDiv.innerHTML = originalContent;
            contentDiv.style.cssText = 'width: ' + contentWidth + 'mm; position: absolute; visibility: hidden; top: -9999px;';
            document.body.appendChild(contentDiv);
            void contentDiv.offsetHeight;
            
            const totalHeight = contentDiv.scrollHeight;
            const estimatedPages = Math.max(1, Math.ceil(totalHeight / maxContentHeight));
            console.log('Content height:', totalHeight, 'px, estimated pages:', estimatedPages);
            
            if (estimatedPages > 1) {
              // Split content into chunks by height
              const chunkHeight = Math.ceil(totalHeight / estimatedPages);
              let currentChunk = [];
              let currentChunkHeight = 0;
              let currentPageEl = firstPage;
              let currentPageNum = 1;
              
              // Get all child nodes
              const allNodes = Array.from(contentDiv.childNodes);
              
              allNodes.forEach((node) => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                  const el = node as HTMLElement;
                  const elHeight = el.offsetHeight || el.scrollHeight || 50;
                  
                  if (currentChunkHeight + elHeight > chunkHeight && currentChunk.length > 0) {
                    // Create new page
                    if (currentPageNum > 1) {
                      currentPageEl = document.createElement('div');
                      currentPageEl.className = 'docx-a4-page';
                      currentPageEl.id = 'docx-page-' + currentPageNum;
                      currentPageEl.setAttribute('data-page', currentPageNum.toString());
                      currentPageEl.style.cssText = 'width: ' + pageWidth + 'mm; min-height: 297mm; background: white; box-shadow: 0 2px 8px rgba(0,0,0,0.15); margin: 0 auto 20px; padding: 25.4mm 31.7mm; position: relative; page-break-after: always; display: block; box-sizing: border-box;';
                      container.appendChild(currentPageEl);
                    }
                    
                    // Add chunk to page
                    currentChunk.forEach(n => currentPageEl.appendChild(n.cloneNode(true)));
                    currentChunk = [];
                    currentChunkHeight = 0;
                    currentPageNum++;
                  }
                  
                  currentChunk.push(el);
                  currentChunkHeight += elHeight;
                }
              });
              
              // Add remaining chunk
              if (currentChunk.length > 0) {
                if (currentPageNum > 1 && currentPageEl !== firstPage) {
                  currentPageEl = document.createElement('div');
                  currentPageEl.className = 'docx-a4-page';
                  currentPageEl.id = 'docx-page-' + currentPageNum;
                  currentPageEl.setAttribute('data-page', currentPageNum.toString());
                  currentPageEl.style.cssText = 'width: ' + pageWidth + 'mm; min-height: 297mm; background: white; box-shadow: 0 2px 8px rgba(0,0,0,0.15); margin: 0 auto 20px; padding: 25.4mm 31.7mm; position: relative; page-break-after: always; display: block; box-sizing: border-box;';
                  container.appendChild(currentPageEl);
                }
                currentChunk.forEach(n => currentPageEl.appendChild(n.cloneNode(true)));
              }
              
              document.body.removeChild(contentDiv);
              
              // Skip the element-based distribution
              const totalPages = container.querySelectorAll('.docx-a4-page').length;
              container.setAttribute('data-total-pages', totalPages.toString());
              hasSplit = true;
              container.setAttribute('data-split-complete', 'true');
              window.dispatchEvent(new CustomEvent('docx-pages-split', { 
                detail: { totalPages: totalPages } 
              }));
              console.log('Direct height split completed:', totalPages, 'pages');
              return;
            }
            
            document.body.removeChild(contentDiv);
          }
          
          // Clear first page
          firstPage.innerHTML = '';
          firstPage.id = 'docx-page-1';
          firstPage.setAttribute('data-page', '1');
          
          let currentPage = firstPage;
          let currentHeight = 0;
          let pageNum = 1;
          
          // Distribute elements across pages - improved algorithm
          const paddingPx = 25.4 * 2 * 3.779527559; // mm to px
          
          // First, measure all elements to get accurate heights
          const elementHeights: number[] = [];
          allElements.forEach((element) => {
            // Measure in temp container
            const measureDiv = document.createElement('div');
            measureDiv.style.cssText = 'position: absolute; visibility: hidden; width: ' + contentWidth + 'mm; top: -9999px;';
            measureDiv.appendChild(element.cloneNode(true));
            document.body.appendChild(measureDiv);
            void measureDiv.offsetHeight;
            const height = Math.max(
              measureDiv.offsetHeight || 0,
              measureDiv.scrollHeight || 0,
              20
            );
            elementHeights.push(height);
            document.body.removeChild(measureDiv);
          });
          
          console.log('Measured element heights:', elementHeights);
          
          // Now distribute elements based on measured heights
          allElements.forEach((element, elemIndex) => {
            const elementHeight = elementHeights[elemIndex] || 30;
            
            // Check if adding this element would exceed page height
            const wouldExceed = (currentHeight + elementHeight) > maxContentHeight;
            
            if (wouldExceed && currentHeight > 50) {
              // Create new page before adding this element
              pageNum++;
              currentPage = document.createElement('div');
              currentPage.className = 'docx-a4-page';
              currentPage.id = 'docx-page-' + pageNum;
              currentPage.setAttribute('data-page', pageNum.toString());
              currentPage.style.cssText = 'width: ' + pageWidth + 'mm; min-height: 297mm; background: white; box-shadow: 0 2px 8px rgba(0,0,0,0.15); margin: 0 auto 20px; padding: 25.4mm 31.7mm; position: relative; page-break-after: always; display: block; box-sizing: border-box;';
              container.appendChild(currentPage);
              currentHeight = 0;
              console.log('Created new page', pageNum, 'before element', elemIndex);
            }
            
            // Add element to current page
            const cloned = element.cloneNode(true);
            currentPage.appendChild(cloned);
            
            // Update height after adding
            void currentPage.offsetHeight;
            const pageContentHeight = currentPage.scrollHeight - paddingPx;
            currentHeight = Math.max(currentHeight, pageContentHeight);
          });
          
          console.log('Distributed', allElements.length, 'elements across', pageNum, 'pages');
          
          // Verify we actually created multiple pages
          const pagesAfterDistribution = container.querySelectorAll('.docx-a4-page');
          console.log('Pages after distribution:', pagesAfterDistribution.length);
          
          // If we still only have one page, force split it
          if (pagesAfterDistribution.length === 1) {
            const singlePage = pagesAfterDistribution[0];
            void singlePage.offsetHeight;
            const pageContentHeight = singlePage.scrollHeight - paddingPx;
            const estimatedPages = Math.max(2, Math.ceil(pageContentHeight / maxContentHeight));
            
            console.log('Only 1 page detected, content height:', pageContentHeight, 'px, estimated pages:', estimatedPages);
            
            if (estimatedPages > 1) {
              // Strategy 1: If we have multiple elements, distribute them
              if (allElements.length > 1) {
                console.log('Force splitting', allElements.length, 'elements into', estimatedPages, 'pages');
                const elementsPerPage = Math.max(1, Math.ceil(allElements.length / estimatedPages));
                singlePage.innerHTML = '';
                
                allElements.forEach((element, idx) => {
                  const targetPageNum = Math.floor(idx / elementsPerPage) + 1;
                  let targetPage = container.querySelector('.docx-a4-page[data-page="' + targetPageNum + '"]');
                  
                  if (!targetPage) {
                    targetPage = document.createElement('div');
                    targetPage.className = 'docx-a4-page';
                    targetPage.id = 'docx-page-' + targetPageNum;
                    targetPage.setAttribute('data-page', targetPageNum.toString());
                    targetPage.style.cssText = 'width: ' + pageWidth + 'mm; min-height: 297mm; background: white; box-shadow: 0 2px 8px rgba(0,0,0,0.15); margin: 0 auto 20px; padding: 25.4mm 31.7mm; position: relative; page-break-after: always; display: block; box-sizing: border-box;';
                    container.appendChild(targetPage);
                  }
                  
                  targetPage.appendChild(element.cloneNode(true));
                });
                
                console.log('Force created', container.querySelectorAll('.docx-a4-page').length, 'pages from elements');
              } else if (allElements.length === 1) {
                // Strategy 2: Split single large element by its children
                console.log('Splitting single large element by its children');
                const largeElement = allElements[0];
                const children = Array.from(largeElement.children || []);
                
                if (children.length > 0) {
                  singlePage.innerHTML = '';
                  const childrenPerPage = Math.max(1, Math.ceil(children.length / estimatedPages));
                  
                  children.forEach((child, idx) => {
                    const targetPageNum = Math.floor(idx / childrenPerPage) + 1;
                    let targetPage = container.querySelector('.docx-a4-page[data-page="' + targetPageNum + '"]');
                    
                    if (!targetPage) {
                      targetPage = document.createElement('div');
                      targetPage.className = 'docx-a4-page';
                      targetPage.id = 'docx-page-' + targetPageNum;
                      targetPage.setAttribute('data-page', targetPageNum.toString());
                      targetPage.style.cssText = 'width: ' + pageWidth + 'mm; min-height: 297mm; background: white; box-shadow: 0 2px 8px rgba(0,0,0,0.15); margin: 0 auto 20px; padding: 25.4mm 31.7mm; position: relative; page-break-after: always; display: block; box-sizing: border-box;';
                      container.appendChild(targetPage);
                    }
                    
                    targetPage.appendChild(child.cloneNode(true));
                  });
                  
                  console.log('Split large element into', container.querySelectorAll('.docx-a4-page').length, 'pages');
                } else {
                  // Strategy 3: Split by text content - try to preserve HTML structure
                  console.log('Splitting single element by text content');
                  const elementHTML = largeElement.innerHTML || largeElement.textContent || '';
                  
                  // Try to split by paragraphs or line breaks first
                  const paragraphs = elementHTML.split(/(<p[^>]*>[\s\S]*?<\/p>|<br\s*\/?>|\n\n)/i);
                  const validParagraphs = paragraphs.filter(p => p.trim().length > 0);
                  
                  if (validParagraphs.length > estimatedPages) {
                    // Split paragraphs across pages
                    singlePage.innerHTML = '';
                    const parasPerPage = Math.ceil(validParagraphs.length / estimatedPages);
                    
                    validParagraphs.forEach((para, idx) => {
                      const targetPageNum = Math.floor(idx / parasPerPage) + 1;
                      let targetPage = container.querySelector('.docx-a4-page[data-page="' + targetPageNum + '"]');
                      
                      if (!targetPage) {
                        targetPage = document.createElement('div');
                        targetPage.className = 'docx-a4-page';
                        targetPage.id = 'docx-page-' + targetPageNum;
                        targetPage.setAttribute('data-page', targetPageNum.toString());
                        targetPage.style.cssText = 'width: ' + pageWidth + 'mm; min-height: 297mm; background: white; box-shadow: 0 2px 8px rgba(0,0,0,0.15); margin: 0 auto 20px; padding: 25.4mm 31.7mm; position: relative; page-break-after: always; display: block; box-sizing: border-box;';
                        container.appendChild(targetPage);
                      }
                      
                      // Create a div to hold the paragraph
                      const paraDiv = document.createElement('div');
                      paraDiv.innerHTML = para;
                      targetPage.appendChild(paraDiv);
                    });
                    
                    console.log('Split by paragraphs into', container.querySelectorAll('.docx-a4-page').length, 'pages');
                  } else {
                    // Fallback: split by character count
                    console.log('Splitting by character count');
                    const textContent = largeElement.textContent || elementHTML.replace(/<[^>]+>/g, '');
                    const charsPerPage = Math.ceil(textContent.length / estimatedPages);
                    
                    singlePage.innerHTML = '';
                    
                    for (let i = 0; i < estimatedPages; i++) {
                      const startChar = i * charsPerPage;
                      const endChar = Math.min((i + 1) * charsPerPage, textContent.length);
                      const pageText = textContent.substring(startChar, endChar).trim();
                      
                      if (pageText.length === 0) continue;
                      
                      let targetPage = container.querySelector('.docx-a4-page[data-page="' + (i + 1) + '"]');
                      if (!targetPage) {
                        targetPage = document.createElement('div');
                        targetPage.className = 'docx-a4-page';
                        targetPage.id = 'docx-page-' + (i + 1);
                        targetPage.setAttribute('data-page', (i + 1).toString());
                        targetPage.style.cssText = 'width: ' + pageWidth + 'mm; min-height: 297mm; background: white; box-shadow: 0 2px 8px rgba(0,0,0,0.15); margin: 0 auto 20px; padding: 25.4mm 31.7mm; position: relative; page-break-after: always; display: block; box-sizing: border-box;';
                        container.appendChild(targetPage);
                      }
                      
                      const p = document.createElement('p');
                      p.textContent = pageText;
                      targetPage.appendChild(p);
                    }
                    
                    console.log('Split by text into', container.querySelectorAll('.docx-a4-page').length, 'pages');
                  }
                }
              }
            }
          }
          
          // Clean up
          if (tempDiv.parentNode) {
            document.body.removeChild(tempDiv);
          }
          
          // Final check: ensure all content is distributed
          // Re-check pages after distribution
          const pages = container.querySelectorAll('.docx-a4-page');
          let finalPageCount = pages.length;
          
          // If we still have only one page but content is tall, force split
          if (pages.length === 1 && allElements.length > 0) {
            const singlePage = pages[0];
            void singlePage.offsetHeight;
            const pageContentHeight = singlePage.scrollHeight;
            const paddingPxCheck = 25.4 * 2 * 3.779527559;
            const actualContentHeight = pageContentHeight - paddingPxCheck;
            
            // If content is much taller than one page, split it
            if (actualContentHeight > maxContentHeight * 1.2) {
              const estimatedPages = Math.max(2, Math.ceil(actualContentHeight / maxContentHeight));
              console.log('Content too tall (' + actualContentHeight + 'px), forcing split into', estimatedPages, 'pages');
              
              // Re-split by dividing elements evenly
              const elementsPerPage = Math.max(1, Math.ceil(allElements.length / estimatedPages));
              
              // Clear first page
              singlePage.innerHTML = '';
              
              // Distribute elements across pages
              allElements.forEach((element, elemIndex) => {
                const targetPageIndex = Math.floor(elemIndex / elementsPerPage);
                let targetPage = targetPageIndex === 0 ? singlePage : null;
                
                // Find or create target page
                if (targetPageIndex > 0) {
                  const existingPage = container.querySelector('.docx-a4-page[data-page="' + (targetPageIndex + 1) + '"]');
                  if (existingPage) {
                    targetPage = existingPage;
                  } else {
                    // Create new page
                    targetPage = document.createElement('div');
                    targetPage.className = 'docx-a4-page';
                    targetPage.id = 'docx-page-' + (targetPageIndex + 1);
                    targetPage.setAttribute('data-page', (targetPageIndex + 1).toString());
                    targetPage.style.cssText = 'width: ' + pageWidth + 'mm; min-height: 297mm; background: white; box-shadow: 0 2px 8px rgba(0,0,0,0.15); margin: 0 auto 20px; padding: 25.4mm 31.7mm; position: relative; page-break-after: always; display: block; box-sizing: border-box;';
                    container.appendChild(targetPage);
                  }
                }
                
                if (targetPage) {
                  targetPage.appendChild(element.cloneNode(true));
                }
              });
              
              // Re-count pages
              finalPageCount = container.querySelectorAll('.docx-a4-page').length;
              console.log('After force split, page count:', finalPageCount);
            }
          }
          
          // Final verification: check if we need more pages based on actual content height
          const allPagesFinal = container.querySelectorAll('.docx-a4-page');
          let finalPageCount = allPagesFinal.length;
          
          // Check each page's content height
          allPagesFinal.forEach((page, idx) => {
            void page.offsetHeight;
            const pageContentHeight = page.scrollHeight - paddingPx;
            if (pageContentHeight > maxContentHeight * 1.1) {
              console.warn('Page', (idx + 1), 'is too tall:', pageContentHeight, 'px - should split further');
            }
          });
          
          // If we still only have 1 page but content is clearly multi-page, force split one more time
          if (finalPageCount === 1 && allPagesFinal.length > 0) {
            const lastPage = allPagesFinal[0];
            void lastPage.offsetHeight;
            const lastPageHeight = lastPage.scrollHeight - paddingPx;
            const stillNeedsPages = Math.ceil(lastPageHeight / maxContentHeight);
            
            if (stillNeedsPages > 1) {
              console.log('Final check: content still needs', stillNeedsPages, 'pages, forcing final split');
              // Get all content from the single page
              const allContent = lastPage.innerHTML;
              lastPage.innerHTML = '';
              
              // Split by creating multiple pages with equal content distribution
              const contentLength = allContent.length;
              const contentPerPage = Math.ceil(contentLength / stillNeedsPages);
              
              for (let i = 0; i < stillNeedsPages; i++) {
                const startIdx = i * contentPerPage;
                const endIdx = Math.min((i + 1) * contentPerPage, contentLength);
                const pageContent = allContent.substring(startIdx, endIdx);
                
                let targetPage = container.querySelector('.docx-a4-page[data-page="' + (i + 1) + '"]');
                if (!targetPage) {
                  targetPage = document.createElement('div');
                  targetPage.className = 'docx-a4-page';
                  targetPage.id = 'docx-page-' + (i + 1);
                  targetPage.setAttribute('data-page', (i + 1).toString());
                  targetPage.style.cssText = 'width: ' + pageWidth + 'mm; min-height: 297mm; background: white; box-shadow: 0 2px 8px rgba(0,0,0,0.15); margin: 0 auto 20px; padding: 25.4mm 31.7mm; position: relative; page-break-after: always; display: block; box-sizing: border-box;';
                  container.appendChild(targetPage);
                } else {
                  targetPage.innerHTML = pageContent;
                }
              }
              
              finalPageCount = container.querySelectorAll('.docx-a4-page').length;
              console.log('Final split created', finalPageCount, 'pages');
            }
          }
          
          // Update page count
          const totalPages = finalPageCount;
          container.setAttribute('data-total-pages', totalPages.toString());
          console.log('Final page count:', totalPages, 'pages created');
          
          // Verify all pages are visible
          const allPages = container.querySelectorAll('.docx-a4-page');
          console.log('All pages in DOM:', allPages.length);
          allPages.forEach((page, idx) => {
            void page.offsetHeight;
            console.log('Page', (idx + 1), ':', page.id, 'height:', page.scrollHeight, 'px');
          });
          
          // Ensure all pages have IDs
          container.querySelectorAll('.docx-a4-page').forEach((page, idx) => {
            if (!page.id) {
              page.id = 'docx-page-' + (idx + 1);
            }
            if (!page.getAttribute('data-page')) {
              page.setAttribute('data-page', (idx + 1).toString());
            }
          });
          
          console.log('Split into', totalPages, 'A4 pages');
          
          // Mark as split to prevent re-running (both flag and data attribute)
          hasSplit = true;
          container.setAttribute('data-split-complete', 'true');
          
          // Notify parent
          window.dispatchEvent(new CustomEvent('docx-pages-split', { 
            detail: { totalPages: totalPages } 
          }));
        } catch (e) {
          console.error('Error splitting pages:', e);
          hasSplit = true; // Mark as attempted even on error to prevent infinite retries
        }
      }
      
      // Run splitting with multiple triggers for reliability
      let hasRun = false;
      let runCount = 0;
      const maxRuns = 3;
      
      function runSplitOnce() {
        if (hasRun && runCount >= maxRuns) return;
        hasRun = true;
        runCount++;
        console.log('Running split attempt', runCount);
        setTimeout(splitIntoA4Pages, 100);
      }
      
      // Try immediately if ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', runSplitOnce);
      } else {
        runSplitOnce();
      }
      
      // Also try on window load
      window.addEventListener('load', function() {
        if (!hasSplit && runCount < maxRuns) {
          setTimeout(() => {
            runCount++;
            splitIntoA4Pages();
          }, 300);
        }
      });
      
      // Use MutationObserver to detect when content is added
      const observer = new MutationObserver((mutations) => {
        if (!hasSplit && runCount < maxRuns) {
          const container = document.querySelector('.docx-a4-container');
          if (container) {
            const firstPage = container.querySelector('.docx-a4-page');
            if (firstPage && firstPage.innerHTML.trim().length > 100) {
              console.log('MutationObserver detected content, running split');
              runCount++;
              setTimeout(splitIntoA4Pages, 200);
              observer.disconnect();
            }
          }
        }
      });
      
      // Observe the document body for changes
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
      
      // Disconnect observer after 10 seconds
      setTimeout(() => observer.disconnect(), 10000);
    })();
  </script>
</body>
</html>`;

            htmls.set(index, processedHtml);
            setDocxHtml(new Map(htmls));

            // Estimate page count - wait for JavaScript to split pages
            setTimeout(() => {
              const iframe = document.createElement('iframe');
              iframe.style.display = 'none';
              iframe.srcdoc = processedHtml;
              document.body.appendChild(iframe);
              
              let checkCount = 0;
              const maxChecks = 10;
              
              const checkPages = () => {
                checkCount++;
                try {
                  const doc = iframe.contentDocument || iframe.contentWindow?.document;
                  if (doc) {
                    const container = doc.querySelector('.docx-a4-container');
                    if (container) {
                      // Check for data-total-pages attribute set by JavaScript
                      const totalPagesAttr = container.getAttribute('data-total-pages');
                      const a4Pages = doc.querySelectorAll('.docx-a4-page').length;
                      
                      if (totalPagesAttr || a4Pages > 0) {
                        const pageCount = totalPagesAttr ? parseInt(totalPagesAttr, 10) : Math.max(1, a4Pages);
                        
                        setTotalPages(prev => {
                          const newMap = new Map(prev);
                          newMap.set(index, pageCount);
                          return newMap;
                        });
                        
                        if (iframe.parentNode) {
                          document.body.removeChild(iframe);
                        }
                        return;
                      }
                    }
                    
                    // Fallback: estimate based on content height
                    const body = doc.body;
                    if (body && body.scrollHeight > 0) {
                      const estimatedHeight = body.scrollHeight;
                      const a4PageHeight = 1143; // 297mm + 20px gap
                      const estimatedPages = Math.max(1, Math.ceil(estimatedHeight / a4PageHeight));
                      
                      setTotalPages(prev => {
                        const newMap = new Map(prev);
                        newMap.set(index, estimatedPages);
                        return newMap;
                      });
                      
                      if (iframe.parentNode) {
                        document.body.removeChild(iframe);
                      }
                      return;
                    }
                  }
                } catch (e) {
                  // Cross-origin or other error
                }
                
                // Keep checking if not done yet
                if (checkCount < maxChecks) {
                  setTimeout(checkPages, 500);
                } else {
                  // Final fallback: default to 1 page
                  setTotalPages(prev => {
                    const newMap = new Map(prev);
                    newMap.set(index, 1);
                    return newMap;
                  });
                  if (iframe.parentNode) {
                    document.body.removeChild(iframe);
                  }
                }
              };
              
              iframe.onload = () => {
                // Start checking after a short delay
                setTimeout(checkPages, 300);
              };
            }, 100);
          } else {
            // Backend returned non-HTML or empty response
            console.warn('Backend returned non-HTML or empty response');
            const errorHtml = createErrorHtml('Backend returned invalid response. Content-Type: ' + contentType);
            htmls.set(index, errorHtml);
            setDocxHtml(new Map(htmls));
            setTotalPages(prev => {
              const newMap = new Map(prev);
              newMap.set(index, 1);
              return newMap;
            });
          }
        } else {
          // Response not OK - show error
          const errorText = await response.text().catch(() => 'Unknown error');
          console.error('Backend error:', response.status, errorText);
          const errorHtml = createErrorHtml(`Backend error (${response.status}): ${errorText.substring(0, 200)}`);
          htmls.set(index, errorHtml);
          setDocxHtml(new Map(htmls));
          setTotalPages(prev => {
            const newMap = new Map(prev);
            newMap.set(index, 1);
            return newMap;
          });
        }
      } catch (error) {
        console.error('Error loading DOCX preview:', error);
        const errorHtml = createErrorHtml(`Error: ${error instanceof Error ? error.message : String(error)}`);
        htmls.set(index, errorHtml);
        setDocxHtml(new Map(htmls));
        setTotalPages(prev => {
          const newMap = new Map(prev);
          newMap.set(index, 1);
          return newMap;
        });
      } finally {
        // Remove from loading ref
        loadingRef.current.delete(index);
        loading.set(index, false);
        setIsLoading(new Map(loading));
      }
    });
    
    // Wait for all files to load
    Promise.all(loadPromises).then(() => {
      console.log('All DOCX files loaded');
    }).catch((error) => {
      console.error('Error loading some DOCX files:', error);
    });
    
    // Cleanup function
    return () => {
      // Cancel any pending operations if component unmounts
      console.log('DOCXEditor unmounting, cleaning up');
    };
  }, [files]); // Remove docxHtml from dependencies to prevent infinite loop

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

  const handleRemoveFile = useCallback((index: number) => {
    if (onRemoveFile) {
      onRemoveFile(index);
      // Adjust selected index if needed
      if (index === selectedIndex && selectedIndex > 0) {
        setSelectedIndex(selectedIndex - 1);
      } else if (index < selectedIndex) {
        setSelectedIndex(selectedIndex - 1);
      }
    }
  }, [onRemoveFile, selectedIndex]);

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
          // Look for A4 page elements first (by ID or data-page attribute)
          const targetPageId = `docx-page-${page}`;
          let targetElement = doc.getElementById(targetPageId) as HTMLElement;
          
          if (!targetElement) {
            // Try by data-page attribute
            targetElement = doc.querySelector(`.docx-a4-page[data-page="${page}"]`) as HTMLElement;
          }
          
          if (!targetElement) {
            // Fallback: get by index
            const a4PageElements = doc.querySelectorAll('.docx-a4-page');
            if (a4PageElements.length > 0) {
              targetElement = a4PageElements[Math.min(page - 1, a4PageElements.length - 1)] as HTMLElement;
            }
          }
          
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            return;
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
      
      // Re-check page count after iframe loads
      const iframe = iframeRef.current;
      const checkPagesAfterLoad = () => {
        // Check pages multiple times to catch when splitting completes
        const checkPages = () => {
          try {
            const doc = iframe.contentDocument || iframe.contentWindow?.document;
            if (doc) {
              const container = doc.querySelector('.docx-a4-container');
              if (container) {
                const totalPagesAttr = container.getAttribute('data-total-pages');
                const a4Pages = doc.querySelectorAll('.docx-a4-page').length;
                
                if (totalPagesAttr || a4Pages > 0) {
                  const pageCount = totalPagesAttr ? parseInt(totalPagesAttr, 10) : Math.max(1, a4Pages);
                  
                  setTotalPages(prev => {
                    const newMap = new Map(prev);
                    const currentCount = newMap.get(currentFileIndex) || 1;
                    // Always update if count is different and valid
                    if (pageCount !== currentCount && pageCount > 0) {
                      console.log(`Updating page count for file ${currentFileIndex}: ${currentCount} -> ${pageCount}`);
                      newMap.set(currentFileIndex, pageCount);
                      return newMap;
                    }
                    return prev;
                  });
                }
              }
            }
          } catch (e) {
            // Cross-origin error
          }
        };
        
        // Check immediately, then after delays
        checkPages();
        setTimeout(checkPages, 1000);
        setTimeout(checkPages, 2000);
        setTimeout(checkPages, 3000);
        setTimeout(checkPages, 5000);
      };
      
      if (iframe.contentWindow) {
        iframe.contentWindow.addEventListener('load', checkPagesAfterLoad);
        iframe.contentWindow.addEventListener('docx-pages-split', ((e: CustomEvent) => {
          const pageCount = e.detail?.totalPages || 1;
          console.log('Received docx-pages-split event:', pageCount);
          setTotalPages(prev => {
            const newMap = new Map(prev);
            newMap.set(currentFileIndex, pageCount);
            return newMap;
          });
        }) as EventListener);
        
        // Also set up a continuous checker for page count
        const continuousChecker = setInterval(() => {
          try {
            const doc = iframe.contentDocument || iframe.contentWindow?.document;
            if (doc) {
              const container = doc.querySelector('.docx-a4-container');
              if (container) {
                const totalPagesAttr = container.getAttribute('data-total-pages');
                const a4Pages = doc.querySelectorAll('.docx-a4-page').length;
                
                if (a4Pages > 0) {
                  const pageCount = totalPagesAttr ? parseInt(totalPagesAttr, 10) : a4Pages;
                  
                  setTotalPages(prev => {
                    const newMap = new Map(prev);
                    const currentCount = newMap.get(currentFileIndex) || 1;
                    // Always update if count is different and valid
                    if (pageCount !== currentCount && pageCount > 0) {
                      console.log(`Continuous check: Page count updated for file ${currentFileIndex}: ${currentCount} -> ${pageCount}`);
                      newMap.set(currentFileIndex, pageCount);
                      return newMap;
                    }
                    return prev;
                  });
                  
                  // Stop checking if we have a stable count
                  if (a4Pages > 1 && totalPagesAttr) {
                    clearInterval(continuousChecker);
                  }
                }
              }
            }
          } catch (e) {
            // Cross-origin error
          }
        }, 1000);
        
        // Clean up interval after 30 seconds
        setTimeout(() => clearInterval(continuousChecker), 30000);
      }
    }
  }, [currentDocxHtml, selectedIndex, currentFileIndex]);

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

        // Find all A4 page elements first
        const a4Pages = iframeDoc.querySelectorAll('.docx-a4-page');
        const pageElements: Element[] = Array.from(a4Pages);
        
        // If no A4 pages found, try other selectors
        if (pageElements.length === 0) {
          const pageSelectors = [
            '.docx-page',
            '.docx-page-break',
            '[class*="page"]',
            'div[style*="page-break"]'
          ];
          
          pageSelectors.forEach(selector => {
            const elements = iframeDoc.querySelectorAll(selector);
            pageElements.push(...Array.from(elements));
          });
        }

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

  // Generate page thumbnails - store page content for preview
  useEffect(() => {
    if (!iframeRef.current || currentTotalPages <= 1 || !currentDocxHtml) return;

    const generateThumbnails = () => {
      try {
        const iframe = iframeRef.current;
        if (!iframe?.contentWindow) return;

        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        if (!iframeDoc) return;

        const container = iframeDoc.querySelector('.docx-a4-container');
        if (!container) return;

        const pages = container.querySelectorAll('.docx-a4-page');
        const newThumbnails = new Map<string, string>();

        pages.forEach((page, index) => {
          const pageNum = index + 1;
          const key = `${currentFileIndex}-${pageNum}`;
          
          // Store the page HTML content for preview
          // We'll render it directly in the thumbnail with CSS scaling
          newThumbnails.set(key, page.innerHTML);
        });

        setPageThumbnails(prev => {
          const updated = new Map(prev);
          // Only update thumbnails for current file
          Array.from({ length: currentTotalPages }, (_, i) => i + 1).forEach(pageNum => {
            const key = `${currentFileIndex}-${pageNum}`;
            const content = newThumbnails.get(key);
            if (content) {
              updated.set(key, content);
            }
          });
          return updated;
        });
      } catch (error) {
        console.error('Error generating thumbnails:', error);
      }
    };

    // Wait for pages to be fully rendered and split
    const timer = setTimeout(generateThumbnails, 2000);
    return () => clearTimeout(timer);
  }, [currentFileIndex, currentTotalPages, currentDocxHtml]);

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

          {/* File List Header */}
          <div className="px-2 sm:px-3 py-2 border-b border-gray-100 bg-gray-50">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                {t('viewers.docx.editor.files', 'Files')}
              </span>
              <span className="text-xs text-gray-500">
                {filteredFiles.length} / {files.length}
              </span>
            </div>
          </div>

          {/* File List */}
          <div className="flex-1 overflow-y-auto p-2 sm:p-3 space-y-1.5 sm:space-y-2 min-h-0">
            {filteredFiles.length === 0 ? (
              <div className="text-center py-8 text-gray-500 text-sm">
                {t('viewers.docx.editor.no_files', 'No files found')}
              </div>
            ) : (
              filteredFiles.map((file, fileIndex) => {
              const actualIndex = files.indexOf(file);
              const isSelected = actualIndex === selectedIndex;
              return (
                <div
                  key={actualIndex}
                  className={`group flex items-start gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-lg transition-all ${
                    isSelected
                      ? 'bg-purple-50 border border-purple-200 shadow-sm'
                      : 'border border-transparent hover:bg-gray-100'
                  }`}
                >
                  <div
                    onClick={() => {
                      handleFileSelect(actualIndex);
                      setIsSidebarOpen(false);
                    }}
                    className="flex-1 min-w-0 cursor-pointer"
                  >
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
                  {onRemoveFile && files.length > 1 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveFile(actualIndex);
                      }}
                      className="opacity-60 group-hover:opacity-100 transition-opacity p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded flex-shrink-0 border border-transparent hover:border-red-200"
                      title={t('viewers.docx.editor.remove_file', 'Remove file')}
                    >
                      <X className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  )}
                </div>
              );
              })
            )}
          </div>
        </aside>

        {/* Pages Sidebar */}
        {currentTotalPages >= 1 && isPagesSidebarOpen && (
          <aside 
            id="pages-sidebar"
            className="w-24 sm:w-32 bg-white border-r border-gray-200 flex flex-col z-20 shadow-[4px_0_24px_rgba(0,0,0,0.02)]"
          >
            <div className="px-3 py-2 border-b border-gray-200 flex items-center justify-between bg-gray-50">
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  {t('viewers.docx.editor.pages', 'Pages')}
                </span>
                <span className="text-xs text-gray-500 mt-0.5">
                  {currentPage} / {currentTotalPages}
                </span>
              </div>
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
                const thumbnailKey = `${currentFileIndex}-${pageNum}`;
                const thumbnail = pageThumbnails.get(thumbnailKey);
                return (
                  <button
                    key={pageNum}
                    onClick={() => {
                      handlePageClick(pageNum);
                      setIsPagesSidebarOpen(true);
                    }}
                    className={`w-full p-2 rounded-lg border-2 transition-all text-left group relative ${
                      isActive
                        ? 'border-purple-500 bg-purple-50 shadow-md ring-2 ring-purple-200 scale-105'
                        : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50/50 hover:shadow-sm'
                    }`}
                    id={`page-thumb-${pageNum}`}
                  >
                    <div className="flex items-center justify-center w-full h-24 sm:h-32 bg-white rounded mb-2 overflow-hidden relative border border-gray-200 shadow-sm">
                      <span className={`absolute top-1 left-1 text-xs px-1.5 py-0.5 rounded font-bold z-10 ${
                        isActive 
                          ? 'bg-purple-600 text-white shadow-lg' 
                          : 'bg-gray-700/90 text-white group-hover:bg-purple-600'
                      }`}>
                        {pageNum}
                      </span>
                      {thumbnail ? (
                        <div 
                          className="w-full h-full overflow-hidden"
                          style={{ 
                            transform: 'scale(0.12)',
                            transformOrigin: 'top left',
                            width: '833%',
                            height: '833%',
                            pointerEvents: 'none'
                          }}
                          dangerouslySetInnerHTML={{ __html: thumbnail }}
                        />
                      ) : (
                        <div className="text-center w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                          <div>
                            <div className={`text-xl font-bold mb-1 ${
                              isActive ? 'text-purple-600' : 'text-gray-400'
                            }`}>
                              {pageNum}
                            </div>
                            <div className="text-xs text-gray-500">
                              {t('viewers.docx.editor.page', 'Page')}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
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
                  background: '#e5e5e5',
                  minHeight: '100%'
                }}
              >
                <iframe
                  ref={iframeRef}
                  srcDoc={currentDocxHtml}
                  className="w-full border-0"
                  title={currentFile?.name}
                  style={{ 
                    display: 'block',
                    margin: '0 auto',
                    background: '#e5e5e5',
                    overflow: 'visible',
                    minHeight: '100%',
                    width: '100%',
                    border: 'none'
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



