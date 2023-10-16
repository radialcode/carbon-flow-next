import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CrossIcon, MenuIcon } from "../common/Icon";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    if (showNav) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showNav]);

  return (
    <div className="bg-[#0D2517] relative z-[100]">
      <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto  flex justify-between items-center md:py-[14px] py-[23px] px-3 xl:px-0">
        <Link className="relative z-50" href="/">
          <Image
            className="max-w-[202px]"
            src="/images/png/Logo.png"
            width={202}
            height={34}
            alt="logo image"
          />
        </Link>
        <ul
          className={`flex xl:gap-[33px] gap-[20px] items-center lg:static fixed top-0 lg:min-h-fit min-h-screen w-full lg:w-auto bg-[#0D2517] justify-center lg:flex-row flex-col duration-200 ${
            showNav ? "left-0" : " -left-full"
          }`}
        >
          <li>
            <a
              onClick={() => {
                setShowNav(false);
              }}
              className="ff_poppins font-normal text-[15px] xl:text-[16px] text-white opacity-80 after:content-[''] after:absolute after:w-0 hover:after:w-full after:duration-200 after:h-[2px] after:bg-[white] relative after:left-0 after:bottom-[-5px] after:rounded-[5px] hover:opacity-100"
              href="#globalwarming"
            >
              Global Warming is Real?
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setShowNav(false);
              }}
              className="ff_poppins font-normal text-[15px] xl:text-[16px] text-white opacity-80 after:content-[''] after:absolute after:w-0 hover:after:w-full after:duration-200 after:h-[2px] after:bg-[white] relative after:left-0 after:bottom-[-5px] after:rounded-[5px] hover:opacity-100"
              href="#pitchingdeck"
            >
              Pitching Deck
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setShowNav(false);
              }}
              className="ff_poppins font-normal text-[15px] xl:text-[16px] text-white opacity-80 after:content-[''] after:absolute after:w-0 hover:after:w-full after:duration-200 after:h-[2px] after:bg-[white] relative after:left-0 after:bottom-[-5px] after:rounded-[5px] hover:opacity-100"
              href="#investor"
            >
              Investor
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setShowNav(false);
              }}
              className="ff_poppins font-normal text-[15px] xl:text-[16px] text-white opacity-80 after:content-[''] after:absolute after:w-0 hover:after:w-full after:duration-200 after:h-[2px] after:bg-[white] relative after:left-0 after:bottom-[-5px] after:rounded-[5px] hover:opacity-100"
              href="#team"
            >
              Team
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setShowNav(false);
              }}
              className="ff_poppins font-normal text-[15px] xl:text-[16px] text-white opacity-80 after:content-[''] after:absolute after:w-0 hover:after:w-full after:duration-200 after:h-[2px] after:bg-[white] relative after:left-0 after:bottom-[-5px] after:rounded-[5px] hover:opacity-100"
              href="#workwithus"
            >
              Work with us
            </a>
          </li>
          <li className="ps-5">
            <button className="ff_poppins font-semibold text-[16px] text-white px-[23px] py-[14px] border border-[#44B902] rounded-full hover:bg-[#44B902] duration-200">
              Contact Us
            </button>
          </li>
        </ul>
        <div
          onClick={() => {
            setShowNav(!showNav);
          }}
          className="lg:hidden block relative z-50"
        >
          {showNav ? <CrossIcon /> : <MenuIcon />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
