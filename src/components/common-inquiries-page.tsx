import { LegalDocShell } from "@/components/legal-doc-shell"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

type FaqId = "beta-api" | "transfer" | "rate-limit" | "2fa" | "overages"

const generalItems: {
  id: FaqId
  question: string
  answer: string
}[] = [
  {
    id: "beta-api",
    question: "How do I access the beta API endpoint?",
    answer:
      "Open the developer dashboard, go to API → Environments, and enable the Beta channel toggle for your organization. Connection strings and hostnames for beta endpoints appear in the key detail panel after you rotate or create a key.",
  },
  {
    id: "transfer",
    question: "Can I transfer my project between organizations?",
    answer:
      "Yes. Project transfers require Owner permissions on both the source and destination organizations. The process takes approximately 10 minutes to propagate across all edge nodes.",
  },
  {
    id: "rate-limit",
    question: "What is the rate limit for Architectural Ledger APIs?",
    answer:
      "Standard plans include 1,200 requests per minute per API key with short burst capacity to 2,400 RPM. Enterprise tiers support negotiated limits; your contract appendix lists the exact figures for your workspace.",
  },
]

const securityItems: { id: FaqId; question: string; answer: string }[] = [
  {
    id: "2fa",
    question: "Is 2FA mandatory for all portal members?",
    answer:
      "Yes. Organization Owners and Admins must enroll in two-factor authentication before additional seats can be invited. Members inherit the organization policy; read-only auditors may use SSO-backed policies where configured.",
  },
  {
    id: "overages",
    question: "How are overages calculated for monthly usage?",
    answer:
      "Usage above included monthly credits is billed in arrears at your plan’s per-million-request rate. The Billing → Usage view shows daily curves and projected invoice lines; spikes are smoothed with a 24-hour rolling window.",
  },
]

function InquiryAccordion({ items, defaultValue }: { items: { id: FaqId; question: string; answer: string }[]; defaultValue: FaqId }) {
  return (
    <Accordion type="single" collapsible defaultValue={defaultValue} className="w-full space-y-3 sm:space-y-4">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          value={item.id}
          className="group relative before:absolute before:inset-y-0 before:left-0 before:w-1 before:bg-[#ffdba0] before:opacity-0 before:transition-opacity before:duration-300 data-[state=open]:before:opacity-100"
        >
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>
            <p className="font-sans text-[15px] font-light leading-[26px] text-[#d5c4ab] sm:text-base">{item.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export function CommonInquiriesPage() {
  return (
    <LegalDocShell activeHref="/common-inquiries">
      <div className="mb-16 flex w-full max-w-[980px] flex-col gap-12 sm:mb-20 sm:gap-16 lg:gap-20">
        <header className="flex min-w-0 flex-col gap-5">
          <div className="flex items-center gap-2">
            <span className="h-px w-12 shrink-0 bg-[#ffdba0]" aria-hidden />
            <span className="font-display text-xs font-bold uppercase tracking-[1.2px] text-[#ffdba0]">HELP CENTER</span>
          </div>
          <h1 className="font-display font-bold leading-none tracking-[-0.05em] text-[#e5e2e1] text-5xl md:text-7xl lg:text-[96px] lg:leading-[96px] lg:tracking-[-4.8px]">
            Common <span className="text-[#ffb700]">Inquiries</span>
          </h1>
          <p className="max-w-[680px] font-sans text-sm leading-6 text-[#d5c4ab] sm:text-base sm:leading-7">
            Find quick answers for onboarding, authentication policy, API usage, and billing operations across your workspace.
          </p>
        </header>

        <div className="flex w-full flex-col gap-12 sm:gap-14 lg:gap-16">
          <section className="flex min-w-0 flex-col gap-5 sm:gap-6">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <h2 className="font-display text-lg font-bold uppercase tracking-[-0.6px] text-[#e5e2e1] sm:text-2xl">GENERAL PORTAL USE</h2>
              <span className="size-2 shrink-0 rounded-[12px] bg-[#ffdba0]" aria-hidden />
            </div>
            <InquiryAccordion items={generalItems} defaultValue="transfer" />
          </section>

          <section className="flex min-w-0 flex-col gap-5 sm:gap-6">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <h2 className="font-display text-lg font-bold uppercase tracking-[-0.6px] text-[#e5e2e1] sm:text-2xl">SECURITY & BILLING</h2>
              <span className="size-2 shrink-0 rounded-[12px] bg-[#ffb4a4]" aria-hidden />
            </div>
            <InquiryAccordion items={securityItems} defaultValue="2fa" />
          </section>
        </div>
      </div>
    </LegalDocShell>
  )
}
