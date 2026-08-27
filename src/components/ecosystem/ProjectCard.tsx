import Link from "next/link";
import type { Project } from "@/data/projects";
import { formatList } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/database/${project.id}`}
      className="group flex min-h-28 w-full max-w-56 flex-col justify-between rounded-md border border-line bg-background p-4 transition-colors hover:border-accent"
    >
      <div>
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-sm font-semibold text-foreground">{project.name}</h3>
          <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
        </div>
        <p className="mt-2 text-xs leading-5 text-muted">{project.category}</p>
      </div>
      <p className="mt-4 text-xs text-zinc-500">{formatList(project.chains)}</p>
    </Link>
  );
}
