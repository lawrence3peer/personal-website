import { client } from "@/lib/sanity.client";
import { projectsQuery } from "@/lib/queries";
import { ProjectCard } from "@/components/ProjectCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "作品集",
  description: "我的作品集展示",
};

export default async function PortfolioPage() {
  const projects = await client.fetch(projectsQuery);

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-serif text-4xl font-bold mb-12 text-center">
          我的作品
        </h1>

        {projects.length === 0 ? (
          <p className="text-center text-charcoal/60">
            暂无作品，请在 Sanity Studio 中添加
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project: any) => (
              <ProjectCard
                key={project._id}
                title={project.title}
                slug={project.slug.current}
                mainImage={project.mainImage}
                techStack={project.techStack}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
