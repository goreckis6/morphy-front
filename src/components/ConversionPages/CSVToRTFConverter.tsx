import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { apiService } from '../../services/api';
import { useCsvConversion } from '../../hooks/useCsvConversion';
import { Header } from '../Header';
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

export const CSVToRTFConverter: React.FC = () => {
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    // Sync language with localStorage if needed
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);
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
  } = useCsvConversion({ targetFormat: 'rtf' });
  const [includeHeaders, setIncludeHeaders] = useState(true);
  const [tableStyle, setTableStyle] = useState<'simple' | 'bordered' | 'elegant'>('simple');

  const handleBack = () => {
    window.location.href = '/';
  };

  return (
    <>
      <Helmet>
        <title>{t('csv_to_rtf.meta_title')}</title>
        <meta name="description" content={t('csv_to_rtf.meta_description')} />
        <meta name="keywords" content="CSV to RTF, data converter, Rich Text Format, word processing" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <Header />
      
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t('csv_to_rtf.title')}
            </h1>
            <p className="text-lg sm:text-xl text-orange-100 mb-6 max-w-2xl mx-auto">
              {t('csv_to_rtf.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-orange-200">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>{t('common.lightning_fast')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>{t('common.secure')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{t('common.no_registration')}</span>
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
                      ? 'bg-orange-600 text-white shadow-lg' 
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
                      ? 'bg-orange-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <FileImage className="w-5 h-5 inline mr-2" />
                  {t('common.batch_convert')}
                </button>
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-orange-400 transition-colors">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {batchMode ? t('csv_to_rtf.upload_multiple') : t('csv_to_rtf.upload_single')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {batchMode 
                    ? t('csv_to_rtf.upload_multiple_desc') 
                    : t('csv_to_rtf.upload_single_desc')
                  }
                </p>
                {!batchMode && (
                  <p className="text-xs text-orange-600 mb-2">{getSingleInfoMessage()}</p>
                )}
                {batchMode && (
                  <div className="text-sm text-orange-600 mb-4">
                    <p>{t('csv_to_rtf.batch_info')}</p>
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
                  className="bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors"
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
                        <span className={`ml-3 ${sizeDisplay.isWarning ? 'text-orange-700' : 'text-gray-600'}`}>{sizeDisplay.text}</span>
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
                    {t('csv_to_rtf.conversion_time_info')}
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={batchMode ? handleBatchConvert : handleSingleConvert}
                  disabled={isConverting || (batchMode ? batchFiles.length === 0 : !selectedFile)}
                  className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-orange-700 hover:to-amber-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
                >
                  {isConverting ? (
                    <div className="flex items-center justify-center">
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                      {t('common.converting')}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Zap className="w-5 h-5 mr-2" />
                      {batchMode ? t('csv_to_rtf.convert_files', { count: batchFiles.length }) : t('csv_to_rtf.convert_to_rtf')}
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
                    {t('csv_to_rtf.conversion_success')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleDownload}
                      className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      {t('csv_to_rtf.download_rtf')}
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
                    <h4 className="text-lg font-semibold text-green-800">{t('csv_to_rtf.batch_conversion_complete')}</h4>
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
                                  {r.outputFilename || r.originalName.replace(/\.[^.]+$/, '.rtf')}
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
                <Settings className="w-5 h-5 mr-2 text-orange-600" />
                {t('csv_to_rtf.settings_title')}
              </h3>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {t('csv_to_rtf.table_style')}
                </label>
                <select
                  value={tableStyle}
                  onChange={(e) => setTableStyle(e.target.value as 'simple' | 'bordered' | 'elegant')}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="simple">{t('csv_to_rtf.simple')}</option>
                  <option value="bordered">{t('csv_to_rtf.bordered')}</option>
                  <option value="elegant">{t('csv_to_rtf.elegant')}</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={includeHeaders}
                    onChange={(e) => setIncludeHeaders(e.target.checked)}
                    className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{t('csv_to_rtf.include_headers')}</span>
                </label>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-500" />
                {t('csv_to_rtf.why_choose')}
              </h3>
              <div className="space-y-4">
                {[
                  t('csv_to_rtf.feature_formatting'),
                  t('csv_to_rtf.feature_compatibility'),
                  t('csv_to_rtf.feature_word_processor'),
                  t('csv_to_rtf.feature_tables'),
                  t('csv_to_rtf.feature_universal'),
                  t('csv_to_rtf.feature_batch')
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
                <BarChart3 className="w-5 h-5 mr-2 text-orange-600" />
                {t('csv_to_rtf.perfect_for')}
              </h3>
              <div className="space-y-3">
                {[
                  t('csv_to_rtf.use_case_cross_platform'),
                  t('csv_to_rtf.use_case_legacy'),
                  t('csv_to_rtf.use_case_text_processors'),
                  t('csv_to_rtf.use_case_document_exchange'),
                  t('csv_to_rtf.use_case_reports'),
                  t('csv_to_rtf.use_case_compatibility')
                ].map((useCase, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
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
            {t('csv_to_rtf.seo_title')}
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t('csv_to_rtf.seo_description')}
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{t('csv_to_rtf.benefits_title')}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-orange-900 mb-3">{t('csv_to_rtf.benefit_compatibility')}</h4>
                <p className="text-gray-700">
                  {t('csv_to_rtf.benefit_compatibility_desc')}
                </p>
              </div>
              
              <div className="bg-amber-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-amber-900 mb-3">{t('csv_to_rtf.benefit_formatting')}</h4>
                <p className="text-gray-700">
                  {t('csv_to_rtf.benefit_formatting_desc')}
                </p>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-yellow-900 mb-3">{t('csv_to_rtf.benefit_legacy')}</h4>
                <p className="text-gray-700">
                  {t('csv_to_rtf.benefit_legacy_desc')}
                </p>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-orange-900 mb-3">{t('csv_to_rtf.benefit_readable')}</h4>
                <p className="text-gray-700">
                  {t('csv_to_rtf.benefit_readable_desc')}
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{t('csv_to_rtf.use_cases_title')}</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('csv_to_rtf.use_case_cross_platform_title')}</h4>
                  <p className="text-gray-700">{t('csv_to_rtf.use_case_cross_platform_desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('csv_to_rtf.use_case_legacy_title')}</h4>
                  <p className="text-gray-700">{t('csv_to_rtf.use_case_legacy_desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('csv_to_rtf.use_case_text_processors_title')}</h4>
                  <p className="text-gray-700">{t('csv_to_rtf.use_case_text_processors_desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('csv_to_rtf.use_case_document_exchange_title')}</h4>
                  <p className="text-gray-700">{t('csv_to_rtf.use_case_document_exchange_desc')}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">{t('csv_to_rtf.cta_title')}</h3>
              <p className="text-lg mb-6 opacity-90">
                {t('csv_to_rtf.cta_description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  {t('csv_to_rtf.start_converting')}
                </button>
                <button
                  onClick={handleBack}
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
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