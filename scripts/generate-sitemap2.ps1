$ErrorActionPreference = 'Stop'

$baseUrl = 'https://formipeek.com'
# Use yesterday's date for lastmod (more realistic for sitemap)
$lastmod = (Get-Date).AddDays(-1).ToString('yyyy-MM-dd')

# All supported language codes
$languages = @('pl', 'de', 'id', 'sv', 'es', 'fr', 'it', 'nl', 'pt', 'vi', 'tr', 'ru', 'ar', 'th', 'ja', 'zh')
$languagePattern = '(' + ($languages -join '|') + ')'

# Define specific converters to include
$allowedConverters = @(
    '/convert/cr2-to-ico',
    '/convert/cr2-to-webp',
    '/convert/heic-to-svg',
    '/convert/heic-to-pdf',
    '/convert/heic-to-png',
    '/convert/heic-to-eps',
    '/convert/heic-to-webp',
    '/convert/heif-to-png',
    '/convert/heif-to-webp',
    '/convert/heif-to-jpg'
)

Write-Host "Generating sitemap with only requested pages..." -ForegroundColor Cyan

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
    
    # CRITICAL: Always add trailing slash for consistency (Google requirement)
    if (-not $path.EndsWith('/')) {
        $path = "$path/"
    }
    
    $url = "$baseUrl$path"
    
    # Determine base path (without language prefix) for hreflang alternates
    $langPattern = '(' + ($script:languages -join '|') + ')'
    $basePath = $path
    
    # Check if path starts with a language code (e.g., /ja/viewers/ or /ja/)
    # Remove the language prefix if present
    if ($path -match "^/$langPattern/") {
        # Use regex replacement to remove language prefix: /lang/ -> /, /lang/path/ -> /path/
        $basePath = $path -replace "^/$langPattern/", '/'
        # Ensure basePath always ends with /
        if (-not $basePath.EndsWith('/')) {
            $basePath = "$basePath/"
        }
    }
    
    $xml = "  <url>`n"
    $xml += "    <loc>$url</loc>`n"
    
    if ($addHreflang) {
        # Always add x-default pointing to English (root) version
        $defaultUrl = "$baseUrl/"
        $xml += "    <xhtml:link rel=`"alternate`" hreflang=`"x-default`" href=`"$defaultUrl`" />`n"
        
        # Always add English version (root)
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
    
    $xml += "    <lastmod>$script:lastmod</lastmod>`n"
    $xml += "    <changefreq>$changefreq</changefreq>`n"
    $xml += "    <priority>$priority</priority>`n"
    $xml += "  </url>`n"
    
    return $xml
}

# Add main pages first
Write-Host "Adding main pages..." -ForegroundColor Yellow
# Homepage (English) gets priority 1.0
$xmlContent += Get-UrlXml -path '/' -changefreq 'daily' -priority '1.0'
# Language versions get priority 0.8
foreach ($lang in $languages) {
    $xmlContent += Get-UrlXml -path "/$lang" -changefreq 'daily' -priority '0.8'
}

# Add hub pages (only converters, viewers, compress, samples - no yt-thumbnail-downloader)
Write-Host "Adding hub pages..." -ForegroundColor Yellow
$hubPages = @('/converters', '/viewers', '/compress', '/samples')
foreach ($hub in $hubPages) {
    # English hub pages get priority 0.9
    $xmlContent += Get-UrlXml -path $hub -changefreq 'weekly' -priority '0.9'
    # Language versions get priority 0.8
    foreach ($lang in $languages) {
        $xmlContent += Get-UrlXml -path "/$lang$hub" -changefreq 'weekly' -priority '0.8'
    }
}

# Add specific converters with all language versions
Write-Host "Adding specific converters..." -ForegroundColor Yellow
$count = 0
foreach ($converter in $allowedConverters) {
    # Add base English version
    $xmlContent += Get-UrlXml -path $converter -changefreq 'weekly' -priority '0.8'
    $count++
    
    # Add all language versions
    foreach ($lang in $languages) {
        $langConverter = "/$lang$converter"
        $xmlContent += Get-UrlXml -path $langConverter -changefreq 'weekly' -priority '0.8'
        $count++
    }
    
    Write-Host "  Added $converter and all language versions" -ForegroundColor Gray
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
