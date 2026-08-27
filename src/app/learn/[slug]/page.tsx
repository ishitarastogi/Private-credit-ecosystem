import Link from "next/link";
import { titleFromSlug } from "@/lib/utils";

const learningSlugs = [
  "what-is-private-credit",
  "what-is-onchain-private-credit",
  "how-tokenized-credit-works",
  "what-is-a-credit-protocol",
  "private-credit-stack",
];

export function generateStaticParams() {
  return learningSlugs.map((slug) => ({ slug }));
}

export default async function LearningArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <article className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-8 lg:px-10">
      <Link
        href="/learn"
        className="text-sm font-medium text-accent underline-offset-4 hover:underline"
      >
        Learn
      </Link>
      <h1 className="mt-6 text-4xl font-semibold tracking-normal text-foreground">
        {titleFromSlug(slug)}
      </h1>
      <div className="mt-8 border-t border-line pt-8">
        <p className="text-base leading-7 text-muted">
          Placeholder content for this research note. This page is ready for a
          fuller article structure when the learning system is expanded.
        </p>
      </div>
    </article>
  );
}
