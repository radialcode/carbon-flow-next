import React from "react";
import { monthSliderdata } from "../common/Helper";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const MonthsSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <section>
        <div className="container xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 xl:px-0">
          <Slider {...settings} className="flex flex-wrap mx-[-12px]">
            {monthSliderdata.map((data, index) => {
              return (
                <div
                  className="w-4/12 px-[12px] border_grideant pt-[20px] pb-[78px] h-full"
                  key={index}
                >
                  <div className="px-[28px]">
                    <span>{data.svgicon}</span>
                    <h2 className="ff_AktivGrotesk_bold font-normal text-[36px] text-[#44B902] mb-0 mt-[24px] leading-[43.7px]">
                      {data.heading}
                    </h2>
                    <h3 className="ff_AktivGrotesk_bold font-normal text-[20px] text-[#061E10] mb-0 mt-[15px] leading-[24.07px]">
                      {data.subHeading}
                    </h3>
                    <p className=" ff_poppins font-normal text-base text-[#516258] mb-0 mt-[6px]">
                      {data.para}
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default MonthsSlider;
