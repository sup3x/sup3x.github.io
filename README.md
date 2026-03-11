# sup3x.github.io

Personal developer portfolio built with Next.js, TypeScript, and Tailwind CSS.

**Live:** [https://sup3x.github.io](https://sup3x.github.io)

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deploy:** GitHub Pages (static export)

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build static site
npm run build

# Preview static build
npx serve out
```

## Deployment

The site deploys automatically to GitHub Pages when you push to `main`.

**Manual deploy:**
1. Run `npm run build`
2. Push the `out/` directory contents to the repository

**GitHub Pages setup:**
1. Go to repository Settings → Pages
2. Set Source to "GitHub Actions"
3. Push to `main` — the workflow handles the rest
