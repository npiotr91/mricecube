import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { IceBar } from "@/components/sections/IceBar";
import { WhoWeServe } from "@/components/sections/WhoWeServe";
import { Products } from "@/components/sections/Products";
import { Stats } from "@/components/sections/Stats";
import { Why } from "@/components/sections/Why";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppFab } from "@/components/ui/WhatsAppFab";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <IceBar />
        <WhoWeServe />
        <Products />
        <Stats />
        <Why />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
