
"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

const products: Record<
  string,
  {
    name: string;
    category: string;
    description: string;
    benefits: string[];
    image: string;
  }
> = {
  "pain-relief-oil": {
    name: "Herbal Pain Relief Oil",
    category: "BODY CARE",
    description:
      "A traditional herbal massage oil prepared with natural herbs and mustard oil for your everyday body-care routine.",
    benefits: [
      "Made with herbal ingredients and mustard oil",
      "Suitable for massage of the back, shoulders and legs",
      "For external use only",
      "Patch test before first use",
    ],
    image: "/pain.png",
  },

  "hair-growth-oil": {
    name: "Herbal Hair Oil",
    category: "HAIR CARE",
    description:
      "A traditional herbal oil made with natural herbs and mustard oil for your regular hair-care routine.",
    benefits: [
      "Made with herbal ingredients",
      "For regular hair and scalp care",
      "Massage gently into the scalp",
      "Patch test before first use",
    ],
    image: "/hair.png",
  },

  "itch-care-oil": {
    name: "Herbal Itch Care Oil",
    category: "HERBAL CARE",
    description:
      "A herbal oil product for personal care. Check its ingredients and suitability before use, especially on irritated skin.",
    benefits: [
      "Prepared with herbal ingredients",
      "For external use only",
      "Check ingredients before use",
      "Do not apply to open wounds",
    ],
    image: "/itch.png",
  },
};

const sizes = [
  { ml: 50, price: 350 },
  { ml: 100, price: 500 },
  { ml: 150, price: 700 },
];

