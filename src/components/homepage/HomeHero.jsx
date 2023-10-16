import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import "intersection-observer";

import { ScrollDownIcon } from "../common/Icon";
const HomeHero = ({ heroImage }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <div className="bg-[#061E10] h-[1000px] xs:h-[950px] lg:h-[620px] 2xl:min-h-screen xl:h-[calc(100vh-80px)]  flex flex-col overflow-hidden relative pt-[130px] md:pt-[120px]  3xl:pt-0">
        <a
          className="absolute ff_poppins font-light text-[14px] text-white hidden -rotate-90 bottom-[140px] left-[-50px] 3xl:left-0 uppercase tracking-[10px] 2xl:flex gap-[17px]"
          href="#pitchingdeck"
        >
          <span className="rotate-90 scrolldown_animation">
            <ScrollDownIcon />
          </span>
          Scroll Down
        </a>
        <div className=" container xl:max-w-[1140px] 3xl:max-w-[1320px] px-3 xl:px-0 flex flex-grow mx-auto">
          <div className=" flex flex-col lg:flex-row items-center  lg:justify-between ">
            <div className="w-full md:w-[90%] lg:w-[58%] relative">
              <h1 className="ff_AktivGrotesk_bold text-[36px] md:text-[38px] xl:text-[48px] font-normal leading-[115%] capitalize text-white">
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

              <button className="p-[12px_24px] border border-[#44B902] ff_poppins font-semibold text-[14px] 2xsm:text-[16px] text-white rounded-full hover:bg-[#44B902] duration-200 mt-[30px] xl:mt-[50px] leading-normal flex items-center gap-[22px]">
                Start Measure!{" "}
                <span className="text-[10px] opacity-50 group:hover:opacity-80 leading-normal after:content-[''] after:absolute relative after:left-[-11px] after:top-1/2 after:w-[1px] after:h-4 after:bg-white after:opacity-10  after:-translate-y-1/2">
                  No CC Required
                </span>
              </button>

              <p className="text-[12px] ff_poppins font-bold italic text-white pt-[14px]">
                Best on 5 years research pulished in blr blr blr
              </p>
            </div>

            <div className="w-full xs:w-[75%] lg:w-1/2">
              <div
                className={`top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] all duration-300 ease-in-out
                // lg:absolute right-1/2 mt-[88px] 2xsm:mt-[80px] xsm:mt-[90px] sm:mt-24 md:mt-[80px]
                //  bottom-[-60px] xl:bottom-[-120px] lg:right-[-60px] xl:right-[-80px] 2xl:right-[-88px]
                 ${heroImage}`}
              >
                <Image
                  ref={ref}
                  className="object-cover hero_img_scale hero_clipPath w-full lg:max-w-[550px] xl:max-w-[700px] 2xl:max-w-[750px] 3xl:max-w-[900px] xl:h-[700px] 2xl:h-[750px] 3xl:h-[900px] h-[350px] xsm:h-[600px] sm:h-[550px]"
                  src="/images/webp/forrest_hero_img.webp"
                  width={808}
                  height={846}
                  alt="blockchain"
                />
                {/*                 
                <img
                  className={heroImage}
                  src="/images/webp/forrest_hero_img.webp"
                  alt="df"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
