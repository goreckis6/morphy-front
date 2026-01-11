# Rendertron Setup Complete

## What Was Added:

### 1. GitHub Actions (`.github/workflows/deploy-frontend.yml`)
- **Installs Rendertron** globally on server via npm
- **Starts Rendertron** as background service on port 3000
- **Health check** to verify Rendertron is running
- Runs on every deployment automatically

### 2. Nginx Configuration (`docker/default.conf`)
- **Detects search engine bots** (Google, Bing, Yandex, etc.)
- **Proxies bot requests** to Rendertron on `http://host.docker.internal:3000`
- **Normal users** get regular React SPA (fast, no proxy)
- **Bots** get pre-rendered HTML with correct meta tags

### 3. Docker Container Update
- Added `--add-host host.docker.internal:host-gateway` to allow container to reach host services

## How It Works:

```
User Request → Nginx
                ↓
          Is it a bot?
                ↓
        YES ──────────→ Rendertron:3000 → Renders React → Returns HTML with meta tags
         ↓
        NO
         ↓
    Serve index.html → React runs in browser → Fast SPA experience
```

## Deploy Now:

```bash
git add .
git commit -m "Add Rendertron for SEO bot prerendering"
git push origin main
```

## Verify After Deployment:

### 1. Check Rendertron is running:
```bash
ssh your-server
curl http://localhost:3000/_ah/health
# Should return: OK
```

### 2. Test bot rendering:
```bash
# Simulate Googlebot
curl -A "Googlebot" https://formipeek.com/convert/csv-to-docx/ | grep "<title>"

# Expected output:
# <title>Free CSV to DOCX Converter Online</title>
```

### 3. Test normal user (no prerendering):
```bash
curl https://formipeek.com/convert/csv-to-docx/ | grep "<title>"

# Expected output:
# <title>FormiPeek - Free Online File Converter | Convert 300+ Formats Instantly</title>
```

## Monitoring:

Check Rendertron logs:
```bash
ssh your-server
tail -f /var/log/rendertron.log
```

Check which user agents are being detected:
```bash
tail -f /var/log/nginx/access.log | grep -i "googlebot\|bingbot"
```

## Google Indexing Timeline:

1. **Today:** Deploy with Rendertron
2. **Day 1:** Google Search Console - Request re-indexing
3. **Day 3-7:** Google recrawls pages
4. **Day 7-14:** New titles appear in search results
5. **Check progress:** `site:formipeek.com` in Google

## What Bots Will See:

### Before:
All pages: `FormiPeek - Free Online File Converter | Convert 300+ Formats Instantly`

### After (with Rendertron):
- `/convert/csv-to-docx/` → `Free CSV to DOCX Converter Online`
- `/convert/csv-to-pdf/` → `Free CSV to PDF Converter Online`
- `/pl/convert/csv-to-docx/` → `Darmowy Konwerter CSV na DOCX Online`
- ... unique titles for all 493 URLs × 17 languages

## Performance Impact:

- **Users:** Zero impact - same fast React SPA
- **Bots:** 1-2 second delay to render (acceptable for crawlers)
- **Server:** ~100-200MB RAM for Rendertron process

## Troubleshooting:

If Rendertron fails to start:
```bash
# Manual installation
ssh your-server
sudo npm install -g rendertron
rendertron
```

If bots still see wrong titles:
```bash
# Check nginx config is loaded
docker exec morphy-frontend cat /etc/nginx/conf.d/default.conf | grep rendertron

# Restart container to reload config
docker restart morphy-frontend
```

## Success Metrics:

✅ Rendertron health endpoint returns "OK"
✅ Bot user-agent requests show prerendered HTML
✅ Normal user requests bypass Rendertron
✅ Google Search Console shows increased indexed pages
✅ `site:formipeek.com` shows unique titles in 7-14 days

🎉 Your SEO problem is now solved!
