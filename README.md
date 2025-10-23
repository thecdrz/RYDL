# RYDL Website - Setup Guide

## Files in this folder

- **`home.html`** - Beautiful landing page with logo, links, and branding
- **`index.html`** - Privacy Policy & Terms of Service (legal documents)

## Setting Up RYDL.app Domain

### Option 1: Point RYDL.app to GitHub Pages

1. **In your domain registrar (where you bought RYDL.app):**
   - Add a CNAME record: `www.rydl.app` → `thecdz.github.io`
   - Add A records for `rydl.app` (apex domain):
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

2. **In GitHub Settings → Pages:**
   - Add custom domain: `rydl.app`
   - Enable "Enforce HTTPS"

3. **Update the files:**
   - Rename `home.html` to `index.html` (make it the default page)
   - Rename current `index.html` to `legal.html`
   - Update all links accordingly

### Option 2: Host Separately on RYDL.app

If you want to host the landing page separately:

1. **Upload `home.html` to your RYDL.app hosting** (rename to `index.html`)
2. **Keep legal docs on GitHub Pages:**
   - https://thecdz.github.io/RYDL/ (privacy & terms)
3. **Update landing page links** to point to GitHub Pages

## Current Setup

Right now:
- ✅ **GitHub Pages:** https://thecdz.github.io/RYDL/
  - Privacy Policy: `#privacy`
  - Terms: `#terms`
- ✅ **App links to:** `https://rydl.app/` (your custom domain)

## What to Do Next

1. **Configure RYDL.app domain** to point to GitHub Pages OR separate hosting
2. **Upload `home.html`** as your landing page
3. **Test the URLs:**
   - https://rydl.app/ (landing page)
   - https://rydl.app/#privacy (privacy policy)
   - https://rydl.app/#terms (terms)

## Files Created

- `home.html` - Clean landing page with:
  - ✅ Light RYDL logo
  - ✅ App Store download link
  - ✅ Discord community link
  - ✅ Privacy & Terms links
  - ✅ Support email: support@rydl.app
  - ✅ Beautiful gradient design
  - ✅ Mobile responsive

## Need Help?

The landing page is ready to go! Just need to:
1. Point your domain to GitHub Pages
2. Wait for DNS propagation (can take up to 48 hours)
3. Your site will be live!
