import type { Lesson } from "@/data/learn/types";

export const whenDefiLeverageAmplifiesLosses: Lesson = {
  slug: "when-defi-leverage-amplifies-losses",
  moduleKey: "failure-modes",
  order: 4,
  title: "When DeFi leverage amplifies losses",
  summary: "Leverage doesn't create the initial problem — it multiplies it. The flagship failure case, step by step.",
  blocks: [
    {
      type: "paragraph",
      lead: true,
      text: "Leverage doesn't create the initial problem — it multiplies it. A NAV decline that would have been a minor markdown on an unlevered position becomes a cascade of forced liquidations across every looped position built on top of it.",
    },
    {
      type: "flow-diagram",
      orientation: "horizontal",
      steps: [
        { id: "token", label: "Credit token" },
        { id: "borrow", label: "Borrow against token" },
        { id: "buy", label: "Buy more token" },
        { id: "repeat", label: "Repeat" },
        { id: "decline", label: "Small NAV decline" },
        { id: "cascade", label: "Large liquidation cascade" },
      ],
    },
    {
      type: "heading",
      text: "The claim underneath it all",
      level: 3,
    },
    {
      type: "comparison",
      title: "Two very different structures",
      subjects: ["Weak structure", "Strong structure"],
      rows: [
        { attribute: "1", values: ["Investor → Token → Protocol", "Investor → Legal claim on SPV → Underlying loan → Borrower / collateral"] },
        { attribute: "Enforceability", values: ["Investor's recourse may stop at the protocol's terms of service", "Investor's claim traces through a documented legal structure to the actual loan"] },
      ],
    },
    {
      type: "callout",
      tone: "warning",
      text: "These two structures can look identical from the outside — same token, same dashboard, same yield number. They are economically very different. Only one of them gives you an enforceable path to the borrower or collateral if something goes wrong. Leverage doesn't just amplify credit losses — it amplifies the consequences of having the weaker claim, exactly when it matters most.",
    },
    {
      type: "heading",
      text: "Anatomy of a vault blowup",
      level: 3,
    },
    {
      type: "paragraph",
      text: "This is the flagship scenario for the whole Learn section. Step through it stage by stage, and notice how the claim chain, NAV vs liquidity, LLTV, leverage looping, and legal claim failure all show up at once.",
    },
    {
      type: "widget",
      widget: "vault-blowup-simulator",
      title: "Step through the blowup",
      config: {
        steps: [
          {
            id: "deposit",
            label: "Deposit",
            detail: "An investor deposits USDC into a credit vault, marketed as backed by a portfolio of offchain loans.",
            zone: "onchain",
            consequence: "In exchange, they receive a yield-bearing token — call it USDX.",
          },
          {
            id: "wrap",
            label: "The token is wrapped in a story, not a legal claim",
            detail: "USDX is marketed as fully backed. But the investor's actual relationship is with the vault issuer's terms of service, not directly with the loans or the SPV that may hold them.",
            zone: "offchain",
            consequence: "Nobody has tested that claim yet — it hasn't needed to be tested.",
          },
          {
            id: "market",
            label: "A Morpho market opens",
            detail: "The issuer (or a third party) creates a DeFi lending market where USDX can be posted as collateral to borrow USDC.",
            zone: "onchain",
            consequence: "USDX now has a second, faster-moving life as DeFi collateral — on top of its first life as a credit claim.",
          },
          {
            id: "loop",
            label: "Leverage builds",
            detail: "Users borrow USDC against USDX, buy more USDX, deposit it again, and borrow again — see Module 05.",
            zone: "onchain",
            consequence: "Small amounts of real capital now support a much larger notional position across the looped vaults.",
          },
          {
            id: "deteriorate",
            label: "Offchain, something goes wrong",
            detail: "One or more of the underlying loans becomes impaired. This isn't visible onchain yet — NAV hasn't been marked down.",
            zone: "offchain",
            consequence: "The token still trades near $1.00. Nothing in the DeFi market reflects the problem yet.",
          },
          {
            id: "markdown",
            label: "NAV is marked down",
            detail: "The vault issuer updates NAV to reflect the impairment. The token's marked value drops.",
            zone: "onchain",
            consequence: "Positions built on USDX as collateral are now closer to their liquidation threshold.",
          },
          {
            id: "liquidate",
            label: "Someone tries to liquidate",
            detail: "A leveraged position crosses its LLTV. A liquidator moves to seize and sell the USDX collateral for USDC.",
            zone: "onchain",
            consequence: "The liquidator needs a real market price for USDX — not a NAV mark, an actual buyer.",
          },
          {
            id: "no-price",
            label: "There is no real market for the collateral",
            detail: "USDX has no deep secondary market. The only 'price' anyone has been using is the issuer's own NAV mark.",
            zone: "offchain",
            consequence: "The liquidator finds out the token wasn't a liquid claim on anything — it was a claim on the issuer's word.",
          },
          {
            id: "cascade",
            label: "Cascade",
            detail: "Forced selling at a steep discount, other looped positions become undercollateralized in turn, and redemption requests spike against a vault whose underlying loans are illiquid by design.",
            zone: "offchain",
            consequence: "The gap between NAV, market price, and realizable liquidation value is now the entire story.",
          },
        ],
      },
    },
    {
      type: "callout",
      tone: "key-concept",
      title: "Every tokenized credit blowup ends the same way",
      text: "Someone tries to liquidate, and finds out the token wasn't a liquid claim on anything real — just a claim on an issuer's marked price, tested for the first time under stress.",
    },
    {
      type: "takeaways",
      items: [
        "Leverage multiplies the consequences of a credit problem — a small NAV decline becomes a large liquidation cascade across looped positions.",
        "A weak legal claim (investor → token → protocol) and a strong one (investor → legal claim on SPV → loan) can look identical until the moment of liquidation, when the difference becomes everything.",
        "A vault blowup is rarely one dramatic failure — it's several ordinary risks from earlier modules compounding at the same time.",
        "The two questions that matter most going in: who legally owes you money, and what is the collateral's real, testable price — not its marked one?",
      ],
    },
  ],
};
