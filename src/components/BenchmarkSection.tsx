import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Check, X, Minus } from 'lucide-react';

interface CompetitorCardProps {
  name: string;
  description: string;
  features: {
    name: string;
    status: 'yes' | 'no' | 'partial';
  }[];
  delay: number;
}

const CompetitorCard = ({ name, description, features, delay }: CompetitorCardProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const getStatusIcon = (status: 'yes' | 'no' | 'partial') => {
    switch (status) {
      case 'yes':
        return <Check className="w-5 h-5 text-accent" />;
      case 'no':
        return <X className="w-5 h-5 text-destructive" />;
      case 'partial':
        return <Minus className="w-5 h-5 text-muted-foreground" />;
    }
  };

  return (
    <div
      ref={ref}
      className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border flex flex-col"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
      }}
    >
      <div className="mb-6">
        <h4 className="font-display text-xl md:text-2xl font-semibold mb-2">
          {name}
        </h4>
        <p className="text-body text-sm leading-relaxed">
          {description}
        </p>
      </div>

      <div className="space-y-3 flex-1">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="flex items-center justify-between py-2 border-b border-border/50 last:border-0"
          >
            <span className="text-sm text-foreground">{feature.name}</span>
            {getStatusIcon(feature.status)}
          </div>
        ))}
      </div>
    </div>
  );
};

const BenchmarkSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  const competitors = [
    {
      name: 'Tutti',
      description: 'Marketplace general de clasificados con sección de servicios para el hogar.',
      features: [
        { name: 'Reseñas verificadas', status: 'no' as const },
        { name: 'Chat integrado', status: 'yes' as const },
        { name: 'Perfiles de profesionales', status: 'partial' as const },
        { name: 'Seguimiento del servicio', status: 'no' as const },
        { name: 'Sistema de pagos', status: 'no' as const },
        { name: 'Verificación de identidad', status: 'no' as const },
      ],
    },
    {
      name: 'Manno',
      description: 'Plataforma especializada en servicios para el hogar con presencia regional.',
      features: [
        { name: 'Reseñas verificadas', status: 'yes' as const },
        { name: 'Chat integrado', status: 'yes' as const },
        { name: 'Perfiles de profesionales', status: 'yes' as const },
        { name: 'Seguimiento del servicio', status: 'partial' as const },
        { name: 'Sistema de pagos', status: 'partial' as const },
        { name: 'Verificación de identidad', status: 'partial' as const },
      ],
    },
    {
      name: 'JustLife',
      description: 'App de servicios de limpieza y mantenimiento con modelo de suscripción.',
      features: [
        { name: 'Reseñas verificadas', status: 'yes' as const },
        { name: 'Chat integrado', status: 'yes' as const },
        { name: 'Perfiles de profesionales', status: 'partial' as const },
        { name: 'Seguimiento del servicio', status: 'yes' as const },
        { name: 'Sistema de pagos', status: 'yes' as const },
        { name: 'Verificación de identidad', status: 'yes' as const },
      ],
    },
  ];

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
            Análisis Competitivo
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mt-3 mb-6">
            Benchmarking
          </h2>
          <p className="text-body text-lg max-w-3xl leading-relaxed">
            Analizamos las principales plataformas del mercado para identificar 
            oportunidades de diferenciación y mejores prácticas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {competitors.map((competitor, index) => (
            <CompetitorCard
              key={competitor.name}
              name={competitor.name}
              description={competitor.description}
              features={competitor.features}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenchmarkSection;
