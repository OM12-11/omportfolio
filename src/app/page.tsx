import { IntroOverlay } from "@/components/ui/IntroOverlay";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Timeline } from "@/sections/Timeline";
import { Certifications } from "@/sections/Certifications";
import { Contact } from "@/sections/Contact";

export default function Home() {
  return (
    <div className="relative font-sans text-white">
      <IntroOverlay />
      <Hero />
      <About />
      <Skills />
      <Timeline />
      <Certifications />
      <Contact />
    </div>
  );
}
