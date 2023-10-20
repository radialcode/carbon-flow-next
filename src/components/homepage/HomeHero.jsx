import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import "intersection-observer";
import { ScrollDownIcon } from "../common/Icon";
import Navbar from "./Navbar";
import Link from "next/link";
const HomeHero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div className=" bg-[#061E10] relative">
      <Navbar />
      <a
        className="absolute ff_poppins font-light group text-[14px] text-white hidden -rotate-90 bottom-[140px] left-[-50px] 3xl:left-0 uppercase tracking-[11px] 2xl:flex items-center gap-[17px] z-10"
        href="#pitchingdeck"
      >
        <span className="scrolldown_animation rotate-90 w-5 h-5 flex flex-col overflow-hidden duration-200 relative">
          <span className="group-hover:top-0 absolute -top-5 left-0 duration-200">
            <ScrollDownIcon /> <ScrollDownIcon />
          </span>
        </span>
        Scroll Down
      </a>
      <div className="h-[865px] xs:h-[870px] lg:h-[540px] 2xl:h-[calc(100vh-80px)] 4xl:min-h-[520px] 4xl:h-[1120px] xl:h-[calc(100vh-80px)] flex flex-col overflow-hidden relative pt-[47px] md:pt-[51px]  3xl:pt-0 max-w-[1920px] mx-auto">
        <div className=" container xl:max-w-[1140px] 3xl:max-w-[1320px] px-3 xl:px-0 flex flex-grow mx-auto justify-center lg:justify-between">
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

              <div className="flex mt-[30px] xl:mt-[50px] sm:items-center gap-4 sm:flex-row flex-col justify-start">
                <button className="p-[12px_24px] border border-[#44B902] ff_poppins font-semibold text-[14px] 2xsm:text-[16px] text-white rounded-full hover:bg-[#44B902] duration-200  leading-normal flex items-center flex-col min-w-[170px] max-w-[180px]">
                  Start&nbsp;Measure!
                  <span className="text-[10px] opacity-50 group:hover:opacity-80 leading-normal">
                    No&nbsp;CC&nbsp;Required
                  </span>
                </button>
                {/* <p className="text-[12px] ff_poppins font-bold italic text-white sm:max-w-[310px] max-w-[420px]">
                  Based on 5 years research published in 
                </p> */}
              </div>
              <p className="text-[12px] ff_poppins font-bold italic text-white sm:max-w-[310px] max-w-[420px] mt-3 sm:mt-9">
              Based on 5 years research published in
                </p>
              <Link href="/">
              <Image className="mt-3" height={100} width={200} src="/images/JGR_logo.svg" alt="JGR_logo"/>
              </Link>
            </div>

            <div className="w-full xs:w-[75%] lg:w-1/2">
              <div className="hero_clipPath lg:absolute right-1/2 mt-[88px] 2xsm:mt-[32px] xsm:mt-0 md:mt-[0px] bottom-[-60px] xl:bottom-[-120px] lg:right-[-60px] xl:right-[-80px] 4xl:right-0 4xl:bottom-0">
                <Image
                  ref={ref}
                  priority={true}
                  className={`object-cover ${
                    inView ? "hero_img_scale" : "hero_img_scale"
                  }  hero_clipPath w-full lg:max-w-[550px] xl:max-w-[700px] 2xl:max-w-[750px] 3xl:max-w-[900px] xl:h-[700px] 2xl:h-[750px] 3xl:h-[900px] h-[350px] xsm:h-[600px] xs:h-[450px] lg:h-[550px] `}
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
    </div>
  );
};

export default HomeHero;
