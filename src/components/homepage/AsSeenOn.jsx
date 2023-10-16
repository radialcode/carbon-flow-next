import Image from "next/image";
import React from "react";
import {
  AsSeenOnFoxIcon,
  AsSeenOnMarketWatchIcon,
  AsSeenOnUsaTodayIcon,
} from "../common/Icon";

const AsSeenOn = () => {
  return (
    <>
      <section
        id="investor"
        className="pt-[25px] md:pt-[50px] pb-[84px] md:pb-[127px] relative overflow-x-hidden"
      >
        <Image
          className=" absolute left-[28px] top-[22px] sm:top-[44px] z-0 w-[96px] sm:w-[144px] hidden md:block"
          data-aos="fade-right"
          width={144}
          height={140}
          src="/images/png/month-leaf-position-img.png"
          alt="month leaf image"
        />
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-3 xl:px-0 z-10 relative">
          <h2 className="ff_AktivGrotesk_bold font-normal text-[24px] md:text-[36px] text-[#061E10] mb-0 text-center">
            As Seen On
          </h2>
          <div className="flex flex-wrap justify-center mt-[35px]">
            <div className="w-10/12">
              <div className="flex justify-center gap-[13px] md:gap-[36px]">
                <div
                  className=" px-[23px] xs:px-[40px] lg:px-[60px] xs:py-[20px] py-[14px] md:py-[25px] lg:py-[37px] bg-white shadow-as_seen_on_box_shadow hover:shadow-none border-2 border-white hover:border-[#44B902] duration-200 rounded-[10px]"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <AsSeenOnFoxIcon />
                </div>
                <div
                  className=" px-[23px] xs:px-[40px] lg:px-[60px] xs:py-[20px] py-[14px] md:py-[25px] lg:py-[37px] bg-white shadow-as_seen_on_box_shadow hover:shadow-none border-2 border-white hover:border-[#44B902] duration-200 rounded-[10px]"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <AsSeenOnUsaTodayIcon />
                </div>
                <div
                  className=" px-[23px] xs:px-[40px] lg:px-[60px] xs:py-[20px] py-[14px] md:py-[25px] lg:py-[37px] bg-white shadow-as_seen_on_box_shadow hover:shadow-none border-2 border-white hover:border-[#44B902] duration-200 rounded-[10px]"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  <AsSeenOnMarketWatchIcon />
                </div>
              </div>
            </div>
          </div>
          <p className=" ff_poppins font-bold text-[14px] sm:text-[20px] text-[#44B902] italic text-center mt-[17px] sm:mt-[45px] capitalize">
            And over 200 news Sites
          </p>
        </div>
      </section>
    </>
  );
};

export default AsSeenOn;
