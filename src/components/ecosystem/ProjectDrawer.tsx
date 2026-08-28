"use client";

import Link from "next/link";
import { ProjectLogo } from "@/components/ecosystem/ProjectLogo";
import type { Asset } from "@/data/assets";
import type { LayerMeta, Project } from "@/data/projects";
import { formatUsd } from "@/lib/utils";

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
                <ProjectLogo name={project.name} logo={project.logo} size={26} />
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
            <p className="mt-1 text-xs">
              <span className="uppercase tracking-[0.1em] text-accent">
                {layerByKey.get(project.primaryLayer)?.name ?? project.primaryLayer}
              </span>
              {otherRoles.length > 0 && (
                <span className="text-muted">
                  {" "}
                  + {otherRoles
                    .map((role) => layerByKey.get(role)?.name ?? role)
                    .join(", ")}
                </span>
              )}
            </p>

            <div className="mt-6 border-t border-line pt-6">
              <SectionLabel>About</SectionLabel>
              <p className="mt-2 text-sm leading-6 text-muted">
                {project.description ??
                  "No description available in the source dataset."}
              </p>
            </div>

            <div className="mt-6 border-t border-line pt-6">
              <SectionLabel>
                {`Products / Assets (${projectAssets.length})`}
              </SectionLabel>
              <div className="mt-3 space-y-3">
                {projectAssets.length > 0 ? (
                  projectAssets.map((asset) => (
                    <div
                      key={asset.id}
                      className="rounded-md border border-line px-3 py-2.5"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                        <p className="text-sm font-medium text-foreground">
                          {asset.name}
                        </p>
                        {asset.ticker && (
                          <p className="text-xs text-muted">{asset.ticker}</p>
                        )}
                      </div>
                      <p className="mt-1 text-xs text-muted">
                        {[asset.assetClass, asset.accessModel, asset.status]
                          .filter(Boolean)
                          .join(" · ") || "—"}
                      </p>
                      {(asset.platform || asset.issuerLegalEntity) && (
                        <p className="mt-1 text-[11px] leading-4 text-zinc-500">
                          {[
                            asset.platform && `Platform: ${asset.platform}`,
                            asset.issuerLegalEntity &&
                              `Issuer: ${asset.issuerLegalEntity}`,
                          ]
                            .filter(Boolean)
                            .join(" · ")}
                        </p>
                      )}
                      {asset.sizeUsd !== undefined && (
                        <p className="mt-1 text-[11px] text-zinc-500">
                          Size: {formatUsd(asset.sizeUsd)}
                        </p>
                      )}
                      {asset.notes && (
                        <p className="mt-1.5 text-[11px] italic leading-4 text-muted">
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
            </div>

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

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-400">
      {children}
    </p>
  );
}
