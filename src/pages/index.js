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
import { useEffect } from "react";
import gsap from "gsap";

const inter = Inter({ subsets: ["latin"] });

// PAGE SEO START
const pageSEO = {
  // SEO TITLE
  title: "Carbon flow",
  // SEO DESCRIPTION
  description:
    "The most effective way to measure Forrest & farm’s carbon credits without breaking the bank.",
  // SEO WEBSITE URL
  websiteURL: "https://carbon-flow.vercel.app/",
  // SEO IMAGE
  image: "https://carbon-flow.vercel.app/meta-image.png",
};
// AOS.init();

export default function Home() {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 500,
  //     delay: 500,
  //     once: true,
  //   });
  // }, []);

  useEffect(() => {
    const image = document.querySelector(".hero-image");

    if (image) {
      // Initial animation to make the image full-screen
      gsap.to(image, {
        duration: 1,
        width: "100vw",
        height: "100vh",
        // top: 0,
        // left: 0,
        position: "fixed",
        zIndex: 9999,
        onComplete: () => {
          // Animation to move the image back to its original position
          gsap.to(image, {
            duration: 1,
            width: "auto",
            height: "auto",
            bottom: "-60px",
            right: "-88px",
            position: "absolute",
            zIndex: 0,
            onComplete: () => {
              // Add a class when the animation is complete
              image.classList.add("hero_clipPath");
            },
          });
        },
      });
    }
  }, []);

  return (
    <>
      <Seo pageSEO={pageSEO} />
      <HomeHero heroImage="hero-image" />

      {/* <div className=" overflow-x-hidden">
        <Loader />
        <Navbar />
        <MonthsSlider />
        <DataGildMine />
        <DoubleCounting />
        <AsSeenOn />
        <Empowering />
        <TeamMember />
        <Faq />
        <Footer />
        <BackToTop />
      </div> */}
      <div></div>
    </>
  );
}
