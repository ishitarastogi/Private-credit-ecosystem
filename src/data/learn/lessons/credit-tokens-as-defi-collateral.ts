import type { Lesson } from "@/data/learn/types";

export const creditTokensAsDefiCollateral: Lesson = {
  slug: "credit-tokens-as-defi-collateral",
  moduleKey: "credit-meets-defi",
  order: 1,
  title: "When credit tokens become DeFi collateral",
  summary: "Leverage, LLTV, and the gap between what your token is marked at and what you can sell it for.",
  blocks: [
    {
      type: "paragraph",
      lead: true,
      text: "A private credit token may be designed to generate predictable yield. Nothing about it needs to be volatile or fast-moving. But once that token can be posted as collateral in DeFi, it inherits an entirely different set of dynamics.",
    },
    {
      type: "heading",
      text: "Leverage and looping",
      level: 3,
    },
    {
      type: "paragraph",
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
      type: "heading",
      text: "LLTV — loan-to-liquidation-loan-to-value",
      level: 3,
    },
    {
      type: "paragraph",
      text: "LLTV is the collateral ratio at which a position becomes eligible for liquidation. If collateral is worth $100 and the LLTV is 91.5%, the maximum debt before liquidation risk is $91.50. The gap between your actual debt and that threshold is your safety margin — and it can be thin.",
    },
    {
      type: "widget",
      widget: "lltv-simulator",
      title: "LLTV and liquidation threshold",
      description: "Adjust collateral value, LLTV, and debt to see how close a position sits to liquidation.",
      config: {
        collateralUsd: 100,
        initialLltv: 91.5,
        initialNav: 100,
      },
    },
    {
      type: "callout",
      tone: "warning",
      text: "A high LLTV means a small decline in collateral value — even a modest NAV markdown — can be enough to push a position past its liquidation threshold. The higher the LLTV, the thinner that margin.",
    },
    {
      type: "heading",
      text: "NAV vs liquidity",
      level: 3,
    },
    {
      type: "paragraph",
      text: "NAV tells you what the underlying portfolio is marked at. It does not necessarily tell you what you can actually sell the token for right now.",
    },
    {
      type: "widget",
      widget: "nav-vs-liquidity",
      title: "The NAV-to-liquidation gap",
      config: {
        navPrice: 1.0,
        marketPrice: 0.97,
        liquidationValue: 0.95,
      },
    },
    {
      type: "paragraph",
      text: "This gap exists because NAV is a model-based, periodic mark — often set by the manager. The market price reflects what buyers are actually willing to pay right now, which can be lower if liquidity is thin. The realizable liquidation value can be lower still, because a forced sale (a liquidator dumping collateral quickly) gets a worse price than an orderly one.",
    },
    {
      type: "flow-diagram",
      title: "How the gap widens under stress",
      orientation: "vertical",
      showZoneLegend: false,
      steps: [
        { id: "markdown", label: "NAV markdown", detail: "underlying credit deteriorates" },
        { id: "redemptions", label: "Redemptions increase", detail: "investors try to exit" },
        { id: "drain", label: "Cash sleeve drains", detail: "reserve buffer used up meeting redemptions" },
        { id: "harder", label: "Token becomes harder to redeem", detail: "queues, gates, or delays appear" },
        { id: "discount", label: "Secondary market discount increases", detail: "buyers demand a bigger markdown to take the risk" },
        { id: "liquidators", label: "Liquidators face worse economics", detail: "forced sellers get the worst price of all" },
      ],
    },
    {
      type: "callout",
      tone: "key-concept",
      title: "Slow money meets fast money",
      text: "Private credit may take months or years to recover from a default. DeFi liquidations happen in seconds or blocks. That mismatch — slow money meets fast money — is one of the core structural risks of putting private credit into DeFi collateral markets. A liquidator can't wait years for a workout; they need to sell now, at whatever price the market will bear.",
    },
    {
      type: "takeaways",
      items: [
        "Looping — borrowing against a credit token to buy more of it — compounds both yield exposure and liquidation risk with every loop.",
        "LLTV defines the liquidation threshold; a higher LLTV leaves a thinner safety margin against NAV declines.",
        "NAV, market price, and realizable liquidation value are three different numbers that can diverge under stress.",
        "Slow-moving private credit and fast-moving DeFi liquidations are fundamentally mismatched in time horizon — this mismatch is a structural risk, not an edge case.",
      ],
    },
    {
      type: "quiz",
      questions: [
        {
          id: "q1",
          question: "With $100 collateral and a 91.5% LLTV, what is the maximum debt before liquidation risk?",
          options: ["$100", "$91.50", "$85", "$108.50"],
          correctIndex: 1,
        },
        {
          id: "q2",
          question: "What does \"slow money meets fast money\" describe?",
          options: [
            "Private credit recovers in seconds",
            "The mismatch between private credit's months-to-years recovery timeline and DeFi's seconds-to-blocks liquidation timeline",
            "DeFi is always slower than traditional finance",
            "NAV updates happen instantly",
          ],
          correctIndex: 1,
        },
      ],
    },
  ],
};
