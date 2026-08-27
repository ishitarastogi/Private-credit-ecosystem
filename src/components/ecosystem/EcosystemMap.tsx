import { EcosystemLayer } from "@/components/ecosystem/EcosystemLayer";
import type { EcosystemLayerMeta, Project } from "@/data/projects";

type EcosystemMapProps = {
  layers: readonly EcosystemLayerMeta[];
  projects: readonly Project[];
  selectedProjectId: string | null;
  onSelectProject: (projectId: string) => void;
};

export function EcosystemMap({
  layers,
  projects,
  selectedProjectId,
  onSelectProject,
}: EcosystemMapProps) {
  const projectsByLayer = new Map(
    layers.map((layer) => [
      layer.name,
      projects.filter((project) => project.layer === layer.name),
    ]),
  );

  return (
    <section aria-label="Onchain private credit ecosystem layers">
      {layers.map((layer, index) => (
        <EcosystemLayer
          key={layer.key}
          index={index + 1}
          layer={layer}
          projects={projectsByLayer.get(layer.name) ?? []}
          selectedProjectId={selectedProjectId}
          onSelectProject={onSelectProject}
        />
      ))}
    </section>
  );
}
