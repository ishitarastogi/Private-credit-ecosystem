import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  isSelected: boolean;
  onSelect: (projectId: string) => void;
};

export function ProjectCard({ project, isSelected, onSelect }: ProjectCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(project.id)}
      aria-pressed={isSelected}
      className={`flex w-28 flex-col items-center gap-2 rounded-md border px-3 py-4 text-center transition-colors ${
        isSelected
          ? "border-accent bg-accent/[0.06]"
          : "border-line bg-background hover:border-accent/50"
      }`}
    >
      <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-md border border-line bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={project.logo} alt="" width={22} height={22} />
      </span>
      <span className="text-xs font-medium leading-tight text-foreground">
        {project.name}
      </span>
      <span className="text-[10px] leading-tight text-muted">{project.layer}</span>
    </button>
  );
}
