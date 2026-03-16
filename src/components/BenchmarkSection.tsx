import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/contexts/LanguageContext';
import tuttiImg from '@/assets/benchmark-tutti.png';
import mannoImg from '@/assets/benchmark-manno.jpg';
import justlifeImg from '@/assets/benchmark-justlife.png';

const BenchmarkSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: tableRef, isVisible: tableVisible } = useScrollAnimation({ threshold: 0.1 });
  const { t } = useLanguage();

  const competitors = [
    { name: 'Tutti', image: tuttiImg },
    { name: 'Manno', image: mannoImg },
    { name: 'JustLife', image: justlifeImg },
  ];

  const categories = [
    {
      label: t('benchmark.visual'),
      values: [t('benchmark.visual.tutti'), t('benchmark.visual.manno'), t('benchmark.visual.justlife')],
    },
    {
      label: t('benchmark.interaction'),
      values: [t('benchmark.interaction.tutti'), t('benchmark.interaction.manno'), t('benchmark.interaction.justlife')],
    },
    {
      label: t('benchmark.vocabulary'),
      values: [t('benchmark.vocabulary.tutti'), t('benchmark.vocabulary.manno'), t('benchmark.vocabulary.justlife')],
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
          <span className="text-accent font-medium tracking-wide uppercase text-sm">{t('benchmark.label')}</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mt-3 mb-6">{t('benchmark.title')}</h2>
          <p className="text-body text-lg max-w-3xl leading-relaxed">{t('benchmark.description')}</p>
        </div>

        <div
          ref={tableRef}
          style={{
            opacity: tableVisible ? 1 : 0,
            transform: tableVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <div className="grid grid-cols-[120px_1fr_1fr_1fr] gap-4 mb-8">
            <div />
            {competitors.map((c) => (
              <div key={c.name} className="flex flex-col items-center gap-3">
                <div className="bg-muted rounded-2xl p-3 w-full aspect-[9/16] overflow-hidden flex items-center justify-center">
                  <img src={c.image} alt={`${c.name} app screenshot`} className="w-full h-full object-cover rounded-xl" />
                </div>
                <h4 className="font-display text-lg md:text-xl font-semibold">{c.name}</h4>
              </div>
            ))}
          </div>

          <div className="space-y-0">
            {categories.map((cat, catIndex) => (
              <div
                key={cat.label}
                className={`grid grid-cols-[120px_1fr_1fr_1fr] gap-4 py-6 ${catIndex < categories.length - 1 ? 'border-b border-border' : ''}`}
              >
                <div className="flex items-start">
                  <span className="text-accent font-semibold text-sm uppercase tracking-wide">{cat.label}</span>
                </div>
                {cat.values.map((val, i) => (
                  <p key={i} className="text-body text-sm leading-relaxed">{val}</p>
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
