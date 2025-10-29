import FooterComponent from "@/components/common/footer";
import Header from "@/components/common/header";
import TopNavBar from "@/components/common/topNavBar";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

function Products() {
  const images = [
    "/filters_format(webp)_20.webp",
    "/filters_format(webp)_21.webp",
    "/filters_format(webp)_22.webp",
    "/filters_format(webp)_23.webp",
    "/filters_format(webp)_24.webp",
  ];

  // Material / color swatches to render in a grid (map this array)
  const colors = [
    {
      id: "standard-white",
      img: "/color-white.webp",
      label: "Standard - White",
    },
    { id: "metallic", img: "/144x0.webp", label: "Metallic" },
    { id: "evoh-clear", img: "/144x0 (1)23.webp", label: "EVOH - Clear" },
    { id: "evoh-white", img: "/color-white.webp", label: "EVOH - White" },
    {
      id: "recyclable-clear",
      img: "/144x0 (1)23.webp",
      label: "Recyclable - Clear",
    },
    {
      id: "recyclable-white",
      img: "/color-white.webp",
      label: "Recyclable - White",
    },
    { id: "kraft-brown", img: "/144x0 (1)24.webp", label: "Kraft - Brown" },
    {
      id: "compostable-white",
      img: "/144x0 (1)26.webp",
      label: "Compostable - White",
    },
    {
      id: "compostable-brown",
      img: "/144x0 (1)25.webp",
      label: "Compostable - Brown",
    },
    {
      id: "tear-resistant-white",
      img: "/color-white.webp",
      label: "Tear Resistant - White",
    },
  ];
  const detail = [
    {
      id: "Description",
      desc: "Known to some as “pillow packs” or a “lay-flat pouch.” As single use custom pouches, they are great for giveaways or as a leave-behind. Start offering samples of your product at conventions, hotels, restaurants, and beyond.",
    },
    {
      id: "Product Details",
      desc: "Need more information on this product? Please chat with us or contact our Customer Service team.",
    },
    {
      id: "Price Breaks",
      desc: "Please select all product specifications to see this information.",
    },
  ];

  const image = [
    "/filters_format(webp)_102.webp",
    "/filters_format(webp)_103.webp",
    "/filters_format(webp)_104.webp",
    "/filters_format(webp)_105.webp",
  ];

  const faqs = [
    {
      question: "What size do I need?",
      answer:
        "The capacity of bag sizes we provide are approximations only. The capacity (ex. 4 oz, 8 oz) is based on tests using whole coffee beans. A bag's capacity will vary depending on the product - and for coffee, the type of bean and style of roasting impacts fill volume. For example, salt vs. tea; salt weighs more than most teas. We highly suggest ordering our free sample pack to trial fill your product to determine the right size for your needs.",
    },
    {
      question: "What is the minimum order quantity (MOQ)?",
      answer:
        "Our minimum order quantity (MOQ) for lay-flat pouches is 1000 bags. This quantity is set to help reduce waste and extend efficiencies throughout production. If you order more than one artwork file, the MOQ per file is as low as 100 bags.",
    },
    {
      question: "What if the size I want isn't listed?",
      answer:
        "We are able to produce custom flat pouch sizes (within certain restrictions). During the quote process, click the 'Custom Size' button & enter your desired bag dimensions and our team will follow up with a price quote for your custom-sized lay flat pouch.",
    },
    {
      question:
        "What is the difference between a press & seal zipper, secure stash, and fine powder zipper?",
      answer:
        "Press & Seal: Our resealable press & seal zipper helps keep your product fresh by creating an air-tight seal that can be opened and closed throughout the product's use.Fine Powder: Similar to our standard press & seal in functionality — our fine powder zippers are the best suited for protein powders, baking powders, chalks, and other nutraceuticals.Secure Stash: Our certified child-resistant zipper looks like a standard zipper, but offers additional protection. This zipper requires opening instructions on back panel to ensure proper use. Learn more about our custom packaging zippers, tin ties, and hang holes.",
    },
    {
      question: "Can I get a clear window in this bag style?",
      answer:
        "Yes, we offer several clear material options that allow for a window to showcase your product. Windows can be set up on clear materials during the artwork design process.",
    },
    {
      question: "How do I seal these pouches?",
      answer:
        "The flat pouch can be filled from the top and then heat-sealed shut above the zipper (if applicable).",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [selectedId, setSelectedId] = useState("Description");

  const [selectedImage, setSelectedImage] = useState(
    "/filters_format(webp)_20.webp"
  );

  return (
    <div>
      <TopNavBar />
      <Header />
      <h1 className="text-xl font-bold pt-3 pl-6">Custom-Printed Flat Pouch</h1>
      <div className="">
        <div className="flex items-start w-[100%]">
          {/* LEFT SIDE */}
          <div className="w-[50%]">
            <div className="flex items-center gap-[20px]">
              <div className="max-w-[80px] gap-6 mt-10 ml-10 transition-opacity duration-1000">
                {images.map((src, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedImage(src)}
                    className={`cursor-pointer border shadow-sm rounded-lg p-1 w-[100px] mt-3  transition-all duration-200 ${
                      selectedImage === src ? "border-black" : "border-gray-200"
                    }`}
                  >
                    <img
                      src={src}
                      alt="images"
                      className="rounded-md object-cover w-full "
                    />
                  </div>
                ))}
              </div>

              <div className=" ml-10">
                <div className="mt-1 flex-1 rounded-xl shadow-xl h-fit">
                  {selectedImage && (
                    <Image
                      src={selectedImage}
                      alt="Selected"
                      width={400}
                      height={400}
                      className="rounded-xl object-cover h-full w-full  "
                    />
                  )}
                </div>
              </div>
            </div>
            {/* RELATED PRODUCTS */}
            <div className="flex-col p-10">
              <h1 className="pt-10">Related Products</h1>

              {/* RELATED SECTION ONE */}
              <div className="flex items-center pt-6 gap-[25px]">
                <div className="shadow-xl">
                  <img
                    className=" w-30"
                    src="/filters_format(webp)_101.webp"
                    alt=""
                  />
                </div>
                <div className="flex-col gap-10">
                  <h1 className="font-bold text-xl">
                    Custom-Printed Coffee Bag Label
                  </h1>
                  <p>
                    Offered in 3 material options, these 4 label sizes pair
                    perfectly with our blank bags, making it easy to brand your
                    bags and blends.
                  </p>
                  <Link className="" href="/">
                    <p className="underline text-red-500">Check it out</p>
                  </Link>
                </div>
              </div>
              {/* RELATED SECTION TWO */}
              <div className="flex gap-[25px] pt-10">
                <div className="shadow-xl ">
                  <img className=" w-30" src="\monkey_stickers.png" alt="" />
                </div>
                <div className="flex-col">
                  <h1 className="font-bold text-xl">Die Cut Sticker</h1>
                  <p>
                    Offered in 3 material options, these 4 label sizes pair
                    perfectly with our blank bags, making it easy to brand your
                    bags and blends.
                  </p>
                  <Link href="/">
                    <p className="underline text-red-500">Get a quote</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col  gap-3 pb-20 w-[50%] ml-30">
            <h1 className="text-5xl tracking-tighter font-bold">
              Custom-Printed Flat Pouches
            </h1>
            <p className="font-semibold">
              A small but mighty product packaging solution.
            </p>
            <div className="flex">
              <Link href="/">
                <button className="border-2 font-bold border-blue-500 cursor-pointer text-blue-500 px-4 py-1 rounded-md">
                  {" "}
                  Custom
                </button>
              </Link>
            </div>
            <p className="font-light text-black">
              Flat pouches, also called pillow packs, are a simple and
              economical solution for samples or single servings. Ideal for
              hotels, resorts, office or restaurant service, or special
              occasions and events, they’re a great choice for packaging up
              smaller portions of coffee, tea, powdered mixes, and snacks. We
              can custom-print your business logo or design over both panels,
              providing a perfectly portioned punch for your brand.
            </p>

            <div className="mt-4 grid gap-x-6 gap-y-3 xs:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
              <div className="flex items-start gap-2">
                <img className="h-5 w-5" src="/box-regular-1.svg" alt="" />
                <span>Great for samples</span>
              </div>
              <div className="flex items-start gap-2">
                <img className="h-5 w-5" src="/award.svg" alt="" />
                <span>High-quality digital printing</span>
              </div>
              <div className="flex items-start gap-2">
                <img className="h-5 w-5" src="/list-solid-2.svg" alt="" />
                <span>Comes in a wide range of materials</span>
              </div>
              <div className="flex items-start gap-2">
                <img className="h-5 w-5" src="/leaf-regular-1.svg" alt="" />
                <span>Compostable options</span>
              </div>
              <div className="flex items-start gap-2">
                <img
                  className="h-5 w-5"
                  src="/money-bill-regular-1.svg"
                  alt=""
                />
                <span>Super economical</span>
              </div>
              <div className="flex items-start gap-2">
                <img
                  className="h-5 w-5"
                  src="/bolt-lightning-duotone-1.svg"
                  alt=""
                />
                <span>Lightning turnaround</span>
              </div>
            </div>

            <div className="mt-8 px-6">
              <h2 className="text-lg font-semibold mb-4">Material</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {colors.map((color) => (
                  <div
                    key={color.id}
                    className="border rounded-md overflow-hidden shadow-sm bg-white"
                  >
                    <img
                      src={color.img}
                      alt={color.label}
                      className="w-50 h-50 object-cover"
                    />
                    <div className="p-2 text-sm text-center">{color.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="">
              <div className="flex flex-col mt-4 gap-4">
                <label className="text-md font-light uppercase">Finish</label>
                <div className="flex gap-3">
                  <input
                    className="border-[0.3px] px-15 py-3 rounded-md hover:border-black"
                    type="text"
                  />
                  <input
                    className="border-[0.3px] px-15 py-3 rounded-md hover:border-black"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col mt-6 gap-4">
                <label className="text-md font-light uppercase">size</label>
                <div className="flex gap-3">
                  <input
                    className="border-[0.3px] px-50 py-3 rounded-md hover:border-black"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col mt-6 gap-4">
                <label className="text-md font-light uppercase">
                  Bag Contents
                </label>
                <div className="flex gap-3">
                  <input
                    className="border-[0.3px] px-50 py-3 rounded-md hover:border-black"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex mt-6  flex-col  gap-4">
                <Link className="" href="/">
                  <button className="flex  font-bold bg-black text-white xl:text-lg lg:px-6 lg:py-8 xl:px-50 xl:py-[16px] rounded-xl transition-all duration-300 ease-in-out hover:bg-[#8B2232] hover:-translate-y-1">
                    Build your bag quote
                  </button>
                </Link>
                <Link href="">
                  <button className="flex  font-bold text-black border hover:text-white xl:text-lg lg:px-6 lg:py-8 xl:px-45 xl:py-[15px]  rounded-xl transition-all duration-300 ease-in-out hover:bg-[#8B2232] hover:-translate-y-1">
                    Get your sample pack now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-2xl mb-40  p-20 rounded-2xl w-full">
          <div className="flex gap-10 border-b pb-2 text-gray-500">
            {detail.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`cursor-pointer text-xl pb-2 transition-all duration-300 ${
                  selectedId === item.id
                    ? "text-black font-bold border-b-2 border-black"
                    : "hover:text-black"
                }`}
              >
                {item.id}
              </button>
            ))}
          </div>

          <div className="mt-6 text-gray-700 text-base leading-relaxed">
            {detail.map(
              (item) =>
                selectedId === item.id && (
                  <p key={item.id} className="animate-fadeIn">
                    {item.desc}
                  </p>
                )
            )}
          </div>
        </div>
        <div className="bg-[#E1F3F8]  p-15  flex w-[100%] clip_path_flat ">
          {/* left side */}
          <div className="flex gap p-20">

          <div className=" flex flex-col gap-6 w-[50%]  ">
            <h1 className="text-4xl tracking-tight font-bold">
              Flat Pouch Anatomy
            </h1>
            <p>
              We want the flexible packaging you pick to check all the right
              boxes. Let’s cover the facts and features that make this choice
              stand out from the rest:
            </p>
            <ul>
              <li className="list-inside">Great for sample sizes.</li>
              <li>Lays flat.</li>
              <li>
                Wide variety of material selections including sustainable
                options.
              </li>
            </ul>
            <div className="bg-amber-50 rounded-xl h-[30%] w-[80%] overflow-hidden shadow-md">
              <div className="flex items-center p-5 border-b-2 gap-2">
                <img
                  className="h-8 w-8"
                  src="/roastar_star_black.c4236eba.svg"
                  alt=""
                />
                <h4 className="font-bold text-xl">Convenience Features</h4>
              </div>

              <div className="max-h-[8.5rem] overflow-y-auto p-6 hide-scrollbar">
                <div className="flex flex-col gap-2 tracking-tight text-gray-700 text-[20px] leading-relaxed">
                  <div>
                    • Hang holes allow you to hang your product for retail.
                  </div>
                  <div>
                    • Tear notches let consumers easily open your product.
                  </div>
                  <div>
                    • Zippers are a great choice for reclosure - and we have
                    multiple to select from.
                  </div>
                  <div>
                    • Degassing valves are great for products like coffee.
                  </div>
                  <div>• Rounded corners give a premium appearance.</div>
                  <div>
                    • Matte or gloss finishes available for customization.
                  </div>
                </div>
              </div>
            </div>
            <Link href="/" className="w-full sm:w-auto">
              <button className="flex justify-center items-center font-bold bg-black text-white xl:text-lg lg:px-6 lg:py-8 xl:px-7 xl:py-5 w-full sm:w-auto rounded-xl transition-all duration-300 ease-in-out hover:bg-[#8B2232] hover:-translate-y-1">
                Build Your Flat Pouch
              </button>
            </Link>
          </div>

          {/* right side */}
          <div className="w-[50%] ">
            <img
              className="w-full h-[80%]"
              src="/flat-pouch-anatomy (1).svg"
              alt=""
            />
          </div>
          </div>
        </div>
        <section className="p-10 mt-6 md:px-12">
          <div className=" flex lg:flex-row items-center flex-col-reverse gap-3 lg:gap-6 w-[100%] ">
            {/* ==== Image Grid ==== */}

            <div className="grid grid-cols-2 grid-rows-2 justify-center items-center gap-2 pb-10   mx-auto">
              {image.map((src, i) => (
                <div
                  key={i}
                  className="relative w-[250px] h-[250px] overflow-hidden rounded-lg shadow-sm bg-white mx-auto"
                >
                  <Image
                    src={src}
                    alt={`Inspiration ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="250px"
                  />
                </div>
              ))}
            </div>

            {/* ==== Text Section ==== */}
            <div className="w-[50%]">
              <div className="flex-1  flex flex-col">
                <h2 className="font-bold text-4xl mb-4">
                  Two-dimensional small pouch packaging can get surprisingly
                  deep.
                </h2>
                <p className="mb-8 text-lg text-black">
                  Your brand has a story to tell. See it come alive through
                  high-quality digital printing and packaging that was born to
                  spread the word.
                </p>

                {/* Desktop buttons */}
                <div className="mb-8 lg:block hidden">
                  <div className="flex gap-2">
                    <button className="border border-black rounded-xl px-15 py-3 font-semibold text-lg bg-white hover:bg-[#6a1826] hover:text-amber-50 transition-all duration-300 ease-in-out hover:-translate-y-1">
                      Designers That Can Make It Happen
                    </button>
                    <button className="rounded-xl px-6 py-3 font-semibold text-lg bg-black text-white hover:bg-[#6a1826] transition-all duration-300 ease-in-out hover:-translate-y-1">
                      Show Me More
                    </button>
                  </div>
                </div>
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

        {/* questions & answers */}
        <section className="bg-[#E1F3F8] py-40 px-6 md:px-20 clip_path_questions">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 ">
            Common questions we get about our Flat Pouches
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-5 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left font-semibold text-lg text-gray-800"
                >
                  <span className="font-bold text-xl">{faq.question}</span>
                  <span className="text-gray-600">
                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>

                {/* Answer Section */}
                <div
                  className={`mt-3 text-gray-600 leading-relaxed overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* resources */}
        <div className="bg-[#E1F3F8] mt-10 pt-20 pb-20 clip_path_resources">
          <h1 className="font-bold text-3xl pt-15 pl-15 ">
            See what sets us apart
          </h1>
          <div className="grid grid-cols-1   gap-[20px] p-20 md:grid-cols-2 lg:grid-cols-4">
            <div className=" flex flex-1 justify-between  gap-3 p-7  h-[400px]  w-full  rounded-xl bg-white   flex-col pt-4 text-left shadow-card-lg ">
              <div>
                <img
                  src="/materialoptions.svg"
                  alt="material"
                  className="h-15 w-15 object-contain"
                />
              </div>
              <div className="uppercase text-[rgba(0,128,163,1)] font-bold tracking-tight">
                product resources
              </div>
              <h1 className="font-bold text-2xl">Our Material Options</h1>
              <p className="">
                From compostable materials to various finish options – also a
                choice of hang hole, tear notch, and zipper – we’re glad to show
                you what our packaging is made of.
              </p>
              <Link href="/" className="text-[rgb(131,44,65,1)] text-[18px]">
                Show Me
              </Link>
            </div>
            <div className=" flex flex-1 justify-between gap-3 p-7 h-[400px] w-full rounded-xl bg-white   flex-col pt-4 text-left shadow-card-lg ">
              <div>
                <img
                  src="/featuresaccessories.svg"
                  alt="material"
                  className="h-15 w-15 object-contain"
                />
              </div>
              <div className="uppercase text-[rgba(0,128,163,1)] font-bold tracking-tight">
                product resources
              </div>
              <h1 className="font-bold text-2xl">Features & Accessories</h1>
              <p className="">
                Dial in the details of your pouch design. Explore closures,
                hang-holes, and valves galore.
              </p>
              <Link href="/" className="text-[rgb(131,44,65,1)] text-[18px] ">
                Start Accessorizing
              </Link>
            </div>
            <div className=" flex flex-1 justify-between gap-3 p-7  h-[400px] w-full rounded-xl bg-white  flex-col pt-4 text-left shadow-card-lg ">
              <div>
                <img
                  src="/findadesigner.svg"
                  alt="material"
                  className="h-15 w-15 object-contain"
                />
              </div>
              <div className="uppercase text-[rgba(0,128,163,1)] font-bold tracking-tight">
                Design Resources
              </div>
              <h1 className="font-bold text-2xl">Find a Designer</h1>
              <p className="">
                Get connected with specialists that can make your branding
                shine. Our network of designers has experience working with
                customers like you and guiding them through our process.
              </p>
              <Link href="/" className="text-[rgb(131,44,65,1)] text-[18px]">
                Let's Get Visual
              </Link>
            </div>
            <div className=" flex flex-1 justify-between  gap-3 p-7  h-[400px] w-full rounded-xl bg-white flex-col pt-4 text-left shadow-card-lg ">
              <div>
                <img
                  src="/rundown.svg"
                  alt="material"
                  className="h-15 w-15 object-contain"
                />
              </div>
              <div className="uppercase text-[rgba(0,128,163,1)] font-bold tracking-tight">
                General Resources
              </div>
              <h1 className="font-bold text-2xl">Can I Get the Rundown?</h1>
              <p className="">
                See what your packaging journey will look like – and why
                businesses that partner with us tend to keep in touch.
              </p>
              <Link href="/" className="text-[rgb(131,44,65,1)] text-[18px]">
                See the Process
              </Link>
            </div>
          </div>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
}

export default Products;
