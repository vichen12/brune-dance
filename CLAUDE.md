# Brunela Dance Trainer — CLAUDE.md

## Project Overview
Professional landing page for **Brunela Dance Trainer** — ballet teacher, choreographer and dancer from Argentina based in Barcelona. Built with Next.js 15 + TypeScript + Tailwind CSS v4 + framer-motion.

## Tech Stack
- **Framework**: Next.js 15 App Router (TypeScript)
- **Styling**: Tailwind CSS v4 — CSS-based config via `@theme inline` in `globals.css`. NO `tailwind.config.ts`.
- **Animations**: framer-motion (`motion`, `AnimatePresence`, `whileInView`, `whileHover`, `useScroll`)
- **Icons**: lucide-react (SVG inline for brand icons)
- **Fonts**: Google Fonts — Playfair Display + Lato (via `next/font/google`)
- **Images**: Next.js `<Image>` component, all in `public/fotos-landing/`

## Architecture Rules
- **Max ~350 lines per component** — split sections into their own files
- **Named exports** (`export function ComponentName`) for all components
- **`"use client"`** directive on all interactive components (sections, providers)
- Server Components only for layout.tsx and page.tsx

## Key Files
```
src/
  app/
    layout.tsx          — Root layout: metadata/SEO, fonts, I18nProvider
    page.tsx            — Composes all sections
    globals.css         — Tailwind v4 @theme + custom CSS (aurora, scrollbar, etc.)
  lib/
    i18n.ts             — Translations ES/EN/FR + React Context + useI18n hook
    utils.ts            — cn() utility (clsx + tailwind-merge)
  components/
    providers/
      I18nProvider.tsx  — Reads localStorage, provides lang/setLang/t()
    backgrounds/
      AuroraBg.tsx      — 4 animated CSS aurora blobs
    common/
      WhatsAppButton.tsx — Fixed floating WA button (bottom-right)
      ProgressBar.tsx    — Scroll progress bar (top of page)
      BackToTop.tsx      — Appears after 450px scroll
    ui/
      button.tsx         — shadcn-style Button (CVA variants)
    sections/
      NavBar.tsx         — Glassmorphism fixed nav, mobile hamburger, lang selector
      Hero.tsx           — Full-screen hero, animated cycling words, about-hero photo
      KnowMe.tsx         — 2-col: text+pills | about-hero photo
      AboutMe.tsx        — 5-col grid: 8 paragraphs + 2 stacked photos
      Classes.tsx        — 6-card grid + expandable detail panel
      OnlineClasses.tsx  — Rose gradient CTA section
      Contact.tsx        — Dance-aesthetic form + Google Sheets + WhatsApp
      Footer.tsx         — Dark footer, SVG wave, social icons
```

## Color Palette (CSS vars in globals.css)
```css
--color-primary:       #C8384D   /* vibrant rose-red */
--color-primary-light: #E8607A
--color-primary-dark:  #8B1A2E
--color-accent:        #F0A0B8   /* soft pink */
--color-gold:          #C4956A
--color-rose-bg:       #FFF5F7   /* page background */
--color-rose-section:  #FDE8EE   /* alternate section bg */
--color-body-text:     #2D1520   /* deep wine */
--color-muted:         #7D5060
```

## Images (all in `public/fotos-landing/`)
| Usage | File |
|-------|------|
| Hero photo (right col) | `about-hero.jpg.jpg` (double extension!) |
| KnowMe photo | `about-hero.jpg.jpg` |
| About Me photos | `about-1.jpg`, `about-2.jpg` |
| PBT card | `pbt.jpg` |
| PBT detail | `Progressing Ballet Technique.jpg` |
| PCT card | `pct.jpg` |
| PCT detail | `Progressing Contemporary Technique.jpg` |
| Stretching card | `Stretching.jpg` |
| Stretching detail | `stretching1.jpg` |
| Pilates Reformer | `Pilates Reformer.jpg` |
| Pilates Mat | `Pilates Mat.png` |
| Ballet | `Ballet.jpg` |
| Logo (nav, footer) | `logo.jpeg` |

## i18n System
- Languages: `es` (default), `en`, `fr`
- Persisted in `localStorage` key `brunelaLang`
- Hook: `const { t, lang, setLang } = useI18n()`
- `t(key)` returns `string | string[]` — cast as `string` or `string[]` as needed
- `hero_words` is `string[]` (cycling animated words)
- Add new keys to ALL 3 language objects in `src/lib/i18n.ts`

## Contact Form
- **Google Sheets**: Set `GOOGLE_SCRIPT_URL` in `Contact.tsx` after deploying Apps Script
- **WhatsApp fallback**: If script URL not set, auto-redirects to `wa.me/34627323794`
- Phone: `+34 627 323 794`

## Dev Commands
```bash
npm run dev     # Start dev server (http://localhost:3000)
npm run build   # Production build
npm run lint    # ESLint
```

## Design Principles
1. Use framer-motion `whileInView` for scroll animations (`viewport={{ once: true }}`)
2. Never use emojis as icons — use SVG (lucide-react or inline SVG)
3. All clickable elements must have `cursor-pointer`
4. Touch targets minimum 44×44px
5. `prefers-reduced-motion` respected via CSS in globals.css
6. Aurora background uses pure CSS keyframes (no WebGL)
