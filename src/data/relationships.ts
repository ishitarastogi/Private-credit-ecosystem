export type RelationshipAction =
  | "hosts"
  | "issues"
  | "manages"
  | "originates"
  | "structures"
  | "tokenizes"
  | "wraps";

export interface Relationship {
  id: string;
  sourceProjectId: string;
  action: RelationshipAction;
  targetAssetId?: string;
  targetProjectId?: string;
  note?: string;
}

export const relationships: Relationship[] = [
  {
    id: "apollo-manages-acrdx",
    sourceProjectId: "apollo",
    action: "manages",
    targetAssetId: "acrdx",
  },
  {
    id: "securitize-tokenizes-acrdx",
    sourceProjectId: "securitize",
    action: "tokenizes",
    targetAssetId: "acrdx",
  },
  {
    id: "nest-wraps-acrdx",
    sourceProjectId: "nest",
    action: "wraps",
    targetAssetId: "acrdx",
  },
  {
    id: "midas-issues-mtbill",
    sourceProjectId: "midas",
    action: "issues",
    targetAssetId: "mtbill",
  },
  {
    id: "maple-hosts-direct-lending",
    sourceProjectId: "maple",
    action: "hosts",
    targetAssetId: "maple-direct",
  },
  {
    id: "hamilton-lane-manages-credit",
    sourceProjectId: "hamilton-lane",
    action: "manages",
    targetAssetId: "hlscope",
  },
  {
    id: "fasanara-manages-pool",
    sourceProjectId: "fasanara",
    action: "manages",
    targetAssetId: "fasanara-pool",
  },
  {
    id: "clearpool-hosts-credit",
    sourceProjectId: "clearpool",
    action: "hosts",
    targetAssetId: "clearpool-credit",
  },
  {
    id: "figure-originates-heloc",
    sourceProjectId: "figure",
    action: "originates",
    targetAssetId: "figure-heloc",
  },
  {
    id: "r25-structures-credit",
    sourceProjectId: "r25",
    action: "structures",
    targetAssetId: "r25-credit",
  },
];
