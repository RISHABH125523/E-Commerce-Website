import React, { useMemo, useState } from "react";

const initialCart = [
  {
    id: 1,
    name: "Premium Oversized T-Shirt",
    category: "Men's Fashion",
    variant: "Black / Large",
    price: 1299,
    oldPrice: 1799,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Minimal White Sneakers",
    category: "Footwear",
    variant: "White / UK 9",
    price: 1999,
    oldPrice: 2799,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Classic Leather Handbag",
    category: "Accessories",
    variant: "Brown / Standard",
    price: 2499,
    oldPrice: 3299,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
  },
];

const coupons = {
  SAVE10: 10,
  SAVE20: 20,
  WELCOME15: 15,
};

function CartItem({ item, onIncrease, onDecrease, onRemove, onWishlist }) {
  return (
    <div className="group flex gap-4 border-b border-gray-100 py-6 last:border-0">
      {/* Product Image */}
      <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-2xl bg-gray-100 sm:h-36 sm:w-32">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute left-2 top-2 rounded-full bg-black px-2 py-1 text-[10px] font-bold text-white">
          NEW
        </span>
      </div>

      {/* Product Content */}
      <div className="flex min-w-0 flex-1 flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                {item.category}
              </p>

              <h3 className="mt-1 line-clamp-2 text-sm font-bold text-gray-900 sm:text-base">
                {item.name}
              </h3>

              <p className="mt-1 text-xs text-gray-500">
                {item.variant}
              </p>
            </div>

            <button
              type="button"
              onClick={() => onRemove(item.id)}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xl text-gray-400 transition hover:bg-red-50 hover:text-red-500"
              aria-label="Remove item"
            >
              ×
            </button>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          {/* Quantity */}
          <div className="flex items-center rounded-xl border border-gray-200">
            <button
              type="button"
              onClick={() => onDecrease(item.id)}
              disabled={item.quantity <= 1}
              className="flex h-9 w-9 items-center justify-center text-gray-600 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-30"
            >
              −
            </button>

            <span className="w-8 text-center text-sm font-bold">
              {item.quantity}
            </span>

            <button
              type="button"
              onClick={() => onIncrease(item.id)}
              className="flex h-9 w-9 items-center justify-center text-gray-600 transition hover:bg-gray-100"
            >
              +
            </button>
          </div>

          {/* Price */}
          <div className="text-right">
            <p className="text-base font-black text-gray-900">
              ₹{(item.price * item.quantity).toLocaleString("en-IN")}
            </p>

            <p className="text-xs text-gray-400 line-through">
              ₹{(item.oldPrice * item.quantity).toLocaleString("en-IN")}
            </p>
          </div>
        </div>

        {/* Wishlist */}
        <button
          type="button"
          onClick={() => onWishlist(item)}
          className="mt-3 w-fit text-xs font-semibold text-gray-500 transition hover:text-black hover:underline"
        >
          ♡ Move to Wishlist
        </button>
      </div>
    </div>
  );
}

function EmptyCart({ onContinue }) {
  return (
    <div className="flex min-h-[500px] flex-col items-center justify-center px-6 text-center">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-100 text-4xl">
        🛒
      </div>

      <h2 className="mt-6 text-2xl font-black text-gray-900">
        Your cart is empty
      </h2>

      <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
        Looks like you haven&apos;t added anything to your cart yet.
        Discover our latest products and find something you love.
      </p>

      <button
        type="button"
        onClick={onContinue}
        className="mt-7 rounded-xl bg-black px-7 py-3.5 text-sm font-bold text-white transition hover:bg-gray-800 active:scale-95"
      >
        Start Shopping →
      </button>
    </div>
  );
}

