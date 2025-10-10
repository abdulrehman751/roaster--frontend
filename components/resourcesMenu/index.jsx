import React from 'react';

const ResourcesMenu = () => {
  return (
    <div className=" sticky  z-50  left-0 top-full mt-2 bg-white shadow-xl rounded-lg p-8 w-[800px] grid grid-cols-3 gap-10
      opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              <div>
          <h4 className="font-bold text-lg text-black">Design Resources</h4>
          <ul className="text-black-400 space-y-1 mt-2">
            <li className="hover:text-[#6A1826] cursor-pointer hover:underline">Roastar Design Lab</li>
            <li className="hover:text-[#6A1826] cursor-pointer hover:underline">Designer Network</li>
            <li className="hover:text-[#6A1826] cursor-pointer hover:underline">Templates & Guides</li>
          </ul>
        </div>
        {/* column 2 */}
        <div>
          <h4 className="font-bold text-black">Product Resources</h4>
          <ul className="text-black-400 space-y-1 mt-2">
            <li className="hover:text-[#6A1826] cursor-pointer hover:underline">Product Finder</li>
            <li className="hover:text-[#6A1826] cursor-pointer hover:underline">Material Guide</li>
            <li className="hover:text-[#6A1826] cursor-pointer hover:underline">Features & Accessories</li>
            <li className="hover:text-[#6A1826] cursor-pointer hover:underline">Order Samples</li>
          </ul>
        </div>
        {/* column 3 */}
        <div>
          <h4 className="font-bold text-black">General Resources</h4>
          <ul className="text-black-400 space-y-1 mt-2">
            <li className="hover:text-[#6A1826] cursor-pointer hover:underline">How It Works</li>
            <li className="hover:text-[#6A1826] cursor-pointer hover:underline">Blog</li>
            <li className="hover:text-[#6A1826] cursor-pointer hover:underline">FAQs</li>
            <li className="hover:text-[#6A1826] cursor-pointer hover:underline">Current Lead Times</li>
          </ul>
        </div>
    </div>
  );
}

export default ResourcesMenu;
