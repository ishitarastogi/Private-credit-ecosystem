import { ResourceLibrary } from "@/components/learn/resources/ResourceLibrary";
import { resources } from "@/data/learn/resources";

export default function ResourcesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 lg:px-10">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Learn · 09 · Reference
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-normal text-foreground sm:text-[2.25rem]">
          Resources
        </h1>
        <p className="mt-3 text-sm leading-6 text-muted">
          A curated research library, not a link dump — primary sources, protocol
          research, and practitioner analysis, organized by what they teach.
        </p>
      </header>

      <div className="mt-8">
        <ResourceLibrary resources={resources} />
      </div>
    </div>
  );
}
