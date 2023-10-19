import Image from "next/image";
import React from "react";

const Empowering = () => {
  return (
    <>
      <section className=" bg-empoweringBg">
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-3 xl:px-0 z-10 relative">
          <div className="flex xl:justify-between flex-col-reverse lg:flex-row px-3 xl:px-0 xl:items-center items-end">
            <div
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="900"
              className="w-full lg:w-7/12 lg:py-[62px] sm:pt-[60px] py-[40px]"
            >
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
              <p className=" ff_poppins font-normal xl:text-base md:text-[15px] text-[14px] text-[#CFD4D0] mb-0 mt-[15px] max-w-[620px]">
                Imagine a world where farm and forest are responsible for a
                quarter of all carbon emission. now, picture a future where only
                a minuscule fraction of this is expected to be produced in 2023
                it’s stark contrast, isn’t it?
              </p>
              <p className=" ff_poppins font-normal xl:text-base md:text-[15px] text-[14px] text-[#CFD4D0] mb-0 mt-[10px] max-w-[650px]">
                The road to reducing carbon emissions is littered with obstacles
                - the high costs, the time drain, and the inconsistency and
                inaccuracy of field calculations. These hurdles are not just
                slowing us down, they're accelerating global warming.
              </p>
              <p className=" ff_poppins font-normal xl:text-base md:text-[15px] text-[14px] text-[#CFD4D0] mb-0 mt-[10px] max-w-[650px]">
                But what if there was a solution? That's where "CarbonFlow"
                comes in. We didn't just create a tool, we built a beacon of
                hope to make measuring Farm and Forest Carbon Credits more
                accessible for everyone.
              </p>{" "}
              <p className=" ff_poppins font-normal xl:text-base md:text-[15px] text-[14px] text-[#CFD4D0] mb-0 mt-[10px] max-w-[650px]">
                Over the past five years, we've been on a journey. A journey of
                research, with an 80% confidentiality level, focusing on rubber
                and rice. We're not just committed to creating effective
                solutions, we're dedicated to building trust and reliability in
                everything we do. Because at the end of the day, we're all in
                this together.
              </p>
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              className=" pt-10 md:pt-0 w-full lg:w-5/12 lg:mr-[-50px] flex justify-center after:content-[''] after:absolute relative sm:after:w-2/3 after:w-full after:h-[8px] after:bg-[#ffffff50] after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:z-10"
            >
              <Image
                className="w-full lg:max-w-[550px] max-w-[400px] mx-auto "
                width={512}
                height={555}
                src="/images/webp/empowering-img.webp"
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
