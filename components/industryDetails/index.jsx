import React from "react";

const IndustryMenu = () => {
  return (
    <div  className=" sticky  z-50  left-0 top-full mt-2 bg-white shadow-xl rounded-lg p-8 w-[300px] grid  gap-10
      opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
      <div className="col-span-2">
        <ul className="flex flex-col gap-4">
          <li className="hover:text-[#6A1826] cursor-pointer hover:underline">Coffee</li>
          <li className="hover:text-[#6A1826] cursor-pointer hover:underline">Chocolate</li>
          <li className="hover:text-[#6A1826] cursor-pointer hover:underline">Candy</li>
          <li className="hover:text-[#6A1826] cursor-pointer hover:underline">Food & Snacks</li>
          <li className="hover:text-[#6A1826] cursor-pointer hover:underline">Tea</li>
          <li className="hover:text-[#6A1826] cursor-pointer hover:underline">Pet Food & Treats</li>
          <li className="hover:text-[#6A1826] cursor-pointer hover:underline">Child-Resistant</li>
          <li className="hover:text-[#6A1826] cursor-pointer hover:underline">Health & Beauty Products</li>
          <li className="hover:text-[#6A1826] cursor-pointer hover:underline">Soap & Detergent</li>
          <li className="hover:text-[#6A1826] cursor-pointer hover:underline">Spices & Seasonings</li>
          <li className="hover:text-[#6A1826] cursor-pointer hover:underline">Vitamin & Supplements</li>
        </ul>
      </div>
    </div>
  );
};

export default IndustryMenu;
