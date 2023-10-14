import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FooterFacebookIcon, FooterGmailIcon, FooterInstaIcon, FooterTikTokIcon } from './common/Icon';

const Footer = () => {
     const today = new Date();
     const year = today.getFullYear();
  return (
    <>
      <section className="bg-[url('/images/webp/Foooter-bg-img.webp')] bg-no-repeat bg-cover bg-center pt-[209px]">
        <div className="container xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 xl:px-0 pb-[60px] sm:pb-[71px]">
          <div className="flex flex-col items-center justify-center">
            <Image
              className=" w-[259px] sm:w-[454px]"
              width={454}
              height={75}
              src="/images/webp/footer-logo.webp"
              alt="footer logo"
            />
            <ul className="flex gap-[20px] items-center justify-center flex-row flex-wrap duration-200 mt-[20px]">
              <li>
                <Link
                  className="ff_poppins font-normal text-[16px] text-white opacity-80 hover:after:content-[''] after:absolute after:w-0 hover:after:w-full after:duration-200 after:h-[2px] after:bg-[white] relative after:left-0 after:bottom-[-5px] after:rounded-[5px]"
                  href=""
                >
                  Global Warming is Real?
                </Link>
              </li>
              <li>
                <Link
                  className="ff_poppins font-normal text-[16px] text-white opacity-80 hover:after:content-[''] after:absolute after:w-0 hover:after:w-full after:duration-200 after:h-[2px] after:bg-[white] relative after:left-0 after:bottom-[-5px] after:rounded-[5px]"
                  href=""
                >
                  Pitching Deck
                </Link>
              </li>
              <li>
                <Link
                  className="ff_poppins font-normal text-[16px] text-white opacity-80 hover:after:content-[''] after:absolute after:w-0 hover:after:w-full after:duration-200 after:h-[2px] after:bg-[white] relative after:left-0 after:bottom-[-5px] after:rounded-[5px]"
                  href=""
                >
                  Investor
                </Link>
              </li>
              <li>
                <Link
                  className="ff_poppins font-normal text-[16px] text-white opacity-80 hover:after:content-[''] after:absolute after:w-0 hover:after:w-full after:duration-200 after:h-[2px] after:bg-[white] relative after:left-0 after:bottom-[-5px] after:rounded-[5px]"
                  href=""
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  className="ff_poppins font-normal text-[16px] text-white opacity-80 hover:after:content-[''] after:absolute after:w-0 hover:after:w-full after:duration-200 after:h-[2px] after:bg-[white] relative after:left-0 after:bottom-[-5px] after:rounded-[5px]"
                  href=""
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
        <div className=" border-t-2 border-[#123200]">
          <div className="container xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 xl:px-0">
            <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-center py-[21px]">
              <p className=" ff_poppins font-normal text-[15px] text-[#9A9F9C] mb-0 text-center sm:text-start mt-[27px] sm:mt-0 pb-[10px] sm:pb-0">
                Copyright©{year} | All Rights Reserved
              </p>
              <p className=" ff_poppins font-normal text-[15px] text-[#9A9F9C] mb-0 text-center sm:text-start">
                Terms & Conditions | Privacy & Security
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer