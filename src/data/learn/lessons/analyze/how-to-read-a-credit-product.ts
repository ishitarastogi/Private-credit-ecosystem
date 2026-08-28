import type { Lesson } from "@/data/learn/types";

export const howToReadACreditProduct: Lesson = {
  slug: "how-to-read-a-credit-product",
  moduleKey: "analyze",
  order: 2,
  title: "How to read a credit product",
  summary: "Don't trust the headline — evaluate the credit stack instead.",
  blocks: [
    {
      type: "paragraph",
      lead: true,
      text: "APY, TVL, total originations, token price, and NAV are the numbers every dashboard leads with. None of them tell you whether your capital is protected.",
    },
    {
      type: "comparison",
      title: "Headline metric vs. what it actually tells you",
      subjects: ["Metric", "What it actually tells you"],
      rows: [
        { attribute: "APY", values: ["Current yield", "Nothing about whether that yield is sustainable or compensates for the real risk"] },
        { attribute: "TVL", values: ["Total deposits", "Popularity — not credit quality or borrower diversification"] },
        { attribute: "Total originations", values: ["Cumulative volume ever lent", "Not the same as outstanding principal, and says nothing about defaults"] },
        { attribute: "Token price", values: ["Current market quote", "Can be a stale NAV mark, not a real clearing price — see Module 04"] },
        { attribute: "NAV", values: ["A model-based mark", "Not what you can actually sell the token for — see Module 04"] },
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
        "APY, TVL, originations, token price, and NAV are surface metrics — none of them answer whether your capital is actually protected.",
        "Evaluate the credit stack instead: borrower → loan → collateral → legal claim → cash flows → seniority → liquidity → recovery.",
        "Every layer of the credit stack maps directly to a module earlier in this Learn section — this lesson is where they come together.",
      ],
    },
  ],
};
