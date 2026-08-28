import type { Module } from "@/data/learn/types";

export const modules: Module[] = [
  {
    key: "what-is-this",
    index: 1,
    title: "What Is This?",
    description: "What private credit is, and what 'onchain' actually means.",
    kind: "lessons",
    lessonSlugs: ["what-is-private-credit", "what-is-onchain"],
  },
  {
    key: "follow-the-money",
    index: 2,
    title: "Follow The Money",
    description: "Trace one dollar through the entire onchain private credit system.",
    kind: "lessons",
    lessonSlugs: ["how-onchain-private-credit-works"],
  },
  {
    key: "what-do-i-own",
    index: 3,
    title: "What Do I Actually Own?",
    description: "What your token represents, and who holds the legal claim.",
    kind: "lessons",
    lessonSlugs: ["what-does-your-token-represent"],
  },
  {
    key: "where-is-the-risk",
    index: 4,
    title: "Where Is The Risk?",
    description: "The risk categories, tranche waterfalls, and collateral mechanics.",
    kind: "lessons",
    lessonSlugs: ["understanding-credit-risk"],
  },
  {
    key: "credit-meets-defi",
    index: 5,
    title: "When Credit Meets DeFi",
    description: "Leverage, LLTV, and the gap between NAV and liquidity.",
    kind: "lessons",
    lessonSlugs: ["credit-tokens-as-defi-collateral"],
  },
  {
    key: "how-to-analyze",
    index: 6,
    title: "How Do I Analyze It?",
    description: "A practical checklist for evaluating any credit product.",
    kind: "lessons",
    lessonSlugs: ["how-to-analyze-a-credit-product"],
  },
  {
    key: "case-studies",
    index: 7,
    title: "Case Studies",
    description: "Figure, Maple, Centrifuge, and Huma — the concepts applied.",
    kind: "case-studies",
    href: "/learn/case-studies",
  },
  {
    key: "how-it-breaks",
    index: 8,
    title: "How Does It Break?",
    description: "Six failure mechanics, and the anatomy of a vault blowup.",
    kind: "lessons",
    lessonSlugs: ["how-onchain-private-credit-fails", "how-an-rwa-credit-vault-blows-up"],
  },
  {
    key: "reference",
    index: 9,
    title: "Reference",
    description: "A searchable glossary and a curated research library.",
    kind: "reference",
  },
];

export const moduleByKey = new Map(modules.map((module) => [module.key, module]));
