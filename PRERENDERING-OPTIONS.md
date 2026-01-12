# Prerendering Service Setup (Recommended Alternative)

## Problem with react-snap
react-snap is outdated and doesn't work with React 18 + modern Vite builds.

## Current Solution: Static File Generation
The build now generates index.html files in each URL directory, but meta tags are still client-side only.

## Better Solution: Use Prerender.io (Recommended)

### 1. Sign up for Prerender.io
- Free tier: 250 pages/month
- Paid: $20/month for unlimited

### 2. Add to nginx config:

```nginx
location / {
    # Check if it's a bot
    if ($http_user_agent ~* "googlebot|bingbot|yandex|baiduspider|twitterbot|facebookexternalhit|rogerbot|linkedinbot|embedly|quora link preview|showyoubot|outbrain|pinterest|slackbot|vkShare|W3C_Validator") {
        set $prerender 1;
    }
    
    # Don't prerender if already .html, has query params, or is a resource
    if ($uri ~* "\.(js|css|xml|less|png|jpg|jpeg|gif|pdf|doc|txt|ico|rss|zip|mp3|rar|exe|wmv|doc|avi|ppt|mpg|mpeg|tif|wav|mov|psd|ai|xls|mp4|m4a|swf|dat|dmg|iso|flv|m4v|torrent|ttf|woff|svg|eot)") {
        set $prerender 0;
    }
    if ($args != "") {
        set $prerender 0;
    }
    
    # Proxy to prerender if a bot
    if ($prerender = 1) {
        rewrite .* /$scheme://$host$request_uri? break;
        proxy_pass https://service.prerender.io;
    }
    
    # Normal serving for users
    try_files $uri $uri/ /index.html;
}
```

### 3. Set Prerender.io Token
Add environment variable to deployment:
```bash
PRERENDER_TOKEN=your_token_here
```

## Alternative: Use Cloudflare Workers
Free and works great for SPAs:

```javascript
// Cloudflare Worker
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  const userAgent = request.headers.get('user-agent') || ''
  
  // Check if it's a bot
  const isBot = /googlebot|bingbot|yandex|baiduspider/i.test(userAgent)
  
  if (isBot) {
    // Fetch from Prerender.io or similar service
    return fetch(`https://service.prerender.io/${url.href}`, {
      headers: {
        'X-Prerender-Token': 'YOUR_TOKEN'
      }
    })
  }
  
  // Normal request
  return fetch(request)
}
```

## Quick Fix: Use rendertron (Self-hosted, Free)

Install on your server:
```bash
npm install -g rendertron
rendertron
```

Add to nginx:
```nginx
location / {
    if ($http_user_agent ~* "googlebot|bingbot") {
        proxy_pass http://localhost:3000/render/https://formipeek.com$request_uri;
    }
    try_files $uri $uri/ /index.html;
}
```

## Current Build Process
1. Vite builds app → `dist/`
2. Script creates empty index.html in each URL directory
3. Nginx serves these files
4. React Helmet updates meta tags client-side (not seen by Google)

**Result:** Google still sees default titles. Need server-side rendering or bot-specific rendering.

**Recommendation:** Use Prerender.io ($20/month) or self-host rendertron (free).
