import { datasetRows, type DatasetRow, type LayerKey } from "@/data/privateCreditDataset";
import { slugify } from "@/lib/utils";

export interface Asset {
  id: string;
  projectId: string;
  name: string;
  ticker?: string;
  layer: LayerKey;
  platform?: string;
  issuerLegalEntity?: string;
  accessModel?: string;
  entryType?: string;
  assetClass?: string;
  sizeUsd?: number;
  sizeMetric?: string;
  source?: string;
  status?: string;
  notes?: string;
}

function buildAssetId(projectId: string, row: DatasetRow) {
  return `${projectId}-${slugify(row.ticker ?? row.product)}`;
}

export const assets: Asset[] = datasetRows.map((row) => {
  const projectId = slugify(row.project);

  return {
    id: buildAssetId(projectId, row),
    projectId,
    name: row.product,
    ticker: row.ticker,
    layer: row.layerKey,
    platform: row.platform,
    issuerLegalEntity: row.issuerLegalEntity,
    accessModel: row.accessModel,
    assetClass: row.assetClass,
    sizeUsd: row.sizeUsd,
    status: row.status,
    notes: row.notes,
  };
});
