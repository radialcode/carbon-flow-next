import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/homepage/Navbar";
import Footer from "@/components/homepage/Footer";
import DataGildMine from "@/components/homepage/DataGildMine";
import MonthsSlider from "@/components/homepage/MonthsSlider";
import DoubleCounting from "@/components/homepage/DoubleCounting";
import Empowering from "@/components/homepage/Empowering";
import AsSeenOn from "@/components/homepage/AsSeenOn";
import TeamMember from "@/components/homepage/TeamMember";
import HomeHero from "@/components/homepage/HomeHero";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Faq from "@/components/homepage/Faq";
import BackToTop from "@/components/common/BackToTop";
import Loader from "@/components/common/Loader";
import Seo from "@/components/common/Seo";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";

import { useEffect, useRef, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// PAGE SEO START
const pageSEO = {
  // SEO TITLE
  title: "CarbonFlow",
  // SEO DESCRIPTION
  description:
    "The most effective way to measure Forrest & farm’s carbon credits without breaking the bank.",
  // SEO WEBSITE URL
  websiteURL: "https://carbon-flow.vercel.app/",
  // SEO IMAGE
  image: "https://carbon-flow.vercel.app/meta-img.webp",
};
// AOS.init();

export default function Home() {
  const router = useRouter();
  const [loader, setLoader] = useState(true);
  const topOfPageRef = useRef();
  const teamRef = useRef(null);
  const globalwarmingRef = useRef(null);
  const workRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 500,
      delay: 500,
      // once: true,
    });
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check if the code is running on the client side
      const topOfPageElement = topOfPageRef.current;

      if (topOfPageElement) {
        topOfPageElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  useEffect(() => {
    if (!loader) {
      if (router.query.value === "team") {
        if (teamRef && teamRef.current) {
          teamRef.current.scrollIntoView({ behavior: "smooth" });
        }
      } else if (router.query.value === "global") {
        globalwarmingRef.current.scrollIntoView({
          behavior: "smooth",
        });
      } else if (router.query.value === "work") {
        workRef.current.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  }, [loader]);
  return (
    <>
      <Seo pageSEO={pageSEO} />

      <div className=" overflow-x-hidden" ref={topOfPageRef}>
        <Loader setLoader={setLoader} loader={loader} />
        {loader ? (
          ""
        ) : (
          <Navbar
            teamRef={teamRef}
            globalwarmingRef={globalwarmingRef}
            workRef={workRef}
          />
        )}
        <HomeHero setLoader={setLoader} loader={loader} />
        <MonthsSlider />
        <DataGildMine globalwarmingRef={globalwarmingRef} />
        <DoubleCounting />
        <AsSeenOn />
        <Empowering workRef={workRef} />
        <TeamMember teamRef={teamRef} />
        <Faq />
        <Footer
          teamRef={teamRef}
          globalwarmingRef={globalwarmingRef}
          workRef={workRef}
        />
        <BackToTop />
      </div>
    </>
  );
}
