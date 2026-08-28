import { CaseStudyCard } from "@/components/learn/caseStudies/CaseStudyCard";
import { caseStudies } from "@/data/learn/caseStudies";

export default function CaseStudiesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 lg:px-10">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Learn · 07
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-normal text-foreground sm:text-[2.25rem]">
          Case studies
        </h1>
        <p className="mt-3 text-sm leading-6 text-muted">
          The same fixed ten questions, applied to four real products — to show how the
          concepts from earlier modules actually show up in practice.
        </p>
      </header>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.slug} caseStudy={study} />
        ))}
      </div>
    </div>
  );
}
