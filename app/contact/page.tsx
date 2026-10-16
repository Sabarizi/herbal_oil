"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("Product Inquiry");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const whatsappMessage = `Assalam-o-Alaikum Pure Herbal Oil! 🌿

I want to contact you through your website.

Name: ${name}
My WhatsApp Number: ${phone}
Subject: ${subject}

Message:
${message}

Thank you!`;

    const whatsappURL = `https://wa.me/923352148154?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="min-h-screen bg-[#101a14] px-4 py-14 text-[#f7f2e8] sm:px-8 sm:py-20">
      <section className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="inline-flex rounded-full border border-[#bda66c]/40 bg-[#bda66c]/10 px-5 py-2 text-xs font-semibold tracking-[0.3em] text-[#d9c58f]">
            WE ARE HERE FOR YOU
          </span>

          <h1 className="mt-6 font-serif text-4xl leading-tight sm:text-6xl">
            Let&apos;s Talk
            <span className="block italic text-[#c9b477]">
              Naturally.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#c3cbbf] sm:text-base">
            Have a question about our herbal oils? We would love to
            hear from you. Send us a message and connect with Pure
            Herbal Oil directly on WhatsApp.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-[#17251b] shadow-2xl lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left Panel */}
          <div className="relative flex flex-col justify-between overflow-hidden bg-[#203b2a] p-7 sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute -right-20 -top-16 h-64 w-64 rounded-full border border-[#d8c58e]/15" />
            <div className="pointer-events-none absolute -right-10 -top-6 h-44 w-44 rounded-full border border-[#d8c58e]/20" />

            <div className="relative">
              <p className="text-sm tracking-[0.25em] text-[#d9c58f]">
                PURE HERBAL OIL
              </p>

              <h2 className="mt-7 font-serif text-3xl leading-snug sm:text-4xl">
                A little care,
                <br />
                a natural touch.
              </h2>

              <p className="mt-5 max-w-sm leading-8 text-[#d3ddd0]">
                We believe in the beauty of nature, traditional herbs
                and thoughtful care. Your questions and feedback are
                always welcome.
              </p>
            </div>

            <div className="relative mt-12 rounded-2xl border border-white/10 bg-black/15 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#d6c18a]/15 text-2xl">
                  🌿
                </div>

                <div>
                  <h3 className="font-serif text-xl text-[#f3e6c0]">
                    Let&apos;s Connect
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#d3ddd0]">
                    Share your questions, product inquiries or
                    feedback with us.
                  </p>
                  <p className="mt-3 text-sm font-medium text-[#e5d29b]">
                    WhatsApp: 0335 2148154
                  </p>
                </div>
              </div>
            </div>

            <p className="relative mt-8 font-serif text-sm italic text-[#d9c58f]">
              “Rooted in Nature. Made with Care.”
            </p>
          </div>

          {/* Right Panel: Form */}
          <div className="bg-[#f7f3e9] p-6 text-[#243629] sm:p-10 lg:p-12">
            <h2 className="font-serif text-3xl sm:text-4xl">
              Send Us a Message
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#697365]">
              Fill in the details below. Your message will open in
              WhatsApp, ready for you to send.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold"
                >
                  Your Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded-xl border border-[#d9ddcf] bg-white px-4 py-3.5 text-[#243629] outline-none transition placeholder:text-[#9ba397] focus:border-[#496d4b] focus:ring-2 focus:ring-[#496d4b]/15"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold"
                >
                  Your WhatsApp Number *
                </label>
                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="e.g. 03XX XXXXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full rounded-xl border border-[#d9ddcf] bg-white px-4 py-3.5 text-[#243629] outline-none transition placeholder:text-[#9ba397] focus:border-[#496d4b] focus:ring-2 focus:ring-[#496d4b]/15"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold"
                >
                  What would you like to discuss? *
                </label>
                <select
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full rounded-xl border border-[#d9ddcf] bg-white px-4 py-3.5 text-[#243629] outline-none transition focus:border-[#496d4b] focus:ring-2 focus:ring-[#496d4b]/15"
                >
                  <option>Product Inquiry</option>
                  <option>Hair Growth Oil</option>
                  <option>Pain Relief Oil</option>
                  <option>Skin Care Oil</option>
                  <option>Order & Delivery</option>
                  <option>Feedback</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold"
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Write your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full resize-y rounded-xl border border-[#d9ddcf] bg-white px-4 py-3.5 text-[#243629] outline-none transition placeholder:text-[#9ba397] focus:border-[#496d4b] focus:ring-2 focus:ring-[#496d4b]/15"
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#24462f] px-6 py-4 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#315d3d] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#24462f] focus:ring-offset-2"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.5 0 .15 5.35.15 11.92c0 2.1.55 4.15 1.59 5.96L.05 24l6.27-1.64a11.92 11.92 0 0 0 5.74 1.46h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.19-1.24-6.19-3.47-8.42ZM12.07 21.8a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.72.98.99-3.63-.24-.37a9.84 9.84 0 0 1-1.51-5.27c0-5.45 4.43-9.88 9.89-9.88a9.8 9.8 0 0 1 6.99 2.9 9.8 9.8 0 0 1 2.89 6.99c0 5.45-4.43 9.87-9.89 9.87Zm5.42-7.39c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.74-1.65-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.28.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.08 4.5.71.31 1.27.5 1.71.64.72.23 1.37.2 1.88.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
                </svg>
                Send Message on WhatsApp
                <span className="transition group-hover:translate-x-1">
                  →
                </span>
              </button>

              <p className="text-center text-xs leading-5 text-[#788173]">
                Your message will be prepared in WhatsApp. Please press
                Send there to deliver it to us.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}