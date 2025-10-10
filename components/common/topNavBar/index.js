import Link from 'next/link';
import { IoIosArrowBack, IoLogoFacebook, IoLogoLinkedin } from "react-icons/io";
import { IoCart, IoChevronForwardSharp, IoSearchSharp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import React from 'react';

const TopNavBar = () => {
  return (
    <div className=' bg-black text-white p-1.5  w-full '>
        <div className="flex justify-around gap-4 items-center">
        <div  className="flex  gap-10 pt-2" >
          <Link href="/" >
            <button>
              <IoLogoFacebook size={23} />{" "}
            </button>
          </Link>
          <Link href="/">
            <button>
              <FaInstagram size={23} />{" "}
            </button>
          </Link>
          <Link href="/">
            <button>
              <IoLogoLinkedin size={23} />{" "}
            </button>
          </Link>
        </div>
      

      
        <div className='flex gap-2 items-center'>
          <Link href="/">
            <button>
              <IoIosArrowBack size={20} />
            </button>
          </Link>
          <span className="mx-4 whitespace-nowrap">9/29 Only - Celebrate National Coffee Day with Big Perks. Details Here.</span>
          <Link href="/">
            <button>
              <IoChevronForwardSharp size={20} />
            </button>
          </Link>
        </div>
      

      <div className='flex gap-8 items-center'>
        <Link href="/">
          <button>
            <IoSearchSharp size={23} />
          </button>
        </Link>
        <Link href="/">
          <button>
            <RiAdminFill size={23} />
          </button>
        </Link>
        <Link href="/">
          <button>
            <IoCart size={23} />
          </button>
        </Link>
      </div>
      </div>
    
    </div>
  );
}

export default TopNavBar;
