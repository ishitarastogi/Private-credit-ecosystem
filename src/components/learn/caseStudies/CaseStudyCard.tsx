import Link from "next/link";
import type { CaseStudy } from "@/data/learn/types";

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
};

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Link
      href={`/learn/case-studies/${caseStudy.slug}`}
      className="rounded-md border border-line bg-white p-5 transition-colors hover:border-accent"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
        Case Study
      </p>
      <h2 className="mt-4 text-lg font-semibold text-foreground">{caseStudy.name}</h2>
      <p className="mt-3 text-sm leading-6 text-muted">{caseStudy.summary}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {caseStudy.concepts.map((concept) => (
          <span
            key={concept}
            className="rounded-md border border-line px-2 py-0.5 text-[11px] text-muted"
          >
            {concept}
          </span>
        ))}
      </div>
    </Link>
  );
}
