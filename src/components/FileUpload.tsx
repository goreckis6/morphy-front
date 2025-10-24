import React, { useCallback, useState } from 'react';
import { Upload, X, FileText, Image, BarChart3 } from 'lucide-react';
import { FileProcessor } from '../utils/fileProcessing';

interface FileUploadProps {
  onFilesSelected: (files: File[]) => void;
  maxFiles?: number;
  maxSize?: number;
  acceptedFormats?: string[];
  hideFormatList?: boolean;
  showTotalSize?: boolean;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  onFilesSelected,
  maxFiles = 10,
  maxSize = 100 * 1024 * 1024, // 100MB
  acceptedFormats,
  hideFormatList = false,
  showTotalSize = false
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFiles = useCallback((files: FileList) => {
    const fileArray = Array.from(files).slice(0, maxFiles);
    
    // Check for files that are too large
    const oversizedFiles = fileArray.filter(file => file.size > maxSize);
    if (oversizedFiles.length > 0) {
      const fileList = oversizedFiles.map(f => `${f.name} (${(f.size / 1024 / 1024).toFixed(2)} MB)`).join(', ');
      alert(`The following file(s) exceed the ${(maxSize / 1024 / 1024).toFixed(0)} MB limit and were not uploaded:\n\n${fileList}\n\nPlease choose smaller files or download them directly.`);
    }
    
    let validFiles = fileArray.filter(file => file.size <= maxSize);
    
    // Filter by accepted formats if specified
    if (acceptedFormats && acceptedFormats.length > 0) {
      const invalidFormatFiles = validFiles.filter(file => {
        const extension = file.name.split('.').pop()?.toLowerCase();
        return !acceptedFormats.includes(extension || '');
      });
      
      if (invalidFormatFiles.length > 0) {
        const fileList = invalidFormatFiles.map(f => f.name).join(', ');
        alert(`The following file(s) have invalid formats:\n\n${fileList}\n\nAccepted formats: ${acceptedFormats.join(', ')}`);
      }
      
      validFiles = validFiles.filter(file => {
        const extension = file.name.split('.').pop()?.toLowerCase();
        return acceptedFormats.includes(extension || '');
      });
    }

    setSelectedFiles(validFiles);
    onFilesSelected(validFiles);
  }, [maxFiles, maxSize, acceptedFormats, onFilesSelected]);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files) {
      handleFiles(e.dataTransfer.files);
    }
  }, [handleFiles]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(e.target.files);
    }
  }, [handleFiles]);

  const removeFile = (index: number) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(newFiles);
    onFilesSelected(newFiles);
  };

  const getFileIcon = (file: File) => {
    const format = FileProcessor.getFileType(file);
    if (FileProcessor.isImageFormat(format)) {
      return <Image className="w-5 h-5 text-blue-500" />;
    } else if (FileProcessor.isSpreadsheetFormat(format)) {
      return <BarChart3 className="w-5 h-5 text-green-500" />;
    } else {
      return <FileText className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="w-full">
      <div
        className={`
          border-3 border-dashed rounded-2xl p-12 md:p-16 text-center transition-all duration-300
          ${dragActive 
            ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 scale-105 shadow-xl' 
            : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
          }
        `}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <div className={`transition-all duration-300 ${dragActive ? 'scale-110' : ''}`}>
          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Upload className="w-10 h-10 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Drag & Drop Your Files Here
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            or click the button below to browse
          </p>
          <input
            type="file"
            multiple
            onChange={handleFileInput}
            accept={acceptedFormats ? acceptedFormats.map(f => `.${f}`).join(',') : undefined}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-xl cursor-pointer transition-all transform hover:scale-105 shadow-lg"
          >
            Choose Files
          </label>
          <div className="text-sm text-gray-500 mt-4 space-y-1">
            <p className="font-medium">✓ Max {maxFiles} files • Up to {FileProcessor.formatFileSize(maxSize)} {showTotalSize ? 'Total' : 'each'}</p>
            {!hideFormatList && (
              <p>✓ CSV, EPUB, DOC, DOCX, DNG, CR2, EPS, GIF, BMP & more</p>
            )}
          </div>
        </div>
      </div>

      {selectedFiles.length > 0 && (
        <div className="mt-6">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-4 mb-4">
            <div className="flex items-center justify-center">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold">{selectedFiles.length}</span>
              </div>
              <p className="text-green-800 font-semibold text-lg">
                {selectedFiles.length} file{selectedFiles.length !== 1 ? 's' : ''} ready for preview
              </p>
            </div>
          </div>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {selectedFiles.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-3">
                  {getFileIcon(file)}
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      {file.name}
                    </div>
                    <div className="text-xs text-gray-600 font-medium">
                      {FileProcessor.formatFileSize(file.size)}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => removeFile(index)}
                  className="p-2 hover:bg-red-100 rounded-full transition-colors group"
                >
                  <X className="w-5 h-5 text-gray-400 group-hover:text-red-600" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};