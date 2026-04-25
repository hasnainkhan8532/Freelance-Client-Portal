import { LegalDocShell } from "@/components/legal-doc-shell"
import { ChartContainer, ChartTooltip, RechartsPrimitive } from "@/components/ui/chart"

const coreSystems = [
  {
    name: "API Gateway",
    uptime: "99.99%",
    description: ["REST & GRAPHQL", "ENDPOINTS"],
    status: "OPERATIONAL",
  },
  {
    name: "DB Cluster",
    uptime: "99.95%",
    description: ["VECTOR &", "RELATIONAL NODES"],
    status: "OPERATIONAL",
  },
  {
    name: "Edge CDN",
    uptime: "100%",
    description: ["GLOBAL ASSET", "DELIVERY"],
    status: "OPERATIONAL",
  },
] as const

const latencyData = [
  { period: "01", apiHits: 115, latency: 148 },
  { period: "02", apiHits: 125, latency: 142 },
  { period: "03", apiHits: 106, latency: 154 },
  { period: "04", apiHits: 134, latency: 146 },
  { period: "05", apiHits: 154, latency: 140 },
  { period: "06", apiHits: 163, latency: 138 },
  { period: "07", apiHits: 144, latency: 145 },
  { period: "08", apiHits: 115, latency: 152 },
  { period: "09", apiHits: 173, latency: 136 },
  { period: "10", apiHits: 192, latency: 133 },
  { period: "11", apiHits: 182, latency: 137 },
  { period: "12", apiHits: 154, latency: 141 },
] as const

const reliabilityData = [
  { key: "A", value: 80 },
  { key: "B", value: 90 },
  { key: "C", value: 75 },
  { key: "D", value: 100 },
  { key: "E", value: 85 },
  { key: "F", value: 95 },
] as const

const incidents = [
  {
    date: "OCT 24, 2024",
    time: "14:22 UTC",
    title: "Scheduled Maintenance: Vector DB Cluster Expansion",
    description: [
      "Routine scaling operation to increase capacity for new AI model deployment. No downtime was",
      "experienced by end-users. All nodes verified stable.",
    ],
    tags: ["COMPLETED", "MAINTENANCE"],
    warning: false,
  },
  {
    date: "OCT 18, 2024",
    time: "09:05 UTC",
    title: "Partial Service Disruption: Singapore Edge Node",
    description: [
      "Observed increased latency for clients in the SEA region due to upstream provider hardware failure.",
      "Traffic was automatically rerouted to the Tokyo hub.",
    ],
    tags: ["RESOLVED", "INCIDENT"],
    warning: true,
  },
] as const

const latencyChartConfig = {
  apiHits: { label: "API Hits", color: "rgba(255, 183, 0, 0.38)" },
  latency: { label: "Latency", color: "#ffb4a4" },
}

const reliabilityChartConfig = {
  value: { label: "Health", color: "#ffb700" },
}

