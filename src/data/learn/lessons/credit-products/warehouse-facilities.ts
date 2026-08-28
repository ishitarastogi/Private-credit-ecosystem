import type { Lesson } from "@/data/learn/types";

export const warehouseFacilities: Lesson = {
  slug: "warehouse-facilities",
  moduleKey: "credit-products",
  order: 4,
  title: "Warehouse facilities",
  summary: "Short-term, revolving financing that bridges an originator until a permanent structure takes over.",
  blocks: [
    {
      type: "paragraph",
      lead: true,
      text: "Before a pool of loans is large or seasoned enough to securitize, an originator often needs somewhere to hold and fund those loans in the meantime. A warehouse facility is that bridge — a revolving line of credit an originator draws against as it accumulates loans, before a permanent structure (a securitization, a fund) eventually takes them out.",
    },
    {
      type: "flow-diagram",
      orientation: "vertical",
      steps: [
        { id: "originate", label: "Originator makes loans", detail: "one at a time, as borrowers arrive" },
        { id: "warehouse", label: "Warehouse facility", detail: "a revolving line funds and holds them temporarily" },
        { id: "accumulate", label: "Pool accumulates", detail: "until it's large enough to structure" },
        { id: "takeout", label: "Permanent takeout", detail: "a securitization or fund purchase repays the warehouse line" },
      ],
    },
    {
      type: "paragraph",
      text: "Structurally, a warehouse facility behaves like a short-duration, revolving credit line rather than a single fixed loan — it can be drawn, repaid, and drawn again as loans move in and out. Products that offer several tenors of the same underlying exposure — for example, the project database includes R25 products across quarterly, semi-yearly, and weekly maturities — illustrate the same underlying idea: short-duration, rolling exposure is a distinct product shape from a single long-dated loan, even when it sits on the same underlying credit.",
    },
    {
      type: "callout",
      tone: "key-concept",
      text: "A warehouse facility's risk profile is tied to the takeout: if the permanent structure that's supposed to absorb the pool doesn't materialize — because market conditions change, or the pool doesn't meet the buyer's criteria — the warehouse lender can be left holding loans for much longer than intended, with correspondingly different risk.",
    },
    {
      type: "takeaways",
      items: [
        "A warehouse facility is short-term, revolving financing that bridges an originator until a permanent structure (securitization or fund) takes the loans out.",
        "It behaves like a revolving line, not a single fixed-term loan — capital is drawn and repaid as the underlying pool accumulates.",
        "Short-duration, rolling exposure is a distinct product shape from a long-dated loan on the same underlying credit.",
        "The key risk is takeout risk: what happens if the permanent structure that's supposed to repay the facility doesn't materialize on schedule.",
      ],
    },
  ],
};
