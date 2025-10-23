import Link from "next/link";
import React from "react";

const IndustryMenu = () => {
  return (
    <div
      className=" sticky  z-50  left-0 top-full mt-2 bg-white shadow-xl rounded-lg p-8 w-[300px] grid  gap-10
      opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
    >
      <div className="col-span-2">
        <ul className="flex flex-col gap-4">
          <Link href="/coffee">
            <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
              Coffee
            </li>
          </Link>
          <Link href="/chocolate">
            <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
              Chocolate
            </li>
          </Link>
          <Link href="/candy">
            <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
              Candy
            </li>
          </Link>
          <Link href="/food snacks">
            <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
              Food & Snacks
            </li>
          </Link>
          <Link href="/tea">
            <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
              Tea
            </li>
          </Link>
          <Link href="/pet food">
            <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
              Pet Food & Treats
            </li>
          </Link>
          <Link href="/child resistant">
            <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
              Child-Resistant
            </li>
          </Link>
          <Link href="/health and beauty">
          <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
            Health & Beauty Products
          </li>
          </Link>
          <Link href="/soap">
          <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
            Soap & Detergent
          </li>
          </Link>
          <Link href="/spices">
          <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
            Spices & Seasonings
          </li>
          </Link>
          <Link href="/vitamin">
          <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
            Vitamin & Supplements
          </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default IndustryMenu;
