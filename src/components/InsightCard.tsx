import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface InsightCardProps {
  number: number;
  title: string;
  description: string;
  delay: number;
}

const InsightCard = ({ number, title, description, delay }: InsightCardProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <div
      ref={ref}
      className="bg-card rounded-2xl p-8 shadow-sm border border-border"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
      }}
    >
      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
        <span className="text-accent font-display text-xl font-semibold">{number}</span>
      </div>
      <h4 className="font-display text-lg font-semibold mb-3 leading-snug">
        "{title}"
      </h4>
      <p className="text-body text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default InsightCard;
