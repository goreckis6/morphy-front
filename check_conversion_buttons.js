import fs from 'fs';
import path from 'path';

// List of all conversion components to check
const components = [
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
  'EPUBToXLSXConverter.tsx',
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
  'CSVToXLSXConverter.tsx'
];

const basePath = 'src/components/ConversionPages/';

console.log('🔍 Checking conversion components for download buttons and reset text...\n');

const issues = [];

components.forEach(component => {
  const filePath = path.join(basePath, component);
  
  if (!fs.existsSync(filePath)) {
    issues.push({
      component,
      type: 'FILE_NOT_FOUND',
      message: 'Component file not found'
    });
    return;
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Check for single mode download button
  const hasSingleDownload = content.includes('Download') && content.includes('handleDownload');
  
  // Check for batch mode download buttons  
  const hasBatchDownload = content.includes('handleBatchDownload');
  
  // Check for batch conversion success UI
  const hasBatchSuccessUI = content.includes('Batch Conversion Complete') || content.includes('batchResults.length > 0');
  
  // Check for correct reset button text
  const hasConvertAnother = content.includes('Convert Another');
  const hasConvertMoreFiles = content.includes('Convert More Files');
  
  // Check for batch mode detection
  const hasBatchMode = content.includes('batchMode');
  
  const componentIssues = [];
  
  if (!hasSingleDownload) {
    componentIssues.push('Missing single mode download button');
  }
  
  if (hasBatchMode && !hasBatchDownload) {
    componentIssues.push('Missing batch download functionality');
  }
  
  if (hasBatchMode && !hasBatchSuccessUI) {
    componentIssues.push('Missing batch conversion success UI');
  }
  
  if (!hasConvertAnother) {
    componentIssues.push('Missing "Convert Another" button for single mode');
  }
  
  if (hasBatchMode && !hasConvertMoreFiles) {
    componentIssues.push('Missing "Convert More Files" button for batch mode');
  }
  
  if (componentIssues.length > 0) {
    issues.push({
      component,
      type: 'FUNCTIONALITY_ISSUES',
      issues: componentIssues
    });
  }
});

// Report results
if (issues.length === 0) {
  console.log('✅ All conversion components have proper download buttons and reset text!');
} else {
  console.log(`❌ Found issues in ${issues.length} components:\n`);
  
  issues.forEach(({ component, type, issues: componentIssues, message }) => {
    console.log(`📄 ${component}`);
    if (type === 'FILE_NOT_FOUND') {
      console.log(`   ❌ ${message}`);
    } else {
      componentIssues.forEach(issue => {
        console.log(`   ❌ ${issue}`);
      });
    }
    console.log('');
  });
}

console.log(`\n📊 Summary: Checked ${components.length} components, found ${issues.length} with issues.`);
