import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import tuttiImg from '@/assets/benchmark-tutti.png';
import mannoImg from '@/assets/benchmark-manno.jpg';
import justlifeImg from '@/assets/benchmark-justlife.png';

const BenchmarkSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: tableRef, isVisible: tableVisible } = useScrollAnimation({ threshold: 0.1 });

  const competitors = [
    { name: 'Tutti', image: tuttiImg },
    { name: 'Manno', image: mannoImg },
    { name: 'JustLife', image: justlifeImg },
  ];

  const categories = [
    {
      label: 'Visual',
      values: [
        'Buena legibilidad general, pero con mala distribución del espacio y problemas de contraste entre fondo y texto que afectan la jerarquía visual.',
        'Diseño equilibrado, coherente entre pantallas, buen uso del espacio y contraste adecuado; presenta leves desalineaciones puntuales.',
        'Interfaz visualmente cargada, con exceso de información y mezcla de formatos (íconos, imágenes, reels) que generan ruido y sensación de sobreestimulación.',
      ],
    },
    {
      label: 'Interacción',
      values: [
        'Registro y solicitud de servicio extensos (muchos pasos), lo que hace el recorrido más largo y menos eficiente frente a la competencia.',
        'Flujo ágil y optimizado, con pocos pasos en log in, registro y solicitud, lo que mejora la eficiencia del recorrido.',
        'Log in y registro simples, pero proceso de solicitud de servicio más extenso y con múltiples decisiones en cada etapa.',
      ],
    },
    {
      label: 'Vocabulario',
      values: [
        'Directo e intuitivo, con categorías claras; sin embargo, repeticiones en estados vacíos generan pequeños conflictos de comprensión.',
        'Claro y consistente con la acción del usuario, aunque existe un error puntual en etiquetas como "presupuestar" que no cumplen exactamente su función.',
        'Directo y comprensible, aunque la cantidad de información y opciones simultáneas puede resultar abrumadora.',
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

        <div
          ref={tableRef}
          style={{
            opacity: tableVisible ? 1 : 0,
            transform: tableVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* Header row: images + names */}
          <div className="grid grid-cols-[120px_1fr_1fr_1fr] gap-4 mb-8">
            <div />
            {competitors.map((c) => (
              <div key={c.name} className="flex flex-col items-center gap-3">
                <div className="bg-muted rounded-2xl p-3 w-full aspect-[9/16] overflow-hidden flex items-center justify-center">
                  <img
                    src={c.image}
                    alt={`${c.name} app screenshot`}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <h4 className="font-display text-lg md:text-xl font-semibold">{c.name}</h4>
              </div>
            ))}
          </div>

          {/* Category rows */}
          <div className="space-y-0">
            {categories.map((cat, catIndex) => (
              <div
                key={cat.label}
                className={`grid grid-cols-[120px_1fr_1fr_1fr] gap-4 py-6 ${
                  catIndex < categories.length - 1 ? 'border-b border-border' : ''
                }`}
              >
                <div className="flex items-start">
                  <span className="text-accent font-semibold text-sm uppercase tracking-wide">
                    {cat.label}
                  </span>
                </div>
                {cat.values.map((val, i) => (
                  <p key={i} className="text-body text-sm leading-relaxed">
                    {val}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenchmarkSection;
