import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentsDir = path.join(__dirname, 'src', 'components', 'ConversionPages');

function fixBatchDisplay(componentPath) {
  console.log(`Fixing ${path.basename(componentPath)}...`);
  
  let content = fs.readFileSync(componentPath, 'utf8');
  let modified = false;
  
  // Check if this component has the old broken batch display
  if (content.includes('Batch Conversion Results') && content.includes('text-green-800">Batch Conversion Results</h4>')) {
    console.log(`  Found old batch display in ${path.basename(componentPath)}`);
    
    // Replace the old batch display with the new one
    const oldPattern = /{batchMode && batchConverted && batchResults\.length > 0 && \(\s*<div className=\{`mt-6 p-6 rounded-xl border \$\{\s*batchResults\.filter\(r => r\.success\)\.length > 0 \s*\? 'bg-green-50 border-green-200' \s*: 'bg-red-50 border-red-200'\s*\}\}`>\s*<div className="flex items-center mb-4">\s*<CheckCircle className="w-6 h-6 text-green-500 mr-3" \/>\s*<h4 className="text-lg font-semibold text-green-800">Batch Conversion Results<\/h4>\s*<\/div>\s*<div className="space-y-2 max-h-60 overflow-y-auto">[\s\S]*?<\/div>\s*<\/div>\s*\)}/g;
    
    const newBatchDisplay = `{batchMode && batchConverted && batchResults.length > 0 && (
                <div className={\`mt-6 p-6 rounded-xl border ${
                  batchResults.filter(r => r.success).length > 0
                    ? 'bg-green-50 border-green-200'
                    : 'bg-red-50 border-red-200'
                }\`}>
                  <div className="flex items-center mb-4">
                    {batchResults.filter(r => r.success).length > 0 ? (
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    ) : (
                      <AlertCircle className="w-6 h-6 text-red-500 mr-3" />
                    )}
                    <h4 className={\`text-lg font-semibold ${
                      batchResults.filter(r => r.success).length > 0 ? 'text-green-800' : 'text-red-800'
                    }\`}>
                      {batchResults.filter(r => r.success).length > 0 ? 'Batch Conversion Complete!' : 'Batch Conversion Failed'}
                    </h4>
                  </div>
                  <p className={\`mb-4 ${
                    batchResults.filter(r => r.success).length > 0 ? 'text-green-700' : 'text-red-700'
                  }\`}>
                    {batchResults.filter(r => r.success).length} of {batchResults.length} files converted successfully.
                  </p>
                  <div className="space-y-3 max-h-60 overflow-y-auto">
                    {batchResults.map((result, index) => (
                      <div key={index} className={\`flex items-center justify-between p-3 rounded-lg ${
                        result.success ? 'bg-white border border-green-200' : 'bg-red-50 border border-red-200'
                      }\`}>
                        <div className="flex-1">
                          <div className="flex items-center">
                            {result.success ? (
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            ) : (
                              <AlertCircle className="w-4 h-4 text-red-500 mr-2" />
                            )}
                            <span className="text-sm font-medium truncate">{result.originalName}</span>
                            {result.success && result.size && (
                              <span className="text-xs text-gray-500 ml-2">({formatFileSize(result.size)})</span>
                            )}
                          </div>
                          {!result.success && result.error && (
                            <div className="text-xs text-red-600 mt-1 ml-6">{result.error}</div>
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
    
    if (oldPattern.test(content)) {
      content = content.replace(oldPattern, newBatchDisplay);
      modified = true;
      console.log(`  ✅ Fixed batch display in ${path.basename(componentPath)}`);
    } else {
      console.log(`  ⏭️  No old batch display pattern found in ${path.basename(componentPath)}`);
    }
  } else {
    console.log(`  ⏭️  No batch display issues found in ${path.basename(componentPath)}`);
  }
  
  if (modified) {
    fs.writeFileSync(componentPath, content, 'utf8');
  }
}

// Get all EPUB converter files
const epubFiles = fs.readdirSync(componentsDir)
  .filter(file => file.startsWith('EPUBTo') && file.endsWith('.tsx'))
  .map(file => path.join(componentsDir, file));

console.log('🔧 Fixing batch display in EPUB converters...\n');

epubFiles.forEach(componentPath => {
  fixBatchDisplay(componentPath);
});

console.log('\n✅ Batch display fixes completed!');


