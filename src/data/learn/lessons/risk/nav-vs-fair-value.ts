import type { Lesson } from "@/data/learn/types";

export const navVsFairValue: Lesson = {
  slug: "nav-vs-fair-value",
  moduleKey: "risk",
  order: 3,
  title: "NAV vs fair value",
  summary: "The mark you see and the price you'd actually get are two different numbers.",
  blocks: [
    {
      type: "paragraph",
      lead: true,
      text: "NAV tells you what the underlying portfolio is marked at. It does not necessarily tell you what you can actually sell the token for right now.",
    },
    {
      type: "widget",
      widget: "nav-vs-liquidity",
      title: "The NAV-to-liquidation gap",
      description: "Try increasing market stress and watch the gap widen.",
      config: {
        navPrice: 1.0,
        marketPrice: 0.97,
        liquidationValue: 0.95,
      },
    },
    {
      type: "paragraph",
      text: "This gap exists because NAV is a model-based, periodic mark — often set by the manager. The market price reflects what buyers are actually willing to pay right now, which can be lower if liquidity is thin. The realizable liquidation value can be lower still, because a forced sale gets a worse price than an orderly one.",
    },
    {
      type: "callout",
      tone: "warning",
      text: "A stable-looking NAV is not proof that nothing is wrong — it can simply mean the mark hasn't caught up yet. Ask how frequently NAV is updated, and by whom, before treating it as a live price.",
    },
    {
      type: "takeaways",
      items: [
        "NAV, market price, and realizable liquidation value are three different numbers that can diverge, especially under stress.",
        "NAV is a periodic, model-based mark — it can lag real deterioration in the underlying portfolio.",
        "Market price reflects actual buyer willingness to pay right now; liquidation value reflects what a forced, urgent sale would actually achieve.",
        "A stable NAV doesn't rule out a real problem — check how and how often it's actually updated.",
      ],
    },
  ],
};
