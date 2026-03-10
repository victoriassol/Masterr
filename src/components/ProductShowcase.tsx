import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ChevronDown } from 'lucide-react';
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
    className="flex flex-col items-center gap-2 w-full"
    style={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
    }}
  >
    {/* Pain */}
    <div className="w-full rounded-xl bg-destructive/15 px-5 py-3.5 text-center">
      <span className="text-sm md:text-base font-medium text-destructive">{pain}</span>
    </div>
    
    {/* Chevrons */}
    <div className="flex flex-col items-center -my-1">
      <ChevronDown className="w-5 h-5 text-accent opacity-80" style={{ animation: isVisible ? 'bounce-chevron 1.5s ease-in-out infinite' : 'none' }} />
      <ChevronDown className="w-5 h-5 text-accent opacity-60 -mt-2" style={{ animation: isVisible ? 'bounce-chevron 1.5s ease-in-out 0.15s infinite' : 'none' }} />
      <ChevronDown className="w-5 h-5 text-accent opacity-40 -mt-2" style={{ animation: isVisible ? 'bounce-chevron 1.5s ease-in-out 0.3s infinite' : 'none' }} />
    </div>

    {/* Solution */}
    <div className="w-full rounded-xl bg-emerald-100 px-5 py-3.5 text-center">
      <span className="text-sm md:text-base font-medium text-emerald-700">{solution}</span>
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
