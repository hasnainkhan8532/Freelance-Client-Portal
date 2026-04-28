import * as React from "react"
import * as RechartsPrimitive from "recharts"

import { cn } from "@/lib/utils"

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    color?: string
  }
}

const ChartContext = React.createContext<{ config: ChartConfig } | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />")
  }

  return context
}

export function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}: React.ComponentProps<"div"> & {
  config: ChartConfig
  children: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"]
}) {
  const uniqueId = React.useId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`

  return (
    <ChartContext.Provider value={{ config }}>
      <div data-slot="chart" data-chart={chartId} className={cn("flex aspect-video justify-center text-xs", className)} {...props}>
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>{children}</RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
}

function ChartStyle({ id, config }: { id: string; config: ChartConfig }) {
  const colorConfig = Object.entries(config).filter(([, itemConfig]) => itemConfig.color)

  if (!colorConfig.length) {
    return null
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(config)
          .map(([key, itemConfig]) => {
            const color = itemConfig.color
            return color ? `[data-chart=${id}] { --color-${key}: ${color}; }` : null
          })
          .join("\n"),
      }}
    />
  )
}

type ChartTooltipPayloadItem = NonNullable<RechartsPrimitive.TooltipContentProps<number, string>["payload"]>[number]

export function ChartTooltip({
  active,
  payload,
  className,
  indicator = "dot",
}: {
  active?: boolean
  payload?: ChartTooltipPayloadItem[]
  className?: string
  indicator?: "line" | "dot"
}) {
  const { config } = useChart()

  if (!active || !payload?.length) {
    return null
  }

  return (
    <div className={cn("grid min-w-[8rem] items-start gap-1.5 rounded-md border border-[rgba(255,251,247,0.08)] bg-[#1a1919] px-2.5 py-1.5 text-xs shadow-xl", className)}>
      {payload.map((item, index) => {
        const key = item.dataKey as string
        const itemConfig = config[key]

        return (
          <div key={index} className="flex w-full flex-wrap items-center gap-2">
            <span
              className={cn("shrink-0 rounded-[2px]", indicator === "dot" ? "size-2" : "h-0.5 w-3")}
              style={{ backgroundColor: item.color }}
            />
            <span className="text-[#d5c4ab]">{itemConfig?.label || key}</span>
            <span className="ml-auto font-mono text-[#fffbf7]">{item.value}</span>
          </div>
        )
      })}
    </div>
  )
}

export { RechartsPrimitive }
