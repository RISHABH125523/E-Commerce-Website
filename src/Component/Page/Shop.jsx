import React, { useMemo, useState } from "react";
import {
  Search,
  SlidersHorizontal,
  Heart,
  ShoppingCart,
  Star,
  ChevronDown,
  X,
} from "lucide-react";

function Shop() {
  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      category: "Electronics",
      price: 89.99,
      oldPrice: 129.99,
      rating: 4.8,
      reviews: 245,
      discount: 31,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Minimal Leather Backpack",
      category: "Fashion",
      price: 64.99,
      oldPrice: 89.99,
      rating: 4.7,
      reviews: 189,
      discount: 28,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Classic White Sneakers",
      category: "Fashion",
      price: 74.99,
      oldPrice: 109.99,
      rating: 4.9,
      reviews: 321,
      discount: 32,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "Smart Watch Pro",
      category: "Electronics",
      price: 119.99,
      oldPrice: 159.99,
      rating: 4.8,
      reviews: 412,
      discount: 25,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      name: "Modern Sunglasses",
      category: "Fashion",
      price: 39.99,
      oldPrice: 59.99,
      rating: 4.6,
      reviews: 156,
      discount: 33,
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      name: "Wireless Bluetooth Speaker",
      category: "Electronics",
      price: 54.99,
      oldPrice: 79.99,
      rating: 4.7,
      reviews: 278,
      discount: 31,
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 7,
      name: "Luxury Face Care Set",
      category: "Beauty",
      price: 44.99,
      oldPrice: 69.99,
      rating: 4.8,
      reviews: 203,
      discount: 36,
      image:
        "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 8,
      name: "Ceramic Coffee Mug",
      category: "Home",
      price: 18.99,
      oldPrice: 29.99,
      rating: 4.5,
      reviews: 98,
      discount: 37,
      image:
        "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 9,
      name: "Premium Running Shoes",
      category: "Sports",
      price: 84.99,
      oldPrice: 119.99,
      rating: 4.9,
      reviews: 367,
      discount: 29,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 10,
      name: "Portable Power Bank",
      category: "Electronics",
      price: 29.99,
      oldPrice: 44.99,
      rating: 4.6,
      reviews: 174,
      discount: 33,
      image:
        "https://images.unsplash.com/photo-1609592424830-1e3d7a4d2c7b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 11,
      name: "Classic Denim Jacket",
      category: "Fashion",
      price: 69.99,
      oldPrice: 99.99,
      rating: 4.7,
      reviews: 142,
      discount: 30,
      image:
        "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 12,
      name: "Modern Table Lamp",
      category: "Home",
      price: 34.99,
      oldPrice: 54.99,
      rating: 4.5,
      reviews: 121,
      discount: 36,
      image:
        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 13,
      name: "Mechanical Gaming Keyboard",
      category: "Electronics",
      price: 79.99,
      oldPrice: 119.99,
      rating: 4.8,
      reviews: 289,
      discount: 33,
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 14,
      name: "Elegant Women's Handbag",
      category: "Fashion",
      price: 59.99,
      oldPrice: 84.99,
      rating: 4.7,
      reviews: 234,
      discount: 29,
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 15,
      name: "Natural Skincare Kit",
      category: "Beauty",
      price: 49.99,
      oldPrice: 74.99,
      rating: 4.8,
      reviews: 187,
      discount: 33,
      image:
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 16,
      name: "Smart LED Desk Light",
      category: "Home",
      price: 42.99,
      oldPrice: 64.99,
      rating: 4.6,
      reviews: 112,
      discount: 34,
      image:
        "https://images.unsplash.com/photo-1534281308040-78b4b4e0e5a1?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 17,
      name: "Yoga Fitness Mat",
      category: "Sports",
      price: 24.99,
      oldPrice: 39.99,
      rating: 4.7,
      reviews: 156,
      discount: 38,
      image:
        "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 18,
      name: "Wireless Gaming Mouse",
      category: "Electronics",
      price: 39.99,
      oldPrice: 59.99,
      rating: 4.8,
      reviews: 245,
      discount: 33,
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 19,
      name: "Cotton Casual T-Shirt",
      category: "Fashion",
      price: 24.99,
      oldPrice: 39.99,
      rating: 4.5,
      reviews: 198,
      discount: 38,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 20,
      name: "Aroma Scented Candle",
      category: "Home",
      price: 16.99,
      oldPrice: 24.99,
      rating: 4.6,
      reviews: 87,
      discount: 32,
      image:
        "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 21,
      name: "Digital Fitness Tracker",
      category: "Sports",
      price: 49.99,
      oldPrice: 79.99,
      rating: 4.7,
      reviews: 265,
      discount: 38,
      image:
        "https://images.unsplash.com/photo-1557935728-e6d1eaabe558?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 22,
      name: "Portable Mini Fan",
      category: "Electronics",
      price: 21.99,
      oldPrice: 34.99,
      rating: 4.4,
      reviews: 76,
      discount: 37,
      image:
        "https://images.unsplash.com/photo-1622331148964-4a1f6e2c4a91?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 23,
      name: "Classic Leather Wallet",
      category: "Fashion",
      price: 29.99,
      oldPrice: 44.99,
      rating: 4.8,
      reviews: 342,
      discount: 33,
      image:
        "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 24,
      name: "Decorative Wall Mirror",
      category: "Home",
      price: 69.99,
      oldPrice: 99.99,
      rating: 4.6,
      reviews: 109,
      discount: 30,
      image:
        "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 25,
      name: "Professional Hair Dryer",
      category: "Beauty",
      price: 54.99,
      oldPrice: 79.99,
      rating: 4.7,
      reviews: 198,
      discount: 31,
      image:
        "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 26,
      name: "Modern Running Shorts",
      category: "Sports",
      price: 29.99,
      oldPrice: 44.99,
      rating: 4.6,
      reviews: 134,
      discount: 33,
      image:
        "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 27,
      name: "Noise Cancelling Earbuds",
      category: "Electronics",
      price: 69.99,
      oldPrice: 99.99,
      rating: 4.9,
      reviews: 456,
      discount: 30,
      image:
        "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 28,
      name: "Oversized Casual Hoodie",
      category: "Fashion",
      price: 44.99,
      oldPrice: 64.99,
      rating: 4.7,
      reviews: 223,
      discount: 31,
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 29,
      name: "Luxury Perfume",
      category: "Beauty",
      price: 79.99,
      oldPrice: 109.99,
      rating: 4.8,
      reviews: 312,
      discount: 27,
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 30,
      name: "Wooden Coffee Table",
      category: "Home",
      price: 149.99,
      oldPrice: 199.99,
      rating: 4.8,
      reviews: 84,
      discount: 25,
      image:
        "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 31,
      name: "Adjustable Dumbbells",
      category: "Sports",
      price: 89.99,
      oldPrice: 129.99,
      rating: 4.7,
      reviews: 145,
      discount: 31,
      image:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 32,
      name: "4K Smart Television",
      category: "Electronics",
      price: 399.99,
      oldPrice: 499.99,
      rating: 4.9,
      reviews: 521,
      discount: 20,
      image:
        "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 33,
      name: "Classic Analog Watch",
      category: "Fashion",
      price: 99.99,
      oldPrice: 149.99,
      rating: 4.8,
      reviews: 274,
      discount: 33,
      image:
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 34,
      name: "Makeup Brush Collection",
      category: "Beauty",
      price: 32.99,
      oldPrice: 49.99,
      rating: 4.6,
      reviews: 167,
      discount: 34,
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 35,
      name: "Indoor Plant Pot",
      category: "Home",
      price: 22.99,
      oldPrice: 34.99,
      rating: 4.5,
      reviews: 91,
      discount: 34,
      image:
        "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 36,
      name: "Sports Water Bottle",
      category: "Sports",
      price: 19.99,
      oldPrice: 29.99,
      rating: 4.7,
      reviews: 203,
      discount: 33,
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 37,
      name: "Laptop Stand",
      category: "Electronics",
      price: 34.99,
      oldPrice: 54.99,
      rating: 4.8,
      reviews: 189,
      discount: 36,
      image:
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 38,
      name: "Women's Casual Dress",
      category: "Fashion",
      price: 54.99,
      oldPrice: 79.99,
      rating: 4.7,
      reviews: 231,
      discount: 31,
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 39,
      name: "Vitamin C Face Serum",
      category: "Beauty",
      price: 27.99,
      oldPrice: 39.99,
      rating: 4.8,
      reviews: 298,
      discount: 30,
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 40,
      name: "Soft Decorative Cushion",
      category: "Home",
      price: 14.99,
      oldPrice: 24.99,
      rating: 4.5,
      reviews: 73,
      discount: 40,
      image:
        "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 41,
      name: "Resistance Training Bands",
      category: "Sports",
      price: 18.99,
      oldPrice: 29.99,
      rating: 4.6,
      reviews: 118,
      discount: 37,
      image:
        "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 42,
      name: "Smartphone Gimbal",
      category: "Electronics",
      price: 89.99,
      oldPrice: 129.99,
      rating: 4.7,
      reviews: 176,
      discount: 31,
      image:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 43,
      name: "Premium Cotton Shirt",
      category: "Fashion",
      price: 39.99,
      oldPrice: 59.99,
      rating: 4.7,
      reviews: 245,
      discount: 33,
      image:
        "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 44,
      name: "Organic Body Lotion",
      category: "Beauty",
      price: 21.99,
      oldPrice: 34.99,
      rating: 4.6,
      reviews: 124,
      discount: 37,
      image:
        "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 45,
      name: "Minimal Wall Clock",
      category: "Home",
      price: 31.99,
      oldPrice: 49.99,
      rating: 4.5,
      reviews: 88,
      discount: 36,
      image:
        "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 46,
      name: "Professional Football",
      category: "Sports",
      price: 29.99,
      oldPrice: 44.99,
      rating: 4.8,
      reviews: 192,
      discount: 33,
      image:
        "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 47,
      name: "Portable Bluetooth Keyboard",
      category: "Electronics",
      price: 44.99,
      oldPrice: 69.99,
      rating: 4.6,
      reviews: 143,
      discount: 36,
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 48,
      name: "Premium Crossbody Bag",
      category: "Fashion",
      price: 49.99,
      oldPrice: 74.99,
      rating: 4.8,
      reviews: 201,
      discount: 33,
      image:
        "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 49,
      name: "Hydrating Face Mask",
      category: "Beauty",
      price: 19.99,
      oldPrice: 29.99,
      rating: 4.7,
      reviews: 165,
      discount: 33,
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 50,
      name: "Modern Ceramic Vase",
      category: "Home",
      price: 27.99,
      oldPrice: 42.99,
      rating: 4.6,
      reviews: 96,
      discount: 35,
      image:
        "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const categories = [
    "All",
    "Fashion",
    "Electronics",
    "Beauty",
    "Home",
    "Sports",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");
  const [maxPrice, setMaxPrice] = useState(500);
  const [showFilters, setShowFilters] = useState(false);
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (id) => {
    setWishlist((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const categoryMatch =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      const searchMatch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const priceMatch = product.price <= maxPrice;

      return categoryMatch && searchMatch && priceMatch;
    });

    if (sort === "price-low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    if (sort === "discount") {
      result.sort((a, b) => b.discount - a.discount);
    }

    return result;
  }, [selectedCategory, search, maxPrice, sort]);

  return (
    <main className="min-h-screen bg-gray-50">

      {/* ================= SHOP HERO ================= */}
      <section className="bg-gradient-to-br from-indigo-700 via-indigo-600 to-purple-700">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-indigo-100 backdrop-blur">
              ShopSphere Collection
            </span>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Everything you need,
              <span className="block text-indigo-200">
                all in one place.
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-7 text-indigo-100 sm:text-lg">
              Explore our handpicked collection of premium fashion,
              electronics, beauty, home and sports products.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SEARCH + CATEGORY ================= */}
      <section className="sticky top-20 z-30 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto max-w-7xl px-5 py-4 sm:px-6 lg:px-8">

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            {/* Search */}
            <div className="relative w-full lg:max-w-md">
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full rounded-full border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:bg-white"
              />

              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                >
                  <X size={17} />
                </button>
              )}
            </div>

            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto pb-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
                    selectedCategory === category
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                      : "bg-gray-100 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SHOP CONTENT ================= */}
      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between gap-4">

          <div>
            <p className="text-sm text-gray-500">
              Showing{" "}
              <span className="font-bold text-gray-800">
                {filteredProducts.length}
              </span>{" "}
              products
            </p>

            <h2 className="mt-1 text-2xl font-extrabold text-gray-900">
              {selectedCategory === "All"
                ? "All Products"
                : selectedCategory}
            </h2>
          </div>

          <div className="flex items-center gap-2">

            {/* Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-sm lg:hidden"
            >
              <SlidersHorizontal size={17} />
              Filters
            </button>

            {/* Sort */}
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none rounded-xl border border-gray-200 bg-white py-2.5 pl-4 pr-10 text-sm font-semibold text-gray-700 outline-none shadow-sm"
              >
                <option value="featured">Featured</option>
                <option value="rating">Top Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="discount">Best Discount</option>
              </select>

              <ChevronDown
                size={16}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>
        </div>

        {/* ================= FILTER + PRODUCTS ================= */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[230px_1fr]">

          {/* Sidebar */}
          <aside
            className={`${
              showFilters ? "block" : "hidden"
            } h-fit rounded-2xl border border-gray-100 bg-white p-5 shadow-sm lg:block`}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-gray-900">Filters</h3>

              <button
                onClick={() => setMaxPrice(500)}
                className="text-xs font-semibold text-indigo-600"
              >
                Reset
              </button>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-bold text-gray-800">
                Categories
              </h4>

              <div className="mt-3 space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm ${
                      selectedCategory === category
                        ? "bg-indigo-50 font-semibold text-indigo-600"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <span>{category}</span>
                    <span>
                      {category === "All"
                        ? products.length
                        : products.filter(
                            (p) => p.category === category
                          ).length}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="my-6 border-t border-gray-100" />

            {/* Price Filter */}
            <div>
              <h4 className="text-sm font-bold text-gray-800">
                Maximum Price
              </h4>

              <div className="mt-4">
                <input
                  type="range"
                  min="10"
                  max="500"
                  step="10"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-indigo-600"
                />

                <div className="mt-2 flex justify-between text-xs text-gray-500">
                  <span>$10</span>
                  <span className="font-bold text-indigo-600">
                    ${maxPrice}
                  </span>
                  <span>$500+</span>
                </div>
              </div>
            </div>

            <div className="my-6 border-t border-gray-100" />

            <div className="rounded-xl bg-indigo-50 p-4">
              <p className="text-sm font-bold text-indigo-700">
                🎁 Special Offer
              </p>
              <p className="mt-1 text-xs leading-5 text-indigo-600">
                Get up to 40% off on selected products this week.
              </p>
            </div>
          </aside>

          {/* Product Grid */}
          <div>
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
                {filteredProducts.map((product) => (
                  <article
                    key={product.id}
                    className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden bg-gray-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-52 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-60"
                      />

                      {/* Discount */}
                      <span className="absolute left-3 top-3 rounded-full bg-red-500 px-2.5 py-1 text-[11px] font-bold text-white shadow">
                        -{product.discount}%
                      </span>

                      {/* Wishlist */}
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className="absolute right-3 top-3 rounded-full bg-white p-2 shadow-md transition hover:scale-105"
                      >
                        <Heart
                          size={18}
                          className={
                            wishlist.includes(product.id)
                              ? "fill-red-500 text-red-500"
                              : "text-gray-600"
                          }
                        />
                      </button>
                    </div>

                    {/* Info */}
                    <div className="p-4">

                      <p className="text-[11px] font-bold uppercase tracking-wide text-indigo-500">
                        {product.category}
                      </p>

                      <h3 className="mt-1 line-clamp-2 min-h-10 text-sm font-bold leading-5 text-gray-800">
                        {product.name}
                      </h3>

                      {/* Rating */}
                      <div className="mt-2 flex items-center gap-1">
                        <Star
                          size={14}
                          fill="currentColor"
                          className="text-yellow-400"
                        />

                        <span className="text-xs font-bold text-gray-700">
                          {product.rating}
                        </span>

                        <span className="text-[11px] text-gray-400">
                          ({product.reviews})
                        </span>
                      </div>

                      {/* Price */}
                      <div className="mt-3 flex items-center gap-2">
                        <span className="text-lg font-extrabold text-gray-900">
                          ${product.price}
                        </span>

                        <span className="text-xs text-gray-400 line-through">
                          ${product.oldPrice}
                        </span>
                      </div>

                      {/* Add Cart */}
                      <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 py-2.5 text-xs font-bold text-white transition hover:bg-indigo-600">
                        <ShoppingCart size={16} />
                        Add to Cart
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl bg-white px-6 py-20 text-center shadow-sm">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                  <Search size={28} className="text-gray-400" />
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  No products found
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Try changing your search or filter options.
                </p>

                <button
                  onClick={() => {
                    setSearch("");
                    setSelectedCategory("All");
                    setMaxPrice(500);
                  }}
                  className="mt-5 rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Shop;
