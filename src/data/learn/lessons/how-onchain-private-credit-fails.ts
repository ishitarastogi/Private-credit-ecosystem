import type { Lesson } from "@/data/learn/types";

export const howOnchainPrivateCreditFails: Lesson = {
  slug: "how-onchain-private-credit-fails",
  moduleKey: "how-it-breaks",
  order: 1,
  title: "How onchain private credit fails",
  summary: "Six failure mechanics — not a list of bad protocols, but how the mechanism itself breaks.",
  blocks: [
    {
      type: "paragraph",
      lead: true,
      text: "Every one of these failure modes follows a mechanism, not a headline. Understanding the mechanism means you can recognize it in a product you've never seen before.",
    },
    { type: "heading", text: "Failure #1 — Borrower default", level: 3 },
    {
      type: "flow-diagram",
      orientation: "horizontal",
      steps: [
        { id: "stop", label: "Borrower stops paying" },
        { id: "impaired", label: "Loan becomes impaired" },
        { id: "recovery", label: "Collateral / recovery process" },
        { id: "loss", label: "Investor loss" },
      ],
    },
    {
      type: "paragraph",
      text: "The most direct failure mode: the borrower simply can't or won't pay. Everything downstream — collateral seizure, legal recovery, investor loss — is a consequence of this first step.",
    },
    { type: "heading", text: "Failure #2 — Bad underwriting", level: 3 },
    {
      type: "callout",
      tone: "key-concept",
      text: "The biggest risk in an onchain credit product often exists before the loan ever reaches the blockchain. If the original underwriting was weak — the borrower's creditworthiness was misjudged, or the collateral was overvalued — no amount of onchain transparency fixes that. The blockchain accurately records a bad decision; it doesn't prevent one.",
    },
    { type: "heading", text: "Failure #3 — NAV shock", level: 3 },
    {
      type: "flow-diagram",
      orientation: "horizontal",
      steps: [
        { id: "healthy", label: "Healthy-looking NAV" },
        { id: "deteriorate", label: "Offchain credit deteriorates" },
        { id: "markdown", label: "NAV marked down" },
        { id: "price", label: "Token price falls" },
        { id: "redemptions", label: "Redemptions increase" },
      ],
    },
    {
      type: "paragraph",
      text: "Because NAV is a periodic, model-based mark, the token can look stable for a while even as the underlying credit deteriorates. When the mark finally catches up, the shock is sudden and can trigger a redemption rush — see Module 05 for what happens next.",
    },
    { type: "heading", text: "Failure #4 — Liquidity mismatch", level: 3 },
    {
      type: "comparison",
      subjects: ["Underlying loan", "DeFi"],
      rows: [{ attribute: "Time to recover / liquidate", values: ["Months to years", "Seconds to blocks"] }],
    },
    {
      type: "paragraph",
      text: "A defaulted loan can take years to work out through legal recovery. A DeFi position built on top of that same loan can be liquidated in a single block. These two time horizons cannot be reconciled — the DeFi side simply cannot wait for the real-world side to resolve.",
    },
    { type: "heading", text: "Failure #5 — DeFi leverage", level: 3 },
    {
      type: "flow-diagram",
      orientation: "horizontal",
      steps: [
        { id: "token", label: "Credit token" },
        { id: "borrow", label: "Borrow against token" },
        { id: "buy", label: "Buy more token" },
        { id: "repeat", label: "Repeat" },
        { id: "decline", label: "Small NAV decline" },
        { id: "cascade", label: "Large liquidation cascade" },
      ],
    },
    {
      type: "paragraph",
      text: "Leverage doesn't create the initial problem — it multiplies it. A NAV decline that would have been a minor markdown on an unlevered position becomes a cascade of forced liquidations across every looped position built on top of it.",
    },
    { type: "heading", text: "Failure #6 — Legal claim failure", level: 3 },
    {
      type: "comparison",
      title: "Two very different structures",
      subjects: ["Weak structure", "Strong structure"],
      rows: [
        { attribute: "1", values: ["Investor → Token → Protocol", "Investor → Legal claim on SPV → Underlying loan → Borrower / collateral"] },
        { attribute: "Enforceability", values: ["Investor's recourse may stop at the protocol's terms of service", "Investor's claim traces through a documented legal structure to the actual loan"] },
      ],
    },
    {
      type: "callout",
      tone: "warning",
      text: "These two structures can look identical from the outside — same token, same dashboard, same yield number. They are economically very different. Only one of them gives you an enforceable path to the borrower or collateral if something goes wrong.",
    },
    {
      type: "takeaways",
      items: [
        "Borrower default is the direct failure; the other five modes are about how that risk is hidden, delayed, or amplified.",
        "Bad underwriting is often the root cause, and it happens before anything reaches the blockchain.",
        "NAV shocks and liquidity mismatches turn a slow-moving credit problem into a fast-moving DeFi one.",
        "DeFi leverage multiplies a small NAV decline into a large liquidation cascade.",
        "A token's claim chain can silently stop at the protocol instead of reaching the SPV and the loan — always check which structure you're actually in.",
      ],
    },
    {
      type: "quiz",
      questions: [
        {
          id: "q1",
          question: "Why is bad underwriting described as potentially the biggest risk in the whole system?",
          options: [
            "Because it's always visible onchain",
            "Because it happens before the loan reaches the blockchain, and no onchain transparency can fix a bad original decision",
            "Because it only affects DeFi protocols",
            "Because it's the same as a NAV shock",
          ],
          correctIndex: 1,
        },
        {
          id: "q2",
          question: "What makes failure #4, liquidity mismatch, structural rather than incidental?",
          options: [
            "DeFi liquidations and private credit recovery timelines are fundamentally different — seconds vs. years",
            "It only happens rarely",
            "It's caused by bad underwriting",
            "It only affects senior tranches",
          ],
          correctIndex: 0,
        },
      ],
    },
  ],
};
