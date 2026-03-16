import Navigation from '@/components/Navigation';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ResearchSection from '@/components/ResearchSection';
import UserPersonaSection from '@/components/UserPersonaSection';
import BenchmarkSection from '@/components/BenchmarkSection';
import UserFlowSection from '@/components/UserFlowSection';
import MoodboardSection from '@/components/MoodboardSection';
import ProductShowcase from '@/components/ProductShowcase';
import UserTestingSection from '@/components/UserTestingSection';
import FigmaPrototypeSection from '@/components/FigmaPrototypeSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgressBar />
      <Navigation />
      <main className="pt-20">
        <Hero />
        <AboutSection />
        <ResearchSection />
        <UserPersonaSection />
        <BenchmarkSection />
        <UserFlowSection />
        <MoodboardSection />
        <ProductShowcase />
        <UserTestingSection />
        <FigmaPrototypeSection />
      </main>
    </div>
  );
};

export default Index;
