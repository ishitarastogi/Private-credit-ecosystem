import { ProjectCard } from "@/components/ecosystem/ProjectCard";
import type { LayerMeta, Project } from "@/data/projects";

type EcosystemLayerProps = {
  index: number;
  layer: LayerMeta;
  projects: readonly Project[];
  selectedProjectId: string | null;
  onSelectProject: (projectId: string) => void;
};

export function EcosystemLayer({
  index,
  layer,
  projects,
  selectedProjectId,
  onSelectProject,
}: EcosystemLayerProps) {
  return (
    <div className="border-b border-line py-7 first:pt-0 last:border-b-0">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-xs text-accent">
          {String(index).padStart(2, "0")}
        </span>
        <h2 className="text-sm font-semibold uppercase tracking-[0.08em] text-foreground">
          {layer.name}
        </h2>
      </div>
      <p className="mt-1.5 max-w-xl text-xs leading-5 text-muted">
        {layer.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-3">
        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isSelected={project.id === selectedProjectId}
              onSelect={onSelectProject}
            />
          ))
        ) : (
          <p className="text-sm text-zinc-400">
            No projects recorded in this layer yet.
          </p>
        )}
      </div>
    </div>
  );
}
