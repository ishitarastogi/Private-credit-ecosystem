import { notFound } from "next/navigation";
import { CaseStudyTemplate } from "@/components/learn/caseStudies/CaseStudyTemplate";
import { caseStudyBySlug, caseStudySlugs } from "@/data/learn/caseStudies";

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = caseStudyBySlug.get(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-8 lg:px-10">
      <CaseStudyTemplate caseStudy={caseStudy} />
    </div>
  );
}
