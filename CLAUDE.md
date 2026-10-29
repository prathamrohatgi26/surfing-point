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
│   ├── website-development/
│   │   ├── page.js      # Dedicated website-design service page (own metadata, Service/FAQ/Breadcrumb JSON-LD, visible FAQ)
│   │   └── opengraph-image.js # Share image for that page
│   ├── opengraph-image.js # Generated OG/social share image (next/og)
│   ├── icon.svg         # Favicon (wave + sun on brand gradient) — source for favicon.ico & apple-icon.png
│   ├── favicon.ico      # 16/32/48px, generated from icon.svg
│   ├── apple-icon.png   # 180px iOS home-screen icon, generated from icon.svg
│   ├── robots.js        # robots.txt
│   ├── sitemap.js       # sitemap.xml
│   └── globals.css      # Tailwind v4 import, CSS variables, dark mode
├── lib/
│   └── site.js          # Business details (phone, email, WhatsApp, address, hours, URL) + whatsappLink()
└── components/
    ├── Navigation.js    # Sticky header, mobile menu ('use client')
    ├── Hero.js          # Hero section with address/contact
    ├── Services.js      # Services grid (7 items)
    ├── WebDevelopment.js # Websites & landing pages for businesses section
    ├── About.js         # Why choose us + stats
    ├── WhatsApp.js      # WhatsApp click-to-chat block with quick messages (rendered inside Contact)
    ├── Contact.js       # Contact info cards
    └── Footer.js        # Footer with links
```

## Architecture & Patterns

### Routing
- Home page with anchor sections (`#services`, `#websites`, `#about`, `#whatsapp`, `#contact`) plus a dedicated `/website-development` page
- Shared nav/footer link to sections as `/#section` (not `#section`) so they work from every page; use `next/link` for internal page links
- New pages: add to `sitemap.js`, give them their own `metadata` (title, description, `alternates.canonical`) and `opengraph-image.js`
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
- Gradient text: `text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600`
- Glassmorphism: `bg-white/95 backdrop-blur-sm`
- Hover effects: `hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`
- Responsive breakpoints: `sm:`, `md:`, `lg:` — mobile-first
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

### SEO
- Full metadata in `layout.js` (title, description, keywords, OpenGraph, Twitter cards)
- JSON-LD structured data (LocalBusiness schema) in `page.js`
- Semantic HTML with proper heading hierarchy

## Configuration
- **next.config.mjs**: Only `turbopack.root` pinned to the project dir (a parent dir has a stray lockfile)
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
- Never hard-code phone/email/address/WhatsApp/URL in components — import from `@/lib/site` (`site.phone.href`, `site.email.href`, `whatsappLink(message)`, etc.)
- Use v4 gradient names (`bg-linear-to-*`), not `bg-gradient-to-*`
