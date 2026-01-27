import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ResearchSection from '@/components/ResearchSection';
import ProductShowcase from '@/components/ProductShowcase';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <Hero />
        <AboutSection />
        <ResearchSection />
        <ProductShowcase />
      </main>
    </div>
  );
};

export default Index;
