import Link from "next/link";
import React from "react";

const VideoContainer = () => {
  return (
    <div className="p-10 ">
      <div className="grid lg:grid-cols-2 lg:py-28 items-center  py-2 xl:py-10 justify-center gap-x-16">
        <div className="flex flex-col justify-end ">
          <h1 className="font-medium text-3xl md:text:4xl xl:text-5xl mb-4">
            A bit about yours truly.
          </h1>
          <p className="mt-2 text-md text-gray-700 leading-relaxed">
            Once upon a time, small businesses looking for quality, custom
            packaging had to place massive phone orders and plan for weeks of
            lead time. None of that sounded right to us. We started with
            digitally-printed coffee bags and grew into a packaging revolution,
            fueled by customer feedback and innovation.
          </p>

          {/* BUTTONS */}
          <div className="lg:block hidden">
          <div className="flex gap-2 mt-3  ">
            <Link href="/" passHref>
              <button className="flex items-center font-bold text-black border border-black px-7 py-4 rounded-xl transition-all duration-300 ease-in-out hover:bg-[#8B2232] hover:text-white hover:-translate-y-1">
                Careers
              </button>
            </Link>

            <Link href="/" passHref>
              <button className="flex items-center font-bold bg-black text-white px-7 py-4 rounded-xl transition-all duration-300 ease-in-out hover:bg-[#8B2232] hover:-translate-y-1">
                Our Story
              </button>
            </Link>
          </div>
          </div>
        </div>

        {/* RIGHT: Video Section */}
        <div className="lg:col-start-2 flex w-full items-center justify-center lg:row-span-2 lg:row-start-1">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <video width="100%" height="100%" controls>
              <source src="/abc.mp4" type="video/mp4"></source>
            </video>
          </div>
        </div>
      </div>
      {/* only for below lg */}
       <div className="flex w-full lg:hidden mb-10 ">

         <div className="flex gap-2   md:flex-row  flex-col-reverse w-full  items-start ">
            <Link href="/" passHref className="w-full ">
              <button className="flex items-center justify-center font-bold w-full  text-black border border-black px-7 py-4 rounded-xl transition-all duration-300 ease-in-out hover:bg-[#8B2232] hover:text-white hover:-translate-y-1">
                Careers
              </button>
            </Link>

            <Link href="/" passHref className="w-full ">
              <button className="flex items-center  justify-center font-bold w-full bg-black text-white px-7 py-4 rounded-xl transition-all duration-300 ease-in-out hover:bg-[#8B2232] hover:-translate-y-1">
                Our Story
              </button>
            </Link>
          </div>
          </div>

    
    </div>
  );
};

export default VideoContainer;
