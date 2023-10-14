import React from "react";
import Image from "next/image";
const HomeHero = () => {
  return (
    <>
      <div className="bg-[#061E10] h-[750px] xs:min-h-screen lg:h-[calc(100vh-80px)]  flex flex-col overflow-hidden relative pt-12">
        <div className=" container flex flex-grow mx-auto">
          <div className=" flex flex-col lg:flex-row items-center  lg:justify-between ">
            <div className="w-full md:w-[80%] lg:w-[50%]">
              <h1 className="ff_AktivGrotesk_bold text-[36px] md:text-[38px] xl:text-[48px] font-normal leading-[115%] capitalize text-white ">
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
            </div>

            <div className="w-full xs:w-[75%] lg:w-1/2 ">
              <div className="hero_clipPath  lg:absolute right-1/2 mt-[10px] xs:mt-0 sm:mt-10  bottom-[-60px] lg:right-[-60px] xl:right-[-80px] 2xl:right-[-90px]">
                <Image
                  className="hero_clipPath w-full lg:max-w-[550px] xl:max-w-[700px] 2xl:max-w-[800px] xl:h-[700px] 2xl:h-[800px] object-cover h-[350px] xs:h-[600px] sm:h-[550px]"
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
