import { EcosystemExperience } from "@/components/ecosystem/EcosystemExperience";
import { assets } from "@/data/assets";
import { ecosystemLayers, projects } from "@/data/projects";

export default function EcosystemPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 lg:px-10">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Onchain Private Credit
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-normal text-foreground sm:text-[2.25rem]">
          The Private Credit Ecosystem
        </h1>
        <p className="mt-3 text-sm leading-6 text-muted">
          Explore the companies, assets and infrastructure that bring private
          credit onchain.
        </p>

        <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
          <Stat value={projects.length} label="tracked projects" />
          <Stat value={ecosystemLayers.length} label="layers" />
          <Stat value={assets.length} label="tracked products" />
        </dl>
      </header>

      <div className="mt-10">
        <EcosystemExperience
          assets={assets}
          layers={ecosystemLayers}
          projects={projects}
        />
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex items-baseline gap-1.5">
      <dt className="text-sm font-semibold text-foreground">{value}</dt>
      <dd className="text-xs text-muted">{label}</dd>
    </div>
  );
}
