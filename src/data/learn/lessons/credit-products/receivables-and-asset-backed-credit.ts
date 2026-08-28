import type { Lesson } from "@/data/learn/types";

export const receivablesAndAssetBackedCredit: Lesson = {
  slug: "receivables-and-asset-backed-credit",
  moduleKey: "credit-products",
  order: 3,
  title: "Receivables & asset-backed credit",
  summary: "Financing against money already owed, or against a specific pledged asset — real examples from the database.",
  blocks: [
    {
      type: "paragraph",
      lead: true,
      text: "Two closely related product types show up constantly in onchain private credit: receivables financing, and asset-backed lending more broadly. Both tie the credit directly to a specific, identifiable source of repayment.",
    },
    {
      type: "heading",
      text: "Receivables financing",
      level: 3,
    },
    {
      type: "paragraph",
      text: "A receivable is money already owed to a business for goods or services it has already delivered. Receivables financing advances cash against that expected payment, before it actually arrives.",
    },
    {
      type: "scenario",
      title: "Robbin Pagamentos, via Liqi",
      setup: "In the project database, Robbin Pagamentos issues notes such as Robbin 02 Senior 01 and Robbin 02 Senior 02, structured through Liqi's securitization platform in Brazil.",
      walkthrough: [
        "Liqi structures the notes as a securitized product backed by Robbin's underlying receivables.",
        "Investors hold a note with a defined seniority, not a direct claim on any single receivable.",
      ],
      lesson: "This is receivables financing wrapped in the same securitization and tranching mechanics covered in Module 02 — the product type and the structuring approach are two separate layers.",
    },
    {
      type: "heading",
      text: "Individual asset-backed notes",
      level: 3,
    },
    {
      type: "paragraph",
      text: "Some platforms issue a separate note for each individual financing transaction, rather than pooling many borrowers together.",
    },
    {
      type: "scenario",
      title: "Tradable's per-transaction notes",
      setup: "Tradable, in the project database, issues individual notes like \"North America Rent Financing Senior Secured Term Notes\" or \"NA Third Party Online Merchant Senior Secured\" — each one its own transaction.",
      walkthrough: [
        "Each note is tied to a specific counterparty and a specific financing transaction.",
        "There is no shared pool absorbing diversification benefits the way a securitization would.",
      ],
      lesson: "An investor evaluating one of these notes is really evaluating one specific transaction and counterparty — concentration risk is the whole story, not a side consideration.",
    },
    {
      type: "callout",
      tone: "key-concept",
      text: "The core question for any receivables or asset-backed product: is your claim tied to one specific, identifiable flow of cash — and does that flow actually exist independently of the platform telling you it does?",
    },
    {
      type: "takeaways",
      items: [
        "Receivables financing advances cash against money already owed but not yet received.",
        "The same receivable can be structured as a diversified, tranched security (like Robbin Pagamentos via Liqi) or issued as a single-transaction note (like Tradable's individual notes).",
        "Single-transaction notes concentrate risk in one counterparty — there's no pooling to smooth out an individual default.",
        "Always ask whether your claim traces to a specific, real cash flow, independent of the platform's own marketing.",
      ],
    },
  ],
};
