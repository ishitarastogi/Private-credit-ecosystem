import Link from "next/link";
import type { Asset } from "@/data/assets";
import type { Project } from "@/data/projects";
import type { Relationship } from "@/data/relationships";
import { formatList } from "@/lib/utils";

type ProjectDetailProps = {
  assets: readonly Asset[];
  project: Project;
  projects: readonly Project[];
  relationships: readonly Relationship[];
};

export function ProjectDetail({
  assets,
  project,
  projects,
  relationships,
}: ProjectDetailProps) {
  const assetById = new Map(assets.map((asset) => [asset.id, asset]));
  const projectById = new Map(projects.map((item) => [item.id, item]));
  const projectAssetIds = new Set(project.assets);

  const connectedRelationships = relationships.filter((relationship) => {
    if (relationship.sourceProjectId === project.id) {
      return true;
    }

    if (relationship.targetProjectId === project.id) {
      return true;
    }

    return relationship.targetAssetId
      ? projectAssetIds.has(relationship.targetAssetId)
      : false;
  });

  const relatedProjects = [
    ...new Set(
      connectedRelationships
        .flatMap((relationship) => [
          relationship.sourceProjectId,
          relationship.targetProjectId,
        ])
        .filter((projectId): projectId is string => Boolean(projectId))
        .filter((projectId) => projectId !== project.id),
    ),
  ]
    .map((projectId) => projectById.get(projectId))
    .filter((item): item is Project => Boolean(item));

  const projectAssets = project.assets
    .map((assetId) => assetById.get(assetId))
    .filter((asset): asset is Asset => Boolean(asset));

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
          {project.layer}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-normal text-foreground">
          {project.name}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-muted">
          {project.description}
        </p>
      </header>

      <section className="grid gap-4 border-b border-line py-8 sm:grid-cols-2 lg:grid-cols-4">
        <DetailItem label="Category" value={project.category} />
        <DetailItem label="Status" value={project.status} />
        <DetailItem label="Chains" value={formatList(project.chains)} />
        <DetailItem
          label="Assets"
          value={
            projectAssets.length > 0
              ? formatList(projectAssets.map((asset) => asset.symbol))
              : "None"
          }
        />
      </section>

      <section className="grid gap-8 py-8 lg:grid-cols-[1fr_1fr]">
        <div>
          <h2 className="text-sm font-semibold uppercase text-foreground">
            Assets
          </h2>
          <div className="mt-4 space-y-3">
            {projectAssets.length > 0 ? (
              projectAssets.map((asset) => (
                <div key={asset.id} className="rounded-md border border-line bg-white p-4">
                  <p className="font-medium text-foreground">{asset.symbol}</p>
                  <p className="mt-1 text-sm text-muted">{asset.name}</p>
                  <p className="mt-3 text-xs uppercase text-zinc-500">
                    {asset.type}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-sm text-muted">No assets in the mock dataset yet.</p>
            )}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase text-foreground">
            Related Projects
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {relatedProjects.length > 0 ? (
              relatedProjects.map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  href={`/database/${relatedProject.id}`}
                  className="rounded-md border border-line bg-white px-3 py-2 text-sm text-foreground hover:border-accent"
                >
                  {relatedProject.name}
                </Link>
              ))
            ) : (
              <p className="text-sm text-muted">
                No related projects in the mock dataset yet.
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="border-t border-line py-8">
        <h2 className="text-sm font-semibold uppercase text-foreground">
          Relationships
        </h2>
        <div className="mt-4 space-y-3">
          {connectedRelationships.length > 0 ? (
            connectedRelationships.map((relationship) => {
              const source = projectById.get(relationship.sourceProjectId);
              const target = relationship.targetProjectId
                ? projectById.get(relationship.targetProjectId)?.name
                : relationship.targetAssetId
                  ? assetById.get(relationship.targetAssetId)?.symbol
                  : undefined;

              return (
                <div
                  key={relationship.id}
                  className="rounded-md border border-line bg-white p-4 text-sm text-muted"
                >
                  <span className="font-medium text-foreground">
                    {source?.name ?? relationship.sourceProjectId}
                  </span>{" "}
                  {relationship.action}{" "}
                  <span className="font-medium text-foreground">
                    {target ?? "Unknown target"}
                  </span>
                </div>
              );
            })
          ) : (
            <p className="text-sm text-muted">
              No relationships in the mock dataset yet.
            </p>
          )}
        </div>
      </section>
    </article>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase text-zinc-500">{label}</p>
      <p className="mt-2 text-sm leading-6 text-foreground">{value}</p>
    </div>
  );
}
