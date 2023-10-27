import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CrossIcon, MenuIcon } from "../common/Icons";
import { useRouter } from "next/router";

const Navbar = ({ teamRef, globalwarmingRef, workRef }) => {
  const [showNav, setShowNav] = useState(false);
  const router = useRouter();

  const [scrollPosition, setScrollPosition] = useState(0);
  // Function to handle scrolling and update scroll position
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };
  // Add scroll event listener when the component mounts and remove it when unmounted
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // Add or remove CSS class to control body overflow when the navigation menu is open
  useEffect(() => {
    if (showNav) {
      document.body.classList.add("!overflow-hidden");
    } else {
      document.body.classList.remove("!overflow-hidden");
    }
  }, [showNav]);
  // Function to handle routing and scrolling to specific sections
  const routeHandler = (value) => {
    setShowNav(false);
    if (router.pathname !== "/") {
      if (value === "team") {
        router.push("/?value=team");
        if (teamRef && teamRef.current) {
          teamRef.current.scrollIntoView({ behavior: "smooth" });
        }
      } else if (value === "Global") {
        router.push("/?value=global");
        if (globalwarmingRef && globalwarmingRef.current) {
          globalwarmingRef.current.scrollIntoView({ behavior: "smooth" });
        }
      } else if (value === "Work") {
        router.push("/?value=work");
        if (workRef && workRef.current) {
          workRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      // For other routes, scroll to a specific section based on the 'value' passed.
      if (value === "Global") {
        if (globalwarmingRef && globalwarmingRef.current) {
          globalwarmingRef.current.scrollIntoView({ behavior: "smooth" });
        }
      } else if (value === "team") {
        if (teamRef && teamRef.current) {
          teamRef.current.scrollIntoView({ behavior: "smooth" });
        }
      } else if (value === "Work") {
        if (workRef && workRef.current) {
          workRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <div className="relative">
      <div
        className={`bg-[#0D2517] z-[100] w-full  black fixed top-0  flex justify-between right-0 duration-200 ${
          scrollPosition > 80 ? "top-0" : "top-[-100px]"
        }`}
      >
        <div className="w-full flex justify-between items-center md:py-[14px] py-[23px] md:px-10 px-5 xl:px-20">
          <div className="flex items-center hover_bounce">
            <Link className="relative z-50" href="/">
              <Image
                className="max-w-[130px] xs:max-w-[160px] 2xl:max-w-[202px]"
                src="/images/svg/Logo.svg"
                width={202}
                height={34}
                alt="logo image"
              />
            </Link>
            <Link className="ms-4" href="/">
              <Image
                className="max-w-[100px] h-auto sm:max-w-[140px]"
                height={100}
                width={250}
                src="/images/svg/JGR_logo.svg"
                alt="JGR_logo"
              />
            </Link>
          </div>
          <ul
            className={`flex xl:gap-[20px] gap-[20px] items-center xl:static fixed top-0 xl:min-h-fit min-h-screen w-full xl:w-auto xl:bg-transparent bg-[#0D2517] justify-center xl:flex-row flex-col duration-200 ${
              showNav ? "left-0" : " -left-full"
            }`}
          >
            <li>
              <span
                onClick={() => routeHandler("Global")}
                className=" text-[13px] xl:text-base ff_poppins font-normal xl:text-[15px] 2xl:text-[16px] text-white opacity-80 after:content-[''] after:absolute after:w-0 hover:after:w-full after:duration-200 after:h-[2px] after:bg-[white] relative after:left-0 after:bottom-[-5px] after:rounded-[5px] hover:opacity-100 cursor-pointer"
              >
                Global Warming is Real?
              </span>
            </li>

            <li>
              <span
                onClick={() => routeHandler("team")}
                className=" text-[13px] xl:text-base ff_poppins font-normal xl:text-[15px] 2xl:text-[16px] text-white opacity-80 after:content-[''] after:absolute after:w-0 hover:after:w-full after:duration-200 after:h-[2px] after:bg-[white] relative after:left-0 after:bottom-[-5px] after:rounded-[5px] hover:opacity-100 cursor-pointer"
              >
                Team
              </span>
            </li>
            <li>
              <span
                onClick={() => routeHandler("Work")}
                className=" text-[13px] xl:text-base ff_poppins font-normal xl:text-[15px] 2xl:text-[16px] text-white opacity-80 after:content-[''] after:absolute after:w-0 hover:after:w-full after:duration-200 after:h-[2px] after:bg-[white] relative after:left-0 after:bottom-[-5px] after:rounded-[5px] hover:opacity-100 cursor-pointer"
              >
                Work with us
              </span>
            </li>
            <li className="xl:ps-5 my-[14px]">
              <Link
                href="mailto:contactus@carbonflow.earth"
                className="ff_poppins font-semibold text-[16px] text-white px-[23px] py-[14px] border border-[#44B902] rounded-full hover:bg-[#44B902] duration-200"
              >
                Contact Us
              </Link>
            </li>
          </ul>
          {/* Mobile menu toggle button */}
          <div className="xl:hidden block relative z-50 cursor-pointer">
            {showNav ? (
              <CrossIcon setShowNav={setShowNav} />
            ) : (
              <MenuIcon setShowNav={setShowNav} />
            )}
          </div>
        </div>
      </div>
      <div className="flex bg-[#061E10] xl:justify-end justify-between items-center w-full py-[23px] xl:pe-20 md:px-10 px-5">
        <div className="xl:absolute z-[2] -left-[40px] 3xl:-left-[38px] xl:top-44 xl:-rotate-90 xl:translate-y-full cursor-pointer">
          <Link href="/">
            <Image
              className="max-w-[202px] hover_bounce"
              src="/images/svg/Logo.svg"
              width={202}
              height={34}
              alt="logo image"
            />
          </Link>
        </div>
        <ul className="xl:flex xl:gap-[33px] gap-[20px] items-center justify-end hidden min-w-[840px]">
          <li>
            <span
              onClick={() => routeHandler("Global")}
              className=" text-[13px] xl:text-base ff_poppins font-normal xl:text-[15px] 2xl:text-[16px] text-white opacity-80 after:content-[''] after:absolute after:w-0 hover:after:w-full after:duration-200 after:h-[2px] after:bg-[white] relative after:left-0 after:bottom-[-5px] after:rounded-[5px] hover:opacity-100 cursor-pointer"
            >
              Global Warming is Real?
            </span>
          </li>
          <li>
            <span
              onClick={() => routeHandler("team")}
              className=" text-[13px] xl:text-base ff_poppins font-normal xl:text-[15px] 2xl:text-[16px] text-white opacity-80 after:content-[''] after:absolute after:w-0 hover:after:w-full after:duration-200 after:h-[2px] after:bg-[white] relative after:left-0 after:bottom-[-5px] after:rounded-[5px] hover:opacity-100 cursor-pointer"
            >
              Team
            </span>
          </li>
          <li>
            <span
              onClick={() => routeHandler("Work")}
              className=" text-[13px] xl:text-base ff_poppins font-normal xl:text-[15px] 2xl:text-[16px] text-white opacity-80 after:content-[''] after:absolute after:w-0 hover:after:w-full after:duration-200 after:h-[2px] after:bg-[white] relative after:left-0 after:bottom-[-5px] after:rounded-[5px] hover:opacity-100 cursor-pointer"
            >
              Work with us
            </span>
          </li>
          <li className="lg:ps-5 my-[8px]">
            <Link
              href="mailto:contactus@carbonflow.earth"
              className="ff_poppins font-semibold text-[16px] text-white px-[23px] py-[14px] border border-[#44B902] rounded-full hover:bg-[#44B902] duration-200"
            >
              Contact Us
            </Link>
          </li>
        </ul>
        {/* Mobile menu toggle button */}
        <div className="xl:hidden block relative z-[100] cursor-pointer">
          {showNav ? (
            <CrossIcon setShowNav={setShowNav} />
          ) : (
            <MenuIcon setShowNav={setShowNav} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
