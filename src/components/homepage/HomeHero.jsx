import React from "react";
import Image from "next/image";
const HomeHero = () => {
  return (
    <>
      <div className="bg-[#061E10] min-h-screen flex flex-col overflow-hidden relative">
        <div className=" container flex flex-grow mx-auto">
          <div className=" flex flex-col lg:flex-row items-center  lg:justify-between ">
            <div className="w-full md:w-[80%] lg:w-[50%]">
              <h1 className="text-[25px] md:text-[38px] xl:text-[48px] font-normal leading-[115%] capitalize text-white text-center lg:text-start">
                The <span className="text-[#44B902]">most effective way</span>{" "}
                to measure Forrest & farm’s carbon{" "}
                <span className="text-[#44B902]">credits without breaking</span>{" "}
                the bank
              </h1>
            </div>
            <div className=" xl:w-[50%] absolute xl:right-[-5%] bottom-0">
              <div className=" w-[780px]">
                <div class="clip">
                  <Image
                    className=" h-[600px]"
                    height={808}
                    width={846}
                    src="/images/webp/forrest_hero_img.webp"
                    alt="hero-img"
                  />
                </div>

                <svg width="0" height="0">
                  <clipPath id="cutout2">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M407.394 169.497L368.807 146.171V653.928H497.577V700H198.465V653.928H324.839V301.495L217.961 236.848V78.9363L348.426 0L478.928 78.9363V236.848L407.394 280.1V169.497ZM261.228 489.725V331.826L130.614 252.876L0 331.826V489.725L108.624 555.349V653.92H37.118L4.09547 700H152.641V409.887L191.198 433.255V532.058L261.228 489.725ZM693.177 489.725V331.826L562.545 252.876L431.987 331.826V489.725L540.601 555.349V700H700L667.029 653.92H584.6L584.489 403.746L623.103 427.114V532.058L693.177 489.725Z"
                      fill="#C4C4C4"
                    />
                  </clipPath>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
