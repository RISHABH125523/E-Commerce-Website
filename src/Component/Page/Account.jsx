
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const initialUser = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phone: "+91 98765 43210",
  location: "Mumbai, India",
  memberSince: "2026",
};

const accountMenu = [
  {
    icon: "▣",
    title: "My Orders",
    description: "Track and manage your orders",
    value: "12 Orders",
    path: "/orders",
  },
  {
    icon: "♡",
    title: "Wishlist",
    description: "Your saved products",
    value: "8 Items",
    path: "/wishlist",
  },
  {
    icon: "⌖",
    title: "Addresses",
    description: "Manage your delivery addresses",
    value: "2 Saved",
    path: "/addresses",
  },
  {
    icon: "⚙",
    title: "Settings",
    description: "Manage your account preferences",
    value: "Account",
    path: "/settings",
  },
];

function AccountCard({
  icon,
  title,
  description,
  value,
  path,
}) {
  return (
    <Link
      to={path}
      className="group flex w-full items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-xl text-gray-800 transition group-hover:bg-black group-hover:text-white">
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="font-bold text-gray-900">
          {title}
        </h3>

        <p className="mt-1 truncate text-sm text-gray-500">
          {description}
        </p>
      </div>

      <div className="hidden text-right sm:block">
        <p className="text-sm font-semibold text-gray-900">
          {value}
        </p>

        <span className="text-lg text-gray-400 transition group-hover:text-black">
          →
        </span>
      </div>
    </Link>
  );
}

