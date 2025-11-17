import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { usePathLanguageSync } from '../../hooks/usePathLanguageSync';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { 
  Upload, 
  Download, 
  Settings, 
  ImageIcon as Image,
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
import { useFileValidation } from '../../hooks/useFileValidation';
import { apiService, API_BASE_URL } from '../../services/api';

export const HEICtoWEBPConventer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [convertedFile, setConvertedFile] = useState<Blob | null>(null);
  const [convertedFilename, setConvertedFilename] = useState<string | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [quality, setQuality] = useState<number>(90);
  const [lossless, setLossless] = useState<boolean>(false);
  const [maxDimension, setMaxDimension] = useState<number>(4096);
  const [batchMode, setBatchMode] = useState(false);
  const [batchFiles, setBatchFiles] = useState<File[]>([]);
  const [batchConverted, setBatchConverted] = useState(false);
  const [batchResults, setBatchResults] = useState<Array<{ file: File; blob: Blob }>>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Determine translation key prefix based on route
  const isHeifRoute = location.pathname.includes('/heif-to-webp');
  const translationKey = isHeifRoute ? 'heif_to_webp' : 'heic_to_webp';

    usePathLanguageSync(i18n);



    const {
    validateSingleFile,
    validateBatchFiles,
    getBatchSizeDisplay,
    formatFileSize,
    clearValidationError
  } = useFileValidation();

  const acceptHeic = (name: string) => name.toLowerCase().endsWith('.heic') || name.toLowerCase().endsWith('.heif');

  const resetForm = () => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setSelectedFile(null);
    setConvertedFile(null);
    setConvertedFilename(null);
    setError(null);
    setPreviewUrl(null);
    setBatchFiles([]);
    setBatchConverted(false);
    setBatchResults([]);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSwitchToSingle = () => { resetForm(); setBatchMode(false); };
  const handleSwitchToBatch = () => { resetForm(); setBatchMode(true); };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!acceptHeic(file.name)) {
      setError('Please select a valid HEIC/HEIF file');
      return;
    }
    const validation = validateSingleFile(file);
    if (!validation.isValid) {
      setError(validation.error?.message || 'File validation failed');
      setSelectedFile(null);
      setPreviewUrl(null);
      if (event.target) event.target.value = '';
      return;
    }
    setSelectedFile(file);
    setError(null);
    setPreviewUrl(URL.createObjectURL(file));
    setConvertedFile(null);
    setBatchResults([]);
    setBatchConverted(false);
    clearValidationError();
  };

  const handleBatchFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const heicFiles = files.filter(f => acceptHeic(f.name));
    const validation = validateBatchFiles(heicFiles);
    if (!validation.isValid) {
      setError(validation.error?.message || 'Batch validation failed.');
      setBatchFiles([]);
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }
    setBatchFiles(heicFiles);
    setError(null);
    setBatchResults([]);
    setBatchConverted(false);
    setConvertedFile(null);
    clearValidationError();
  };

  const handleConvert = async (file: File): Promise<Blob> => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('quality', String(quality));
    formData.append('lossless', String(lossless));
    formData.append('maxDimension', String(maxDimension));

    const response = await fetch(`${API_BASE_URL}/convert/heic-to-webp/single`, { method: 'POST', body: formData });
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: 'Conversion failed' }));
      const message = errorData.error || errorData.details || 'Conversion failed';
      if (message.includes('Traceback') || message.length > 200) {
        throw new Error('Failed to convert HEIC to WEBP. Please ensure your file is a valid HEIC/HEIF image.');
      }
      throw new Error(message);
    }
    return await response.blob();
  };

  const handleSingleConvert = async () => {
    if (!selectedFile) return;
    setIsConverting(true);
    setError(null);
    try {
      const converted = await handleConvert(selectedFile);
      setConvertedFile(converted);
      setConvertedFilename(selectedFile.name.replace(/\.(heic|heif)$/i, '.webp'));
    } catch (err: any) {
      const msg = err?.message || 'Conversion failed. Please try again.';
      setError(msg.includes('Traceback') || msg.length > 200 ? 'Failed to convert HEIC to WEBP.' : msg);
    } finally {
      setIsConverting(false);
    }
  };

  const handleBatchConvert = async () => {
    if (batchFiles.length === 0) return;
    setIsConverting(true);
    setError(null);
    setBatchResults([]);
    try {
      const formData = new FormData();
      batchFiles.forEach(f => formData.append('files', f));
      formData.append('quality', String(quality));
      formData.append('lossless', String(lossless));
      formData.append('maxDimension', String(maxDimension));

      const response = await fetch(`${API_BASE_URL}/convert/heic-to-webp/batch`, { method: 'POST', body: formData });
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Batch conversion failed' }));
        throw new Error(errorData.error || 'Batch conversion failed');
      }
      const result = await response.json();
      if (!result.success) throw new Error('Batch conversion failed');

      const results: Array<{ file: File; blob: Blob }> = [];
      for (let i = 0; i < result.results.length; i++) {
        const r = result.results[i];
        const original = batchFiles[i];
        if (r.success && r.downloadPath) {
          const b = await (await fetch(r.downloadPath)).blob();
          results.push({ file: original, blob: b });
        }
      }
      if (results.length > 0) {
        setBatchResults(results);
        setBatchConverted(true);
      } else {
        setError('No files were successfully converted.');
        setBatchConverted(false);
      }
    } catch (err: any) {
      const msg = err?.message || 'Batch conversion failed.';
      setError(msg.includes('Traceback') || msg.length > 200 ? 'Batch Conversion Failed' : msg);
      setBatchConverted(false);
    } finally {
      setIsConverting(false);
    }
  };

  const handleDownload = () => {
    if (convertedFile && convertedFilename) {
      const url = URL.createObjectURL(convertedFile);
      const a = document.createElement('a');
      a.href = url;
      a.download = convertedFilename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const handleBatchFileDownload = (file: File, blob: Blob) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name.replace(/\.(heic|heif)$/i, '.webp');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleBack = () => { window.location.href = '/'; };

  return (
    <>
      <Helmet>
        <title>{t(`${translationKey}.meta_title`)}</title>
        <meta name="description" content={t(`${translationKey}.meta_description`)} />
        <meta name="keywords" content="HEIC to WEBP, HEIF to WEBP, convert HEIC, iPhone to WEBP, image converter, batch conversion" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <Header />

      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t(`${translationKey}.title`)}
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
              {t(`${translationKey}.subtitle`)}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-100">
              <div className="flex items-center gap-2"><Zap className="w-4 h-4" /><span>{t('features.lightning_fast')}</span></div>
              <div className="flex items-center gap-2"><Shield className="w-4 h-4" /><span>{t('features.secure')}</span></div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>{t('features.no_registration')}</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Panel */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              {/* Mode Toggle */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button onClick={handleSwitchToSingle} className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all ${!batchMode ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>{t('common.single_file')}</button>
                <button onClick={handleSwitchToBatch} className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all ${batchMode ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}><Zap className="w-5 h-5 inline mr-2" />{t('common.batch_convert')}</button>
              </div>

              {/* Upload */}
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{batchMode ? t(`${translationKey}.upload_batch`) : t(`${translationKey}.upload_single`)}</h3>
                <p className="text-gray-600 mb-4">{batchMode ? t(`${translationKey}.upload_text_batch`) : t(`${translationKey}.upload_text_single`)}</p>
                <p className="text-sm text-gray-500 mb-4">{batchMode ? t(`${translationKey}.file_limits_batch`) : t(`${translationKey}.file_limits_single`)}</p>
                <input ref={fileInputRef} type="file" accept=".heic,.heif" multiple={batchMode} onChange={batchMode ? handleBatchFileSelect : handleFileSelect} className="hidden" />
                <button onClick={() => fileInputRef.current?.click()} className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">{t('common.choose_files')}</button>
              </div>

              {/* File Preview */}
              {previewUrl && !batchMode && selectedFile && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-4">{t(`${translationKey}.file_info`)}</h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-center h-32 bg-gray-100 rounded">
                      <File className="w-12 h-12 text-gray-400" />
                    </div>
                    <div className="mt-3 text-center">
                      <p className="text-sm text-gray-600"><strong>{selectedFile.name}</strong> ({formatFileSize(selectedFile.size)})</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Batch list */}
              {batchMode && batchFiles.length > 0 && (
                <div className="mt-6">
                  {(() => {
                    const totalSize = batchFiles.reduce((s, f) => s + f.size, 0);
                    const sizeDisplay = getBatchSizeDisplay(totalSize);
                    return (
                      <>
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-lg font-semibold">{t(`${translationKey}.selected_files`)} ({batchFiles.length})</h4>
                          <div className={`text-sm font-medium ${sizeDisplay.isWarning ? 'text-blue-600' : 'text-gray-600'}`}>{sizeDisplay.text}</div>
                        </div>
                        {sizeDisplay.isWarning && (
                          <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                            <div className="flex items-center"><AlertCircle className="w-4 h-4 text-blue-500 mr-2" /><span className="text-sm text-blue-700">{t(`${translationKey}.batch_size_warning`)}</span></div>
                          </div>
                        )}
                        <div className="space-y-2 max-h-40 overflow-y-auto">
                          {batchFiles.map((file, idx) => (
                            <div key={idx} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
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

              {/* Error */}
              {error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
                  <span className="text-red-700">{error}</span>
                </div>
              )}

              {/* Convert Button */}
              <div className="mt-8">
                <button onClick={batchMode ? handleBatchConvert : handleSingleConvert} disabled={isConverting || (batchMode ? batchFiles.length === 0 : !selectedFile)} className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl">
                  {isConverting ? (<div className="flex items-center justify-center"><RefreshCw className="w-5 h-5 mr-2 animate-spin" />{t('common.converting')}</div>) : (<div className="flex items-center justify-center"><Zap className="w-5 h-5 mr-2" />{batchMode ? t(`${translationKey}.convert_files`, { count: batchFiles.length }) : t(`${translationKey}.convert_to_webp`)}</div>)}
                </button>
              </div>

              {/* Single Success */}
              {convertedFile && !batchMode && (
                <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center mb-4"><CheckCircle className="w-6 h-6 text-green-500 mr-3" /><h4 className="text-lg font-semibold text-green-800">{t(`${translationKey}.conversion_complete`)}</h4></div>
                  <p className="text-green-700 mb-4">{t(`${translationKey}.success_message`)}</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button onClick={handleDownload} className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center"><Download className="w-5 h-5 mr-2" />{t(`${translationKey}.download_webp`)}</button>
                    <button onClick={resetForm} className="flex-1 bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors flex items-center justify-center"><RefreshCw className="w-5 h-5 mr-2" />{t('common.convert_another')}</button>
                  </div>
                </div>
              )}

              {/* Batch Success */}
              {batchConverted && batchMode && batchResults.length > 0 && (
                <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center mb-4"><CheckCircle className="w-6 h-6 text-green-500 mr-3" /><h4 className="text-lg font-semibold text-green-800">{t(`${translationKey}.batch_conversion_complete`)}</h4></div>
                  <p className="text-green-700 mb-4">{t(`${translationKey}.batch_success_message`, { count: batchResults.length })}</p>
                  <div className="space-y-2 mb-4 max-h-60 overflow-y-auto">
                    {batchResults.map((result, index) => (
                      <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white rounded-lg p-3 border border-green-200 gap-2">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-medium text-gray-900 break-words">{result.file.name.replace(/\.(heic|heif)$/i, '.webp')}</p>
                            <p className="text-xs text-gray-500">{formatFileSize(result.blob.size)}</p>
                          </div>
                        </div>
                        <button onClick={() => handleBatchFileDownload(result.file, result.blob)} className="w-full sm:w-auto bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors flex items-center justify-center"><Download className="w-4 h-4 mr-1" />{t('common.download')}</button>
                      </div>
                    ))}
                  </div>
                  <button onClick={resetForm} className="w-full bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors flex items-center justify-center"><RefreshCw className="w-5 h-5 mr-2" />{t('common.convert_more_files')}</button>
                </div>
              )}
            </div>
          </div>

          {/* Settings & Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center"><Settings className="w-5 h-5 mr-2 text-blue-600" />{t(`${translationKey}.webp_settings`)}</h3>
              {/* Quality */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">{t(`${translationKey}.quality_label`)} ({quality})</label>
                <input type="range" min={1} max={100} value={quality} onChange={(e) => setQuality(parseInt(e.target.value))} className="w-full" />
                <p className="text-xs text-gray-500 mt-1">{t(`${translationKey}.quality_desc`)}</p>
              </div>
              {/* Lossless */}
              <div className="mb-6">
                <label className="flex items-center">
                  <input type="checkbox" checked={lossless} onChange={(e) => setLossless(e.target.checked)} className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <span className="ml-2 text-sm text-gray-700">{t(`${translationKey}.lossless`)}</span>
                </label>
                <p className="text-xs text-gray-500 mt-1 ml-6">{t(`${translationKey}.lossless_desc`)}</p>
              </div>
              {/* Max Dimension */}
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">{t(`${translationKey}.max_dimension`)}</label>
                <input type="number" min={256} max={8192} step={64} value={maxDimension} onChange={(e) => setMaxDimension(parseInt(e.target.value) || 4096)} className="w-full border rounded px-3 py-2" />
                <p className="text-xs text-gray-500 mt-1">{t(`${translationKey}.max_dimension_desc`)}</p>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center"><Star className="w-5 h-5 mr-2 text-yellow-500" />{t(`${translationKey}.sidebar_title`)}</h3>
              <div className="space-y-4">
                {[t(`${translationKey}.feature_1`), t(`${translationKey}.feature_2`), t(`${translationKey}.feature_3`), t(`${translationKey}.feature_4`)].map((f, i) => (
                  <div key={i} className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" /><span className="text-sm text-gray-700">{f}</span></div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center"><BarChart3 className="w-5 h-5 mr-2 text-blue-600" />{t(`${translationKey}.perfect_for_title`)}</h3>
              <div className="space-y-3">
                {[t(`${translationKey}.use_case_1`), t(`${translationKey}.use_case_2`), t(`${translationKey}.use_case_3`), t(`${translationKey}.use_case_4`)].map((uc, i) => (
                  <div key={i} className="flex items-center"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div><span className="text-sm text-gray-700">{uc}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <button onClick={handleBack} className="bg-gray-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors">← {t('common.back_to_home')}</button>
        </div>

        {/* SEO Content */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">{t(`${translationKey}.seo.title`)}</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">{t(`${translationKey}.seo.description`)}</p>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{t(`${translationKey}.seo.features_title`)}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg"><h4 className="text-xl font-semibold text-blue-900 mb-3">{t(`${translationKey}.seo.feature_1_title`)}</h4><p className="text-gray-700">{t(`${translationKey}.seo.feature_1_text`)}</p></div>
              <div className="bg-cyan-50 p-6 rounded-lg"><h4 className="text-xl font-semibold text-cyan-900 mb-3">{t(`${translationKey}.seo.feature_2_title`)}</h4><p className="text-gray-700">{t(`${translationKey}.seo.feature_2_text`)}</p></div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{t(`${translationKey}.seo.use_cases_title`)}</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start"><div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div><div><h4 className="text-lg font-semibold text-gray-900 mb-2">{t(`${translationKey}.seo.use_case_1_title`)}</h4><p className="text-gray-700">{t(`${translationKey}.seo.use_case_1_text`)}</p></div></div>
              <div className="flex items-start"><div className="w-2 h-2 bg-cyan-500 rounded-full mt-3 mr-4 flex-shrink-0"></div><div><h4 className="text-lg font-semibold text-gray-900 mb-2">{t(`${translationKey}.seo.use_case_2_title`)}</h4><p className="text-gray-700">{t(`${translationKey}.seo.use_case_2_text`)}</p></div></div>
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-xl text-center mt-8">
              <h3 className="text-2xl font-bold mb-4">{t(`${translationKey}.ready_title`)}</h3>
              <p className="text-lg mb-6 opacity-90">{t(`${translationKey}.ready_text`)}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' as ScrollBehavior })} className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">{t('common.start_converting_now')}</button>
                <button onClick={handleBack} className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">{t('common.back_to_home')}</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      </div>
    </>
  );
};


