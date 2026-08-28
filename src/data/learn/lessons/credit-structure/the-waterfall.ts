import type { Lesson } from "@/data/learn/types";

export const theWaterfall: Lesson = {
  slug: "the-waterfall",
  moduleKey: "credit-structure",
  order: 6,
  title: "The waterfall",
  summary: "Tranching decides who owns which risk. The waterfall is the order cash actually moves through it.",
  blocks: [
    {
      type: "paragraph",
      lead: true,
      text: "The previous two lessons covered tranching — how a pool is divided into layers. This lesson covers something related but distinct: the waterfall, which is the specific order cash flows and losses actually move through those layers.",
    },
    {
      type: "comparison",
      subjects: ["Tranching", "Waterfall"],
      rows: [
        { attribute: "What it is", values: ["How risk is divided into layers", "How cash flows and losses move through those layers"] },
        { attribute: "Answers", values: ["\"What layer do I own?\"", "\"When, and in what order, do I actually get paid?\""] },
      ],
    },
    {
      type: "heading",
      text: "The payment waterfall",
      level: 3,
    },
    {
      type: "flow-diagram",
      orientation: "vertical",
      steps: [
        { id: "payments", label: "Borrower payments" },
        { id: "fees", label: "Fees / expenses" },
        { id: "senior-interest", label: "Senior interest" },
        { id: "senior-principal", label: "Senior principal" },
        { id: "mezz-interest", label: "Mezzanine interest" },
        { id: "mezz-principal", label: "Mezzanine principal" },
        { id: "residual", label: "Junior / residual" },
      ],
    },
    {
      type: "paragraph",
      text: "Notice that senior's principal is repaid before mezzanine even receives its interest. Priority isn't just about which tranche gets paid first in general — it's a strict, step-by-step order that every dollar has to clear before the next step gets anything.",
    },
    {
      type: "heading",
      text: "The loss waterfall",
      level: 3,
    },
    {
      type: "flow-diagram",
      orientation: "vertical",
      steps: [
        { id: "losses", label: "Borrower losses" },
        { id: "junior-absorb", label: "Junior absorbs losses" },
        { id: "mezz-absorb", label: "Mezzanine absorbs losses" },
        { id: "senior-absorb", label: "Senior absorbs losses" },
      ],
    },
    {
      type: "paragraph",
      text: "The loss waterfall runs in the exact opposite order of seniority — junior first, senior last — which is what makes senior tranches the more protected (not risk-free) position, and junior tranches the first-loss position, as covered in the Senior vs Junior lesson.",
    },
    {
      type: "takeaways",
      items: [
        "Tranching is about which layer of risk you own. The waterfall is about the actual order cash moves through those layers.",
        "The payment waterfall runs top-down by seniority: fees, then senior interest and principal, then mezzanine, then junior.",
        "The loss waterfall runs bottom-up: junior absorbs first, then mezzanine, then senior.",
        "These two orders run in opposite directions on purpose — it's what makes the whole structure work as intended.",
      ],
    },
  ],
};
