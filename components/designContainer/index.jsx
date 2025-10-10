import Image from "next/image";
import Link from "next/link";
import React from "react";

const DesignContainer = () => {
  const images = [
    "/filters_format(webp)_3.webp",
    "/filters_format(webp)_2.webp",
    "/filters_format(webp)_4.webp",
    "/filters_format(webp)_5.webp",
  ];
  return (
    <section className="py-16 px-4 md:px-12 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="grid grid-cols-2 grid-rows-2 gap-6 flex-1 max-w-lg">
          {images.map((src, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow-lg bg-white"
            >
              <Image
                src={src}
                alt={`Inspiration ${i + 1}`}
                width={260}
                height={200}
                className="object-cover w-full h-[200px]"
              />
            </div>
          ))}
        </div>

        <div className="flex-1 max-w-xl flex flex-col items-start">
          <h2 className="font-bold text-4xl mb-4">Get inspired.</h2>
          <p className="mb-8 text-lg text-gray-700">
            No matter your industry, looking great pays dividends. Start your
            custom-packaging journey – or browse brands that trusted us with
            theirs.
          </p>
          <div className="flex gap-4 mb-8">
            <button className="border border-black rounded-xl px-6 py-3 font-semibold text-lg bg-white  hover:bg-[#6a1826] hover:text-amber-50 transition-all duration-300 ease-in-out hover:-translate-y-1">
              Find a Designer
            </button>
            <button className="rounded-xl px-6 py-3 font-semibold text-lg bg-black text-white  hover:bg-[#6a1826]  transition-all duration-300 ease-in-out hover:-translate-y-1">
              Get a Quote
            </button>
          </div>
          <div className="relative">
            <Image
              src="/left-loop-arrow.e2911df0.svg"
              alt="arrow"
              height={60}
              width={80}
              className=""
            />
            <span className="absolute -right-40 -bottom-16 font-bold text-lg text-black rotate-12 z-40 ">
              your network<br/>here!
              
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignContainer;
