# Remove duplicate translation keys, keeping the second (more detailed) occurrence

$content = Get-Content "src\i18n.ts" -Raw
$lines = Get-Content "src\i18n.ts"

# Track seen keys and their line numbers
$keyLines = @{}
$toRemove = @()

for ($i = 0; $i -lt $lines.Count; $i++) {
    $line = $lines[$i]
    
    # Match translation key pattern like 'epub_to_pptx.subtitle':
    if ($line -match "^\s+'([^']+)':\s*'.*',?\s*$") {
        $key = $Matches[1]
        
        if ($keyLines.ContainsKey($key)) {
            # This key was seen before - mark the FIRST occurrence for removal
            $firstLine = $keyLines[$key]
            if ($firstLine -notin $toRemove) {
                $toRemove += $firstLine
            }
        } else {
            # First time seeing this key
            $keyLines[$key] = $i
        }
    }
}

Write-Host "Found $($toRemove.Count) duplicate keys to remove (keeping second occurrence)"

# Remove lines in reverse order to maintain line numbers
$toRemove = $toRemove | Sort-Object -Descending

foreach ($lineNum in $toRemove) {
    $lines = $lines[0..($lineNum-1)] + $lines[($lineNum+1)..($lines.Count-1)]
}

# Write back
$lines | Set-Content "src\i18n.ts" -Encoding UTF8

Write-Host "Done! Removed $($toRemove.Count) duplicate lines"
