import Link from "next/link";

type LessonHeaderProps = {
  moduleIndex: number;
  moduleTitle: string;
  title: string;
  summary: string;
};

export function LessonHeader({ moduleIndex, moduleTitle, title, summary }: LessonHeaderProps) {
  return (
    <header className="max-w-3xl border-b border-line pb-8">
      <Link
        href="/learn"
        className="text-sm font-medium text-accent underline-offset-4 hover:underline"
      >
        Learn
      </Link>
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
        {String(moduleIndex).padStart(2, "0")} · {moduleTitle}
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">
        {title}
      </h1>
      <p className="mt-3 text-sm leading-6 text-muted">{summary}</p>
    </header>
  );
}
