import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { apiService } from '../../services/api';
import { useCsvConversion } from '../../hooks/useCsvConversion';
import { Header } from '../Header';
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
  FileText,
  BarChart3
} from 'lucide-react';

export const CSVToPPTXConverter: React.FC = () => {
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
  } = useCsvConversion({ targetFormat: 'pptx' });
  const [includeHeaders, setIncludeHeaders] = useState(true);
  const [slideLayout, setSlideLayout] = useState<'table' | 'chart' | 'mixed'>('table');

  // Language synchronization
  useEffect(() => {
    const language = getLanguageFromUrl();
    if (language && i18n.language !== language) {
      i18n.changeLanguage(language);
    }
  }, []);

  const handleBack = () => {
    window.location.href = '/';
  };

  return (
    <>
      <Helmet>
        <title>{t('csv_to_pptx.meta_title')}</title>
        <meta name="description" content={t('csv_to_pptx.meta_description')} />
        <meta name="keywords" content="CSV to PPTX, data to PowerPoint, presentation converter, batch conversion" />
        <link rel="canonical" href={`${window.location.origin}/convert/csv-to-pptx`} />
        <link rel="alternate" hrefLang="en" href={`${window.location.origin}/convert/csv-to-pptx`} />
        <link rel="alternate" hrefLang="pl" href={`${window.location.origin}/pl/convert/csv-to-pptx`} />
        <link rel="alternate" hrefLang="de" href={`${window.location.origin}/de/convert/csv-to-pptx`} />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      <Header />
      
      <div className="relative overflow-hidden bg-gradient-to-r from-pink-600 via-rose-600 to-red-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t('csv_to_pptx.title')}
            </h1>
            <p className="text-lg sm:text-xl text-pink-100 mb-6 max-w-2xl mx-auto">
              {t('csv_to_pptx.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-pink-200">
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
                      ? 'bg-pink-600 text-white shadow-lg' 
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
                      ? 'bg-pink-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <FileImage className="w-5 h-5 inline mr-2" />
                  {t('common.batch_convert')}
                </button>
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-pink-400 transition-colors">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {batchMode ? t('csv_to_pptx.upload_multiple') : t('csv_to_pptx.upload_single')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {batchMode 
                    ? t('csv_to_pptx.upload_multiple_desc') 
                    : t('csv_to_pptx.upload_single_desc')
                  }
                </p>
                {!batchMode && (
                  <p className="text-xs text-pink-600 mb-2">{getSingleInfoMessage()}</p>
                )}
                {batchMode && (
                  <div className="text-sm text-pink-600 mb-4">
                    <p>{getBatchInfoMessage()}</p>
                  </div>
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
                  className="bg-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-pink-700 transition-colors"
                >
                  {t('common.choose_files')}
                </button>
              </div>

              {previewUrl && !batchMode && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-4">{t('common.preview')}</h4>
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
                  <h4 className="text-lg font-semibold mb-4">{t('common.selected_files', { count: batchFiles.length })}</h4>
                  {(() => {
                    const totalSize = batchFiles.reduce((s, f) => s + f.size, 0);
                    const sizeDisplay = getBatchSizeDisplay(totalSize);
                    return (
                      <div className="flex items-center justify-between text-sm font-medium mb-2">
                        <span className="text-gray-600">{t('common.total_size')}</span>
                        <span className={`ml-3 ${sizeDisplay.isWarning ? 'text-pink-700' : 'text-gray-600'}`}>{sizeDisplay.text}</span>
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

              {/* Conversion Time Info */}
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-blue-500 mr-2" />
                  <span className="text-sm text-blue-700 font-medium">
                    {t('csv_to_pptx.conversion_time_info')}
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={batchMode ? handleBatchConvert : handleSingleConvert}
                  disabled={isConverting || (batchMode ? batchFiles.length === 0 : !selectedFile)}
                  className="w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-pink-700 hover:to-rose-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
                >
                  {isConverting ? (
                    <div className="flex items-center justify-center">
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                      {t('common.converting')}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Zap className="w-5 h-5 mr-2" />
                      {batchMode ? t('csv_to_pptx.convert_files', { count: batchFiles.length }) : t('csv_to_pptx.convert_to_pptx')}
                    </div>
                  )}
                </button>
              </div>

              {convertedFile && !batchMode && (
                <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <h4 className="text-lg font-semibold text-green-800">{t('common.conversion_complete')}</h4>
                  </div>
                  <p className="text-green-700 mb-4">
                    {t('csv_to_pptx.conversion_success')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleDownload}
                      className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      {t('csv_to_pptx.download_pptx')}
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
                    <h4 className="text-lg font-semibold text-green-800">{t('common.batch_conversion_complete')}</h4>
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
                                  {r.outputFilename || r.originalName.replace(/\.[^.]+$/, '.pptx')}
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
                          {r.success && r.downloadPath && (
                            <button
                              onClick={() => handleBatchDownload(r)}
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
                <Settings className="w-5 h-5 mr-2 text-pink-600" />
                {t('csv_to_pptx.settings_title')}
              </h3>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {t('csv_to_pptx.slide_layout')}
                </label>
                <select
                  value={slideLayout}
                  onChange={(e) => setSlideLayout(e.target.value as 'table' | 'chart' | 'mixed')}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                >
                  <option value="table">{t('csv_to_pptx.table_only')}</option>
                  <option value="chart">{t('csv_to_pptx.chart_only')}</option>
                  <option value="mixed">{t('csv_to_pptx.table_chart')}</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={includeHeaders}
                    onChange={(e) => setIncludeHeaders(e.target.checked)}
                    className="rounded border-gray-300 text-pink-600 focus:ring-pink-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{t('csv_to_pptx.include_headers')}</span>
                </label>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-500" />
                {t('csv_to_pptx.why_choose')}
              </h3>
              <div className="space-y-4">
                {[
                  t('csv_to_pptx.feature_modern'),
                  t('csv_to_pptx.feature_advanced'),
                  t('csv_to_pptx.feature_compatibility'),
                  t('csv_to_pptx.feature_templates'),
                  t('csv_to_pptx.feature_visualization'),
                  t('csv_to_pptx.feature_batch')
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
                <BarChart3 className="w-5 h-5 mr-2 text-pink-600" />
                {t('csv_to_pptx.perfect_for')}
              </h3>
              <div className="space-y-3">
                {[
                  t('csv_to_pptx.use_case_executive'),
                  t('csv_to_pptx.use_case_modern'),
                  t('csv_to_pptx.use_case_dashboards'),
                  t('csv_to_pptx.use_case_corporate'),
                  t('csv_to_pptx.use_case_team'),
                  t('csv_to_pptx.use_case_cloud')
                ].map((useCase, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-3 flex-shrink-0"></div>
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

        {/* SEO Content Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            {t('csv_to_pptx.seo_title')}
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t('csv_to_pptx.seo_description')}
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{t('csv_to_pptx.benefits_title')}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-pink-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-pink-900 mb-3">{t('csv_to_pptx.benefit_modern')}</h4>
                <p className="text-gray-700">
                  {t('csv_to_pptx.benefit_modern_desc')}
                </p>
              </div>
              
              <div className="bg-rose-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-rose-900 mb-3">{t('csv_to_pptx.benefit_compatibility')}</h4>
                <p className="text-gray-700">
                  {t('csv_to_pptx.benefit_compatibility_desc')}
                </p>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-red-900 mb-3">{t('csv_to_pptx.benefit_advanced')}</h4>
                <p className="text-gray-700">
                  {t('csv_to_pptx.benefit_advanced_desc')}
                </p>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-orange-900 mb-3">{t('csv_to_pptx.benefit_cloud')}</h4>
                <p className="text-gray-700">
                  {t('csv_to_pptx.benefit_cloud_desc')}
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{t('csv_to_pptx.use_cases_title')}</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('csv_to_pptx.use_case_executive_presentations')}</h4>
                  <p className="text-gray-700">{t('csv_to_pptx.use_case_executive_presentations_desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-rose-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('csv_to_pptx.use_case_modern_slides')}</h4>
                  <p className="text-gray-700">{t('csv_to_pptx.use_case_modern_slides_desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('csv_to_pptx.use_case_interactive_dashboards')}</h4>
                  <p className="text-gray-700">{t('csv_to_pptx.use_case_interactive_dashboards_desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('csv_to_pptx.use_case_team_collaboration')}</h4>
                  <p className="text-gray-700">{t('csv_to_pptx.use_case_team_collaboration_desc')}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">{t('csv_to_pptx.cta_title')}</h3>
              <p className="text-lg mb-6 opacity-90">
                {t('csv_to_pptx.cta_description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  {t('csv_to_pptx.start_converting')}
                </button>
                <button
                  onClick={handleBack}
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors"
                >
                  {t('common.back_to_home')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">MorphyIMG</h3>
            <p className="text-gray-400 mb-6">
              Convert and view files online for free. Support for 50+ formats.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <span>© 2024 MorphyIMG</span>
              <span>•</span>
              <span>Privacy Policy</span>
              <span>•</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>

      </div>

      </>

      );
};