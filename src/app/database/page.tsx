import { DatabaseExplorer } from "@/components/database/DatabaseExplorer";
import { assets } from "@/data/assets";
import { ecosystemLayers, projects } from "@/data/projects";

export default function DatabasePage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
      <header className="border-b border-line pb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Private Credit Database
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">
          Projects, products, and status across the stack
        </h1>
      </header>

      <section className="mt-8">
        <DatabaseExplorer assets={assets} projects={projects} layers={ecosystemLayers} />
      </section>
    </div>
  );
}
