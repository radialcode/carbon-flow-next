import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import "intersection-observer";

import { ScrollDownIcon } from "../common/Icon";
const HomeHero = () => {
  const [imgScale, setImgScale] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const imageRef = useRef(null);

  useEffect(() => {
    if (inView) {
      setImgScale(true);
    }
  }, [inView]);
  return (
    <>
      <div className="bg-[#061E10] h-[900px]  sm:min-h-screen 3xl:min-h-0 lg:h-[calc(100vh-80px)]  flex flex-col overflow-hidden relative pt-12">
        <a
          className="absolute ff_poppins font-light text-[14px] text-white hidden -rotate-90 bottom-[140px] left-[-50px] 3xl:left-0 uppercase tracking-[10px] xl:flex gap-[17px]"
          href="#pitchingdeck">
          <span className="rotate-90">
            <ScrollDownIcon />
          </span>
          Scroll Down
        </a>
        <div className=" container xl:max-w-[1140px] 3xl:max-w-[1320px] px-3 xl:px-0 flex flex-grow mx-auto">
          <div className=" flex flex-col lg:flex-row items-center  lg:justify-between ">
            <div className="w-full md:w-[90%] lg:w-[58%] relative">
              <h1 className="ff_AktivGrotesk_bold text-[36px] md:text-[38px] xl:text-[48px] font-normal leading-[115%] capitalize text-white lg:pb-20">
                The <span className="text-[#44B902]">most effective way</span>{" "}
                to measure Forrest & farm’s carbon{" "}
                <span className="text-[#44B902]">credits without breaking</span>{" "}
                the bank
              </h1>
              <p className="ff_poppins text-base font-normal capitalize leading-[160%] text-white md:hidden pt-[18px]">
                Using Satellite and predictive AI gives unparalleled way to
                measure carbon credit with the nost accurate and the best cost
                effective
              </p>
              <div className="flex justify-between sm:justify-normal 2xsm:gap-[25px]  pt-[30px] items-center md:hidden">
                <button className=" p-[14px_23px] border border-[#44B902] ff_poppins font-semibold text-[14px] 2xsm:text-[16px] text-white rounded-full hover:bg-[#44B902] duration-200">
                  Start Measure!
                </button>
                <p className="ff_poppins font-semibold text-[14px] 2xsm:text-[16px] text-white duration-200 hover:text-[#44B902]">
                  No CC Required
                </p>
              </div>
              <p className="text-[12px] ff_poppins font-bold italic text-white pt-[18px] md:hidden">
                Best on 5 years research pulished in blr blr blr
              </p>
            </div>

            <div className="w-full xs:w-[75%] lg:w-1/2">
              <div className="hero_clipPath  lg:absolute right-1/2 mt-[60px] xsm:mt-0  sm:mt-10 md:mt-56  bottom-[-60px] xl:bottom-[-120px] lg:right-[-60px] xl:right-[-80px] 2xl:right-[-90px]">
                <Image
                  ref={imageRef}
                  className={`transition-transform transform ${
                    imgScale ? "scale-110" : "scale-105"
                  } transition-all hero_clipPath w-full lg:max-w-[550px] xl:max-w-[700px] 2xl:max-w-[800px] 3xl:max-w-[900px] xl:h-[700px] 2xl:h-[800px] 3xl:h-[900px] h-[350px] xsm:h-[600px] sm:h-[550px] `}
                  src="/images/webp/forrest_hero_img.webp"
                  width={808}
                  height={846}
                  alt="blockchain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
