import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ArrowRight,
  TrendingUp,
  Sparkles,
  ShoppingBag,
  ChevronRight,
} from "lucide-react";

function Categories() {
  const categories = [
    {
      id: 1,
      name: "Fashion",
      description: "Elevate your everyday style",
      products: 1240,
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1000&q=85",
      color: "from-pink-600/80",
      badge: "Trending",
    },
    {
      id: 2,
      name: "Electronics",
      description: "Smart tech for modern life",
      products: 890,
      image:
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1000&q=85",
      color: "from-blue-700/80",
      badge: "Popular",
    },
    {
      id: 3,
      name: "Beauty",
      description: "Discover your natural glow",
      products: 675,
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1000&q=85",
      color: "from-purple-600/80",
      badge: "New",
    },
    {
      id: 4,
      name: "Home & Living",
      description: "Make your space beautiful",
      products: 980,
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85",
      color: "from-amber-700/80",
      badge: "Featured",
    },
    {
      id: 5,
      name: "Sports",
      description: "Move stronger, live better",
      products: 520,
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=85",
      color: "from-green-700/80",
      badge: "Popular",
    },
    {
      id: 6,
      name: "Shoes",
      description: "Step into something new",
      products: 760,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85",
      color: "from-orange-600/80",
      badge: "Trending",
    },
    {
      id: 7,
      name: "Watches",
      description: "Timeless style, modern design",
      products: 340,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=85",
      color: "from-gray-800/80",
      badge: "Premium",
    },
    {
      id: 8,
      name: "Accessories",
      description: "Complete your perfect look",
      products: 610,
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=85",
      color: "from-rose-700/80",
      badge: "New",
    },
    {
      id: 9,
      name: "Furniture",
      description: "Designed for better living",
      products: 430,
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=85",
      color: "from-stone-700/80",
      badge: "Featured",
    },
    {
      id: 10,
      name: "Gaming",
      description: "Level up your experience",
      products: 295,
      image:
        "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1000&q=85",
      color: "from-indigo-800/80",
      badge: "Trending",
    },
    {
      id: 11,
      name: "Skincare",
      description: "Care that your skin deserves",
      products: 385,
      image:
        "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=1000&q=85",
      color: "from-cyan-700/80",
      badge: "Popular",
    },
    {
      id: 12,
      name: "Outdoor",
      description: "Adventure starts here",
      products: 275,
      image:
        "https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=1000&q=85",
      color: "from-emerald-800/80",
      badge: "New",
    },
  ];

  const [search, setSearch] = useState("");

  const filteredCategories = useMemo(() => {
    return categories.filter(
      (category) =>
        category.name.toLowerCase().includes(search.toLowerCase()) ||
        category.description.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <main className="min-h-screen bg-gray-50">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-gray-950">
        {/* Background decoration */}
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-indigo-600/30 blur-3xl" />
        <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-indigo-200 backdrop-blur">
              <Sparkles size={16} />
              Explore ShopSphere
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Find your world.
              <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Shop your style.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
              Explore carefully curated collections designed around your
              lifestyle. From everyday essentials to premium finds,
              everything starts here.
            </p>
          </div>

          {/* Search */}
          <div className="mt-8 max-w-2xl">
            <div className="flex items-center rounded-2xl border border-white/10 bg-white/10 p-2 backdrop-blur-xl">
              <Search
                size={21}
                className="ml-3 shrink-0 text-gray-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search categories..."
                className="w-full bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 sm:text-base"
              />

              <button className="hidden rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-indigo-500 sm:block">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          QUICK STATS
      ====================================================== */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-gray-100 sm:grid-cols-4 px-5 sm:px-6 lg:px-8">

          <div className="px-4 py-7 text-center sm:px-6">
            <p className="text-2xl font-extrabold text-gray-900">12+</p>
            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
              Categories
            </p>
          </div>

          <div className="px-4 py-7 text-center sm:px-6">
            <p className="text-2xl font-extrabold text-gray-900">8K+</p>
            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
              Products
            </p>
          </div>

          <div className="px-4 py-7 text-center sm:px-6">
            <p className="text-2xl font-extrabold text-gray-900">50K+</p>
            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
              Customers
            </p>
          </div>

          <div className="px-4 py-7 text-center sm:px-6">
            <p className="text-2xl font-extrabold text-gray-900">4.9/5</p>
            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
              Customer Rating
            </p>
          </div>

        </div>
      </section>

      {/* =====================================================
          FEATURED CATEGORY
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">

        <div className="mb-7 flex items-end justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
              Spotlight
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
              Featured collection
            </h2>
          </div>

          <Link
            to="/shop"
            className="hidden items-center gap-2 text-sm font-bold text-indigo-600 sm:flex"
          >
            Shop Collection
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="group relative overflow-hidden rounded-[2rem] bg-gray-900">

          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1800&q=85"
            alt="Featured collection"
            className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[480px]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-xl px-7 sm:px-12 lg:px-16">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white backdrop-blur">
                <TrendingUp size={14} />
                Trending Now
              </span>

              <h3 className="mt-5 text-3xl font-extrabold text-white sm:text-5xl">
                Discover what’s
                <span className="block text-indigo-300">
                  trending this season.
                </span>
              </h3>

              <p className="mt-4 max-w-md text-sm leading-6 text-gray-300 sm:text-base">
                Fresh styles, smart technology and everyday essentials
                selected especially for you.
              </p>

              <Link
                to="/shop"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-gray-900 transition hover:bg-indigo-50"
              >
                Explore Now
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ALL CATEGORIES
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-6 lg:px-8">

        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
            Collections
          </p>

          <div className="mt-2 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Browse categories
              </h2>

              <p className="mt-2 text-sm text-gray-500 sm:text-base">
                Discover products made for every part of your life.
              </p>
            </div>

            <span className="hidden rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-600 sm:block">
              {filteredCategories.length} Collections
            </span>
          </div>
        </div>

        {filteredCategories.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">

            {filteredCategories.map((category) => (
              <Link
                to="/shop"
                key={category.id}
                className="group relative overflow-hidden rounded-2xl bg-gray-900 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Image */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-110 sm:h-72 lg:h-80"
                />

                {/* Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${category.color} via-black/20 to-transparent`}
                />

                {/* Badge */}
                <div className="absolute left-3 top-3">
                  <span className="rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wide text-gray-800 shadow-sm backdrop-blur">
                    {category.badge}
                  </span>
                </div>

                {/* Arrow */}
                <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur transition duration-300 group-hover:opacity-100">
                  <ChevronRight size={19} />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">

                  <h3 className="text-lg font-extrabold text-white sm:text-xl">
                    {category.name}
                  </h3>

                  <p className="mt-1 line-clamp-1 text-xs text-white/75 sm:text-sm">
                    {category.description}
                  </p>

                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs font-medium text-white/70">
                      {category.products.toLocaleString()}+ products
                    </span>

                    <span className="flex items-center gap-1 text-xs font-bold text-white">
                      Shop
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}

          </div>
        ) : (
          <div className="rounded-3xl bg-white px-6 py-20 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
              <Search size={27} className="text-gray-400" />
            </div>

            <h3 className="mt-5 text-xl font-bold text-gray-900">
              No category found
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Try searching for another category.
            </p>

            <button
              onClick={() => setSearch("")}
              className="mt-5 rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-indigo-700"
            >
              View All Categories
            </button>
          </div>
        )}
      </section>

      {/* =====================================================
          SHOP BY LIFESTYLE
      ====================================================== */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
              Made for you
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Shop by lifestyle
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
              Whether you love technology, fashion, fitness or beautiful
              spaces, we've got something for you.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">

            <Link
              to="/shop"
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85"
                alt="Style"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <div className="absolute bottom-5 left-5">
                <p className="text-xs font-bold uppercase tracking-widest text-white/60">
                  Lifestyle
                </p>
                <h3 className="mt-1 text-2xl font-extrabold text-white">
                  Style & Fashion
                </h3>
              </div>
            </Link>

            <Link
              to="/shop"
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=85"
                alt="Technology"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <div className="absolute bottom-5 left-5">
                <p className="text-xs font-bold uppercase tracking-widest text-white/60">
                  Lifestyle
                </p>
                <h3 className="mt-1 text-2xl font-extrabold text-white">
                  Tech & Gaming
                </h3>
              </div>
            </Link>

            <Link
              to="/shop"
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=85"
                alt="Fitness"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <div className="absolute bottom-5 left-5">
                <p className="text-xs font-bold uppercase tracking-widest text-white/60">
                  Lifestyle
                </p>
                <h3 className="mt-1 text-2xl font-extrabold text-white">
                  Fitness & Outdoor
                </h3>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="bg-gray-950">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-14 text-center sm:px-6 md:flex-row md:text-left lg:px-8">

          <div>
            <div className="flex items-center justify-center gap-2 text-indigo-400 md:justify-start">
              <ShoppingBag size={20} />
              <span className="text-sm font-bold">
                ShopSphere
              </span>
            </div>

            <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
              Ready to discover something new?
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              Explore thousands of products curated just for you.
            </p>
          </div>

          <Link
            to="/shop"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-indigo-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-900/30 transition hover:bg-indigo-500"
          >
            Start Shopping
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>
    </main>
  );
}

export default Categories;