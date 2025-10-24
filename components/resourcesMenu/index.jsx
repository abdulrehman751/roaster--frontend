import Link from "next/link";
import React from "react";

const ResourcesMenu = () => {
  return (
    <div
      className=" sticky  z-50  left-0 top-full mt-2 bg-white shadow-xl rounded-lg p-8 w-[800px] grid grid-cols-3 gap-10
      opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
    >
      <div>
        <Link href="/design resources">
        <h4 className="font-bold text-lg text-black">Design Resources</h4></Link>
        <ul className="text-black-400 space-y-1 mt-2">
          <Link href="/roaster lab">
          <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
            Roastar Design Lab
          </li>
          </Link>
          <Link href="/design network">
          <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
            Designer Network
          </li>
          </Link>
          <Link href="/tempelates">
          <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
            Templates & Guides
          </li>
          </Link>
        </ul>
      </div>
      {/* column 2 */}
      <div>
        <Link href="/product resources">
        <h4 className="font-bold text-black">Product Resources</h4>
        </Link>
        <ul className="text-black-400 space-y-1 mt-2">
          <Link href="/product finder">
          <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
            Product Finder
          </li>
          </Link>
          <Link href="/material guide">
          <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
            Material Guide
          </li>
          </Link>
          <Link href="/features">
          <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
            Features & Accessories
          </li>
          </Link>
          <Link href="/order samples">
          <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
            Order Samples
          </li>
          </Link>
        </ul>
      </div>
      {/* column 3 */}
      <div>
        <Link href="/general resources">
        <h4 className="font-bold text-black">General Resources</h4>
        </Link>
        <ul className="text-black-400 space-y-1 mt-2">
          <Link href="/works">
          <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
            How It Works
          </li>
          </Link>
          <Link href="/blog">
          <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
            Blog
          </li>
          </Link>
          <Link href="/Faqs">
          <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
            FAQs
          </li>
          </Link>
          <Link href="/current lead times">
          <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
            Current Lead Times
          </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default ResourcesMenu;
