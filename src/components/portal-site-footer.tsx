const footerLinks = [
  { label: "Privacy policy", href: "/privacy-policy" },
  { label: "Terms of service", href: "/terms-of-service" },
  { label: "System status", href: "/system-status" },
] as const

/** Shared auth-style footer — not used on the privacy policy page. */
export function PortalSiteFooter() {
  return (
    <footer className="relative z-10 mt-auto flex w-full flex-col items-center gap-6 px-4 pb-8 pt-4 sm:flex-row sm:items-start sm:justify-between sm:px-8 lg:px-12">
      <p className="auth-footer-text order-2 text-center text-[11px] text-brand-muted-dim sm:order-1 sm:text-left sm:text-xs">
        © 2026 Designed by hasnainayaz.com
      </p>
      <nav
        className="order-1 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:order-2 sm:justify-end"
        aria-label="Footer"
      >
        {footerLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="auth-footer-text text-[11px] text-brand-muted-dim transition-colors hover:text-brand-muted sm:text-xs"
          >
            {label}
          </a>
        ))}
      </nav>
    </footer>
  )
}
