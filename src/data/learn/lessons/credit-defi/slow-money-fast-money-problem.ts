import type { Lesson } from "@/data/learn/types";

export const slowMoneyFastMoneyProblem: Lesson = {
  slug: "slow-money-fast-money-problem",
  moduleKey: "credit-defi",
  order: 4,
  title: "The slow money / fast money problem",
  summary: "Private credit recovers in months to years. DeFi liquidates in seconds. That mismatch is structural.",
  blocks: [
    {
      type: "paragraph",
      lead: true,
      text: "This is the lesson that ties the whole module together. Everything covered so far — collateral becoming liquidation-eligible, leverage compounding through loops — collides with one basic fact: private credit and DeFi run on completely different clocks.",
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
      type: "comparison",
      subjects: ["Private credit", "DeFi"],
      rows: [{ attribute: "Time to recover / liquidate", values: ["Months to years", "Seconds to blocks"] }],
    },
    {
      type: "callout",
      tone: "key-concept",
      title: "Slow money meets fast money",
      text: "Private credit may take months or years to recover. DeFi liquidations happen in seconds or blocks. That mismatch — slow money meets fast money — is one of the core structural risks of putting private credit into DeFi collateral markets. A liquidator can't wait years for a workout; they need to sell now, at whatever price the market will bear.",
    },
    {
      type: "takeaways",
      items: [
        "NAV, market price, and realizable liquidation value can diverge sharply under stress — see Module 04's NAV vs Fair Value lesson.",
        "A markdown can trigger a self-reinforcing cascade: redemptions rise, cash reserves drain, and secondary market discounts widen.",
        "Private credit's recovery timeline (months to years) is fundamentally incompatible with DeFi's liquidation timeline (seconds to blocks).",
        "This mismatch is structural, not incidental — it's present in any product that connects illiquid credit to instantly-liquidatable DeFi collateral.",
      ],
    },
    {
      type: "quiz",
      questions: [
        {
          id: "q1",
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
