"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Leaf } from "lucide-react";

export default function Headers() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Our Products", href: "/collection" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-green-100 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100">
            <Leaf size={25} className="text-green-700" />
          </div>

          <div>
            <h1 className="text-lg font-extrabold text-[#315b32] sm:text-xl">
              Pure Herbal Oil
            </h1>
            <p className="text-[10px] tracking-[2px] text-[#a28b35]">
              NATURE IN EVERY DROP
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-gray-600 transition hover:text-green-700"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <Link
          href="/collection"
          className="hidden rounded-full bg-[#527b3c] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#365e32] md:block"
        >
          Shop Now →
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-green-800 md:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-green-100 bg-white p-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-green-50 hover:text-green-800"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/collection"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-lg bg-[#527b3c] px-4 py-3 text-center font-bold text-white"
          >
            Shop Now →
          </Link>
        </nav>
      )}
    </header>
  );
}