import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useLocation } from 'react-router-dom';
import { FileText, Upload, Eye, ArrowLeft, AlertCircle, Info, Star, Sparkles, Layers, Zap, Palette } from 'lucide-react';
import { FileUpload } from '../FileUpload';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { DOCXEditor } from './DOCXEditor';
import { useFileValidation } from '../../hooks/useFileValidation';
import { useTranslation } from 'react-i18next';
import { usePathLanguageSync } from '../../hooks/usePathLanguageSync';
import './translations/docxViewerTranslations'; // Register translations

export const DOCXViewer: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { validateBatchFiles, validationError, clearValidationError } = useFileValidation();
  const { t, i18n } = useTranslation();
  usePathLanguageSync(i18n);

  // Check if URL ends with /editor and open editor
  useEffect(() => {
    if (location.pathname.endsWith('/editor')) {
      if (!isEditorOpen) {
        setIsEditorOpen(true);
      }
    } else {
      if (isEditorOpen) {
        setIsEditorOpen(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Get the base path for DOCX
  const getBasePath = () => {
    const path = location.pathname;
    if (path.includes('/viewers/docx')) {
      return path.replace('/editor', '').replace(/\/viewers\/docx.*/, '/viewers/docx');
    }
    // Handle language prefixes
    const langMatch = path.match(/\/([a-z]{2})\/viewers\/docx/);
    if (langMatch) {
      const [, lang] = langMatch;
      return `/${lang}/viewers/docx`;
    }
    return '/viewers/docx'; // fallback
  };

  const handleFilesSelected = (files: File[]) => {
    clearValidationError();
    
    // Filter only DOCX/DOC files
    const docxFiles = files.filter(file => {
      const extension = file.name.split('.').pop()?.toLowerCase();
      return ['docx', 'doc', 'docm', 'dotx', 'dotm'].includes(extension || '');
    });
    
    const validation = validateBatchFiles(docxFiles);
    
    if (validation.isValid) {
      setSelectedFiles(docxFiles);
      // Automatically open editor when files are selected
      const basePath = getBasePath();
      navigate(`${basePath}/editor`, { replace: true });
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

  // Get translations with fallbacks to prevent map errors
  const featuresRaw = t('viewers.docx.features', { returnObjects: true });
  const advantagesRaw = t('viewers.docx.advantages', { returnObjects: true });
  const useCasesRaw = t('viewers.docx.use_cases', { returnObjects: true });
  const specsRaw = t('viewers.docx.specs', { returnObjects: true });
  
  const features = Array.isArray(featuresRaw) ? featuresRaw : [] as Array<{ title: string; description: string }>;
  const advantages = Array.isArray(advantagesRaw) ? advantagesRaw : [] as string[];
  const useCases = Array.isArray(useCasesRaw) ? useCasesRaw : [] as string[];
  const specs = Array.isArray(specsRaw) ? specsRaw : [] as Array<{ label: string; value: string }>;

  const handleViewDOCX = async (file: File) => {
    // Check file size (max 100MB for preview)
    const maxSize = 100 * 1024 * 1024; // 100MB
    if (file.size > maxSize) {
      alert(`File is too large for preview (${(file.size / 1024 / 1024).toFixed(2)} MB). Maximum size is 100 MB. Please download the file instead.`);
      return;
    }
    
    try {
      // Show loading state
      const loadingWindow = window.open('', '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes');
      if (!loadingWindow) {
        alert('Please allow pop-ups to view the document');
        return;
      }

      loadingWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Loading ${file.name}...</title>
          <style>
            body {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              font-family: Arial, sans-serif;
              background: #f5f5f5;
              margin: 0;
            }
            .loader {
              text-align: center;
            }
            .spinner {
              border: 4px solid #f3f3f3;
              border-top: 4px solid #3498db;
              border-radius: 50%;
              width: 50px;
              height: 50px;
              animation: spin 1s linear infinite;
              margin: 0 auto 20px;
            }
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          </style>
        </head>
        <body>
          <div class="loader">
            <div class="spinner"></div>
            <h2>Loading ${file.name}...</h2>
            <p>Converting DOCX to HTML preview...</p>
          </div>
        </body>
        </html>
      `);

      // Send file to backend for conversion
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('https://api.morphyhub.com/api/preview/docx', {
        method: 'POST',
        body: formData,
      });

      const contentType = response.headers.get('Content-Type') || '';
      const payload = await response.text();

		// If server returned HTML, render it in a viewer shell with controls
		if (contentType.includes('text/html') && payload.trim().length > 0) {
			loadingWindow.document.open();
			loadingWindow.document.write(`
				<!DOCTYPE html>
				<html>
				<head>
					<meta charset="utf-8" />
					<title>${file.name} - DOCX Preview</title>
					<style>
						* { box-sizing: border-box; }
						html, body { height: 100%; margin: 0; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, "Apple Color Emoji", "Segoe UI Emoji"; background: linear-gradient(180deg, #93c5fd 0%, #e0f2fe 100%); }
						.toolbar { position: fixed; top: 0; left: 0; right: 0; height: 60px; background: linear-gradient(90deg, rgba(37, 99, 235, 0.95) 0%, rgba(59, 130, 246, 0.95) 100%); color: #ffffff; display: flex; align-items: center; padding: 0 14px; gap: 10px; border-bottom: 1px solid rgba(255, 255, 255, 0.15); z-index: 10; backdrop-filter: saturate(1.2) blur(4px); box-shadow: 0 4px 16px rgba(30, 64, 175, 0.25); }
						.toolbar .title { font-weight: 700; color: #ffffff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
						.toolbar .actions { margin-left: auto; display: inline-flex; align-items: center; gap: 10px; }
						.btn { appearance: none; border: 1px solid rgba(255, 255, 255, 0.25); background: rgba(255, 255, 255, 0.15); color: #ffffff; padding: 8px 12px; border-radius: 10px; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; font-size: 12px; font-weight: 600; letter-spacing: .2px; }
						.btn:hover { background: rgba(255, 255, 255, 0.25); }
						.btn:active { transform: translateY(1px); }
						.btn.danger { background: rgba(239, 68, 68, 0.2); border-color: rgba(239, 68, 68, 0.35); }
						.btn.danger:hover { background: rgba(239, 68, 68, 0.3); }
						.badge { font-size: 11px; padding: 6px 8px; border-radius: 999px; border: 1px solid rgba(255,255,255,.25); background: rgba(255,255,255,.12); }
						.sep { width: 1px; height: 30px; background: rgba(255, 255, 255, 0.25); margin: 0 4px; }
						.viewer { position: absolute; top: 60px; bottom: 0; left: 0; right: 0; background: rgba(219, 234, 254, 0.6); }
						iframe { width: 100%; height: 100%; border: 0; background: white; transform-origin: 0 0; box-shadow: 0 0 0 1px rgba(2, 6, 23, 0.06) inset; }
					</style>
				</head>
				<body>
					<div class="toolbar">
						<div class="title">${file.name}</div>
						<div class="actions">
							<span class="badge" title="Document Type">DOCX</span>
							<div class="sep"></div>
							<button class="btn" id="btnPrev" title="Previous viewport">⇧ Prev</button>
							<button class="btn" id="btnNext" title="Next viewport">⇩ Next</button>
							<div class="sep"></div>
							<button class="btn" id="btnZoomOut" title="Zoom out">−</button>
							<button class="btn" id="btnZoomReset" title="Reset zoom">100%</button>
							<button class="btn" id="btnZoomIn" title="Zoom in">＋</button>
							<div class="sep"></div>
							<button class="btn" id="btnPrint" title="Print">🖨 Print</button>
							<div class="sep"></div>
							<button class="btn danger" id="btnClose" title="Close">✕ Close</button>
						</div>
					</div>
					<div class="viewer">
						<iframe id="docFrame"></iframe>
					</div>
					<script>
					(function(){
						var frame = document.getElementById('docFrame');
						var scale = 1;
						// Inject HTML into iframe via srcdoc for isolation
						frame.srcdoc = \`${payload.replace(/`/g, '\\`')}\`;
						function setScale(newScale){
							scale = Math.max(0.5, Math.min(3, newScale));
							frame.style.transform = 'scale(' + scale + ')';
							frame.style.width = (100/scale) + '%';
							document.getElementById('btnZoomReset').textContent = Math.round(scale*100) + '%';
						}
						setScale(1);
						document.getElementById('btnClose').addEventListener('click', function(){ window.close(); });
						document.getElementById('btnPrint').addEventListener('click', function(){ try { frame.contentWindow.focus(); frame.contentWindow.print(); } catch(e) { alert('Print not available.'); } });
						document.getElementById('btnZoomIn').addEventListener('click', function(){ setScale(scale + 0.1); });
						document.getElementById('btnZoomOut').addEventListener('click', function(){ setScale(scale - 0.1); });
						document.getElementById('btnZoomReset').addEventListener('click', function(){ setScale(1); });
						document.getElementById('btnNext').addEventListener('click', function(){ var el = frame.contentWindow; el.scrollBy({ top: el.innerHeight * 0.9, behavior: 'smooth' }); });
						document.getElementById('btnPrev').addEventListener('click', function(){ var el = frame.contentWindow; el.scrollBy({ top: -el.innerHeight * 0.9, behavior: 'smooth' }); });
					})();
					</script>
				</body>
				</html>
			`);
			loadingWindow.document.close();
			return;
		}

      if (!response.ok) {
        loadingWindow.document.open();
        loadingWindow.document.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>Error</title>
            <style>
              body { font-family: Arial, sans-serif; padding: 40px; background: #f5f5f5; }
              .error { background: white; padding: 30px; border-radius: 8px; box-shadow: 0 0 20px rgba(0,0,0,0.1); max-width: 700px; margin: 0 auto; }
              h1 { color: #e74c3c; }
              pre { white-space: pre-wrap; word-break: break-word; background: #fafafa; padding: 12px; border-radius: 6px; border: 1px solid #eee; }
              button { background: #3498db; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; margin-top: 20px; }
              button:hover { background: #2980b9; }
            </style>
          </head>
          <body>
            <div class="error">
              <h1>⚠️ Preview Error</h1>
              <p>Failed to generate DOCX preview. Please try downloading the file instead.</p>
              ${payload ? `<h3>Details</h3><pre>${payload.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</pre>` : ''}
              <button onclick="window.close()">Close</button>
            </div>
          </body>
          </html>
        `);
        loadingWindow.document.close();
        return;
      }

      // Fallback: if OK but not HTML, show generic error
      loadingWindow.document.open();
      loadingWindow.document.write(`
        <!DOCTYPE html>
        <html><body style="font-family:Arial;padding:40px;">Preview response was not HTML. Please download the file.</body></html>
      `);
      loadingWindow.document.close();
    } catch (error) {
      console.error('DOCX view error:', error);
      alert('Failed to open DOCX preview. Please try again or download the file.');
    }
  };

  if (isEditorOpen) {
    return (
      <DOCXEditor
        files={selectedFiles}
        onClose={() => {
          setIsEditorOpen(false);
          const basePath = getBasePath();
          navigate(basePath, { replace: true });
        }}
        onAddFiles={(newFiles) => {
          const allFiles = [...selectedFiles, ...newFiles];
          setSelectedFiles(allFiles);
        }}
        onRemoveFile={(index) => {
          const newFiles = selectedFiles.filter((_, i) => i !== index);
          setSelectedFiles(newFiles);
          // Close editor if no files left
          if (newFiles.length === 0) {
            setIsEditorOpen(false);
            const basePath = getBasePath();
            navigate(basePath, { replace: true });
          }
        }}
      />
    );
  }

  return (
    <>
      <Helmet>
        <title>Free DOCX Viewer - View Microsoft Word Documents Online | MorphyHub</title>
        <meta name="description" content="Free professional DOCX viewer for Microsoft Word documents. Upload and preview DOCX, DOC, DOCM files online with advanced document viewing tools. Supports batch viewing up to 20 files. 100% free DOCX viewer tool." />
        <meta name="keywords" content="DOCX viewer, Word document viewer, Microsoft Word viewer, DOC viewer, document preview, online DOCX reader, DOCX viewer online, DOCX viewer free" />
        <meta property="og:title" content="Free DOCX Viewer - View Microsoft Word Documents Online | MorphyHub" />
        <meta property="og:description" content="Free professional DOCX viewer for Microsoft Word documents. Upload and preview DOCX, DOC, DOCM files online with advanced document viewing tools." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://morphyhub.com/viewers/docx" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free DOCX Viewer - View Microsoft Word Documents Online | MorphyHub" />
        <meta name="twitter:description" content="Free professional DOCX viewer for Microsoft Word documents. Upload and preview DOCX, DOC, DOCM files online with advanced document viewing tools." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Free DOCX Viewer",
            "description": "Free professional DOCX viewer for Microsoft Word documents",
            "url": "https://morphyhub.com/viewers/docx",
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

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <Header />
      
        {/* Hero Section - Redesigned */}
        <div className="relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat'
              }}
            ></div>
          </div>
          
          {/* Floating Orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
            <div className="flex flex-col items-center text-center">
              {/* Back Button - Floating */}
              <button
                onClick={() => window.location.href = '/viewers'}
                className="absolute top-4 left-4 sm:left-6 p-2 sm:p-3 bg-white/10 backdrop-blur-md text-white/90 hover:text-white hover:bg-white/20 rounded-xl transition-all duration-300 transform hover:scale-110 shadow-lg border border-white/20"
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Icon with Glow Effect - Smaller */}
              <div className="relative mb-2 sm:mb-3">
                <div className="absolute inset-0 bg-white/30 rounded-2xl blur-xl transform scale-125"></div>
                <div className="relative p-2 sm:p-3 bg-white/20 backdrop-blur-xl rounded-2xl border border-white/30 shadow-xl">
                  <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
              </div>

              {/* Title - Smaller and moved up */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                {t('viewers.docx.hero_title')}
              </h1>
              
              {/* Subtitle - More visible */}
              <p className="text-sm sm:text-base md:text-lg text-white/95 max-w-2xl mx-auto mb-3 sm:mb-4 leading-relaxed font-medium">
                {t('viewers.docx.hero_subtitle')}
              </p>

              {/* Quick Stats - More visible */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                <div className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-md">
                  <span className="text-white text-xs sm:text-sm font-semibold">{t('viewers.docx.quick_stats.universal_format', '✓ Universal Format')}</span>
                </div>
                <div className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-md">
                  <span className="text-white text-xs sm:text-sm font-semibold">{t('viewers.docx.quick_stats.fast_processing', '⚡ Fast Processing')}</span>
                </div>
                <div className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-md">
                  <span className="text-white text-xs sm:text-sm font-semibold">{t('viewers.docx.quick_stats.high_quality', '🎨 High Quality')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 relative z-10">
          {/* Upload Section - Glassmorphism Card */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 mb-8 border border-white/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <Upload className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  {t('viewers.docx.upload_title')}
                </h2>
                <p className="text-gray-600 mt-1 text-sm sm:text-base">
                  {t('viewers.docx.upload_description')}
                </p>
              </div>
            </div>
            <FileUpload 
              onFilesSelected={handleFilesSelected}
              acceptedFormats={['docx', 'doc', 'docm', 'dotx', 'dotm']}
              maxFiles={20}
              maxSize={100 * 1024 * 1024}
              hideFormatList={true}
              showTotalSize={true}
              translationKeys={{
                dragDropText: t('viewers.docx.upload.drag_drop_text'),
                clickBrowseText: t('viewers.docx.upload.click_browse_text'),
                chooseFilesButton: t('viewers.docx.upload.choose_files_button'),
                maxFilesInfo: t('viewers.docx.upload.max_files_info')
              }}
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

          {/* View Files Button - Prominent */}
          {selectedFiles.length > 0 && (
            <div className="flex justify-center mb-8">
              <button
                onClick={() => {
                  setIsEditorOpen(true);
                  const basePath = getBasePath();
                  navigate(`${basePath}/editor`, { replace: true });
                }}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-3 text-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <Eye className="w-6 h-6 relative z-10" />
                <span className="relative z-10">{t('viewers.docx.buttons.view_files')}</span>
                <Sparkles className="w-5 h-5 relative z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          )}

          {/* Features Section - Redesigned Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => {
              const gradients = [
                'from-blue-500 to-cyan-500',
                'from-indigo-500 to-purple-500',
                'from-purple-500 to-pink-500'
              ];
              const iconNodes = [
                <FileText className="w-8 h-8 text-white" key="filetext1" />,
                <Zap className="w-8 h-8 text-white" key="zap" />,
                <Palette className="w-8 h-8 text-white" key="palette" />
              ];
              return (
                <div
                  key={feature.title}
                  className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 hover:border-transparent shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  {/* Icon */}
                  <div className={`relative mb-6 w-16 h-16 bg-gradient-to-br ${gradients[index]} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    {iconNodes[index]}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed relative z-10">
                    {feature.description}
                  </p>
                  
                  {/* Decorative Element */}
                  <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${gradients[index]} opacity-5 rounded-full -mr-16 -mb-16 group-hover:opacity-10 transition-opacity`}></div>
                </div>
              );
            })}
          </div>

          {/* About Section - Split Layout */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 mb-8 border border-white/50">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg">
                <Info className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                {t('viewers.docx.about_title')}
              </h2>
            </div>
            
            <div className="prose max-w-none">
              <p className="text-gray-700 text-base sm:text-lg mb-8 leading-relaxed">
                {t('viewers.docx.about_intro')}
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Advantages */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                  <div className="flex items-center gap-3 mb-4">
                    <Star className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-900">{t('viewers.docx.advantages_title')}</h3>
                  </div>
                  <ul className="space-y-3">
                    {advantages.map((item, idx) => {
                      // Remove existing bullet points from the item if present
                      const cleanItem = item.replace(/^•\s*/, '').trim();
                      return (
                        <li key={idx} className="flex items-start gap-3 text-gray-700">
                          <span className="text-blue-600 font-bold mt-0.5">•</span>
                          <span dangerouslySetInnerHTML={{ __html: cleanItem }} />
                        </li>
                      );
                    })}
                  </ul>
                </div>
                
                {/* Use Cases */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                  <div className="flex items-center gap-3 mb-4">
                    <Layers className="w-6 h-6 text-purple-600" />
                    <h3 className="text-xl font-bold text-gray-900">{t('viewers.docx.use_cases_title')}</h3>
                  </div>
                  <ul className="space-y-3">
                    {useCases.map((item, idx) => {
                      // Remove existing bullet points from the item if present
                      const cleanItem = item.replace(/^•\s*/, '').trim();
                      return (
                        <li key={idx} className="flex items-start gap-3 text-gray-700">
                          <span className="text-purple-600 font-bold mt-0.5">•</span>
                          <span dangerouslySetInnerHTML={{ __html: cleanItem }} />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications - Modern Table */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 mb-8 border border-white/50 overflow-hidden">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                {t('viewers.docx.specs_title')}
              </h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">{t('viewers.docx.specs_header_label')}</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">{t('viewers.docx.specs_header_value')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {specs.map((row, idx) => (
                    <tr key={row.label} className={`hover:bg-blue-50/50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">{row.label}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SEO Content - Enhanced */}
          <div className="bg-gradient-to-br from-white via-purple-50/50 to-pink-50/50 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 mb-8 border border-purple-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                {t('viewers.docx.seo_title')}
              </h2>
            </div>
            
            <div className="prose max-w-none text-gray-700">
              <p className="text-base sm:text-lg mb-6 leading-relaxed">
                {t('viewers.docx.seo_intro')}
              </p>
              
              <div className="space-y-6">
                <div className="bg-white/60 rounded-xl p-6 border border-purple-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-purple-600" />
                    {t('viewers.docx.seo_viewing_title')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('viewers.docx.seo_viewing_text')}
                  </p>
                </div>
                
                <div className="bg-white/60 rounded-xl p-6 border border-purple-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-purple-600" />
                    {t('viewers.docx.seo_features_title')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('viewers.docx.seo_features_text')}
                  </p>
                </div>
                
                <div className="bg-white/60 rounded-xl p-6 border border-purple-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-purple-600" />
                    {t('viewers.docx.seo_security_title')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('viewers.docx.seo_security_text')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Back Button - Enhanced */}
          <div className="text-center mb-12">
            <a
              href="/viewers"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-base sm:text-lg group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>{t('viewers.docx.buttons.back').replace(/^←\s*/, '')}</span>
            </a>
          </div>
        </div>
        
        <Footer />
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  );
};
