import { client } from "@/lib/sanity.client";
import { postsQuery } from "@/lib/queries";
import { PostCard } from "@/components/PostCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "博客文章",
  description: "我的博客文章列表",
};

export default async function BlogPage() {
  const posts = await client.fetch(postsQuery);

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-serif text-4xl font-bold mb-12 text-center">
          博客文章
        </h1>

        {posts.length === 0 ? (
          <p className="text-center text-charcoal/60">
            暂无文章，请在 Sanity Studio 中添加
          </p>
        ) : (
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
        )}
      </div>
    </section>
  );
}
