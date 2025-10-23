import Image from "next/image";
import React from "react";

const MadeInUSAContainer = () => (
  <section className="py-16 px-4 md:px-12">
    {/* Top Section */}
    <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8">
      {/* Left: Badge */}
      <div className="bg-white rounded-xl shadow flex items-center justify-center p-8 flex-1 max-w-lg">
        <Image
          src="/filters_format(webp)_6.webp"
          alt="Made in the USA badge"
          width={340}
          height={340}
          className="object-contain w-full h-auto"
        />
      </div>

      {/* Right: Text */}
      <div className="flex-1 max-w-xl">
        <h3 className="text-[#0099B1] font-bold text-md xl:text-lg mb-2">
          Packaging You Can Rely On
        </h3>
        <h2 className="font-bold text-2xl xl:text-4xl mb-4">
          Proudly Made in the USA
        </h2>
        <p className="mb-4 text-gray-700 text-md xl:text-lg">
          Looking for premium packaging solutions without the headaches of
          overseas delays, tariffs, or hidden costs? We manufacture everything
          right here in the USA, ensuring fast turnaround, flat-rate shipping,
          and unmatched quality.
        </p>
        <p className="text-gray-700 mb-4 text-base">
          With our top-tier customer service and commitment to excellence, you
          get more than packaging – you get peace of mind.
        </p>
        <p className="font-bold text-black text-base">
          USA Made. No Tariffs. No Surprises. Just Quality.
        </p>
      </div>
    </div>

    {/* CTA Banner */}
<div className="  mt-40 px-4">
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
);

export default MadeInUSAContainer;
