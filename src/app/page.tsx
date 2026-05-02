import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Modes from "@/components/sections/Modes";
import AppControl from "@/components/sections/AppControl";
import HiddenInstall from "@/components/sections/HiddenInstall";
import Features from "@/components/sections/Features";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Modes />
      <AppControl />
      <HiddenInstall />
      <Features />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
      <FinalCTA />
    </>
  );
}
