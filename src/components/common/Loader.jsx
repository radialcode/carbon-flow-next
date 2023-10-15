import Image from "next/image";
import React, { useEffect, useState } from "react";

function Loader(props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2500);
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

  return (
    <>
      {loader ? (
        <section className="w-full h-screen bg-black relative z-[999]">
          <div className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex justify-center">
            <div className="relative h-20 w-6/12 rounded-full border-transparent">
              <div class="loader bg-black p-5 rounded-full flex space-x-4">
                <div class="w-10 h-10 bg-gray-800 rounded-full animate-bounce bg-[#3FA904]"></div>
                <div class="w-10 h-10 bg-gray-800 rounded-full animate-bounce bg-[#3FA904]"></div>
                <div class="w-10 h-10 bg-gray-800 rounded-full animate-bounce bg-[#3FA904]"></div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
}

export default Loader;
