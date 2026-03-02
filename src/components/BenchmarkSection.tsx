import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import tuttiImg from '@/assets/benchmark-tutti.png';
import mannoImg from '@/assets/benchmark-manno.jpg';
import justlifeImg from '@/assets/benchmark-justlife.png';

interface AnalysisPoint {
  category: string;
  text: string;
}

interface CompetitorData {
  name: string;
  image: string;
  analysis: AnalysisPoint[];
  delay: number;
}

const CompetitorColumn = ({ name, image, analysis, delay }: CompetitorData) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className="flex flex-col"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
      }}
    >
      <div className="bg-muted rounded-2xl p-4 mb-6 flex justify-center">
        <img
          src={image}
          alt={`${name} app screenshot`}
          className="w-full max-w-[240px] rounded-xl object-contain"
        />
      </div>

      <h4 className="font-display text-xl md:text-2xl font-semibold mb-4">{name}</h4>

      <div className="space-y-4">
        {analysis.map((point, index) => (
          <div key={index}>
            <span className="text-accent font-semibold text-sm uppercase tracking-wide">
              {point.category}
            </span>
            <p className="text-body text-sm leading-relaxed mt-1">
              {point.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const BenchmarkSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  const competitors: Omit<CompetitorData, 'delay'>[] = [
    {
      name: 'Tutti',
      image: tuttiImg,
      analysis: [
        {
          category: 'Visual',
          text: 'Buena legibilidad general, pero con mala distribución del espacio y problemas de contraste entre fondo y texto que afectan la jerarquía visual.',
        },
        {
          category: 'Interacción',
          text: 'Registro y solicitud de servicio extensos (muchos pasos), lo que hace el recorrido más largo y menos eficiente frente a la competencia.',
        },
        {
          category: 'Vocabulario',
          text: 'Directo e intuitivo, con categorías claras; sin embargo, repeticiones en estados vacíos generan pequeños conflictos de comprensión.',
        },
      ],
    },
    {
      name: 'Manno',
      image: mannoImg,
      analysis: [
        {
          category: 'Visual',
          text: 'Diseño equilibrado, coherente entre pantallas, buen uso del espacio y contraste adecuado; presenta leves desalineaciones puntuales.',
        },
        {
          category: 'Interacción',
          text: 'Flujo ágil y optimizado, con pocos pasos en log in, registro y solicitud, lo que mejora la eficiencia del recorrido.',
        },
        {
          category: 'Vocabulario',
          text: 'Claro y consistente con la acción del usuario, aunque existe un error puntual en etiquetas como "presupuestar" que no cumplen exactamente su función.',
        },
      ],
    },
    {
      name: 'JustLife',
      image: justlifeImg,
      analysis: [
        {
          category: 'Visual',
          text: 'Interfaz visualmente cargada, con exceso de información y mezcla de formatos (íconos, imágenes, reels) que generan ruido y sensación de sobreestimulación.',
        },
        {
          category: 'Interacción',
          text: 'Log in y registro simples, pero proceso de solicitud de servicio más extenso y con múltiples decisiones en cada etapa.',
        },
        {
          category: 'Vocabulario',
          text: 'Directo y comprensible, aunque la cantidad de información y opciones simultáneas puede resultar abrumadora.',
        },
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

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {competitors.map((competitor, index) => (
            <CompetitorColumn
              key={competitor.name}
              {...competitor}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenchmarkSection;
