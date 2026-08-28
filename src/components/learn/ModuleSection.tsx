import type { ReactNode } from "react";
import Link from "next/link";
import type { Module } from "@/data/learn/types";

type ModuleSectionProps = {
  module: Module;
  children: ReactNode;
};

export function ModuleSection({ module, children }: ModuleSectionProps) {
  return (
    <div id={module.key} className="scroll-mt-20 border-b border-line py-8 first:pt-0 last:border-b-0">
      <div className="flex items-baseline justify-between gap-3">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-xs text-accent">
            {String(module.index).padStart(2, "0")}
          </span>
          <h2 className="text-sm font-semibold uppercase tracking-[0.08em] text-foreground">
            {module.title}
          </h2>
        </div>
        {module.kind === "lessons" && module.href && (
          <Link
            href={module.href}
            className="text-xs font-medium text-accent underline-offset-4 hover:underline"
          >
            View module →
          </Link>
        )}
      </div>
      <p className="mt-1.5 max-w-xl text-xs leading-5 text-muted">{module.description}</p>
      <div className="mt-5">{children}</div>
    </div>
  );
}
