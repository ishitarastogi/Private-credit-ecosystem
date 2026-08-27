import Link from "next/link";
import type { Asset } from "@/data/assets";
import type { Project } from "@/data/projects";
import { formatList } from "@/lib/utils";

type DatabaseTableProps = {
  assets: readonly Asset[];
  projects: readonly Project[];
};

export function DatabaseTable({ assets, projects }: DatabaseTableProps) {
  const assetSymbols = new Map(assets.map((asset) => [asset.id, asset.symbol]));

  return (
    <div className="overflow-x-auto border border-line bg-white">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-line text-xs uppercase text-muted">
            <th className="px-4 py-3 font-semibold">Project</th>
            <th className="px-4 py-3 font-semibold">Layer</th>
            <th className="px-4 py-3 font-semibold">Assets</th>
            <th className="px-4 py-3 font-semibold">Chains</th>
            <th className="px-4 py-3 font-semibold">Status</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => {
            const projectAssets = project.assets
              .map((assetId) => assetSymbols.get(assetId))
              .filter((assetSymbol): assetSymbol is string =>
                Boolean(assetSymbol),
              );

            return (
              <tr key={project.id} className="border-b border-line last:border-b-0">
                <td className="px-4 py-4">
                  <Link
                    href={`/database/${project.id}`}
                    className="font-medium text-foreground underline-offset-4 hover:text-accent hover:underline"
                  >
                    {project.name}
                  </Link>
                </td>
                <td className="px-4 py-4 text-muted">{project.layer}</td>
                <td className="px-4 py-4 text-muted">
                  {projectAssets.length > 0 ? formatList(projectAssets) : "None"}
                </td>
                <td className="px-4 py-4 text-muted">
                  {formatList(project.chains)}
                </td>
                <td className="px-4 py-4 text-muted">{project.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
