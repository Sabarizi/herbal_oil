
import Link from "next/link";

const products = [
  {
    name: "Herbal Hair Oil",
    category: "HAIR CARE",
    description:
      "A traditional herbal oil for your regular hair-care routine.",
    oldPrice: "Rs. 1,000",
    price: "Rs. 700",
    image: "/ba.jpeg",
    icon: "🌿",
    href: "/products/hair-growth-oil",
  },
  {
    name: "Herbal Pain Oil",
    category: "BODY CARE",
    description:
      "A traditional herbal oil for massage and everyday body care.",
    oldPrice: "",
    price: "Rs. 350",
    image: "/products/pain-oil.png",
    icon: "🍃",
    href: "/products/pain-oil",
  },
  {
    name: "Herbal Skin Oil",
    category: "HERBAL CARE",
    description:
      "A herbal oil for your personal skin-care routine.",
    oldPrice: "",
    price: "Rs. 350",
    image: "/products/itch-oil.png",
    icon: "🌱",
    href: "/products/itch-oil",
  },
];

const ingredients = [
  { icon: "🌿", name: "Neem", text: "A traditional herbal ingredient" },
  { icon: "🪴", name: "Aloe Vera", text: "Known for its skin-care uses" },
  { icon: "🌾", name: "Methi", text: "A traditional hair-care ingredient" },
  { icon: "🫚", name: "Ginger", text: "Part of our herbal ingredients" },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#faf9f3] text-[#253c2c]">
      {/* HERO */}
      <section className="relative isolate min-h-[650px] overflow-hidden bg-[#173d2b] text-white">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_75%_35%,#64815b_0%,#284d35_38%,#102b20_78%)]" />

        <div className="absolute -right-20 top-10 -z-10 h-80 w-80 rounded-full border border-white/10 md:h-[500px] md:w-[500px]" />
        <div className="absolute -right-10 top-20 -z-10 h-64 w-64 rounded-full border border-[#d5bb79]/30 md:h-[400px] md:w-[400px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 md:min-h-[650px] md:grid-cols-2 md:py-20 lg:px-12">
          <div className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d9c58c]/40 bg-white/5 px-4 py-2 text-xs tracking-[0.18em] text-[#e8d7a6]">
              <span>✦</span>
              NATURE INSPIRED · HERBAL CARE
            </div>

            <h1 className="max-w-xl text-5xl font-medium leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
              Nature&apos;s
              <span className="mt-2 block font-serif italic text-[#e0c78a]">
                Goodness,
              </span>
              Made for You.
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-white/75 sm:text-lg">
              Discover the beauty of traditional herbal care with Pure
              Herbal Oil. Made with mustard oil and natural herbs,
              inspired by the goodness of nature.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/collection"
                className="group inline-flex items-center gap-3 rounded-full bg-[#e2c987] px-7 py-4 font-semibold text-[#233b2b] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#f0dda8]"
              >
                Explore Our Oils
                <span className="transition group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/35 px-7 py-4 font-medium transition hover:bg-white/10"
              >
                Our Story
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70">
              <span>✦ Herbal ingredients</span>
              <span>✦ Inspired by nature</span>
              <span>✦ Made with care</span>
            </div>
          </div>

          {/* HERO VIDEO: add your video to public/videos/herbal-oil.mp4 */}
          <div className="relative mx-auto w-full max-w-[510px]">
            <div className="absolute -inset-3 rounded-[2rem] border border-[#d7c187]/30" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.7rem] border border-white/15 bg-[#294b35] shadow-2xl">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                // poster="/ba.jpeg"
              >
                <source
                  src="/pain.mp4"
                  type="video/mp4"
                />
              </video>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#10271c]/90 via-transparent to-black/10" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="text-xs tracking-[0.25em] text-[#e5d09a]">
                  PURE HERBAL OIL
                </p>
                <h2 className="mt-2 font-serif text-3xl sm:text-4xl">
                  Rooted in Nature.
                </h2>
                <p className="mt-2 text-sm text-white/80">
                  Traditional herbs. Thoughtful care.
                </p>
              </div>

              <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs tracking-widest text-white backdrop-blur-sm">
                NATURAL CARE
              </div>
            </div>

            <div className="absolute -bottom-5 -left-3 rounded-2xl border border-[#e3d7b7] bg-[#faf6e9] px-5 py-4 text-[#284531] shadow-xl sm:-left-8">
              <p className="font-serif text-2xl">Pure & Simple</p>
              <p className="mt-1 text-xs tracking-wider text-[#71816a]">
                INSPIRED BY NATURE
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND STRIP */}
      <section className="border-b border-[#e8e5d8] bg-[#f0eee3]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-5 py-7 text-center sm:grid-cols-3 sm:px-8">
          {[
            ["🌱", "Nature-Inspired Ingredients"],
            ["🫒", "Traditional Mustard Oil"],
            ["💚", "Care in Every Bottle"],
          ].map(([icon, text]) => (
            <div key={text} className="flex items-center justify-center gap-3">
              <span className="text-2xl">{icon}</span>
              <span className="text-sm font-medium text-[#405a42]">
                {text}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 sm:px-8 md:grid-cols-2 md:py-28 lg:px-12">
        <div>
          <p className="text-xs font-semibold tracking-[0.3em] text-[#8d7844]">
            THE PURE HERBAL DIFFERENCE
          </p>

          <h2 className="mt-5 max-w-lg font-serif text-4xl leading-tight text-[#294531] sm:text-5xl">
            A little closer to nature, every day.
          </h2>

          <p className="mt-6 max-w-xl leading-8 text-[#687568]">
            Our journey began with a love for traditional herbal
            ingredients. Since 2016, we have been bringing together
            natural herbs and mustard oil to create products inspired
            by time-honoured care rituals.
          </p>

          <p className="mt-4 max-w-xl leading-8 text-[#687568]">
            We believe in keeping our story simple, celebrating
            familiar ingredients and making herbal care part of
            your everyday routine.
          </p>

          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 border-b border-[#7b8b66] pb-2 font-semibold text-[#35543a] transition hover:text-[#8b7440]"
          >
            Discover Our Story <span>→</span>
          </Link>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
  <div className="absolute -left-3 -top-3 h-full w-full rounded-[2rem] border border-[#cbb77c]/40" />

  <div className="group relative min-h-[350px] overflow-hidden rounded-[2rem] bg-[#18271c] shadow-2xl sm:min-h-[440px]">
    <img
      src="/herbs.png"
      alt="Herbal Ingredients"
      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-[#101812]/95 via-[#101812]/20 to-[#101812]/10" />

    <div className="absolute bottom-0 left-0 p-7 sm:p-9">
      <span className="text-xs font-semibold tracking-[0.3em] text-[#d8c58e]">
        PURE HERBAL OIL
      </span>

      <h2 className="mt-4 font-serif text-3xl leading-tight text-[#faf5e9] sm:text-4xl">
        The Beauty
        <br />
        <span className="italic text-[#d8c58e]">of Botanicals</span>
      </h2>

      <p className="mt-4 max-w-xs text-sm leading-7 text-[#eee9dc]/85">
        Neem, aloe vera, ginger, turmeric and nature-inspired
        ingredients — bringing traditional herbal care closer
        to your home.
      </p>

      <div className="mt-5 h-px w-16 bg-[#cbb77c]" />
    </div>

    <div className="pointer-events-none absolute right-5 top-5 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-[10px] tracking-[0.2em] text-white backdrop-blur-md">
      NATURE INSPIRED
    </div>
  </div>
</div>
      </section>

      
      {/* INGREDIENTS */}
      
<section className="bg-[#2e7658] px-5 py-10">
  <div className="mx-auto max-w-5xl text-center">
    <p className="text-xs tracking-[0.25em] text-[#030303]">
      INSPIRED BY NATURE
    </p>

    <h2 className="mt-2 font-serif text-3xl text-[#020403]">
      Meet Our Herbs
    </h2>

    <div className="mt-6 flex flex-wrap justify-center gap-5 sm:gap-10">
      {[
        { icon: "🌳", name: "Neem" },
        { icon: "🌿", name: "Aloe Vera" },
        { icon: "🫚", name: "Ginger" },
        { icon: "🟡", name: "Turmeric" },
        { icon: "🍃", name: "Herbal Leaves" },
      ].map((herb) => (
        <div key={herb.name} className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#e4ead8] text-2xl">
            {herb.icon}
          </div>
          <p className="mt-2 text-xs font-medium text-[#000000]">
            {herb.name}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>



      
    </main>
  );
}
