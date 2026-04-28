import * as React from "react"
import { ArrowLeft, Calendar, Check, ChevronDown, FolderOpen, Layers3, Quote, Upload, Workflow } from "lucide-react"

import { PortalDashboardShell } from "@/components/portal-dashboard-shell"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const progressSteps = [
  { label: "Client Profile", state: "complete", number: "01" },
  { label: "Project Intake", state: "current", number: "02" },
  { label: "Design Review", state: "upcoming", number: "03" },
  { label: "Final Sign-off", state: "upcoming", number: "04" },
] as const

const technicalOptions = ["SSO / Auth0", "Stripe Payment", "CMS Integration", "Real-time DB"] as const
const techStackOptions = ["Next.js / TypeScript", "Astro / React", "Laravel / Vue", "Custom Stack"] as const
type TechStackOption = (typeof techStackOptions)[number]

function OnboardingField({ label, helper, children }: { label: string; helper?: string; children: React.ReactNode }) {
  return (
    <label className="block space-y-2.5">
      <span className="font-sans text-[10px] font-bold uppercase tracking-[0.1em] text-[#d5c4ab]/60">{label}</span>
      {children}
      {helper ? <p className="font-sans text-[11px] italic leading-[1.5] text-[#d5c4ab]/40">{helper}</p> : null}
    </label>
  )
}

function OnboardingInput({ children, trailingIcon }: { children: React.ReactNode; trailingIcon?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between border-b border-[rgba(81,69,50,0.3)] px-3 py-4 text-base text-brand-text-bright transition-colors focus-within:border-brand-amber/70 hover:border-brand-amber/40">
      <div className="min-w-0 flex-1 font-sans leading-6">{children}</div>
      {trailingIcon ? <div className="ml-3 shrink-0 text-[#d5c4ab]/60">{trailingIcon}</div> : null}
    </div>
  )
}

