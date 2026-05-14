import { getProjectById, projects } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectDetailClient from "@/components/portfolio/project-detail-client";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id.toString() }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = getProjectById(parseInt(id));

  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-[var(--forest-dark)]">
      <ProjectDetailClient project={project} />
    </main>
  );
}
