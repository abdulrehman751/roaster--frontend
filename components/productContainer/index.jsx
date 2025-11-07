import Image from "next/image";
import React, { useState } from "react";

const ProductContainer = () => {
  const categories = [
    { label: "Coffee", image: "/coffee-bean-black.svg", id: "Coffee" },
    {
      label: "Chocolate",
      image: "/chocolate-swirl-black.svg",
      id: "Chocolate",
    },
    {
      label: "Food & Snacks",
      image: "/strawberry-black.svg",
      id: "Food & Snacks",
    },
    {
      label: "Pet Food & Treats",
      image: "/paw-black.svg",
      id: "Pet Food & Treats",
    },
    {
      label: "Health & Beauty",
      image: "/health-beauty-black.svg",
      id: "Health & Beauty",
    },
    { label: "Tea", image: "/mug-tea-black.svg", id: "Tea" },
  ];

  const images = [
    { id: "Coffee", image: "/filters_format(webp)_4.webp" },
    { id: "Chocolate", image: "/filters_format(webp)_26.webp" },
    { id: "Food & Snacks", image: "/filters_format(webp)_27.webp" },
    { id: "Pet Food & Treats", image: "/filters_format(webp)_28.webp" },
    { id: "Health & Beauty", image: "/filters_format(webp)_29.webp" },
    { id: "Tea", image: "/filters_format(webp)_30.webp" },
  ];

  const [selectedId, setSelectedId] = useState(images?.[0]?.id);

  const activeImage = images.find((item) => item.id === selectedId);

  return (
    <section
      className="bg-[#E1F3F8] relative py-50 mt-10 px-4 md:px-12 overflow-hidden clip_path"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 pb-24">
        {/* LEFT: Image Section */}
        <div className=" md:row-span-2 md:row-start-1 md:block md:col-start-1">
        <div className=" flex items-center justify-center p-28 md:h-full md:w-full md:p-12">
          {activeImage ? (
            <Image
              key={activeImage.id}
              src={activeImage.image || images?.[0]?.id}
              alt={activeImage.id}
              width={300}
              height={300}
              className="transition-all duration-500 ease-in-out scale-100 hover:scale-105"
            />
          ) : (
            <div className="w-[400px] h-[400px] flex justify-center items-center border-2 border-dashed border-gray-300 rounded-xl text-gray-400">
              Select a Category
            </div>
          )}
        </div>
        </div>

        {/* RIGHT: Buttons Section */}
        <div className="flex-1 max-w-xl">
          <h2 className="font-bold text-3xl tracking-tighter xl:text-4xl mb-4">
            Whatever you’re packaging, we have a product for you.
          </h2>
          <p className="mb-8 text-lg text-gray-700">
            With experience in spaces from cookies to cleaning supplies, our
            expertise and quality materials mean that whatever you’re
            packaging—it’s looking fresh and staying fresh.
          </p>

          <div className="grid grid-cols-1 w-full sm:grid-cols-2 gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                // onMouseEnter={() => setSelectedId(selectedId === cat.id ? null : cat.id)}
                // onMouseLeave={()=>setSelectedId(selectedId === cat.id ?  cat.id : cat.id)}
                onMouseEnter={() => setSelectedId(cat.id)}
                onMouseLeave={() => setSelectedId(cat.id)}
                className={`flex items-center justify-between w-full rounded-xl px-6 py-4 font-semibold text-lg shadow transition-all duration-300 
                  ${
                    selectedId === cat.id
                      ? "bg-[#6a1826] text-white scale-105"
                      : "bg-white text-gray-800 hover:bg-[#6a1826] hover:text-white"
                  }`}
              >
                <span className="flex items-center gap-3">
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className={`w-6 h-6 transition-transform duration-300 ${
                      selectedId === cat.id ? "brightness-0 invert" : ""
                    }`}
                  />
                  {cat.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductContainer;
