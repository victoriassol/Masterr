import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
import SurveyChart from "./SurveyChart";
import InsightCard from "./InsightCard";

const ResearchSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { t } = useLanguage();

  return (
    <section id="research" className="py-24 px-6 md:px-12 lg:px-24 bg-surface-elevated">
      <div className="max-w-6xl mx-auto">
        <div
          ref={titleRef}
          className={`mb-16 ${titleVisible ? "opacity-100" : "opacity-0"}`}
          style={{
            transform: titleVisible ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <span className="text-accent font-medium tracking-wide uppercase text-sm">{t('research.methodLabel')}</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mt-3 mb-6">
            {t('research.title')}
          </h2>
          <p className="text-body text-lg max-w-3xl leading-relaxed">
            {t('research.description')}
          </p>
        </div>

        <div className="mt-20">
          <div className="mb-12">
            <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4">{t('research.surveysTitle')}</h3>
            <p className="text-body text-lg max-w-2xl">{t('research.sampleSize')}</p>
          </div>

          <div className="space-y-8">
            <SurveyChart
              direction="left"
              delay={0}
              title={t('survey.q1.title')}
              description={t('survey.q1.desc')}
              bars={[
                { label: t('bar.plumbing'), value: 44, color: "#FB3748" },
                { label: t('bar.masonry'), value: 31, color: "#222587" },
                { label: t('bar.appliances'), value: 31, color: "#14934F" },
                { label: t('bar.electrical'), value: 30, color: "#F6FF4A" },
                { label: t('bar.painting'), value: 12, color: "#BAFD3E" },
                { label: t('bar.moving'), value: 10, color: "#FB3748" },
              ]}
            />
            <SurveyChart
              direction="right"
              delay={150}
              title={t('survey.q2.title')}
              description={t('survey.q2.desc')}
              bars={[
                { label: t('bar.referrals'), value: 49, color: "#FB3748" },
                { label: t('bar.social'), value: 15, color: "#222587" },
                { label: t('bar.signs'), value: 6, color: "#14934F" },
                { label: t('bar.realEstate'), value: 1, color: "#F6FF4A" },
              ]}
            />
            <SurveyChart
              direction="left"
              delay={300}
              title={t('survey.q3.title')}
              description={t('survey.q3.desc')}
              bars={[
                { label: t('bar.reputation'), value: 44, color: "#FB3748" },
                { label: t('bar.price'), value: 41, color: "#222587" },
                { label: t('bar.experience'), value: 18, color: "#14934F" },
                { label: t('bar.availability'), value: 11, color: "#F6FF4A" },
                { label: t('bar.certifications'), value: 5, color: "#BAFD3E" },
              ]}
            />
          </div>
        </div>

        <div className="mt-24">
          <div className="mb-12">
            <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4">{t('research.interviewsTitle')}</h3>
            <p className="text-body text-lg max-w-2xl">{t('research.interviewSample')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <InsightCard number={1} title={t('insight.1.title')} description={t('insight.1.desc')} delay={0} />
            <InsightCard number={2} title={t('insight.2.title')} description={t('insight.2.desc')} delay={150} />
            <InsightCard number={3} title={t('insight.3.title')} description={t('insight.3.desc')} delay={300} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