function Account() {
  const navigate = useNavigate();

  const [user, setUser] = useState(initialUser);

  const [editMode, setEditMode] = useState(false);

  const [form, setForm] = useState(initialUser);

  const [message, setMessage] = useState("");

  const [showLogout, setShowLogout] = useState(false);

  const fullName = `${user.firstName} ${user.lastName}`;

  const initials =
    `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`.toUpperCase();

  // =========================
  // OPEN EDIT PROFILE
  // =========================
  const handleEditProfile = () => {
    setForm(user);
    setEditMode(true);
  };

  // =========================
  // INPUT CHANGE
  // =========================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  // =========================
  // SAVE PROFILE
  // =========================
  const handleSaveProfile = (e) => {
    e.preventDefault();

    if (
      !form.firstName.trim() ||
      !form.lastName.trim() ||
      !form.email.trim()
    ) {
      setMessage("Please fill all required fields.");
      return;
    }

    setUser(form);
    setEditMode(false);
    setMessage("Profile updated successfully.");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  // =========================
  // CANCEL EDIT
  // =========================
  const handleCancelEdit = () => {
    setForm(user);
    setEditMode(false);
    setMessage("");
  };

  // =========================
  // LOGOUT
  // =========================
  const handleLogout = () => {
    setShowLogout(false);

    // Add your real auth logout here.
    navigate("/");

    setTimeout(() => {
      alert("You have been logged out.");
    }, 100);
  };

  return (
    <main className="min-h-screen bg-[#fafafa] px-4 py-10 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">

        {/* =====================================================
            BREADCRUMB
        ====================================================== */}

        <div className="mb-6 flex items-center gap-2 text-xs text-gray-400">
          <Link
            to="/"
            className="transition hover:text-black"
          >
            Home
          </Link>

          <span>/</span>

          <span className="font-semibold text-gray-700">
            My Account
          </span>
        </div>

        {/* =====================================================
            PROFILE HERO
        ====================================================== */}

        <div className="overflow-hidden rounded-3xl bg-black text-white">
          <div className="p-7 sm:p-10">
            <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">

              {/* Profile */}
              <div className="flex items-center gap-5">

                {/* Avatar */}
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white text-2xl font-black text-black ring-4 ring-white/10">
                  {initials}
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    Welcome back
                  </p>

                  <h1 className="mt-1 text-3xl font-black tracking-tight sm:text-4xl">
                    {fullName}
                  </h1>

                  <p className="mt-1 text-sm text-gray-400">
                    {user.email}
                  </p>
                </div>
              </div>

              {/* Edit */}
              <button
                type="button"
                onClick={handleEditProfile}
                className="w-fit rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
              >
                Edit Profile
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid border-t border-white/10 sm:grid-cols-3">

            <Link
              to="/orders"
              className="p-6 transition hover:bg-white/5"
            >
              <p className="text-sm text-gray-400">
                Total Orders
              </p>

              <p className="mt-2 text-2xl font-bold">
                12
              </p>
            </Link>

            <Link
              to="/wishlist"
              className="border-t border-white/10 p-6 transition hover:bg-white/5 sm:border-l sm:border-t-0"
            >
              <p className="text-sm text-gray-400">
                Wishlist
              </p>

              <p className="mt-2 text-2xl font-bold">
                8
              </p>
            </Link>

            <div className="border-t border-white/10 p-6 sm:border-l sm:border-t-0">
              <p className="text-sm text-gray-400">
                Member Since
              </p>

              <p className="mt-2 text-2xl font-bold">
                {user.memberSince}
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            SUCCESS MESSAGE
        ====================================================== */}

        {message && (
          <div className="mt-5 rounded-xl border border-emerald-100 bg-emerald-50 px-5 py-4 text-sm font-semibold text-emerald-700">
            ✓ {message}
          </div>
        )}

        {/* =====================================================
            DASHBOARD
        ====================================================== */}

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">

          {/* ===================================================
              MAIN CONTENT
          ==================================================== */}

          <div>

            <div className="mb-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
                Account
              </p>

              <h2 className="mt-1 text-2xl font-bold text-gray-900">
                Manage your account
              </h2>
            </div>

            {/* Account Cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {accountMenu.map((item) => (
                <AccountCard
                  key={item.title}
                  {...item}
                />
              ))}
            </div>

            {/* =================================================
                PERSONAL INFORMATION
            ================================================== */}

            <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">

              <div className="flex items-center justify-between gap-4">

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Profile
                  </p>

                  <h2 className="mt-1 text-xl font-bold text-gray-900">
                    Personal Information
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={handleEditProfile}
                  className="text-sm font-semibold text-gray-900 hover:underline"
                >
                  Edit
                </button>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">

                <div>
                  <p className="text-xs font-medium text-gray-400">
                    Full Name
                  </p>

                  <p className="mt-1 font-medium text-gray-900">
                    {fullName}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium text-gray-400">
                    Email
                  </p>

                  <p className="mt-1 break-all font-medium text-gray-900">
                    {user.email}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium text-gray-400">
                    Phone
                  </p>

                  <p className="mt-1 font-medium text-gray-900">
                    {user.phone || "Not added"}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium text-gray-400">
                    Location
                  </p>

                  <p className="mt-1 font-medium text-gray-900">
                    {user.location || "Not added"}
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                RECENT ACTIVITY
            ================================================== */}

            <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Activity
                  </p>

                  <h2 className="mt-1 text-xl font-bold text-gray-900">
                    Recent Activity
                  </h2>
                </div>

                <Link
                  to="/orders"
                  className="text-sm font-semibold text-gray-900 hover:underline"
                >
                  View All
                </Link>
              </div>

              <div className="mt-6 space-y-4">

                <Link
                  to="/orders"
                  className="flex items-center gap-4 rounded-xl bg-gray-50 p-4 transition hover:bg-gray-100"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                    ✓
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">
                      Order #ORD-1024 delivered
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      2 days ago
                    </p>
                  </div>

                  <span className="text-gray-400">
                    →
                  </span>
                </Link>

                <Link
                  to="/wishlist"
                  className="flex items-center gap-4 rounded-xl bg-gray-50 p-4 transition hover:bg-gray-100"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg shadow-sm">
                    ♡
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">
                      New product added to wishlist
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      5 days ago
                    </p>
                  </div>

                  <span className="text-gray-400">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* ===================================================
              SIDEBAR
          ==================================================== */}

          <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-6">

            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
              Quick Access
            </p>

            <div className="mt-5 space-y-1">

              <Link
                to="/orders"
                className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
              >
                <span>Order History</span>
                <span>→</span>
              </Link>

              <Link
                to="/addresses"
                className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
              >
                <span>Saved Addresses</span>
                <span>→</span>
              </Link>

              <Link
                to="/settings"
                className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
              >
                <span>Security</span>
                <span>→</span>
              </Link>

              <Link
                to="/wishlist"
                className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
              >
                <span>Wishlist</span>
                <span>→</span>
              </Link>

              <Link
                to="/cart"
                className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
              >
                <span>Shopping Cart</span>
                <span>→</span>
              </Link>
            </div>

            <div className="my-5 h-px bg-gray-100" />

            {/* Logout */}
            <button
              type="button"
              onClick={() => setShowLogout(true)}
              className="w-full rounded-xl border border-red-100 px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50"
            >
              Log Out
            </button>
          </aside>
        </div>
      </section>

      {/* =====================================================
          EDIT PROFILE MODAL
      ====================================================== */}

      {editMode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm">

          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl">

            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-gray-100 p-6 sm:p-8">

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                  Account
                </p>

                <h2 className="mt-1 text-2xl font-black text-gray-900">
                  Edit Profile
                </h2>
              </div>

              <button
                type="button"
                onClick={handleCancelEdit}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-lg text-gray-500 transition hover:bg-black hover:text-white"
              >
                ×
              </button>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSaveProfile}
              className="p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">

                {/* First Name */}
                <div>
                  <label className="text-sm font-semibold text-gray-700">
                    First Name
                  </label>

                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-black"
                    placeholder="First name"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="text-sm font-semibold text-gray-700">
                    Last Name
                  </label>

                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-black"
                    placeholder="Last name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-sm font-semibold text-gray-700">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-black"
                    placeholder="Email address"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="text-sm font-semibold text-gray-700">
                    Phone
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-black"
                    placeholder="Phone number"
                  />
                </div>

                {/* Location */}
                <div className="sm:col-span-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Location
                  </label>

                  <input
                    type="text"
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-black"
                    placeholder="City, Country"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="rounded-xl border border-gray-200 px-6 py-3 text-sm font-bold text-gray-700 transition hover:bg-gray-100"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="rounded-xl bg-black px-7 py-3 text-sm font-bold text-white transition hover:bg-gray-800"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =====================================================
          LOGOUT MODAL
      ====================================================== */}

      {showLogout && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">

          <div className="w-full max-w-md rounded-3xl bg-white p-7 shadow-2xl">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-2xl text-red-500">
              !
            </div>

            <h2 className="mt-5 text-2xl font-black text-gray-900">
              Log out?
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Are you sure you want to log out of your account?
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-end">

              <button
                type="button"
                onClick={() => setShowLogout(false)}
                className="rounded-xl border border-gray-200 px-6 py-3 text-sm font-bold text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleLogout}
                className="rounded-xl bg-red-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-red-700"
              >
                Yes, Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Account;