import { client } from "@/lib/sanity.client";
import { postQuery, postsQuery } from "@/lib/queries";
import { urlFor } from "@/lib/sanity.image";
import { PortableText } from "@/components/PortableText";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await client.fetch(postsQuery);
  return posts.map((post: any) => ({
    slug: post.slug.current,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch(postQuery, { slug });
  if (!post) return { title: "文章未找到" };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await client.fetch(postQuery, { slug });

  if (!post) {
    notFound();
  }

  return (
    <article className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* 头图 */}
        {post.mainImage && (
          <div className="relative aspect-video mb-8 rounded-card overflow-hidden">
            <Image
              src={urlFor(post.mainImage).width(1200).height(600).url()}
              alt={post.title}
              width={1200}
              height={600}
              className="object-cover"
            />
          </div>
        )}

        {/* 标题和日期 */}
        <header className="mb-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            {post.title}
          </h1>
          <time className="text-charcoal/60">
            {new Date(post.publishedAt).toLocaleDateString("zh-CN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </header>

        {/* 正文 */}
        <div className="prose prose-lg max-w-none">
          <PortableText value={post.body} />
        </div>
      </div>
    </article>
  );
}
