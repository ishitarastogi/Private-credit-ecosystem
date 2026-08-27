import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/database/ProjectDetail";
import { assets } from "@/data/assets";
import { projects } from "@/data/projects";
import { relationships } from "@/data/relationships";

export function generateStaticParams() {
  return projects.map((project) => ({
    project: project.id,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ project: string }>;
}) {
  const { project } = await params;
  const selectedProject = projects.find((item) => item.id === project);

  if (!selectedProject) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-8 lg:px-10">
      <ProjectDetail
        assets={assets}
        project={selectedProject}
        projects={projects}
        relationships={relationships}
      />
    </div>
  );
}
