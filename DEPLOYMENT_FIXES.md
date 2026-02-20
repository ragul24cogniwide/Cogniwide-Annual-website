# Deployment Fixes for Server/Domain

## Issues Fixed

### 1. **Relative Path Issues**
All relative paths have been converted to absolute paths from root:

- ✅ `href="style.css"` → `href="/style.css"`
- ✅ `src="script.js"` → `src="/script.js"`
- ✅ `src="images/..."` → `src="/images/..."`
- ✅ `poster="images/..."` → `poster="/images/..."`
- ✅ JavaScript team logos: `logo: 'images/...'` → `logo: '/images/...'`

### 2. **Base Tag Added**
Added `<base href="/" />` in HTML head for proper path resolution across all environments.

### 3. **Custom Nginx Configuration**
Created `nginx.conf` with:
- Proper MIME type definitions
- Gzip compression enabled
- Cache headers for static assets
- Security headers
- Proper routing for SPA-like behavior

### 4. **Docker Optimization**
- Created `.dockerignore` to exclude unnecessary files
- Updated Dockerfile to use custom nginx configuration

## Files Modified

1. **index.html** - All resource paths converted to absolute
2. **script.js** - Team logo paths converted to absolute
3. **Dockerfile** - Added nginx.conf copy step
4. **nginx.conf** - New file with proper server configuration
5. **.dockerignore** - New file to optimize Docker builds

## Deployment Instructions

### Local Testing
```bash
docker-compose up -d --build
# Access at http://localhost:8110
```

### Server Deployment
1. Push all changes to your repository
2. On server, pull latest changes
3. Build and run:
   ```bash
   docker-compose down
   docker-compose up -d --build
   ```

### Domain Configuration
Ensure your reverse proxy (if any) is configured to:
- Pass through all headers correctly
- Not modify paths
- Forward requests to port 8110

## Why These Fixes Work

1. **Absolute Paths**: Ensure resources load correctly regardless of domain or subdirectory
2. **Base Tag**: Provides a fallback base URL for all relative URLs
3. **Nginx Config**: Ensures proper MIME types and prevents browser caching issues
4. **Docker Optimization**: Faster builds and smaller images

## Testing Checklist

- [ ] All images load correctly
- [ ] CSS styles apply properly
- [ ] JavaScript functionality works
- [ ] Team logos display in player panel
- [ ] Video plays correctly
- [ ] All navigation links work
- [ ] Mobile responsive design works
