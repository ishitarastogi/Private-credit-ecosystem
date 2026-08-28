"use client";

import { useMemo, useState } from "react";
import { DatabaseFilters } from "@/components/database/DatabaseFilters";
import { DatabaseTable } from "@/components/database/DatabaseTable";
import type { Asset } from "@/data/assets";
import type { LayerMeta, Project } from "@/data/projects";

type DatabaseExplorerProps = {
  assets: readonly Asset[];
  projects: readonly Project[];
  layers: readonly LayerMeta[];
};

function uniqueSorted(values: (string | undefined)[]) {
  return [...new Set(values.filter((value): value is string => Boolean(value)))].sort();
}

export function DatabaseExplorer({ assets, projects, layers }: DatabaseExplorerProps) {
  const [search, setSearch] = useState("");
  const [layer, setLayer] = useState("");
  const [status, setStatus] = useState("");
  const [access, setAccess] = useState("");
  const [assetClass, setAssetClass] = useState("");

  const projectById = useMemo(
    () => new Map(projects.map((project) => [project.id, project])),
    [projects],
  );

  const statusOptions = useMemo(
    () => uniqueSorted(assets.map((asset) => asset.status)),
    [assets],
  );
  const accessOptions = useMemo(
    () => uniqueSorted(assets.map((asset) => asset.accessModel)),
    [assets],
  );
  const assetClassOptions = useMemo(
    () => uniqueSorted(assets.map((asset) => asset.assetClass)),
    [assets],
  );
  const layerOptions = useMemo(
    () => layers.map((item) => ({ value: item.key, label: item.name })),
    [layers],
  );

  const filteredAssets = useMemo(() => {
    const query = search.trim().toLowerCase();

    return assets.filter((asset) => {
      if (layer && asset.layer !== layer) return false;
      if (status && asset.status !== status) return false;
      if (access && asset.accessModel !== access) return false;
      if (assetClass && asset.assetClass !== assetClass) return false;

      if (!query) return true;

      const project = projectById.get(asset.projectId);
      const haystack = [project?.name, asset.name, asset.ticker]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return haystack.includes(query);
    });
  }, [assets, projectById, search, layer, status, access, assetClass]);

  return (
    <div className="space-y-6">
      <DatabaseFilters
        search={search}
        onSearchChange={setSearch}
        layerOptions={layerOptions}
        layer={layer}
        onLayerChange={setLayer}
        statusOptions={statusOptions}
        status={status}
        onStatusChange={setStatus}
        accessOptions={accessOptions}
        access={access}
        onAccessChange={setAccess}
        assetClassOptions={assetClassOptions}
        assetClass={assetClass}
        onAssetClassChange={setAssetClass}
      />

      <p className="text-xs text-muted">
        Showing {filteredAssets.length} of {assets.length} records
      </p>

      <DatabaseTable assets={filteredAssets} projects={projects} layers={layers} />
    </div>
  );
}
