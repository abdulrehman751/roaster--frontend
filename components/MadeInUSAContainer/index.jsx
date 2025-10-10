import Image from "next/image";
import React from "react";

const MadeInUSAContainer = () => (
  <section className="py-16 px-4  md:px-12">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
      {/* Left: Badge Image */}
      <div className="bg-white rounded-xl shadow flex items-center justify-center p-8 flex-1 max-w-lg">
        <Image
          src="/filters_format(webp)_6.webp" // Place your badge image in public folder
          alt="Made in the USA badge"
          width={340}
          height={340}
          className="object-contain w-full h-auto"
        />
      </div>
      {/* Right: Text Section */}
      <div className="flex-1 max-w-xl">
        <h3 className="text-[#0099B1] font-bold text-lg mb-2">Packaging You Can Rely On</h3>
        <h2 className="font-bold text-4xl mb-4">Proudly Made in the USA</h2>
        <p className="mb-4 text-lg text-gray-700">
          Looking for premium packaging solutions without the headaches of overseas delays, tariffs, or hidden costs? We manufacture everything right here in the USA, ensuring fast turnaround, flat-rate shipping, and unmatched quality.
        </p>
        <p className="mb-4 text-lg text-gray-700">
          With our top-tier customer service and commitment to excellence, you get more than packaging – you get peace of mind.
        </p>
        <p className="font-bold text-base text-black">
          USA Made. No Tariffs. No Surprises. Just Quality.
        </p>
      </div>
    </div>
    {/* CTA Banner */}
    <div className="mt-12">
      <div className="bg-[#00997A] rounded-xl flex flex-col md:flex-row items-center justify-between px-8 py-8 gap-4">
        <div className="flex items-center gap-2 text-white text-2xl font-bold">
          <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block"><path d="M2 22C10 2 50 2 58 22" stroke="white" strokeWidth="3" strokeDasharray="6 6" strokeLinecap="round"/></svg>
          Ready to get started?
        </div>
        <div className="flex-1 text-white text-lg text-center md:text-left">Let's make some awesome packaging together.</div>
        <button className="border border-white text-white font-bold rounded-xl px-6 py-3 bg-transparent hover:bg-white hover:text-[#00997A] hover:underline transition">Get a Quote</button>
        <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block rotate-180"><path d="M2 22C10 2 50 2 58 22" stroke="white" strokeWidth="3" strokeDasharray="6 6" strokeLinecap="round"/></svg>
      </div>
    </div>
  </section>
);

export default MadeInUSAContainer;
