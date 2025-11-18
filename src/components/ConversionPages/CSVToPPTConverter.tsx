import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Header } from '../Header';
import { Footer } from '../Footer';
import i18n, { getLanguageFromUrl } from '../../i18n';
import { apiService } from '../../services/api';
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
  File,
  BarChart3
} from 'lucide-react';

export const CSVToPPTConverter: React.FC = () => {
  const { t } = useTranslation();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [convertedFile, setConvertedFile] = useState<Blob | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [includeHeaders, setIncludeHeaders] = useState(true);
  const [addCharts, setAddCharts] = useState(true);
  const [batchMode, setBatchMode] = useState(false);
  const [batchFiles, setBatchFiles] = useState<File[]>([]);
  const [batchResults, setBatchResults] = useState<any[]>([]);
  const [batchConverted, setBatchConverted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Language synchronization
  useEffect(() => {
    const language = getLanguageFromUrl();
    if (language && i18n.language !== language) {
      i18n.changeLanguage(language);
    }
  }, []);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.name.toLowerCase().endsWith('.csv')) {
        setSelectedFile(file);
        setError(null);
        setPreviewUrl(URL.createObjectURL(file));
      } else {
        setError(t('common.invalid_csv_file'));
      }
    }
  };

  const handleBatchFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const csvFiles = files.filter(file => 
      file.name.toLowerCase().endsWith('.csv')
    );
    setBatchFiles(csvFiles);
    setError(null);
  };

  const handleConvert = async (file: File) => {
    return await apiService.convertFile(file, {
      format: 'ppt',
      includeHeaders: includeHeaders ? 'true' : 'false',
      addCharts: addCharts ? 'true' : 'false'
    } as any);
  };

  const handleSingleConvert = async () => {
    if (!selectedFile) return;
    
    console.log('Starting single conversion for:', selectedFile.name);
    setIsConverting(true);
    setError(null);
    
    try {
      const result = await handleConvert(selectedFile);
      console.log('Conversion completed successfully');
      setConvertedFile(result.blob);
    } catch (err) {
      console.error('Conversion failed:', err);
      setError(t('common.conversion_failed'));
    } finally {
      setIsConverting(false);
    }
  };

  const handleBatchConvert = async () => {
    if (batchFiles.length === 0) return;
    
    console.log('Starting batch conversion for:', batchFiles.length, 'files');
    setIsConverting(true);
    setError(null);
    
    try {
      const results = [];
      for (const file of batchFiles) {
        console.log('Converting file:', file.name);
        const result = await handleConvert(file);
        results.push({
          originalName: file.name,
          outputFilename: result.filename || file.name.replace('.csv', '.ppt'),
          blob: result.blob,
          success: true,
          size: result.blob.size
        });
      }
      console.log('Batch conversion completed successfully');
      setBatchResults(results);
      setBatchConverted(true);
      setError(null);
    } catch (err) {
      console.error('Batch conversion failed:', err);
      setError(t('common.batch_conversion_failed'));
    } finally {
      setIsConverting(false);
    }
  };

  const handleDownload = () => {
    if (convertedFile) {
      const url = URL.createObjectURL(convertedFile);
      const a = document.createElement('a');
      a.href = url;
      a.download = selectedFile ? selectedFile.name.replace('.csv', '.ppt') : 'converted.ppt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const handleBatchDownload = (result: any) => {
    if (result.blob) {
      const url = URL.createObjectURL(result.blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = result.outputFilename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const handleBack = () => {
    window.location.href = '/';
  };

  const resetForm = () => {
    setSelectedFile(null);
    setConvertedFile(null);
    setError(null);
    setPreviewUrl(null);
    setBatchFiles([]);
    setBatchResults([]);
    setBatchConverted(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <>
      <Helmet>
        <title>{t('csv_to_ppt.meta_title')}</title>
        <meta name="description" content={t('csv_to_ppt.meta_description')} />
        <meta name="keywords" content="CSV to PPT, data to PowerPoint, presentation converter, PowerPoint format" />
        <link rel="canonical" href={`${window.location.origin}/convert/csv-to-ppt`} />
        <link rel="alternate" hrefLang="en" href={`${window.location.origin}/convert/csv-to-ppt`} />
        <link rel="alternate" hrefLang="pl" href={`${window.location.origin}/pl/convert/csv-to-ppt`} />
        <link rel="alternate" hrefLang="de" href={`${window.location.origin}/de/convert/csv-to-ppt`} />
        <link rel="alternate" hrefLang="id" href={`${window.location.origin}/id/convert/csv-to-ppt`} />
        <link rel="alternate" hrefLang="sv" href={`${window.location.origin}/sv/convert/csv-to-ppt`} />
        <link rel="alternate" hrefLang="es" href={`${window.location.origin}/es/convert/csv-to-ppt`} />
        <link rel="alternate" hrefLang="fr" href={`${window.location.origin}/fr/convert/csv-to-ppt`} />
        <link rel="alternate" hrefLang="it" href={`${window.location.origin}/it/convert/csv-to-ppt`} />
        <link rel="alternate" hrefLang="nl" href={`${window.location.origin}/nl/convert/csv-to-ppt`} />
        <link rel="alternate" hrefLang="pt" href={`${window.location.origin}/pt/convert/csv-to-ppt`} />
        <link rel="alternate" hrefLang="vi" href={`${window.location.origin}/vi/convert/csv-to-ppt`} />
        <link rel="alternate" hrefLang="tr" href={`${window.location.origin}/tr/convert/csv-to-ppt`} />
        <link rel="alternate" hrefLang="ru" href={`${window.location.origin}/ru/convert/csv-to-ppt`} />
        <link rel="alternate" hrefLang="ar" href={`${window.location.origin}/ar/convert/csv-to-ppt`} />
        <link rel="alternate" hrefLang="th" href={`${window.location.origin}/th/convert/csv-to-ppt`} />
        <link rel="alternate" hrefLang="ja" href={`${window.location.origin}/ja/convert/csv-to-ppt`} />
        <link rel="alternate" hrefLang="zh" href={`${window.location.origin}/zh/convert/csv-to-ppt`} />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <Header />
      
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t('csv_to_ppt.title')}
            </h1>
            <p className="text-lg sm:text-xl text-purple-100 mb-6 max-w-2xl mx-auto">
              {t('csv_to_ppt.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-purple-200">
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
                      ? 'bg-purple-600 text-white shadow-lg' 
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
                      ? 'bg-purple-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <FileImage className="w-5 h-5 inline mr-2" />
                  {t('common.batch_convert')}
                </button>
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-purple-400 transition-colors">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {batchMode ? t('csv_to_ppt.upload_multiple') : t('csv_to_ppt.upload_single')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {batchMode 
                    ? t('csv_to_ppt.upload_multiple_desc') 
                    : t('csv_to_ppt.upload_single_desc')
                  }
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  {batchMode 
                    ? t('validation.batch_info') 
                    : t('validation.single_file_limit')
                  }
                </p>
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
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                >
                  {t('common.choose_files')}
                </button>
              </div>

              {previewUrl && !batchMode && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-4">{t('common.preview')}</h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-center h-32 bg-gray-100 rounded">
                      <File className="w-12 h-12 text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-600 mt-2 text-center">
                      {selectedFile?.name} ({((selectedFile?.size || 0) / (1024 * 1024)).toFixed(2)} MB)
                    </p>
                  </div>
                </div>
              )}

              {batchMode && batchFiles.length > 0 && (
                <div className="mt-6">
                  {(() => {
                    const totalSize = batchFiles.reduce((sum, f) => sum + f.size, 0);
                    const totalSizeMB = (totalSize / (1024 * 1024)).toFixed(2);
                    const isWarning = totalSize > 80 * 1024 * 1024; // 80MB warning threshold
                    return (
                      <>
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-lg font-semibold">{t('common.selected_files', { count: batchFiles.length })}</h4>
                          <div className={`text-sm font-medium ${isWarning ? 'text-orange-600' : 'text-gray-600'}`}>
                            {t('validation.total_size', { current: `${totalSizeMB} MB`, max: '100.00 MB' })}
                          </div>
                        </div>
                        {isWarning && (
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
                              <span className="text-xs text-gray-500">{((file.size / (1024 * 1024)).toFixed(2))} MB</span>
                            </div>
                          ))}
                        </div>
                      </>
                    );
                  })()}
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
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
                >
                  {isConverting ? (
                    <div className="flex items-center justify-center">
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                      {t('common.converting')}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Zap className="w-5 h-5 mr-2" />
                      {batchMode ? t('csv_to_ppt.convert_files', { count: batchFiles.length }) : t('csv_to_ppt.convert_to_ppt')}
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
                    {t('csv_to_ppt.conversion_success')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleDownload}
                      className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      {t('csv_to_ppt.download_ppt')}
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

              {batchConverted && batchMode && batchResults.length > 0 && (
                <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <h4 className="text-lg font-semibold text-green-800">{t('common.batch_conversion_complete')}</h4>
                  </div>
                  <p className="text-green-700 mb-4">
                    {t('csv_to_ppt.batch_success', { count: batchResults.length })}
                  </p>
                  <div className="space-y-3 mb-4 max-h-60 overflow-y-auto">
                    {batchResults.map((result, index) => (
                      <div key={index} className="bg-white rounded-lg p-4 border border-green-200">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {result.outputFilename}
                            </p>
                            {result.size && (
                              <p className="text-xs text-gray-500 mt-1">
                                {((result.size / (1024 * 1024)).toFixed(2))} MB
                              </p>
                            )}
                          </div>
                          {result.success && (
                            <button
                              onClick={() => handleBatchDownload(result)}
                              className="w-full sm:w-auto bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors flex items-center justify-center sm:justify-start"
                            >
                              <Download className="w-4 h-4 mr-2" />
                              {t('csv_to_ppt.download_ppt')}
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={resetForm}
                    className="w-full bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors flex items-center justify-center"
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
                <Settings className="w-5 h-5 mr-2 text-purple-600" />
                {t('csv_to_ppt.settings_title')}
              </h3>
              
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={includeHeaders}
                    onChange={(e) => setIncludeHeaders(e.target.checked)}
                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{t('csv_to_ppt.include_headers')}</span>
                </label>
              </div>

              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={addCharts}
                    onChange={(e) => setAddCharts(e.target.checked)}
                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{t('csv_to_ppt.add_charts')}</span>
                </label>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-500" />
                {t('csv_to_ppt.why_choose')}
              </h3>
              <div className="space-y-4">
                {[
                  t('csv_to_ppt.feature_legacy'),
                  t('csv_to_ppt.feature_classic'),
                  t('csv_to_ppt.feature_charts'),
                  t('csv_to_ppt.feature_formatting'),
                  t('csv_to_ppt.feature_support'),
                  t('csv_to_ppt.feature_batch')
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
                <BarChart3 className="w-5 h-5 mr-2 text-purple-600" />
                {t('csv_to_ppt.perfect_for')}
              </h3>
              <div className="space-y-3">
                {[
                  t('csv_to_ppt.use_case_legacy'),
                  t('csv_to_ppt.use_case_classic'),
                  t('csv_to_ppt.use_case_visualization'),
                  t('csv_to_ppt.use_case_reports'),
                  t('csv_to_ppt.use_case_compatibility'),
                  t('csv_to_ppt.use_case_analysis')
                ].map((useCase, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></div>
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

        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            {t('csv_to_ppt.seo_title')}
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t('csv_to_ppt.seo_description')}
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{t('csv_to_ppt.benefits_title')}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-purple-900 mb-3">{t('csv_to_ppt.benefit_legacy')}</h4>
                <p className="text-gray-700">
                  {t('csv_to_ppt.benefit_legacy_desc')}
                </p>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-indigo-900 mb-3">{t('csv_to_ppt.benefit_classic')}</h4>
                <p className="text-gray-700">
                  {t('csv_to_ppt.benefit_classic_desc')}
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-blue-900 mb-3">{t('csv_to_ppt.benefit_support')}</h4>
                <p className="text-gray-700">
                  {t('csv_to_ppt.benefit_support_desc')}
                </p>
              </div>
              
              <div className="bg-cyan-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-cyan-900 mb-3">{t('csv_to_ppt.benefit_visualization')}</h4>
                <p className="text-gray-700">
                  {t('csv_to_ppt.benefit_visualization_desc')}
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">{t('csv_to_ppt.cta_title')}</h3>
              <p className="text-lg mb-6 opacity-90">
                {t('csv_to_ppt.cta_description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  {t('csv_to_ppt.start_converting')}
                </button>
                <button
                  onClick={handleBack}
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
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
