import type { Lesson } from "@/data/learn/types";

export const whatCanYouActuallyBuy: Lesson = {
  slug: "what-can-you-actually-buy",
  moduleKey: "credit-products",
  order: 1,
  title: "What can you actually buy?",
  summary: "The shapes onchain private credit products come in, before you dig into any one of them.",
  blocks: [
    {
      type: "paragraph",
      lead: true,
      text: "\"Onchain private credit\" isn't one product — it's a category that contains genuinely different shapes of investment. Before evaluating any specific one, it helps to know which shape you're looking at.",
    },
    {
      type: "list",
      style: "numbered",
      items: [
        { label: "Fund share", detail: "an interest in a fund that itself invests in private credit — the fund manager makes the credit decisions" },
        { label: "Pool token", detail: "a claim on a specific onchain lending pool, valued by an exchange rate that accrues with interest" },
        { label: "Individual credit note", detail: "a debt instrument tied to one specific borrower or transaction" },
        { label: "Vault receipt", detail: "a share of whatever a vault holds — which can itself be a mix of the other product types" },
        { label: "Senior or junior tranche", detail: "a claim on one layer of a structured pool, as covered in the Credit Structure module" },
        { label: "Yield-bearing credit token", detail: "a token marketed as accruing value from underlying credit exposure" },
      ],
    },
    {
      type: "paragraph",
      text: "The rest of this module works through each shape using real examples from the project database: individual notes, fund shares, receivables, short-term facilities, and yield tokens. The question to keep asking throughout is the same one from Module 03: what exactly does the investor own?",
    },
    {
      type: "callout",
      tone: "info",
      text: "The next lesson, \"Fund vs Pool vs Note vs Vault,\" walks through this question for seven specific instrument types side by side — what backs each one, who owns the underlying asset, who holds the legal claim, and how you'd actually exit.",
    },
    {
      type: "takeaways",
      items: [
        "\"Onchain private credit\" spans fund shares, pool tokens, individual notes, vault receipts, tranches, and yield-bearing tokens — genuinely different shapes, not variations on one product.",
        "The same question applies to every shape: what exactly does the investor own?",
        "This module works through real examples of each shape from the project database, not hypotheticals.",
      ],
    },
  ],
};
