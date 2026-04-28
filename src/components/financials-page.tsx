import { ArrowRight, CircleAlert, CreditCard, Download, Landmark, Wallet } from "lucide-react"

import { PortalDashboardShell } from "@/components/portal-dashboard-shell"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const ledgerRows = [
  {
    title: "Phase 01: Architecture Design",
    invoice: "INV-2023-084 • Sep 12, 2023",
    amount: "$4,500.00",
    status: "Paid",
    tone: "paid" as const,
  },
  {
    title: "Phase 02: Core API Infrastructure",
    invoice: "INV-2023-091 • Oct 05, 2023",
    amount: "$8,200.00",
    status: "Pending",
    tone: "pending" as const,
  },
  {
    title: "Phase 03: UI Implementation",
    invoice: "INV-2023-104 • Nov 20, 2023",
    amount: "$6,250.00",
    status: "Overdue",
    tone: "overdue" as const,
  },
  {
    title: "Initial Retainer Deposit",
    invoice: "INV-2023-001 • Aug 15, 2023",
    amount: "$15,000.00",
    status: "Paid",
    tone: "paid" as const,
  },
] as const

const activityItems: Array<{ label: string; time: string; featured?: boolean }> = [
  { label: "Invoice #104 marked as Overdue", time: "2 hours ago", featured: true },
  { label: "Stripe payout initiated", time: "Yesterday" },
  { label: "Phase 01 assets uploaded", time: "3 days ago" },
]

function FinancialStatusBadge({ tone, children }: { tone: "paid" | "pending" | "overdue"; children: string }) {
  const className =
    tone === "paid"
      ? "bg-[#d5c4ab]/10 text-[#d5c4ab]"
      : tone === "pending"
        ? "bg-brand-amber/20 text-brand-amber"
        : "bg-[#ffb4ab]/20 text-[#ffb4ab]"

  return <Badge className={`rounded-[2px] px-2 py-[3px] font-sans text-[10px] font-bold uppercase tracking-[0.12em] ${className}`}>{children}</Badge>
}

function FinancialRowIcon({ tone }: { tone: "paid" | "pending" | "overdue" }) {
  if (tone === "overdue") {
    return (
      <span className="flex size-12 items-center justify-center rounded-[4px] bg-[rgba(147,0,10,0.2)] text-[#ffb4ab]">
        <CircleAlert className="size-5" strokeWidth={2.1} />
      </span>
    )
  }

  if (tone === "pending") {
    return (
      <span className="flex size-12 items-center justify-center rounded-[4px] bg-brand-card text-brand-amber">
        <Wallet className="size-5" strokeWidth={2.1} />
      </span>
    )
  }

  return (
    <span className="flex size-12 items-center justify-center rounded-[4px] bg-brand-card text-brand-text-bright">
      <CreditCard className="size-5" strokeWidth={2.1} />
    </span>
  )
}

