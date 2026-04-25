import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { Plus } from "lucide-react"

import { cn } from "@/lib/utils"

export function Accordion(props: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

export function AccordionItem({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "w-full overflow-hidden rounded-xl border border-[rgba(255,251,247,0.05)] bg-[#171616] transition-all duration-300",
        "data-[state=open]:border-[rgba(255,219,160,0.22)] data-[state=open]:bg-[#1f1e1d]",
        className
      )}
      {...props}
    />
  )
}

export function AccordionTrigger({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group flex flex-1 items-start justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5",
          "font-sans text-base font-medium leading-7 text-[#e5e2e1] sm:text-lg",
          "transition-colors hover:text-[#fffbf7]",
          className
        )}
        {...props}
      >
        <span className="min-w-0 flex-1">{children}</span>
        <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md bg-white/[0.03] text-[#e5e2e1] transition-colors group-hover:bg-white/[0.08] group-hover:text-[#fffbf7]">
          <Plus className="size-[14px] transition-transform duration-300 group-data-[state=open]:rotate-45" strokeWidth={2} />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

export function AccordionContent({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={cn(
        "overflow-hidden text-sm",
        "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        className
      )}
      {...props}
    >
      <div className="px-5 pb-5 pt-0 sm:px-6 sm:pb-6">{children}</div>
    </AccordionPrimitive.Content>
  )
}
