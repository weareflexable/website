// import Image from "next/image";

import Experience from "@/app/components/home/experience";
import Navbar from "@/app/components/ui/navbar";
import Hero from "@/app/components/home/Hero";
import Access from "@/app/components/home/Access";
import AccessVIP from "@/app/components/home/AccessVIP";
import ForBusinesses from "@/app/components/home/ForBusinesses";
import AboutAndContact from "@/app/components/home/AboutAndContact";
import Footer from "@/app/components/ui/Footer";
import {
  numberCardBusinessData,
  numberCardCustomerData,
} from "@/app/constants/text";

export default function Home() {
  return (
    <div className="bg-background">
      <main className="mx-auto">
        <Navbar />
        <Hero />
        <Experience />
        <ForBusinesses data={numberCardBusinessData} title="For Businesses" />
        <Access />
        <ForBusinesses data={numberCardCustomerData} title="For Customers" />
        <AccessVIP />
        <AboutAndContact />
        <Footer />
      </main>
      <footer className=""></footer>
    </div>
  );
}