export function FinancialsPage() {
  return (
    <PortalDashboardShell activeHref="/financials" contentClassName="px-4 py-8 sm:px-6 sm:py-12 md:px-10 lg:px-12 lg:py-16 xl:px-16">
      <div className="mx-auto w-full max-w-[1024px] space-y-12">
        <section className="grid gap-6 xl:grid-cols-[minmax(0,1.35fr)_minmax(320px,1fr)]">
          <Card className="relative overflow-hidden rounded-lg border border-brand-line/10 bg-brand-card py-0 shadow-none">
            <div className="absolute -right-20 -bottom-20 size-80 rounded-xl bg-[rgba(255,219,160,0.05)] blur-[40px]" />
            <CardContent className="relative space-y-12 px-8 py-8 sm:px-10 sm:py-9">
              <div className="space-y-2">
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#d5c4ab]/60">Total financial volume</p>
                <h1 className="font-display text-4xl font-bold tracking-[-0.06em] text-[#ffdba0] sm:text-5xl lg:text-[60px] lg:leading-[1]">
                  $142,850.00
                </h1>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <div className="space-y-1">
                  <p className="font-sans text-[10px] uppercase tracking-[0.12em] text-[#d5c4ab]/40">Total paid</p>
                  <p className="font-display text-2xl font-medium text-brand-text">$128,400</p>
                </div>
                <div className="space-y-1">
                  <p className="font-sans text-[10px] uppercase tracking-[0.12em] text-[#d5c4ab]/40">Outstanding</p>
                  <p className="font-display text-2xl font-medium text-[#ffb4a4]">$14,450</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-lg border-0 bg-brand-amber py-0 text-brand-amber-foreground shadow-none">
            <CardContent className="flex h-full flex-col justify-between gap-8 px-8 py-8">
              <div className="space-y-2">
                <h2 className="font-display text-2xl font-bold tracking-[-0.04em]">Instant Settlement</h2>
                <p className="max-w-[240px] font-sans text-sm leading-5 text-brand-amber-foreground/80">
                  Directly clear your outstanding balances through our encrypted gateway.
                </p>
              </div>

              <div className="space-y-3">
                <Button className="h-14 w-full rounded-lg bg-brand-surface-alt font-sans text-base font-bold text-brand-text-bright hover:bg-black/90">
                  <CreditCard className="size-[18px]" strokeWidth={2.1} />
                  Pay with Stripe
                </Button>
                <Button
                  variant="outline"
                  className="h-[46px] w-full rounded-lg border-[rgba(107,75,0,0.2)] bg-white/10 font-sans text-sm font-medium text-brand-amber-foreground hover:bg-white/15 hover:text-brand-amber-foreground"
                >
                  <Landmark className="size-[14px]" strokeWidth={2.1} />
                  Bank Wire Details
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_282px] xl:items-start">
          <div className="space-y-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="space-y-1">
                <h2 className="font-display text-3xl font-bold tracking-[-0.04em] text-brand-text">Milestone Ledger</h2>
                <p className="font-sans text-sm leading-5 text-[#d5c4ab]/60">Detailed breakdown of project phases and billing status.</p>
              </div>

              <button
                type="button"
                className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.12em] text-[#ffdba0] transition-colors hover:text-brand-amber"
              >
                Filter by project
                <span className="text-[10px]">▼</span>
              </button>
            </div>

            <div className="space-y-4">
              {ledgerRows.map((row) => (
                <article
                  key={`${row.title}-${row.invoice}`}
                  className={
                    row.tone === "overdue"
                      ? "flex flex-col gap-5 rounded-lg border border-[#ffb4ab]/10 bg-[#1c1b1b] px-6 py-6 md:flex-row md:items-center md:justify-between"
                      : "flex flex-col gap-5 rounded-lg bg-[#1c1b1b] px-6 py-6 md:flex-row md:items-center md:justify-between"
                  }
                >
                  <div className="flex items-center gap-6">
                    <FinancialRowIcon tone={row.tone} />
                    <div className="space-y-1">
                      <h3 className="font-display text-lg font-bold text-brand-text">{row.title}</h3>
                      <p className="font-sans text-xs uppercase tracking-[0.12em] text-[#d5c4ab]/40">{row.invoice}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-6 md:justify-end">
                    <div className="space-y-1 text-left md:text-right">
                      <p className={row.tone === "overdue" ? "font-display text-xl font-bold text-[#ffb4ab]" : "font-display text-xl font-bold text-brand-text"}>
                        {row.amount}
                      </p>
                      <FinancialStatusBadge tone={row.tone}>{row.status}</FinancialStatusBadge>
                    </div>

                    <a
                      href="#"
                      className="flex size-10 items-center justify-center rounded-md text-[#d5c4ab]/60 transition-colors hover:bg-brand-card hover:text-brand-text"
                      aria-label={`Download ${row.title} invoice`}
                    >
                      <Download className="size-4" strokeWidth={2} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <Card className="rounded-lg border border-brand-line/10 bg-[#0e0e0e] py-0 shadow-none">
              <CardContent className="flex items-center gap-6 px-8 py-8">
                <div className="flex h-12 w-5 items-center justify-center rounded-xl bg-[#ffb4a4]/20">
                  <div className="flex h-8 w-1 items-center justify-center rounded-xl bg-[#ffb4a4]">
                    <span className="block h-3 w-2 rounded-sm bg-[#131313]" />
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="font-display text-base font-bold text-brand-text">Payment System Live</h3>
                  <p className="font-sans text-xs leading-[1.65] text-[#d5c4ab]/60">
                    Financial reconciliation occurs every 6 hours via automated secure sync.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-lg border-0 bg-brand-card py-0 shadow-none">
              <CardHeader className="px-8 pt-8 pb-0">
                <CardTitle className="font-sans text-[10px] font-normal uppercase tracking-[0.12em] text-[#d5c4ab]/40">
                  Recent activity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 px-8 py-8">
                {activityItems.map((item) => (
                  <div key={`${item.label}-${item.time}`} className="flex items-start gap-4">
                    <span
                      className={
                        item.featured
                          ? "mt-1.5 h-2 w-2 rounded-full bg-[#ffdba0] shadow-[0_0_8px_rgba(255,183,0,0.5)]"
                          : "mt-1.5 h-2 w-2 rounded-full bg-[#d5c4ab]/40"
                      }
                    />
                    <div className="space-y-1">
                      <p className="font-sans text-sm font-medium leading-5 text-brand-text">{item.label}</p>
                      <p className="font-sans text-[10px] uppercase tracking-[0.12em] text-[#d5c4ab]/40">{item.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden rounded-lg border-0 bg-[#201f1f] py-0 shadow-none">
              <div className="pointer-events-none absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(255,183,0,0.12),transparent_70%)]" />
              <CardContent className="relative space-y-6 px-8 py-8">
                <div className="space-y-2">
                  <h3 className="font-display text-lg font-bold text-brand-text">Need Billing Support?</h3>
                  <p className="font-sans text-sm leading-[1.6] text-[#d5c4ab]/60">
                    Our treasury team is available for custom reconciliation requests and wire confirmations.
                  </p>
                </div>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.12em] text-[#ffdba0] transition-colors hover:text-brand-amber"
                >
                  Contact support
                  <ArrowRight className="size-3.5" strokeWidth={2.2} />
                </a>
              </CardContent>
            </Card>
          </aside>
        </section>
      </div>
    </PortalDashboardShell>
  )
}
