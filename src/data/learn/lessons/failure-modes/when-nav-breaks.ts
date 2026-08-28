import type { Lesson } from "@/data/learn/types";

export const whenNavBreaks: Lesson = {
  slug: "when-nav-breaks",
  moduleKey: "failure-modes",
  order: 2,
  title: "When NAV breaks",
  summary: "A healthy-looking mark can hide a problem that's already happened.",
  blocks: [
    {
      type: "paragraph",
      lead: true,
      text: "Because NAV is a periodic, model-based mark, a token can look stable for a while even as the underlying credit deteriorates. When the mark finally catches up, the shock is sudden.",
    },
    {
      type: "flow-diagram",
      orientation: "horizontal",
      steps: [
        { id: "healthy", label: "Healthy-looking NAV" },
        { id: "deteriorate", label: "Offchain credit deteriorates" },
        { id: "markdown", label: "NAV marked down" },
        { id: "price", label: "Token price falls" },
        { id: "redemptions", label: "Redemptions increase" },
      ],
    },
    {
      type: "paragraph",
      text: "This connects directly to the NAV vs Fair Value lesson in Module 04: the gap between the mark and reality doesn't cause the underlying problem, but it delays when investors find out about it — which shapes who's still holding the token when the markdown finally lands.",
    },
    {
      type: "callout",
      tone: "warning",
      text: "A NAV shock is rarely the first bad thing to happen. It's usually the moment a problem that already existed offchain finally gets reflected onchain — everything before that moment looked fine by design.",
    },
    {
      type: "takeaways",
      items: [
        "A NAV shock is what happens when a lagging, periodic mark finally catches up to deteriorated underlying credit.",
        "The underlying problem predates the visible shock — NAV just hadn't caught up yet.",
        "A NAV markdown typically triggers rising redemption requests, which is where Module 08's next lesson picks up.",
      ],
    },
  ],
};
