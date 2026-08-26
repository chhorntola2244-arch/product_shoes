
import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-blue-500 from-blue-700 to-blue-500 px-6 py-20 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          Contact Us
        </h1>

        <p className="text-lg text-blue-100">
          Have a question? We would love to hear from you.
        </p>
      </section>

      {/* Contact */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-16 md:grid-cols-2">
        {/* Contact Information */}
        <div className="rounded-2xl bg-white p-8 shadow-md">
          <h2 className="mb-4 text-3xl font-bold text-blue-700">
            Get In Touch
          </h2>

          <p className="mb-8 leading-7 text-gray-600">
            If you have any questions about our products or your order,
            feel free to contact us.
          </p>

          {/* Address */}
          <div className="mb-6 flex gap-4">
            <div className="text-2xl">📍</div>
            <div>
              <h3 className="font-bold text-gray-800">Address</h3>
              <p className="text-gray-500">Phnom Penh, Cambodia</p>
            </div>
          </div>

          {/* Phone */}
          <div className="mb-6 flex gap-4">
            <div className="text-2xl">📞</div>
            <div>
              <h3 className="font-bold text-gray-800">Phone</h3>
              <p className="text-gray-500">+855 12 345 678</p>
            </div>
          </div>

          {/* Email */}
          <div className="mb-6 flex gap-4">
            <div className="text-2xl">✉️</div>
            <div>
              <h3 className="font-bold text-gray-800">Email</h3>
              <p className="text-gray-500">support@shopnow.com</p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex gap-4">
            <div className="text-2xl">🕐</div>
            <div>
              <h3 className="font-bold text-gray-800">Opening Hours</h3>
              <p className="text-gray-500">
                Monday - Sunday: 8:00 AM - 8:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="rounded-2xl bg-white p-8 shadow-md">
          <h2 className="mb-6 text-3xl font-bold text-blue-700">
            Send Us a Message
          </h2>

          <form>
            <div className="mb-5">
              <label className="mb-2 block font-semibold text-gray-700">
                Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="mb-5">
              <label className="mb-2 block font-semibold text-gray-700">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="mb-5">
              <label className="mb-2 block font-semibold text-gray-700">
                Subject
              </label>

              <input
                type="text"
                placeholder="Enter subject"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="mb-6">
              <label className="mb-2 block font-semibold text-gray-700">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-700 py-3 font-semibold text-white transition hover:bg-blue-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;