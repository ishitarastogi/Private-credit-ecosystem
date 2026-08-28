import type { Lesson } from "@/data/learn/types";

export const whatIsOnchain: Lesson = {
  slug: "what-is-onchain",
  moduleKey: "foundations",
  order: 2,
  title: "What is Onchain Private Credit?",
  summary: "Three very different levels hide behind the same word — and none of them guarantee liquidity.",
  blocks: [
    {
      type: "paragraph",
      lead: true,
      text: "\"Onchain private credit\" is used to describe products that work in completely different ways. Before evaluating any of them, you need to know which level you're actually looking at.",
    },
    {
      type: "list",
      style: "numbered",
      title: "Three levels of \"onchain\"",
      items: [
        {
          label: "Level 1 — Onchain record keeping",
          detail: "The loan exists entirely offchain. A blockchain is just used to record information about it — a ledger entry, not a financial rail.",
        },
        {
          label: "Level 2 — Tokenized credit",
          detail: "A loan or fund is held inside a legal structure (an SPV), and a token represents an investor's interest in that structure. The token is the financial rail; the loan is still offchain.",
        },
        {
          label: "Level 3 — DeFi-composable credit",
          detail: "The credit token itself becomes usable inside DeFi — as collateral on a DEX or lending market, enabling borrowing and leverage against it.",
        },
      ],
    },
    {
      type: "flow-diagram",
      title: "The three levels, side by side",
      orientation: "vertical",
      showZoneLegend: true,
      steps: [
        { id: "l1", label: "Level 1: Record keeping", detail: "Loan exists offchain → blockchain records information", zone: "neutral" },
        { id: "l2", label: "Level 2: Tokenized credit", detail: "Loan / fund → SPV → token → investor", zone: "neutral" },
        { id: "l3", label: "Level 3: DeFi-composable", detail: "Credit token → DEX / lending market → collateral → leverage", zone: "neutral" },
      ],
    },
    {
      type: "callout",
      tone: "warning",
      title: "Three things \"onchain\" does not automatically mean",
      text: "ONCHAIN ≠ AUTOMATICALLY LIQUID. ONCHAIN ≠ AUTOMATICALLY PERMISSIONLESS. ONCHAIN ≠ AUTOMATICALLY COMPOSABLE. Each of these is a separate design decision a project makes — none of them come for free just because a token exists.",
    },
    {
      type: "heading",
      text: "The onchain / offchain boundary",
      level: 3,
    },
    {
      type: "paragraph",
      text: "Every onchain private credit product has a boundary — a line where the smart contract's authority ends and a real-world legal and operational process takes over. Knowing where that line sits is the single most useful skill in this entire subject.",
    },
    {
      type: "comparison",
      title: "What's typically on each side of the boundary",
      subjects: ["Generally onchain", "Generally offchain"],
      rows: [
        { attribute: "1", values: ["Deposits", "Borrower underwriting"] },
        { attribute: "2", values: ["Token issuance", "Loan agreements"] },
        { attribute: "3", values: ["Vault accounting", "Collateral perfection"] },
        { attribute: "4", values: ["Interest distribution", "Servicing"] },
        { attribute: "5", values: ["NAV reporting", "Covenant enforcement"] },
        { attribute: "6", values: ["DeFi collateral use", "Bankruptcy"] },
        { attribute: "7", values: ["Redemptions, where supported", "Recovery"] },
      ],
    },
    {
      type: "callout",
      tone: "key-concept",
      text: "A smart contract can automate the money moving around a loan. It cannot, by itself, chase a defaulted borrower, perfect a lien on collateral, or fight a bankruptcy proceeding. Those remain real-world, offchain processes no matter how automated the token layer looks.",
    },
    {
      type: "takeaways",
      items: [
        "\"Onchain\" can mean record-keeping only, full tokenization via an SPV, or DeFi-composable collateral — these are very different levels of risk and structure.",
        "Being onchain does not automatically make a product liquid, permissionless, or composable.",
        "Every product has an onchain/offchain boundary — accounting and distribution tend to sit onchain, underwriting and legal enforcement tend to sit offchain.",
        "Identifying which side of the boundary a given feature sits on is the first step to evaluating any product.",
      ],
    },
    {
      type: "quiz",
      questions: [
        {
          id: "q1",
          question: "A protocol says its credit token is \"fully onchain.\" What does that NOT automatically tell you?",
          options: [
            "That it's a real token",
            "That it's liquid, permissionless, or composable",
            "That interest distribution happens automatically",
            "That NAV is reported somewhere",
          ],
          correctIndex: 1,
        },
        {
          id: "q2",
          question: "Which of these typically stays offchain even in a well-designed onchain credit product?",
          options: ["Token issuance", "NAV reporting", "Bankruptcy and recovery proceedings", "Vault accounting"],
          correctIndex: 2,
        },
      ],
    },
  ],
};
