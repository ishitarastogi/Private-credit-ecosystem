import type { Lesson } from "@/data/learn/types";

export const howAnRwaCreditVaultBlowsUp: Lesson = {
  slug: "how-an-rwa-credit-vault-blows-up",
  moduleKey: "how-it-breaks",
  order: 2,
  title: "Anatomy of a vault blowup",
  summary: "The flagship failure case — step through exactly how a credit vault unwinds.",
  blocks: [
    {
      type: "paragraph",
      lead: true,
      text: "This is the scenario every earlier lesson in this section was building toward. Step through it stage by stage, and notice how every earlier concept — the claim chain, NAV vs liquidity, LLTV, leverage looping, legal claim failure — shows up here at once.",
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
            consequence: "The gap between NAV, market price, and realizable liquidation value — from Module 05 — is now the entire story.",
          },
        ],
      },
    },
    {
      type: "callout",
      tone: "warning",
      title: "Every tokenized credit blowup ends the same way",
      text: "Someone tries to liquidate, and finds out the token wasn't a liquid claim on anything real — just a claim on an issuer's marked price, tested for the first time under stress.",
    },
    {
      type: "paragraph",
      text: "Notice that no single step here was exotic. Each one, on its own, is something covered elsewhere in this Learn section: a claim chain that stops at the issuer (Module 03), a NAV that lags reality (Module 04), leverage that amplifies a small decline (Module 05), and a liquidity mismatch between real-world recovery and DeFi liquidation speed (Module 05, Failure #4 above). The blowup is what happens when all of them are true of the same token at the same time.",
    },
    {
      type: "takeaways",
      items: [
        "A vault blowup is rarely one dramatic failure — it's several ordinary risks (weak legal claim, lagging NAV, DeFi leverage, liquidity mismatch) compounding at once.",
        "The moment of truth is almost always a liquidation: it's the first time anyone needs a real market price, not a marked one.",
        "The two questions that matter most going in are the same ones from Module 03 and 06: who legally owes you money, and what is the collateral's real, testable price — not its marked one?",
        "Every concept in this Learn section exists to help you spot these conditions before they compound, not just to recognize them after the fact.",
      ],
    },
  ],
};
