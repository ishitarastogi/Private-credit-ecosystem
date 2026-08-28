import type { ReactNode } from "react";
import type { Module } from "@/data/learn/types";

type ModuleSectionProps = {
  module: Module;
  children: ReactNode;
};

export function ModuleSection({ module, children }: ModuleSectionProps) {
  return (
    <div className="border-b border-line py-8 first:pt-0 last:border-b-0">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-xs text-accent">
          {String(module.index).padStart(2, "0")}
        </span>
        <h2 className="text-sm font-semibold uppercase tracking-[0.08em] text-foreground">
          {module.title}
        </h2>
      </div>
      <p className="mt-1.5 max-w-xl text-xs leading-5 text-muted">{module.description}</p>
      <div className="mt-5">{children}</div>
    </div>
  );
}
