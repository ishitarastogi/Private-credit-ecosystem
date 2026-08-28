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
  twitter?: string;
  /** Only set where the dataset's notes name one specific chain explicitly. */
  chain?: string;
  assetIds: string[];
  /** Internal audit metadata only — never rendered in the UI. */
  logoSource?: "official-website" | "unverified";
  logoVerified?: boolean;
}

// Every entry below was individually verified against the project's own
// official website (or, where the live site was inaccessible, an official
// asset mirrored via the Wayback Machine) during a dedicated logo audit.
// Token/ticker icons, aggregator sites (CoinGecko/CoinMarketCap), and
// generated/AI art were never used as a source. Projects not listed here
// could not be confidently verified and intentionally have no logo — the UI
// falls back to a neutral initial-letter mark instead of guessing.
const verifiedLogos: Partial<Record<string, string>> = {
  "3f": "/logos/3f.svg",
  "3jane": "/logos/3jane.svg",
  aave: "/logos/aave.svg",
  "adaptive-frontier": "/logos/adaptive-frontier.svg",
  agridex: "/logos/agridex.svg",
  apollo: "/logos/apollo.svg",
  "berkeley-square-finance-group": "/logos/berkeley-square-finance-group.svg",
  bitbond: "/logos/bitbond.png",
  blackopal: "/logos/blackopal.png",
  cap: "/logos/cap.png",
  centrifuge: "/logos/centrifuge.svg",
  chainlink: "/logos/chainlink.svg",
  clearpool: "/logos/clearpool.svg",
  coinshift: "/logos/coinshift.svg",
  "credible-finance": "/logos/credible-finance.svg",
  "credit-coop": "/logos/credit-coop.svg",
  credix: "/logos/credix.png",
  "csigma-finance": "/logos/csigma-finance.png",
  ethena: "/logos/ethena.svg",
  ethichub: "/logos/ethichub.svg",
  falconx: "/logos/falconx.svg",
  fasanara: "/logos/fasanara.png",
  figure: "/logos/figure.svg",
  "galaxy-asset-management": "/logos/galaxy-asset-management.svg",
  goblin: "/logos/goblin.svg",
  goldfinch: "/logos/goldfinch.png",
  "hamilton-lane": "/logos/hamilton-lane.svg",
  "harvest-flow": "/logos/harvest-flow.svg",
  hastra: "/logos/hastra.png",
  "huma-finance": "/logos/huma-finance.svg",
  infinifi: "/logos/infinifi.svg",
  intain: "/logos/intain.png",
  "isle-finance": "/logos/isle-finance.png",
  "janus-henderson": "/logos/janus-henderson.svg",
  kaio: "/logos/kaio.svg",
  kasu: "/logos/kasu.svg",
  "keyring-network": "/logos/keyring-network.svg",
  liqi: "/logos/liqi.svg",
  "maple-finance": "/logos/maple-finance.png",
  midas: "/logos/midas.png",
  morpho: "/logos/morpho.svg",
  "nest-credit": "/logos/nest-credit.svg",
  noon: "/logos/noon.png",
  obligate: "/logos/obligate.png",
  onre: "/logos/onre.svg",
  openfi: "/logos/openfi.png",
  pareto: "/logos/pareto.svg",
  "pharos-network": "/logos/pharos-network.png",
  plume: "/logos/plume.svg",
  provenance: "/logos/provenance.png",
  r25: "/logos/r25.svg",
  "re-protocol": "/logos/re-protocol.svg",
  redstone: "/logos/redstone.svg",
  "robbin-pagamentos": "/logos/robbin-pagamentos.svg",
  securitize: "/logos/securitize.svg",
  "strata-markets": "/logos/strata-markets.png",
  sukukfi: "/logos/sukukfi.svg",
  tradable: "/logos/tradable.svg",
  "travessia-credit": "/logos/travessia-credit.png",
  turtle: "/logos/turtle.svg",
  "untangled-finance": "/logos/untangled-finance.svg",
  "usd-ai": "/logos/usd-ai.svg",
  "vert-capital": "/logos/vert-capital.svg",
  wisdomtree: "/logos/wisdomtree.svg",
  zivoe: "/logos/zivoe.svg",
};

