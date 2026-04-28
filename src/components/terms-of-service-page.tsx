import type { ReactNode } from "react"
import { Code2, Shield, Zap } from "lucide-react"

import { LegalDocShell } from "@/components/legal-doc-shell"

function SectionGrid({
  num,
  title,
  children,
}: {
  num: string
  title: string
  children: ReactNode
}) {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
      <div className="flex flex-col gap-2 lg:col-span-4">
        <span className="font-display text-[48px] font-light leading-none text-[rgba(255,219,160,0.2)]">
          {num}
        </span>
        <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.6px] text-[#e5e2e1]">
          {title}
        </h2>
      </div>
      <div className="flex flex-col gap-6 lg:col-span-8">{children}</div>
    </div>
  )
}

export function TermsOfServicePage() {
  return (
    <LegalDocShell activeHref="/terms-of-service">
      <div className="mb-16 flex flex-col gap-6">
        <div className="inline-flex w-fit rounded-xl bg-[#2a2a2a] px-3 py-1">
          <span className="font-sans text-[10px] font-semibold uppercase tracking-[1px] text-[#ffdba0]">
            DOCUMENTATION / LEGAL
          </span>
        </div>
        <h1 className="font-display text-5xl font-bold leading-[1] tracking-[-0.05em] text-[#e5e2e1] md:text-7xl">
          Terms of <span className="text-[#ffb700]">Service</span>
        </h1>
        <p className="max-w-[672px] font-sans text-lg font-light leading-[32.5px] text-[#d5c4ab] md:text-xl">
          The framework of our professional relationship. These terms define the rules, requirements, and legalities of using the Architectural Ledger portal.
        </p>
        <div className="flex flex-wrap gap-8 pt-2 opacity-50">
          <span className="font-sans text-sm uppercase tracking-[1.4px] text-[#e5e2e1]">
            EFFECTIVE: JANUARY 01, 2024
          </span>
          <span className="font-sans text-sm uppercase tracking-[1.4px] text-[#e5e2e1]">
            VERSION: 4.12.0
          </span>
        </div>
      </div>

      <article className="flex w-full max-w-none flex-col gap-24 pb-16 lg:gap-32">
        <SectionGrid num="01" title="ACCEPTANCE OF TERMS">
          <div className="flex flex-col gap-6">
            <p className="font-sans text-base leading-8 text-[#d5c4ab]">
              By accessing or using the Architectural Ledger Platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, you must immediately cease all use of the platform and associated services.
            </p>
            <p className="font-sans text-base leading-8 text-[#d5c4ab]">
              We reserve the right to update these terms at any time. Continued use of the portal after such changes constitutes acceptance of the new terms. Our systems will notify administrative users via the dashboard of major revisions.
            </p>
            <div className="border-l-4 border-[#ffb700] bg-[#0e0e0e] px-7 py-6">
              <p className="font-sans text-sm italic leading-5 text-[#d5c4ab]">
                &ldquo;The platform is intended for professional use by developers and technical agencies. Any unauthorized scraping or reverse engineering is strictly prohibited.&rdquo;
              </p>
            </div>
          </div>
        </SectionGrid>

        <SectionGrid num="02" title="INTELLECTUAL PROPERTY">
          <div className="flex flex-col gap-6 rounded-lg border border-[rgba(255,251,247,0.05)] bg-[#2a2a2a] p-8 sm:p-10">
            <div className="flex gap-4">
              <Shield className="mt-0.5 size-6 shrink-0 text-[#ffdba0]" strokeWidth={1.5} aria-hidden />
              <div className="flex min-w-0 flex-col gap-2">
                <h3 className="font-sans text-lg font-semibold text-[#e5e2e1]">
                  Proprietary Rights
                </h3>
                <p className="font-sans text-base leading-[26px] text-[#d5c4ab]">
                  All code, design systems, visual assets, and underlying algorithms remain the exclusive property of the Agency and its licensors. Users are granted a non-exclusive, revocable license for internal portal use only.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Code2 className="mt-0.5 size-6 shrink-0 text-[#ffdba0]" strokeWidth={1.5} aria-hidden />
              <div className="flex min-w-0 flex-col gap-2">
                <h3 className="font-sans text-lg font-semibold text-[#e5e2e1]">
                  User Contributions
                </h3>
                <p className="font-sans text-base leading-[26px] text-[#d5c4ab]">
                  When you upload custom scripts or configurations, you maintain ownership but grant us a worldwide, royalty-free license to host and process that data for the fulfillment of service.
                </p>
              </div>
            </div>
          </div>
        </SectionGrid>

        <SectionGrid num="03" title="LIMITATION OF LIABILITY">
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2 border border-[rgba(255,255,255,0.05)] bg-[#1c1b1b] p-8">
                <Shield className="size-5 text-[#e5e2e1]" strokeWidth={1.5} aria-hidden />
                <h4 className="pt-2 font-sans text-base font-semibold text-[#e5e2e1]">
                  Service Uptime
                </h4>
                <p className="font-sans text-sm leading-[22.75px] text-[#e5e2e1]/60">
                  While we strive for 99.9% uptime, services are provided &ldquo;as is&rdquo; without warranty of any kind.
                </p>
              </div>
              <div className="flex flex-col gap-2 border border-[rgba(255,255,255,0.05)] bg-[#1c1b1b] p-8">
                <Zap className="size-5 text-[#e5e2e1]" strokeWidth={1.5} aria-hidden />
                <h4 className="pt-2 font-sans text-base font-semibold text-[#e5e2e1]">
                  Data Loss
                </h4>
                <p className="font-sans text-sm leading-[22.75px] text-[#e5e2e1]/60">
                  Architectural Ledger is not liable for data loss due to user misconfiguration or third-party API failures.
                </p>
              </div>
            </div>
            <p className="font-sans text-base leading-8 text-[#d5c4ab]">
              To the maximum extent permitted by applicable law, in no event shall Hasnain Ayaz Agency be liable for any indirect, punitive, incidental, special, or consequential damages arising out of the use of this portal.
            </p>
          </div>
        </SectionGrid>

        <SectionGrid num="04" title="TERMINATION">
          <div className="flex flex-col gap-6">
            <p className="font-sans text-base leading-8 text-[#d5c4ab]">
              We reserve the right to terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            <ul className="flex flex-col gap-4">
              {[
                "Immediate cessation of API keys",
                "Forfeiture of remaining credit cycles",
                "Archival of operational logs for 30 days",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="size-1.5 shrink-0 rounded-full bg-[#ffdba0]" aria-hidden />
                  <span className="font-sans text-base text-[#d5c4ab]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </SectionGrid>

        <div className="flex flex-col gap-8 rounded-lg border border-[rgba(255,219,160,0.1)] bg-gradient-to-br from-[#2a2a2a] to-[#201f1f] p-8 sm:flex-row sm:items-center sm:justify-between sm:p-12">
          <div className="flex max-w-xl flex-col gap-2">
            <h3 className="font-display text-2xl font-bold text-[#e5e2e1]">
              Questions about these terms?
            </h3>
            <p className="font-sans text-base leading-6 text-[#d5c4ab]">
              Our legal team is available for clarification on agency-specific agreements.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex shrink-0 items-center justify-center whitespace-nowrap bg-[#e5e2e1] px-12 py-4 text-center font-sans text-xs font-semibold uppercase tracking-[1.2px] text-[#131313] transition-opacity hover:opacity-90 sm:px-14"
          >
            DOWNLOAD PDF VERSION
          </a>
        </div>
      </article>
    </LegalDocShell>
  )
}
