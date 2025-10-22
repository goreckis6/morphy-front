import React, { useState } from 'react';
import { SupportedFormat, ConversionOptions, FileConversionJob } from '../types';
import { FileProcessor } from '../utils/fileProcessing';
import { ConversionEngine } from '../utils/conversionEngine';
import { RefreshCw, Download, Settings, CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import { apiService } from '../services/api';

interface ConversionPanelProps {
  files: File[];
}

export const ConversionPanel: React.FC<ConversionPanelProps> = ({ files }) => {
  const [outputFormat, setOutputFormat] = useState<SupportedFormat>('jpg');
  const [conversionOptions, setConversionOptions] = useState<ConversionOptions>({
    quality: 0.9,
    maintainAspectRatio: true,
  });
  const [jobs, setJobs] = useState<FileConversionJob[]>([]);
  const [showOptions, setShowOptions] = useState(false);

  // Get input format from the first file
  const inputFormat = files.length > 0 ? files[0].name.split('.').pop()?.toLowerCase() || '' : '';

  // Define implemented conversions based on what we actually have
  const implementedConversions: Record<string, string[]> = {
    'csv': ['doc', 'docx', 'epub', 'html', 'md', 'mobi', 'odp', 'odt', 'pdf', 'ppt', 'pptx', 'rtf', 'txt', 'xls', 'xlsx', 'json', 'ndjson', 'parquet', 'sql', 'toml', 'xml', 'yaml'],
    'epub': ['csv', 'doc', 'docx', 'html', 'md', 'mobi', 'odp', 'odt', 'pdf', 'ppt', 'pptx', 'rtf', 'txt', 'xlsx'],
    'doc': ['csv', 'epub', 'mobi', 'odt', 'txt'],
    'docx': ['csv', 'epub', 'mobi', 'odt', 'txt'],
    'dng': ['webp', 'ico'],
    'cr2': ['webp', 'ico'],
    'eps': ['webp', 'ico'],
    'gif': ['ico'],
    'bmp': ['webp']
  };

  // Get available output formats for the current input
  const availableOutputFormats = implementedConversions[inputFormat] || ['jpg', 'png', 'webp', 'pdf'];

  // Group formats by category
  const getFormatsByCategory = () => {
    const categories: Record<string, string[]> = {
      'Images': availableOutputFormats.filter(f => ['jpg', 'png', 'webp', 'gif', 'bmp', 'tiff', 'ico', 'svg'].includes(f)),
      'Documents': availableOutputFormats.filter(f => ['pdf', 'doc', 'docx', 'odt', 'rtf', 'txt'].includes(f)),
      'eBooks': availableOutputFormats.filter(f => ['epub', 'mobi'].includes(f)),
      'Presentations': availableOutputFormats.filter(f => ['ppt', 'pptx', 'odp'].includes(f)),
      'Spreadsheets': availableOutputFormats.filter(f => ['xlsx', 'xls', 'csv', 'ods'].includes(f)),
      'Web': availableOutputFormats.filter(f => ['html', 'md', 'xml'].includes(f)),
      'Data': availableOutputFormats.filter(f => ['json', 'ndjson', 'parquet', 'sql', 'toml', 'yaml'].includes(f))
    };
    
    // Remove empty categories
    return Object.entries(categories).filter(([_, formats]) => formats.length > 0);
  };

  const imageFormats: SupportedFormat[] = ['jpg', 'png', 'webp', 'gif', 'bmp', 'tiff', 'ico', 'svg'];
  const documentFormats: SupportedFormat[] = ['pdf', 'docx', 'doc', 'txt'];
  const spreadsheetFormats: SupportedFormat[] = ['xlsx', 'csv', 'ods'];
  const vectorFormats: SupportedFormat[] = ['eps', 'ps', 'ai'];
  const specialFormats: SupportedFormat[] = ['psd', 'tga'];

  // Auto-select first available format when files change
  React.useEffect(() => {
    if (files.length > 0 && availableOutputFormats.length > 0) {
      if (!availableOutputFormats.includes(outputFormat)) {
        setOutputFormat(availableOutputFormats[0] as SupportedFormat);
      }
    }
  }, [files, availableOutputFormats]);

  const startConversion = async () => {
    // Check if this is an implemented conversion
    const isImplemented = implementedConversions[inputFormat]?.includes(outputFormat);

    const newJobs: FileConversionJob[] = files.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      filename: file.name,
      inputFormat: FileProcessor.getFileType(file),
      outputFormat,
      status: 'pending',
      progress: 0,
    }));

    setJobs(newJobs);

    // Process each file
    for (const job of newJobs) {
      const file = files.find(f => f.name === job.filename);
      if (!file) continue;

      try {
        // Update status to processing
        setJobs(prev => prev.map(j => 
          j.id === job.id ? { ...j, status: 'processing', progress: 50 } : j
        ));

        let result: Blob;

        // Use API for implemented conversions
        if (isImplemented) {
          const apiResult = await apiService.convertFile(file, { format: outputFormat } as any);
          result = apiResult.blob;
        } else {
          // Use local conversion for basic formats
        
        // Handle different conversion types
        switch (outputFormat) {
          case 'txt':
            result = new Blob([await ConversionEngine.convertImageToText(file, (progress) => {
              setJobs(prev => prev.map(j => 
                j.id === job.id ? { ...j, progress: Math.round(progress) } : j
              ));
            })], { type: 'text/plain' });
            break;
            
          case 'pdf':
            result = await ConversionEngine.convertImageToPDF(file, (progress) => {
              setJobs(prev => prev.map(j => 
                j.id === job.id ? { ...j, progress: Math.round(progress) } : j
              ));
            });
            break;
            
          case 'svg':
            result = await ConversionEngine.convertImageToSVG(file, (progress) => {
              setJobs(prev => prev.map(j => 
                j.id === job.id ? { ...j, progress: Math.round(progress) } : j
              ));
            });
            break;
            
          case 'eps':
            result = await ConversionEngine.convertImageToEPS(file, (progress) => {
              setJobs(prev => prev.map(j => 
                j.id === job.id ? { ...j, progress: Math.round(progress) } : j
              ));
            });
            break;
            
          case 'ps':
            result = await ConversionEngine.convertImageToPS(file, (progress) => {
              setJobs(prev => prev.map(j => 
                j.id === job.id ? { ...j, progress: Math.round(progress) } : j
              ));
            });
            break;
            
          case 'ico':
            result = await ConversionEngine.convertImageToICO(file, (progress) => {
              setJobs(prev => prev.map(j => 
                j.id === job.id ? { ...j, progress: Math.round(progress) } : j
              ));
            });
            break;
            
          case 'tga':
            result = await ConversionEngine.convertImageToTGA(file, (progress) => {
              setJobs(prev => prev.map(j => 
                j.id === job.id ? { ...j, progress: Math.round(progress) } : j
              ));
            });
            break;
            
          case 'psd':
            result = await ConversionEngine.convertImageToPSD(file, (progress) => {
              setJobs(prev => prev.map(j => 
                j.id === job.id ? { ...j, progress: Math.round(progress) } : j
              ));
            });
            break;
            
          case 'docx':
            result = await ConversionEngine.convertImageToDOCX(file, (progress) => {
              setJobs(prev => prev.map(j => 
                j.id === job.id ? { ...j, progress: Math.round(progress) } : j
              ));
            });
            break;
            
          default:
            // Standard image format conversion
            if (FileProcessor.isImageFormat(job.inputFormat) && FileProcessor.isImageFormat(outputFormat)) {
              result = await FileProcessor.convertImage(file, outputFormat, conversionOptions);
            } else {
              result = await ConversionEngine.convertImageFormat(
                file, 
                ConversionEngine.getMimeType(outputFormat), 
                conversionOptions.quality,
                (progress) => {
                  setJobs(prev => prev.map(j => 
                    j.id === job.id ? { ...j, progress: Math.round(progress) } : j
                  ));
                }
              );
            }
          }
        }

        // Create download URL
        const downloadUrl = URL.createObjectURL(result);

        // Update status to completed
        setJobs(prev => prev.map(j => 
          j.id === job.id 
            ? { ...j, status: 'completed', progress: 100, downloadUrl }
            : j
        ));
      } catch (error) {
        // Update status to failed
        setJobs(prev => prev.map(j => 
          j.id === job.id 
            ? { ...j, status: 'failed', progress: 0, error: error instanceof Error ? error.message : 'Conversion failed' }
            : j
        ));
      }
    }
  };

  const downloadFile = (job: FileConversionJob) => {
    if (job.downloadUrl) {
      const a = document.createElement('a');
      a.href = job.downloadUrl;
      a.download = `${job.filename.split('.')[0]}.${ConversionEngine.getFileExtension(ConversionEngine.getMimeType(job.outputFormat))}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  const resetAll = () => {
    setJobs([]);
    // Also clear the files by triggering a page reload or clearing parent state
    window.location.reload();
  };

  const getStatusIcon = (status: FileConversionJob['status']) => {
    switch (status) {
      case 'pending':
        return <RefreshCw className="w-4 h-4 text-gray-500" />;
      case 'processing':
        return <RefreshCw className="w-4 h-4 text-blue-500 animate-spin" />;
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'failed':
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return null;
    }
  };

  if (files.length === 0) {
    return (
      <div className="text-center text-gray-500 py-12 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border-2 border-dashed border-gray-300">
        <RefreshCw className="w-16 h-16 mx-auto mb-4 text-gray-400" />
        <p className="text-lg font-medium text-gray-700 mb-2">No files selected</p>
        <p className="text-sm text-gray-500">Upload files on the left to begin conversion</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Files Selected Indicator */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-4">
        <div className="flex items-center justify-center">
          <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
          <p className="text-green-800 font-medium">
            {files.length} file{files.length > 1 ? 's' : ''} ready for conversion
          </p>
        </div>
      </div>

      {/* Conversion Settings */}
      <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Conversion Settings
          </h3>
          <button
            onClick={() => setShowOptions(!showOptions)}
            className="p-2 text-gray-500 hover:text-blue-500 rounded-lg transition-colors"
          >
            <Settings className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          {/* Show detected input format */}
          {inputFormat && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-sm text-blue-800">
                <span className="font-semibold">Input Format:</span> {inputFormat.toUpperCase()}
              </p>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Output Format ({availableOutputFormats.length} available)
            </label>
            <select
              value={outputFormat}
              onChange={(e) => setOutputFormat(e.target.value as SupportedFormat)}
              className="w-full p-3 border-2 border-gray-300 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {getFormatsByCategory().map(([categoryName, formats]) => (
                <optgroup key={categoryName} label={categoryName}>
                  {formats.map(format => (
                    <option key={format} value={format}>
                      {format.toUpperCase()}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
            {availableOutputFormats.length === 0 && (
              <p className="mt-2 text-sm text-red-600">
                No converters available for {inputFormat.toUpperCase()} files. Please use a specific converter from the menu.
              </p>
            )}
          </div>

          {showOptions && FileProcessor.isImageFormat(outputFormat) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quality ({Math.round((conversionOptions.quality || 0.9) * 100)}%)
                </label>
                <input
                  type="range"
                  min="0.1"
                  max="1"
                  step="0.1"
                  value={conversionOptions.quality || 0.9}
                  onChange={(e) => setConversionOptions(prev => ({
                    ...prev,
                    quality: parseFloat(e.target.value)
                  }))}
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={conversionOptions.maintainAspectRatio !== false}
                    onChange={(e) => setConversionOptions(prev => ({
                      ...prev,
                      maintainAspectRatio: e.target.checked
                    }))}
                    className="rounded border-gray-300"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Maintain aspect ratio
                  </span>
                </label>
              </div>
            </div>
          )}

          <button
            onClick={startConversion}
            disabled={jobs.some(job => job.status === 'processing') || availableOutputFormats.length === 0}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:bg-gray-400 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg disabled:transform-none disabled:shadow-none flex items-center justify-center space-x-2"
          >
            <RefreshCw className={`w-5 h-5 ${jobs.some(job => job.status === 'processing') ? 'animate-spin' : ''}`} />
            <span>
              {jobs.some(job => job.status === 'processing') 
                ? 'Converting...' 
                : 'Convert Files'
              }
            </span>
          </button>
          {implementedConversions[inputFormat]?.includes(outputFormat) && (
            <div className="mt-3 space-y-2">
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800 text-center">
                  ✨ Using specialized {inputFormat.toUpperCase()} → {outputFormat.toUpperCase()} converter with advanced features
                </p>
              </div>
              <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                <p className="text-sm text-purple-800 text-center">
                  📦 Need batch conversion? 
                  <a 
                    href={`/convert/${inputFormat}-to-${outputFormat}`}
                    className="font-bold underline hover:text-purple-600 ml-1"
                  >
                    Click here
                  </a> for up to 20 files at once
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Conversion Jobs */}
      {jobs.length > 0 && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Conversion Progress
          </h3>
          
          <div className="space-y-3">
            {jobs.map(job => (
              <div key={job.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(job.status)}
                  <div>
                    <div className="text-sm font-medium text-gray-700">
                      {job.filename} → {job.outputFormat.toUpperCase()}
                    </div>
                    {job.error && (
                      <div className="text-xs text-red-500">{job.error}</div>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  {job.status === 'processing' && (
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${job.progress}%` }}
                      ></div>
                    </div>
                  )}
                  
                  {job.status === 'completed' && job.downloadUrl && (
                    <button
                      onClick={() => downloadFile(job)}
                      className="p-2 text-green-500 hover:bg-green-50 rounded-lg transition-colors"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Reset Button - Show when all jobs are completed or failed */}
          {jobs.length > 0 && jobs.every(job => job.status === 'completed' || job.status === 'failed') && (
            <div className="mt-6">
              <button
                onClick={resetAll}
                className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <RefreshCw className="w-5 h-5" />
                <span>Convert More Files</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};