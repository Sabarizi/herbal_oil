
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

export default function Headers() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Our Products", href: "/collection" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#cbb77c]/15 bg-[#101812]/90 text-[#f6f1e6] shadow-[0_8px_35px_rgba(0,0,0,0.18)] backdrop-blur-2xl">
      {/* Subtle golden accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#cbb77c]/70 to-transparent" />

      <div className="mx-auto flex min-h-[82px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-7 lg:px-8">
        {/* Brand Logo */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="group flex min-w-0 items-center gap-3"
          aria-label="Pure Herbal Oil Home"
        >
          <div className="relative flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-2xl border border-[#cbb77c]/30 bg-gradient-to-br from-[#294532] via-[#1b2b20] to-[#101812] shadow-[0_0_24px_rgba(203,183,124,0.08)] transition duration-500 group-hover:border-[#d9c58f]/70 group-hover:shadow-[0_0_28px_rgba(203,183,124,0.18)] sm:h-[60px] sm:w-[60px]">
            <div className="absolute inset-1 rounded-xl border border-white/[0.06]" />

            <Image
              src="/logo.png"
              alt="Pure Herbal Oil Logo"
              width={54}
              height={54}
              priority
              className="relative z-10 h-full w-full rounded-xl object-contain p-1.5 transition duration-500 group-hover:scale-105"
            />

            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full border border-[#101812] bg-[#cbb77c] text-[#17241b]">
              <Sparkles size={9} />
            </span>
          </div>

          <div className="min-w-0">
            <h1 className="whitespace-nowrap font-serif text-[17px] font-semibold tracking-[0.015em] text-[#f5edda] transition-colors duration-300 group-hover:text-[#e3d19b] sm:text-xl md:text-[22px]">
              Pure Herbal Oil
            </h1>

            <div className="mt-1.5 flex items-center gap-2">
              <span className="h-px w-5 bg-[#cbb77c]/70" />
              <p className="whitespace-nowrap text-[8px] font-medium tracking-[0.20em] text-[#cbb77c] sm:text-[9px] sm:tracking-[0.25em]">
                NATURE IN EVERY DROP
              </p>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative rounded-full px-4 py-3 text-[13px] font-medium text-[#c4cbbf] transition duration-300 hover:bg-white/[0.035] hover:text-[#e5d29b]"
            >
              {link.name}

              <span className="absolute bottom-1.5 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#cbb77c] to-transparent transition-all duration-300 group-hover:w-1/2" />
            </Link>
          ))}
        </nav>

        {/* Shop Button */}
        <Link
          href="/collection"
          className="group hidden shrink-0 items-center gap-2 rounded-full border border-[#d5c187]/50 bg-gradient-to-r from-[#cbb77c] to-[#dfce9b] px-5 py-3 text-[12px] font-bold text-[#17241b] shadow-[0_4px_18px_rgba(203,183,124,0.08)] transition duration-300 hover:-translate-y-0.5 hover:border-[#f0dfad] hover:shadow-[0_8px_28px_rgba(203,183,124,0.22)] xl:flex"
        >
          Shop Collection
          <ArrowUpRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>

        {/* Mobile Shop + Menu */}
        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <Link
            href="/collection"
            className="rounded-full border border-[#cbb77c]/40 bg-[#cbb77c]/10 px-3.5 py-2.5 text-xs font-semibold text-[#e3d4a7] transition duration-300 hover:bg-[#cbb77c] hover:text-[#17241b] sm:px-4"
          >
            Shop Now
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-[#e3d4a7] transition duration-300 hover:border-[#cbb77c]/40 hover:bg-[#cbb77c]/10"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={21} />
            ) : (
              <Menu size={21} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-in-out lg:hidden ${
          menuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="min-h-0 overflow-hidden">
          <nav className="border-t border-[#cbb77c]/15 bg-[#101812] px-4 pb-5 pt-3 sm:px-7">
            <p className="mb-3 px-3 text-[9px] font-semibold tracking-[0.28em] text-[#9ca995]">
              EXPLORE PURE HERBAL OIL
            </p>

            <div className="space-y-1">
              {links.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  tabIndex={menuOpen ? 0 : -1}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-center justify-between rounded-xl border border-transparent px-4 py-3.5 text-sm font-medium text-[#d0d5c9] transition duration-300 hover:border-[#cbb77c]/15 hover:bg-[#223529]/70 hover:text-[#e5d29b]"
                  style={{
                    transitionDelay: menuOpen
                      ? `${index * 35}ms`
                      : "0ms",
                  }}
                >
                  {link.name}

                  <ArrowUpRight
                    size={16}
                    className="text-[#8d9c87] transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#cbb77c]"
                  />
                </Link>
              ))}
            </div>

            <div className="mt-4 rounded-xl border border-[#cbb77c]/15 bg-gradient-to-r from-[#223529]/80 to-[#17231a] px-4 py-3">
              <p className="font-serif text-sm italic text-[#dfce9b]">
                Rooted in Nature. Made with Care.
              </p>
              <p className="mt-1 text-[10px] tracking-wide text-[#aab5a5]">
                Discover your herbal care essentials.
              </p>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
