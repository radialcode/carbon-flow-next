import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function Loader(props) {
  const [loader, setLoader] = useState(true); // Start with the loader initially visible
  useEffect(() => {
    setTimeout(() => {
      setLoader(false); // Hide the loader after a delay (e.g., 9000 milliseconds)
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
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <>
      {loader && (
        <section className="fixed left-0 top-0 w-full h-screen bg-black z-[5] flex justify-center items-center">
          {/* <div className="hero_clipPath absolute top-[40%] right-[45%]">
            <Image
              ref={ref}
              priority={true}
              className="
              hero_clipPath w-full max-w-[200px] h-[200px]"
              src="/images/webp/forrest_hero_img.webp"
              width={808}
              height={846}
              alt="blockchain"
            />
          </div> */}
        </section>
      )}
    </>
  );
}

export default Loader;
