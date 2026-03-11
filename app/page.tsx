import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TechSection } from "@/components/TechSection";
import { ContactSection } from "@/components/ContactSection";
import { SectionDivider } from "@/components/SectionDivider";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <ProjectsSection />
      <SectionDivider />
      <TechSection />
      <SectionDivider />
      <ContactSection />
    </>
  );
}
