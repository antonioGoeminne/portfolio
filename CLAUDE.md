# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site built with Astro 6. Static site, no SSR adapter configured.

## Commands

```bash
npm run dev       # Dev server at localhost:4321
npm run build     # Production build to ./dist/
npm run preview   # Preview production build locally
```

No test or lint tooling configured yet.

## Architecture

- **Framework**: Astro 6 with strict TypeScript (`astro/tsconfigs/strict`)
- **Routing**: File-based via `src/pages/` — `.astro` and `.md` files become routes automatically
- **Static assets**: `public/` directory, served at root
- **Build output**: `dist/` (gitignored)
- **Node**: Requires >=22.12.0
