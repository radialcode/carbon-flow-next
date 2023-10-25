import Disclaimer from "@/components/common/Disclaimer";
import Footer from "@/components/homepage/Footer";
import Navbar from "@/components/homepage/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Disclaimer />
      <Footer hidden="hidden" topspace="pt-32" />
    </>
  );
}
