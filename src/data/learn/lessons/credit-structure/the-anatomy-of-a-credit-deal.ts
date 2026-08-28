import type { Lesson } from "@/data/learn/types";

export const theAnatomyOfACreditDeal: Lesson = {
  slug: "the-anatomy-of-a-credit-deal",
  moduleKey: "credit-structure",
  order: 1,
  title: "The anatomy of a credit deal",
  summary: "From a real-world borrower to an investable onchain token — the full assembly line.",
  blocks: [
    {
      type: "paragraph",
      lead: true,
      text: "Every onchain private credit product traces back to the same basic assembly line. Once you can name each stage, you can place any product you encounter onto this same map.",
    },
    {
      type: "flow-diagram",
      title: "From borrower to investor",
      orientation: "vertical",
      showZoneLegend: true,
      steps: [
        { id: "borrower", label: "Borrower", detail: "needs capital", zone: "offchain" },
        { id: "originator", label: "Originator", detail: "sources and structures the loan", zone: "offchain" },
        { id: "loan", label: "Loan", detail: "capital is disbursed against agreed terms", zone: "offchain" },
        { id: "spv", label: "SPV", detail: "a legal entity holds the loan, separate from its sponsor", zone: "offchain" },
        { id: "pool", label: "Credit pool", detail: "the loan sits alongside others in a pool", zone: "offchain" },
        { id: "securitization", label: "Securitization", detail: "the pool's cash flows are packaged into securities", zone: "offchain" },
        { id: "tranches", label: "Tranches", detail: "the securities are split by seniority", zone: "offchain" },
        { id: "tokenization", label: "Tokenization", detail: "a tranche or fund interest is represented as a token", zone: "onchain" },
        { id: "investor", label: "Investor", detail: "holds the token and receives cash flows", zone: "onchain" },
      ],
    },
    {
      type: "paragraph",
      text: "Not every deal uses every stage — a simple whole-loan sale skips securitization and tranching entirely, and some products tokenize a fund interest rather than a loan pool. But the sequence never runs backward: a token never creates a loan; it represents a claim on one that already exists somewhere upstream.",
    },
    {
      type: "heading",
      text: "Six roles worth telling apart",
      level: 3,
    },
    {
      type: "comparison",
      subjects: ["Role", "What it actually does"],
      rows: [
        { attribute: "Originator", values: ["Sources the borrower and structures the original loan terms"] },
        { attribute: "Tokenization platform", values: ["Builds the technical rails that turn a legal interest into a transferable onchain token"] },
        { attribute: "Fund manager", values: ["Makes ongoing investment decisions across a pool or fund, and is accountable for its performance"] },
        { attribute: "SPV", values: ["The legal entity that actually holds the loan or pool, isolated from its sponsor's other business"] },
        { attribute: "Credit protocol", values: ["The onchain software that accepts deposits, issues tokens, and automates distribution"] },
        { attribute: "Investor", values: ["Provides capital and holds whatever claim the structure actually grants them"] },
      ],
    },
    {
      type: "callout",
      tone: "key-concept",
      text: "These six roles are often assumed to be one and the same entity. In reality, a single product can involve six different organizations, each with different incentives — and the strength of your position often depends on how well they're separated and documented, not just on the yield number.",
    },
    {
      type: "takeaways",
      items: [
        "The full assembly line runs Borrower → Originator → Loan → SPV → Credit Pool → Securitization → Tranches → Tokenization → Investor.",
        "Not every product uses every stage — but the sequence only ever runs one direction, from real-world loan to onchain token.",
        "Originator, tokenization platform, fund manager, SPV, credit protocol, and investor are six distinct roles that are easy to conflate but important to separate.",
        "The rest of this module goes stage by stage: SPVs, securitization, tranching, the waterfall, and first-loss protection.",
      ],
    },
  ],
};
