import Link from "next/link";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { ProjectContent } from "@/components/project-content";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Projeto não encontrado" };
  }

  return {
    title: `${project.title} | Silas Vasques`,
    description: project.description,
  };
}

export default async function ProjectPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const slug = params.slug;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectContent project={project} />;
}