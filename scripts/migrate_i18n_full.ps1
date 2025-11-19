# Full automated migration script using TypeScript parsing
# Merges all translations from i18n_v2.ts into i18n.ts intelligently

param(
    [string]$i18nPath = "src/i18n.ts",
    [string]$i18nV2Path = "src/i18n_v2.ts"
)

Write-Host "=== Full Automated i18n Migration ===" -ForegroundColor Cyan
Write-Host "Using intelligent merge strategy" -ForegroundColor Yellow

# Create backup
$timestamp = Get-Date -Format 'yyyyMMdd_HHmmss'
$backupPath = "$i18nPath.backup.$timestamp"
Copy-Item $i18nPath $backupPath
Write-Host "`nBackup created: $backupPath" -ForegroundColor Green

# Read files
Write-Host "`nReading files..." -ForegroundColor Green
$i18nContent = Get-Content $i18nPath -Raw -Encoding UTF8
$i18nV2Content = Get-Content $i18nV2Path -Raw -Encoding UTF8

# Languages to migrate
$languages = @('id', 'sv', 'es', 'fr', 'it', 'nl', 'pt', 'vi', 'tr', 'ru', 'ar', 'th', 'ja', 'zh')

$totalMerged = 0

foreach ($lang in $languages) {
    Write-Host "`n=== Processing $lang ===" -ForegroundColor Cyan
    
    # Extract language section from i18n_v2.ts
    # Find: lang: { translation: { ... } }
    $v2Pattern = "(?s)\s+$lang\s*:\s*\{[^}]*translation\s*:\s*\{([^}]+(?:\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}[^{}]*)*)\}\s*\}\s*,?"
    
    if ($i18nV2Content -match $v2Pattern) {
        $v2TranslationBlock = $matches[1]
        Write-Host "  Found $lang in i18n_v2.ts" -ForegroundColor Green
        
        # Find language section in i18n.ts
        $i18nPattern = "(?s)(\s+$lang\s*:\s*\{[^}]*translation\s*:\s*\{)([^}]+(?:\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}[^{}]*)*)(\}\s*\}\s*,?)"
        
        if ($i18nContent -match $i18nPattern) {
            $i18nBefore = $matches[1]
            $i18nTranslationBlock = $matches[2]
            $i18nAfter = $matches[3]
            
            Write-Host "  Found $lang in i18n.ts" -ForegroundColor Green
            
            # Extract all translation keys from both blocks
            # Pattern: 'key': 'value' or 'key': { nested object }
            $extractKeys = {
                param($block)
                $keys = @{}
                $lines = $block -split "`n"
                $currentKey = $null
                $currentValue = ""
                $braceDepth = 0
                $inString = $false
                $stringChar = $null
                
                foreach ($line in $lines) {
                    # Simple key extraction - look for 'key': pattern
                    if ($line -match "'([^']+)'\s*:\s*(.+)") {
                        $key = $matches[1]
                        $value = $matches[2].Trim()
                        
                        # Check if it's a nested object
                        if ($value -match '^\s*\{') {
                            # Nested object - we'll handle this differently
                            $keys[$key] = "NESTED"
                        } else {
                            # Simple value
                            $keys[$key] = $value
                        }
                    }
                }
                return $keys
            }
            
            $existingKeys = & $extractKeys $i18nTranslationBlock
            $newKeys = & $extractKeys $v2TranslationBlock
            
            Write-Host "  Existing keys: $($existingKeys.Count)" -ForegroundColor Yellow
            Write-Host "  New keys: $($newKeys.Count)" -ForegroundColor Yellow
            
            # Find missing keys
            $missingKeys = @()
            foreach ($key in $newKeys.Keys) {
                if (-not $existingKeys.ContainsKey($key)) {
                    $missingKeys += $key
                }
            }
            
            Write-Host "  Missing keys to add: $($missingKeys.Count)" -ForegroundColor $(if ($missingKeys.Count -gt 0) { 'Cyan' } else { 'Green' })
            
            if ($missingKeys.Count -gt 0) {
                # Extract the missing key-value pairs from v2
                $linesToAdd = @()
                $lines = $v2TranslationBlock -split "`n"
                $captureNext = $false
                $currentKey = $null
                
                foreach ($line in $lines) {
                    if ($line -match "'([^']+)'\s*:") {
                        $key = $matches[1]
                        if ($missingKeys -contains $key) {
                            $captureNext = $true
                            $currentKey = $key
                            $linesToAdd += $line
                            
                            # Check if it's a nested object
                            if ($line -match '\{\s*$') {
                                # Start of nested object - capture until closing brace
                                $braceCount = ($line | Select-String -Pattern '\{' -AllMatches).Matches.Count - ($line | Select-String -Pattern '\}' -AllMatches).Matches.Count
                                $nestedLines = @($line)
                                $lineIndex = $lines.IndexOf($line) + 1
                                
                                while ($braceCount -gt 0 -and $lineIndex -lt $lines.Count) {
                                    $nextLine = $lines[$lineIndex]
                                    $nestedLines += $nextLine
                                    $braceCount += ($nextLine | Select-String -Pattern '\{' -AllMatches).Matches.Count - ($nextLine | Select-String -Pattern '\}' -AllMatches).Matches.Count
                                    $lineIndex++
                                }
                                $linesToAdd = $linesToAdd[0..($linesToAdd.Count-2)] + $nestedLines
                            }
                        } else {
                            $captureNext = $false
                        }
                    } elseif ($captureNext) {
                        $linesToAdd += $line
                        if ($line -match ',\s*$' -and $line -notmatch '\{') {
                            $captureNext = $false
                        }
                    }
                }
                
                # Insert missing keys before the closing brace
                $newTranslationBlock = $i18nTranslationBlock
                if ($linesToAdd.Count -gt 0) {
                    $insertionPoint = $newTranslationBlock.LastIndexOf('}')
                    if ($insertionPoint -gt 0) {
                        $indent = "      "  # Standard indent for translation entries
                        $newLines = $linesToAdd | ForEach-Object { "$indent$_" }
                        $newTranslationBlock = $newTranslationBlock.Insert($insertionPoint, "`n" + ($newLines -join "`n") + "`n")
                        $totalMerged += $missingKeys.Count
                        Write-Host "  Added $($missingKeys.Count) new keys" -ForegroundColor Green
                    }
                }
                
                # Update the content
                $newSection = $i18nBefore + $newTranslationBlock + $i18nAfter
                $i18nContent = $i18nContent -replace $i18nPattern, $newSection
            } else {
                Write-Host "  No missing keys - already complete" -ForegroundColor Green
            }
        } else {
            Write-Host "  Warning: Language $lang not found in i18n.ts" -ForegroundColor Red
        }
    } else {
        Write-Host "  Warning: Language $lang not found in i18n_v2.ts" -ForegroundColor Red
    }
}

# Remove unused import
Write-Host "`n=== Removing unused import ===" -ForegroundColor Cyan
if ($i18nContent -match "import\s+\{\s*additionalTranslations\s*\}\s*from\s+['\`"].*i18n_v2['\`"];") {
    $i18nContent = $i18nContent -replace "import\s+\{\s*additionalTranslations\s*\}\s*from\s+['\`"].*i18n_v2['\`"];\s*`n?", ""
    Write-Host "  Removed unused import" -ForegroundColor Green
}

# Write updated file
Write-Host "`n=== Writing updated file ===" -ForegroundColor Cyan
$i18nContent | Set-Content $i18nPath -Encoding UTF8 -NoNewline
Write-Host "  File updated: $i18nPath" -ForegroundColor Green

Write-Host "`n=== Migration Complete ===" -ForegroundColor Cyan
Write-Host "Total keys merged: $totalMerged" -ForegroundColor Green
Write-Host "Backup saved: $backupPath" -ForegroundColor Yellow
Write-Host "`nPlease review the changes and test the build!" -ForegroundColor Yellow



