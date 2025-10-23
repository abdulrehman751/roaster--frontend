"use client";
import React, { useState } from "react";
import { Star } from "lucide-react";

const CoffeeReviews = () => {
  const reviews = [
    {
      title: "Better than expected and fast shipping!",
      content:
        "The tin is a gift for my daughter and son-in-law's anniversary. It's exactly as expected and really cute! I'm sure they’ll love it.",
      author: "Michael Foley",
      date: "September 20",
    },
    {
      title: "Amazing quality and support!",
      content:
        "Absolutely loved the packaging. Customer support helped me finalize my design perfectly.",
      author: "Jessica H.",
      date: "August 14",
    },
    {
      title: "Excellent service!",
      content:
        "I got my custom bags earlier than expected. Great quality and very smooth process.",
      author: "John P.",
      date: "July 30",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextReview = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-20 px-6 md:px-12 clip_path mx-auto ">
      <div className="w-full mx-auto flex flex-col  md:flex-row justify-between items-center gap-10 p-15 ">
        {/* Left Text */}
        <div className="w-[400px] flex-1">
          <h2 className="text-5xl font-bold mb-4">
            We like our feedback like we like our coffee.
          </h2>
          <p className="text:md xl:text-lg text-gray-700 mb-4">
            Meaning fresh, strong, and direct from small businesses. We love
            hearing about our clients’ experiences – especially about how we can
            make the packaging process even smoother. That last part is kind of
            why we exist.
          </p>
        </div>

        {/* Right Review Card */}
        <div className="flex-1 bg-white rounded-2xl shadow-lg px-40  p-15 ">
          {/* Trustpilot Header */}
          <div className="flex items-center justify-center mb-4">
            <div>
              <h3 className=" font-bold text-lg flex items-center gap-1">
                ★ Trustpilot
              </h3>
              <div className="flex gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className=" bg-[#00856C]" />
                ))}
              </div>
              <p className="text-gray-500 text-sm mt-1">
                TrustScore 4.9 |{" "}
                <a href="#" className="underline">
                  317 reviews
                </a>
              </p>
            </div>
          </div>

          {/* Review Content */}
          <div className="flex flex-col mr-50">
            <p className="text-sm text-gray-500 mb-2">
              Showing our 5 star reviews
            </p>
            <h4 className="font-semibold text-lg mb-2">
              {reviews[current].title}
            </h4>
            <p className="text-gray-700 mb-4">{reviews[current].content}</p>
            <p className="text-sm text-gray-500">
              {reviews[current].author}, {reviews[current].date}
            </p>
          </div>
          {/* Navigation Arrows */}
          <div className="absolute">
            <button
              onClick={prevReview}
              className="relative right-20 top-[20%] -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow hover:bg-gray-200"
            >
              ←
            </button>
            <button
              onClick={nextReview}
              className="relative left-100 top-1/2 -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow hover:bg-gray-200"
            >
              →
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-4 gap-2">
            {reviews.map((_, i) => (
              <span
                key={i}
                className={`w-2.5 h-2.5 rounded-full ${
                  i === current ? "bg-gray-800" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoffeeReviews;
