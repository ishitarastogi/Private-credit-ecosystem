import Link from "next/link";
import { LearningCard } from "@/components/learn/LearningCard";
import { ModuleSection } from "@/components/learn/ModuleSection";
import { CaseStudyCard } from "@/components/learn/caseStudies/CaseStudyCard";
import { modules } from "@/data/learn/modules";
import { lessons } from "@/data/learn/lessons";
import { caseStudies } from "@/data/learn/caseStudies";
import { glossary } from "@/data/learn/glossary";

export default function LearnPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 lg:px-10">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Learn
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-normal text-foreground sm:text-[2.25rem]">
          How onchain private credit actually works
        </h1>
        <p className="mt-3 text-sm leading-6 text-muted">
          A cumulative, interactive path through where the risk sits, how real-world
          credit connects to DeFi, and how to evaluate a credit product yourself.
        </p>

        <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
          <Stat value={lessons.length} label="lessons" />
          <Stat value={modules.length} label="modules" />
          <Stat value={caseStudies.length} label="case studies" />
          <Stat value={glossary.length} label="glossary terms" />
        </dl>
      </header>

      <div className="mt-10">
        {modules.map((learnModule) => {
          if (learnModule.kind === "lessons") {
            const moduleLessons = lessons
              .filter((lesson) => lesson.moduleKey === learnModule.key)
              .sort((a, b) => a.order - b.order);

            return (
              <ModuleSection key={learnModule.key} module={learnModule}>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {moduleLessons.map((lesson) => (
                    <LearningCard
                      key={lesson.slug}
                      slug={lesson.slug}
                      title={lesson.title}
                      summary={lesson.summary}
                    />
                  ))}
                </div>
              </ModuleSection>
            );
          }

          if (learnModule.kind === "case-studies") {
            return (
              <ModuleSection key={learnModule.key} module={learnModule}>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {caseStudies.map((study) => (
                    <CaseStudyCard key={study.slug} caseStudy={study} />
                  ))}
                </div>
              </ModuleSection>
            );
          }

          return (
            <ModuleSection key={learnModule.key} module={learnModule}>
              <div className="grid gap-4 sm:grid-cols-2">
                <Link
                  href="/learn/glossary"
                  className="rounded-md border border-line bg-white p-5 transition-colors hover:border-accent"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    Glossary
                  </p>
                  <h2 className="mt-4 text-lg font-semibold text-foreground">
                    {glossary.length} searchable terms
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    Short, practical definitions for every concept used across the Learn section.
                  </p>
                </Link>
                <Link
                  href="/learn/resources"
                  className="rounded-md border border-line bg-white p-5 transition-colors hover:border-accent"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    Resources
                  </p>
                  <h2 className="mt-4 text-lg font-semibold text-foreground">
                    A curated research library
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    Primary sources, protocol research, and practitioner analysis — organized, not dumped.
                  </p>
                </Link>
              </div>
            </ModuleSection>
          );
        })}
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex items-baseline gap-1.5">
      <dt className="text-sm font-semibold text-foreground">{value}</dt>
      <dd className="text-xs text-muted">{label}</dd>
    </div>
  );
}
