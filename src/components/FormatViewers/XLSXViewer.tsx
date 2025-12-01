import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart3, Upload, Eye, Download, ArrowLeft, CheckCircle, AlertCircle, Info, Table, FileSpreadsheet, Zap, Star, Sparkles, Layers, Palette, FileImage } from 'lucide-react';
import { FileUpload } from '../FileUpload';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { useFileValidation } from '../../hooks/useFileValidation';
import { useTranslation } from 'react-i18next';
import { usePathLanguageSync } from '../../hooks/usePathLanguageSync';

export const XLSXViewer: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const { validateBatchFiles, validationError, clearValidationError } = useFileValidation();
  const { t, i18n } = useTranslation();
  usePathLanguageSync(i18n);

  const handleFilesSelected = (files: File[]) => {
    clearValidationError();
    
    // Filter only Excel files
    const excelFiles = files.filter(file => {
      const extension = file.name.split('.').pop()?.toLowerCase();
      return ['xlsx', 'xls', 'xlsm', 'xlsb', 'ods'].includes(extension || '');
    });
    
    const validation = validateBatchFiles(excelFiles);
    
    if (validation.isValid) {
      setSelectedFiles(excelFiles);
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

  const handleViewExcel = async (file: File) => {
    // Check file size (max 100MB for preview)
    const maxSize = 100 * 1024 * 1024; // 100MB
    if (file.size > maxSize) {
      alert(`File is too large for preview (${(file.size / 1024 / 1024).toFixed(2)} MB). Maximum size is 100 MB. Please download the file instead.`);
      return;
    }
    
    try {
      const loadingWindow = window.open('', '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes');
      if (!loadingWindow) {
        alert('Please allow pop-ups to view the spreadsheet');
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
              border-top: 4px solid #10b981;
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
            <p>Converting spreadsheet to HTML preview...</p>
          </div>
        </body>
        </html>
      `);

      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('https://api.morphyhub.com/api/preview/xlsx', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const html = await response.text();
        loadingWindow.document.open();
        loadingWindow.document.write(html);
        loadingWindow.document.close();
      } else {
        loadingWindow.document.open();
        loadingWindow.document.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>Error</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                padding: 40px;
                background: #f5f5f5;
              }
              .error {
                background: white;
                padding: 30px;
                border-radius: 8px;
                box-shadow: 0 0 20px rgba(0,0,0,0.1);
                max-width: 600px;
                margin: 0 auto;
              }
              h1 { color: #e74c3c; }
              button {
                background: #10b981;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 4px;
                cursor: pointer;
                margin-top: 20px;
              }
              button:hover { background: #059669; }
            </style>
          </head>
          <body>
            <div class="error">
              <h1>⚠️ Preview Error</h1>
              <p>Failed to generate spreadsheet preview. Please try downloading the file instead.</p>
              <button onclick="window.close()">Close</button>
            </div>
          </body>
          </html>
        `);
        loadingWindow.document.close();
      }
    } catch (error) {
      console.error('Excel view error:', error);
      alert('Failed to open spreadsheet preview. Please try again or download the file.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Free Excel Viewer - View XLSX, XLS & Spreadsheets Online | MorphyHub</title>
        <meta name="description" content="Free professional Excel viewer for spreadsheets. Upload and preview XLSX, XLS, XLSM, ODS files online with table formatting and data analysis. Supports batch viewing up to 20 files. 100% free Excel viewer tool." />
        <meta name="keywords" content="Excel viewer, XLSX viewer, spreadsheet viewer, XLS viewer online, ODS viewer, Excel online, free Excel viewer, spreadsheet preview" />
        <meta property="og:title" content="Free Excel Viewer - View XLSX, XLS & Spreadsheets Online | MorphyHub" />
        <meta property="og:description" content="Free professional Excel viewer for spreadsheets. Upload and preview XLSX, XLS, XLSM, ODS files online with table formatting and data analysis." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://morphyhub.com/viewers/xlsx" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Excel Viewer - View XLSX, XLS & Spreadsheets Online | MorphyHub" />
        <meta name="twitter:description" content="Free professional Excel viewer for spreadsheets. Upload and preview XLSX, XLS, XLSM, ODS files online with table formatting and data analysis." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Free Excel Viewer",
            "description": "Free professional Excel viewer for spreadsheets",
            "url": "https://morphyhub.com/viewers/xlsx",
            "applicationCategory": "SpreadsheetViewer",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50">
        <Header />
        
        {/* Hero Section - Redesigned */}
        <div className="relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700">
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat'
              }}
            ></div>
          </div>
          
          {/* Floating Orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

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
                  <BarChart3 className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
              </div>

              {/* Title - Smaller and moved up */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                {t('viewers.xlsx.hero_title', 'Free Excel Viewer')}
              </h1>
              
              {/* Subtitle - More visible */}
              <p className="text-sm sm:text-base md:text-lg text-white/95 max-w-2xl mx-auto mb-3 sm:mb-4 leading-relaxed font-medium">
                {t('viewers.xlsx.hero_subtitle', 'View and analyze Excel spreadsheets with professional tools - 100% free')}
              </p>

              {/* Quick Stats - More visible */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                <div className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-md">
                  <span className="text-white text-xs sm:text-sm font-semibold">{t('viewers.xlsx.quick_stats.table_formatting', '✓ Table Formatting')}</span>
                </div>
                <div className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-md">
                  <span className="text-white text-xs sm:text-sm font-semibold">{t('viewers.xlsx.quick_stats.multiple_formats', '📊 Multiple Formats')}</span>
                </div>
                <div className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-md">
                  <span className="text-white text-xs sm:text-sm font-semibold">{t('viewers.xlsx.quick_stats.fast_processing', '⚡ Fast Processing')}</span>
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
              <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <Upload className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  {t('viewers.xlsx.upload_title', 'Upload Excel Files')}
                </h2>
                <p className="text-gray-600 mt-1 text-sm sm:text-base">
                  {t('viewers.xlsx.upload_description', 'Drag and drop your Excel spreadsheets or click to browse. Supports XLSX, XLS, XLSM, ODS files up to 100MB each, with batch upload support for up to 20 files.')}
                </p>
              </div>
            </div>
            <FileUpload 
              onFilesSelected={handleFilesSelected}
              acceptedFormats={['xlsx', 'xls', 'xlsm', 'xlsb', 'ods']}
              maxFiles={20}
              maxSize={100 * 1024 * 1024}
              hideFormatList={true}
              showTotalSize={true}
              translationKeys={{
                dragDropText: t('viewers.xlsx.upload.drag_drop_text', 'Drag & Drop Your Files Here'),
                clickBrowseText: t('viewers.xlsx.upload.click_browse_text', 'or click the button below to browse'),
                chooseFilesButton: t('viewers.xlsx.upload.choose_files_button', 'Choose Files'),
                maxFilesInfo: t('viewers.xlsx.upload.max_files_info', 'Max {maxFiles} files • Up to {maxSize} Total')
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

          {/* Features Section - Redesigned Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { title: t('viewers.xlsx.features.table_formatting.title', 'Table Formatting'), description: t('viewers.xlsx.features.table_formatting.description', 'View spreadsheets with preserved formatting, formulas, and styling in an easy-to-read table format'), icon: Table },
              { title: t('viewers.xlsx.features.multiple_formats.title', 'Multiple Formats'), description: t('viewers.xlsx.features.multiple_formats.description', 'Support for XLSX, XLS, XLSM, ODS and other spreadsheet formats with full compatibility'), icon: FileSpreadsheet },
              { title: t('viewers.xlsx.features.fast_processing.title', 'Fast Processing'), description: t('viewers.xlsx.features.fast_processing.description', 'Quick spreadsheet processing and rendering for instant preview without downloading'), icon: Zap }
            ].map((feature, index) => {
              const gradients = [
                'from-green-500 to-emerald-500',
                'from-emerald-500 to-teal-500',
                'from-teal-500 to-green-500'
              ];
              const IconComponent = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 hover:border-transparent shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  {/* Icon */}
                  <div className={`relative mb-6 w-16 h-16 bg-gradient-to-br ${gradients[index]} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
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
              <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg">
                <Info className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                {t('viewers.xlsx.about_title', 'About Excel Format')}
              </h2>
            </div>
            
            <div className="prose max-w-none">
              <p className="text-gray-700 text-base sm:text-lg mb-8 leading-relaxed">
                {t('viewers.xlsx.about_intro', 'Excel (XLSX) is the world\'s most popular spreadsheet format, developed by Microsoft. XLSX files support advanced features like formulas, charts, pivot tables, macros, and complex data analysis. The format uses Open XML standards and ZIP compression for efficient storage.')}
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Advantages */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                  <div className="flex items-center gap-3 mb-4">
                    <Star className="w-6 h-6 text-green-600" />
                    <h3 className="text-xl font-bold text-gray-900">{t('viewers.xlsx.advantages_title', 'Key Advantages')}</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      t('viewers.xlsx.advantages.advanced_formulas', 'Advanced formulas - Powerful calculation engine'),
                      t('viewers.xlsx.advantages.data_visualization', 'Data visualization - Charts, graphs, and conditional formatting'),
                      t('viewers.xlsx.advantages.large_datasets', 'Large datasets - Handle millions of rows efficiently'),
                      t('viewers.xlsx.advantages.collaboration', 'Collaboration - Multi-user editing and version control'),
                      t('viewers.xlsx.advantages.automation', 'Automation - Macros and VBA scripting support'),
                      t('viewers.xlsx.advantages.universal_compatibility', 'Universal compatibility - Works across all platforms')
                    ].map((item, idx) => {
                      const cleanItem = item.replace(/^•\s*/, '').trim();
                      return (
                        <li key={idx} className="flex items-start gap-3 text-gray-700">
                          <span className="text-green-600 font-bold mt-0.5">•</span>
                          <span dangerouslySetInnerHTML={{ __html: cleanItem }} />
                        </li>
                      );
                    })}
                  </ul>
                </div>
                
                {/* Use Cases */}
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
                  <div className="flex items-center gap-3 mb-4">
                    <Layers className="w-6 h-6 text-emerald-600" />
                    <h3 className="text-xl font-bold text-gray-900">{t('viewers.xlsx.use_cases_title', 'Best Use Cases')}</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      t('viewers.xlsx.use_cases.financial_analysis', 'Financial analysis - Budgets, forecasts, reports'),
                      t('viewers.xlsx.use_cases.data_management', 'Data management - Databases, inventories, lists'),
                      t('viewers.xlsx.use_cases.statistical_analysis', 'Statistical analysis - Data modeling and analytics'),
                      t('viewers.xlsx.use_cases.project_planning', 'Project planning - Schedules, timelines, tracking'),
                      t('viewers.xlsx.use_cases.business_intelligence', 'Business intelligence - Dashboards and KPIs'),
                      t('viewers.xlsx.use_cases.scientific_computing', 'Scientific computing - Research data and calculations')
                    ].map((item, idx) => {
                      const cleanItem = item.replace(/^•\s*/, '').trim();
                      return (
                        <li key={idx} className="flex items-start gap-3 text-gray-700">
                          <span className="text-emerald-600 font-bold mt-0.5">•</span>
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
              <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg">
                <FileImage className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                {t('viewers.xlsx.specs_title', 'Technical Specifications')}
              </h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">{t('viewers.xlsx.specs_header_label', 'Specification')}</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">{t('viewers.xlsx.specs_header_value', 'Details')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { label: t('viewers.xlsx.specs.file_extensions.label', 'File Extensions'), value: t('viewers.xlsx.specs.file_extensions.value', '.xlsx, .xls, .xlsm, .xlsb, .ods') },
                    { label: t('viewers.xlsx.specs.mime_type.label', 'MIME Type'), value: t('viewers.xlsx.specs.mime_type.value', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') },
                    { label: t('viewers.xlsx.specs.standard.label', 'Standard'), value: t('viewers.xlsx.specs.standard.value', 'Office Open XML (OOXML) - ISO/IEC 29500') },
                    { label: t('viewers.xlsx.specs.maximum_rows.label', 'Maximum Rows'), value: t('viewers.xlsx.specs.maximum_rows.value', '1,048,576 rows × 16,384 columns') },
                    { label: t('viewers.xlsx.specs.developed_by.label', 'Developed By'), value: t('viewers.xlsx.specs.developed_by.value', 'Microsoft Corporation (2007)') },
                    { label: t('viewers.xlsx.specs.compression.label', 'Compression'), value: t('viewers.xlsx.specs.compression.value', 'ZIP-based compression') }
                  ].map((row, idx) => (
                    <tr key={row.label} className={`hover:bg-green-50/50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">{row.label}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SEO Content - Enhanced */}
          <div className="bg-gradient-to-br from-white via-green-50/50 to-emerald-50/50 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 mb-8 border border-green-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                {t('viewers.xlsx.seo_title', 'Why Choose Our Excel Viewer?')}
              </h2>
            </div>
            
            <div className="prose max-w-none text-gray-700">
              <p className="text-base sm:text-lg mb-6 leading-relaxed">
                {t('viewers.xlsx.seo_intro', 'Our Excel viewer provides a seamless experience for viewing and managing spreadsheets directly in your browser.')}
              </p>
              
              <div className="space-y-6">
                <div className="bg-white/60 rounded-xl p-6 border border-green-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Table className="w-5 h-5 text-green-600" />
                    {t('viewers.xlsx.seo_viewing_title', 'Professional Spreadsheet Viewing')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('viewers.xlsx.seo_viewing_text', 'View Excel spreadsheets with high-quality rendering, table formatting, and data analysis tools.')}
                  </p>
                </div>
                
                <div className="bg-white/60 rounded-xl p-6 border border-green-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-green-600" />
                    {t('viewers.xlsx.seo_features_title', 'Advanced Features')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('viewers.xlsx.seo_features_text', 'Access powerful Excel viewing features including table formatting, data visualization, and multiple format support.')}
                  </p>
                </div>
                
                <div className="bg-white/60 rounded-xl p-6 border border-green-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    {t('viewers.xlsx.seo_security_title', 'Secure & Private')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('viewers.xlsx.seo_security_text', 'Your Excel files are processed securely and never stored on our servers.')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Back Button - Enhanced */}
          <div className="text-center mb-12">
            <a
              href="/viewers"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-base sm:text-lg group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>{t('viewers.xlsx.buttons.back', 'Back to All Viewers').replace(/^←\s*/, '')}</span>
            </a>
          </div>
        </div>
        
        <Footer />

        {/* Custom Animations */}
        <style>{`
          @keyframes blob {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
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
      </div>
    </>
  );
};