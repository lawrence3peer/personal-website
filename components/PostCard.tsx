import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity.image";

interface PostCardProps {
  title: string;
  slug: string;
  publishedAt: string;
  mainImage?: any;
  excerpt?: string;
}

export function PostCard({ title, slug, publishedAt, mainImage, excerpt }: PostCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <article className="card group">
        {mainImage && (
          <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
            <Image
              src={urlFor(mainImage).width(600).height(400).url()}
              alt={title}
              width={600}
              height={400}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <h3 className="font-serif text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-charcoal/60 mb-3">
          {new Date(publishedAt).toLocaleDateString("zh-CN")}
        </p>
        {excerpt && (
          <p className="text-charcoal/70 line-clamp-3">{excerpt}</p>
        )}
      </article>
    </Link>
  );
}
