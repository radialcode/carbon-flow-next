import Image from "next/image";
import React from "react";

const DoubleCounting = () => {
  return (
    <>
      <div className="container xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 xl:px-0 flex md:justify-between justify-center items-center md:flex-row flex-col-reverse md:gap-0 gap-[40px] py-[50px] overflow-x-hidden">
        <div className="gildmini_image overflow-hidden max-w-[602px] md:w-1/2 sm:w-[80%] group md:scale-100 scale-110">
          <Image
            className="object-cover group-hover:scale-125 duration-200 object-top"
            src="/images/png/gildImage.png"
            alt="gild mine"
            width={602}
            height={602}
          />
        </div>
        <div className="md:w-1/2 max-w-[496px] md:px-0 px-[14px]">
          <h2 className="font-normal lg:text-[36px] text-[28px] text-black ff_AktivGrotesk_bold leading-[115%]">
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
          <div className="flex gap-[25px] lg:pt-[35px] pt-[20px] items-center">
            <button className="px-[23px] lg:py-[14px] py-[10px] border border-[#44B902] ff_poppins font-semibold text-[16px] text-[#061E10] rounded-full hover:bg-[#44B902] duration-200 hover:text-white leading-6">
              Start Measure!
            </button>
            <p className="ff_poppins font-semibold text-[16px] text-[#061E10] duration-200 hover:text-[#44B902] leading-6">
              No CC Required
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoubleCounting;
