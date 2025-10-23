import AboutMenu from "@/components/aboutMenu";
import IndustryMenu from "@/components/industryDetails";
import MegaMenu from "@/components/megaMenu";
import ResourcesMenu from "@/components/resourcesMenu";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaPencil } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { MdMenu } from "react-icons/md";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);

  const navItems = [
    { label: "Shop by Product", id: "product", image: "/down.png" },
    {
      label: "Shop by Industry",
      id: "industry",
      image: "/down.png",
    },
    { label: "Resources", id: "resources", image: "/down.png" },
    { label: "About", id: "about", image: "/down.png" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav class="sticky lg:px-20 sm:px-2 md:px-8 z-50 py-5 top-0 shadow-xl bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 ">
      <div className=" flex justify-between w-full items-center relative">
        <div className="flex justify-between items-center gap-8">
          <div className="flex items-center pl-4 md:ml-0">
            <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
              <Image
                src="/mylar-bags.jpg"
                alt="roaster"
                width={150}
                height={60}
                className="object-contain "
              />
            </a>
          </div>

          <div className=" xl:block hidden  w-full  md:w-auto">
            <ul
              ref={headerRef}
              className="flex gap-8 justify-center  text-lg font-semibold text-gray-700"
            >
              {navItems.map((item) => (
                <li key={item.id} className="relative group">
                  <div
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === item.id ? null : item.id // Toggle open/close
                      )
                    }
                    className={`${
                      openDropdown === item.id ? "text-[#6A1826]" : "text-black"
                    } hover:text-[#6A1826] cursor-pointer flex items-center gap-1 transition-colors duration-200 text-bold`}
                  >
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.id ? null : item.id // Toggle open/close
                        )
                      }
                      className={`${
                        openDropdown === item.id
                          ? "text-[#6A1826]"
                          : "text-black"
                      } hover:text-[#6A1826] cursor-pointer transition-colors duration-200 text-bold`}
                    >
                      {item.label}
                    </button>
                    <Image
                      src={item.image}
                      alt="dropdown icon"
                      width={20}
                      height={20}
                      className={`transition-transform duration-300 hover:text-[#6A1826] cursor-pointer ${
                        openDropdown === item.id ? "rotate-180" : ""
                      }
                      `}
                    />
                  </div>

                  {openDropdown === item.id && (
                    <div className="absolute left-0 top-full">
                      {item.id === "product" && <MegaMenu />}
                      {item.id === "industry" && <IndustryMenu />}
                      {item.id === "resources" && <ResourcesMenu />}
                      {item.id === "about" && <AboutMenu />}
                    </div>
                  )}
                </li>
              ))}
              <div className="text-green-400   hover:text-[#6A1826]">Deal</div>
            </ul>
          </div>
        </div>
        <div className="px-4  xl:block hidden">
          <div className=" ">
            <Link
              href="/"
              className="btn-primary inline-flex items-center gap-2 text-white border-r-8 border-l-8 bg-black hover:bg-[#8B2232] rounded-2xl font-semibold  px-4 py-4  transition-all duration-300 ease-in-out  hover:-translate-y-1"
            >
              <span className="icon icon-fill-current text-[20px]">
                <FaPencil />
              </span>
              Design & Price
            </Link>
          </div>
        </div>

        <button
          className="xl:hidden block absolute right-2   top-2  "
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <IoClose className="size-8 absolute sm-px-2 md-pr-6 -left-10" />
          ) : (
            <MdMenu className="size-8 sm-px-2 md-pr-10" />
          )}
        </button>
      </div>

      {/* for mobile view */}
      {menuOpen && (
        <div
          className=" fixed inset-0 z-50 p-10 mt-20 bg-white grid grid-cols-x min-h-screen ease-in-out   w-full overflow-y-auto

                     space-y-10  font-semibold transition-all duration-500"
        >
          <div className="flex flex-col start">
            <div>
              <div className="mb-4  gap-x-10">
                <Link
                  href="/"
                  className="btn-primary inline-flex items-center gap-2 text-white border-r-8 border-l-8 bg-black hover:bg-[#8B2232] rounded-2xl font-semibold  px-4 py-4  transition-all duration-300 ease-in-out  hover:-translate-y-1"
                >
                  <span className="icon icon-fill-current text-[20px]">
                    <FaPencil />
                  </span>
                  Design & Price
                </Link>
              </div>
              <h3
                className="font-bold   mb-3 uppercase text-md  hover:underline cursor-pointer"
                style={{}}
              >
                Custom-Printed
              </h3>
              <h4 className="font-semibold text-blue-600 mb-3  cursor-pointer">
                Packaging
              </h4>
              <ul className="text-black space-y-2 mt-2">
                <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
                  Flat Pouch
                </li>
                <li className="hover:text-[#6A1826] cursor-pointer">
                  Flat Bottom Bag
                </li>
                <li className="hover:text-[#6A1826] hover:underline  cursor-pointer">
                  Gusset Bag
                </li>
                <li className="hover:text-[#6A1826] cursor-pointer">
                  Stand Up Pouch
                </li>
                <li className="hover:text-[#6A1826] hover:underline  cursor-pointer">
                  Paper Tube
                </li>
                <li className="hover:text-[#6A1826] hover:underline cursor-pointer">
                  Tin Can
                </li>
                <li className="hover:text-[#6A1826] hover:underline cursor-pointer">
                  Rollstock
                </li>
              </ul>

              <h4 className="font-semibold text-blue-600 mt-4 cursor-pointer">
                Stickers & Labels
              </h4>
              <ul className="text-black space-y-1 mt-2">
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
              <h3 className="font-bold text-black mt-3 uppercase text-lg hover:underline cursor-pointer">
                Roastar Design Lab
              </h3>
              <h4 className="font-semibold text-blue-600  cursor-pointer">
                Packaging
              </h4>
              <ul className="text-black space-y-1 mt-2">
                <li className="hover:text-[#6A1826] hover:underline cursor-pointer">
                  Gusset Bag
                </li>
                <li className="hover:text-[#6A1826] hover:underline cursor-pointer">
                  Flat Bottom Bag
                </li>
                <li className="hover:text-[#6A1826] hover:underline cursor-pointer">
                  Stand Up Pouch
                </li>
                <li className="hover:text-[#6A1826] hover:underline cursor-pointer">
                  Tin Can
                </li>
              </ul>

              <h4 className="font-semibold text-blue-600 mt-4 cursor-pointer">
                Stickers & Labels
              </h4>
              <ul className="text-black space-y-1 mt-2">
                <li className="hover:text-[#6A1826] hover:underline cursor-pointer">
                  Coffee Bag Label
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="font-bold text-black uppercase text-lg mt-3 hover:underline cursor-pointer">
                Stock / Blank
              </h3>
              <h4 className="font-semibold text-blue-600 cursor-pointer ">
                Packaging
              </h4>
              <ul className="text-black space-y-1 mt-2">
                <li className="hover:text-[#6A1826] hover:underline cursor-pointer">
                  Flat Bottom Bag
                </li>
                <li className="hover:text-[#6A1826] hover:underline cursor-pointer">
                  Gusset Bag
                </li>
                <li className="hover:text-[#6A1826] hover:underline cursor-pointer">
                  Paper Tin Tie Bag
                </li>
                <li className="hover:text-[#6A1826] hover:underline cursor-pointer">
                  Flat Pouch
                </li>
                <li className="hover:text-[#6A1826] hover:underline cursor-pointer">
                  Zipper Bag - Biodegradable
                </li>
                <li className="hover:text-[#6A1826] hover:underline cursor-pointer">
                  Paper Tube
                </li>
                <li className="hover:text-[#6A1826] hover:underline cursor-pointer">
                  Tin Can
                </li>
                <li className="hover:text-[#6A1826] hover:underline cursor-pointer">
                  Stand Up Pouch
                </li>
              </ul>
              <h4 className="font-semibold text-blue-600 mt-4">
                Stickers & Labels
              </h4>
              <ul className="text-black space-y-1 mt-2">
                <li className="hover:text-[#6A1826] hover:underline cursor-pointer">
                  Coffee Sticker
                </li>
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
              <ul className="text-black space-y-1 mt-2">
                <li className="hover:text-[#6A1826] hover:underline cursor-pointer">
                  Resealable Bag Tape
                </li>
                <li className="hover:text-[#6A1826] hover:underline cursor-pointer">
                  Round Seal Sticker
                </li>
                <li className="hover:text-[#6A1826] hover:underline cursor-pointer">
                  Tin Can End - Peel & Stick
                </li>
              </ul>
              <h4 className="font-semibold text-blue-600 mt-4">Accessories</h4>
              <ul className="text-black space-y-1 mt-2">
                <li className="hover:text-[#6A1826] hover:underline cursor-pointer">
                  Forming Shoe
                </li>
                <li className="hover:text-[#6A1826] hover:underline cursor-pointer">
                  Shipping Carton
                </li>
              </ul>
            </div>
          </div>

          <div className="col-span-1">
            <h1 className="font-bold text-black cursor-pointer text-lg">
              Shop by Industry
            </h1>
            <ul>
              <li className="hover:text-[#6A1826]  cursor-pointer hover:underline">
                Coffee
              </li>
              <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
                Chocolate
              </li>
              <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
                Candy
              </li>
              <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
                Food & Snacks
              </li>
              <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
                Tea
              </li>
              <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
                Pet Food & Treats
              </li>
              <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
                Child-Resistant
              </li>
              <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
                Health & Beauty Products
              </li>
              <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
                Soap & Detergent
              </li>
              <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
                Spices & Seasonings
              </li>
              <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
                Vitamin & Supplements
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-black">Design Resources</h4>
            <ul className="text-gray-600 space-y-1 mt-2">
              <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
                Roastar Design Lab
              </li>
              <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
                Designer Network
              </li>
              <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
                Templates & Guides
              </li>
            </ul>
          </div>
          {/* column 2 */}
          <div>
            <h4 className="font-bold text-black">Product Resources</h4>
            <ul className="text-gray-600 space-y-1 mt-2">
              <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
                Product Finder
              </li>
              <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
                Material Guide
              </li>
              <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
                Features & Accessories
              </li>
              <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
                Order Samples
              </li>
            </ul>
          </div>
          {/* column 3 */}
          <div>
            <h4 className="font-bold text-black">General Resources</h4>
            <ul className="text-gray-600 space-y-1 mt-2">
              <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
                How It Works
              </li>
              <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
                Blog
              </li>
              <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
                FAQs
              </li>
              <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
                Current Lead Times
              </li>
            </ul>
          </div>

          <div className=" mt-2 bg-white">
            <ul>
              <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
                Our Story
              </li>
              <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
                Sustainability
              </li>
              <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
                Careers
              </li>
              <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
                Contact Us
              </li>
              <li className="hover:text-[#6A1826] cursor-pointer hover:underline">
                Reviews
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
