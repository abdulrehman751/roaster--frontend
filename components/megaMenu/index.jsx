import React from "react";

const MegaMenu = () => {
  return (
    <div
      className="flex items-center sticky  z-50  left-10 top-full mt-2 bg-white shadow-xl rounded-lg p-8 w-[1100px] 
      opacity-100  "
    >
      {/* Column 1 */}
      <div className="grid grid-cols-4 gap-12 ">
        <div>
          <h3 className="font-bold text-black  mb-3 uppercase text-md hover:underline cursor-pointer">
            Custom-Printed
          </h3>
          <h4 className="font-semibold text-blue-600 mb-3  cursor-pointer">Packaging</h4>
          <ul className="space-y-2 mt-2">
            <li className="hover:text-[#6A1826] cursor-pointer hover:underline">Flat Pouch</li>
            <li className="hover:text-[#6A1826] cursor-pointer">
              Flat Bottom Bag
            </li>
            <li className="hover:text-[#6A1826] hover:underline  cursor-pointer">Gusset Bag</li>
            <li className="hover:text-[#6A1826] cursor-pointer">
              Stand Up Pouch
            </li>
            <li className="hover:text-[#6A1826] hover:underline  cursor-pointer">Paper Tube</li>
            <li className="hover:text-[#6A1826] hover:underline cursor-pointer">Tin Can</li>
            <li className="hover:text-[#6A1826] hover:underline cursor-pointer">Rollstock</li>
          </ul>

          <h4 className="font-semibold text-blue-600 mt-4 cursor-pointer">
            Stickers & Labels
          </h4>
          <ul className=" space-y-1 mt-2">
            <li className="hover:text-[#6A1826] hover:underline  cursor-pointer">
              Beverage Label
            </li>
            <li className="hover:text-[#6A1826] hover:underline  cursor-pointer">
              Brand Sticker
            </li>
            <li className="hover:text-[#6A1826] hover:underline cursor-pointer">
              Coffee Bag Label
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-bold text-black mb-3 uppercase text-md hover:underline cursor-pointer">
            Roastar Design Lab
          </h3>
          <h4 className="font-semibold text-blue-600  cursor-pointer">Packaging</h4>
          <ul className=" space-y-1 mt-2">
            <li className="hover:text-[#6A1826] hover:underline cursor-pointer" >Gusset Bag</li>
            <li className="hover:text-[#6A1826] hover:underline cursor-pointer" >Flat Bottom Bag</li>
            <li className="hover:text-[#6A1826] hover:underline cursor-pointer" >Stand Up Pouch</li>
            <li className="hover:text-[#6A1826] hover:underline cursor-pointer" >Tin Can</li>
          </ul>

          <h4 className="font-semibold text-blue-600 mt-4 cursor-pointer">
            Stickers & Labels
          </h4>
          <ul className="space-y-1 mt-2">
            <li className="hover:text-[#6A1826] hover:underline cursor-pointer">Coffee Bag Label</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-bold text-black uppercase text-lg mb-3 hover:underline cursor-pointer">
            Stock / Blank
          </h3>
          <h4 className="font-semibold text-blue-600 cursor-pointer ">Packaging</h4>
          <ul className="space-y-1 mt-2">
            <li className="hover:text-[#6A1826] hover:underline cursor-pointer">Flat Bottom Bag</li>
            <li className="hover:text-[#6A1826] hover:underline cursor-pointer">Gusset Bag</li>
            <li className="hover:text-[#6A1826] hover:underline cursor-pointer">Paper Tin Tie Bag</li>
            <li className="hover:text-[#6A1826] hover:underline cursor-pointer">Flat Pouch</li>
            <li className="hover:text-[#6A1826] hover:underline cursor-pointer">Zipper Bag - Biodegradable</li>
            <li className="hover:text-[#6A1826] hover:underline cursor-pointer">Paper Tube</li>
            <li className="hover:text-[#6A1826] hover:underline cursor-pointer">Tin Can</li>
            <li className="hover:text-[#6A1826] hover:underline cursor-pointer">Stand Up Pouch</li>
          </ul>
          <h4 className="font-semibold text-blue-600 mt-4">
            Stickers & Labels
          </h4>
          <ul className=" space-y-1 mt-2">
            <li  className="hover:text-[#6A1826] hover:underline cursor-pointer">Coffee Sticker</li>
          </ul>
        </div>
        {/* column 4 */}
        <div>
          <div>
            <button className="flex items-center gap-2 text-black  border  hover:bg-[#8B2232] hover:text-white rounded-2xl font-semibold  px-4 py-4  transition-all duration-300 ease-in-out  hover:-translate-y-1">
              Shop All Products
            </button>
          </div>
          <h4 className="font-semibold text-blue-600 mt-4">Closures</h4>
          <ul className=" space-y-1 mt-2">
            <li className="hover:text-[#6A1826] hover:underline cursor-pointer">Resealable Bag Tape</li>
            <li className="hover:text-[#6A1826] hover:underline cursor-pointer">Round Seal Sticker</li>
            <li className="hover:text-[#6A1826] hover:underline cursor-pointer">Tin Can End - Peel & Stick</li>
          </ul>
          <h4 className="font-semibold text-blue-600 mt-4">Accessories</h4>
          <ul className=" space-y-1 mt-2">
            <li className="hover:text-[#6A1826] hover:underline cursor-pointer">Forming Shoe</li>
            <li className="hover:text-[#6A1826] hover:underline cursor-pointer">Shipping Carton</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
