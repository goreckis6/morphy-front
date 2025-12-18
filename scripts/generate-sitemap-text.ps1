$ErrorActionPreference = 'Stop'

$baseUrl = 'https://morphyhub.com'
$today = Get-Date -Format 'yyyy-MM-dd'

# All supported language codes (including English)
$allLanguages = @('en') + @('pl', 'de', 'id', 'sv', 'es', 'fr', 'it', 'nl', 'pt', 'vi', 'tr', 'ru', 'ar', 'th', 'ja', 'zh')
$languages = @('pl', 'de', 'id', 'sv', 'es', 'fr', 'it', 'nl', 'pt', 'vi', 'tr', 'ru', 'ar', 'th', 'ja', 'zh')

# Extract all routes from App.tsx
$appTsxPath = Join-Path $PSScriptRoot '..\src\App.tsx'
$routePattern = 'path="([^"]+)"'

$allRoutes = @()
$content = Get-Content -Path $appTsxPath -Raw
$matches = [regex]::Matches($content, $routePattern)

foreach ($match in $matches) {
    $path = $match.Groups[1].Value
    # Skip Navigate, NotFound, empty paths, and wildcard routes
    if ($path -notmatch 'Navigate' -and $path -notmatch 'NotFound' -and $path -ne '' -and $path -ne '*') {
        $allRoutes += $path
    }
}

# Get unique routes and sort
$uniqueRoutes = $allRoutes | Sort-Object -Unique

Write-Host "Found $($uniqueRoutes.Count) unique routes" -ForegroundColor Cyan

# Collect all URLs
$allUrls = @()

# Helper function to get base path (without language prefix)
function Get-BasePath {
    param([string]$path)
    
    if ([string]::IsNullOrWhiteSpace($path)) {
        return '/'
    }
    
    # Normalize path - ensure it starts with /
    if ($path -ne '/' -and -not $path.StartsWith('/')) {
        $path = "/$path"
    }
    
    # Determine base path (without language prefix)
    $langPattern = '^/(' + ($languages -join '|') + ')(/|$)'
    $basePath = $path -replace $langPattern, '/'
    if ($basePath -eq '') { $basePath = '/' }
    
    # Remove trailing slash for consistency (except root)
    if ($basePath -ne '/' -and $basePath.EndsWith('/')) {
        $basePath = $basePath.TrimEnd('/')
    }
    
    return $basePath
}

# Add main pages
Write-Host "Adding main pages..." -ForegroundColor Yellow
$allUrls += "$baseUrl/"
foreach ($lang in $languages) {
    $allUrls += "$baseUrl/$lang/"
}

# Add hub pages
Write-Host "Adding hub pages..." -ForegroundColor Yellow
$hubPages = @('/converters', '/viewers', '/compress', '/samples', '/yt-thumbnail-downloader')
foreach ($hub in $hubPages) {
    $allUrls += "$baseUrl$hub"
    foreach ($lang in $languages) {
        $allUrls += "$baseUrl/$lang$hub"
    }
}

# Process all other routes
Write-Host "Processing routes..." -ForegroundColor Yellow
$count = 0
$processedPaths = New-Object System.Collections.Generic.HashSet[string]

# Build list of main pages and hubs to skip
$skipRoutes = @('/', '/conventers')
foreach ($lang in $languages) {
    $skipRoutes += "/$lang"
}
$skipRoutes += '/converters', '/viewers', '/compress', '/samples', '/yt-thumbnail-downloader'
foreach ($lang in $languages) {
    $skipRoutes += "/$lang/converters", "/$lang/viewers", "/$lang/compress", "/$lang/samples", "/$lang/yt-thumbnail-downloader"
}

foreach ($route in $uniqueRoutes) {
    # Skip main pages and hubs (already added)
    if ($route -in $skipRoutes) {
        continue
    }
    
    # Skip if already processed
    if ($processedPaths.Contains($route)) {
        continue
    }
    $null = $processedPaths.Add($route)
    
    # Check if this is a language-specific route
    $langPattern = '^/(' + ($languages -join '|') + ')/'
    $isLanguageRoute = $route -match $langPattern
    
    if ($isLanguageRoute) {
        # This is already a language route, add it
        $allUrls += "$baseUrl$route"
        $count++
    } else {
        # This is a base route, add it and all language versions
        $allUrls += "$baseUrl$route"
        $count++
        
        # Add all language versions if they exist in routes or if it's a standard page type
        if ($route -match '^/(convert|viewers|samples|compress)') {
            foreach ($lang in $languages) {
                $langRoute = "/$lang$route"
                if (-not $processedPaths.Contains($langRoute) -and ($uniqueRoutes -contains $langRoute)) {
                    $allUrls += "$baseUrl$langRoute"
                    $null = $processedPaths.Add($langRoute)
                    $count++
                }
            }
        }
    }
    
    if ($count % 50 -eq 0) {
        Write-Host "  Processed $count routes..." -ForegroundColor Gray
    }
}

# Sort URLs
$allUrls = $allUrls | Sort-Object -Unique

# Generate text sitemap organized by language
Write-Host "`nGenerating text sitemap..." -ForegroundColor Yellow
$textContent = "Sitemap for $baseUrl`n"
$textContent += "Generated: $today`n"
$textContent += "Total URLs: $($allUrls.Count)`n"
$textContent += "=" * 80 + "`n`n"

# Group by language
foreach ($lang in $allLanguages) {
    $langUrls = @()
    
    if ($lang -eq 'en') {
        # English URLs (no language prefix)
        $langUrls = $allUrls | Where-Object { $_ -notmatch '/(' + ($languages -join '|') + ')/' -and $_ -ne "$baseUrl/" }
        # Add root URL
        $langUrls = @("$baseUrl/") + $langUrls
    } else {
        # Language-specific URLs
        $langUrls = $allUrls | Where-Object { $_ -match "^$baseUrl/$lang/" -or $_ -eq "$baseUrl/$lang" }
    }
    
    if ($langUrls.Count -gt 0) {
        $textContent += "`n[$lang] Language - $($langUrls.Count) URLs`n"
        $textContent += "-" * 80 + "`n"
        foreach ($url in $langUrls) {
            $textContent += "$url`n"
        }
    }
}

# Save the text sitemap
$sitemapTextPath = Join-Path $PSScriptRoot '..\public\sitemap_text.txt'
$textContent | Out-File -FilePath $sitemapTextPath -Encoding UTF8 -NoNewline

Write-Host "`nsitemap_text.txt generated successfully!" -ForegroundColor Green
Write-Host "Location: $sitemapTextPath" -ForegroundColor Cyan
Write-Host "Total URLs: $($allUrls.Count)" -ForegroundColor Yellow

