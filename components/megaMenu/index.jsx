import Link from "next/link";
import React from "react";

const MegaMenu = () => {
  return (
    <div
      className="flex items-center sticky  z-50   mt-2 bg-white shadow-xl rounded-lg p-8 w-[1100px] 
      opacity-100  "
    >
      {/* Column 1 */}
      <div className="flex  gap-x-12 ">
        <div>
          <Link href="/custom-printed">
            <h3 className="font-bold text-black  mb-3 uppercase text-md hover:underline cursor-pointer">
              Custom-Printed
            </h3>
          </Link>
          <Link href="/packaging">
            <h4 className="font-semibold text-blue-600 mb-3  cursor-pointer">
              Packaging
            </h4>
          </Link>
          <ul className="space-y-2 mt-2">
            <Link href="/products/custom-flat-pouch">
              <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
                Flat Pouch
              </li>
            </Link>
            <Link href="/flat bottom bag">
              <li className="hover:text-[#6A1826]  hover:underline cursor-pointer">
                Flat Bottom Bag
              </li>
            </Link>
            <Link href="/Gusset Bag">
              <li className="hover:text-[#6A1826] hover:underline  cursor-pointer">
                Gusset Bag
              </li>
            </Link>
            <Link href="/Stand Up Pouch">
              <li className="hover:text-[#6A1826] cursor-pointer">
                Stand Up Pouch
              </li>
            </Link>
            <Link href="/paper tube">
              <li className="hover:text-[#6A1826] hover:underline  cursor-pointer">
                Paper Tube
              </li>
            </Link>
            <Link href="/tin can">
              <li className="hover:text-[#6A1826] hover:underline cursor-pointer">
                Tin Can
              </li>
            </Link>
            <Link href="/rollstock">
              <li className="hover:text-[#6A1826] hover:underline cursor-pointer">
                Rollstock
              </li>
            </Link>
          </ul>
          <Link href="/stickers labels">
            <h4 className="font-semibold text-blue-600 mt-4 cursor-pointer">
              Stickers & Labels
            </h4>
          </Link>

          <ul className=" space-y-1 mt-2">
            <Link href="/beverage label">
              <li className="hover:text-[#6A1826] hover:underline  cursor-pointer">
                Beverage Label
              </li>
            </Link>
            <Link href="/brand sticker">
              <li className="hover:text-[#6A1826] hover:underline  cursor-pointer">
                Brand Sticker
              </li>
            </Link>
            <Link href="/coffee label">
              <li className="hover:text-[#6A1826] hover:underline cursor-pointer">
                Coffee Bag Label
              </li>
            </Link>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <Link href="/roaster design">
            <h3 className="font-bold text-black mb-3 uppercase text-md hover:underline cursor-pointer">
              Roastar Design Lab
            </h3>
          </Link>
          <Link href="/packaging">
            <h4 className="font-semibold text-blue-600  cursor-pointer">
              Packaging
            </h4>
          </Link>
          <ul className=" space-y-1 mt-2">
            <Link href="/gusset bag">
              <li className="hover:text-[#6A1826] hover:underline cursor-pointer">
                Gusset Bag
              </li>
            </Link>
            <Link href="/flat bottom bag">
              <li className="hover:text-[#6A1826] hover:underline cursor-pointer">
                Flat Bottom Bag
              </li>
            </Link>
            <Link href="/stand up pouch">
              <li className="hover:text-[#6A1826] hover:underline cursor-pointer">
                Stand Up Pouch
              </li>
            </Link>
            <Link href="/tin can">
              <li className="hover:text-[#6A1826] hover:underline cursor-pointer">
                Tin Can
              </li>
            </Link>
          </ul>
          <Link href="/stickers labels">
            <h4 className="font-semibold text-blue-600 mt-4 cursor-pointer">
              Stickers & Labels
            </h4>
          </Link>
          <ul className="space-y-1 mt-2">
            <Link href="/coffee label">
              <li className="hover:text-[#6A1826] hover:underline cursor-pointer">
                Coffee Bag Label
              </li>
            </Link>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <Link href="/stock blank">
            <h3 className="font-bold text-black uppercase text-lg mb-3 hover:underline cursor-pointer">
              Stock / Blank
            </h3>
          </Link>
          <Link href="/packaging">
            <h4 className="font-semibold text-blue-600 cursor-pointer ">
              Packaging
            </h4>
          </Link>
          <ul className="space-y-1 mt-2">
            <Link href="/flat bag">
              <li className="hover:text-[#6A1826] hover:underline cursor-pointer">
                Flat Bottom Bag
              </li>
            </Link>
            <Link href="/gusset bag">
              <li className="hover:text-[#6A1826] hover:underline cursor-pointer">
                Gusset Bag
              </li>
            </Link>
            <Link href="/paper bag">
              <li className="hover:text-[#6A1826] hover:underline cursor-pointer">
                Paper Tin Tie Bag
              </li>
            </Link>
            <Link href="/flat pouch">
              <li className="hover:text-[#6A1826] hover:underline cursor-pointer">
                Flat Pouch
              </li>
            </Link>
            <Link href="/zipper bag">
              <li className="hover:text-[#6A1826] hover:underline cursor-pointer">
                Zipper Bag - Biodegradable
              </li>
            </Link>
            <Link href="/paper tube">
              <li className="hover:text-[#6A1826] hover:underline cursor-pointer">
                Paper Tube
              </li>
            </Link>
            <Link href="/tin can">
              <li className="hover:text-[#6A1826] hover:underline cursor-pointer">
                Tin Can
              </li>
            </Link>
            <Link href="/stand pouch">
              <li className="hover:text-[#6A1826] hover:underline cursor-pointer">
                Stand Up Pouch
              </li>
            </Link>
          </ul>
          <Link href="/stickers">
            <h4 className="font-semibold text-blue-600 mt-4">
              Stickers & Labels
            </h4>
          </Link>
          <ul className=" space-y-1 mt-2">
            <Link href="/coffee sticker">
              <li className="hover:text-[#6A1826] hover:underline cursor-pointer">
                Coffee Sticker
              </li>
            </Link>
          </ul>
        </div>
        {/* column 4 */}
        <div>
          <Link href="/shop product">
            <button className="flex items-center gap-2 text-black  border  hover:bg-[#8B2232] hover:text-white rounded-2xl font-semibold  px-4 py-4  transition-all duration-300 ease-in-out  hover:-translate-y-1">
              Shop All Products
            </button>
          </Link>
          <h4 className="font-semibold text-blue-600 mt-4">Closures</h4>
          <ul className=" space-y-1 mt-2">
            <Link href="/resealable">
              <li className="hover:text-[#6A1826] hover:underline cursor-pointer">
                Resealable Bag Tape
              </li>
            </Link>
            <Link href="/round seal">
              <li className="hover:text-[#6A1826] hover:underline cursor-pointer">
                Round Seal Sticker
              </li>
            </Link>
            <Link href="/tin can">
              <li className="hover:text-[#6A1826] hover:underline cursor-pointer">
                Tin Can End - Peel & Stick
              </li>
            </Link>
          </ul>
          <h4 className="font-semibold text-blue-600 mt-4">Accessories</h4>
          <ul className=" space-y-1 mt-2">
            <Link href="/forming shoe">
              <li className="hover:text-[#6A1826] hover:underline cursor-pointer">
                Forming Shoe
              </li>
            </Link>
            <Link href="/shipping cart">
              <li className="hover:text-[#6A1826] hover:underline cursor-pointer">
                Shipping Carton
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
