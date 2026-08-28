import type { Lesson } from "@/data/learn/types";

export const whenBorrowersDefault: Lesson = {
  slug: "when-borrowers-default",
  moduleKey: "failure-modes",
  order: 1,
  title: "When borrowers default",
  summary: "The direct failure mode — and the underwriting decision that usually precedes it.",
  blocks: [
    {
      type: "paragraph",
      lead: true,
      text: "The most direct failure mode: the borrower simply can't or won't pay. Everything downstream — collateral seizure, legal recovery, investor loss — is a consequence of this first step.",
    },
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
      text: "See the Defaults & Recoveries lesson in Module 04 for the mechanics of what actually happens after this point — who runs the recovery, and what determines how much comes back.",
    },
    {
      type: "heading",
      text: "The failure that usually happens earlier",
      level: 3,
    },
    {
      type: "callout",
      tone: "key-concept",
      title: "Bad underwriting",
      text: "The biggest risk in an onchain credit product often exists before the loan ever reaches the blockchain. If the original underwriting was weak — the borrower's creditworthiness was misjudged, or the collateral was overvalued — no amount of onchain transparency fixes that. The blockchain accurately records a bad decision; it doesn't prevent one.",
    },
    {
      type: "paragraph",
      text: "This is why the underwriter's track record, from Module 06's credit check, matters more than almost anything visible onchain. A default is the symptom. Weak underwriting is very often the actual cause, decided long before the loan was ever tokenized.",
    },
    {
      type: "takeaways",
      items: [
        "Borrower default is the most direct failure mode: a missed payment leads to impairment, then a recovery process, then investor loss.",
        "Bad underwriting is often the true root cause, and it happens before the loan ever touches the blockchain.",
        "Onchain transparency can accurately record a bad lending decision — it cannot prevent one from having been made.",
      ],
    },
  ],
};
