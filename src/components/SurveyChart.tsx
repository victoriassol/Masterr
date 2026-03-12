import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface BarData {
  label: string;
  value: number;
  color: string;
}

interface SurveyChartProps {
  direction: 'left' | 'right';
  delay: number;
  title: string;
  description: string;
  bars: BarData[];
}

const SurveyChart = ({ direction, delay, title, description, bars }: SurveyChartProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  return (
    <div
      ref={ref}
      className={`bg-card rounded-2xl p-8 shadow-sm border border-border overflow-hidden`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible 
          ? 'translateX(0)' 
          : `translateX(${direction === 'left' ? '-60px' : '60px'})`,
        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
      }}
    >
      <div className="flex flex-col lg:flex-row lg:items-start gap-8">
        <div className="lg:w-1/3">
          <h4 className="font-display text-xl font-semibold mb-2">{title}</h4>
          <p className="text-body text-sm">{description}</p>
        </div>
        
        <div className="lg:w-2/3 space-y-4">
          {bars.map((bar, index) => (
            <div key={index} className="flex items-center gap-4">
              <span className="text-sm text-body w-32 shrink-0">{bar.label}</span>
              <div className="flex-1 h-8 bg-secondary rounded-lg overflow-hidden">
                <div 
                  className="h-full rounded-lg transition-all duration-1000 ease-out"
                  style={{ 
                    width: `${bar.value}%`,
                    backgroundColor: bar.color,
                    opacity: isVisible ? 1 : 0,
                    transitionDelay: `${delay + index * 100}ms`
                  }}
                />
              </div>
              <span className="text-sm font-medium w-12 text-right">{bar.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SurveyChart;
