import type { Lesson } from "@/data/learn/types";

export const howToDetectDoubleCounting: Lesson = {
  slug: "how-to-detect-double-counting",
  moduleKey: "analyze",
  order: 3,
  title: "How to detect double counting",
  summary: "When a wrapper token and its underlying token get counted as two separate exposures — real examples from the database.",
  blocks: [
    {
      type: "paragraph",
      lead: true,
      text: "Double counting happens when the same underlying credit exposure gets tallied more than once because it's wrapped, re-deposited, or accessed through more than one product at the same time. It inflates the apparent size of the market without any new lending actually happening.",
    },
    {
      type: "scenario",
      title: "WisdomTree CRDYX and Nest NWISDOM",
      setup: "In the project database, WisdomTree issues CRDYX, a tokenized credit fund. Nest Credit issues NWISDOM, a vault token that wraps CRDYX.",
      walkthrough: [
        "The database's own notes flag that Nest's NWISDOM vault holds roughly 78% of CRDYX's outstanding supply.",
        "If you add CRDYX's reported size and NWISDOM's reported size together as if they were two separate pools of credit, you've counted the same underlying exposure almost twice.",
      ],
      lesson: "This is flagged directly in the dataset as a \"direct double-count\" — a wrapper token holding a large share of its own underlying token's supply.",
    },
    {
      type: "scenario",
      title: "KAIO SCOPE and Hamilton Lane's HLSCOPE",
      setup: "Hamilton Lane issues HLSCOPE. KAIO separately offers \"Hamilton Lane SCOPE access\" — a second product providing exposure to the same underlying strategy.",
      walkthrough: [
        "Both products ultimately point back to the same Hamilton Lane credit strategy.",
        "Summing their reported sizes would count the same underlying strategy's assets through two different access routes.",
      ],
      lesson: "The database flags this as a \"double-count candidate\" — not necessarily wrapped in the same direct way as NWISDOM/CRDYX, but still two routes into the same underlying exposure.",
    },
    {
      type: "scenario",
      title: "BlackOpal's OALS2T and Nest's NOPAL",
      setup: "BlackOpal issues OALS2T. Nest Credit's NOPAL vault is built to wrap it.",
      walkthrough: [
        "The dataset notes that NOPAL's reported size is actually larger than the underlying OALS2T it's supposed to wrap.",
        "The two numbers don't reconcile — which is a warning sign distinct from, but related to, double counting.",
      ],
      lesson: "Double counting inflates totals by adding the same exposure twice. A reconciliation gap like this one is the opposite kind of red flag — it means the numbers don't even agree on how much underlying exposure actually exists.",
    },
    {
      type: "heading",
      text: "How to check for it yourself",
      level: 3,
    },
    {
      type: "list",
      style: "numbered",
      items: [
        { label: "Identify wrapper relationships", detail: "does this token's documentation say it wraps, holds, or provides access to another specific token?" },
        { label: "Check for overlap in reported size", detail: "if you're summing TVL or market cap across products, check whether one product's holdings are a large share of another's supply" },
        { label: "Watch for near-identical strategy names", detail: "products with different tickers but the same manager and strategy name are worth checking for overlap" },
      ],
    },
    {
      type: "takeaways",
      items: [
        "Double counting occurs when the same underlying credit exposure is tallied through more than one wrapper or access route.",
        "Real examples exist in the project database: NWISDOM holding ~78% of CRDYX, and KAIO's SCOPE access alongside Hamilton Lane's own HLSCOPE.",
        "A reconciliation gap — like NOPAL's reported size exceeding its underlying OALS2T — is a related but distinct red flag: the numbers disagree rather than double-count.",
        "Before summing TVL or market size across products, check for wrapper relationships and overlapping strategy exposure.",
      ],
    },
  ],
};
