import type { Lesson } from "@/data/learn/types";

export const seniorVsJunior: Lesson = {
  slug: "senior-vs-junior",
  moduleKey: "credit-structure",
  order: 5,
  title: "Senior vs junior",
  summary: "Junior capital is the first-loss layer protecting senior capital — try it with real numbers.",
  blocks: [
    {
      type: "paragraph",
      lead: true,
      text: "Take the two simplest tranches — senior and junior — and watch exactly what happens as losses grow.",
    },
    {
      type: "widget",
      widget: "waterfall-simulator",
      title: "Senior vs junior — the loss waterfall",
      description: "Pool = $100M. Senior = $70M. Junior = $30M. Move the loss slider.",
      config: {
        poolUsd: 100_000_000,
        seniorUsd: 70_000_000,
        juniorUsd: 30_000_000,
        defaultLossUsd: 10_000_000,
        maxLossUsd: 100_000_000,
      },
    },
    {
      type: "list",
      style: "bullet",
      title: "Three checkpoints, worked out",
      items: [
        { label: "Loss = $10M", detail: "Senior stays at $70M. Junior absorbs the full loss, dropping to $20M." },
        { label: "Loss = $30M", detail: "Senior still stays at $70M. Junior is fully wiped out, down to $0." },
        { label: "Loss = $40M", detail: "Junior is already at $0 — it can't absorb any more. Senior now starts taking losses too, dropping to $60M." },
      ],
    },
    {
      type: "callout",
      tone: "key-concept",
      text: "Junior capital is the first-loss layer protecting senior capital. Every dollar of loss is absorbed by junior first, for as long as junior has anything left to absorb it with.",
    },
    {
      type: "callout",
      tone: "warning",
      text: "Don't describe senior as \"safe.\" Senior is protected by the capital beneath it, but it still has credit risk — as the third checkpoint above shows, once junior (and any mezzanine) is exhausted, senior absorbs losses too.",
    },
    {
      type: "takeaways",
      items: [
        "Junior absorbs 100% of losses up to its own size before senior loses anything at all.",
        "Once junior is exhausted, further losses fall on the next layer up — mezzanine if present, otherwise senior.",
        "Senior is protected, not risk-free — a large enough loss reaches every layer, including senior.",
        "This is exactly why junior tranches are compensated with higher yield: they're taking on the first-loss risk that protects everyone above them.",
      ],
    },
    {
      type: "quiz",
      questions: [
        {
          id: "q1",
          question: "Pool = $100M, Senior = $70M, Junior = $30M. At what loss amount does senior first start losing money?",
          options: ["$10M", "$20M", "Above $30M", "$70M"],
          correctIndex: 2,
          explanation: "Junior absorbs the first $30M of losses in full. Only losses beyond $30M reach senior.",
        },
      ],
    },
  ],
};
