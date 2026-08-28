import type { Lesson } from "@/data/learn/types";

export const howToAnalyzeACreditProduct: Lesson = {
  slug: "how-to-analyze-a-credit-product",
  moduleKey: "how-to-analyze",
  order: 1,
  title: "How do I analyze it?",
  summary: "A practical checklist, and why the headline numbers are the wrong place to start.",
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
            guidance: "Trace it to an actual legal entity — usually an SPV. If you can't find one, assume you may have no direct claim at all.",
          },
          {
            id: "q4",
            question: "What exactly do I own?",
            guidance: "Fund share, pool token, note, vault receipt, tranche, or stablecoin — see Module 03. Each has a different answer to every question that follows.",
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
            question: "What happens if the borrower defaults?",
            guidance: "Is there a documented recovery process? Who runs it, how long does it typically take, and what has actually happened the last time this occurred?",
          },
        ],
      },
    },
    {
      type: "heading",
      text: "Don't trust the headline",
      level: 3,
    },
    {
      type: "paragraph",
      text: "APY, TVL, total originations, token price, and NAV are the numbers every dashboard leads with. None of them tell you whether your capital is protected.",
    },
    {
      type: "comparison",
      title: "Headline metric vs. what it actually tells you",
      subjects: ["Metric", "What it tells you"],
      rows: [
        { attribute: "APY", values: ["Current yield", "Nothing about whether that yield is sustainable or compensates for the real risk"] },
        { attribute: "TVL", values: ["Total deposits", "Popularity — not credit quality or borrower diversification"] },
        { attribute: "Total originations", values: ["Cumulative volume ever lent", "Not the same as outstanding principal, and says nothing about defaults"] },
        { attribute: "Token price", values: ["Current market quote", "Can be a stale NAV mark, not a real clearing price"] },
        { attribute: "NAV", values: ["A model-based mark", "Not what you can actually sell the token for — see Module 05"] },
      ],
    },
    {
      type: "widget",
      widget: "credit-stack-diagram",
      title: "The credit stack",
      description: "This is what to evaluate instead — top to bottom.",
      config: {
        layers: [
          { id: "borrower", label: "Borrower", detail: "who is actually receiving the capital" },
          { id: "loan", label: "Loan", detail: "the terms, tenor, and purpose of the credit extended" },
          { id: "collateral", label: "Collateral", detail: "what secures it, and how liquid that collateral really is" },
          { id: "legal-claim", label: "Legal claim", detail: "who can actually enforce repayment, and against whom" },
          { id: "cash-flows", label: "Cash flows", detail: "how and when repayments actually reach you" },
          { id: "seniority", label: "Seniority", detail: "where your position sits in the loss waterfall" },
          { id: "liquidity", label: "Liquidity", detail: "how you actually exit, and at what cost" },
          { id: "recovery", label: "Recovery", detail: "what happens, concretely, if the borrower defaults" },
        ],
      },
    },
    {
      type: "takeaways",
      items: [
        "The 60-second credit check is seven questions: borrower, originator, legal claim, what you own, what protects you, exit, and default process.",
        "APY, TVL, originations, token price, and NAV are surface metrics — none of them answer whether your capital is actually protected.",
        "Evaluate the credit stack instead: borrower → loan → collateral → legal claim → cash flows → seniority → liquidity → recovery.",
        "If you can't answer a question in the checklist, treat that as the answer — an unknown is a red flag, not neutral information.",
      ],
    },
    {
      type: "quiz",
      questions: [
        {
          id: "q1",
          question: "Why is APY a poor starting point for evaluating a credit product?",
          options: [
            "APY numbers are always fake",
            "It tells you the current yield but nothing about whether that yield is sustainable or what risk it compensates for",
            "APY only applies to bank accounts",
            "Higher APY always means higher risk",
          ],
          correctIndex: 1,
        },
        {
          id: "q2",
          question: "What should you conclude if you can't identify who owns the legal claim on a loan?",
          options: [
            "It doesn't matter as long as APY is good",
            "Assume you may have no direct legal claim at all",
            "The protocol must be lying",
            "It's automatically the investor",
          ],
          correctIndex: 1,
        },
      ],
    },
  ],
};
