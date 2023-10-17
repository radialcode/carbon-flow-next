import React, { useEffect, useState } from "react";

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
        className={`fixed bg-[#3EA603] bottom-[3%] border border-white border-dashed transition-all duration-300 ease-linear end-3 z-50 w-9 md:h-11 h-9 md:w-11 flex items-center justify-center cursor-pointer rounded-full hover:shadow-backtop scrolldown_animation  ${
          scrollPosition > 200 ? "scale-100 " : " scale-0"
        }`}
        onClick={() => scrollToTop()}
      >
        <svg
          className=" animate-pulse"
          width="22"
          height="22"
          fill="white"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"
          ></path>
          <path
            fillRule="evenodd"
            d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default BackToTop;
