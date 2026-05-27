import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity.image";

interface HeroProps {
  name: string;
  bio: string;
  avatar: any;
}

export function Hero({ name, bio, avatar }: HeroProps) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {avatar && (
          <div className="w-48 h-48 relative rounded-full overflow-hidden shadow-card">
            <Image
              src={urlFor(avatar).width(200).height(200).url()}
              alt={name}
              width={200}
              height={200}
              className="object-cover"
            />
          </div>
        )}

        <div className="text-center md:text-left">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            你好，我是 {name}
          </h1>
          <p className="text-xl text-charcoal/70 mb-8 max-w-2xl">{bio}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/portfolio" className="btn-primary">
              查看作品
            </Link>
            <Link href="/resume" className="btn-secondary">
              联系我
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
