"use client";

import { useState } from "react";
import { EcosystemMap } from "@/components/ecosystem/EcosystemMap";
import { ProjectDrawer } from "@/components/ecosystem/ProjectDrawer";
import type { Asset } from "@/data/assets";
import type { EcosystemLayerMeta, Project } from "@/data/projects";
import type { Relationship } from "@/data/relationships";

type EcosystemExperienceProps = {
  assets: readonly Asset[];
  layers: readonly EcosystemLayerMeta[];
  projects: readonly Project[];
  relationships: readonly Relationship[];
};

export function EcosystemExperience({
  assets,
  layers,
  projects,
  relationships,
}: EcosystemExperienceProps) {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null,
  );
  const selectedProject =
    projects.find((project) => project.id === selectedProjectId) ?? null;

  return (
    <>
      <EcosystemMap
        layers={layers}
        projects={projects}
        selectedProjectId={selectedProjectId}
        onSelectProject={setSelectedProjectId}
      />
      <ProjectDrawer
        assets={assets}
        project={selectedProject}
        projects={projects}
        relationships={relationships}
        onClose={() => setSelectedProjectId(null)}
      />
    </>
  );
}
