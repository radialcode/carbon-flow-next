import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";
import "intersection-observer";

const DataGildMine = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <>
      <div
        id="globalwarming"
        className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-3 xl:px-0 flex md:justify-between justify-center items-center md:flex-row flex-col-reverse pt-[55px] overflow-x-hidden"
      >
        <div className="md:w-1/2 xl:w-[43%] md:px-0 px-[14px] mt-[47px] md:mt-0">
          <h2 className="font-normal lg:text-[36px] text-[32px] text-black ff_AktivGrotesk_bold leading-[117%]">
            Data Gildmine:{" "}
            <span className="text-[#45B802]">10 Years Histoeical</span> &
            Monthly On Both <span className="text-[#45B802]">Carbon</span> &{" "}
            <span className="text-[#45B802]">Evapotranspiration</span> Data
          </h2>
          <p className="ff_poppins font-normal text-[16px] text-[#061E10] opacity-70 pt-[15px] max-w-[470px] ">
            In sights for future planning: leverage biomass estimation, climate
            change modeling, land use monitoring, trend analysis, data
            benchmarking, policy guidance, and research opportunities. optimize
            decisions for your forest/ farm’s future success
          </p>
          <div className="lg:pt-[35px] pt-[20px]">
            <button className="px-[24px] py-[8px] border group border-[#44B902] ff_poppins font-semibold text-[16px] text-[#061E10] rounded-full hover:bg-[#44B902] duration-200 hover:text-white leading-6 flex gap-[23px] items-center">
              Start Measure!
              <span className="ff_poppins font-semibold text-[10px] text-[#061E10] block leading-[18px] group-hover:text-white opacity-50 after:contents-[''] after:absolute relative after:h-[18px] after:w-[1px] after:bg-[#061E10] after:-left-3 after:top-1/2 after:-translate-y-1/2">
                No CC Required
              </span>
            </button>
          </div>
        </div>
        <div className="gildmini_image overflow-hidden max-w-[602px] md:w-1/2 xsm:w-[70%] group md:scale-100 scale-110">
          <Image
            ref={ref}
            className={` ${
              inView ? "data_gild_img_scale" : ""
            } object-cover object-top `}
            src="/images/webp/gildImage.webp"
            alt="gild mine"
            width={602}
            height={602}
          />
        </div>
      </div>
    </>
  );
};

export default DataGildMine;
