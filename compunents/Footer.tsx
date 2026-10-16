
import Link from "next/link";

const socialLinks = [
  {
    name: "Facebook",
    icon: "f",
    url: "https://www.facebook.com/saba.rizwan.302480/",
  },
  {
    name: "Instagram",
    icon: "◎",
    url: "https://www.instagram.com/innocentvirgo9/",
  },
  {
    name: "WhatsApp",
    icon: "◉",
    url: "https://wa.me/923352148154",
  },
  {
    name: "TikTok",
    icon: "♪",
    url: "https://www.tiktok.com/",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#c6ad6b]/20 bg-[#101812] text-[#eee9dc]">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h2 className="font-serif text-2xl tracking-wide text-[#d6c18a]">
              Pure Herbal Oil
            </h2>
            <p className="mt-3 max-w-xs text-sm leading-6 text-[#b9c0b2]">
              Inspired by nature, prepared with care.
              Discover our traditional herbal oil collection.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] text-[#d6c18a]">
              QUICK LINKS
            </h3>
            <div className="mt-4 flex flex-col items-start gap-3 text-sm text-[#c7cbbf]">
              <Link className="transition hover:text-[#d6c18a]" href="/">
                Home
              </Link>
              <Link className="transition hover:text-[#d6c18a]" href="/about">
                About Us
              </Link>
              <Link className="transition hover:text-[#d6c18a]" href="/collection">
                Our Collection
              </Link>
              <Link className="transition hover:text-[#d6c18a]" href="/contact">
                Contact Us
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] text-[#d6c18a]">
              CONNECT WITH US
            </h3>
            <p className="mt-4 text-sm text-[#b9c0b2]">
              Follow our herbal journey.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c6ad6b]/30 bg-white/5 text-lg font-semibold text-[#d6c18a] transition duration-300 hover:-translate-y-1 hover:border-[#d6c18a] hover:bg-[#d6c18a] hover:text-[#101812]"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <a
              href="https://wa.me/923352148154"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex rounded-full border border-[#d6c18a]/50 px-5 py-2 text-sm text-[#d6c18a] transition hover:bg-[#d6c18a] hover:text-[#101812]"
            >
              Chat on WhatsApp ↗
            </a>
          </div>
        </div>

        <div className="mt-9 border-t border-white/10 pt-5 text-center text-xs leading-6 text-[#939b8d] sm:flex sm:items-center sm:justify-between sm:text-left">
          <p>© 2026 Pure Herbal Oil. All rights reserved.</p>
          <p>Rooted in Nature · Made with Care 🌿</p>
        </div>
      </div>
    </footer>
  );
}
