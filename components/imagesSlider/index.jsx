import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
function CenterMode() {
  const images = [
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
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className="bg-white border border-black shadow-lg absolute right-[-50px] bottom-40 flex items-center justify-center w-12 h-12 rounded-4xl cursor-pointer hover:bg-[#8B2232] transition-all duration-200"
        style={{ ...style, right: "-40px", zIndex: 10 }}
        onClick={onClick}
      >
        <AiOutlineRight size={24} className="text-black" />
      </div>
    );
  };
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className="bg-white border border-black shadow-lg absolute top-40 flex items-center justify-center w-12 h-12 rounded-4xl cursor-pointer hover:bg-[#8B2232]  transition-all duration-200"
        style={{ ...style, left: "-40px", zIndex: 10 }}
        onClick={onClick}
      >
        <AiOutlineLeft size={24} className="text-black" />
      </div>
    );
  };

  const settings = {
    centerMode: true,
    className: "center",
    centerPadding: "60px",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="relative  pt-20">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-4">
            <img
              src={image.pathName}
              alt={`Slide ${index + 1}`}
              title="Slider"
              className="mx-auto h-64 object-contain"
            />
            <div className="text-xl mt-4 font-bold text-center ">
              {image.title}
            </div>
            <div className="text-center text-gray-600">{image.description}</div>
          </div>
        ))}
      </Slider>
      <div className="flex justify-center gap-6 mt-10 pb-10">
        <Link
          href="/"
          className="text-black border-2 border-black px-6 py-3 font-bold  rounded-2xl transition-all duration-300 ease-in-out hover:bg-[#6a1826] hover:-translate-y-1 "
        >
          <button>Not sure where to start? Take our quiz!</button>
        </Link>
        <Link
          href="/"
          className="text-white border-2 bg-black border-black px-6 py-3 font-bold  rounded-2xl transition-all duration-300 ease-in-out hover:bg-[#6a1826] hover:-translate-y-1"
        >
          <button>Shop All Costum-Printed Packaging</button>
        </Link>
      </div>

      <Image
        src="/down-large-arrow.435c90b9.svg"
        alt="arrow"
        height={20}
        width={50}
        className="absolute left-50 -bottom-15 font-bold  rotate-12 z-40"
      />
      <span className="absolute left-59 -bottom-5 font-bold text-lg text-black rotate-12 z-40 ">
        We dont mean
        <br />
        to brag,but...
      </span>

    
    </div>
  );
}

export default CenterMode;
