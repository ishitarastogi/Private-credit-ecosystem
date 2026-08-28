import Link from "next/link";
import { LearningCard } from "@/components/learn/LearningCard";
import { lessons } from "@/data/learn/lessons";

export default function CreditStructurePage() {
  const moduleLessons = lessons
    .filter((lesson) => lesson.moduleKey === "credit-structure")
    .sort((a, b) => a.order - b.order);

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 lg:px-10">
      <Link
        href="/learn"
        className="text-sm font-medium text-accent underline-offset-4 hover:underline"
      >
        Learn
      </Link>

      <header className="mt-6 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Learn · 02
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-normal text-foreground sm:text-[2.25rem]">
          Credit structure
        </h1>
        <p className="mt-3 text-sm leading-6 text-muted">
          How a private-credit deal is assembled, divided, and distributed.
        </p>
      </header>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {moduleLessons.map((lesson) => (
          <div key={lesson.slug} className="flex gap-3">
            <span className="mt-5 shrink-0 font-mono text-xs text-accent">
              {String(lesson.order).padStart(2, "0")}
            </span>
            <div className="flex-1">
              <LearningCard slug={lesson.slug} title={lesson.title} summary={lesson.summary} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