function Cart() {
  const [cart, setCart] = useState(initialCart);
  const [coupon, setCoupon] = useState("");
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState("");
  const [wishlist, setWishlist] = useState([]);
  const [checkoutMessage, setCheckoutMessage] = useState("");

  // Increase quantity
  const increaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
    setCoupon("");
    setCouponDiscount(0);
    setCouponMessage("");
  };

  // Wishlist
  const moveToWishlist = (item) => {
    setWishlist((current) => {
      if (current.some((wishlistItem) => wishlistItem.id === item.id)) {
        return current;
      }

      return [...current, item];
    });

    setCart((currentCart) =>
      currentCart.filter((cartItem) => cartItem.id !== item.id)
    );
  };

  // Coupon
  const applyCoupon = () => {
    const code = coupon.trim().toUpperCase();

    if (!code) {
      setCouponMessage("Please enter a coupon code.");
      setCouponDiscount(0);
      return;
    }

    if (coupons[code]) {
      setCouponDiscount(coupons[code]);
      setCouponMessage(`${coupons[code]}% discount applied successfully!`);
    } else {
      setCouponDiscount(0);
      setCouponMessage("Invalid coupon code.");
    }
  };

  // Calculations
  const subtotal = useMemo(() => {
    return cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cart]);

  const productDiscount = useMemo(() => {
    return cart.reduce(
      (total, item) =>
        total + (item.oldPrice - item.price) * item.quantity,
      0
    );
  }, [cart]);

  const couponAmount = Math.round(
    (subtotal * couponDiscount) / 100
  );

  const shipping = subtotal === 0 || subtotal >= 4999 ? 0 : 99;

  const total = Math.max(
    0,
    subtotal - couponAmount + shipping
  );

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Checkout
  const handleCheckout = () => {
    if (cart.length === 0) return;

    setCheckoutMessage(
      `Checkout ready! Your order total is ₹${total.toLocaleString(
        "en-IN"
      )}.`
    );
  };

  const continueShopping = () => {
    // Replace this with navigate("/products") if using React Router.
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen bg-[#fafafa] px-4 py-10 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-400">
            Shopping Bag
          </p>

          <div className="mt-2 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h1 className="text-4xl font-black tracking-tight text-gray-950 sm:text-5xl">
                Your Cart
              </h1>

              <p className="mt-2 text-sm text-gray-500">
                {totalItems > 0
                  ? `${totalItems} item${
                      totalItems > 1 ? "s" : ""
                    } in your shopping bag`
                  : "Your shopping bag is currently empty"}
              </p>
            </div>

            {cart.length > 0 && (
              <button
                type="button"
                onClick={continueShopping}
                className="w-fit text-sm font-semibold text-gray-600 transition hover:text-black hover:underline"
              >
                ← Continue Shopping
              </button>
            )}
          </div>
        </div>

        {/* ================= EMPTY CART ================= */}
        {cart.length === 0 ? (
          <div className="rounded-3xl border border-gray-200 bg-white">
            <EmptyCart onContinue={continueShopping} />

            {wishlist.length > 0 && (
              <div className="border-t border-gray-100 p-6 text-center">
                <p className="text-sm text-gray-500">
                  ❤️ {wishlist.length} item
                  {wishlist.length > 1 ? "s" : ""} saved in your wishlist
                </p>
              </div>
            )}
          </div>
        ) : (
          <>
            {/* ================= FREE SHIPPING ================= */}
            <div className="mb-6 overflow-hidden rounded-2xl border border-emerald-100 bg-emerald-50">
              <div className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-bold text-emerald-800">
                    {subtotal >= 4999
                      ? "🎉 You unlocked FREE delivery!"
                      : `🚚 Add ₹${Math.max(
                          0,
                          4999 - subtotal
                        ).toLocaleString(
                          "en-IN"
                        )} more for FREE delivery`}
                  </p>

                  <p className="mt-1 text-xs text-emerald-700">
                    Free shipping on orders above ₹4,999
                  </p>
                </div>

                <span className="text-sm font-bold text-emerald-700">
                  {subtotal >= 4999 ? "100%" : `${Math.min(
                    100,
                    Math.round((subtotal / 4999) * 100)
                  )}%`}
                </span>
              </div>

              <div className="h-1.5 bg-emerald-100">
                <div
                  className="h-full rounded-r-full bg-emerald-500 transition-all duration-500"
                  style={{
                    width: `${Math.min(
                      100,
                      (subtotal / 4999) * 100
                    )}%`,
                  }}
                />
              </div>
            </div>

            {/* ================= MAIN ================= */}
            <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
              {/* CART ITEMS */}
              <div className="rounded-3xl border border-gray-200 bg-white p-5 sm:p-7">
                <div className="flex items-center justify-between border-b border-gray-100 pb-5">
                  <div>
                    <h2 className="text-xl font-black text-gray-900">
                      Cart Items
                    </h2>

                    <p className="mt-1 text-xs text-gray-400">
                      Review your selected products
                    </p>
                  </div>

                  <span className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-bold text-gray-600">
                    {totalItems} Items
                  </span>
                </div>

                {cart.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onIncrease={increaseQuantity}
                    onDecrease={decreaseQuantity}
                    onRemove={removeItem}
                    onWishlist={moveToWishlist}
                  />
                ))}

                {/* Cart Actions */}
                <div className="mt-2 flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-6">
                  <button
                    type="button"
                    onClick={continueShopping}
                    className="text-sm font-bold text-gray-700 hover:text-black hover:underline"
                  >
                    ← Continue Shopping
                  </button>

                  <button
                    type="button"
                    onClick={clearCart}
                    className="text-sm font-semibold text-red-500 transition hover:text-red-700 hover:underline"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>

              {/* ================= SUMMARY ================= */}
              <aside className="h-fit rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-7 lg:sticky lg:top-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-black text-gray-900">
                    Order Summary
                  </h2>

                  <span className="text-lg">🧾</span>
                </div>

                {/* Coupon */}
                <div className="mt-6">
                  <label
                    htmlFor="coupon"
                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-400"
                  >
                    Have a coupon?
                  </label>

                  <div className="flex overflow-hidden rounded-xl border border-gray-200 focus-within:border-black">
                    <input
                      id="coupon"
                      type="text"
                      value={coupon}
                      onChange={(e) => {
                        setCoupon(e.target.value);
                        setCouponMessage("");
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          applyCoupon();
                        }
                      }}
                      placeholder="Enter code"
                      className="min-w-0 flex-1 px-4 py-3 text-sm outline-none"
                    />

                    <button
                      type="button"
                      onClick={applyCoupon}
                      className="border-l border-gray-200 px-4 text-sm font-bold transition hover:bg-black hover:text-white"
                    >
                      Apply
                    </button>
                  </div>

                  {couponMessage && (
                    <p
                      className={`mt-2 text-xs font-semibold ${
                        couponDiscount > 0
                          ? "text-emerald-600"
                          : "text-red-500"
                      }`}
                    >
                      {couponMessage}
                    </p>
                  )}

                  <p className="mt-3 text-[11px] text-gray-400">
                    Try: SAVE10, SAVE20 or WELCOME15
                  </p>
                </div>

                {/* Price Details */}
                <div className="mt-6 space-y-4 border-y border-gray-100 py-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">
                      Subtotal
                    </span>

                    <span className="font-semibold text-gray-900">
                      ₹{subtotal.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">
                      Product Discount
                    </span>

                    <span className="font-semibold text-emerald-600">
                      − ₹{productDiscount.toLocaleString("en-IN")}
                    </span>
                  </div>

                  {couponDiscount > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">
                        Coupon ({couponDiscount}%)
                      </span>

                      <span className="font-semibold text-emerald-600">
                        − ₹{couponAmount.toLocaleString("en-IN")}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">
                      Delivery
                    </span>

                    <span className="font-semibold">
                      {shipping === 0 ? (
                        <span className="text-emerald-600">
                          FREE
                        </span>
                      ) : (
                        `₹${shipping}`
                      )}
                    </span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex items-end justify-between py-6">
                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      Total
                    </p>

                    <p className="mt-1 text-[11px] text-gray-400">
                      Inclusive of applicable taxes
                    </p>
                  </div>

                  <p className="text-2xl font-black text-gray-950">
                    ₹{total.toLocaleString("en-IN")}
                  </p>
                </div>

                {/* Checkout */}
                <button
                  type="button"
                  onClick={handleCheckout}
                  className="w-full rounded-xl bg-black px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-gray-800 active:scale-[0.98]"
                >
                  Proceed to Checkout →
                </button>

                {checkoutMessage && (
                  <div className="mt-4 rounded-xl bg-emerald-50 p-4 text-center text-xs font-semibold text-emerald-700">
                    ✓ {checkoutMessage}
                  </div>
                )}

                {/* Security */}
                <div className="mt-5 flex items-center justify-center gap-2 text-xs text-gray-400">
                  <span>🔒</span>
                  <span>Secure & encrypted checkout</span>
                </div>

                {/* Payment */}
                <div className="mt-5 flex items-center justify-center gap-2 border-t border-gray-100 pt-5">
                  <span className="rounded bg-gray-100 px-2 py-1 text-[10px] font-bold text-gray-500">
                    VISA
                  </span>

                  <span className="rounded bg-gray-100 px-2 py-1 text-[10px] font-bold text-gray-500">
                    MC
                  </span>

                  <span className="rounded bg-gray-100 px-2 py-1 text-[10px] font-bold text-gray-500">
                    UPI
                  </span>

                  <span className="rounded bg-gray-100 px-2 py-1 text-[10px] font-bold text-gray-500">
                    COD
                  </span>
                </div>
              </aside>
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default Cart;