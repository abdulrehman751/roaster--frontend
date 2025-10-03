import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardContainer = () => {
  const cards = [
    {
      icon: "/cart-icon.svg",
      title: "Low Minimum Order Quantities",
      desc: "Order as few as 100 custom-printed items at first, and scale up to tens of thousands if needed. No special setup fees for smaller quantity orders.",
      link: { href: "/", text: "Get A Quote" },
    },
    {
      icon: "/truck-icon.svg",
      title: "Fastest Turnaround in the Industry",
      desc: "We measure our manufacturing lead times in days (not weeks). We update lead times on our website weekly, so they're always current when you're ready to order.",
      link: { href: "/", text: "Current Lead Times" },
    },
    {
      icon: "/customize-icon.svg",
      title: "Easy Online Ordering Process",
      desc: "Our process keeps you in touch with your custom-printed project from start to finished product. Configure your product, manage artwork, proof, and print – all online.",
      link: { href: "/", text: "How It Works" },
    },
    {
      icon: "/quanity-icon.svg",
      title: "No Tooling Charges or Setup Fees",
      desc: "We don’t nickel-and-dime you on setup and tooling fees, or drown you in plate charges. We love projects with different artwork and lots of colors. Get creative and order multiple designs!",
      link: { href: "/", text: "Order Samples" },
    },
    {
      icon: "/online-ordering-icon.svg",
      title: "Customize with Features and Options",
      desc: "Configure our packaging to fit the custom design needs of your product, from bag materials to metallic effects and everything in between.",
      link: { href: "/", text: "Features & Accessories" },
    },
    {
      icon: "/customer-service-icon.svg",
      title: "Legendary Customer Experience",
      desc: "Our self-serve online project process makes ordering a breeze, but if you need help, we’re here with dedicated customer service and pre-press support.",
      link: { href: "/", text: "Contact Us" },
    },
  ];

  return (
    <div className="relative mt-20 pt-30 bg-sky-100 pb-35">
      <div className="max-w-7xl px-6 mx-auto">
        <div
          className="absolute -bottom-1 left-0 w-full h-20 bg-white z-10"
          style={{ clipPath: "polygon(100% 0, 100% 101%, 0 101%)" }}
        ></div>

           <Image
                      src="/down-curved-arrow.svg"
                      alt="arrow"
                      height={20}
                      width={50}
                      className="absolute right-90 -bottom-5 font-bold  rotate-12 z-40"
                    />
                    <span className="absolute right-90 bottom-10 font-bold text-lg text-black rotate-12 z-40 ">
                      Look! A video <br/> to watch!
                    </span>
        {/* Top Section: Heading + First 2 Cards */}
        <div className="md:col-span-2 col-span-1 flex items-start">
          {/* Left side heading */}
          <div>
            <h1 className="font-bold text-4xl mb-4">Hi, we're Roastar.</h1>
            <p className="text-lg text-gray-700">
              We believe that every business deserves to look like a really big
              deal. From coffee to chocolate, pet treats to specialty foods,
              whatever you’re packaging – we're here to help.
            </p>
          </div>

          {/* First 2 cards */}
          <div className="lg:col-span-2 grid grid-cols- md:grid-cols-2 gap-6">
            {cards.slice(0, 2).map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow p-6 flex flex-col h-full"
              >
                <div className="mb-4">
                  <Image src={card.icon} alt="icon" width={40} height={40} />
                </div>
                <h2 className="font-bold text-lg mb-2">{card.title}</h2>
                <p className="flex-1">{card.desc}</p>
                <Link
                  href={card.link.href}
                  className="mt-4 text-[#B03A2E] font-semibold hover:underline"
                >
                  {card.link.text}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {cards.slice(2).map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-6 flex flex-col h-full"
            >
              <div className="mb-4">
                <Image src={card.icon} alt="icon" width={40} height={40} />
              </div>
              <h2 className="font-bold text-lg mb-2">{card.title}</h2>
              <p className="flex-1">{card.desc}</p>
              <Link
                href={card.link.href}
                className="mt-4 text-[#B03A2E] font-semibold hover:underline"
              >
                {card.link.text}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
