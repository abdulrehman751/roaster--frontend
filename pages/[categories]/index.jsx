import CoffeeBags from "@/components/coffeeBags";
import CoffeeBar from "@/components/coffeeBar";
import CoffeeReviews from "@/components/coffeeReviews";
import FooterComponent from "@/components/common/footer";
import Header from "@/components/common/header";
import TopNavBar from "@/components/common/topNavBar";
import PackageOptions from "@/components/packagingOptions";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const CoffeePackaging = () => {
  

  return (
    
    <div>
      <TopNavBar />
      <Header />
      <div className="relative bg-[#F4B233] pb-24 p-4  coffee_clip_path ">
        <div className="flex g-10  xl:p-10  items-center justify-center mb-5">
          {/* main container */}

          <div className=" flex flex-col-reverse mt-6 lg:flex-row items-center justify-center  gap-4  md:mx-auto  ">
            <img
              className=" w-[600] xl:w-[1000] object-contain"
              src="/filters_format(webp)_tinpack.webp"
              alt="perk"
            />
            <div className="pl-12 flex flex-col  pt-2 pr-5 ">
              {/* Heading & Paragraph */}
              <div className="flex flex-col gap-5 items-start">
                <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 tracking-tighter">
                  Coffee packaging that doesn’t feel like a grind.
                </h1>
                <div>
                  <p className="text-base md:text-lg lg:text-xl xl:text-md font-normal tracking-tight text-gray-800">
                    Some of the best coffee we’ve ever had came from roasters
                    that only made a few hundred bags at a time. We thought they
                    deserved an easy, affordable path to custom coffee bags that
                    look as polished as their multinational rivals (or even more
                    so). Welcome to that path.
                  </p>
                </div>
              </div>

              {/* Buttons — Only visible on lg and above */}
              <div className=" flex-col w-full lg:block hidden items-center gap-5 xl:gap-6 mt-6 ">
                <div className=" flex  flex-col sm:flex-row gap-3    mt-4   ">
                  <Link href="/" passHref className="w-full sm:w-auto">
                    <button className="flex justify-center items-center font-bold bg-black text-white xl:text-lg lg:px-6 lg:py-8 xl:px-7 xl:py-5 w-full sm:w-auto rounded-xl transition-all duration-300 ease-in-out hover:bg-[#8B2232] hover:-translate-y-1">
                      Not sure where to start?Take our quiz
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="">
              <div className="font-serif absolute left-[15%] bottom-4  sm:left-[15%] sm:bottom-[5%] xl:left-auto xl:right-[30%] xl:bottom-20 font-bold  text-sm sm:text-lg md:text-lg xl:text-xl text-black rotate-12 z-40">
                They are smell heavenly!
              </div>

              <Image
                src="/down-large-arrow.svg"
                alt="arrow"
                height={60}
                width={60}
                className="absolute left-[15%] -bottom-8  sm:left-[15%] sm:-bottom-2 xl:left-auto xl:right-[42%] xl:bottom-8 font-bold rotate-12 z-40"
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
                Not sure where to start?Take our quiz
              </button>
            </Link>
          </div>
        </div>
      </div>

    <PackageOptions/>
    <CoffeeBags />
    <CoffeeReviews/>
    <CoffeeBar />












 <FooterComponent />

    </div>
  );
};

export default CoffeePackaging;
