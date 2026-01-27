import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-surface-elevated">
      <div 
        ref={ref}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center"
      >
        {/* Text Content */}
        <div className={`space-y-6 ${isVisible ? 'opacity-100 animate-slide-in-left' : 'opacity-0'}`}>
          <h2 className="font-display text-3xl md:text-4xl font-semibold">
            ¿De qué se trata?
          </h2>
          <p className="text-body text-lg leading-relaxed">
            Masterr es una app que conecta personas que necesitan servicios para el hogar 
            con profesionales confiables, a través de recomendaciones tipo boca a boca 
            dentro de la comunidad.
          </p>
          <div className="pt-4 border-t border-border">
            <h3 className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">
              Objetivo de la presentación
            </h3>
            <p className="text-body leading-relaxed">
              Mostrar el proceso de UX detrás de Masterr, desde el problema hasta la solución 
              final, y explicar las decisiones de diseño tomadas.
            </p>
          </div>
        </div>

        {/* Prototype Image Placeholder */}
        <div className={`${isVisible ? 'opacity-100 animate-slide-in-right' : 'opacity-0'}`}>
          <div className="relative bg-gradient-to-br from-secondary to-muted rounded-2xl aspect-[4/5] flex items-center justify-center overflow-hidden shadow-xl">
            {/* Phone Frame */}
            <div className="w-[70%] bg-foreground/5 backdrop-blur-sm rounded-[2rem] p-3 shadow-2xl">
              <div className="bg-background rounded-[1.5rem] aspect-[9/19] flex flex-col items-center justify-center relative overflow-hidden">
                {/* Status bar mockup */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-secondary/50 flex items-center justify-center">
                  <div className="w-20 h-5 bg-foreground/10 rounded-full"></div>
                </div>
                
                {/* Content placeholder */}
                <div className="p-6 space-y-4 w-full">
                  <div className="h-4 bg-secondary rounded w-3/4 mx-auto"></div>
                  <div className="h-3 bg-secondary/60 rounded w-1/2 mx-auto"></div>
                  <div className="mt-6 space-y-3">
                    <div className="h-16 bg-accent-soft rounded-lg"></div>
                    <div className="h-16 bg-secondary rounded-lg"></div>
                    <div className="h-16 bg-secondary rounded-lg"></div>
                  </div>
                </div>
                
                {/* Bottom bar mockup */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-foreground/20 rounded-full"></div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl"></div>
          </div>
          <p className="text-center text-muted-foreground text-sm mt-4">
            Prototipo de la aplicación Masterr
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