export function OnboardingPage() {
  const [projectObjective, setProjectObjective] = React.useState("")
  const [launchDate, setLaunchDate] = React.useState("")
  const [techStack, setTechStack] = React.useState<TechStackOption>(techStackOptions[0])
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([])
  const [savedDraft, setSavedDraft] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)

  function toggleOption(option: string) {
    setSelectedOptions((current) => (current.includes(option) ? current.filter((item) => item !== option) : [...current, option]))
  }

  function handleSaveDraft() {
    setSavedDraft(true)
    setSubmitted(false)
  }

  function handleContinue() {
    setSubmitted(true)
    setSavedDraft(false)
  }

  return (
    <PortalDashboardShell activeHref="/onboarding" contentClassName="px-4 py-8 sm:px-6 sm:py-12 md:px-10 lg:px-12 lg:py-16 xl:px-16">
      <div className="mx-auto w-full max-w-[1024px] space-y-16">
        <section className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="rounded-xl bg-[rgba(183,35,1,0.2)] px-3 py-1 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffb4a4]">
              Step 02 of 04
            </span>
            <div className="h-px flex-1 bg-[rgba(81,69,50,0.2)]" />
          </div>
          <div className="space-y-4">
            <h1 className="font-display text-4xl font-bold tracking-[-0.06em] text-brand-text sm:text-5xl lg:text-[60px] lg:leading-[1]">
              Project Intake <span className="text-brand-amber">&amp;</span> Asset Gathering
            </h1>
            <p className="max-w-[672px] font-sans text-base leading-[1.625] text-[#d5c4ab] sm:text-lg">
              Provide the architectural blueprint for your project. We require precise technical specifications and brand identity assets to begin the development lifecycle.
            </p>
          </div>
        </section>

        <section className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_277px] lg:items-start">
          <div className="space-y-12">
            <section className="space-y-8">
              <div className="flex items-center gap-3">
                <FolderOpen className="size-5 text-brand-amber" strokeWidth={1.8} />
                <h2 className="font-display text-xl font-bold tracking-[-0.03em] text-brand-text">Project Questionnaire</h2>
              </div>

              <div className="space-y-8">
                <OnboardingField label="Project Objective" helper="Describe the core problem this project solves for your users.">
                  <OnboardingInput>
                    <textarea
                      value={projectObjective}
                      onChange={(event) => setProjectObjective(event.target.value)}
                      placeholder="What is the primary goal of this application?"
                      rows={3}
                      className="w-full resize-none bg-transparent font-sans text-base leading-6 text-brand-text-bright outline-none placeholder:text-[#d5c4ab]/30"
                    />
                  </OnboardingInput>
                </OnboardingField>

                <div className="grid gap-8 md:grid-cols-2">
                  <OnboardingField label="Target Launch Date">
                    <OnboardingInput trailingIcon={<Calendar className="size-4" strokeWidth={1.8} />}>
                      <input
                        type="date"
                        value={launchDate}
                        onChange={(event) => setLaunchDate(event.target.value)}
                        className="w-full bg-transparent font-sans text-brand-text-bright outline-none [color-scheme:dark]"
                      />
                    </OnboardingInput>
                  </OnboardingField>

                  <OnboardingField label="Tech Stack Preference">
                    <OnboardingInput trailingIcon={<ChevronDown className="size-5" strokeWidth={1.8} />}>
                      <select
                        value={techStack}
                        onChange={(event) => setTechStack(event.target.value as TechStackOption)}
                        className="w-full appearance-none bg-transparent font-sans text-brand-text-bright outline-none"
                      >
                        {techStackOptions.map((option) => (
                          <option key={option} value={option} className="bg-[#131313] text-brand-text-bright">
                            {option}
                          </option>
                        ))}
                      </select>
                    </OnboardingInput>
                  </OnboardingField>
                </div>
              </div>
            </section>

            <section className="space-y-8">
              <div className="flex items-center gap-3">
                <Layers3 className="size-5 text-brand-amber" strokeWidth={1.8} />
                <h2 className="font-display text-xl font-bold tracking-[-0.03em] text-brand-text">Brand Assets &amp; Technical Specs</h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    icon: Upload,
                    title: "Logos & Style Guides",
                    detail: "SVG, PNG, or Figma Links",
                    action: "Upload Files",
                  },
                  {
                    icon: Workflow,
                    title: "Product Catalogs",
                    detail: "JSON, CSV, or Excel Sheets",
                    action: "Upload Data",
                  },
                ].map(({ icon: Icon, title, detail, action }) => (
                  <Card key={title} className="rounded-lg border-0 bg-brand-card py-0 shadow-none ring-0">
                    <CardContent className="flex flex-col items-center px-8 py-8 text-center">
                      <div className="flex size-16 items-center justify-center rounded-xl bg-[#353534] text-brand-amber">
                        <Icon className="size-6" strokeWidth={1.8} />
                      </div>
                      <h3 className="mt-4 font-display text-base font-bold text-brand-text">{title}</h3>
                      <p className="mt-2 font-sans text-xs text-[#d5c4ab]">{detail}</p>
                      <button
                        type="button"
                        className="mt-6 border-b border-brand-amber/30 pb-1 font-sans text-[10px] font-bold uppercase tracking-[0.1em] text-brand-amber transition-colors hover:border-brand-amber hover:text-[#ffd166]"
                      >
                        {action}
                      </button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="overflow-hidden rounded-lg border border-brand-border-subtle bg-[#0e0e0e] py-0 shadow-none ring-0">
                <CardContent className="relative px-8 py-8">
                  <div className="pointer-events-none absolute right-0 top-0 h-24 w-28 bg-[radial-gradient(circle_at_top_right,rgba(255,183,0,0.18),transparent_65%)]" />
                  <div className="relative space-y-6">
                    <div className="space-y-1">
                      <h3 className="font-display text-base font-bold text-brand-text">Technical Requirements</h3>
                      <p className="font-sans text-sm text-[#d5c4ab]">Describe integrations, APIs, and performance benchmarks.</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {technicalOptions.map((option) => {
                        const selected = selectedOptions.includes(option)
                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => toggleOption(option)}
                            className={
                              selected
                                ? "inline-flex items-center gap-2 rounded-xl border border-brand-amber/40 bg-brand-amber/10 px-4 py-2 text-xs font-medium text-brand-amber"
                                : "inline-flex items-center gap-2 rounded-xl bg-[#201f1f] px-4 py-2 text-xs font-medium text-brand-text transition-colors hover:bg-[#2a2929]"
                            }
                          >
                            <span className={selected ? "flex size-4 items-center justify-center rounded-[2px] border border-brand-amber bg-brand-amber/20" : "size-4 rounded-[2px] border border-brand-line"}>
                              {selected ? <Check className="size-3 text-brand-amber" strokeWidth={3} /> : null}
                            </span>
                            <span className="font-sans">{option}</span>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section className="flex flex-col gap-6 border-t border-brand-border-subtle pt-8 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={handleSaveDraft}
                className="inline-flex items-center gap-2 self-start font-sans text-[10px] font-bold uppercase tracking-[0.1em] text-[#d5c4ab] transition-colors hover:text-brand-text"
              >
                <ArrowLeft className="size-3.5" strokeWidth={2} />
                Save Draft
              </button>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  type="button"
                  className="h-auto rounded-lg border-0 bg-brand-card px-8 py-4 font-display text-base font-bold text-brand-text hover:bg-[#333]"
                >
                  Back
                </Button>
                <Button
                  type="button"
                  onClick={handleContinue}
                  className="h-auto rounded-lg border-0 bg-brand-amber px-12 py-4 font-display text-base font-bold text-brand-amber-foreground shadow-[0_25px_50px_-12px_rgba(255,183,0,0.1)] hover:bg-brand-amber-hover"
                >
                  Continue to Review
                </Button>
              </div>
            </section>
          </div>

          <aside className="space-y-8">
            <Card className="rounded-lg border-0 bg-[#1c1b1b] py-0 shadow-none ring-0">
              <CardHeader className="px-8 pt-8 pb-0">
                <CardTitle className="font-sans text-[10px] font-black uppercase tracking-[0.2em] text-[#d5c4ab]/40">Onboarding Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 px-8 py-8">
                {progressSteps.map((step) => {
                  const isComplete = step.state === "complete"
                  const isCurrent = step.state === "current"
                  return (
                    <div key={step.label} className={step.state === "upcoming" ? "flex items-center gap-4 opacity-30" : "flex items-center gap-4"}>
                      <div
                        className={
                          isComplete
                            ? "flex size-8 items-center justify-center rounded-xl bg-[#b72301] text-white"
                            : isCurrent
                              ? "flex size-8 items-center justify-center rounded-xl border-2 border-brand-amber text-[10px] font-bold text-brand-amber"
                              : "flex size-8 items-center justify-center rounded-xl border border-brand-line text-[10px] font-bold text-[#d5c4ab]"
                        }
                      >
                        {isComplete ? <Check className="size-3.5" strokeWidth={3} /> : step.number}
                      </div>
                      <p className={isCurrent ? "font-sans text-sm font-bold text-brand-amber" : "font-sans text-sm text-brand-text"}>{step.label}</p>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            <Card className="rounded-lg border border-brand-border-subtle bg-transparent py-0 shadow-none ring-0">
              <CardContent className="space-y-6 px-8 py-8">
                <div className="flex items-center gap-2 text-brand-amber">
                  <Quote className="size-4" strokeWidth={2} />
                  <span className="font-sans text-[10px] font-black uppercase tracking-[0.1em]">Expert Tip</span>
                </div>
                <p className="font-sans text-sm italic leading-[1.65] text-[#d5c4ab]">
                  “The most successful projects start with clear visual anchors. Providing a Figma link or high-fidelity style guide allows our architectural phase to move 40% faster.”
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex size-8 items-center justify-center rounded-xl bg-brand-card font-sans text-[11px] font-bold text-brand-text-bright">EV</div>
                  <div>
                    <p className="font-sans text-[11px] font-bold text-brand-text">Elena Vance</p>
                    <p className="font-sans text-[10px] text-[#d5c4ab]/60">Lead Architect</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-lg border border-brand-border-subtle bg-[#0e0e0e] py-0 shadow-none ring-0">
              <CardContent className="space-y-3 px-8 py-6">
                <div className="flex items-center gap-4">
                  <span className="relative flex size-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ffb4a4] opacity-50" />
                    <span className="relative inline-flex size-3 rounded-full bg-[#ffb4a4]" />
                  </span>
                  <p className="font-sans text-[10px] font-bold uppercase tracking-[0.1em] text-[#d5c4ab]">AI assistant analyzing requirements...</p>
                </div>
                {savedDraft ? <p className="font-sans text-xs text-brand-amber">Draft saved locally for this session.</p> : null}
                {submitted ? <p className="font-sans text-xs text-brand-amber">Project intake moved forward to review state.</p> : null}
              </CardContent>
            </Card>
          </aside>
        </section>
      </div>
    </PortalDashboardShell>
  )
}
