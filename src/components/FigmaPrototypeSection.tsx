import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const FigmaPrototypeSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="prototype" className="py-24 px-6 md:px-12 lg:px-24 bg-background">
      <div
        ref={ref}
        className="max-w-3xl mx-auto text-center"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <span className="text-accent font-medium tracking-wide uppercase text-sm">
          Prototipo
        </span>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mt-3 mb-6">
          Explorá el diseño completo
        </h2>
        <p className="text-body text-lg mb-10 leading-relaxed">
          Navegá el prototipo interactivo en Figma para ver todos los flujos y pantallas del proyecto.
        </p>
        <a
          href="https://www.figma.com/design/31TjUM5dCXylapJCteqJTE/Masterr-UX-UI-Project?node-id=0-1&t=aZZapT5B2HZqegRu-1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-5 rounded-2xl text-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          <svg className="w-7 h-7" viewBox="0 0 38 57" fill="none">
            <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
            <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
            <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
            <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
            <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
          </svg>
          Ver prototipo en Figma
        </a>
      </div>
    </section>
  );
};

export default FigmaPrototypeSection;
