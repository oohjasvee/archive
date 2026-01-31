import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import EducationSection from '@/components/education-section';
import ExperienceSection from '@/components/experience-section';
import SkillsSection from '@/components/skills-section';
import ResponsibilitySection from '@/components/responsibility-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <div className="space-y-16 md:space-y-24 px-4">
          <AboutSection />
          <EducationSection />
          <ExperienceSection />
          <SkillsSection />
          <ResponsibilitySection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
