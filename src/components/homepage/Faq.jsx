import {useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { FaqIcon } from "../common/Icons";
import Image from "next/image";
import { FaqData } from "../common/Helper";

const Faq = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <section className=" pt-[93px] pb-[257px] bg-[url('/images/webp/faq-bg-img.webp')] bg-fixed bg-no-repeat bg-cover bg-center relative">
        <Image
          className=" absolute 2xl:-bottom-[40px] -bottom-[80px] left-0 w-full h-[167px] object-cover object-top"
          width={1453}
          height={100}
          src="/images/svg/faq_grass.svg"
          alt="footer-grass"
        />
        <div className="custom_container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-3 xl:px-0">
          <h2 className=" ff_AktivGrotesk_bold font-normal sm:text-[36px] text-[32px] text-white capitalize text-center mb-0">
            What to know{" "}
            <span className=" text-[#44B902]">more in detail?</span> FAQ
          </h2>
          <div className="flex flex-col lg:flex-row justify-center flex-wrap mt-[31px]">
            <div className="lg:w-7/12">
              {FaqData.map((data, index) => {
                return (
                  <Accordion
                    key={index}
                    expanded={expanded === index}
                    onChange={handleChange(index)}
                    className="mt-[7px] sm:mt-4  border border-[#FFFFFF4D] bg-[#FFFFFF17] faq_bg_color !rounded-[5px] min-h-[80px]"
                  >
                    <AccordionSummary
                      expandIcon={<FaqIcon />}
                      aria-controls={index}
                      id={index}
                      className="my-1 items-baseline "
                    >
                      <Typography className="ff_AktivGrotesk_bold font-bold text-[18px] mb-0 text-white text-start max-w-[93%]">
                        {data.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="ff_AktivGrotesk font-normal text-[14px] text-white ">
                        {data.faqanswer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
