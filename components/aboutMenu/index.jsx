import React from "react";

const AboutMenu = () => {
  return (
    <div>
      <div className=" sticky  z-50  left-0 top-full mt-2 bg-white shadow-md rounded-lg p-8 w-[450px] grid grid-cols-3 gap-10
      opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
        <ul className="felx felx-col gap-4">
          <li className="hover:text-[#6A1826] text-md cursor-pointer hover:underline">Our Story</li>
          <li className="hover:text-[#6A1826] text-md cursor-pointer hover:underline">Sustainability</li>
          <li className="hover:text-[#6A1826] text-md cursor-pointer hover:underline">Careers</li>
          <li className="hover:text-[#6A1826] text-md cursor-pointer hover:underline">Contact Us</li>
          <li className="hover:text-[#6A1826] text-md cursor-pointer hover:underline">Reviews</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMenu;
