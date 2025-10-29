
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";


const images = [
  "/filters_format(webp)_cups.webp",
  "/filters_format(webp)_4.webp",
  "/filters_format(webp)_2.webp",
  "/filters_format(webp)_3.webp",
];

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
const reviews = [
  {
    title: "Better than expected and fast shipping!",
    content:
      "The tin is a gift for my daughter and son-in-law's anniversary. It's exactly as expected and really cute! I'm sure they’ll love it.",
    author: "Michael Foley",
    date: "September 20",
  },
  {
    title: "Amazing quality and support!",
    content:
      "Absolutely loved the packaging. Customer support helped me finalize my design perfectly.",
    author: "Jessica H.",
    date: "August 14",
  },
  {
    title: "Excellent service!",
    content:
      "I got my custom bags earlier than expected. Great quality and very smooth process.",
    author: "John P.",
    date: "July 30",
  },
];

const CoffeePackaging = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const [filter, setFilter] = useState();
  const [current, setCurrent] = useState(0);

  const nextReview = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleOpendropdown = (item) => {
    setOpenDropdown(openDropdown === item.id ? null : item.id);
  };

  return (
    <div>
     
      <div className="relative bg-[#F4B233] pb-24 p-4  coffee_clip_path ">
        <div className="flex g-10  xl:p-10  items-center justify-center mb-5">
          {/* main container */}

          <div className=" flex flex-col-reverse mt-6 lg:flex-row items-center justify-center  gap-4  md:mx-auto  ">
            <img
              className=" w-[600] xl:w-[1000] "
              src="/filters_format(webp)_tinpack.webp"
              alt="perk"
            />
            <div className="pl-12 flex flex-col  pt-2 pr-5 ">
              {/* Heading & Paragraph */}
              <div className="flex flex-col gap-5 items-start">
                <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 tracking-tighter">
                  Coffee packaging that doesn’t feel like a grind.
                </h1>
                <div>
                  <p className="text-base md:text-lg lg:text-xl xl:text-md font-normal tracking-tight text-gray-800">
                    Some of the best coffee we’ve ever had came from roasters
                    that only made a few hundred bags at a time. We thought they
                    deserved an easy, affordable path to custom coffee bags that
                    look as polished as their multinational rivals (or even more
                    so). Welcome to that path.
                  </p>
                </div>
              </div>

              {/* Buttons — Only visible on lg and above */}
              <div className=" flex-col w-full lg:block hidden items-center gap-5 xl:gap-6 mt-6 ">
                <div className=" flex  flex-col sm:flex-row gap-3    mt-4   ">
                  <Link href="/"  className="w-full sm:w-auto">
                    <button className="flex justify-center items-center font-bold bg-black text-white xl:text-lg lg:px-6 lg:py-8 xl:px-7 xl:py-5 w-full sm:w-auto rounded-xl transition-all duration-300 ease-in-out hover:bg-[#8B2232] hover:-translate-y-1">
                      Not sure where to start?Take our quiz
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="">
              <div className="font-serif absolute left-[15%] bottom-4  sm:left-[15%] sm:bottom-[5%] xl:left-auto xl:right-[30%] xl:bottom-20 font-bold  text-sm sm:text-lg md:text-lg xl:text-xl text-black rotate-12 z-40">
                They are smell heavenly!
              </div>

              <Image
                src="/down-large-arrow.svg"
                alt="arrow"
                height={60}
                width={60}
                className="absolute left-[15%] -bottom-8  sm:left-[15%] sm:-bottom-2 xl:left-auto xl:right-[42%] xl:bottom-8 font-bold rotate-12 z-40"
              />
            </div>
          </div>
        </div>

        {/* Buttons — Only visible below lg  */}

        <div className="sm:flex  flex-col w-full sm:w-[500px] lg:hidden mb-10 items-center justify-center  ">
          {/* Buttons Section */}
          <div className="flex mt-6 flex-col-reverse flex-wrap gap-x-2 md:mt-0 md:flex-row md:flex-nowrap sm:flex-row gap-3 sm:gap-3  w-full  items-center justify-center">
            <Link href="/" passHref className="w-full sm:w-auto">
              <button className="flex justify-center items-center font-bold bg-black xl:text-2xl text-white xl:px-6 xl:py-3 px-4 py-4 w-full sm:w-auto rounded-xl transition-all duration-300 ease-in-out hover:bg-[#8B2232] hover:-translate-y-1">
                Not sure where to start?Take our quiz
              </button>
            </Link>
          </div>
        </div>
      </div>

       <div className="flex  ">
          <div className="w-[500px] flex flex-col mt-30 justify-between p-10 ml-20 pt-7">
            <div>
              <span className=" mb-6 flex justify-between items-center">
                <h5 className="font-medium text-xl ">
                  {" "}
                  FILTER BY (273 RESULTS)
                </h5>
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
                  Use our product finder to help guide you to the perfect
                  package.
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
      
      <section className="py-5 mt-30 px-2 md:px-12 bg-[#E1F3F8]  clip_path">
        <div className=" mt-30 mb-30 flex lg:flex-row flex-col-reverse gap-3 lg:gap-6 max-w-7xl mx-auto items-center justify-between">
          {/* ==== Image Grid ==== */}
          <div className="grid grid-cols-2 grid-rows-2 justify-center items-center gap-2 pb-10 flex-1 max-w-[450px] mx-auto ">
            {images.map((src, i) => (
              <div
                key={i}
                className="relative w-[200px] h-[200px]  rounded-lg shadow-sm bg-white mx-auto"
              >
                <Image
                  src={src}
                  alt={`Inspiration ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="300px"
                />
              </div>
            ))}
          </div>

          {/* ==== Text Section ==== */}
          <div className="flex-1 max-w-lg flex flex-col items-start lg:w-[50%]    ">
            <h2 className="font-bold text-4xl mb-4">
              Some not-so-average joes.
            </h2>
            <p className="mb-8 text-lg text-black">
              Witness the intersection of our flexible range of custom-printed
              coffee bags, the gorgeous work of skilled designers, and lovingly
              crafted coffee (we wish you could smell it, too).
            </p>

            {/* Desktop buttons */}
            <div className="mb-8 lg:block hidden">
              <div className="flex gap-2">
                <button className="border border-black rounded-xl px-6 py-3 font-semibold text-lg bg-white hover:bg-[#6a1826] hover:text-amber-50 transition-all duration-300 ease-in-out hover:-translate-y-1">
                  Find a Designer
                </button>
                <button className="rounded-xl px-6 py-3 font-semibold text-lg bg-black text-white hover:bg-[#6a1826] transition-all duration-300 ease-in-out hover:-translate-y-1">
                  Show Me More
                </button>
              </div>
            </div>
            <div>
              {/* Handwritten text + arrow */}
              <p className="font-serif absolute left-[40%] -bottom-[18%] lg:left-[60%] lg:bottom-[5%] font-bold text-lg text-black rotate-12 z-40">
                your network here!
              </p>
              <Image
                src="/left-loop-arrow.e2911df0.svg"
                alt="arrow"
                height={60}
                width={80}
                className="absolute left-[40%] -bottom-[8%] lg:left-[52%] lg:bottom-[6%] rotate-12 z-30"
              />
            </div>
          </div>
        </div>

        {/* ==== Mobile Buttons ==== */}
        <div className="flex w-full mt-40 lg:hidden mb-10">
          <div className="flex gap-2 md:flex-row flex-col-reverse w-full items-start">
            <Link href="/" passHref className="w-full">
              <button className="flex items-center justify-center font-bold w-full text-black border border-black px-7 py-4 rounded-xl transition-all duration-300 ease-in-out hover:bg-[#8B2232] hover:text-white hover:-translate-y-1">
                Find a Designer
              </button>
            </Link>

            <Link href="/" passHref className="w-full">
              <button className="flex items-center justify-center font-bold w-full bg-black text-white px-7 py-4 rounded-xl transition-all duration-300 ease-in-out hover:bg-[#8B2232] hover:-translate-y-1">
                Get a Quote
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-20 px-6 md:px-12 clip_path mx-auto ">
        <div className="w-full mx-auto flex flex-col  md:flex-row justify-between items-center gap-10 p-15 ">
          {/* Left Text */}
          <div className="w-[400px] flex-1">
            <h2 className="text-5xl font-bold mb-4">
              We like our feedback like we like our coffee.
            </h2>
            <p className="text:md xl:text-lg text-gray-700 mb-4">
              Meaning fresh, strong, and direct from small businesses. We love
              hearing about our clients’ experiences – especially about how we
              can make the packaging process even smoother. That last part is
              kind of why we exist.
            </p>
          </div>

          {/* Right Review Card */}
          <div className="flex-1 bg-white rounded-2xl shadow-lg px-40  p-15 ">
            {/* Trustpilot Header */}
            <div className="flex items-center justify-center mb-4">
              <div>
                <h3 className=" font-bold text-lg flex items-center gap-1">
                  ★ Trustpilot
                </h3>
                <div className="flex gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className=" bg-[#00856C]" />
                  ))}
                </div>
                <p className="text-gray-500 text-sm mt-1">
                  TrustScore 4.9 |{" "}
                  <a href="#" className="underline">
                    317 reviews
                  </a>
                </p>
              </div>
            </div>

            {/* Review Content */}
            <div className="flex flex-col mr-50">
              <p className="text-sm text-gray-500 mb-2">
                Showing our 5 star reviews
              </p>
              <h4 className="font-semibold text-lg mb-2">
                {reviews[current].title}
              </h4>
              <p className="text-gray-700 mb-4">{reviews[current].content}</p>
              <p className="text-sm text-gray-500">
                {reviews[current].author}, {reviews[current].date}
              </p>
            </div>
            {/* Navigation Arrows */}
            <div className="absolute">
              <button
                onClick={prevReview}
                className="relative right-20 top-[20%] -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow hover:bg-gray-200"
              >
                ←
              </button>
              <button
                onClick={nextReview}
                className="relative left-100 top-1/2 -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow hover:bg-gray-200"
              >
                →
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-4 gap-2">
              {reviews.map((_, i) => (
                <span
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full ${
                    i === current ? "bg-gray-800" : "bg-gray-300"
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 md:px-12">
        {/* CTA Banner */}
        <div className="  mt-15 px-4">
          <div className="bg-[#00856C] rounded-2xl flex flex-col items-center justify-center text-center gap-6 px-10 py-15 relative overflow-hidden  w-full">
            {/* Left Dashed Line */}
            <img
              src="/dashed-line-left.svg"
              alt="Dashed line left"
              className="absolute left-10 top-1/2 -translate-y-1/2 w-40 "
            />

            {/* Center Content */}
            <div className="flex  items-center justify-center gap-30 z-10">
              <h2 className="text-white font-bold text-5xl">
                Ready to get started?
              </h2>
              <p className="text-white text-lg">
                Let’s make some awesome packaging together.
              </p>
              <a
                href="/get-quote"
                className="border underline border-white text-white font-semibold rounded-xl px-8 py-5 hover:bg-white hover:text-[#00856C] transition"
              >
                Get a Quote
              </a>
            </div>

            {/* Right Dashed Line */}
            <img
              src="/dashed-line-right.svg"
              alt="Dashed line right"
              className="absolute right-10 top-1/2 -translate-y-1/2 w-40"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default CoffeePackaging;
