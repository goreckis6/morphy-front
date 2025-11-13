$ErrorActionPreference = 'Stop'

$nsSitemap = 'http://www.sitemaps.org/schemas/sitemap/0.9'
$nsXhtml   = 'http://www.w3.org/1999/xhtml'

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$sitemapPath = Join-Path $projectRoot '..\public\sitemap.xml'

if (-not (Test-Path $sitemapPath)) {
    throw "Could not find sitemap at $sitemapPath"
}

[xml]$xml = Get-Content -Path $sitemapPath
$urlset = $xml.urlset

if ($urlset.GetAttribute('xmlns:xhtml') -ne $nsXhtml) {
    $null = $urlset.SetAttribute('xmlns:xhtml', $nsXhtml)
}

$nsMgr = New-Object System.Xml.XmlNamespaceManager($xml.NameTable)
$nsMgr.AddNamespace('sm', $nsSitemap)
$nsMgr.AddNamespace('xhtml', $nsXhtml)

$urls = $xml.SelectNodes('//sm:url', $nsMgr)
$existingLocs = New-Object System.Collections.Generic.HashSet[string]

foreach ($node in $urls) {
    $locNode = $node.SelectSingleNode('sm:loc', $nsMgr)
    if ($locNode) {
        $null = $existingLocs.Add($locNode.InnerText)
    }
}

$updatedCount = 0
$skippedSamples = 0

foreach ($urlNode in $urls) {
    $locNode = $urlNode.SelectSingleNode('sm:loc', $nsMgr)
    if (-not $locNode) { continue }

    $url = $locNode.InnerText
    if ([string]::IsNullOrWhiteSpace($url)) { continue }
    if ($url -match '/pl/' -or $url -match '/de/') { continue }

    if ($url -match '/samples/') {
        $skippedSamples++
        continue
    }

    $path = $url -replace '^https://morphyhub.com', ''
    if ($path -eq '' -or $path -eq '/') { continue }

    $plUrl = 'https://morphyhub.com/pl' + $path
    $deUrl = 'https://morphyhub.com/de' + $path

    $xLinks = $urlNode.SelectNodes('xhtml:link', $nsMgr)
    if ($xLinks.Count -eq 0) {
        foreach ($lang in 'en', 'pl', 'de') {
            $linkNode = $xml.CreateElement('xhtml', 'link', $nsXhtml)
            $null = $linkNode.SetAttribute('rel', 'alternate')
            $null = $linkNode.SetAttribute('hreflang', $lang)
            switch ($lang) {
                'en' { $href = $url }
                'pl' { $href = $plUrl }
                'de' { $href = $deUrl }
            }
            $null = $linkNode.SetAttribute('href', $href)
            $null = $urlNode.AppendChild($linkNode)
        }
        $updatedCount++
    }

    $anchorNode = $urlNode

    if (-not $existingLocs.Contains($plUrl)) {
        $plNode = $urlNode.CloneNode($true)
        $plLoc = $plNode.SelectSingleNode('sm:loc', $nsMgr)
        if ($plLoc) { $plLoc.InnerText = $plUrl }
        foreach ($link in $plNode.SelectNodes('xhtml:link', $nsMgr)) {
            switch ($link.GetAttribute('hreflang')) {
                'en' { $null = $link.SetAttribute('href', $url) }
                'pl' { $null = $link.SetAttribute('href', $plUrl) }
                'de' { $null = $link.SetAttribute('href', $deUrl) }
                default { $null = $plNode.RemoveChild($link) }
            }
        }
        $null = $urlset.InsertAfter($plNode, $anchorNode)
        $anchorNode = $plNode
        $null = $existingLocs.Add($plUrl)
    }

    if (-not $existingLocs.Contains($deUrl)) {
        $deNode = $urlNode.CloneNode($true)
        $deLoc = $deNode.SelectSingleNode('sm:loc', $nsMgr)
        if ($deLoc) { $deLoc.InnerText = $deUrl }
        foreach ($link in $deNode.SelectNodes('xhtml:link', $nsMgr)) {
            switch ($link.GetAttribute('hreflang')) {
                'en' { $null = $link.SetAttribute('href', $url) }
                'pl' { $null = $link.SetAttribute('href', $plUrl) }
                'de' { $null = $link.SetAttribute('href', $deUrl) }
                default { $null = $deNode.RemoveChild($link) }
            }
        }
        $null = $urlset.InsertAfter($deNode, $anchorNode)
        $anchorNode = $deNode
        $null = $existingLocs.Add($deUrl)
    }
}

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
} finally {
    $writer.Close()
}

Write-Host "Sitemap updated successfully." -ForegroundColor Green
Write-Host "Added hreflang links to $updatedCount URLs." -ForegroundColor Yellow
Write-Host "Skipped $skippedSamples sample URLs." -ForegroundColor Yellow
