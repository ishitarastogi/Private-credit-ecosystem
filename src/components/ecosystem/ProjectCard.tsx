import { ProjectLogo } from "@/components/ecosystem/ProjectLogo";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  isSelected: boolean;
  onSelect: (projectId: string) => void;
};

export function ProjectCard({ project, isSelected, onSelect }: ProjectCardProps) {
  const productCount = project.assetIds.length;

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
        <ProjectLogo name={project.name} logo={project.logo} />
      </span>
      <span className="text-xs font-medium leading-tight text-foreground">
        {project.name}
      </span>
      <span className="text-[10px] leading-tight text-muted">
        {productCount} {productCount === 1 ? "product" : "products"}
      </span>
    </button>
  );
}
