# Alhazaimeh Ventures — Website

React + Vite website for [alhazaimeh-ventures.com](https://alhazaimeh-ventures.com).

## Pages
- `/` — Home (landing)
- `/about` — About Us
- `/contact` — Contact

## Stack
- React 18 + React Router v6
- Vite 5
- Pure CSS (dark premium theme, no UI library)

## Getting Started

```bash
npm install
npm run dev       # local dev at localhost:5173
npm run build     # production build → dist/
npm run preview   # preview production build
```

## Deployment

### Netlify (recommended)
1. Push to GitHub
2. Connect repo in Netlify → Build command: `npm run build` · Publish dir: `dist`
3. Point your custom domain `alhazaimeh-ventures.com` in Netlify DNS settings

### GitHub Pages
Add `base: '/repo-name/'` in `vite.config.js` if deploying to a project page.
