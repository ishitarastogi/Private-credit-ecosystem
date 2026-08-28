import Link from "next/link";
import type { CaseStudy } from "@/data/learn/types";

type CaseStudyTemplateProps = {
  caseStudy: CaseStudy;
};

export function CaseStudyTemplate({ caseStudy }: CaseStudyTemplateProps) {
  return (
    <article>
      <Link
        href="/learn/case-studies"
        className="text-sm font-medium text-accent underline-offset-4 hover:underline"
      >
        Case Studies
      </Link>

      <header className="mt-6 border-b border-line pb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Case Study
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">
          {caseStudy.name}
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">{caseStudy.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {caseStudy.concepts.map((concept) => (
            <span
              key={concept}
              className="rounded-md border border-line px-2.5 py-1 text-xs text-muted"
            >
              {concept}
            </span>
          ))}
        </div>
      </header>

      <div className="mt-8 space-y-5">
        {caseStudy.answers.map((item, index) => (
          <div key={item.question} className="rounded-md border border-line bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">
              {String(index + 1).padStart(2, "0")} · {item.question}
            </p>
            <p className="mt-2 text-sm leading-6 text-foreground">{item.answer}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
