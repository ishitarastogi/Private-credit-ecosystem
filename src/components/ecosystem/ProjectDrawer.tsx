"use client";

import Link from "next/link";
import { ProjectLogo } from "@/components/ecosystem/ProjectLogo";
import type { Asset } from "@/data/assets";
import type { LayerKey, LayerMeta, Project } from "@/data/projects";
import { xHandleFromUrl } from "@/lib/utils";

type ProjectDrawerProps = {
  assets: readonly Asset[];
  layers: readonly LayerMeta[];
  project: Project | null;
  onClose: () => void;
};

export function ProjectDrawer({ assets, layers, project, onClose }: ProjectDrawerProps) {
  const isOpen = project !== null;
  const layerByKey = new Map(layers.map((layer) => [layer.key, layer]));

  const projectAssets = project
    ? project.assetIds
        .map((id) => assets.find((asset) => asset.id === id))
        .filter((asset): asset is Asset => Boolean(asset))
    : [];

  const otherRoles = project
    ? project.roles.filter((role) => role !== project.primaryLayer)
    : [];

  const layerName = (key: LayerKey) => layerByKey.get(key)?.name ?? key;

  // Only shown when every product agrees — a mixed-status project has no
  // single true answer, so it's left to the per-product cards instead.
  const statusValues = new Set(
    projectAssets.map((asset) => asset.status).filter(Boolean),
  );
  const uniformStatus = statusValues.size === 1 ? [...statusValues][0] : undefined;

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
        className={`fixed inset-y-0 right-0 z-40 flex h-full w-full flex-col border-l border-line bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.02)] transition-transform duration-300 ease-out sm:max-w-[420px] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {project ? (
          <>
            <div className="flex shrink-0 items-start justify-between gap-3 border-b border-line px-5 py-4">
              <div className="flex min-w-0 items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-md border border-line bg-background">
                  <ProjectLogo name={project.name} logo={project.logo} size={20} />
                </span>
                <div className="min-w-0">
                  <h2 className="truncate text-base font-semibold text-foreground">
                    {project.name}
                  </h2>
                  <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-accent">
                    {layerName(project.primaryLayer)}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="shrink-0 text-lg leading-none text-muted transition-colors hover:text-foreground"
              >
                ×
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              <div className="divide-y divide-line">
                {project.description && (
                  <section className="px-5 py-5">
                    <SectionLabel>About</SectionLabel>
                    <p className="mt-1.5 text-sm leading-5 text-muted">
                      {project.description}
                    </p>
                  </section>
                )}

                {(project.website || project.twitter) && (
                  <section className="px-5 py-5">
                    <div className="flex gap-2">
                      {project.website && (
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 rounded-md border border-line px-3 py-2 text-center text-xs font-medium text-foreground transition-colors hover:border-accent"
                        >
                          Visit website ↗
                        </a>
                      )}
                      {project.twitter && (
                        <a
                          href={project.twitter}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 rounded-md border border-line px-3 py-2 text-center text-xs font-medium text-foreground transition-colors hover:border-accent"
                        >
                          {xHandleFromUrl(project.twitter)} ↗
                        </a>
                      )}
                    </div>
                  </section>
                )}

                <section className="px-5 py-5">
                  <SectionLabel>Role</SectionLabel>
                  <p className="mt-1.5 text-sm text-foreground">
                    {layerName(project.primaryLayer)}
                    {otherRoles.length > 0 &&
                      ` + ${otherRoles.map((role) => layerName(role)).join(", ")}`}
                  </p>
                </section>

                {uniformStatus && (
                  <section className="px-5 py-5">
                    <SectionLabel>Status</SectionLabel>
                    <p className="mt-1.5 text-sm text-foreground">{uniformStatus}</p>
                  </section>
                )}

                {project.chain && (
                  <section className="px-5 py-5">
                    <SectionLabel>Chain</SectionLabel>
                    <p className="mt-1.5 text-sm text-foreground">{project.chain}</p>
                  </section>
                )}

                <section className="px-5 py-5">
                  <SectionLabel>
                    {projectAssets.length === 1 ? "Product" : "Products"}
                  </SectionLabel>
                  <div className="mt-2 space-y-2">
                    {projectAssets.length > 0 ? (
                      projectAssets.map((asset) => (
                        <div
                          key={asset.id}
                          className="rounded-md border border-line px-3 py-2"
                        >
                          <p className="text-sm font-medium text-foreground">
                            {asset.name}
                          </p>
                          {asset.ticker && (
                            <p className="mt-0.5 text-xs text-muted">{asset.ticker}</p>
                          )}
                          {asset.assetClass && (
                            <p className="mt-0.5 text-xs text-muted">
                              {asset.assetClass}
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
              </div>
            </div>

            <div className="shrink-0 border-t border-line px-5 py-4">
              <Link
                href={`/database/${project.id}`}
                className="block rounded-md bg-foreground px-3 py-2 text-center text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                View in database →
              </Link>
            </div>
          </>
        ) : null}
      </aside>
    </>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-400">
      {children}
    </p>
  );
}
