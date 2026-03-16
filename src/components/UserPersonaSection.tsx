import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/contexts/LanguageContext';
import florenciaImg from '@/assets/team/florencia-persona.png';

const UserPersonaSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation({ threshold: 0.2 });
  const { t } = useLanguage();

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
          <span className="text-accent font-medium tracking-wide uppercase text-sm">{t('persona.label')}</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mt-3 mb-6">{t('persona.title')}</h2>
          <p className="text-body text-lg max-w-3xl leading-relaxed">{t('persona.description')}</p>
        </div>

        <div
          ref={cardRef}
          className="bg-card rounded-3xl border border-border shadow-lg overflow-hidden"
          style={{
            opacity: cardVisible ? 1 : 0,
            transform: cardVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 150ms'
          }}
        >
          <div className="grid md:grid-cols-3 gap-0">
            <div className="p-8 flex flex-col" style={{ backgroundColor: 'hsl(81 40% 90%)' }}>
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-muted flex items-center justify-center mb-6 overflow-hidden">
                <img src={florenciaImg} alt="Florencia" className="w-full h-full object-cover" />
              </div>
              <blockquote className="text-lg md:text-xl font-medium italic text-foreground mb-8 leading-relaxed">
                {t('persona.quote')}
              </blockquote>
              <div>
                <h4 className="font-display font-semibold text-sm uppercase tracking-wide text-accent mb-3">{t('persona.bioLabel')}</h4>
                <p className="text-body text-sm leading-relaxed">{t('persona.bio')}</p>
              </div>
            </div>

            <div className="p-8 border-t md:border-t-0 md:border-l border-border">
              <div className="mb-8">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">Florencia</h3>
                <p className="text-body text-lg">{t('persona.age')}</p>
              </div>
              <div className="mb-8">
                <h4 className="font-display font-semibold text-sm uppercase tracking-wide text-accent mb-3">{t('persona.skillsLabel')}</h4>
                <ul className="space-y-2 text-body text-sm">
                  <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span>{t('persona.skill1')}</li>
                  <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span>{t('persona.skill2')}</li>
                  <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span>{t('persona.skill3')}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-display font-semibold text-sm uppercase tracking-wide text-accent mb-3">{t('persona.goalsLabel')}</h4>
                <ul className="space-y-2 text-body text-sm">
                  <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span>{t('persona.goal1')}</li>
                  <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span>{t('persona.goal2')}</li>
                </ul>
              </div>
            </div>

            <div className="p-8 border-t md:border-t-0 md:border-l border-border">
              <div className="mb-8">
                <h4 className="font-display font-semibold text-sm uppercase tracking-wide text-accent mb-3">{t('persona.motivationsLabel')}</h4>
                <ul className="space-y-2 text-body text-sm">
                  <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span>{t('persona.motivation1')}</li>
                  <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span>{t('persona.motivation2')}</li>
                  <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span>{t('persona.motivation3')}</li>
                  <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span>{t('persona.motivation4')}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-display font-semibold text-sm uppercase tracking-wide text-destructive mb-3">{t('persona.frustLabel')}</h4>
                <ul className="space-y-2 text-body text-sm">
                  <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span>{t('persona.frust1')}</li>
                  <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span>{t('persona.frust2')}</li>
                  <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span>{t('persona.frust3')}</li>
                  <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span>{t('persona.frust4')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserPersonaSection;
