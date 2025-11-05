import Link from "next/link";
import { IoIosArrowBack, IoLogoFacebook, IoLogoLinkedin } from "react-icons/io";
import { IoCart, IoChevronForwardSharp, IoSearchSharp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";


const TopNavBar = () => {

  const router = useRouter();
  const [isRegistered, setIsRegistered] = useState(false);

 
  useEffect(() => {
    const registered = localStorage.getItem("isRegistered");
    setIsRegistered(registered === "true");
  }, []);

  const handleAdminClick = () => {
    if (isRegistered) {
      
      router.push("/loginPage/login");
    } else {
      
      router.push("/registerPage/register");
    }
  };

  return (
    <div className=" bg-black text-white p-1.5  w-full ">
      <div className="flex justify-around gap-4 items-center">
        <div className=" hidden xl:flex  xl:gap-10 pt-2  ">
          <Link href="/" className=" hover:text-blue-600 transition-colors">
            <button>
              <IoLogoFacebook className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          </Link>
          <Link href="/" className=" hover:text-blue-600 transition-colors">
            <button>
              <FaInstagram className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          </Link>
          <Link href="/" className=" hover:text-blue-600 transition-colors">
            <button>
              <IoLogoLinkedin className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          </Link>
        </div>

        <div className="flex gap-2 items-center ">
          <Link href="/">
            <button className="md:block hidden ">
              <IoIosArrowBack size={20} />
            </button>
          </Link>
          <span className="font-stretch-condensed  mx-4 xl:text-lg text-12px  sm:tracking-tight">
            Only Celebrate National Coffee Day.Details Here.
          </span>
          <Link href="/">
            <button>
              <IoChevronForwardSharp size={20} />
            </button>
          </Link>
        </div>

        <div className="flex gap-5  xl:gap-8 items-center ">
          <Link href="/" className=" hover:text-blue-600 transition-colors">
            <button className="">
              <IoSearchSharp className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          </Link>
          <Link
            href="/registerPage/register"
            className=" hover:text-blue-600 transition-colors"
          >
            <button onClick={handleAdminClick}>
              <RiAdminFill className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          </Link>
          <Link href="/" className=" hover:text-blue-600 transition-colors">
            <button>
              <IoCart className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
