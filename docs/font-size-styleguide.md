# Font Size Styleguide

## Scope

This guide audits current text size usage across all primary page components:

- `src/components/sign-in-page.tsx`
- `src/components/create-account-page.tsx`
- `src/components/forgot-password-page.tsx`
- `src/components/privacy-policy-page.tsx`
- `src/components/terms-of-service-page.tsx`
- `src/components/common-inquiries-page.tsx`
- `src/components/system-status-page.tsx`

Also includes shared layout components used by those pages:

- `src/components/portal-site-header.tsx`
- `src/components/portal-site-footer.tsx`
- `src/components/legal-doc-shell.tsx`
- `src/components/ui/accordion.tsx`

---

## Tailwind text size reference

### Named scale

- `text-xs` = 12px
- `text-sm` = 14px
- `text-base` = 16px
- `text-lg` = 18px
- `text-xl` = 20px
- `text-2xl` = 24px
- `text-3xl` = 30px
- `text-4xl` = 36px
- `text-5xl` = 48px
- `text-6xl` = 60px
- `text-7xl` = 72px

### Arbitrary sizes currently in use

- `text-[10px]`
- `text-[11px]`
- `text-[12px]`
- `text-[14px]`
- `text-[15px]`
- `text-[18px]`
- `text-[48px]`

---

## Current usage by page/component

## 1) `sign-in-page.tsx`

- `h1`: `text-3xl sm:text-4xl`
- Primary CTA: `text-base`
- Small links: `text-[10px]`

## 2) `create-account-page.tsx`

- `h1`: `text-5xl md:text-7xl`
- Feature titles (`h2`): `text-lg`
- Feature body copy: `text-sm`
- Primary CTA: `text-base`
- Footer helper link: `text-[10px]`
- Eyebrow copy: `sm:text-sm`

## 3) `forgot-password-page.tsx`

- No unique text-size class found in current grep output (likely reuses shared styles or has no direct text size utility classes).

## 4) `privacy-policy-page.tsx`

- Main title (`h1`): `text-5xl md:text-7xl`
- Section numbers: `text-[18px]`
- Section titles (`h2`): `text-2xl`
- Lead/body paragraph blocks: `text-[18px]`
- Card headings (`h3`): `text-base`
- Card/body support copy: `text-sm` / `text-base`
- Metadata labels: `text-[12px]`
- Version value: `text-[14px]`

## 5) `terms-of-service-page.tsx`

- Main title (`h1`): `text-5xl md:text-7xl`
- Section number display: `text-[48px]`
- Section titles (`h2`): `text-2xl`
- Intro copy: `text-lg md:text-xl`
- Body copy: `text-base`
- Supporting metadata: `text-sm`
- Final CTA button: `text-xs`

## 6) `common-inquiries-page.tsx`

- Main title (`h1`): `text-5xl md:text-7xl`
- Eyebrow label: `text-xs`
- Intro copy: `text-sm sm:text-base`
- Section headers (`h2`): `text-lg sm:text-2xl`
- Accordion answer copy: `text-[15px] sm:text-base`

## 7) `system-status-page.tsx`

- Main title (`h1`): `text-5xl md:text-7xl`
- Eyebrow and status micro labels: `text-[10px]`
- Main intro: `text-base md:text-lg`
- Operational pill text: `text-base`
- Card titles (`h2`): `text-xl`
- Secondary support stats: `text-sm`
- Chart legend labels: `text-xs`
- Section titles (`h3`): `text-lg`, `text-2xl`, `text-3xl`
- Incident metadata/tags: `text-[10px]`, `text-xs`, `text-sm`

---

## Shared components

## `portal-site-header.tsx`

- Brand title: `text-base sm:text-2xl`
- Sign in button: `text-xs sm:text-sm`
- Mobile nav links: `text-sm`

## `portal-site-footer.tsx`

- Copyright + footer links:
  - `text-[11px]`
  - `sm:text-xs`

## `legal-doc-shell.tsx`

- Sidebar product title: `text-[18px]`
- Sidebar version label: `text-[12px]`
- Sidebar nav links: `text-base`
- Sidebar support button: `text-[14px]`
- Sidebar copyright: `text-[11px]`

## `ui/accordion.tsx`

- Trigger text: `text-base sm:text-lg`
- Content wrapper default: `text-sm`

---

## Inventory summary

### Heading scale in active use

- `h1`: mostly `text-5xl md:text-7xl`
- Secondary major headings: `text-3xl`, `text-2xl`, `text-xl`, `text-lg`

### Body/support copy in active use

- Dominant body sizes: `text-base`, `text-sm`
- Large editorial body (legal page): `text-[18px]`
- Tiny/meta sizes: `text-xs`, `text-[11px]`, `text-[10px]`

### Inconsistency hotspots

- Mixed tiny sizes (`10px`, `11px`, `xs=12px`) for similar metadata roles.
- Mixed near-body sizes (`15px`, `16px`, `18px`) across informational text.
- Sidebar/support controls use arbitrary values (`11px`, `14px`, `18px`) instead of normalized token scale.

---

## Recommended normalized type scale (optional adoption)

If you want this fully standardized, use this mapping:

- **Display / Page title**: `text-5xl md:text-7xl`
- **Section title**: `text-2xl`
- **Card title**: `text-xl`
- **Subsection title**: `text-lg`
- **Body default**: `text-base`
- **Body compact**: `text-sm`
- **Meta / helper / legal fine print**: `text-xs`
- **Avoid**: `text-[10px]`, `text-[11px]`, `text-[15px]` unless truly necessary

This will reduce visual drift and make future design updates easier.