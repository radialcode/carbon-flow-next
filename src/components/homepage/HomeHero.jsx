import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import "intersection-observer";
import { ScrollDownIcon } from "../common/Icons";
import Link from "next/link";

const HomeHero = ({ loader }) => {

  const [ref, inView] = useInView({});
  
  return (
    <>
      <div
        className={`bg-[#061E10]  flex flex-col overflow-hidden relative pt-[50px] lg:pt-0 -mt-[1px] ${
          loader ? "min-h-screen" : "hero_screen"
        }`}
      >
        <Link
          className="absolute ff_poppins font-light group text-[14px] text-white hidden -rotate-90 bottom-[140px] left-[-56px] uppercase tracking-[11px] xl:flex items-center gap-[17px] z-10"
          href="#pitchingdeck"
        >
          <span className="scrolldown_animation rotate-90 w-5 h-5 flex flex-col overflow-hidden duration-200 relative">
            <span className="group-hover:top-0 absolute -top-5 left-0 duration-200">
              <ScrollDownIcon /> <ScrollDownIcon />
            </span>
          </span>
          Scroll Down
        </Link>
        <div className="custom_container w-full h-full mx-auto">
          <div className="flex flex-col items-center lg:flex-row justify-between h-full">
            <div
              className="w-full relative"
              data-aos="fade-right"
              data-aos-delay="800"
              data-aos-duration="900"
            >
              <h1 className="ff_AktivGrotesk_bold text-[36px] sm:text-[40px] md:text-[55px] xl:text-[70px] font-normal leading-[115%] capitalize text-white">
                Direct <span className="text-[#44B902]">Measure,</span>
                <span className=" block">
                  Direct <span className="text-[#44B902]">Matter !</span>
                </span>
              </h1>
              <p className="ff_poppins text-base font-normal capitalize leading-[160%] text-white pt-[18px] sm:w-[400px] lg:w-[542px] w-full">
                The Most Effective way to Measure Forrest & Farm's Carbon
                Credits without breaking the bank by using Satellite and
                Predictive AI. These give unparalleled way to measure carbon
                credit.
              </p>
              <div className="lg:pt-[35px] pt-[20px]">
                <span className="inline-block">
                  <Link
                    href="mailto:contactus@carbonflow.earth"
                    className="px-[24px] py-[12px] border group border-[#44B902] ff_poppins font-semibold text-[16px] text-[#FFFFFF] rounded-full hover:bg-[#44B902] duration-200 hover:text-white leading-6 flex gap-[23px] items-center"
                  >
                    Start Measure!
                    <span className="ff_poppins font-semibold text-[10px] text-[#FFFFFF] block leading-[18px] group-hover:text-white opacity-50 after:contents-[''] after:absolute relative after:h-[18px] after:w-[1px] after:bg-[#FFFFFF] after:-left-3 after:top-1/2 after:-translate-y-1/2">
                      No CC Required
                    </span>
                  </Link>
                </span>
              </div>
              <p className="text-[12px] ff_poppins font-extralight text-white sm:max-w-[310px] max-w-[420px] mt-3 sm:mt-9 whitespace-nowrap">
                Based on 5 years research published in
              </p>
              <Link href="/">
                <Image
                  className="mt-3 max-w-[250px]"
                  height={100}
                  width={200}
                  src="/images/svg/JGR_logo.svg"
                  alt="JGR_logo"
                />
              </Link>
            </div>
            {/* RIGHT SIDE IMAGE */}
            <div
              className={`hero_clipPath duration-[3s] ${
                loader
                  ? "w-[95px] h-[100px] z-[999] absolute bottom-[50%] right-[50%] translate-x-[38%] translate-y-[50%] duration-[2s] max-w-[100px] p-[1] after:!absolute after:!content-[''] after:!bottom-0 after:!left-0 after:!right-0 after:!top-0 after:!w-full after:!h-full after:!duration-300 after:!bg-contain after:!bg-no-repeat after:!bg-loader_border"
                  : "absolute  right-[50%] translate-x-[50%] md:-right-[55px] lg:-right-[55px] xl:-right-[80px] md:translate-x-0 duration-[2s] animate_loader md:w-[600px] lg:w-auto md:max-w-[550px] lg:max-w-[600px] xl:max-w-[700px] md:h-[600px] xl:h-[700px] 3xl:max-w-[900px] 3xl:h-[900px] max-h-[100%] 4xl:w-full 4xl:max-w-[40%]  4xl:h-full 3xl:bottom-[-50px] 4xl:bottom-[-8%] lg:bottom-[-60px] sm:max-w-[70%] 2xsm:bottom-[-80px] bottom-[-128px] 2xsm:max-w-[380px] max-w-[275px] sm:w-[600px] sm:bottom-[-150px] md:bottom-[-40px]"
              }`}
            >
              <Image
                ref={ref}
                priority={true}
                className={`object-cover md:w-full md:h-full ${
                  inView && "hero_img_scale"
                } ${
                  loader
                    ? "sm:w-full w-[400px] h-[400px] loader_animation rounded-full bg-[#44B902]"
                    : "max-w-[330px] md:max-w-none sm:max-w-[150%] h-[390px] sm:h-auto bg-satelite object-cover"
                } `}
                src={`${loader ? "" : "/images/webp/satelite.webp"}`}
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
