import { PortableText as PortableTextComponent } from "@portabletext/react";
import { urlFor } from "@/lib/sanity.image";
import Image from "next/image";

const components = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null;
      return (
        <div className="my-8">
          <Image
            src={urlFor(value).width(800).height(400).url()}
            alt={value.alt || ""}
            width={800}
            height={400}
            className="rounded-lg"
          />
          {value.caption && (
            <p className="text-center text-sm text-charcoal/60 mt-2">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
  },
  block: {
    h2: ({ children }: any) => (
      <h2 className="font-serif text-3xl font-bold mt-12 mb-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="font-serif text-2xl font-bold mt-8 mb-3">{children}</h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-charcoal/80 leading-relaxed mb-4">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-sage pl-4 italic my-6 text-charcoal/70">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sage underline hover:text-brown transition-colors duration-300"
      >
        {children}
      </a>
    ),
    code: ({ children }: any) => (
      <code className="bg-charcoal/10 px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
    ),
  },
};

export function PortableText({ value }: { value: any }) {
  return <PortableTextComponent value={value} components={components} />;
}
