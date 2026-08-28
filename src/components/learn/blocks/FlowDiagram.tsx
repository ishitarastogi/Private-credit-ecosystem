import type { FlowStep } from "@/data/learn/types";

type FlowDiagramProps = {
  title?: string;
  orientation?: "horizontal" | "vertical";
  steps: FlowStep[];
  showZoneLegend?: boolean;
};

const zoneStyles: Record<NonNullable<FlowStep["zone"]>, string> = {
  onchain: "border-accent/40 bg-accent/[0.05]",
  offchain: "border-zinc-300 bg-zinc-50",
  neutral: "border-line bg-white",
};

export function FlowDiagram({
  title,
  orientation = "horizontal",
  steps,
  showZoneLegend,
}: FlowDiagramProps) {
  const arrow = orientation === "horizontal" ? "→" : "↓";
  const hasZones = steps.some((step) => step.zone);

  return (
    <div className="rounded-md border border-line bg-white p-5">
      {title && (
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-400">
          {title}
        </p>
      )}
      <div
        className={`${title ? "mt-4" : ""} flex ${
          orientation === "horizontal"
            ? "flex-wrap items-stretch gap-x-2 gap-y-4"
            : "flex-col items-stretch gap-1"
        }`}
      >
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={
              orientation === "horizontal"
                ? "flex items-center gap-2"
                : "flex flex-col items-stretch gap-1"
            }
          >
            <div
              className={`min-w-32 flex-1 rounded-md border px-3 py-2.5 text-center ${
                zoneStyles[step.zone ?? "neutral"]
              }`}
            >
              <p className="text-sm font-medium text-foreground">{step.label}</p>
              {step.detail && (
                <p className="mt-0.5 text-xs leading-4 text-muted">{step.detail}</p>
              )}
            </div>
            {index < steps.length - 1 && (
              <span
                aria-hidden="true"
                className={
                  orientation === "horizontal"
                    ? "text-sm text-zinc-400"
                    : "self-center text-sm text-zinc-400"
                }
              >
                {arrow}
              </span>
            )}
          </div>
        ))}
      </div>
      {showZoneLegend && hasZones && (
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 border-t border-line pt-3">
          <LegendItem swatchClass="border-accent/40 bg-accent/[0.05]" label="Onchain" />
          <LegendItem swatchClass="border-zinc-300 bg-zinc-50" label="Offchain" />
        </div>
      )}
    </div>
  );
}

function LegendItem({ swatchClass, label }: { swatchClass: string; label: string }) {
  return (
    <span className="flex items-center gap-1.5 text-[11px] text-muted">
      <span aria-hidden="true" className={`h-2.5 w-2.5 rounded-sm border ${swatchClass}`} />
      {label}
    </span>
  );
}
