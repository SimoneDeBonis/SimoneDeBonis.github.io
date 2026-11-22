# Simone De Bonis — Personal Website (`simonedebonis.github.io`)

Modern, bilingual (`EN` / `IT`), cookieless, and security-hardened personal website built with **Astro 7**, **Tailwind CSS v4**, and **build-time KaTeX**.

## Key Features

- **Option A — Sticky Glass Top Navbar & Executive Hero:** High-impact personal landing page with a 3-column Bento summary grid, career highlights, featured projects, and latest technical articles.
- **Single-Source Synchronized Bilingual Support (`EN` / `IT`):**
  - `src/data/profile.ts`: Profile bio, current role (`Data Scientist @ Intesa Sanpaolo`), and work highlights in English and Italian.
  - `src/data/cv.ts`: Structured Experience, Education, and verified **MyOpenBadge** certifications, plus downloadable English and Italian PDF CVs.
- **Build-Time KaTeX Math Rendering:** Zero runtime MathJax overhead or layout shifts; renders LaTeX formulas cleanly at build time alongside a sticky right-hand **Table of Contents**.
- **Instant Client-Side Search (`⌘K` / `Ctrl+K`):** Search across articles, project case studies, and CV entries with zero external dependencies.
- **Security & Privacy Hardened:**
  - 100% self-hosted fonts (`@fontsource/inter`, `@fontsource/jetbrains-mono`) and bundled KaTeX CSS—no third-party runtime CDNs (`polyfill.io`, external Google Fonts, jQuery, or Bootstrap 3 removed).
  - Strict Content-Security-Policy (`CSP`) meta header.
  - Cookieless by design (no cookie consent banner needed).
  - Least-privilege GitHub Actions workflow (`.github/workflows/deploy.yml`) + Dependabot (`.github/dependabot.yml`).

---

## Local Development

```bash
# Install dependencies
npm install

# Start local dev server (http://localhost:4321)
npm run dev

# Build production static output into ./dist
npm run build

# Preview production build locally
npm run preview
```

---

## How to Maintain Content

1. **Update Bio or Current Role:** Edit `src/data/profile.ts`.
2. **Update CV Timeline or PDF:** Edit `src/data/cv.ts` and replace `/public/assets/pdf/CV_Simone_De_Bonis_eng.pdf` (or `_ita.pdf`).
3. **Add a New Blog Post:** Create a Markdown file in `src/content/blog/en/<slug>.md` and `src/content/blog/it/<slug>.md` with matching `slugId`.
4. **Add a New Project:** Create a Markdown file in `src/content/projects/en/<slug>.md` and `src/content/projects/it/<slug>.md` with matching `slugId`.

---

## Deploying to GitHub Pages (Free)

1. Push this repository to `SimoneDeBonis/SimoneDeBonis.github.io` on the `main` branch.
2. In your GitHub repository **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**.
3. Every push to `main` automatically runs `.github/workflows/deploy.yml` and publishes the static site to `https://simonedebonis.github.io/`.
