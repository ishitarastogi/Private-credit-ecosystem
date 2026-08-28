import type { Lesson } from "@/data/learn/types";

export const whatIsTranching: Lesson = {
  slug: "what-is-tranching",
  moduleKey: "credit-structure",
  order: 4,
  title: "What is tranching?",
  summary: "The same pool, split into layers of risk and priority — not three separate pools.",
  blocks: [
    {
      type: "paragraph",
      lead: true,
      text: "Tranching divides one pool of credit into different layers of risk and cash-flow priority. It's the mechanism securitization uses to turn a single pool into multiple, differently-priced claims.",
    },
    {
      type: "paragraph",
      text: "A common example: a $100M credit pool split into a $70M senior tranche, a $20M mezzanine tranche, and a $10M junior tranche.",
    },
    {
      type: "callout",
      tone: "warning",
      title: "This is not three loan pools",
      text: "Senior, mezzanine, and junior are not three separate pools of loans. They are three different claims on the exact same underlying pool — the difference is entirely about who gets paid first and who absorbs losses first.",
    },
    {
      type: "widget",
      widget: "waterfall-simulator",
      title: "One pool, three claims",
      description: "Move the loss slider — notice junior absorbs losses first, then mezzanine, then senior. It's the same $100M pool the whole time.",
      config: {
        poolUsd: 100_000_000,
        seniorUsd: 70_000_000,
        mezzanineUsd: 20_000_000,
        juniorUsd: 10_000_000,
        defaultLossUsd: 5_000_000,
        maxLossUsd: 100_000_000,
      },
    },
    {
      type: "comparison",
      subjects: ["Senior", "Mezzanine", "Junior"],
      rows: [
        { attribute: "Payment priority", values: ["Paid first", "Middle priority", "Paid last"] },
        { attribute: "Loss priority", values: ["Takes losses last", "Middle risk", "Takes losses first"] },
        { attribute: "Typical yield", values: ["Usually lower", "Middle return", "Higher — potentially — to compensate for risk"] },
      ],
    },
    {
      type: "takeaways",
      items: [
        "Tranching splits one pool's cash flows and losses into layers with different priority — it does not split the pool itself.",
        "Senior is paid first and absorbs losses last; junior is paid last and absorbs losses first; mezzanine sits in between.",
        "Yield roughly tracks loss priority — junior typically offers a higher potential return to compensate for absorbing losses first.",
        "The next two lessons go deeper: Senior vs Junior focuses on the loss mechanics, and The Waterfall covers the payment order in full detail.",
      ],
    },
    {
      type: "quiz",
      questions: [
        {
          id: "q1",
          question: "A $100M pool is split into a $70M senior and $30M junior tranche. What are these two tranches?",
          options: [
            "Two separate $70M and $30M pools of different loans",
            "Two different claims on the exact same $100M pool",
            "Two different borrowers",
            "Two SPVs",
          ],
          correctIndex: 1,
        },
      ],
    },
  ],
};
