export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#101812] px-5 text-[#f6f1e6]">
      <div className="w-full max-w-lg rounded-3xl border border-[#cbb77c]/30 bg-[#17231a] p-8 text-center shadow-2xl sm:p-12">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#cbb77c]/40 bg-[#cbb77c]/10 text-4xl text-[#ddc991]">
          ✓
        </div>
        <p className="mt-8 text-xs font-semibold tracking-[0.3em] text-[#cbb77c]">
          PURE HERBAL OIL
        </p>
        <h1 className="mt-5 font-serif text-4xl text-[#e3d4a7]">
          Thank You!
        </h1>
        <h2 className="mt-4 text-xl">
          Your Order Details Are Ready
        </h2>
        <p className="mt-5 text-sm leading-8 text-[#bdc7b8]">
          WhatsApp has opened with your order details. Please press the Send button in WhatsApp to submit your order. We will contact you to confirm delivery.
        </p>
        <a
          href="/collection"
          className="mt-9 inline-flex rounded-xl bg-[#cbb77c] px-8 py-4 font-bold text-[#17241b] transition hover:bg-[#dfce9b]"
        >
          Continue Shopping →
        </a>
        <p className="mt-8 font-serif text-sm italic text-[#c9b77e]">
          Rooted in Nature. Made with Care.
        </p>
      </div>
    </main>
  );
}
