import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { User } from 'lucide-react';

const UserPersonaSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={titleRef}
          className={`mb-16 ${titleVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            transform: titleVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <span className="text-accent font-medium tracking-wide uppercase text-sm">
            User Persona
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mt-3 mb-6">
            Conociendo a Nuestros Usuarios
          </h2>
          <p className="text-body text-lg max-w-3xl leading-relaxed">
            Basado en nuestra investigación, creamos personas representativas que 
            nos ayudan a empatizar con las necesidades reales de nuestros usuarios.
          </p>
        </div>

        <div
          ref={cardRef}
          className="bg-card rounded-3xl border border-border shadow-lg overflow-hidden"
          style={{
            opacity: cardVisible ? 1 : 0,
            transform: cardVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 150ms'
          }}
        >
          <div className="grid md:grid-cols-3 gap-0">
            {/* Left Column - Photo and Quote */}
            <div className="bg-accent/10 p-8 flex flex-col">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-muted flex items-center justify-center mb-6 overflow-hidden">
                <User className="w-16 h-16 text-muted-foreground" />
              </div>
              
              <blockquote className="text-lg md:text-xl font-medium italic text-foreground mb-8 leading-relaxed">
                "Trabajo muchas horas y necesito soluciones rápidas y confiables."
              </blockquote>

              <div>
                <h4 className="font-display font-semibold text-sm uppercase tracking-wide text-accent mb-3">
                  Bio
                </h4>
                <p className="text-body text-sm leading-relaxed">
                  Profesora universitaria y particular de Matemáticas. Vive con su pareja en Rosario, SF. 
                  Su jornada laboral diaria suele ser extensa dejándole poco tiempo libre.
                </p>
              </div>
            </div>

            {/* Middle Column - Name, Skills, Goals */}
            <div className="p-8 border-t md:border-t-0 md:border-l border-border">
              <div className="mb-8">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  Florencia
                </h3>
                <p className="text-body text-lg">37 años · Profesora</p>
              </div>

              <div className="mb-8">
                <h4 className="font-display font-semibold text-sm uppercase tracking-wide text-accent mb-3">
                  Habilidades
                </h4>
                <ul className="space-y-2 text-body text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    Hábil para análisis de costos del hogar
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    Competente para el office software
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    Acostumbrada a trabajar con grupos
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-display font-semibold text-sm uppercase tracking-wide text-accent mb-3">
                  Objetivos y metas
                </h4>
                <ul className="space-y-2 text-body text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    Resolver rápida y efectivamente sus problemas cotidianos para optimizar su tiempo personal.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    Tramar redes colaborativas y confiables con otras personas en diversos ámbitos.
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Motivations, Frustrations */}
            <div className="p-8 border-t md:border-t-0 md:border-l border-border">
              <div className="mb-8">
                <h4 className="font-display font-semibold text-sm uppercase tracking-wide text-accent mb-3">
                  Motivaciones
                </h4>
                <ul className="space-y-2 text-body text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    Referencia de conocidos
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    Transparencia de costos
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    Compromiso con el encargo
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    Rapidez de respuesta
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-display font-semibold text-sm uppercase tracking-wide text-destructive mb-3">
                  Frustraciones
                </h4>
                <ul className="space-y-2 text-body text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    Demora en la respuesta
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    Falta de comunicación
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    Sobrecostos
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    Falta de garantía y durabilidad del arreglo
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserPersonaSection;