// Canonical website/X links, provided directly by the user, keyed by project
// id. Kept verbatim as supplied — never altered or invented. Projects not
// listed here simply have no website/twitter.
//
// One exception: strata-markets' website was updated from the originally
// supplied strata.xyz (confirmed during the logo audit to now be a
// parked/resold domain unrelated to the project) to strata.markets, the
// project's actual live domain. Its X link is kept as originally supplied.
const projectLinks: Partial<
  Record<string, { website: string; twitter: string }>
> = {
  fasanara: {
    website: "https://fasanara.com",
    twitter: "https://x.com/FasanaraDigital",
  },
  infinifi: {
    website: "https://infinifi.xyz",
    twitter: "https://x.com/infinifilabs",
  },
  noon: {
    website: "https://noon.capital",
    twitter: "https://x.com/noon_capital",
  },
  midas: { website: "https://midas.app", twitter: "https://x.com/MidasRWA" },
  hastra: { website: "https://hastra.io", twitter: "https://x.com/HastraFi" },
  "3jane": { website: "https://3jane.xyz", twitter: "https://x.com/3jane_xyz" },
  tradable: {
    website: "https://tradable.xyz",
    twitter: "https://x.com/tradable",
  },
  "strata-markets": {
    website: "https://strata.markets",
    twitter: "https://x.com/Strata_Money",
  },
  "keyring-network": {
    website: "https://keyring.network",
    twitter: "https://x.com/KeyringNetwork",
  },
  figure: {
    website: "https://figuremarkets.com",
    twitter: "https://x.com/FigureMarkets",
  },
  "maple-finance": {
    website: "https://maple.finance",
    twitter: "https://x.com/maplefinance",
  },
  centrifuge: {
    website: "https://centrifuge.io",
    twitter: "https://x.com/centrifuge",
  },
  cap: { website: "https://cap.app", twitter: "https://x.com/capmoney_" },
  clearpool: {
    website: "https://clearpool.finance",
    twitter: "https://x.com/ClearpoolFin",
  },
  credix: {
    website: "https://credix.finance",
    twitter: "https://x.com/credixfinance",
  },
  goldfinch: {
    website: "https://goldfinch.finance",
    twitter: "https://x.com/goldfinch_fi",
  },
  "pharos-network": {
    website: "https://pharosnetwork.xyz",
    twitter: "https://x.com/pharos_network",
  },
  "huma-finance": {
    website: "https://huma.finance",
    twitter: "https://x.com/humafinance",
  },
  turtle: {
    website: "https://turtle.xyz",
    twitter: "https://x.com/turtledotxyz",
  },
  securitize: {
    website: "https://securitize.io",
    twitter: "https://x.com/Securitize",
  },
  "mu-digital": {
    website: "https://mu.digital",
    twitter: "https://x.com/MuDigital_",
  },
  "hamilton-lane": {
    website: "https://hamiltonlane.com",
    twitter: "https://x.com/Hamilton_Lane",
  },
  wisdomtree: {
    website: "https://wisdomtree.com",
    twitter: "https://x.com/WisdomTreeNews",
  },
  "nest-credit": {
    website: "https://nest.credit",
    twitter: "https://x.com/nest_credit",
  },
  "vert-capital": {
    website: "https://vert.capital",
    twitter: "https://x.com/vertcapital",
  },
  falconx: { website: "https://falconx.io", twitter: "https://x.com/falconx" },
  pareto: {
    website: "https://pareto.credit",
    twitter: "https://x.com/paretocredit",
  },
  "credit-coop": {
    website: "https://creditcoop.xyz",
    twitter: "https://x.com/CreditCoop",
  },
  "isle-finance": {
    website: "https://isle.finance",
    twitter: "https://x.com/isle_finance",
  },
  "csigma-finance": {
    website: "https://csigma.finance",
    twitter: "https://x.com/csigmafinance",
  },
  kasu: {
    website: "https://kasu.finance",
    twitter: "https://x.com/KasuFinance",
  },
};

