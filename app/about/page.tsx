
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-[85vh] bg-[#faf9f3] px-5 py-12 text-[#294531] sm:px-8 sm:py-20 lg:px-12">
      <section className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">

        {/* LEFT: HERBAL VIDEO / IMAGE */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-3 rounded-[2rem] border border-[#c8b77d]/50" />

          <div className="relative aspect-[4/5] max-h-[620px] overflow-hidden rounded-[1.7rem] bg-[#173d2b] shadow-2xl">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              // poster="/herbal.jpeg"
            >
              <source
                src="/neem.mp4"
                type="video/mp4"
              />
            </video>

            <div className="absolute inset-0 bg-gradient-to-t from-[#10271c]/75 via-transparent to-transparent" />

            <div className="absolute bottom-0 p-7 sm:p-9">
              <p className="text-xs tracking-[0.3em] text-[#e2c987]">
                PURE HERBAL OIL
              </p>
              <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">
                Inspired by Nature
              </h2>
              <p className="mt-2 text-sm text-white/80">
                Traditional herbs, prepared with care.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: ABOUT US */}
        <div className="py-4 lg:py-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#d8dfca] bg-[#edf1e5] px-4 py-2 text-xs font-semibold tracking-[0.2em] text-[#496648]">
            <span>✦</span> OUR STORY
          </span>

          <h1 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Nature&apos;s Goodness,
            <span className="mt-2 block italic text-[#a88b43]">
              Crafted with Care.
            </span>
          </h1>

          <div className="my-6 h-1 w-20 rounded-full bg-[#c9b477]" />

          <p className="text-base leading-8 text-[#687568] sm:text-lg sm:leading-9">
            Welcome to Pure Herbal Oil, a journey inspired by the
            beauty of nature and the wisdom of traditional herbal
            care. Since 2016, we have believed in bringing together
            carefully selected natural herbs and mustard oil to
            create products inspired by traditional hair and body
            care rituals. From the familiar goodness of neem, aloe
            vera and other botanicals to the care we put into every
            preparation, our goal is to bring nature-inspired care
            closer to your home. We value the trust of every customer
            and strive to make your experience with Pure Herbal Oil
            special. For us, it is more than oil — it is a passion
            for natural ingredients, tradition and care.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/collection"
              className="inline-flex items-center gap-3 rounded-full bg-[#294531] px-7 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#3f6344]"
            >
              Explore Our Oils <span>→</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#b8c4ad] px-7 py-4 font-semibold text-[#35543a] transition hover:bg-[#edf1e5]"
            >
              Contact Us
            </Link>
          </div>

          <p className="mt-8 font-serif text-lg italic text-[#8d7844]">
            “Rooted in Nature. Made with Care.”
          </p>
        </div>
      </section>
    </main>
  );
}
