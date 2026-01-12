import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useCsvConversion } from '../../hooks/useCsvConversion';
import { Header } from '../Header';
import { Footer } from '../Footer';
import i18n, { getLanguageFromUrl } from '../../i18n';
import { 
  Upload, 
  Download, 
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

export const CSVToPDFConverter: React.FC = () => {
  const { t } = useTranslation();
  const {
    selectedFile,
    convertedFile,
    isConverting,
    error,
    validationError,
    previewUrl,
    batchMode,
    setBatchMode,
    batchFiles,
    batchResults,
    batchConverted,
    conversionLimitReached,
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
  } = useCsvConversion({ targetFormat: 'pdf' });

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
        <title>{t('csv_to_pdf.meta_title')}</title>
        <meta name="description" content={t('csv_to_pdf.meta_description')} />
        <meta name="keywords" content="CSV to PDF, data to PDF, PDF converter, document conversion" />
        <link rel="canonical" href={`${window.location.origin}/convert/csv-to-pdf`} />
        <link rel="alternate" hrefLang="en" href={`${window.location.origin}/convert/csv-to-pdf`} />
        <link rel="alternate" hrefLang="pl" href={`${window.location.origin}/pl/convert/csv-to-pdf`} />
        <link rel="alternate" hrefLang="de" href={`${window.location.origin}/de/convert/csv-to-pdf`} />
        <link rel="alternate" hrefLang="id" href={`${window.location.origin}/id/convert/csv-to-pdf`} />
        <link rel="alternate" hrefLang="sv" href={`${window.location.origin}/sv/convert/csv-to-pdf`} />
        <link rel="alternate" hrefLang="es" href={`${window.location.origin}/es/convert/csv-to-pdf`} />
        <link rel="alternate" hrefLang="fr" href={`${window.location.origin}/fr/convert/csv-to-pdf`} />
        <link rel="alternate" hrefLang="it" href={`${window.location.origin}/it/convert/csv-to-pdf`} />
        <link rel="alternate" hrefLang="nl" href={`${window.location.origin}/nl/convert/csv-to-pdf`} />
        <link rel="alternate" hrefLang="pt" href={`${window.location.origin}/pt/convert/csv-to-pdf`} />
        <link rel="alternate" hrefLang="vi" href={`${window.location.origin}/vi/convert/csv-to-pdf`} />
        <link rel="alternate" hrefLang="tr" href={`${window.location.origin}/tr/convert/csv-to-pdf`} />
        <link rel="alternate" hrefLang="ru" href={`${window.location.origin}/ru/convert/csv-to-pdf`} />
        <link rel="alternate" hrefLang="ar" href={`${window.location.origin}/ar/convert/csv-to-pdf`} />
        <link rel="alternate" hrefLang="th" href={`${window.location.origin}/th/convert/csv-to-pdf`} />
        <link rel="alternate" hrefLang="ja" href={`${window.location.origin}/ja/convert/csv-to-pdf`} />
        <link rel="alternate" hrefLang="zh" href={`${window.location.origin}/zh/convert/csv-to-pdf`} />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      <Header />
      
      <div className="relative overflow-hidden bg-gradient-to-r from-red-600 via-orange-600 to-amber-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t('csv_to_pdf.title')}
            </h1>
            <p className="text-lg sm:text-xl text-red-100 mb-6 max-w-2xl mx-auto">
              {t('csv_to_pdf.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-red-200">
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
                      ? 'bg-red-600 text-white shadow-lg' 
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
                      ? 'bg-red-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <FileImage className="w-5 h-5 inline mr-2" />
                  {t('common.batch_convert')}
                </button>
              </div>


              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-red-400 transition-colors">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {batchMode ? t('csv_to_pdf.upload_multiple') : t('csv_to_pdf.upload_single')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {batchMode 
                    ? t('csv_to_pdf.upload_multiple_desc') 
                    : t('csv_to_pdf.upload_single_desc')
                  }
                </p>
                {!batchMode && (
                  <p className="text-xs text-red-600 mb-2">{getSingleInfoMessage()}</p>
                )}
                {batchMode && (
                  <p className="text-sm text-red-600 mb-4">{getBatchInfoMessage()}</p>
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
                  className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
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
                  {(() => {
                    const totalSize = batchFiles.reduce((sum, f) => sum + f.size, 0);
                    const sizeDisplay = getBatchSizeDisplay(totalSize);
                    return (
                      <>
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-lg font-semibold">{t('common.selected_files', { count: batchFiles.length })}</h4>
                          <div className={`text-sm font-medium ${sizeDisplay.isWarning ? 'text-orange-600' : 'text-gray-600'}`}>
                            {sizeDisplay.text}
                          </div>
                        </div>
                        {sizeDisplay.isWarning && (
                          <div className="mb-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                            <div className="flex items-center">
                              <AlertCircle className="w-4 h-4 text-orange-500 mr-2" />
                              <span className="text-sm text-orange-700">
                                {t('common.batch_size_warning')}
                              </span>
                            </div>
                          </div>
                        )}
                        <div className="space-y-2 max-h-40 overflow-y-auto">
                          {batchFiles.map((file, index) => (
                            <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                              <span className="text-sm font-medium">{file.name}</span>
                              <span className="text-xs text-gray-500">{formatFileSize(file.size)}</span>
                            </div>
                          ))}
                        </div>
                      </>
                    );
                  })()}
                </div>
              )}

              {/* Error Message - Only show non-conversion-limit errors */}
              {(error || validationError) && !conversionLimitReached && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
                  <span className="text-red-700">{error || validationError}</span>
                </div>
              )}


              <div className="mt-8">
                <button
                  onClick={batchMode ? handleBatchConvert : handleSingleConvert}
                  disabled={isConverting || conversionLimitReached || (batchMode ? batchFiles.length === 0 : !selectedFile)}
                  className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-red-700 hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
                >
                  {isConverting ? (
                    <div className="flex items-center justify-center">
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                      {t('common.converting')}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Zap className="w-5 h-5 mr-2" />
                      {batchMode ? t('common.convert_files', { count: batchFiles.length }) : t('csv_to_pdf.convert_to_pdf')}
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
                    {t('csv_to_pdf.conversion_success')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleDownload}
                      className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      {t('csv_to_pdf.download_pdf')}
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
                  <p className="text-green-700 mb-4">
                    {t('common.batch_success_count', { 
                      successful: batchResults.filter(r => r.success).length, 
                      total: batchResults.length 
                    })}
                  </p>
                  <div className="space-y-3 max-h-60 overflow-y-auto mb-4">
                    {batchResults.map((result, index) => {
                      const displayName = result.outputFilename || `${result.originalName.replace(/\.[^.]+$/, '')}.pdf`;
                      const displaySize = result.size !== undefined ? formatFileSize(result.size) : undefined;
                      return (
                        <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start">
                                {result.success ? (
                                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                ) : (
                                  <AlertCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                                )}
                                <div className="min-w-0 flex-1">
                                  <p className="text-sm font-medium text-gray-900 truncate">{displayName}</p>
                                  {displaySize && (
                                    <p className="text-xs text-gray-500 mt-1">{displaySize}</p>
                                  )}
                                  {!result.success && result.error && (
                                    <p className="text-xs text-red-600 mt-1 break-words">{result.error}</p>
                                  )}
                                </div>
                              </div>
                            </div>
                            {result.success && result.downloadPath && (
                              <button
                                onClick={() => handleBatchDownload(result)}
                                className="w-full sm:w-auto bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors flex items-center justify-center sm:justify-start"
                              >
                                <Download className="w-4 h-4 mr-2" />
                                {t('common.download')}
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={resetForm}
                      className="flex-1 bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors flex items-center justify-center"
                    >
                      <RefreshCw className="w-5 h-5 mr-2" />
                      {t('common.convert_more_files')}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-500" />
                {t('csv_to_pdf.why_choose')}
              </h3>
              <div className="space-y-4">
                {[
                  t('csv_to_pdf.feature_professional'),
                  t('csv_to_pdf.feature_customizable'),
                  t('csv_to_pdf.feature_print_ready'),
                  t('csv_to_pdf.feature_universal'),
                  t('csv_to_pdf.feature_high_quality'),
                  t('csv_to_pdf.feature_batch')
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
                <BarChart3 className="w-5 h-5 mr-2 text-red-600" />
                {t('csv_to_pdf.perfect_for')}
              </h3>
              <div className="space-y-3">
                {[
                  t('csv_to_pdf.use_case_business'),
                  t('csv_to_pdf.use_case_financial'),
                  t('csv_to_pdf.use_case_presentations'),
                  t('csv_to_pdf.use_case_client'),
                  t('csv_to_pdf.use_case_archive'),
                  t('csv_to_pdf.use_case_printing')
                ].map((useCase, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
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
            {t('csv_to_pdf.seo_title')}
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t('csv_to_pdf.seo_description')}
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{t('csv_to_pdf.benefits_title')}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-red-900 mb-3">{t('csv_to_pdf.benefit_universal')}</h4>
                <p className="text-gray-700">
                  {t('csv_to_pdf.benefit_universal_desc')}
                </p>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-orange-900 mb-3">{t('csv_to_pdf.benefit_professional')}</h4>
                <p className="text-gray-700">
                  {t('csv_to_pdf.benefit_professional_desc')}
                </p>
              </div>
              
              <div className="bg-amber-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-amber-900 mb-3">{t('csv_to_pdf.benefit_print_ready')}</h4>
                <p className="text-gray-700">
                  {t('csv_to_pdf.benefit_print_ready_desc')}
                </p>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-yellow-900 mb-3">{t('csv_to_pdf.benefit_preservation')}</h4>
                <p className="text-gray-700">
                  {t('csv_to_pdf.benefit_preservation_desc')}
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{t('csv_to_pdf.use_cases_title')}</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('csv_to_pdf.use_case_business_reports')}</h4>
                  <p className="text-gray-700">{t('csv_to_pdf.use_case_business_reports_desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('csv_to_pdf.use_case_financial_statements')}</h4>
                  <p className="text-gray-700">{t('csv_to_pdf.use_case_financial_statements_desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('csv_to_pdf.use_case_data_presentations')}</h4>
                  <p className="text-gray-700">{t('csv_to_pdf.use_case_data_presentations_desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('csv_to_pdf.use_case_client_deliverables')}</h4>
                  <p className="text-gray-700">{t('csv_to_pdf.use_case_client_deliverables_desc')}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">{t('csv_to_pdf.cta_title')}</h3>
              <p className="text-lg mb-6 opacity-90">
                {t('csv_to_pdf.cta_description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  {t('csv_to_pdf.start_converting')}
                </button>
                <button
                  onClick={handleBack}
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
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