# n8n Workflow Viewer

A React + Vite app that renders n8n workflows using the `@n8n_io/n8n-demo-component` web component.

## Deploy to Vercel

### Option 1 — GitHub + Vercel Dashboard
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo
3. Vercel auto-detects Vite. Keep defaults:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Node.js Version:** 20.x
4. Click Deploy ✅

### Option 2 — Vercel CLI
```bash
npm i -g vercel
vercel
```

## Local Development
```bash
npm install
npm run dev
```

## Swap the Workflow
Replace `src/workflow.json` with any exported n8n workflow JSON.
