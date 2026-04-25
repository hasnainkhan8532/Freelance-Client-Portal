import * as React from "react"
import { ChevronRight, Eye, EyeOff } from "lucide-react"

import {
  AuthFormField,
  authFormInputClassName,
  authFormInputPasswordClassName,
} from "@/components/auth-form-field"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { PortalSiteFooter } from "@/components/portal-site-footer"
import { PortalSiteHeader } from "@/components/portal-site-header"
import { cn } from "@/lib/utils"

export function SignInPage() {
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
      <PortalSiteHeader />

      <main className="relative z-10 flex w-full flex-1 flex-col items-center justify-center px-4 py-10 sm:py-16 md:py-24">
        <div className="flex w-full max-w-[448px] flex-col gap-8">
          <Card
            className={cn(
              "relative gap-10 overflow-visible rounded-lg border border-brand-border-subtle bg-brand-card/95 py-10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] backdrop-blur-[2px]",
              "ring-0 ring-transparent"
            )}
          >
            <div
              className="pointer-events-none absolute inset-[-1px] rounded-lg shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]"
              aria-hidden
            />
            <CardHeader
              className="animate-auth-field gap-2 px-6 pb-0 pt-0 text-center sm:px-10"
              style={{ animationDelay: "0ms" }}
            >
              <CardTitle className="font-display text-3xl font-bold tracking-[-0.05em] text-brand-text sm:text-4xl">
                Sign In
              </CardTitle>
              <CardDescription className="auth-eyebrow text-brand-muted">
              HASNAINAYAZ.COM
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-8 px-6 sm:px-10">
              <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-8">
                  <AuthFormField id="email" label="Email address" delay={80}>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className={authFormInputClassName}
                    />
                  </AuthFormField>
                  <AuthFormField
                    id="password"
                    label="Security password"
                    delay={150}
                  >
                    <div className="relative flex min-h-9 items-center">
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
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
                          <EyeOff
                            className="size-4 transition-opacity duration-200"
                            strokeWidth={1.75}
                          />
                        ) : (
                          <Eye
                            className="size-4 transition-opacity duration-200"
                            strokeWidth={1.75}
                          />
                        )}
                      </button>
                    </div>
                  </AuthFormField>
                </div>

                <div
                  className="animate-auth-field flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between sm:gap-2"
                  style={{ animationDelay: "220ms" }}
                >
                  <a
                    href="/forgot-password"
                    className="auth-footer-text text-center text-[10px] text-brand-muted underline-offset-4 transition-[color,transform] duration-200 hover:text-brand-text sm:text-left"
                  >
                    Forgot password?
                  </a>
                  <a
                    href="/register"
                    className="auth-footer-text text-center text-[10px] text-brand-muted underline-offset-4 transition-[color,transform] duration-200 hover:text-brand-text sm:text-right"
                  >
                    Create an account
                  </a>
                </div>

                <div
                  className="animate-auth-field flex justify-center"
                  style={{ animationDelay: "280ms" }}
                >
                  <Button
                    type="submit"
                    className={cn(
                      "group font-display relative h-auto w-full max-w-[318px] gap-2 overflow-hidden rounded-lg border-0 bg-brand-amber px-6 py-4 text-base font-bold text-brand-amber-foreground shadow-none",
                      "transition-[transform,filter,background-color] duration-200 hover:bg-brand-amber-hover focus-visible:ring-2 focus-visible:ring-brand-amber/50",
                      "active:scale-[0.98]"
                    )}
                  >
                    <span className="relative z-10">Authenticate System</span>
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
              </form>
            </CardContent>
          </Card>

          <div
            className="animate-auth-field flex justify-center px-1"
            style={{ animationDelay: "340ms" }}
          >
            <div className="inline-flex items-center gap-2 rounded-xl border border-[rgba(81,69,50,0.05)] bg-[rgba(23,23,23,0.5)] px-4 py-2 transition-[border-color,box-shadow] duration-300 hover:border-brand-amber/15">
              <span
                className="size-2 shrink-0 animate-pulse rounded-full bg-brand-amber shadow-[0_0_10px_0_var(--color-brand-amber)]"
                aria-hidden
              />
              <p className="auth-status-text text-center text-brand-muted">
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
