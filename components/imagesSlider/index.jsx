import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

function SliderSection() {
  const images = [
    // ... (Your images array is fine and remains unchanged)
    {
      pathName: "/flat-bottom-bag.webp",
      title: "Flat Bottom Bag",
      description:
        "Maximum shelf stability and superb protection,wrapped in an elegant exterior-a great bag for a coffee,candy,pet treats,",
    },
    {
      pathName: "/al jhonsen.webp",
      title: "Gusset Bag",
      description:
        "Maximum shelf stability and superb protection,wrapped in an elegant exterior-a great bag for a coffee,candy,pet treats,",
    },
    {
      pathName: "/caramel-chocolate.webp",
      title: "Stand up Pouch",
      description:
        "Maximum shelf stability and superb protection,wrapped in an elegant exterior-a great bag for a coffee,candy,pet treats,",
    },
    {
      pathName: "/stock.webp",
      title: "Stock Packaging ",
      description:
        "Maximum shelf stability and superb protection,wrapped in an elegant exterior-a great bag for a coffee,candy,pet treats,",
    },
    {
      pathName: "/coffee-bag.webp",
      title: "Coffee Bag Labels",
      description:
        "Maximum shelf stability and superb protection,wrapped in an elegant exterior-a great bag for a coffee,candy,pet treats,",
    },
    {
      pathName: "/rishi.webp",
      title: "Flat Pouch",
      description:
        "Maximum shelf stability and superb protection,wrapped in an elegant exterior-a great bag for a coffee,candy,pet treats,",
    },
    {
      pathName: "/coffee-comp.webp",
      title: "Paper Tube",
      description:
        "Maximum shelf stability and superb protection,wrapped in an elegant exterior-a great bag for a coffee,candy,pet treats,",
    },
    {
      pathName: "/monkey_stickers.png",
      title: "Sticker",
      description:
        "Maximum shelf stability and superb protection,wrapped in an elegant exterior-a great bag for a coffee,candy,pet treats,",
    },
    {
      pathName: "/drinks.webp",
      title: "Beverage Label",
      description:
        "Maximum shelf stability and superb protection,wrapped in an elegant exterior-a great bag for a coffee,candy,pet treats,",
    },
    {
      pathName: "/tin-can.webp",
      title: "Tin Can",
      description:
        "Maximum shelf stability and superb protection,wrapped in an elegant exterior-a great bag for a coffee,candy,pet treats,",
    },
    {
      pathName: "/beans.webp",
      title: "Roaster Design Lab",
      description:
        "Maximum shelf stability and superb protection,wrapped in an elegant exterior-a great bag for a coffee,candy,pet treats,",
    },
  ];

  // Custom Arrow Components
  // FIX: Adjusted the inline 'style' to control positioning as react-slick relies on it.
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute right-0 top-1/3 flex items-center justify-center w-12 h-12 rounded-xl cursor-pointer bg-white border border-black shadow-lg hover:bg-[#6a1826] transition-all duration-200 z-10"
        // Key fix: Use !important to override react-slick's default styles
        style={{
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
        }}
        onClick={onClick}
      >
        <AiOutlineRight size={24} className="text-black" />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute left-0 top-1/3 flex items-center justify-center w-12 h-12 rounded-xl cursor-pointer bg-white border border-black shadow-lg hover:bg-[#6a1826] transition-all duration-200 z-10"
        // Key fix: Use !important to override react-slick's default styles
        style={{
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
        }}
        onClick={onClick}
      >
        <AiOutlineLeft size={24} className="text-black" />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    className: "products-slider",
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="w-[100%] mx-auto p-10 md:px-10 mb-5 ">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-4">
            <div className="flex flex-col items-center justify-start h-full p-4 hover:shadow-lg transition">
              <Image
                src={image.pathName}
                alt={`Slide ${index + 1}`}
                width={200}
                height={200}
                className="mx-auto w-auto h-84 md:h-100 object-contain"
              />
              <div className="text-xl mt-4 font-bold text-center">
                {image.title}
              </div>
              <div className="text-center text-gray-600 text-sm mt-1">
                {image.description}
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="sm:flex flex-row   w-full mb-10 items-center justify-center">
        <div className="flex gap-3  flex-col sm:flex-row-reverse  mt-10  sm:gap-6 w-full items-center justify-center">
          {/* Button 1 */}
          <Link href="/" passHref className="w-full sm:w-auto">
            <button className="flex justify-center items-center font-bold w-full text-black border border-black  px-7 py-4 sm:px-6 sm:py-7  md:px-7 md:py-4 rounded-xl transition-all duration-300 ease-in-out hover:bg-[#8B2232] hover:text-white hover:-translate-y-1">
              Not sure where to start? Take our quiz!
            </button>
          </Link>

          {/* Button 2 */}
          <Link href="/" passHref className="w-full sm:w-auto">
            <button className="flex justify-center items-center font-bold w-full bg-black text-white px-7 py-4 sm:px-6 sm:py-6  md:px-7 md:py-4  rounded-xl transition-all duration-300 ease-in-out hover:bg-[#8B2232] hover:-translate-y-1">
              Shop All Custom-Printed Packaging
            </button>
          </Link>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="absolute md:left-[10%] md:-bottom-10 left-[2%] -bottom-4   font-bold md:text-lg text:sm text-black rotate-12 z-40">
          We dont mean
          <br />
          to brag,but...
        </div>
        <Image
          src="/down-large-arrow.435c90b9.svg"
          alt="arrow"
          height={40}
          width={40}
          className="absolute md:left-[10%] md:-bottom-25  left-[1%] -bottom-15 font-bold  rotate-12 z-40"
        />
      </div>
    </div>
  );
}

export default SliderSection;
