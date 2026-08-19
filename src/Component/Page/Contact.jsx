import React from "react";

const contactInfo = [
  {
    icon: "✉",
    title: "Email Us",
    value: "support@yourstore.com",
    description: "We usually reply within 24 hours.",
  },
  {
    icon: "☎",
    title: "Call Us",
    value: "+91 98765 43210",
    description: "Mon – Sat, 10:00 AM – 7:00 PM",
  },
  {
    icon: "⌖",
    title: "Visit Us",
    value: "Mumbai, Maharashtra",
    description: "Our support team is always happy to help.",
  },
];

function ContactCard({ icon, title, value, description }) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-xl text-white transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>

      <h3 className="mt-5 text-lg font-bold text-gray-900">{title}</h3>

      <p className="mt-1 font-medium text-gray-800">{value}</p>

      <p className="mt-2 text-sm leading-6 text-gray-500">{description}</p>
    </div>
  );
}

function Contact() {
  return (
    <main className="min-h-screen bg-[#fafafa] px-4 py-14 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Get In Touch
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-tight text-gray-950 sm:text-5xl">
            Let&apos;s Start a Conversation
          </h1>

          <p className="mt-5 text-base leading-7 text-gray-500 sm:text-lg">
            Have a question about your order, our products, or anything else?
            We&apos;re here to help.
          </p>
        </div>

        {/* Contact Info */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {contactInfo.map((item) => (
            <ContactCard key={item.title} {...item} />
          ))}
        </div>

        {/* Main Contact Area */}
        <div className="mt-8 grid overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left Content */}
          <div className="bg-black p-8 text-white sm:p-10 lg:p-12">
            <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gray-300">
              Customer Support
            </span>

            <h2 className="mt-8 text-3xl font-bold leading-tight sm:text-4xl">
              We&apos;d love to hear from you.
            </h2>

            <p className="mt-5 max-w-md leading-7 text-gray-400">
              Whether you need help with an order or simply want to share
              feedback, send us a message and our team will get back to you.
            </p>

            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="text-sm text-gray-500">Response time</p>

              <p className="mt-2 text-lg font-semibold">
                Usually within 24 hours
              </p>
            </div>
          </div>

          {/* Form */}
          <form className="p-8 sm:p-10 lg:p-12">
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-black focus:bg-white focus:ring-2 focus:ring-black/5"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-black focus:bg-white focus:ring-2 focus:ring-black/5"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="mt-6">
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-semibold text-gray-800"
              >
                Subject
              </label>

              <select
                id="subject"
                defaultValue=""
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-600 outline-none transition focus:border-black focus:bg-white focus:ring-2 focus:ring-black/5"
              >
                <option value="" disabled>
                  Select a topic
                </option>
                <option>Order Support</option>
                <option>Product Question</option>
                <option>Returns & Refunds</option>
                <option>General Inquiry</option>
              </select>
            </div>

            {/* Message */}
            <div className="mt-6">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-gray-800"
              >
                Message
              </label>

              <textarea
                id="message"
                rows="6"
                placeholder="Tell us how we can help..."
                className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-black focus:bg-white focus:ring-2 focus:ring-black/5"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-6 w-full rounded-xl bg-black px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-gray-800 active:scale-[0.99]"
            >
              Send Message →
            </button>

            <p className="mt-4 text-center text-xs text-gray-400">
              We respect your privacy and never share your information.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;