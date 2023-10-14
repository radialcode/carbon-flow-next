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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Faq from "@/components/homepage/Faq";
import BackToTop from "@/components/common/BackToTop";
import Loader from "@/components/common/Loader";
import Seo from "@/components/common/Seo";

const inter = Inter({ subsets: ["latin"] });

// PAGE SEO START
const pageSEO = {
  // SEO TITLE
  title: "Carbon flow",
  // SEO DESCRIPTION
  description:
    "Zoplenti is your trusted Amazon retail partner, focused on growing the sales and the prestige of premium brands on Amazon.com.",
  // SEO WEBSITE URL
  websiteURL: "https://zoplenti-next.vercel.app",
  // SEO IMAGE
  image: "/home_meta_img.webp",
};

export default function Home() {
  return (
    <>
      <Seo pageSEO={pageSEO} />
      <Loader />
      <div className=" overflow-x-hidden">
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
      </div>
    </>
  );
}
