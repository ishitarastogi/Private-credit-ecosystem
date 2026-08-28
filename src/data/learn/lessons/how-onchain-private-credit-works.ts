import type { Lesson } from "@/data/learn/types";

export const howOnchainPrivateCreditWorks: Lesson = {
  slug: "how-onchain-private-credit-works",
  moduleKey: "follow-the-money",
  order: 1,
  title: "How onchain private credit works",
  summary: "Follow one dollar through the full loop, and meet every role along the way.",
  blocks: [
    {
      type: "paragraph",
      lead: true,
      text: "The clearest way to understand an onchain private credit product is to follow a single dollar through the whole system — from an investor's wallet, through a fund and a legal structure, to a real borrower, and back.",
    },
    {
      type: "widget",
      widget: "money-flow-roles",
      title: "Follow the dollar",
      description: "Click each role to see what it actually does — and whether it sits onchain or offchain.",
      config: {
        steps: [
          { id: "investor-in", label: "Investor", detail: "deposits USDC", zone: "onchain", actor: "investor" },
          { id: "protocol", label: "Protocol / Fund", detail: "issues a token, pools capital", zone: "onchain", actor: "protocol" },
          { id: "spv", label: "SPV", detail: "the legal entity that actually holds the loan", zone: "offchain", actor: "spv" },
          { id: "borrower", label: "Borrower", detail: "receives principal", zone: "offchain", actor: "borrower" },
          { id: "repay", label: "Principal + Interest", detail: "borrower repays over time", zone: "offchain", actor: "borrower" },
          { id: "spv-back", label: "SPV", detail: "collects repayment", zone: "offchain", actor: "spv" },
          { id: "protocol-back", label: "Protocol", detail: "distributes yield, updates NAV", zone: "onchain", actor: "protocol" },
          { id: "investor-out", label: "Investor", detail: "receives yield, can request redemption", zone: "onchain", actor: "investor" },
        ],
        roles: [
          { id: "investor", name: "Investor", description: "Deposits capital and receives a token representing their claim. Usually has no direct relationship with the borrower.", onchain: true },
          { id: "protocol", name: "Protocol / Fund", description: "The software and/or fund manager that pools investor capital, issues tokens, and tracks accounting.", onchain: true },
          { id: "originator", name: "Originator", description: "The entity that sources and structures the original loan — finds the borrower, negotiates terms.", onchain: false },
          { id: "underwriter", name: "Underwriter / Credit Manager", description: "Assesses the borrower's creditworthiness and decides whether — and on what terms — to lend.", onchain: false },
          { id: "spv", name: "SPV", description: "A special purpose vehicle — the legal entity that actually holds the loan or asset, separate from the protocol.", onchain: false },
          { id: "servicer", name: "Servicer", description: "Collects payments from the borrower, manages the loan day-to-day, and handles delinquency.", onchain: false },
          { id: "borrower", name: "Borrower", description: "The real-world entity or person who receives the loan and owes principal and interest.", onchain: false },
          { id: "issuer", name: "Token issuer", description: "The entity legally responsible for the token itself — may or may not be the same as the protocol.", onchain: true },
          { id: "defi", name: "DeFi lending protocol", description: "Optional — a venue like Aave or Morpho where the credit token can be posted as collateral.", onchain: true },
        ],
      },
    },
    {
      type: "callout",
      tone: "key-concept",
      title: "The core lesson",
      text: "The smart contract can manage the financial rails — deposits, token issuance, accounting, distribution. It does not necessarily perform the underwriting, and it does not enforce the underlying real-world loan. Those jobs belong to people and legal structures, not code.",
    },
    {
      type: "paragraph",
      text: "This is why two products that look identical onchain — same token symbol format, same vault UI, same yield number — can have completely different risk. The difference lives in the roles you can't see from the token alone: who underwrote the loan, who holds the legal claim, and who is responsible for recovery if it goes wrong.",
    },
    {
      type: "takeaways",
      items: [
        "A dollar's journey usually runs Investor → Protocol → SPV → Borrower, and back the same way with interest.",
        "Onchain steps are mostly about accounting and distribution; offchain steps are about origination, underwriting, and legal ownership.",
        "Smart contracts automate financial rails — they don't perform underwriting or enforce real-world loan agreements.",
        "Two similar-looking tokens can carry very different risk depending on who fills the offchain roles.",
      ],
    },
    {
      type: "quiz",
      questions: [
        {
          id: "q1",
          question: "Which role is responsible for assessing whether a borrower is creditworthy?",
          options: ["The token issuer", "The underwriter / credit manager", "The investor", "The DeFi lending protocol"],
          correctIndex: 1,
        },
        {
          id: "q2",
          question: "What does the core lesson of this page warn against assuming?",
          options: [
            "That tokens can be redeemed",
            "That a smart contract managing the financial rails also means it performs underwriting and legal enforcement",
            "That investors receive yield",
            "That SPVs are legal entities",
          ],
          correctIndex: 1,
        },
      ],
    },
  ],
};
