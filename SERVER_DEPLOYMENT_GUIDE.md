# Server Deployment Guide

## What Was Fixed

Your styles were breaking on the server because:

1. **Relative paths** (`images/logo.png`) don't work consistently across different server configurations
2. **JavaScript had hardcoded relative paths** for team logos
3. **No proper nginx configuration** for MIME types and caching
4. **Missing base tag** for path resolution

## All Fixed Now ✅

### Changes Made:
- All paths are now absolute (starting with `/`)
- Added `<base href="/" />` tag in HTML
- Created custom `nginx.conf` with proper MIME types
- Fixed JavaScript team logo paths
- Optimized Docker build with `.dockerignore`

## Deploy to Your Server

### Option 1: Using Docker (Recommended)

1. **Copy files to server:**
   ```bash
   scp -r * user@your-server:/path/to/deployment/
   ```

2. **On server, build and run:**
   ```bash
   cd /path/to/deployment/
   docker-compose down
   docker-compose up -d --build
   ```

3. **Configure your domain:**
   Point your domain to the server and configure reverse proxy (if needed)

### Option 2: Direct Nginx Deployment

1. **Copy files to nginx directory:**
   ```bash
   sudo cp -r * /var/www/html/cogniwide/
   ```

2. **Use the provided nginx.conf:**
   ```bash
   sudo cp nginx.conf /etc/nginx/sites-available/cogniwide
   sudo ln -s /etc/nginx/sites-available/cogniwide /etc/nginx/sites-enabled/
   ```

3. **Update nginx.conf for your domain:**
   ```nginx
   server_name your-domain.com www.your-domain.com;
   root /var/www/html/cogniwide;
   ```

4. **Test and reload:**
   ```bash
   sudo nginx -t
   sudo systemctl reload nginx
   ```

## Reverse Proxy Configuration (if using)

If you're using a reverse proxy (like another nginx or Apache in front), ensure:

```nginx
location / {
    proxy_pass http://localhost:8110;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

## SSL/HTTPS Setup (Recommended)

Using Certbot for free SSL:

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

## Troubleshooting

### If styles still don't load:

1. **Check browser console** (F12) for 404 errors
2. **Verify file permissions:**
   ```bash
   sudo chmod -R 755 /var/www/html/cogniwide/
   ```

3. **Check nginx error logs:**
   ```bash
   sudo tail -f /var/log/nginx/error.log
   ```

4. **Clear browser cache** (Ctrl+Shift+R)

### If images don't load:

1. **Verify images directory exists:**
   ```bash
   ls -la /var/www/html/cogniwide/images/
   ```

2. **Check MIME types in nginx:**
   ```bash
   sudo nginx -T | grep "image/png"
   ```

## Testing After Deployment

Visit your domain and check:
- [ ] Homepage loads with all styles
- [ ] All images display correctly
- [ ] Navigation works smoothly
- [ ] Team section shows logos
- [ ] Video plays (if applicable)
- [ ] Mobile responsive design works
- [ ] Browser console shows no errors

## Port Configuration

- **Docker default:** Port 8110 → 80
- **Change port:** Edit `docker-compose.yml` ports section
  ```yaml
  ports:
    - "YOUR_PORT:80"
  ```

## Need Help?

Common issues and solutions:

1. **404 on CSS/JS:** Paths are still relative - check browser console
2. **Styles partially work:** MIME type issue - check nginx config
3. **Images broken:** File permissions or path issue
4. **Works locally, not on server:** Check base URL and reverse proxy config

## Quick Test Command

Test if your site is accessible:
```bash
curl -I http://your-domain.com
curl http://your-domain.com/style.css | head -20
curl -I http://your-domain.com/images/favicon.png
```

All should return `200 OK` status.
