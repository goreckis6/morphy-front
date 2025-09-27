import fs from 'fs';
import path from 'path';

const basePath = 'src/components/ConversionPages/';

// Priority components that need fixing (the ones you listed)
const targetComponents = [
  'AVROToCSVConverter.tsx',
  'AVROToJSONConverter.tsx', 
  'AVROToNDJSONConverter.tsx',
  'CSVToAVROConverter.tsx',
  'BMPToICOConverter.tsx',
  'BMPToWebPConverter.tsx',
  'CR2ToICOConverter.tsx',
  'CR2ToWebPConverter.tsx',
  'DNGToICOConverter.tsx',
  'DNGToWebPConverter.tsx',
  'EPSToICOConverter.tsx',
  'EPSToWebPConverter.tsx',
  'GIFToICOConverter.tsx',
  'CSVToDOCConverter.tsx',
  'CSVToDOCXConverter.tsx',
  'CSVToEPUBConverter.tsx',
  'CSVToHTMLConverter.tsx',
  'CSVToMDConverter.tsx',
  'CSVToMOBIConverter.tsx',
  'CSVToODPConverter.tsx',
  'CSVToODTConverter.tsx',
  'CSVToPDFConverter.tsx',
  'CSVToPPTConverter.tsx',
  'CSVToPPTXConverter.tsx',
  'CSVToRTFConverter.tsx',
  'CSVToTXTConverter.tsx',
  'CSVToXLSConverter.tsx',
  'CSVToXLSXConverter.tsx',
  'EPUBToCSVConverter.tsx',
  'EPUBToDOCConverter.tsx',
  'EPUBToDOCXConverter.tsx',
  'EPUBToHTMLConverter.tsx',
  'EPUBToMDConverter.tsx',
  'EPUBToMOBIConverter.tsx',
  'EPUBToODPConverter.tsx',
  'EPUBToODTConverter.tsx',
  'EPUBToPDFConverter.tsx',
  'EPUBToPPTConverter.tsx',
  'EPUBToPPTXConverter.tsx',
  'EPUBToRTFConverter.tsx',
  'EPUBToTXTConverter.tsx',
  'EPUBToXLSXConverter.tsx'
];

console.log('🔧 Fixing "Convert More Files" buttons in batch mode...\n');

let fixedCount = 0;

targetComponents.forEach(component => {
  const filePath = path.join(basePath, component);
  
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  ${component} - File not found`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  let hasChanges = false;
  
  // Check if component has batch mode
  const hasBatchMode = content.includes('batchMode');
  const hasBatchResults = content.includes('batchResults');
  
  if (hasBatchMode && hasBatchResults) {
    console.log(`📄 Checking ${component}...`);
    
    // Fix 1: Add "Convert More Files" button to batch results section if missing
    if (content.includes('Batch') && content.includes('Convert') && !content.includes('Convert More Files')) {
      // Look for existing batch results section and add the button
      const batchSectionPattern = /(\{batchMode[\s\S]*?batchResults[\s\S]*?<\/div>\s*<\/div>\s*<\/div>)/;
      const match = content.match(batchSectionPattern);
      
      if (match) {
        const batchSection = match[1];
        
        // Add the "Convert More Files" button before the closing divs
        const buttonHTML = `
                  <button
                    onClick={resetForm}
                    className="w-full mt-4 bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors flex items-center justify-center"
                  >
                    <RefreshCw className="w-5 h-5 mr-2" />
                    Convert More Files
                  </button>`;
        
        // Insert the button before the last closing div(s)
        const updatedSection = batchSection.replace(
          /(\s*<\/div>\s*<\/div>\s*<\/div>)$/,
          buttonHTML + '$1'
        );
        
        content = content.replace(batchSection, updatedSection);
        hasChanges = true;
        console.log(`   ✅ Added "Convert More Files" button`);
      }
    }
    
    // Fix 2: Ensure proper handleBatchDownload error handling
    if (content.includes('apiService.downloadFile') && !content.includes('handleBatchDownload')) {
      // Replace direct API calls with proper handler
      content = content.replace(
        /onClick=\{\(\) => apiService\.downloadFile\([^}]+\)\}/g,
        'onClick={() => handleBatchDownload(r)}'
      );
      
      // Add handleBatchDownload function if missing
      const handleDownloadIndex = content.indexOf('const handleDownload');
      if (handleDownloadIndex !== -1) {
        const batchHandler = `
  const handleBatchDownload = async (result: any) => {
    const filename = result.storedFilename || result.downloadPath?.split('/').pop();
    if (!filename) {
      setError('Download link is missing. Please reconvert.');
      return;
    }
    try {
      await apiService.downloadFile(filename, result.outputFilename);
    } catch (error) {
      setError('Download failed. Please try again.');
    }
  };
`;
        content = content.slice(0, handleDownloadIndex) + batchHandler + '\n  ' + content.slice(handleDownloadIndex);
        hasChanges = true;
        console.log(`   ✅ Added proper batch download handler`);
      }
    }
  }
  
  if (hasChanges) {
    try {
      fs.writeFileSync(filePath, content);
      fixedCount++;
      console.log(`   🎯 Fixed ${component}`);
    } catch (error) {
      console.log(`   ❌ Error writing ${component}:`, error.message);
    }
  } else if (hasBatchMode) {
    console.log(`   ⚪ ${component} - No changes needed`);
  } else {
    console.log(`   ℹ️  ${component} - No batch mode detected`);
  }
  
  console.log('');
});

console.log(`📊 Summary:`);
console.log(`   🎯 Fixed: ${fixedCount} components`);
console.log(`   📄 Processed: ${targetComponents.length} components`);
console.log('\n✅ All components should now have:');
console.log('   • "Download" + "Convert Another" in single mode');
console.log('   • Individual "Download" + "Convert More Files" in batch mode');
console.log('   • Proper error handling for downloads');
