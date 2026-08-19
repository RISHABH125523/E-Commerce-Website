// import React from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="bg-white shadow-md">
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

//         {/* Logo */}
//         <Link to="/" className="text-2xl font-bold text-indigo-600">
//           ShopSphere
//         </Link>

//         {/* Navigation */}
//         <div className="flex gap-6">
//           <Link
//             to="/"
//             className="font-medium text-gray-700 hover:text-indigo-600"
//           >
//             Home
//           </Link>

//           <Link
//             to="/shop"
//             className="font-medium text-gray-700 hover:text-indigo-600"
//           >
//             Shop
//           </Link>

//           <Link
//             to="/categories"
//             className="font-medium text-gray-700 hover:text-indigo-600"
//           >
//             Categories
//           </Link>

//           <Link
//             to="/deals"
//             className="font-medium text-red-500 hover:text-red-600"
//           >
//             Deals
//           </Link>

//           <Link
//             to="/cart"
//             className="font-medium text-gray-700 hover:text-indigo-600"
//           >
//             Cart
//           </Link>

//           <Link
//             to="/account"
//             className="font-medium text-gray-700 hover:text-indigo-600"
//           >
//             Account
//           </Link>
//         </div>

//       </div>
//     </nav>
//   );
// }

// export default Navbar;























import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Heart,
  ShoppingCart,
  User,
  Menu,
  X,
} from "lucide-react";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Main Navbar */}
        <div className="flex h-20 items-center justify-between gap-6">

          {/* Logo */}
          <Link
            to="/"
            className="shrink-0 text-2xl font-extrabold tracking-tight text-indigo-600"
          >
            Shop<span className="text-gray-900">Sphere</span>
          </Link>

          {/* Search Bar */}
          <div className="hidden max-w-xl flex-1 md:flex">
            <div className="flex w-full items-center rounded-full border border-gray-200 bg-gray-50 px-4 py-2.5 transition focus-within:border-indigo-500 focus-within:bg-white">
              <Search size={20} className="text-gray-400" />

              <input
                type="text"
                placeholder="Search products..."
                className="ml-3 w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
              />

              <button className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700">
                Search
              </button>
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-5 md:flex">

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="group relative text-gray-600 transition hover:text-indigo-600"
            >
              <Heart size={22} />
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
                2
              </span>
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="group relative text-gray-600 transition hover:text-indigo-600"
            >
              <ShoppingCart size={23} />
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-indigo-600 px-1 text-[10px] font-bold text-white">
                3
              </span>
            </Link>

            {/* Account */}
            <Link
              to="/account"
              className="flex items-center gap-2 border-l border-gray-200 pl-5 text-gray-700 transition hover:text-indigo-600"
            >
              <User size={22} />
              <div className="text-left">
                <p className="text-xs text-gray-400">Welcome</p>
                <p className="text-sm font-semibold">My Account</p>
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="text-gray-700 md:hidden"
          >
            {mobileMenu ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center justify-center gap-8 border-t border-gray-100 py-3 md:flex">
          <Link
            to="/"
            className="text-sm font-semibold text-gray-700 transition hover:text-indigo-600"
          >
            Home
          </Link>

          <Link
            to="/shop"
            className="text-sm font-semibold text-gray-700 transition hover:text-indigo-600"
          >
            Shop
          </Link>

          <Link
            to="/categories"
            className="text-sm font-semibold text-gray-700 transition hover:text-indigo-600"
          >
            Categories
          </Link>

          <Link
            to="/deals"
            className="text-sm font-semibold text-red-500 transition hover:text-red-600"
          >
            🔥 Deals
          </Link>

          <Link
            to="/new-arrivals"
            className="text-sm font-semibold text-gray-700 transition hover:text-indigo-600"
          >
            New Arrivals
          </Link>

          <Link
            to="/contact"
            className="text-sm font-semibold text-gray-700 transition hover:text-indigo-600"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="border-t border-gray-100 py-4 md:hidden">

            {/* Mobile Search */}
            <div className="mb-4 flex items-center rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">
              <Search size={19} className="text-gray-400" />

              <input
                type="text"
                placeholder="Search products..."
                className="ml-2 w-full bg-transparent text-sm outline-none"
              />
            </div>

            <nav className="flex flex-col gap-4">
              <Link to="/" className="font-medium text-gray-700">
                Home
              </Link>

              <Link to="/shop" className="font-medium text-gray-700">
                Shop
              </Link>

              <Link to="/categories" className="font-medium text-gray-700">
                Categories
              </Link>

              <Link to="/deals" className="font-medium text-red-500">
                🔥 Deals
              </Link>

              <Link to="/wishlist" className="font-medium text-gray-700">
                Wishlist
              </Link>

              <Link to="/cart" className="font-medium text-gray-700">
                Cart
              </Link>

              <Link to="/account" className="font-medium text-gray-700">
                My Account
              </Link>

              <Link to="/contact" className="font-medium text-gray-700">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;