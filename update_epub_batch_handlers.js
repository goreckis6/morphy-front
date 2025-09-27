// Script to update file handlers for all EPUB converters
const fs = require('fs');
const path = require('path');

const files = [
  'src/components/ConversionPages/EPUBToPPTXConverter.tsx',
  'src/components/ConversionPages/EPUBToXLSXConverter.tsx', 
  'src/components/ConversionPages/EPUBToMDConverter.tsx',
  'src/components/ConversionPages/EPUBToMOBIConverter.tsx',
  'src/components/ConversionPages/EPUBToODPConverter.tsx',
  'src/components/ConversionPages/EPUBToODTConverter.tsx',
  'src/components/ConversionPages/EPUBToPDFConverter.tsx',
  'src/components/ConversionPages/EPUBToRTFConverter.tsx',
  'src/components/ConversionPages/EPUBToTXTConverter.tsx'
];

const oldFileSelectHandler = `  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.name.toLowerCase().endsWith('.epub')) {
        setSelectedFile(file);
        setError(null);
        setPreviewUrl(URL.createObjectURL(file));
      } else {
        setError('Please select a valid EPUB file');
      }
    }
  };`;

const newFileSelectHandler = `  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.name.toLowerCase().endsWith('.epub')) {
        const validation = validateSingleFile(file);
        if (!validation.isValid) {
          setError(validation.error?.message || 'File validation failed');
          setSelectedFile(null);
          setPreviewUrl(null);
          if (fileInputRef.current) fileInputRef.current.value = '';
          return;
        }
        setSelectedFile(file);
        setError(null);
        clearValidationError();
        setPreviewUrl(URL.createObjectURL(file));
      } else {
        setError('Please select a valid EPUB file');
      }
    }
  };`;

const oldBatchSelectHandler = `  const handleBatchFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const epubFiles = files.filter(file => 
      file.name.toLowerCase().endsWith('.epub')
    );
    setBatchFiles(epubFiles);
    setError(null);
  };`;

const newBatchSelectHandler = `  const handleBatchFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const epubFiles = files.filter(file => 
      file.name.toLowerCase().endsWith('.epub')
    );
    
    if (epubFiles.length === 0) {
      setError('No valid EPUB files selected.');
      return;
    }

    const validation = validateBatchFiles(epubFiles);
    if (!validation.isValid) {
      setError(validation.error?.message || 'Batch validation failed');
      setBatchFiles([]);
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    setBatchFiles(epubFiles);
    setError(null);
    clearValidationError();
  };`;

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    
    // Update file handlers if they haven't been updated already
    if (content.includes('setPreviewUrl(URL.createObjectURL(file));') && 
        !content.includes('validateSingleFile(file)')) {
      content = content.replace(oldFileSelectHandler, newFileSelectHandler);
      content = content.replace(oldBatchSelectHandler, newBatchSelectHandler);
      
      fs.writeFileSync(file, content);
      console.log(`Updated file handlers in ${file}`);
    } else {
      console.log(`File handlers already updated in ${file}`);
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});
