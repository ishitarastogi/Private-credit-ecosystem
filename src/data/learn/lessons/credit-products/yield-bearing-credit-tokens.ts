import type { Lesson } from "@/data/learn/types";

export const yieldBearingCreditTokens: Lesson = {
  slug: "yield-bearing-credit-tokens",
  moduleKey: "credit-products",
  order: 5,
  title: "Yield-bearing credit tokens",
  summary: "The most composable — and most commonly misunderstood — shape in this whole category.",
  blocks: [
    {
      type: "paragraph",
      lead: true,
      text: "A yield-bearing credit token is designed so its price or supply grows over time, funded by the yield of whatever credit exposure sits underneath it. This is the product shape most likely to end up as DeFi collateral, which is exactly why Module 05 exists.",
    },
    {
      type: "paragraph",
      text: "The project database includes several real examples of this shape: Maple's syrupUSDC and syrupUSDT accrue value from Maple's onchain lending pools; Midas's mTBILL and mBASIS accrue from the strategies Midas issues; Hastra's PRIME and AUTO tokens work the same way. Each is marketed similarly — deposit, hold, and the token's value grows — but the underlying credit exposure and legal structure behind each one can be completely different.",
    },
    {
      type: "callout",
      tone: "warning",
      text: "A rising token price or growing balance tells you the mechanism is working as designed. It does not tell you whether the underlying credit is healthy — see Module 04's NAV vs Fair Value lesson for what can go wrong between the two.",
    },
    {
      type: "heading",
      text: "Wrapped versions of the same exposure",
      level: 3,
    },
    {
      type: "paragraph",
      text: "It's also common for one yield-bearing token to wrap another. In the project database, Nest Credit issues NACRDX, a vault token that specifically wraps Apollo's ACRDX. An investor holding NACRDX is one layer further from the underlying loans than an investor holding ACRDX directly — the same fundamental credit exposure, packaged through an extra layer.",
    },
    {
      type: "callout",
      tone: "key-concept",
      text: "Every extra wrapping layer is a legitimate question, not necessarily a problem: what does this layer add — access, liquidity, composability — and what, if anything, does it cost you in terms of legal claim or fee drag versus holding the underlying token directly?",
    },
    {
      type: "takeaways",
      items: [
        "Yield-bearing credit tokens grow in value or supply from underlying credit yield — real examples include Maple's syrupUSDC, Midas's mTBILL, and Hastra's PRIME.",
        "A growing balance or rising price confirms the accrual mechanism is working, not that the underlying credit is healthy.",
        "Tokens can wrap other yield-bearing tokens — Nest Credit's NACRDX wraps Apollo's ACRDX — adding a layer between the investor and the underlying exposure.",
        "For any wrapped token, ask what the extra layer adds and what it might cost in legal claim strength or fees.",
      ],
    },
  ],
};
