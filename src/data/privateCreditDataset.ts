export const layerKeys = [
  "originator",
  "tokenization-platform",
  "fund-issuer",
  "slicer",
  "credit-protocol",
  "wrapper-venue",
  "helper",
] as const;

export type LayerKey = (typeof layerKeys)[number];

export interface LayerMeta {
  key: LayerKey;
  layerNo: number;
  name: string;
  description: string;
}

export const ecosystemLayers: LayerMeta[] = [
  {
    key: "originator",
    layerNo: 1,
    name: "Originator",
    description: "Borrower-facing sources of private credit collateral.",
  },
  {
    key: "tokenization-platform",
    layerNo: 2,
    name: "Tokenization Platform",
    description: "Rails for issuing and administering tokenized credit assets.",
  },
  {
    key: "fund-issuer",
    layerNo: 3,
    name: "Fund Issuer",
    description: "Managers and issuers of tokenized credit funds and strategies.",
  },
  {
    key: "slicer",
    layerNo: 4,
    name: "Slicer",
    description: "Structuring layers for packaging or segmenting exposure.",
  },
  {
    key: "credit-protocol",
    layerNo: 5,
    name: "Credit Protocol",
    description: "Onchain lending protocols and market infrastructure.",
  },
  {
    key: "wrapper-venue",
    layerNo: 6,
    name: "Wrapper / Venue",
    description: "Interfaces, wrappers, and distribution surfaces.",
  },
  {
    key: "helper",
    layerNo: 7,
    name: "Helper",
    description: "Research, data, custody, oracle, and service layers.",
  },
];

export interface DatasetRow {
  layerKey: LayerKey;
  project: string;
  product: string;
  ticker?: string;
  platform?: string;
  issuerLegalEntity?: string;
  accessModel?: string;
  assetClass?: string;
  sizeUsd?: number;
  status: string;
  notes?: string;
}

type RowExtra = Partial<
  Omit<DatasetRow, "layerKey" | "project" | "product" | "status">
>;

function row(
  layerKey: LayerKey,
  project: string,
  product: string,
  status: string,
  extra: RowExtra = {},
): DatasetRow {
  return { layerKey, project, product, status, ...extra };
}

