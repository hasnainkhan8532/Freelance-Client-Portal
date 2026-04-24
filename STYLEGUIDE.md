# Client Portal — style guide

This document matches the **sign-in / register** UI and the shared **Tailwind v4 theme** in `src/styles/global.css`.

## Brand colors (Tailwind)

Defined under `@theme inline` as `--color-*`. Use utility classes such as `bg-brand-surface`, `text-brand-muted`.

| Token | Role |
|--------|------|
| `brand-amber` | Primary accent, CTAs, focus states, status dot |
| `brand-amber-hover` | Primary button hover |
| `brand-amber-foreground` | Text on amber buttons (`#6b4b00`) |
| `brand-surface` | Default page background (sign-in) |
| `brand-surface-alt` | Alternate page background (register) |
| `brand-card` | Elevated panels (`#2a2a2a`) |
| `brand-text` | Primary body / heading text (`#e5e2e1`) |
| `brand-text-bright` | High-contrast text (`#fafafa`) |
| `brand-muted` | Secondary labels, links, status copy (`#737373`) |
| `brand-muted-dim` | Footer, de-emphasized text (`#525252`) |
| `brand-line` | Underline inputs at rest (`#514532`) |
| `brand-placeholder` | Input placeholder (`#525252`) |
| `brand-success` | Operational / positive indicators (`#34a853`) |
| `brand-border-subtle` | Card borders `rgba(81, 69, 50, 0.1)` |

**Raw CSS:** `--color-brand-*` is available anywhere (e.g. `var(--color-brand-amber)` in shadows or shaders).

## Typography

| Role | Font | Tailwind |
|------|------|----------|
| Display (logo, titles, uppercase labels, primary buttons) | Space Grotesk Variable | `font-display` |
| Body (inputs, eyebrows, footer, status) | Inter Variable | `font-sans` |

Theme aliases: `--font-display`, `--font-heading` (same family), `--font-sans`.

## Auth utility classes (`global.css`)

| Class | Purpose |
|--------|---------|
| `auth-form-label` | Uppercase field labels; focus → `brand-amber` |
| `auth-form-input` | Input text, placeholder, and `md:text-sm` |
| `auth-eyebrow` | Small uppercase supporting lines |
| `auth-footer-text` | Footer links and legal line |
| `auth-status-text` | Ledger status line |
| `animate-auth-field` | Staggered field entrance |

## Shared components

| Module | Use |
|--------|-----|
| `src/components/auth-form-field.tsx` | `AuthFormField`, `authFormInputClassName`, `authFormInputPasswordClassName` |

Keep form fields on **one component** so underline behavior and label styling stay aligned.

## Routes using this system

- `/` — Sign in  
- `/register` — Create account  
- `/forgot-password` — Password recovery (single email field, same card shell)

## Layout widths (convention)

| Use | Width |
|-----|--------|
| Sign-in / forgot-password card | `max-w-[448px]` |
| Register two-column container | `max-w-[1280px]` |
| Marketing column | `max-w-[576px]` |
| Form column | `max-w-[480px]` |
| Primary CTA | `max-w-[318px]` |

## Motion

- `animate-auth-field` — respect `prefers-reduced-motion` (see `global.css`).
- Aurora backgrounds use **hex stops** in code; when tuning, keep stops consistent with `brand-amber` / dark neutrals.

## Changing the palette

1. Edit the `--color-brand-*` entries in `src/styles/global.css` (`@theme inline`).
2. Rebuild; Tailwind utilities (`bg-brand-*`, `text-brand-*`) update automatically.
3. For **WebGL** (Aurora) or **inline gradients**, update hex values to match the new tokens or reference `var(--color-brand-amber)` where supported.
