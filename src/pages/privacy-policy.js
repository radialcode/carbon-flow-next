import PrivacyAndPolicy from "@/components/common/PrivacyAndPolicy";
import Footer from "@/components/homepage/Footer";
import Navbar from "@/components/homepage/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <PrivacyAndPolicy />
      <Footer hidden="hidden" topspace="pt-32" />
    </>
  );
}
