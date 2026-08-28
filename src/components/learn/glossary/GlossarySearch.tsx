"use client";

import { useMemo, useState } from "react";
import { GlossaryEntryCard } from "@/components/learn/glossary/GlossaryEntryCard";
import type { GlossaryEntry } from "@/data/learn/types";

type GlossarySearchProps = {
  entries: GlossaryEntry[];
};

export function GlossarySearch({ entries }: GlossarySearchProps) {
  const [query, setQuery] = useState("");
  const bySlug = useMemo(() => new Map(entries.map((entry) => [entry.slug, entry])), [entries]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return entries;
    return entries.filter(
      (entry) =>
        entry.term.toLowerCase().includes(q) || entry.definition.toLowerCase().includes(q),
    );
  }, [entries, query]);

  const handleSelectRelated = (slug: string) => {
    setQuery("");
    requestAnimationFrame(() => {
      document.getElementById(slug)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <div>
      <label className="sr-only" htmlFor="glossary-search">
        Search glossary
      </label>
      <input
        id="glossary-search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search terms or definitions..."
        className="h-11 w-full rounded-md border border-line bg-white px-4 text-sm text-foreground outline-none transition-colors placeholder:text-zinc-400 focus:border-accent"
      />

      <p className="mt-3 text-xs text-muted">
        Showing {filtered.length} of {entries.length} terms
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {filtered.map((entry) => (
          <GlossaryEntryCard
            key={entry.slug}
            entry={entry}
            relatedEntries={entry.related
              .map((slug) => bySlug.get(slug))
              .filter((related): related is GlossaryEntry => Boolean(related))}
            onSelectRelated={handleSelectRelated}
          />
        ))}
        {filtered.length === 0 && (
          <p className="col-span-full py-10 text-center text-sm text-muted">
            No terms match &ldquo;{query}&rdquo;.
          </p>
        )}
      </div>
    </div>
  );
}
