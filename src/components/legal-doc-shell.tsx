import type * as React from "react"

import { PortalSiteHeader } from "@/components/portal-site-header"
import { cn } from "@/lib/utils"

const legalNavLinks = [
  { label: "Privacy Policy", iconSrc: "/icons/privacy-policy.svg", href: "/privacy-policy" },
  { label: "Terms of Service", iconSrc: "/icons/terms-of-service.svg", href: "/terms-of-service" },
  { label: "Common Inquiries", iconSrc: "/icons/help.svg", href: "/common-inquiries" },
  { label: "System Status", iconSrc: "/icons/shield.svg", href: "/system-status" },
] as const

export type LegalDocActiveHref = "/privacy-policy" | "/terms-of-service" | "/common-inquiries" | "/system-status"

type SidebarProps = {
  activeHref: LegalDocActiveHref
}

function SidebarContent({ activeHref }: SidebarProps) {
  return (
    <div className="relative flex h-full min-h-0 flex-1 flex-col overflow-hidden rounded-none border-r border-[rgba(255,251,247,0.05)] bg-[#0F0F0F]">
      <div className="relative z-10 flex min-h-0 flex-1 flex-col overflow-y-auto px-8 py-8">
        <div className="mb-10">
          <p className="font-display text-[18px] font-bold leading-7 text-[#f59e0b]">Client Portal</p>
          <p className="font-sans text-[12px] font-normal text-[#d5c4ab]/60">v1.0-stable</p>
        </div>

        <nav className="flex flex-col gap-2" aria-label="Legal navigation">
          {legalNavLinks.map((link) => {
            const active = link.href === activeHref
            return active ? (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-4 border-r-4 border-[#f59e0b] bg-gradient-to-r from-[rgba(245,158,11,0)] to-[rgba(245,158,11,0.05)] py-3 pl-4 pr-5 text-[#f59e0b]"
              >
                <span className="relative flex h-[22px] w-[18px] shrink-0 items-center justify-center">
                  <img
                    src={link.iconSrc}
                    alt=""
                    className="max-h-full max-w-full object-contain"
                    width={18}
                    height={22}
                    decoding="async"
                  />
                </span>
                <span className="font-display text-base font-medium">{link.label}</span>
              </a>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-4 rounded-none px-4 py-3 text-[rgba(255,251,247,0.4)] transition-colors hover:text-[rgba(255,251,247,0.7)]"
              >
                <span className="relative flex h-[22px] w-[18px] shrink-0 items-center justify-center opacity-40">
                  <img
                    src={link.iconSrc}
                    alt=""
                    className="max-h-full max-w-full object-contain"
                    width={18}
                    height={22}
                    decoding="async"
                  />
                </span>
                <span className="font-display text-base font-medium">{link.label}</span>
              </a>
            )
          })}
        </nav>

        <div className="mt-auto border-t border-[rgba(255,251,247,0.05)] pt-8">
          <div className="flex flex-col gap-6">
            <button
              type="button"
              className="w-full rounded-none bg-[#2a2a2a] py-4 text-center font-sans text-[14px] font-normal uppercase tracking-[1.4px] text-[#e5e2e1] transition-colors hover:bg-[#333]"
            >
              GET SUPPORT
            </button>
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

export function LegalDocShell({
  activeHref,
  children,
}: {
  activeHref: LegalDocActiveHref
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        "relative flex min-h-svh w-full flex-col overflow-x-hidden bg-transparent text-brand-text",
        "font-sans antialiased"
      )}
    >
      <PortalSiteHeader showSignIn sticky className="rounded-none bg-[#0F0F0F] backdrop-blur-none" />

      <div className="relative z-10 flex min-h-0 flex-1 flex-row items-stretch">
        <aside className="sticky top-0 hidden min-h-0 w-[288px] shrink-0 self-stretch lg:flex lg:flex-col">
          <SidebarContent activeHref={activeHref} />
        </aside>

        <main className="min-w-0 flex-1 px-4 py-8 sm:px-6 sm:py-12 md:px-10 lg:px-16 lg:py-16 xl:px-24">{children}</main>
      </div>
    </div>
  )
}
