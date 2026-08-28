import type { ResourceEntry } from "@/data/learn/types";

export const resources: ResourceEntry[] = [
  {
    id: "chainlink-tokenized-private-credit",
    title: "What Is Tokenized Private Credit?",
    author: "Chainlink",
    type: "Explainer",
    topic: "Beginner overview of tokenized private credit",
    whyItMatters:
      "The most approachable starting point in this library — a plain-language overview before diving into mechanics.",
    categories: ["Start Here"],
    url: "https://chain.link/article/tokenized-private-credit",
  },
  {
    id: "chainlink-onchain-private-lending",
    title: "Onchain Private Lending: The Future of Institutional Credit",
    author: "Chainlink",
    type: "Explainer",
    topic: "Origination-to-repayment lifecycle of onchain private lending",
    whyItMatters:
      "Walks through the origination → assessment → funding → repayment lifecycle and where oracles and data feeds fit — a good mental model for Module 02's dollar-flow lesson.",
    categories: ["Start Here", "How Onchain Credit Works"],
    url: "https://chain.link/article/onchain-private-lending",
  },
  {
    id: "defillama-rwa-research",
    title: "RWA / Tokenization Research Hub",
    author: "DefiLlama Research",
    type: "Research hub",
    topic: "Structural taxonomy of tokenized private credit",
    whyItMatters:
      "Breaks tokenized private credit into four structural models — tokenized funds, onchain lending pools, structured/specialty credit, and reinsurance-linked credit — a useful map of the whole market.",
    categories: ["Start Here", "Market Structure"],
    url: "https://defillama.com/research/topics/rwa",
  },
  {
    id: "spglobal-tokenized-private-credit",
    title: "Tokenized Private Credit: A New Digital Frontier for Real World Assets",
    author: "S&P Global",
    type: "Special report",
    topic: "Institutional ratings-agency view on tokenization",
    whyItMatters:
      "A traditional-finance ratings agency's take on where tokenization genuinely helps private credit (liquidity, efficiency, transparency) and where the use cases remain limited.",
    categories: ["Market Structure", "Traditional Private Credit", "Credit Risk"],
    url: "https://www.spglobal.com/en/research-insights/special-reports/tokenized-private-credit",
  },
  {
    id: "galaxy-state-of-crypto-lending",
    title: "The State of Crypto Lending",
    author: "Galaxy Research",
    type: "Research report",
    topic: "Onchain vs offchain crypto lending market structure",
    whyItMatters:
      "Data-driven view of how onchain lending's share of the market has grown — useful context for sizing how much of \"private credit\" is actually onchain today.",
    categories: ["Market Structure"],
    url: "https://assets.ctfassets.net/h62aj7eo1csj/4vkA9567QmK4pyYoPBtrQa/fb039fd97d657d8151dcf4d3e969e481/The_State_of_Crypto_Lending_-_Galaxy_Research.pdf",
  },
  {
    id: "steakhouse-onchain-repo",
    title: "The Curious Case of On-Chain Private Credit Repo",
    author: "Steakhouse Financial",
    type: "Research note",
    topic: "Why tokenized credit needs repo/redemption routes to function in DeFi",
    whyItMatters:
      "Explains why illiquid real-world credit needs a frictionless redemption or repo route (like BlackRock BUIDL's cash buffer) to keep pace with 24/7 DeFi — directly underpins Module 05's NAV-vs-liquidity lesson.",
    categories: ["DeFi + RWA Collateral", "How Onchain Credit Works"],
    url: "https://kitchen.steakhouse.financial/p/the-curious-case-of-on-chain-private",
  },
  {
    id: "amico-rwa-vaults-today",
    title: "How most RWA credit vaults work today",
    author: "Jeff Amico",
    type: "Essay",
    topic: "The common legal-claim gap in RWA credit vaults",
    whyItMatters:
      "Argues that most RWA credit vault users receive a yield-bearing token governed by a platform's terms of service, without an enforceable direct claim on the underlying borrower or collateral — the exact mechanism behind Module 03's Legal Claim Test.",
    categories: ["Start Here", "DeFi + RWA Collateral"],
    url: null,
    pending: true,
  },
  {
    id: "amico-rwa-facility-blows-up",
    title: "How an RWA credit facility blows up",
    author: "Jeff Amico",
    type: "Essay",
    topic: "The failure mechanics of a tokenized credit vault used as DeFi collateral",
    whyItMatters:
      "Walks through the exact scenario dramatized in Module 08's flagship vault-blowup lesson — a vault-issued stablecoin becomes Morpho collateral, and a liquidation reveals it was never a liquid claim on anything.",
    categories: ["DeFi + RWA Collateral", "Defaults / Failure Cases"],
    url: null,
    pending: true,
  },
  {
    id: "theblock-maple-orthogonal-default",
    title: "Orthogonal Trading defaults on $36 million of loans on Maple Finance",
    author: "The Block",
    type: "News report",
    topic: "The December 2022 Maple Finance / Orthogonal Trading default",
    whyItMatters:
      "Primary reporting on the default that sits behind the Maple case study in Module 07 — FTX contagion, undercollateralized lending, and roughly 30% of active loans affected.",
    categories: ["Defaults / Failure Cases", "Protocol Research"],
    url: "https://www.theblock.co/post/192097/maple-finance-default-orthogonal-trading",
  },
  {
    id: "messari-goldfinch-default",
    title: "Goldfinch Default: The Double-Edged Sword of RWAs",
    author: "Messari",
    type: "Analyst report",
    topic: "Undercollateralized-lending default mechanics at Goldfinch",
    whyItMatters:
      "A second, independent default case study alongside Maple — useful for comparing how different undercollateralized-credit designs fail.",
    categories: ["Defaults / Failure Cases", "Credit Risk"],
    url: "https://messari.io/report/goldfinch-default-the-double-edged-sword-of-rwas",
  },
  {
    id: "messari-maple-sweet-and-steady",
    title: "Maple Finance: Sweet and Steady",
    author: "Messari",
    type: "Protocol report",
    topic: "Maple's post-2022 shift toward secured lending",
    whyItMatters:
      "Covers the redesign referenced in Module 07's Maple case study — the shift from undercollateralized institutional credit toward more secured structures.",
    categories: ["Protocol Research"],
    url: "https://messari.io/report/maple-finance-sweet-and-steady",
  },
  {
    id: "messari-centrifuge-transparency",
    title: "Centrifugal Transparency for Tokenized Assets",
    author: "Messari",
    type: "Protocol report",
    topic: "Centrifuge's onchain securitization architecture",
    whyItMatters:
      "Deeper background on the SPV and tranche structuring model referenced in Module 07's Centrifuge case study.",
    categories: ["Protocol Research"],
    url: "https://messari.io/report/centrifugal-transparency-for-tokenized-assets",
  },
  {
    id: "blackrock-what-is-private-credit",
    title: "What is Private Credit & How to Invest",
    author: "BlackRock",
    type: "Investor primer",
    topic: "Traditional (offchain) private credit as an asset class",
    whyItMatters:
      "A large institutional asset manager's plain-language primer on private credit before any blockchain layer is added — useful grounding for Module 01.",
    categories: ["Traditional Private Credit"],
    url: "https://www.blackrock.com/us/financial-professionals/insights/inside-alternatives/what-is-private-credit",
  },
  {
    id: "pimco-structural-mechanics",
    title: "Structural Mechanics of Securitised Credit",
    author: "PIMCO",
    type: "Education center article",
    topic: "SPVs, tranching, and credit enhancement mechanics",
    whyItMatters:
      "An institutional-grade explanation of the securitization mechanics behind Module 04's tranche waterfall and Module 07's Centrifuge case study.",
    categories: ["Securitization / Structured Credit"],
    url: "https://www.pimco.com/lat/en/resources/education-center/fixed-income/structural-mechanics-of-securitised-credit",
  },
  {
    id: "angeloak-securitization-101",
    title: "Securitization 101: A Primer on Structured Finance",
    author: "Angel Oak Capital",
    type: "Primer",
    topic: "The originate → pool → tranche → distribute process",
    whyItMatters:
      "An accessible, step-by-step walkthrough of the securitization process for readers new to structured finance.",
    categories: ["Securitization / Structured Credit"],
    url: "https://angeloakcapital.com/securitization-101-a-primer-on-structured-finance/",
  },
];
