import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import "intersection-observer";

import { ScrollDownIcon } from "../common/Icon";
const HomeHero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <div className="bg-[#061E10] h-[945px] xs:h-[950px] lg:h-[620px] 2xl:min-h-screen xl:h-[calc(100vh-80px)]  flex flex-col overflow-hidden relative pt-[130px] md:pt-[120px]  3xl:pt-0">
        <a
          className="absolute ff_poppins font-light text-[14px] text-white hidden -rotate-90 bottom-[140px] left-[-50px] 3xl:left-0 uppercase tracking-[11px] 2xl:flex gap-[17px]"
          href="#pitchingdeck"
        >
          <span className="rotate-90 scrolldown_animation">
            <ScrollDownIcon />
          </span>
          Scroll Down
        </a>
        <div className=" container xl:max-w-[1140px] 3xl:max-w-[1320px] px-3 xl:px-0 flex flex-grow mx-auto">
          <div className=" flex flex-col lg:flex-row items-center lg:justify-between ">
            <div className="w-full relative">
              <h1 className="ff_AktivGrotesk_bold text-[40px] md:text-[55px] xl:text-[70px] font-normal leading-[115%] capitalize text-white">
                Direct <span className="text-[#44B902]">Measure,</span>
                <span className=" block">
                  Direct <span className="text-[#44B902]">Matter !</span>
                </span>
              </h1>
              <p className="ff_poppins text-base font-normal capitalize leading-[160%] text-white pt-[18px] sm:w-[542px] w-full">
                The Most Effective way to Measure Forrest & Farm's Carbon
                Credits without breaking the bank by using Satellite and
                Predictive AI. These give unparalleled way to measure carbon
                credit.
              </p>

              <div className="flex mt-[30px] xl:mt-[50px] sm:items-center gap-4 sm:flex-row flex-col">
                <button className="p-[12px_24px] border border-[#44B902] ff_poppins font-semibold text-[14px] 2xsm:text-[16px] text-white rounded-full hover:bg-[#44B902] duration-200  leading-normal flex items-center flex-col min-w-[170px] max-w-[170px]">
                  Start Measure!{" "}
                  <span className="text-[10px] opacity-50 group:hover:opacity-80 leading-normal">
                    No CC Required
                  </span>
                </button>

                <p className="text-[12px] ff_poppins font-bold italic text-white sm:max-w-[310px] max-w-[400px]">
                  Based on 5 years research published in Journal of Geophysical
                  Research: Biogeosciences
                </p>
              </div>
            </div>

            <div className="w-full xs:w-[75%] lg:w-1/2">
              <div className="animate_loader hero_clipPath z-[999] lg:absolute mt-[88px] 2xsm:mt-[80px] xsm:mt-[90px]  sm:mt-24 md:mt-[80px]  bottom-[-60px] xl:bottom-[-120px] lg:right-[-60px] xl:right-[-80px] 2xl:right-[-88px]">
                <Image
                  ref={ref}
                  priority={true}
                  className={`object-cover ${
                    inView ? "hero_img_scale " : "hero_img_scale"
                  }  hero_clipPath w-full lg:max-w-[550px] xl:max-w-[700px] 2xl:max-w-[750px] 3xl:max-w-[900px] xl:h-[700px] 2xl:h-[750px] 3xl:h-[900px] h-[350px] xsm:h-[600px] sm:h-[550px] `}
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
