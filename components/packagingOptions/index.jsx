import Link from "next/link";
import React, { useState } from "react";

const PackageOptions = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const [filter, setFilter] = useState();

  const categoryItems = [
    {
      label: "Availability",
      id: "available",
      image: "/down.png",
      options: [
        {
          id: "1",

          name: "Roastar Design Lab",
        },
        {
          id: "2",
          name: "Custom-printed",
        },
        {
          id: "3",
          name: "Stock / Blank",
        },
      ],
    },
    {
      label: "Product Type ",
      id: "Product",
      image: "/down.png",
      options: [
        {
          id: "1",
          name: "Accessories",
        },
        {
          id: "2",
          name: "Bag Labels",
        },
        {
          id: "3",
          name: "Stickers",
        },
        {
          id: "4",
          name: "Bags",
        },
        {
          id: "5",
          name: "Pouches",
        },
        {
          id: "6",
          name: "Tin Cans",
        },
        {
          id: "7",
          name: "Paper Tubes",
        },
        {
          id: "8",
          name: "Beverage Labels",
        },
        {
          id: "9",
          name: "Closures",
        },
      ],
    },
    {
      label: "Material",
      id: "resources",
      image: "/down.png",
      options: [
        {
          id: "1",
          name: "Clear / Clear Window",
        },
        {
          id: "2",
          name: "Corrugated Kraft",
        },
        {
          id: "3",
          name: "EVOH",
        },
        {
          id: "4",
          name: "Eco-Friendly",
        },
        {
          id: "5",
          name: "Holographic",
        },
        {
          id: "6",
          name: "Kraft / Textured",
        },
        {
          id: "7",
          name: "Metallic",
        },
        {
          id: "8",
          name: "Standard",
        },
        {
          id: "9",
          name: "Tear Resistant",
        },
      ],
    },
    {
      label: "Eco-friendly",
      id: "friend",
      image: "/down.png",
      options: [
        {
          id: "1",
          name: "Biodegradable",
        },
        {
          id: "2",
          name: "Compostable",
        },
        {
          id: "3",
          name: "Recyclable",
        },
      ],
    },
    {
      label: "Capacity",
      id: "capacity",
      image: "/down.png",
      options: [
        {
          id: "1",
          name: "Samples (2-6oz)",
        },
        {
          id: "2",
          name: "Small fill (6-10oz)",
        },
        {
          id: "3",
          name: "Standard fill (10-12 oz)",
        },
        {
          id: "4",
          name: "Large Fill (12 oz - 5 lbs)",
        },
      ],
    },
    {
      label: "Minimum Order Quantity",
      id: "quantity",
      image: "/down.png",
      options: [
        {
          id: "1",
          name: "1",
        },
        {
          id: "2",
          name: "50",
        },
        {
          id: "3",
          name: "100",
        },
        {
          id: "4",
          name: "500",
        },
        {
          id: "5",
          name: "1000",
        },
      ],
    },
  ];
  const productItems = [
    {
      id: 1,
      image: "/filters_format(webp)_10.webp",
      badge: "CUSTOM",
      title:
        "Gusset Bag - Custom-Printed Standard White with a Matte Finish 3.625 x 12.85 x 2.3125",
      description: "A bright white base material with a matte finish.",
      button: "Get a Quote",
      details: "Learn more",
    },
    {
      id: 2,
      image: "/filters_format(webp)_11.webp",
      badge: "CUSTOM",
      title:
        "Flat Bottom Bag - Custom-Printed Standard White with Matte Finish 5 x 9.25 x 2.875",
      description:
        "Our flat bottom bags give you a creative showpiece with maximum shelf stability, a classy appearance, and unmatched practicality for your product.",
      button: "Get a Quote",
      details: "Learn more",
    },
    {
      id: 3,
      image: "/filters_format(webp)_12.webp",
      badge: "CUSTOM",
      title:
        "Tin Can - Beaded, Custom-Printed Metallic Can with a Gloss Finish 4.0625 x 5.5",
      description:
        "This custom-printed beaded tin can 4.0625 x 5.5 is metallic with a gloss finish and comes with your choice of seamer or hand applied valved end and an optional clear, black, or metal recyclable lid.",
      button: "Get a Quote",
      details: "Learn more",
    },
    {
      id: 4,
      image: "/filters_format(webp)_13.webp",
      badge: "CUSTOM",
      title:
        "Stand Up Pouch - Custom-Printed Metallic with a Matte Finish 6.125 x 9.5 x 3.5",
      description:
        "Add stunning metallic effects and dimension to the artwork on your stand up pouch with a matte finish.",
      button: "Get a Quote",
      details: "Learn more",
    },
    {
      id: 5,
      image: "/filters_format(webp)_15.webp",
      badge: "CUSTOM",
      title:
        "Brand Sticker - Custom-Printed Standard White with a Matte Finish 3 x 3",
      description:
        "The 3 x 3 standard white matte custom-printed brand sticker will showcase your brand wherever you go.",
      button: "Get a Quote",
      details: "Learn more",
    },
    {
      id: 6,
      image: "/filters_format(webp)_16.webp",
      badge: "Roastar Design Lab",
      title: "Roastar Design Lab Coffee Bag Label - 2 x 3 White Standard",
      description:
        "This 2 x 3 white standard coffee bag label with a standard permanent adhesive is designed to fit our blank or custom-printed Gusset Bag, Stand Up Pouch, Flat Pouch, or Flat Bottom Bag, sized small fill (6-10oz) - standard fill (10-16oz) volume.",
      button: "Start Designing",
      details: "Learn more",
    },
    {
      id: 9,
      image: "/coming.soon.svg",
      badge: "CUSTOM",
      title: "Flat Pouch - Custom-Printed Clear with Matte Finish 4.82 x 6",
      description:
        "Our clear matte material allows the ability to add clear windows to your bag. This LDPE film is store drop-off recyclable (#4) and has excellent moisture and oxygen barriers.",
      button: "Get a Quote",
      details: "Learn more",
    },
    {
      id: 7,
      image: "/filters_format(webp)_17.webp",
      badge: "CUSTOM",
      title: "Coffee Bag Label - 4 x 6 White Standard",
      description:
        "This 4 x 6 white standard coffee bag label with a standard permanent adhesive is designed to fit our blank or custom-printed Gusset Bag, Stand Up Pouch, Flat Pouch, or Flat Bottom Bag, sized standard fill (10-16oz) - large fill (12oz-5lbs) volume.",
      button: "Get a Quote",
      details: "Learn more",
    },
    {
      id: 8,
      image: "/filters_format(webp)_18.webp",
      badge: "CUSTOM",
      title:
        "Paper Tube - Custom-Printed White Kraft with Smooth White Label 4 x 6.125",
      description:
        "Made from white paper, and 100% curbside recyclable, this white kraft paper tube is paired with a 30% post-consumer smooth white label that will add a bright, crisp look to artwork while matching the paper tube perfectly.",
      button: "Get a Quote",
      details: "Learn more",
    },
  ];

  const handleOpendropdown = (item) => {
    setOpenDropdown(openDropdown === item.id ? null : item.id);
  };

  return (
    <div>
      <div className="flex  ">
        <div className="w-[500px] flex flex-col mt-30 justify-between p-10 ml-20 pt-7">
          <div>
            <span className=" mb-6 flex justify-between items-center">
              <h5 className="font-medium text-xl "> FILTER BY (273 RESULTS)</h5>
              <button className="text-red-500 opacity-70 text-[17px]">
                Reset
              </button>
            </span>

            {categoryItems.map((item) => (
              <div className="" key={item.id}>
                <div
                  onClick={() => handleOpendropdown(item)}
                  className="flex justify-between"
                >
                  <span className="flex justify-between items-center w-full  mb-6 ">
                    <h5 className="text-xl font-medium">{item.label}</h5>
                    <img
                      src={item.image}
                      alt="down arrow"
                      className={`transition-transform duration-300 hover:text-[#6A1826] w-6 h-6 cursor-pointer ${
                        openDropdown === item.id ? "rotate-180" : ""
                      }
                      `}
                    />
                  </span>
                </div>
                {openDropdown === item?.id &&
                  item?.options?.map((data) => {
                    return (
                      <div key={item.id}>
                        <label
                          className="flex items-center mb-3 gap-2"
                          htmlFor="filter"
                        >
                          <input className="h-4 w-4" type="checkbox" />
                          <span className=" text-md">{data?.name}</span>
                        </label>
                      </div>
                    );
                  })}
              </div>
            ))}
            <div className="w-full">
              <img
                className="h-50 w-50"
                src="/sterling-wizard.svg"
                alt="wizard"
              />
              <h1 className="font-bold text-xl mt-5">
                Not Sure Where to Start?
              </h1>
              <p className="mt-3">
                Use our product finder to help guide you to the perfect package.
              </p>
              <Link href="/" passHref className="w-full sm:w-auto ">
                <button className="flex justify-center items-center mt-4 font-bold w-full bg-black text-white px-7 py-4 sm:px-6 sm:py-6  md:px-7 md:py-4  rounded-xl transition-all duration-300 ease-in-out hover:bg-[#8B2232] hover:-translate-y-1">
                  Take Our Quiz
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-black  font-bold  mt-20   text-4xl ">
            Coffee Packaging Options
          </h1>

          <div className="  max-w-[1200px] mt-20 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {productItems?.map((product) => {
              return (
                <div className="group flex shadow-xl w-full rounded-xl bg-white text-grind shadow-card flex-col">
                  <div className="relative rounded-t-[10px] h-[235px] bg-gray-100">
                    <div className="h-[235px] rounded-t-[10px] bg-grind-100">
                      <div className="relative mx-auto h-[200px] w-[200px]  rounded-t-[10px] object-contain">
                        <img
                          src={product?.image}
                          className="h-full w-full object-contain"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div className="flex flex-col">
                      <div className="flex gap-2 mb-2 flex-wrap">
                        <div className="inline-flex rounded-md border-[1.5px] border-blue-500   px-3 pb-1 pt-[.3rem] text-sm font-bold uppercase  bg-white">
                          {product.badge}
                        </div>
                      </div>
                      <div className="mb-3.5 text-xl font-bold">
                        {product.title}
                      </div>
                      {product.description}
                    </div>

                    <div className="mt-4">
                      <div className="flex  items-center justify-center">
                        <button className="flex justify-center items-center mt-4 font-bold w-full hover:text-white bg-white text-black px-7 py-4 sm:px-6 sm:py-6  md:px-7 md:py-4  rounded-xl transition-all duration-300 ease-in-out hover:bg-[#8B2232] hover:-translate-y-1   border-2 ">
                          {product.button}
                        </button>
                      </div>
                      <div className="flex items-center justify-center mt-3 underline cursor-pointer">
                        {product.details}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="col-span-full flex items-center justify-center">
              <button className="flex justify-center items-center mt-4 font-bold bg-black text-white px-7 py-4 sm:px-6 sm:py-6 md:px-7 md:py-4 rounded-xl transition-all duration-300 ease-in-out hover:bg-[#8B2232] hover:-translate-y-1">
                Show More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageOptions;
