import { GlossarySearch } from "@/components/learn/glossary/GlossarySearch";
import { glossary } from "@/data/learn/glossary";

export default function GlossaryPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 lg:px-10">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Learn · 09 · Reference
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-normal text-foreground sm:text-[2.25rem]">
          Glossary
        </h1>
        <p className="mt-3 text-sm leading-6 text-muted">
          Short, practical definitions for every term used across the Learn section.
        </p>
      </header>

      <div className="mt-8">
        <GlossarySearch entries={glossary} />
      </div>
    </div>
  );
}
