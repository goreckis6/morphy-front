import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentsDir = path.join(__dirname, 'src', 'components', 'ConversionPages');

function fixDownloadFunction(componentPath) {
  console.log(`Fixing ${path.basename(componentPath)}...`);
  
  let content = fs.readFileSync(componentPath, 'utf8');
  let modified = false;
  
  // Fix 1: apiService.downloadFile(downloadPath, should be apiService.downloadAndSaveFile(downloadPath,
  if (content.includes('await apiService.downloadFile(downloadPath,')) {
    content = content.replace(/await apiService\.downloadFile\(downloadPath,/g, 'await apiService.downloadAndSaveFile(downloadPath,');
    modified = true;
    console.log(`  Fixed downloadFile(downloadPath, to downloadAndSaveFile(downloadPath, in ${path.basename(componentPath)}`);
  }
  
  // Fix 2: apiService.downloadFile(filename, should be apiService.downloadAndSaveFile(filename,
  if (content.includes('await apiService.downloadFile(filename,')) {
    content = content.replace(/await apiService\.downloadFile\(filename,/g, 'await apiService.downloadAndSaveFile(filename,');
    modified = true;
    console.log(`  Fixed downloadFile(filename, to downloadAndSaveFile(filename, in ${path.basename(componentPath)}`);
  }
  
  // Fix 3: apiService.downloadFile(downloadPath) should be apiService.downloadAndSaveFile(downloadPath)
  if (content.includes('await apiService.downloadFile(downloadPath)') && !content.includes('await apiService.downloadFile(downloadPath,')) {
    content = content.replace(/await apiService\.downloadFile\(downloadPath\)/g, 'await apiService.downloadAndSaveFile(downloadPath)');
    modified = true;
    console.log(`  Fixed downloadFile(downloadPath) to downloadAndSaveFile(downloadPath) in ${path.basename(componentPath)}`);
  }
  
  // Fix 4: apiService.downloadFile(filename) should be apiService.downloadAndSaveFile(filename)
  if (content.includes('await apiService.downloadFile(filename)') && !content.includes('await apiService.downloadFile(filename,')) {
    content = content.replace(/await apiService\.downloadFile\(filename\)/g, 'await apiService.downloadAndSaveFile(filename)');
    modified = true;
    console.log(`  Fixed downloadFile(filename) to downloadAndSaveFile(filename) in ${path.basename(componentPath)}`);
  }
  
  if (modified) {
    fs.writeFileSync(componentPath, content, 'utf8');
    console.log(`  ✅ Fixed ${path.basename(componentPath)}`);
  } else {
    console.log(`  ⏭️  No downloadFile calls found in ${path.basename(componentPath)}`);
  }
}

// Get all component files
const componentFiles = fs.readdirSync(componentsDir)
  .filter(file => file.endsWith('.tsx'))
  .map(file => path.join(componentsDir, file));

console.log('🔧 Fixing download function calls in ALL conversion components...\n');

componentFiles.forEach(componentPath => {
  fixDownloadFunction(componentPath);
});

console.log('\n✅ All download function fixes completed!');

