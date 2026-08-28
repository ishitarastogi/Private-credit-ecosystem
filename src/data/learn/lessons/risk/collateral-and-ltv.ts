import type { Lesson } from "@/data/learn/types";

export const collateralAndLtv: Lesson = {
  slug: "collateral-and-ltv",
  moduleKey: "risk",
  order: 2,
  title: "Collateral & LTV",
  summary: "What collateral actually protects, and why the ratio alone doesn't tell the whole story.",
  blocks: [
    {
      type: "paragraph",
      lead: true,
      text: "Collateral is an asset pledged to secure a loan. Overcollateralization means the collateral is worth more than the loan — a buffer against the collateral losing value or being sold at a discount (a haircut) during recovery. The ratio of loan to collateral is the LTV — loan-to-value.",
    },
    {
      type: "widget",
      widget: "collateral-ltv-slider",
      title: "Collateral and LTV",
      description: "Change the loan amount and watch the LTV change.",
      config: {
        collateralUsd: 100,
        initialLoanUsd: 70,
        maxLoanUsd: 100,
      },
    },
    {
      type: "paragraph",
      text: "Lower LTV means more cushion before the collateral's value drops below the loan amount. But the ratio is only half the picture.",
    },
    {
      type: "callout",
      tone: "key-concept",
      title: "Why collateral quality matters just as much as the ratio",
      text: "A 70% LTV against a diversified pool of liquid, easily-valued assets is a very different risk than a 70% LTV against a single illiquid, hard-to-value asset. The same number can mean very different things depending on what's actually behind it.",
    },
    {
      type: "list",
      style: "bullet",
      title: "What actually determines collateral quality",
      items: [
        { label: "Liquidity", detail: "can the collateral be sold quickly, without a large discount, if it needs to be?" },
        { label: "Valuation reliability", detail: "is the collateral's marked value based on a real, observable market price, or a model?" },
        { label: "Legal perfection", detail: "does the lender have an actually enforceable claim on the specific collateral, properly documented?" },
      ],
    },
    {
      type: "takeaways",
      items: [
        "LTV measures the loan amount relative to collateral value — lower LTV means more cushion before a loss reaches the loan.",
        "Overcollateralization and haircuts both exist to give lenders a buffer against collateral value uncertainty.",
        "The LTV ratio alone doesn't capture collateral quality — liquidity, valuation reliability, and legal perfection matter just as much as the number.",
        "The same LTV can represent very different risk depending on what the collateral actually is.",
      ],
    },
  ],
};
