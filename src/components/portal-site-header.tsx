import * as React from "react"
import { ChevronRight, Menu, X } from "lucide-react"

import { ClientPortalLogo } from "@/components/client-portal-logo"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const imgShield = "/icons/shield.svg"
const imgHelp = "/icons/help.svg"

const navMenuLinks = [
  { label: "Privacy policy", href: "/privacy-policy" },
  { label: "Terms of service", href: "/terms-of-service" },
  { label: "Common inquiries", href: "/common-inquiries" },
  { label: "System status", href: "/system-status" },
] as const

/** Shared top bar: logo + title (home), security/help icons, optional Sign In CTA. */
export function PortalSiteHeader({
  showSignIn = false,
  showAvatar = false,
  avatarInitials = "HA",
  sticky = false,
  className,
}: {
  showSignIn?: boolean
  showAvatar?: boolean
  avatarInitials?: string
  sticky?: boolean
  className?: string
}) {
  const [menuOpen, setMenuOpen] = React.useState(false)

  React.useEffect(() => {
    function handleEsc(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false)
      }
    }

    if (menuOpen) {
      document.addEventListener("keydown", handleEsc)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEsc)
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <>
      <header
        className={cn(
          "relative z-30 flex w-full shrink-0 items-center justify-between gap-3 px-3 py-4 backdrop-blur-[12px] sm:gap-4 sm:px-8 sm:py-6",
          sticky && "sticky top-0 z-50",
          className
        )}
      >
        <a href="/" className="flex min-w-0 items-center gap-2 self-start transition-opacity hover:opacity-90 sm:gap-2.5">
          <span className="shrink-0 scale-90 sm:scale-100">
            <ClientPortalLogo />
          </span>
          <p className="font-display truncate text-base font-bold tracking-[-0.04em] text-brand-text-bright sm:text-2xl sm:tracking-[-0.05em]">Client Portal</p>
        </a>

        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <a
            href="/system-status"
            className="relative h-4 w-3.5 opacity-90 transition-opacity hover:opacity-100 sm:h-5 sm:w-4"
            aria-label="System status"
          >
            <img src={imgShield} alt="" className="absolute inset-0 size-full max-w-none object-contain" width={16} height={20} />
          </a>
          <a
            href="/common-inquiries"
            className="relative size-4 opacity-90 transition-opacity hover:opacity-100 sm:size-5"
            aria-label="Common inquiries"
          >
            <img src={imgHelp} alt="" className="absolute inset-0 size-full max-w-none object-contain" width={20} height={20} />
          </a>

          {showSignIn ? (
            <Button
              asChild
              className={cn(
                "group font-display relative h-auto w-auto gap-1 overflow-hidden rounded-md border-0 bg-brand-amber px-2.5 py-1.5 text-xs font-bold text-brand-amber-foreground shadow-none sm:gap-1.5 sm:rounded-lg sm:px-4 sm:py-2 sm:text-sm",
                "transition-[transform,filter,background-color] duration-200 hover:!bg-brand-amber-hover focus-visible:ring-2 focus-visible:ring-brand-amber/50",
                "active:scale-[0.98]"
              )}
            >
              <a href="/">
                <span className="relative z-10">Sign In</span>
                <ChevronRight
                  className="relative z-10 size-4 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1"
                  strokeWidth={2.25}
                  aria-hidden
                />
                <span
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
                  aria-hidden
                />
              </a>
            </Button>
          ) : null}

          {showAvatar ? (
            <span
              className="hidden size-9 items-center justify-center rounded-xl border border-brand-line/40 bg-brand-card text-xs font-bold text-brand-text-bright sm:flex"
              aria-label="Profile avatar"
            >
              {avatarInitials}
            </span>
          ) : null}

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-portal-menu"
            aria-haspopup="menu"
            aria-label="Toggle navigation menu"
            className={cn(
              "relative z-[90] inline-flex size-8 items-center justify-center rounded-md border border-[rgba(255,251,247,0.09)] bg-[#171616] text-[#e5e2e1] transition-all duration-300 sm:hidden",
              "hover:border-[rgba(255,183,0,0.35)] hover:bg-[#1f1e1e] hover:text-[#fffbf7]",
              menuOpen && "border-[rgba(255,183,0,0.45)] text-[#ffb700]"
            )}
          >
            {menuOpen ? <X className="size-4" strokeWidth={2.2} /> : <Menu className="size-4" strokeWidth={2.2} />}
          </button>
        </div>
      </header>

      <div
        id="mobile-portal-menu"
        className={cn("fixed inset-0 z-[120] bg-black/60 sm:hidden", menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0")}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          aria-label="Close navigation menu"
          className="absolute inset-0"
          onClick={() => setMenuOpen(false)}
        />

        <div className="absolute inset-x-3 top-20 rounded-xl border border-[rgba(255,251,247,0.08)] bg-[#151414] p-2 shadow-[0_16px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl">
          <nav className="flex flex-col gap-1" role="menu">
            {navMenuLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                role="menuitem"
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-[#d5c4ab] transition-colors hover:bg-[rgba(255,183,0,0.1)] hover:text-[#fffbf7]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}
