import FooterComponent from "@/components/common/footer";
import Header from "@/components/common/header";
import TopNavBar from "@/components/common/topNavBar";
import Image from "next/image";
import React, { useState } from "react";

function Products() {
  const images = [
    "/filters_format(webp)_20.webp",
    "/filters_format(webp)_21.webp",
    "/filters_format(webp)_22.webp",
    "/filters_format(webp)_23.webp",
    "/filters_format(webp)_24.webp",
  ];

  const [selectedImage, setSelectedImage] = useState('/filters_format(webp)_20.webp'); // default selected

  return (
    <div>
      <TopNavBar />
      <Header />
      <h1 className="text-xl font-bold pt-3 pl-6">Custom-Printed Flat Pouch</h1>
      <div className="flex items-center ">
        {/* Left side — image list */}

        <div className="flex flex-col  gap-4 mt-10 ml-10 transition-opacity duration-1000">
          {images.map((src, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(src)}
              className={`cursor-pointer border shadow-sm rounded-lg p-1 transition-all duration-200 ${
                selectedImage === src ? "border-black" : "border-gray-200"
              }`}
            >
              <Image
                src={src}
                alt="images"
                width={70}
                height={70}
                className="rounded-md object-cover"
              />
            </div>
          ))}
        </div>

        {/* Right side — main image */}
        <div className="flex  h-full  gap-6  ml-10">
          <div className="mt-1 w-full max-w-xs flex-1 rounded-xl shadow-xl xs:max-w-md sm:max-w-lg md:max-w-xs xl:max-w-md 2xl:max-w-[562px]">
            {selectedImage && (
              <Image
                src={selectedImage}
                alt="Selected"
                width={400}
                height={400}
                className="rounded-xl object-cover"
              />
            )}
          </div>
        </div>
        <div>
            <h1 className="text-2xl font-bold">Custom-Printed Flat Pouches</h1>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default Products;
