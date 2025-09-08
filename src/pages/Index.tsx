import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import ThemeToggle from "@/components/ThemeToggle";
import HeroSection from "@/components/HeroSection";
import NavigationGrid from "@/components/NavigationGrid";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import CertificationsSection from "@/components/CertificationsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Custom cursor */}
      <CustomCursor />
      
      {/* Theme toggle */}
      <ThemeToggle />
      
      {/* Scroll progress bar */}
      <ScrollProgress />
      
      {/* Main content */}
      <main>
        <HeroSection />
        <NavigationGrid />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <CertificationsSection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;