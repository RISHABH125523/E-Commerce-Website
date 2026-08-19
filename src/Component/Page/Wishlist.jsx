import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const initialProducts = [
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
    id: 3,
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

function ProductCard({ product, onRemove, onAddToCart }) {
  const discount = Math.round(
    ((product.oldPrice - product.price) / product.oldPrice) * 100
  );

  return (
    <article className="group overflow-hidden rounded-3xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
        <Link to={`/products/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </Link>

        {/* Discount */}
        <span className="absolute left-4 top-4 rounded-full bg-black px-3 py-1.5 text-[10px] font-bold text-white">
          -{discount}%
        </span>

        {/* Remove Wishlist */}
        <button
          type="button"
          onClick={() => onRemove(product.id)}
          aria-label="Remove from wishlist"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg text-red-500 shadow-md transition hover:bg-red-500 hover:text-white"
        >
          ♥
        </button>
      </div>

      {/* Product Info */}
      <div className="p-5">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
          {product.category}
        </p>

        <Link to={`/products/${product.id}`}>
          <h2 className="mt-2 line-clamp-1 text-lg font-bold text-gray-900 hover:text-gray-600">
            {product.name}
          </h2>
        </Link>

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
          <span className="text-xl font-black text-gray-900">
            ₹{product.price.toLocaleString("en-IN")}
          </span>

          <span className="text-sm text-gray-400 line-through">
            ₹{product.oldPrice.toLocaleString("en-IN")}
          </span>
        </div>

        {/* Add To Cart */}
        <button
          type="button"
          onClick={() => onAddToCart(product)}
          className="mt-5 w-full rounded-xl bg-black px-5 py-3.5 text-sm font-bold text-white transition hover:bg-gray-800 active:scale-[0.98]"
        >
          Add to Cart →
        </button>
      </div>
    </article>
  );
}

function EmptyWishlist() {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white px-6 py-20 text-center">
      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gray-100 text-4xl">
        ♡
      </div>

      <h2 className="mt-6 text-2xl font-black text-gray-900">
        Your wishlist is empty
      </h2>

      <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500">
        Save products you love and find them here whenever you are ready
        to shop.
      </p>

      <Link
        to="/products"
        className="mt-7 inline-flex rounded-xl bg-black px-7 py-3.5 text-sm font-bold text-white transition hover:bg-gray-800"
      >
        Explore Products →
      </Link>
    </div>
  );
}

function Wishlist() {
  const navigate = useNavigate();

  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const [toast, setToast] = useState("");

  const showToast = (message) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2500);
  };

  // Remove wishlist item
  const removeFromWishlist = (id) => {
    setProducts((current) =>
      current.filter((product) => product.id !== id)
    );

    showToast("Removed from wishlist");
  };

  // Add product to cart
  const addToCart = (product) => {
    setCart((current) => {
      const existingProduct = current.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return current.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...current,
        {
          ...product,
          quantity: 1,
        },
      ];
    });

    showToast(`${product.name} added to cart`);
  };

  // Move all products to cart
  const moveAllToCart = () => {
    products.forEach((product) => {
      addToCart(product);
    });

    setProducts([]);
    showToast("All products moved to cart");
  };

  // Clear wishlist
  const clearWishlist = () => {
    setProducts([]);
    showToast("Wishlist cleared");
  };

  // Search + sorting
  const filteredProducts = useMemo(() => {
    let result = products.filter((product) =>
      `${product.name} ${product.category}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );

    if (sort === "low") {
      result = [...result].sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [products, search, sort]);

  const wishlistValue = products.reduce(
    (total, product) => total + product.price,
    0
  );

  return (
    <main className="min-h-screen bg-[#fafafa] px-4 py-10 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">

        {/* =====================================================
            HERO
        ====================================================== */}
        <div className="overflow-hidden rounded-3xl bg-black text-white">
          <div className="px-6 py-10 sm:px-10 sm:py-12">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">
                  Your Favorites
                </p>

                <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                  My Wishlist
                </h1>

                <p className="mt-4 max-w-xl text-sm leading-6 text-gray-400">
                  Keep your favorite products close. Save now and shop
                  whenever you are ready.
                </p>
              </div>

              {/* Stats */}
              <div className="flex gap-8">
                <div>
                  <p className="text-2xl font-black">
                    {products.length}
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Saved Items
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-black">
                    ₹{wishlistValue.toLocaleString("en-IN")}
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Wishlist Value
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="grid border-t border-white/10 sm:grid-cols-3">
            <Link
              to="/shop"
              className="px-6 py-4 text-sm font-semibold text-gray-400 transition hover:bg-white/5 hover:text-white"
            >
              ← Continue Shopping
            </Link>

            <Link
              to="/cart"
              className="border-t border-white/10 px-6 py-4 text-sm font-semibold text-gray-400 transition hover:bg-white/5 hover:text-white sm:border-l sm:border-t-0"
            >
              View Cart →
            </Link>

            <Link
              to="/account"
              className="border-t border-white/10 px-6 py-4 text-sm font-semibold text-gray-400 transition hover:bg-white/5 hover:text-white sm:border-l sm:border-t-0"
            >
              My Account →
            </Link>
          </div>
        </div>

        {/* =====================================================
            EMPTY STATE
        ====================================================== */}
        {products.length === 0 ? (
          <div className="mt-8">
            <EmptyWishlist />
          </div>
        ) : (
          <>
            {/* =====================================================
                TOOLBAR
            ====================================================== */}
            <div className="my-8 rounded-2xl border border-gray-200 bg-white p-4">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                {/* Search */}
                <div className="relative w-full lg:max-w-md">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    ⌕
                  </span>

                  <input
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search your wishlist..."
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-black focus:bg-white"
                  />
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3">
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium outline-none focus:border-black"
                  >
                    <option value="default">
                      Sort: Default
                    </option>

                    <option value="low">
                      Price: Low to High
                    </option>

                    <option value="high">
                      Price: High to Low
                    </option>

                    <option value="rating">
                      Top Rated
                    </option>
                  </select>

                  <button
                    type="button"
                    onClick={moveAllToCart}
                    className="rounded-xl bg-black px-5 py-3 text-sm font-bold text-white transition hover:bg-gray-800"
                  >
                    Move All to Cart
                  </button>

                  <button
                    type="button"
                    onClick={clearWishlist}
                    className="rounded-xl border border-red-100 px-5 py-3 text-sm font-bold text-red-500 transition hover:bg-red-50"
                  >
                    Clear Wishlist
                  </button>
                </div>
              </div>
            </div>

            {/* =====================================================
                BREADCRUMB
            ====================================================== */}
            <div className="mb-5 flex items-center gap-2 text-xs text-gray-400">
              <Link
                to="/"
                className="transition hover:text-black"
              >
                Home
              </Link>

              <span>/</span>

              <span className="font-semibold text-gray-700">
                Wishlist
              </span>
            </div>

            {/* =====================================================
                PRODUCTS
            ====================================================== */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onRemove={removeFromWishlist}
                    onAddToCart={addToCart}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-3xl border border-gray-200 bg-white px-6 py-20 text-center">
                <div className="text-4xl">⌕</div>

                <h2 className="mt-4 text-xl font-bold text-gray-900">
                  No products found
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Try a different search term.
                </p>

                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="mt-5 text-sm font-bold text-black underline"
                >
                  Clear Search
                </button>
              </div>
            )}
          </>
        )}

        {/* =====================================================
            FOOTER CTA
        ====================================================== */}
        <div className="mt-12 rounded-3xl border border-gray-200 bg-white p-8 text-center sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
            Keep Exploring
          </p>

          <h2 className="mt-3 text-2xl font-black text-gray-900 sm:text-3xl">
            Find something new to love.
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-gray-500">
            Discover our latest arrivals, trending products and exclusive
            collections.
          </p>

          <Link
            to="/shop"
            className="mt-6 inline-flex rounded-xl bg-black px-7 py-3.5 text-sm font-bold text-white transition hover:bg-gray-800"
          >
            Explore Collection →
          </Link>
        </div>
      </section>

      {/* =====================================================
          TOAST
      ====================================================== */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-2xl">
          ✓ {toast}
        </div>
      )}
    </main>
  );
}

export default Wishlist;
