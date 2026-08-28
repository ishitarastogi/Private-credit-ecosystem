import Link from "next/link";
import type { Asset } from "@/data/assets";
import type { LayerMeta, Project } from "@/data/projects";
import { formatUsd } from "@/lib/utils";

type ProjectDetailProps = {
  assets: readonly Asset[];
  layers: readonly LayerMeta[];
  project: Project;
};

export function ProjectDetail({ assets, layers, project }: ProjectDetailProps) {
  const layerByKey = new Map(layers.map((layer) => [layer.key, layer]));

  const projectAssets = project.assetIds
    .map((id) => assets.find((asset) => asset.id === id))
    .filter((asset): asset is Asset => Boolean(asset));

  const otherRoles = project.roles.filter((role) => role !== project.primaryLayer);

  return (
    <article>
      <Link
        href="/database"
        className="text-sm font-medium text-accent underline-offset-4 hover:underline"
      >
        Database
      </Link>

      <header className="mt-6 border-b border-line pb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {layerByKey.get(project.primaryLayer)?.name ?? project.primaryLayer}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-normal text-foreground">
          {project.name}
        </h1>
        {otherRoles.length > 0 && (
          <p className="mt-3 text-sm text-muted">
            Also appears as:{" "}
            {otherRoles
              .map((role) => layerByKey.get(role)?.name ?? role)
              .join(", ")}
          </p>
        )}
        <p className="mt-5 max-w-3xl text-base leading-7 text-muted">
          {project.description ?? "No description available in the source dataset."}
        </p>
      </header>

      <section className="py-8">
        <h2 className="text-sm font-semibold uppercase text-foreground">
          {`Products / Assets (${projectAssets.length})`}
        </h2>
        <div className="mt-4 space-y-3">
          {projectAssets.length > 0 ? (
            projectAssets.map((asset) => (
              <div key={asset.id} className="rounded-md border border-line bg-white p-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-medium text-foreground">{asset.name}</p>
                  {asset.ticker && (
                    <p className="text-sm text-muted">{asset.ticker}</p>
                  )}
                </div>
                <dl className="mt-3 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-4">
                  <DetailItem label="Asset Class" value={asset.assetClass} />
                  <DetailItem label="Issuer" value={asset.issuerLegalEntity} />
                  <DetailItem label="Platform" value={asset.platform} />
                  <DetailItem label="Access Model" value={asset.accessModel} />
                  <DetailItem label="Status" value={asset.status} />
                  <DetailItem label="Size" value={formatUsd(asset.sizeUsd)} />
                </dl>
                {asset.notes && (
                  <p className="mt-3 text-xs italic leading-5 text-muted">
                    {asset.notes}
                  </p>
                )}
              </div>
            ))
          ) : (
            <p className="text-sm text-muted">
              No products recorded for this project.
            </p>
          )}
        </div>
      </section>
    </article>
  );
}

function DetailItem({ label, value }: { label: string; value?: string }) {
  if (!value) return null;

  return (
    <div>
      <p className="text-xs font-semibold uppercase text-zinc-500">{label}</p>
      <p className="mt-1 text-foreground">{value}</p>
    </div>
  );
}
