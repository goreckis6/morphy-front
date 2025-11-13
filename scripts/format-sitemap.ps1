$ErrorActionPreference = 'Stop'

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$sitemapPath = Join-Path $projectRoot '..\public\sitemap.xml'

if (-not (Test-Path $sitemapPath)) {
    throw "Could not find sitemap at $sitemapPath"
}

Write-Host "Loading sitemap..." -ForegroundColor Cyan
$content = Get-Content -Path $sitemapPath -Raw

# Check if stylesheet reference exists, preserve it
$hasStylesheet = $content -match 'xml-stylesheet'
if (-not $hasStylesheet) {
    Write-Host "Adding XSL stylesheet reference..." -ForegroundColor Yellow
    $content = $content -replace '(<\?xml[^>]*>)', '$1`n<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>'
    Set-Content -Path $sitemapPath -Value $content -NoNewline
}

[xml]$xml = Get-Content -Path $sitemapPath

Write-Host "Formatting sitemap with proper indentation..." -ForegroundColor Cyan

# Save with proper formatting
$settings = New-Object System.Xml.XmlWriterSettings
$settings.Indent = $true
$settings.IndentChars = "  "
$settings.NewLineChars = "`n"
$settings.OmitXmlDeclaration = $false
$settings.Encoding = [System.Text.Encoding]::UTF8

$writer = [System.Xml.XmlWriter]::Create($sitemapPath, $settings)
try {
    $xml.Save($writer)
    Write-Host "Sitemap formatted successfully!" -ForegroundColor Green
} finally {
    $writer.Close()
}

