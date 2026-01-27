import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ResearchSection from '@/components/ResearchSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <Hero />
        <ResearchSection />
      </main>
    </div>
  );
};

export default Index;
