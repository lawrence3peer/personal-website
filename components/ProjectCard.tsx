import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity.image";

interface ProjectCardProps {
  title: string;
  slug: string;
  mainImage: any;
  techStack?: string[];
}

export function ProjectCard({ title, slug, mainImage, techStack }: ProjectCardProps) {
  return (
    <Link href={`/portfolio/${slug}`}>
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
        {techStack && techStack.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-sm bg-sage/10 text-sage px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </article>
    </Link>
  );
}
