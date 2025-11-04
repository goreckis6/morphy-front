import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { apiService } from '../../services/api';
import { useCsvConversion } from '../../hooks/useCsvConversion';
import { Header } from '../Header';
import { Footer } from '../Footer';
import i18n, { getLanguageFromUrl } from '../../i18n';
import { 
  Upload, 
  Download, 
  Settings, 
  FileText,
  FileImage,
  RefreshCw,
  CheckCircle,
  AlertCircle,
  Zap,
  Shield,
  Clock,
  Star,
  BarChart3
} from 'lucide-react';

export const CSVToHTMLConverter: React.FC = () => {
  const { t } = useTranslation();
  const {
    selectedFile,
    convertedFile,
    convertedFilename,
    isConverting,
    error,
    setError,
    validationError,
    previewUrl,
    batchMode,
    setBatchMode,
    batchFiles,
    batchResults,
    batchConverted,
    conversionLimitReached,
    setConversionLimitReached,
    user,
    fileInputRef,
    getSingleInfoMessage,
    getBatchInfoMessage,
    getBatchSizeDisplay,
    formatFileSize,
    handleFileSelect,
    handleBatchFileSelect,
    handleSingleConvert,
    handleBatchConvert,
    handleDownload,
    handleBatchDownload,
    resetForm
  } = useCsvConversion({ targetFormat: 'html' });
  const [includeHeaders, setIncludeHeaders] = useState(true);
  const [tableClass, setTableClass] = useState<'simple' | 'striped' | 'bordered'>('simple');

  // Synchronize language with URL
  useEffect(() => {
    const currentLang = getLanguageFromUrl();
    if (i18n.language !== currentLang) {
      i18n.changeLanguage(currentLang);
    }
  }, []);

  // Custom conversion handlers with limit checks
  const handleSingleConvertWithLimits = async () => {
    if (!selectedFile) return;
    
    setConversionLimitReached(false);
    await handleSingleConvert();
  };

  const handleBatchConvertWithLimits = async () => {
    if (batchFiles.length === 0) return;
    
    setConversionLimitReached(false);
    await handleBatchConvert();
  };

  // Custom download handlers with auto-refresh
  const handleDownloadWithRefresh = async () => {
    await handleDownload();
    // Refresh conversion limit banner after download
  };

  const handleBatchDownloadWithRefresh = async (result: any) => {
    await handleBatchDownload(result);
    // Refresh conversion limit banner after download
  };

  const handleBack = () => {
    window.location.href = '/';
  };

  return (
    <>
      <Helmet>
        <title>{t('csv_to_html.meta_title')}</title>
        <meta name="description" content={t('csv_to_html.meta_description')} />
        <meta name="keywords" content="CSV to HTML, data to web, HTML tables, web conversion, data visualization" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <Header />
      
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-teal-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t('csv_to_html.title')}
            </h1>
            <p className="text-lg sm:text-xl text-green-100 mb-6 max-w-2xl mx-auto">
              {t('csv_to_html.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-green-200">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>{t('features.lightning_fast')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>{t('features.secure')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{t('features.no_registration')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={() => {
                    setBatchMode(false);
                    resetForm();
                  }}
                  className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all ${
                    !batchMode 
                      ? 'bg-green-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <FileText className="w-5 h-5 inline mr-2" />
                  {t('common.single_file')}
                </button>
                <button
                  onClick={() => {
                    setBatchMode(true);
                    resetForm();
                  }}
                  className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all ${
                    batchMode 
                      ? 'bg-green-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <FileImage className="w-5 h-5 inline mr-2" />
                  {t('common.batch_convert')}
                </button>
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-green-400 transition-colors">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {batchMode ? t('csv_to_html.upload_batch') : t('csv_to_html.upload_single')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {batchMode 
                    ? t('csv_to_html.upload_text_batch')
                    : t('csv_to_html.upload_text_single')
                  }
                </p>
                {!batchMode && (
                  <p className="text-xs text-green-600 mb-2">{getSingleInfoMessage()}</p>
                )}
                {batchMode && (
                  <p className="text-sm text-green-600 mb-4">{getBatchInfoMessage()}</p>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".csv"
                  multiple={batchMode}
                  onChange={batchMode ? handleBatchFileSelect : handleFileSelect}
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                >
                  {t('common.choose_files')}
                </button>
              </div>

              {previewUrl && !batchMode && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-4">{t('csv_to_html.preview')}</h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-center h-32 bg-gray-100 rounded">
                      <FileText className="w-12 h-12 text-gray-400" />
                    </div>
                  <p className="text-sm text-gray-600 mt-2 text-center">
                    {selectedFile?.name} ({formatFileSize(selectedFile?.size || 0)})
                  </p>
                  </div>
                </div>
              )}

              {batchMode && batchFiles.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-4">{t('csv_to_html.selected_files')} ({batchFiles.length})</h4>
                  {(() => {
                    const totalSize = batchFiles.reduce((s, f) => s + f.size, 0);
                    const sizeDisplay = getBatchSizeDisplay(totalSize);
                    return (
                      <div className="flex items-center justify-between text-sm font-medium mb-2">
                        <span className="text-gray-600">{t('csv_to_html.total_size')}</span>
                        <span className={`ml-3 ${sizeDisplay.isWarning ? 'text-green-700' : 'text-gray-600'}`}>{sizeDisplay.text}</span>
                      </div>
                    );
                  })()}
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {batchFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                        <span className="text-sm font-medium">{file.name}</span>
                        <span className="text-xs text-gray-500">{formatFileSize(file.size)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
                  <span className="text-red-700">{error}</span>
                </div>
              )}

              <div className="mt-8">
                <button
                  onClick={batchMode ? handleBatchConvertWithLimits : handleSingleConvertWithLimits}
                  disabled={isConverting || conversionLimitReached || (batchMode ? batchFiles.length === 0 : !selectedFile)}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-700 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
                >
                  {isConverting ? (
                    <div className="flex items-center justify-center">
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                      {t('common.converting')}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Zap className="w-5 h-5 mr-2" />
                      {batchMode ? t('csv_to_html.convert_files', { count: batchFiles.length }) : t('csv_to_html.convert_to_html')}
                    </div>
                  )}
                </button>
              </div>

              {convertedFile && !batchMode && (
                <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <h4 className="text-lg font-semibold text-green-800">{t('csv_to_html.conversion_complete')}</h4>
                  </div>
                  <p className="text-green-700 mb-4">
                    {t('csv_to_html.success_message')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleDownloadWithRefresh}
                      className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      {t('csv_to_html.download_html')}
                    </button>
                    <button
                      onClick={resetForm}
                      className="flex-1 bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors flex items-center justify-center"
                    >
                      <RefreshCw className="w-5 h-5 mr-2" />
                      {t('common.convert_another')}
                    </button>
                  </div>
                </div>
              )}

              {batchMode && batchConverted && batchResults.length > 0 && (
                <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <h4 className="text-lg font-semibold text-green-800">{t('csv_to_html.batch_conversion_complete')}</h4>
                  </div>
                  <div className="space-y-3 max-h-60 overflow-y-auto">
                    {batchResults.map((r, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-4 border border-green-200">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start">
                              {r.success ? (
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              ) : (
                                <AlertCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                              )}
                              <div className="min-w-0 flex-1">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                  {r.outputFilename || r.filename || (r.originalName ? r.originalName.replace(/\.[^.]+$/, '.html') : 'converted.html')}
                                </p>
                                {r.success && r.size && (
                                  <p className="text-xs text-gray-500 mt-1">{formatFileSize(r.size)}</p>
                                )}
                                {!r.success && r.error && (
                                  <p className="text-xs text-red-600 mt-1 break-words">{r.error}</p>
                                )}
                              </div>
                            </div>
                          </div>
                          {r.success && (r.downloadPath || r.downloadUrl) && (
                            <button
                              onClick={() => handleBatchDownloadWithRefresh(r)}
                              className="w-full sm:w-auto bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors flex items-center justify-center sm:justify-start"
                            >
                              <Download className="w-4 h-4 mr-2" />
                              {t('common.download')}
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={resetForm}
                    className="w-full mt-4 bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors flex items-center justify-center"
                  >
                    <RefreshCw className="w-5 h-5 mr-2" />
                    {t('common.convert_more_files')}
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Settings className="w-5 h-5 mr-2 text-green-600" />
                {t('csv_to_html.html_settings')}
              </h3>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {t('csv_to_html.table_style')}
                </label>
                <select
                  value={tableClass}
                  onChange={(e) => setTableClass(e.target.value as 'simple' | 'striped' | 'bordered')}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="simple">{t('csv_to_html.simple')}</option>
                  <option value="striped">{t('csv_to_html.striped')}</option>
                  <option value="bordered">{t('csv_to_html.bordered')}</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={includeHeaders}
                    onChange={(e) => setIncludeHeaders(e.target.checked)}
                    className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{t('csv_to_html.include_headers')}</span>
                </label>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-500" />
                {t('csv_to_html.sidebar_title')}
              </h3>
              <div className="space-y-4">
                {[
                  t('csv_to_html.feature_1'),
                  t('csv_to_html.feature_2'),
                  t('csv_to_html.feature_3'),
                  t('csv_to_html.feature_4'),
                  t('csv_to_html.feature_5'),
                  t('csv_to_html.feature_6')
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-green-600" />
                {t('csv_to_html.perfect_for_title')}
              </h3>
              <div className="space-y-3">
                {[
                  t('csv_to_html.use_case_1'),
                  t('csv_to_html.use_case_2'),
                  t('csv_to_html.use_case_3'),
                  t('csv_to_html.use_case_4'),
                  t('csv_to_html.use_case_5'),
                  t('csv_to_html.use_case_6')
                ].map((useCase, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={handleBack}
            className="bg-gray-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
          >
            ← {t('common.back_to_home')}
          </button>
        </div>
      </div>

      {/* SEO Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            {t('csv_to_html.why_convert_title')}
          </h2>
          <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            {t('csv_to_html.seo_intro')}
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{t('csv_to_html.benefits_title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-green-900 mb-3">{t('csv_to_html.benefit_web_ready_title')}</h4>
              <p className="text-gray-700">{t('csv_to_html.benefit_web_ready_text')}</p>
            </div>
            <div className="bg-emerald-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-emerald-900 mb-3">{t('csv_to_html.benefit_customizable_title')}</h4>
              <p className="text-gray-700">{t('csv_to_html.benefit_customizable_text')}</p>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-teal-900 mb-3">{t('csv_to_html.benefit_embeddable_title')}</h4>
              <p className="text-gray-700">{t('csv_to_html.benefit_embeddable_text')}</p>
            </div>
            <div className="bg-cyan-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-cyan-900 mb-3">{t('csv_to_html.benefit_accessible_title')}</h4>
              <p className="text-gray-700">{t('csv_to_html.benefit_accessible_text')}</p>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{t('csv_to_html.use_cases_title')}</h3>
          <div className="space-y-4 mb-2">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('csv_to_html.use_case_dashboards_title')}</h4>
                <p className="text-gray-700">{t('csv_to_html.use_case_dashboards_text')}</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('csv_to_html.use_case_documentation_title')}</h4>
                <p className="text-gray-700">{t('csv_to_html.use_case_documentation_text')}</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-teal-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('csv_to_html.use_case_web_embeds_title')}</h4>
                <p className="text-gray-700">{t('csv_to_html.use_case_web_embeds_text')}</p>
              </div>
            </div>
          </div>
            {/* CTA inside content */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-xl text-center mt-8">
              <h3 className="text-2xl font-bold mb-4">{t('csv_to_html.ready_title')}</h3>
              <p className="text-lg mb-6 opacity-90">
                {t('csv_to_html.ready_text')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  {t('common.start_converting_now')}
                </button>
                <button
                  onClick={handleBack}
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                >
                  {t('common.back_to_home')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      </div>

      </>

      );
};