$ErrorActionPreference = 'Stop'

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$sitemapPath = Join-Path $projectRoot '..\public\sitemap.xml'

if (-not (Test-Path $sitemapPath)) {
    throw "Could not find sitemap at $sitemapPath"
}

Write-Host "Loading sitemap..." -ForegroundColor Cyan
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

