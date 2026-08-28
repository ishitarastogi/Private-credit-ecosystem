import { EcosystemLayer } from "@/components/ecosystem/EcosystemLayer";
import type { LayerMeta, Project } from "@/data/projects";

type EcosystemMapProps = {
  layers: readonly LayerMeta[];
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
      layer.key,
      projects.filter((project) => project.primaryLayer === layer.key),
    ]),
  );

  return (
    <section aria-label="Onchain private credit ecosystem layers">
      {layers.map((layer) => (
        <EcosystemLayer
          key={layer.key}
          index={layer.layerNo}
          layer={layer}
          projects={projectsByLayer.get(layer.key) ?? []}
          selectedProjectId={selectedProjectId}
          onSelectProject={onSelectProject}
        />
      ))}
    </section>
  );
}
