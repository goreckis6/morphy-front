# Script to move csv_to_sql translations from i18n_v2.ts to i18n.ts

$ErrorActionPreference = "Stop"

$i18nV2Path = "src/i18n_v2.ts"
$i18nPath = "src/i18n.ts"
$backupPath = "src/i18n_backup.ts"

Write-Host "Reading files..." -ForegroundColor Cyan

# Read both files with UTF-8 encoding
$utf8NoBom = New-Object System.Text.UTF8Encoding $false
$i18nV2Content = [System.IO.File]::ReadAllText($i18nV2Path, $utf8NoBom)
$i18nContent = [System.IO.File]::ReadAllText($i18nPath, $utf8NoBom)

# Create backup
Write-Host "Creating backup..." -ForegroundColor Cyan
Copy-Item $i18nPath $backupPath -Force

# Find all csv_to_sql sections in i18n_v2.ts and extract them
Write-Host "Extracting translations from i18n_v2.ts..." -ForegroundColor Cyan

# Pattern to find all csv_to_sql sections
$extractAllPattern = "(?s)(// CSV to SQL\s+'csv_to_sql\.title':\s*'([^']+)',\s*'csv_to_sql\.meta_title':[^/]+?)(?=\s*// CSV to TOML)"

$translations = @{}
if ($i18nV2Content -match $extractAllPattern) {
    $allMatches = [regex]::Matches($i18nV2Content, $extractAllPattern)
    foreach ($match in $allMatches) {
        $title = $match.Groups[2].Value
        $fullSection = $match.Groups[1].Value.TrimEnd()
        $translations[$title] = $fullSection
    }
    Write-Host "Found $($translations.Count) translations in i18n_v2.ts" -ForegroundColor Green
}

# Now find and replace in i18n.ts
Write-Host "Updating i18n.ts..." -ForegroundColor Cyan

$updatedCount = 0

# Pattern to find csv_to_sql sections in i18n.ts (with title and subtitle)
$replacePattern = "(?s)(// CSV to SQL\s+'csv_to_sql\.title':\s*'([^']+)',\s*'csv_to_sql\.subtitle':\s*'[^']*',\s*)(// CSV to TOML)"

$allMatches = [regex]::Matches($i18nContent, $replacePattern)
foreach ($match in $allMatches) {
    $title = $match.Groups[2].Value
    $oldSection = $match.Groups[1].Value
    $tomlComment = $match.Groups[3].Value
    
    if ($translations.ContainsKey($title)) {
        $fullTranslation = $translations[$title]
        $replacement = $fullTranslation + "`n      " + $tomlComment
        $i18nContent = $i18nContent -replace [regex]::Escape($match.Value), $replacement
        $updatedCount++
        Write-Host "  Updated: $title" -ForegroundColor Green
    }
}

# Try alternative pattern for sections without subtitle
$replacePattern2 = "(?s)(// CSV to SQL\s+'csv_to_sql\.title':\s*'([^']+)',\s*)(// CSV to TOML)"
$allMatches2 = [regex]::Matches($i18nContent, $replacePattern2)
foreach ($match in $allMatches2) {
    $title = $match.Groups[2].Value
    $oldSection = $match.Groups[1].Value
    $tomlComment = $match.Groups[3].Value
    
    # Only process if we haven't already updated this one and it exists in translations
    if ($translations.ContainsKey($title) -and $i18nContent.Contains($match.Value)) {
        $fullTranslation = $translations[$title]
        $replacement = $fullTranslation + "`n      " + $tomlComment
        $i18nContent = $i18nContent -replace [regex]::Escape($match.Value), $replacement
        $updatedCount++
        Write-Host "  Updated: $title (no subtitle)" -ForegroundColor Green
    }
}

# Save the updated file with UTF-8 encoding
Write-Host ""
Write-Host "Saving updated file..." -ForegroundColor Cyan
[System.IO.File]::WriteAllText($i18nPath, $i18nContent, $utf8NoBom)

Write-Host ""
Write-Host "Completed! Updated $updatedCount languages." -ForegroundColor Green
Write-Host "Backup saved to: $backupPath" -ForegroundColor Cyan
