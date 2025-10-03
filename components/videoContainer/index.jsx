import Link from "next/link";
import React from "react";

const VideoContainer = () => {
  return (
    <div className="mt-40 px-4">
      <div>
        <h1 className="font-bold text-4xl">A bit about yours truly.</h1>
        <p className="mt-6 text-md ">
          Once upon a time, small businesses looking for quality, custom
          packaging had to place massive <br /> phone orders and plan for weeks
          of lead time. None of that sounded right to us. We started with
          <br />
          digitally-printed coffee bags and grew into a packaging revolution,
          fueled by customer feedback <br /> and innovation.
        </p>
        <div className="flex gap-4 mt-2">
          <Link href="/" passHref>
            <button className="flex items-center font-bold text-black px-7 py-4  border rounded-2xl transition-all duration-300 ease-in-out hover:bg-[#6a1826] hover:-translate-y-1">
              Careers
            </button>
          </Link>
          <Link href="/" passHref>
            <button className="flex items-center font-bold bg-black text-white px-7 py-4 rounded-2xl transition-all duration-300 ease-in-out  hover:bg-[#8B2232] hover:-translate-y-1">
             Our Story
            </button>
          </Link>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default VideoContainer;
