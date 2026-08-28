"use client";

import { useState } from "react";
import { FlowDiagram } from "@/components/learn/blocks/FlowDiagram";
import type { FlowStep } from "@/data/learn/types";

type Role = { id: string; name: string; description: string; onchain: boolean };

type MoneyFlowRoleDiagramProps = {
  steps: FlowStep[];
  roles: Role[];
};

export function MoneyFlowRoleDiagram({ steps, roles }: MoneyFlowRoleDiagramProps) {
  const [selectedId, setSelectedId] = useState(roles[0]?.id ?? null);
  const selected = roles.find((role) => role.id === selectedId) ?? null;

  return (
    <div className="space-y-4">
      <FlowDiagram orientation="vertical" steps={steps} showZoneLegend />

      <div className="rounded-md border border-line bg-white p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-400">
          Who actually does what?
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {roles.map((role) => (
            <button
              key={role.id}
              type="button"
              onClick={() => setSelectedId(role.id)}
              aria-pressed={selectedId === role.id}
              className={`rounded-md border px-3 py-1.5 text-xs font-medium transition-colors ${
                selectedId === role.id
                  ? "border-accent bg-accent/[0.06] text-foreground"
                  : "border-line text-muted hover:border-accent/50"
              }`}
            >
              {role.name}
            </button>
          ))}
        </div>

        {selected && (
          <div className="mt-4 rounded-md border border-line bg-background p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-foreground">{selected.name}</p>
              <span
                className={`rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${
                  selected.onchain
                    ? "border-accent/40 bg-accent/[0.06] text-accent"
                    : "border-zinc-300 bg-zinc-50 text-zinc-500"
                }`}
              >
                {selected.onchain ? "Onchain" : "Offchain"}
              </span>
            </div>
            <p className="mt-2 text-sm leading-6 text-muted">{selected.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