export const datasetRows: DatasetRow[] = [
  // Layer 1 — Originator
  row("originator", "Figure", "Figure Markets Democratized Prime", "live", {
    ticker: "FIGR_HELOC",
    sizeUsd: 234550000,
    notes: "Provenance chain. Not queryable on Dune.",
  }),
  row("originator", "Fasanara", "mF-ONE", "live", {
    ticker: "MF-ONE",
    platform: "Midas",
    issuerLegalEntity: "Midas Software GmbH",
    accessModel: "Permissionless",
    assetClass: "Credit Pool",
    sizeUsd: 34870000,
    notes: "Onchain mcap 64.39m vs active 34.87m. DeFi utilization 90.39%.",
  }),
  row("originator", "Fasanara", "mGLOBAL", "live", {
    ticker: "MGLOBAL",
    platform: "Midas",
    notes: "Issued via Midas.",
  }),
  row("originator", "Huma Finance", "Huma PST", "live", {
    ticker: "PST",
    notes: "Cumulative volume figure not comparable to outstanding principal.",
  }),
  row("originator", "Goldfinch", "Goldfinch Prime", "live", {
    ticker: "GPRIME",
    sizeUsd: 1960000,
  }),
  row("originator", "Credix", "CRDX pools", "winding_down", {
    ticker: "CRDX",
    sizeUsd: 1,
    notes: "TVL reported as 1 USD.",
  }),
  row("originator", "cSigma Finance", "cSigma", "live", {
    ticker: "SIGMA",
    sizeUsd: 21610000,
    notes: "4 chains.",
  }),
  row("originator", "Isle Finance", "Isle", "live", {
    ticker: "ISLE",
    sizeUsd: 929712,
  }),
  row("originator", "Credit Coop", "Secured Line of Credit (Spigot)", "live", {
    sizeUsd: 4580000,
    notes: "2 chains.",
  }),
  row("originator", "BlackOpal", "OpalAccess LiquidStone 2", "live", {
    ticker: "OALS2T",
    platform: "BlackOpal",
    issuerLegalEntity: "BlackOpal Onchain Private Credit Fund I LTD. SAC",
    accessModel: "Permissioned",
    assetClass: "Trade Finance, Active Vault",
    sizeUsd: 37700000,
    notes:
      "Onchain mcap 39.65m. Reconcile against Nest NOPAL at 51.02m.",
  }),
  row("originator", "R25", "VRPC Quarterly", "live", {
    ticker: "VRPCQ",
    platform: "R25",
    issuerLegalEntity: "R25",
    accessModel: "Permissionless",
    assetClass: "Credit Pool",
    sizeUsd: 57990000,
    notes: "Possibly one book across three tenors with VRPCS and VRPCW.",
  }),
  row("originator", "R25", "VRPC Semi-Yearly", "live", {
    ticker: "VRPCS",
    platform: "R25",
    issuerLegalEntity: "R25",
    accessModel: "Permissionless",
    assetClass: "Credit Pool",
    sizeUsd: 10380000,
  }),
  row("originator", "R25", "VRPC Weekly", "live", {
    ticker: "VRPCW",
    platform: "R25",
    issuerLegalEntity: "R25",
    accessModel: "Permissionless",
    assetClass: "Credit Pool",
    sizeUsd: 1050000,
  }),
  row("originator", "R25", "Axil Prime Credit 3M", "live", {
    ticker: "APC3M",
    platform: "R25",
    issuerLegalEntity:
      "RiftWriter Company Limited (BVI) and RazeStaker Company Limited (BVI)",
    accessModel: "Permissionless",
    assetClass: "Credit Pool",
    sizeUsd: 45830000,
    notes:
      "Links to Pharos Axil Prime Credit Vault. Issuer differs from other R25 rows.",
  }),
  row("originator", "Goblin", "Ember Goblin Private Credit I", "live", {
    ticker: "GPCI",
    platform: "Goblin",
    issuerLegalEntity: "Goblin Issuer Inc",
    accessModel: "Permissioned",
    assetClass: "Structured Credit",
    sizeUsd: 16000000,
  }),
  row("originator", "USD AI", "USD AI", "live", {
    sizeUsd: 174380000,
    notes: "Fees 7d 649843. One of few in category generating real fees.",
  }),
  row("originator", "3F", "3F", "live", { sizeUsd: 29200000 }),
  row("originator", "Kasu", "Kasu", "live", {
    ticker: "KASU",
    sizeUsd: 11760000,
    notes: "3 chains.",
  }),
  row("originator", "Untangled Finance", "Untangled", "live", {
    ticker: "UNTANGLED",
    platform: "Untangled Finance",
    issuerLegalEntity: "Untangled Finance Limited",
    accessModel: "Permissioned",
    assetClass: "Credit Pool",
    sizeUsd: 12,
    notes: "Celo. TVL effectively zero. Credit oracle infrastructure.",
  }),
  row("originator", "Zivoe", "Zivoe", "live", {
    ticker: "ZIVOE",
    platform: "Zivoe",
  }),
  row("originator", "Obligate", "Obligate Trade Finance Yield", "live", {
    ticker: "oTFY",
    platform: "Obligate",
    issuerLegalEntity: "Verified SV S.a r.l.",
    accessModel: "Permissionless",
    assetClass: "Trade Finance",
    sizeUsd: 26020000,
    notes: "Active mcap 7.36m.",
  }),
  row("originator", "AgriDex", "AY-Aniseed vault", "live", {
    ticker: "AGVT",
    platform: "AgriDex",
    issuerLegalEntity: "AgriDex International Limited",
    accessModel: "Permissioned",
    assetClass: "Trade Finance",
    sizeUsd: 251252,
  }),
  row("originator", "Berkeley Square Finance Group", "EM Portfolio 1", "live", {
    ticker: "BSFG-EM-1",
    platform: "PACT",
    issuerLegalEntity: "Berkeley Square Finance Group (via PACT)",
    accessModel: "Permissioned",
    assetClass: "Credit Pool",
  }),
  row("originator", "Berkeley Square Finance Group", "EM Portfolio 2", "live", {
    ticker: "BSFG-EM-2",
    platform: "PACT",
    issuerLegalEntity: "Berkeley Square Finance Group (via PACT)",
    accessModel: "Permissioned",
    assetClass: "Credit Pool",
  }),
  row("originator", "Flint", "Flint USD", "live", {
    ticker: "flUSD",
    platform: "Flint",
    issuerLegalEntity:
      "KBL LLC FZ; underlying bonds issued by Lend SA (France)",
    accessModel: "Permissionless",
    assetClass: "Credit Pool",
    notes: "Tagged Private Credit and Real Estate.",
  }),
  row("originator", "Robbin Pagamentos", "Robbin 02 Senior 01", "live", {
    ticker: "ROB2SR01",
    platform: "Liqi",
    issuerLegalEntity: "Liqi Securitizadora (SPV) / Robbin Pagamentos LTDA",
    accessModel: "Permissioned",
    assetClass: "Structured Credit",
    notes: "Brazil.",
  }),
  row("originator", "Robbin Pagamentos", "Robbin 02 Senior 02", "live", {
    ticker: "ROB2SR02",
    platform: "Liqi",
    issuerLegalEntity: "Liqi Securitizadora (SPV) / Robbin Pagamentos LTDA",
    accessModel: "Permissioned",
    assetClass: "Structured Credit",
    notes: "Brazil.",
  }),
  row("originator", "Travessia Credit", "Travessia", "live", {
    sizeUsd: 625483,
    notes: "2 chains.",
  }),
  row("originator", "HARVEST FLOW", "HARVEST FLOW", "live", {
    sizeUsd: 527360,
    notes: "2 chains.",
  }),
  row("originator", "8lends", "8lends", "live", { sizeUsd: 454536 }),
  row("originator", "Unblock Equity", "Unblock Equity", "live", {
    sizeUsd: 23215,
  }),
  row("originator", "Credible Finance", "Credible Finance", "live", {
    sizeUsd: 17406,
    notes: "2 chains.",
  }),
  row("originator", "Vivacity Finance", "Vivacity Finance", "live", {
    sizeUsd: 10586,
  }),
  row("originator", "EthicHub", "EthicHub", "live", {
    sizeUsd: 701,
    notes: "3 chains.",
  }),
  row("originator", "OpenFi", "OpenFi", "live", {
    sizeUsd: 182,
    notes: "2 chains.",
  }),
  row("originator", "Sharewoods", "Sharewoods", "live", { sizeUsd: 112 }),
  row("originator", "SukukFi", "SukukFi", "live", { sizeUsd: 54 }),
  row("originator", "Atlendis", "Atlendis V2", "deprecated", {
    sizeUsd: 1013,
    notes: "Marked deprecated by DefiLlama.",
  }),

  // Layer 2 — Tokenization Platform
  row("tokenization-platform", "Midas", "mTBILL", "live", {
    ticker: "MTBILL",
    platform: "Midas",
    issuerLegalEntity: "Midas Software GmbH",
  }),
  row("tokenization-platform", "Midas", "mBASIS", "live", {
    ticker: "MBASIS",
    platform: "Midas",
    issuerLegalEntity: "Midas Software GmbH",
  }),
  row("tokenization-platform", "Midas", "mHYPER", "live", {
    ticker: "MHYPER",
    platform: "Midas",
    issuerLegalEntity: "Midas Software GmbH",
  }),
  row("tokenization-platform", "Midas", "mRe7BTC", "live", {
    ticker: "MRE7BTC",
    platform: "Midas",
    issuerLegalEntity: "Midas Software GmbH",
  }),
  row(
    "tokenization-platform",
    "Securitize",
    "Securitize AAA CLO Tokenized Fund",
    "live",
    { ticker: "STAC", platform: "Securitize", accessModel: "Permissioned" },
  ),
  row("tokenization-platform", "Securitize", "VanEck Treasury Fund", "live", {
    ticker: "VBILL",
    platform: "Securitize",
    accessModel: "Permissioned",
  }),
  row("tokenization-platform", "Centrifuge", "deRWA wrappers", "live", {
    ticker: "deRWA",
    platform: "Centrifuge",
    assetClass: "Wrapper",
    notes: "Includes deJAAA.",
  }),
  row("tokenization-platform", "Centrifuge", "Tinlake", "legacy", {
    sizeUsd: 61298,
    notes: "Centrifuge legacy pool infrastructure.",
  }),
  row(
    "tokenization-platform",
    "Tradable",
    "North America Rent Financing Senior Secured Term Notes",
    "live",
    {
      ticker: "PC0000031",
      platform: "Tradable",
      issuerLegalEntity: "Tradable",
      accessModel: "Permissioned",
      assetClass: "Credit Pool",
    },
  ),
  row(
    "tokenization-platform",
    "Tradable",
    "US BNPL Finance Provider Senior Secured Term Notes",
    "live",
    {
      ticker: "PC0000033",
      platform: "Tradable",
      issuerLegalEntity: "Tradable",
      accessModel: "Permissioned",
      assetClass: "Credit Pool",
    },
  ),
  row(
    "tokenization-platform",
    "Tradable",
    "NA Third Party Online Merchant Senior Secured",
    "live",
    {
      ticker: "PC0000015",
      platform: "Tradable",
      issuerLegalEntity: "Tradable",
      accessModel: "Permissioned",
      assetClass: "Credit Pool",
    },
  ),
  row(
    "tokenization-platform",
    "Tradable",
    "LatAm Middle-Market Lender Senior Secured Term Loan",
    "live",
    {
      ticker: "PC0000085",
      platform: "Tradable",
      issuerLegalEntity: "Tradable",
      accessModel: "Permissioned",
      assetClass: "Credit Pool",
    },
  ),
  row(
    "tokenization-platform",
    "Tradable",
    "Gov't Contractor Financier Senior Secured Term Notes",
    "live",
    {
      ticker: "PC1475577896",
      platform: "Tradable",
      issuerLegalEntity: "Tradable (counterparty undisclosed)",
      accessModel: "Permissioned",
      assetClass: "Credit Pool",
    },
  ),
  row(
    "tokenization-platform",
    "Tradable",
    "North America Fintech Senior Secured Term Notes",
    "live",
    {
      ticker: "PC0000053",
      platform: "Tradable",
      issuerLegalEntity: "Tradable (counterparty undisclosed)",
      accessModel: "Permissioned",
      assetClass: "Credit Pool",
    },
  ),
  row(
    "tokenization-platform",
    "Tradable",
    "LitFi Firm Post-Settlement Note",
    "live",
    {
      ticker: "PC0000091",
      platform: "Tradable",
      issuerLegalEntity: "Tradable (counterparty anonymized by design)",
      accessModel: "Permissioned",
      assetClass: "Credit Pool",
    },
  ),
  row(
    "tokenization-platform",
    "Tradable",
    "South American Consumer PoS Lender Senior Secured",
    "live",
    {
      ticker: "PC0000029",
      platform: "Tradable",
      issuerLegalEntity: "Tradable (counterparty anonymized by design)",
      accessModel: "Permissioned",
      assetClass: "Credit Pool",
    },
  ),
  row("tokenization-platform", "Liqi", "Liqi Securitizadora", "live", {
    platform: "Liqi",
    issuerLegalEntity: "Liqi Securitizadora",
    accessModel: "Permissioned",
    assetClass: "Platform",
    notes: "Brazil. Issues Robbin notes.",
  }),
  row(
    "tokenization-platform",
    "Intain",
    "Intain Commercial Real Estate Pool",
    "live",
    {
      ticker: "IMCGCR1",
      platform: "Intain",
      issuerLegalEntity:
        "US community bank via FIS-Intain Digital Liquidity Gateway",
      accessModel: "Permissioned",
      assetClass: "Structured Credit",
      notes: "Originator attributed to Cogent Bank. Unconfirmed.",
    },
  ),
  row(
    "tokenization-platform",
    "Intain",
    "Intain Aviation Finance Pool",
    "live",
    {
      ticker: "IMCAV1",
      platform: "Intain",
      issuerLegalEntity:
        "US community bank via FIS-Intain Digital Liquidity Gateway",
      accessModel: "Permissioned",
      assetClass: "Structured Credit",
      notes: "Originator attributed to Cogent Bank. Unconfirmed.",
    },
  ),
  row("tokenization-platform", "Bitbond", "VuMe Bond 2030", "live", {
    ticker: "TPT30",
    platform: "Bitbond",
    issuerLegalEntity: "Realiz Digital Assets Fund",
    accessModel: "Permissioned",
    assetClass: "Other Credit",
  }),
  row(
    "tokenization-platform",
    "KAIO",
    "Hamilton Lane SCOPE access",
    "live",
    {
      ticker: "SCOPE",
      platform: "KAIO",
      issuerLegalEntity: "KAIO (tokenization provider)",
      accessModel: "Permissioned",
      assetClass: "Credit Pool",
      notes: "Second access route to HLSCOPE. Double-count candidate.",
    },
  ),
  row(
    "tokenization-platform",
    "Pharos Network",
    "Axil Prime Credit Vault",
    "live",
    { ticker: "APC", assetClass: "Platform", notes: "See R25 APC3M." },
  ),

  // Layer 3 — Fund Issuer
  row(
    "fund-issuer",
    "Apollo",
    "Apollo Diversified Credit Securitize Fund",
    "live",
    { ticker: "ACRED", platform: "Securitize", accessModel: "Permissioned" },
  ),
  row(
    "fund-issuer",
    "Apollo",
    "Anemoy Tokenized Apollo Diversified Credit Fund",
    "live",
    {
      ticker: "ACRDX",
      platform: "Centrifuge",
      issuerLegalEntity: "Anemoy",
      accessModel: "Permissioned",
      assetClass: "Other Credit",
      sizeUsd: 31120000,
      notes: "DeFi utilization reported 0% despite Nest holding.",
    },
  ),
  row(
    "fund-issuer",
    "Hamilton Lane",
    "Senior Credit Opportunities Securitize Fund",
    "live",
    {
      ticker: "HLSCOPE",
      platform: "Securitize",
      issuerLegalEntity:
        "Hamilton Lane SCOPE Securitize Tokenized Feeder, LP",
      accessModel: "Permissioned",
      assetClass: "Credit Pool",
      sizeUsd: 4290000,
      notes: "Token price 1263.96.",
    },
  ),
  row(
    "fund-issuer",
    "WisdomTree",
    "Private Credit and Alternative Income Digital Fund",
    "live",
    {
      ticker: "CRDYX",
      platform: "WisdomTree",
      issuerLegalEntity: "WisdomTree Digital Trust",
      accessModel: "Permissioned",
      assetClass: "Credit Pool",
      sizeUsd: 3710000,
      notes: "78% held by Nest NWISDOM. Double-count.",
    },
  ),
  row("fund-issuer", "Janus Henderson", "Anemoy AAA CLO Fund", "live", {
    ticker: "JAAA",
    platform: "Centrifuge",
    issuerLegalEntity: "Anemoy Capital SPC Limited",
    accessModel: "Permissioned",
    assetClass: "Corp Bond Fund",
    sizeUsd: 432980000,
    notes:
      "Onchain mcap 904.95m. DeFi utilization 97.82%. Strongest recursion signal in dataset.",
  }),
  row("fund-issuer", "Janus Henderson", "Anemoy Treasury Fund", "live", {
    ticker: "JTRSY",
    platform: "Centrifuge",
    issuerLegalEntity: "Anemoy Capital SPC Limited",
    accessModel: "Permissioned",
    assetClass: "T-Bills",
    sizeUsd: 874320000,
    notes: "Treasuries not private credit. Included for stack mapping.",
  }),
  row(
    "fund-issuer",
    "Galaxy Asset Management",
    "Galaxy CLO 2025-1",
    "live",
    {
      ticker: "GACLO-1",
      platform: "Galaxy",
      issuerLegalEntity: "Galaxy CLO 2025-1 LLC",
      accessModel: "Permissioned",
      assetClass: "Structured Credit",
      notes: "Parent Galaxy Digital Inc (GLXY).",
    },
  ),
  row("fund-issuer", "FalconX", "FalconX Credit Vault", "live", {
    ticker: "AA_FalconXUSDC",
    notes: "See Nest NFALCON.",
  }),

  // Layer 4 — Slicer
  row("slicer", "Strata Markets", "Senior USDe tranche", "live", {
    ticker: "srUSDe",
  }),
  row("slicer", "Strata Markets", "Junior USDe tranche", "live", {
    ticker: "jrUSDe",
  }),
  row("slicer", "Infinifi", "infiniFi USD", "live", { ticker: "iUSD" }),
  row("slicer", "Infinifi", "staked iUSD", "live", { ticker: "siUSD" }),
  row("slicer", "Infinifi", "locked iUSD", "live", { ticker: "liUSD" }),
  row("slicer", "Mu Digital", "AZND senior", "live", { ticker: "AZND" }),
  row("slicer", "Mu Digital", "muBOND junior", "live", { ticker: "muBOND" }),
  row("slicer", "VERT Capital", "FIDC Byx Mozart Senior", "live", {
    ticker: "BR0OVSCTF004",
    platform: "VERT Capital",
    issuerLegalEntity: "VERT Capital",
    accessModel: "Permissioned",
    assetClass: "Structured Credit",
  }),
  row("slicer", "VERT Capital", "FIDC Byx Mozart Mezzanine", "live", {
    ticker: "BR0OVSCTF012",
    platform: "VERT Capital",
    issuerLegalEntity: "VERT Capital",
    accessModel: "Permissioned",
    assetClass: "Other Credit",
  }),
  row("slicer", "VERT Capital", "FIDC Byx Mozart Junior", "live", {
    ticker: "BR0OVSCTF020",
    platform: "VERT Capital",
    issuerLegalEntity: "VERT Capital",
    accessModel: "Permissioned",
    assetClass: "Other Credit",
  }),
  row("slicer", "VERT Capital", "94th CRA 1st tranche", "live", {
    ticker: "BRVERTCRA450",
    platform: "VERT Capital",
    issuerLegalEntity: "VERT Capital",
    accessModel: "Permissioned",
    assetClass: "Other Credit",
  }),
  row("slicer", "VERT Capital", "94th CRA 2nd tranche", "live", {
    ticker: "BRVERTCRA468",
    platform: "VERT Capital",
    issuerLegalEntity: "VERT Capital",
    accessModel: "Permissioned",
    assetClass: "Other Credit",
  }),
  row("slicer", "VERT Capital", "94th CRA 3rd tranche", "live", {
    ticker: "BRVERTCRA476",
    platform: "VERT Capital",
    issuerLegalEntity: "VERT Capital",
    accessModel: "Permissioned",
    assetClass: "Other Credit",
  }),
  row("slicer", "VERT Capital", "94th CRA 4th tranche", "live", {
    ticker: "BRVERTCRA484",
    platform: "VERT Capital",
    issuerLegalEntity: "VERT Capital",
    accessModel: "Permissioned",
    assetClass: "Other Credit",
  }),
  row("slicer", "VERT Capital", "94th CRA 5th tranche", "live", {
    ticker: "BRVERTCRA492",
    platform: "VERT Capital",
    issuerLegalEntity: "VERT Capital",
    accessModel: "Permissioned",
    assetClass: "Other Credit",
  }),
  row("slicer", "VERT Capital", "12th Debenture 1st Series", "live", {
    ticker: "BRVERTDBS0I1",
    platform: "VERT Capital",
    issuerLegalEntity: "VERT Companhia Securitizadora",
    accessModel: "Permissioned",
    assetClass: "Structured Credit",
  }),

  // Layer 5 — Credit Protocol
  row("credit-protocol", "Maple Finance", "Syrup USDC", "live", {
    ticker: "syrupUSDC",
    platform: "Maple",
    issuerLegalEntity: "Maple Protocol Pool Operations",
    accessModel: "Permissionless",
    assetClass: "Credit Pool",
    sizeUsd: 1236000000,
    notes: "DeFi utilization 47.21%. Largest private credit asset.",
  }),
  row("credit-protocol", "Maple Finance", "Syrup USDT", "live", {
    ticker: "syrupUSDT",
    platform: "Maple",
    issuerLegalEntity: "Maple Protocol Pool Operations",
    accessModel: "Permissionless",
    assetClass: "Credit Pool",
    sizeUsd: 691090000,
    notes: "DeFi utilization 89.63%.",
  }),
  row("credit-protocol", "Maple Finance", "Syrup USDG", "live", {
    ticker: "syrupUSDG",
    platform: "Maple",
    issuerLegalEntity: "Maple Protocol Pool Operations",
    accessModel: "Permissionless",
    assetClass: "Credit Pool",
  }),
  row("credit-protocol", "Hastra", "Hastra PRIME", "live", {
    ticker: "PRIME",
    platform: "Hastra",
    issuerLegalEntity: "Hastra",
    accessModel: "Permissionless",
    assetClass: "Other Credit",
    sizeUsd: 587330000,
    notes: "DeFi utilization 64.44%.",
  }),
  row("credit-protocol", "Hastra", "Hastra AUTO", "live", {
    ticker: "AUTO",
    platform: "Hastra",
    issuerLegalEntity: "Signum Ltd.",
    accessModel: "Permissionless",
    assetClass: "Credit Pool",
    sizeUsd: 5920000,
    notes: "DeFi utilization 92.12%.",
  }),
  row("credit-protocol", "Hastra", "wYLDS", "live", {
    ticker: "wYLDS",
    platform: "Hastra",
  }),
  row("credit-protocol", "Pareto", "Pareto USP", "live", {
    ticker: "USP",
    sizeUsd: 235220000,
    notes: "4 chains.",
  }),
  row("credit-protocol", "Pareto", "staked USP", "live", { ticker: "sUSP" }),
  row(
    "credit-protocol",
    "Clearpool",
    "cpUSD / Prime / Credit Vaults",
    "live",
    {
      ticker: "cpUSD",
      notes: "Not in DefiLlama RWA Lending category.",
    },
  ),
  row("credit-protocol", "3Jane", "USD3", "live", { ticker: "USD3" }),
  row("credit-protocol", "3Jane", "staked USD3", "live", {
    ticker: "sUSD3",
  }),
  row("credit-protocol", "Noon", "USN", "live", { ticker: "USN" }),
  row("credit-protocol", "Noon", "staked USN", "live", { ticker: "sUSN" }),
  row("credit-protocol", "Cap", "cUSD", "live", { ticker: "cUSD" }),
  row("credit-protocol", "Cap", "staked cUSD", "live", {
    ticker: "stcUSD",
  }),
  row("credit-protocol", "Coinshift", "Coinshift USPC", "live", {
    ticker: "iUSPC",
    platform: "Coinshift",
    issuerLegalEntity: "Coinshift Limited",
    accessModel: "Permissioned",
    assetClass: "Credit Pool",
  }),
  row(
    "credit-protocol",
    "Adaptive Frontier",
    "Adaptive Frontier Credit Vault",
    "live",
    {},
  ),

  // Layer 6 — Wrapper / Venue
  row(
    "wrapper-venue",
    "Nest Credit",
    "BlackOpal LiquidStone II Vault",
    "live",
    {
      ticker: "NOPAL",
      platform: "Nest Credit",
      issuerLegalEntity: "Nest DAO LLC",
      accessModel: "Permissionless",
      assetClass: "Trade Finance, Active Vault",
      sizeUsd: 51020000,
      notes: "Larger than underlying OALS2T. Does not reconcile.",
    },
  ),
  row("wrapper-venue", "Nest Credit", "FalconX CLO Vault", "live", {
    ticker: "NFALCON",
    platform: "Nest Credit",
    issuerLegalEntity: "Nest DAO LLC",
    accessModel: "Permissionless",
    assetClass: "Credit Pool, Active Vault",
    sizeUsd: 28800000,
  }),
  row("wrapper-venue", "Nest Credit", "USDC PayFi Lending Vault", "live", {
    ticker: "NAXI",
    platform: "Nest Credit",
    issuerLegalEntity: "Nest DAO LLC",
    accessModel: "Permissionless",
    assetClass: "Structured Credit, Active Vault",
    sizeUsd: 5460000,
  }),
  row("wrapper-venue", "Nest Credit", "WisdomTree Vault", "live", {
    ticker: "NWISDOM",
    platform: "Nest Credit",
    issuerLegalEntity: "Nest DAO LLC",
    accessModel: "Permissionless",
    assetClass: "Credit Pool, Active Vault",
    sizeUsd: 2890000,
    notes: "Holds 78% of CRDYX. Direct double-count.",
  }),
  row("wrapper-venue", "Nest Credit", "Liquid Credit Vault", "live", {
    ticker: "NLCRD",
    platform: "Nest Credit",
    issuerLegalEntity: "Nest DAO LLC",
    accessModel: "Permissionless",
    assetClass: "Credit Pool, Active Vault",
    sizeUsd: 2120000,
  }),
  row("wrapper-venue", "Nest Credit", "Apollo ACRDX Vault", "live", {
    ticker: "NACRDX",
    platform: "Nest Credit",
    issuerLegalEntity: "Nest DAO LLC",
    accessModel: "Permissionless",
    assetClass: "Credit Pool, Active Vault",
    sizeUsd: 100573,
    notes: "Wraps ACRDX.",
  }),
  row("wrapper-venue", "Nest Credit", "Nest Credit Vault", "live", {
    ticker: "NCREDIT",
    platform: "Nest Credit",
    issuerLegalEntity: "Nest DAO LLC",
    accessModel: "Permissionless",
    assetClass: "Credit Pool, Active Vault",
    sizeUsd: 36376,
  }),
  row(
    "wrapper-venue",
    "Nest Credit",
    "Hamilton Lane SCOPE Vault",
    "live",
    {
      ticker: "NSCOPE",
      platform: "Nest Credit",
      issuerLegalEntity: "Nest DAO LLC",
      accessModel: "Permissionless",
      assetClass: "Credit Pool, Active Vault",
      notes: "Wraps HLSCOPE.",
    },
  ),
  row("wrapper-venue", "Nest Credit", "Bybit Vault 1", "live", {
    ticker: "NBYBIT1",
    platform: "Nest Credit",
    issuerLegalEntity: "Nest DAO LLC",
    accessModel: "Permissionless",
    assetClass: "Credit Pool, Active Vault",
  }),
  row("wrapper-venue", "Nest Credit", "nALPHA", "live", {
    ticker: "nALPHA",
    platform: "Nest Credit",
    issuerLegalEntity: "Nest DAO LLC",
    accessModel: "Permissionless",
  }),
  row("wrapper-venue", "Aave", "Aave Horizon RWA", "live", {
    assetClass: "Venue",
    sizeUsd: 258740000,
    notes: "Largest venue in RWA Lending category.",
  }),
  row("wrapper-venue", "Morpho", "Morpho vaults", "live", {
    assetClass: "Venue",
    notes: "Curator-managed. Primary recursion venue.",
  }),
  row("wrapper-venue", "Ethena", "Ethena", "live", { assetClass: "Venue" }),
  row("wrapper-venue", "Sky", "Grove", "live", { assetClass: "Venue" }),
  row("wrapper-venue", "Turtle", "Turtle", "live", {
    assetClass: "Venue",
    notes: "Liquidity distribution.",
  }),
  row("wrapper-venue", "Plume", "Plume Network", "live", {
    assetClass: "Venue",
    notes: "Hosts Nest.",
  }),
  row(
    "wrapper-venue",
    "OnRe",
    "OnRe Tokenized Reinsurance",
    "live",
    {
      ticker: "ONyc",
      platform: "OnRe",
      issuerLegalEntity: "On Re SAC Ltd",
      accessModel: "Permissionless",
      assetClass: "Reinsurance Pool",
      sizeUsd: 270480000,
      notes: "Reinsurance. Adjacent category. Utilization 80.95%.",
    },
  ),
  row("wrapper-venue", "Re Protocol", "Re Protocol reUSD", "live", {
    ticker: "reUSD",
    platform: "Re Protocol",
    issuerLegalEntity: "Resilience (BVI) Ltd",
    accessModel: "Permissionless",
    assetClass: "Reinsurance Pool",
    sizeUsd: 218520000,
    notes: "Reinsurance. Adjacent category. Utilization 96.93%.",
  }),

  // Layer 7 — Helper
  row("helper", "Keyring Network", "zk-KYC infrastructure", "live", {}),
  row("helper", "RedStone", "Oracle", "live", {}),
  row("helper", "Chainlink", "Oracle", "live", {}),
  row("helper", "Securitize", "Transfer agent / issuance", "live", {
    notes: "Also appears as tokenization platform.",
  }),
  row("helper", "Provenance", "Chain", "live", {
    notes: "Figure's chain. Not on Dune.",
  }),
];
