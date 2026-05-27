import { client } from "@/lib/sanity.client";
import { profileQuery, featuredProjectsQuery, latestPostsQuery } from "@/lib/queries";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { PostCard } from "@/components/PostCard";

export default async function HomePage() {
  const [profile, projects, posts] = await Promise.all([
    client.fetch(profileQuery),
    client.fetch(featuredProjectsQuery),
    client.fetch(latestPostsQuery),
  ]);

  if (!profile) {
    return (
      <div className="text-center py-20">
        <p className="text-xl text-charcoal/60">
          请先在 Sanity Studio 中添加个人信息
        </p>
      </div>
    );
  }

  return (
    <>
      <Hero name={profile.name} bio={profile.bio} avatar={profile.avatar} />

      {/* 精选作品 */}
      {projects.length > 0 && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-8 text-center">
              精选作品
            </h2>
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
          </div>
        </section>
      )}

      {/* 最新文章 */}
      {posts.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-8 text-center">
              最新文章
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post: any) => (
                <PostCard
                  key={post._id}
                  title={post.title}
                  slug={post.slug.current}
                  publishedAt={post.publishedAt}
                  mainImage={post.mainImage}
                  excerpt={post.excerpt}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
