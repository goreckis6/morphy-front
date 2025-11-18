import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { apiService } from '../../services/api';
import { useCsvConversion } from '../../hooks/useCsvConversion';
import { Header } from '../Header';
import { Footer } from '../Footer';
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

export const CSVToXLSXConverter: React.FC = () => {
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
  } = useCsvConversion({ targetFormat: 'xlsx' });
  const [includeHeaders, setIncludeHeaders] = useState(true);
  const [preserveFormatting, setPreserveFormatting] = useState(true);

  const handleBack = () => {
    window.location.href = '/';
  };

  return (
    <>
      <Helmet>
        <title>{t('csv_to_xlsx.meta_title')}</title>
        <meta name="description" content={t('csv_to_xlsx.meta_description')} />
        <meta name="keywords" content="CSV to XLSX, Excel converter, spreadsheet conversion, batch processing" />
        <link rel="canonical" href={`${window.location.origin}/convert/csv-to-xlsx`} />
        <link rel="alternate" hrefLang="en" href={`${window.location.origin}/convert/csv-to-xlsx`} />
        <link rel="alternate" hrefLang="pl" href={`${window.location.origin}/pl/convert/csv-to-xlsx`} />
        <link rel="alternate" hrefLang="de" href={`${window.location.origin}/de/convert/csv-to-xlsx`} />
        <link rel="alternate" hrefLang="id" href={`${window.location.origin}/id/convert/csv-to-xlsx`} />
        <link rel="alternate" hrefLang="sv" href={`${window.location.origin}/sv/convert/csv-to-xlsx`} />
        <link rel="alternate" hrefLang="es" href={`${window.location.origin}/es/convert/csv-to-xlsx`} />
        <link rel="alternate" hrefLang="fr" href={`${window.location.origin}/fr/convert/csv-to-xlsx`} />
        <link rel="alternate" hrefLang="it" href={`${window.location.origin}/it/convert/csv-to-xlsx`} />
        <link rel="alternate" hrefLang="nl" href={`${window.location.origin}/nl/convert/csv-to-xlsx`} />
        <link rel="alternate" hrefLang="pt" href={`${window.location.origin}/pt/convert/csv-to-xlsx`} />
        <link rel="alternate" hrefLang="vi" href={`${window.location.origin}/vi/convert/csv-to-xlsx`} />
        <link rel="alternate" hrefLang="tr" href={`${window.location.origin}/tr/convert/csv-to-xlsx`} />
        <link rel="alternate" hrefLang="ru" href={`${window.location.origin}/ru/convert/csv-to-xlsx`} />
        <link rel="alternate" hrefLang="ar" href={`${window.location.origin}/ar/convert/csv-to-xlsx`} />
        <link rel="alternate" hrefLang="th" href={`${window.location.origin}/th/convert/csv-to-xlsx`} />
        <link rel="alternate" hrefLang="ja" href={`${window.location.origin}/ja/convert/csv-to-xlsx`} />
        <link rel="alternate" hrefLang="zh" href={`${window.location.origin}/zh/convert/csv-to-xlsx`} />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50">
      <Header />
      
      <div className="relative overflow-hidden bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t('csv_to_xlsx.title')}
            </h1>
            <p className="text-lg sm:text-xl text-teal-100 mb-6 max-w-2xl mx-auto">
              {t('csv_to_xlsx.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-teal-200">
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
                      ? 'bg-teal-600 text-white shadow-lg' 
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
                      ? 'bg-teal-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <FileImage className="w-5 h-5 inline mr-2" />
                  {t('common.batch_convert')}
                </button>
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-teal-400 transition-colors">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {batchMode ? t('csv_to_xlsx.upload_multiple') : t('csv_to_xlsx.upload_single')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {batchMode 
                    ? t('csv_to_xlsx.upload_multiple_desc') 
                    : t('csv_to_xlsx.upload_single_desc')
                  }
                </p>
                {!batchMode && (
                  <p className="text-xs text-teal-600 mb-2">{getSingleInfoMessage()}</p>
                )}
                {batchMode && (
                  <p className="text-sm text-teal-600 mb-4">{getBatchInfoMessage()}</p>
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
                  className="bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors"
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
                      {formatFileSize(selectedFile?.size || 0)})
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
                      <div className={`text-sm font-medium mb-2 ${sizeDisplay.isWarning ? 'text-teal-700' : 'text-gray-600'}`}>{sizeDisplay.text}</div>
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
                  onClick={batchMode ? handleBatchConvert : handleSingleConvert}
                  disabled={isConverting || (batchMode ? batchFiles.length === 0 : !selectedFile)}
                  className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-teal-700 hover:to-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
                >
                  {isConverting ? (
                    <div className="flex items-center justify-center">
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                      {t('common.converting')}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Zap className="w-5 h-5 mr-2" />
                      {batchMode ? t('csv_to_xlsx.convert_files', { count: batchFiles.length }) : t('csv_to_xlsx.convert_to_xlsx')}
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
                    {t('csv_to_xlsx.conversion_success')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleDownload}
                      className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      {t('csv_to_xlsx.download_xlsx')}
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
                    <h4 className="text-lg font-semibold text-green-800">{t('csv_to_xlsx.batch_conversion_complete')}</h4>
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
                                  {r.outputFilename || r.originalName.replace(/\.[^.]+$/, '.xlsx')}
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
                <Settings className="w-5 h-5 mr-2 text-teal-600" />
                {t('csv_to_xlsx.settings_title')}
              </h3>
              
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={includeHeaders}
                    onChange={(e) => setIncludeHeaders(e.target.checked)}
                    className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{t('csv_to_xlsx.include_headers')}</span>
                </label>
              </div>

              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preserveFormatting}
                    onChange={(e) => setPreserveFormatting(e.target.checked)}
                    className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{t('csv_to_xlsx.preserve_formatting')}</span>
                </label>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-500" />
                {t('csv_to_xlsx.why_choose')}
              </h3>
              <div className="space-y-4">
                {[
                  t('csv_to_xlsx.feature_modern'),
                  t('csv_to_xlsx.feature_advanced'),
                  t('csv_to_xlsx.feature_large'),
                  t('csv_to_xlsx.feature_compatibility'),
                  t('csv_to_xlsx.feature_professional'),
                  t('csv_to_xlsx.feature_batch')
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
                <BarChart3 className="w-5 h-5 mr-2 text-teal-600" />
                {t('csv_to_xlsx.perfect_for')}
              </h3>
              <div className="space-y-3">
                {[
                  t('csv_to_xlsx.use_case_modern'),
                  t('csv_to_xlsx.use_case_analysis'),
                  t('csv_to_xlsx.use_case_intelligence'),
                  t('csv_to_xlsx.use_case_modeling'),
                  t('csv_to_xlsx.use_case_collaboration'),
                  t('csv_to_xlsx.use_case_integration')
                ].map((useCase, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 flex-shrink-0"></div>
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
            {t('csv_to_xlsx.seo_title')}
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t('csv_to_xlsx.seo_description')}
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{t('csv_to_xlsx.benefits_title')}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-teal-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-teal-900 mb-3">{t('csv_to_xlsx.benefit_modern')}</h4>
                <p className="text-gray-700">
                  {t('csv_to_xlsx.benefit_modern_desc')}
                </p>
              </div>
              
              <div className="bg-cyan-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-cyan-900 mb-3">{t('csv_to_xlsx.benefit_features')}</h4>
                <p className="text-gray-700">
                  {t('csv_to_xlsx.benefit_features_desc')}
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-blue-900 mb-3">{t('csv_to_xlsx.benefit_compatibility')}</h4>
                <p className="text-gray-700">
                  {t('csv_to_xlsx.benefit_compatibility_desc')}
                </p>
              </div>
              
              <div className="bg-sky-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-sky-900 mb-3">{t('csv_to_xlsx.benefit_analytics')}</h4>
                <p className="text-gray-700">
                  {t('csv_to_xlsx.benefit_analytics_desc')}
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{t('csv_to_xlsx.use_cases_title')}</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('csv_to_xlsx.use_case_modern_title')}</h4>
                  <p className="text-gray-700">{t('csv_to_xlsx.use_case_modern_desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('csv_to_xlsx.use_case_analysis_title')}</h4>
                  <p className="text-gray-700">{t('csv_to_xlsx.use_case_analysis_desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('csv_to_xlsx.use_case_business_title')}</h4>
                  <p className="text-gray-700">{t('csv_to_xlsx.use_case_business_desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-sky-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('csv_to_xlsx.use_case_collaboration_title')}</h4>
                  <p className="text-gray-700">{t('csv_to_xlsx.use_case_collaboration_desc')}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">{t('csv_to_xlsx.cta_title')}</h3>
              <p className="text-lg mb-6 opacity-90">
                {t('csv_to_xlsx.cta_description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  {t('csv_to_xlsx.start_converting')}
                </button>
                <button
                  onClick={handleBack}
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors"
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