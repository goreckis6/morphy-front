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
            font-size: 14px;
            color: #333;
            background: #f5f5f5;
            margin: 0;
            padding: 20px;
          }
          h1 {
            font-size: 24px;
            font-weight: 600;
            margin: 0 0 20px 0;
            color: #1a1a1a;
          }
          .info {
            background: #fff;
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 15px;
            margin-bottom: 20px;
          }
          .info p {
            margin: 5px 0;
            color: #666;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            background: #fff;
            border: 1px solid #ddd;
            border-radius: 4px;
            overflow: hidden;
          }
          th {
            background: #f8f9fa;
            text-align: left;
            padding: 12px;
            font-weight: 600;
            border-bottom: 2px solid #ddd;
            color: #1a1a1a;
          }
          td {
            padding: 10px 12px;
            border-bottom: 1px solid #eee;
          }
          tr:hover {
            background: #f8f9fa;
          }
          a {
            color: #0066cc;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          .url {
            font-family: 'Courier New', monospace;
            font-size: 13px;
            word-break: break-all;
          }
          .priority {
            text-align: center;
            font-weight: 500;
          }
          .changefreq {
            text-transform: capitalize;
          }
        </style>
      </head>
      <body>
        <h1>XML Sitemap</h1>
        <div class="info">
          <p><strong>Total URLs:</strong> <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></p>
          <p><strong>Generated:</strong> <xsl:value-of select="sitemap:urlset/sitemap:url[1]/sitemap:lastmod"/></p>
        </div>
        <table>
          <thead>
            <tr>
              <th>URL</th>
              <th>Last Modified</th>
              <th>Change Frequency</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            <xsl:for-each select="sitemap:urlset/sitemap:url">
              <tr>
                <td class="url">
                  <a>
                    <xsl:attribute name="href">
                      <xsl:value-of select="sitemap:loc"/>
                    </xsl:attribute>
                    <xsl:value-of select="sitemap:loc"/>
                  </a>
                </td>
                <td><xsl:value-of select="sitemap:lastmod"/></td>
                <td class="changefreq"><xsl:value-of select="sitemap:changefreq"/></td>
                <td class="priority"><xsl:value-of select="sitemap:priority"/></td>
              </tr>
            </xsl:for-each>
          </tbody>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>

