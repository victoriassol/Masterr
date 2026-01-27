import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SurveyChart from './SurveyChart';

const ResearchSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-surface-elevated">
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
            Metodología
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mt-3 mb-6">
            Investigación Cuantitativa y Cualitativa
          </h2>
          <p className="text-body text-lg max-w-3xl leading-relaxed">
            Combinamos métodos cuantitativos y cualitativos para obtener una visión 
            completa de las necesidades, comportamientos y motivaciones de nuestros usuarios.
          </p>
        </div>

        {/* Encuestas Section */}
        <div className="mt-20">
          <div className="mb-12">
            <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4">
              Encuestas
            </h3>
            <p className="text-body text-lg max-w-2xl">
              Recopilamos datos de más de 500 usuarios para identificar patrones 
              y tendencias clave en su comportamiento.
            </p>
          </div>

          <div className="space-y-8">
            <SurveyChart 
              direction="left"
              delay={0}
              title="Satisfacción del usuario"
              description="Nivel de satisfacción general con la experiencia actual"
            />
            <SurveyChart 
              direction="right"
              delay={150}
              title="Frecuencia de uso"
              description="Con qué frecuencia los usuarios interactúan con el producto"
            />
            <SurveyChart 
              direction="left"
              delay={300}
              title="Principales pain points"
              description="Problemas más comunes reportados por los usuarios"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
