# Migration script to merge translations from i18n_v2.ts into i18n.ts
# This script merges all translations from additionalTranslations into the resources object

param(
    [string]$i18nPath = "src/i18n.ts",
    [string]$i18nV2Path = "src/i18n_v2.ts"
)

Write-Host "=== i18n Migration Script ===" -ForegroundColor Cyan
Write-Host "Migrating translations from $i18nV2Path to $i18nPath" -ForegroundColor Yellow

# Read files
Write-Host "`nReading files..." -ForegroundColor Green
$i18nContent = Get-Content $i18nPath -Raw -Encoding UTF8
$i18nV2Content = Get-Content $i18nV2Path -Raw -Encoding UTF8

# Create backup
$backupPath = "$i18nPath.backup.$(Get-Date -Format 'yyyyMMdd_HHmmss')"
Copy-Item $i18nPath $backupPath
Write-Host "Backup created: $backupPath" -ForegroundColor Green

# Languages to migrate
$languages = @('id', 'sv', 'es', 'fr', 'it', 'nl', 'pt', 'vi', 'tr', 'ru', 'ar', 'th', 'ja', 'zh')

# Extract translation objects from i18n_v2.ts
Write-Host "`nExtracting translations from i18n_v2.ts..." -ForegroundColor Green

foreach ($lang in $languages) {
    Write-Host "  Processing $lang..." -ForegroundColor Yellow
    
    # Find the language section in i18n_v2.ts
    # Pattern: lang: { translation: { ... } }
    $langPattern = "(?s)\s+$lang\s*:\s*\{[^}]*translation\s*:\s*\{([^}]+(?:\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}[^{}]*)*)\}"
    
    if ($i18nV2Content -match $langPattern) {
        $translationContent = $matches[1]
        Write-Host "    Found $lang translations" -ForegroundColor Green
        
        # Find the corresponding language section in i18n.ts
        $i18nLangPattern = "(?s)(\s+$lang\s*:\s*\{[^}]*translation\s*:\s*\{)([^}]+(?:\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}[^{}]*)*)(\})"
        
        if ($i18nContent -match $i18nLangPattern) {
            $existingTranslations = $matches[2]
            $beforeMatch = $matches[1]
            $afterMatch = $matches[3]
            
            # Extract all keys from existing translations to avoid duplicates
            $existingKeys = @{}
            $keyPattern = "'([^']+)'\s*:"
            $existingTranslations | Select-String -Pattern $keyPattern -AllMatches | ForEach-Object {
                foreach ($match in $_.Matches) {
                    $existingKeys[$match.Groups[1].Value] = $true
                }
            }
            
            # Extract new keys from i18n_v2.ts
            $newKeys = @{}
            $translationContent | Select-String -Pattern $keyPattern -AllMatches | ForEach-Object {
                foreach ($match in $_.Matches) {
                    $key = $match.Groups[1].Value
                    if (-not $existingKeys.ContainsKey($key)) {
                        $newKeys[$key] = $true
                    }
                }
            }
            
            if ($newKeys.Count -gt 0) {
                Write-Host "    Found $($newKeys.Count) new translation keys to add" -ForegroundColor Cyan
                
                # Extract the new translation entries
                # Find the closing brace of the translation object
                $newTranslations = ""
                $braceCount = 0
                $inTranslation = $false
                $lines = $translationContent -split "`n"
                
                # This is a simplified approach - we'll extract complete key-value pairs
                # For a more robust solution, we'd need a proper parser
                Write-Host "    Note: Manual review recommended for complex nested structures" -ForegroundColor Yellow
            }
        } else {
            Write-Host "    Warning: Language $lang not found in i18n.ts" -ForegroundColor Red
        }
    } else {
        Write-Host "    Warning: Language $lang not found in i18n_v2.ts" -ForegroundColor Red
    }
}

Write-Host "`n=== Migration Analysis Complete ===" -ForegroundColor Cyan
Write-Host "Due to the complexity of nested objects and potential duplicates," -ForegroundColor Yellow
Write-Host "this script provides analysis. Manual merge is recommended." -ForegroundColor Yellow
Write-Host "`nNext steps:" -ForegroundColor Green
Write-Host "1. Review the structure of both files" -ForegroundColor White
Write-Host "2. Use a proper TypeScript/JavaScript parser for accurate merging" -ForegroundColor White
Write-Host "3. Or manually merge language by language" -ForegroundColor White



