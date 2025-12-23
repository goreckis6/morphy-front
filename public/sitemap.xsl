<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap - MorphyHub</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            color: #333;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background: #f5f5f5;
          }
          h1 {
            color: #2563eb;
            border-bottom: 3px solid #2563eb;
            padding-bottom: 10px;
            margin-bottom: 30px;
          }
          .info {
            background: #e0f2fe;
            border-left: 4px solid #0284c7;
            padding: 15px;
            margin-bottom: 30px;
            border-radius: 4px;
          }
          .info p {
            margin: 5px 0;
            color: #0c4a6e;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            background: white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            border-radius: 8px;
            overflow: hidden;
          }
          th {
            background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
            color: white;
            padding: 15px;
            text-align: left;
            font-weight: 600;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          th:first-child {
            border-top-left-radius: 8px;
          }
          th:last-child {
            border-top-right-radius: 8px;
          }
          td {
            padding: 12px 15px;
            border-bottom: 1px solid #e5e7eb;
          }
          tr:hover {
            background: #f9fafb;
          }
          tr:last-child td {
            border-bottom: none;
          }
          .url {
            color: #2563eb;
            text-decoration: none;
            font-weight: 500;
            word-break: break-all;
          }
          .url:hover {
            text-decoration: underline;
            color: #1d4ed8;
          }
          .url:visited {
            color: #7c3aed;
          }
          .badge {
            display: inline-block;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
          }
          .badge-daily {
            background: #dcfce7;
            color: #166534;
          }
          .badge-weekly {
            background: #dbeafe;
            color: #1e40af;
          }
          .badge-monthly {
            background: #fef3c7;
            color: #92400e;
          }
          .badge-yearly {
            background: #fce7f3;
            color: #9f1239;
          }
          .priority {
            font-weight: 600;
            color: #059669;
          }
          .hreflang {
            display: inline-block;
            margin: 2px 4px 2px 0;
            padding: 2px 6px;
            background: #f3f4f6;
            border-radius: 3px;
            font-size: 11px;
            color: #6b7280;
          }
          .hreflang a {
            color: #4b5563;
            text-decoration: none;
          }
          .hreflang a:hover {
            color: #2563eb;
            text-decoration: underline;
          }
          .footer {
            margin-top: 40px;
            padding: 20px;
            text-align: center;
            color: #6b7280;
            font-size: 14px;
            border-top: 1px solid #e5e7eb;
          }
          .stats {
            display: flex;
            gap: 20px;
            margin-bottom: 20px;
            flex-wrap: wrap;
          }
          .stat-box {
            background: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            flex: 1;
            min-width: 200px;
          }
          .stat-box h3 {
            margin: 0 0 10px 0;
            color: #6b7280;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .stat-box .number {
            font-size: 28px;
            font-weight: 700;
            color: #2563eb;
          }
        </style>
      </head>
      <body>
        <h1>XML Sitemap</h1>
        
        <div class="info">
          <p><strong>Generated:</strong> <xsl:value-of select="sitemap:urlset/sitemap:url[1]/sitemap:lastmod"/></p>
          <p><strong>Total URLs:</strong> <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></p>
          <p>This sitemap contains all pages available on MorphyHub. Search engines use this file to crawl and index the website.</p>
        </div>

        <div class="stats">
          <div class="stat-box">
            <h3>Total URLs</h3>
            <div class="number"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></div>
          </div>
          <div class="stat-box">
            <h3>Languages</h3>
            <div class="number">
              <xsl:value-of select="count(sitemap:urlset/sitemap:url[1]/xhtml:link)"/>
            </div>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #6b7280;">
              <xsl:for-each select="sitemap:urlset/sitemap:url[1]/xhtml:link">
                <xsl:sort select="@hreflang"/>
                <xsl:choose>
                  <xsl:when test="@hreflang = 'en'">English</xsl:when>
                  <xsl:when test="@hreflang = 'pl'">Polish</xsl:when>
                  <xsl:when test="@hreflang = 'de'">German</xsl:when>
                  <xsl:when test="@hreflang = 'id'">Indonesian</xsl:when>
                  <xsl:when test="@hreflang = 'sv'">Swedish</xsl:when>
                  <xsl:when test="@hreflang = 'es'">Spanish</xsl:when>
                  <xsl:when test="@hreflang = 'fr'">French</xsl:when>
                  <xsl:when test="@hreflang = 'it'">Italian</xsl:when>
                  <xsl:when test="@hreflang = 'nl'">Dutch</xsl:when>
                  <xsl:when test="@hreflang = 'pt'">Portuguese</xsl:when>
                  <xsl:when test="@hreflang = 'vi'">Vietnamese</xsl:when>
                  <xsl:when test="@hreflang = 'tr'">Turkish</xsl:when>
                  <xsl:when test="@hreflang = 'ru'">Russian</xsl:when>
                  <xsl:when test="@hreflang = 'ar'">Arabic</xsl:when>
                  <xsl:when test="@hreflang = 'th'">Thai</xsl:when>
                  <xsl:when test="@hreflang = 'ja'">Japanese</xsl:when>
                  <xsl:when test="@hreflang = 'zh'">Chinese</xsl:when>
                  <xsl:otherwise><xsl:value-of select="@hreflang"/></xsl:otherwise>
                </xsl:choose>
                <xsl:if test="position() != last()">, </xsl:if>
              </xsl:for-each>
            </p>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>URL</th>
              <th>Last Modified</th>
              <th>Change Frequency</th>
              <th>Priority</th>
              <th>Alternate Languages</th>
            </tr>
          </thead>
          <tbody>
            <xsl:for-each select="sitemap:urlset/sitemap:url">
              <xsl:sort select="sitemap:priority" order="descending"/>
              <xsl:sort select="sitemap:lastmod" order="descending"/>
              <tr>
                <td>
                  <a href="{sitemap:loc}" class="url" target="_blank">
                    <xsl:value-of select="sitemap:loc"/>
                  </a>
                </td>
                <td>
                  <xsl:value-of select="sitemap:lastmod"/>
                </td>
                <td>
                  <span class="badge badge-{sitemap:changefreq}">
                    <xsl:value-of select="sitemap:changefreq"/>
                  </span>
                </td>
                <td>
                  <span class="priority">
                    <xsl:value-of select="sitemap:priority"/>
                  </span>
                </td>
                <td>
                  <xsl:for-each select="xhtml:link">
                    <span class="hreflang">
                      <a href="{@href}">
                        <xsl:value-of select="@hreflang"/>
                      </a>
                    </span>
                  </xsl:for-each>
                </td>
              </tr>
            </xsl:for-each>
          </tbody>
        </table>

        <div class="footer">
          <p>Generated by MorphyHub | <a href="https://formipeek.com" style="color: #2563eb;">Visit Website</a></p>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>

