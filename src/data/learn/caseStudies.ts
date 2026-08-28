import type { CaseStudy } from "@/data/learn/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "figure",
    name: "Figure",
    summary:
      "Figure originates home equity lines of credit (HELOCs) and records them on Provenance, its own blockchain — a clear example of Level 1 onchain record-keeping rather than DeFi-composable credit.",
    concepts: [
      "HELOCs",
      "Offchain vs onchain processes",
      "Provenance",
      "Record-keeping vs composability",
    ],
    answers: [
      { question: "Who is the borrower?", answer: "Homeowners taking out a home equity line of credit against their property." },
      { question: "What is the loan?", answer: "A HELOC — a revolving line of credit secured by the equity in a borrower's home." },
      { question: "Who originates it?", answer: "Figure originates the HELOC directly, running underwriting, appraisal, and closing largely through its own automated process." },
      { question: "Who owns the loan?", answer: "The originating entity or a buyer of the loan — HELOCs originated this way are frequently sold to institutional investors after origination." },
      { question: "Where is the SPV?", answer: "Loan sales and any securitization typically route through a legal structure appropriate to the transaction — this sits entirely offchain from the blockchain's perspective." },
      { question: "What does the investor hold?", answer: "Depends on the transaction — a whole loan, a participation interest, or a security backed by a pool of these loans. Not, by default, a DeFi-composable token." },
      { question: "How are repayments distributed?", answer: "Homeowners make payments through normal loan-servicing channels; the blockchain record reflects loan data, it does not move the actual cash." },
      { question: "What protects investors?", answer: "The home equity itself is the collateral. Underwriting quality and the servicer's collection process protect against loss beyond that." },
      { question: "How liquid is the position?", answer: "Illiquid in the DeFi sense — these are whole loans or securitized interests, not a token designed for onchain trading or use as collateral." },
      { question: "What happens in default?", answer: "Standard mortgage-style foreclosure and recovery processes apply, run through the normal legal system — the blockchain record does not change this." },
    ],
  },
  {
    slug: "maple",
    name: "Maple Finance",
    summary:
      "Maple ran undercollateralized institutional lending pools. In December 2022, a borrower (Orthogonal Trading) defaulted on roughly $36M in loans — about 30% of active loans on the platform — after its funds became tied up in the collapse of FTX. Maple subsequently redesigned its model toward more secured, overcollateralized structures.",
    concepts: [
      "Institutional credit",
      "Overcollateralization",
      "2022 default",
      "Shift from undercollateralized to more secured lending",
    ],
    answers: [
      { question: "Who is the borrower?", answer: "Institutional crypto trading firms and market makers borrowing working capital." },
      { question: "What is the loan?", answer: "Originally, largely undercollateralized or lightly collateralized short-term institutional credit lines." },
      { question: "Who originates it?", answer: "Pool delegates — credit specialists who assessed borrowers and managed each lending pool." },
      { question: "Who owns the loan?", answer: "The lending pool, funded by depositors, held the loan claim against the borrower." },
      { question: "Where is the SPV?", answer: "Early Maple pools relied more on onchain pool structure and borrower reputation than a heavy offchain legal wrapper — a key reason recovery proved difficult after the 2022 defaults." },
      { question: "What does the investor hold?", answer: "A pool token representing a claim on that specific pool's loans and interest." },
      { question: "How are repayments distributed?", answer: "Borrower repayments flowed back into the pool and accrued to pool token holders." },
      { question: "What protects investors?", answer: "Originally: borrower reputation and pool delegate diligence, not hard collateral. After 2022, Maple shifted toward requiring real overcollateralization for new lending." },
      { question: "How liquid is the position?", answer: "Pool tokens could generally be withdrawn if pool liquidity was available, but a default freezes that liquidity for affected pools." },
      { question: "What happens in default?", answer: "In December 2022, Orthogonal Trading defaulted on about $36M — roughly 30% of active loans platform-wide — after its funds were tied up in FTX's collapse. Recovery required legal action and liquidation proceedings, and was slow and partial." },
    ],
  },
  {
    slug: "centrifuge",
    name: "Centrifuge",
    summary:
      "Centrifuge provides the infrastructure for structuring real-world asset pools into onchain securitizations — each pool typically uses an SPV and splits investor exposure into senior and junior tranches.",
    concepts: [
      "Asset-backed pools",
      "SPVs",
      "Senior / junior tranches",
      "Structured credit",
    ],
    answers: [
      { question: "Who is the borrower?", answer: "Varies by pool — real-world asset originators such as trade finance, consumer, or corporate lenders who need funding against their existing loan books." },
      { question: "What is the loan?", answer: "A pool of underlying real-world loans or receivables, pledged as collateral to raise financing." },
      { question: "Who originates it?", answer: "An asset originator brings its existing loan book to a Centrifuge pool as collateral to raise onchain financing against it." },
      { question: "Who owns the loan?", answer: "An SPV associated with the pool holds legal title to the underlying assets." },
      { question: "Where is the SPV?", answer: "A dedicated legal entity per pool, bankruptcy-remote from the originator, structured specifically to hold that pool's assets." },
      { question: "What does the investor hold?", answer: "A senior or junior tranche token in the specific pool — each with a different position in the repayment waterfall." },
      { question: "How are repayments distributed?", answer: "Repayments flow through the SPV and are distributed by seniority: senior tranche holders first, junior tranche holders absorb losses first and are paid what remains." },
      { question: "What protects investors?", answer: "Senior investors are protected by the junior tranche's first-loss capital; junior investors are compensated with higher yield for taking that first-loss position." },
      { question: "How liquid is the position?", answer: "Generally illiquid — tranche tokens are designed to be held to the pool's maturity or amortization schedule, not actively traded." },
      { question: "What happens in default?", answer: "The SPV's legal claim against the originator or underlying obligors is pursued through normal recovery processes; losses are absorbed by the junior tranche before senior." },
    ],
  },
  {
    slug: "huma",
    name: "Huma",
    summary:
      "Huma finances short-duration receivables and payment flows rather than long-term loans — a category sometimes called \"PayFi.\" Because the underlying cash flows turn over quickly, duration risk works very differently than in a multi-year credit facility.",
    concepts: [
      "Payment financing",
      "Short-duration credit",
      "Receivables / payment flows",
      "Why duration matters",
    ],
    answers: [
      { question: "Who is the borrower?", answer: "Businesses and payment processors who are owed money but need cash before that payment actually settles." },
      { question: "What is the loan?", answer: "A short-term advance against a specific, expected future receivable or payment flow — not a general-purpose term loan." },
      { question: "Who originates it?", answer: "Payment-financing partners who identify and structure specific receivables or payment streams eligible for financing." },
      { question: "Who owns the loan?", answer: "The financing pool or its associated legal structure holds the claim on the receivable being advanced against." },
      { question: "Where is the SPV?", answer: "Structured per financing program, since receivables financing typically requires a dedicated legal wrapper to hold rights to the underlying payment streams." },
      { question: "What does the investor hold?", answer: "A pool or vault position whose value accrues from the discount earned on financed receivables as they're repaid." },
      { question: "How are repayments distributed?", answer: "As receivables settle — often within days to weeks — proceeds flow back through the structure to liquidity providers." },
      { question: "What protects investors?", answer: "Short duration itself is a form of protection: capital is exposed to any single receivable for a much shorter window than a typical term loan, reducing time-based uncertainty." },
      { question: "How liquid is the position?", answer: "Turnover is fast because the underlying receivables are short-duration, but the position is only as liquid as the pace of new receivables being financed and repaid." },
      { question: "What happens in default?", answer: "If an expected receivable doesn't settle, the financed advance becomes a direct credit loss on that specific flow — recovery depends on the underlying payer, not a long workout process." },
    ],
  },
  {
    slug: "fasanara",
    name: "Fasanara",
    summary:
      "Fasanara originates credit pools such as mF-ONE and mGLOBAL, issued through Midas's tokenization infrastructure — a clean example of separating the originator from the tokenization platform.",
    concepts: [
      "Originator vs tokenization platform",
      "Permissionless credit pools",
      "Onchain mcap vs active mcap",
      "DeFi utilization",
    ],
    answers: [
      { question: "Who is the borrower?", answer: "Borrowers underlying Fasanara's private credit strategies — the specific credit exposures packaged into mF-ONE and mGLOBAL." },
      { question: "What is the loan?", answer: "A credit pool structured by Fasanara — mF-ONE is classified as a Credit Pool asset in the project database, with mGLOBAL a related product issued via the same infrastructure." },
      { question: "Who originates it?", answer: "Fasanara — it is classified as the Originator, not the tokenization platform, in the project database's Layer 1." },
      { question: "Who owns the loan?", answer: "Fasanara's structure holds the underlying credit; Midas Software GmbH is recorded as the issuer of the tokenized wrapper around it." },
      { question: "Where is the SPV?", answer: "The database records Midas Software GmbH as issuer for mF-ONE — the legal wrapper sits with the tokenization platform's issuance entity, separate from Fasanara's own origination role." },
      { question: "What does the investor hold?", answer: "A permissionless credit pool token — mF-ONE (ticker MF-ONE) — accessible without gating, per its recorded access model." },
      { question: "How are repayments distributed?", answer: "Value accrues to the pool token as underlying credit generates yield, consistent with a Credit Pool asset class structure." },
      { question: "What protects investors?", answer: "The database notes a meaningful gap between mF-ONE's onchain market cap (~$64.4M) and its active market cap (~$34.9M) — a reminder to check what share of reported size is actually deployed versus idle." },
      { question: "How liquid is the position?", answer: "The database records DeFi utilization of about 90% for mF-ONE, indicating most of the active pool is being actively used as DeFi collateral or liquidity rather than sitting idle." },
      { question: "What happens in default?", answer: "Not separately disclosed in the database beyond the pool structure itself — this is exactly the kind of gap the 60-Second Credit Check is designed to surface before investing, not after." },
    ],
  },
];

export const caseStudyBySlug = new Map(caseStudies.map((study) => [study.slug, study]));
export const caseStudySlugs = caseStudies.map((study) => study.slug);
