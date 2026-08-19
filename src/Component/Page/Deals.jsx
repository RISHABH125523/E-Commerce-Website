import React from "react";

const deals = [
  {
    id: 1,
    title: "50% OFF",
    description: "Get 50% off on your first order.",
    code: "WELCOME50",
    color: "bg-blue-600",
  },
  {
    id: 2,
    title: "Buy 1 Get 1",
    description: "Buy one item and get another absolutely free.",
    code: "BOGO2026",
    color: "bg-purple-600",
  },
  {
    id: 3,
    title: "Free Delivery",
    description: "Enjoy free delivery on orders above ₹499.",
    code: "FREEDEL",
    color: "bg-emerald-600",
  },
];

function DealCard({ title, description, code, color }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className={`${color} p-6 text-white`}>
        <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
          Limited Offer
        </span>

        <h2 className="mt-4 text-3xl font-bold">{title}</h2>
      </div>

      <div className="p-6">
        <p className="min-h-[48px] text-sm leading-6 text-gray-600">
          {description}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3 rounded-xl bg-gray-50 p-3">
          <div>
            <p className="text-xs text-gray-500">Coupon Code</p>
            <p className="font-bold tracking-wider text-gray-900">{code}</p>
          </div>

          <button
            type="button"
            className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-700"
          >
            Copy
          </button>
        </div>
      </div>
    </article>
  );
}

function Deals() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Exclusive Offers
          </span>

          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Today&apos;s Best Deals
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Save more with our latest offers, discounts and exclusive coupon
            codes.
          </p>
        </div>

        {/* Deals Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {deals.map((deal) => (
            <DealCard key={deal.id} {...deal} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Deals;