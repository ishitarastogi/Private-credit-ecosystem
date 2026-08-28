import type { Lesson } from "@/data/learn/types";

export const whenLiquidityDisappears: Lesson = {
  slug: "when-liquidity-disappears",
  moduleKey: "failure-modes",
  order: 3,
  title: "When liquidity disappears",
  summary: "Private-credit assets can have slow-moving underlying risk while DeFi markets react almost instantly.",
  blocks: [
    {
      type: "paragraph",
      lead: true,
      text: "A defaulted loan can take years to work out through legal recovery. A DeFi position built on top of that same loan can be liquidated in a single block. These two time horizons cannot be reconciled — the DeFi side simply cannot wait for the real-world side to resolve.",
    },
    {
      type: "comparison",
      subjects: ["Underlying loan", "DeFi"],
      rows: [{ attribute: "Time to recover / liquidate", values: ["Months to years", "Seconds to blocks"] }],
    },
    {
      type: "paragraph",
      text: "In practice, this shows up as a cascade: redemption requests rise faster than a cash reserve can absorb them, the reserve drains, the token becomes genuinely harder to redeem, and any secondary market for it demands a bigger discount to compensate for that new uncertainty.",
    },
    {
      type: "callout",
      tone: "key-concept",
      text: "This is the core lesson of the whole Failure Modes module: private-credit assets can have slow-moving underlying risk, while the DeFi markets built around them can react almost instantly. That mismatch — not any single bad loan — is what turns a manageable credit problem into a liquidity crisis.",
    },
    {
      type: "takeaways",
      items: [
        "The underlying loan's recovery timeline (months to years) and DeFi's liquidation timeline (seconds to blocks) are structurally incompatible.",
        "A liquidity crisis typically cascades: rising redemptions drain the cash reserve, then the token becomes harder to redeem, widening any secondary-market discount.",
        "This slow-money/fast-money mismatch, covered in depth in Module 05, is the mechanism — not any single bad loan — behind most severe onchain private credit failures.",
      ],
    },
  ],
};
