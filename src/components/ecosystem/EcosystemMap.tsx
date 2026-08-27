import { EcosystemLayer } from "@/components/ecosystem/EcosystemLayer";
import type { EcosystemLayerMeta, Project } from "@/data/projects";

type EcosystemMapProps = {
  layers: readonly EcosystemLayerMeta[];
  projects: readonly Project[];
};

export function EcosystemMap({ layers, projects }: EcosystemMapProps) {
  const projectsByLayer = new Map(
    layers.map((layer) => [
      layer.name,
      projects.filter((project) => project.layer === layer.name),
    ]),
  );

  return (
    <section
      aria-label="Onchain private credit ecosystem layers"
      className="border-y border-line bg-white"
    >
      {layers.map((layer, index) => (
        <EcosystemLayer
          key={layer.key}
          index={index + 1}
          layer={layer}
          projects={projectsByLayer.get(layer.name) ?? []}
        />
      ))}
    </section>
  );
}
