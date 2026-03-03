import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import lisandroImg from '@/assets/team/lisandro.png';
import victoriaImg from '@/assets/team/victoria.png';
import juanaImg from '@/assets/team/juana.png';
import utnLogo from '@/assets/utn-logo.png';

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-surface-elevated overflow-hidden">
      <div 
        ref={ref}
        className={`max-w-6xl mx-auto ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}
      >
        {/* Top row: Text + Victoria photo floating right */}
        <div className="relative">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
              ¿De qué se trata?
            </h2>
            <p className="text-body text-lg leading-relaxed mb-6">
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

          {/* Victoria - floating top right */}
          <div className="hidden md:block absolute -top-4 right-0 rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="w-44 shadow-xl">
              <img src={victoriaImg} alt="Victoria Ecalle" className="w-full h-auto" />
            </div>
            <p className="text-xs text-muted-foreground text-center mt-1 font-medium">Victoria Ecalle</p>
          </div>
        </div>

        {/* Bottom row: Context/Tools + two photos scattered */}
        <div className="mt-16 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Lisandro - tilted left */}
            <div className="flex flex-col items-center md:items-start">
              <div className="-rotate-3 hover:rotate-0 transition-transform duration-500 shadow-xl">
                <div className="w-40">
                  <img src={lisandroImg} alt="Lisandro Perrone" className="w-full h-auto" />
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-1 font-medium -rotate-3">Lisandro Perrone</p>
            </div>

            {/* Context + Tools center column */}
            <div className="space-y-6 md:pt-8">
              <div>
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">Contexto</h3>
                <div className="flex items-center gap-3">
                  <img src={utnLogo} alt="UTN BA" className="h-10 object-contain" />
                  <p className="text-body text-sm leading-relaxed">
                    Diplomatura en Diseño UX/UI — UTN Buenos Aires
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">Herramientas</h3>
                <div className="flex items-center gap-5">
                  <div className="flex flex-col items-center gap-1.5">
                    <svg className="w-8 h-8" viewBox="0 0 38 57" fill="none"><path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/><path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/><path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/><path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/><path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/></svg>
                    <span className="text-xs text-muted-foreground">Figma</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5">
                    <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none"><path d="M34 6H14C11.7909 6 10 7.79086 10 10V38C10 40.2091 11.7909 42 14 42H34C36.2091 42 38 40.2091 38 38V10C38 7.79086 36.2091 6 34 6Z" fill="#7248B9"/><rect x="16" y="14" width="16" height="2" rx="1" fill="white"/><rect x="16" y="20" width="16" height="2" rx="1" fill="white"/><rect x="16" y="26" width="12" height="2" rx="1" fill="white"/><rect x="16" y="32" width="10" height="2" rx="1" fill="white"/></svg>
                    <span className="text-xs text-muted-foreground">Google Forms</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5">
                    <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none"><rect x="4" y="4" width="40" height="40" rx="6" fill="#300000"/><path d="M22.5 32H16.5L14.5 37H11L18 13H21.5L28.5 37H25L22.5 32ZM17.5 29H21.5L19.5 22L17.5 29Z" fill="#FF9A00"/><path d="M31 18H34V37H31V18Z" fill="#FF9A00"/><circle cx="32.5" cy="14.5" r="2" fill="#FF9A00"/></svg>
                    <span className="text-xs text-muted-foreground">Illustrator</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Juana - tilted right, pushed down */}
            <div className="flex flex-col items-center md:items-end md:pt-6">
              <div className="rotate-2 hover:rotate-0 transition-transform duration-500 shadow-xl">
                <div className="w-40">
                  <img src={juanaImg} alt="Juana Fuertes" className="w-full h-auto" />
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-1 font-medium rotate-2">Juana Fuertes</p>
            </div>
          </div>

          {/* Victoria mobile fallback */}
          <div className="md:hidden flex justify-center mt-8">
            <div className="rotate-3 shadow-xl">
              <div className="w-40">
                <img src={victoriaImg} alt="Victoria Ecalle" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
