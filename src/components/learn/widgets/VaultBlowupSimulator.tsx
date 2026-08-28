"use client";

import { useState } from "react";
import type { FlowStep } from "@/data/learn/types";

type VaultBlowupSimulatorProps = {
  steps: (FlowStep & { consequence?: string })[];
};

export function VaultBlowupSimulator({ steps }: VaultBlowupSimulatorProps) {
  const [index, setIndex] = useState(0);
  const step = steps[index];
  const isLast = index === steps.length - 1;
  const isFirst = index === 0;

  return (
    <div className="rounded-md border border-line bg-white p-5">
      <div className="flex flex-wrap gap-1.5">
        {steps.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to step ${i + 1}`}
            aria-current={i === index}
            className={`h-1.5 flex-1 min-w-6 rounded-full transition-colors ${
              i <= index ? "bg-accent" : "bg-zinc-200"
            }`}
          />
        ))}
      </div>

      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-400">
        Step {index + 1} of {steps.length}
      </p>

      <div className="mt-2 flex items-start justify-between gap-3">
        <h4 className="text-lg font-semibold text-foreground">{step.label}</h4>
        {step.zone && step.zone !== "neutral" && (
          <span
            className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${
              step.zone === "onchain"
                ? "border-accent/40 bg-accent/[0.06] text-accent"
                : "border-zinc-300 bg-zinc-50 text-zinc-500"
            }`}
          >
            {step.zone === "onchain" ? "Onchain" : "Offchain"}
          </span>
        )}
      </div>

      {step.detail && <p className="mt-2 text-sm leading-6 text-muted">{step.detail}</p>}

      {step.consequence && (
        <p className="mt-3 rounded-md border border-line bg-background p-3 text-sm leading-6 text-foreground">
          {step.consequence}
        </p>
      )}

      <div className="mt-5 flex items-center gap-2">
        <button
          type="button"
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={isFirst}
          className="rounded-md border border-line px-3 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent disabled:cursor-not-allowed disabled:opacity-40"
        >
          Back
        </button>
        <button
          type="button"
          onClick={() => setIndex((i) => Math.min(steps.length - 1, i + 1))}
          disabled={isLast}
          className="rounded-md bg-foreground px-3 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
}
