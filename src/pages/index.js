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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <MonthsSlider />
      <DataGildMine />
      <DoubleCounting />
      <AsSeenOn />
      <Empowering />
      {/* <TeamMember /> */}
      <Faq />
      <Footer />
    </>
  );
}
