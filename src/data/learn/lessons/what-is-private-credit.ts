import type { Lesson } from "@/data/learn/types";

export const whatIsPrivateCredit: Lesson = {
  slug: "what-is-private-credit",
  moduleKey: "what-is-this",
  order: 1,
  title: "What is private credit?",
  summary: "Non-bank lending, why it exists, and who actually borrows this way.",
  blocks: [
    {
      type: "paragraph",
      lead: true,
      text: "Private credit is lending that happens directly between a borrower and a lender, negotiated privately, outside of public bond markets and outside of a bank's standard loan book.",
    },
    {
      type: "paragraph",
      text: "The lender is usually a fund, an asset manager, or a specialty finance company — not a bank, and not a public market of anonymous bondholders.",
    },
    {
      type: "heading",
      text: "Why borrowers use private credit",
      level: 3,
    },
    {
      type: "list",
      style: "bullet",
      items: [
        { label: "Speed", detail: "A negotiated loan can close in weeks; a bond issuance or bank syndication can take months." },
        { label: "Flexibility", detail: "Terms, collateral, and covenants can be customized to a borrower's specific situation." },
        { label: "Access", detail: "Many borrowers are too small, too new, or too specialized to qualify for a bank loan or public bond." },
      ],
    },
    {
      type: "heading",
      text: "Why banks don't provide every type of credit",
      level: 3,
    },
    {
      type: "paragraph",
      text: "Banks are capital-constrained by regulation and tend to favor standardized, lower-risk lending. That leaves gaps: smaller companies, niche asset types, and borrowers with unconventional cash flows. Private credit funds exist to fill exactly those gaps, at a price that compensates for the extra risk and work involved.",
    },
    {
      type: "heading",
      text: "Typical borrowers",
      level: 3,
    },
    {
      type: "list",
      style: "bullet",
      items: [
        "Mid-market companies too small for the public bond market",
        "Real estate owners and homeowners",
        "Trade and supply-chain businesses waiting on receivables",
        "Specialty finance companies that themselves lend to consumers or small businesses",
      ],
    },
    {
      type: "heading",
      text: "Typical assets and loan types",
      level: 3,
    },
    {
      type: "list",
      style: "bullet",
      items: [
        "Corporate loans (direct lending to a single company)",
        "SME loans (smaller companies, higher volume)",
        "Receivables (financing against invoices or future payments)",
        "Trade finance (financing goods in transit or inventory)",
        "HELOCs (home equity lines of credit)",
        "Payment financing (advances against future payment flows)",
        "Asset-backed lending (a loan secured by a specific pool of assets)",
      ],
    },
    {
      type: "flow-diagram",
      title: "The basic shape of a private credit loan",
      orientation: "horizontal",
      showZoneLegend: false,
      steps: [
        { id: "borrower", label: "Borrower", detail: "needs capital" },
        { id: "lender", label: "Private Lender", detail: "fund or specialty lender" },
        { id: "loan", label: "Loan", detail: "principal is disbursed" },
        { id: "repay", label: "Interest + Principal", detail: "paid back over time" },
      ],
    },
    {
      type: "comparison",
      title: "How this differs from other kinds of credit",
      subjects: ["Public bonds", "Bank lending", "DeFi lending", "Private credit"],
      rows: [
        {
          attribute: "Who lends",
          values: [
            "Many anonymous bondholders",
            "A regulated bank",
            "Anonymous liquidity providers via a protocol",
            "A fund or specialty lender, negotiated directly",
          ],
        },
        {
          attribute: "Pricing",
          values: [
            "Set by public market trading",
            "Set by bank underwriting standards",
            "Set algorithmically by protocol utilization",
            "Negotiated between borrower and lender",
          ],
        },
        {
          attribute: "Collateral",
          values: [
            "Often unsecured",
            "Standardized, bank-graded",
            "Almost always overcollateralized crypto",
            "Customized to the deal — real assets, receivables, cash flows",
          ],
        },
        {
          attribute: "Liquidity",
          values: [
            "Tradable on public markets",
            "Held on the bank's balance sheet",
            "Instantly withdrawable, protocol-dependent",
            "Illiquid — capital is locked for the loan term",
          ],
        },
      ],
    },
    {
      type: "callout",
      tone: "key-concept",
      title: "The core trade-off",
      text: "Private credit lenders accept illiquidity and custom underwriting work in exchange for a yield premium. That premium is compensation for real risk, not a market inefficiency waiting to be arbitraged away.",
    },
    {
      type: "takeaways",
      items: [
        "Private credit is negotiated, non-bank lending outside public bond markets.",
        "It exists because banks and public markets don't serve every borrower or asset type.",
        "Typical loans include corporate, SME, receivables, trade finance, HELOCs, payment financing, and asset-backed lending.",
        "Private credit trades liquidity and standardization for yield — that yield is compensation for real risk.",
      ],
    },
    {
      type: "quiz",
      questions: [
        {
          id: "q1",
          question: "Why do borrowers use private credit instead of a bank loan?",
          options: [
            "It's always cheaper than a bank loan",
            "Banks are regulated toward standardized, lower-risk lending and don't serve every borrower or asset type",
            "Private credit is risk-free",
            "It's required by law for small companies",
          ],
          correctIndex: 1,
          explanation: "Private credit fills the gaps banks leave — smaller borrowers, niche assets, and custom structures.",
        },
        {
          id: "q2",
          question: "What is the main trade-off a private credit investor accepts?",
          options: [
            "Lower yield for more liquidity",
            "Illiquidity and custom underwriting risk, in exchange for yield",
            "No risk, guaranteed returns",
            "Public market price discovery",
          ],
          correctIndex: 1,
        },
      ],
    },
  ],
};
