import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import moodboardImg from '@/assets/moodboard.png';

const MoodboardSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: imgRef, isVisible: imgVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-surface">
      <div className="max-w-5xl mx-auto">
        <div
          ref={titleRef}
          className="text-center mb-12"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <span className="text-accent font-medium tracking-wide uppercase text-sm">
            Inspiración
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mt-3 mb-6">
            Moodboard
          </h2>
          <p className="text-body text-lg max-w-2xl mx-auto leading-relaxed">
            Referencias visuales que guían la identidad y el tono del producto.
          </p>
        </div>

        <div
          ref={imgRef}
          className="rounded-2xl overflow-hidden shadow-xl border border-border"
          style={{
            opacity: imgVisible ? 1 : 0,
            transform: imgVisible ? 'scale(1)' : 'scale(0.95)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s',
          }}
        >
          <img
            src={moodboardImg}
            alt="Moodboard con referencias visuales del proyecto"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default MoodboardSection;
