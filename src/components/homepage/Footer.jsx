import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FooterFacebookIcon,
  FooterGmailIcon,
  FooterInstaIcon,
  FooterTikTokIcon,
} from "../common/Icon";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <>
      <section className="bg-[#235C02] bg-no-repeat bg-cover bg-fixed bg-center relative mt-[-2px]">
        {/* <Image
          className=" absolute right-0 bottom-0 z-0 w-[297px] md:w-[303px] lg:w-[403px]"
          width={503}
          height={492}
          src="/images/png/footer-leaf-position-img.png"
          alt="leaf image"
        /> */}
        <div className="flex flex-wrap justify-center translate-y-[-50%]">
          <div className="w-full max-w-[882px] bg-[url('/images/png/netural-journey-bg-img.png')] bg-no-repeat bg-cover bg-center py-[43px] md:py-[52px] rounded-[10px] px-[20px] mx-[21px] xl:px-[90px]">
            <h2 className="ff_AktivGrotesk_bold font-normal text-[32px] md:text-[40px] mb-0 text-white text-center max-w-[682px] mx-auto leading-[38.46px] md:leading-[48.08px]">
              Start Your Carbon neutral journey, save the world
            </h2>
            <div className="mt-[30px] flex justify-center">
              <button className="px-[23px] py-[10.5px] border group border-white ff_poppins font-semibold text-[16px] text-white rounded-full hover:bg-white hover:text-[#44B902] duration-200 hover:text-#44B902 leading-6 flex items-center gap-[22px]">
                Start Measure!
                <span className="ff_poppins font-semibold text-[10px] text-white block leading-[18px] group-hover:text-[#44B902] opacity-70 after:content-[''] after:absolute relative after:left-[-11px] after:top-1/2 after:w-[1px] after:h-4 after:bg-white group-hover:opacity-90 group-hover:after:opacity-40 group-hover:after:bg-[#44B902] after:duration-200 duration-200  after:opacity-10  after:-translate-y-1/2 ">
                  No CC Required
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-3 xl:px-0 pb-[60px] sm:pb-[71px] z-10 relative mt-[-68px]">
          <div className="flex flex-col items-center justify-center">
            <Image
              className=" w-[259px] lg:w-[454px] md:w-[350px]"
              width={454}
              height={75}
              src="/images/webp/footer-logo.webp"
              alt="footer logo"
            />
            <ul className="flex gap-[20px] items-center justify-center flex-row flex-wrap duration-200 mt-[20px] px-[15px] min-[376px]:px-[50px] sm:px-0">
              <li>
                <Link
                  className="ff_poppins font-normal text-[16px] text-white opacity-80 hover:after:content-[''] after:absolute after:w-0 hover:after:w-full after:duration-200 after:h-[2px] after:bg-[white] relative after:left-0 after:bottom-[-5px] after:rounded-[5px]"
                  href="#globalwarming"
                >
                  Global Warming is Real?
                </Link>
              </li>
              <li>
                <Link
                  className="ff_poppins font-normal text-[16px] text-white opacity-80 hover:after:content-[''] after:absolute after:w-0 hover:after:w-full after:duration-200 after:h-[2px] after:bg-[white] relative after:left-0 after:bottom-[-5px] after:rounded-[5px]"
                  href="#pitchingdeck"
                >
                  Pitching Deck
                </Link>
              </li>
              <li>
                <Link
                  className="ff_poppins font-normal text-[16px] text-white opacity-80 hover:after:content-[''] after:absolute after:w-0 hover:after:w-full after:duration-200 after:h-[2px] after:bg-[white] relative after:left-0 after:bottom-[-5px] after:rounded-[5px]"
                  href="#investor"
                >
                  Investor
                </Link>
              </li>
              <li>
                <Link
                  className="ff_poppins font-normal text-[16px] text-white opacity-80 hover:after:content-[''] after:absolute after:w-0 hover:after:w-full after:duration-200 after:h-[2px] after:bg-[white] relative after:left-0 after:bottom-[-5px] after:rounded-[5px]"
                  href="#team"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  className="ff_poppins font-normal text-[16px] text-white opacity-80 hover:after:content-[''] after:absolute after:w-0 hover:after:w-full after:duration-200 after:h-[2px] after:bg-[white] relative after:left-0 after:bottom-[-5px] after:rounded-[5px]"
                  href="#workwithus"
                >
                  Work with us
                </Link>
              </li>
            </ul>
            <div className="flex mt-[25px]">
              <Link
                className=" hover:translate-y-[-8%] duration-200"
                href="https://www.facebook.com/"
                target="_blank"
              >
                <FooterFacebookIcon />
              </Link>
              <Link
                className=" hover:translate-y-[-8%] duration-200"
                href="https://www.instagram.com/"
                target="_blank"
              >
                <FooterInstaIcon />
              </Link>
              <Link
                className=" hover:translate-y-[-8%] duration-200"
                href="https://www.tiktok.com/en/"
                target="_blank"
              >
                <FooterTikTokIcon />
              </Link>
              <Link
                className=" hover:translate-y-[-8%] duration-200"
                href="https://www.gmail.com/"
                target="_blank"
              >
                <FooterGmailIcon />
              </Link>
            </div>
          </div>
        </div>
        <div className=" border-t border-[#123200] z-10 relative">
          <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-3 xl:px-0">
            <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-center py-[21px]">
              <p className=" ff_poppins font-normal text-[15px] text-[#9A9F9C] mb-0 text-center sm:text-start mt-[27px] sm:mt-0 pb-[10px] sm:pb-0">
                Copyright©{year} | All Rights Reserved
              </p>
              <p className=" ff_poppins font-normal text-[15px] text-[#9A9F9C] mb-0 text-center sm:text-start cursor-pointer hover:text-white duration-200">
                Terms & Conditions | Privacy & Security
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
