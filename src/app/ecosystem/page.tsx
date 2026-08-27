import { EcosystemMap } from "@/components/ecosystem/EcosystemMap";
import { ecosystemLayers, projects } from "@/data/projects";

export default function EcosystemPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
      <header className="max-w-3xl pb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Onchain Private Credit
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-normal text-foreground sm:text-5xl">
          Ecosystem map
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
          A structured research view of originators, tokenization rails, credit
          managers, protocols, venues, and supporting infrastructure.
        </p>
      </header>

      <EcosystemMap layers={ecosystemLayers} projects={projects} />
    </div>
  );
}
