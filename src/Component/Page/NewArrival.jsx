import React from "react";

const products = [
  {
    id: 1,
    name: "Premium Oversized T-Shirt",
    category: "Men's Fashion",
    price: 1299,
    oldPrice: 1799,
    rating: 4.8,
    reviews: 124,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Classic Leather Handbag",
    category: "Accessories",
    price: 2499,
    oldPrice: 3299,
    rating: 4.9,
    reviews: 89,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Minimal White Sneakers",
    category: "Footwear",
    price: 1999,
    oldPrice: 2799,
    rating: 4.7,
    reviews: 216,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Modern Classic Watch",
    category: "Watches",
    price: 3499,
    oldPrice: 4499,
    rating: 4.8,
    reviews: 157,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
  },
];

function ProductCard({ product }) {
  const discount = Math.round(
    ((product.oldPrice - product.price) / product.oldPrice) * 100
  );

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Product Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        {/* New Badge */}
        <span className="absolute left-4 top-4 rounded-full bg-black px-3 py-1.5 text-xs font-semibold text-white">
          NEW
        </span>

        {/* Discount */}
        <span className="absolute right-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-red-600 shadow-sm">
          -{discount}%
        </span>

        {/* Wishlist */}
        <button
          type="button"
          aria-label={`Add ${product.name} to wishlist`}
          className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl shadow-md transition hover:bg-black hover:text-white"
        >
          ♡
        </button>
      </div>

      {/* Product Details */}
      <div className="p-5">
        <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
          {product.category}
        </p>

        <h2 className="mt-2 line-clamp-1 text-lg font-semibold text-gray-900">
          {product.name}
        </h2>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-2 text-sm">
          <span className="text-yellow-500">★</span>
          <span className="font-semibold text-gray-800">
            {product.rating}
          </span>
          <span className="text-gray-400">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="mt-4 flex items-center gap-3">
          <span className="text-xl font-bold text-gray-900">
            ₹{product.price.toLocaleString("en-IN")}
          </span>

          <span className="text-sm text-gray-400 line-through">
            ₹{product.oldPrice.toLocaleString("en-IN")}
          </span>
        </div>

        {/* Add to Cart */}
        <button
          type="button"
          className="mt-5 w-full rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-gray-800 active:scale-[0.98]"
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
}

function NewArrival() {
  return (
    <main className="min-h-screen bg-[#fafafa] px-4 py-14 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Just Dropped
            </p>

            <h1 className="mt-2 text-4xl font-black tracking-tight text-gray-950 sm:text-5xl">
              New Arrivals
            </h1>

            <p className="mt-3 max-w-xl text-gray-500">
              Discover the latest styles, fresh collections and products
              carefully selected for you.
            </p>
          </div>

          <button
            type="button"
            className="w-fit rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:border-black hover:bg-black hover:text-white"
          >
            View All Products →
          </button>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gray-200" />

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default NewArrival;