export default function ProductDetailPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const product = products[slug];

  const [selectedSize, setSelectedSize] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
  });

  if (!product) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#101812] px-5 text-center text-[#f6f1e6]">
        <p className="text-xs tracking-[0.3em] text-[#cbb77c]">
          PURE HERBAL OIL
        </p>
        <h1 className="mt-5 font-serif text-4xl">
          Product Not Found
        </h1>
        <p className="mt-3 text-[#aeb9ab]">
          Sorry, this product could not be found.
        </p>
        <Link
          href="/collection"
          className="mt-7 rounded-full border border-[#cbb77c]/50 px-6 py-3 text-sm text-[#e3d4a7] transition hover:bg-[#cbb77c] hover:text-[#17241b]"
        >
          ← Back to Collection
        </Link>
      </main>
    );
  }

  const size = sizes[selectedSize];
  const total = size.price * quantity;

  const sizeImage = product.image.replace(
    ".png",
    `-${size.ml}.png`
  );

  function submitOrder(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const whatsappNumber = "923352148154";

    const message = [
      "Assalam-o-Alaikum! 🌿",
      "I would like to place an order from Pure Herbal Oil.",
      "",
      "CUSTOMER DETAILS",
      `Name: ${customer.name.trim()}`,
      `Phone: ${customer.phone.trim()}`,
      `Address: ${customer.address.trim()}`,
      "",
      "ORDER DETAILS",
      `Product: ${product.name}`,
      `Size: ${size.ml} ml`,
      `Quantity: ${quantity}`,
      `Unit Price: Rs. ${size.price}`,
      `Total: Rs. ${total}`,
    ].join("\n");

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#101812] text-[#f6f1e6]">
      {/* Decorative Hero Background */}
      <section className="relative border-b border-white/[0.07] bg-[radial-gradient(ellipse_at_top_left,#294532_0%,#17271c_48%,#101812_100%)]">
        <div className="pointer-events-none absolute -left-28 top-16 h-72 w-72 rounded-full border border-[#d1bd83]/10" />
        <div className="pointer-events-none absolute -right-20 top-20 h-80 w-80 rounded-full bg-[#b8a36a]/[0.04] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-8 sm:px-8 sm:pb-16">
          {/* Breadcrumb */}
          <nav className="mb-9 flex flex-wrap items-center gap-2 text-xs text-[#aeb9a9] sm:text-sm">
            <Link href="/" className="transition hover:text-[#e3d3a5]">
              Home
            </Link>
            <span className="text-[#bda66c]">/</span>
            <Link
              href="/collection"
              className="transition hover:text-[#e3d3a5]"
            >
              Collection
            </Link>
            <span className="text-[#bda66c]">/</span>
            <span className="text-[#e3d3a5]">
              {product.name}
            </span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Product Image */}
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] border border-[#cbb77c]/20" />

              <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-[1.6rem] bg-[radial-gradient(ellipse_at_center,#354f38_0%,#24392a_48%,#18271c_100%)] sm:min-h-[520px]">
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d4c18c]/15 sm:h-96 sm:w-96" />
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d4c18c]/10 sm:h-72 sm:w-72" />

                <span className="absolute left-5 top-5 z-10 rounded-full border border-[#d6c38c]/25 bg-[#101812]/75 px-4 py-2 text-[10px] font-semibold tracking-[0.2em] text-[#e3d4a7] backdrop-blur-md">
                  {product.category}
                </span>

                <span className="absolute right-5 top-5 z-10 text-xs tracking-[0.2em] text-white/40">
                  PURE HERBAL OIL
                </span>

                <img
                  key={size.ml}
                  src={sizeImage}
                  alt={`${product.name} ${size.ml} ml`}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = product.image;
                  }}
                  className="relative z-[1] h-[320px] w-full object-contain p-5 drop-shadow-[0_22px_28px_rgba(0,0,0,0.4)] transition duration-500 hover:scale-[1.04] sm:h-[450px]"
                />

                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#17241b]/60 to-transparent" />
              </div>

              <p className="mt-5 text-center font-serif text-sm italic text-[#c9b77e]">
                Rooted in Nature. Made with Care.
              </p>
            </div>

            {/* Product Details */}
            <div className="relative py-3 lg:py-8">
              <div className="flex items-center gap-3">
                <span className="h-px w-9 bg-[#cbb77c]" />
                <p className="text-xs font-semibold tracking-[0.28em] text-[#d2bd80]">
                  {product.category}
                </p>
              </div>

              <h1 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                {product.name}
              </h1>

              <div className="mt-6 flex flex-wrap items-baseline gap-3">
                <span className="font-serif text-4xl text-[#ddc991]">
                  Rs. {size.price}
                </span>
                <span className="text-sm text-[#aab5a5]">
                  / {size.ml} ml bottle
                </span>
              </div>

              <p className="mt-6 max-w-xl text-sm leading-8 text-[#bdc7b8] sm:text-base">
                {product.description}
              </p>

              <div className="my-8 h-px bg-gradient-to-r from-[#bba66e]/40 via-white/10 to-transparent" />

              <h2 className="font-serif text-2xl text-[#f0e8d6]">
                Product Details
              </h2>

              <ul className="mt-5 space-y-4">
                {product.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 text-sm leading-6 text-[#c0cbbd]"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#cbb77c]/40 text-xs text-[#d9c58f]">
                      ✓
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Bottle Size */}
              <div className="mt-9">
                <p className="mb-4 text-sm font-semibold text-[#eee7d8]">
                  Select Bottle Size
                </p>

                <div className="grid grid-cols-3 gap-3">
                  {sizes.map((item, index) => (
                    <button
                      key={item.ml}
                      type="button"
                      onClick={() => setSelectedSize(index)}
                      aria-pressed={selectedSize === index}
                      className={`rounded-xl border px-2 py-4 transition duration-300 sm:px-4 ${
                        selectedSize === index
                          ? "border-[#cbb77c] bg-[#bda66c]/15 text-[#e8d7a5] shadow-[0_0_20px_rgba(203,183,124,0.06)]"
                          : "border-white/10 bg-[#18231b] text-[#c0cbbd] hover:border-[#cbb77c]/40"
                      }`}
                    >
                      <span className="block text-sm font-bold">
                        {item.ml} ml
                      </span>
                      <span className="mt-1 block text-xs">
                        Rs. {item.price}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity and Total */}
              <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="mb-3 text-sm font-semibold text-[#eee7d8]">
                    Quantity
                  </p>

                  <div className="flex items-center gap-5 rounded-xl border border-white/10 bg-[#18231b] px-4 py-2.5">
                    <button
                      type="button"
                      onClick={() =>
                        setQuantity((q) => Math.max(1, q - 1))
                      }
                      aria-label="Decrease quantity"
                      className="px-1 text-xl text-[#d6c38c] transition hover:text-white"
                    >
                      −
                    </button>

                    <span className="min-w-5 text-center font-semibold">
                      {quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        setQuantity((q) => Math.min(99, q + 1))
                      }
                      aria-label="Increase quantity"
                      className="px-1 text-xl text-[#d6c38c] transition hover:text-white"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-xs tracking-widest text-[#aab5a5]">
                    ORDER TOTAL
                  </p>
                  <p className="mt-2 font-serif text-2xl text-[#ddc991]">
                    Rs. {total}
                  </p>
                </div>
              </div>

              {/* Buy Now */}
              <button
                type="button"
                onClick={() => setShowOrderForm(true)}
                className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-[#cbb77c] px-6 py-4 font-bold text-[#17241b] transition duration-300 hover:-translate-y-0.5 hover:bg-[#dfce9b] hover:shadow-[0_12px_30px_rgba(203,183,124,0.12)]"
              >
                Buy Now
                <span>→</span>
              </button>

              <p className="mt-4 text-center text-xs text-[#9eaa9b]">
                🌿 Thoughtful herbal care · For external use only
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Order Modal */}
      {showOrderForm && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowOrderForm(false);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="order-heading"
            className="my-auto w-full max-w-lg rounded-[1.7rem] border border-[#cbb77c]/25 bg-[#17231a] p-6 text-[#f6f1e6] shadow-2xl sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.25em] text-[#cbb77c]">
                  PURE HERBAL OIL
                </p>
                <h2
                  id="order-heading"
                  className="mt-3 font-serif text-3xl"
                >
                  Complete Your Order
                </h2>
                <p className="mt-2 text-sm leading-6 text-[#b7c2b3]">
                  Enter your details for delivery.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowOrderForm(false)}
                aria-label="Close order form"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-2xl text-[#c9d0c3] transition hover:border-[#cbb77c]/40 hover:text-white"
              >
                ×
              </button>
            </div>

            {/* Order Summary */}
            <div className="mt-6 rounded-2xl border border-[#cbb77c]/15 bg-[#223529] p-4">
              <p className="font-serif text-lg">{product.name}</p>
              <div className="mt-3 flex flex-wrap justify-between gap-2 text-sm text-[#c0cbbd]">
                <span>
                  {size.ml} ml × {quantity}
                </span>
                <span className="font-semibold text-[#ddc991]">
                  Rs. {total}
                </span>
              </div>
            </div>

            <form onSubmit={submitOrder} className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="customer-name"
                  className="mb-2 block text-sm font-medium text-[#e9e3d6]"
                >
                  Full Name *
                </label>
                <input
                  id="customer-name"
                  type="text"
                  autoComplete="name"
                  required
                  minLength={2}
                  maxLength={100}
                  value={customer.name}
                  onChange={(e) =>
                    setCustomer({ ...customer, name: e.target.value })
                  }
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-white/10 bg-[#101812] px-4 py-3 text-white outline-none transition placeholder:text-[#748172] focus:border-[#cbb77c]/70 focus:ring-2 focus:ring-[#cbb77c]/10"
                />
              </div>

              <div>
                <label
                  htmlFor="customer-phone"
                  className="mb-2 block text-sm font-medium text-[#e9e3d6]"
                >
                  Phone Number *
                </label>
                <input
                  id="customer-phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  minLength={7}
                  maxLength={20}
                  value={customer.phone}
                  onChange={(e) =>
                    setCustomer({ ...customer, phone: e.target.value })
                  }
                  placeholder="03XX XXXXXXX"
                  className="w-full rounded-xl border border-white/10 bg-[#101812] px-4 py-3 text-white outline-none transition placeholder:text-[#748172] focus:border-[#cbb77c]/70 focus:ring-2 focus:ring-[#cbb77c]/10"
                />
              </div>

              <div>
                <label
                  htmlFor="customer-address"
                  className="mb-2 block text-sm font-medium text-[#e9e3d6]"
                >
                  Complete Delivery Address *
                </label>
                <textarea
                  id="customer-address"
                  autoComplete="street-address"
                  required
                  minLength={8}
                  maxLength={500}
                  rows={3}
                  value={customer.address}
                  onChange={(e) =>
                    setCustomer({
                      ...customer,
                      address: e.target.value,
                    })
                  }
                  placeholder="House number, street, area and city"
                  className="w-full resize-y rounded-xl border border-white/10 bg-[#101812] px-4 py-3 text-white outline-none transition placeholder:text-[#748172] focus:border-[#cbb77c]/70 focus:ring-2 focus:ring-[#cbb77c]/10"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#cbb77c] px-5 py-4 font-bold text-[#17241b] transition hover:bg-[#dfce9b]"
              >
                Continue to WhatsApp →
              </button>

              <p className="text-center text-xs leading-5 text-[#9eaa9b]">
                Your order will open as a WhatsApp message. Press Send
                in WhatsApp to confirm your order.
              </p>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
