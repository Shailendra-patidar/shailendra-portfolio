import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import SkillsSection from "@/components/SkillsSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import FinalCTA from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <SkillsSection />
      <FeaturedProjects />
      <FinalCTA />
    </>
  );
}
