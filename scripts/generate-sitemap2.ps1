$ErrorActionPreference = 'Stop'

$baseUrl = 'https://morphyhub.com'
$today = Get-Date -Format 'yyyy-MM-dd'

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
        [bool]$addHreflang = $true
    )
    
    if ([string]::IsNullOrWhiteSpace($path)) {
        return ''
    }
    
    # Normalize path - ensure it starts with /
    if ($path -ne '/' -and -not $path.StartsWith('/')) {
        $path = "/$path"
    }
    
    $url = "$baseUrl$path"
    
    # Determine base path (without language prefix)
    $basePath = $path -replace '^/(pl|de)', ''
    if ($basePath -eq '') { $basePath = '/' }
    
    # Remove trailing slash for consistency (except root)
    if ($basePath -ne '/' -and $basePath.EndsWith('/')) {
        $basePath = $basePath.TrimEnd('/')
    }
    
    $enUrl = "$baseUrl$basePath"
    $plUrl = "$baseUrl/pl$basePath"
    $deUrl = "$baseUrl/de$basePath"
    
    $xml = "  <url>`n"
    $xml += "    <loc>$url</loc>`n"
    
    if ($addHreflang) {
        $xml += "    <xhtml:link rel=`"alternate`" hreflang=`"en`" href=`"$enUrl`" />`n"
        $xml += "    <xhtml:link rel=`"alternate`" hreflang=`"pl`" href=`"$plUrl`" />`n"
        $xml += "    <xhtml:link rel=`"alternate`" hreflang=`"de`" href=`"$deUrl`" />`n"
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
$xmlContent += Get-UrlXml -path '/pl' -changefreq 'daily' -priority '1.0'
$xmlContent += Get-UrlXml -path '/de' -changefreq 'daily' -priority '1.0'

# Add hub pages
Write-Host "Adding hub pages..." -ForegroundColor Yellow
$xmlContent += Get-UrlXml -path '/converters' -changefreq 'weekly' -priority '0.9'
$xmlContent += Get-UrlXml -path '/viewers' -changefreq 'weekly' -priority '0.9'
$xmlContent += Get-UrlXml -path '/compress' -changefreq 'weekly' -priority '0.9'
$xmlContent += Get-UrlXml -path '/samples' -changefreq 'weekly' -priority '0.9'
$xmlContent += Get-UrlXml -path '/yt-thumbnail-downloader' -changefreq 'monthly' -priority '0.8'

# Process all other routes
Write-Host "Processing routes..." -ForegroundColor Yellow
$count = 0
$processedPaths = New-Object System.Collections.Generic.HashSet[string]

foreach ($route in $uniqueRoutes) {
    # Skip main pages and hubs (already added)
    if ($route -in @('/', '/pl', '/de', '/converters', '/viewers', '/compress', '/samples', '/yt-thumbnail-downloader', '/conventers')) {
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
    
    # Add the route
    $xmlContent += Get-UrlXml -path $route -changefreq $changefreq -priority $priority
    $count++
    
    # Also add language-specific versions if this is a base route
    if ($route -notmatch '^/(pl|de)/') {
        # Add Polish version
        $plRoute = "/pl$route"
        if (-not $processedPaths.Contains($plRoute) -and ($uniqueRoutes -contains $plRoute -or $route -match '^/(convert|viewers|samples|compress)')) {
            $xmlContent += Get-UrlXml -path $plRoute -changefreq $changefreq -priority $priority
            $null = $processedPaths.Add($plRoute)
            $count++
        }
        
        # Add German version
        $deRoute = "/de$route"
        if (-not $processedPaths.Contains($deRoute) -and ($uniqueRoutes -contains $deRoute -or $route -match '^/(convert|viewers|samples|compress)')) {
            $xmlContent += Get-UrlXml -path $deRoute -changefreq $changefreq -priority $priority
            $null = $processedPaths.Add($deRoute)
            $count++
        }
    }
    
    if ($count % 50 -eq 0) {
        Write-Host "  Processed $count routes..." -ForegroundColor Gray
    }
}

# Close urlset
$xmlContent += "</urlset>`n"

# Save the sitemap
$sitemapPath = Join-Path $PSScriptRoot '..\public\sitemap2.xml'
$xmlContent | Out-File -FilePath $sitemapPath -Encoding UTF8 -NoNewline

Write-Host "`nSitemap2.xml generated successfully!" -ForegroundColor Green
Write-Host "Location: $sitemapPath" -ForegroundColor Cyan

# Count URLs
$urlCount = ([regex]::Matches($xmlContent, '<url>')).Count
Write-Host "Total URLs: $urlCount" -ForegroundColor Yellow
