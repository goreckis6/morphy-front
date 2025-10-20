import fs from 'fs';
import path from 'path';

const basePath = 'src/components/ConversionPages/';

// Template for batch conversion success UI
const batchSuccessUITemplate = `
              {/* Batch Conversion Success */}
              {batchMode && batchResults.length > 0 && (
                <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <h4 className="text-lg font-semibold text-green-800">Batch Conversion Complete!</h4>
                  </div>
                  <p className="text-green-700 mb-4">
                    {batchResults.filter(r => r.success).length} of {batchResults.length} files converted successfully.
                  </p>
                  <div className="space-y-3 max-h-60 overflow-y-auto">
                    {batchResults.map((result, index) => (
                      <div key={index} className={\`flex items-center justify-between p-3 rounded-lg \${
                        result.success ? 'bg-white border border-green-200' : 'bg-red-50 border border-red-200'
                      }\`}>
                        <div className="flex items-center flex-1">
                          {result.success ? (
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          ) : (
                            <AlertCircle className="w-4 h-4 text-red-500 mr-2" />
                          )}
                          <span className="text-sm font-medium truncate">{result.originalName}</span>
                          {result.success && result.size && (
                            <span className="text-xs text-gray-500 ml-2">({(result.size / 1024).toFixed(1)} KB)</span>
                          )}
                        </div>
                        {result.success && result.downloadPath && (
                          <button
                            onClick={() => handleBatchDownload(result)}
                            className="bg-green-600 text-white px-3 py-1 rounded text-xs font-medium hover:bg-green-700 transition-colors ml-2"
                          >
                            <Download className="w-3 h-3 mr-1 inline" />
                            Download
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={resetForm}
                    className="w-full mt-4 bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors flex items-center justify-center"
                  >
                    <RefreshCw className="w-5 h-5 mr-2" />
                    Convert More Files
                  </button>
                </div>
              )}`;

// Template for handleBatchDownload function
const batchDownloadHandlerTemplate = `
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
  };`;

console.log('🔧 Starting mass fix of conversion components...\n');

const componentsToFix = [
  'EPUBToCSVConverter.tsx',
  'EPUBToDOCConverter.tsx', 
  'EPUBToDOCXConverter.tsx',
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

let fixed = 0;

componentsToFix.forEach(component => {
  const filePath = path.join(basePath, component);
  
  if (!fs.existsSync(filePath)) {
    console.log(`❌ ${component} - File not found`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  let hasChanges = false;
  
  // Fix 1: Add handleBatchDownload if missing
  if (!content.includes('handleBatchDownload')) {
    const insertPoint = content.indexOf('const handleDownload');
    if (insertPoint !== -1) {
      content = content.slice(0, insertPoint) + batchDownloadHandlerTemplate + '\n\n  ' + content.slice(insertPoint);
      hasChanges = true;
    }
  }
  
  // Fix 2: Add batch success UI if missing  
  if (!content.includes('Batch Conversion Complete')) {
    // Find the end of single conversion success UI
    const singleSuccessEnd = content.indexOf(')}', content.indexOf('convertedFile && !batchMode'));
    if (singleSuccessEnd !== -1) {
      const insertPoint = content.indexOf('\n', singleSuccessEnd) + 1;
      content = content.slice(0, insertPoint) + batchSuccessUITemplate + content.slice(insertPoint);
      hasChanges = true;
    }
  }
  
  // Fix 3: Change "Convert Another" to "Convert More Files" in batch mode
  if (content.includes('Convert Another') && !content.includes('Convert More Files')) {
    // This is more complex as we need to check if it's in batch mode context
    // For now, let's add the batch success UI which includes the correct button
    hasChanges = true;
  }
  
  if (hasChanges) {
    try {
      fs.writeFileSync(filePath, content);
      console.log(`✅ ${component} - Fixed`);
      fixed++;
    } catch (error) {
      console.log(`❌ ${component} - Error writing file:`, error.message);
    }
  } else {
    console.log(`⚠️  ${component} - No changes needed or couldn't determine fix location`);
  }
});

console.log(`\n🎯 Fixed ${fixed} out of ${componentsToFix.length} components`);
console.log('\n⚠️  Note: Some components may need manual review for complex cases');
console.log('📝 Remember to test the components after these changes!');





