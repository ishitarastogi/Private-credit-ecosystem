import type { ResourceEntry } from "@/data/learn/types";

type ResourceCardProps = {
  resource: ResourceEntry;
};

export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <div className="rounded-md border border-line bg-white p-5">
      <div className="flex items-start justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-accent">
          {resource.type}
        </p>
        {resource.pending && (
          <span className="shrink-0 rounded-full border border-amber-300 bg-amber-50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-amber-900">
            Link pending
          </span>
        )}
      </div>
      <h3 className="mt-2 text-sm font-semibold text-foreground">{resource.title}</h3>
      <p className="mt-1 text-xs text-muted">
        {resource.author}
        {resource.date && ` · ${resource.date}`}
      </p>
      <p className="mt-3 text-sm leading-6 text-muted">{resource.whyItMatters}</p>
      <div className="mt-4">
        {resource.url ? (
          <a
            href={resource.url}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-accent underline-offset-4 hover:underline"
          >
            Read it ↗
          </a>
        ) : (
          <span className="text-sm text-zinc-400">Link coming soon</span>
        )}
      </div>
    </div>
  );
}
