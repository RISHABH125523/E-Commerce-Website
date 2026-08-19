import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShoppingBag,
  Truck,
  ShieldCheck,
  Headphones,
  Star,
  Heart,
} from "lucide-react";

function Home() {
  const categories = [
    {
      name: "Fashion",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Electronics",
      image:
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Beauty",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Home & Living",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const products = [
    {
      name: "Premium Wireless Headphones",
      price: "$89.99",
      oldPrice: "$129.99",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80",
      tag: "Best Seller",
    },
    {
      name: "Minimal Leather Backpack",
      price: "$64.99",
      oldPrice: "$89.99",
      rating: "4.7",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
      tag: "New",
    },
    {
      name: "Classic Sneakers",
      price: "$74.99",
      oldPrice: "$109.99",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
      tag: "Popular",
    },
    {
      name: "Smart Watch Pro",
      price: "$119.99",
      oldPrice: "$159.99",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80",
      tag: "Trending",
    },
  ];

  return (
    <main className="bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-6 md:grid-cols-2 md:py-24 lg:px-8">

          {/* Hero Content */}
          <div className="relative z-10">
            <span className="mb-5 inline-flex rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
              ✨ New Collection 2026
            </span>

            <h1 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Shop smarter.
              <span className="block text-indigo-600">
                Live better.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-gray-600 sm:text-lg">
              Discover premium products, exclusive deals and everyday
              essentials — all carefully selected for your lifestyle.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700 hover:shadow-xl"
              >
                Shop Now
                <ArrowRight size={19} />
              </Link>

              <Link
                to="/categories"
                className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-7 py-3.5 font-semibold text-gray-700 transition hover:border-indigo-600 hover:text-indigo-600"
              >
                Explore Categories
              </Link>
            </div>

            {/* Trust Stats */}
            <div className="mt-10 flex flex-wrap gap-7">
              <div>
                <p className="text-2xl font-bold">50K+</p>
                <p className="text-sm text-gray-500">Happy Customers</p>
              </div>

              <div>
                <p className="text-2xl font-bold">4.9/5</p>
                <p className="text-sm text-gray-500">Customer Rating</p>
              </div>

              <div>
                <p className="text-2xl font-bold">10K+</p>
                <p className="text-sm text-gray-500">Products</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full bg-indigo-300/30 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-52 w-52 rounded-full bg-purple-300/30 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85"
                alt="ShopSphere collection"
                className="h-[420px] w-full object-cover sm:h-[520px]"
              />

              {/* Floating Offer */}
              <div className="absolute bottom-5 left-5 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur">
                <p className="text-xs font-medium text-gray-500">
                  Limited Time Offer
                </p>
                <p className="mt-1 text-xl font-extrabold text-indigo-600">
                  Up to 40% OFF
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-10 sm:px-6 md:grid-cols-4 lg:px-8">

          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600">
              <Truck size={22} />
            </div>
            <div>
              <h3 className="font-semibold">Free Shipping</h3>
              <p className="text-xs text-gray-500">On orders $50+</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-green-50 p-3 text-green-600">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h3 className="font-semibold">Secure Payment</h3>
              <p className="text-xs text-gray-500">100% Protected</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-orange-50 p-3 text-orange-600">
              <ShoppingBag size={22} />
            </div>
            <div>
              <h3 className="font-semibold">Easy Returns</h3>
              <p className="text-xs text-gray-500">30 Day Returns</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-purple-50 p-3 text-purple-600">
              <Headphones size={22} />
            </div>
            <div>
              <h3 className="font-semibold">24/7 Support</h3>
              <p className="text-xs text-gray-500">We're Here To Help</p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">

        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
              Shop by category
            </p>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
              Find what you love
            </h2>
          </div>

          <Link
            to="/categories"
            className="hidden items-center gap-2 font-semibold text-indigo-600 sm:flex"
          >
            View All
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              to="/categories"
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src={category.image}
                alt={category.name}
                className="h-48 w-full object-cover transition duration-500 group-hover:scale-110 sm:h-60"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div className="absolute bottom-4 left-4">
                <h3 className="text-lg font-bold text-white">
                  {category.name}
                </h3>
                <p className="mt-1 text-xs text-white/80">
                  Explore Collection →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
                Our collection
              </p>
              <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
                Featured Products
              </h2>
            </div>

            <Link
              to="/shop"
              className="hidden items-center gap-2 font-semibold text-indigo-600 sm:flex"
            >
              Shop All
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
            {products.map((product) => (
              <div
                key={product.name}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-64"
                  />

                  <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-bold text-indigo-600 shadow">
                    {product.tag}
                  </span>

                  <button className="absolute right-3 top-3 rounded-full bg-white p-2 text-gray-600 shadow transition hover:text-red-500">
                    <Heart size={18} />
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <div className="mb-2 flex items-center gap-1">
                    <Star
                      size={14}
                      fill="currentColor"
                      className="text-yellow-400"
                    />
                    <span className="text-xs font-medium text-gray-500">
                      {product.rating}
                    </span>
                  </div>

                  <h3 className="line-clamp-2 min-h-12 text-sm font-bold text-gray-800 sm:text-base">
                    {product.name}
                  </h3>

                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-lg font-extrabold text-indigo-600">
                      {product.price}
                    </span>

                    <span className="text-xs text-gray-400 line-through">
                      {product.oldPrice}
                    </span>
                  </div>

                  <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-600">
                    <ShoppingBag size={17} />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROMO BANNER ================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-indigo-600 px-6 py-12 sm:px-10 lg:px-16">

          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10" />
          <div className="absolute -bottom-32 right-32 h-80 w-80 rounded-full bg-purple-400/20" />

          <div className="relative z-10 max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-widest text-indigo-200">
              Weekend Special
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Big deals.
              <br />
              Bigger savings.
            </h2>

            <p className="mt-4 max-w-lg text-indigo-100">
              Get exclusive discounts on selected products. Limited stock,
              limited time — don't miss out.
            </p>

            <Link
              to="/deals"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-indigo-600 transition hover:bg-gray-100"
            >
              Explore Deals
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className="bg-gray-950 px-5 py-16 text-white">
        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Stay in the loop
          </span>

          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Get exclusive offers
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Subscribe to our newsletter and be the first to know about new
            arrivals, special offers and exciting deals.
          </p>

          <form className="mx-auto mt-7 flex max-w-lg flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 rounded-full border border-gray-700 bg-gray-900 px-5 py-3.5 text-sm outline-none placeholder:text-gray-500 focus:border-indigo-500"
            />

            <button
              type="submit"
              className="rounded-full bg-indigo-600 px-7 py-3.5 font-semibold transition hover:bg-indigo-700"
            >
              Subscribe
            </button>
          </form>

        </div>
      </section>

    </main>
  );
}

export default Home;