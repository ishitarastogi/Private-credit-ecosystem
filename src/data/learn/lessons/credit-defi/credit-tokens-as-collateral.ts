import type { Lesson } from "@/data/learn/types";

export const creditTokensAsCollateral: Lesson = {
  slug: "credit-tokens-as-collateral",
  moduleKey: "credit-defi",
  order: 1,
  title: "Credit tokens as collateral",
  summary: "A token built for steady yield takes on a very different life once it becomes DeFi collateral.",
  blocks: [
    {
      type: "paragraph",
      lead: true,
      text: "A private credit token may be designed to generate predictable yield. Nothing about it needs to be volatile or fast-moving. But once that token can be posted as collateral in DeFi, it inherits an entirely different set of dynamics — the subject of this whole module.",
    },
    {
      type: "flow-diagram",
      title: "What happens once a credit token becomes collateral",
      orientation: "vertical",
      steps: [
        { id: "token", label: "Credit token", detail: "yield-bearing, backed by offchain credit", zone: "onchain" },
        { id: "collateral", label: "DeFi collateral", detail: "accepted on a lending market like Aave or Morpho", zone: "onchain" },
        { id: "borrow", label: "Borrow USDC", detail: "against the posted collateral", zone: "onchain" },
        { id: "buy", label: "Buy more credit token", detail: "with the borrowed USDC", zone: "onchain" },
        { id: "loop", label: "Loop", detail: "deposit again, borrow again", zone: "onchain" },
        { id: "decline", label: "NAV decline", detail: "the underlying credit deteriorates", zone: "offchain" },
        { id: "liquidation", label: "Liquidation", detail: "leveraged positions are forced to unwind", zone: "onchain" },
      ],
    },
    {
      type: "callout",
      tone: "key-concept",
      text: "DeFi composability can amplify the consequences of an underlying credit impairment. The credit problem itself doesn't get worse because of DeFi — but the speed, size, and visibility of its consequences change completely.",
    },
    {
      type: "paragraph",
      text: "The next three lessons unpack each stage of this flow: LLTV and what triggers a liquidation, the mechanics of the leverage loop itself, and why the mismatch between slow-moving credit and fast-moving DeFi liquidations is a structural risk, not an edge case.",
    },
    {
      type: "takeaways",
      items: [
        "A credit token's risk profile changes the moment it becomes accepted as DeFi collateral.",
        "Borrowing against a credit token to buy more of it — looping — compounds both yield exposure and liquidation risk.",
        "DeFi composability amplifies the consequences of a credit impairment; it doesn't create the impairment itself.",
        "The following three lessons cover LLTV, leverage mechanics, and the slow-money/fast-money mismatch in turn.",
      ],
    },
  ],
};
