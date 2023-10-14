import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DataGildMine from "@/components/homepage/DataGildMine";
import MonthsSlider from "@/components/homepage/MonthsSlider";
import DoubleCounting from "@/components/homepage/DoubleCounting";
import Empowering from "@/components/homepage/Empowering";
import AsSeenOn from "@/components/homepage/AsSeenOn";
import TeamMember from "@/components/homepage/TeamMember";
import HomeHero from "@/components/homepage/HomeHero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeHero />
      <MonthsSlider />
      <DataGildMine />
      <DoubleCounting />
      <AsSeenOn />
      <Empowering />
      <TeamMember />
      <Footer />
    </>
  );
}
