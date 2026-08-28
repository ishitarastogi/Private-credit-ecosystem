import type { GlossaryEntry } from "@/data/learn/types";

type GlossaryEntryCardProps = {
  entry: GlossaryEntry;
  relatedEntries: GlossaryEntry[];
  onSelectRelated: (slug: string) => void;
};

export function GlossaryEntryCard({ entry, relatedEntries, onSelectRelated }: GlossaryEntryCardProps) {
  return (
    <div id={entry.slug} className="rounded-md border border-line bg-white p-5 scroll-mt-24">
      <h3 className="text-sm font-semibold text-foreground">{entry.term}</h3>
      <p className="mt-1.5 text-sm leading-6 text-muted">{entry.definition}</p>
      <p className="mt-2.5 text-xs leading-5 text-muted">
        <span className="font-medium text-foreground">Why it matters — </span>
        {entry.whyItMatters}
      </p>
      {relatedEntries.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {relatedEntries.map((related) => (
            <button
              key={related.slug}
              type="button"
              onClick={() => onSelectRelated(related.slug)}
              className="rounded-md border border-line px-2 py-0.5 text-[11px] text-muted transition-colors hover:border-accent hover:text-foreground"
            >
              {related.term}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
