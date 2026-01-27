import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import listaPrestadores from '@/assets/screens/lista-prestadores.png';
import perfilCarlos from '@/assets/screens/perfil-carlos.png';
import chatPrestador from '@/assets/screens/chat-prestador.png';
import detalle from '@/assets/screens/detalle.png';

interface PhoneMockupProps {
  image: string;
  number: number;
  description: string;
  delay: number;
}

const PhoneMockup = ({ image, number, description, delay }: PhoneMockupProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className="flex flex-col items-center"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
      }}
    >
      {/* Phone Frame */}
      <div className="relative">
        {/* Phone bezel */}
        <div className="relative bg-[#1a1a1a] rounded-[2.5rem] p-2 shadow-2xl">
          {/* Screen */}
          <div className="relative bg-white rounded-[2rem] overflow-hidden w-[180px] h-[390px] md:w-[200px] md:h-[433px] lg:w-[220px] lg:h-[476px]">
            <img 
              src={image} 
              alt={description}
              className="w-full h-full object-cover object-top"
            />
          </div>
          {/* Notch */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-5 bg-[#1a1a1a] rounded-full" />
        </div>
      </div>

      {/* Number circle */}
      <div className="mt-8 w-12 h-12 rounded-full bg-accent flex items-center justify-center">
        <span className="text-accent-foreground font-display text-xl font-bold">{number}</span>
      </div>

      {/* Description */}
      <p className="mt-4 text-center text-body text-sm md:text-base max-w-[200px] leading-relaxed">
        {description}
      </p>
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
    },
    {
      image: perfilCarlos,
      number: 2,
      description: 'Revisá su perfil y reseñas',
    },
    {
      image: chatPrestador,
      number: 3,
      description: 'Pactá condiciones y comenzá el servicio',
    },
    {
      image: detalle,
      number: 4,
      description: 'Accedé al detalle del servicio y finalizá dejando tu reseña',
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

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {screens.map((screen, index) => (
            <PhoneMockup
              key={index}
              image={screen.image}
              number={screen.number}
              description={screen.description}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
