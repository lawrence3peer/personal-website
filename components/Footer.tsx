import Link from "next/link";

interface FooterProps {
  footer?: string;
  social?: {
    github?: string;
    wechat?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export function Footer({ footer, social }: FooterProps) {
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="font-serif text-lg">{footer || "感谢您的访问"}</p>
          </div>

          <div className="flex items-center gap-6">
            {social?.github && (
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sage transition-colors duration-300"
              >
                GitHub
              </a>
            )}
            {social?.twitter && (
              <a
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sage transition-colors duration-300"
              >
                Twitter
              </a>
            )}
            {social?.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sage transition-colors duration-300"
              >
                LinkedIn
              </a>
            )}
            {social?.wechat && (
              <span className="hover:text-sage transition-colors duration-300">
                微信: {social.wechat}
              </span>
            )}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} 保留所有权利</p>
        </div>
      </div>
    </footer>
  );
}
