import {
  datasetRows,
  ecosystemLayers,
  layerKeys,
  type LayerKey,
  type LayerMeta,
} from "@/data/privateCreditDataset";
import { assets } from "@/data/assets";
import { slugify } from "@/lib/utils";

export { ecosystemLayers, layerKeys };
export type { LayerKey, LayerMeta };

export interface Project {
  id: string;
  name: string;
  primaryLayer: LayerKey;
  roles: LayerKey[];
  description?: string;
  logo?: string;
  website?: string;
  assetIds: string[];
}

// Reuse existing logo assets only where the id already matches an available
// file under public/logos/. Everything else stays undefined — no invented logos.
const existingLogos: Partial<Record<string, string>> = {
  apollo: "/logos/apollo.svg",
  midas: "/logos/midas.svg",
  securitize: "/logos/securitize.svg",
  "maple-finance": "/logos/maple.svg",
  "nest-credit": "/logos/nest.svg",
  r25: "/logos/r25.svg",
  "hamilton-lane": "/logos/hamilton-lane.svg",
  fasanara: "/logos/fasanara.svg",
  clearpool: "/logos/clearpool.svg",
  figure: "/logos/figure.svg",
};

function buildProjects(): Project[] {
  const order: string[] = [];
  const byId = new Map<string, Project>();

  for (const row of datasetRows) {
    const id = slugify(row.project);
    const existing = byId.get(id);

    if (!existing) {
      order.push(id);
      byId.set(id, {
        id,
        name: row.project,
        primaryLayer: row.layerKey,
        roles: [row.layerKey],
        logo: existingLogos[id],
        assetIds: [],
      });
      continue;
    }

    if (!existing.roles.includes(row.layerKey)) {
      existing.roles.push(row.layerKey);
    }
  }

  for (const asset of assets) {
    byId.get(asset.projectId)?.assetIds.push(asset.id);
  }

  return order.map((id) => byId.get(id)!);
}

export const projects: Project[] = buildProjects();
