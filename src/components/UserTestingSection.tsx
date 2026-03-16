import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import chatBefore from '@/assets/screens/chat-before.png';
import chatAfter from '@/assets/screens/chat-after.png';
import describiBefore from '@/assets/screens/describi-before.png';
import perfilCarlos from '@/assets/screens/perfil-carlos.png';
import chatPrestador from '@/assets/screens/chat-prestador.png';
import chatAfter2 from '@/assets/screens/chat-after-2.png';

interface TestingCase {
  beforeImage: string;
  afterImage: string;
  problem: string;
  solution: string;
  quote: string;
}

const PhoneFrame = ({ image, label }: { image: string; label: string }) => (
  <div className="flex flex-col items-center gap-3">
    <span className="text-xs font-medium tracking-wide uppercase text-muted-foreground">{label}</span>
    <div className="relative bg-[#1a1a1a] rounded-[2.5rem] p-3 shadow-2xl">
      <div className="relative bg-white rounded-[2rem] overflow-hidden w-[200px] h-[433px] md:w-[220px] md:h-[477px]">
        <img src={image} alt={label} className="w-full h-full object-cover object-top" />
      </div>
      <div className="absolute top-5 left-1/2 -translate-x-1/2 w-16 h-5 bg-[#1a1a1a] rounded-full" />
    </div>
  </div>
);

const TestingCard = ({ testCase, index }: { testCase: TestingCase; index: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 200}ms`,
      }}
    >
      <div className="p-8 md:p-10">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center shrink-0 mt-0.5">
            <span className="text-destructive font-bold text-lg">✗</span>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-1">Problema</h4>
            <p className="text-body leading-relaxed">{testCase.problem}</p>
          </div>
        </div>

        <div className="flex items-start gap-4 mb-8">
          <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
            <span className="text-emerald-700 font-bold text-lg">✓</span>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-1">Solución</h4>
            <p className="text-body leading-relaxed">{testCase.solution}</p>
          </div>
        </div>

        <blockquote className="border-l-4 border-accent pl-5 py-2 bg-accent-soft/30 rounded-r-lg">
          <p className="text-body italic text-sm md:text-base leading-relaxed">
            "{testCase.quote}"
          </p>
        </blockquote>
      </div>

      <div className="bg-surface px-8 py-10 flex flex-wrap justify-center gap-8 md:gap-14">
        <PhoneFrame image={testCase.beforeImage} label="Antes" />
        <div className="hidden md:flex items-center text-muted-foreground">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
          </svg>
        </div>
        <PhoneFrame image={testCase.afterImage} label="Después" />
      </div>
    </div>
  );
};

const UserTestingSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  const cases: TestingCase[] = [
    {
      beforeImage: chatBefore,
      afterImage: chatAfter,
      problem: 'No queda claro el momento en el que aceptás la solicitud de servicio',
      solution: 'Añadir más información en la solicitud de servicio, con íconos respectivos: título del problema, precio y fecha de la visita',
      quote: 'Me gustaría confirmar lo que estoy aceptando, es una transacción',
    },
    {
      beforeImage: describiBefore,
      afterImage: perfilCarlos,
      problem: 'El mensaje de contacto inicial no debe ser el mismo para todos los prestadores',
      solution: 'Enviar un mensaje individual a cada prestador luego de evaluar su perfil',
      quote: 'Estoy metiendo a alguien a mi casa, me quiero tomar el tiempo de contactar a cada prestador de forma personalizada. No es algo automático',
    },
    {
      beforeImage: chatPrestador,
      afterImage: chatAfter2,
      problem: 'El botón de "ver servicio en curso" es pasado por alto por los usuarios',
      solution: 'Reemplazar el enlace pasivo por una alerta visual destacada con un botón de acción claro que guíe al usuario hacia el servicio en curso',
      quote: 'Parece un alerta, no un botón',
    },
  ];

  return (
    <section id="testing" className="py-24 px-6 md:px-12 lg:px-24 bg-surface-elevated">
      <div className="max-w-5xl mx-auto">
        <div
          ref={titleRef}
          className="text-center mb-16"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <span className="text-accent font-medium tracking-wide uppercase text-sm">
            Validación
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mt-3 mb-6">
            User Testing
          </h2>
          <p className="text-body text-lg max-w-2xl mx-auto leading-relaxed">
            Hallazgos clave de las pruebas con usuarios y cómo iteramos el diseño para resolverlos.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {cases.map((testCase, i) => (
            <TestingCard key={i} testCase={testCase} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserTestingSection;
