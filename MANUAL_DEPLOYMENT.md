# Manual Deployment (No Docker)

This guide shows a simple way to deploy the Qwik SSR app by uploading files via SFTP/FTP and installing Node dependencies directly on the server.

## Requirements
- Debian/Ubuntu server with SSH access
- Node.js 20 installed
- A directory on the server (e.g., `/srv/formipeek`)

## 1) Install Node.js 20 on the Server (Debian)

```bash
# Option A: NodeSource
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Option B: nvm (user-level)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
. ~/.nvm/nvm.sh
nvm install 20
```

Verify:
```bash
node -v
# Should print v20.x
```

## 2) Upload the project
Upload the repository (or a build artifact) to the server using SFTP/FTP into `/srv/formipeek`.

Recommended upload contents:
- `package.json` (and `package-lock.json` if available)
- `server/` (contains `entry.express.js`)
- `src/` (optional if building on server)
- `dist/` (optional if building locally)

## 3A) Build on the server
From `/srv/formipeek`:
```bash
cd /srv/formipeek
# Install ALL deps (including devDependencies) required for SSR
npm ci || npm install
npm run build
# Start the SSR server (foreground)
node server/entry.express.js
```

## 3B) Build locally and upload dist
Build locally on your machine:
```bash
npm ci || npm install
npm run build
```
Upload:
- `dist/` folder
- `server/` folder
- `package.json` (and `package-lock.json` if available)

Then on the server:
```bash
cd /srv/formipeek
npm ci || npm install
node server/entry.express.js
```

Note: Do NOT use `--only=production` — Qwik SSR requires devDependencies (e.g., `vite`, `@builder.io/qwik-city`) at runtime.

## 4) Keep the app running
Use PM2 (optional) to run as a service:
```bash
sudo npm i -g pm2
pm2 start server/entry.express.js --name formipeek
pm2 save
pm2 startup systemd -u $USER --hp $HOME
```

Alternatively, create a systemd unit:
```
[Unit]
Description=Formipeek Qwik SSR
After=network.target

[Service]
Type=simple
WorkingDirectory=/srv/formipeek
ExecStart=/usr/bin/node server/entry.express.js
Restart=always
Environment=HOST=0.0.0.0
Environment=PORT=3000

[Install]
WantedBy=multi-user.target
```
Save as `/etc/systemd/system/formipeek.service`, then:
```bash
sudo systemctl daemon-reload
sudo systemctl enable --now formipeek
sudo systemctl status formipeek
```

## 5) Optional: Nginx reverse proxy
Create `/etc/nginx/sites-available/formipeek.conf`:
```
server {
  listen 80;
  server_name formipeek.com;

  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```
Enable and reload:
```bash
sudo ln -s /etc/nginx/sites-available/formipeek.conf /etc/nginx/sites-enabled/formipeek.conf
sudo nginx -t
sudo systemctl reload nginx
```

## 6) Verify
- App logs: `journalctl -u formipeek -f` or `pm2 logs formipeek`
- Health: `curl http://127.0.0.1:3000/health`
- Debug: `curl http://127.0.0.1:3000/__debug`

If `/__debug` shows no `dist/server` files, rebuild step was not executed or files weren’t uploaded correctly.
