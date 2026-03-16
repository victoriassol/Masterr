import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/contexts/LanguageContext';
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

const TestingCard = ({ testCase, index, problemLabel, solutionLabel, beforeLabel, afterLabel }: { testCase: TestingCase; index: number; problemLabel: string; solutionLabel: string; beforeLabel: string; afterLabel: string }) => {
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
            <h4 className="font-display text-lg font-semibold mb-1">{problemLabel}</h4>
            <p className="text-body leading-relaxed">{testCase.problem}</p>
          </div>
        </div>

        <div className="flex items-start gap-4 mb-8">
          <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
            <span className="text-emerald-700 font-bold text-lg">✓</span>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-1">{solutionLabel}</h4>
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
        <PhoneFrame image={testCase.beforeImage} label={beforeLabel} />
        <div className="hidden md:flex items-center text-muted-foreground">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
          </svg>
        </div>
        <PhoneFrame image={testCase.afterImage} label={afterLabel} />
      </div>
    </div>
  );
};

const UserTestingSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { t } = useLanguage();

  const cases: TestingCase[] = [
    {
      beforeImage: chatBefore,
      afterImage: chatAfter,
      problem: t('testing.case1.problem'),
      solution: t('testing.case1.solution'),
      quote: t('testing.case1.quote'),
    },
    {
      beforeImage: describiBefore,
      afterImage: perfilCarlos,
      problem: t('testing.case2.problem'),
      solution: t('testing.case2.solution'),
      quote: t('testing.case2.quote'),
    },
    {
      beforeImage: chatPrestador,
      afterImage: chatAfter2,
      problem: t('testing.case3.problem'),
      solution: t('testing.case3.solution'),
      quote: t('testing.case3.quote'),
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
          <span className="text-accent font-medium tracking-wide uppercase text-sm">{t('testing.label')}</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mt-3 mb-6">{t('testing.title')}</h2>
          <p className="text-body text-lg max-w-2xl mx-auto leading-relaxed">{t('testing.description')}</p>
        </div>

        <div className="flex flex-col gap-12">
          {cases.map((testCase, i) => (
            <TestingCard
              key={i}
              testCase={testCase}
              index={i}
              problemLabel={t('testing.problemLabel')}
              solutionLabel={t('testing.solutionLabel')}
              beforeLabel={t('testing.before')}
              afterLabel={t('testing.after')}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserTestingSection;
