import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import listaPrestadores from '@/assets/screens/lista-prestadores.png';
import perfilCarlos from '@/assets/screens/perfil-carlos.png';
import chatPrestador from '@/assets/screens/chat-prestador.png';
import detalle from '@/assets/screens/detalle.png';

interface PainSolution {
  pain: string;
  solution: string;
}

interface PhoneMockupProps {
  image: string;
  number: number;
  description: string;
  details: PainSolution[];
  delay: number;
  reverse?: boolean;
}

const PainSolutionCard = ({ pain, solution, isVisible, delay }: { pain: string; solution: string; isVisible: boolean; delay: number }) => (
  <div 
    className="flex flex-col w-full rounded-xl overflow-hidden border border-border shadow-sm"
    style={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
    }}
  >
    {/* Pain */}
    <div className="w-full bg-destructive/10 px-5 py-3.5">
      <span className="text-sm md:text-base font-semibold text-destructive">✗ {pain}</span>
    </div>

    {/* Solution */}
    <div className="w-full bg-emerald-50 px-5 py-3.5 border-t border-border">
      <span className="text-sm md:text-base font-semibold text-emerald-800">✓ {solution}</span>
    </div>
  </div>
);

const PhoneMockup = ({ image, number, description, details, delay, reverse }: PhoneMockupProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${reverse ? 'md:flex-row-reverse' : ''}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
      }}
    >
      {/* Phone Frame */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative bg-[#1a1a1a] rounded-[2.5rem] p-3 shadow-2xl">
          <div className="relative bg-white rounded-[2rem] overflow-hidden w-[280px] h-[607px]">
            <img 
              src={image} 
              alt={description}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#1a1a1a] rounded-full" />
        </div>
      </div>

      {/* Content */}
      <div className={`w-full md:w-1/2 flex flex-col ${reverse ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} items-center text-center`}>
        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-4">
          <span className="text-accent-foreground font-display text-xl font-bold">{number}</span>
        </div>
        <h3 className="font-display font-semibold text-xl md:text-2xl mb-6">
          {description}
        </h3>
        <div className="flex flex-col gap-5 w-full max-w-sm">
          {details.map((detail, i) => (
            <PainSolutionCard 
              key={i} 
              pain={detail.pain} 
              solution={detail.solution} 
              isVisible={isVisible}
              delay={delay + 300 + i * 200}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductShowcase = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  const screens = [
    {
      image: listaPrestadores,
      number: 1,
      description: 'Buscá prestadores del servicio que necesites',
      details: [
        { pain: 'Dispersión de canales de búsqueda', solution: 'Toda la oferta en un solo lugar' },
      ],
    },
    {
      image: perfilCarlos,
      number: 2,
      description: 'Revisá su perfil y reseñas',
      details: [
        { pain: 'Dependencia del boca a boca', solution: 'Reseñas verificadas de la comunidad' },
        { pain: 'Desconocimiento sobre el costo esperado', solution: 'Tarifa promedio visible para decisiones informadas' },
      ],
    },
    {
      image: chatPrestador,
      number: 3,
      description: 'Pactá condiciones y comenzá el servicio',
      details: [
        { pain: 'Comunicación fragmentada', solution: 'Mensajería integrada con el prestador' },
        { pain: 'Expectativas no alineadas entre cliente y profesional', solution: 'Condiciones del servicio acordadas antes de comenzar' },
      ],
    },
    {
      image: detalle,
      number: 4,
      description: 'Accedé al detalle del servicio y finalizá dejando tu reseña',
      details: [
        { pain: 'Percepción de costos arbitrarios', solution: 'Historial con desglose de tarifas' },
      ],
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={titleRef}
          className={`text-center mb-16 ${titleVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            transform: titleVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <span className="text-accent font-medium tracking-wide uppercase text-sm">
            Producto
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mt-3 mb-6">
            Flujo principal de la app
          </h2>
          <p className="text-body text-lg max-w-2xl mx-auto leading-relaxed">
            Un recorrido simple y transparente desde la búsqueda hasta la reseña final.
          </p>
        </div>

        <div className="flex flex-col gap-16 md:gap-20">
          {screens.map((screen, index) => (
            <PhoneMockup
              key={index}
              image={screen.image}
              number={screen.number}
              description={screen.description}
              details={screen.details}
              delay={index * 150}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
