import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import chatBefore from '@/assets/screens/chat-before.png';
import chatAfter from '@/assets/screens/chat-after.png';
import describiBefore from '@/assets/screens/describi-before.png';
import perfilCarlos from '@/assets/screens/perfil-carlos.png';
import chatPrestador from '@/assets/screens/chat-prestador.png';
import chatAfter2 from '@/assets/screens/chat-after-2.png';

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-surface-elevated">
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
