import Image from "next/image";
import Link from "next/link";
import React from "react";

const LowerHeader = () => {
  return (
    <div className="flex items-center justify-center  gap-6 px-20 py-8  bg-white shadow">
      
        <div>
          <Image
            src="/roastar_logo.60c5f50c (1).svg"
            alt="roaster"
            width={200}
            height={80}
          />
        </div>
        <div className="flex gap-6 text-lg font-semibold text-gray-700">
          <span className="cursor-pointer hover:text-primary">
            Shop by Product
          </span>
          <span className="cursor-pointer hover:text-primary">
            Shop by Industry
          </span>
          <span className="cursor-pointer hover:text-primary">Resources</span>
          <span className="cursor-pointer hover:text-primary">About</span>
          <span className="flex items-center gap-1 text-xl font-bold text-green-700 group-hover:text-green-900">
            Deals
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-green-600"
            >
              <path
                d="M11 2v2m0 14v2m8-8h-2M5 11H3m12.07-6.07l-1.41 1.41M6.34 17.66l-1.41-1.41m12.02 0l-1.41-1.41M6.34 4.34l-1.41 1.41"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle
                cx="11"
                cy="11"
                r="3"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </span>
        </div>
        <div id="design-price-div" className="px-4 flex flex-1 justify-end">
            <div className="mt-6 flex flex-col-reverse flex-wrap gap-x-10">
              <Link
                href="/design-and-price"
                className="btn-primary inline-flex items-center gap-2 text-white border-r-8 border-l-8 bg-black hover:bg-[#8B2232] rounded-2xl font-semibold  px-4 py-4  transition-all duration-300 ease-in-out  hover:-translate-y-1"
              >
                <span className="icon icon-fill-current text-[20px]">
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className="w-5 h-5">
                    <path d="M36.4 360.9L13.4 439 1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1L73 498.6l78.1-23c10.4-3 20.1-8 28.6-14.5l.3 .2 .5-.8c1.4-1.1 2.7-2.2 4-3.3c1.4-1.2 2.7-2.5 4-3.8L492.7 149.3c21.9-21.9 24.6-55.6 8.2-80.5c-2.3-3.5-5.1-6.9-8.2-10L453.3 19.3c-25-25-65.5-25-90.5 0L58.6 323.5c-2.5 2.5-4.9 5.2-7.1 8l-.8 .5 .2 .3c-6.5 8.5-11.4 18.2-14.5 28.6zM383 191L197.4 376.6l-49.6-12.4-12.4-49.6L321 129 383 191zM97 358.9l7.7 31c2.1 8.6 8.9 15.3 17.5 17.5l31 7.7-7.4 11.2c-2.6 1.4-5.3 2.6-8.1 3.4l-23.4 6.9L59.4 452.6l16.1-54.8 6.9-23.4c.8-2.8 2-5.6 3.4-8.1L97 358.9zM315.3 218.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-96 96c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l96-96z" fill="currentColor" />
                  </svg>
                </span>
                Design & Price
              </Link>
            </div>
          </div>
    </div>
  );
};

export default LowerHeader;
 