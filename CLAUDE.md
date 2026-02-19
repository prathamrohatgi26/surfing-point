# CLAUDE.md — Project Context for Claude Code

## Project Overview
**Surfing Point** is a business services landing page for a company in Meerut, UP, India. It offers travel ticketing, insurance, digital signature, passport services, online works, and more.

## Tech Stack
- **Framework**: Next.js 16.1.1 (App Router)
- **React**: 19.1.0
- **Styling**: Tailwind CSS v4 via `@tailwindcss/postcss`
- **Fonts**: Geist Sans / Geist Mono (from `next/font`)
- **Bundler**: Turbopack (enabled in dev and build scripts)
- **No backend/database** — purely static frontend

## Commands
- `npm run dev` — Start dev server (Turbopack)
- `npm run build` — Production build (Turbopack)
- `npm start` — Start production server

## Project Structure
```
src/
├── app/
│   ├── layout.js        # Root layout (metadata, fonts, global structure)
│   ├── page.js          # Home page (JSON-LD structured data, assembles sections)
│   └── globals.css      # Tailwind v4 import, CSS variables, dark mode
└── components/
    ├── Navigation.js    # Sticky header, mobile menu ('use client')
    ├── Hero.js          # Hero section with address/contact
    ├── Services.js      # Services grid (6 items)
    ├── About.js         # Why choose us + stats
    ├── Contact.js       # Contact info cards
    └── Footer.js        # Footer with links
```

## Architecture & Patterns

### Routing
- Single-page site with anchor-link navigation (`#services`, `#about`, `#contact`)
- Next.js App Router in `src/app/`

### Components
- **Server components by default** — only use `'use client'` when state/interactivity is needed
- One component per file, `export default`
- Data defined as `const` arrays inside components, rendered with `.map()`
- Color mapping via helper functions (e.g., `getColorClasses()`)

### Imports
- Use `@/` path alias for `src/` imports (configured in jsconfig.json)
  - Example: `import Navigation from '@/components/Navigation'`

### Styling Conventions
- Tailwind utility classes only — no CSS modules, no styled-components
- **Brand colors**: Blue-600 / Indigo-600 primary; Green, Purple, Orange, Teal supporting
- Gradient text: `text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600`
- Glassmorphism: `bg-white/95 backdrop-blur-sm`
- Hover effects: `hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`
- Responsive breakpoints: `sm:`, `md:`, `lg:` — mobile-first
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

### SEO
- Full metadata in `layout.js` (title, description, keywords, OpenGraph, Twitter cards)
- JSON-LD structured data (LocalBusiness schema) in `page.js`
- Semantic HTML with proper heading hierarchy

## Configuration
- **next.config.mjs**: Default config (empty object)
- **jsconfig.json**: `@/*` → `./src/*`
- **postcss.config.mjs**: Only `@tailwindcss/postcss` plugin
- **globals.css**: Tailwind v4 `@import "tailwindcss"`, `@theme inline` for custom properties, dark mode via `prefers-color-scheme`

## Conventions
- Functional components only (no class components)
- PascalCase for component names and files
- camelCase for variables, props, state
- Keep dependencies minimal — avoid adding libraries unless truly needed
- All interactive elements need hover/transition states
- External links use `target="_blank" rel="noopener noreferrer"`
- Phone: `href="tel:+918979914623"` | Email: `href="mailto:surfingpointmeerut@gmail.com"`
