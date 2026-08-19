import React, { useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    if (!email.includes("@")) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setMessage("✓ You're successfully subscribed!");
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="mt-20 bg-[#0a0a0a] text-white">
      {/* =====================================================
          NEWSLETTER
      ====================================================== */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            {/* Content */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-500">
                Stay in the loop
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Get 10% off your first order.
              </h2>

              <p className="mt-3 max-w-lg text-sm leading-6 text-gray-400">
                Subscribe to our newsletter for new arrivals, exclusive
                offers, and members-only deals.
              </p>
            </div>

            {/* Form */}
            <div>
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setMessage("");
                  }}
                  placeholder="Enter your email address"
                  className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white outline-none placeholder:text-gray-500 transition focus:border-white/40 focus:bg-white/10"
                />

                <button
                  type="submit"
                  className="rounded-xl bg-white px-7 py-4 text-sm font-bold text-black transition hover:bg-gray-200 active:scale-[0.98]"
                >
                  Subscribe →
                </button>
              </form>

              {message && (
                <p
                  className={`mt-3 text-xs font-semibold ${
                    message.startsWith("✓")
                      ? "text-emerald-400"
                      : "text-red-400"
                  }`}
                >
                  {message}
                </p>
              )}

              <p className="mt-3 text-[11px] text-gray-600">
                By subscribing, you agree to receive marketing emails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.3fr]">
          {/* Brand */}
          <div>
            <Link
              to="/"
              onClick={scrollToTop}
              className="inline-block text-2xl font-black tracking-tight"
            >
              YOUR<span className="text-gray-500">STORE</span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-gray-500">
              Thoughtfully designed products for modern everyday living.
              Quality, simplicity and style — all in one place.
            </p>

            {/* Social */}
            <div className="mt-7 flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm font-bold text-gray-400 transition hover:border-white hover:bg-white hover:text-black"
              >
                IG
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm font-bold text-gray-400 transition hover:border-white hover:bg-white hover:text-black"
              >
                f
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm font-bold text-gray-400 transition hover:border-white hover:bg-white hover:text-black"
              >
                𝕏
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm font-bold text-gray-400 transition hover:border-white hover:bg-white hover:text-black"
              >
                YT
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Shop
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="/shop"
                  className="text-sm text-gray-500 transition hover:text-white"
                >
                  All Products
                </Link>
              </li>

              <li>
                <Link
                  to="/new-arrivals"
                  className="text-sm text-gray-500 transition hover:text-white"
                >
                  New Arrivals
                </Link>
              </li>

              <li>
                <Link
                  to="/deals"
                  className="text-sm text-gray-500 transition hover:text-white"
                >
                  Deals
                </Link>
              </li>

              <li>
                <Link
                  to="/wishlist"
                  className="text-sm text-gray-500 transition hover:text-white"
                >
                  Wishlist
                </Link>
              </li>

              <li>
                <Link
                  to="/cart"
                  className="text-sm text-gray-500 transition hover:text-white"
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Company
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-500 transition hover:text-white"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-sm text-gray-500 transition hover:text-white"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  to="/account"
                  className="text-sm text-gray-500 transition hover:text-white"
                >
                  My Account
                </Link>
              </li>

              {/* <li>
                <Link
                  to="/orders"
                  className="text-sm text-gray-500 transition hover:text-white"
                >
                  Order Tracking
                </Link>
              </li> */}
            </ul>
          </div>

        
          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Need Help?
            </h3>

            <div className="mt-5 space-y-5">
              <a
                href="mailto:support@yourstore.com"
                className="block text-sm text-gray-500 transition hover:text-white"
              >
                <span className="block text-xs text-gray-600">
                  Email
                </span>

                <span className="mt-1 block">
                  support@yourstore.com
                </span>
              </a>

              <a
                href="tel:+919876543210"
                className="block text-sm text-gray-500 transition hover:text-white"
              >
                <span className="block text-xs text-gray-600">
                  Phone
                </span>

                <span className="mt-1 block">
                  +91 98765 43210
                </span>
              </a>

              <div>
                <span className="block text-xs text-gray-600">
                  Support Hours
                </span>

                <span className="mt-1 block text-sm text-gray-500">
                  Mon – Sat · 10 AM – 7 PM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          FEATURES
      ====================================================== */}
      <div className="border-y border-white/10">
        <div className="mx-auto grid max-w-7xl sm:grid-cols-3">
          <div className="border-b border-white/10 px-6 py-6 sm:border-b-0 sm:border-r">
            <p className="text-sm font-bold">
              🚚 Free Shipping
            </p>

            <p className="mt-1 text-xs text-gray-500">
              On orders above ₹4,999
            </p>
          </div>

          <div className="border-b border-white/10 px-6 py-6 sm:border-b-0 sm:border-r">
            <p className="text-sm font-bold">
              ↩ Easy Returns
            </p>

            <p className="mt-1 text-xs text-gray-500">
              Hassle-free 7 day returns
            </p>
          </div>

          <div className="px-6 py-6">
            <p className="text-sm font-bold">
              🔒 Secure Payments
            </p>

            <p className="mt-1 text-xs text-gray-500">
              100% secure checkout
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM BAR
      ====================================================== */}
      <div className="mx-auto max-w-7xl px-5 py-7 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-5 text-xs text-gray-600 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} YourStore. All rights reserved.
          </p>

          {/* Payment Methods */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded bg-white/5 px-2.5 py-1.5 font-bold">
              VISA
            </span>

            <span className="rounded bg-white/5 px-2.5 py-1.5 font-bold">
              MASTERCARD
            </span>

            <span className="rounded bg-white/5 px-2.5 py-1.5 font-bold">
              UPI
            </span>

            <span className="rounded bg-white/5 px-2.5 py-1.5 font-bold">
              COD
            </span>
          </div>

          {/* Back To Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex w-fit items-center gap-2 font-semibold text-gray-400 transition hover:text-white"
          >
            Back to top
            <span className="text-lg">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;