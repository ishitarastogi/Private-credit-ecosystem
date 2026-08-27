import { DatabaseFilters } from "@/components/database/DatabaseFilters";
import { DatabaseTable } from "@/components/database/DatabaseTable";
import { assets } from "@/data/assets";
import { ecosystemLayers, projects } from "@/data/projects";

export default function DatabasePage() {
  const chains = [...new Set(projects.flatMap((project) => project.chains))].sort();
  const statuses = [...new Set(projects.map((project) => project.status))].sort();
  const assetTypes = [...new Set(assets.map((asset) => asset.type))].sort();

  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
      <header className="border-b border-line pb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Private Credit Database
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">
          Projects, assets, chains, and relationships
        </h1>
      </header>

      <section className="mt-8 space-y-6">
        <DatabaseFilters
          assetTypes={assetTypes}
          chains={chains}
          layers={ecosystemLayers.map((layer) => layer.name)}
          statuses={statuses}
        />
        <DatabaseTable assets={assets} projects={projects} />
      </section>
    </div>
  );
}
