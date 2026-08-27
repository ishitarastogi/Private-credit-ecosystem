export type AssetType =
  | "Credit Pool"
  | "Tokenized Fund"
  | "Tokenized Product"
  | "Wrapped Token"
  | "Whole Loan";

export interface Asset {
  id: string;
  symbol: string;
  name: string;
  type: AssetType;
  chains: string[];
  projectIds: string[];
}

export const assets: Asset[] = [
  {
    id: "acrdx",
    symbol: "ACRDX",
    name: "Apollo diversified credit token placeholder",
    type: "Tokenized Fund",
    chains: ["Ethereum", "Polygon"],
    projectIds: ["apollo", "securitize", "nest"],
  },
  {
    id: "nacrdx",
    symbol: "nACRDX",
    name: "Wrapped ACRDX placeholder",
    type: "Wrapped Token",
    chains: ["Ethereum"],
    projectIds: ["nest"],
  },
  {
    id: "mtbill",
    symbol: "mTBILL",
    name: "Midas tokenized product placeholder",
    type: "Tokenized Product",
    chains: ["Ethereum"],
    projectIds: ["midas"],
  },
  {
    id: "maple-direct",
    symbol: "Maple Direct",
    name: "Institutional direct lending pool placeholder",
    type: "Credit Pool",
    chains: ["Ethereum", "Solana"],
    projectIds: ["maple"],
  },
  {
    id: "hlscope",
    symbol: "HL Credit",
    name: "Hamilton Lane credit strategy placeholder",
    type: "Tokenized Fund",
    chains: ["Polygon"],
    projectIds: ["hamilton-lane"],
  },
  {
    id: "fasanara-pool",
    symbol: "Fasanara Pool",
    name: "Private debt pool placeholder",
    type: "Credit Pool",
    chains: ["Ethereum"],
    projectIds: ["fasanara"],
  },
  {
    id: "clearpool-credit",
    symbol: "Clearpool Credit",
    name: "Borrower pool placeholder",
    type: "Credit Pool",
    chains: ["Ethereum", "Polygon"],
    projectIds: ["clearpool"],
  },
  {
    id: "figure-heloc",
    symbol: "Figure HELOC",
    name: "Whole-loan collateral placeholder",
    type: "Whole Loan",
    chains: ["Provenance"],
    projectIds: ["figure"],
  },
  {
    id: "r25-credit",
    symbol: "R25 Credit",
    name: "Structured private credit placeholder",
    type: "Credit Pool",
    chains: ["Ethereum"],
    projectIds: ["r25"],
  },
];
