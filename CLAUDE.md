# Brunela Dance Trainer — CLAUDE.md

## Project Overview
Professional landing page for **Brunela Dance Trainer** — ballet teacher, choreographer and dancer born in **1994** in Mendoza, Argentina, based in Barcelona. Built with Next.js 15 + TypeScript + Tailwind CSS v4 + framer-motion.

## Tech Stack
- **Framework**: Next.js 15 App Router (TypeScript)
- **Styling**: Tailwind CSS v4 — CSS-based config via `@theme inline` in `globals.css`. NO `tailwind.config.ts`.
- **Animations**: framer-motion (`motion`, `AnimatePresence`, `whileInView`, `whileHover`)
- **Icons**: lucide-react + inline SVG
- **Fonts**: Google Fonts via `next/font/google`:
  - `Cormorant Garamond` → `--font-playfair-loaded` (headings, italic display)
  - `Nunito` → `--font-lato-loaded` (body text)
  - `Great Vibes` → `--font-script` (ultra-cursive for special titles e.g. Contact)
- **Images**: Next.js `<Image>` component, all in `public/fotos-landing/`
- **GitHub**: https://github.com/vichen12/brune-dance (branch: main)

## Architecture Rules
- **Max ~350 lines per component** — split sections into their own files
- **Named exports** (`export function ComponentName`) for all components
- **`"use client"`** directive on all interactive components
- Server Components only for `layout.tsx` and `page.tsx`

## Key Files
```
src/
  app/
    layout.tsx          — Root layout: metadata/SEO, fonts, I18nProvider
    page.tsx            — Composes all sections
    globals.css         — Tailwind v4 @theme + custom CSS (aurora, particles, scrollbar)
    icon.jpg            — Favicon (auto-detected by Next.js App Router)
  lib/
    i18n.ts             — Translations ES/EN/FR + React Context + useI18n hook
  components/
    providers/
      I18nProvider.tsx  — Reads localStorage, provides lang/setLang/t()
    backgrounds/
      AuroraBg.tsx      — 5 animated CSS aurora blobs + 10 floating particles
    common/
      WhatsAppButton.tsx — Fixed floating WA button (bottom-right, rose gradient)
      BackToTop.tsx      — Appears after 450px scroll
    ui/
      button.tsx         — shadcn-style Button (CVA variants)
    sections/
      NavBar.tsx         — Glassmorphism fixed nav, mobile hamburger, lang selector
      Hero.tsx           — Full-screen: photo first on mobile, BRUNELA Cormorant italic
      KnowMe.tsx         — 2-col desktop / stacked mobile, discipline cards grid
      AboutMe.tsx        — Editorial stats grid + 3 chapter cards
      Classes.tsx        — Bento desktop (3-col) + uniform 2×3 mobile grid
      OnlineClasses.tsx  — Rose gradient CTA section
      Contact.tsx        — Dance form → always submits via WhatsApp wa.me/34612491637
      Footer.tsx         — Wave top, social icons, Dallape Systems link
```

## Color Palette (CSS vars in globals.css)
```css
--color-primary:       #C8384D   /* vibrant rose-red */
--color-primary-light: #E8607A
--color-primary-dark:  #8B1A2E
--color-accent:        #F0A0B8   /* soft pink */
--color-gold:          #A0702A   /* dark gold — used for italic decorative text */
--color-rose-bg:       #FFF5F7
--color-body-text:     #2D1520   /* deep wine */
--color-muted:         #7D5060
--color-subtle:        #A07585
```

## Images (all in `public/fotos-landing/`)
| Usage | File |
|-------|------|
| Hero photo | `about-hero.jpg.jpg` (double extension!) |
| KnowMe photo | `about-1.jpg` |
| PBT card/detail | `pbt.jpg` / `Progressing Ballet Technique.jpg` |
| PCT card/detail | `pct.jpg` / `Progressing Contemporary Technique.jpg` |
| Stretching | `Stretching.jpg` / `stretching1.jpg` |
| Pilates Reformer | `Pilates Reformer.jpg` |
| Pilates Mat | `Pilates Mat.png` |
| Ballet | `Ballet.jpg` |
| Logo | `logo.jpeg` (also `public/icon.jpg` for favicon) |

## Brunela — Key Facts
- Born: **1994**, Mendoza, Argentina
- Started ballet: age 8 (= 2002)
- Teaching since: **2011** (15+ years)
- Fiesta de la Vendimia: **9 consecutive years** (from 2015)
- Certifications 2020: PBT, PCT, Pilates Reformer, Pilates Mat, Stretching, RAD CPD
- Now based in **Barcelona**, 30K+ Instagram followers

## i18n System
- Languages: `es` (default), `en`, `fr`, `it`
- Persisted in `localStorage` key `brunelaLang`
- Hook: `const { t, lang, setLang } = useI18n()`
- `t(key)` returns `string | string[]`
- `hero_words` is `string[]` (cycling animated words)
- Add new keys to ALL 4 language objects in `src/lib/i18n.ts`

## Contact Form
- **Always submits via WhatsApp**: `wa.me/34612491637`
- Prefills message with: name, class of interest, phone, email, message
- Phone: `+34 612 491 637`

## Dev Commands
```bash
npm run dev     # Start dev server (http://localhost:3000)
npm run build   # Production build
npm run lint    # ESLint
```

## Design Principles
1. `whileInView` scroll animations — `viewport={{ once: true }}`
2. No emojis as icons — SVG only (lucide-react or inline)
3. All clickables: `cursor-pointer`
4. Touch targets: minimum 44×44px
5. `prefers-reduced-motion` respected in globals.css
6. Aurora background: pure CSS keyframes (no WebGL)
7. Italic decorative phrases use `var(--color-gold)` (#A0702A)
8. Great Vibes font only for special headings at readable sizes (max ~4.2rem)
