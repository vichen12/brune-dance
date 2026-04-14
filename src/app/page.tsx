import { AuroraBg } from "@/components/backgrounds/AuroraBg";
import { NavBar } from "@/components/sections/NavBar";
import { Hero } from "@/components/sections/Hero";
import { Classes } from "@/components/sections/Classes";
import { KnowMe } from "@/components/sections/KnowMe";
import { AboutMe } from "@/components/sections/AboutMe";
import { OnlineClasses } from "@/components/sections/OnlineClasses";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { BackToTop } from "@/components/common/BackToTop";
export default function Home() {
  return (
    <>
      <AuroraBg />
      <NavBar />
      <main>
        <Hero />
        <Classes />
        <KnowMe />
        <AboutMe />
        <OnlineClasses />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