// Short, human-readable "what is this and why does it matter here" summaries
// for the Ecosystem quick-view drawer — NOT copies of the dataset's Notes
// field, which contains internal research caveats (Dune availability,
// reconciliation flags, double-count warnings, etc.) that must never surface
// to end users. Written only where the project's public purpose is
// reasonably well established; projects intentionally left out of this map
// simply show no About section rather than a fabricated description.
const projectDescriptions: Partial<Record<string, string>> = {
  figure:
    "Figure is a financial technology company that originates and services home-equity financing. Its Figure Markets Democratized Prime product provides onchain access to Figure-originated home-equity credit.",
  fasanara:
    "Fasanara Capital is an alternative asset manager focused on private credit and fintech lending strategies. Its mF-ONE and mGLOBAL products, issued through Midas's tokenization infrastructure, bring Fasanara's private credit pools onchain as permissionless yield-bearing tokens.",
  "huma-finance":
    "Huma Finance is a PayFi protocol that finances real-world payment flows and receivables rather than static collateral. Its Huma PST product lets investors fund short-duration, income-backed credit directly onchain.",
  goldfinch:
    "Goldfinch is a decentralized credit protocol that funds real-world lending businesses, particularly in emerging markets, without requiring crypto collateral. Its Goldfinch Prime product pools capital into diversified private credit exposure.",
  credix:
    "Credix was an institutional credit marketplace connecting onchain capital to real-world lending businesses in emerging markets. Its CRDX pools financed originators directly, though the protocol is currently winding down.",
  "untangled-finance":
    "Untangled Finance is a tokenized private-credit protocol, backed by Fasanara, that brings real-world credit pools onchain on Celo. It provides infrastructure for originators to structure and finance credit pools with onchain transparency.",
  obligate:
    "Obligate is a Swiss-regulated platform for issuing onchain bonds and commercial paper. Its Trade Finance Yield product lets investors access short-term, structured trade finance debt directly onchain.",
  "usd-ai":
    "USD AI is a credit protocol that finances GPU and AI-compute infrastructure through onchain lending, an emerging category of private credit collateralized by physical compute assets rather than financial receivables.",
  "3f": "3F provides leveraged access to real-world asset yield strategies built on Morpho's lending infrastructure, letting investors amplify exposure to tokenized credit and RWA yield.",
  agridex:
    "AgriDex tokenizes agricultural commodity and trade finance exposure on Solana. Its vault products, such as the AY-Aniseed vault, provide financing against physical commodity trade flows.",
  "berkeley-square-finance-group":
    "Berkeley Square Finance Group provides capital solutions to lenders operating in emerging markets. Its EM Portfolio products, structured through PACT, bring diversified emerging-market credit exposure onchain.",
  "robbin-pagamentos":
    "Robbin Pagamentos is a Brazilian B2B credit fintech providing working-capital financing to businesses. Its receivables are structured and tokenized through Liqi's securitization platform.",
  "travessia-credit":
    "Travessia Credit is an institutional trade-finance platform providing invoice and receivables financing, bringing short-duration trade credit exposure onchain for investors.",
  "8lends":
    "8lends is a peer-to-peer crowdlending platform, built on Base, that connects investors to RWA-collateralized loans and provides retail-accessible exposure to diversified real-world lending.",
  "unblock-equity":
    "Unblock Equity is a DeFi protocol, built on Base, that lets homeowners borrow against home equity — bringing home-equity financing into an onchain lending format.",
  ethichub:
    "EthicHub provides agricultural microfinance to smallholder farmers, particularly coffee producers in Latin America, using blockchain to fund and track loans.",
  openfi:
    "OpenFi bridges real-world assets into DeFi by letting users borrow stablecoins against tokenized stock and other real-world collateral, extending onchain credit markets beyond crypto-native collateral.",
  sukukfi:
    "SukukFi is a DeFi platform providing Islamic-finance-compliant, profit-sharing credit products, including tokenized telecom bonds, bringing Sharia-compliant structured finance onchain.",
  atlendis:
    "Atlendis was an undercollateralized lending protocol that let institutional borrowers access onchain credit lines without posting full collateral. The protocol has since been deprecated.",
  liqi: "Liqi is a Brazilian securitization and tokenization platform that structures receivables and credit portfolios into onchain notes, including the Robbin Pagamentos receivables represented in this ecosystem.",
  midas:
    "Midas is a tokenization platform that issues yield-bearing tokens backed by real-world credit and treasury strategies, including products issued on behalf of originators like Fasanara.",
  securitize:
    "Securitize is a tokenization and transfer-agent platform used to issue and administer tokenized securities for institutional asset managers, including Apollo and Hamilton Lane funds represented in this ecosystem.",
  centrifuge:
    "Centrifuge is an onchain securitization protocol that structures pools of real-world assets into tokenized, tranched credit products, underpinning funds such as Janus Henderson's JAAA and Apollo's ACRDX.",
  tradable:
    "Tradable is a tokenization platform that issues individual private credit notes for specific financing transactions, such as trade finance and specialty lending deals, rather than pooling loans together.",
  bitbond:
    "Bitbond is a tokenization platform that issues digital securities, including bonds, on behalf of originators, bringing individual debt instruments like the VuMe Bond onchain.",
  kaio: "KAIO is a tokenization provider that offers investor access to institutional private credit strategies, including a route into Hamilton Lane's SCOPE fund, functioning as a distribution layer rather than an originator.",
  apollo:
    "Apollo Global Management is a large alternative asset manager with an established private credit business. Its diversified credit strategy is represented onchain through tokenized products like ACRED and ACRDX.",
  "hamilton-lane":
    "Hamilton Lane is a global private markets investment manager. Its Senior Credit Opportunities strategy is made available onchain through the tokenized SCOPE fund.",
  wisdomtree:
    "WisdomTree is an asset manager known for exchange-traded funds and, more recently, tokenized digital funds. Its Private Credit and Alternative Income Digital Fund (CRDYX) brings a diversified private credit strategy onchain.",
  "janus-henderson":
    "Janus Henderson is a global asset manager that partnered with Centrifuge and Anemoy to bring credit strategies onchain, including the Anemoy AAA CLO Fund (JAAA) and a tokenized Treasury fund (JTRSY).",
  "galaxy-asset-management":
    "Galaxy Asset Management, part of Galaxy Digital, manages digital-asset and credit strategies for institutional clients. It issued a tokenized collateralized loan obligation (Galaxy CLO 2025-1) on Avalanche.",
  falconx:
    "FalconX is an institutional digital-asset prime brokerage that provides trading, custody, and credit services to crypto institutions. Its Credit Vault, wrapped by Nest Credit, extends that facility to onchain investors.",
  "strata-markets":
    "Strata Markets is a DeFi protocol that splits yield-bearing stablecoin positions into senior and junior risk tranches, letting investors choose their position in the same underlying pool's risk and return profile.",
  "mu-digital":
    "Mu Digital is an Asia-focused platform for tokenized real-world credit. Its AZND senior and muBOND junior products split credit exposure into tranches, similar to a traditional structured note.",
  "vert-capital":
    "VERT Capital is a Brazilian securitization company that structures receivables and credit portfolios into tokenized tranches, bringing Brazilian structured credit onchain.",
  "maple-finance":
    "Maple Finance is an onchain institutional credit protocol providing lending pools for real-world and crypto-native borrowers. Its syrupUSDC and syrupUSDT pools are among the largest sources of onchain private credit yield.",
  hastra:
    "Hastra is an RWA yield platform built by the team behind Figure. Its PRIME and AUTO products provide onchain yield backed by real-world credit exposure.",
  pareto:
    "Pareto is a protocol for programmable institutional credit. Its USP token and staked variant provide onchain exposure to structured private credit strategies.",
  clearpool:
    "Clearpool is an onchain capital markets protocol that lets institutions borrow directly from permissionless liquidity pools, providing undercollateralized lending markets for vetted institutional borrowers.",
  coinshift:
    "Coinshift is a DeFi treasury management platform that has expanded into yield-bearing credit products. Its Coinshift USPC product gives treasury users exposure to structured private credit yield.",
  "nest-credit":
    "Nest Credit is a vault platform that wraps tokenized credit products from other issuers — including Apollo, Hamilton Lane, WisdomTree, and FalconX — into a single permissionless interface, functioning as an access layer rather than an originator.",
  aave: "Aave is one of the largest DeFi lending protocols, and its Aave Horizon initiative extends the protocol to accept real-world asset collateral, making it a primary venue for tokenized credit as onchain collateral.",
  morpho:
    "Morpho is a DeFi lending protocol powering curated, permissionless lending markets. Many credit tokens in this ecosystem are deposited into Morpho vaults as collateral.",
  ethena:
    "Ethena is a synthetic dollar protocol that generates yield through a delta-neutral trading strategy, included here as a comparison point for onchain yield-bearing dollar products alongside private-credit alternatives.",
  sky: "Sky (formerly MakerDAO) is a decentralized stablecoin and lending protocol behind USDS, one of the largest and longest-running sources of onchain credit and collateralized lending infrastructure.",
  plume:
    "Plume is a modular blockchain built specifically for real-world asset finance. It hosts Nest Credit and other RWA-focused applications.",
  onre: "OnRe is an onchain reinsurance protocol that tokenizes exposure to reinsurance risk pools, included in this ecosystem as an adjacent category to private credit.",
  "re-protocol":
    "Re Protocol is an onchain reinsurance protocol offering tokenized exposure to reinsurance risk through its reUSD product, an adjacent category to private credit.",
  "keyring-network":
    "Keyring Network provides zero-knowledge compliance infrastructure that lets DeFi protocols verify user eligibility without exposing personal data, supporting permissioned credit products that require KYC or accreditation checks.",
  redstone:
    "RedStone is a modular oracle protocol that delivers price and data feeds to DeFi applications, providing pricing infrastructure that credit protocols and vaults in this ecosystem rely on.",
  chainlink:
    "Chainlink is a leading decentralized oracle network, providing price feeds and data infrastructure that many credit protocols and lending markets in this ecosystem depend on.",
  provenance:
    "Provenance is a blockchain built by Figure specifically for financial services, including loan origination and servicing. It is the settlement layer for Figure's HELOC products.",
};

// Only set where the dataset's notes explicitly name one specific chain —
// counts like "3 chains" without naming them are not converted into a value
// here, since that would require guessing which chains.
const projectChains: Partial<Record<string, string>> = {
  figure: "Provenance",
  "untangled-finance": "Celo",
};

function buildProjects(): Project[] {
  const order: string[] = [];
  const byId = new Map<string, Project>();

  for (const row of datasetRows) {
    const id = slugify(row.project);
    const existing = byId.get(id);

    if (!existing) {
      order.push(id);
      const logo = verifiedLogos[id];
      byId.set(id, {
        id,
        name: row.project,
        primaryLayer: row.layerKey,
        roles: [row.layerKey],
        description: projectDescriptions[id],
        logo,
        website: projectLinks[id]?.website,
        twitter: projectLinks[id]?.twitter,
        chain: projectChains[id],
        assetIds: [],
        logoSource: logo ? "official-website" : "unverified",
        logoVerified: Boolean(logo),
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
