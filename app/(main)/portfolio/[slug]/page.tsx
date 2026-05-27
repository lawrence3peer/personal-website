import { client } from "@/lib/sanity.client";
import { projectQuery, projectsQuery } from "@/lib/queries";
import { urlFor } from "@/lib/sanity.image";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = await client.fetch(projectsQuery);
  return projects.map((project: any) => ({
    slug: project.slug.current,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await client.fetch(projectQuery, { slug });
  if (!project) return { title: "项目未找到" };

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function PortfolioProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await client.fetch(projectQuery, { slug });

  if (!project) {
    notFound();
  }

  return (
    <article className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* 封面图 */}
        {project.mainImage && (
          <div className="relative aspect-video mb-8 rounded-card overflow-hidden">
            <Image
              src={urlFor(project.mainImage).width(1200).height(600).url()}
              alt={project.title}
              width={1200}
              height={600}
              className="object-cover"
            />
          </div>
        )}

        {/* 标题和链接 */}
        <header className="mb-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            {project.title}
          </h1>

          {/* 技术栈 */}
          {project.techStack && project.techStack.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech: string) => (
                <span
                  key={tech}
                  className="text-sm bg-sage/10 text-sage px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* 项目链接 */}
          <div className="flex gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                在线预览
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                GitHub
              </a>
            )}
          </div>
        </header>

        {/* 项目描述 */}
        {project.description && (
          <div className="text-lg text-charcoal/80 leading-relaxed mb-12">
            {project.description}
          </div>
        )}

        {/* 项目截图 */}
        {project.images && project.images.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.images.map((image: any, index: number) => (
              <div key={index} className="rounded-card overflow-hidden">
                <Image
                  src={urlFor(image).width(800).height(600).url()}
                  alt={`${project.title} 截图 ${index + 1}`}
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
