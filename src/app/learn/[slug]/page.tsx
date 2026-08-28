import { notFound } from "next/navigation";
import { ContentBlockRenderer } from "@/components/learn/blocks/ContentBlockRenderer";
import { LessonHeader } from "@/components/learn/LessonHeader";
import { lessonBySlug, lessonSlugs } from "@/data/learn/lessons";
import { moduleByKey } from "@/data/learn/modules";

export function generateStaticParams() {
  return lessonSlugs.map((slug) => ({ slug }));
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lesson = lessonBySlug.get(slug);

  if (!lesson) {
    notFound();
  }

  const lessonModule = moduleByKey.get(lesson.moduleKey);

  return (
    <article className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-8 lg:px-10">
      <LessonHeader
        moduleIndex={lessonModule?.index ?? 0}
        moduleTitle={lessonModule?.title ?? ""}
        title={lesson.title}
        summary={lesson.summary}
      />
      <div className="mt-8">
        <ContentBlockRenderer blocks={lesson.blocks} />
      </div>
    </article>
  );
}
