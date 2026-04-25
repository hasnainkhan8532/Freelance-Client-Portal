import * as React from "react"
import { ChevronRight, Eye, EyeOff } from "lucide-react"

import {
  AuthFormField,
  authFormInputClassName,
  authFormInputPasswordClassName,
} from "@/components/auth-form-field"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { PortalSiteFooter } from "@/components/portal-site-footer"
import { PortalSiteHeader } from "@/components/portal-site-header"
import { cn } from "@/lib/utils"

const imgFeatureLayer = "/icons/architecture.svg"
const imgFeatureTelemetry = "/icons/realtime-monitor.svg"

export function CreateAccountPage() {
  const [showPassword, setShowPassword] = React.useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <div
      className={cn(
        "relative flex min-h-svh w-full flex-col overflow-x-hidden bg-transparent text-brand-text",
        "font-sans antialiased"
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(255, 255, 255, 0.05) 2.5%, rgba(255, 255, 255, 0) 2.5%), linear-gradient(180deg, rgba(255, 255, 255, 0.05) 2.5%, rgba(255, 255, 255, 0) 2.5%)",
          }}
        />
        <div
          className="pointer-events-none absolute -top-[300px] -right-[150px] size-[600px] rounded-xl bg-[rgba(255,183,0,0.05)] blur-[60px]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_70%_15%,transparent_10%,rgba(19,19,19,0.88)_70%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/80"
          aria-hidden
        />
      </div>

      <PortalSiteHeader />

      <main className="relative z-10 flex w-full flex-1 flex-col justify-center px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-[4.5rem]">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10 sm:gap-12">
          <div className="flex w-full flex-col gap-12 lg:flex-row lg:items-center lg:justify-center lg:gap-16 xl:gap-20">
          <section className="w-full max-w-[576px] lg:min-w-0 lg:flex-1">
            <div className="flex flex-col gap-8 sm:gap-10">
              <div
                className="animate-auth-field flex flex-col gap-4"
                style={{ animationDelay: "80ms" }}
              >
                <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-[-0.05em] text-brand-text sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:leading-[1.08]">
                  <span className="block">Create Your</span>
                  <span className="block text-brand-amber">Account</span>
                </h1>
                <p className="auth-eyebrow max-w-xl text-brand-muted sm:text-sm">
                  Access the architectural ledger
                </p>
              </div>

              <div className="flex flex-col gap-6 pt-2 sm:gap-8 sm:pt-4">
                <div
                  className="group animate-auth-field flex gap-4"
                  style={{ animationDelay: "140ms" }}
                >
                  <div className="relative mt-1 h-[22px] w-[11px] shrink-0">
                    <img
                      src={imgFeatureLayer}
                      alt=""
                      className="absolute inset-0 size-full max-w-none object-contain transition-[filter,opacity] duration-200 group-hover:opacity-70 group-hover:grayscale"
                      width={11}
                      height={22}
                    />
                  </div>
                  <div className="min-w-0 space-y-1">
                    <h2 className="font-display text-lg font-bold leading-7 text-brand-text">
                      Architectural layering
                    </h2>
                    <p className="max-w-[320px] font-sans text-sm leading-relaxed text-brand-text/85">
                      Manage complex project hierarchies with our proprietary
                      nested surface philosophy.
                    </p>
                  </div>
                </div>
                <div
                  className="group animate-auth-field flex gap-4"
                  style={{ animationDelay: "200ms" }}
                >
                  <div className="relative mt-1 h-[21px] w-[17px] shrink-0">
                    <img
                      src={imgFeatureTelemetry}
                      alt=""
                      className="absolute inset-0 size-full max-w-none object-contain transition-[filter,opacity] duration-200 group-hover:opacity-70 group-hover:grayscale"
                      width={17}
                      height={21}
                    />
                  </div>
                  <div className="min-w-0 space-y-1">
                    <h2 className="font-display text-lg font-bold leading-7 text-brand-text">
                      Real-time telemetry
                    </h2>
                    <p className="max-w-[320px] font-sans text-sm leading-relaxed text-brand-text/85">
                      Monitor agency metrics and ledger balances through
                      high-performance data streams.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full max-w-[480px] shrink-0 lg:mx-0">
            <Card
              className={cn(
                "animate-auth-field relative gap-10 overflow-visible rounded-lg border border-brand-border-subtle bg-brand-card/95 py-10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] backdrop-blur-[2px]",
                "ring-0 ring-transparent"
              )}
              style={{ animationDelay: "120ms" }}
            >
              <div
                className="pointer-events-none absolute inset-[-1px] rounded-lg shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]"
                aria-hidden
              />
              <CardContent className="relative z-10 flex flex-col gap-8 px-6 sm:px-10">
                <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-8">
                    <AuthFormField
                      id="fullName"
                      label="Full name"
                      delay={180}
                    >
                      <Input
                        id="fullName"
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        placeholder="Alexander Vogel"
                        className={authFormInputClassName}
                      />
                    </AuthFormField>
                    <AuthFormField
                      id="company"
                      label="Agency / company name"
                      delay={220}
                    >
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        placeholder="Kinetic Strategies"
                        className={authFormInputClassName}
                      />
                    </AuthFormField>
                    <AuthFormField
                      id="email"
                      label="Business email"
                      delay={260}
                    >
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="a.vogel@agency.com"
                        className={authFormInputClassName}
                      />
                    </AuthFormField>
                    <AuthFormField
                      id="password"
                      label="Create security password"
                      delay={300}
                    >
                      <div className="relative flex min-h-9 items-center">
                        <Input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          autoComplete="new-password"
                          placeholder="Enter a secure password"
                          className={authFormInputPasswordClassName}
                        />
                        <button
                          type="button"
                          className="absolute right-0 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center text-brand-muted transition-colors duration-200 hover:text-brand-text"
                          onClick={() => setShowPassword((v) => !v)}
                          aria-pressed={showPassword}
                          aria-label={
                            showPassword ? "Hide password" : "Show password"
                          }
                        >
                          {showPassword ? (
                            <EyeOff className="size-4" strokeWidth={1.75} />
                          ) : (
                            <Eye className="size-4" strokeWidth={1.75} />
                          )}
                        </button>
                      </div>
                    </AuthFormField>
                  </div>

                  <div
                    className="animate-auth-field flex flex-col gap-6"
                    style={{ animationDelay: "360ms" }}
                  >
                    <div className="flex justify-center">
                      <Button
                        type="submit"
                        className={cn(
                          "group font-display relative h-auto w-full max-w-[318px] gap-2 overflow-hidden rounded-lg border-0 bg-brand-amber px-6 py-4 text-base font-bold text-brand-amber-foreground shadow-none",
                          "transition-[transform,filter,background-color] duration-200 hover:bg-brand-amber-hover focus-visible:ring-2 focus-visible:ring-brand-amber/50",
                          "active:scale-[0.98]"
                        )}
                      >
                        <span className="relative z-10">Initialize Account</span>
                        <ChevronRight
                          className="relative z-10 size-5 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1"
                          strokeWidth={2.25}
                          aria-hidden
                        />
                        <span
                          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
                          aria-hidden
                        />
                      </Button>
                    </div>
                    <p className="auth-footer-text text-center text-[10px] text-brand-muted">
                      <a
                        href="/"
                        className="transition-colors duration-200 hover:text-brand-text"
                      >
                        Login to existing account
                      </a>
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </section>
          </div>

          <div className="flex w-full justify-center">
            <div className="inline-flex items-center gap-2 rounded-xl border border-[rgba(81,69,50,0.05)] bg-[rgba(23,23,23,0.5)] px-4 py-2 transition-[border-color,box-shadow] duration-300 hover:border-brand-amber/15">
              <span
                className="size-2 shrink-0 animate-pulse rounded-full bg-brand-amber shadow-[0_0_10px_0_var(--color-brand-amber)]"
                aria-hidden
              />
              <p className="auth-status-text text-brand-muted">
                Global ledger: operational
              </p>
            </div>
          </div>
        </div>
      </main>

      <PortalSiteFooter />
    </div>
  )
}
