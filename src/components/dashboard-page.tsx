import { CalendarClock, FolderKanban, HardDrive, HelpCircle, Layers, Wallet } from "lucide-react"

import { PortalDashboardShell } from "@/components/portal-dashboard-shell"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const quickActions = [
  { label: "Onboarding", icon: FolderKanban },
  { label: "Vault", icon: HardDrive },
  { label: "Support", icon: HelpCircle },
  { label: "Integrations", icon: Layers },
] as const

const logs: Array<{
  id: string
  kind: string
  title: string
  detail: string
  date: string
  highlight?: boolean
}> = [
  {
    id: "01",
    kind: "Security",
    title: "New Security Protocols for API Access",
    detail: "Hardware-bound tokens implementation finalized for project integrations.",
    date: "Oct 12",
    highlight: true,
  },
  {
    id: "02",
    kind: "System",
    title: "Cloud Infrastructure Optimization",
    detail: "Scheduled migration of DB shards to the Zurich cluster node alpha.",
    date: "Oct 09",
  },
  {
    id: "03",
    kind: "Update",
    title: "UI Library 4.0 Component Mapping",
    detail: "Successfully synced component DataStore with production environments.",
    date: "Oct 07",
  },
]

export function DashboardPage() {
  return (
    <PortalDashboardShell activeHref="/dashboard" contentClassName="px-4 py-8 sm:px-6 sm:py-12 md:px-10 lg:px-16 lg:py-16 xl:px-24">
      <div className="mx-auto w-full max-w-[1280px] space-y-12">
        <section className="flex flex-wrap items-end justify-between gap-4">
          <div className="space-y-2">
            <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-brand-amber">System Identity / Verified</p>
            <h2 className="font-display text-4xl font-bold tracking-[-0.06em] text-brand-text-bright sm:text-6xl">
              Welcome back, Hasnain<span className="text-brand-amber">.</span>
            </h2>
          </div>

          <div className="flex flex-col items-end gap-2 text-right">
            <Button
              type="button"
              className="h-auto rounded-xl border border-brand-amber/25 bg-brand-amber/10 px-3 py-1.5 font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-amber hover:bg-brand-amber/15"
            >
              Operational
            </Button>
            <p className="font-sans text-[10px] uppercase tracking-[0.12em] text-brand-muted">Node: 882-Alpha // Sync: 2m Ago</p>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-12 xl:grid-rows-[417px_auto]">
          <Card className="relative overflow-hidden rounded-3xl border border-brand-line/20 bg-brand-card p-0 xl:col-span-8">
            <CardHeader className="space-y-8 p-10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardTitle className="font-display text-3xl font-bold tracking-[-0.04em] text-brand-text-bright">Neural Interface V2</CardTitle>
                  <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.2em] text-brand-amber">Primary Production Stream</p>
                </div>
                <Badge className="h-auto rounded-lg border border-brand-amber/20 bg-brand-amber/10 px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-amber hover:bg-brand-amber/15">
                  In Progress
                </Badge>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="font-sans text-sm text-brand-text">Global Progress Architecture</p>
                  <p className="font-display text-2xl font-bold text-brand-amber">84%</p>
                </div>
                <div className="h-2 rounded-xl bg-black/40">
                  <div className="h-full w-[84%] rounded-xl bg-gradient-to-r from-brand-amber to-brand-amber/40 shadow-[0_0_15px_rgba(255,183,0,0.35)]" />
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-10 pt-0">
              <Separator className="mb-8 bg-brand-line/20" />
              <div className="grid gap-6 md:grid-cols-3">
                {["Current Milestone", "Target Launch", "Resource Load"].map((label, idx) => (
                  <div key={label}>
                    <p className="font-sans text-[10px] uppercase tracking-[0.12em] text-brand-muted">{label}</p>
                    <p className="mt-1 font-display text-xl text-brand-text-bright">
                      {idx === 0 ? "API Handshake" : idx === 1 ? "Oct 24, 2023" : "Optimized"}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="flex h-full min-h-[417px] flex-col rounded-3xl border border-brand-amber/15 bg-brand-card xl:col-span-4">
            <CardHeader className="space-y-0 px-6 pt-6 pb-4 sm:px-7 sm:pt-7 sm:pb-5">
              <div className="flex items-center gap-3">
                <CalendarClock className="size-5 text-[#F59E0B]" />
                <CardTitle className="font-display text-2xl font-bold text-brand-text-bright">Active Sprint</CardTitle>
              </div>
            </CardHeader>

            <CardContent className="flex-1 px-6 pt-0 pb-4 sm:px-7 sm:pb-5">
              <div className="h-full space-y-3 rounded-2xl border border-brand-line/20 bg-black/40 p-4 sm:p-5">
                <p className="font-sans text-[10px] uppercase tracking-[0.12em] text-brand-amber">Priority Task</p>
                <h4 className="font-display text-xl font-semibold leading-[1.2] text-brand-text-bright sm:text-[22px]">Refactor JWT hardware-bound tokens</h4>
                <p className="font-sans text-xs leading-relaxed text-brand-text sm:text-sm">System requires validation of TPM-backed identity before shard migration.</p>
              </div>
            </CardContent>
          </Card>

          <section className="grid gap-4 sm:grid-cols-2 xl:col-span-4">
            {quickActions.map(({ label, icon: Icon }) => (
              <Card
                key={label}
                className="group relative grid min-h-[172px] place-items-center overflow-hidden rounded-3xl border border-brand-line/20 bg-brand-card px-6 py-10 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand-amber/30 hover:shadow-[0_12px_35px_rgba(0,0,0,0.35)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,183,0,0.14),transparent_58%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <CardContent className="relative space-y-4 p-0">
                  <Icon className="mx-auto size-6 text-[#F59E0B] transition-colors duration-300" />
                  <p className="font-display text-xs font-bold uppercase tracking-[0.12em] text-brand-text-bright transition-colors duration-300 group-hover:text-brand-amber">
                    {label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </section>

          <Card className="rounded-3xl border border-brand-line/20 bg-brand-card xl:col-span-8">
            <CardHeader className="p-10 pb-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <Wallet className="size-5 text-[#F59E0B]" />
                  <CardTitle className="font-display text-2xl font-bold text-brand-text-bright">Global Activity Logs</CardTitle>
                </div>
                <a href="#" className="border-b border-brand-amber/40 pb-1 font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-brand-amber">
                  Full Audit Trail
                </a>
              </div>
            </CardHeader>
            <CardContent className="space-y-1 p-10 pt-0">
              {logs.map((log) => (
                <article
                  key={log.id}
                  className="group/log relative grid gap-4 overflow-hidden rounded-lg border-b border-brand-line/10 px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-amber/30 md:grid-cols-[48px_1fr_auto] md:items-center"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,183,0,0.14),transparent_58%)] opacity-0 transition-opacity duration-300 group-hover/log:opacity-100" />
                  <p className="relative font-display text-3xl font-bold text-brand-text/15 transition-colors duration-300 group-hover/log:text-brand-amber/70">{log.id}</p>

                  <div className="relative space-y-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge
                        className={
                          log.highlight
                            ? "rounded-sm bg-brand-amber/10 px-2 py-1 font-sans text-[9px] font-bold uppercase tracking-[0.1em] text-brand-amber hover:bg-brand-amber/20"
                            : "rounded-sm bg-[#2a2a2a] px-2 py-1 font-sans text-[9px] font-bold uppercase tracking-[0.1em] text-brand-text hover:bg-brand-amber/10 hover:text-brand-text-bright"
                        }
                      >
                        {log.kind}
                      </Badge>
                      <h4 className="font-display text-base font-bold text-brand-text-bright transition-colors duration-300 group-hover/log:text-brand-amber">{log.title}</h4>
                    </div>
                    <p className="font-sans text-xs text-brand-text">{log.detail}</p>
                  </div>

                  <p className="relative font-sans text-[10px] uppercase tracking-[0.12em] text-brand-muted transition-colors duration-300 group-hover/log:text-brand-text">{log.date}</p>
                </article>
              ))}
            </CardContent>
          </Card>
        </section>

        <footer className="border-t border-brand-line/20 pt-10 text-center">
          <p className="font-sans text-[10px] font-bold uppercase tracking-[0.5em] text-brand-muted">
            The Editorial Developer Portal © 2023 // Architectural Integrity First // Node 0x9928AF
          </p>
        </footer>
      </div>
    </PortalDashboardShell>
  )
}
