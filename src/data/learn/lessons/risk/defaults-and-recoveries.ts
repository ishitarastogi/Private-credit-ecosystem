import type { Lesson } from "@/data/learn/types";

export const defaultsAndRecoveries: Lesson = {
  slug: "defaults-and-recoveries",
  moduleKey: "risk",
  order: 5,
  title: "Defaults & recoveries",
  summary: "What actually happens, mechanically, after a borrower stops paying.",
  blocks: [
    {
      type: "paragraph",
      lead: true,
      text: "A default is a borrower's failure to meet the payment terms of a loan. What happens next — the recovery process — is where a lot of the real risk in private credit actually lives, and it's frequently the least visible part of a product.",
    },
    {
      type: "flow-diagram",
      orientation: "horizontal",
      steps: [
        { id: "default", label: "Default", detail: "borrower misses payment" },
        { id: "classify", label: "Classification", detail: "loan is marked impaired or non-performing" },
        { id: "action", label: "Recovery action", detail: "collateral seizure, legal proceedings, or workout negotiation" },
        { id: "outcome", label: "Outcome", detail: "partial or full recovery, over an uncertain timeline" },
      ],
    },
    {
      type: "list",
      style: "bullet",
      title: "What determines how a recovery actually goes",
      items: [
        { label: "Who runs it", detail: "the servicer or SPV's manager — their experience with workouts matters as much as the loan terms" },
        { label: "What legal claim actually exists", detail: "as covered in What is an SPV? — a documented, enforceable claim recovers very differently than an undocumented one" },
        { label: "Collateral quality", detail: "as covered in Collateral & LTV — how liquid and how reliably valued the collateral actually is" },
        { label: "Jurisdiction", detail: "enforcement speed and cost vary enormously depending on where the borrower and collateral are located" },
      ],
    },
    {
      type: "callout",
      tone: "warning",
      text: "Recovery timelines are typically measured in months to years, not days. Any product that implies fast, clean recoveries as the default case deserves specific scrutiny — ask for an actual track record, not a description of the process.",
    },
    {
      type: "takeaways",
      items: [
        "A default triggers classification, then a recovery process — collateral seizure, legal action, or a negotiated workout.",
        "Recovery outcomes depend on who runs the process, the strength of the legal claim, collateral quality, and jurisdiction.",
        "Recovery timelines typically run months to years — treat any implied fast recovery as a claim to verify, not assume.",
        "This mechanical view of default and recovery sets up Module 08, which covers how defaults cascade into broader system failures.",
      ],
    },
  ],
};
