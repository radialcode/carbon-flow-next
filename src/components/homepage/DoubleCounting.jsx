import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";
import "intersection-observer";

const DoubleCounting = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <div
        id="workwithus"
        className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-3 xl:px-0 flex md:justify-between justify-center items-center md:flex-row flex-col gap-[20px] pb-[30px] relative pt-[70px] lg:pt-0"
      >
        <div className="md:w-[50%] lg:pe-[50px]">
          <div className="clipPath md:max-w-[558px] max-w-[430px]">
            <Image
              ref={ref}
              className={`clipPath w-full lg:max-w-[550px] object-cover h-full ${
                inView ? "data_gild_img_scale " : ""
              } `}
              src="/images/png/datacounting-image.png"
              width={500}
              height={500}
              alt="blockchain"
            />
          </div>
        </div>
        <div className="md:w-1/2 md:max-w-[496px] md:px-0 px-[14px] xl:me-[50px]">
          <h2 className="font-normal lg:text-[36px] text-[28px] text-black ff_AktivGrotesk_bold leading-[117%] capitalize">
            No double
            <span className="text-[#45B802]"> counting, issue carbon</span>{" "}
            credit on blockchain
          </h2>
          <p className="ff_poppins font-normal text-[16px] text-[#061E10] opacity-70 pt-[15px]">
            CarbonfluxX revolutionizes carbon credit issuance by utilizing
            blockchain technology, ensuring transparency and trust. our
            certificates, developed with the industry - leading cretic qualify
            standard, provide a secure foundation. experience seamless trading
            on our platform, offering liquidity, competitive pricing, and
            unparalleled securities. join us in unlocking the full potential of
            carbon credit markets
          </p>
          <div className="lg:pt-[35px] pt-[20px]">
            <button className="px-[23px] py-[10.5px] border group border-[#44B902] ff_poppins font-semibold text-[16px] text-[#061E10] rounded-full hover:bg-[#44B902] duration-200 hover:text-white leading-6 ">
              Start Measure!
              <span className="ff_poppins font-semibold text-[12px] text-[#061E10] block leading-[18px] group-hover:text-white">
                No CC Required
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoubleCounting;
