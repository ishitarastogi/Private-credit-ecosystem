import type { Lesson } from "@/data/learn/types";

export const leverageAndLooping: Lesson = {
  slug: "leverage-and-looping",
  moduleKey: "credit-defi",
  order: 3,
  title: "Leverage & looping",
  summary: "Deposit, borrow, buy more, deposit again — each loop compounds both yield and risk.",
  blocks: [
    {
      type: "paragraph",
      lead: true,
      text: "A common pattern: deposit into a credit vault, receive a yield-bearing token, post that token as collateral on a lending market, borrow against it, use the borrowed funds to buy more of the same token, deposit again, and borrow again. Each loop increases yield exposure — and increases leverage.",
    },
    {
      type: "widget",
      widget: "leverage-loop-simulator",
      title: "The leverage loop",
      description: "Click \"Loop again\" and watch leverage compound.",
      config: {
        startUsd: 100,
        maxLoops: 6,
        loopBorrowRatio: 0.85,
      },
    },
    {
      type: "paragraph",
      text: "Notice how quickly the gap between position size and equity widens. Each additional loop adds proportionally more debt than the last dollar of true capital it represents — which is exactly why a small decline late in the loop sequence can wipe out equity that took many loops to build.",
    },
    {
      type: "takeaways",
      items: [
        "Looping means borrowing against a credit token to buy and re-deposit more of the same token, repeatedly.",
        "Each loop increases both position size and debt — leverage compounds with every iteration.",
        "The more loops, the smaller the collateral decline needed to wipe out all equity — this connects directly to LLTV from the previous lesson.",
      ],
    },
  ],
};
