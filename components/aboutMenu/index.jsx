import Link from "next/link";
import React from "react";

const AboutMenu = () => {
  return (
    <div>
      <div
        className=" sticky  z-50  left-0 top-full mt-2 bg-white shadow-md rounded-lg p-8 w-[175px] grid grid-cols-1 gap-10
      opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
      >
        <ul className="felx felx-col gap-4">
          <Link href="/our story">
            <li className="hover:text-[#6A1826] text-md cursor-pointer hover:underline">
              Our Story
            </li>
          </Link>
          <Link href="/sustainability">
          <li className="hover:text-[#6A1826] text-md cursor-pointer hover:underline">
            Sustainability
          </li>
          </Link>
          <Link href="/careers">
          <li className="hover:text-[#6A1826] text-md cursor-pointer hover:underline">
            Careers
          </li>
          </Link>
          <Link href="/contact us">
          <li className="hover:text-[#6A1826] text-md cursor-pointer hover:underline">
            Contact Us
          </li>
          </Link>
      <Link href="/reviews">
          <li className="hover:text-[#6A1826] text-md cursor-pointer hover:underline">
            Reviews
          </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default AboutMenu;