export function SystemStatusPage() {
  return (
    <LegalDocShell activeHref="/system-status">
      <div className="flex w-full flex-col gap-16 lg:gap-20">
        <header className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex max-w-[576px] flex-col gap-4">
            <span className="inline-flex w-fit rounded-sm bg-[rgba(255,183,0,0.1)] px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-[2px] text-[#ffb700]">
              LIVE MONITORING
            </span>
            <h1 className="font-display text-5xl font-bold leading-[1] tracking-[-0.05em] text-[#e5e2e1] md:text-7xl">
              System <span className="text-[#ffb700]">Status</span>
            </h1>
            <p className="font-sans text-base font-light leading-7 text-[#d5c4ab] md:text-lg">
              Real-time health telemetry for Hasnain Ayaz Agency infrastructure. Current operational status is optimal.
            </p>
          </div>
          <div className="group relative flex w-full max-w-[340px] flex-col items-start gap-3 self-start lg:items-end">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#ffb700]/30 via-[#ffdb9d]/10 to-transparent opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative flex w-full items-center gap-3 rounded-lg border border-[rgba(255,183,0,0.2)] bg-[#2a2a2a] px-6 py-4 transition-transform duration-300 group-hover:-translate-y-0.5">
              <span className="h-3 w-3 rounded-full bg-[#ffb700] shadow-[0_0_12px_rgba(255,183,0,0.75)]" aria-hidden />
              <div className="font-display text-base font-bold leading-6 text-[#ffb700]">
                <p>ALL SYSTEMS</p>
                <p>OPERATIONAL</p>
              </div>
            </div>
            <span className="font-sans text-[10px] uppercase tracking-[1px] text-[#e5e2e1]/40">LAST VERIFIED: 42 SECONDS AGO</span>
          </div>
        </header>

        <section className="grid grid-cols-1 gap-6 xl:grid-cols-4">
          <div className="grid grid-cols-1 gap-4 xl:col-span-3 xl:grid-cols-3">
            {coreSystems.map((service) => (
              <article
                key={service.name}
                className="group relative overflow-hidden rounded-lg border border-transparent bg-[#201f1f] px-6 pb-8 pt-6 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(255,183,0,0.18)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,183,0,0.12),transparent_45%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative mb-7 flex items-center justify-between">
                  <span className="rounded-sm bg-[rgba(255,219,160,0.1)] px-2 py-0.5 font-sans text-[10px] text-[#ffdba0]">{service.uptime}</span>
                </div>
                <h2 className="relative mb-3 font-display text-xl font-bold text-[#e5e2e1]">{service.name}</h2>
                <p className="relative mb-5 font-sans text-[12px] uppercase tracking-[1.2px] text-[#d5c4ab]">
                  {service.description[0]}
                  <br />
                  {service.description[1]}
                </p>
                <div className="relative flex items-center gap-2 pt-4">
                  <span className="h-1 flex-1 rounded-full bg-[#ffb700]" aria-hidden />
                  <span className="font-sans text-[10px] font-semibold text-[#ffb700]">{service.status}</span>
                </div>
              </article>
            ))}
          </div>

          <aside className="rounded-lg bg-[#0e0e0e] p-8">
            <h3 className="mb-6 font-display text-lg font-bold leading-7 text-[#e5e2e1]">
              90-Day
              <br />
              Reliability
            </h3>
            <div className="mb-12 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#e5e2e1]/60">Avg. Response Time</span>
                <span className="font-mono text-sm text-[#ffdba0]">142ms</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#e5e2e1]/60">Success Rate</span>
                <span className="font-mono text-sm text-[#ffdba0]">99.98%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#e5e2e1]/60">Active Incidents</span>
                <span className="font-mono text-sm text-[#e5e2e1]">0</span>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-[10px] uppercase tracking-[1px] text-[#d5c4ab]">GLOBAL HEALTH OVERVIEW</p>
              <ChartContainer config={reliabilityChartConfig} className="h-12 w-full !aspect-auto">
                <RechartsPrimitive.BarChart data={reliabilityData} barCategoryGap={4} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                  <RechartsPrimitive.Bar dataKey="value" radius={[2, 2, 0, 0]} fill="var(--color-value)">
                    {reliabilityData.map((entry, index) => (
                      <RechartsPrimitive.Cell key={entry.key} fillOpacity={index === 3 ? 1 : 0.25 + index * 0.12} />
                    ))}
                  </RechartsPrimitive.Bar>
                </RechartsPrimitive.BarChart>
              </ChartContainer>
            </div>
          </aside>
        </section>

        <section className="rounded-lg bg-[#201f1f] p-8">
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="font-display text-2xl font-bold tracking-[-0.6px] text-[#e5e2e1]">Latency & Throughput</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-xs text-[#e5e2e1]/60">
                <span className="h-2 w-2 rounded-full bg-[#ffb700]" aria-hidden /> API Hits
              </div>
              <div className="flex items-center gap-2 text-xs text-[#e5e2e1]/60">
                <span className="h-2 w-2 rounded-full bg-[#ffb4a4]" aria-hidden /> Latency
              </div>
            </div>
          </div>

          <ChartContainer config={latencyChartConfig} className="h-48 w-full !aspect-auto">
            <RechartsPrimitive.ComposedChart data={latencyData} margin={{ top: 4, right: 0, bottom: 0, left: 0 }}>
              <RechartsPrimitive.CartesianGrid vertical={false} stroke="rgba(255,251,247,0.05)" />
              <RechartsPrimitive.XAxis dataKey="period" tickLine={false} axisLine={false} tick={{ fill: "rgba(229,226,225,0.45)", fontSize: 10 }} />
              <RechartsPrimitive.YAxis yAxisId="hits" hide domain={[80, 200]} />
              <RechartsPrimitive.YAxis yAxisId="latency" hide orientation="right" domain={[120, 170]} />
              <RechartsPrimitive.Tooltip content={<ChartTooltip />} cursor={{ fill: "rgba(255,183,0,0.06)" }} />
              <RechartsPrimitive.Bar yAxisId="hits" dataKey="apiHits" fill="var(--color-apiHits)" radius={[2, 2, 0, 0]} maxBarSize={10} />
              <RechartsPrimitive.Line
                yAxisId="latency"
                type="monotone"
                dataKey="latency"
                stroke="var(--color-latency)"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 3, fill: "#ffb4a4" }}
              />
            </RechartsPrimitive.ComposedChart>
          </ChartContainer>
        </section>

        <section className="pt-6">
          <h3 className="mb-8 font-display text-3xl font-bold tracking-[-1.5px] text-[#e5e2e1]">Incident History</h3>
          <div className="space-y-6">
            {incidents.map((incident) => (
              <article
                key={incident.title}
                className="group relative overflow-hidden rounded-lg border border-transparent bg-[#1c1b1b] p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(255,183,0,0.12)]"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ffb700]/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex flex-col gap-6 lg:flex-row">
                  <div className="shrink-0">
                    <p className="text-xs font-semibold uppercase tracking-[1.2px] text-[#ffdba0]">{incident.date}</p>
                    <p className="mt-1 text-[10px] text-[#e5e2e1]/40">{incident.time}</p>
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-2 font-display text-xl font-bold text-[#e5e2e1]">{incident.title}</h4>
                    <p className="text-sm leading-[22.75px] text-[#d5c4ab]">
                      {incident.description[0]}
                      <br />
                      {incident.description[1]}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      {incident.tags.map((tag, index) => {
                        const isWarning = incident.warning && index === 0
                        return (
                          <span
                            key={tag}
                            className={`rounded-sm border px-2.5 py-1 text-[10px] ${
                              isWarning
                                ? "border-[rgba(255,180,164,0.2)] bg-[rgba(183,35,1,0.2)] text-[#ffb4a4]"
                                : "border-[rgba(255,251,247,0.05)] bg-[#2a2a2a] text-[#e5e2e1]"
                            }`}
                          >
                            {tag}
                          </span>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </LegalDocShell>
  )
}
