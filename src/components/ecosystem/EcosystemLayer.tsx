import { ProjectCard } from "@/components/ecosystem/ProjectCard";
import type { EcosystemLayerMeta, Project } from "@/data/projects";

type EcosystemLayerProps = {
  index: number;
  layer: EcosystemLayerMeta;
  projects: readonly Project[];
};

export function EcosystemLayer({
  index,
  layer,
  projects,
}: EcosystemLayerProps) {
  return (
    <div className="border-b border-line last:border-b-0">
      <div className="grid gap-5 px-4 py-6 sm:px-6 lg:grid-cols-[220px_1fr]">
        <div>
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-xs text-accent">
              {String(index).padStart(2, "0")}
            </span>
            <h2 className="text-sm font-semibold uppercase text-foreground">
              {layer.name}
            </h2>
          </div>
          <p className="mt-2 text-xs leading-5 text-muted">{layer.description}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          {projects.length > 0 ? (
            projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <p className="text-sm text-zinc-400">
              No projects in this mock layer yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
