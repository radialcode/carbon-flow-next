import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { CrossIcon, MenuIcon } from './common/Icon';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  //   if (showNav) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }
  return (
    <div className="bg-[#0D2517] relative z-[100]">
      <div className="container xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto  flex justify-between items-center md:py-[14px] py-[23px] px-3 xl:px-0">
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
            <Link
              className="ff_poppins font-normal text-[16px] text-white opacity-80"
              href=""
            >
              Global Warming is Real?
            </Link>
          </li>
          <li>
            <Link
              className="ff_poppins font-normal text-[16px] text-white opacity-80"
              href=""
            >
              Pitching Deck
            </Link>
          </li>
          <li>
            <Link
              className="ff_poppins font-normal text-[16px] text-white opacity-80"
              href=""
            >
              Investor
            </Link>
          </li>
          <li>
            <Link
              className="ff_poppins font-normal text-[16px] text-white opacity-80"
              href=""
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              className="ff_poppins font-normal text-[16px] text-white opacity-80"
              href=""
            >
              Work with us
            </Link>
          </li>
          <li className="ps-5">
            <button className="ff_poppins font-semibold text-[16px] text-white px-[23px] py-[14px] border border-[#44B902] rounded-full">
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
}

export default Navbar