import Link from "next/link";
import React from "react";

const VideoContainer = () => {
  return (
    <div className="mt-40 px-6  lg:px-20 bg-white">
      {/* Main Flex Container */}
        
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* LEFT: Text Section */}
        <div className="flex-1">
          <h1 className="font-bold text-4xl mb-4">A bit about yours truly.</h1>
          <p className="mt-6 text-md text-gray-700 leading-relaxed">
            Once upon a time, small businesses looking for quality, custom
            packaging had to place massive phone orders and plan for weeks of
            lead time. None of that sounded right to us. We started with
            digitally-printed coffee bags and grew into a packaging revolution,
            fueled by customer feedback and innovation.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-6">
            <Link href="/" passHref>
              <button className="flex items-center font-bold text-black border border-black px-7 py-4 rounded-2xl transition-all duration-300 ease-in-out hover:bg-[#8B2232] hover:text-white hover:-translate-y-1">
                Careers
              </button>
            </Link>

            <Link href="/" passHref>
              <button className="flex items-center font-bold bg-black text-white px-7 py-4 rounded-2xl transition-all duration-300 ease-in-out hover:bg-[#8B2232] hover:-translate-y-1">
                Our Story
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT: Video Section */}
        <div className="flex-1 w-full">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <video width="100%" height="100%" controls>
              <source src="/abc.mp4" type="video/mp4"></source>
            </video>
          </div>

          <p className="text-gray-600 mt-2 italic text-right pr-6">
            Look! A video to watch 👀
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
