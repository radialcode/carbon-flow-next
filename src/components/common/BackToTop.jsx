import React, { useEffect, useState } from "react";
import { BacktoTopArrowIcon } from "./Icons";

const BackToTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed bg-[#3EA603] bottom-[3%] border border-white border-dashed transition-all duration-300 ease-linear end-3 z-50 w-9 md:h-11 h-9 md:w-11 flex items-center justify-center cursor-pointer rounded-full hover:shadow-backtop  ${
          scrollPosition > 200 ? "scale-100 " : " scale-0"
        }`}
        onClick={() => scrollToTop()}
      >
        <BacktoTopArrowIcon />
      </div>
    </>
  );
};

export default BackToTop;
