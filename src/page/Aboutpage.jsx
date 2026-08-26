
import React from "react";
import { FaCarSide } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const Aboutpage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-blue-500 from-blue-700 to-blue-500 px-6 py-20 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          About ShopNow
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-blue-100">
          Your trusted online shopping destination for quality products
          at affordable prices.
        </p>
      </section>

      {/* About */}
      <section className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-16 md:flex-row">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
            alt="ShopNow Store"
            className="h-350px w-full rounded-2xl object-cover shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2">
          <h2 className="mb-5 text-3xl font-bold text-blue-700">
            Welcome to ShopNow
          </h2>

          <p className="mb-4 leading-7 text-gray-600">
            ShopNow is an online shopping website designed to make shopping
            simple, fast, and convenient.
          </p>

          <p className="mb-6 leading-7 text-gray-600">
            We provide a variety of quality products at affordable prices.
            Our goal is to give customers a great shopping experience.
          </p>

          <button className="rounded-lg bg-blue-700 px-7 py-3 font-semibold text-white transition hover:bg-blue-800">
            Shop Now
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 pb-16 md:grid-cols-3">
        <div className="rounded-xl bg-white p-8 text-center shadow-md">
          
          <h3 className="mb-2 text-xl font-bold">Fast Delivery</h3>
          <p className="leading-6 text-gray-500">
            We deliver your products quickly and safely.
          </p>
        </div>

        <div className="rounded-xl bg-white p-8 text-center shadow-md">
          
          <h3 className="mb-2 text-xl font-bold">Quality Products</h3>
          <p className="leading-6 text-gray-500">
            We provide quality products you can trust.
          </p>
        </div>

        <div className="rounded-xl bg-white p-8 text-center shadow-md">
          <h3 className="mb-2 text-xl font-bold">Best Prices</h3>
          <p className="leading-6 text-gray-500">
            Get great products at affordable prices.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Aboutpage;
