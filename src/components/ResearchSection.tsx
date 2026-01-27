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
              title="¿Qué tipo de servicio contratás más seguido?"
              description="Servicios más demandados por los usuarios encuestados"
              bars={[
                { label: 'Plomería y gas', value: 44, color: 'bg-accent' },
                { label: 'Albañilería', value: 31, color: 'bg-primary' },
                { label: 'Reparación electrodomésticos', value: 31, color: 'bg-primary/80' },
                { label: 'Electricidad', value: 30, color: 'bg-primary/60' },
                { label: 'Pintura', value: 12, color: 'bg-muted-foreground/60' },
                { label: 'Mudanzas', value: 10, color: 'bg-muted-foreground/40' },
              ]}
            />
            <SurveyChart 
              direction="right"
              delay={150}
              title="¿Cómo encontrás el contacto de los prestadores?"
              description="Canales de descubrimiento de profesionales"
              bars={[
                { label: 'Referencia de conocidos', value: 49, color: 'bg-accent' },
                { label: 'Redes sociales', value: 15, color: 'bg-primary' },
                { label: 'Carteles callejeros', value: 6, color: 'bg-muted-foreground/60' },
                { label: 'Recomendación inmobiliaria', value: 1, color: 'bg-muted-foreground/40' },
              ]}
            />
            <SurveyChart 
              direction="left"
              delay={300}
              title="¿Qué tenés más en cuenta a la hora de contratar?"
              description="Factores de decisión más importantes"
              bars={[
                { label: 'Reputación / Opiniones', value: 44, color: 'bg-accent' },
                { label: 'Precio', value: 41, color: 'bg-primary' },
                { label: 'Experiencia', value: 18, color: 'bg-primary/60' },
                { label: 'Disponibilidad', value: 11, color: 'bg-muted-foreground/60' },
                { label: 'Certificaciones / Licencias', value: 5, color: 'bg-muted-foreground/40' },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
