import type { Lesson } from "@/data/learn/types";

export const whatIsSecuritization: Lesson = {
  slug: "what-is-securitization",
  moduleKey: "credit-structure",
  order: 3,
  title: "What is securitization?",
  summary: "Turning a pool of loans into investable securities — and setting up the next lesson, tranching.",
  blocks: [
    {
      type: "paragraph",
      lead: true,
      text: "Securitization takes a pool of financial assets — loans, receivables, leases — and packages their combined cash flows into securities that investors can actually buy.",
    },
    {
      type: "flow-diagram",
      orientation: "vertical",
      steps: [
        { id: "loans", label: "Many loans", zone: "offchain" },
        { id: "pool", label: "Pool", zone: "offchain" },
        { id: "spv", label: "SPV", zone: "offchain" },
        { id: "securities", label: "Securities / tokens", zone: "onchain" },
        { id: "investors", label: "Investors", zone: "onchain" },
      ],
    },
    {
      type: "paragraph",
      text: "Pooling matters on its own, before any further structuring: a single loan either pays or defaults. A pool of many loans, from different borrowers, tends to behave more predictably in aggregate — some individual loans will underperform, but the pool as a whole is easier to model and price.",
    },
    {
      type: "heading",
      text: "One pool, different claims",
      level: 3,
    },
    {
      type: "paragraph",
      text: "The security a securitization issues doesn't have to be a single, uniform claim on the pool. The same underlying cash flows can be split into multiple securities, each with a different priority for getting paid and a different exposure to losses.",
    },
    {
      type: "callout",
      tone: "key-concept",
      text: "This is the idea that leads directly into the next lesson: tranching. The pool doesn't change — what changes is how its cash flows and losses are divided among different investors.",
    },
    {
      type: "takeaways",
      items: [
        "Securitization packages a pool of loans' cash flows into securities that investors can hold.",
        "Pooling many loans together makes aggregate performance more predictable than any single loan.",
        "The same pool can back more than one type of security, each with a different claim on its cash flows.",
        "That splitting mechanism — how one pool produces different claims — is exactly what tranching does, covered next.",
      ],
    },
  ],
};
