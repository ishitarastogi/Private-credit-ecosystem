import type { Lesson } from "@/data/learn/types";

export const lltvAndLiquidations: Lesson = {
  slug: "lltv-and-liquidations",
  moduleKey: "credit-defi",
  order: 2,
  title: "LLTV & liquidations",
  summary: "The threshold that decides when a small decline becomes a forced sale.",
  blocks: [
    {
      type: "paragraph",
      lead: true,
      text: "LLTV — loan-to-liquidation-loan-to-value — is the collateral ratio at which a position becomes eligible for liquidation. If collateral is worth $100 and the LLTV is 91.5%, the maximum debt before liquidation risk is $91.50. The gap between your actual debt and that threshold is your safety margin — and it can be thin.",
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
      type: "paragraph",
      text: "Once debt exceeds the liquidation threshold, a liquidator is economically incentivized to seize and sell the collateral, typically at a discount, to repay the debt and collect a fee. That sale happens on the DeFi market's timeline — not the underlying credit's.",
    },
    {
      type: "takeaways",
      items: [
        "LLTV sets the collateral ratio at which a position becomes eligible for liquidation.",
        "A higher LLTV leaves a thinner margin between normal operation and a forced liquidation.",
        "A liquidation is triggered mechanically once debt exceeds the threshold — it doesn't wait for the underlying credit story to play out.",
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
      ],
    },
  ],
};
