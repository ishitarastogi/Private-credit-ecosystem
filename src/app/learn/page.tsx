import { LearningCard } from "@/components/learn/LearningCard";

const topics = [
  {
    slug: "what-is-private-credit",
    title: "What is private credit?",
    summary: "A primer on non-bank lending, borrowers, managers, and risk.",
  },
  {
    slug: "what-is-onchain-private-credit",
    title: "What is onchain private credit?",
    summary: "How private credit activity can be represented with blockchain rails.",
  },
  {
    slug: "how-tokenized-credit-works",
    title: "How does tokenized credit work?",
    summary: "The basic lifecycle of issuance, servicing, reporting, and redemption.",
  },
  {
    slug: "what-is-a-credit-protocol",
    title: "What is a credit protocol?",
    summary: "A short guide to protocol-mediated lending markets and pools.",
  },
  {
    slug: "private-credit-stack",
    title: "Understanding the private-credit stack",
    summary: "A layered view from origination through venues and infrastructure.",
  },
];

export default function LearnPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
      <header className="max-w-3xl border-b border-line pb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Learn
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">
          Private credit research notes
        </h1>
      </header>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic) => (
          <LearningCard key={topic.slug} {...topic} />
        ))}
      </section>
    </div>
  );
}
