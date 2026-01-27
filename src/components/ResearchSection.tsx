import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import chartSatisfaction from '@/assets/chart-satisfaction.png';
import chartFrequency from '@/assets/chart-frequency.png';
import chartPainpoints from '@/assets/chart-painpoints.png';

const ResearchSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: chart1Ref, isVisible: chart1Visible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: chart2Ref, isVisible: chart2Visible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: chart3Ref, isVisible: chart3Visible } = useScrollAnimation({ threshold: 0.3 });

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

          {/* Chart Images with Slide Animation */}
          <div className="space-y-8">
            {/* Chart 1 - Slide from Left */}
            <div
              ref={chart1Ref}
              className="bg-card rounded-2xl p-6 shadow-sm border border-border overflow-hidden"
              style={{
                opacity: chart1Visible ? 1 : 0,
                transform: chart1Visible ? 'translateX(0)' : 'translateX(-80px)',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <h4 className="font-display text-xl font-semibold mb-4">Satisfacción del usuario</h4>
              <img 
                src={chartSatisfaction} 
                alt="Gráfico de satisfacción del usuario" 
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Chart 2 - Slide from Right */}
            <div
              ref={chart2Ref}
              className="bg-card rounded-2xl p-6 shadow-sm border border-border overflow-hidden"
              style={{
                opacity: chart2Visible ? 1 : 0,
                transform: chart2Visible ? 'translateX(0)' : 'translateX(80px)',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s'
              }}
            >
              <h4 className="font-display text-xl font-semibold mb-4">Frecuencia de uso</h4>
              <img 
                src={chartFrequency} 
                alt="Gráfico de frecuencia de uso" 
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Chart 3 - Slide from Left */}
            <div
              ref={chart3Ref}
              className="bg-card rounded-2xl p-6 shadow-sm border border-border overflow-hidden"
              style={{
                opacity: chart3Visible ? 1 : 0,
                transform: chart3Visible ? 'translateX(0)' : 'translateX(-80px)',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
              }}
            >
              <h4 className="font-display text-xl font-semibold mb-4">Principales pain points</h4>
              <img 
                src={chartPainpoints} 
                alt="Gráfico de principales pain points" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
