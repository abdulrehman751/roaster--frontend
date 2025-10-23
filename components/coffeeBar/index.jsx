import React from "react";
import Image from "next/image";

const CoffeeBar = () => {
  return (
    <section className="py-16 px-4 md:px-12">
      {/* CTA Banner */}
      <div className="  mt-15 px-4">
        <div className="bg-[#00856C] rounded-2xl flex flex-col items-center justify-center text-center gap-6 px-10 py-15 relative overflow-hidden  w-full">
          {/* Left Dashed Line */}
          <img
            src="/dashed-line-left.svg"
            alt="Dashed line left"
            className="absolute left-10 top-1/2 -translate-y-1/2 w-40 "
          />

          {/* Center Content */}
          <div className="flex  items-center justify-center gap-30 z-10">
            <h2 className="text-white font-bold text-5xl">
              Ready to get started?
            </h2>
            <p className="text-white text-lg">
              Let’s make some awesome packaging together.
            </p>
            <a
              href="/get-quote"
              className="border underline border-white text-white font-semibold rounded-xl px-8 py-5 hover:bg-white hover:text-[#00856C] transition"
            >
              Get a Quote
            </a>
          </div>

          {/* Right Dashed Line */}
          <img
            src="/dashed-line-right.svg"
            alt="Dashed line right"
            className="absolute right-10 top-1/2 -translate-y-1/2 w-40"
          />
        </div>
      </div>
    </section>
  );
};

export default CoffeeBar;
