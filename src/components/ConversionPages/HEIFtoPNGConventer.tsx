import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { usePathLanguageSync } from '../../hooks/usePathLanguageSync';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Upload, Download, Settings, RefreshCw, CheckCircle, AlertCircle, Zap, Shield, Clock, Star, File, BarChart3 } from 'lucide-react';
import { useFileValidation } from '../../hooks/useFileValidation';
import { API_BASE_URL } from '../../services/api';

export const HEIFtoPNGConventer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [convertedFile, setConvertedFile] = useState<Blob | null>(null);
  const [convertedFilename, setConvertedFilename] = useState<string | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [batchMode, setBatchMode] = useState(false);
  const [batchFiles, setBatchFiles] = useState<File[]>([]);
  const [batchConverted, setBatchConverted] = useState(false);
  const [batchResults, setBatchResults] = useState<Array<{ file: File; blob: Blob }>>([]);
  const [quality, setQuality] = useState<number>(95);
  const [maxDimension, setMaxDimension] = useState<number>(4096);
  const fileInputRef = useRef<HTMLInputElement>(null);

    usePathLanguageSync(i18n);



    const { validateSingleFile, validateBatchFiles, getBatchSizeDisplay, formatFileSize, clearValidationError } = useFileValidation();
  const acceptHeif = (name: string) => name.toLowerCase().endsWith('.heif') || name.toLowerCase().endsWith('.heic');

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

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (!acceptHeif(f.name)) { setError('Please select a valid HEIC/HEIF file'); return; }
    const validation = validateSingleFile(f);
    if (!validation.isValid) {
      setError(validation.error?.message || 'File validation failed');
      setSelectedFile(null);
      setPreviewUrl(null);
      if (e.target) e.target.value = '';
      return;
    }
    setSelectedFile(f);
    setError(null);
    setPreviewUrl(URL.createObjectURL(f));
    setConvertedFile(null);
    setBatchResults([]);
    setBatchConverted(false);
    clearValidationError();
  };

  const handleBatchFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const heifFiles = files.filter(f => acceptHeif(f.name));
    const validation = validateBatchFiles(heifFiles);
    if (!validation.isValid) {
      setError(validation.error?.message || 'Batch validation failed.');
      setBatchFiles([]);
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }
    setBatchFiles(heifFiles);
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
    formData.append('maxDimension', String(maxDimension));
    const resp = await fetch(`${API_BASE_URL}/convert/heif-to-png/single`, { method: 'POST', body: formData });
    if (!resp.ok) {
      const j = await resp.json().catch(() => ({ error: 'Conversion failed' }));
      const msg = j.error || j.details || 'Conversion failed';
      throw new Error(msg.includes('Traceback') || msg.length > 200 ? 'Failed to convert HEIF/HEIC to PNG.' : msg);
    }
    return await resp.blob();
  };

  const handleSingleConvert = async () => {
    if (!selectedFile) return;
    setIsConverting(true); setError(null);
    try {
      const converted = await handleConvert(selectedFile);
      setConvertedFile(converted);
      setConvertedFilename(selectedFile.name.replace(/\.(heic|heif)$/i, '.png'));
    } catch (e: any) {
      setError(e?.message || 'Conversion failed.');
    } finally { setIsConverting(false); }
  };

  const handleBatchConvert = async () => {
    if (batchFiles.length === 0) return;
    setIsConverting(true); setError(null); setBatchResults([]);
    try {
      const formData = new FormData();
      batchFiles.forEach(f => formData.append('files', f));
      formData.append('quality', String(quality));
      formData.append('maxDimension', String(maxDimension));
      const resp = await fetch(`${API_BASE_URL}/convert/heif-to-png/batch`, { method: 'POST', body: formData });
      if (!resp.ok) {
        const j = await resp.json().catch(() => ({ error: 'Batch conversion failed' }));
        throw new Error(j.error || 'Batch conversion failed');
      }
      const result = await resp.json();
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
      if (results.length > 0) { setBatchResults(results); setBatchConverted(true); }
      else { setError('No files were successfully converted.'); setBatchConverted(false); }
    } catch (e: any) {
      setError(e?.message || 'Batch conversion failed.'); setBatchConverted(false);
    } finally { setIsConverting(false); }
  };

  const handleDownload = () => {
    if (convertedFile && convertedFilename) {
      const url = URL.createObjectURL(convertedFile);
      const a = document.createElement('a'); a.href = url; a.download = convertedFilename; document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
    }
  };
  const handleBatchFileDownload = (file: File, blob: Blob) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = file.name.replace(/\.(heic|heif)$/i, '.png'); document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
  };
  const handleBack = () => { window.location.href = '/'; };

  return (
    <>
      <Helmet>
        <title>{t('heif_to_png.meta_title')}</title>
        <meta name="description" content={t('heif_to_png.meta_description')} />
        <meta name="keywords" content="HEIF to PNG, HEIC to PNG, convert HEIC, iPhone to PNG, image converter, batch" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50">
      <Header />

      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-r from-cyan-600 via-blue-600 to-sky-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">{t('heif_to_png.title')}</h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-6 max-w-2xl mx-auto">{t('heif_to_png.subtitle')}</p>
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
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              {/* Mode Toggle */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button onClick={handleSwitchToSingle} className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all ${!batchMode ? 'bg-cyan-600 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>{t('common.single_file')}</button>
                <button onClick={handleSwitchToBatch} className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all ${batchMode ? 'bg-cyan-600 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}><Zap className="w-5 h-5 inline mr-2" />{t('common.batch_convert')}</button>
              </div>

              {/* Upload */}
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-cyan-400 transition-colors">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{batchMode ? t('heif_to_png.upload_batch') : t('heif_to_png.upload_single')}</h3>
                <p className="text-gray-600 mb-4">{batchMode ? t('heif_to_png.upload_text_batch') : t('heif_to_png.upload_text_single')}</p>
                <p className="text-sm text-gray-500 mb-4">{batchMode ? t('heif_to_png.file_limits_batch') : t('heif_to_png.file_limits_single')}</p>
                <input ref={fileInputRef} type="file" accept=".heif,.heic" multiple={batchMode} onChange={batchMode ? handleBatchFileSelect : handleFileSelect} className="hidden" />
                <button onClick={() => fileInputRef.current?.click()} className="bg-cyan-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-cyan-700 transition-colors">{t('common.choose_files')}</button>
              </div>

              {/* File Preview */}
              {previewUrl && !batchMode && selectedFile && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-4">{t('heif_to_png.file_info')}</h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-center h-32 bg-gray-100 rounded"><File className="w-12 h-12 text-gray-400" /></div>
                    <div className="mt-3 text-center"><p className="text-sm text-gray-600"><strong>{selectedFile.name}</strong> ({formatFileSize(selectedFile.size)})</p></div>
                  </div>
                </div>
              )}

              {/* Batch List */}
              {batchMode && batchFiles.length > 0 && (
                <div className="mt-6">
                  {(() => { const totalSize = batchFiles.reduce((s, f) => s + f.size, 0); const sizeDisplay = getBatchSizeDisplay(totalSize); return (
                    <>
                      <div className="flex items-center justify-between mb-4"><h4 className="text-lg font-semibold">{t('heif_to_png.selected_files')} ({batchFiles.length})</h4><div className={`text-sm font-medium ${sizeDisplay.isWarning ? 'text-cyan-600' : 'text-gray-600'}`}>{sizeDisplay.text}</div></div>
                      {sizeDisplay.isWarning && (<div className="mb-4 p-3 bg-cyan-50 border border-cyan-200 rounded-lg"><div className="flex items-center"><AlertCircle className="w-4 h-4 text-cyan-500 mr-2" /><span className="text-sm text-cyan-700">{t('heif_to_png.batch_size_warning')}</span></div></div>)}
                      <div className="space-y-2 max-h-40 overflow-y-auto">{batchFiles.map((file, idx) => (<div key={idx} className="flex items-center justify-between bg-gray-50 rounded-lg p-3"><span className="text-sm font-medium">{file.name}</span><span className="text-xs text-gray-500">{formatFileSize(file.size)}</span></div>))}</div>
                    </>
                  ); })()}
                </div>
              )}

              {/* Error */}
              {error && (<div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center"><AlertCircle className="w-5 h-5 text-red-500 mr-3" /><span className="text-red-700">{error}</span></div>)}

              {/* Convert Button */}
              <div className="mt-8">
                <button onClick={batchMode ? handleBatchConvert : handleSingleConvert} disabled={isConverting || (batchMode ? batchFiles.length === 0 : !selectedFile)} className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl">
                  {isConverting ? (<div className="flex items-center justify-center"><RefreshCw className="w-5 h-5 mr-2 animate-spin" />{t('common.converting')}</div>) : (<div className="flex items-center justify-center"><Zap className="w-5 h-5 mr-2" />{batchMode ? t('heif_to_png.convert_files', { count: batchFiles.length }) : t('heif_to_png.convert_to_png')}</div>)}
                </button>
              </div>

              {/* Single Success */}
              {convertedFile && !batchMode && (
                <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center mb-4"><CheckCircle className="w-6 h-6 text-green-500 mr-3" /><h4 className="text-lg font-semibold text-green-800">{t('heif_to_png.conversion_complete')}</h4></div>
                  <p className="text-green-700 mb-4">{t('heif_to_png.success_message')}</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button onClick={handleDownload} className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center"><Download className="w-5 h-5 mr-2" />{t('heif_to_png.download_png')}</button>
                    <button onClick={resetForm} className="flex-1 bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors flex items-center justify-center"><RefreshCw className="w-5 h-5 mr-2" />{t('common.convert_another')}</button>
                  </div>
                </div>
              )}

              {/* Batch Success */}
              {batchConverted && batchMode && batchResults.length > 0 && (
                <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center mb-4"><CheckCircle className="w-6 h-6 text-green-500 mr-3" /><h4 className="text-lg font-semibold text-green-800">{t('heif_to_png.batch_conversion_complete')}</h4></div>
                  <p className="text-green-700 mb-4">{t('heif_to_png.batch_success_message', { count: batchResults.length })}</p>
                  <div className="space-y-2 mb-4 max-h-60 overflow-y-auto">
                    {batchResults.map((result, index) => (
                      <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white rounded-lg p-3 border border-green-200 gap-2">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-medium text-gray-900 break-words">{result.file.name.replace(/\.(heic|heif)$/i, '.png')}</p>
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

          {/* Sidebar settings & info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center"><Settings className="w-5 h-5 mr-2 text-cyan-600" />{t('heif_to_png.png_settings')}</h3>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('heif_to_png.quality_label')} ({quality})</label>
                <input type="range" min={1} max={100} value={quality} onChange={(e) => setQuality(parseInt(e.target.value))} className="w-full" />
                <p className="text-xs text-gray-500 mt-1">{t('heif_to_png.quality_desc')}</p>
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('heif_to_png.max_dimension')}</label>
                <input type="number" min={256} max={8192} step={64} value={maxDimension} onChange={(e) => setMaxDimension(parseInt(e.target.value) || 4096)} className="w-full border rounded px-3 py-2" />
                <p className="text-xs text-gray-500 mt-1">{t('heif_to_png.max_dimension_desc')}</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center"><Star className="w-5 h-5 mr-2 text-yellow-500" />{t('heif_to_png.sidebar_title')}</h3>
              <div className="space-y-4">
                {[t('heif_to_png.feature_1'), t('heif_to_png.feature_2'), t('heif_to_png.feature_3'), t('heif_to_png.feature_4')].map((f, i) => (
                  <div key={i} className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" /><span className="text-sm text-gray-700">{f}</span></div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center"><BarChart3 className="w-5 h-5 mr-2 text-cyan-600" />{t('heif_to_png.perfect_for_title')}</h3>
              <div className="space-y-3">
                {[t('heif_to_png.use_case_1'), t('heif_to_png.use_case_2'), t('heif_to_png.use_case_3'), t('heif_to_png.use_case_4')].map((uc, i) => (
                  <div key={i} className="flex items-center"><div className="w-2 h-2 bg-cyan-500 rounded-full mr-3 flex-shrink-0"></div><span className="text-sm text-gray-700">{uc}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="mt-12 text-center">
          <button onClick={handleBack} className="bg-gray-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors">← {t('common.back_to_home')}</button>
        </div>

        {/* SEO Content */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">{t('heif_to_png.seo.title')}</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">{t('heif_to_png.seo.description')}</p>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{t('heif_to_png.seo.features_title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-cyan-50 p-6 rounded-lg"><h4 className="text-xl font-semibold text-cyan-900 mb-3">{t('heif_to_png.seo.feature_1_title')}</h4><p className="text-gray-700">{t('heif_to_png.seo.feature_1_text')}</p></div>
              <div className="bg-blue-50 p-6 rounded-lg"><h4 className="text-xl font-semibold text-blue-900 mb-3">{t('heif_to_png.seo.feature_2_title')}</h4><p className="text-gray-700">{t('heif_to_png.seo.feature_2_text')}</p></div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{t('heif_to_png.seo.use_cases_title')}</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start"><div className="w-2 h-2 bg-cyan-500 rounded-full mt-3 mr-4 flex-shrink-0"></div><div><h4 className="text-lg font-semibold text-gray-900 mb-2">{t('heif_to_png.seo.use_case_1_title')}</h4><p className="text-gray-700">{t('heif_to_png.seo.use_case_1_text')}</p></div></div>
              <div className="flex items-start"><div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div><div><h4 className="text-lg font-semibold text-gray-900 mb-2">{t('heif_to_png.seo.use_case_2_title')}</h4><p className="text-gray-700">{t('heif_to_png.seo.use_case_2_text')}</p></div></div>
            </div>
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-8 rounded-xl text-center mt-8">
              <h3 className="text-2xl font-bold mb-4">{t('heif_to_png.ready_title')}</h3>
              <p className="text-lg mb-6 opacity-90">{t('heif_to_png.ready_text')}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' as ScrollBehavior })} className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">{t('common.start_converting_now')}</button>
                <button onClick={handleBack} className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors">{t('common.back_to_home')}</button>
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


