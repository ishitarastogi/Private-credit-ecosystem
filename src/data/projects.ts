export const ecosystemLayers = [
  {
    key: "originator",
    name: "Originator",
    description: "Borrower-facing sources of private credit collateral.",
  },
  {
    key: "tokenization-platform",
    name: "Tokenization Platform",
    description: "Rails for issuing and administering tokenized credit assets.",
  },
  {
    key: "fund-issuer-manager",
    name: "Fund Issuer / Manager",
    description: "Managers, issuers, and allocators of credit strategies.",
  },
  {
    key: "slicer",
    name: "Slicer",
    description: "Structuring layers for packaging or segmenting exposure.",
  },
  {
    key: "credit-protocol",
    name: "Credit Protocol",
    description: "Onchain lending protocols and market infrastructure.",
  },
  {
    key: "wrapper-venue",
    name: "Wrapper / Venue",
    description: "Interfaces, wrappers, and distribution surfaces.",
  },
  {
    key: "helper-infrastructure",
    name: "Helper / Infrastructure",
    description: "Research, data, custody, oracle, and service layers.",
  },
] as const;

export type EcosystemLayerMeta = (typeof ecosystemLayers)[number];
export type EcosystemLayerName = EcosystemLayerMeta["name"];
export type ProjectStatus = "Live" | "Pilot" | "Research";

export interface Project {
  id: string;
  name: string;
  description: string;
  layer: EcosystemLayerName;
  category: string;
  status: ProjectStatus;
  chains: string[];
  assets: string[];
  website?: string;
}

export const projects: Project[] = [
  {
    id: "apollo",
    name: "Apollo",
    description:
      "Asset manager represented in the mock dataset as a private credit fund issuer and manager.",
    layer: "Fund Issuer / Manager",
    category: "Alternative asset manager",
    status: "Live",
    chains: ["Ethereum", "Polygon"],
    assets: ["acrdx"],
    website: "https://www.apollo.com",
  },
  {
    id: "midas",
    name: "Midas",
    description:
      "Tokenized product issuer included as a placeholder for yield-bearing credit and cash-management products.",
    layer: "Tokenization Platform",
    category: "Tokenized asset platform",
    status: "Live",
    chains: ["Ethereum"],
    assets: ["mtbill"],
  },
  {
    id: "securitize",
    name: "Securitize",
    description:
      "Tokenization platform represented in the mock stack as issuance and transfer infrastructure.",
    layer: "Tokenization Platform",
    category: "Tokenization and transfer agent",
    status: "Live",
    chains: ["Ethereum", "Avalanche", "Polygon"],
    assets: ["acrdx"],
    website: "https://securitize.io",
  },
  {
    id: "maple",
    name: "Maple",
    description:
      "Credit protocol placeholder for onchain institutional lending pools and borrower markets.",
    layer: "Credit Protocol",
    category: "Credit marketplace",
    status: "Live",
    chains: ["Ethereum", "Solana"],
    assets: ["maple-direct"],
    website: "https://maple.finance",
  },
  {
    id: "nest",
    name: "Nest",
    description:
      "Wrapper and venue layer placeholder for packaging tokenized credit exposure for end users.",
    layer: "Wrapper / Venue",
    category: "Credit wrapper",
    status: "Pilot",
    chains: ["Ethereum"],
    assets: ["nacrdx"],
  },
  {
    id: "r25",
    name: "R25",
    description:
      "Originator and structuring placeholder for real-world credit exposure in the ecosystem map.",
    layer: "Originator",
    category: "Credit originator",
    status: "Research",
    chains: ["Ethereum"],
    assets: ["r25-credit"],
  },
  {
    id: "hamilton-lane",
    name: "Hamilton Lane",
    description:
      "Private markets manager represented as a fund issuer and allocator in the mock credit stack.",
    layer: "Fund Issuer / Manager",
    category: "Private markets manager",
    status: "Live",
    chains: ["Polygon"],
    assets: ["hlscope"],
    website: "https://www.hamiltonlane.com",
  },
  {
    id: "fasanara",
    name: "Fasanara",
    description:
      "Credit manager placeholder for private debt strategies and marketplace lending exposure.",
    layer: "Fund Issuer / Manager",
    category: "Credit manager",
    status: "Live",
    chains: ["Ethereum"],
    assets: ["fasanara-pool"],
  },
  {
    id: "clearpool",
    name: "Clearpool",
    description:
      "Credit protocol placeholder for lending pools, borrower credit markets, and liquidity venues.",
    layer: "Credit Protocol",
    category: "Credit marketplace",
    status: "Live",
    chains: ["Ethereum", "Polygon"],
    assets: ["clearpool-credit"],
    website: "https://clearpool.finance",
  },
  {
    id: "figure",
    name: "Figure",
    description:
      "Originator placeholder for consumer and asset-backed credit flowing into tokenized markets.",
    layer: "Originator",
    category: "Credit originator",
    status: "Live",
    chains: ["Provenance"],
    assets: ["figure-heloc"],
  },
];
