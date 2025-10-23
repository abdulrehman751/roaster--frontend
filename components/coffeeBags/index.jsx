import React from "react";
import Image from "next/image";
import Link from "next/link";

const CoffeeBags = () => {
  const images = [
    "/filters_format(webp)_cups.webp",
    "/filters_format(webp)_4.webp",
    "/filters_format(webp)_2.webp",
    "/filters_format(webp)_3.webp",
  ];
  return (
    <section className="py-5 mt-30 px-2 md:px-12 bg-[#E1F3F8]  clip_path">
      <div className=" mt-30 mb-30 flex lg:flex-row flex-col-reverse gap-3 lg:gap-6 max-w-7xl mx-auto items-center justify-between">
        {/* ==== Image Grid ==== */}
        <div className="grid grid-cols-2 grid-rows-2 justify-center items-center gap-2 pb-10 flex-1 max-w-[450px] mx-auto ">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative w-[200px] h-[200px]  rounded-lg shadow-sm bg-white mx-auto"
            >
              <Image
                src={src}
                alt={`Inspiration ${i + 1}`}
                fill
                className="object-cover"
                sizes="300px"
              />
            </div>
          ))}
        </div>

        {/* ==== Text Section ==== */}
        <div className="flex-1 max-w-lg flex flex-col items-start lg:w-[50%]    ">
          <h2 className="font-bold text-4xl mb-4">Some not-so-average joes.</h2>
          <p className="mb-8 text-lg text-black">
            Witness the intersection of our flexible range of custom-printed
            coffee bags, the gorgeous work of skilled designers, and lovingly
            crafted coffee (we wish you could smell it, too).
          </p>

          {/* Desktop buttons */}
          <div className="mb-8 lg:block hidden">
            <div className="flex gap-2">
              <button className="border border-black rounded-xl px-6 py-3 font-semibold text-lg bg-white hover:bg-[#6a1826] hover:text-amber-50 transition-all duration-300 ease-in-out hover:-translate-y-1">
                Find a Designer
              </button>
              <button className="rounded-xl px-6 py-3 font-semibold text-lg bg-black text-white hover:bg-[#6a1826] transition-all duration-300 ease-in-out hover:-translate-y-1">
                Show Me More
              </button>
            </div>
          </div>
          <div>
            {/* Handwritten text + arrow */}
            <p className="font-serif absolute left-[40%] -bottom-[18%] lg:left-[60%] lg:bottom-[5%] font-bold text-lg text-black rotate-12 z-40">
              your network here!
            </p>
            <Image
              src="/left-loop-arrow.e2911df0.svg"
              alt="arrow"
              height={60}
              width={80}
              className="absolute left-[40%] -bottom-[8%] lg:left-[52%] lg:bottom-[6%] rotate-12 z-30"
            />
          </div>
        </div>
      </div>

      {/* ==== Mobile Buttons ==== */}
      <div className="flex w-full mt-40 lg:hidden mb-10">
        <div className="flex gap-2 md:flex-row flex-col-reverse w-full items-start">
          <Link href="/" passHref className="w-full">
            <button className="flex items-center justify-center font-bold w-full text-black border border-black px-7 py-4 rounded-xl transition-all duration-300 ease-in-out hover:bg-[#8B2232] hover:text-white hover:-translate-y-1">
              Find a Designer
            </button>
          </Link>

          <Link href="/" passHref className="w-full">
            <button className="flex items-center justify-center font-bold w-full bg-black text-white px-7 py-4 rounded-xl transition-all duration-300 ease-in-out hover:bg-[#8B2232] hover:-translate-y-1">
              Get a Quote
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoffeeBags;
