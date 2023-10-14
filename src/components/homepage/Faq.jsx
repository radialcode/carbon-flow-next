import React from "react";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="white"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const Faq = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <>
      <section className=" pt-[93px] pb-[257px] bg-[url('/images/png/faq-bg-img.png')] bg-fixed bg-no-repeat bg-cover bg-center">
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-3 xl:px-0">
          <h2 className=" ff_AktivGrotesk_bold font-normal text-[36px] text-white capitalize text-center mb-0">
            What to know{" "}
            <span className=" text-[#44B902]">more in detail?</span> FAQ
          </h2>
          <div className="flex flex-col lg:flex-row justify-center flex-wrap mt-[31px]">
            <div className="lg:w-7/12">
              <Fragment>
                <Accordion
                  className="border-b mt-[7px] sm:mt-4 faq_bg_color"
                  open={open === 1}
                  icon={<Icon id={1} open={open} />}
                >
                  <AccordionHeader
                    onClick={() => handleOpen(1)}
                    className="border-none py-3 flex items-start"
                  >
                    <p className="ff_AktivGrotesk_bold font-normal text-base mb-0 text-white text-start max-w-[422px]">
                      What kind of training or technical skills are required to
                      use CarbonFlow effectively?
                    </p>
                  </AccordionHeader>
                  <AccordionBody className=" ff_AktivGrotesk_bold font-normal text-[14px] text-white pb-[16px]">
                    Yes, our mobile app is available to premier and premier plus
                    subscribers, allowing you to manage your business on the go.
                  </AccordionBody>
                </Accordion>
                <Accordion
                  className="border-b mt-[7px] sm:mt-4 faq_bg_color"
                  open={open === 2}
                  icon={<Icon id={2} open={open} />}
                >
                  <AccordionHeader
                    className="border-none py-3 flex items-start"
                    onClick={() => handleOpen(2)}
                  >
                    <p className=" ff_AktivGrotesk_bold font-normal text-base mb-0 text-white text-start max-w-[506px]">
                      Can CarbonFlow scale to meet our needs as our company
                      grows and our carbon credit validation needs increase?
                    </p>
                  </AccordionHeader>
                  <AccordionBody className=" ff_AktivGrotesk_bold font-normal text-[14px] text-white pb-[16px]">
                    We&apos;re not always in the position that we want to be at.
                    We&apos;re constantly growing. We&apos;re constantly making
                    mistakes. We&apos;re constantly trying to express ourselves
                    and actualize our dreams.
                  </AccordionBody>
                </Accordion>
                <Accordion
                  className="border-b mt-[7px] sm:mt-4 faq_bg_color"
                  open={open === 3}
                  icon={<Icon id={3} open={open} />}
                >
                  <AccordionHeader
                    className="border-none py-3 flex items-start"
                    onClick={() => handleOpen(3)}
                  >
                    <p className=" ff_AktivGrotesk_bold font-normal text-base mb-0 text-white text-start max-w-[568px]">
                      How accurate are the carbon credit measurements provided
                      by CarbonFlow. and how do the compare to other methods in
                      the market?
                    </p>
                  </AccordionHeader>
                  <AccordionBody className=" ff_AktivGrotesk_bold font-normal text-[14px] text-white pb-[16px]">
                    We&apos;re not always in the position that we want to be at.
                    We&apos;re constantly growing. We&apos;re constantly making
                    mistakes. We&apos;re constantly trying to express ourselves
                    and actualize our dreams.
                  </AccordionBody>
                </Accordion>
                <Accordion
                  className="border-b mt-[7px] sm:mt-4 faq_bg_color"
                  open={open === 4}
                  icon={<Icon id={4} open={open} />}
                >
                  <AccordionHeader
                    className="border-none py-3 flex items-start"
                    onClick={() => handleOpen(4)}
                  >
                    <p className="ff_AktivGrotesk_bold font-normal text-base mb-0 text-white text-start max-w-[406px]">
                      How quickly can CarbonFlow validate carbon credits?
                    </p>
                  </AccordionHeader>
                  <AccordionBody className=" ff_AktivGrotesk_bold font-normal text-[14px] text-white pb-[16px]">
                    We&apos;re not always in the position that we want to be at.
                    We&apos;re constantly growing. We&apos;re constantly making
                    mistakes. We&apos;re constantly trying to express ourselves
                    and actualize our dreams.
                  </AccordionBody>
                </Accordion>
                <Accordion
                  className="border-b mt-[7px] sm:mt-4 faq_bg_color"
                  open={open === 5}
                  icon={<Icon id={5} open={open} />}
                >
                  <AccordionHeader
                    className="border-none py-3 flex items-start"
                    onClick={() => handleOpen(5)}
                  >
                    <p className="ff_AktivGrotesk_bold font-normal text-base mb-0 text-white text-start max-w-[487px]">
                      What is the pricing structure for CarbonFlow? Is it a
                      subscription service, a one-time fee, or based on usage?
                    </p>
                  </AccordionHeader>
                  <AccordionBody className=" ff_AktivGrotesk_bold font-normal text-[14px] text-white pb-[16px]">
                    We&apos;re not always in the position that we want to be at.
                    We&apos;re constantly growing. We&apos;re constantly making
                    mistakes. We&apos;re constantly trying to express ourselves
                    and actualize our dreams.
                  </AccordionBody>
                </Accordion>
              </Fragment>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
