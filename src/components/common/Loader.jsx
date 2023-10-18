import React, { useEffect, useState } from "react";

function Loader(props) {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
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
      {loader && (
        <section className="fixed left-0 top-0 w-full h-screen bg-black z-[999] flex justify-center items-center">
          <div className="relative z-50 flex justify-center">
            <div className="relative h-20 w-6/12 rounded-full border-transparent">
              <div className="loader bg-black p-5 rounded-full flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full animate-bounce bg-[#3FA904]"></div>
                <div className="w-10 h-10 bg-gray-800 rounded-full animate-bounce bg-[#3FA904]"></div>
                <div className="w-10 h-10 bg-gray-800 rounded-full animate-bounce bg-[#3FA904]"></div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Loader;
