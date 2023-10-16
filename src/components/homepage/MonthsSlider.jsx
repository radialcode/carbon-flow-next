import React from "react";
import { monthSliderdata } from "../common/Helper";
import Slider from "react-slick";
import Image from "next/image";

const MonthsSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          speed: 1000,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          speed: 1000,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          speed: 1000,
        },
      },
    ],
  };

  return (
    <>
      <section
        id="pitchingdeck"
        className="pt-[69px] md:pt-[100px] pb-[123px] sm:pb-[55px] lg:pb-0 relative">
        <Image
          className="w-[96px] md:w-[144px] top-[22px] md:top-[44px] left-0 absolute z-0"
          width={144}
          height={140}
          src="/images/png/month-leaf-position-img.png"
          alt="leaf image"
        />
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-3 xl:px-0 z-10 relative">
          <Slider {...settings} className="flex flex-wrap mx-[-20px]">
            {monthSliderdata.map((data, index) => {
              return (
                <div
                  className=" py-[33px] md:py-0 md:pt-[20px] md:pb-[25px] h-full px-[10px]"
                  key={index}
                >
                  <div className="px-[21px] xs:px-[28px] border_grideant">
                    <span>{data.svgicon}</span>
                    <h2 className="ff_AktivGrotesk_bold font-normal text-[36px] text-[#44B902] mb-0 mt-[24px] leading-[43.7px] capitalize">
                      {data.heading}
                    </h2>
                    <h3 className="ff_AktivGrotesk_bold font-normal text-[20px] text-[#061E10] mb-0 mt-[15px] leading-[24.07px] capitalize">
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
