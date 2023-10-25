import React, { useEffect, useState } from "react";
import CountUp, { useCountUp } from "react-countup";

import VisibilitySensor from "react-visibility-sensor";

function Loader({ setLoader, loader }) {
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2100);
  }, []);
  useEffect(() => {
    if (loader) {
      document.body.style.overflow = "hidden";
      document.documentElement.scrollTop = 0;
    } else {
      document.body.style.overflow = "initial";
      document.documentElement.scrollTop = 0;
    }
  }, [loader]);
  const countUpRef = React.useRef(null);
  const [viewCount, setViewCount] = useState(false);
  function onVisibilityChange(visible) {
    if (visible) {
      setViewCount(true);
    }
  }
  return (
    <>
      {loader && (
        <section className="fixed left-0 top-0 w-full h-screen bg-[#061E10] z-[999] flex justify-center items-center">
          <div className="fixed right-10 bottom-10 text-[40px] font-bold text-white ff_poppins">
            <VisibilitySensor
              onChange={onVisibilityChange}
              offset={{
                top: 10,
              }}
              delayedCallon
            >
              <CountUp start={0} duration={2.2} end={viewCount && 100}>
                {({ countUpRef }) => <span  ref={countUpRef}></span>}
              </CountUp>
            </VisibilitySensor>
            <span>%</span>
          </div>
          <div className="relative z-50 flex justify-center">
            <div className="relative h-20 w-6/12 rounded-full border-transparent">
              <div className="loader bg-[#061E10] p-5 rounded-full flex space-x-4">
                {/* <div className="w-10 h-10 bg-gray-800 rounded-full animate-bounce bg-[#3FA904]"></div>
                <div className="w-10 h-10 bg-gray-800 rounded-full animate-bounce bg-[#3FA904]"></div>
                <div className="w-10 h-10 bg-gray-800 rounded-full animate-bounce bg-[#3FA904]"></div> */}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Loader;
