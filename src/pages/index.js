import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DataGildMine from "@/components/homepage/DataGildMine";
import MonthsSlider from "@/components/homepage/MonthsSlider";
import DoubleCounting from "@/components/homepage/DoubleCounting";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <MonthsSlider />
      <DataGildMine />
      <DoubleCounting />
      <Footer />
    </>
  );
}
