import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import "intersection-observer";

import { ScrollDownIcon } from "../common/Icon";
import Link from "next/link";
const HomeHero = ({loader}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <>
      <div className={`bg-[#061E10]  flex flex-col overflow-hidden relative pt-[50px] lg:pt-0 -mt-[1px] ${loader ? "h-screen" : "hero_screen"}`}>
      <a
        className="absolute ff_poppins font-light group text-[14px] text-white hidden -rotate-90 bottom-[140px] left-[-56px] uppercase tracking-[11px] xl:flex items-center gap-[17px] z-10"
        href="#pitchingdeck"
      >
        <span className="scrolldown_animation rotate-90 w-5 h-5 flex flex-col overflow-hidden duration-200 relative">
          <span className="group-hover:top-0 absolute -top-5 left-0 duration-200">
            <ScrollDownIcon /> <ScrollDownIcon />
          </span>
        </span>
        Scroll Down
      </a>
        {/* <div className=" container xl:max-w-[1140px] 3xl:max-w-[1320px] px-3 xl:px-0 flex flex-grow mx-auto">
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
              <div className="animate_loader hero_clipPath z-[999] ">
                <Image
                  ref={ref}
                  priority={true}
                  className={`object-cover ${
                    inView ? "hero_img_scale " : "hero_img_scale"
                  }  hero_clipPath w-full lg:max-w-[550px] xl:max-w-[750px] 3xl:max-w-[900px] xl:h-[750px] 3xl:h-[900px] h-[350px] xsm:h-[600px] sm:h-[550px] `}
                  src="/images/webp/forrest_hero_img.webp"
                  width={808}
                  height={846}
                  alt="blockchain"
                />
              </div>
            </div>
          </div>
        </div> */}
        <div className="custom_container w-full h-full mx-auto">
          <div className="flex flex-col items-center lg:flex-row justify-between h-full">
          <div className="w-full relative" data-aos="fade-right" data-aos-delay="800" data-aos-duration="900">
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
              <div className="lg:pt-[35px] pt-[20px]">
            <button className="px-[24px] py-[12px] border group border-[#44B902] ff_poppins font-semibold text-[16px] text-[#FFFFFF] rounded-full hover:bg-[#44B902] duration-200 hover:text-white leading-6 flex gap-[23px] items-center">
              Start Measure!
              <span className="ff_poppins font-semibold text-[10px] text-[#FFFFFF] block leading-[18px] group-hover:text-white opacity-50 after:contents-[''] after:absolute relative after:h-[18px] after:w-[1px] after:bg-[#FFFFFF] after:-left-3 after:top-1/2 after:-translate-y-1/2">
                No CC Required
              </span>
            </button>
          </div>
                <p className="text-[12px] ff_poppins font-bold italic text-white sm:max-w-[310px] max-w-[420px] mt-3 sm:mt-9">
              Based on 5 years research published in
                </p>
              <Link href="/">
              <Image className="mt-3 max-w-[250px]" height={100} width={200} src="/images/JGR_logo.svg" alt="JGR_logo"/>
              </Link>
            </div>
            <div className={`hero_clipPath ${loader ? "z-[999] absolute top-[50%] right-[50%] translate-x-[38%] -translate-y-[50%] duration-[2s] max-w-[100px] h-[100px]" : "absolute md:top-[57%] top-[70.5%] right-[50%] translate-x-[50%] lg:top-[58%] xl:top-[33%] 3xl:top-[43%] md:-right-[55px] lg:-right-[55px] xl:-right-[80px] md:translate-x-0 -translate-y-[18%] duration-[2s] animate_loader md:w-[480px] lg:w-auto md:max-w-[600px] xl:max-w-[700px] md:h-[600px] xl:h-[700px] 4xl:w-[50%] 4xl:max-w-none 4xl:h-[100%]"}`}>
                <Image
                  ref={ref}
                  priority={true}
                  className={`object-cover md:w-full md:h-full ${inView ? "hero_img_scale" : ""} ${
                    loader ? "sm:w-full w-[400px] h-[400px]" : "max-w-[330px] md:max-w-none h-[390px]"
                  }  hero_clipPath`}
                  src="/images/webp/forrest_hero_img.webp"
                  width={808}
                  height={846}
                  alt="blockchain"
                />
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default HomeHero;
