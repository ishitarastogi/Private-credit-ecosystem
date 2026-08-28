import type { Lesson } from "@/data/learn/types";

export const the60SecondCreditCheck: Lesson = {
  slug: "the-60-second-credit-check",
  moduleKey: "analyze",
  order: 1,
  title: "The 60-second credit check",
  summary: "Seven questions to run before you trust any headline number.",
  blocks: [
    {
      type: "paragraph",
      lead: true,
      text: "Everything in this Learn section builds toward one skill: being able to look at any onchain private credit product and work out what it actually is. This is the checklist that puts it into practice.",
    },
    {
      type: "widget",
      widget: "credit-check-tool",
      title: "The 60-second credit check",
      description: "Seven questions. Click each one for what to actually look for.",
      config: {
        questions: [
          {
            id: "q1",
            question: "Who is the borrower?",
            guidance: "A named, identifiable borrower is a very different risk than an anonymous pool of borrowers you can't inspect. If you can't answer this, that's itself the answer.",
          },
          {
            id: "q2",
            question: "Who originated the loan?",
            guidance: "The originator sourced and structured the deal. Their track record and incentives matter — did they retain any risk, or sell 100% of it onward?",
          },
          {
            id: "q3",
            question: "Who owns the legal claim?",
            guidance: "Trace it to an actual legal entity — usually an SPV, per Module 02. If you can't find one, assume you may have no direct claim at all.",
          },
          {
            id: "q4",
            question: "What exactly do I own?",
            guidance: "Fund share, pool token, note, vault receipt, tranche, or yield-bearing token — see Module 03. Each has a different answer to every question that follows.",
          },
          {
            id: "q5",
            question: "What protects my capital?",
            guidance: "Overcollateralization, a junior tranche below you, reserves, insurance — or nothing. Absence of an answer means you're the first-loss capital, whether or not that was disclosed clearly.",
          },
          {
            id: "q6",
            question: "Can I actually exit?",
            guidance: "Check redemption terms, not just secondary market existence. A thin secondary market at a steep discount is not the same as real liquidity.",
          },
          {
            id: "q7",
            question: "Am I double-counting the underlying asset?",
            guidance: "If a token wraps another token, make sure you're not adding both the wrapper and the underlying to the same mental total — see the dedicated lesson on this next.",
          },
        ],
      },
    },
    {
      type: "takeaways",
      items: [
        "The 60-second credit check is seven questions: borrower, originator, legal claim, what you own, what protects you, exit, and double-counting.",
        "If you can't answer a question, treat that as the answer — an unknown is a red flag, not neutral information.",
        "The next two lessons go deeper on reading past headline metrics and on spotting double-counted exposure specifically.",
      ],
    },
  ],
};
