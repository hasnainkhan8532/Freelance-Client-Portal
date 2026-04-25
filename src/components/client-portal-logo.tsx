import { cn } from "@/lib/utils"

/** Inline mark next to “Client Portal” — uses `public/favicon.svg`. */
export function ClientPortalLogo({
  className,
}: {
  className?: string
}) {
  return (
    <div
      className={cn("relative flex h-8 shrink-0 items-center", className)}
      aria-hidden
    >
      <img
        src="/favicon.svg"
        alt=""
        className="h-full w-auto max-h-8 object-contain"
        width={39}
        height={45}
        decoding="async"
      />
    </div>
  )
}
