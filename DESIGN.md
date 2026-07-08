# Design

## Theme

Dark industrial. Body background `#0A0F14` (ink-900), foreground `#F5F5F5`.

## Color Palette

- `ink` — DEFAULT/900 `#0A0F14`, 800 `#0D1117`, 700 `#12181F` (backgrounds, layered depth)
- `navy` — `#0F1B2E` (secondary dark)
- `graphite` — `#1A1B1D` (secondary dark)
- `copper` — DEFAULT `#D97A3D`, light `#E08A3E` (sole accent color: CTAs, hover glow, selection, focus ring)
- `cream` — `#F5F3EF`, `paper` — `#F5F5F5` (light text/surfaces, used sparingly)
- `muted` — `#9CA3AF` (secondary text)

Copper is used with restraint — accents, glows, focus states — never as a large fill.

## Typography

- `font-display`: uppercase, extrabold, tight tracking — section titles (`.section-title`: `text-3xl sm:text-4xl lg:text-5xl`)
- `font-sans`: body copy
- `.eyebrow`: `text-xs font-semibold uppercase tracking-[0.2em]` (used sparingly, not on every section)

## Components / Utilities (globals.css)

- `.card-hover`: lift (`translateY(-4px)`) + copper glow shadow + copper border on hover, 250ms ease-out
- `.btn-primary`: scale(1.02) + copper glow shadow on hover, 250ms ease-out
- `.grain-overlay`: subtle SVG fractal-noise texture overlay (opacity 0.03, overlay blend) on photographic sections
- `.animate-ken-burns`: slow 20s alternating zoom (1 → 1.08) on hero/background imagery; disabled under `prefers-reduced-motion`
- Focus ring and text selection both use copper (`#D97A3D`)
- `section[id]` has `scroll-margin-top: 5rem` for anchor-nav offset

## Layout

Single-page marketing site (`src/app/page.tsx`), sections stacked: Navbar → Hero → QuienesSomos → CadenaDeValor → AreasDeDesarrollo → PorQueElegir → ProyectosYOperaciones → NuestroEquipo → SeguridadYResponsabilidad → ContactForm → Footer.

## Motion Principles

- Every animation respects `prefers-reduced-motion: reduce` (established pattern via `.animate-ken-burns`).
- Motion is subtle and slow (ken-burns runs 20s), never flashy — matches the "serious industrial" brand personality.
- Scroll-reveal handled via a custom `Reveal` component (`src/components/ui/Reveal.tsx`), not a library (no Framer Motion in deps).

## Stack Notes

Next.js 14 App Router, Tailwind 3.4, no animation library — CSS keyframes/transitions only.
