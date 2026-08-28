import type { Lesson } from "@/data/learn/types";

export const whatIsAnSpv: Lesson = {
  slug: "what-is-an-spv",
  moduleKey: "credit-structure",
  order: 2,
  title: "What is an SPV?",
  summary: "A special purpose vehicle is where the actual legal ownership of a loan usually lives.",
  blocks: [
    {
      type: "paragraph",
      lead: true,
      text: "SPV stands for Special Purpose Vehicle — a legal entity created to hold one specific asset or pool of assets, and nothing else.",
    },
    {
      type: "flow-diagram",
      orientation: "vertical",
      steps: [
        { id: "borrower", label: "Borrower", zone: "offchain" },
        { id: "loan", label: "Loan", zone: "offchain" },
        { id: "spv", label: "SPV", zone: "offchain" },
        { id: "investors", label: "Investors", zone: "onchain" },
      ],
    },
    {
      type: "heading",
      text: "Why an SPV is used",
      level: 3,
    },
    {
      type: "list",
      style: "bullet",
      items: [
        { label: "Holds the assets", detail: "the SPV is the entity that actually owns the loan, not the platform or the fund manager personally" },
        { label: "Separates the assets", detail: "if the sponsor that set up the SPV runs into its own financial trouble, the SPV's assets are generally protected from that sponsor's creditors" },
        { label: "Defines legal ownership", detail: "it creates a clear, documented answer to \"who owns this loan\"" },
        { label: "Can issue securities", detail: "the SPV can issue notes, shares, or tranches backed by its assets to raise capital" },
        { label: "Can isolate certain risks", detail: "different pools can sit in different SPVs, so a problem in one doesn't automatically spread to another" },
      ],
    },
    {
      type: "callout",
      tone: "key-concept",
      text: "Why legal ownership matters: if a borrower defaults, whoever legally owns the loan is who can actually take action — demand payment, seize collateral, or sue. If the SPV owns the loan and your token is a claim on the SPV, your recovery runs through the SPV. If there's no real SPV — or your token's terms don't actually connect to it — your claim may stop somewhere far short of the loan itself.",
    },
    {
      type: "paragraph",
      text: "This is a simple idea with an important consequence: the SPV is usually the whole reason a tokenized credit product can make a credible claim to be backed by anything at all. A product with no SPV, or a vague one, deserves more scrutiny — not less.",
    },
    {
      type: "takeaways",
      items: [
        "An SPV is a dedicated legal entity created to hold one specific loan or pool of loans.",
        "It holds the assets, separates them from its sponsor, defines legal ownership, can issue securities against them, and can isolate risk between pools.",
        "The SPV is usually where the real, enforceable claim on a loan actually lives — not with the platform or protocol.",
        "A product without a clear SPV (or a token that doesn't actually connect to one) is a signal to look closer, not a technicality.",
      ],
    },
  ],
};
