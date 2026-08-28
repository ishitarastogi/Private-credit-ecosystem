export interface Relationship {
  sourceId: string;
  targetId: string;
  type: string;
}

// The source dataset does not include an explicit relationship table.
// Structural links (which assets belong to which project) are represented
// via Project.assetIds instead. Cross-project links only exist as free-text
// notes on individual assets (see Asset.notes) and are intentionally not
// turned into structured relationships here to avoid inventing data.
export const relationships: Relationship[] = [];
