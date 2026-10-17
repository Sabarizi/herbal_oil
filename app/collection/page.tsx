
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: "pain-relief-oil",
    name: "Herbal Pain Relief Oil",
    category: "BODY CARE",
    description:
      "A traditional herbal massage oil, thoughtfully prepared for your everyday body-care routine.",
    price: "Rs. 500",
    image: "/pain.png",
    number: "01",
  },
  {
    id: "hair-growth-oil",
    name: "Herbal Hair Oil",
    category: "HAIR CARE",
    description:
      "A nature-inspired hair-care oil made with herbal ingredients for your regular hair-care ritual.",
    price: "Rs. 1100",
    image: "/hair.png",
    number: "02",
  },
  {
    id: "itch-care-oil",
    name: "Herbal Itch Care Oil",
    category: "HERBAL CARE",
    description:
      "A herbal oil preparation designed to be part of a thoughtful personal-care routine.",
    price: "Rs. 500",
    image: "/itch.png",
    number: "03",
  },
  
];

export default function CollectionPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#101812] text-[#f6f1e6]">
      {/* Collection Hero */}
    

      {/* Products */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="mb-9 flex items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.28em] text-[#bca66d] sm:text-xs">
              MADE WITH CARE
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
              Discover Our Oils
            </h2>
          </div>
          <p className="pb-1 text-xs text-[#aab5a5]">
            {products.length} essentials
          </p>
        </div>

        <div className="mb-8 h-px bg-gradient-to-r from-[#bba66e]/50 via-white/10 to-transparent" />

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-[1.6rem] border border-white/[0.09] bg-[#18231b] transition duration-500 hover:-translate-y-2 hover:border-[#cbb77c]/40 hover:shadow-[0_24px_65px_rgba(0,0,0,0.28)]"
            >
              {/* Product Image */}
              <Link
                href={`/product/${product.id}`}
                aria-label={`View ${product.name}`}
                className="relative block overflow-hidden bg-[radial-gradient(ellipse_at_center,#314b35_0%,#223728_45%,#17241b_100%)]"
              >
                <div className="absolute inset-0 opacity-40">
                  <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d4c18c]/15" />
                  <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d4c18c]/10" />
                </div>

                <div className="absolute left-5 top-5 z-10 flex items-center gap-2 rounded-full border border-[#d6c38c]/25 bg-[#111a13]/80 px-3 py-2 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#d5c18a]" />
                  <span className="text-[9px] font-semibold tracking-[0.18em] text-[#e1d5ad]">
                    {product.category}
                  </span>
                </div>

                <span className="absolute right-5 top-5 z-10 font-serif text-sm text-white/35">
                  {product.number}
                </span>

                <div className="relative mx-auto h-72 w-full p-5 transition duration-700 group-hover:scale-[1.06] sm:h-80">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                    className="object-contain p-5 drop-shadow-[0_18px_22px_rgba(0,0,0,0.35)]"
                  />
                </div>

                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#18231b]/70 to-transparent" />
              </Link>

              {/* Product Details */}
              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[9px] font-medium tracking-[0.2em] text-[#bca66d]">
                      PURE HERBAL OIL
                    </p>
                    <Link
                      href={`/product/${product.id}`}
                      className="mt-2 block font-serif text-xl leading-snug text-[#f4efdf] transition hover:text-[#d6c38c] sm:text-2xl"
                    >
                      {product.name}
                    </Link>
                  </div>

                  <span className="mt-1 shrink-0 rounded-full border border-white/10 px-2.5 py-1.5 text-[10px] text-[#c7d0c1]">
                    100 ml
                  </span>
                </div>

                <p className="mt-4 min-h-[72px] text-sm leading-6 text-[#aeb9ab]">
                  {product.description}
                </p>

                <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-5">
                  <div>
                    <p className="text-[10px] tracking-widest text-[#aab5a5]">
                      PRICE
                    </p>
                    <p className="mt-1 font-serif text-2xl text-[#ddc991]">
                      {product.price}
                    </p>
                  </div>

                  <Link
                    href={`/product/${product.id}`}
                    className="inline-flex items-center gap-2 rounded-full border border-[#bda66c]/50 bg-[#bda66c]/[0.08] px-4 py-3 text-xs font-semibold text-[#e3d4a7] transition duration-300 hover:border-[#d8c58e] hover:bg-[#bda66c] hover:text-[#17241b] sm:px-5"
                  >
                    Explore Oil
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Minimal Brand Signature */}
        <div className="mt-16 flex flex-col items-center justify-center gap-4 border-t border-white/10 pt-10 text-center">
          <span className="text-2xl text-[#cbb77c]">✳</span>
          <p className="font-serif text-xl italic text-[#e4d8b7]">
            Rooted in Nature. Made with Care.
          </p>
          <p className="text-[9px] tracking-[0.3em] text-[#899687]">
            PURE HERBAL OIL
          </p>
        </div>
      </section>
    </main>
  );
}
