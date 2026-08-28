import type { Lesson } from "@/data/learn/types";

export const firstLossProtection: Lesson = {
  slug: "first-loss-protection",
  moduleKey: "credit-structure",
  order: 7,
  title: "First-loss protection",
  summary: "First-loss capital absorbs losses before senior investors — a form of credit enhancement.",
  blocks: [
    {
      type: "paragraph",
      lead: true,
      text: "First-loss capital is capital that has explicitly agreed to absorb losses before anyone senior to it. It's the same mechanism as a junior tranche, seen from the perspective of what it does for everyone above it.",
    },
    {
      type: "widget",
      widget: "waterfall-simulator",
      title: "A $100M portfolio with $10M of first-loss protection",
      description: "$10M junior, $90M senior. Try $5M and $15M of loss.",
      config: {
        poolUsd: 100_000_000,
        seniorUsd: 90_000_000,
        juniorUsd: 10_000_000,
        defaultLossUsd: 5_000_000,
        maxLossUsd: 100_000_000,
      },
    },
    {
      type: "list",
      style: "bullet",
      title: "Two checkpoints",
      items: [
        { label: "$5M loss", detail: "Junior absorbs all $5M, dropping to $5M. Senior is fully protected." },
        { label: "$15M loss", detail: "Junior absorbs its full $10M and is wiped out. The remaining $5M of loss reaches senior." },
      ],
    },
    {
      type: "callout",
      tone: "key-concept",
      text: "First-loss protection is a form of credit enhancement — a structural feature that improves the credit quality of the tranches above it, without changing anything about the underlying loans themselves. A $90M senior tranche behind $10M of first-loss capital is a meaningfully different risk than the same $90M with no protection at all.",
    },
    {
      type: "paragraph",
      text: "The size of the first-loss layer relative to the pool is often the single most important number for assessing how protected a senior position really is — it tells you exactly how large a loss the pool can absorb before senior is touched at all.",
    },
    {
      type: "takeaways",
      items: [
        "First-loss capital absorbs losses before senior investors, up to the size of the first-loss layer.",
        "It's the same underlying mechanism as a junior tranche, described in terms of what protection it provides to the layers above it.",
        "First-loss protection is a form of credit enhancement — it improves the effective credit quality of senior claims without changing the underlying loans.",
        "The size of the first-loss layer relative to the total pool tells you exactly how much loss the structure can absorb before senior is affected.",
      ],
    },
  ],
};
