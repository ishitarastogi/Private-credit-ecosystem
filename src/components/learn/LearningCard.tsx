import Link from "next/link";

type LearningCardProps = {
  slug: string;
  summary: string;
  title: string;
};

export function LearningCard({ slug, summary, title }: LearningCardProps) {
  return (
    <Link
      href={`/learn/${slug}`}
      className="rounded-md border border-line bg-white p-5 transition-colors hover:border-accent"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
        Note
      </p>
      <h2 className="mt-4 text-lg font-semibold text-foreground">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-muted">{summary}</p>
    </Link>
  );
}
