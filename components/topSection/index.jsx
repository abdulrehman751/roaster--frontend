import Image from "next/image";
import Link from "next/link";
import React from "react";

const TopSection = () => {
  return (
    <div>
      <div className="relative bg-sky-100 pb-24 p-4">
        <div className="flex g-10  xl:p-10  items-center justify-center mb-5">
          {/* clip path */}
          <div
            className="absolute -bottom-1 left-0 w-full h-20 bg-white z-10 hidden sm:block"
            style={{ clipPath: "polygon(100% 0, 100% 101%, 0 101%)" }}
          ></div>
          <div className="absolute -bottom-1 left-0 h-20 bg-white z-10 block sm:hidden"></div>

          {/* main container */}

          <div className=" flex flex-col-reverse mt-6 lg:flex-row items-center justify-center  gap-4  md:mx-auto  ">
            <img className=" w-[600] xl:w-[1000]" src="/filters_format(webp)_7.webp" alt="perk" />
            <div className="pl-12 flex flex-col  pt-2 pr-5 ">
              {/* Heading & Paragraph */}
              <div className="flex flex-col    ">
                <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 ">
                  Fast. Easy. Custom-printed packaging.
                </h1>
                <div>
                  <p className="text-base md:text-lg lg:text-xl xl:text-md font-normal tracking-tight text-gray-800">
                    If you’re looking for product packaging that makes a big
                    impression, you’re in the right place. Choose from a full
                    line of custom products and types of bags, including stand
                    up pouches, flat bottom bags, gusseted bags, tin cans,
                    stickers, and more.
                  </p>
                </div>
              </div>

              {/* Buttons — Only visible on lg and above */}
              <div className=" flex-col w-full lg:block hidden items-center gap-5 xl:gap-6 mt-6  ">
                <div className=" flex  flex-col sm:flex-row gap-3    mt-4   ">
                  <Link href="/" passHref className="w-full sm:w-auto">
                    <button className="flex justify-center items-center font-bold bg-black text-white xl:text-lg lg:px-6 lg:py-8 xl:px-7 xl:py-5 w-full sm:w-auto rounded-xl transition-all duration-300 ease-in-out hover:bg-[#8B2232] hover:-translate-y-1">
                      Browse Our Products
                    </button>
                  </Link>

                  <Link href="/" passHref className="w-full sm:w-auto">
                    <button className="flex justify-center items-center font-bold text-black  xl:text-lg border lg:px-6 lg:py-8 xl:px-7 xl:py-4 w-full sm:w-auto rounded-xl transition-all duration-300 ease-in-out hover:bg-[#6a1826] hover:text-white hover:-translate-y-1">
                      Order Samples
                    </button>
                  </Link>
                </div>
                <p className=" text-sm  text-gray-700 mt-4  sm:text-base opacity-90">
                  Been around the block, already?{" "}
                  <Link href="/">
                    <button className="cursor-pointer hover:underline text-black font-semibold transition-all duration-300 ease-in-out">
                      Log in Here
                    </button>
                  </Link>
                </p>
              </div>
            </div>

            <div>
              <div className="absolute left-[15%] bottom-4  sm:left-[15%] sm:bottom-[5%] xl:left-auto xl:right-[40%] xl:bottom-20 font-bold  text-sm sm:text-lg md:text-lg xl:text-xl text-black rotate-12 z-40">
                Pack it
                <br /> your way
              </div>

              <Image
                src="/down-small-arrow.c63f7e3b.svg"
                alt="arrow"
                height={40}
                width={40}
                className="absolute left-[15%] -bottom-8  sm:left-[15%] sm:-bottom-2 xl:left-auto xl:right-[41%] xl:bottom-5 font-bold rotate-12 z-40"
              />
            </div>
          </div>
        </div>


        {/* Buttons — Only visible below lg  */}

        <div className="sm:flex  flex-col w-full sm:w-[500px] lg:hidden mb-10 items-center justify-center  ">
          {/* Buttons Section */}
          <div className="flex mt-6 flex-col-reverse flex-wrap gap-x-2 md:mt-0 md:flex-row md:flex-nowrap sm:flex-row gap-3 sm:gap-3  w-full  items-center justify-center">
            <Link href="/" passHref className="w-full sm:w-auto">
              <button className="flex justify-center items-center font-bold bg-black xl:text-2xl text-white xl:px-6 xl:py-3 px-4 py-4 w-full sm:w-auto rounded-xl transition-all duration-300 ease-in-out hover:bg-[#8B2232] hover:-translate-y-1">
                Browse Our Products
              </button>
            </Link>

            <Link href="/" passHref className="w-full sm:w-auto">
              <button className="flex justify-center items-center  xl:text-2xl font-bold text-black  xl:px-6 xl:py-3 px-4 py-4 border w-full sm:w-auto rounded-xl transition-all duration-300 ease-in-out hover:bg-[#6a1826] hover:text-white hover:-translate-y-1">
                Order Samples
              </button>
            </Link>
          </div>

          <p className="mt-6 text-sm sm:text-base opacity-90 text-center">
            Been around the block, already?{" "}
            <Link href="/">
              <button className="cursor-pointer hover:underline text-black transition-all duration-300 ease-in-out">
                Log in Here
              </button>
            </Link>
          </p>
        </div>
      </div>
      <div className="mx-auto px-3 my-10 xl:mt-12 w-[950px]">
        <h1 className="font-bold xl:text-5xl md:text-3xl text-3xl    tracking-tighter text-center ">
          Custom bags, tin cans, labels, and beyond.
        </h1>
        <h2 className="font-bold xl:text-3xl mt-7 uppercase tracking-tighter text-center text-blue-500">
          The way custom-printed packaging was meant to be
        </h2>
        
        <p className=" font-bold text-sm xl:text-xl mt-5 sm:tracking-tighter  text-center text-gray-700">
          Use your own art or have our network of designers help you bring your
          vision to life.Pick your perfect exterior,including materials, colors,{" "}
          finishes, and special effects. Did we mention the shockingly sensible
          order quantities?
        </p>
        
      </div>
    </div>
  );
};
export default TopSection;
