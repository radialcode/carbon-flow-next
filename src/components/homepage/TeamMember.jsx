import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { TeamMemberSliderdata, TeamPopupData } from "../common/Helper";
import Image from "next/image";
import { PopupCross, TeamSliderArrowIcon } from "../common/Icon";

const TeamMember = ({ teamRef }) => {
  const first = React.useRef();
  const [popUp, setPopUp] = useState(false);
  const [cardData, setCardData] = useState();
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          speed: 1000,
        },
      },
      {
        breakpoint: 990,
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
  useEffect(() => {
    if (popUp) {
      document.body.classList.add("!overflow-hidden");
    } else {
      document.body.classList.remove("!overflow-hidden");
    }
  }, [popUp]);
  return (
    <>
      <section
        id="team"
        ref={teamRef}
        className="pt-[106px] md:pt-[120px] pb-[101px] relative"
      >
        <Image
          data-aos="fade-left"
          className=" w-[153px] absolute right-[26px] bottom-0 hidden md:block z-0"
          width={153}
          height={149}
          src="/images/png/month-leaf-position-img.png"
          alt="leaf image"
        />
        <div className="custom_container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-3 xl:px-0 z-10 relative">
          <h2 className=" ff_AktivGrotesk_bold font-normal text-[32px] sm:text-[36px] text-[#061E10] leading-[38.46px] sm:leading-[43.27px] mb-0 text-center">
            Team Members
          </h2>
          <p className=" ff_poppins font-normal text-base text-[#516258] mb-0 mt-[15px] max-w-[594px] mx-auto text-center">
            Our project is fueled by a highly skilled and diverse team, united
            by a shared commitment to global standards of excellence.
          </p>

          <div className="relative">
            <div
              onClick={() => first.current.slickPrev()}
              className="top-[50%] translate-y-[-50%] -left-[5%] 2xl:left-[-6%] absolute group arrows cursor-pointer hidden xl:block border-none rounded-full"
            >
              <TeamSliderArrowIcon />
            </div>
            <div
              onClick={() => first.current.slickNext()}
              className="top-[50%] translate-y-[-50%] -right-[5%] 2xl:right-[-6%] absolute group arrows cursor-pointer hidden xl:block border-none rounded-full rotate-180"
            >
              <TeamSliderArrowIcon />
            </div>
            <div className="top-[50%] translate-y-[-50%] -right-[5%] 2xl:right-[-6%] absolute rotate-[180deg] group cursor-pointer hidden xl:block"></div>
            <Slider
              {...settings}
              ref={first}
              className="flex flex-wrap mt-[40px] sm:mx-[-10px] relative sm:max-w-fit  max-w-[270px] xsm:max-w-[400px] mx-auto"
            >
              {TeamMemberSliderdata.map((data, index) => {
                return (
                  <div className="w-full h-full flex px-[10px]" key={index}>
                    <div className="border border-[#E7E9E8] hover:outline-[#D2F958] hover:outline-[3px] hover:outline-offset-[-3px] hover:outline rounded-[10px] h-full w-full">
                      <div className="py-[22px]">
                        <div className="clip_path_team_slider flex justify-center overflow-hidden max-w-[94px] mx-auto h-[110px]">
                          <Image
                            className="w-full  object-cover"
                            width={96}
                            height={110}
                            src={data.img}
                            alt="team slider image 1"
                          />
                        </div>
                        <h2 className="ff_AktivGrotesk_bold font-normal text-[20px] text-[#061E10] text-center mb-0 mt-[12px] leading-[24.04px]">
                          {data.heading}
                        </h2>
                        <p className=" ff_poppins font-normal text-[14px] text-[#061E10] mb-0 mt-[2px] text-center">
                          {data.profession}
                        </p>
                        <div className="flex justify-center mt-2">
                          <ul className="list-disc text-[#061E10] opacity-70 ps-7 pe-2">
                            <li className="ff_poppins font-normal text-sm sm:text-base text-[#061E10]">
                              {data.info1}
                            </li>
                            <li className="ff_poppins font-normal text-sm sm:text-base text-[#061E10]">
                              {data.info2}
                            </li>
                            <li className="ff_poppins font-normal text-sm sm:text-base text-[#061E10]">
                              {data.info3}
                            </li>
                            <li
                              className={`ff_poppins font-normal text-sm sm:text-base text-[#061E10] ${data.hidden4}`}
                            >
                              {data.info4}
                            </li>
                            <li
                              className={`ff_poppins font-normal text-sm sm:text-base text-[#061E10] ${data.hidden5}`}
                            >
                              {data.info5}
                            </li>
                          </ul>
                          {/* <button
                            onClick={() => {
                              setPopUp(true);
                              setCardData(index);
                            }}
                            className="mt-[16px] ff_poppins font-medium text-[14px] text-white py-[12.5px] px-[22px] border-2 border-white rounded-full bg-[#235C02] hover:bg-white hover:text-[#4EB708] hover:border-[#4EB708] duration-200"
                          >
                            {data.profileBtn}
                          </button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
            <div className="flex justify-center gap-[8px] mt-[27px] xl:hidden">
              <div
                onClick={() => first.current.slickPrev()}
                className="group cursor-pointer"
              >
                <TeamSliderArrowIcon />
              </div>
              <div
                onClick={() => first.current.slickNext()}
                className="rotate-[180deg] group cursor-pointer"
              >
                <TeamSliderArrowIcon />
              </div>
            </div>
            <div>
              <div
                className={`min-h-screen w-full fixed bg-[#00000095] top-0 left-0 z-1000 justify-center items-center ${
                  popUp ? "flex" : "hidden"
                }`}
              >
                {/* {TeamPopupData.map((teamdata, index) => {
                  return (
                    <div
                      key={index}
                      className={`sm:gap-[65px] gap-[20px] xsm:flex-row flex-col  items-center max-w-[542px] md:ps-[43px] ps-[15px] mx-5 pe-[10px] pt-[27px] pb-[43px] bg-white border-[#061E101A] border rounded-[10px] relative ${
                        cardData == index ? "flex" : "hidden"
                      }`}
                    >
                      <button
                        onClick={() => {
                          setPopUp(false);
                        }}
                        className="absolute right-4 top-4"
                      >
                        <PopupCross />
                      </button>
                      <div className="min-w-[101px]">
                        <div className="clip_path_team_slider flex justify-center overflow-hidden max-w-[94px] mx-auto h-[120px]">
                          <Image
                            className="w-full  object-cover"
                            src={teamdata.teamimage}
                            width={96}
                            height={110}
                          />
                        </div>
                        <h2 className="ff_AktivGrotesk_bold font-normal text-[16px] text-[#061E10] text-center mb-0 mt-[12px] leading-[24.04px]">
                          {teamdata.name}
                        </h2>
                        <p className=" ff_poppins font-normal text-[14px] text-[#061E10] mb-0 mt-[2px] text-center">
                          {teamdata.workduty}
                        </p>
                      </div>
                      <ul className="list-disc text-[#061E10] opacity-70 ps-7">
                        <li className="ff_poppins font-normal text-[16px] text-[#061E10]">
                          {teamdata.info1}
                        </li>
                        <li className="ff_poppins font-normal text-[16px] text-[#061E10]">
                          {teamdata.info2}
                        </li>
                        <li className="ff_poppins font-normal text-[16px] text-[#061E10]">
                          {teamdata.info3}
                        </li>
                        <li
                          className={`ff_poppins font-normal text-[16px] text-[#061E10] ${teamdata.hidden4}`}
                        >
                          {teamdata.info4}
                        </li>
                        <li
                          className={`ff_poppins font-normal text-[16px] text-[#061E10] ${teamdata.hidden5}`}
                        >
                          {teamdata.info5}
                        </li>
                      </ul>
                    </div>
                  );
                })} */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamMember;
