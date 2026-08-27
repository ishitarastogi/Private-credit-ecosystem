"use client";

import Link from "next/link";
import type { Asset } from "@/data/assets";
import type { Project } from "@/data/projects";
import type { Relationship } from "@/data/relationships";
import { formatList } from "@/lib/utils";

type ProjectDrawerProps = {
  assets: readonly Asset[];
  project: Project | null;
  projects: readonly Project[];
  relationships: readonly Relationship[];
  onClose: () => void;
};

export function ProjectDrawer({
  assets,
  project,
  projects,
  relationships,
  onClose,
}: ProjectDrawerProps) {
  const isOpen = project !== null;

  const assetById = new Map(assets.map((asset) => [asset.id, asset]));
  const projectById = new Map(projects.map((item) => [item.id, item]));

  const connectedRelationships = project
    ? relationships.filter((relationship) => {
        if (relationship.sourceProjectId === project.id) return true;
        if (relationship.targetProjectId === project.id) return true;
        return relationship.targetAssetId
          ? project.assets.includes(relationship.targetAssetId)
          : false;
      })
    : [];

  const projectAssets = project
    ? project.assets
        .map((assetId) => assetById.get(assetId))
        .filter((asset): asset is Asset => Boolean(asset))
    : [];

  return (
    <>
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`fixed inset-0 z-30 bg-foreground/5 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        aria-label="Project details"
        aria-hidden={!isOpen}
        className={`fixed inset-y-0 right-0 z-40 w-full max-w-sm border-l border-line bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.02)] transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {project ? (
          <div className="flex h-full flex-col overflow-y-auto px-6 py-6">
            <div className="flex items-start justify-between">
              <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-md border border-line bg-background">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={project.logo} alt="" width={26} height={26} />
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="text-lg leading-none text-muted transition-colors hover:text-foreground"
              >
                ×
              </button>
            </div>

            <h2 className="mt-4 text-xl font-semibold text-foreground">
              {project.name}
            </h2>
            <p className="mt-1 text-xs uppercase tracking-[0.1em] text-accent">
              {project.layer}
            </p>

            <div className="mt-6 border-t border-line pt-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-400">
                Description
              </p>
              <p className="mt-2 text-sm leading-6 text-muted">
                {project.description}
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-5 border-t border-line pt-6">
              <DrawerItem label="Role" value={project.layer} />
              <DrawerItem label="Category" value={project.category} />
              <DrawerItem label="Status" value={project.status} />
              <DrawerItem label="Chains" value={formatList(project.chains)} />
            </div>

            <div className="mt-6 border-t border-line pt-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-400">
                Assets
              </p>
              <div className="mt-3 space-y-2">
                {projectAssets.length > 0 ? (
                  projectAssets.map((asset) => (
                    <div
                      key={asset.id}
                      className="rounded-md border border-line px-3 py-2"
                    >
                      <p className="text-sm font-medium text-foreground">
                        {asset.symbol}
                      </p>
                      <p className="mt-0.5 text-xs text-muted">{asset.name}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-muted">
                    No assets in the mock dataset yet.
                  </p>
                )}
              </div>
            </div>

            {connectedRelationships.length > 0 && (
              <div className="mt-6 border-t border-line pt-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-400">
                  Connections
                </p>
                <div className="mt-3 space-y-1.5 text-sm">
                  {connectedRelationships.map((relationship) => {
                    const source = projectById.get(relationship.sourceProjectId);
                    const target = relationship.targetProjectId
                      ? projectById.get(relationship.targetProjectId)?.name
                      : relationship.targetAssetId
                        ? assetById.get(relationship.targetAssetId)?.symbol
                        : undefined;

                    return (
                      <p key={relationship.id} className="leading-5 text-muted">
                        <span className="font-medium text-foreground">
                          {source?.name ?? relationship.sourceProjectId}
                        </span>{" "}
                        {relationship.action}{" "}
                        <span className="font-medium text-foreground">
                          {target ?? "Unknown"}
                        </span>
                      </p>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="mt-6 flex flex-col gap-2 border-t border-line pt-6">
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-line px-3 py-2 text-center text-sm font-medium text-foreground transition-colors hover:border-accent"
                >
                  Visit website ↗
                </a>
              )}
              <Link
                href={`/database/${project.id}`}
                className="rounded-md bg-foreground px-3 py-2 text-center text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                View in database →
              </Link>
            </div>
          </div>
        ) : null}
      </aside>
    </>
  );
}

function DrawerItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-400">
        {label}
      </p>
      <p className="mt-1 text-sm text-foreground">{value}</p>
    </div>
  );
}
