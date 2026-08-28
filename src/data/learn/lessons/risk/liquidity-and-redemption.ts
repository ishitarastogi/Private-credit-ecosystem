import type { Lesson } from "@/data/learn/types";

export const liquidityAndRedemption: Lesson = {
  slug: "liquidity-and-redemption",
  moduleKey: "risk",
  order: 4,
  title: "Liquidity & redemption",
  summary: "A token being tradable is not the same as a fund's underlying loans being liquid.",
  blocks: [
    {
      type: "paragraph",
      lead: true,
      text: "Liquidity is how easily and quickly a position can be converted to cash without a significant loss of value. In private credit, the underlying loans are almost always illiquid — they're designed to be held to maturity, not traded.",
    },
    {
      type: "paragraph",
      text: "That illiquidity doesn't disappear just because the claim on those loans is represented by a token. It shows up instead in the redemption terms: the specific rules for how and when an investor can actually get cash back.",
    },
    {
      type: "heading",
      text: "What to check in redemption terms",
      level: 3,
    },
    {
      type: "list",
      style: "bullet",
      items: [
        { label: "Redemption windows", detail: "how often can redemptions even be requested — daily, weekly, quarterly?" },
        { label: "Notice periods", detail: "how far in advance do you have to request a redemption before it's processed?" },
        { label: "Gates", detail: "can the manager cap or pause redemptions if too many investors ask for cash at once?" },
        { label: "Cash sleeve", detail: "does the fund keep a reserve of cash specifically to meet redemptions, or does it rely on selling loans?" },
      ],
    },
    {
      type: "callout",
      tone: "key-concept",
      text: "A thin secondary market is not the same as real liquidity. Being able to technically sell a token on an exchange doesn't mean you can sell it at a fair price, or in size, especially during exactly the moments — stress, defaults, NAV markdowns — when you'd most want to.",
    },
    {
      type: "takeaways",
      items: [
        "Private credit's underlying loans are illiquid by design — that illiquidity surfaces in a token's redemption terms, not its tradability.",
        "Check redemption windows, notice periods, gates, and whether a cash reserve actually exists to fund redemptions.",
        "A tradable secondary market is not the same as real liquidity — thin markets can produce steep discounts exactly when you need to sell.",
        "\"Can I actually exit?\" is one of the seven questions in the 60-Second Credit Check for a reason.",
      ],
    },
  ],
};
