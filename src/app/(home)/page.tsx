import { HeroHighlight } from "@/components/ui/hero-highlight";
import AboutSection from "./about-section";
import HeroSection from "./hero-section";

export default function Home() {
  return (
    <main>
      <HeroHighlight className="w-full" containerClassName="h-full">
        <HeroSection />
        <AboutSection />
      </HeroHighlight>
    </main>
  );
}
