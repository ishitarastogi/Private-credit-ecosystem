"use client";

import { useState } from "react";
import { EcosystemMap } from "@/components/ecosystem/EcosystemMap";
import { ProjectDrawer } from "@/components/ecosystem/ProjectDrawer";
import type { Asset } from "@/data/assets";
import type { LayerMeta, Project } from "@/data/projects";

type EcosystemExperienceProps = {
  assets: readonly Asset[];
  layers: readonly LayerMeta[];
  projects: readonly Project[];
};

export function EcosystemExperience({
  assets,
  layers,
  projects,
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
        layers={layers}
        project={selectedProject}
        onClose={() => setSelectedProjectId(null)}
      />
    </>
  );
}
