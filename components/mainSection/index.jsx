import Image from "next/image";
import Link from "next/link";
import React from "react";

const MainSection = () => {
  return (
    <div>
      <div className=" relative bg-[#F4B233] pb-24">
        <div className="flex gap-10 p-10 items-center justify-items-center">
          <div
            className="absolute -bottom-1 left-0 w-full h-20 bg-white z-10"
            style={{ clipPath: "polygon(100% 0, 100% 101%, 0 101%)" }}
          ></div>
          <div className="relative">
            {/* Get the Deets! text */}
            <Image
              src="/down-small-arrow.c63f7e3b.svg"
              alt="arrow"
              height={20}
              width={50}
              className="absolute -right-35 -bottom-35 font-bold  rotate-12 z-40"
            />
            <span className="absolute -right-40 -bottom-16 font-bold text-lg text-black rotate-12 z-40 ">
              Pack it<br/> your way
            </span>
            <Image
              src="/filters_format(webp)_quality(95) (1).webp"
              alt="perk"
              width={800}
              height={700}
            />
          </div>
          <div className="flex flex-col items-start">
            <h1 className="font-bold text-6xl mb-6 font-weight-inherit tracking-tighter">
              Fast. Easy. Custom-printed <br /> packaging.
            </h1>
            <p className="mb-4 font-bold opacity-80">
              If you’re looking for product packaging that makes a big
              impression,
              <br /> you’re in the right place. Choose from a full line of
              custom products and <br /> types of bags, including stand up
              pouches, flat bottom bags, gusseted
              <br /> bags, tin cans, stickers, and more.
            </p>
            <div className="flex gap-4 mt-2">
              <Link href="/" passHref>
                <button className="flex items-center font-bold text-black px-4 py-4 border rounded-2xl transition-all duration-300 ease-in-out hover:bg-[#6a1826] hover:-translate-y-1">
                  Order Samples
                </button>
              </Link>
              <Link href="/" passHref>
                <button className="flex items-center font-bold bg-black text-white px-4 py-4 rounded-2xl transition-all duration-300 ease-in-out  hover:bg-[#8B2232] hover:-translate-y-1">
                  Browse Our Products
                </button>
              </Link>
            </div>
            <div className="text-">
              <p className="mt-6  font-weight-inherit opacity-90">
                Been around the block, already?{" "}
                <Link href="/">
                  <button className="cursor-pointer hover:underline transition-all duration-300 ease-in-out" >Log in Here</button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto px-4">
        <h1 className="font-bold text-4xl mt-20 tracking-tighter text-center ">
          Custom bags, tin cans, labels, and beyond.
        </h1>
        <h2 className="font-bold text-2xl mt-5 tracking-tighter text-center text-blue-500">The way custom-printed packaging was meant to be</h2>
        <p className="font-bold text-sm mt-5  text-center text-gray-700">
          Use your own art or have our network of designers help you bring your
          vision <br /> to life. Pick your perfect exterior, including
          materials, colors, finishes, and <br /> special effects. Did we
          mention the shockingly sensible order quantities?
        </p>
      </div>
    </div>
  );
};
export default MainSection;
