import type { Lesson } from "@/data/learn/types";

export const understandingCreditRisk: Lesson = {
  slug: "understanding-credit-risk",
  moduleKey: "where-is-the-risk",
  order: 1,
  title: "Understanding credit risk",
  summary: "Private credit yield exists because private credit carries risk — nine kinds, each taught by a scenario.",
  blocks: [
    {
      type: "paragraph",
      lead: true,
      text: "Private credit yield exists because private credit carries risk. Every extra percentage point of yield over a risk-free rate is compensation for something that can go wrong. Here's what that something usually is.",
    },
    {
      type: "scenario",
      title: "Credit risk",
      setup: "A borrower takes out a $5M working-capital loan against next quarter's receivables.",
      walkthrough: [
        "The borrower's biggest customer delays payment by 90 days.",
        "The borrower can no longer make the scheduled loan payment.",
      ],
      lesson: "Credit risk is simply the risk the borrower doesn't pay you back, for any reason.",
    },
    {
      type: "scenario",
      title: "Collateral risk",
      setup: "A loan is secured by a warehouse of inventory as collateral.",
      walkthrough: [
        "The borrower defaults, and the lender moves to seize the inventory.",
        "Half of it turns out to be obsolete or damaged — worth far less than assumed.",
      ],
      lesson: "Collateral risk is the risk that the asset backing a loan is worth less than expected when you actually need it.",
    },
    {
      type: "scenario",
      title: "Liquidity risk",
      setup: "An investor holds a token representing a share of a 3-year private credit fund.",
      walkthrough: [
        "The investor needs cash and requests a redemption.",
        "The fund only processes redemptions quarterly, and the current queue is backed up.",
      ],
      lesson: "Liquidity risk is the risk that you can't convert your position to cash when you want to, regardless of whether the underlying loans are healthy.",
    },
    {
      type: "scenario",
      title: "Valuation / NAV risk",
      setup: "A fund reports its NAV once a month, marked by the manager.",
      walkthrough: [
        "A loan quietly becomes impaired, but the next NAV update isn't due for three weeks.",
        "Investors keep buying in at a NAV that doesn't yet reflect the bad news.",
      ],
      lesson: "Valuation risk is the risk that the reported value lags the real value — you can be transacting at a stale price.",
    },
    {
      type: "scenario",
      title: "Counterparty risk",
      setup: "A protocol relies on a third-party custodian to hold cash reserves.",
      walkthrough: [
        "The custodian has an operational failure or becomes insolvent.",
        "Funds the protocol believed were safely held are now tied up in someone else's proceedings.",
      ],
      lesson: "Counterparty risk is the risk that some other party in the chain — not the borrower — fails to perform.",
    },
    {
      type: "scenario",
      title: "Legal / enforcement risk",
      setup: "A borrower defaults, and the SPV moves to enforce its claim.",
      walkthrough: [
        "The borrower is in a jurisdiction where the SPV's security interest is hard to enforce.",
        "Recovery takes years and costs more in legal fees than expected.",
      ],
      lesson: "Legal risk is the risk that even a valid claim is slow, expensive, or impossible to actually enforce.",
    },
    {
      type: "scenario",
      title: "Concentration risk",
      setup: "A pool advertises broad diversification across '50 borrowers.'",
      walkthrough: [
        "In practice, the top 3 borrowers make up 60% of the pool's exposure.",
        "One of those three defaults, and the loss is far larger than the headline diversification suggested.",
      ],
      lesson: "Concentration risk hides behind large borrower counts — check what share of exposure sits in the largest positions.",
    },
    {
      type: "scenario",
      title: "Servicing / operational risk",
      setup: "A loan performs fine, but the servicer responsible for collecting payments is understaffed.",
      walkthrough: [
        "Payments are collected late and reconciled inconsistently.",
        "Investors see erratic distributions that look like credit problems but are actually operational ones.",
      ],
      lesson: "Even a healthy loan can produce a bad investor experience if the servicing behind it is weak.",
    },
    {
      type: "scenario",
      title: "DeFi composability risk",
      setup: "A credit token becomes accepted as collateral on a DeFi lending market.",
      walkthrough: [
        "Borrowers use it to take out leveraged positions against it.",
        "A NAV markdown that would have been a minor event on its own now triggers automated liquidations.",
      ],
      lesson: "Once a credit token becomes DeFi collateral, its risk is no longer just its own — it inherits the speed and mechanics of DeFi liquidations. This is covered in full in Module 05.",
    },
    {
      type: "heading",
      text: "Senior vs junior",
      level: 3,
    },
    {
      type: "paragraph",
      text: "Structured pools split repayments into tranches with different priority. Senior capital gets paid first and absorbs losses last; junior capital gets paid last and absorbs losses first. Try it below.",
    },
    {
      type: "widget",
      widget: "waterfall-simulator",
      title: "Senior vs junior — the loss waterfall",
      description: "Move the loss slider and watch who absorbs it first.",
      config: {
        poolUsd: 100_000_000,
        seniorUsd: 70_000_000,
        juniorUsd: 30_000_000,
        defaultLossUsd: 10_000_000,
        maxLossUsd: 100_000_000,
      },
    },
    {
      type: "callout",
      tone: "key-concept",
      text: "Junior capital provides first-loss protection to senior capital. That's why junior tranches earn a higher yield — they're compensated for absorbing losses before anyone else does.",
    },
    {
      type: "heading",
      text: "Collateral",
      level: 3,
    },
    {
      type: "paragraph",
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
      text: "Lower LTV means more cushion before the collateral's value drops below the loan amount. Collateral quality matters just as much as the ratio — a 70% LTV against volatile or illiquid collateral is riskier than a 70% LTV against stable, liquid collateral.",
    },
    {
      type: "takeaways",
      items: [
        "Private credit yield compensates for real risk — credit, collateral, liquidity, valuation, counterparty, legal, concentration, servicing, and DeFi composability risk.",
        "Junior tranches absorb losses first, protecting senior capital — that's why they earn more.",
        "Overcollateralization and low LTV create a buffer, but only if the collateral itself is high quality and liquid.",
        "A single risk category rarely explains a failure — most real losses are a combination of two or more of these.",
      ],
    },
    {
      type: "quiz",
      questions: [
        {
          id: "q1",
          question: "In a $100M pool with a $70M senior and $30M junior tranche, what happens to senior capital on a $10M loss?",
          options: ["Senior absorbs the full $10M loss", "Senior is unaffected — junior absorbs the loss first", "Both split the loss equally", "The pool is liquidated"],
          correctIndex: 1,
        },
        {
          id: "q2",
          question: "A pool advertises 50 borrowers but 60% of exposure sits in 3 of them. Which risk does this describe?",
          options: ["Liquidity risk", "Concentration risk", "Counterparty risk", "Legal risk"],
          correctIndex: 1,
        },
      ],
    },
  ],
};
