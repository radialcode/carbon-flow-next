import Image from "next/image";
import React from "react";

const Empowering = () => {
  return (
    <>
      <section className=" bg-[url('/images/png/empowering-bg-img.png')]">
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-3 xl:px-0 z-10 relative pt-[31px] md:py-[52px] lg:py-[102px]">
          <div className="flex xl:justify-between flex-wrap px-3 xl:px-0">
            <div className="w-full md:w-6/12">
              <h2 className="ff_AktivGrotesk_bold font-normal text-[32px] md:text-[36px] text-white max-w-[509px] mb-0 leading-[38.46px] md:leading-[43.27px]">
                <span className=" text-[#44B902]">Empowering</span> Change With
                CarbonFlow
              </h2>
              <h3 className="ff_AktivGrotesk_bold font-normal text-[18px] md:text-[24px] text-white mb-0 leading-[23.94px] md:leading-[31px] mt-[20px]">
                Lertsak Pengsangtong
              </h3>
              <p className=" ff_poppins font-normal text-base text-[#B6BEB7] mb-0 mt-[5px]">
                CEO & Founder of CarbonFlow
              </p>
              <div className="flex items-center gap-[5.18px] mt-[7px]">
                <Image
                  className=" w-[15px]"
                  width={15}
                  height={15}
                  src="/images/png/star-image.png"
                  alt=" star image"
                />
                <Image
                  className=" w-[15px]"
                  width={15}
                  height={15}
                  src="/images/png/star-image.png"
                  alt=" star image"
                />
                <Image
                  className=" w-[15px]"
                  width={15}
                  height={15}
                  src="/images/png/star-image.png"
                  alt=" star image"
                />
                <Image
                  className=" w-[15px]"
                  width={15}
                  height={15}
                  src="/images/png/star-image.png"
                  alt=" star image"
                />
              </div>
              <p className=" ff_poppins font-normal text-base text-[#CFD4D0] mb-0 mt-[15px] max-w-[485px]">
                Imagine a world where farm and forest are responsible for a
                quarter of all carbon emission. now, picture a future where only
                a minuscule fraction of this is expected to be produced in 2023
                it’s stark contrast, isn’t it?
              </p>
              <button className=" ff_poppins font-semibold text-base text-white py-[12.5px] px-[22px] border-2 border-[#44B902] rounded-full bg-transparent hover:bg-white hover:text-[#4EB708] hover:border-[#4EB708] duration-200 mt-[35px]">
                Read More
              </button>
            </div>
            <div className="w-full md:w-[42%] lg:w-[40%] xl:w-[30%] md:absolute bottom-0 end-0 pt-10 md:pt-0">
              <Image
                className="max-w-[300px] lg:max-w-[350px] mx-auto"
                width={512}
                height={555}
                src="/images/png/empowering_img.png"
                alt="empowering image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Empowering;
