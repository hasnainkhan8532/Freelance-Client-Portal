import * as React from "react"

import { PortalSiteHeader } from "@/components/portal-site-header"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const portalDashboardNavLinks = [
  { label: "Dashboard", iconSrc: "/icons/dashboard.svg", href: "/dashboard" },
  { label: "Onboarding", iconSrc: "/icons/onboarding.svg", href: "/onboarding" },
  { label: "Projects", iconSrc: "/icons/projects.svg", href: "#" },
  { label: "Financials", iconSrc: "/icons/financials.svg", href: "/financials" },
  { label: "Support", iconSrc: "/icons/support.svg", href: "#" },
] as const

function PortalDashboardSidebar({ activeHref }: { activeHref: string }) {
  return (
    <div className="relative flex h-full min-h-0 flex-1 flex-col overflow-hidden rounded-none border-r border-[rgba(255,251,247,0.05)] bg-[#0F0F0F]">
      <div className="relative z-10 flex min-h-0 flex-1 flex-col overflow-y-auto px-8 py-8">
        <div className="mb-10">
          <p className="font-display text-[18px] font-bold leading-7 text-[#f59e0b]">Client Portal</p>
          <p className="font-sans text-[12px] font-normal text-[#d5c4ab]/60">v1.0-stable</p>
        </div>

        <nav className="flex flex-col gap-2" aria-label="Dashboard navigation">
          {portalDashboardNavLinks.map((link) => {
            const active = link.href === activeHref
            return (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "flex items-center gap-4 px-4 py-3 transition-colors",
                  active
                    ? "border-r-4 border-[#f59e0b] bg-gradient-to-r from-[rgba(245,158,11,0)] to-[rgba(245,158,11,0.05)] text-[#f59e0b]"
                    : "text-[rgba(255,251,247,0.4)] hover:text-[rgba(255,251,247,0.7)]"
                )}
              >
                <span className={cn("relative flex h-[22px] w-[18px] shrink-0 items-center justify-center", !active && "opacity-40")}>
                  <img
                    src={link.iconSrc}
                    alt=""
                    className="max-h-full max-w-full object-contain"
                    width={18}
                    height={22}
                    decoding="async"
                    style={{ filter: "brightness(0) saturate(100%) invert(71%) sepia(63%) saturate(1958%) hue-rotate(357deg) brightness(101%) contrast(92%)" }}
                  />
                </span>
                <span className="font-display text-base font-medium">{link.label}</span>
              </a>
            )
          })}
        </nav>

        <div className="mt-auto border-t border-[rgba(255,251,247,0.05)] pt-8">
          <div className="flex flex-col gap-6">
            <Button
              type="button"
              className="h-auto w-full rounded-none bg-[#2a2a2a] px-0 py-4 text-center font-sans text-[14px] font-normal uppercase tracking-[1.4px] text-[#e5e2e1] hover:bg-[#333]"
            >
              NEW PROJECT
            </Button>
            <a
              href="https://hasnainayaz.com/"
              target="_blank"
              rel="noreferrer"
              className="w-full text-center font-sans text-[11px] tracking-[-0.2px] text-[#e5e2e1]/70 transition-colors hover:text-[#e5e2e1]"
            >
              © 2026 DESIGNED BY HASNAINAYAZ.COM
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export function PortalDashboardShell({ activeHref, children, contentClassName }: { activeHref: string; children: React.ReactNode; contentClassName?: string }) {
  return (
    <div className={cn("relative flex min-h-svh w-full flex-col overflow-x-hidden bg-transparent text-brand-text", "font-sans antialiased")}>
      <PortalSiteHeader showAvatar avatarInitials="HA" sticky className="rounded-none bg-[#0F0F0F] backdrop-blur-none" />

      <div className="relative z-10 flex min-h-0 flex-1 flex-row items-stretch">
        <aside className="sticky top-0 hidden min-h-0 w-[288px] shrink-0 self-stretch lg:flex lg:flex-col">
          <PortalDashboardSidebar activeHref={activeHref} />
        </aside>

        <main
          className={cn(
            "min-w-0 flex-1",
            contentClassName
          )}
        >
          {children}
        </main>
      </div>
    </div>
  )
}
