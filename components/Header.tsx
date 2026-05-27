"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "首页", href: "/" },
  { name: "博客", href: "/blog" },
  { name: "作品集", href: "/portfolio" },
  { name: "简历", href: "/resume" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/80 backdrop-blur-md border-b border-sage/20">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-display text-2xl font-bold text-charcoal">
          个人网站
        </Link>

        {/* 桌面导航 */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-charcoal/70 hover:text-charcoal transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* 移动端菜单按钮 */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* 移动端导航 */}
      {isOpen && (
        <nav className="md:hidden px-4 pb-4 bg-cream border-t border-sage/20">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-3 text-charcoal/70 hover:text-charcoal transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
