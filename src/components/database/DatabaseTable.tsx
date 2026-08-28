import Link from "next/link";
import type { Asset } from "@/data/assets";
import type { LayerMeta, Project } from "@/data/projects";
import { formatUsd } from "@/lib/utils";

type DatabaseTableProps = {
  assets: readonly Asset[];
  projects: readonly Project[];
  layers: readonly LayerMeta[];
};

export function DatabaseTable({ assets, projects, layers }: DatabaseTableProps) {
  const projectById = new Map(projects.map((project) => [project.id, project]));
  const layerByKey = new Map(layers.map((layer) => [layer.key, layer]));

  return (
    <div className="overflow-x-auto border border-line bg-white">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-line text-xs uppercase text-muted">
            <th className="px-4 py-3 font-semibold">Project</th>
            <th className="px-4 py-3 font-semibold">Product / Asset</th>
            <th className="px-4 py-3 font-semibold">Ticker</th>
            <th className="px-4 py-3 font-semibold">Layer</th>
            <th className="px-4 py-3 font-semibold">Asset Class</th>
            <th className="px-4 py-3 font-semibold">Access</th>
            <th className="px-4 py-3 font-semibold">Size</th>
            <th className="px-4 py-3 font-semibold">Status</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset) => {
            const project = projectById.get(asset.projectId);
            const layer = layerByKey.get(asset.layer);
            const size = formatUsd(asset.sizeUsd);

            return (
              <tr
                key={asset.id}
                className="border-b border-line align-top last:border-b-0"
              >
                <td className="px-4 py-3">
                  <Link
                    href={`/database/${asset.projectId}`}
                    className="font-medium text-foreground underline-offset-4 hover:text-accent hover:underline"
                  >
                    {project?.name ?? asset.projectId}
                  </Link>
                </td>
                <td className="px-4 py-3 text-muted">{asset.name}</td>
                <td className="px-4 py-3 text-muted">{asset.ticker ?? "—"}</td>
                <td className="px-4 py-3 text-muted">
                  {layer?.name ?? asset.layer}
                </td>
                <td className="px-4 py-3 text-muted">
                  {asset.assetClass ?? "—"}
                </td>
                <td className="px-4 py-3 text-muted">
                  {asset.accessModel ?? "—"}
                </td>
                <td className="px-4 py-3 text-muted">{size ?? "—"}</td>
                <td className="px-4 py-3 text-muted">{asset.status ?? "—"}</td>
              </tr>
            );
          })}
          {assets.length === 0 && (
            <tr>
              <td colSpan={8} className="px-4 py-10 text-center text-sm text-muted">
                No records match the current filters.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
