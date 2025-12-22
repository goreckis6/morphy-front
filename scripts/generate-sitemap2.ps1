$ErrorActionPreference = 'Stop'

$baseUrl = 'https://morphyhub.com'
$today = Get-Date -Format 'yyyy-MM-dd'

# All supported language codes
$languages = @('pl', 'de', 'id', 'sv', 'es', 'fr', 'it', 'nl', 'pt', 'vi', 'tr', 'ru', 'ar', 'th', 'ja', 'zh')
$languagePattern = '(' + ($languages -join '|') + ')'

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

# Build XML as string for better control
$xmlContent = "<?xml version=`"1.0`" encoding=`"utf-8`"?>`n"
$xmlContent += "<?xml-stylesheet type=`"text/xsl`" href=`"/sitemap.xsl`"?>`n"
$xmlContent += "<urlset xmlns=`"http://www.sitemaps.org/schemas/sitemap/0.9`" xmlns:xhtml=`"http://www.w3.org/1999/xhtml`">`n"

function Get-UrlXml {
    param(
        [string]$path,
        [string]$changefreq = 'weekly',
        [string]$priority = '0.8',
        [bool]$addHreflang = $true,
        [string[]]$availableLanguages = $script:languages
    )
    
    if ([string]::IsNullOrWhiteSpace($path)) {
        return ''
    }
    
    # Normalize path - ensure it starts with /
    if ($path -ne '/' -and -not $path.StartsWith('/')) {
        $path = "/$path"
    }
    
    $url = "$baseUrl$path"
    
    # Determine base path (without language prefix) for hreflang alternates
    $langPattern = '(' + ($script:languages -join '|') + ')'
    $basePath = $path
    
    # Check if path starts with a language code (e.g., /ja/viewers or /ja)
    # Remove the language prefix if present
    if ($path -match "^/$langPattern") {
        # Use regex replacement to remove language prefix: /lang -> removed, /lang/path -> /path
        $basePath = $path -replace "^/$langPattern", ''
        # If we removed everything (path was just /lang), set to root
        if ($basePath -eq '') {
            $basePath = '/'
        }
        # Ensure remaining path starts with / (it should after replacement, but be safe)
        if ($basePath -ne '/' -and -not $basePath.StartsWith('/')) {
            $basePath = "/$basePath"
        }
    }
    
    # Remove trailing slash for consistency (except root)
    if ($basePath -ne '/' -and $basePath.EndsWith('/')) {
        $basePath = $basePath.TrimEnd('/')
    }
    
    $xml = "  <url>`n"
    $xml += "    <loc>$url</loc>`n"
    
    if ($addHreflang) {
        # Always add English version
        $enUrl = "$baseUrl$basePath"
        $xml += "    <xhtml:link rel=`"alternate`" hreflang=`"en`" href=`"$enUrl`" />`n"
        
        # Add all available language versions
        foreach ($lang in $availableLanguages) {
            # Construct language URL: baseUrl + /lang + basePath
            # basePath already starts with /, so we get /lang/basePath correctly
            $langUrl = "$baseUrl/$lang$basePath"
            $xml += "    <xhtml:link rel=`"alternate`" hreflang=`"$lang`" href=`"$langUrl`" />`n"
        }
    }
    
    $xml += "    <lastmod>$today</lastmod>`n"
    $xml += "    <changefreq>$changefreq</changefreq>`n"
    $xml += "    <priority>$priority</priority>`n"
    $xml += "  </url>`n"
    
    return $xml
}

# Add main pages first
Write-Host "Adding main pages..." -ForegroundColor Yellow
$xmlContent += Get-UrlXml -path '/' -changefreq 'daily' -priority '1.0'
foreach ($lang in $languages) {
    $xmlContent += Get-UrlXml -path "/$lang" -changefreq 'daily' -priority '1.0'
}

# Add hub pages
Write-Host "Adding hub pages..." -ForegroundColor Yellow
$hubPages = @('/converters', '/viewers', '/compress', '/samples', '/yt-thumbnail-downloader')
foreach ($hub in $hubPages) {
    $xmlContent += Get-UrlXml -path $hub -changefreq 'weekly' -priority '0.9'
    foreach ($lang in $languages) {
        $xmlContent += Get-UrlXml -path "/$lang$hub" -changefreq 'weekly' -priority '0.9'
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
    
    # Determine priority and changefreq based on route type
    $changefreq = 'monthly'
    $priority = '0.8'
    
    if ($route -match '/convert/') {
        $changefreq = 'weekly'
        $priority = '0.8'
    } elseif ($route -match '/viewers/') {
        $changefreq = 'monthly'
        $priority = '0.7'
    } elseif ($route -match '/samples/') {
        $changefreq = 'monthly'
        $priority = '0.6'
    } elseif ($route -match '/compress/') {
        $changefreq = 'monthly'
        $priority = '0.7'
    }
    
    # Check if this is a language-specific route
    $langPattern = '(' + ($languages -join '|') + ')'
    $isLanguageRoute = $route -match "^/$langPattern/"
    
    if ($isLanguageRoute) {
        # This is already a language route, just add it
        $xmlContent += Get-UrlXml -path $route -changefreq $changefreq -priority $priority
        $count++
    } else {
        # This is a base route, add it and all language versions
        $xmlContent += Get-UrlXml -path $route -changefreq $changefreq -priority $priority
        $count++
        
        # Add all language versions if they exist in routes or if it's a standard page type
        if ($route -match '^/(convert|viewers|samples|compress)') {
            foreach ($lang in $languages) {
                $langRoute = "/$lang$route"
                if (-not $processedPaths.Contains($langRoute) -and ($uniqueRoutes -contains $langRoute)) {
                    $xmlContent += Get-UrlXml -path $langRoute -changefreq $changefreq -priority $priority
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

# Close urlset
$xmlContent += "</urlset>`n"

# Save the sitemap
$sitemapPath = Join-Path $PSScriptRoot '..\public\sitemap.xml'
$xmlContent | Out-File -FilePath $sitemapPath -Encoding UTF8 -NoNewline

Write-Host "`nSitemap.xml generated successfully!" -ForegroundColor Green
Write-Host "Location: $sitemapPath" -ForegroundColor Cyan

# Count URLs
$urlCount = ([regex]::Matches($xmlContent, '<url>')).Count
Write-Host "Total URLs: $urlCount" -ForegroundColor Yellow
