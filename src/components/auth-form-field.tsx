import * as React from "react"

import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

/** Matches sign-in form: Inter body, compact height, padding (colors from `auth-form-input`) */
export const authFormInputClassName = cn(
  "auth-form-input h-9 rounded-none border-0 bg-transparent pl-2 pr-2 shadow-none transition-[color,filter] duration-300 focus-visible:ring-0 md:text-sm"
)

export const authFormInputPasswordClassName = cn(
  authFormInputClassName,
  "flex-1 pr-10"
)

export function AuthFormField({
  id,
  label,
  delay,
  children,
}: {
  id: string
  label: string
  delay: number
  children: React.ReactNode
}) {
  return (
    <div
      className="group/field animate-auth-field pt-1"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Label htmlFor={id} className="auth-form-label mb-2 block">
        {label}
      </Label>
      <div className="relative">
        {children}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-brand-line"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-px origin-left scale-x-0 transform-gpu bg-brand-amber shadow-[0_0_12px_rgba(255,183,0,0.35)] transition-transform duration-300 ease-out group-focus-within/field:scale-x-100"
          aria-hidden
        />
      </div>
    </div>
  )
}
